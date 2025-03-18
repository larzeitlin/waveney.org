(ns waveney.layers.pubs
  (:require [waveney.app-state :refer [app-state]]
            [waveney.carto :as carto]))

(def example-pubs-data
  [{:name "Bear & Bells"
    :location {:type "Point" :coordinates [1.5646 52.4595]}
    :link "https://suffolk.camra.org.uk/pub/52"}

   {:name "Angel Inn"
    :location {:type "Point" :coordinates [1.62014 52.35561]}
    :link "https://suffolk.camra.org.uk/pub/988"}

   {:name "Bell Inn"
    :location {:type "Point" :coordinates [1.62255 52.53719]}
    :link "https://suffolk.camra.org.uk/pub/2716"}

   {:name "Wherry Inn"
    :location {:type "Point" :coordinates [1.5151 52.4724]}
    :link "https://suffolk.camra.org.uk/pub/101"}

   {:name "Locks Inn"
    :location {:type "Point" :coordinates [1.5095 52.4726]}
    :link "https://bigdogferry.co.uk/the-locks-inn/"}

   {:name "The Waveney House Hotel"
    :location {:type "Point" :coordinates [1.5610 52.4590]}
    :link "https://suffolk.camra.org.uk/pub/102"}

   {:name "Commodore"
    :location {:type "Point" :coordinates [1.71093 52.4761]}
    :link "https://suffolk.camra.org.uk/pub/793"}

   {:name "Wherry Hotel"
    :location {:type "Point" :coordinates [1.7073 52.4738]}
    :link "https://suffolk.camra.org.uk/pub/794"}

   {:name "Duke's Head"
    :location {:type "Point" :coordinates [1.6712 52.5109]}
    :link "https://suffolk.camra.org.uk/pub/795"}

   {:name "Burgh Castle Inn"
    :location {:type "Point" :coordinates [1.6520 52.5836]}
    :link "https://suffolk.camra.org.uk/pub/796"}])

(defn view []
  (carto/update-vector-layer-features! (map (comp :coordinates :location) example-pubs-data))
  (swap! app-state assoc :features (map (comp :coordinates :location) example-pubs-data))
  [:h3 "Selected pub"])
