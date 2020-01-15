// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18196){
var map__18197 = p__18196;
var map__18197__$1 = ((((!((map__18197 == null)))?(((((map__18197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18197):map__18197);
var m = map__18197__$1;
var n = cljs.core.get.call(null,map__18197__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18197__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18199_18221 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18200_18222 = null;
var count__18201_18223 = (0);
var i__18202_18224 = (0);
while(true){
if((i__18202_18224 < count__18201_18223)){
var f_18225 = cljs.core._nth.call(null,chunk__18200_18222,i__18202_18224);
cljs.core.println.call(null,"  ",f_18225);


var G__18226 = seq__18199_18221;
var G__18227 = chunk__18200_18222;
var G__18228 = count__18201_18223;
var G__18229 = (i__18202_18224 + (1));
seq__18199_18221 = G__18226;
chunk__18200_18222 = G__18227;
count__18201_18223 = G__18228;
i__18202_18224 = G__18229;
continue;
} else {
var temp__5457__auto___18230 = cljs.core.seq.call(null,seq__18199_18221);
if(temp__5457__auto___18230){
var seq__18199_18231__$1 = temp__5457__auto___18230;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18199_18231__$1)){
var c__4351__auto___18232 = cljs.core.chunk_first.call(null,seq__18199_18231__$1);
var G__18233 = cljs.core.chunk_rest.call(null,seq__18199_18231__$1);
var G__18234 = c__4351__auto___18232;
var G__18235 = cljs.core.count.call(null,c__4351__auto___18232);
var G__18236 = (0);
seq__18199_18221 = G__18233;
chunk__18200_18222 = G__18234;
count__18201_18223 = G__18235;
i__18202_18224 = G__18236;
continue;
} else {
var f_18237 = cljs.core.first.call(null,seq__18199_18231__$1);
cljs.core.println.call(null,"  ",f_18237);


var G__18238 = cljs.core.next.call(null,seq__18199_18231__$1);
var G__18239 = null;
var G__18240 = (0);
var G__18241 = (0);
seq__18199_18221 = G__18238;
chunk__18200_18222 = G__18239;
count__18201_18223 = G__18240;
i__18202_18224 = G__18241;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18242 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18242);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18242)))?cljs.core.second.call(null,arglists_18242):arglists_18242));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18203_18243 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18204_18244 = null;
var count__18205_18245 = (0);
var i__18206_18246 = (0);
while(true){
if((i__18206_18246 < count__18205_18245)){
var vec__18207_18247 = cljs.core._nth.call(null,chunk__18204_18244,i__18206_18246);
var name_18248 = cljs.core.nth.call(null,vec__18207_18247,(0),null);
var map__18210_18249 = cljs.core.nth.call(null,vec__18207_18247,(1),null);
var map__18210_18250__$1 = ((((!((map__18210_18249 == null)))?(((((map__18210_18249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18210_18249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18210_18249):map__18210_18249);
var doc_18251 = cljs.core.get.call(null,map__18210_18250__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18252 = cljs.core.get.call(null,map__18210_18250__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18248);

cljs.core.println.call(null," ",arglists_18252);

if(cljs.core.truth_(doc_18251)){
cljs.core.println.call(null," ",doc_18251);
} else {
}


var G__18253 = seq__18203_18243;
var G__18254 = chunk__18204_18244;
var G__18255 = count__18205_18245;
var G__18256 = (i__18206_18246 + (1));
seq__18203_18243 = G__18253;
chunk__18204_18244 = G__18254;
count__18205_18245 = G__18255;
i__18206_18246 = G__18256;
continue;
} else {
var temp__5457__auto___18257 = cljs.core.seq.call(null,seq__18203_18243);
if(temp__5457__auto___18257){
var seq__18203_18258__$1 = temp__5457__auto___18257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18203_18258__$1)){
var c__4351__auto___18259 = cljs.core.chunk_first.call(null,seq__18203_18258__$1);
var G__18260 = cljs.core.chunk_rest.call(null,seq__18203_18258__$1);
var G__18261 = c__4351__auto___18259;
var G__18262 = cljs.core.count.call(null,c__4351__auto___18259);
var G__18263 = (0);
seq__18203_18243 = G__18260;
chunk__18204_18244 = G__18261;
count__18205_18245 = G__18262;
i__18206_18246 = G__18263;
continue;
} else {
var vec__18212_18264 = cljs.core.first.call(null,seq__18203_18258__$1);
var name_18265 = cljs.core.nth.call(null,vec__18212_18264,(0),null);
var map__18215_18266 = cljs.core.nth.call(null,vec__18212_18264,(1),null);
var map__18215_18267__$1 = ((((!((map__18215_18266 == null)))?(((((map__18215_18266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18215_18266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18215_18266):map__18215_18266);
var doc_18268 = cljs.core.get.call(null,map__18215_18267__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18269 = cljs.core.get.call(null,map__18215_18267__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18265);

cljs.core.println.call(null," ",arglists_18269);

if(cljs.core.truth_(doc_18268)){
cljs.core.println.call(null," ",doc_18268);
} else {
}


var G__18270 = cljs.core.next.call(null,seq__18203_18258__$1);
var G__18271 = null;
var G__18272 = (0);
var G__18273 = (0);
seq__18203_18243 = G__18270;
chunk__18204_18244 = G__18271;
count__18205_18245 = G__18272;
i__18206_18246 = G__18273;
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
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__18217 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18218 = null;
var count__18219 = (0);
var i__18220 = (0);
while(true){
if((i__18220 < count__18219)){
var role = cljs.core._nth.call(null,chunk__18218,i__18220);
var temp__5457__auto___18274__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___18274__$1)){
var spec_18275 = temp__5457__auto___18274__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18275));
} else {
}


var G__18276 = seq__18217;
var G__18277 = chunk__18218;
var G__18278 = count__18219;
var G__18279 = (i__18220 + (1));
seq__18217 = G__18276;
chunk__18218 = G__18277;
count__18219 = G__18278;
i__18220 = G__18279;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__18217);
if(temp__5457__auto____$1){
var seq__18217__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18217__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__18217__$1);
var G__18280 = cljs.core.chunk_rest.call(null,seq__18217__$1);
var G__18281 = c__4351__auto__;
var G__18282 = cljs.core.count.call(null,c__4351__auto__);
var G__18283 = (0);
seq__18217 = G__18280;
chunk__18218 = G__18281;
count__18219 = G__18282;
i__18220 = G__18283;
continue;
} else {
var role = cljs.core.first.call(null,seq__18217__$1);
var temp__5457__auto___18284__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___18284__$2)){
var spec_18285 = temp__5457__auto___18284__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18285));
} else {
}


var G__18286 = cljs.core.next.call(null,seq__18217__$1);
var G__18287 = null;
var G__18288 = (0);
var G__18289 = (0);
seq__18217 = G__18286;
chunk__18218 = G__18287;
count__18219 = G__18288;
i__18220 = G__18289;
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

//# sourceMappingURL=repl.js.map
