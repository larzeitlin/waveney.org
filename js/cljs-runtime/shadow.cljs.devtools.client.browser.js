goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27800 = arguments.length;
var i__5727__auto___27801 = (0);
while(true){
if((i__5727__auto___27801 < len__5726__auto___27800)){
args__5732__auto__.push((arguments[i__5727__auto___27801]));

var G__27802 = (i__5727__auto___27801 + (1));
i__5727__auto___27801 = G__27802;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq27197){
var G__27198 = cljs.core.first(seq27197);
var seq27197__$1 = cljs.core.next(seq27197);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27198,seq27197__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__27211 = cljs.core.seq(sources);
var chunk__27212 = null;
var count__27213 = (0);
var i__27214 = (0);
while(true){
if((i__27214 < count__27213)){
var map__27225 = chunk__27212.cljs$core$IIndexed$_nth$arity$2(null, i__27214);
var map__27225__$1 = cljs.core.__destructure_map(map__27225);
var src = map__27225__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27225__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27225__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27225__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27225__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e27227){var e_27803 = e27227;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_27803);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_27803.message)].join('')));
}

var G__27804 = seq__27211;
var G__27805 = chunk__27212;
var G__27806 = count__27213;
var G__27807 = (i__27214 + (1));
seq__27211 = G__27804;
chunk__27212 = G__27805;
count__27213 = G__27806;
i__27214 = G__27807;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27211);
if(temp__5804__auto__){
var seq__27211__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27211__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__27211__$1);
var G__27810 = cljs.core.chunk_rest(seq__27211__$1);
var G__27811 = c__5525__auto__;
var G__27812 = cljs.core.count(c__5525__auto__);
var G__27813 = (0);
seq__27211 = G__27810;
chunk__27212 = G__27811;
count__27213 = G__27812;
i__27214 = G__27813;
continue;
} else {
var map__27237 = cljs.core.first(seq__27211__$1);
var map__27237__$1 = cljs.core.__destructure_map(map__27237);
var src = map__27237__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27237__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27237__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27237__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27237__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e27249){var e_27814 = e27249;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_27814);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_27814.message)].join('')));
}

var G__27815 = cljs.core.next(seq__27211__$1);
var G__27816 = null;
var G__27817 = (0);
var G__27818 = (0);
seq__27211 = G__27815;
chunk__27212 = G__27816;
count__27213 = G__27817;
i__27214 = G__27818;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__27259 = cljs.core.seq(js_requires);
var chunk__27260 = null;
var count__27261 = (0);
var i__27262 = (0);
while(true){
if((i__27262 < count__27261)){
var js_ns = chunk__27260.cljs$core$IIndexed$_nth$arity$2(null, i__27262);
var require_str_27821 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_27821);


var G__27822 = seq__27259;
var G__27823 = chunk__27260;
var G__27824 = count__27261;
var G__27825 = (i__27262 + (1));
seq__27259 = G__27822;
chunk__27260 = G__27823;
count__27261 = G__27824;
i__27262 = G__27825;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27259);
if(temp__5804__auto__){
var seq__27259__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27259__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__27259__$1);
var G__27826 = cljs.core.chunk_rest(seq__27259__$1);
var G__27827 = c__5525__auto__;
var G__27828 = cljs.core.count(c__5525__auto__);
var G__27829 = (0);
seq__27259 = G__27826;
chunk__27260 = G__27827;
count__27261 = G__27828;
i__27262 = G__27829;
continue;
} else {
var js_ns = cljs.core.first(seq__27259__$1);
var require_str_27830 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_27830);


