(ns waveney.carto
  (:require ["ol/proj" :as ol-proj]
            ["ol/layer/Tile$default" :as ol-Tile]
            ["ol/Map$default" :as ol-Map]
            ["ol/source/OSM$default" :as ol-OSM]
            ["ol/source/XYZ$default" :as ol-XYZ]
            ["ol/View$default" :as ol-View]
            [waveney.env :as env]))


(defn init-map-widget []
  (ol-proj/useGeographic.)
  (ol-Map.
   (clj->js
    {:layers [(ol-Tile.
               (clj->js {:source (ol-OSM.)}))
              (ol-Tile.
               (clj->js {:source (ol-XYZ.
                                  (clj->js {:url (str "https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid="
                                                      env/OPENWEATHER_API_KEY)
                                            :attributions "&copy; <a href=\"https://openweathermap.org/\">OpenWeatherMap</a>"}))
                         :opacity 0.7}))]
     :target "map"
     :view (ol-View.
            (clj->js {:center
                      [1.2375777300280788
                       52.468247948753316]
                      :zoom 10
                      :extent [0.20094809414538872
                               52.116568343156075
                               1.8549922442829825
                               52.76893220698773]}))})))
