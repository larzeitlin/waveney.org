(ns waveney.layers.weather
  (:require [waveney.integrations.openweather :as ow]
            [waveney.app-state :refer [app-state]]
            [waveney.carto :as carto]
            ["recharts" :refer [ResponsiveContainer LineChart Line XAxis YAxis 
                                Tooltip Legend CartesianGrid]]))

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


(defn format-weather-data [{:keys [timezone longitude
                                   latitude hourly]}]
  (let [{:keys [time
                temperature_2m
                relative_humidity_2m
                wind_speed_10m]} hourly]
    (map
     (fn [time temp hum win]
       {:time time
        :temperature temp
        :humidity hum
        :wind win})
     time
     temperature_2m
     relative_humidity_2m
     wind_speed_10m)))



(defn weather-chart [data]
  [:> ResponsiveContainer {:width "100%" :height 300}
   [:> LineChart {:data data
                  :margin {:top 5 :right 30 :left 20 :bottom 5}}
    [:> CartesianGrid {:strokeDasharray "3 3"}]
    [:> XAxis {:dataKey "time"}]
    [:> YAxis]
    [:> Tooltip]
    [:> Legend]
    [:> Line {:type "monotone"
              :dataKey "temperature"
              :stroke "#ffa600"
              :dot false}]
    [:> Line {:type "monotone"
              :dataKey "humidity"
              :dot false
              :stroke "#bc5090"}]
    [:> Line {:type "monotone"
              :dataKey "wind"
              :dot false
              :stroke "#003f5c"}]]])

(defn view []
  (let [weather-data (:weather-at-loc @app-state)]
    [:div.weather-view
     (into
      [:fieldset.weather-layer
       [:legend "Current weather map:"]]
      (map weather-layer->radio-button
           weather-layers))

     (if weather-data
       [:div.forecast
        [:h3 {:style {:text-align "center"}}
         "Forecast at location: "
         (str (->> @app-state :clicked-location))]
        [weather-chart (format-weather-data weather-data)]]
       [:p "Click map to show forcast at location"])]))
