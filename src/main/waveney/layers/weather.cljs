(ns waveney.layers.weather
  (:require [waveney.integrations.openweather :as ow]
            [waveney.app-state :refer [app-state]]
            [waveney.carto :as carto]))

(def weather-layers
  [{:display-name "Cloud Cover"
    :id ::cloud
    :map-url (ow/->weather-map-url "clouds_new")}
   {:display-name "Precipitation"
    :id ::precipitation
    :map-url (ow/->weather-map-url "precipitation_new")}])

(defn weather-layer->radio-button
  [{:keys [id display-name map-url] :as weather-layer}]
  [:div [:label.weather-layer {:for (name id)}
         display-name]
   [:input {:type "radio"
            :id (name id)
            :value (name id)
            :name "weather-layer"
            :checked (->> @app-state :weather-layer :id (= id))
            :on-click #(do (swap! app-state assoc :weather-layer
                                  weather-layer)
                           (carto/update-weather-url! map-url))}]])

(defn format-time [time-str]
  (let [[_ date time] (re-find #"(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})" time-str)]
    (str date " " time)))

(defn weather-data-table [{:keys [timezone longitude
                                  latitude hourly]}]
  (let [{:keys [time
                temperature_2m
                relative_humidity_2m
                wind_speed_10m]} hourly]
    [:div {:style {:overflow-x "scroll"}}
     [:div.data
      [:table
       [:tr
        (map (fn [t]
               [vector :td t])
             time)]
       [:tr
        (map (fn [temp]
               [:td 
                (str temp " °C")])
             temperature_2m)]
       [:tr
        (map (fn [hum]
               [:td [:h5 "Relative Humidity: "]
                hum])
             relative_humidity_2m)]]]]))


(defn view []
  (let [weather-data (:weather-at-loc @app-state)]
    [:div.weather-view 
     (into
      [:fieldset.weather-layer
       [:legend "Select a weather layer:"]]
      (map weather-layer->radio-button
           weather-layers))
     
     (if weather-data
       [weather-data-table weather-data]
       [:p "Click map to show forcast at location"])]))
