(ns waveney.app
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as string]
            [waveney.db :as db]
            [waveney.carto :as carto]
            [waveney.layers.links :as layers.links]
            [waveney.layers.weather :as layers.weather]
            [waveney.app-state :refer [app-state]]))

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

(defn placeholder-view []
  [:h3 {:style {:text-align "center"}} "Coming Soon"])

(def views
  [{:id :view.wildlife
    :display-name "Wildlife"
    :view placeholder-view}
   {:id :view.history
    :display-name "History"
    :view placeholder-view}
   {:id :view.folklore
    :display-name "Folklore"
    :view placeholder-view}
   {:id :view.trails
    :display-name "trails"
    :view placeholder-view}
   {:id :view.music
    :display-name "Music"
    :view placeholder-view}
   {:id :view.art
    :display-name "Art"
    :view placeholder-view}
   {:id :view.activities
    :display-name "Activities"
    :view placeholder-view}
   {:id :view.pubs
    :display-name "Pubs"
    :view placeholder-view}
   {:id :view.events
    :display-name "Event"
    :view placeholder-view}
   {:id :view.weather
    :display-name "Weather"
    :view layers.weather/view}
   {:id :view.ecology
    :display-name "Ecology"
    :view placeholder-view}
   {:id :view.photos
    :display-name "Photos"
    :view placeholder-view}
   {:id :view.links
    :display-name "Links"
    :view layers.links/view}])

(def *view-state (r/atom
                  (->> views
                       (filter #(= :view.weather (:id %)))
                       first)))


(defn view-button [{:keys [id display-name] :as view}]
  [:button.category {:on-click #(reset! *view-state view)
                     :data-selected (= id (:id @*view-state))
                     :id id}
   [:h3 display-name]])

(defn view-buttons []
  (->> views
       (map #(vector view-button %))
       (into [:div.categories])))

(defn render-view [{:keys [display-name view]}]
  [:div.view [:h3 {:style {:text-align "center"}} display-name]
   [view]])

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
     [:button {:on-click #(db/join-mail-list-req email reset-email-field-to-empty)
               :disabled submit-button-disabled?
               :style {:background-color (cond
                                           (string/blank? email) "gray"
                                           submit-button-disabled? "gray"
                                           :else "green")}}
      "Submit"]]))

(defn footer []
  [:footer
   [:p "© 2025 Waveney.org" "  "
    [:a {:href "mailto:info@waveney.org"}
     "Contact us"]]])

;; Main app component
(defn app []
  [:div.main
   [header]
   [:div.container
    [coming-soon]
    [:div {:id "map"}]
    [view-buttons]
    [render-view @*view-state]
    #_[:p (str @app-state)]
    [join-mail-list]]
   [footer]])

;; Render the app
(defn init []
  (rdom/render
   [app]
   (js/document.getElementById "app"))
  (swap! app-state assoc :ol-map (carto/init-map-widget)))