var G__27831 = cljs.core.next(seq__27259__$1);
var G__27832 = null;
var G__27833 = (0);
var G__27834 = (0);
seq__27259 = G__27831;
chunk__27260 = G__27832;
count__27261 = G__27833;
i__27262 = G__27834;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__27266){
var map__27267 = p__27266;
var map__27267__$1 = cljs.core.__destructure_map(map__27267);
var msg = map__27267__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27267__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27267__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__27268(s__27269){
return (new cljs.core.LazySeq(null,(function (){
var s__27269__$1 = s__27269;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27269__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__27274 = cljs.core.first(xs__6360__auto__);
var map__27274__$1 = cljs.core.__destructure_map(map__27274);
var src = map__27274__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27274__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27274__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__27269__$1,map__27274,map__27274__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__27267,map__27267__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__27268_$_iter__27270(s__27271){
return (new cljs.core.LazySeq(null,((function (s__27269__$1,map__27274,map__27274__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__27267,map__27267__$1,msg,info,reload_info){
return (function (){
var s__27271__$1 = s__27271;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__27271__$1);
if(temp__5804__auto____$1){
var s__27271__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27271__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__27271__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__27273 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__27272 = (0);
while(true){
if((i__27272 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__27272);
cljs.core.chunk_append(b__27273,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__27835 = (i__27272 + (1));
i__27272 = G__27835;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27273),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__27268_$_iter__27270(cljs.core.chunk_rest(s__27271__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27273),null);
}
} else {
var warning = cljs.core.first(s__27271__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__27268_$_iter__27270(cljs.core.rest(s__27271__$2)));
}
} else {
return null;
}
break;
}
});})(s__27269__$1,map__27274,map__27274__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__27267,map__27267__$1,msg,info,reload_info))
,null,null));
});})(s__27269__$1,map__27274,map__27274__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__27267,map__27267__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__27268(cljs.core.rest(s__27269__$1)));
} else {
var G__27836 = cljs.core.rest(s__27269__$1);
s__27269__$1 = G__27836;
continue;
}
} else {
var G__27837 = cljs.core.rest(s__27269__$1);
s__27269__$1 = G__27837;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__27278_27840 = cljs.core.seq(warnings);
var chunk__27279_27841 = null;
var count__27280_27842 = (0);
var i__27281_27843 = (0);
while(true){
if((i__27281_27843 < count__27280_27842)){
var map__27284_27844 = chunk__27279_27841.cljs$core$IIndexed$_nth$arity$2(null, i__27281_27843);
var map__27284_27845__$1 = cljs.core.__destructure_map(map__27284_27844);
var w_27846 = map__27284_27845__$1;
var msg_27847__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27284_27845__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_27848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27284_27845__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_27849 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27284_27845__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_27850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27284_27845__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_27850)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_27848),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_27849),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_27847__$1)].join(''));


var G__27851 = seq__27278_27840;
var G__27852 = chunk__27279_27841;
var G__27853 = count__27280_27842;
var G__27854 = (i__27281_27843 + (1));
seq__27278_27840 = G__27851;
chunk__27279_27841 = G__27852;
count__27280_27842 = G__27853;
i__27281_27843 = G__27854;
continue;
} else {
var temp__5804__auto___27855 = cljs.core.seq(seq__27278_27840);
if(temp__5804__auto___27855){
var seq__27278_27856__$1 = temp__5804__auto___27855;
if(cljs.core.chunked_seq_QMARK_(seq__27278_27856__$1)){
var c__5525__auto___27857 = cljs.core.chunk_first(seq__27278_27856__$1);
var G__27858 = cljs.core.chunk_rest(seq__27278_27856__$1);
var G__27859 = c__5525__auto___27857;
var G__27860 = cljs.core.count(c__5525__auto___27857);
var G__27861 = (0);
seq__27278_27840 = G__27858;
chunk__27279_27841 = G__27859;
count__27280_27842 = G__27860;
i__27281_27843 = G__27861;
continue;
} else {
var map__27285_27862 = cljs.core.first(seq__27278_27856__$1);
var map__27285_27863__$1 = cljs.core.__destructure_map(map__27285_27862);
var w_27864 = map__27285_27863__$1;
var msg_27865__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27285_27863__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_27866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27285_27863__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_27867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27285_27863__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_27868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27285_27863__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_27868)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_27866),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_27867),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_27865__$1)].join(''));


var G__27869 = cljs.core.next(seq__27278_27856__$1);
var G__27870 = null;
var G__27871 = (0);
var G__27872 = (0);
seq__27278_27840 = G__27869;
chunk__27279_27841 = G__27870;
count__27280_27842 = G__27871;
i__27281_27843 = G__27872;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__27264_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__27264_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__27287 = node_uri;
G__27287.setQuery(null);

G__27287.setPath(new$);

