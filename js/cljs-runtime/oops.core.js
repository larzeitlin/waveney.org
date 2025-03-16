goog.provide('oops.core');
goog.scope(function(){
  oops.core.goog$module$goog$object = goog.module.get('goog.object');
});
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__19638 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__19638)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__19638)){
var G__19640 = (console["error"]);
var G__19641 = msg;
var G__19642 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__19639 = oops.state.get_console_reporter();
return (fexpr__19639.cljs$core$IFn$_invoke$arity$3 ? fexpr__19639.cljs$core$IFn$_invoke$arity$3(G__19640,G__19641,G__19642) : fexpr__19639.call(null, G__19640,G__19641,G__19642));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__19638)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19638)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__19643 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__19643)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__19643)){
var G__19645 = (console["warn"]);
var G__19646 = msg;
var G__19647 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__19644 = oops.state.get_console_reporter();
return (fexpr__19644.cljs$core$IFn$_invoke$arity$3 ? fexpr__19644.cljs$core$IFn$_invoke$arity$3(G__19645,G__19646,G__19647) : fexpr__19644.call(null, G__19645,G__19646,G__19647));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__19643)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19643)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19720 = arguments.length;
var i__5727__auto___19721 = (0);
while(true){
if((i__5727__auto___19721 < len__5726__auto___19720)){
args__5732__auto__.push((arguments[i__5727__auto___19721]));

var G__19722 = (i__5727__auto___19721 + (1));
i__5727__auto___19721 = G__19722;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__19650){
var vec__19651 = p__19650;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19651,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__19654_19723 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__19654_19723)){
oops.core.report_warning_dynamically(oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__19654_19723)){
oops.core.report_error_dynamically(oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__19654_19723)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__19654_19723)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19654_19723)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq19648){
var G__19649 = cljs.core.first(seq19648);
var seq19648__$1 = cljs.core.next(seq19648);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19649,seq19648__$1);
}));

oops.core.gobj_get = (function oops$core$gobj_get(obj,key){
return oops.core.goog$module$goog$object.get(obj,key);
});
oops.core.gobj_set = (function oops$core$gobj_set(obj,key,val){
return oops.core.goog$module$goog$object.set(obj,key,val);
});
oops.core.gobj_containsKey = (function oops$core$gobj_containsKey(obj,key){
return oops.core.goog$module$goog$object.containsKey(obj,key);
});
oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return false;
})()
):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return false;
})()
):((cljs.core.boolean_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return false;
})()
):((typeof obj === 'number')?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return false;
})()
):((typeof obj === 'string')?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return false;
})()
):((cljs.core.not(goog.isObject(obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_(key);

oops.state.set_last_access_modifier_BANG_(mode);
} else {
}

var and__5000__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && (cljs.core.not(oops.core.gobj_containsKey(obj,key)))))?oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0)):true):true);
if(cljs.core.truth_(and__5000__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5806__auto__ = oops.helpers.get_property_descriptor(obj,key);
if((temp__5806__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_(obj))){
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_(obj))){
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));
} else {
return true;

}
}
} else {
var descriptor_19655 = temp__5806__auto__;
var temp__5806__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_19655);
if((temp__5806__auto____$1 == null)){
return true;
} else {
var reason_19656 = temp__5806__auto____$1;
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_19656,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));
}
}
} else {
return true;
}
} else {
return and__5000__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null)))){
return true;
} else {
if(typeof fn === 'function'){
return true;
} else {
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_19658 = oops.config.get_child_factory();
var child_factory_19658__$1 = (function (){var G__19659 = child_factory_19658;
var G__19659__$1 = (((G__19659 instanceof cljs.core.Keyword))?G__19659.fqn:null);
switch (G__19659__$1) {
case "js-obj":
return (function (){
return ({});
});

break;
case "js-array":
return (function (){
return [];
});

break;
default:
return child_factory_19658;

}
})();

var child_obj_19657 = (child_factory_19658__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_19658__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_19658__$1.call(null, obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_19657);
} else {
}

return child_obj_19657;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_19662 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_19662);

return selector_path_19662;
} else {
var selector_path_19663 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_19663);

