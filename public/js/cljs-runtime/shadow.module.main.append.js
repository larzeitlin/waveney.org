
shadow.cljs.devtools.client.env.module_loaded('main');

try { waveney.app.init(); } catch (e) { console.error("An error occurred when calling (waveney.app/init)"); console.error(e); }