return G__27287;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__27289){
var map__27290 = p__27289;
var map__27290__$1 = cljs.core.__destructure_map(map__27290);
var msg = map__27290__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27290__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27290__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__27291 = cljs.core.seq(updates);
var chunk__27293 = null;
var count__27294 = (0);
var i__27295 = (0);
while(true){
if((i__27295 < count__27294)){
var path = chunk__27293.cljs$core$IIndexed$_nth$arity$2(null, i__27295);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__27615_27873 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__27619_27874 = null;
var count__27620_27875 = (0);
var i__27621_27876 = (0);
while(true){
if((i__27621_27876 < count__27620_27875)){
var node_27877 = chunk__27619_27874.cljs$core$IIndexed$_nth$arity$2(null, i__27621_27876);
if(cljs.core.not(node_27877.shadow$old)){
var path_match_27878 = shadow.cljs.devtools.client.browser.match_paths(node_27877.getAttribute("href"),path);
if(cljs.core.truth_(path_match_27878)){
var new_link_27879 = (function (){var G__27669 = node_27877.cloneNode(true);
G__27669.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_27878),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__27669;
})();
(node_27877.shadow$old = true);

(new_link_27879.onload = ((function (seq__27615_27873,chunk__27619_27874,count__27620_27875,i__27621_27876,seq__27291,chunk__27293,count__27294,i__27295,new_link_27879,path_match_27878,node_27877,path,map__27290,map__27290__$1,msg,updates,reload_info){
return (function (e){
var seq__27672_27880 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__27674_27881 = null;
var count__27675_27882 = (0);
var i__27676_27883 = (0);
while(true){
if((i__27676_27883 < count__27675_27882)){
var map__27680_27884 = chunk__27674_27881.cljs$core$IIndexed$_nth$arity$2(null, i__27676_27883);
var map__27680_27885__$1 = cljs.core.__destructure_map(map__27680_27884);
var task_27886 = map__27680_27885__$1;
var fn_str_27887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27680_27885__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27680_27885__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27889 = goog.getObjectByName(fn_str_27887,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27888)].join(''));

(fn_obj_27889.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27889.cljs$core$IFn$_invoke$arity$2(path,new_link_27879) : fn_obj_27889.call(null, path,new_link_27879));


var G__27890 = seq__27672_27880;
var G__27891 = chunk__27674_27881;
var G__27892 = count__27675_27882;
var G__27893 = (i__27676_27883 + (1));
seq__27672_27880 = G__27890;
chunk__27674_27881 = G__27891;
count__27675_27882 = G__27892;
i__27676_27883 = G__27893;
continue;
} else {
var temp__5804__auto___27894 = cljs.core.seq(seq__27672_27880);
if(temp__5804__auto___27894){
var seq__27672_27895__$1 = temp__5804__auto___27894;
if(cljs.core.chunked_seq_QMARK_(seq__27672_27895__$1)){
var c__5525__auto___27896 = cljs.core.chunk_first(seq__27672_27895__$1);
var G__27897 = cljs.core.chunk_rest(seq__27672_27895__$1);
var G__27898 = c__5525__auto___27896;
var G__27899 = cljs.core.count(c__5525__auto___27896);
var G__27900 = (0);
seq__27672_27880 = G__27897;
chunk__27674_27881 = G__27898;
count__27675_27882 = G__27899;
i__27676_27883 = G__27900;
continue;
} else {
var map__27681_27901 = cljs.core.first(seq__27672_27895__$1);
var map__27681_27902__$1 = cljs.core.__destructure_map(map__27681_27901);
var task_27903 = map__27681_27902__$1;
var fn_str_27904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27681_27902__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27681_27902__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27906 = goog.getObjectByName(fn_str_27904,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27905)].join(''));

(fn_obj_27906.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27906.cljs$core$IFn$_invoke$arity$2(path,new_link_27879) : fn_obj_27906.call(null, path,new_link_27879));


var G__27907 = cljs.core.next(seq__27672_27895__$1);
var G__27908 = null;
var G__27909 = (0);
var G__27910 = (0);
seq__27672_27880 = G__27907;
chunk__27674_27881 = G__27908;
count__27675_27882 = G__27909;
i__27676_27883 = G__27910;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_27877);
});})(seq__27615_27873,chunk__27619_27874,count__27620_27875,i__27621_27876,seq__27291,chunk__27293,count__27294,i__27295,new_link_27879,path_match_27878,node_27877,path,map__27290,map__27290__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_27878], 0));

goog.dom.insertSiblingAfter(new_link_27879,node_27877);


var G__27911 = seq__27615_27873;
var G__27912 = chunk__27619_27874;
var G__27913 = count__27620_27875;
var G__27914 = (i__27621_27876 + (1));
seq__27615_27873 = G__27911;
chunk__27619_27874 = G__27912;
count__27620_27875 = G__27913;
i__27621_27876 = G__27914;
continue;
} else {
var G__27915 = seq__27615_27873;
var G__27916 = chunk__27619_27874;
var G__27917 = count__27620_27875;
var G__27918 = (i__27621_27876 + (1));
seq__27615_27873 = G__27915;
chunk__27619_27874 = G__27916;
count__27620_27875 = G__27917;
i__27621_27876 = G__27918;
continue;
}
} else {
var G__27919 = seq__27615_27873;
var G__27920 = chunk__27619_27874;
var G__27921 = count__27620_27875;
var G__27922 = (i__27621_27876 + (1));
seq__27615_27873 = G__27919;
chunk__27619_27874 = G__27920;
count__27620_27875 = G__27921;
i__27621_27876 = G__27922;
continue;
}
} else {
var temp__5804__auto___27923 = cljs.core.seq(seq__27615_27873);
if(temp__5804__auto___27923){
var seq__27615_27924__$1 = temp__5804__auto___27923;
if(cljs.core.chunked_seq_QMARK_(seq__27615_27924__$1)){
var c__5525__auto___27925 = cljs.core.chunk_first(seq__27615_27924__$1);
var G__27926 = cljs.core.chunk_rest(seq__27615_27924__$1);
var G__27927 = c__5525__auto___27925;
var G__27928 = cljs.core.count(c__5525__auto___27925);
var G__27929 = (0);
seq__27615_27873 = G__27926;
chunk__27619_27874 = G__27927;
count__27620_27875 = G__27928;
i__27621_27876 = G__27929;
continue;
} else {
var node_27930 = cljs.core.first(seq__27615_27924__$1);
if(cljs.core.not(node_27930.shadow$old)){
var path_match_27931 = shadow.cljs.devtools.client.browser.match_paths(node_27930.getAttribute("href"),path);
if(cljs.core.truth_(path_match_27931)){
var new_link_27932 = (function (){var G__27684 = node_27930.cloneNode(true);
G__27684.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_27931),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__27684;
})();
(node_27930.shadow$old = true);

(new_link_27932.onload = ((function (seq__27615_27873,chunk__27619_27874,count__27620_27875,i__27621_27876,seq__27291,chunk__27293,count__27294,i__27295,new_link_27932,path_match_27931,node_27930,seq__27615_27924__$1,temp__5804__auto___27923,path,map__27290,map__27290__$1,msg,updates,reload_info){
return (function (e){
var seq__27685_27933 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__27687_27934 = null;
var count__27688_27935 = (0);
var i__27689_27936 = (0);
while(true){
if((i__27689_27936 < count__27688_27935)){
var map__27694_27937 = chunk__27687_27934.cljs$core$IIndexed$_nth$arity$2(null, i__27689_27936);
var map__27694_27938__$1 = cljs.core.__destructure_map(map__27694_27937);
var task_27939 = map__27694_27938__$1;
var fn_str_27940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27694_27938__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27694_27938__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27942 = goog.getObjectByName(fn_str_27940,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27941)].join(''));

(fn_obj_27942.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27942.cljs$core$IFn$_invoke$arity$2(path,new_link_27932) : fn_obj_27942.call(null, path,new_link_27932));


var G__27943 = seq__27685_27933;
var G__27944 = chunk__27687_27934;
var G__27945 = count__27688_27935;
var G__27946 = (i__27689_27936 + (1));
seq__27685_27933 = G__27943;
chunk__27687_27934 = G__27944;
count__27688_27935 = G__27945;
i__27689_27936 = G__27946;
continue;
} else {
var temp__5804__auto___27947__$1 = cljs.core.seq(seq__27685_27933);
if(temp__5804__auto___27947__$1){
var seq__27685_27948__$1 = temp__5804__auto___27947__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27685_27948__$1)){
var c__5525__auto___27949 = cljs.core.chunk_first(seq__27685_27948__$1);
var G__27950 = cljs.core.chunk_rest(seq__27685_27948__$1);
var G__27951 = c__5525__auto___27949;
var G__27952 = cljs.core.count(c__5525__auto___27949);
var G__27953 = (0);
seq__27685_27933 = G__27950;
chunk__27687_27934 = G__27951;
count__27688_27935 = G__27952;
i__27689_27936 = G__27953;
continue;
} else {
var map__27696_27954 = cljs.core.first(seq__27685_27948__$1);
var map__27696_27955__$1 = cljs.core.__destructure_map(map__27696_27954);
var task_27956 = map__27696_27955__$1;
var fn_str_27957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27696_27955__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27696_27955__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27959 = goog.getObjectByName(fn_str_27957,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27958)].join(''));

(fn_obj_27959.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27959.cljs$core$IFn$_invoke$arity$2(path,new_link_27932) : fn_obj_27959.call(null, path,new_link_27932));


var G__27960 = cljs.core.next(seq__27685_27948__$1);
var G__27961 = null;
var G__27962 = (0);
var G__27963 = (0);
seq__27685_27933 = G__27960;
chunk__27687_27934 = G__27961;
count__27688_27935 = G__27962;
i__27689_27936 = G__27963;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_27930);
});})(seq__27615_27873,chunk__27619_27874,count__27620_27875,i__27621_27876,seq__27291,chunk__27293,count__27294,i__27295,new_link_27932,path_match_27931,node_27930,seq__27615_27924__$1,temp__5804__auto___27923,path,map__27290,map__27290__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_27931], 0));

goog.dom.insertSiblingAfter(new_link_27932,node_27930);


var G__27964 = cljs.core.next(seq__27615_27924__$1);
var G__27965 = null;
var G__27966 = (0);
var G__27967 = (0);
seq__27615_27873 = G__27964;
chunk__27619_27874 = G__27965;
count__27620_27875 = G__27966;
i__27621_27876 = G__27967;
continue;
} else {
var G__27968 = cljs.core.next(seq__27615_27924__$1);
var G__27969 = null;
var G__27970 = (0);
var G__27971 = (0);
seq__27615_27873 = G__27968;
chunk__27619_27874 = G__27969;
count__27620_27875 = G__27970;
i__27621_27876 = G__27971;
continue;
}
} else {
var G__27972 = cljs.core.next(seq__27615_27924__$1);
var G__27973 = null;
var G__27974 = (0);
var G__27975 = (0);
seq__27615_27873 = G__27972;
chunk__27619_27874 = G__27973;
count__27620_27875 = G__27974;
i__27621_27876 = G__27975;
continue;
}
}
} else {
}
}
break;
}


