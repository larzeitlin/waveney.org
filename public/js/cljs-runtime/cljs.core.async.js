goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20723 = (function (f,blockable,meta20724){
this.f = f;
this.blockable = blockable;
this.meta20724 = meta20724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20725,meta20724__$1){
var self__ = this;
var _20725__$1 = this;
return (new cljs.core.async.t_cljs$core$async20723(self__.f,self__.blockable,meta20724__$1));
}));

(cljs.core.async.t_cljs$core$async20723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20725){
var self__ = this;
var _20725__$1 = this;
return self__.meta20724;
}));

(cljs.core.async.t_cljs$core$async20723.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20723.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20723.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async20723.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async20723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20724","meta20724",1902025047,null)], null);
}));

(cljs.core.async.t_cljs$core$async20723.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20723.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20723");

(cljs.core.async.t_cljs$core$async20723.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20723");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20723.
 */
cljs.core.async.__GT_t_cljs$core$async20723 = (function cljs$core$async$__GT_t_cljs$core$async20723(f,blockable,meta20724){
return (new cljs.core.async.t_cljs$core$async20723(f,blockable,meta20724));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__20719 = arguments.length;
switch (G__20719) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async20723(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__20752 = arguments.length;
switch (G__20752) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__20762 = arguments.length;
switch (G__20762) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__20793 = arguments.length;
switch (G__20793) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_23941 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23941) : fn1.call(null, val_23941));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23941) : fn1.call(null, val_23941));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__20797 = arguments.length;
switch (G__20797) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___23965 = n;
var x_23966 = (0);
while(true){
if((x_23966 < n__5593__auto___23965)){
(a[x_23966] = x_23966);

var G__23967 = (x_23966 + (1));
x_23966 = G__23967;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20803 = (function (flag,meta20804){
this.flag = flag;
this.meta20804 = meta20804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20805,meta20804__$1){
var self__ = this;
var _20805__$1 = this;
return (new cljs.core.async.t_cljs$core$async20803(self__.flag,meta20804__$1));
}));

(cljs.core.async.t_cljs$core$async20803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20805){
var self__ = this;
var _20805__$1 = this;
return self__.meta20804;
}));

(cljs.core.async.t_cljs$core$async20803.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20803.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async20803.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20803.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async20803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20804","meta20804",-1532295380,null)], null);
}));

(cljs.core.async.t_cljs$core$async20803.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20803");

(cljs.core.async.t_cljs$core$async20803.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20803");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20803.
 */
cljs.core.async.__GT_t_cljs$core$async20803 = (function cljs$core$async$__GT_t_cljs$core$async20803(flag,meta20804){
return (new cljs.core.async.t_cljs$core$async20803(flag,meta20804));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async20803(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20814 = (function (flag,cb,meta20815){
this.flag = flag;
this.cb = cb;
this.meta20815 = meta20815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20816,meta20815__$1){
var self__ = this;
var _20816__$1 = this;
return (new cljs.core.async.t_cljs$core$async20814(self__.flag,self__.cb,meta20815__$1));
}));

(cljs.core.async.t_cljs$core$async20814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20816){
var self__ = this;
var _20816__$1 = this;
return self__.meta20815;
}));

(cljs.core.async.t_cljs$core$async20814.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20814.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async20814.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20814.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async20814.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20815","meta20815",-132758394,null)], null);
}));

