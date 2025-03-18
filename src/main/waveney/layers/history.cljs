(ns waveney.layers.history)

(defn view []
  [:div
   [:h1 "A Timeline History of the Waveney Valley: The River's Role in Shaping a Region"]

   [:section
    [:h2 "Prehistoric and Early Formation"]
    [:ul
     [:li "400,000-30,000 Years Ago: Formation of Waveney Valley landscape during alternating warm and cold climatic cycles. High-energy meltwaters deposited layers of sediment on wide gravelly floodplains."
      [:a {:href "https://www.broads-authority.gov.uk/__data/assets/pdf_file/0027/244395/LCA_Part-1.pdf"} "Source"]]
     [:li "Paleolithic Period: Evidence of Neanderthal presence, including a distinctive flint hand axe found at North Cove, confirming Neanderthal colonization during warmer periods."
      [:a {:href "https://www.broads-authority.gov.uk/__data/assets/pdf_file/0027/244395/LCA_Part-1.pdf"} "Source"]]
     [:li "Late Upper Paleolithic Period: Homo sapiens hunter-gatherers left evidence of flint-knapping in the form of long blade tools at sites including Earsham and Geldeston."
      [:a {:href "https://www.broads-authority.gov.uk/__data/assets/pdf_file/0027/244395/LCA_Part-1.pdf"} "Source"]]]]

   [:section
    [:h2 "Roman Period (43-410 CE)"]
    [:ul
     [:li "1st-4th Centuries CE: Roman settlements established in the Waveney Valley, including a significant Roman-British settlement at Scole that has been extensively excavated."
      [:a {:href "https://visitwaveneyvalley.co.uk/history-heritage/"} "Source"]]
     [:li "Military and Transportation Uses: Wainford, just across the river from Bungay, became an important Roman military station."
      [:a {:href "https://visitwaveneyvalley.co.uk/history-heritage/"} "Source"]]
     [:li "Roman Infrastructure: The Romans built Stone Street connecting Bungay with their camp at Caistor St. Edmunds, using the river for transportation and strategic purposes."
      [:a {:href "https://www.heritagesuffolk.org.uk/explore-suffolk/waveney-valley"} "Source"]]]]
   [:section
    [:h2 "Anglo-Saxon Period (5th-11th Centuries)"]
    [:ul
     [:li "6th-7th Centuries: Extensive Saxon settlement evidenced by a large burial site in the Joyce Road area of Bungay. The name 'Bungay' likely derives from the Anglo-Saxon 'Bunincga-haye,' meaning the enclosure of the tribe of Bonna, a Saxon chieftain."
      [:a {:href "https://visitwaveneyvalley.co.uk/history-heritage/"} "Source"]]
     [:li "11th Century: Major landholders in the Bungay area were Godric and the Saxon Archbishop Stigand. Following the Norman Conquest in 1066, the Bungay manors were granted to William de Noyers."
      [:a {:href "https://www.bungaycastle.co.uk/history/"} "Source"]]
     [:li "Post-Norman Conquest: William de Noyers erected the first mound castle on the present castle site to protect himself from hostile locals, marking the beginning of Norman influence in the area."
      [:a {:href "https://www.bungaycastle.co.uk/history/"} "Source"]]]]
   [:section
    [:h2 "Medieval Period (11th-15th Centuries)"]
    [:ul
     [:li "12th Century Onwards: Monasteries and abbeys began utilizing the river's power. Needham Mill was owned by Sibson Abbey, a Cistercian abbey founded in 1150, demonstrating the ecclesiastical connections to river resources."
      [:a {:href "https://en.wikipedia.org/wiki/River_Waveney"} "Source"]]
     [:li "1275: The earliest written attestation of the river's name appears as 'Wahenhe,' derived from '*wagen + ea,' meaning 'the river by a quagmire'."
      [:a {:href "https://en.wikipedia.org/wiki/River_Waveney"} "Source"]]
     [:li "Water Mill Development: Evidence suggests the River Waveney powered at least 15 mills during this period, with some mills having existed for over 900 years. The Domesday Book records Weybread Mill, highlighting the river's early economic importance."
      [:a {:href "https://en.wikipedia.org/wiki/River_Waveney"} "Source"]]
     [:li "13th-15th Centuries: The river played a crucial role in the wool trade, with Bungay becoming a prosperous center for the production and export of woolen cloth."
      [:a {:href "https://www.bungaycastle.co.uk/history/"} "Source"]]]]

   [:section
    [:h2 "16th-17th Centuries"]
    [:ul
     [:li "March 1670: A pivotal moment in the river's history occurred when an Act of Parliament was passed to improve navigation between Beccles and Bungay. This legislation empowered five traders from Bungay and one from Downham Market to enhance the river for commercial navigation."
      [:a {:href "http://www.canalroutes.net/Waveney-River.html"} "Source"]]
     [:li "Navigation Improvements: Following the 1670 Act, three locks were constructed at Geldeston, Ellingham, and Wainford to extend navigation as far as Bungay Staithe, transforming the river into a vital commercial artery."
      [:a {:href "http://www.canalroutes.net/Waveney-River.html"} "Source"]]
     [:li "1630s-1640s: The river played a role in the religious conflicts of the time. Puritan preacher John Brinsley the Elder was forced to flee Yarmouth and found refuge in Bungay, where he continued his ministry."
      [:a {:href "https://www.bungaycastle.co.uk/history/"} "Source"]]
     [:li "1688: The Glorious Revolution had local impacts. Sir John Rous of Henham Hall, a prominent local figure, was arrested for supporting William of Orange, highlighting the political tensions of the time."
      [:a {:href "https://www.bungaycastle.co.uk/history/"} "Source"]]]]
   [:section
    [:h2 "18th Century"]
    [:ul
     [:li "1772: A second Act of Parliament ensured that Suffolk magistrates received a 5% share of all tolls obtained from the carriage of coal, with proceeds dedicated to maintaining the Waveney. This formalized the river's governance structure and economic importance."
      [:a {:href "http://www.canalroutes.net/Waveney-River.html"} "Source"]]
     [:li "Late 18th Century: Bungay began to be known as 'Little London' due to its rapidly growing population and industrial base. The river trade became the central platform of Bungay's economy, with ownership of the upper navigation in the hands of a Bungay merchant."
      [:a {:href "https://visitwaveneyvalley.co.uk/history-heritage/"} "Source"]]
     [:li "Mill Innovations: By 1794, Weybread Mill featured two wheels driving five pairs of stones and a newly invented water-powered engine for cutting hay and straw, demonstrating technological advancement along the river."
      [:a {:href "https://en.wikipedia.org/wiki/River_Waveney"} "Source"]]
     [:li "1783: A severe frost caused the river to freeze over. Local records describe people walking and skating on the ice, and even roasting an ox on the frozen river near Bungay."
      [:a {:href "https://www.bungaycastle.co.uk/history/"} "Source"]]
     [:li "1790s: The river's importance for trade grew. Wherries, flat-bottomed boats designed for river transport, became a common sight, carrying goods between Bungay and other towns along the Waveney."
      [:a {:href "http://www.canalroutes.net/Waveney-River.html"} "Source"]]]]
   [:section
    [:h2 "19th Century"]
    [:ul
     [:li "Early 19th Century: William Butcher purchased the navigation rights to the Waveney. The periodic need to recut and rebottom the river for navigation inspired S. Ashby's 1826 song 'Going to Bungay for New Bottoms and New Cuts'."
      [:a {:href "http://www.canalroutes.net/Waveney-River.html"} "Source"]]
     [:li "1827-1833: Authorization was granted for the creation of the Norwich & Lowestoft Navigation, linking the River Waveney to a new canal system. This opened in 1833, giving boats from the Upper Waveney a shorter route to the coast via Lowestoft without using Great Yarmouth Harbor."
      [:a {:href "https://en.wikipedia.org/wiki/River_Waveney"} "Source"]]
     [:li "1851-1860: The Waveney Valley railway line was authorized and constructed in stages, connecting Tivetshall to Harleston (1855), then to Bungay (1860), and finally to Beccles. This railway would eventually diminish the river's importance for commercial transport."
      [:a {:href "https://en.wikipedia.org/wiki/Waveney_Valley_line"} "Source"]]
     [:li "1854: C.F. Costerton built Scole Flax Mill to alleviate poverty during agricultural depressions. He encouraged farmers to grow flax along the Waveney Valley for textiles and linseed oil production."
      [:a {:href "https://visitwaveneyvalley.co.uk/history-heritage/"} "Source"]]
     [:li "1880-1890: W.D. Walker, a maltster and merchant from Bungay, purchased the Upper Waveney Navigation. His firm became the first owner of a wherry called Albion. In 1890, control passed to Watney, Combe, Reid & Co.."
      [:a {:href "http://www.canalroutes.net/Waveney-River.html"} "Source"]]
     [:li "1898: The wherry Albion was commissioned by WD and AE Walker, built by William Brighton at Lake Lothing, and skippered by Jack Powley for 20 years. This vessel represents the specialized river craft developed for the Waveney—wherries that measured no more than 70 by 16 feet."
      [:a {:href "https://www.wherryyachtcharter.org/albion.php"} "Source"]]]]
   [:section
    [:h2 "20th Century"]
    [:ul
     [:li "Post-World War I: Traffic on the whole river greatly reduced, though the lower reaches became increasingly popular with pleasure boats, signaling a shift from commercial to recreational use."
      [:a {:href "http://www.canalroutes.net/Waveney-River.html"} "Source"]]
     [:li "1928: Commercial boats ceased using the upper reaches of the River Waveney, and Bungay's status as an inland port came to an end."
      [:a {:href "https://visitwaveneyvalley.co.uk/history-heritage/"} "Source"]]
     [:li "1932-1935: During the Great Depression, Dr. Leonard Cane became Town Reeve of Bungay and began a transformative project to reconstruct the town's identity around its pre-industrial history. This included promoting local folklore and conducting an archaeological dig at Bungay Castle between November 1934 and July 1935."
      [:a {:href "https://www.bungaycastle.co.uk/history/"} "Source"]]
     [:li "1934: Navigation rights were officially removed for the 4.2-mile section of the river from Geldeston Lock to Bungay, formalizing the end of commercial navigation to Bungay. This closure had a profound psychological impact on the already economically stressed community."
      [:a {:href "http://www.canalroutes.net/Waveney-River.html"} "Source"]]
     [:li "1953: The Waveney Valley railway line closed to passenger services on January 5, 1953, marking another step in the transformation of regional transportation networks."
      [:a {:href "https://en.wikipedia.org/wiki/Waveney_Valley_line"} "Source"]]
     [:li "1960s-1970s: Environmental concerns grew. The Broads Authority was established in 1989 to manage the Broads, including parts of the Waveney, balancing conservation with recreation and navigation."
      [:a {:href "https://www.broads-authority.gov.uk/about-us/how-we-work/strategy"} "Source"]]]]
   [:section
    [:h2 "Recent Developments"]
    [:ul
     [:li "2013: Geldeston Lock (also known as Shipmeadow Lock) was restored in a joint project by the River Waveney Trust and the Inland Waterways Association, revitalizing interest in the river's heritage."
      [:a {:href "https://www.waterways.org.uk/waterways/restoration/geldeston-lock"} "Source"]]
     [:li "Recent Years: The Environment Agency negotiated with local landowners to allow canoes and unpowered craft to use the section from Geldeston to Bungay, opening up previously restricted portions of the river for recreational use."
      [:a {:href "https://www.broads-authority.gov.uk/boating/navigating-the-broads/canoeing-and-paddleboarding"} "Source"]]
     [:li "2024: The Waveney Valley constituency was created and became a key battleground in the UK general election. The new constituency straddles the Norfolk-Suffolk border, mirroring the historical boundary formed by the river."
      [:a {:href "https://www.bbc.co.uk/news/uk-politics-constituencies"} "Source"]]]]])
