(ns waveney.app
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as string]
            [waveney.useful-links :as useful-links]
            [waveney.db :as db]
            [waveney.carto :as carto]))

(defn header []
  [:header
   [:h1 "waveney.org"]])

(defn coming-soon []
  [:div.coming-soon
   [:h2 "Coming Soon"]
   [:p "Meandering through the ecology, culture and history of the Waveney Valley region."
    [:br]
    "•"
    [:br]
    "A homegrown online hub away from the corporate web."
    [:br]
    "•"
    [:br]
    "To contribute please reach out with the contact link below, or sign up to our mailing list for updates."]])

(defn category [title]
  [:button.category
   [:h3 title]])

(def categories-list
  ["Wildlife"
   "History"
   "Folklore"
   "Trails"
   "Music"
   "Art"
   "Activities"
   "Pubs"
   "Events"
   "Ecology"
   "Photos"
   "Weather"])

(defn categories []
  (->> categories-list
       (map #(vector category %))
       (into [:div.categories])))

;; Mailing list signup

(defonce email* (r/atom ""))

(defn reset-email-field-to-empty []
  (reset! email* ""))

(defn validish-email? [email]
  (boolean (re-matches #"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" email)))

(defn join-mail-list []
  (let [email @email*
        submit-button-disabled? (not (validish-email? email))]
    [:div.join
     [:h3 "Sign up to stay updated"]
     [:input {:type "email"
              :id "email"
              :name "email"
              :value email
              :on-change #(reset! email* (-> % .-target .-value))
              :placeholder "enter email address"}]
     [:button {:on-click (db/join-mail-list-req email reset-email-field-to-empty)
               :disabled submit-button-disabled?
               :style {:background-color (cond
                                           (string/blank? email) "gray"
                                           submit-button-disabled? "gray"
                                           :else "green")}}
      "Submit"]]))

(defn useful-links []
  [:div.useful-links
   [:h3 "Useful Links"]
   (into [:ul]
         (map (fn [[desc url]]
                [:li [:a {:href url}
                      desc]])
              useful-links/description->url))])

(defn footer []
  [:footer
   [:p "© 2025 Waveney.org" "  "
    [:a {:href "mailto:info@waveney.org"}
     "Contact us"]]])

;; Main app component
(defn app []
  [:div
   [header]
   [:div.container
    [coming-soon]
    [:div {:id "map"}]
    [categories]
    [useful-links]
    [join-mail-list]]
   [footer]])

;; Render the app
(defn init []
  (prn "init")
  (rdom/render [app]
               (js/document.getElementById "app"))

  (carto/init-map-widget))
