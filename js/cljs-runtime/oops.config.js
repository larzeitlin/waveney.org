goog.provide('oops.config');
oops.config.get_initial_runtime_config = (function oops$config$get_initial_runtime_config(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unexpected-empty-selector","unexpected-empty-selector",-572791900),new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.Keyword(null,"unexpected-punching-selector","unexpected-punching-selector",-1934135338),new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.Keyword(null,"unexpected-soft-selector","unexpected-soft-selector",-1117708580),new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031)],[new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"console","console",1228072057),true,new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"js-obj","js-obj",-1298148277),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),true,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032)]);
});
oops.config._STAR_runtime_config_STAR_ = oops.config.get_initial_runtime_config();
oops.config.set_current_runtime_config_BANG_ = (function oops$config$set_current_runtime_config_BANG_(new_config){
if(cljs.core.map_QMARK_(new_config)){
} else {
throw (new Error("Assert failed: (map? new-config)"));
}

(oops.config._STAR_runtime_config_STAR_ = new_config);

return new_config;
});
oops.config.get_current_runtime_config = (function oops$config$get_current_runtime_config(){
return oops.config._STAR_runtime_config_STAR_;
});
oops.config.update_current_runtime_config_BANG_ = (function oops$config$update_current_runtime_config_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19167 = arguments.length;
var i__5727__auto___19168 = (0);
while(true){
if((i__5727__auto___19168 < len__5726__auto___19167)){
args__5732__auto__.push((arguments[i__5727__auto___19168]));

var G__19169 = (i__5727__auto___19168 + (1));
i__5727__auto___19168 = G__19169;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f_or_map,args){
if(cljs.core.map_QMARK_(f_or_map)){
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f_or_map], 0));
} else {
return oops.config.set_current_runtime_config_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_or_map,oops.config.get_current_runtime_config(),args));
}
}));

(oops.config.update_current_runtime_config_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq19014){
var G__19015 = cljs.core.first(seq19014);
var seq19014__$1 = cljs.core.next(seq19014);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19015,seq19014__$1);
}));

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19175 = arguments.length;
var i__5727__auto___19176 = (0);
while(true){
if((i__5727__auto___19176 < len__5726__auto___19175)){
args__5732__auto__.push((arguments[i__5727__auto___19176]));

var G__19177 = (i__5727__auto___19176 + (1));
i__5727__auto___19176 = G__19177;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__19044){
var vec__19046 = p__19044;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19046,(0),null);
var G__19049 = (function (){var or__5002__auto__ = config;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__19049) : key.call(null, G__19049));
}));

(oops.config.get_config_key.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.config.get_config_key.cljs$lang$applyTo = (function (seq19033){
var G__19034 = cljs.core.first(seq19033);
var seq19033__$1 = cljs.core.next(seq19033);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19034,seq19033__$1);
}));

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19184 = arguments.length;
var i__5727__auto___19185 = (0);
while(true){
if((i__5727__auto___19185 < len__5726__auto___19184)){
args__5732__auto__.push((arguments[i__5727__auto___19185]));

var G__19188 = (i__5727__auto___19185 + (1));
i__5727__auto___19185 = G__19188;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__19068){
var vec__19069 = p__19068;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19069,(0),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457),cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var or__5002__auto__ = config;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})(),key,new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457)));
}));

(oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq19058){
var G__19059 = cljs.core.first(seq19058);
var seq19058__$1 = cljs.core.next(seq19058);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19059,seq19058__$1);
}));

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19194 = arguments.length;
var i__5727__auto___19195 = (0);
while(true){
if((i__5727__auto___19195 < len__5726__auto___19194)){
args__5732__auto__.push((arguments[i__5727__auto___19195]));

var G__19198 = (i__5727__auto___19195 + (1));
i__5727__auto___19195 = G__19198;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__19078){
var vec__19079 = p__19078;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19079,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
}));

(oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq19074){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19074));
}));

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19203 = arguments.length;
var i__5727__auto___19204 = (0);
while(true){
if((i__5727__auto___19204 < len__5726__auto___19203)){
args__5732__auto__.push((arguments[i__5727__auto___19204]));

var G__19205 = (i__5727__auto___19204 + (1));
i__5727__auto___19204 = G__19205;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__19090){
var vec__19093 = p__19090;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19093,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
}));

(oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq19087){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19087));
}));

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19208 = arguments.length;
var i__5727__auto___19209 = (0);
while(true){
if((i__5727__auto___19209 < len__5726__auto___19208)){
args__5732__auto__.push((arguments[i__5727__auto___19209]));

var G__19211 = (i__5727__auto___19209 + (1));
i__5727__auto___19209 = G__19211;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__19108){
var vec__19109 = p__19108;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19109,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"suppress-reporting","suppress-reporting",43885458),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
}));

(oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq19103){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19103));
}));

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19215 = arguments.length;
var i__5727__auto___19216 = (0);
while(true){
if((i__5727__auto___19216 < len__5726__auto___19215)){
args__5732__auto__.push((arguments[i__5727__auto___19216]));

var G__19218 = (i__5727__auto___19216 + (1));
i__5727__auto___19216 = G__19218;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__19119){
var vec__19120 = p__19119;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19120,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
}));

(oops.config.get_child_factory.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_child_factory.cljs$lang$applyTo = (function (seq19114){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19114));
}));

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19228 = arguments.length;
var i__5727__auto___19229 = (0);
while(true){
if((i__5727__auto___19229 < len__5726__auto___19228)){
args__5732__auto__.push((arguments[i__5727__auto___19229]));

var G__19230 = (i__5727__auto___19229 + (1));
i__5727__auto___19229 = G__19230;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19137){
var vec__19138 = p__19137;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19138,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
}));

(oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq19128){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19128));
}));

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19234 = arguments.length;
var i__5727__auto___19235 = (0);
while(true){
if((i__5727__auto___19235 < len__5726__auto___19234)){
args__5732__auto__.push((arguments[i__5727__auto___19235]));

var G__19237 = (i__5727__auto___19235 + (1));
i__5727__auto___19235 = G__19237;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19149){
var vec__19150 = p__19149;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19150,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
}));

(oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq19145){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19145));
}));


//# sourceMappingURL=oops.config.js.map
