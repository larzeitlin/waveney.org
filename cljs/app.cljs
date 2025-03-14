(ns app
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as string]
            ))

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
   [:p "Meandering through the ecology, culture and history of the Waveney Valley region. An online hub liberated from corporate social media. To work with us reach out with the contact link below, or sign up to our mailing list for updates."]])

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

(defn ol-map []
  (js/ol.Map.
   (clj->js
    {:layers [(js/ol.layer.Tile.
               (clj->js {:source (js/ol.source.OSM.)}))]
     :target "map"
     :view (js/ol.View.
            (clj->js {:center
                      [1.2375777300280788,
                       52.468247948753316]
                      :zoom 10
                      }))})))

(defn useful-links []
  [:div.useful-links
   [:h3 "Useful Links"]
   [:ul
    [:li
     [:a {:href "https://www.riverwaveneytrust.org/"} "River Waveney Trust (Conservation and Restoration)"]]
    [:li
     [:a {:href "https://visitwaveneyvalley.co.uk/"} "Visit Waveney Valley (Tourism Information)"]]
    [:li
     [:a {:href "https://www.suffolkwildlifetrust.org/WaLOR"} "Waveney & Little Ouse Recovery Project (Restoration)"]]
    [:li
     [:a {:href "https://www.nationalparks.uk/2024/09/30/discover-folklore-of-the-broads/"} "National Parks UK - Folklore of the Broads"]]
    [:li
     [:a {:href "https://www.wilcuma.org.uk/east-anglia/the-south-folk-of-the-east-angles/"} "The South Folk of the East Angles (Anglo-Saxon History)"]]
    [:li
     [:a {:href "https://www.broads-authority.gov.uk/boating/navigating-the-broads/water-depths-and-navigation-notes/river-waveney"} "Broads Authority - River Waveney Depth and Navigation Notes"]
     ]
    [:li
     [:a {:href "https://lfw-prdg.aws.defra.cloud/river-and-sea-levels/target-area/054WACDV3B?group=rainfall&v=map-live&lyr=ri,gr,mv&ext=0.726202,51.976492,1.825489,53.258732&fid=stations.9620"} "DEFRA - Water Level Gauges (interactive map)"]
     ]
    [:li
     [:a {:href "https://www.eatmt.org.uk/waveney-songs/"} "East Anglian Traditional Music - Waveney Songs Community Project"]
     ]
    [:li
     [:a {:href "https://suffolk.camra.org.uk/"} "Suffolk Real Ale Pubs (interactive map)"]
     ]]])

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
(rdom/render [app]
             (js/document.getElementById "app"))

(js/ol.proj.useGeographic.)
(ol-map)
