goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_19237 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_19237(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_19249 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_19249(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__18004 = coll;
var G__18005 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__18004,G__18005) : shadow.dom.lazy_native_coll_seq.call(null, G__18004,G__18005));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__18019 = arguments.length;
switch (G__18019) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__18034 = arguments.length;
switch (G__18034) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__18037 = arguments.length;
switch (G__18037) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__18043 = arguments.length;
switch (G__18043) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__18051 = arguments.length;
switch (G__18051) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__18060 = arguments.length;
switch (G__18060) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e18065){if((e18065 instanceof Object)){
var e = e18065;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18065;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__18068 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18069 = null;
var count__18070 = (0);
var i__18071 = (0);
while(true){
if((i__18071 < count__18070)){
var el = chunk__18069.cljs$core$IIndexed$_nth$arity$2(null, i__18071);
var handler_19399__$1 = ((function (seq__18068,chunk__18069,count__18070,i__18071,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__18068,chunk__18069,count__18070,i__18071,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19399__$1);


var G__19400 = seq__18068;
var G__19401 = chunk__18069;
var G__19402 = count__18070;
var G__19403 = (i__18071 + (1));
seq__18068 = G__19400;
chunk__18069 = G__19401;
count__18070 = G__19402;
i__18071 = G__19403;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18068);
if(temp__5804__auto__){
var seq__18068__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18068__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18068__$1);
var G__19404 = cljs.core.chunk_rest(seq__18068__$1);
var G__19405 = c__5525__auto__;
var G__19406 = cljs.core.count(c__5525__auto__);
var G__19407 = (0);
seq__18068 = G__19404;
chunk__18069 = G__19405;
count__18070 = G__19406;
i__18071 = G__19407;
continue;
} else {
var el = cljs.core.first(seq__18068__$1);
var handler_19408__$1 = ((function (seq__18068,chunk__18069,count__18070,i__18071,el,seq__18068__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__18068,chunk__18069,count__18070,i__18071,el,seq__18068__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19408__$1);


var G__19410 = cljs.core.next(seq__18068__$1);
var G__19412 = null;
var G__19413 = (0);
var G__19414 = (0);
seq__18068 = G__19410;
chunk__18069 = G__19412;
count__18070 = G__19413;
i__18071 = G__19414;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__18116 = arguments.length;
switch (G__18116) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18144 = cljs.core.seq(events);
var chunk__18145 = null;
var count__18146 = (0);
var i__18147 = (0);
while(true){
if((i__18147 < count__18146)){
var vec__18166 = chunk__18145.cljs$core$IIndexed$_nth$arity$2(null, i__18147);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18166,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18166,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19425 = seq__18144;
var G__19426 = chunk__18145;
var G__19427 = count__18146;
var G__19428 = (i__18147 + (1));
seq__18144 = G__19425;
chunk__18145 = G__19426;
count__18146 = G__19427;
i__18147 = G__19428;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18144);
if(temp__5804__auto__){
var seq__18144__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18144__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18144__$1);
var G__19432 = cljs.core.chunk_rest(seq__18144__$1);
var G__19433 = c__5525__auto__;
var G__19434 = cljs.core.count(c__5525__auto__);
var G__19435 = (0);
seq__18144 = G__19432;
chunk__18145 = G__19433;
count__18146 = G__19434;
i__18147 = G__19435;
continue;
} else {
var vec__18182 = cljs.core.first(seq__18144__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18182,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18182,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19449 = cljs.core.next(seq__18144__$1);
var G__19450 = null;
var G__19451 = (0);
var G__19452 = (0);
seq__18144 = G__19449;
chunk__18145 = G__19450;
count__18146 = G__19451;
i__18147 = G__19452;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18185 = cljs.core.seq(styles);
var chunk__18186 = null;
var count__18187 = (0);
var i__18188 = (0);
while(true){
if((i__18188 < count__18187)){
var vec__18200 = chunk__18186.cljs$core$IIndexed$_nth$arity$2(null, i__18188);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18200,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18200,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19459 = seq__18185;
var G__19460 = chunk__18186;
var G__19461 = count__18187;
var G__19462 = (i__18188 + (1));
seq__18185 = G__19459;
chunk__18186 = G__19460;
count__18187 = G__19461;
i__18188 = G__19462;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18185);
if(temp__5804__auto__){
var seq__18185__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18185__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18185__$1);
var G__19465 = cljs.core.chunk_rest(seq__18185__$1);
var G__19466 = c__5525__auto__;
var G__19467 = cljs.core.count(c__5525__auto__);
var G__19468 = (0);
seq__18185 = G__19465;
chunk__18186 = G__19466;
count__18187 = G__19467;
i__18188 = G__19468;
continue;
} else {
var vec__18203 = cljs.core.first(seq__18185__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18203,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18203,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19473 = cljs.core.next(seq__18185__$1);
var G__19474 = null;
var G__19475 = (0);
var G__19476 = (0);
seq__18185 = G__19473;
chunk__18186 = G__19474;
count__18187 = G__19475;
i__18188 = G__19476;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__18207_19486 = key;
var G__18207_19487__$1 = (((G__18207_19486 instanceof cljs.core.Keyword))?G__18207_19486.fqn:null);
switch (G__18207_19487__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19498 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_19498,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_19498,"aria-");
}
})())){
el.setAttribute(ks_19498,value);
} else {
(el[ks_19498] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18219){
var map__18220 = p__18219;
var map__18220__$1 = cljs.core.__destructure_map(map__18220);
var props = map__18220__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18220__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18226 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18226,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18226,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18226,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18234 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18234,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18234;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18236 = arguments.length;
switch (G__18236) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18252){
var vec__18254 = p__18252;
var seq__18255 = cljs.core.seq(vec__18254);
var first__18256 = cljs.core.first(seq__18255);
var seq__18255__$1 = cljs.core.next(seq__18255);
var nn = first__18256;
var first__18256__$1 = cljs.core.first(seq__18255__$1);
var seq__18255__$2 = cljs.core.next(seq__18255__$1);
var np = first__18256__$1;
var nc = seq__18255__$2;
var node = vec__18254;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18257 = nn;
var G__18258 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18257,G__18258) : create_fn.call(null, G__18257,G__18258));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18265 = nn;
var G__18266 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18265,G__18266) : create_fn.call(null, G__18265,G__18266));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18270 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18270,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18270,(1),null);
var seq__18275_19573 = cljs.core.seq(node_children);
var chunk__18276_19574 = null;
var count__18277_19575 = (0);
var i__18278_19576 = (0);
while(true){
if((i__18278_19576 < count__18277_19575)){
var child_struct_19578 = chunk__18276_19574.cljs$core$IIndexed$_nth$arity$2(null, i__18278_19576);
var children_19579 = shadow.dom.dom_node(child_struct_19578);
if(cljs.core.seq_QMARK_(children_19579)){
var seq__18342_19581 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19579));
var chunk__18344_19582 = null;
var count__18345_19583 = (0);
var i__18346_19584 = (0);
while(true){
if((i__18346_19584 < count__18345_19583)){
var child_19586 = chunk__18344_19582.cljs$core$IIndexed$_nth$arity$2(null, i__18346_19584);
if(cljs.core.truth_(child_19586)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19586);


var G__19587 = seq__18342_19581;
var G__19588 = chunk__18344_19582;
var G__19589 = count__18345_19583;
var G__19590 = (i__18346_19584 + (1));
seq__18342_19581 = G__19587;
chunk__18344_19582 = G__19588;
count__18345_19583 = G__19589;
i__18346_19584 = G__19590;
continue;
} else {
var G__19592 = seq__18342_19581;
var G__19593 = chunk__18344_19582;
var G__19594 = count__18345_19583;
var G__19595 = (i__18346_19584 + (1));
seq__18342_19581 = G__19592;
chunk__18344_19582 = G__19593;
count__18345_19583 = G__19594;
i__18346_19584 = G__19595;
continue;
}
} else {
var temp__5804__auto___19598 = cljs.core.seq(seq__18342_19581);
if(temp__5804__auto___19598){
var seq__18342_19602__$1 = temp__5804__auto___19598;
if(cljs.core.chunked_seq_QMARK_(seq__18342_19602__$1)){
var c__5525__auto___19604 = cljs.core.chunk_first(seq__18342_19602__$1);
var G__19605 = cljs.core.chunk_rest(seq__18342_19602__$1);
var G__19606 = c__5525__auto___19604;
var G__19607 = cljs.core.count(c__5525__auto___19604);
var G__19608 = (0);
seq__18342_19581 = G__19605;
chunk__18344_19582 = G__19606;
count__18345_19583 = G__19607;
i__18346_19584 = G__19608;
continue;
} else {
var child_19610 = cljs.core.first(seq__18342_19602__$1);
if(cljs.core.truth_(child_19610)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19610);


var G__19612 = cljs.core.next(seq__18342_19602__$1);
var G__19613 = null;
var G__19614 = (0);
var G__19615 = (0);
seq__18342_19581 = G__19612;
chunk__18344_19582 = G__19613;
count__18345_19583 = G__19614;
i__18346_19584 = G__19615;
continue;
} else {
var G__19616 = cljs.core.next(seq__18342_19602__$1);
var G__19617 = null;
var G__19618 = (0);
var G__19619 = (0);
seq__18342_19581 = G__19616;
chunk__18344_19582 = G__19617;
count__18345_19583 = G__19618;
i__18346_19584 = G__19619;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19579);
}


var G__19620 = seq__18275_19573;
var G__19621 = chunk__18276_19574;
var G__19622 = count__18277_19575;
var G__19623 = (i__18278_19576 + (1));
seq__18275_19573 = G__19620;
chunk__18276_19574 = G__19621;
count__18277_19575 = G__19622;
i__18278_19576 = G__19623;
continue;
} else {
var temp__5804__auto___19625 = cljs.core.seq(seq__18275_19573);
if(temp__5804__auto___19625){
var seq__18275_19626__$1 = temp__5804__auto___19625;
if(cljs.core.chunked_seq_QMARK_(seq__18275_19626__$1)){
var c__5525__auto___19627 = cljs.core.chunk_first(seq__18275_19626__$1);
var G__19628 = cljs.core.chunk_rest(seq__18275_19626__$1);
var G__19629 = c__5525__auto___19627;
var G__19630 = cljs.core.count(c__5525__auto___19627);
var G__19631 = (0);
seq__18275_19573 = G__19628;
chunk__18276_19574 = G__19629;
count__18277_19575 = G__19630;
i__18278_19576 = G__19631;
continue;
} else {
var child_struct_19634 = cljs.core.first(seq__18275_19626__$1);
var children_19635 = shadow.dom.dom_node(child_struct_19634);
if(cljs.core.seq_QMARK_(children_19635)){
var seq__18380_19636 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19635));
var chunk__18382_19637 = null;
var count__18383_19638 = (0);
var i__18384_19639 = (0);
while(true){
if((i__18384_19639 < count__18383_19638)){
var child_19643 = chunk__18382_19637.cljs$core$IIndexed$_nth$arity$2(null, i__18384_19639);
if(cljs.core.truth_(child_19643)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19643);


var G__19645 = seq__18380_19636;
var G__19646 = chunk__18382_19637;
var G__19647 = count__18383_19638;
var G__19648 = (i__18384_19639 + (1));
seq__18380_19636 = G__19645;
chunk__18382_19637 = G__19646;
count__18383_19638 = G__19647;
i__18384_19639 = G__19648;
continue;
} else {
var G__19650 = seq__18380_19636;
var G__19651 = chunk__18382_19637;
var G__19652 = count__18383_19638;
var G__19653 = (i__18384_19639 + (1));
seq__18380_19636 = G__19650;
chunk__18382_19637 = G__19651;
count__18383_19638 = G__19652;
i__18384_19639 = G__19653;
continue;
}
} else {
var temp__5804__auto___19654__$1 = cljs.core.seq(seq__18380_19636);
if(temp__5804__auto___19654__$1){
var seq__18380_19655__$1 = temp__5804__auto___19654__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18380_19655__$1)){
var c__5525__auto___19665 = cljs.core.chunk_first(seq__18380_19655__$1);
var G__19666 = cljs.core.chunk_rest(seq__18380_19655__$1);
var G__19667 = c__5525__auto___19665;
var G__19668 = cljs.core.count(c__5525__auto___19665);
var G__19669 = (0);
seq__18380_19636 = G__19666;
chunk__18382_19637 = G__19667;
count__18383_19638 = G__19668;
i__18384_19639 = G__19669;
continue;
} else {
var child_19671 = cljs.core.first(seq__18380_19655__$1);
if(cljs.core.truth_(child_19671)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19671);


var G__19673 = cljs.core.next(seq__18380_19655__$1);
var G__19674 = null;
var G__19675 = (0);
var G__19676 = (0);
seq__18380_19636 = G__19673;
chunk__18382_19637 = G__19674;
count__18383_19638 = G__19675;
i__18384_19639 = G__19676;
continue;
} else {
var G__19678 = cljs.core.next(seq__18380_19655__$1);
var G__19679 = null;
var G__19680 = (0);
var G__19681 = (0);
seq__18380_19636 = G__19678;
chunk__18382_19637 = G__19679;
count__18383_19638 = G__19680;
i__18384_19639 = G__19681;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19635);
}


var G__19683 = cljs.core.next(seq__18275_19626__$1);
var G__19684 = null;
var G__19685 = (0);
var G__19686 = (0);
seq__18275_19573 = G__19683;
chunk__18276_19574 = G__19684;
count__18277_19575 = G__19685;
i__18278_19576 = G__19686;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18471 = cljs.core.seq(node);
var chunk__18472 = null;
var count__18473 = (0);
var i__18474 = (0);
while(true){
if((i__18474 < count__18473)){
var n = chunk__18472.cljs$core$IIndexed$_nth$arity$2(null, i__18474);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__19698 = seq__18471;
var G__19699 = chunk__18472;
var G__19700 = count__18473;
var G__19701 = (i__18474 + (1));
seq__18471 = G__19698;
chunk__18472 = G__19699;
count__18473 = G__19700;
i__18474 = G__19701;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18471);
if(temp__5804__auto__){
var seq__18471__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18471__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18471__$1);
var G__19703 = cljs.core.chunk_rest(seq__18471__$1);
var G__19704 = c__5525__auto__;
var G__19705 = cljs.core.count(c__5525__auto__);
var G__19706 = (0);
seq__18471 = G__19703;
chunk__18472 = G__19704;
count__18473 = G__19705;
i__18474 = G__19706;
continue;
} else {
var n = cljs.core.first(seq__18471__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__19707 = cljs.core.next(seq__18471__$1);
var G__19708 = null;
var G__19709 = (0);
var G__19710 = (0);
seq__18471 = G__19707;
chunk__18472 = G__19708;
count__18473 = G__19709;
i__18474 = G__19710;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18508 = arguments.length;
switch (G__18508) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18545 = arguments.length;
switch (G__18545) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18607 = arguments.length;
switch (G__18607) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19820 = arguments.length;
var i__5727__auto___19822 = (0);
while(true){
if((i__5727__auto___19822 < len__5726__auto___19820)){
args__5732__auto__.push((arguments[i__5727__auto___19822]));

var G__19825 = (i__5727__auto___19822 + (1));
i__5727__auto___19822 = G__19825;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18641_19827 = cljs.core.seq(nodes);
var chunk__18642_19828 = null;
var count__18643_19829 = (0);
var i__18644_19830 = (0);
while(true){
if((i__18644_19830 < count__18643_19829)){
var node_19831 = chunk__18642_19828.cljs$core$IIndexed$_nth$arity$2(null, i__18644_19830);
fragment.appendChild(shadow.dom._to_dom(node_19831));


var G__19839 = seq__18641_19827;
var G__19840 = chunk__18642_19828;
var G__19841 = count__18643_19829;
var G__19842 = (i__18644_19830 + (1));
seq__18641_19827 = G__19839;
chunk__18642_19828 = G__19840;
count__18643_19829 = G__19841;
i__18644_19830 = G__19842;
continue;
} else {
var temp__5804__auto___19843 = cljs.core.seq(seq__18641_19827);
if(temp__5804__auto___19843){
var seq__18641_19845__$1 = temp__5804__auto___19843;
if(cljs.core.chunked_seq_QMARK_(seq__18641_19845__$1)){
var c__5525__auto___19846 = cljs.core.chunk_first(seq__18641_19845__$1);
var G__19847 = cljs.core.chunk_rest(seq__18641_19845__$1);
var G__19848 = c__5525__auto___19846;
var G__19849 = cljs.core.count(c__5525__auto___19846);
var G__19850 = (0);
seq__18641_19827 = G__19847;
chunk__18642_19828 = G__19848;
count__18643_19829 = G__19849;
i__18644_19830 = G__19850;
continue;
} else {
var node_19851 = cljs.core.first(seq__18641_19845__$1);
fragment.appendChild(shadow.dom._to_dom(node_19851));


var G__19852 = cljs.core.next(seq__18641_19845__$1);
var G__19853 = null;
var G__19854 = (0);
var G__19855 = (0);
seq__18641_19827 = G__19852;
chunk__18642_19828 = G__19853;
count__18643_19829 = G__19854;
i__18644_19830 = G__19855;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18635){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18635));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18648_19883 = cljs.core.seq(scripts);
var chunk__18649_19884 = null;
var count__18650_19885 = (0);
var i__18651_19886 = (0);
while(true){
if((i__18651_19886 < count__18650_19885)){
var vec__18663_19888 = chunk__18649_19884.cljs$core$IIndexed$_nth$arity$2(null, i__18651_19886);
var script_tag_19889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18663_19888,(0),null);
var script_body_19890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18663_19888,(1),null);
eval(script_body_19890);


var G__19893 = seq__18648_19883;
var G__19894 = chunk__18649_19884;
var G__19895 = count__18650_19885;
var G__19896 = (i__18651_19886 + (1));
seq__18648_19883 = G__19893;
chunk__18649_19884 = G__19894;
count__18650_19885 = G__19895;
i__18651_19886 = G__19896;
continue;
} else {
var temp__5804__auto___19898 = cljs.core.seq(seq__18648_19883);
if(temp__5804__auto___19898){
var seq__18648_19899__$1 = temp__5804__auto___19898;
if(cljs.core.chunked_seq_QMARK_(seq__18648_19899__$1)){
var c__5525__auto___19900 = cljs.core.chunk_first(seq__18648_19899__$1);
var G__19901 = cljs.core.chunk_rest(seq__18648_19899__$1);
var G__19902 = c__5525__auto___19900;
var G__19903 = cljs.core.count(c__5525__auto___19900);
var G__19904 = (0);
seq__18648_19883 = G__19901;
chunk__18649_19884 = G__19902;
count__18650_19885 = G__19903;
i__18651_19886 = G__19904;
continue;
} else {
var vec__18671_19905 = cljs.core.first(seq__18648_19899__$1);
var script_tag_19906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18671_19905,(0),null);
var script_body_19907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18671_19905,(1),null);
eval(script_body_19907);


var G__19911 = cljs.core.next(seq__18648_19899__$1);
var G__19912 = null;
var G__19913 = (0);
var G__19914 = (0);
seq__18648_19883 = G__19911;
chunk__18649_19884 = G__19912;
count__18650_19885 = G__19913;
i__18651_19886 = G__19914;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18684){
var vec__18685 = p__18684;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18685,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18685,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18699 = arguments.length;
switch (G__18699) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18735 = cljs.core.seq(style_keys);
var chunk__18736 = null;
var count__18737 = (0);
var i__18738 = (0);
while(true){
if((i__18738 < count__18737)){
var it = chunk__18736.cljs$core$IIndexed$_nth$arity$2(null, i__18738);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19958 = seq__18735;
var G__19959 = chunk__18736;
var G__19960 = count__18737;
var G__19961 = (i__18738 + (1));
seq__18735 = G__19958;
chunk__18736 = G__19959;
count__18737 = G__19960;
i__18738 = G__19961;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18735);
if(temp__5804__auto__){
var seq__18735__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18735__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18735__$1);
var G__19963 = cljs.core.chunk_rest(seq__18735__$1);
var G__19964 = c__5525__auto__;
var G__19965 = cljs.core.count(c__5525__auto__);
var G__19966 = (0);
seq__18735 = G__19963;
chunk__18736 = G__19964;
count__18737 = G__19965;
i__18738 = G__19966;
continue;
} else {
var it = cljs.core.first(seq__18735__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19968 = cljs.core.next(seq__18735__$1);
var G__19969 = null;
var G__19970 = (0);
var G__19971 = (0);
seq__18735 = G__19968;
chunk__18736 = G__19969;
count__18737 = G__19970;
i__18738 = G__19971;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k18752,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__18774 = k18752;
var G__18774__$1 = (((G__18774 instanceof cljs.core.Keyword))?G__18774.fqn:null);
switch (G__18774__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18752,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__18776){
var vec__18777 = p__18776;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18777,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18777,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18751){
var self__ = this;
var G__18751__$1 = this;
return (new cljs.core.RecordIter((0),G__18751__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18753,other18754){
var self__ = this;
var this18753__$1 = this;
return (((!((other18754 == null)))) && ((((this18753__$1.constructor === other18754.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18753__$1.x,other18754.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18753__$1.y,other18754.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18753__$1.__extmap,other18754.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k18752){
var self__ = this;
var this__5307__auto____$1 = this;
var G__18815 = k18752;
var G__18815__$1 = (((G__18815 instanceof cljs.core.Keyword))?G__18815.fqn:null);
switch (G__18815__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18752);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__18751){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__18819 = cljs.core.keyword_identical_QMARK_;
var expr__18820 = k__5309__auto__;
if(cljs.core.truth_((pred__18819.cljs$core$IFn$_invoke$arity$2 ? pred__18819.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18820) : pred__18819.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__18820)))){
return (new shadow.dom.Coordinate(G__18751,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18819.cljs$core$IFn$_invoke$arity$2 ? pred__18819.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18820) : pred__18819.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__18820)))){
return (new shadow.dom.Coordinate(self__.x,G__18751,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__18751),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__18751){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18751,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18764){
var extmap__5342__auto__ = (function (){var G__18834 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18764,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18764)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18834);
} else {
return G__18834;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18764),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18764),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k18857,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__18869 = k18857;
var G__18869__$1 = (((G__18869 instanceof cljs.core.Keyword))?G__18869.fqn:null);
switch (G__18869__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18857,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__18875){
var vec__18877 = p__18875;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18877,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18877,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18856){
var self__ = this;
var G__18856__$1 = this;
return (new cljs.core.RecordIter((0),G__18856__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18858,other18859){
var self__ = this;
var this18858__$1 = this;
return (((!((other18859 == null)))) && ((((this18858__$1.constructor === other18859.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18858__$1.w,other18859.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18858__$1.h,other18859.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18858__$1.__extmap,other18859.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k18857){
var self__ = this;
var this__5307__auto____$1 = this;
var G__18913 = k18857;
var G__18913__$1 = (((G__18913 instanceof cljs.core.Keyword))?G__18913.fqn:null);
switch (G__18913__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18857);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__18856){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__18914 = cljs.core.keyword_identical_QMARK_;
var expr__18915 = k__5309__auto__;
if(cljs.core.truth_((pred__18914.cljs$core$IFn$_invoke$arity$2 ? pred__18914.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18915) : pred__18914.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__18915)))){
return (new shadow.dom.Size(G__18856,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18914.cljs$core$IFn$_invoke$arity$2 ? pred__18914.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18915) : pred__18914.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__18915)))){
return (new shadow.dom.Size(self__.w,G__18856,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__18856),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__18856){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18856,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18861){
var extmap__5342__auto__ = (function (){var G__18938 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18861,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18861)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18938);
} else {
return G__18938;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18861),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18861),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__20151 = (i + (1));
var G__20152 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__20151;
ret = G__20152;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18976){
var vec__18978 = p__18976;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18978,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18978,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18986 = arguments.length;
switch (G__18986) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__20177 = ps;
var G__20178 = (i + (1));
el__$1 = G__20177;
i = G__20178;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__19032 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19032,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19032,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19032,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19036_20192 = cljs.core.seq(props);
var chunk__19037_20193 = null;
var count__19038_20194 = (0);
var i__19039_20195 = (0);
while(true){
if((i__19039_20195 < count__19038_20194)){
var vec__19064_20197 = chunk__19037_20193.cljs$core$IIndexed$_nth$arity$2(null, i__19039_20195);
var k_20198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19064_20197,(0),null);
var v_20199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19064_20197,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_20198);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_20198),v_20199);


var G__20201 = seq__19036_20192;
var G__20202 = chunk__19037_20193;
var G__20203 = count__19038_20194;
var G__20204 = (i__19039_20195 + (1));
seq__19036_20192 = G__20201;
chunk__19037_20193 = G__20202;
count__19038_20194 = G__20203;
i__19039_20195 = G__20204;
continue;
} else {
var temp__5804__auto___20205 = cljs.core.seq(seq__19036_20192);
if(temp__5804__auto___20205){
var seq__19036_20206__$1 = temp__5804__auto___20205;
if(cljs.core.chunked_seq_QMARK_(seq__19036_20206__$1)){
var c__5525__auto___20209 = cljs.core.chunk_first(seq__19036_20206__$1);
var G__20210 = cljs.core.chunk_rest(seq__19036_20206__$1);
var G__20211 = c__5525__auto___20209;
var G__20212 = cljs.core.count(c__5525__auto___20209);
var G__20213 = (0);
seq__19036_20192 = G__20210;
chunk__19037_20193 = G__20211;
count__19038_20194 = G__20212;
i__19039_20195 = G__20213;
continue;
} else {
var vec__19070_20215 = cljs.core.first(seq__19036_20206__$1);
var k_20216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19070_20215,(0),null);
var v_20217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19070_20215,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_20216);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_20216),v_20217);


var G__20218 = cljs.core.next(seq__19036_20206__$1);
var G__20219 = null;
var G__20220 = (0);
var G__20221 = (0);
seq__19036_20192 = G__20218;
chunk__19037_20193 = G__20219;
count__19038_20194 = G__20220;
i__19039_20195 = G__20221;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__19090 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19090,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19090,(1),null);
var seq__19093_20236 = cljs.core.seq(node_children);
var chunk__19095_20240 = null;
var count__19096_20244 = (0);
var i__19097_20245 = (0);
while(true){
if((i__19097_20245 < count__19096_20244)){
var child_struct_20258 = chunk__19095_20240.cljs$core$IIndexed$_nth$arity$2(null, i__19097_20245);
if((!((child_struct_20258 == null)))){
if(typeof child_struct_20258 === 'string'){
var text_20259 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20259),child_struct_20258].join(''));
} else {
var children_20260 = shadow.dom.svg_node(child_struct_20258);
if(cljs.core.seq_QMARK_(children_20260)){
var seq__19145_20262 = cljs.core.seq(children_20260);
var chunk__19147_20263 = null;
var count__19148_20264 = (0);
var i__19149_20265 = (0);
while(true){
if((i__19149_20265 < count__19148_20264)){
var child_20266 = chunk__19147_20263.cljs$core$IIndexed$_nth$arity$2(null, i__19149_20265);
if(cljs.core.truth_(child_20266)){
node.appendChild(child_20266);


var G__20267 = seq__19145_20262;
var G__20268 = chunk__19147_20263;
var G__20269 = count__19148_20264;
var G__20270 = (i__19149_20265 + (1));
seq__19145_20262 = G__20267;
chunk__19147_20263 = G__20268;
count__19148_20264 = G__20269;
i__19149_20265 = G__20270;
continue;
} else {
var G__20272 = seq__19145_20262;
var G__20273 = chunk__19147_20263;
var G__20274 = count__19148_20264;
var G__20275 = (i__19149_20265 + (1));
seq__19145_20262 = G__20272;
chunk__19147_20263 = G__20273;
count__19148_20264 = G__20274;
i__19149_20265 = G__20275;
continue;
}
} else {
var temp__5804__auto___20276 = cljs.core.seq(seq__19145_20262);
if(temp__5804__auto___20276){
var seq__19145_20277__$1 = temp__5804__auto___20276;
if(cljs.core.chunked_seq_QMARK_(seq__19145_20277__$1)){
var c__5525__auto___20278 = cljs.core.chunk_first(seq__19145_20277__$1);
var G__20279 = cljs.core.chunk_rest(seq__19145_20277__$1);
var G__20280 = c__5525__auto___20278;
var G__20281 = cljs.core.count(c__5525__auto___20278);
var G__20282 = (0);
seq__19145_20262 = G__20279;
chunk__19147_20263 = G__20280;
count__19148_20264 = G__20281;
i__19149_20265 = G__20282;
continue;
} else {
var child_20283 = cljs.core.first(seq__19145_20277__$1);
if(cljs.core.truth_(child_20283)){
node.appendChild(child_20283);


var G__20284 = cljs.core.next(seq__19145_20277__$1);
var G__20285 = null;
var G__20286 = (0);
var G__20287 = (0);
seq__19145_20262 = G__20284;
chunk__19147_20263 = G__20285;
count__19148_20264 = G__20286;
i__19149_20265 = G__20287;
continue;
} else {
var G__20290 = cljs.core.next(seq__19145_20277__$1);
var G__20291 = null;
var G__20292 = (0);
var G__20293 = (0);
seq__19145_20262 = G__20290;
chunk__19147_20263 = G__20291;
count__19148_20264 = G__20292;
i__19149_20265 = G__20293;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20260);
}
}


var G__20294 = seq__19093_20236;
var G__20295 = chunk__19095_20240;
var G__20296 = count__19096_20244;
var G__20297 = (i__19097_20245 + (1));
seq__19093_20236 = G__20294;
chunk__19095_20240 = G__20295;
count__19096_20244 = G__20296;
i__19097_20245 = G__20297;
continue;
} else {
var G__20298 = seq__19093_20236;
var G__20299 = chunk__19095_20240;
var G__20300 = count__19096_20244;
var G__20301 = (i__19097_20245 + (1));
seq__19093_20236 = G__20298;
chunk__19095_20240 = G__20299;
count__19096_20244 = G__20300;
i__19097_20245 = G__20301;
continue;
}
} else {
var temp__5804__auto___20304 = cljs.core.seq(seq__19093_20236);
if(temp__5804__auto___20304){
var seq__19093_20305__$1 = temp__5804__auto___20304;
if(cljs.core.chunked_seq_QMARK_(seq__19093_20305__$1)){
var c__5525__auto___20306 = cljs.core.chunk_first(seq__19093_20305__$1);
var G__20308 = cljs.core.chunk_rest(seq__19093_20305__$1);
var G__20309 = c__5525__auto___20306;
var G__20310 = cljs.core.count(c__5525__auto___20306);
var G__20311 = (0);
seq__19093_20236 = G__20308;
chunk__19095_20240 = G__20309;
count__19096_20244 = G__20310;
i__19097_20245 = G__20311;
continue;
} else {
var child_struct_20312 = cljs.core.first(seq__19093_20305__$1);
if((!((child_struct_20312 == null)))){
if(typeof child_struct_20312 === 'string'){
var text_20313 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20313),child_struct_20312].join(''));
} else {
var children_20314 = shadow.dom.svg_node(child_struct_20312);
if(cljs.core.seq_QMARK_(children_20314)){
var seq__19170_20315 = cljs.core.seq(children_20314);
var chunk__19172_20316 = null;
var count__19173_20317 = (0);
var i__19174_20318 = (0);
while(true){
if((i__19174_20318 < count__19173_20317)){
var child_20319 = chunk__19172_20316.cljs$core$IIndexed$_nth$arity$2(null, i__19174_20318);
if(cljs.core.truth_(child_20319)){
node.appendChild(child_20319);


var G__20320 = seq__19170_20315;
var G__20321 = chunk__19172_20316;
var G__20322 = count__19173_20317;
var G__20323 = (i__19174_20318 + (1));
seq__19170_20315 = G__20320;
chunk__19172_20316 = G__20321;
count__19173_20317 = G__20322;
i__19174_20318 = G__20323;
continue;
} else {
var G__20325 = seq__19170_20315;
var G__20326 = chunk__19172_20316;
var G__20327 = count__19173_20317;
var G__20328 = (i__19174_20318 + (1));
seq__19170_20315 = G__20325;
chunk__19172_20316 = G__20326;
count__19173_20317 = G__20327;
i__19174_20318 = G__20328;
continue;
}
} else {
var temp__5804__auto___20332__$1 = cljs.core.seq(seq__19170_20315);
if(temp__5804__auto___20332__$1){
var seq__19170_20334__$1 = temp__5804__auto___20332__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19170_20334__$1)){
var c__5525__auto___20335 = cljs.core.chunk_first(seq__19170_20334__$1);
var G__20336 = cljs.core.chunk_rest(seq__19170_20334__$1);
var G__20337 = c__5525__auto___20335;
var G__20338 = cljs.core.count(c__5525__auto___20335);
var G__20339 = (0);
seq__19170_20315 = G__20336;
chunk__19172_20316 = G__20337;
count__19173_20317 = G__20338;
i__19174_20318 = G__20339;
continue;
} else {
var child_20340 = cljs.core.first(seq__19170_20334__$1);
if(cljs.core.truth_(child_20340)){
node.appendChild(child_20340);


var G__20341 = cljs.core.next(seq__19170_20334__$1);
var G__20342 = null;
var G__20343 = (0);
var G__20344 = (0);
seq__19170_20315 = G__20341;
chunk__19172_20316 = G__20342;
count__19173_20317 = G__20343;
i__19174_20318 = G__20344;
continue;
} else {
var G__20345 = cljs.core.next(seq__19170_20334__$1);
var G__20346 = null;
var G__20347 = (0);
var G__20348 = (0);
seq__19170_20315 = G__20345;
chunk__19172_20316 = G__20346;
count__19173_20317 = G__20347;
i__19174_20318 = G__20348;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20314);
}
}


var G__20350 = cljs.core.next(seq__19093_20305__$1);
var G__20351 = null;
var G__20352 = (0);
var G__20353 = (0);
seq__19093_20236 = G__20350;
chunk__19095_20240 = G__20351;
count__19096_20244 = G__20352;
i__19097_20245 = G__20353;
continue;
} else {
var G__20354 = cljs.core.next(seq__19093_20305__$1);
var G__20355 = null;
var G__20356 = (0);
var G__20357 = (0);
seq__19093_20236 = G__20354;
chunk__19095_20240 = G__20355;
count__19096_20244 = G__20356;
i__19097_20245 = G__20357;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20361 = arguments.length;
var i__5727__auto___20362 = (0);
while(true){
if((i__5727__auto___20362 < len__5726__auto___20361)){
args__5732__auto__.push((arguments[i__5727__auto___20362]));

var G__20365 = (i__5727__auto___20362 + (1));
i__5727__auto___20362 = G__20365;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq19202){
var G__19203 = cljs.core.first(seq19202);
var seq19202__$1 = cljs.core.next(seq19202);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19203,seq19202__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
