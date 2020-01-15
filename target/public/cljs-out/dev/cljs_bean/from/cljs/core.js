// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_bean.from.cljs.core');
goog.require('cljs.core');
cljs_bean.from.cljs.core._indexOf = (function cljs_bean$from$cljs$core$_indexOf(var_args){
var G__13524 = arguments.length;
switch (G__13524) {
case 2:
return cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
return cljs_bean.from.cljs.core._indexOf.call(null,coll,x,(0));
});

cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3 = (function (coll,x,start){
var len = cljs.core.count.call(null,coll);
if((start >= len)){
return (-1);
} else {
var idx = (((start > (0)))?start:(((start < (0)))?(function (){var x__4037__auto__ = (0);
var y__4038__auto__ = (start + len);
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})():start
));
while(true){
if((idx < len)){
if(cljs.core._EQ_.call(null,cljs.core.nth.call(null,coll,idx),x)){
return idx;
} else {
var G__13526 = (idx + (1));
idx = G__13526;
continue;
}
} else {
return (-1);
}
break;
}
}
});

cljs_bean.from.cljs.core._indexOf.cljs$lang$maxFixedArity = 3;

cljs_bean.from.cljs.core._lastIndexOf = (function cljs_bean$from$cljs$core$_lastIndexOf(var_args){
var G__13528 = arguments.length;
switch (G__13528) {
case 2:
return cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
return cljs_bean.from.cljs.core._lastIndexOf.call(null,coll,x,cljs.core.count.call(null,coll));
});

cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3 = (function (coll,x,start){
var len = cljs.core.count.call(null,coll);
if((len === (0))){
return (-1);
} else {
var idx = (((start > (0)))?(function (){var x__4040__auto__ = (len - (1));
var y__4041__auto__ = start;
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})():(((start < (0)))?(len + start):start
));
while(true){
if((idx >= (0))){
if(cljs.core._EQ_.call(null,cljs.core.nth.call(null,coll,idx),x)){
return idx;
} else {
var G__13530 = (idx - (1));
idx = G__13530;
continue;
}
} else {
return (-1);
}
break;
}
}
});

cljs_bean.from.cljs.core._lastIndexOf.cljs$lang$maxFixedArity = 3;

/**
 * Compare indexed collection.
 */
cljs_bean.from.cljs.core.compare_indexed = (function cljs_bean$from$cljs$core$compare_indexed(var_args){
var G__13532 = arguments.length;
switch (G__13532) {
case 2:
return cljs_bean.from.cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs_bean.from.cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_bean.from.cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2 = (function (xs,ys){
var xl = cljs.core.count.call(null,xs);
var yl = cljs.core.count.call(null,ys);
if((xl < yl)){
return (-1);
} else {
if((xl > yl)){
return (1);
} else {
if((xl === (0))){
return (0);
} else {
return cljs_bean.from.cljs.core.compare_indexed.call(null,xs,ys,xl,(0));

}
}
}
});

cljs_bean.from.cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$4 = (function (xs,ys,len,n){
while(true){
var d = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((((d === (0))) && (((n + (1)) < len)))){
var G__13534 = xs;
var G__13535 = ys;
var G__13536 = len;
var G__13537 = (n + (1));
xs = G__13534;
ys = G__13535;
len = G__13536;
n = G__13537;
continue;
} else {
return d;
}
break;
}
});

cljs_bean.from.cljs.core.compare_indexed.cljs$lang$maxFixedArity = 4;

/**
 * Assumes x is sequential. Returns true if x equals y, otherwise
 *   returns false.
 */
cljs_bean.from.cljs.core.equiv_sequential = (function cljs_bean$from$cljs$core$equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?((((cljs.core.counted_QMARK_.call(null,x)) && (cljs.core.counted_QMARK_.call(null,y)) && (!((cljs.core.count.call(null,x) === cljs.core.count.call(null,y))))))?false:(function (){var xs = cljs.core.seq.call(null,x);
var ys = cljs.core.seq.call(null,y);
while(true){
if((xs == null)){
return (ys == null);
} else {
if((ys == null)){
return false;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs),cljs.core.first.call(null,ys))){
var G__13538 = cljs.core.next.call(null,xs);
var G__13539 = cljs.core.next.call(null,ys);
xs = G__13538;
ys = G__13539;
continue;
} else {
return false;

}
}
}
break;
}
})()):null));
});
/**
 * Accepts any collection which satisfies the ICount and IIndexed protocols and
 * reduces them without incurring seq initialization
 */
