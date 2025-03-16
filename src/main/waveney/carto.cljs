(ns waveney.carto
  (:require ["ol/proj" :as ol-proj]
            ["ol/layer/Tile$default" :as ol-Tile]
            ["ol/Map$default" :as ol-Map]
            ["ol/source/OSM$default" :as ol-OSM]
            ["ol/source/XYZ$default" :as ol-XYZ]
            ["ol/View$default" :as ol-View]
            [waveney.env :as env]
            [waveney.app-state :refer [app-state]]
            [oops.core :refer [ocall oget]]
            [waveney.app-state :refer [app-state]]
            [waveney.integrations.openweather :as ow]))


(defn base-layer []
  (let [layer (ol-Tile.
               (clj->js {:source (ol-OSM.)
                         :properties {:layer-name "base"}}))]
    layer))


(defn weather-layer []
  (let [layer (ol-Tile.
               (clj->js {:source (ol-XYZ.
                                  (clj->js {:url "" 
                                            :attributions "&copy; <a href=\"https://openweathermap.org/\">OpenWeatherMap</a>"}))
                         :opacity 1
                         :properties {:layer-name "weather"}}))]
    layer))

(def centerpoint [1.2375777300280788
                  52.468247948753316])

(def waveney-extent [0.20094809414538872
                     52.116568343156075
                     1.8549922442829825
                     52.76893220698773] )

(defn- get-clicked-coord [evnt]
  (let [coords (oget evnt "coordinate")]
    (swap! app-state assoc :clicked-location (js->clj coords))
    (ow/get-forecast (js->clj coords))))

(defn init-map-widget []
  (ol-proj/useGeographic.)
  (let [ol-map

        (ol-Map.
         (clj->js
          {:layers [(base-layer)
                    (weather-layer)]
           :target "map"
           :view (ol-View.
                  (clj->js {:center centerpoint

                            :zoom 10
                            :extent waveney-extent}))}))]
    (ocall ol-map "on" "click" get-clicked-coord)
    ol-map))

(defn layer->name [layer]
  (ocall layer "get" "layer-name"))

(defn map->layers [ol-map]
  (-> ol-map
      (ocall "getLayers")
      (ocall "getArray")))

(defn get-layer-by-name [ol-map layer-name]
  (->> ol-map
       map->layers
       (filter #(= (layer->name %) layer-name))
       first))

(defn update-weather-url! [url]
  (let [layer (get-layer-by-name (:ol-map @app-state) "weather")
        source (ocall layer "getSource")]
    (ocall source "setUrl" url)))
