goog.provide('waveney.carto');
var module$node_modules$ol$proj=shadow.js.require("module$node_modules$ol$proj", {});
waveney.carto.base_layer = (function waveney$carto$base_layer(){
var layer = (new shadow.js.shim.module$ol$layer$Tile$default(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),(new shadow.js.shim.module$ol$source$OSM$default()),new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layer-name","layer-name",-1397940231),"base"], null)], null))));
return layer;
});
waveney.carto.weather_layer = (function waveney$carto$weather_layer(){
var layer = (new shadow.js.shim.module$ol$layer$Tile$default(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),(new shadow.js.shim.module$ol$source$XYZ$default(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"",new cljs.core.Keyword(null,"attributions","attributions",1383517818),"&copy; <a href=\"https://openweathermap.org/\">OpenWeatherMap</a>"], null)))),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layer-name","layer-name",-1397940231),"weather"], null)], null))));
return layer;
});
waveney.carto.centerpoint = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.2375777300280788,52.468247948753316], null);
waveney.carto.waveney_extent = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.20094809414538872,52.116568343156075,1.8549922442829825,52.76893220698773], null);
waveney.carto.icon_feature = (function waveney$carto$icon_feature(coords){
var icon_style = (new shadow.js.shim.module$ol$style$Style$default(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"image","image",-58725096),(new shadow.js.shim.module$ol$style$Icon$default(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,1.0], null),new cljs.core.Keyword(null,"anchorXUnits","anchorXUnits",612639841),"fraction",new cljs.core.Keyword(null,"anchorYUnits","anchorYUnits",-1739905451),"fraction",new cljs.core.Keyword(null,"scale","scale",-230427353),0.1,new cljs.core.Keyword(null,"src","src",-1651076051),"/assets/pointer.png"], null))))], null))));
var icon_feature = (new shadow.js.shim.module$ol$Feature$default(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),(new shadow.js.shim.module$ol$geom$Point$default(cljs.core.clj__GT_js(coords))),new cljs.core.Keyword(null,"name","name",1843675177),"Null Island",new cljs.core.Keyword(null,"population","population",-1209901867),(4000),new cljs.core.Keyword(null,"rainfall","rainfall",861519059),(500)], null))));
var target_obj_26534_26587 = icon_feature;
var _STAR_runtime_state_STAR__orig_val__26538_26588 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__26539_26589 = oops.state.prepare_state(target_obj_26534_26587,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__26539_26589);

try{var call_info_26536_26590 = [target_obj_26534_26587,(function (){var next_obj_26537 = ((oops.core.validate_object_access_dynamically(target_obj_26534_26587,(0),"setStyle",true,true,false))?(target_obj_26534_26587["setStyle"]):null);
return next_obj_26537;
})()];
var fn_26535_26591 = (call_info_26536_26590[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_26535_26591,oops.state.get_last_access_modifier())){
if((!((fn_26535_26591 == null)))){
fn_26535_26591.call((call_info_26536_26590[(0)]),icon_style);
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__26538_26588);
}
return icon_feature;
});
waveney.carto.vector_source = (function waveney$carto$vector_source(features){
return (new shadow.js.shim.module$ol$source$Vector$default(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"features","features",-1146962336),features], null))));
});
waveney.carto.vector_layer = (function waveney$carto$vector_layer(features){
return (new shadow.js.shim.module$ol$layer$Vector$default(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),waveney.carto.vector_source(cljs.core.map.cljs$core$IFn$_invoke$arity$2(waveney.carto.icon_feature,features)),new cljs.core.Keyword(null,"layer-name","layer-name",-1397940231),"features"], null))));
});
waveney.carto.get_clicked_coord = (function waveney$carto$get_clicked_coord(evnt){
var coords = (function (){var target_obj_26540 = evnt;
var _STAR_runtime_state_STAR__orig_val__26542 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__26543 = oops.state.prepare_state(target_obj_26540,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__26543);

try{var next_obj_26541 = ((oops.core.validate_object_access_dynamically(target_obj_26540,(0),"coordinate",true,true,false))?(target_obj_26540["coordinate"]):null);
return next_obj_26541;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__26542);
}})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(waveney.app_state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"clicked-location","clicked-location",1722537013),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(coords));

