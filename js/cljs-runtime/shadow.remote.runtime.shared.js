goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__20829){
var map__20830 = p__20829;
var map__20830__$1 = cljs.core.__destructure_map(map__20830);
var runtime = map__20830__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20830__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_21084 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_21084)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__20833 = runtime;
var G__20834 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_21084);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__20833,G__20834) : shadow.remote.runtime.shared.process.call(null, G__20833,G__20834));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__20835,res){
var map__20836 = p__20835;
var map__20836__$1 = cljs.core.__destructure_map(map__20836);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__20838 = res;
var G__20838__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20838,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__20838);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20838__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__20838__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__20847 = arguments.length;
switch (G__20847) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__20852,msg,handlers,timeout_after_ms){
var map__20854 = p__20852;
var map__20854__$1 = cljs.core.__destructure_map(map__20854);
var runtime = map__20854__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20854__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21101 = arguments.length;
var i__5727__auto___21102 = (0);
while(true){
if((i__5727__auto___21102 < len__5726__auto___21101)){
args__5732__auto__.push((arguments[i__5727__auto___21102]));

var G__21103 = (i__5727__auto___21102 + (1));
i__5727__auto___21102 = G__21103;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__20861,ev,args){
var map__20866 = p__20861;
var map__20866__$1 = cljs.core.__destructure_map(map__20866);
var runtime = map__20866__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20866__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__20867 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__20870 = null;
var count__20871 = (0);
var i__20872 = (0);
while(true){
if((i__20872 < count__20871)){
var ext = chunk__20870.cljs$core$IIndexed$_nth$arity$2(null, i__20872);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__21118 = seq__20867;
var G__21119 = chunk__20870;
var G__21120 = count__20871;
var G__21121 = (i__20872 + (1));
seq__20867 = G__21118;
chunk__20870 = G__21119;
count__20871 = G__21120;
i__20872 = G__21121;
continue;
} else {
var G__21123 = seq__20867;
var G__21124 = chunk__20870;
var G__21125 = count__20871;
var G__21126 = (i__20872 + (1));
seq__20867 = G__21123;
chunk__20870 = G__21124;
count__20871 = G__21125;
i__20872 = G__21126;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20867);
if(temp__5804__auto__){
var seq__20867__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20867__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20867__$1);
var G__21127 = cljs.core.chunk_rest(seq__20867__$1);
var G__21128 = c__5525__auto__;
var G__21129 = cljs.core.count(c__5525__auto__);
var G__21130 = (0);
seq__20867 = G__21127;
chunk__20870 = G__21128;
count__20871 = G__21129;
i__20872 = G__21130;
continue;
} else {
var ext = cljs.core.first(seq__20867__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__21131 = cljs.core.next(seq__20867__$1);
var G__21132 = null;
var G__21133 = (0);
var G__21134 = (0);
seq__20867 = G__21131;
chunk__20870 = G__21132;
count__20871 = G__21133;
i__20872 = G__21134;
continue;
} else {
var G__21135 = cljs.core.next(seq__20867__$1);
var G__21136 = null;
var G__21137 = (0);
var G__21138 = (0);
seq__20867 = G__21135;
chunk__20870 = G__21136;
count__20871 = G__21137;
i__20872 = G__21138;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq20855){
var G__20856 = cljs.core.first(seq20855);
var seq20855__$1 = cljs.core.next(seq20855);
var G__20857 = cljs.core.first(seq20855__$1);
var seq20855__$2 = cljs.core.next(seq20855__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20856,G__20857,seq20855__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__20901,p__20902){
var map__20905 = p__20901;
var map__20905__$1 = cljs.core.__destructure_map(map__20905);
var runtime = map__20905__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20905__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__20906 = p__20902;
var map__20906__$1 = cljs.core.__destructure_map(map__20906);
var msg = map__20906__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20906__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__20907 = cljs.core.deref(state_ref);
var map__20907__$1 = cljs.core.__destructure_map(map__20907);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20907__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20907__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__20910,msg){
var map__20911 = p__20910;
var map__20911__$1 = cljs.core.__destructure_map(map__20911);
var runtime = map__20911__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20911__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__20923,key,p__20924){
var map__20925 = p__20923;
var map__20925__$1 = cljs.core.__destructure_map(map__20925);
var state = map__20925__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20925__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__20926 = p__20924;
var map__20926__$1 = cljs.core.__destructure_map(map__20926);
var spec = map__20926__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20926__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20926__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__20938,key,spec){
var map__20939 = p__20938;
var map__20939__$1 = cljs.core.__destructure_map(map__20939);
var runtime = map__20939__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20939__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___21161 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___21161 == null)){
} else {
var on_welcome_21163 = temp__5808__auto___21161;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_21163.cljs$core$IFn$_invoke$arity$0 ? on_welcome_21163.cljs$core$IFn$_invoke$arity$0() : on_welcome_21163.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__20946_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__20946_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__20948_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__20948_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__20950_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__20950_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__20951_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__20951_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__20952_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__20952_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__20982,key){
var map__20984 = p__20982;
var map__20984__$1 = cljs.core.__destructure_map(map__20984);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20984__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__20991,msg){
var map__20992 = p__20991;
var map__20992__$1 = cljs.core.__destructure_map(map__20992);
var runtime = map__20992__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20992__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__21006,p__21008){
var map__21011 = p__21006;
var map__21011__$1 = cljs.core.__destructure_map(map__21011);
var runtime = map__21011__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21011__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__21012 = p__21008;
var map__21012__$1 = cljs.core.__destructure_map(map__21012);
var msg = map__21012__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21012__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21012__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__21022 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__21024 = null;
var count__21025 = (0);
var i__21026 = (0);
while(true){
if((i__21026 < count__21025)){
var map__21043 = chunk__21024.cljs$core$IIndexed$_nth$arity$2(null, i__21026);
var map__21043__$1 = cljs.core.__destructure_map(map__21043);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21043__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__21211 = seq__21022;
var G__21212 = chunk__21024;
var G__21213 = count__21025;
var G__21214 = (i__21026 + (1));
seq__21022 = G__21211;
chunk__21024 = G__21212;
count__21025 = G__21213;
i__21026 = G__21214;
continue;
} else {
var G__21216 = seq__21022;
var G__21217 = chunk__21024;
var G__21218 = count__21025;
var G__21219 = (i__21026 + (1));
seq__21022 = G__21216;
chunk__21024 = G__21217;
count__21025 = G__21218;
i__21026 = G__21219;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21022);
if(temp__5804__auto__){
var seq__21022__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21022__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21022__$1);
var G__21224 = cljs.core.chunk_rest(seq__21022__$1);
var G__21225 = c__5525__auto__;
var G__21226 = cljs.core.count(c__5525__auto__);
var G__21227 = (0);
seq__21022 = G__21224;
chunk__21024 = G__21225;
count__21025 = G__21226;
i__21026 = G__21227;
continue;
} else {
var map__21050 = cljs.core.first(seq__21022__$1);
var map__21050__$1 = cljs.core.__destructure_map(map__21050);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21050__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__21228 = cljs.core.next(seq__21022__$1);
var G__21229 = null;
var G__21230 = (0);
var G__21231 = (0);
seq__21022 = G__21228;
chunk__21024 = G__21229;
count__21025 = G__21230;
i__21026 = G__21231;
continue;
} else {
var G__21232 = cljs.core.next(seq__21022__$1);
var G__21233 = null;
var G__21234 = (0);
var G__21235 = (0);
seq__21022 = G__21232;
chunk__21024 = G__21233;
count__21025 = G__21234;
i__21026 = G__21235;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
