(ns waveney.carto
  (:require ["ol/proj" :as ol-proj]
            ["ol/layer/Tile$default" :as ol-Tile]
            ["ol/geom/Point$default" :as ol-Point]
            ["ol/layer/Vector$default" :as ol-VectorLayer]
            ["ol/source/Vector$default" :as ol-VectorSource]
            ["ol/style/Icon$default" :as ol-Icon]
            ["ol/style/Style$default" :as ol-Style]
            ["ol/Map$default" :as ol-Map]
            ["ol/source/OSM$default" :as ol-OSM]
            ["ol/source/XYZ$default" :as ol-XYZ]
            ["ol/View$default" :as ol-View]
            ["ol/Feature$default" :as ol-Feature]
            [waveney.env :as env]
            [waveney.app-state :refer [app-state]]
            [oops.core :refer [ocall oget]]
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

(def centerpoint
  [1.2375777300280788
   52.468247948753316])

(def waveney-extent
  [0.20094809414538872
   52.116568343156075
   1.8549922442829825
   52.76893220698773])

(defn icon-feature [coords]
  (let [icon-style
        (ol-Style.
         (clj->js
          {:image (ol-Icon.
                   (clj->js {:anchor [0.5 1.0]
                             :anchorXUnits "fraction"
                             :anchorYUnits "fraction"
                             :scale 0.1
                             :src "/assets/pointer.png"}))}))
        icon-feature
        (ol-Feature.
         (clj->js {:geometry (ol-Point. (clj->js coords))
                   :name "Null Island"
                   :population 4000
                   :rainfall 500}))]
    (ocall icon-feature "setStyle" icon-style)
    icon-feature))

(defn vector-source [features]
  (ol-VectorSource.
   (clj->js {:features features
             }
            )))

(defn vector-layer [features]
  (ol-VectorLayer.
   (clj->js {:source (vector-source
                      (map icon-feature features))
             :layer-name "features"})))

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
                    (weather-layer)
                    (vector-layer (:map-features @app-state))]
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

(defn update-vector-layer-features! [features]
  (let [layer (get-layer-by-name (:ol-map @app-state) "features")
        source (vector-source (map icon-feature features))]
    (ocall layer "setSource" source)))

(defn update-weather-url! [url]
  (let [layer (get-layer-by-name (:ol-map @app-state) "weather")
        source (ocall layer "getSource")]
    (ocall source "setUrl" url)))
