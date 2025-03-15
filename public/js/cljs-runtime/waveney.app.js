goog.provide('waveney.app');
var module$node_modules$ol$proj=shadow.js.require("module$node_modules$ol$proj", {});
waveney.app.JOIN_MAIL_LIST_URL = "https://kbscdztdalvuuelcvpjr.supabase.co/rest/v1/mailing_list";
waveney.app.ANON_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtic2NkenRkYWx2dXVlbGN2cGpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5MDYxMzQsImV4cCI6MjA1NzQ4MjEzNH0.dVmJYtm8RtCrea6yDt9CXe128H94DyU1XoK-EfHfqQQ";
waveney.app.validish_email_QMARK_ = (function waveney$app$validish_email_QMARK_(email){
return cljs.core.boolean$(cljs.core.re_matches(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,email));
});
waveney.app.post_request = (function waveney$app$post_request(url,data,callback){
return fetch(url,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 3, ["Content-Type","application/json","apikey",waveney.app.ANON_API_KEY,"Prefer","return=minimal"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(data))], null))).then((function (response){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [response.status,response.json], null);
})).then((function (p__30587){
var vec__30588 = p__30587;
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30588,(0),null);
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30588,(1),null);
var G__30591 = status;
var G__30592 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(G__30591,G__30592) : callback.call(null, G__30591,G__30592));
})).catch((function (error){
return console.error("Error:",error);
}));
});
waveney.app.header = (function waveney$app$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"waveney.org"], null)], null);
});
waveney.app.coming_soon = (function waveney$app$coming_soon(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.coming-soon","div.coming-soon",-732597991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Coming Soon"], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Meandering through the ecology, culture and history of the Waveney Valley region.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"\u2022",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"A homegrown online hub away from the corporate web.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"\u2022",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"To contribute please reach out with the contact link below, or sign up to our mailing list for updates."], null)], null);
});
waveney.app.category = (function waveney$app$category(title){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.category","div.category",357742172),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),title], null)], null);
});
waveney.app.categories_list = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Wildlife","History","Folklore","Trails","Music","Art","Activities","Pubs","Events","Ecology","Photographs"], null);
waveney.app.categories = (function waveney$app$categories(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.categories","div.categories",358341752)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30593_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[waveney.app.category,p1__30593_SHARP_],null));
}),waveney.app.categories_list));
});
if((typeof waveney !== 'undefined') && (typeof waveney.app !== 'undefined') && (typeof waveney.app.email_STAR_ !== 'undefined')){
} else {
waveney.app.email_STAR_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
waveney.app.send_mail_list_join_req = (function waveney$app$send_mail_list_join_req(email_address){
var callback = (function (status,_response){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,(409))){
alert("email address already added");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,(201))){
alert("signed you up");
} else {
}
}

return cljs.core.reset_BANG_(waveney.app.email_STAR_,"");
});
return waveney.app.post_request(waveney.app.JOIN_MAIL_LIST_URL,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email_address","email_address",-2066530117),email_address,new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),true], null),callback);
});
waveney.app.join_mail_list = (function waveney$app$join_mail_list(){
var email = cljs.core.deref(waveney.app.email_STAR_);
var submit_button_disabled_QMARK_ = (!(waveney.app.validish_email_QMARK_(email)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.join","div.join",-1216328363),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Sign up to stay updated"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"email",new cljs.core.Keyword(null,"id","id",-1388402092),"email",new cljs.core.Keyword(null,"name","name",1843675177),"email",new cljs.core.Keyword(null,"value","value",305978217),email,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30594_SHARP_){
return cljs.core.reset_BANG_(waveney.app.email_STAR_,p1__30594_SHARP_.target.value);
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"enter email address"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return waveney.app.send_mail_list_join_req(email);
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),submit_button_disabled_QMARK_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((clojure.string.blank_QMARK_(email))?"gray":((submit_button_disabled_QMARK_)?"gray":"green"
))], null)], null),"Submit"], null)], null);
});
waveney.app.ol_map = (function waveney$app$ol_map(){
return (new shadow.js.shim.module$ol$Map$default(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"layers","layers",1944875032),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new shadow.js.shim.module$ol$layer$Tile$default(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),(new shadow.js.shim.module$ol$source$OSM$default())], null))))], null),new cljs.core.Keyword(null,"target","target",253001721),"map",new cljs.core.Keyword(null,"view","view",1247994814),(new shadow.js.shim.module$ol$View$default(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.2375777300280788,52.468247948753316], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(10)], null))))], null))));
});
waveney.app.useful_links = (function waveney$app$useful_links(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.useful-links","div.useful-links",-44428765),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Useful Links"], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.riverwaveneytrust.org/"], null),"River Waveney Trust (Conservation and Restoration)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://visitwaveneyvalley.co.uk/"], null),"Visit Waveney Valley (tourism information)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://visitwaveneyvalley.co.uk/maps/"], null),"Visit Waveney Valley - trail maps"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.suffolkwildlifetrust.org/WaLOR"], null),"Waveney & Little Ouse Recovery Project (Restoration)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.nationalparks.uk/2024/09/30/discover-folklore-of-the-broads/"], null),"National Parks UK - Folklore of the Broads"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.wilcuma.org.uk/east-anglia/the-south-folk-of-the-east-angles/"], null),"The South Folk of the East Angles (Anglo-Saxon History)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.broads-authority.gov.uk/boating/navigating-the-broads/water-depths-and-navigation-notes/river-waveney"], null),"Broads Authority - River Waveney Depth and Navigation Notes"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://lfw-prdg.aws.defra.cloud/river-and-sea-levels/target-area/054WACDV3B?group=rainfall&v=map-live&lyr=ri,gr,mv&ext=0.726202,51.976492,1.825489,53.258732&fid=stations.9620"], null),"DEFRA - Water Level Gauges (interactive map)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.eatmt.org.uk/waveney-songs/"], null),"East Anglian Traditional Music - Waveney Songs Community Project"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://suffolk.camra.org.uk/"], null),"Suffolk Real Ale Pubs (interactive map)"], null)], null)], null)], null);
});
waveney.app.footer = (function waveney$app$footer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u00A9 2025 Waveney.org","  ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"mailto:info@waveney.org"], null),"Contact us"], null)], null)], null);
});
waveney.app.app = (function waveney$app$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [waveney.app.header], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [waveney.app.coming_soon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"map"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [waveney.app.categories], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [waveney.app.useful_links], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [waveney.app.join_mail_list], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [waveney.app.footer], null)], null);
});
waveney.app.init = (function waveney$app$init(){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["init"], 0));

reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [waveney.app.app], null),document.getElementById("app"));

(new module$node_modules$ol$proj.useGeographic());

return waveney.app.ol_map();
});

//# sourceMappingURL=waveney.app.js.map
