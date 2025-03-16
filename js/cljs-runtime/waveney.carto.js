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
waveney.carto.get_clicked_coord = (function waveney$carto$get_clicked_coord(evnt){
var coords = (function (){var target_obj_22254 = evnt;
var _STAR_runtime_state_STAR__orig_val__22256 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__22257 = oops.state.prepare_state(target_obj_22254,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__22257);

try{var next_obj_22255 = ((oops.core.validate_object_access_dynamically(target_obj_22254,(0),"coordinate",true,true,false))?(target_obj_22254["coordinate"]):null);
return next_obj_22255;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__22256);
}})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(waveney.app_state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"clicked-location","clicked-location",1722537013),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(coords));

return waveney.integrations.openweather.get_forecast(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(coords));
});
waveney.carto.init_map_widget = (function waveney$carto$init_map_widget(){
(new module$node_modules$ol$proj.useGeographic());

var ol_map = (new shadow.js.shim.module$ol$Map$default(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"layers","layers",1944875032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [waveney.carto.base_layer(),waveney.carto.weather_layer()], null),new cljs.core.Keyword(null,"target","target",253001721),"map",new cljs.core.Keyword(null,"view","view",1247994814),(new shadow.js.shim.module$ol$View$default(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center","center",-748944368),waveney.carto.centerpoint,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(10),new cljs.core.Keyword(null,"extent","extent",-186399820),waveney.carto.waveney_extent], null))))], null))));
var target_obj_22258_22295 = ol_map;
var _STAR_runtime_state_STAR__orig_val__22262_22296 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__22263_22297 = oops.state.prepare_state(target_obj_22258_22295,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__22263_22297);

try{var call_info_22260_22298 = [target_obj_22258_22295,(function (){var next_obj_22261 = ((oops.core.validate_object_access_dynamically(target_obj_22258_22295,(0),"on",true,true,false))?(target_obj_22258_22295["on"]):null);
return next_obj_22261;
})()];
var fn_22259_22299 = (call_info_22260_22298[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_22259_22299,oops.state.get_last_access_modifier())){
if((!((fn_22259_22299 == null)))){
fn_22259_22299.call((call_info_22260_22298[(0)]),"click",waveney.carto.get_clicked_coord);
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__22262_22296);
}
return ol_map;
});
waveney.carto.layer__GT_name = (function waveney$carto$layer__GT_name(layer){
var target_obj_22264 = layer;
var _STAR_runtime_state_STAR__orig_val__22268 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__22269 = oops.state.prepare_state(target_obj_22264,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__22269);

try{var call_info_22266 = [target_obj_22264,(function (){var next_obj_22267 = ((oops.core.validate_object_access_dynamically(target_obj_22264,(0),"get",true,true,false))?(target_obj_22264["get"]):null);
return next_obj_22267;
})()];
var fn_22265 = (call_info_22266[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_22265,oops.state.get_last_access_modifier())){
if((!((fn_22265 == null)))){
return fn_22265.call((call_info_22266[(0)]),"layer-name");
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__22268);
}});
waveney.carto.map__GT_layers = (function waveney$carto$map__GT_layers(ol_map){
var target_obj_22270 = (function (){var target_obj_22274 = ol_map;
var _STAR_runtime_state_STAR__orig_val__22278 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__22279 = oops.state.prepare_state(target_obj_22274,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__22279);

try{var call_info_22276 = [target_obj_22274,(function (){var next_obj_22277 = ((oops.core.validate_object_access_dynamically(target_obj_22274,(0),"getLayers",true,true,false))?(target_obj_22274["getLayers"]):null);
return next_obj_22277;
})()];
var fn_22275 = (call_info_22276[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_22275,oops.state.get_last_access_modifier())){
if((!((fn_22275 == null)))){
return fn_22275.call((call_info_22276[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__22278);
}})();
var _STAR_runtime_state_STAR__orig_val__22280 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__22281 = oops.state.prepare_state(target_obj_22270,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__22281);

try{var call_info_22272 = [target_obj_22270,(function (){var next_obj_22273 = ((oops.core.validate_object_access_dynamically(target_obj_22270,(0),"getArray",true,true,false))?(target_obj_22270["getArray"]):null);
return next_obj_22273;
})()];
var fn_22271 = (call_info_22272[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_22271,oops.state.get_last_access_modifier())){
if((!((fn_22271 == null)))){
return fn_22271.call((call_info_22272[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__22280);
}});
waveney.carto.get_layer_by_name = (function waveney$carto$get_layer_by_name(ol_map,layer_name){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22282_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(waveney.carto.layer__GT_name(p1__22282_SHARP_),layer_name);
}),waveney.carto.map__GT_layers(ol_map)));
});
waveney.carto.update_weather_url_BANG_ = (function waveney$carto$update_weather_url_BANG_(url){
var layer = waveney.carto.get_layer_by_name(new cljs.core.Keyword(null,"ol-map","ol-map",-1274025441).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(waveney.app_state.app_state)),"weather");
var source = (function (){var target_obj_22283 = layer;
var _STAR_runtime_state_STAR__orig_val__22287 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__22288 = oops.state.prepare_state(target_obj_22283,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__22288);

try{var call_info_22285 = [target_obj_22283,(function (){var next_obj_22286 = ((oops.core.validate_object_access_dynamically(target_obj_22283,(0),"getSource",true,true,false))?(target_obj_22283["getSource"]):null);
return next_obj_22286;
})()];
var fn_22284 = (call_info_22285[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_22284,oops.state.get_last_access_modifier())){
if((!((fn_22284 == null)))){
return fn_22284.call((call_info_22285[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__22287);
}})();
var target_obj_22289 = source;
var _STAR_runtime_state_STAR__orig_val__22293 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__22294 = oops.state.prepare_state(target_obj_22289,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__22294);

try{var call_info_22291 = [target_obj_22289,(function (){var next_obj_22292 = ((oops.core.validate_object_access_dynamically(target_obj_22289,(0),"setUrl",true,true,false))?(target_obj_22289["setUrl"]):null);
return next_obj_22292;
})()];
var fn_22290 = (call_info_22291[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_22290,oops.state.get_last_access_modifier())){
if((!((fn_22290 == null)))){
return fn_22290.call((call_info_22291[(0)]),url);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__22293);
}});

//# sourceMappingURL=waveney.carto.js.map