return selector_path_19663;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5808__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5808__auto__ == null)){
return null;
} else {
var issue_19664 = temp__5808__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_19664);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,false)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_19673 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_19673,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)], 0));
})():true))){
var path_19666 = (function (){var path_19665 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_19665,(0));

return path_19665;
})();
var len_19667 = path_19666.length;
var i_19668 = (0);
var obj_19669 = obj;
while(true){
if((i_19668 < len_19667)){
var mode_19670 = (path_19666[i_19668]);
var key_19671 = (path_19666[(i_19668 + (1))]);
var next_obj_19672 = oops.core.get_key_dynamically(obj_19669,key_19671,mode_19670);
var G__19674 = mode_19670;
switch (G__19674) {
case (0):
var G__19729 = (i_19668 + (2));
var G__19730 = next_obj_19672;
i_19668 = G__19729;
obj_19669 = G__19730;
continue;

break;
case (1):
if((!((next_obj_19672 == null)))){
var G__19731 = (i_19668 + (2));
var G__19732 = next_obj_19672;
i_19668 = G__19731;
obj_19669 = G__19732;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_19672 == null)))){
var G__19733 = (i_19668 + (2));
var G__19734 = next_obj_19672;
i_19668 = G__19733;
obj_19669 = G__19734;
continue;
} else {
var G__19735 = (i_19668 + (2));
var G__19736 = oops.core.punch_key_dynamically_BANG_(obj_19669,key_19671);
i_19668 = G__19735;
obj_19669 = G__19736;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19674)].join('')));

}
} else {
return obj_19669;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_19700 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_19700,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)], 0));
})():true))){
var path_19676 = (function (){var path_19675 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_19675,(0));

return path_19675;
})();
var len_19677 = path_19676.length;
if((len_19677 < (4))){
return [obj,(function (){var path_19679 = path_19676;
var len_19680 = path_19679.length;
var i_19681 = (0);
var obj_19682 = obj;
while(true){
if((i_19681 < len_19680)){
var mode_19683 = (path_19679[i_19681]);
var key_19684 = (path_19679[(i_19681 + (1))]);
var next_obj_19685 = oops.core.get_key_dynamically(obj_19682,key_19684,mode_19683);
var G__19701 = mode_19683;
switch (G__19701) {
case (0):
var G__19740 = (i_19681 + (2));
var G__19741 = next_obj_19685;
i_19681 = G__19740;
obj_19682 = G__19741;
continue;

break;
case (1):
if((!((next_obj_19685 == null)))){
var G__19743 = (i_19681 + (2));
var G__19744 = next_obj_19685;
i_19681 = G__19743;
obj_19682 = G__19744;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_19685 == null)))){
var G__19745 = (i_19681 + (2));
var G__19746 = next_obj_19685;
i_19681 = G__19745;
obj_19682 = G__19746;
continue;
} else {
var G__19747 = (i_19681 + (2));
var G__19748 = oops.core.punch_key_dynamically_BANG_(obj_19682,key_19684);
i_19681 = G__19747;
obj_19682 = G__19748;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19701)].join('')));

}
} else {
return obj_19682;
}
break;
}
})()];
} else {
var target_obj_19678 = (function (){var path_19686 = path_19676.slice((0),(len_19677 - (2)));
var len_19687 = path_19686.length;
var i_19688 = (0);
var obj_19689 = obj;
while(true){
if((i_19688 < len_19687)){
var mode_19690 = (path_19686[i_19688]);
var key_19691 = (path_19686[(i_19688 + (1))]);
var next_obj_19692 = oops.core.get_key_dynamically(obj_19689,key_19691,mode_19690);
var G__19702 = mode_19690;
switch (G__19702) {
case (0):
var G__19750 = (i_19688 + (2));
var G__19751 = next_obj_19692;
i_19688 = G__19750;
obj_19689 = G__19751;
continue;

break;
case (1):
if((!((next_obj_19692 == null)))){
var G__19752 = (i_19688 + (2));
var G__19753 = next_obj_19692;
i_19688 = G__19752;
obj_19689 = G__19753;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_19692 == null)))){
var G__19754 = (i_19688 + (2));
var G__19755 = next_obj_19692;
i_19688 = G__19754;
obj_19689 = G__19755;
continue;
} else {
var G__19756 = (i_19688 + (2));
var G__19757 = oops.core.punch_key_dynamically_BANG_(obj_19689,key_19691);
i_19688 = G__19756;
obj_19689 = G__19757;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19702)].join('')));

}
} else {
return obj_19689;
}
break;
}
})();
return [target_obj_19678,(function (){var path_19693 = [(path_19676[(len_19677 - (2))]),(path_19676[(len_19677 - (1))])];
var len_19694 = path_19693.length;
var i_19695 = (0);
var obj_19696 = target_obj_19678;
while(true){
if((i_19695 < len_19694)){
var mode_19697 = (path_19693[i_19695]);
var key_19698 = (path_19693[(i_19695 + (1))]);
var next_obj_19699 = oops.core.get_key_dynamically(obj_19696,key_19698,mode_19697);
var G__19703 = mode_19697;
switch (G__19703) {
case (0):
var G__19759 = (i_19695 + (2));
var G__19760 = next_obj_19699;
i_19695 = G__19759;
obj_19696 = G__19760;
continue;

break;
case (1):
if((!((next_obj_19699 == null)))){
var G__19761 = (i_19695 + (2));
var G__19762 = next_obj_19699;
i_19695 = G__19761;
obj_19696 = G__19762;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_19699 == null)))){
var G__19763 = (i_19695 + (2));
var G__19764 = next_obj_19699;
i_19695 = G__19763;
obj_19696 = G__19764;
continue;
} else {
var G__19765 = (i_19695 + (2));
var G__19766 = oops.core.punch_key_dynamically_BANG_(obj_19696,key_19698);
i_19695 = G__19765;
obj_19696 = G__19766;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19703)].join('')));

}
} else {
return obj_19696;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_19718 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_19718,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)], 0));
})():true))){
var path_19705 = (function (){var path_19704 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_19704,(1));

return path_19704;
})();
var len_19708 = path_19705.length;
var parent_obj_path_19709 = path_19705.slice((0),(len_19708 - (2)));
var key_19706 = (path_19705[(len_19708 - (1))]);
var mode_19707 = (path_19705[(len_19708 - (2))]);
var parent_obj_19710 = (function (){var path_19711 = parent_obj_path_19709;
var len_19712 = path_19711.length;
var i_19713 = (0);
var obj_19714 = obj;
while(true){
if((i_19713 < len_19712)){
var mode_19715 = (path_19711[i_19713]);
var key_19716 = (path_19711[(i_19713 + (1))]);
var next_obj_19717 = oops.core.get_key_dynamically(obj_19714,key_19716,mode_19715);
var G__19719 = mode_19715;
switch (G__19719) {
case (0):
var G__19768 = (i_19713 + (2));
var G__19769 = next_obj_19717;
i_19713 = G__19768;
obj_19714 = G__19769;
continue;

break;
case (1):
if((!((next_obj_19717 == null)))){
var G__19770 = (i_19713 + (2));
var G__19771 = next_obj_19717;
i_19713 = G__19770;
obj_19714 = G__19771;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_19717 == null)))){
var G__19772 = (i_19713 + (2));
var G__19773 = next_obj_19717;
i_19713 = G__19772;
obj_19714 = G__19773;
continue;
} else {
var G__19774 = (i_19713 + (2));
var G__19775 = oops.core.punch_key_dynamically_BANG_(obj_19714,key_19716);
i_19713 = G__19774;
obj_19714 = G__19775;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19719)].join('')));

}
} else {
return obj_19714;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_19710,key_19706,val,mode_19707);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
