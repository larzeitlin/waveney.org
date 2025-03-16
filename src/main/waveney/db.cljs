(ns waveney.db
  (:require [waveney.env :as env]))

(defn post-request [url data callback]
  (-> (js/fetch url
                (clj->js {:method "POST"
                          :headers {"Content-Type" "application/json"
                                    "apikey" env/ANON_API_KEY
                                    "Prefer" "return=minimal"}
                          :body (js/JSON.stringify (clj->js data))}))
      (.then (fn [response]
               [response.status response.json]))
      (.then (fn [[status data]]
               (callback status (js->clj data :keywordize-keys true))))
      (.catch (fn [error]
                (js/console.error "Error:" error)))))

(defn handle-join-mail-list-resp [callback-fn]
  (fn [status _response]
                   (cond
                     (= status 409)
                     (js/alert "email address already added")
                     (= status 201)
                     (js/alert "signed you up"))
                   (callback-fn)))

(defn join-mail-list-req [email-address callback-fn]
  (post-request env/JOIN_MAIL_LIST_URL
                {:email_address email-address
                 :subscribed true}
                (handle-join-mail-list-resp callback-fn)))