cljs_bean.from.cljs.core.ci_reduce = (function cljs_bean$from$cljs$core$ci_reduce(var_args){
var G__13541 = arguments.length;
switch (G__13541) {
case 2:
return cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2 = (function (cicoll,f){
var cnt = cljs.core._count.call(null,cicoll);
if((cnt === (0))){
return f.call(null);
} else {
var val = cljs.core._nth.call(null,cicoll,(0));
var n = (1);
while(true){
if((n < cnt)){
var nval = f.call(null,val,cljs.core._nth.call(null,cicoll,n));
if(cljs.core.reduced_QMARK_.call(null,nval)){
return cljs.core.deref.call(null,nval);
} else {
var G__13543 = nval;
var G__13544 = (n + (1));
val = G__13543;
n = G__13544;
continue;
}
} else {
return val;
}
break;
}
}
});

cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3 = (function (cicoll,f,val){
var cnt = cljs.core._count.call(null,cicoll);
var val__$1 = val;
var n = (0);
while(true){
if((n < cnt)){
var nval = f.call(null,val__$1,cljs.core._nth.call(null,cicoll,n));
if(cljs.core.reduced_QMARK_.call(null,nval)){
return cljs.core.deref.call(null,nval);
} else {
var G__13545 = nval;
var G__13546 = (n + (1));
val__$1 = G__13545;
n = G__13546;
continue;
}
} else {
return val__$1;
}
break;
}
});

cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$4 = (function (cicoll,f,val,idx){
var cnt = cljs.core._count.call(null,cicoll);
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt)){
var nval = f.call(null,val__$1,cljs.core._nth.call(null,cicoll,n));
if(cljs.core.reduced_QMARK_.call(null,nval)){
return cljs.core.deref.call(null,nval);
} else {
var G__13547 = nval;
var G__13548 = (n + (1));
val__$1 = G__13547;
n = G__13548;
continue;
}
} else {
return val__$1;
}
break;
}
});

cljs_bean.from.cljs.core.ci_reduce.cljs$lang$maxFixedArity = 4;

cljs_bean.from.cljs.core.TransientArrayMap_conj_BANG_ = (function cljs_bean$from$cljs$core$TransientArrayMap_conj_BANG_(tcoll,o,editable_QMARK_){
if(cljs.core.truth_(editable_QMARK_)){
if(cljs.core.map_entry_QMARK_.call(null,o)){
return cljs.core._assoc_BANG_.call(null,tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else {
if(cljs.core.vector_QMARK_.call(null,o)){
return cljs.core._assoc_BANG_.call(null,tcoll,o.call(null,(0)),o.call(null,(1)));
} else {
var es = cljs.core.seq.call(null,o);
var tcoll__$1 = tcoll;
while(true){
var temp__5455__auto__ = cljs.core.first.call(null,es);
if(cljs.core.truth_(temp__5455__auto__)){
var e = temp__5455__auto__;
var G__13549 = cljs.core.next.call(null,es);
var G__13550 = cljs.core._assoc_BANG_.call(null,tcoll__$1,cljs.core.key.call(null,e),cljs.core.val.call(null,e));
es = G__13549;
tcoll__$1 = G__13550;
continue;
} else {
return tcoll__$1;
}
break;
}

}
}
} else {
throw (new Error("conj! after persistent!"));
}
});
cljs_bean.from.cljs.core.PersistentArrayMap_conj = (function cljs_bean$from$cljs$core$PersistentArrayMap_conj(coll,entry){
if(cljs.core.vector_QMARK_.call(null,entry)){
return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,(0)),cljs.core._nth.call(null,entry,(1)));
} else {
var ret = coll;
var es = cljs.core.seq.call(null,entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first.call(null,es);
if(cljs.core.vector_QMARK_.call(null,e)){
var G__13551 = cljs.core._assoc.call(null,ret,cljs.core._nth.call(null,e,(0)),cljs.core._nth.call(null,e,(1)));
var G__13552 = cljs.core.next.call(null,es);
ret = G__13551;
es = G__13552;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});
cljs_bean.from.cljs.core.TransientVector_assoc_BANG_ = (function cljs_bean$from$cljs$core$TransientVector_assoc_BANG_(tcoll,key,val,type_name){
if(typeof key === 'number'){
return cljs.core._assoc_n_BANG_.call(null,tcoll,key,val);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_name),"'s key for assoc! must be a number."].join('')));
}
});
cljs_bean.from.cljs.core.PersistentVector_equiv = (function cljs_bean$from$cljs$core$PersistentVector_equiv(coll,other,type,cnt){
if((other instanceof type)){
if((cnt === cljs.core.count.call(null,other))){
var me_iter = cljs.core._iterator.call(null,coll);
var you_iter = cljs.core._iterator.call(null,other);
while(true){
if(me_iter.hasNext()){
var x = me_iter.next();
var y = you_iter.next();
if(cljs.core._EQ_.call(null,x,y)){
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return cljs_bean.from.cljs.core.equiv_sequential.call(null,coll,other);
}
});
cljs_bean.from.cljs.core.PersistentVector_lookup = (function cljs_bean$from$cljs$core$PersistentVector_lookup(coll,k,not_found){
if(typeof k === 'number'){
return cljs.core._nth.call(null,coll,k,not_found);
} else {
return not_found;
}
});
cljs_bean.from.cljs.core.PersistentVector_assoc = (function cljs_bean$from$cljs$core$PersistentVector_assoc(coll,k,v){
if(typeof k === 'number'){
return cljs.core._assoc_n.call(null,coll,k,v);
} else {
throw (new Error("Vector's key for assoc must be a number."));
}
});
cljs_bean.from.cljs.core.PersistentVector_contains_key_QMARK_ = (function cljs_bean$from$cljs$core$PersistentVector_contains_key_QMARK_(coll,k,cnt){
if(cljs.core.integer_QMARK_.call(null,k)){
return ((((0) <= k)) && ((k < cnt)));
} else {
return false;
}
});

//# sourceMappingURL=core.js.map
