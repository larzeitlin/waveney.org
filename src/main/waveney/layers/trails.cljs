(ns waveney.layers.trails)

(defn view []
  [:table
 [:thead
  [:tr
   [:th "Trail Name"]
   [:th "Location"]
   [:th "Distance"]
   [:th "Difficulty"]
   [:th "Key Features"]
   [:th "Starting Point"]]]
 [:tbody
  [:tr
   [:td [:a {:href "https://www.discoversuffolk.org.uk/promoted-trails/angles-way/"} "Angles Way"]]
   [:td "Great Yarmouth to Thetford"]
   [:td "77-93 miles"]
   [:td "Moderate - Mostly flat"]
   [:td "Follows River Waveney and Little Ouse, passes Roman ruins, medieval castles, manor houses"]
   [:td "Great Yarmouth"]]
  [:tr
   [:td [:a {:href "https://www.komoot.com/collection/1063967/windmills-meadows-and-the-river-waveney-hiking-the-angles-way"} "Angles Way (7-day route)"]]
   [:td "Great Yarmouth to Thetford"]
   [:td "99 miles"]
   [:td "Moderate - 4-7 hours/day"]
   [:td "Norfolk Broads, marshlands, farmland, heaths, castles, manor houses"]
   [:td "Great Yarmouth"]]
  [:tr
   [:td [:a {:href "https://visitwaveneyvalley.co.uk/walking/"} "Boudicca Way"]]
   [:td "Diss to Norwich"]
   [:td "36 miles"]
   [:td "Moderate"]
   [:td "Named after Iceni warrior queen, passes through Waveney Valley villages"]
   [:td "Diss"]]
  [:tr
   [:td [:a {:href "https://www.gps-routes.co.uk/routes/home.nsf/RoutesLinksWalks/waveney-valley-walking-route"} "Waveney Valley Walk"]]
   [:td "Beccles to Fritton Lake"]
   [:td "16.8 miles"]
   [:td "Easy - Flat footpaths"]
   [:td "Rivers, broads, nature reserves, villages, follows Angles Way partially"]
   [:td "Beccles (north end car park)"]]
  [:tr
   [:td [:a {:href "https://watermillsandmarshes.org.uk/trails/waveney-valley-walks-beccles-and-geldeston/"} "Beccles and Geldeston Walk"]]
   [:td "Beccles to Geldeston (circular)"]
   [:td "7 miles"]
   [:td "Easy to Moderate"]
   [:td "River Waveney, marshes, historic market town, one steep incline"]
   [:td "Beccles Quay (Fen Lane car park)"]]
  [:tr
   [:td [:a {:href "https://watermillsandmarshes.org.uk/trails/waveney-valley-walks-beccles-and-geldeston/"} "Beccles Marsh Trail"]]
   [:td "Beccles"]
   [:td "1.5, 3 or 4 miles"]
   [:td "Easy"]
   [:td "Beccles Marshes, shorter alternative to Beccles-Geldeston walk"]
   [:td "Beccles Quay"]]
  [:tr
   [:td [:a {:href "https://watermillsandmarshes.org.uk/trails/waveney-valley-walks-carlton-marshes/"} "Carlton Marshes Walk"]]
   [:td "Carlton Marshes (circular)"]
   [:td "3 miles"]
   [:td "Easy"]
   [:td "Wildlife haven, River Waveney, Angles Way, 15 species of dragonfly"]
   [:td "Suffolk Wildlife Trust Visitor Centre"]]
  [:tr
   [:td [:a {:href "https://www.outdooractive.com/en/route/hiking-trail/east-england/waveney-valley-walks-bungay-the-bigod-way/64308325/"} "Bigod Way"]]
   [:td "Bungay (circular)"]
   [:td "Not specified"]
   [:td "Easy to Moderate"]
   [:td "River valley, Earsham, Bath Hills, Angles Way, historic market town"]
   [:td "Bungay town center"]]
  [:tr
   [:td [:a {:href "https://www.gps-routes.co.uk/routes/home.nsf/RoutesLinksWalks/waveney-valley-walking-route"} "Bungay Riverside Walk"]]
   [:td "Bungay"]
   [:td "Not specified"]
   [:td "Easy"]
   [:td "Along River Waveney, historic town with castle ruins"]
   [:td "Bungay"]]]]
)
