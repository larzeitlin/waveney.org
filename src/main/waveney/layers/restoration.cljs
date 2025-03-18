(ns waveney.layers.restoration)

(defn view []
  [:table
   [:thead
    [:tr
     [:th "Project Name"]
     [:th "Location"]
     [:th "Time Period"]
     [:th "Organization(s)"]
     [:th "Key Objectives"]
     [:th "Activities"]]]
   [:tbody
    [:tr
     [:td [:a {:href "https://www.riverwaveneytrust.org/canoe-access-and-biodiversity/"} "Canoe Access & Biodiversity Project"]]
     [:td "River Waveney (Scole to Geldeston Locks)"]
     [:td "Launched 2022"]
     [:td "River Waveney Trust, The Rivers Trust"]
     [:td "Improve paddle access, enhance biodiversity, engage communities"]
     [:td "Managing river obstacles, creating river wardens scheme, conducting paddle surveys, engaging with river users"]]
    [:tr
     [:td [:a {:href "https://defrafarming.blog.gov.uk/category/payments-to-restore-landscapes-and-ecosystems/"} "WALOR (Waveney and Little Ouse Landscape Recovery)"]]
     [:td "Headwaters of River Waveney and Little Ouse"]
     [:td "2022-2025 (planning phase completed)"]
     [:td "Suffolk Wildlife Trust, Defra"]
     [:td "Reduce flooding, improve water quality, restore habitats"]
     [:td "Creating new fenland to hold water, \"rewiggling\" rivers to natural courses, compensating farmers for land use changes"]]
    [:tr
     [:td [:a {:href "https://www.riverwaveneytrust.org/bungay/"} "Tin River Project"]]
     [:td "Bungay"]
     [:td "Ongoing"]
     [:td "River Waveney Trust"]
     [:td "Reduce flood risk, enhance wildlife habitat"]
     [:td "Holding water on floodplains, reducing water speed through the channel, creating diverse habitats"]]
    [:tr
     [:td [:a {:href "https://www.riverwaveneytrust.org/"} "Broome Beck Project"]]
     [:td "Bedingham and Woodton"]
     [:td "Planned"]
     [:td "River Waveney Trust"]
     [:td "Improve river morphology, enhance wildlife habitat"]
     [:td "Re-meandering straightened channel, creating diverse wildlife habitats"]]
    [:tr
     [:td [:a {:href "https://www.riverwaveneytrust.org/"} "Birdwalk Plantation"]]
     [:td "Eye & Hoxne (River Dove)"]
     [:td "Planned"]
     [:td "River Waveney Trust"]
     [:td "Reconnect tributary to floodplain"]
     [:td "Creating wet woodland, building scrapes in grassland for aquatic invertebrates and breeding waders"]]
    [:tr
     [:td [:a {:href "https://www.riverwaveneytrust.org/frenzebeck/"} "Frenze Beck Project"]]
     [:td "Diss"]
     [:td "Ongoing"]
     [:td "River Waveney Trust, South Norfolk Council, Norfolk Wildlife Trust"]
     [:td "Improve flood management, enhance habitat"]
     [:td "Lowering riverbank sections, creating scrapes to hold flood water, installing brash berms for aquatic life"]]
    [:tr
     [:td [:a {:href "https://www.riverwaveneytrust.org/geldeston-lock/"} "Geldeston Lock Restoration"]]
     [:td "Geldeston"]
     [:td "Since 2017"]
     [:td "River Waveney Trust, Waterways Recovery Group (WRG), Inland Waterways Association"]
     [:td "Restore historic lock"]
     [:td "Vegetation removal, wall deconstruction, masonry cleaning and restoration"]]
    [:tr
     [:td [:a {:href "https://www.riverwaveneytrust.org/natural-flood-management/"} "Natural Flood Management"]]
     [:td "Diss area and wider catchment"]
     [:td "2024-2027"]
     [:td "River Waveney Trust, Defra, Environment Agency"]
     [:td "Reduce flooding through natural methods"]
     [:td "Tree/hedge planting, installing 'leaky' dams, digging ponds, allowing rivers to flow onto floodplains"]]
    [:tr
     [:td [:a {:href "https://www.riverwaveneytrust.org/canoe-access-and-biodiversity/"} "River Access for All"]]
     [:td "Brockdish to Needham"]
     [:td "Ongoing"]
     [:td "River Waveney Trust, Anglian Water, Norfolk County Council, Canoe Foundation, Paul Bassam Trust, Geoffrey Burton Trust, Needham Parish Council, Pathmakers"]
     [:td "Improve access and recreation"]
     [:td "Improving 2.2 km of water environment along the Angles Way"]]
    [:tr
     [:td [:a {:href "https://www.riverwaveneytrust.org/"} "Pond Restoration"]]
     [:td "Waveney catchment"]
     [:td "Ongoing"]
     [:td "River Waveney Trust, Waveney Farming Cluster, Norfolk FWAG, Norfolk Wildlife Trust, Norfolk Rivers Trust, Natural England, National Trust"]
     [:td "Restore and improve pond management"]
     [:td "Identifying suitable sites, facilitating funding and management opportunities, delivering training"]]
    [:tr
     [:td [:a {:href "https://www.riverwaveneytrust.org/"} "Invasive Species Management"]]
     [:td "Throughout catchment"]
     [:td "Ongoing"]
     [:td "River Waveney Trust"]
     [:td "Control non-native species"]
     [:td "Controlling floating pennywort along 2.6 km of river channel"]]
    [:tr
     [:td [:a {:href "https://www.riverwaveneytrust.org/"} "Preventing Plastic Pollution"]]
     [:td "Throughout catchment"]
     [:td "Ongoing"]
     [:td "River Waveney Trust"]
     [:td "Reduce plastic waste in river"]
     [:td "Not specified in search results"]]
    [:tr
     [:td [:a {:href "https://www.riverwaveneytrust.org/bungay/"} "Yellow Fish Campaign"]]
     [:td "Diss area"]
     [:td "Ongoing"]
     [:td "River Waveney Trust"]
     [:td "Raise awareness of pollution"]
     [:td "Highlighting awareness of pollution in rivers and promoting ways to prevent and reduce pollution"]]]])
