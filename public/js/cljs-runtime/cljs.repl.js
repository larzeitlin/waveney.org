goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__25792){
var map__25793 = p__25792;
var map__25793__$1 = cljs.core.__destructure_map(map__25793);
var m = map__25793__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25793__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25793__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25794_26060 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25795_26061 = null;
var count__25796_26062 = (0);
var i__25797_26063 = (0);
while(true){
if((i__25797_26063 < count__25796_26062)){
var f_26067 = chunk__25795_26061.cljs$core$IIndexed$_nth$arity$2(null, i__25797_26063);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_26067], 0));


var G__26068 = seq__25794_26060;
var G__26069 = chunk__25795_26061;
var G__26070 = count__25796_26062;
var G__26071 = (i__25797_26063 + (1));
seq__25794_26060 = G__26068;
chunk__25795_26061 = G__26069;
count__25796_26062 = G__26070;
i__25797_26063 = G__26071;
continue;
} else {
var temp__5804__auto___26076 = cljs.core.seq(seq__25794_26060);
if(temp__5804__auto___26076){
var seq__25794_26077__$1 = temp__5804__auto___26076;
if(cljs.core.chunked_seq_QMARK_(seq__25794_26077__$1)){
var c__5525__auto___26078 = cljs.core.chunk_first(seq__25794_26077__$1);
var G__26079 = cljs.core.chunk_rest(seq__25794_26077__$1);
var G__26080 = c__5525__auto___26078;
var G__26081 = cljs.core.count(c__5525__auto___26078);
var G__26082 = (0);
seq__25794_26060 = G__26079;
chunk__25795_26061 = G__26080;
count__25796_26062 = G__26081;
i__25797_26063 = G__26082;
continue;
} else {
var f_26084 = cljs.core.first(seq__25794_26077__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_26084], 0));


var G__26085 = cljs.core.next(seq__25794_26077__$1);
var G__26086 = null;
var G__26087 = (0);
var G__26088 = (0);
seq__25794_26060 = G__26085;
chunk__25795_26061 = G__26086;
count__25796_26062 = G__26087;
i__25797_26063 = G__26088;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26090 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_26090], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_26090)))?cljs.core.second(arglists_26090):arglists_26090)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25820_26092 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25821_26093 = null;
var count__25822_26094 = (0);
var i__25823_26095 = (0);
while(true){
if((i__25823_26095 < count__25822_26094)){
var vec__25851_26096 = chunk__25821_26093.cljs$core$IIndexed$_nth$arity$2(null, i__25823_26095);
var name_26097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25851_26096,(0),null);
var map__25854_26098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25851_26096,(1),null);
var map__25854_26099__$1 = cljs.core.__destructure_map(map__25854_26098);
var doc_26100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25854_26099__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25854_26099__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_26097], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_26101], 0));

if(cljs.core.truth_(doc_26100)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_26100], 0));
} else {
}


var G__26102 = seq__25820_26092;
var G__26103 = chunk__25821_26093;
var G__26104 = count__25822_26094;
var G__26105 = (i__25823_26095 + (1));
seq__25820_26092 = G__26102;
chunk__25821_26093 = G__26103;
count__25822_26094 = G__26104;
i__25823_26095 = G__26105;
continue;
} else {
var temp__5804__auto___26106 = cljs.core.seq(seq__25820_26092);
if(temp__5804__auto___26106){
var seq__25820_26109__$1 = temp__5804__auto___26106;
if(cljs.core.chunked_seq_QMARK_(seq__25820_26109__$1)){
var c__5525__auto___26110 = cljs.core.chunk_first(seq__25820_26109__$1);
var G__26111 = cljs.core.chunk_rest(seq__25820_26109__$1);
var G__26112 = c__5525__auto___26110;
var G__26113 = cljs.core.count(c__5525__auto___26110);
var G__26114 = (0);
seq__25820_26092 = G__26111;
chunk__25821_26093 = G__26112;
count__25822_26094 = G__26113;
i__25823_26095 = G__26114;
continue;
} else {
var vec__25858_26115 = cljs.core.first(seq__25820_26109__$1);
var name_26116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25858_26115,(0),null);
var map__25861_26117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25858_26115,(1),null);
var map__25861_26118__$1 = cljs.core.__destructure_map(map__25861_26117);
var doc_26119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25861_26118__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25861_26118__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_26116], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_26120], 0));

if(cljs.core.truth_(doc_26119)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_26119], 0));
} else {
}


var G__26121 = cljs.core.next(seq__25820_26109__$1);
var G__26122 = null;
var G__26123 = (0);
var G__26124 = (0);
seq__25820_26092 = G__26121;
chunk__25821_26093 = G__26122;
count__25822_26094 = G__26123;
i__25823_26095 = G__26124;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__25862 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__25863 = null;
var count__25864 = (0);
var i__25865 = (0);
while(true){
if((i__25865 < count__25864)){
var role = chunk__25863.cljs$core$IIndexed$_nth$arity$2(null, i__25865);
var temp__5804__auto___26126__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___26126__$1)){
var spec_26127 = temp__5804__auto___26126__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_26127)], 0));
} else {
}


var G__26128 = seq__25862;
var G__26129 = chunk__25863;
var G__26130 = count__25864;
var G__26131 = (i__25865 + (1));
seq__25862 = G__26128;
chunk__25863 = G__26129;
count__25864 = G__26130;
i__25865 = G__26131;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__25862);
if(temp__5804__auto____$1){
var seq__25862__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__25862__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__25862__$1);
var G__26138 = cljs.core.chunk_rest(seq__25862__$1);
var G__26139 = c__5525__auto__;
var G__26140 = cljs.core.count(c__5525__auto__);
var G__26141 = (0);
seq__25862 = G__26138;
chunk__25863 = G__26139;
count__25864 = G__26140;
i__25865 = G__26141;
continue;
} else {
var role = cljs.core.first(seq__25862__$1);
var temp__5804__auto___26142__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___26142__$2)){
var spec_26143 = temp__5804__auto___26142__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_26143)], 0));
} else {
}


