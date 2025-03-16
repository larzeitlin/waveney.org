goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__26671,p__26672){
var map__26673 = p__26671;
var map__26673__$1 = cljs.core.__destructure_map(map__26673);
var svc = map__26673__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26673__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26673__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26673__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__26674 = p__26672;
var map__26674__$1 = cljs.core.__destructure_map(map__26674);
var msg = map__26674__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26674__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26674__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26674__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26674__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__26680,p__26681){
var map__26682 = p__26680;
var map__26682__$1 = cljs.core.__destructure_map(map__26682);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26682__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__26683 = p__26681;
var map__26683__$1 = cljs.core.__destructure_map(map__26683);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26683__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__26689,p__26690){
var map__26691 = p__26689;
var map__26691__$1 = cljs.core.__destructure_map(map__26691);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26691__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26691__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__26692 = p__26690;
var map__26692__$1 = cljs.core.__destructure_map(map__26692);
var msg = map__26692__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26692__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__26696,tid){
var map__26697 = p__26696;
var map__26697__$1 = cljs.core.__destructure_map(map__26697);
var svc = map__26697__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26697__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__26709 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__26710 = null;
var count__26711 = (0);
var i__26712 = (0);
while(true){
if((i__26712 < count__26711)){
var vec__26728 = chunk__26710.cljs$core$IIndexed$_nth$arity$2(null, i__26712);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26728,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26728,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__26747 = seq__26709;
var G__26748 = chunk__26710;
var G__26749 = count__26711;
var G__26750 = (i__26712 + (1));
seq__26709 = G__26747;
chunk__26710 = G__26748;
count__26711 = G__26749;
i__26712 = G__26750;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26709);
if(temp__5804__auto__){
var seq__26709__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26709__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__26709__$1);
var G__26751 = cljs.core.chunk_rest(seq__26709__$1);
var G__26752 = c__5525__auto__;
var G__26753 = cljs.core.count(c__5525__auto__);
var G__26754 = (0);
seq__26709 = G__26751;
chunk__26710 = G__26752;
count__26711 = G__26753;
i__26712 = G__26754;
continue;
} else {
var vec__26736 = cljs.core.first(seq__26709__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26736,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26736,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__26755 = cljs.core.next(seq__26709__$1);
var G__26756 = null;
var G__26757 = (0);
var G__26758 = (0);
seq__26709 = G__26755;
chunk__26710 = G__26756;
count__26711 = G__26757;
i__26712 = G__26758;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__26701_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__26701_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__26702_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__26702_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__26703_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__26703_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__26704_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__26704_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__26743){
var map__26744 = p__26743;
var map__26744__$1 = cljs.core.__destructure_map(map__26744);
var svc = map__26744__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26744__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26744__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