var G__27976 = seq__27291;
var G__27977 = chunk__27293;
var G__27978 = count__27294;
var G__27979 = (i__27295 + (1));
seq__27291 = G__27976;
chunk__27293 = G__27977;
count__27294 = G__27978;
i__27295 = G__27979;
continue;
} else {
var G__27980 = seq__27291;
var G__27981 = chunk__27293;
var G__27982 = count__27294;
var G__27983 = (i__27295 + (1));
seq__27291 = G__27980;
chunk__27293 = G__27981;
count__27294 = G__27982;
i__27295 = G__27983;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27291);
if(temp__5804__auto__){
var seq__27291__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27291__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__27291__$1);
var G__27984 = cljs.core.chunk_rest(seq__27291__$1);
var G__27985 = c__5525__auto__;
var G__27986 = cljs.core.count(c__5525__auto__);
var G__27987 = (0);
seq__27291 = G__27984;
chunk__27293 = G__27985;
count__27294 = G__27986;
i__27295 = G__27987;
continue;
} else {
var path = cljs.core.first(seq__27291__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__27702_27988 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__27706_27989 = null;
var count__27707_27990 = (0);
var i__27708_27991 = (0);
while(true){
if((i__27708_27991 < count__27707_27990)){
var node_27992 = chunk__27706_27989.cljs$core$IIndexed$_nth$arity$2(null, i__27708_27991);
if(cljs.core.not(node_27992.shadow$old)){
var path_match_27993 = shadow.cljs.devtools.client.browser.match_paths(node_27992.getAttribute("href"),path);
if(cljs.core.truth_(path_match_27993)){
var new_link_27994 = (function (){var G__27736 = node_27992.cloneNode(true);
G__27736.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_27993),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__27736;
})();
(node_27992.shadow$old = true);

(new_link_27994.onload = ((function (seq__27702_27988,chunk__27706_27989,count__27707_27990,i__27708_27991,seq__27291,chunk__27293,count__27294,i__27295,new_link_27994,path_match_27993,node_27992,path,seq__27291__$1,temp__5804__auto__,map__27290,map__27290__$1,msg,updates,reload_info){
return (function (e){
var seq__27737_27995 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__27739_27996 = null;
var count__27740_27997 = (0);
var i__27741_27998 = (0);
while(true){
if((i__27741_27998 < count__27740_27997)){
var map__27745_27999 = chunk__27739_27996.cljs$core$IIndexed$_nth$arity$2(null, i__27741_27998);
var map__27745_28000__$1 = cljs.core.__destructure_map(map__27745_27999);
var task_28001 = map__27745_28000__$1;
var fn_str_28002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27745_28000__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27745_28000__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28004 = goog.getObjectByName(fn_str_28002,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28003)].join(''));

(fn_obj_28004.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28004.cljs$core$IFn$_invoke$arity$2(path,new_link_27994) : fn_obj_28004.call(null, path,new_link_27994));


var G__28005 = seq__27737_27995;
var G__28006 = chunk__27739_27996;
var G__28007 = count__27740_27997;
var G__28008 = (i__27741_27998 + (1));
seq__27737_27995 = G__28005;
chunk__27739_27996 = G__28006;
count__27740_27997 = G__28007;
i__27741_27998 = G__28008;
continue;
} else {
var temp__5804__auto___28009__$1 = cljs.core.seq(seq__27737_27995);
if(temp__5804__auto___28009__$1){
var seq__27737_28010__$1 = temp__5804__auto___28009__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27737_28010__$1)){
var c__5525__auto___28011 = cljs.core.chunk_first(seq__27737_28010__$1);
var G__28012 = cljs.core.chunk_rest(seq__27737_28010__$1);
var G__28013 = c__5525__auto___28011;
var G__28014 = cljs.core.count(c__5525__auto___28011);
var G__28015 = (0);
seq__27737_27995 = G__28012;
chunk__27739_27996 = G__28013;
count__27740_27997 = G__28014;
i__27741_27998 = G__28015;
continue;
} else {
var map__27747_28016 = cljs.core.first(seq__27737_28010__$1);
var map__27747_28017__$1 = cljs.core.__destructure_map(map__27747_28016);
var task_28018 = map__27747_28017__$1;
var fn_str_28019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27747_28017__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27747_28017__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28021 = goog.getObjectByName(fn_str_28019,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28020)].join(''));

(fn_obj_28021.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28021.cljs$core$IFn$_invoke$arity$2(path,new_link_27994) : fn_obj_28021.call(null, path,new_link_27994));


var G__28022 = cljs.core.next(seq__27737_28010__$1);
var G__28023 = null;
var G__28024 = (0);
var G__28025 = (0);
seq__27737_27995 = G__28022;
chunk__27739_27996 = G__28023;
count__27740_27997 = G__28024;
i__27741_27998 = G__28025;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_27992);
});})(seq__27702_27988,chunk__27706_27989,count__27707_27990,i__27708_27991,seq__27291,chunk__27293,count__27294,i__27295,new_link_27994,path_match_27993,node_27992,path,seq__27291__$1,temp__5804__auto__,map__27290,map__27290__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_27993], 0));

goog.dom.insertSiblingAfter(new_link_27994,node_27992);


var G__28026 = seq__27702_27988;
var G__28027 = chunk__27706_27989;
var G__28028 = count__27707_27990;
var G__28029 = (i__27708_27991 + (1));
seq__27702_27988 = G__28026;
chunk__27706_27989 = G__28027;
count__27707_27990 = G__28028;
i__27708_27991 = G__28029;
continue;
} else {
var G__28030 = seq__27702_27988;
var G__28031 = chunk__27706_27989;
var G__28032 = count__27707_27990;
var G__28033 = (i__27708_27991 + (1));
seq__27702_27988 = G__28030;
chunk__27706_27989 = G__28031;
count__27707_27990 = G__28032;
i__27708_27991 = G__28033;
continue;
}
} else {
var G__28034 = seq__27702_27988;
var G__28035 = chunk__27706_27989;
var G__28036 = count__27707_27990;
var G__28037 = (i__27708_27991 + (1));
seq__27702_27988 = G__28034;
chunk__27706_27989 = G__28035;
count__27707_27990 = G__28036;
i__27708_27991 = G__28037;
continue;
}
} else {
var temp__5804__auto___28038__$1 = cljs.core.seq(seq__27702_27988);
if(temp__5804__auto___28038__$1){
var seq__27702_28039__$1 = temp__5804__auto___28038__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27702_28039__$1)){
var c__5525__auto___28040 = cljs.core.chunk_first(seq__27702_28039__$1);
var G__28041 = cljs.core.chunk_rest(seq__27702_28039__$1);
var G__28042 = c__5525__auto___28040;
var G__28043 = cljs.core.count(c__5525__auto___28040);
var G__28044 = (0);
seq__27702_27988 = G__28041;
chunk__27706_27989 = G__28042;
count__27707_27990 = G__28043;
i__27708_27991 = G__28044;
continue;
} else {
var node_28045 = cljs.core.first(seq__27702_28039__$1);
if(cljs.core.not(node_28045.shadow$old)){
var path_match_28046 = shadow.cljs.devtools.client.browser.match_paths(node_28045.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28046)){
var new_link_28047 = (function (){var G__27753 = node_28045.cloneNode(true);
G__27753.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28046),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__27753;
})();
(node_28045.shadow$old = true);

(new_link_28047.onload = ((function (seq__27702_27988,chunk__27706_27989,count__27707_27990,i__27708_27991,seq__27291,chunk__27293,count__27294,i__27295,new_link_28047,path_match_28046,node_28045,seq__27702_28039__$1,temp__5804__auto___28038__$1,path,seq__27291__$1,temp__5804__auto__,map__27290,map__27290__$1,msg,updates,reload_info){
return (function (e){
var seq__27754_28048 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__27756_28049 = null;
var count__27757_28050 = (0);
var i__27758_28051 = (0);
while(true){
if((i__27758_28051 < count__27757_28050)){
var map__27766_28052 = chunk__27756_28049.cljs$core$IIndexed$_nth$arity$2(null, i__27758_28051);
var map__27766_28053__$1 = cljs.core.__destructure_map(map__27766_28052);
var task_28054 = map__27766_28053__$1;
var fn_str_28055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27766_28053__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27766_28053__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28057 = goog.getObjectByName(fn_str_28055,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28056)].join(''));

(fn_obj_28057.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28057.cljs$core$IFn$_invoke$arity$2(path,new_link_28047) : fn_obj_28057.call(null, path,new_link_28047));


var G__28058 = seq__27754_28048;
var G__28059 = chunk__27756_28049;
var G__28060 = count__27757_28050;
var G__28061 = (i__27758_28051 + (1));
seq__27754_28048 = G__28058;
chunk__27756_28049 = G__28059;
count__27757_28050 = G__28060;
i__27758_28051 = G__28061;
continue;
} else {
var temp__5804__auto___28062__$2 = cljs.core.seq(seq__27754_28048);
if(temp__5804__auto___28062__$2){
var seq__27754_28063__$1 = temp__5804__auto___28062__$2;
if(cljs.core.chunked_seq_QMARK_(seq__27754_28063__$1)){
var c__5525__auto___28064 = cljs.core.chunk_first(seq__27754_28063__$1);
var G__28065 = cljs.core.chunk_rest(seq__27754_28063__$1);
var G__28066 = c__5525__auto___28064;
var G__28067 = cljs.core.count(c__5525__auto___28064);
var G__28068 = (0);
seq__27754_28048 = G__28065;
chunk__27756_28049 = G__28066;
count__27757_28050 = G__28067;
i__27758_28051 = G__28068;
continue;
} else {
var map__27767_28070 = cljs.core.first(seq__27754_28063__$1);
var map__27767_28071__$1 = cljs.core.__destructure_map(map__27767_28070);
var task_28072 = map__27767_28071__$1;
var fn_str_28073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27767_28071__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27767_28071__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28075 = goog.getObjectByName(fn_str_28073,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28074)].join(''));

(fn_obj_28075.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28075.cljs$core$IFn$_invoke$arity$2(path,new_link_28047) : fn_obj_28075.call(null, path,new_link_28047));


var G__28076 = cljs.core.next(seq__27754_28063__$1);
var G__28077 = null;
var G__28078 = (0);
var G__28079 = (0);
seq__27754_28048 = G__28076;
chunk__27756_28049 = G__28077;
count__27757_28050 = G__28078;
i__27758_28051 = G__28079;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_28045);
});})(seq__27702_27988,chunk__27706_27989,count__27707_27990,i__27708_27991,seq__27291,chunk__27293,count__27294,i__27295,new_link_28047,path_match_28046,node_28045,seq__27702_28039__$1,temp__5804__auto___28038__$1,path,seq__27291__$1,temp__5804__auto__,map__27290,map__27290__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28046], 0));

