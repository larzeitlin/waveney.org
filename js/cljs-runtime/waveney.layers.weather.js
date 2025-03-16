goog.provide('waveney.layers.weather');
waveney.layers.weather.weather_layers = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"Cloud Cover",new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("waveney.layers.weather","cloud","waveney.layers.weather/cloud",-1427057314),new cljs.core.Keyword(null,"map-url","map-url",883598604),waveney.integrations.openweather.__GT_weather_map_url("clouds_new")], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"Precipitation",new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("waveney.layers.weather","precipitation","waveney.layers.weather/precipitation",866647452),new cljs.core.Keyword(null,"map-url","map-url",883598604),waveney.integrations.openweather.__GT_weather_map_url("precipitation_new")], null)], null);
waveney.layers.weather.weather_layer__GT_radio_button = (function waveney$layers$weather$weather_layer__GT_radio_button(p__20747){
var map__20748 = p__20747;
var map__20748__$1 = cljs.core.__destructure_map(map__20748);
var weather_layer = map__20748__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20748__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20748__$1,new cljs.core.Keyword(null,"display-name","display-name",694513143));
var map_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20748__$1,new cljs.core.Keyword(null,"map-url","map-url",883598604));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.weather-layer","label.weather-layer",659113449),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),cljs.core.name(id)], null),display_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name(id),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(id),new cljs.core.Keyword(null,"name","name",1843675177),"weather-layer",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"weather-layer","weather-layer",1380434068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(waveney.app_state.app_state)))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(waveney.app_state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"weather-layer","weather-layer",1380434068),weather_layer);

return waveney.carto.update_weather_url_BANG_(map_url);
})], null)], null)], null);
});
waveney.layers.weather.format_time = (function waveney$layers$weather$format_time(time_str){
var vec__20749 = cljs.core.re_find(/(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})/,time_str);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20749,(0),null);
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20749,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20749,(2),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(time)].join('');
});
waveney.layers.weather.weather_data_table = (function waveney$layers$weather$weather_data_table(p__20752){
var map__20753 = p__20752;
var map__20753__$1 = cljs.core.__destructure_map(map__20753);
var timezone = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20753__$1,new cljs.core.Keyword(null,"timezone","timezone",1831928099));
var longitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20753__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20753__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var hourly = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20753__$1,new cljs.core.Keyword(null,"hourly","hourly",-1529948525));
var map__20754 = hourly;
var map__20754__$1 = cljs.core.__destructure_map(map__20754);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20754__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var temperature_2m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20754__$1,new cljs.core.Keyword(null,"temperature_2m","temperature_2m",867288347));
var relative_humidity_2m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20754__$1,new cljs.core.Keyword(null,"relative_humidity_2m","relative_humidity_2m",-109285559));
var wind_speed_10m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20754__$1,new cljs.core.Keyword(null,"wind_speed_10m","wind_speed_10m",1718122772));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"scroll"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.data","div.data",1292614281),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector,new cljs.core.Keyword(null,"td","td",1479933353),t], null);
}),time)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (temp){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(temp)," \u00B0C"].join('')], null);
}),temperature_2m)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (hum){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Relative Humidity: "], null),hum], null);
}),relative_humidity_2m)], null)], null)], null)], null);
});
waveney.layers.weather.view = (function waveney$layers$weather$view(){
var weather_data = new cljs.core.Keyword(null,"weather-at-loc","weather-at-loc",-1973395805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(waveney.app_state.app_state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.weather-view","div.weather-view",-152934841),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.weather-layer","fieldset.weather-layer",-885527713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Select a weather layer:"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(waveney.layers.weather.weather_layer__GT_radio_button,waveney.layers.weather.weather_layers)),(cljs.core.truth_(weather_data)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [waveney.layers.weather.weather_data_table,weather_data], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Click map to show forcast at location"], null))], null);
});

//# sourceMappingURL=waveney.layers.weather.js.map
