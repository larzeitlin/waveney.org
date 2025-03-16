goog.provide('waveney.db');
waveney.db.post_request = (function waveney$db$post_request(url,data,callback){
return fetch(url,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 3, ["Content-Type","application/json","apikey",waveney.env.ANON_API_KEY,"Prefer","return=minimal"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(data))], null))).then((function (response){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [response.status,response.json], null);
})).then((function (p__20738){
var vec__20739 = p__20738;
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20739,(0),null);
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20739,(1),null);
var G__20742 = status;
var G__20743 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(G__20742,G__20743) : callback.call(null, G__20742,G__20743));
})).catch((function (error){
return console.error("Error:",error);
}));
});
waveney.db.handle_join_mail_list_resp = (function waveney$db$handle_join_mail_list_resp(callback_fn){
return (function (status,_response){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,(409))){
alert("email address already added");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,(201))){
alert("signed you up");
} else {
}
}

return (callback_fn.cljs$core$IFn$_invoke$arity$0 ? callback_fn.cljs$core$IFn$_invoke$arity$0() : callback_fn.call(null, ));
});
});
waveney.db.join_mail_list_req = (function waveney$db$join_mail_list_req(email_address,callback_fn){
return waveney.db.post_request(waveney.env.JOIN_MAIL_LIST_URL,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email_address","email_address",-2066530117),email_address,new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),true], null),waveney.db.handle_join_mail_list_resp(callback_fn));
});

//# sourceMappingURL=waveney.db.js.map