goog.dom.insertSiblingAfter(new_link_28047,node_28045);


var G__28080 = cljs.core.next(seq__27702_28039__$1);
var G__28081 = null;
var G__28082 = (0);
var G__28083 = (0);
seq__27702_27988 = G__28080;
chunk__27706_27989 = G__28081;
count__27707_27990 = G__28082;
i__27708_27991 = G__28083;
continue;
} else {
var G__28084 = cljs.core.next(seq__27702_28039__$1);
var G__28085 = null;
var G__28086 = (0);
var G__28087 = (0);
seq__27702_27988 = G__28084;
chunk__27706_27989 = G__28085;
count__27707_27990 = G__28086;
i__27708_27991 = G__28087;
continue;
}
} else {
var G__28088 = cljs.core.next(seq__27702_28039__$1);
var G__28089 = null;
var G__28090 = (0);
var G__28091 = (0);
seq__27702_27988 = G__28088;
chunk__27706_27989 = G__28089;
count__27707_27990 = G__28090;
i__27708_27991 = G__28091;
continue;
}
}
} else {
}
}
break;
}


var G__28092 = cljs.core.next(seq__27291__$1);
var G__28093 = null;
var G__28094 = (0);
var G__28095 = (0);
seq__27291 = G__28092;
chunk__27293 = G__28093;
count__27294 = G__28094;
i__27295 = G__28095;
continue;
} else {
var G__28096 = cljs.core.next(seq__27291__$1);
var G__28097 = null;
var G__28098 = (0);
var G__28099 = (0);
seq__27291 = G__28096;
chunk__27293 = G__28097;
count__27294 = G__28098;
i__27295 = G__28099;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__27771){
var map__27772 = p__27771;
var map__27772__$1 = cljs.core.__destructure_map(map__27772);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27772__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__27777,done,error){
var map__27778 = p__27777;
var map__27778__$1 = cljs.core.__destructure_map(map__27778);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27778__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__27779,done,error){
var map__27780 = p__27779;
var map__27780__$1 = cljs.core.__destructure_map(map__27780);
var msg = map__27780__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27780__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27780__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27780__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__27781){
var map__27783 = p__27781;
var map__27783__$1 = cljs.core.__destructure_map(map__27783);
var src = map__27783__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27783__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__27784 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__27784) : done.call(null, G__27784));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__27785){
var map__27786 = p__27785;
var map__27786__$1 = cljs.core.__destructure_map(map__27786);
var msg__$1 = map__27786__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27786__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e27787){var ex = e27787;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__27788){
var map__27790 = p__27788;
var map__27790__$1 = cljs.core.__destructure_map(map__27790);
var env = map__27790__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27790__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__27796){
var map__27797 = p__27796;
var map__27797__$1 = cljs.core.__destructure_map(map__27797);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27797__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27797__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__27798){
var map__27799 = p__27798;
var map__27799__$1 = cljs.core.__destructure_map(map__27799);
var svc = map__27799__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27799__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
