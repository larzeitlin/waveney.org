(ns waveney.integrations.openweather
  (:require [waveney.env :as env]
            [waveney.app-state :refer [app-state]]))

(defn ->weather-map-url [ow-layer-id]
  (str "https://tile.openweathermap.org/map/"
       ow-layer-id
       "/{z}/{x}/{y}.png?appid="
       env/OPENWEATHER_API_KEY))

(defn coords->forecast-url [[lon lat]]
  (str
   "https://api.open-meteo.com/v1/forecast?latitude="
   lat
   "&longitude="
   lon
   "&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"))

(defn get-request [url callback]
  (-> (js/fetch url
                (clj->js {:method "GET"
                          :headers {"Content-Type" "application/json"}}))
      (.then (fn [response]
               (.json response)))
      (.then (fn [response]
               (swap! app-state assoc :weather-at-loc
                      (js->clj response :keywordize-keys true))))
      (.catch (fn [error]
                (js/console.error "Error:" error)))))

(defn get-forecast [lon-lat]
  (let [url (coords->forecast-url lon-lat)]
    (get-request url (js/console.log))))
