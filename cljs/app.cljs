(ns app
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

;; Define our components
(defn header []
  [:header
   [:h1 "waveney.org"]])

(defn coming-soon []
  [:div.coming-soon
   [:h2 "Coming Soon"]
   [:p "Meandering through the ecology, culture and history of East Anglia. To work with us reach out with the contact link below, or sign up to our mailing list for updates."]])

(defn category [title]
  [:div.category
   [:h3 title]])

(defn categories []
  [:div.categories
   [category "Wildlife"]
   [category "History"]
   [category "Folklore"]
   [category "Music"]
   [category "Art"]
   [category "Events"]
   [category "Conservation"]])

(defn join-mail-list []
  [:div.join
   [:h3 "Sign up to stay updated"]
   [:input {:type "email"
            :id "email"
            :name "email"
            :placeholder "enter email address"}]
   [:button "Submit"]])

(defn footer []
  [:footer
   [:p "© 2025 Waveney.org" "  "
    [:a {:href "mailto:waveney.vixen400@passfwd.com"}
     "Contact us"]]])

;; Main app component
(defn app []
  [:div
   [header]
   [:div.container
    [coming-soon]
    [categories]
    [join-mail-list]]
   [footer]])

;; Render the app
(rdom/render [app] (js/document.getElementById "app"))
