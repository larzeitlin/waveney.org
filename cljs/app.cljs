(ns app
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

;; Define our components
(defn header []
  [:header
   [:h1 "The Waveney Valley"]
   [:p "Exploring History & Ecology"]])

(defn coming-soon []
  [:div.coming-soon
   [:h2 "Coming Soon"]
   [:p "A comprehensive resource documenting the rich heritage and natural environment of the Waveney Valley."]])

(defn category [title]
  [:div.category
   [:h3 title]])

(defn categories []
  [:div.categories
   [category "History"]
   [category "Wildlife"]
   [category "Landscapes"]
   [category "Conservation"]])

(defn footer []
  [:footer
   [:p "© 2025 Waveney Valley Project"]])

;; Main app component
(defn app []
  [:div
   [header]
   [:div.container
    [coming-soon]
    [categories]]
   [footer]])

;; Render the app
(rdom/render [app] (js/document.getElementById "app"))