(cljs.core.async.t_cljs$core$async20814.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20814.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20814");

(cljs.core.async.t_cljs$core$async20814.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20814");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20814.
 */
cljs.core.async.__GT_t_cljs$core$async20814 = (function cljs$core$async$__GT_t_cljs$core$async20814(flag,cb,meta20815){
return (new cljs.core.async.t_cljs$core$async20814(flag,cb,meta20815));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async20814(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20826_SHARP_){
var G__20831 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20826_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__20831) : fret.call(null, G__20831));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20827_SHARP_){
var G__20832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20827_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__20832) : fret.call(null, G__20832));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23975 = (i + (1));
i = G__23975;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23980 = arguments.length;
var i__5727__auto___23981 = (0);
while(true){
if((i__5727__auto___23981 < len__5726__auto___23980)){
args__5732__auto__.push((arguments[i__5727__auto___23981]));

var G__23982 = (i__5727__auto___23981 + (1));
i__5727__auto___23981 = G__23982;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20848){
var map__20849 = p__20848;
var map__20849__$1 = cljs.core.__destructure_map(map__20849);
var opts = map__20849__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20839){
var G__20840 = cljs.core.first(seq20839);
var seq20839__$1 = cljs.core.next(seq20839);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20840,seq20839__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__20860 = arguments.length;
switch (G__20860) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20621__auto___23993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20622__auto__ = (function (){var switch__20381__auto__ = (function (state_20903){
var state_val_20904 = (state_20903[(1)]);
if((state_val_20904 === (7))){
var inst_20895 = (state_20903[(2)]);
var state_20903__$1 = state_20903;
var statearr_20908_23994 = state_20903__$1;
(statearr_20908_23994[(2)] = inst_20895);

(statearr_20908_23994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (1))){
var state_20903__$1 = state_20903;
var statearr_20909_23995 = state_20903__$1;
(statearr_20909_23995[(2)] = null);

(statearr_20909_23995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (4))){
var inst_20877 = (state_20903[(7)]);
var inst_20877__$1 = (state_20903[(2)]);
var inst_20879 = (inst_20877__$1 == null);
var state_20903__$1 = (function (){var statearr_20912 = state_20903;
(statearr_20912[(7)] = inst_20877__$1);

return statearr_20912;
})();
if(cljs.core.truth_(inst_20879)){
var statearr_20913_23997 = state_20903__$1;
(statearr_20913_23997[(1)] = (5));

} else {
var statearr_20914_24001 = state_20903__$1;
(statearr_20914_24001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (13))){
var state_20903__$1 = state_20903;
var statearr_20915_24004 = state_20903__$1;
(statearr_20915_24004[(2)] = null);

(statearr_20915_24004[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (6))){
var inst_20877 = (state_20903[(7)]);
var state_20903__$1 = state_20903;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20903__$1,(11),to,inst_20877);
} else {
if((state_val_20904 === (3))){
var inst_20898 = (state_20903[(2)]);
var state_20903__$1 = state_20903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20903__$1,inst_20898);
} else {
if((state_val_20904 === (12))){
var state_20903__$1 = state_20903;
var statearr_20921_24007 = state_20903__$1;
(statearr_20921_24007[(2)] = null);

(statearr_20921_24007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (2))){
var state_20903__$1 = state_20903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20903__$1,(4),from);
} else {
if((state_val_20904 === (11))){
var inst_20888 = (state_20903[(2)]);
var state_20903__$1 = state_20903;
if(cljs.core.truth_(inst_20888)){
var statearr_20927_24010 = state_20903__$1;
(statearr_20927_24010[(1)] = (12));

} else {
var statearr_20928_24011 = state_20903__$1;
(statearr_20928_24011[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (9))){
var state_20903__$1 = state_20903;
var statearr_20931_24012 = state_20903__$1;
(statearr_20931_24012[(2)] = null);

(statearr_20931_24012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (5))){
var state_20903__$1 = state_20903;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20940_24013 = state_20903__$1;
(statearr_20940_24013[(1)] = (8));

} else {
var statearr_20941_24015 = state_20903__$1;
(statearr_20941_24015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (14))){
var inst_20893 = (state_20903[(2)]);
var state_20903__$1 = state_20903;
var statearr_20942_24018 = state_20903__$1;
(statearr_20942_24018[(2)] = inst_20893);

(statearr_20942_24018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (10))){
var inst_20885 = (state_20903[(2)]);
var state_20903__$1 = state_20903;
var statearr_20945_24019 = state_20903__$1;
(statearr_20945_24019[(2)] = inst_20885);

(statearr_20945_24019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (8))){
var inst_20882 = cljs.core.async.close_BANG_(to);
var state_20903__$1 = state_20903;
var statearr_20954_24020 = state_20903__$1;
(statearr_20954_24020[(2)] = inst_20882);

(statearr_20954_24020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__20382__auto__ = null;
var cljs$core$async$state_machine__20382__auto____0 = (function (){
var statearr_20958 = [null,null,null,null,null,null,null,null];
(statearr_20958[(0)] = cljs$core$async$state_machine__20382__auto__);

(statearr_20958[(1)] = (1));

return statearr_20958;
});
var cljs$core$async$state_machine__20382__auto____1 = (function (state_20903){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__(state_20903);
if(cljs.core.keyword_identical_QMARK_(result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e20964){var ex__20385__auto__ = e20964;
var statearr_20966_24024 = state_20903;
(statearr_20966_24024[(2)] = ex__20385__auto__);


if(cljs.core.seq((state_20903[(4)]))){
var statearr_20967_24025 = state_20903;
(statearr_20967_24025[(1)] = cljs.core.first((state_20903[(4)])));

} else {
throw ex__20385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24026 = state_20903;
state_20903 = G__24026;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
cljs$core$async$state_machine__20382__auto__ = function(state_20903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20382__auto____1.call(this,state_20903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20382__auto____0;
cljs$core$async$state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20382__auto____1;
return cljs$core$async$state_machine__20382__auto__;
})()
})();
var state__20623__auto__ = (function (){var statearr_20974 = f__20622__auto__();
(statearr_20974[(6)] = c__20621__auto___23993);

return statearr_20974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20623__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__20996){
var vec__20997 = p__20996;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20997,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20997,(1),null);
var job = vec__20997;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__20621__auto___24034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20622__auto__ = (function (){var switch__20381__auto__ = (function (state_21009){
var state_val_21010 = (state_21009[(1)]);
if((state_val_21010 === (1))){
var state_21009__$1 = state_21009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21009__$1,(2),res,v);
} else {
if((state_val_21010 === (2))){
var inst_21004 = (state_21009[(2)]);
var inst_21005 = cljs.core.async.close_BANG_(res);
var state_21009__$1 = (function (){var statearr_21019 = state_21009;
(statearr_21019[(7)] = inst_21004);

return statearr_21019;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21009__$1,inst_21005);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____0 = (function (){
var statearr_21021 = [null,null,null,null,null,null,null,null];
(statearr_21021[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__);

(statearr_21021[(1)] = (1));

return statearr_21021;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____1 = (function (state_21009){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__(state_21009);
if(cljs.core.keyword_identical_QMARK_(result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e21028){var ex__20385__auto__ = e21028;
var statearr_21029_24045 = state_21009;
(statearr_21029_24045[(2)] = ex__20385__auto__);


if(cljs.core.seq((state_21009[(4)]))){
var statearr_21031_24046 = state_21009;
(statearr_21031_24046[(1)] = cljs.core.first((state_21009[(4)])));

} else {
throw ex__20385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24047 = state_21009;
state_21009 = G__24047;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__ = function(state_21009){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____1.call(this,state_21009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__;
})()
})();
var state__20623__auto__ = (function (){var statearr_21032 = f__20622__auto__();
(statearr_21032[(6)] = c__20621__auto___24034);

return statearr_21032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20623__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__21038){
var vec__21039 = p__21038;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21039,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21039,(1),null);
var job = vec__21039;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___24049 = n;
var __24050 = (0);
while(true){
if((__24050 < n__5593__auto___24049)){
var G__21048_24051 = type;
var G__21048_24052__$1 = (((G__21048_24051 instanceof cljs.core.Keyword))?G__21048_24051.fqn:null);
switch (G__21048_24052__$1) {
case "compute":
var c__20621__auto___24055 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24050,c__20621__auto___24055,G__21048_24051,G__21048_24052__$1,n__5593__auto___24049,jobs,results,process__$1,async){
return (function (){
var f__20622__auto__ = (function (){var switch__20381__auto__ = ((function (__24050,c__20621__auto___24055,G__21048_24051,G__21048_24052__$1,n__5593__auto___24049,jobs,results,process__$1,async){
return (function (state_21066){
var state_val_21067 = (state_21066[(1)]);
if((state_val_21067 === (1))){
var state_21066__$1 = state_21066;
var statearr_21076_24057 = state_21066__$1;
(statearr_21076_24057[(2)] = null);

(statearr_21076_24057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21067 === (2))){
var state_21066__$1 = state_21066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21066__$1,(4),jobs);
} else {
if((state_val_21067 === (3))){
var inst_21064 = (state_21066[(2)]);
var state_21066__$1 = state_21066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21066__$1,inst_21064);
} else {
if((state_val_21067 === (4))){
var inst_21056 = (state_21066[(2)]);
var inst_21057 = process__$1(inst_21056);
var state_21066__$1 = state_21066;
if(cljs.core.truth_(inst_21057)){
var statearr_21083_24058 = state_21066__$1;
(statearr_21083_24058[(1)] = (5));

} else {
var statearr_21085_24059 = state_21066__$1;
(statearr_21085_24059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21067 === (5))){
var state_21066__$1 = state_21066;
var statearr_21089_24060 = state_21066__$1;
(statearr_21089_24060[(2)] = null);

(statearr_21089_24060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21067 === (6))){
var state_21066__$1 = state_21066;
var statearr_21091_24062 = state_21066__$1;
(statearr_21091_24062[(2)] = null);

(statearr_21091_24062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21067 === (7))){
var inst_21062 = (state_21066[(2)]);
var state_21066__$1 = state_21066;
var statearr_21096_24067 = state_21066__$1;
(statearr_21096_24067[(2)] = inst_21062);

(statearr_21096_24067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24050,c__20621__auto___24055,G__21048_24051,G__21048_24052__$1,n__5593__auto___24049,jobs,results,process__$1,async))
;
return ((function (__24050,switch__20381__auto__,c__20621__auto___24055,G__21048_24051,G__21048_24052__$1,n__5593__auto___24049,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____0 = (function (){
var statearr_21097 = [null,null,null,null,null,null,null];
(statearr_21097[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__);

(statearr_21097[(1)] = (1));

return statearr_21097;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____1 = (function (state_21066){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__(state_21066);
if(cljs.core.keyword_identical_QMARK_(result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e21098){var ex__20385__auto__ = e21098;
var statearr_21099_24078 = state_21066;
(statearr_21099_24078[(2)] = ex__20385__auto__);


if(cljs.core.seq((state_21066[(4)]))){
var statearr_21100_24079 = state_21066;
(statearr_21100_24079[(1)] = cljs.core.first((state_21066[(4)])));

} else {
throw ex__20385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24081 = state_21066;
state_21066 = G__24081;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__ = function(state_21066){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____1.call(this,state_21066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__;
})()
;})(__24050,switch__20381__auto__,c__20621__auto___24055,G__21048_24051,G__21048_24052__$1,n__5593__auto___24049,jobs,results,process__$1,async))
})();
var state__20623__auto__ = (function (){var statearr_21104 = f__20622__auto__();
(statearr_21104[(6)] = c__20621__auto___24055);

return statearr_21104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20623__auto__);
});})(__24050,c__20621__auto___24055,G__21048_24051,G__21048_24052__$1,n__5593__auto___24049,jobs,results,process__$1,async))
);


break;
case "async":
var c__20621__auto___24082 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24050,c__20621__auto___24082,G__21048_24051,G__21048_24052__$1,n__5593__auto___24049,jobs,results,process__$1,async){
return (function (){
var f__20622__auto__ = (function (){var switch__20381__auto__ = ((function (__24050,c__20621__auto___24082,G__21048_24051,G__21048_24052__$1,n__5593__auto___24049,jobs,results,process__$1,async){
return (function (state_21117){
var state_val_21122 = (state_21117[(1)]);
if((state_val_21122 === (1))){
var state_21117__$1 = state_21117;
var statearr_21139_24086 = state_21117__$1;
(statearr_21139_24086[(2)] = null);

(statearr_21139_24086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (2))){
var state_21117__$1 = state_21117;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21117__$1,(4),jobs);
} else {
if((state_val_21122 === (3))){
var inst_21115 = (state_21117[(2)]);
var state_21117__$1 = state_21117;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21117__$1,inst_21115);
} else {
if((state_val_21122 === (4))){
var inst_21107 = (state_21117[(2)]);
var inst_21108 = async(inst_21107);
var state_21117__$1 = state_21117;
if(cljs.core.truth_(inst_21108)){
var statearr_21140_24088 = state_21117__$1;
(statearr_21140_24088[(1)] = (5));

} else {
var statearr_21143_24089 = state_21117__$1;
(statearr_21143_24089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (5))){
var state_21117__$1 = state_21117;
var statearr_21145_24090 = state_21117__$1;
(statearr_21145_24090[(2)] = null);

(statearr_21145_24090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (6))){
var state_21117__$1 = state_21117;
var statearr_21147_24092 = state_21117__$1;
(statearr_21147_24092[(2)] = null);

(statearr_21147_24092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (7))){
var inst_21113 = (state_21117[(2)]);
var state_21117__$1 = state_21117;
var statearr_21150_24093 = state_21117__$1;
(statearr_21150_24093[(2)] = inst_21113);

(statearr_21150_24093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24050,c__20621__auto___24082,G__21048_24051,G__21048_24052__$1,n__5593__auto___24049,jobs,results,process__$1,async))
;
return ((function (__24050,switch__20381__auto__,c__20621__auto___24082,G__21048_24051,G__21048_24052__$1,n__5593__auto___24049,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____0 = (function (){
var statearr_21151 = [null,null,null,null,null,null,null];
(statearr_21151[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__);

(statearr_21151[(1)] = (1));

return statearr_21151;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____1 = (function (state_21117){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__(state_21117);
if(cljs.core.keyword_identical_QMARK_(result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e21154){var ex__20385__auto__ = e21154;
var statearr_21156_24100 = state_21117;
(statearr_21156_24100[(2)] = ex__20385__auto__);


if(cljs.core.seq((state_21117[(4)]))){
var statearr_21158_24103 = state_21117;
(statearr_21158_24103[(1)] = cljs.core.first((state_21117[(4)])));

} else {
throw ex__20385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24106 = state_21117;
state_21117 = G__24106;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__ = function(state_21117){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____1.call(this,state_21117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__;
})()
;})(__24050,switch__20381__auto__,c__20621__auto___24082,G__21048_24051,G__21048_24052__$1,n__5593__auto___24049,jobs,results,process__$1,async))
})();
var state__20623__auto__ = (function (){var statearr_21162 = f__20622__auto__();
(statearr_21162[(6)] = c__20621__auto___24082);

return statearr_21162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20623__auto__);
});})(__24050,c__20621__auto___24082,G__21048_24051,G__21048_24052__$1,n__5593__auto___24049,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21048_24052__$1)].join('')));

}

var G__24110 = (__24050 + (1));
__24050 = G__24110;
continue;
} else {
}
break;
}

var c__20621__auto___24111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20622__auto__ = (function (){var switch__20381__auto__ = (function (state_21192){
var state_val_21193 = (state_21192[(1)]);
if((state_val_21193 === (7))){
var inst_21187 = (state_21192[(2)]);
var state_21192__$1 = state_21192;
var statearr_21201_24112 = state_21192__$1;
(statearr_21201_24112[(2)] = inst_21187);

(statearr_21201_24112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21193 === (1))){
var state_21192__$1 = state_21192;
var statearr_21204_24116 = state_21192__$1;
(statearr_21204_24116[(2)] = null);

(statearr_21204_24116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21193 === (4))){
var inst_21168 = (state_21192[(7)]);
var inst_21168__$1 = (state_21192[(2)]);
var inst_21171 = (inst_21168__$1 == null);
var state_21192__$1 = (function (){var statearr_21206 = state_21192;
(statearr_21206[(7)] = inst_21168__$1);

return statearr_21206;
})();
if(cljs.core.truth_(inst_21171)){
var statearr_21207_24117 = state_21192__$1;
(statearr_21207_24117[(1)] = (5));

} else {
var statearr_21209_24118 = state_21192__$1;
(statearr_21209_24118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21193 === (6))){
var inst_21176 = (state_21192[(8)]);
var inst_21168 = (state_21192[(7)]);
var inst_21176__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_21178 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21179 = [inst_21168,inst_21176__$1];
var inst_21180 = (new cljs.core.PersistentVector(null,2,(5),inst_21178,inst_21179,null));
var state_21192__$1 = (function (){var statearr_21220 = state_21192;
(statearr_21220[(8)] = inst_21176__$1);

return statearr_21220;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21192__$1,(8),jobs,inst_21180);
} else {
if((state_val_21193 === (3))){
var inst_21189 = (state_21192[(2)]);
var state_21192__$1 = state_21192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21192__$1,inst_21189);
} else {
if((state_val_21193 === (2))){
var state_21192__$1 = state_21192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21192__$1,(4),from);
} else {
if((state_val_21193 === (9))){
var inst_21184 = (state_21192[(2)]);
var state_21192__$1 = (function (){var statearr_21237 = state_21192;
(statearr_21237[(9)] = inst_21184);

return statearr_21237;
})();
var statearr_21238_24123 = state_21192__$1;
(statearr_21238_24123[(2)] = null);

(statearr_21238_24123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21193 === (5))){
var inst_21173 = cljs.core.async.close_BANG_(jobs);
var state_21192__$1 = state_21192;
var statearr_21239_24125 = state_21192__$1;
(statearr_21239_24125[(2)] = inst_21173);

(statearr_21239_24125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21193 === (8))){
var inst_21176 = (state_21192[(8)]);
var inst_21182 = (state_21192[(2)]);
var state_21192__$1 = (function (){var statearr_21240 = state_21192;
(statearr_21240[(10)] = inst_21182);

return statearr_21240;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21192__$1,(9),results,inst_21176);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____0 = (function (){
var statearr_21244 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21244[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__);

(statearr_21244[(1)] = (1));

return statearr_21244;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____1 = (function (state_21192){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__(state_21192);
if(cljs.core.keyword_identical_QMARK_(result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e21246){var ex__20385__auto__ = e21246;
var statearr_21247_24128 = state_21192;
(statearr_21247_24128[(2)] = ex__20385__auto__);


if(cljs.core.seq((state_21192[(4)]))){
var statearr_21248_24129 = state_21192;
(statearr_21248_24129[(1)] = cljs.core.first((state_21192[(4)])));

} else {
throw ex__20385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24133 = state_21192;
state_21192 = G__24133;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__ = function(state_21192){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____1.call(this,state_21192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__;
})()
})();
var state__20623__auto__ = (function (){var statearr_21253 = f__20622__auto__();
(statearr_21253[(6)] = c__20621__auto___24111);

return statearr_21253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20623__auto__);
}));


var c__20621__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20622__auto__ = (function (){var switch__20381__auto__ = (function (state_21299){
var state_val_21300 = (state_21299[(1)]);
if((state_val_21300 === (7))){
var inst_21295 = (state_21299[(2)]);
var state_21299__$1 = state_21299;
var statearr_21324_24140 = state_21299__$1;
(statearr_21324_24140[(2)] = inst_21295);

(statearr_21324_24140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (20))){
var state_21299__$1 = state_21299;
var statearr_21329_24141 = state_21299__$1;
(statearr_21329_24141[(2)] = null);

(statearr_21329_24141[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (1))){
var state_21299__$1 = state_21299;
var statearr_21330_24142 = state_21299__$1;
(statearr_21330_24142[(2)] = null);

(statearr_21330_24142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (4))){
var inst_21256 = (state_21299[(7)]);
var inst_21256__$1 = (state_21299[(2)]);
var inst_21257 = (inst_21256__$1 == null);
var state_21299__$1 = (function (){var statearr_21331 = state_21299;
(statearr_21331[(7)] = inst_21256__$1);

return statearr_21331;
})();
if(cljs.core.truth_(inst_21257)){
var statearr_21332_24143 = state_21299__$1;
(statearr_21332_24143[(1)] = (5));

} else {
var statearr_21335_24144 = state_21299__$1;
(statearr_21335_24144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (15))){
var inst_21273 = (state_21299[(8)]);
var state_21299__$1 = state_21299;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21299__$1,(18),to,inst_21273);
} else {
if((state_val_21300 === (21))){
var inst_21289 = (state_21299[(2)]);
var state_21299__$1 = state_21299;
var statearr_21338_24145 = state_21299__$1;
(statearr_21338_24145[(2)] = inst_21289);

(statearr_21338_24145[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (13))){
var inst_21291 = (state_21299[(2)]);
var state_21299__$1 = (function (){var statearr_21340 = state_21299;
(statearr_21340[(9)] = inst_21291);

return statearr_21340;
})();
var statearr_21342_24153 = state_21299__$1;
(statearr_21342_24153[(2)] = null);

(statearr_21342_24153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (6))){
var inst_21256 = (state_21299[(7)]);
var state_21299__$1 = state_21299;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21299__$1,(11),inst_21256);
} else {
if((state_val_21300 === (17))){
var inst_21284 = (state_21299[(2)]);
var state_21299__$1 = state_21299;
if(cljs.core.truth_(inst_21284)){
var statearr_21350_24155 = state_21299__$1;
(statearr_21350_24155[(1)] = (19));

} else {
var statearr_21351_24156 = state_21299__$1;
(statearr_21351_24156[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (3))){
var inst_21297 = (state_21299[(2)]);
var state_21299__$1 = state_21299;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21299__$1,inst_21297);
} else {
if((state_val_21300 === (12))){
var inst_21269 = (state_21299[(10)]);
var state_21299__$1 = state_21299;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21299__$1,(14),inst_21269);
} else {
if((state_val_21300 === (2))){
var state_21299__$1 = state_21299;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21299__$1,(4),results);
} else {
if((state_val_21300 === (19))){
var state_21299__$1 = state_21299;
var statearr_21358_24157 = state_21299__$1;
(statearr_21358_24157[(2)] = null);

(statearr_21358_24157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (11))){
var inst_21269 = (state_21299[(2)]);
var state_21299__$1 = (function (){var statearr_21361 = state_21299;
(statearr_21361[(10)] = inst_21269);

return statearr_21361;
})();
var statearr_21362_24158 = state_21299__$1;
(statearr_21362_24158[(2)] = null);

(statearr_21362_24158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (9))){
var state_21299__$1 = state_21299;
var statearr_21371_24159 = state_21299__$1;
(statearr_21371_24159[(2)] = null);

(statearr_21371_24159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (5))){
var state_21299__$1 = state_21299;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21372_24160 = state_21299__$1;
(statearr_21372_24160[(1)] = (8));

} else {
var statearr_21373_24162 = state_21299__$1;
(statearr_21373_24162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (14))){
var inst_21273 = (state_21299[(8)]);
var inst_21277 = (state_21299[(11)]);
var inst_21273__$1 = (state_21299[(2)]);
var inst_21276 = (inst_21273__$1 == null);
var inst_21277__$1 = cljs.core.not(inst_21276);
var state_21299__$1 = (function (){var statearr_21380 = state_21299;
(statearr_21380[(8)] = inst_21273__$1);

(statearr_21380[(11)] = inst_21277__$1);

return statearr_21380;
})();
if(inst_21277__$1){
var statearr_21387_24170 = state_21299__$1;
(statearr_21387_24170[(1)] = (15));

} else {
var statearr_21390_24171 = state_21299__$1;
(statearr_21390_24171[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (16))){
var inst_21277 = (state_21299[(11)]);
var state_21299__$1 = state_21299;
var statearr_21399_24173 = state_21299__$1;
(statearr_21399_24173[(2)] = inst_21277);

(statearr_21399_24173[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (10))){
var inst_21264 = (state_21299[(2)]);
var state_21299__$1 = state_21299;
var statearr_21408_24179 = state_21299__$1;
(statearr_21408_24179[(2)] = inst_21264);

(statearr_21408_24179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (18))){
var inst_21280 = (state_21299[(2)]);
var state_21299__$1 = state_21299;
var statearr_21414_24184 = state_21299__$1;
(statearr_21414_24184[(2)] = inst_21280);

(statearr_21414_24184[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (8))){
var inst_21260 = cljs.core.async.close_BANG_(to);
var state_21299__$1 = state_21299;
var statearr_21417_24185 = state_21299__$1;
(statearr_21417_24185[(2)] = inst_21260);

(statearr_21417_24185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____0 = (function (){
var statearr_21432 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21432[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__);

(statearr_21432[(1)] = (1));

return statearr_21432;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____1 = (function (state_21299){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__(state_21299);
if(cljs.core.keyword_identical_QMARK_(result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e21444){var ex__20385__auto__ = e21444;
var statearr_21446_24190 = state_21299;
(statearr_21446_24190[(2)] = ex__20385__auto__);


if(cljs.core.seq((state_21299[(4)]))){
var statearr_21449_24192 = state_21299;
(statearr_21449_24192[(1)] = cljs.core.first((state_21299[(4)])));

} else {
throw ex__20385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24194 = state_21299;
state_21299 = G__24194;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__ = function(state_21299){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____1.call(this,state_21299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20382__auto__;
})()
})();
var state__20623__auto__ = (function (){var statearr_21474 = f__20622__auto__();
(statearr_21474[(6)] = c__20621__auto__);

return statearr_21474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20623__auto__);
}));

return c__20621__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__21479 = arguments.length;
switch (G__21479) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__21490 = arguments.length;
switch (G__21490) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__21515 = arguments.length;
switch (G__21515) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__20621__auto___24205 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20622__auto__ = (function (){var switch__20381__auto__ = (function (state_21564){
var state_val_21565 = (state_21564[(1)]);
if((state_val_21565 === (7))){
var inst_21560 = (state_21564[(2)]);
var state_21564__$1 = state_21564;
var statearr_21566_24206 = state_21564__$1;
(statearr_21566_24206[(2)] = inst_21560);

(statearr_21566_24206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21565 === (1))){
var state_21564__$1 = state_21564;
var statearr_21568_24207 = state_21564__$1;
(statearr_21568_24207[(2)] = null);

(statearr_21568_24207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21565 === (4))){
var inst_21541 = (state_21564[(7)]);
var inst_21541__$1 = (state_21564[(2)]);
var inst_21542 = (inst_21541__$1 == null);
var state_21564__$1 = (function (){var statearr_21569 = state_21564;
(statearr_21569[(7)] = inst_21541__$1);

return statearr_21569;
})();
if(cljs.core.truth_(inst_21542)){
var statearr_21570_24211 = state_21564__$1;
(statearr_21570_24211[(1)] = (5));

} else {
var statearr_21572_24212 = state_21564__$1;
(statearr_21572_24212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21565 === (13))){
var state_21564__$1 = state_21564;
var statearr_21573_24213 = state_21564__$1;
(statearr_21573_24213[(2)] = null);

(statearr_21573_24213[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21565 === (6))){
var inst_21541 = (state_21564[(7)]);
var inst_21547 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_21541) : p.call(null, inst_21541));
var state_21564__$1 = state_21564;
if(cljs.core.truth_(inst_21547)){
var statearr_21574_24216 = state_21564__$1;
(statearr_21574_24216[(1)] = (9));

} else {
var statearr_21576_24217 = state_21564__$1;
(statearr_21576_24217[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21565 === (3))){
var inst_21562 = (state_21564[(2)]);
var state_21564__$1 = state_21564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21564__$1,inst_21562);
} else {
if((state_val_21565 === (12))){
var state_21564__$1 = state_21564;
var statearr_21580_24220 = state_21564__$1;
(statearr_21580_24220[(2)] = null);

(statearr_21580_24220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21565 === (2))){
var state_21564__$1 = state_21564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21564__$1,(4),ch);
} else {
if((state_val_21565 === (11))){
var inst_21541 = (state_21564[(7)]);
var inst_21551 = (state_21564[(2)]);
var state_21564__$1 = state_21564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21564__$1,(8),inst_21551,inst_21541);
} else {
if((state_val_21565 === (9))){
var state_21564__$1 = state_21564;
var statearr_21581_24224 = state_21564__$1;
(statearr_21581_24224[(2)] = tc);

(statearr_21581_24224[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21565 === (5))){
var inst_21544 = cljs.core.async.close_BANG_(tc);
var inst_21545 = cljs.core.async.close_BANG_(fc);
var state_21564__$1 = (function (){var statearr_21582 = state_21564;
(statearr_21582[(8)] = inst_21544);

return statearr_21582;
})();
var statearr_21585_24228 = state_21564__$1;
(statearr_21585_24228[(2)] = inst_21545);

(statearr_21585_24228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21565 === (14))){
var inst_21558 = (state_21564[(2)]);
var state_21564__$1 = state_21564;
var statearr_21586_24229 = state_21564__$1;
(statearr_21586_24229[(2)] = inst_21558);

(statearr_21586_24229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21565 === (10))){
var state_21564__$1 = state_21564;
var statearr_21589_24232 = state_21564__$1;
(statearr_21589_24232[(2)] = fc);

(statearr_21589_24232[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21565 === (8))){
var inst_21553 = (state_21564[(2)]);
var state_21564__$1 = state_21564;
if(cljs.core.truth_(inst_21553)){
var statearr_21590_24234 = state_21564__$1;
(statearr_21590_24234[(1)] = (12));

} else {
var statearr_21591_24235 = state_21564__$1;
(statearr_21591_24235[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__20382__auto__ = null;
var cljs$core$async$state_machine__20382__auto____0 = (function (){
var statearr_21598 = [null,null,null,null,null,null,null,null,null];
(statearr_21598[(0)] = cljs$core$async$state_machine__20382__auto__);

(statearr_21598[(1)] = (1));

return statearr_21598;
});
var cljs$core$async$state_machine__20382__auto____1 = (function (state_21564){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__(state_21564);
if(cljs.core.keyword_identical_QMARK_(result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e21604){var ex__20385__auto__ = e21604;
var statearr_21607_24239 = state_21564;
(statearr_21607_24239[(2)] = ex__20385__auto__);


if(cljs.core.seq((state_21564[(4)]))){
var statearr_21608_24240 = state_21564;
(statearr_21608_24240[(1)] = cljs.core.first((state_21564[(4)])));

} else {
throw ex__20385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24241 = state_21564;
state_21564 = G__24241;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
cljs$core$async$state_machine__20382__auto__ = function(state_21564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20382__auto____1.call(this,state_21564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20382__auto____0;
cljs$core$async$state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20382__auto____1;
return cljs$core$async$state_machine__20382__auto__;
})()
})();
var state__20623__auto__ = (function (){var statearr_21613 = f__20622__auto__();
(statearr_21613[(6)] = c__20621__auto___24205);

return statearr_21613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20623__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20621__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20622__auto__ = (function (){var switch__20381__auto__ = (function (state_21654){
var state_val_21655 = (state_21654[(1)]);
if((state_val_21655 === (7))){
var inst_21650 = (state_21654[(2)]);
var state_21654__$1 = state_21654;
var statearr_21660_24242 = state_21654__$1;
(statearr_21660_24242[(2)] = inst_21650);

(statearr_21660_24242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21655 === (1))){
var inst_21625 = init;
var inst_21626 = inst_21625;
var state_21654__$1 = (function (){var statearr_21662 = state_21654;
(statearr_21662[(7)] = inst_21626);

return statearr_21662;
})();
var statearr_21663_24244 = state_21654__$1;
(statearr_21663_24244[(2)] = null);

(statearr_21663_24244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21655 === (4))){
var inst_21630 = (state_21654[(8)]);
var inst_21630__$1 = (state_21654[(2)]);
var inst_21631 = (inst_21630__$1 == null);
var state_21654__$1 = (function (){var statearr_21668 = state_21654;
(statearr_21668[(8)] = inst_21630__$1);

return statearr_21668;
})();
if(cljs.core.truth_(inst_21631)){
var statearr_21673_24245 = state_21654__$1;
(statearr_21673_24245[(1)] = (5));

} else {
var statearr_21674_24246 = state_21654__$1;
(statearr_21674_24246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21655 === (6))){
var inst_21636 = (state_21654[(9)]);
var inst_21630 = (state_21654[(8)]);
var inst_21626 = (state_21654[(7)]);
var inst_21636__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_21626,inst_21630) : f.call(null, inst_21626,inst_21630));
var inst_21637 = cljs.core.reduced_QMARK_(inst_21636__$1);
var state_21654__$1 = (function (){var statearr_21680 = state_21654;
(statearr_21680[(9)] = inst_21636__$1);

return statearr_21680;
})();
if(inst_21637){
var statearr_21681_24260 = state_21654__$1;
(statearr_21681_24260[(1)] = (8));

} else {
var statearr_21682_24261 = state_21654__$1;
(statearr_21682_24261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21655 === (3))){
var inst_21652 = (state_21654[(2)]);
var state_21654__$1 = state_21654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21654__$1,inst_21652);
} else {
if((state_val_21655 === (2))){
var state_21654__$1 = state_21654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21654__$1,(4),ch);
} else {
if((state_val_21655 === (9))){
var inst_21636 = (state_21654[(9)]);
var inst_21626 = inst_21636;
var state_21654__$1 = (function (){var statearr_21691 = state_21654;
(statearr_21691[(7)] = inst_21626);

return statearr_21691;
})();
var statearr_21693_24266 = state_21654__$1;
(statearr_21693_24266[(2)] = null);

(statearr_21693_24266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21655 === (5))){
var inst_21626 = (state_21654[(7)]);
var state_21654__$1 = state_21654;
var statearr_21703_24267 = state_21654__$1;
(statearr_21703_24267[(2)] = inst_21626);

(statearr_21703_24267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21655 === (10))){
var inst_21646 = (state_21654[(2)]);
var state_21654__$1 = state_21654;
var statearr_21710_24272 = state_21654__$1;
(statearr_21710_24272[(2)] = inst_21646);

(statearr_21710_24272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21655 === (8))){
var inst_21636 = (state_21654[(9)]);
var inst_21640 = cljs.core.deref(inst_21636);
var state_21654__$1 = state_21654;
var statearr_21712_24277 = state_21654__$1;
(statearr_21712_24277[(2)] = inst_21640);

(statearr_21712_24277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__20382__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20382__auto____0 = (function (){
var statearr_21724 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21724[(0)] = cljs$core$async$reduce_$_state_machine__20382__auto__);

(statearr_21724[(1)] = (1));

return statearr_21724;
});
var cljs$core$async$reduce_$_state_machine__20382__auto____1 = (function (state_21654){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__(state_21654);
if(cljs.core.keyword_identical_QMARK_(result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e21726){var ex__20385__auto__ = e21726;
var statearr_21727_24286 = state_21654;
(statearr_21727_24286[(2)] = ex__20385__auto__);


if(cljs.core.seq((state_21654[(4)]))){
var statearr_21728_24290 = state_21654;
(statearr_21728_24290[(1)] = cljs.core.first((state_21654[(4)])));

} else {
throw ex__20385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24291 = state_21654;
state_21654 = G__24291;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20382__auto__ = function(state_21654){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20382__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20382__auto____1.call(this,state_21654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20382__auto____0;
cljs$core$async$reduce_$_state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20382__auto____1;
return cljs$core$async$reduce_$_state_machine__20382__auto__;
})()
})();
var state__20623__auto__ = (function (){var statearr_21739 = f__20622__auto__();
(statearr_21739[(6)] = c__20621__auto__);

return statearr_21739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20623__auto__);
}));

return c__20621__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__20621__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20622__auto__ = (function (){var switch__20381__auto__ = (function (state_21755){
var state_val_21756 = (state_21755[(1)]);
if((state_val_21756 === (1))){
var inst_21750 = cljs.core.async.reduce(f__$1,init,ch);
var state_21755__$1 = state_21755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21755__$1,(2),inst_21750);
} else {
if((state_val_21756 === (2))){
var inst_21752 = (state_21755[(2)]);
var inst_21753 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_21752) : f__$1.call(null, inst_21752));
var state_21755__$1 = state_21755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21755__$1,inst_21753);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__20382__auto__ = null;
var cljs$core$async$transduce_$_state_machine__20382__auto____0 = (function (){
var statearr_21770 = [null,null,null,null,null,null,null];
(statearr_21770[(0)] = cljs$core$async$transduce_$_state_machine__20382__auto__);

(statearr_21770[(1)] = (1));

return statearr_21770;
});
var cljs$core$async$transduce_$_state_machine__20382__auto____1 = (function (state_21755){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__(state_21755);
if(cljs.core.keyword_identical_QMARK_(result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e21772){var ex__20385__auto__ = e21772;
var statearr_21773_24314 = state_21755;
(statearr_21773_24314[(2)] = ex__20385__auto__);


if(cljs.core.seq((state_21755[(4)]))){
var statearr_21775_24315 = state_21755;
(statearr_21775_24315[(1)] = cljs.core.first((state_21755[(4)])));

} else {
throw ex__20385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24319 = state_21755;
state_21755 = G__24319;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__20382__auto__ = function(state_21755){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__20382__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__20382__auto____1.call(this,state_21755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__20382__auto____0;
cljs$core$async$transduce_$_state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__20382__auto____1;
return cljs$core$async$transduce_$_state_machine__20382__auto__;
})()
})();
var state__20623__auto__ = (function (){var statearr_21780 = f__20622__auto__();
(statearr_21780[(6)] = c__20621__auto__);

return statearr_21780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20623__auto__);
}));

return c__20621__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__21789 = arguments.length;
switch (G__21789) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20621__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20622__auto__ = (function (){var switch__20381__auto__ = (function (state_21822){
var state_val_21823 = (state_21822[(1)]);
if((state_val_21823 === (7))){
var inst_21802 = (state_21822[(2)]);
var state_21822__$1 = state_21822;
var statearr_21826_24341 = state_21822__$1;
(statearr_21826_24341[(2)] = inst_21802);

(statearr_21826_24341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (1))){
var inst_21793 = cljs.core.seq(coll);
var inst_21795 = inst_21793;
var state_21822__$1 = (function (){var statearr_21830 = state_21822;
(statearr_21830[(7)] = inst_21795);

return statearr_21830;
})();
var statearr_21831_24342 = state_21822__$1;
(statearr_21831_24342[(2)] = null);

(statearr_21831_24342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (4))){
var inst_21795 = (state_21822[(7)]);
var inst_21800 = cljs.core.first(inst_21795);
var state_21822__$1 = state_21822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21822__$1,(7),ch,inst_21800);
} else {
if((state_val_21823 === (13))){
var inst_21816 = (state_21822[(2)]);
var state_21822__$1 = state_21822;
var statearr_21833_24346 = state_21822__$1;
(statearr_21833_24346[(2)] = inst_21816);

(statearr_21833_24346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (6))){
var inst_21805 = (state_21822[(2)]);
var state_21822__$1 = state_21822;
if(cljs.core.truth_(inst_21805)){
var statearr_21836_24347 = state_21822__$1;
(statearr_21836_24347[(1)] = (8));

} else {
var statearr_21837_24348 = state_21822__$1;
(statearr_21837_24348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (3))){
var inst_21820 = (state_21822[(2)]);
var state_21822__$1 = state_21822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21822__$1,inst_21820);
} else {
if((state_val_21823 === (12))){
var state_21822__$1 = state_21822;
var statearr_21839_24349 = state_21822__$1;
(statearr_21839_24349[(2)] = null);

(statearr_21839_24349[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (2))){
var inst_21795 = (state_21822[(7)]);
var state_21822__$1 = state_21822;
if(cljs.core.truth_(inst_21795)){
var statearr_21842_24350 = state_21822__$1;
(statearr_21842_24350[(1)] = (4));

} else {
var statearr_21844_24353 = state_21822__$1;
(statearr_21844_24353[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (11))){
var inst_21813 = cljs.core.async.close_BANG_(ch);
var state_21822__$1 = state_21822;
var statearr_21846_24354 = state_21822__$1;
(statearr_21846_24354[(2)] = inst_21813);

(statearr_21846_24354[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (9))){
var state_21822__$1 = state_21822;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21847_24355 = state_21822__$1;
(statearr_21847_24355[(1)] = (11));

} else {
var statearr_21848_24356 = state_21822__$1;
(statearr_21848_24356[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (5))){
var inst_21795 = (state_21822[(7)]);
var state_21822__$1 = state_21822;
var statearr_21850_24359 = state_21822__$1;
(statearr_21850_24359[(2)] = inst_21795);

(statearr_21850_24359[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (10))){
var inst_21818 = (state_21822[(2)]);
var state_21822__$1 = state_21822;
var statearr_21851_24361 = state_21822__$1;
(statearr_21851_24361[(2)] = inst_21818);

(statearr_21851_24361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (8))){
var inst_21795 = (state_21822[(7)]);
var inst_21807 = cljs.core.next(inst_21795);
var inst_21795__$1 = inst_21807;
var state_21822__$1 = (function (){var statearr_21856 = state_21822;
(statearr_21856[(7)] = inst_21795__$1);

return statearr_21856;
})();
var statearr_21861_24368 = state_21822__$1;
(statearr_21861_24368[(2)] = null);

(statearr_21861_24368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__20382__auto__ = null;
var cljs$core$async$state_machine__20382__auto____0 = (function (){
var statearr_21866 = [null,null,null,null,null,null,null,null];
(statearr_21866[(0)] = cljs$core$async$state_machine__20382__auto__);

(statearr_21866[(1)] = (1));

return statearr_21866;
});
var cljs$core$async$state_machine__20382__auto____1 = (function (state_21822){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__(state_21822);
if(cljs.core.keyword_identical_QMARK_(result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e21867){var ex__20385__auto__ = e21867;
var statearr_21868_24372 = state_21822;
(statearr_21868_24372[(2)] = ex__20385__auto__);


if(cljs.core.seq((state_21822[(4)]))){
var statearr_21870_24373 = state_21822;
(statearr_21870_24373[(1)] = cljs.core.first((state_21822[(4)])));

} else {
throw ex__20385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24374 = state_21822;
state_21822 = G__24374;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
cljs$core$async$state_machine__20382__auto__ = function(state_21822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20382__auto____1.call(this,state_21822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20382__auto____0;
cljs$core$async$state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20382__auto____1;
return cljs$core$async$state_machine__20382__auto__;
})()
})();
var state__20623__auto__ = (function (){var statearr_21871 = f__20622__auto__();
(statearr_21871[(6)] = c__20621__auto__);

return statearr_21871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20623__auto__);
}));

return c__20621__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__21877 = arguments.length;
switch (G__21877) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_24390 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_24390(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_24398 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_24398(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_24402 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_24402(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_24405 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_24405(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21906 = (function (ch,cs,meta21907){
this.ch = ch;
this.cs = cs;
this.meta21907 = meta21907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21908,meta21907__$1){
var self__ = this;
var _21908__$1 = this;
return (new cljs.core.async.t_cljs$core$async21906(self__.ch,self__.cs,meta21907__$1));
}));

(cljs.core.async.t_cljs$core$async21906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21908){
var self__ = this;
var _21908__$1 = this;
return self__.meta21907;
}));

(cljs.core.async.t_cljs$core$async21906.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21906.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async21906.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21906.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async21906.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async21906.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async21906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21907","meta21907",1736439801,null)], null);
}));

(cljs.core.async.t_cljs$core$async21906.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21906");

(cljs.core.async.t_cljs$core$async21906.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async21906");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21906.
 */
cljs.core.async.__GT_t_cljs$core$async21906 = (function cljs$core$async$__GT_t_cljs$core$async21906(ch,cs,meta21907){
return (new cljs.core.async.t_cljs$core$async21906(ch,cs,meta21907));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async21906(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__20621__auto___24410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20622__auto__ = (function (){var switch__20381__auto__ = (function (state_22069){
var state_val_22071 = (state_22069[(1)]);
if((state_val_22071 === (7))){
var inst_22063 = (state_22069[(2)]);
var state_22069__$1 = state_22069;
var statearr_22076_24413 = state_22069__$1;
(statearr_22076_24413[(2)] = inst_22063);

(statearr_22076_24413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (20))){
var inst_21963 = (state_22069[(7)]);
var inst_21977 = cljs.core.first(inst_21963);
var inst_21978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21977,(0),null);
var inst_21979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21977,(1),null);
var state_22069__$1 = (function (){var statearr_22078 = state_22069;
(statearr_22078[(8)] = inst_21978);

return statearr_22078;
})();
if(cljs.core.truth_(inst_21979)){
var statearr_22079_24420 = state_22069__$1;
(statearr_22079_24420[(1)] = (22));

} else {
var statearr_22080_24421 = state_22069__$1;
(statearr_22080_24421[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (27))){
var inst_22017 = (state_22069[(9)]);
var inst_22010 = (state_22069[(10)]);
var inst_22012 = (state_22069[(11)]);
var inst_21931 = (state_22069[(12)]);
var inst_22017__$1 = cljs.core._nth(inst_22010,inst_22012);
var inst_22018 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22017__$1,inst_21931,done);
var state_22069__$1 = (function (){var statearr_22087 = state_22069;
(statearr_22087[(9)] = inst_22017__$1);

return statearr_22087;
})();
if(cljs.core.truth_(inst_22018)){
var statearr_22088_24425 = state_22069__$1;
(statearr_22088_24425[(1)] = (30));

} else {
var statearr_22089_24426 = state_22069__$1;
(statearr_22089_24426[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (1))){
var state_22069__$1 = state_22069;
var statearr_22094_24427 = state_22069__$1;
(statearr_22094_24427[(2)] = null);

(statearr_22094_24427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (24))){
var inst_21963 = (state_22069[(7)]);
var inst_21987 = (state_22069[(2)]);
var inst_21988 = cljs.core.next(inst_21963);
var inst_21940 = inst_21988;
var inst_21941 = null;
var inst_21942 = (0);
var inst_21943 = (0);
var state_22069__$1 = (function (){var statearr_22098 = state_22069;
(statearr_22098[(13)] = inst_21941);

(statearr_22098[(14)] = inst_21943);

(statearr_22098[(15)] = inst_21940);

(statearr_22098[(16)] = inst_21942);

(statearr_22098[(17)] = inst_21987);

return statearr_22098;
})();
var statearr_22099_24429 = state_22069__$1;
(statearr_22099_24429[(2)] = null);

(statearr_22099_24429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (39))){
var state_22069__$1 = state_22069;
var statearr_22106_24430 = state_22069__$1;
(statearr_22106_24430[(2)] = null);

(statearr_22106_24430[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (4))){
var inst_21931 = (state_22069[(12)]);
var inst_21931__$1 = (state_22069[(2)]);
var inst_21932 = (inst_21931__$1 == null);
var state_22069__$1 = (function (){var statearr_22110 = state_22069;
(statearr_22110[(12)] = inst_21931__$1);

return statearr_22110;
})();
if(cljs.core.truth_(inst_21932)){
var statearr_22111_24442 = state_22069__$1;
(statearr_22111_24442[(1)] = (5));

} else {
var statearr_22112_24443 = state_22069__$1;
(statearr_22112_24443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (15))){
var inst_21941 = (state_22069[(13)]);
var inst_21943 = (state_22069[(14)]);
var inst_21940 = (state_22069[(15)]);
var inst_21942 = (state_22069[(16)]);
var inst_21958 = (state_22069[(2)]);
var inst_21959 = (inst_21943 + (1));
var tmp22101 = inst_21941;
var tmp22102 = inst_21940;
var tmp22103 = inst_21942;
var inst_21940__$1 = tmp22102;
var inst_21941__$1 = tmp22101;
var inst_21942__$1 = tmp22103;
var inst_21943__$1 = inst_21959;
var state_22069__$1 = (function (){var statearr_22113 = state_22069;
(statearr_22113[(13)] = inst_21941__$1);

(statearr_22113[(18)] = inst_21958);

(statearr_22113[(14)] = inst_21943__$1);

(statearr_22113[(15)] = inst_21940__$1);

(statearr_22113[(16)] = inst_21942__$1);

return statearr_22113;
})();
var statearr_22115_24448 = state_22069__$1;
(statearr_22115_24448[(2)] = null);

(statearr_22115_24448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (21))){
var inst_21991 = (state_22069[(2)]);
var state_22069__$1 = state_22069;
var statearr_22119_24449 = state_22069__$1;
(statearr_22119_24449[(2)] = inst_21991);

(statearr_22119_24449[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (31))){
var inst_22017 = (state_22069[(9)]);
var inst_22021 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_22017);
var state_22069__$1 = state_22069;
var statearr_22124_24450 = state_22069__$1;
(statearr_22124_24450[(2)] = inst_22021);

(statearr_22124_24450[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (32))){
var inst_22010 = (state_22069[(10)]);
var inst_22012 = (state_22069[(11)]);
var inst_22009 = (state_22069[(19)]);
var inst_22011 = (state_22069[(20)]);
var inst_22023 = (state_22069[(2)]);
var inst_22024 = (inst_22012 + (1));
var tmp22116 = inst_22010;
var tmp22117 = inst_22009;
var tmp22118 = inst_22011;
var inst_22009__$1 = tmp22117;
var inst_22010__$1 = tmp22116;
var inst_22011__$1 = tmp22118;
var inst_22012__$1 = inst_22024;
var state_22069__$1 = (function (){var statearr_22126 = state_22069;
(statearr_22126[(21)] = inst_22023);

(statearr_22126[(10)] = inst_22010__$1);

(statearr_22126[(11)] = inst_22012__$1);

(statearr_22126[(19)] = inst_22009__$1);

(statearr_22126[(20)] = inst_22011__$1);

return statearr_22126;
})();
var statearr_22127_24452 = state_22069__$1;
(statearr_22127_24452[(2)] = null);

(statearr_22127_24452[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (40))){
var inst_22036 = (state_22069[(22)]);
var inst_22040 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_22036);
var state_22069__$1 = state_22069;
var statearr_22129_24454 = state_22069__$1;
(statearr_22129_24454[(2)] = inst_22040);

(statearr_22129_24454[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (33))){
var inst_22027 = (state_22069[(23)]);
var inst_22029 = cljs.core.chunked_seq_QMARK_(inst_22027);
var state_22069__$1 = state_22069;
if(inst_22029){
var statearr_22130_24455 = state_22069__$1;
(statearr_22130_24455[(1)] = (36));

} else {
var statearr_22131_24456 = state_22069__$1;
(statearr_22131_24456[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (13))){
var inst_21952 = (state_22069[(24)]);
var inst_21955 = cljs.core.async.close_BANG_(inst_21952);
var state_22069__$1 = state_22069;
var statearr_22133_24457 = state_22069__$1;
(statearr_22133_24457[(2)] = inst_21955);

(statearr_22133_24457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (22))){
var inst_21978 = (state_22069[(8)]);
var inst_21984 = cljs.core.async.close_BANG_(inst_21978);
var state_22069__$1 = state_22069;
var statearr_22139_24464 = state_22069__$1;
(statearr_22139_24464[(2)] = inst_21984);

(statearr_22139_24464[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (36))){
var inst_22027 = (state_22069[(23)]);
var inst_22031 = cljs.core.chunk_first(inst_22027);
var inst_22032 = cljs.core.chunk_rest(inst_22027);
var inst_22033 = cljs.core.count(inst_22031);
var inst_22009 = inst_22032;
var inst_22010 = inst_22031;
var inst_22011 = inst_22033;
var inst_22012 = (0);
var state_22069__$1 = (function (){var statearr_22140 = state_22069;
(statearr_22140[(10)] = inst_22010);

(statearr_22140[(11)] = inst_22012);

(statearr_22140[(19)] = inst_22009);

(statearr_22140[(20)] = inst_22011);

return statearr_22140;
})();
var statearr_22142_24468 = state_22069__$1;
(statearr_22142_24468[(2)] = null);

(statearr_22142_24468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (41))){
var inst_22027 = (state_22069[(23)]);
var inst_22042 = (state_22069[(2)]);
var inst_22043 = cljs.core.next(inst_22027);
var inst_22009 = inst_22043;
var inst_22010 = null;
var inst_22011 = (0);
var inst_22012 = (0);
var state_22069__$1 = (function (){var statearr_22152 = state_22069;
(statearr_22152[(10)] = inst_22010);

(statearr_22152[(11)] = inst_22012);

(statearr_22152[(25)] = inst_22042);

(statearr_22152[(19)] = inst_22009);

(statearr_22152[(20)] = inst_22011);

return statearr_22152;
})();
var statearr_22153_24470 = state_22069__$1;
(statearr_22153_24470[(2)] = null);

(statearr_22153_24470[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (43))){
var state_22069__$1 = state_22069;
var statearr_22155_24471 = state_22069__$1;
(statearr_22155_24471[(2)] = null);

(statearr_22155_24471[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (29))){
var inst_22051 = (state_22069[(2)]);
var state_22069__$1 = state_22069;
var statearr_22160_24472 = state_22069__$1;
(statearr_22160_24472[(2)] = inst_22051);

(statearr_22160_24472[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (44))){
var inst_22060 = (state_22069[(2)]);
var state_22069__$1 = (function (){var statearr_22163 = state_22069;
(statearr_22163[(26)] = inst_22060);

return statearr_22163;
})();
var statearr_22164_24473 = state_22069__$1;
(statearr_22164_24473[(2)] = null);

(statearr_22164_24473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (6))){
var inst_22001 = (state_22069[(27)]);
var inst_22000 = cljs.core.deref(cs);
var inst_22001__$1 = cljs.core.keys(inst_22000);
var inst_22002 = cljs.core.count(inst_22001__$1);
var inst_22003 = cljs.core.reset_BANG_(dctr,inst_22002);
var inst_22008 = cljs.core.seq(inst_22001__$1);
var inst_22009 = inst_22008;
var inst_22010 = null;
var inst_22011 = (0);
var inst_22012 = (0);
var state_22069__$1 = (function (){var statearr_22174 = state_22069;
(statearr_22174[(10)] = inst_22010);

(statearr_22174[(11)] = inst_22012);

(statearr_22174[(27)] = inst_22001__$1);

(statearr_22174[(19)] = inst_22009);

(statearr_22174[(28)] = inst_22003);

(statearr_22174[(20)] = inst_22011);

return statearr_22174;
})();
var statearr_22177_24476 = state_22069__$1;
(statearr_22177_24476[(2)] = null);

(statearr_22177_24476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (28))){
var inst_22009 = (state_22069[(19)]);
var inst_22027 = (state_22069[(23)]);
var inst_22027__$1 = cljs.core.seq(inst_22009);
var state_22069__$1 = (function (){var statearr_22179 = state_22069;
(statearr_22179[(23)] = inst_22027__$1);

return statearr_22179;
})();
if(inst_22027__$1){
var statearr_22180_24477 = state_22069__$1;
(statearr_22180_24477[(1)] = (33));

} else {
var statearr_22181_24478 = state_22069__$1;
(statearr_22181_24478[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (25))){
var inst_22012 = (state_22069[(11)]);
var inst_22011 = (state_22069[(20)]);
var inst_22014 = (inst_22012 < inst_22011);
var inst_22015 = inst_22014;
var state_22069__$1 = state_22069;
if(cljs.core.truth_(inst_22015)){
var statearr_22182_24483 = state_22069__$1;
(statearr_22182_24483[(1)] = (27));

} else {
var statearr_22183_24484 = state_22069__$1;
(statearr_22183_24484[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (34))){
var state_22069__$1 = state_22069;
var statearr_22185_24495 = state_22069__$1;
(statearr_22185_24495[(2)] = null);

(statearr_22185_24495[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (17))){
var state_22069__$1 = state_22069;
var statearr_22187_24496 = state_22069__$1;
(statearr_22187_24496[(2)] = null);

(statearr_22187_24496[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (3))){
var inst_22065 = (state_22069[(2)]);
var state_22069__$1 = state_22069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22069__$1,inst_22065);
} else {
if((state_val_22071 === (12))){
var inst_21996 = (state_22069[(2)]);
var state_22069__$1 = state_22069;
var statearr_22189_24497 = state_22069__$1;
(statearr_22189_24497[(2)] = inst_21996);

(statearr_22189_24497[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (2))){
var state_22069__$1 = state_22069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22069__$1,(4),ch);
} else {
if((state_val_22071 === (23))){
var state_22069__$1 = state_22069;
var statearr_22190_24498 = state_22069__$1;
(statearr_22190_24498[(2)] = null);

(statearr_22190_24498[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (35))){
var inst_22049 = (state_22069[(2)]);
var state_22069__$1 = state_22069;
var statearr_22192_24499 = state_22069__$1;
(statearr_22192_24499[(2)] = inst_22049);

(statearr_22192_24499[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (19))){
var inst_21963 = (state_22069[(7)]);
var inst_21967 = cljs.core.chunk_first(inst_21963);
var inst_21968 = cljs.core.chunk_rest(inst_21963);
var inst_21969 = cljs.core.count(inst_21967);
var inst_21940 = inst_21968;
var inst_21941 = inst_21967;
var inst_21942 = inst_21969;
var inst_21943 = (0);
var state_22069__$1 = (function (){var statearr_22195 = state_22069;
(statearr_22195[(13)] = inst_21941);

(statearr_22195[(14)] = inst_21943);

(statearr_22195[(15)] = inst_21940);

(statearr_22195[(16)] = inst_21942);

return statearr_22195;
})();
var statearr_22196_24501 = state_22069__$1;
(statearr_22196_24501[(2)] = null);

(statearr_22196_24501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (11))){
var inst_21940 = (state_22069[(15)]);
var inst_21963 = (state_22069[(7)]);
var inst_21963__$1 = cljs.core.seq(inst_21940);
var state_22069__$1 = (function (){var statearr_22200 = state_22069;
(statearr_22200[(7)] = inst_21963__$1);

return statearr_22200;
})();
if(inst_21963__$1){
var statearr_22201_24502 = state_22069__$1;
(statearr_22201_24502[(1)] = (16));

} else {
var statearr_22202_24503 = state_22069__$1;
(statearr_22202_24503[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (9))){
var inst_21998 = (state_22069[(2)]);
var state_22069__$1 = state_22069;
var statearr_22205_24505 = state_22069__$1;
(statearr_22205_24505[(2)] = inst_21998);

(statearr_22205_24505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (5))){
var inst_21938 = cljs.core.deref(cs);
var inst_21939 = cljs.core.seq(inst_21938);
var inst_21940 = inst_21939;
var inst_21941 = null;
var inst_21942 = (0);
var inst_21943 = (0);
var state_22069__$1 = (function (){var statearr_22209 = state_22069;
(statearr_22209[(13)] = inst_21941);

(statearr_22209[(14)] = inst_21943);

(statearr_22209[(15)] = inst_21940);

(statearr_22209[(16)] = inst_21942);

return statearr_22209;
})();
var statearr_22210_24512 = state_22069__$1;
(statearr_22210_24512[(2)] = null);

(statearr_22210_24512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (14))){
var state_22069__$1 = state_22069;
var statearr_22212_24513 = state_22069__$1;
(statearr_22212_24513[(2)] = null);

(statearr_22212_24513[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (45))){
var inst_22057 = (state_22069[(2)]);
var state_22069__$1 = state_22069;
var statearr_22215_24516 = state_22069__$1;
(statearr_22215_24516[(2)] = inst_22057);

(statearr_22215_24516[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (26))){
var inst_22001 = (state_22069[(27)]);
var inst_22053 = (state_22069[(2)]);
var inst_22054 = cljs.core.seq(inst_22001);
var state_22069__$1 = (function (){var statearr_22221 = state_22069;
(statearr_22221[(29)] = inst_22053);

return statearr_22221;
})();
if(inst_22054){
var statearr_22222_24518 = state_22069__$1;
(statearr_22222_24518[(1)] = (42));

} else {
var statearr_22223_24519 = state_22069__$1;
(statearr_22223_24519[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (16))){
var inst_21963 = (state_22069[(7)]);
var inst_21965 = cljs.core.chunked_seq_QMARK_(inst_21963);
var state_22069__$1 = state_22069;
if(inst_21965){
var statearr_22226_24520 = state_22069__$1;
(statearr_22226_24520[(1)] = (19));

} else {
var statearr_22227_24521 = state_22069__$1;
(statearr_22227_24521[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (38))){
var inst_22046 = (state_22069[(2)]);
var state_22069__$1 = state_22069;
var statearr_22231_24522 = state_22069__$1;
(statearr_22231_24522[(2)] = inst_22046);

(statearr_22231_24522[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (30))){
var state_22069__$1 = state_22069;
var statearr_22232_24526 = state_22069__$1;
(statearr_22232_24526[(2)] = null);

(statearr_22232_24526[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (10))){
var inst_21941 = (state_22069[(13)]);
var inst_21943 = (state_22069[(14)]);
var inst_21951 = cljs.core._nth(inst_21941,inst_21943);
var inst_21952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21951,(0),null);
var inst_21953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21951,(1),null);
var state_22069__$1 = (function (){var statearr_22233 = state_22069;
(statearr_22233[(24)] = inst_21952);

return statearr_22233;
})();
if(cljs.core.truth_(inst_21953)){
var statearr_22234_24527 = state_22069__$1;
(statearr_22234_24527[(1)] = (13));

} else {
var statearr_22235_24528 = state_22069__$1;
(statearr_22235_24528[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (18))){
var inst_21994 = (state_22069[(2)]);
var state_22069__$1 = state_22069;
var statearr_22236_24530 = state_22069__$1;
(statearr_22236_24530[(2)] = inst_21994);

(statearr_22236_24530[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (42))){
var state_22069__$1 = state_22069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22069__$1,(45),dchan);
} else {
if((state_val_22071 === (37))){
var inst_22036 = (state_22069[(22)]);
var inst_21931 = (state_22069[(12)]);
var inst_22027 = (state_22069[(23)]);
var inst_22036__$1 = cljs.core.first(inst_22027);
var inst_22037 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22036__$1,inst_21931,done);
var state_22069__$1 = (function (){var statearr_22239 = state_22069;
(statearr_22239[(22)] = inst_22036__$1);

return statearr_22239;
})();
if(cljs.core.truth_(inst_22037)){
var statearr_22240_24531 = state_22069__$1;
(statearr_22240_24531[(1)] = (39));

} else {
var statearr_22242_24532 = state_22069__$1;
(statearr_22242_24532[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22071 === (8))){
var inst_21943 = (state_22069[(14)]);
var inst_21942 = (state_22069[(16)]);
var inst_21945 = (inst_21943 < inst_21942);
var inst_21946 = inst_21945;
var state_22069__$1 = state_22069;
if(cljs.core.truth_(inst_21946)){
var statearr_22244_24542 = state_22069__$1;
(statearr_22244_24542[(1)] = (10));

} else {
var statearr_22245_24543 = state_22069__$1;
(statearr_22245_24543[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__20382__auto__ = null;
var cljs$core$async$mult_$_state_machine__20382__auto____0 = (function (){
var statearr_22246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22246[(0)] = cljs$core$async$mult_$_state_machine__20382__auto__);

(statearr_22246[(1)] = (1));

return statearr_22246;
});
var cljs$core$async$mult_$_state_machine__20382__auto____1 = (function (state_22069){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__(state_22069);
if(cljs.core.keyword_identical_QMARK_(result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e22247){var ex__20385__auto__ = e22247;
var statearr_22248_24545 = state_22069;
(statearr_22248_24545[(2)] = ex__20385__auto__);


if(cljs.core.seq((state_22069[(4)]))){
var statearr_22249_24546 = state_22069;
(statearr_22249_24546[(1)] = cljs.core.first((state_22069[(4)])));

} else {
throw ex__20385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24551 = state_22069;
state_22069 = G__24551;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20382__auto__ = function(state_22069){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20382__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20382__auto____1.call(this,state_22069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20382__auto____0;
cljs$core$async$mult_$_state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20382__auto____1;
return cljs$core$async$mult_$_state_machine__20382__auto__;
})()
})();
var state__20623__auto__ = (function (){var statearr_22258 = f__20622__auto__();
(statearr_22258[(6)] = c__20621__auto___24410);

return statearr_22258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20623__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__22264 = arguments.length;
switch (G__22264) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_24554 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_24554(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_24561 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_24561(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_24562 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_24562(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_24570 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_24570(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_24572 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_24572(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___24574 = arguments.length;
var i__5727__auto___24575 = (0);
while(true){
if((i__5727__auto___24575 < len__5726__auto___24574)){
args__5732__auto__.push((arguments[i__5727__auto___24575]));

var G__24576 = (i__5727__auto___24575 + (1));
i__5727__auto___24575 = G__24576;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22308){
var map__22310 = p__22308;
var map__22310__$1 = cljs.core.__destructure_map(map__22310);
var opts = map__22310__$1;
var statearr_22311_24579 = state;
(statearr_22311_24579[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_22319_24580 = state;
(statearr_22319_24580[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_22323_24581 = state;
(statearr_22323_24581[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22301){
var G__22303 = cljs.core.first(seq22301);
var seq22301__$1 = cljs.core.next(seq22301);
var G__22304 = cljs.core.first(seq22301__$1);
var seq22301__$2 = cljs.core.next(seq22301__$1);
var G__22305 = cljs.core.first(seq22301__$2);
var seq22301__$3 = cljs.core.next(seq22301__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22303,G__22304,G__22305,seq22301__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22338 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22339){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22339 = meta22339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22340,meta22339__$1){
var self__ = this;
var _22340__$1 = this;
return (new cljs.core.async.t_cljs$core$async22338(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22339__$1));
}));

(cljs.core.async.t_cljs$core$async22338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22340){
var self__ = this;
var _22340__$1 = this;
return self__.meta22339;
}));

(cljs.core.async.t_cljs$core$async22338.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22338.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async22338.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22338.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async22338.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async22338.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async22338.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async22338.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async22338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22339","meta22339",301433570,null)], null);
}));

(cljs.core.async.t_cljs$core$async22338.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22338");

(cljs.core.async.t_cljs$core$async22338.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async22338");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22338.
 */
cljs.core.async.__GT_t_cljs$core$async22338 = (function cljs$core$async$__GT_t_cljs$core$async22338(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22339){
return (new cljs.core.async.t_cljs$core$async22338(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22339));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async22338(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__20621__auto___24604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20622__auto__ = (function (){var switch__20381__auto__ = (function (state_22423){
var state_val_22424 = (state_22423[(1)]);
if((state_val_22424 === (7))){
var inst_22383 = (state_22423[(2)]);
var state_22423__$1 = state_22423;
if(cljs.core.truth_(inst_22383)){
var statearr_22429_24606 = state_22423__$1;
(statearr_22429_24606[(1)] = (8));

} else {
var statearr_22430_24607 = state_22423__$1;
(statearr_22430_24607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (20))){
var inst_22375 = (state_22423[(7)]);
var state_22423__$1 = state_22423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22423__$1,(23),out,inst_22375);
} else {
if((state_val_22424 === (1))){
var inst_22358 = calc_state();
var inst_22359 = cljs.core.__destructure_map(inst_22358);
var inst_22360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22359,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22359,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22359,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22363 = inst_22358;
var state_22423__$1 = (function (){var statearr_22435 = state_22423;
(statearr_22435[(8)] = inst_22363);

(statearr_22435[(9)] = inst_22361);

(statearr_22435[(10)] = inst_22362);

(statearr_22435[(11)] = inst_22360);

return statearr_22435;
})();
var statearr_22436_24617 = state_22423__$1;
(statearr_22436_24617[(2)] = null);

(statearr_22436_24617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (24))){
var inst_22366 = (state_22423[(12)]);
var inst_22363 = inst_22366;
var state_22423__$1 = (function (){var statearr_22437 = state_22423;
(statearr_22437[(8)] = inst_22363);

return statearr_22437;
})();
var statearr_22438_24620 = state_22423__$1;
(statearr_22438_24620[(2)] = null);

(statearr_22438_24620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (4))){
var inst_22375 = (state_22423[(7)]);
var inst_22378 = (state_22423[(13)]);
var inst_22374 = (state_22423[(2)]);
var inst_22375__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22374,(0),null);
var inst_22376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22374,(1),null);
var inst_22378__$1 = (inst_22375__$1 == null);
var state_22423__$1 = (function (){var statearr_22443 = state_22423;
(statearr_22443[(7)] = inst_22375__$1);

(statearr_22443[(14)] = inst_22376);

(statearr_22443[(13)] = inst_22378__$1);

return statearr_22443;
})();
if(cljs.core.truth_(inst_22378__$1)){
var statearr_22445_24628 = state_22423__$1;
(statearr_22445_24628[(1)] = (5));

} else {
var statearr_22446_24629 = state_22423__$1;
(statearr_22446_24629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (15))){
var inst_22367 = (state_22423[(15)]);
var inst_22397 = (state_22423[(16)]);
var inst_22397__$1 = cljs.core.empty_QMARK_(inst_22367);
var state_22423__$1 = (function (){var statearr_22448 = state_22423;
(statearr_22448[(16)] = inst_22397__$1);

return statearr_22448;
})();
if(inst_22397__$1){
var statearr_22449_24631 = state_22423__$1;
(statearr_22449_24631[(1)] = (17));

} else {
var statearr_22450_24632 = state_22423__$1;
(statearr_22450_24632[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (21))){
var inst_22366 = (state_22423[(12)]);
var inst_22363 = inst_22366;
var state_22423__$1 = (function (){var statearr_22453 = state_22423;
(statearr_22453[(8)] = inst_22363);

return statearr_22453;
})();
var statearr_22454_24633 = state_22423__$1;
(statearr_22454_24633[(2)] = null);

(statearr_22454_24633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (13))){
var inst_22390 = (state_22423[(2)]);
var inst_22391 = calc_state();
var inst_22363 = inst_22391;
var state_22423__$1 = (function (){var statearr_22455 = state_22423;
(statearr_22455[(8)] = inst_22363);

(statearr_22455[(17)] = inst_22390);

return statearr_22455;
})();
var statearr_22464_24634 = state_22423__$1;
(statearr_22464_24634[(2)] = null);

(statearr_22464_24634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (22))){
var inst_22417 = (state_22423[(2)]);
var state_22423__$1 = state_22423;
var statearr_22465_24636 = state_22423__$1;
(statearr_22465_24636[(2)] = inst_22417);

(statearr_22465_24636[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (6))){
var inst_22376 = (state_22423[(14)]);
var inst_22381 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22376,change);
var state_22423__$1 = state_22423;
var statearr_22466_24642 = state_22423__$1;
(statearr_22466_24642[(2)] = inst_22381);

(statearr_22466_24642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (25))){
var state_22423__$1 = state_22423;
var statearr_22469_24643 = state_22423__$1;
(statearr_22469_24643[(2)] = null);

(statearr_22469_24643[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (17))){
var inst_22368 = (state_22423[(18)]);
var inst_22376 = (state_22423[(14)]);
var inst_22399 = (inst_22368.cljs$core$IFn$_invoke$arity$1 ? inst_22368.cljs$core$IFn$_invoke$arity$1(inst_22376) : inst_22368.call(null, inst_22376));
var inst_22400 = cljs.core.not(inst_22399);
var state_22423__$1 = state_22423;
var statearr_22472_24652 = state_22423__$1;
(statearr_22472_24652[(2)] = inst_22400);

(statearr_22472_24652[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (3))){
var inst_22421 = (state_22423[(2)]);
var state_22423__$1 = state_22423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22423__$1,inst_22421);
} else {
if((state_val_22424 === (12))){
var state_22423__$1 = state_22423;
var statearr_22473_24653 = state_22423__$1;
(statearr_22473_24653[(2)] = null);

(statearr_22473_24653[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (2))){
var inst_22363 = (state_22423[(8)]);
var inst_22366 = (state_22423[(12)]);
var inst_22366__$1 = cljs.core.__destructure_map(inst_22363);
var inst_22367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22366__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22366__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22366__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22423__$1 = (function (){var statearr_22474 = state_22423;
(statearr_22474[(18)] = inst_22368);

(statearr_22474[(15)] = inst_22367);

(statearr_22474[(12)] = inst_22366__$1);

return statearr_22474;
})();
return cljs.core.async.ioc_alts_BANG_(state_22423__$1,(4),inst_22369);
} else {
if((state_val_22424 === (23))){
var inst_22408 = (state_22423[(2)]);
var state_22423__$1 = state_22423;
if(cljs.core.truth_(inst_22408)){
var statearr_22479_24658 = state_22423__$1;
(statearr_22479_24658[(1)] = (24));

} else {
var statearr_22480_24659 = state_22423__$1;
(statearr_22480_24659[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (19))){
var inst_22403 = (state_22423[(2)]);
var state_22423__$1 = state_22423;
var statearr_22481_24660 = state_22423__$1;
(statearr_22481_24660[(2)] = inst_22403);

(statearr_22481_24660[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (11))){
var inst_22376 = (state_22423[(14)]);
var inst_22387 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_22376);
var state_22423__$1 = state_22423;
var statearr_22482_24661 = state_22423__$1;
(statearr_22482_24661[(2)] = inst_22387);

(statearr_22482_24661[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (9))){
var inst_22394 = (state_22423[(19)]);
var inst_22367 = (state_22423[(15)]);
var inst_22376 = (state_22423[(14)]);
var inst_22394__$1 = (inst_22367.cljs$core$IFn$_invoke$arity$1 ? inst_22367.cljs$core$IFn$_invoke$arity$1(inst_22376) : inst_22367.call(null, inst_22376));
var state_22423__$1 = (function (){var statearr_22483 = state_22423;
(statearr_22483[(19)] = inst_22394__$1);

return statearr_22483;
})();
if(cljs.core.truth_(inst_22394__$1)){
var statearr_22486_24666 = state_22423__$1;
(statearr_22486_24666[(1)] = (14));

} else {
var statearr_22487_24667 = state_22423__$1;
(statearr_22487_24667[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (5))){
var inst_22378 = (state_22423[(13)]);
var state_22423__$1 = state_22423;
var statearr_22488_24671 = state_22423__$1;
(statearr_22488_24671[(2)] = inst_22378);

(statearr_22488_24671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (14))){
var inst_22394 = (state_22423[(19)]);
var state_22423__$1 = state_22423;
var statearr_22489_24672 = state_22423__$1;
(statearr_22489_24672[(2)] = inst_22394);

(statearr_22489_24672[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (26))){
var inst_22413 = (state_22423[(2)]);
var state_22423__$1 = state_22423;
var statearr_22490_24676 = state_22423__$1;
(statearr_22490_24676[(2)] = inst_22413);

(statearr_22490_24676[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (16))){
var inst_22405 = (state_22423[(2)]);
var state_22423__$1 = state_22423;
if(cljs.core.truth_(inst_22405)){
var statearr_22491_24680 = state_22423__$1;
(statearr_22491_24680[(1)] = (20));

} else {
var statearr_22492_24681 = state_22423__$1;
(statearr_22492_24681[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (10))){
var inst_22419 = (state_22423[(2)]);
var state_22423__$1 = state_22423;
var statearr_22494_24685 = state_22423__$1;
(statearr_22494_24685[(2)] = inst_22419);

(statearr_22494_24685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (18))){
var inst_22397 = (state_22423[(16)]);
var state_22423__$1 = state_22423;
var statearr_22495_24686 = state_22423__$1;
(statearr_22495_24686[(2)] = inst_22397);

(statearr_22495_24686[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (8))){
var inst_22375 = (state_22423[(7)]);
var inst_22385 = (inst_22375 == null);
var state_22423__$1 = state_22423;
if(cljs.core.truth_(inst_22385)){
var statearr_22496_24687 = state_22423__$1;
(statearr_22496_24687[(1)] = (11));

} else {
var statearr_22500_24688 = state_22423__$1;
(statearr_22500_24688[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__20382__auto__ = null;
var cljs$core$async$mix_$_state_machine__20382__auto____0 = (function (){
var statearr_22505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22505[(0)] = cljs$core$async$mix_$_state_machine__20382__auto__);

(statearr_22505[(1)] = (1));

return statearr_22505;
});
var cljs$core$async$mix_$_state_machine__20382__auto____1 = (function (state_22423){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__(state_22423);
if(cljs.core.keyword_identical_QMARK_(result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e22506){var ex__20385__auto__ = e22506;
var statearr_22507_24689 = state_22423;
(statearr_22507_24689[(2)] = ex__20385__auto__);


if(cljs.core.seq((state_22423[(4)]))){
var statearr_22508_24694 = state_22423;
(statearr_22508_24694[(1)] = cljs.core.first((state_22423[(4)])));

} else {
throw ex__20385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24695 = state_22423;
state_22423 = G__24695;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20382__auto__ = function(state_22423){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20382__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20382__auto____1.call(this,state_22423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20382__auto____0;
cljs$core$async$mix_$_state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20382__auto____1;
return cljs$core$async$mix_$_state_machine__20382__auto__;
})()
})();
var state__20623__auto__ = (function (){var statearr_22509 = f__20622__auto__();
(statearr_22509[(6)] = c__20621__auto___24604);

return statearr_22509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20623__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_24701 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_24701(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_24706 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_24706(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_24710 = (function() {
var G__24712 = null;
var G__24712__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__24712__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__24712 = function(p,v){
switch(arguments.length){
case 1:
return G__24712__1.call(this,p);
case 2:
return G__24712__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24712.cljs$core$IFn$_invoke$arity$1 = G__24712__1;
G__24712.cljs$core$IFn$_invoke$arity$2 = G__24712__2;
return G__24712;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__22544 = arguments.length;
switch (G__22544) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_24710(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_24710(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22569 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22571){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22571 = meta22571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22572,meta22571__$1){
var self__ = this;
var _22572__$1 = this;
return (new cljs.core.async.t_cljs$core$async22569(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22571__$1));
}));

(cljs.core.async.t_cljs$core$async22569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22572){
var self__ = this;
var _22572__$1 = this;
return self__.meta22571;
}));

(cljs.core.async.t_cljs$core$async22569.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22569.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async22569.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22569.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async22569.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async22569.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async22569.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async22569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22571","meta22571",-1783510994,null)], null);
}));

(cljs.core.async.t_cljs$core$async22569.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22569");

(cljs.core.async.t_cljs$core$async22569.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async22569");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22569.
 */
cljs.core.async.__GT_t_cljs$core$async22569 = (function cljs$core$async$__GT_t_cljs$core$async22569(ch,topic_fn,buf_fn,mults,ensure_mult,meta22571){
return (new cljs.core.async.t_cljs$core$async22569(ch,topic_fn,buf_fn,mults,ensure_mult,meta22571));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__22557 = arguments.length;
switch (G__22557) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__22551_SHARP_){
if(cljs.core.truth_((p1__22551_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22551_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__22551_SHARP_.call(null, topic)))){
return p1__22551_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22551_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async22569(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__20621__auto___24756 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20622__auto__ = (function (){var switch__20381__auto__ = (function (state_22684){
var state_val_22688 = (state_22684[(1)]);
if((state_val_22688 === (7))){
var inst_22679 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
var statearr_22692_24761 = state_22684__$1;
(statearr_22692_24761[(2)] = inst_22679);

(statearr_22692_24761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (20))){
var state_22684__$1 = state_22684;
var statearr_22694_24763 = state_22684__$1;
(statearr_22694_24763[(2)] = null);

(statearr_22694_24763[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (1))){
var state_22684__$1 = state_22684;
var statearr_22696_24767 = state_22684__$1;
(statearr_22696_24767[(2)] = null);

(statearr_22696_24767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (24))){
var inst_22660 = (state_22684[(7)]);
var inst_22671 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_22660);
var state_22684__$1 = state_22684;
var statearr_22700_24769 = state_22684__$1;
(statearr_22700_24769[(2)] = inst_22671);

(statearr_22700_24769[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (4))){
var inst_22599 = (state_22684[(8)]);
var inst_22599__$1 = (state_22684[(2)]);
var inst_22602 = (inst_22599__$1 == null);
var state_22684__$1 = (function (){var statearr_22702 = state_22684;
(statearr_22702[(8)] = inst_22599__$1);

return statearr_22702;
})();
if(cljs.core.truth_(inst_22602)){
var statearr_22704_24770 = state_22684__$1;
(statearr_22704_24770[(1)] = (5));

} else {
var statearr_22705_24772 = state_22684__$1;
(statearr_22705_24772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (15))){
var inst_22648 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
var statearr_22709_24773 = state_22684__$1;
(statearr_22709_24773[(2)] = inst_22648);

(statearr_22709_24773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (21))){
var inst_22676 = (state_22684[(2)]);
var state_22684__$1 = (function (){var statearr_22713 = state_22684;
(statearr_22713[(9)] = inst_22676);

return statearr_22713;
})();
var statearr_22714_24776 = state_22684__$1;
(statearr_22714_24776[(2)] = null);

(statearr_22714_24776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (13))){
var inst_22629 = (state_22684[(10)]);
var inst_22631 = cljs.core.chunked_seq_QMARK_(inst_22629);
var state_22684__$1 = state_22684;
if(inst_22631){
var statearr_22718_24780 = state_22684__$1;
(statearr_22718_24780[(1)] = (16));

} else {
var statearr_22719_24781 = state_22684__$1;
(statearr_22719_24781[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (22))){
var inst_22668 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
if(cljs.core.truth_(inst_22668)){
var statearr_22721_24782 = state_22684__$1;
(statearr_22721_24782[(1)] = (23));

} else {
var statearr_22723_24783 = state_22684__$1;
(statearr_22723_24783[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (6))){
var inst_22599 = (state_22684[(8)]);
var inst_22660 = (state_22684[(7)]);
var inst_22663 = (state_22684[(11)]);
var inst_22660__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_22599) : topic_fn.call(null, inst_22599));
var inst_22662 = cljs.core.deref(mults);
var inst_22663__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22662,inst_22660__$1);
var state_22684__$1 = (function (){var statearr_22730 = state_22684;
(statearr_22730[(7)] = inst_22660__$1);

(statearr_22730[(11)] = inst_22663__$1);

return statearr_22730;
})();
if(cljs.core.truth_(inst_22663__$1)){
var statearr_22731_24784 = state_22684__$1;
(statearr_22731_24784[(1)] = (19));

} else {
var statearr_22733_24786 = state_22684__$1;
(statearr_22733_24786[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (25))){
var inst_22673 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
var statearr_22734_24787 = state_22684__$1;
(statearr_22734_24787[(2)] = inst_22673);

(statearr_22734_24787[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (17))){
var inst_22629 = (state_22684[(10)]);
var inst_22639 = cljs.core.first(inst_22629);
var inst_22640 = cljs.core.async.muxch_STAR_(inst_22639);
var inst_22641 = cljs.core.async.close_BANG_(inst_22640);
var inst_22642 = cljs.core.next(inst_22629);
var inst_22612 = inst_22642;
var inst_22613 = null;
var inst_22614 = (0);
var inst_22615 = (0);
var state_22684__$1 = (function (){var statearr_22740 = state_22684;
(statearr_22740[(12)] = inst_22615);

(statearr_22740[(13)] = inst_22612);

(statearr_22740[(14)] = inst_22613);

(statearr_22740[(15)] = inst_22641);

(statearr_22740[(16)] = inst_22614);

return statearr_22740;
})();
var statearr_22741_24804 = state_22684__$1;
(statearr_22741_24804[(2)] = null);

(statearr_22741_24804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (3))){
var inst_22681 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22684__$1,inst_22681);
} else {
if((state_val_22688 === (12))){
var inst_22650 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
var statearr_22746_24810 = state_22684__$1;
(statearr_22746_24810[(2)] = inst_22650);

(statearr_22746_24810[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (2))){
var state_22684__$1 = state_22684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22684__$1,(4),ch);
} else {
if((state_val_22688 === (23))){
var state_22684__$1 = state_22684;
var statearr_22750_24814 = state_22684__$1;
(statearr_22750_24814[(2)] = null);

(statearr_22750_24814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (19))){
var inst_22599 = (state_22684[(8)]);
var inst_22663 = (state_22684[(11)]);
var inst_22666 = cljs.core.async.muxch_STAR_(inst_22663);
var state_22684__$1 = state_22684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22684__$1,(22),inst_22666,inst_22599);
} else {
if((state_val_22688 === (11))){
var inst_22629 = (state_22684[(10)]);
var inst_22612 = (state_22684[(13)]);
var inst_22629__$1 = cljs.core.seq(inst_22612);
var state_22684__$1 = (function (){var statearr_22757 = state_22684;
(statearr_22757[(10)] = inst_22629__$1);

return statearr_22757;
})();
if(inst_22629__$1){
var statearr_22758_24815 = state_22684__$1;
(statearr_22758_24815[(1)] = (13));

} else {
var statearr_22759_24816 = state_22684__$1;
(statearr_22759_24816[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (9))){
var inst_22657 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
var statearr_22764_24817 = state_22684__$1;
(statearr_22764_24817[(2)] = inst_22657);

(statearr_22764_24817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (5))){
var inst_22609 = cljs.core.deref(mults);
var inst_22610 = cljs.core.vals(inst_22609);
var inst_22611 = cljs.core.seq(inst_22610);
var inst_22612 = inst_22611;
var inst_22613 = null;
var inst_22614 = (0);
var inst_22615 = (0);
var state_22684__$1 = (function (){var statearr_22766 = state_22684;
(statearr_22766[(12)] = inst_22615);

(statearr_22766[(13)] = inst_22612);

(statearr_22766[(14)] = inst_22613);

(statearr_22766[(16)] = inst_22614);

return statearr_22766;
})();
var statearr_22767_24821 = state_22684__$1;
(statearr_22767_24821[(2)] = null);

(statearr_22767_24821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (14))){
var state_22684__$1 = state_22684;
var statearr_22777_24822 = state_22684__$1;
(statearr_22777_24822[(2)] = null);

(statearr_22777_24822[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (16))){
var inst_22629 = (state_22684[(10)]);
var inst_22633 = cljs.core.chunk_first(inst_22629);
var inst_22635 = cljs.core.chunk_rest(inst_22629);
var inst_22636 = cljs.core.count(inst_22633);
var inst_22612 = inst_22635;
var inst_22613 = inst_22633;
var inst_22614 = inst_22636;
var inst_22615 = (0);
var state_22684__$1 = (function (){var statearr_22778 = state_22684;
(statearr_22778[(12)] = inst_22615);

(statearr_22778[(13)] = inst_22612);

(statearr_22778[(14)] = inst_22613);

(statearr_22778[(16)] = inst_22614);

return statearr_22778;
})();
var statearr_22779_24827 = state_22684__$1;
(statearr_22779_24827[(2)] = null);

(statearr_22779_24827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (10))){
var inst_22615 = (state_22684[(12)]);
var inst_22612 = (state_22684[(13)]);
var inst_22613 = (state_22684[(14)]);
var inst_22614 = (state_22684[(16)]);
var inst_22620 = cljs.core._nth(inst_22613,inst_22615);
var inst_22621 = cljs.core.async.muxch_STAR_(inst_22620);
var inst_22622 = cljs.core.async.close_BANG_(inst_22621);
var inst_22625 = (inst_22615 + (1));
var tmp22770 = inst_22612;
var tmp22771 = inst_22613;
var tmp22772 = inst_22614;
var inst_22612__$1 = tmp22770;
var inst_22613__$1 = tmp22771;
var inst_22614__$1 = tmp22772;
var inst_22615__$1 = inst_22625;
var state_22684__$1 = (function (){var statearr_22783 = state_22684;
(statearr_22783[(12)] = inst_22615__$1);

(statearr_22783[(17)] = inst_22622);

(statearr_22783[(13)] = inst_22612__$1);

(statearr_22783[(14)] = inst_22613__$1);

(statearr_22783[(16)] = inst_22614__$1);

return statearr_22783;
})();
var statearr_22787_24831 = state_22684__$1;
(statearr_22787_24831[(2)] = null);

(statearr_22787_24831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (18))){
var inst_22645 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
var statearr_22788_24832 = state_22684__$1;
(statearr_22788_24832[(2)] = inst_22645);

(statearr_22788_24832[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (8))){
var inst_22615 = (state_22684[(12)]);
var inst_22614 = (state_22684[(16)]);
var inst_22617 = (inst_22615 < inst_22614);
var inst_22618 = inst_22617;
var state_22684__$1 = state_22684;
if(cljs.core.truth_(inst_22618)){
var statearr_22791_24833 = state_22684__$1;
(statearr_22791_24833[(1)] = (10));

} else {
var statearr_22792_24835 = state_22684__$1;
(statearr_22792_24835[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__20382__auto__ = null;
var cljs$core$async$state_machine__20382__auto____0 = (function (){
var statearr_22801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22801[(0)] = cljs$core$async$state_machine__20382__auto__);

(statearr_22801[(1)] = (1));

return statearr_22801;
});
var cljs$core$async$state_machine__20382__auto____1 = (function (state_22684){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__(state_22684);
if(cljs.core.keyword_identical_QMARK_(result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e22802){var ex__20385__auto__ = e22802;
var statearr_22804_24847 = state_22684;
(statearr_22804_24847[(2)] = ex__20385__auto__);


if(cljs.core.seq((state_22684[(4)]))){
var statearr_22805_24850 = state_22684;
(statearr_22805_24850[(1)] = cljs.core.first((state_22684[(4)])));

} else {
throw ex__20385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24851 = state_22684;
state_22684 = G__24851;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
cljs$core$async$state_machine__20382__auto__ = function(state_22684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20382__auto____1.call(this,state_22684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20382__auto____0;
cljs$core$async$state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20382__auto____1;
return cljs$core$async$state_machine__20382__auto__;
})()
})();
var state__20623__auto__ = (function (){var statearr_22810 = f__20622__auto__();
(statearr_22810[(6)] = c__20621__auto___24756);

return statearr_22810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20623__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__22817 = arguments.length;
switch (G__22817) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__22830 = arguments.length;
switch (G__22830) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__22850 = arguments.length;
switch (G__22850) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__20621__auto___24896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20622__auto__ = (function (){var switch__20381__auto__ = (function (state_22915){
var state_val_22916 = (state_22915[(1)]);
if((state_val_22916 === (7))){
var state_22915__$1 = state_22915;
var statearr_22918_24897 = state_22915__$1;
(statearr_22918_24897[(2)] = null);

(statearr_22918_24897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (1))){
var state_22915__$1 = state_22915;
var statearr_22921_24898 = state_22915__$1;
(statearr_22921_24898[(2)] = null);

(statearr_22921_24898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (4))){
var inst_22866 = (state_22915[(7)]);
var inst_22867 = (state_22915[(8)]);
var inst_22869 = (inst_22867 < inst_22866);
var state_22915__$1 = state_22915;
if(cljs.core.truth_(inst_22869)){
var statearr_22924_24905 = state_22915__$1;
(statearr_22924_24905[(1)] = (6));

} else {
var statearr_22926_24906 = state_22915__$1;
(statearr_22926_24906[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (15))){
var inst_22898 = (state_22915[(9)]);
var inst_22904 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_22898);
var state_22915__$1 = state_22915;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22915__$1,(17),out,inst_22904);
} else {
if((state_val_22916 === (13))){
var inst_22898 = (state_22915[(9)]);
var inst_22898__$1 = (state_22915[(2)]);
var inst_22899 = cljs.core.some(cljs.core.nil_QMARK_,inst_22898__$1);
var state_22915__$1 = (function (){var statearr_22931 = state_22915;
(statearr_22931[(9)] = inst_22898__$1);

return statearr_22931;
})();
if(cljs.core.truth_(inst_22899)){
var statearr_22933_24910 = state_22915__$1;
(statearr_22933_24910[(1)] = (14));

} else {
var statearr_22935_24911 = state_22915__$1;
(statearr_22935_24911[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (6))){
var state_22915__$1 = state_22915;
var statearr_22939_24912 = state_22915__$1;
(statearr_22939_24912[(2)] = null);

(statearr_22939_24912[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (17))){
var inst_22907 = (state_22915[(2)]);
var state_22915__$1 = (function (){var statearr_22947 = state_22915;
(statearr_22947[(10)] = inst_22907);

return statearr_22947;
})();
var statearr_22950_24913 = state_22915__$1;
(statearr_22950_24913[(2)] = null);

(statearr_22950_24913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (3))){
var inst_22913 = (state_22915[(2)]);
var state_22915__$1 = state_22915;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22915__$1,inst_22913);
} else {
if((state_val_22916 === (12))){
var _ = (function (){var statearr_22952 = state_22915;
(statearr_22952[(4)] = cljs.core.rest((state_22915[(4)])));

return statearr_22952;
})();
var state_22915__$1 = state_22915;
var ex22945 = (state_22915__$1[(2)]);
var statearr_22953_24915 = state_22915__$1;
(statearr_22953_24915[(5)] = ex22945);


if((ex22945 instanceof Object)){
var statearr_22956_24916 = state_22915__$1;
(statearr_22956_24916[(1)] = (11));

(statearr_22956_24916[(5)] = null);

} else {
throw ex22945;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (2))){
var inst_22864 = cljs.core.reset_BANG_(dctr,cnt);
var inst_22866 = cnt;
var inst_22867 = (0);
var state_22915__$1 = (function (){var statearr_22958 = state_22915;
(statearr_22958[(7)] = inst_22866);

(statearr_22958[(8)] = inst_22867);

(statearr_22958[(11)] = inst_22864);

return statearr_22958;
})();
var statearr_22959_24917 = state_22915__$1;
(statearr_22959_24917[(2)] = null);

(statearr_22959_24917[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (11))){
var inst_22876 = (state_22915[(2)]);
var inst_22877 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_22915__$1 = (function (){var statearr_22960 = state_22915;
(statearr_22960[(12)] = inst_22876);

return statearr_22960;
})();
var statearr_22961_24922 = state_22915__$1;
(statearr_22961_24922[(2)] = inst_22877);

(statearr_22961_24922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (9))){
var inst_22867 = (state_22915[(8)]);
var _ = (function (){var statearr_22964 = state_22915;
(statearr_22964[(4)] = cljs.core.cons((12),(state_22915[(4)])));

return statearr_22964;
})();
var inst_22884 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_22867) : chs__$1.call(null, inst_22867));
var inst_22885 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_22867) : done.call(null, inst_22867));
var inst_22886 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_22884,inst_22885);
var ___$1 = (function (){var statearr_22965 = state_22915;
(statearr_22965[(4)] = cljs.core.rest((state_22915[(4)])));

return statearr_22965;
})();
var state_22915__$1 = state_22915;
var statearr_22973_24927 = state_22915__$1;
(statearr_22973_24927[(2)] = inst_22886);

(statearr_22973_24927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (5))){
var inst_22896 = (state_22915[(2)]);
var state_22915__$1 = (function (){var statearr_22975 = state_22915;
(statearr_22975[(13)] = inst_22896);

return statearr_22975;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22915__$1,(13),dchan);
} else {
if((state_val_22916 === (14))){
var inst_22901 = cljs.core.async.close_BANG_(out);
var state_22915__$1 = state_22915;
var statearr_22977_24929 = state_22915__$1;
(statearr_22977_24929[(2)] = inst_22901);

(statearr_22977_24929[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (16))){
var inst_22911 = (state_22915[(2)]);
var state_22915__$1 = state_22915;
var statearr_22979_24934 = state_22915__$1;
(statearr_22979_24934[(2)] = inst_22911);

(statearr_22979_24934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (10))){
var inst_22867 = (state_22915[(8)]);
var inst_22889 = (state_22915[(2)]);
var inst_22890 = (inst_22867 + (1));
var inst_22867__$1 = inst_22890;
var state_22915__$1 = (function (){var statearr_22985 = state_22915;
(statearr_22985[(14)] = inst_22889);

(statearr_22985[(8)] = inst_22867__$1);

return statearr_22985;
})();
var statearr_22986_24935 = state_22915__$1;
(statearr_22986_24935[(2)] = null);

(statearr_22986_24935[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22916 === (8))){
var inst_22894 = (state_22915[(2)]);
var state_22915__$1 = state_22915;
var statearr_22991_24940 = state_22915__$1;
(statearr_22991_24940[(2)] = inst_22894);

(statearr_22991_24940[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__20382__auto__ = null;
var cljs$core$async$state_machine__20382__auto____0 = (function (){
var statearr_22994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22994[(0)] = cljs$core$async$state_machine__20382__auto__);

(statearr_22994[(1)] = (1));

return statearr_22994;
});
var cljs$core$async$state_machine__20382__auto____1 = (function (state_22915){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__(state_22915);
if(cljs.core.keyword_identical_QMARK_(result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e22996){var ex__20385__auto__ = e22996;
var statearr_22997_24948 = state_22915;
(statearr_22997_24948[(2)] = ex__20385__auto__);


if(cljs.core.seq((state_22915[(4)]))){
var statearr_22998_24954 = state_22915;
(statearr_22998_24954[(1)] = cljs.core.first((state_22915[(4)])));

} else {
throw ex__20385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24955 = state_22915;
state_22915 = G__24955;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
cljs$core$async$state_machine__20382__auto__ = function(state_22915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20382__auto____1.call(this,state_22915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20382__auto____0;
cljs$core$async$state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20382__auto____1;
return cljs$core$async$state_machine__20382__auto__;
})()
})();
var state__20623__auto__ = (function (){var statearr_23001 = f__20622__auto__();
(statearr_23001[(6)] = c__20621__auto___24896);

return statearr_23001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20623__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__23020 = arguments.length;
switch (G__23020) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__20621__auto___24966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20622__auto__ = (function (){var switch__20381__auto__ = (function (state_23073){
var state_val_23074 = (state_23073[(1)]);
if((state_val_23074 === (7))){
var inst_23041 = (state_23073[(7)]);
var inst_23042 = (state_23073[(8)]);
var inst_23041__$1 = (state_23073[(2)]);
var inst_23042__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23041__$1,(0),null);
var inst_23043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23041__$1,(1),null);
var inst_23044 = (inst_23042__$1 == null);
var state_23073__$1 = (function (){var statearr_23075 = state_23073;
(statearr_23075[(7)] = inst_23041__$1);

(statearr_23075[(8)] = inst_23042__$1);

(statearr_23075[(9)] = inst_23043);

return statearr_23075;
})();
if(cljs.core.truth_(inst_23044)){
var statearr_23079_24968 = state_23073__$1;
(statearr_23079_24968[(1)] = (8));

} else {
var statearr_23081_24972 = state_23073__$1;
(statearr_23081_24972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23074 === (1))){
var inst_23031 = cljs.core.vec(chs);
var inst_23032 = inst_23031;
var state_23073__$1 = (function (){var statearr_23082 = state_23073;
(statearr_23082[(10)] = inst_23032);

return statearr_23082;
})();
var statearr_23083_24976 = state_23073__$1;
(statearr_23083_24976[(2)] = null);

(statearr_23083_24976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23074 === (4))){
var inst_23032 = (state_23073[(10)]);
var state_23073__$1 = state_23073;
return cljs.core.async.ioc_alts_BANG_(state_23073__$1,(7),inst_23032);
} else {
if((state_val_23074 === (6))){
var inst_23068 = (state_23073[(2)]);
var state_23073__$1 = state_23073;
var statearr_23088_24977 = state_23073__$1;
(statearr_23088_24977[(2)] = inst_23068);

(statearr_23088_24977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23074 === (3))){
var inst_23070 = (state_23073[(2)]);
var state_23073__$1 = state_23073;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23073__$1,inst_23070);
} else {
if((state_val_23074 === (2))){
var inst_23032 = (state_23073[(10)]);
var inst_23034 = cljs.core.count(inst_23032);
var inst_23035 = (inst_23034 > (0));
var state_23073__$1 = state_23073;
if(cljs.core.truth_(inst_23035)){
var statearr_23090_24982 = state_23073__$1;
(statearr_23090_24982[(1)] = (4));

} else {
var statearr_23094_24983 = state_23073__$1;
(statearr_23094_24983[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23074 === (11))){
var inst_23032 = (state_23073[(10)]);
var inst_23061 = (state_23073[(2)]);
var tmp23089 = inst_23032;
var inst_23032__$1 = tmp23089;
var state_23073__$1 = (function (){var statearr_23096 = state_23073;
(statearr_23096[(10)] = inst_23032__$1);

(statearr_23096[(11)] = inst_23061);

return statearr_23096;
})();
var statearr_23097_24985 = state_23073__$1;
(statearr_23097_24985[(2)] = null);

(statearr_23097_24985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23074 === (9))){
var inst_23042 = (state_23073[(8)]);
var state_23073__$1 = state_23073;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23073__$1,(11),out,inst_23042);
} else {
if((state_val_23074 === (5))){
var inst_23066 = cljs.core.async.close_BANG_(out);
var state_23073__$1 = state_23073;
var statearr_23124_24990 = state_23073__$1;
(statearr_23124_24990[(2)] = inst_23066);

(statearr_23124_24990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23074 === (10))){
var inst_23064 = (state_23073[(2)]);
var state_23073__$1 = state_23073;
var statearr_23128_24991 = state_23073__$1;
(statearr_23128_24991[(2)] = inst_23064);

(statearr_23128_24991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23074 === (8))){
var inst_23041 = (state_23073[(7)]);
var inst_23032 = (state_23073[(10)]);
var inst_23042 = (state_23073[(8)]);
var inst_23043 = (state_23073[(9)]);
var inst_23053 = (function (){var cs = inst_23032;
var vec__23037 = inst_23041;
var v = inst_23042;
var c = inst_23043;
return (function (p1__23002_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__23002_SHARP_);
});
})();
var inst_23057 = cljs.core.filterv(inst_23053,inst_23032);
var inst_23032__$1 = inst_23057;
var state_23073__$1 = (function (){var statearr_23130 = state_23073;
(statearr_23130[(10)] = inst_23032__$1);

return statearr_23130;
})();
var statearr_23135_24997 = state_23073__$1;
(statearr_23135_24997[(2)] = null);

(statearr_23135_24997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__20382__auto__ = null;
var cljs$core$async$state_machine__20382__auto____0 = (function (){
var statearr_23137 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23137[(0)] = cljs$core$async$state_machine__20382__auto__);

(statearr_23137[(1)] = (1));

return statearr_23137;
});
var cljs$core$async$state_machine__20382__auto____1 = (function (state_23073){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__(state_23073);
if(cljs.core.keyword_identical_QMARK_(result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e23138){var ex__20385__auto__ = e23138;
var statearr_23142_25001 = state_23073;
(statearr_23142_25001[(2)] = ex__20385__auto__);


if(cljs.core.seq((state_23073[(4)]))){
var statearr_23143_25002 = state_23073;
(statearr_23143_25002[(1)] = cljs.core.first((state_23073[(4)])));

} else {
throw ex__20385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25004 = state_23073;
state_23073 = G__25004;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
cljs$core$async$state_machine__20382__auto__ = function(state_23073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20382__auto____1.call(this,state_23073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20382__auto____0;
cljs$core$async$state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20382__auto____1;
return cljs$core$async$state_machine__20382__auto__;
})()
})();
var state__20623__auto__ = (function (){var statearr_23149 = f__20622__auto__();
(statearr_23149[(6)] = c__20621__auto___24966);

return statearr_23149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20623__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__23158 = arguments.length;
switch (G__23158) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__20621__auto___25014 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20622__auto__ = (function (){var switch__20381__auto__ = (function (state_23190){
var state_val_23191 = (state_23190[(1)]);
if((state_val_23191 === (7))){
var inst_23171 = (state_23190[(7)]);
var inst_23171__$1 = (state_23190[(2)]);
var inst_23172 = (inst_23171__$1 == null);
var inst_23173 = cljs.core.not(inst_23172);
var state_23190__$1 = (function (){var statearr_23196 = state_23190;
(statearr_23196[(7)] = inst_23171__$1);

return statearr_23196;
})();
if(inst_23173){
var statearr_23197_25021 = state_23190__$1;
(statearr_23197_25021[(1)] = (8));

} else {
var statearr_23198_25022 = state_23190__$1;
(statearr_23198_25022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (1))){
var inst_23163 = (0);
var state_23190__$1 = (function (){var statearr_23203 = state_23190;
(statearr_23203[(8)] = inst_23163);

return statearr_23203;
})();
var statearr_23207_25023 = state_23190__$1;
(statearr_23207_25023[(2)] = null);

(statearr_23207_25023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (4))){
var state_23190__$1 = state_23190;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23190__$1,(7),ch);
} else {
if((state_val_23191 === (6))){
var inst_23185 = (state_23190[(2)]);
var state_23190__$1 = state_23190;
var statearr_23215_25026 = state_23190__$1;
(statearr_23215_25026[(2)] = inst_23185);

(statearr_23215_25026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (3))){
var inst_23187 = (state_23190[(2)]);
var inst_23188 = cljs.core.async.close_BANG_(out);
var state_23190__$1 = (function (){var statearr_23217 = state_23190;
(statearr_23217[(9)] = inst_23187);

return statearr_23217;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23190__$1,inst_23188);
} else {
if((state_val_23191 === (2))){
var inst_23163 = (state_23190[(8)]);
var inst_23165 = (inst_23163 < n);
var state_23190__$1 = state_23190;
if(cljs.core.truth_(inst_23165)){
var statearr_23222_25028 = state_23190__$1;
(statearr_23222_25028[(1)] = (4));

} else {
var statearr_23224_25029 = state_23190__$1;
(statearr_23224_25029[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (11))){
var inst_23163 = (state_23190[(8)]);
var inst_23177 = (state_23190[(2)]);
var inst_23178 = (inst_23163 + (1));
var inst_23163__$1 = inst_23178;
var state_23190__$1 = (function (){var statearr_23228 = state_23190;
(statearr_23228[(10)] = inst_23177);

(statearr_23228[(8)] = inst_23163__$1);

return statearr_23228;
})();
var statearr_23229_25031 = state_23190__$1;
(statearr_23229_25031[(2)] = null);

(statearr_23229_25031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (9))){
var state_23190__$1 = state_23190;
var statearr_23230_25035 = state_23190__$1;
(statearr_23230_25035[(2)] = null);

(statearr_23230_25035[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (5))){
var state_23190__$1 = state_23190;
var statearr_23234_25036 = state_23190__$1;
(statearr_23234_25036[(2)] = null);

(statearr_23234_25036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (10))){
var inst_23182 = (state_23190[(2)]);
var state_23190__$1 = state_23190;
var statearr_23235_25037 = state_23190__$1;
(statearr_23235_25037[(2)] = inst_23182);

(statearr_23235_25037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (8))){
var inst_23171 = (state_23190[(7)]);
var state_23190__$1 = state_23190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23190__$1,(11),out,inst_23171);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__20382__auto__ = null;
var cljs$core$async$state_machine__20382__auto____0 = (function (){
var statearr_23238 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23238[(0)] = cljs$core$async$state_machine__20382__auto__);

(statearr_23238[(1)] = (1));

return statearr_23238;
});
var cljs$core$async$state_machine__20382__auto____1 = (function (state_23190){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__(state_23190);
if(cljs.core.keyword_identical_QMARK_(result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e23240){var ex__20385__auto__ = e23240;
var statearr_23241_25048 = state_23190;
(statearr_23241_25048[(2)] = ex__20385__auto__);


if(cljs.core.seq((state_23190[(4)]))){
var statearr_23244_25049 = state_23190;
(statearr_23244_25049[(1)] = cljs.core.first((state_23190[(4)])));

} else {
throw ex__20385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25050 = state_23190;
state_23190 = G__25050;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
cljs$core$async$state_machine__20382__auto__ = function(state_23190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20382__auto____1.call(this,state_23190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20382__auto____0;
cljs$core$async$state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20382__auto____1;
return cljs$core$async$state_machine__20382__auto__;
})()
})();
var state__20623__auto__ = (function (){var statearr_23250 = f__20622__auto__();
(statearr_23250[(6)] = c__20621__auto___25014);

return statearr_23250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20623__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23265 = (function (f,ch,meta23257,_,fn1,meta23266){
this.f = f;
this.ch = ch;
this.meta23257 = meta23257;
this._ = _;
this.fn1 = fn1;
this.meta23266 = meta23266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23267,meta23266__$1){
var self__ = this;
var _23267__$1 = this;
return (new cljs.core.async.t_cljs$core$async23265(self__.f,self__.ch,self__.meta23257,self__._,self__.fn1,meta23266__$1));
}));

(cljs.core.async.t_cljs$core$async23265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23267){
var self__ = this;
var _23267__$1 = this;
return self__.meta23266;
}));

(cljs.core.async.t_cljs$core$async23265.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23265.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async23265.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23265.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__23255_SHARP_){
var G__23274 = (((p1__23255_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23255_SHARP_) : self__.f.call(null, p1__23255_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__23274) : f1.call(null, G__23274));
});
}));

(cljs.core.async.t_cljs$core$async23265.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23257","meta23257",-947117783,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23256","cljs.core.async/t_cljs$core$async23256",-393885402,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23266","meta23266",1213914144,null)], null);
}));

(cljs.core.async.t_cljs$core$async23265.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23265.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23265");

(cljs.core.async.t_cljs$core$async23265.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async23265");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23265.
 */
cljs.core.async.__GT_t_cljs$core$async23265 = (function cljs$core$async$__GT_t_cljs$core$async23265(f,ch,meta23257,_,fn1,meta23266){
return (new cljs.core.async.t_cljs$core$async23265(f,ch,meta23257,_,fn1,meta23266));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23256 = (function (f,ch,meta23257){
this.f = f;
this.ch = ch;
this.meta23257 = meta23257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23258,meta23257__$1){
var self__ = this;
var _23258__$1 = this;
return (new cljs.core.async.t_cljs$core$async23256(self__.f,self__.ch,meta23257__$1));
}));

(cljs.core.async.t_cljs$core$async23256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23258){
var self__ = this;
var _23258__$1 = this;
return self__.meta23257;
}));

(cljs.core.async.t_cljs$core$async23256.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23256.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async23256.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async23256.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23256.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async23265(self__.f,self__.ch,self__.meta23257,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__23276 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23276) : self__.f.call(null, G__23276));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async23256.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23256.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async23256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23257","meta23257",-947117783,null)], null);
}));

(cljs.core.async.t_cljs$core$async23256.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23256");

(cljs.core.async.t_cljs$core$async23256.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async23256");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23256.
 */
cljs.core.async.__GT_t_cljs$core$async23256 = (function cljs$core$async$__GT_t_cljs$core$async23256(f,ch,meta23257){
return (new cljs.core.async.t_cljs$core$async23256(f,ch,meta23257));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async23256(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23281 = (function (f,ch,meta23282){
this.f = f;
this.ch = ch;
this.meta23282 = meta23282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23283,meta23282__$1){
var self__ = this;
var _23283__$1 = this;
return (new cljs.core.async.t_cljs$core$async23281(self__.f,self__.ch,meta23282__$1));
}));

(cljs.core.async.t_cljs$core$async23281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23283){
var self__ = this;
var _23283__$1 = this;
return self__.meta23282;
}));

(cljs.core.async.t_cljs$core$async23281.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23281.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async23281.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23281.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async23281.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23281.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async23281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23282","meta23282",478180023,null)], null);
}));

(cljs.core.async.t_cljs$core$async23281.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23281");

(cljs.core.async.t_cljs$core$async23281.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async23281");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23281.
 */
cljs.core.async.__GT_t_cljs$core$async23281 = (function cljs$core$async$__GT_t_cljs$core$async23281(f,ch,meta23282){
return (new cljs.core.async.t_cljs$core$async23281(f,ch,meta23282));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async23281(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23285 = (function (p,ch,meta23286){
this.p = p;
this.ch = ch;
this.meta23286 = meta23286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23287,meta23286__$1){
var self__ = this;
var _23287__$1 = this;
return (new cljs.core.async.t_cljs$core$async23285(self__.p,self__.ch,meta23286__$1));
}));

(cljs.core.async.t_cljs$core$async23285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23287){
var self__ = this;
var _23287__$1 = this;
return self__.meta23286;
}));

(cljs.core.async.t_cljs$core$async23285.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23285.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async23285.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async23285.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23285.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async23285.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23285.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async23285.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23286","meta23286",1636716973,null)], null);
}));

(cljs.core.async.t_cljs$core$async23285.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23285");

(cljs.core.async.t_cljs$core$async23285.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async23285");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23285.
 */
cljs.core.async.__GT_t_cljs$core$async23285 = (function cljs$core$async$__GT_t_cljs$core$async23285(p,ch,meta23286){
return (new cljs.core.async.t_cljs$core$async23285(p,ch,meta23286));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async23285(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__23337 = arguments.length;
switch (G__23337) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__20621__auto___25088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20622__auto__ = (function (){var switch__20381__auto__ = (function (state_23362){
var state_val_23363 = (state_23362[(1)]);
if((state_val_23363 === (7))){
var inst_23358 = (state_23362[(2)]);
var state_23362__$1 = state_23362;
var statearr_23368_25089 = state_23362__$1;
(statearr_23368_25089[(2)] = inst_23358);

(statearr_23368_25089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23363 === (1))){
var state_23362__$1 = state_23362;
var statearr_23369_25094 = state_23362__$1;
(statearr_23369_25094[(2)] = null);

(statearr_23369_25094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23363 === (4))){
var inst_23344 = (state_23362[(7)]);
var inst_23344__$1 = (state_23362[(2)]);
var inst_23345 = (inst_23344__$1 == null);
var state_23362__$1 = (function (){var statearr_23370 = state_23362;
(statearr_23370[(7)] = inst_23344__$1);

return statearr_23370;
})();
if(cljs.core.truth_(inst_23345)){
var statearr_23371_25098 = state_23362__$1;
(statearr_23371_25098[(1)] = (5));

} else {
var statearr_23372_25099 = state_23362__$1;
(statearr_23372_25099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23363 === (6))){
var inst_23344 = (state_23362[(7)]);
var inst_23349 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23344) : p.call(null, inst_23344));
var state_23362__$1 = state_23362;
if(cljs.core.truth_(inst_23349)){
var statearr_23373_25104 = state_23362__$1;
(statearr_23373_25104[(1)] = (8));

} else {
var statearr_23374_25105 = state_23362__$1;
(statearr_23374_25105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23363 === (3))){
var inst_23360 = (state_23362[(2)]);
var state_23362__$1 = state_23362;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23362__$1,inst_23360);
} else {
if((state_val_23363 === (2))){
var state_23362__$1 = state_23362;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23362__$1,(4),ch);
} else {
if((state_val_23363 === (11))){
var inst_23352 = (state_23362[(2)]);
var state_23362__$1 = state_23362;
var statearr_23381_25106 = state_23362__$1;
(statearr_23381_25106[(2)] = inst_23352);

(statearr_23381_25106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23363 === (9))){
var state_23362__$1 = state_23362;
var statearr_23383_25107 = state_23362__$1;
(statearr_23383_25107[(2)] = null);

(statearr_23383_25107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23363 === (5))){
var inst_23347 = cljs.core.async.close_BANG_(out);
var state_23362__$1 = state_23362;
var statearr_23385_25111 = state_23362__$1;
(statearr_23385_25111[(2)] = inst_23347);

(statearr_23385_25111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23363 === (10))){
var inst_23355 = (state_23362[(2)]);
var state_23362__$1 = (function (){var statearr_23386 = state_23362;
(statearr_23386[(8)] = inst_23355);

return statearr_23386;
})();
var statearr_23387_25116 = state_23362__$1;
(statearr_23387_25116[(2)] = null);

(statearr_23387_25116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23363 === (8))){
var inst_23344 = (state_23362[(7)]);
var state_23362__$1 = state_23362;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23362__$1,(11),out,inst_23344);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__20382__auto__ = null;
var cljs$core$async$state_machine__20382__auto____0 = (function (){
var statearr_23389 = [null,null,null,null,null,null,null,null,null];
(statearr_23389[(0)] = cljs$core$async$state_machine__20382__auto__);

(statearr_23389[(1)] = (1));

return statearr_23389;
});
var cljs$core$async$state_machine__20382__auto____1 = (function (state_23362){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__(state_23362);
if(cljs.core.keyword_identical_QMARK_(result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e23393){var ex__20385__auto__ = e23393;
var statearr_23394_25117 = state_23362;
(statearr_23394_25117[(2)] = ex__20385__auto__);


if(cljs.core.seq((state_23362[(4)]))){
var statearr_23395_25121 = state_23362;
(statearr_23395_25121[(1)] = cljs.core.first((state_23362[(4)])));

} else {
throw ex__20385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25126 = state_23362;
state_23362 = G__25126;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
cljs$core$async$state_machine__20382__auto__ = function(state_23362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20382__auto____1.call(this,state_23362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20382__auto____0;
cljs$core$async$state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20382__auto____1;
return cljs$core$async$state_machine__20382__auto__;
})()
})();
var state__20623__auto__ = (function (){var statearr_23403 = f__20622__auto__();
(statearr_23403[(6)] = c__20621__auto___25088);

return statearr_23403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20623__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__23406 = arguments.length;
switch (G__23406) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20621__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20622__auto__ = (function (){var switch__20381__auto__ = (function (state_23482){
var state_val_23483 = (state_23482[(1)]);
if((state_val_23483 === (7))){
var inst_23478 = (state_23482[(2)]);
var state_23482__$1 = state_23482;
var statearr_23507_25135 = state_23482__$1;
(statearr_23507_25135[(2)] = inst_23478);

(statearr_23507_25135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (20))){
var inst_23447 = (state_23482[(7)]);
var inst_23459 = (state_23482[(2)]);
var inst_23460 = cljs.core.next(inst_23447);
var inst_23424 = inst_23460;
var inst_23425 = null;
var inst_23426 = (0);
var inst_23427 = (0);
var state_23482__$1 = (function (){var statearr_23508 = state_23482;
(statearr_23508[(8)] = inst_23426);

(statearr_23508[(9)] = inst_23425);

(statearr_23508[(10)] = inst_23459);

(statearr_23508[(11)] = inst_23424);

(statearr_23508[(12)] = inst_23427);

return statearr_23508;
})();
var statearr_23509_25136 = state_23482__$1;
(statearr_23509_25136[(2)] = null);

(statearr_23509_25136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (1))){
var state_23482__$1 = state_23482;
var statearr_23510_25137 = state_23482__$1;
(statearr_23510_25137[(2)] = null);

(statearr_23510_25137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (4))){
var inst_23413 = (state_23482[(13)]);
var inst_23413__$1 = (state_23482[(2)]);
var inst_23414 = (inst_23413__$1 == null);
var state_23482__$1 = (function (){var statearr_23515 = state_23482;
(statearr_23515[(13)] = inst_23413__$1);

return statearr_23515;
})();
if(cljs.core.truth_(inst_23414)){
var statearr_23519_25138 = state_23482__$1;
(statearr_23519_25138[(1)] = (5));

} else {
var statearr_23520_25139 = state_23482__$1;
(statearr_23520_25139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (15))){
var state_23482__$1 = state_23482;
var statearr_23527_25140 = state_23482__$1;
(statearr_23527_25140[(2)] = null);

(statearr_23527_25140[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (21))){
var state_23482__$1 = state_23482;
var statearr_23528_25143 = state_23482__$1;
(statearr_23528_25143[(2)] = null);

(statearr_23528_25143[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (13))){
var inst_23426 = (state_23482[(8)]);
var inst_23425 = (state_23482[(9)]);
var inst_23424 = (state_23482[(11)]);
var inst_23427 = (state_23482[(12)]);
var inst_23439 = (state_23482[(2)]);
var inst_23444 = (inst_23427 + (1));
var tmp23521 = inst_23426;
var tmp23522 = inst_23425;
var tmp23523 = inst_23424;
var inst_23424__$1 = tmp23523;
var inst_23425__$1 = tmp23522;
var inst_23426__$1 = tmp23521;
var inst_23427__$1 = inst_23444;
var state_23482__$1 = (function (){var statearr_23532 = state_23482;
(statearr_23532[(8)] = inst_23426__$1);

(statearr_23532[(9)] = inst_23425__$1);

(statearr_23532[(14)] = inst_23439);

(statearr_23532[(11)] = inst_23424__$1);

(statearr_23532[(12)] = inst_23427__$1);

return statearr_23532;
})();
var statearr_23534_25144 = state_23482__$1;
(statearr_23534_25144[(2)] = null);

(statearr_23534_25144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (22))){
var state_23482__$1 = state_23482;
var statearr_23535_25145 = state_23482__$1;
(statearr_23535_25145[(2)] = null);

(statearr_23535_25145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (6))){
var inst_23413 = (state_23482[(13)]);
var inst_23422 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23413) : f.call(null, inst_23413));
var inst_23423 = cljs.core.seq(inst_23422);
var inst_23424 = inst_23423;
var inst_23425 = null;
var inst_23426 = (0);
var inst_23427 = (0);
var state_23482__$1 = (function (){var statearr_23536 = state_23482;
(statearr_23536[(8)] = inst_23426);

(statearr_23536[(9)] = inst_23425);

(statearr_23536[(11)] = inst_23424);

(statearr_23536[(12)] = inst_23427);

return statearr_23536;
})();
var statearr_23537_25146 = state_23482__$1;
(statearr_23537_25146[(2)] = null);

(statearr_23537_25146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (17))){
var inst_23447 = (state_23482[(7)]);
var inst_23452 = cljs.core.chunk_first(inst_23447);
var inst_23453 = cljs.core.chunk_rest(inst_23447);
var inst_23454 = cljs.core.count(inst_23452);
var inst_23424 = inst_23453;
var inst_23425 = inst_23452;
var inst_23426 = inst_23454;
var inst_23427 = (0);
var state_23482__$1 = (function (){var statearr_23538 = state_23482;
(statearr_23538[(8)] = inst_23426);

(statearr_23538[(9)] = inst_23425);

(statearr_23538[(11)] = inst_23424);

(statearr_23538[(12)] = inst_23427);

return statearr_23538;
})();
var statearr_23541_25147 = state_23482__$1;
(statearr_23541_25147[(2)] = null);

(statearr_23541_25147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (3))){
var inst_23480 = (state_23482[(2)]);
var state_23482__$1 = state_23482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23482__$1,inst_23480);
} else {
if((state_val_23483 === (12))){
var inst_23468 = (state_23482[(2)]);
var state_23482__$1 = state_23482;
var statearr_23546_25148 = state_23482__$1;
(statearr_23546_25148[(2)] = inst_23468);

(statearr_23546_25148[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (2))){
var state_23482__$1 = state_23482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23482__$1,(4),in$);
} else {
if((state_val_23483 === (23))){
var inst_23476 = (state_23482[(2)]);
var state_23482__$1 = state_23482;
var statearr_23548_25150 = state_23482__$1;
(statearr_23548_25150[(2)] = inst_23476);

(statearr_23548_25150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (19))){
var inst_23463 = (state_23482[(2)]);
var state_23482__$1 = state_23482;
var statearr_23552_25151 = state_23482__$1;
(statearr_23552_25151[(2)] = inst_23463);

(statearr_23552_25151[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (11))){
var inst_23424 = (state_23482[(11)]);
var inst_23447 = (state_23482[(7)]);
var inst_23447__$1 = cljs.core.seq(inst_23424);
var state_23482__$1 = (function (){var statearr_23553 = state_23482;
(statearr_23553[(7)] = inst_23447__$1);

return statearr_23553;
})();
if(inst_23447__$1){
var statearr_23554_25154 = state_23482__$1;
(statearr_23554_25154[(1)] = (14));

} else {
var statearr_23555_25156 = state_23482__$1;
(statearr_23555_25156[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (9))){
var inst_23470 = (state_23482[(2)]);
var inst_23471 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_23482__$1 = (function (){var statearr_23556 = state_23482;
(statearr_23556[(15)] = inst_23470);

return statearr_23556;
})();
if(cljs.core.truth_(inst_23471)){
var statearr_23557_25158 = state_23482__$1;
(statearr_23557_25158[(1)] = (21));

} else {
var statearr_23558_25159 = state_23482__$1;
(statearr_23558_25159[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (5))){
var inst_23416 = cljs.core.async.close_BANG_(out);
var state_23482__$1 = state_23482;
var statearr_23563_25162 = state_23482__$1;
(statearr_23563_25162[(2)] = inst_23416);

(statearr_23563_25162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (14))){
var inst_23447 = (state_23482[(7)]);
var inst_23450 = cljs.core.chunked_seq_QMARK_(inst_23447);
var state_23482__$1 = state_23482;
if(inst_23450){
var statearr_23564_25164 = state_23482__$1;
(statearr_23564_25164[(1)] = (17));

} else {
var statearr_23565_25167 = state_23482__$1;
(statearr_23565_25167[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (16))){
var inst_23466 = (state_23482[(2)]);
var state_23482__$1 = state_23482;
var statearr_23569_25169 = state_23482__$1;
(statearr_23569_25169[(2)] = inst_23466);

(statearr_23569_25169[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (10))){
var inst_23425 = (state_23482[(9)]);
var inst_23427 = (state_23482[(12)]);
var inst_23436 = cljs.core._nth(inst_23425,inst_23427);
var state_23482__$1 = state_23482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23482__$1,(13),out,inst_23436);
} else {
if((state_val_23483 === (18))){
var inst_23447 = (state_23482[(7)]);
var inst_23457 = cljs.core.first(inst_23447);
var state_23482__$1 = state_23482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23482__$1,(20),out,inst_23457);
} else {
if((state_val_23483 === (8))){
var inst_23426 = (state_23482[(8)]);
var inst_23427 = (state_23482[(12)]);
var inst_23433 = (inst_23427 < inst_23426);
var inst_23434 = inst_23433;
var state_23482__$1 = state_23482;
if(cljs.core.truth_(inst_23434)){
var statearr_23576_25174 = state_23482__$1;
(statearr_23576_25174[(1)] = (10));

} else {
var statearr_23577_25176 = state_23482__$1;
(statearr_23577_25176[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20382__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20382__auto____0 = (function (){
var statearr_23578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23578[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20382__auto__);

(statearr_23578[(1)] = (1));

return statearr_23578;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20382__auto____1 = (function (state_23482){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__(state_23482);
if(cljs.core.keyword_identical_QMARK_(result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e23580){var ex__20385__auto__ = e23580;
var statearr_23581_25180 = state_23482;
(statearr_23581_25180[(2)] = ex__20385__auto__);


if(cljs.core.seq((state_23482[(4)]))){
var statearr_23582_25186 = state_23482;
(statearr_23582_25186[(1)] = cljs.core.first((state_23482[(4)])));

} else {
throw ex__20385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25187 = state_23482;
state_23482 = G__25187;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20382__auto__ = function(state_23482){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20382__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20382__auto____1.call(this,state_23482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20382__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20382__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20382__auto__;
})()
})();
var state__20623__auto__ = (function (){var statearr_23583 = f__20622__auto__();
(statearr_23583[(6)] = c__20621__auto__);

return statearr_23583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20623__auto__);
}));

return c__20621__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__23585 = arguments.length;
switch (G__23585) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__23595 = arguments.length;
switch (G__23595) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__23608 = arguments.length;
switch (G__23608) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__20621__auto___25197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20622__auto__ = (function (){var switch__20381__auto__ = (function (state_23646){
var state_val_23647 = (state_23646[(1)]);
if((state_val_23647 === (7))){
var inst_23641 = (state_23646[(2)]);
var state_23646__$1 = state_23646;
var statearr_23652_25198 = state_23646__$1;
(statearr_23652_25198[(2)] = inst_23641);

(statearr_23652_25198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23647 === (1))){
var inst_23623 = null;
var state_23646__$1 = (function (){var statearr_23653 = state_23646;
(statearr_23653[(7)] = inst_23623);

return statearr_23653;
})();
var statearr_23654_25207 = state_23646__$1;
(statearr_23654_25207[(2)] = null);

(statearr_23654_25207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23647 === (4))){
var inst_23626 = (state_23646[(8)]);
var inst_23626__$1 = (state_23646[(2)]);
var inst_23627 = (inst_23626__$1 == null);
var inst_23628 = cljs.core.not(inst_23627);
var state_23646__$1 = (function (){var statearr_23655 = state_23646;
(statearr_23655[(8)] = inst_23626__$1);

return statearr_23655;
})();
if(inst_23628){
var statearr_23656_25227 = state_23646__$1;
(statearr_23656_25227[(1)] = (5));

} else {
var statearr_23657_25228 = state_23646__$1;
(statearr_23657_25228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23647 === (6))){
var state_23646__$1 = state_23646;
var statearr_23658_25229 = state_23646__$1;
(statearr_23658_25229[(2)] = null);

(statearr_23658_25229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23647 === (3))){
var inst_23643 = (state_23646[(2)]);
var inst_23644 = cljs.core.async.close_BANG_(out);
var state_23646__$1 = (function (){var statearr_23659 = state_23646;
(statearr_23659[(9)] = inst_23643);

return statearr_23659;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23646__$1,inst_23644);
} else {
if((state_val_23647 === (2))){
var state_23646__$1 = state_23646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23646__$1,(4),ch);
} else {
if((state_val_23647 === (11))){
var inst_23626 = (state_23646[(8)]);
var inst_23635 = (state_23646[(2)]);
var inst_23623 = inst_23626;
var state_23646__$1 = (function (){var statearr_23664 = state_23646;
(statearr_23664[(7)] = inst_23623);

(statearr_23664[(10)] = inst_23635);

return statearr_23664;
})();
var statearr_23668_25232 = state_23646__$1;
(statearr_23668_25232[(2)] = null);

(statearr_23668_25232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23647 === (9))){
var inst_23626 = (state_23646[(8)]);
var state_23646__$1 = state_23646;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23646__$1,(11),out,inst_23626);
} else {
if((state_val_23647 === (5))){
var inst_23623 = (state_23646[(7)]);
var inst_23626 = (state_23646[(8)]);
var inst_23630 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23626,inst_23623);
var state_23646__$1 = state_23646;
if(inst_23630){
var statearr_23673_25241 = state_23646__$1;
(statearr_23673_25241[(1)] = (8));

} else {
var statearr_23674_25242 = state_23646__$1;
(statearr_23674_25242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23647 === (10))){
var inst_23638 = (state_23646[(2)]);
var state_23646__$1 = state_23646;
var statearr_23675_25247 = state_23646__$1;
(statearr_23675_25247[(2)] = inst_23638);

(statearr_23675_25247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23647 === (8))){
var inst_23623 = (state_23646[(7)]);
var tmp23671 = inst_23623;
var inst_23623__$1 = tmp23671;
var state_23646__$1 = (function (){var statearr_23676 = state_23646;
(statearr_23676[(7)] = inst_23623__$1);

return statearr_23676;
})();
var statearr_23677_25253 = state_23646__$1;
(statearr_23677_25253[(2)] = null);

(statearr_23677_25253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__20382__auto__ = null;
var cljs$core$async$state_machine__20382__auto____0 = (function (){
var statearr_23682 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23682[(0)] = cljs$core$async$state_machine__20382__auto__);

(statearr_23682[(1)] = (1));

return statearr_23682;
});
var cljs$core$async$state_machine__20382__auto____1 = (function (state_23646){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__(state_23646);
if(cljs.core.keyword_identical_QMARK_(result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e23688){var ex__20385__auto__ = e23688;
var statearr_23689_25266 = state_23646;
(statearr_23689_25266[(2)] = ex__20385__auto__);


if(cljs.core.seq((state_23646[(4)]))){
var statearr_23690_25271 = state_23646;
(statearr_23690_25271[(1)] = cljs.core.first((state_23646[(4)])));

} else {
throw ex__20385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25273 = state_23646;
state_23646 = G__25273;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
cljs$core$async$state_machine__20382__auto__ = function(state_23646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20382__auto____1.call(this,state_23646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20382__auto____0;
cljs$core$async$state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20382__auto____1;
return cljs$core$async$state_machine__20382__auto__;
})()
})();
var state__20623__auto__ = (function (){var statearr_23694 = f__20622__auto__();
(statearr_23694[(6)] = c__20621__auto___25197);

return statearr_23694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20623__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__23701 = arguments.length;
switch (G__23701) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__20621__auto___25279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20622__auto__ = (function (){var switch__20381__auto__ = (function (state_23739){
var state_val_23740 = (state_23739[(1)]);
if((state_val_23740 === (7))){
var inst_23735 = (state_23739[(2)]);
var state_23739__$1 = state_23739;
var statearr_23747_25282 = state_23739__$1;
(statearr_23747_25282[(2)] = inst_23735);

(statearr_23747_25282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (1))){
var inst_23702 = (new Array(n));
var inst_23703 = inst_23702;
var inst_23704 = (0);
var state_23739__$1 = (function (){var statearr_23748 = state_23739;
(statearr_23748[(7)] = inst_23704);

(statearr_23748[(8)] = inst_23703);

return statearr_23748;
})();
var statearr_23749_25287 = state_23739__$1;
(statearr_23749_25287[(2)] = null);

(statearr_23749_25287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (4))){
var inst_23707 = (state_23739[(9)]);
var inst_23707__$1 = (state_23739[(2)]);
var inst_23708 = (inst_23707__$1 == null);
var inst_23709 = cljs.core.not(inst_23708);
var state_23739__$1 = (function (){var statearr_23750 = state_23739;
(statearr_23750[(9)] = inst_23707__$1);

return statearr_23750;
})();
if(inst_23709){
var statearr_23752_25297 = state_23739__$1;
(statearr_23752_25297[(1)] = (5));

} else {
var statearr_23753_25298 = state_23739__$1;
(statearr_23753_25298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (15))){
var inst_23729 = (state_23739[(2)]);
var state_23739__$1 = state_23739;
var statearr_23766_25303 = state_23739__$1;
(statearr_23766_25303[(2)] = inst_23729);

(statearr_23766_25303[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (13))){
var state_23739__$1 = state_23739;
var statearr_23771_25309 = state_23739__$1;
(statearr_23771_25309[(2)] = null);

(statearr_23771_25309[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (6))){
var inst_23704 = (state_23739[(7)]);
var inst_23725 = (inst_23704 > (0));
var state_23739__$1 = state_23739;
if(cljs.core.truth_(inst_23725)){
var statearr_23773_25313 = state_23739__$1;
(statearr_23773_25313[(1)] = (12));

} else {
var statearr_23774_25314 = state_23739__$1;
(statearr_23774_25314[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (3))){
var inst_23737 = (state_23739[(2)]);
var state_23739__$1 = state_23739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23739__$1,inst_23737);
} else {
if((state_val_23740 === (12))){
var inst_23703 = (state_23739[(8)]);
var inst_23727 = cljs.core.vec(inst_23703);
var state_23739__$1 = state_23739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23739__$1,(15),out,inst_23727);
} else {
if((state_val_23740 === (2))){
var state_23739__$1 = state_23739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23739__$1,(4),ch);
} else {
if((state_val_23740 === (11))){
var inst_23719 = (state_23739[(2)]);
var inst_23720 = (new Array(n));
var inst_23703 = inst_23720;
var inst_23704 = (0);
var state_23739__$1 = (function (){var statearr_23778 = state_23739;
(statearr_23778[(7)] = inst_23704);

(statearr_23778[(10)] = inst_23719);

(statearr_23778[(8)] = inst_23703);

return statearr_23778;
})();
var statearr_23779_25330 = state_23739__$1;
(statearr_23779_25330[(2)] = null);

(statearr_23779_25330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (9))){
var inst_23703 = (state_23739[(8)]);
var inst_23717 = cljs.core.vec(inst_23703);
var state_23739__$1 = state_23739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23739__$1,(11),out,inst_23717);
} else {
if((state_val_23740 === (5))){
var inst_23704 = (state_23739[(7)]);
var inst_23712 = (state_23739[(11)]);
var inst_23703 = (state_23739[(8)]);
var inst_23707 = (state_23739[(9)]);
var inst_23711 = (inst_23703[inst_23704] = inst_23707);
var inst_23712__$1 = (inst_23704 + (1));
var inst_23713 = (inst_23712__$1 < n);
var state_23739__$1 = (function (){var statearr_23780 = state_23739;
(statearr_23780[(11)] = inst_23712__$1);

(statearr_23780[(12)] = inst_23711);

return statearr_23780;
})();
if(cljs.core.truth_(inst_23713)){
var statearr_23781_25331 = state_23739__$1;
(statearr_23781_25331[(1)] = (8));

} else {
var statearr_23782_25332 = state_23739__$1;
(statearr_23782_25332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (14))){
var inst_23732 = (state_23739[(2)]);
var inst_23733 = cljs.core.async.close_BANG_(out);
var state_23739__$1 = (function (){var statearr_23784 = state_23739;
(statearr_23784[(13)] = inst_23732);

return statearr_23784;
})();
var statearr_23785_25339 = state_23739__$1;
(statearr_23785_25339[(2)] = inst_23733);

(statearr_23785_25339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (10))){
var inst_23723 = (state_23739[(2)]);
var state_23739__$1 = state_23739;
var statearr_23786_25343 = state_23739__$1;
(statearr_23786_25343[(2)] = inst_23723);

(statearr_23786_25343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (8))){
var inst_23712 = (state_23739[(11)]);
var inst_23703 = (state_23739[(8)]);
var tmp23783 = inst_23703;
var inst_23703__$1 = tmp23783;
var inst_23704 = inst_23712;
var state_23739__$1 = (function (){var statearr_23787 = state_23739;
(statearr_23787[(7)] = inst_23704);

(statearr_23787[(8)] = inst_23703__$1);

return statearr_23787;
})();
var statearr_23788_25354 = state_23739__$1;
(statearr_23788_25354[(2)] = null);

(statearr_23788_25354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__20382__auto__ = null;
var cljs$core$async$state_machine__20382__auto____0 = (function (){
var statearr_23794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23794[(0)] = cljs$core$async$state_machine__20382__auto__);

(statearr_23794[(1)] = (1));

return statearr_23794;
});
var cljs$core$async$state_machine__20382__auto____1 = (function (state_23739){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__(state_23739);
if(cljs.core.keyword_identical_QMARK_(result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e23795){var ex__20385__auto__ = e23795;
var statearr_23796_25357 = state_23739;
(statearr_23796_25357[(2)] = ex__20385__auto__);


if(cljs.core.seq((state_23739[(4)]))){
var statearr_23797_25359 = state_23739;
(statearr_23797_25359[(1)] = cljs.core.first((state_23739[(4)])));

} else {
throw ex__20385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25363 = state_23739;
state_23739 = G__25363;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
cljs$core$async$state_machine__20382__auto__ = function(state_23739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20382__auto____1.call(this,state_23739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20382__auto____0;
cljs$core$async$state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20382__auto____1;
return cljs$core$async$state_machine__20382__auto__;
})()
})();
var state__20623__auto__ = (function (){var statearr_23801 = f__20622__auto__();
(statearr_23801[(6)] = c__20621__auto___25279);

return statearr_23801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20623__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__23804 = arguments.length;
switch (G__23804) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__20621__auto___25376 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20622__auto__ = (function (){var switch__20381__auto__ = (function (state_23853){
var state_val_23854 = (state_23853[(1)]);
if((state_val_23854 === (7))){
var inst_23849 = (state_23853[(2)]);
var state_23853__$1 = state_23853;
var statearr_23855_25378 = state_23853__$1;
(statearr_23855_25378[(2)] = inst_23849);

(statearr_23855_25378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (1))){
var inst_23807 = [];
var inst_23809 = inst_23807;
var inst_23810 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23853__$1 = (function (){var statearr_23856 = state_23853;
(statearr_23856[(7)] = inst_23810);

(statearr_23856[(8)] = inst_23809);

return statearr_23856;
})();
var statearr_23857_25380 = state_23853__$1;
(statearr_23857_25380[(2)] = null);

(statearr_23857_25380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (4))){
var inst_23813 = (state_23853[(9)]);
var inst_23813__$1 = (state_23853[(2)]);
var inst_23814 = (inst_23813__$1 == null);
var inst_23815 = cljs.core.not(inst_23814);
var state_23853__$1 = (function (){var statearr_23858 = state_23853;
(statearr_23858[(9)] = inst_23813__$1);

return statearr_23858;
})();
if(inst_23815){
var statearr_23859_25385 = state_23853__$1;
(statearr_23859_25385[(1)] = (5));

} else {
var statearr_23860_25386 = state_23853__$1;
(statearr_23860_25386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (15))){
var inst_23809 = (state_23853[(8)]);
var inst_23841 = cljs.core.vec(inst_23809);
var state_23853__$1 = state_23853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23853__$1,(18),out,inst_23841);
} else {
if((state_val_23854 === (13))){
var inst_23836 = (state_23853[(2)]);
var state_23853__$1 = state_23853;
var statearr_23862_25388 = state_23853__$1;
(statearr_23862_25388[(2)] = inst_23836);

(statearr_23862_25388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (6))){
var inst_23809 = (state_23853[(8)]);
var inst_23838 = inst_23809.length;
var inst_23839 = (inst_23838 > (0));
var state_23853__$1 = state_23853;
if(cljs.core.truth_(inst_23839)){
var statearr_23863_25389 = state_23853__$1;
(statearr_23863_25389[(1)] = (15));

} else {
var statearr_23864_25390 = state_23853__$1;
(statearr_23864_25390[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (17))){
var inst_23846 = (state_23853[(2)]);
var inst_23847 = cljs.core.async.close_BANG_(out);
var state_23853__$1 = (function (){var statearr_23868 = state_23853;
(statearr_23868[(10)] = inst_23846);

return statearr_23868;
})();
var statearr_23869_25391 = state_23853__$1;
(statearr_23869_25391[(2)] = inst_23847);

(statearr_23869_25391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (3))){
var inst_23851 = (state_23853[(2)]);
var state_23853__$1 = state_23853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23853__$1,inst_23851);
} else {
if((state_val_23854 === (12))){
var inst_23809 = (state_23853[(8)]);
var inst_23829 = cljs.core.vec(inst_23809);
var state_23853__$1 = state_23853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23853__$1,(14),out,inst_23829);
} else {
if((state_val_23854 === (2))){
var state_23853__$1 = state_23853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23853__$1,(4),ch);
} else {
if((state_val_23854 === (11))){
var inst_23813 = (state_23853[(9)]);
var inst_23817 = (state_23853[(11)]);
var inst_23809 = (state_23853[(8)]);
var inst_23826 = inst_23809.push(inst_23813);
var tmp23870 = inst_23809;
var inst_23809__$1 = tmp23870;
var inst_23810 = inst_23817;
var state_23853__$1 = (function (){var statearr_23872 = state_23853;
(statearr_23872[(12)] = inst_23826);

(statearr_23872[(7)] = inst_23810);

(statearr_23872[(8)] = inst_23809__$1);

return statearr_23872;
})();
var statearr_23873_25396 = state_23853__$1;
(statearr_23873_25396[(2)] = null);

(statearr_23873_25396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (9))){
var inst_23810 = (state_23853[(7)]);
var inst_23822 = cljs.core.keyword_identical_QMARK_(inst_23810,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_23853__$1 = state_23853;
var statearr_23874_25397 = state_23853__$1;
(statearr_23874_25397[(2)] = inst_23822);

(statearr_23874_25397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (5))){
var inst_23813 = (state_23853[(9)]);
var inst_23810 = (state_23853[(7)]);
var inst_23818 = (state_23853[(13)]);
var inst_23817 = (state_23853[(11)]);
var inst_23817__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23813) : f.call(null, inst_23813));
var inst_23818__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23817__$1,inst_23810);
var state_23853__$1 = (function (){var statearr_23875 = state_23853;
(statearr_23875[(13)] = inst_23818__$1);

(statearr_23875[(11)] = inst_23817__$1);

return statearr_23875;
})();
if(inst_23818__$1){
var statearr_23877_25400 = state_23853__$1;
(statearr_23877_25400[(1)] = (8));

} else {
var statearr_23878_25401 = state_23853__$1;
(statearr_23878_25401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (14))){
var inst_23813 = (state_23853[(9)]);
var inst_23817 = (state_23853[(11)]);
var inst_23831 = (state_23853[(2)]);
var inst_23832 = [];
var inst_23833 = inst_23832.push(inst_23813);
var inst_23809 = inst_23832;
var inst_23810 = inst_23817;
var state_23853__$1 = (function (){var statearr_23881 = state_23853;
(statearr_23881[(14)] = inst_23833);

(statearr_23881[(7)] = inst_23810);

(statearr_23881[(15)] = inst_23831);

(statearr_23881[(8)] = inst_23809);

return statearr_23881;
})();
var statearr_23882_25405 = state_23853__$1;
(statearr_23882_25405[(2)] = null);

(statearr_23882_25405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (16))){
var state_23853__$1 = state_23853;
var statearr_23883_25406 = state_23853__$1;
(statearr_23883_25406[(2)] = null);

(statearr_23883_25406[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (10))){
var inst_23824 = (state_23853[(2)]);
var state_23853__$1 = state_23853;
if(cljs.core.truth_(inst_23824)){
var statearr_23884_25407 = state_23853__$1;
(statearr_23884_25407[(1)] = (11));

} else {
var statearr_23885_25408 = state_23853__$1;
(statearr_23885_25408[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (18))){
var inst_23843 = (state_23853[(2)]);
var state_23853__$1 = state_23853;
var statearr_23886_25410 = state_23853__$1;
(statearr_23886_25410[(2)] = inst_23843);

(statearr_23886_25410[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (8))){
var inst_23818 = (state_23853[(13)]);
var state_23853__$1 = state_23853;
var statearr_23887_25418 = state_23853__$1;
(statearr_23887_25418[(2)] = inst_23818);

(statearr_23887_25418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__20382__auto__ = null;
var cljs$core$async$state_machine__20382__auto____0 = (function (){
var statearr_23888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23888[(0)] = cljs$core$async$state_machine__20382__auto__);

(statearr_23888[(1)] = (1));

return statearr_23888;
});
var cljs$core$async$state_machine__20382__auto____1 = (function (state_23853){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__(state_23853);
if(cljs.core.keyword_identical_QMARK_(result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e23889){var ex__20385__auto__ = e23889;
var statearr_23890_25430 = state_23853;
(statearr_23890_25430[(2)] = ex__20385__auto__);


if(cljs.core.seq((state_23853[(4)]))){
var statearr_23892_25434 = state_23853;
(statearr_23892_25434[(1)] = cljs.core.first((state_23853[(4)])));

} else {
throw ex__20385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25439 = state_23853;
state_23853 = G__25439;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
cljs$core$async$state_machine__20382__auto__ = function(state_23853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20382__auto____1.call(this,state_23853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20382__auto____0;
cljs$core$async$state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20382__auto____1;
return cljs$core$async$state_machine__20382__auto__;
})()
})();
var state__20623__auto__ = (function (){var statearr_23893 = f__20622__auto__();
(statearr_23893[(6)] = c__20621__auto___25376);

return statearr_23893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20623__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