return waveney.integrations.openweather.get_forecast(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(coords));
});
waveney.carto.init_map_widget = (function waveney$carto$init_map_widget(){
(new module$node_modules$ol$proj.useGeographic());

var ol_map = (new shadow.js.shim.module$ol$Map$default(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"layers","layers",1944875032),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [waveney.carto.base_layer(),waveney.carto.weather_layer(),waveney.carto.vector_layer(new cljs.core.Keyword(null,"map-features","map-features",77575422).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(waveney.app_state.app_state)))], null),new cljs.core.Keyword(null,"target","target",253001721),"map",new cljs.core.Keyword(null,"view","view",1247994814),(new shadow.js.shim.module$ol$View$default(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center","center",-748944368),waveney.carto.centerpoint,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(10),new cljs.core.Keyword(null,"extent","extent",-186399820),waveney.carto.waveney_extent], null))))], null))));
var target_obj_26544_26592 = ol_map;
var _STAR_runtime_state_STAR__orig_val__26548_26593 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__26549_26594 = oops.state.prepare_state(target_obj_26544_26592,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__26549_26594);

try{var call_info_26546_26595 = [target_obj_26544_26592,(function (){var next_obj_26547 = ((oops.core.validate_object_access_dynamically(target_obj_26544_26592,(0),"on",true,true,false))?(target_obj_26544_26592["on"]):null);
return next_obj_26547;
})()];
var fn_26545_26596 = (call_info_26546_26595[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_26545_26596,oops.state.get_last_access_modifier())){
if((!((fn_26545_26596 == null)))){
fn_26545_26596.call((call_info_26546_26595[(0)]),"click",waveney.carto.get_clicked_coord);
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__26548_26593);
}
return ol_map;
});
waveney.carto.layer__GT_name = (function waveney$carto$layer__GT_name(layer){
var target_obj_26550 = layer;
var _STAR_runtime_state_STAR__orig_val__26554 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__26555 = oops.state.prepare_state(target_obj_26550,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__26555);

try{var call_info_26552 = [target_obj_26550,(function (){var next_obj_26553 = ((oops.core.validate_object_access_dynamically(target_obj_26550,(0),"get",true,true,false))?(target_obj_26550["get"]):null);
return next_obj_26553;
})()];
var fn_26551 = (call_info_26552[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_26551,oops.state.get_last_access_modifier())){
if((!((fn_26551 == null)))){
return fn_26551.call((call_info_26552[(0)]),"layer-name");
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__26554);
}});
waveney.carto.map__GT_layers = (function waveney$carto$map__GT_layers(ol_map){
var target_obj_26556 = (function (){var target_obj_26560 = ol_map;
var _STAR_runtime_state_STAR__orig_val__26564 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__26565 = oops.state.prepare_state(target_obj_26560,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__26565);

try{var call_info_26562 = [target_obj_26560,(function (){var next_obj_26563 = ((oops.core.validate_object_access_dynamically(target_obj_26560,(0),"getLayers",true,true,false))?(target_obj_26560["getLayers"]):null);
return next_obj_26563;
})()];
var fn_26561 = (call_info_26562[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_26561,oops.state.get_last_access_modifier())){
if((!((fn_26561 == null)))){
return fn_26561.call((call_info_26562[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__26564);
}})();
var _STAR_runtime_state_STAR__orig_val__26566 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__26567 = oops.state.prepare_state(target_obj_26556,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__26567);

try{var call_info_26558 = [target_obj_26556,(function (){var next_obj_26559 = ((oops.core.validate_object_access_dynamically(target_obj_26556,(0),"getArray",true,true,false))?(target_obj_26556["getArray"]):null);
return next_obj_26559;
})()];
var fn_26557 = (call_info_26558[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_26557,oops.state.get_last_access_modifier())){
if((!((fn_26557 == null)))){
return fn_26557.call((call_info_26558[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__26566);
}});
waveney.carto.get_layer_by_name = (function waveney$carto$get_layer_by_name(ol_map,layer_name){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26568_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(waveney.carto.layer__GT_name(p1__26568_SHARP_),layer_name);
}),waveney.carto.map__GT_layers(ol_map)));
});
waveney.carto.update_vector_layer_features_BANG_ = (function waveney$carto$update_vector_layer_features_BANG_(features){
var layer = waveney.carto.get_layer_by_name(new cljs.core.Keyword(null,"ol-map","ol-map",-1274025441).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(waveney.app_state.app_state)),"features");
var source = waveney.carto.vector_source(cljs.core.map.cljs$core$IFn$_invoke$arity$2(waveney.carto.icon_feature,features));
var target_obj_26569 = layer;
var _STAR_runtime_state_STAR__orig_val__26573 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__26574 = oops.state.prepare_state(target_obj_26569,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__26574);

try{var call_info_26571 = [target_obj_26569,(function (){var next_obj_26572 = ((oops.core.validate_object_access_dynamically(target_obj_26569,(0),"setSource",true,true,false))?(target_obj_26569["setSource"]):null);
return next_obj_26572;
})()];
var fn_26570 = (call_info_26571[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_26570,oops.state.get_last_access_modifier())){
if((!((fn_26570 == null)))){
return fn_26570.call((call_info_26571[(0)]),source);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__26573);
}});
waveney.carto.update_weather_url_BANG_ = (function waveney$carto$update_weather_url_BANG_(url){
var layer = waveney.carto.get_layer_by_name(new cljs.core.Keyword(null,"ol-map","ol-map",-1274025441).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(waveney.app_state.app_state)),"weather");
var source = (function (){var target_obj_26575 = layer;
var _STAR_runtime_state_STAR__orig_val__26579 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__26580 = oops.state.prepare_state(target_obj_26575,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__26580);

try{var call_info_26577 = [target_obj_26575,(function (){var next_obj_26578 = ((oops.core.validate_object_access_dynamically(target_obj_26575,(0),"getSource",true,true,false))?(target_obj_26575["getSource"]):null);
return next_obj_26578;
})()];
var fn_26576 = (call_info_26577[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_26576,oops.state.get_last_access_modifier())){
if((!((fn_26576 == null)))){
return fn_26576.call((call_info_26577[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__26579);
}})();
var target_obj_26581 = source;
var _STAR_runtime_state_STAR__orig_val__26585 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__26586 = oops.state.prepare_state(target_obj_26581,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__26586);

try{var call_info_26583 = [target_obj_26581,(function (){var next_obj_26584 = ((oops.core.validate_object_access_dynamically(target_obj_26581,(0),"setUrl",true,true,false))?(target_obj_26581["setUrl"]):null);
return next_obj_26584;
})()];
var fn_26582 = (call_info_26583[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_26582,oops.state.get_last_access_modifier())){
if((!((fn_26582 == null)))){
return fn_26582.call((call_info_26583[(0)]),url);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__26585);
}});

//# sourceMappingURL=waveney.carto.js.map