var G__26144 = cljs.core.next(seq__25862__$1);
var G__26145 = null;
var G__26146 = (0);
var G__26147 = (0);
seq__25862 = G__26144;
chunk__25863 = G__26145;
count__25864 = G__26146;
i__25865 = G__26147;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__25874 = datafied_throwable;
var map__25874__$1 = cljs.core.__destructure_map(map__25874);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25874__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25874__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25874__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__25875 = cljs.core.last(via);
var map__25875__$1 = cljs.core.__destructure_map(map__25875);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25875__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25875__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25875__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__25876 = data;
var map__25876__$1 = cljs.core.__destructure_map(map__25876);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25876__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25876__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25876__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__25877 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__25877__$1 = cljs.core.__destructure_map(map__25877);
var top_data = map__25877__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25877__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__25883 = phase;
var G__25883__$1 = (((G__25883 instanceof cljs.core.Keyword))?G__25883.fqn:null);
switch (G__25883__$1) {
case "read-source":
var map__25890 = data;
var map__25890__$1 = cljs.core.__destructure_map(map__25890);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25890__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25890__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__25891 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__25891__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25891,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__25891);
var G__25891__$2 = (cljs.core.truth_((function (){var fexpr__25896 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25896.cljs$core$IFn$_invoke$arity$1 ? fexpr__25896.cljs$core$IFn$_invoke$arity$1(source) : fexpr__25896.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25891__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__25891__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25891__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__25891__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__25897 = top_data;
var G__25897__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25897,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__25897);
var G__25897__$2 = (cljs.core.truth_((function (){var fexpr__25899 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25899.cljs$core$IFn$_invoke$arity$1 ? fexpr__25899.cljs$core$IFn$_invoke$arity$1(source) : fexpr__25899.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25897__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__25897__$1);
var G__25897__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25897__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__25897__$2);
var G__25897__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25897__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__25897__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25897__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__25897__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__25901 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25901,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25901,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25901,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25901,(3),null);
var G__25904 = top_data;
var G__25904__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25904,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__25904);
var G__25904__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25904__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__25904__$1);
var G__25904__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25904__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__25904__$2);
var G__25904__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25904__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__25904__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25904__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__25904__$4;
}

break;
case "execution":
var vec__25905 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25905,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25905,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25905,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25905,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__25873_SHARP_){
var or__5002__auto__ = (p1__25873_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__25908 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25908.cljs$core$IFn$_invoke$arity$1 ? fexpr__25908.cljs$core$IFn$_invoke$arity$1(p1__25873_SHARP_) : fexpr__25908.call(null, p1__25873_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__25909 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__25909__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25909,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__25909);
var G__25909__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25909__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__25909__$1);
var G__25909__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25909__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__25909__$2);
var G__25909__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25909__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__25909__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25909__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__25909__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25883__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__25939){
var map__25940 = p__25939;
var map__25940__$1 = cljs.core.__destructure_map(map__25940);
var triage_data = map__25940__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25940__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25940__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25940__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25940__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25940__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25940__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25940__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25940__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__25942 = phase;
var G__25942__$1 = (((G__25942 instanceof cljs.core.Keyword))?G__25942.fqn:null);
switch (G__25942__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__25943 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__25944 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25945 = loc;
var G__25946 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25947_26188 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25948_26189 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25949_26190 = true;
var _STAR_print_fn_STAR__temp_val__25950_26191 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25949_26190);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25950_26191);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25930_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25930_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25948_26189);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25947_26188);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__25943,G__25944,G__25945,G__25946) : format.call(null, G__25943,G__25944,G__25945,G__25946));

break;
case "macroexpansion":
var G__25961 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__25962 = cause_type;
var G__25963 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25964 = loc;
var G__25965 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25961,G__25962,G__25963,G__25964,G__25965) : format.call(null, G__25961,G__25962,G__25963,G__25964,G__25965));

break;
case "compile-syntax-check":
var G__25973 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__25974 = cause_type;
var G__25975 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25976 = loc;
var G__25977 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25973,G__25974,G__25975,G__25976,G__25977) : format.call(null, G__25973,G__25974,G__25975,G__25976,G__25977));

break;
case "compilation":
var G__25985 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__25986 = cause_type;
var G__25987 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25988 = loc;
var G__25989 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25985,G__25986,G__25987,G__25988,G__25989) : format.call(null, G__25985,G__25986,G__25987,G__25988,G__25989));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__25999 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__26000 = symbol;
var G__26001 = loc;
var G__26002 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26019_26192 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26020_26193 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26021_26194 = true;
var _STAR_print_fn_STAR__temp_val__26022_26195 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26021_26194);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26022_26195);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25935_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25935_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26020_26193);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26019_26192);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__25999,G__26000,G__26001,G__26002) : format.call(null, G__25999,G__26000,G__26001,G__26002));
} else {
var G__26028 = "Execution error%s at %s(%s).\n%s\n";
var G__26029 = cause_type;
var G__26030 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26031 = loc;
var G__26032 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26028,G__26029,G__26030,G__26031,G__26032) : format.call(null, G__26028,G__26029,G__26030,G__26031,G__26032));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25942__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
