(ns waveney.layers.links)

(def description->url
  {"waveney & little ouse recovery project (restoration)"
   "https://www.suffolkwildlifetrust.org/walor"

   "visit waveney valley (tourism information)"
   "https://visitwaveneyvalley.co.uk/"

   "river waveney trust (conservation and restoration)"
   "https://www.riverwaveneytrust.org/"

   "suffolk real ale pubs (interactive map)"
   "https://suffolk.camra.org.uk/"

   "national parks uk - folklore of the broads"
   "https://www.nationalparks.uk/2024/09/30/discover-folklore-of-the-broads/"

   "defra - water level gauges (interactive map)" "https://lfw-prdg.aws.defra.cloud/river-and-sea-levels/target-area/054wacdv3b?group=rainfall&v=map-live&lyr=ri,gr,mv&ext=0.726202,51.976492,1.825489,53.258732&fid=stations.9620"
   "the south folk of the east angles (anglo-saxon history)"
   "https://www.wilcuma.org.uk/east-anglia/the-south-folk-of-the-east-angles/"

   "visit waveney valley - trail maps"
   "https://visitwaveneyvalley.co.uk/maps/"

   "east anglian traditional music - waveney songs community project"
   "https://www.eatmt.org.uk/waveney-songs/",

   "broads authority - river waveney depth and navigation notes" "https://www.broads-authority.gov.uk/boating/navigating-the-broads/water-depths-and-navigation-notes/river-waveney"})
    
(defn view []
  [:div.useful-links
   [:h3 "Useful Links"]
   (into [:ul]
         (map (fn [[desc url]]
                [:li [:a {:href url}
                      desc]])
              description->url))])
