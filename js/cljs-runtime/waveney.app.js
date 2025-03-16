goog.provide('waveney.app');
waveney.app.header = (function waveney$app$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"waveney.org"], null)], null);
});
waveney.app.coming_soon = (function waveney$app$coming_soon(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.coming-soon","div.coming-soon",-732597991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Coming Soon"], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Meandering through the ecology, culture and history of the Waveney Valley region.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"\u2022",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"A homegrown online hub away from the corporate web.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"\u2022",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"To contribute please reach out with the contact link below, or sign up to our mailing list for updates."], null)], null);
});
waveney.app.category = (function waveney$app$category(title){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.category","button.category",-815777465),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),title], null)], null);
});
waveney.app.categories_list = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Wildlife","History","Folklore","Trails","Music","Art","Activities","Pubs","Events","Ecology","Photos","Weather"], null);
waveney.app.categories = (function waveney$app$categories(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.categories","div.categories",358341752)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20752_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[waveney.app.category,p1__20752_SHARP_],null));
}),waveney.app.categories_list));
});
if((typeof waveney !== 'undefined') && (typeof waveney.app !== 'undefined') && (typeof waveney.app.email_STAR_ !== 'undefined')){
} else {
waveney.app.email_STAR_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
waveney.app.reset_email_field_to_empty = (function waveney$app$reset_email_field_to_empty(){
return cljs.core.reset_BANG_(waveney.app.email_STAR_,"");
});
waveney.app.validish_email_QMARK_ = (function waveney$app$validish_email_QMARK_(email){
return cljs.core.boolean$(cljs.core.re_matches(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,email));
});
waveney.app.join_mail_list = (function waveney$app$join_mail_list(){
var email = cljs.core.deref(waveney.app.email_STAR_);
var submit_button_disabled_QMARK_ = (!(waveney.app.validish_email_QMARK_(email)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.join","div.join",-1216328363),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Sign up to stay updated"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"email",new cljs.core.Keyword(null,"id","id",-1388402092),"email",new cljs.core.Keyword(null,"name","name",1843675177),"email",new cljs.core.Keyword(null,"value","value",305978217),email,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__20753_SHARP_){
return cljs.core.reset_BANG_(waveney.app.email_STAR_,p1__20753_SHARP_.target.value);
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"enter email address"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return waveney.db.join_mail_list_req(email,waveney.app.reset_email_field_to_empty);
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),submit_button_disabled_QMARK_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((clojure.string.blank_QMARK_(email))?"gray":((submit_button_disabled_QMARK_)?"gray":"green"
))], null)], null),"Submit"], null)], null);
});
waveney.app.useful_links = (function waveney$app$useful_links(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.useful-links","div.useful-links",-44428765),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Useful Links"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20754){
var vec__20755 = p__20754;
var desc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20755,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20755,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),url], null),desc], null)], null);
}),waveney.useful_links.description__GT_url))], null);
});
waveney.app.footer = (function waveney$app$footer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u00A9 2025 Waveney.org","  ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"mailto:info@waveney.org"], null),"Contact us"], null)], null)], null);
});
waveney.app.app = (function waveney$app$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [waveney.app.header], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [waveney.app.coming_soon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"map"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [waveney.app.categories], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [waveney.app.useful_links], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [waveney.app.join_mail_list], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [waveney.app.footer], null)], null);
});
waveney.app.init = (function waveney$app$init(){
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [waveney.app.app], null),document.getElementById("app"));

return waveney.carto.init_map_widget();
});

//# sourceMappingURL=waveney.app.js.map
