goog.provide('waveney.integrations.openweather');
waveney.integrations.openweather.__GT_weather_map_url = (function waveney$integrations$openweather$__GT_weather_map_url(ow_layer_id){
return ["https://tile.openweathermap.org/map/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ow_layer_id),"/{z}/{x}/{y}.png?appid=",waveney.env.OPENWEATHER_API_KEY].join('');
});
waveney.integrations.openweather.coords__GT_forecast_url = (function waveney$integrations$openweather$coords__GT_forecast_url(p__20222){
var vec__20223 = p__20222;
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20223,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20223,(1),null);
return ["https://api.open-meteo.com/v1/forecast?latitude=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat),"&longitude=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon),"&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"].join('');
});
waveney.integrations.openweather.get_request = (function waveney$integrations$openweather$get_request(url,callback){
return fetch(url,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)], null))).then((function (response){
return response.json();
})).then((function (response){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(waveney.app_state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"weather-at-loc","weather-at-loc",-1973395805),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
})).catch((function (error){
return console.error("Error:",error);
}));
});
waveney.integrations.openweather.get_forecast = (function waveney$integrations$openweather$get_forecast(lon_lat){
var url = waveney.integrations.openweather.coords__GT_forecast_url(lon_lat);
return waveney.integrations.openweather.get_request(url,console.log());
});

//# sourceMappingURL=waveney.integrations.openweather.js.map
