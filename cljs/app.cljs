(ns app
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as string]))

;; VARS
(def JOIN_MAIL_LIST_URL "https://kbscdztdalvuuelcvpjr.supabase.co/rest/v1/mailing_list")
(def ANON_API_KEY
  ;; safe to expose the anon key
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtic2NkenRkYWx2dXVlbGN2cGpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5MDYxMzQsImV4cCI6MjA1NzQ4MjEzNH0.dVmJYtm8RtCrea6yDt9CXe128H94DyU1XoK-EfHfqQQ"
  )

;; utils

(defn validish-email? [email]
  (boolean (re-matches #"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" email)))

(defn post-request [url data callback]
  (-> (js/fetch url
                (clj->js {:method "POST"
                          :headers {"Content-Type" "application/json"
                                    "apikey" ANON_API_KEY
                                    "Prefer" "return=minimal"}
                          :body (js/JSON.stringify (clj->js data))}))
      (.then (fn [response]
               [response.status response.json]))
      (.then (fn [[status data]]
               (callback status (js->clj data :keywordize-keys true))))
      (.catch (fn [error]
                (js/console.error "Error:" error)))))



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

(def categories-list
  ["Wildlife"
   "History"
   "Folklore"
   "Trails"
   "Music"
   "Art"
   "Accomodation"
   "Activities"
   "Pubs"
   "Events"
   "Conservation"])

(defn categories []
  (->> categories-list
       (map #(vector category %))
       (into [:div.categories])))

(defonce email* (r/atom ""))

(defn send-mail-list-join-req [email-address]
  (let [callback (fn [status _response]
                   (cond
                     (= status 409)
                     (js/alert "email address already added")
                     (= status 201)
                     (js/alert "signed you up"))
                   (reset! email* ""))]
    (post-request JOIN_MAIL_LIST_URL
                  {:email_address email-address
                   :subscribed true}
                  callback)))

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
     [:button {:on-click #(send-mail-list-join-req email)
               :disabled submit-button-disabled?
               :style {:background-color (cond
                                             (string/blank? email) "gray"
                                             submit-button-disabled? "gray"
                                             :else "green")}}
      "Submit"]]))

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
