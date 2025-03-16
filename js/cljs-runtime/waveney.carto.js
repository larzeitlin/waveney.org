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
var coords = (function (){var target_obj_20226 = evnt;
var _STAR_runtime_state_STAR__orig_val__20228 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__20229 = oops.state.prepare_state(target_obj_20226,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__20229);

try{var next_obj_20227 = ((oops.core.validate_object_access_dynamically(target_obj_20226,(0),"coordinate",true,true,false))?(target_obj_20226["coordinate"]):null);
return next_obj_20227;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__20228);
}})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(waveney.app_state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"clicked-location","clicked-location",1722537013),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(coords));

return waveney.integrations.openweather.get_forecast(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(coords));
});
waveney.carto.init_map_widget = (function waveney$carto$init_map_widget(){
(new module$node_modules$ol$proj.useGeographic());

var ol_map = (new shadow.js.shim.module$ol$Map$default(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"layers","layers",1944875032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [waveney.carto.base_layer(),waveney.carto.weather_layer()], null),new cljs.core.Keyword(null,"target","target",253001721),"map",new cljs.core.Keyword(null,"view","view",1247994814),(new shadow.js.shim.module$ol$View$default(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center","center",-748944368),waveney.carto.centerpoint,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(10),new cljs.core.Keyword(null,"extent","extent",-186399820),waveney.carto.waveney_extent], null))))], null))));
var target_obj_20230_20267 = ol_map;
var _STAR_runtime_state_STAR__orig_val__20234_20268 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__20235_20269 = oops.state.prepare_state(target_obj_20230_20267,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__20235_20269);

try{var call_info_20232_20271 = [target_obj_20230_20267,(function (){var next_obj_20233 = ((oops.core.validate_object_access_dynamically(target_obj_20230_20267,(0),"on",true,true,false))?(target_obj_20230_20267["on"]):null);
return next_obj_20233;
})()];
var fn_20231_20272 = (call_info_20232_20271[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_20231_20272,oops.state.get_last_access_modifier())){
if((!((fn_20231_20272 == null)))){
fn_20231_20272.call((call_info_20232_20271[(0)]),"click",waveney.carto.get_clicked_coord);
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__20234_20268);
}
return ol_map;
});
waveney.carto.layer__GT_name = (function waveney$carto$layer__GT_name(layer){
var target_obj_20236 = layer;
var _STAR_runtime_state_STAR__orig_val__20240 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__20241 = oops.state.prepare_state(target_obj_20236,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__20241);

try{var call_info_20238 = [target_obj_20236,(function (){var next_obj_20239 = ((oops.core.validate_object_access_dynamically(target_obj_20236,(0),"get",true,true,false))?(target_obj_20236["get"]):null);
return next_obj_20239;
})()];
var fn_20237 = (call_info_20238[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_20237,oops.state.get_last_access_modifier())){
if((!((fn_20237 == null)))){
return fn_20237.call((call_info_20238[(0)]),"layer-name");
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__20240);
}});
waveney.carto.map__GT_layers = (function waveney$carto$map__GT_layers(ol_map){
var target_obj_20242 = (function (){var target_obj_20246 = ol_map;
var _STAR_runtime_state_STAR__orig_val__20250 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__20251 = oops.state.prepare_state(target_obj_20246,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__20251);

try{var call_info_20248 = [target_obj_20246,(function (){var next_obj_20249 = ((oops.core.validate_object_access_dynamically(target_obj_20246,(0),"getLayers",true,true,false))?(target_obj_20246["getLayers"]):null);
return next_obj_20249;
})()];
var fn_20247 = (call_info_20248[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_20247,oops.state.get_last_access_modifier())){
if((!((fn_20247 == null)))){
return fn_20247.call((call_info_20248[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__20250);
}})();
var _STAR_runtime_state_STAR__orig_val__20252 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__20253 = oops.state.prepare_state(target_obj_20242,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__20253);

try{var call_info_20244 = [target_obj_20242,(function (){var next_obj_20245 = ((oops.core.validate_object_access_dynamically(target_obj_20242,(0),"getArray",true,true,false))?(target_obj_20242["getArray"]):null);
return next_obj_20245;
})()];
var fn_20243 = (call_info_20244[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_20243,oops.state.get_last_access_modifier())){
if((!((fn_20243 == null)))){
return fn_20243.call((call_info_20244[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__20252);
}});
waveney.carto.get_layer_by_name = (function waveney$carto$get_layer_by_name(ol_map,layer_name){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20254_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(waveney.carto.layer__GT_name(p1__20254_SHARP_),layer_name);
}),waveney.carto.map__GT_layers(ol_map)));
});
waveney.carto.update_weather_url_BANG_ = (function waveney$carto$update_weather_url_BANG_(url){
var layer = waveney.carto.get_layer_by_name(new cljs.core.Keyword(null,"ol-map","ol-map",-1274025441).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(waveney.app_state.app_state)),"weather");
var source = (function (){var target_obj_20255 = layer;
var _STAR_runtime_state_STAR__orig_val__20259 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__20260 = oops.state.prepare_state(target_obj_20255,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__20260);

try{var call_info_20257 = [target_obj_20255,(function (){var next_obj_20258 = ((oops.core.validate_object_access_dynamically(target_obj_20255,(0),"getSource",true,true,false))?(target_obj_20255["getSource"]):null);
return next_obj_20258;
})()];
var fn_20256 = (call_info_20257[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_20256,oops.state.get_last_access_modifier())){
if((!((fn_20256 == null)))){
return fn_20256.call((call_info_20257[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__20259);
}})();
var target_obj_20261 = source;
var _STAR_runtime_state_STAR__orig_val__20265 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__20266 = oops.state.prepare_state(target_obj_20261,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__20266);

try{var call_info_20263 = [target_obj_20261,(function (){var next_obj_20264 = ((oops.core.validate_object_access_dynamically(target_obj_20261,(0),"setUrl",true,true,false))?(target_obj_20261["setUrl"]):null);
return next_obj_20264;
})()];
var fn_20262 = (call_info_20263[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_20262,oops.state.get_last_access_modifier())){
if((!((fn_20262 == null)))){
return fn_20262.call((call_info_20263[(0)]),url);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__20265);
}});

//# sourceMappingURL=waveney.carto.js.map
