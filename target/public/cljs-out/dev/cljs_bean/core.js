// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_bean.core');
goog.require('cljs.core');
goog.require('cljs_bean.from.cljs.core');
goog.require('goog.object');
cljs_bean.core.lookup_sentinel = ({});
cljs_bean.core.primitive_QMARK_ = (function cljs_bean$core$primitive_QMARK_(x){
return ((typeof x === 'number') || (typeof x === 'string') || (cljs.core.boolean_QMARK_.call(null,x)) || ((x == null)));
});
cljs_bean.core.__GT_val = (function cljs_bean$core$__GT_val(x,prop__GT_key,key__GT_prop){
if(cljs.core.truth_(cljs_bean.core.primitive_QMARK_.call(null,x))){
return x;
} else {
if(cljs.core.object_QMARK_.call(null,x)){
return (new cljs_bean.core.Bean(null,x,prop__GT_key,key__GT_prop,true,null,null,null));
} else {
if(cljs.core.array_QMARK_.call(null,x)){
return (new cljs_bean.core.ArrayVector(null,prop__GT_key,key__GT_prop,x,null));
} else {
return x;

}
}
}
});
cljs_bean.core.unwrap = (function cljs_bean$core$unwrap(x){
if(cljs.core.truth_(cljs_bean.core.primitive_QMARK_.call(null,x))){
return x;
} else {
if((x instanceof cljs_bean.core.Bean)){
return x.obj;
} else {
if((x instanceof cljs_bean.core.ArrayVector)){
return x.arr;
} else {
return x;

}
}
}
});
cljs_bean.core.empty_map = cljs.core.PersistentArrayMap.EMPTY;
cljs_bean.core.snapshot = (function cljs_bean$core$snapshot(x,prop__GT_key,key__GT_prop,recursive_QMARK_){
var result = cljs.core.volatile_BANG_.call(null,cljs.core.transient$.call(null,cljs_bean.core.empty_map));
goog.object.forEach(x,((function (result){
return (function (v,k,_){
return cljs.core._vreset_BANG_.call(null,result,cljs.core.assoc_BANG_.call(null,cljs.core._deref.call(null,result),prop__GT_key.call(null,k),(function (){var G__13555 = v;
if(cljs.core.truth_(recursive_QMARK_)){
return cljs_bean.core.__GT_val.call(null,G__13555,prop__GT_key,key__GT_prop);
} else {
return G__13555;
}
})()));
});})(result))
);

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,result));
});
cljs_bean.core.indexed_entry = (function cljs_bean$core$indexed_entry(obj,prop__GT_key,key__GT_prop,recursive_QMARK_,arr,i){
var prop = (arr[i]);
return (new cljs.core.MapEntry(prop__GT_key.call(null,prop),(function (){var G__13556 = (obj[prop]);
if(recursive_QMARK_){
return cljs_bean.core.__GT_val.call(null,G__13556,prop__GT_key,key__GT_prop);
} else {
return G__13556;
}
})(),null));
});
cljs_bean.core.compatible_key_QMARK_ = (function cljs_bean$core$compatible_key_QMARK_(k,prop__GT_key){
return (((((k instanceof cljs.core.Keyword)) && ((prop__GT_key === cljs.core.keyword)))) || (((typeof k === 'string') && ((prop__GT_key === cljs.core.identity)))));
});
cljs_bean.core.compatible_value_QMARK_ = (function cljs_bean$core$compatible_value_QMARK_(v,recursive_QMARK_){
var or__3949__auto__ = cljs_bean.core.primitive_QMARK_.call(null,v);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((!(((((cljs.core.map_QMARK_.call(null,v)) && (!((v instanceof cljs_bean.core.Bean))))) || (((cljs.core.vector_QMARK_.call(null,v)) && (!((v instanceof cljs_bean.core.ArrayVector)))))))) && (cljs.core.not.call(null,(function (){var and__3938__auto__ = recursive_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.object_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)));
} else {
return and__3938__auto__;
}
})())));
}
});
cljs_bean.core.snapshot_QMARK_ = (function cljs_bean$core$snapshot_QMARK_(k,v,prop__GT_key,recursive_QMARK_){
return cljs.core.not.call(null,(function (){var and__3938__auto__ = cljs_bean.core.compatible_key_QMARK_.call(null,k,prop__GT_key);
if(cljs.core.truth_(and__3938__auto__)){
return cljs_bean.core.compatible_value_QMARK_.call(null,v,recursive_QMARK_);
} else {
return and__3938__auto__;
}
})());
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ITransientMap}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ITransientCollection}
 * @implements {cljs.core.ITransientAssociative}
 * @implements {cljs.core.ILookup}
*/
cljs_bean.core.TransientBean = (function (editable_QMARK_,obj,prop__GT_key,key__GT_prop,recursive_QMARK_,__cnt){
this.editable_QMARK_ = editable_QMARK_;
this.obj = obj;
this.prop__GT_key = prop__GT_key;
this.key__GT_prop = key__GT_prop;
this.recursive_QMARK_ = recursive_QMARK_;
this.__cnt = __cnt;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 56;
});
cljs_bean.core.TransientBean.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(self__.editable_QMARK_){
var G__13558 = (self__.obj[self__.key__GT_prop.call(null,k)]);
if(self__.recursive_QMARK_){
return cljs_bean.core.__GT_val.call(null,G__13558,self__.prop__GT_key,self__.key__GT_prop);
} else {
return G__13558;
}
} else {
throw (new Error("lookup after persistent!"));
}
});

cljs_bean.core.TransientBean.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
if(self__.editable_QMARK_){
var ret = goog.object.get(self__.obj,self__.key__GT_prop.call(null,k),not_found);
var G__13559 = ret;
if(((self__.recursive_QMARK_) && (!((ret === not_found))))){
return cljs_bean.core.__GT_val.call(null,G__13559,self__.prop__GT_key,self__.key__GT_prop);
} else {
return G__13559;
}
} else {
throw (new Error("lookup after persistent!"));
}
});

cljs_bean.core.TransientBean.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__.__cnt == null)){
return self__.__cnt = cljs.core.count.call(null,cljs.core.js_keys.call(null,self__.obj));
} else {
return self__.__cnt;
}
});

cljs_bean.core.TransientBean.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
return cljs_bean.from.cljs.core.TransientArrayMap_conj_BANG_.call(null,tcoll__$1,o,self__.editable_QMARK_);
});

cljs_bean.core.TransientBean.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(self__.editable_QMARK_){
self__.editable_QMARK_ = false;

return (new cljs_bean.core.Bean(null,self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.recursive_QMARK_,null,self__.__cnt,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs_bean.core.TransientBean.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,k,v){
var self__ = this;
var tcoll__$1 = this;
if(self__.editable_QMARK_){
if(cljs.core.truth_(cljs_bean.core.snapshot_QMARK_.call(null,k,v,self__.prop__GT_key,self__.recursive_QMARK_))){
return cljs.core._assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs_bean.core.snapshot.call(null,self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.recursive_QMARK_)),k,v);
} else {
(self__.obj[self__.key__GT_prop.call(null,k)] = (function (){var G__13560 = v;
if(self__.recursive_QMARK_){
return cljs_bean.core.unwrap.call(null,G__13560);
} else {
return G__13560;
}
})());

self__.__cnt = null;

return tcoll__$1;
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs_bean.core.TransientBean.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,k){
var self__ = this;
var tcoll__$1 = this;
if(self__.editable_QMARK_){
delete self__.obj[self__.key__GT_prop.call(null,k)];

self__.__cnt = null;

return tcoll__$1;
} else {
throw (new Error("dissoc! after persistent!"));
}
});

cljs_bean.core.TransientBean.prototype.call = (function() {
var G__13565 = null;
var G__13565__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if(self__.editable_QMARK_){
var G__13561 = (self__.obj[self__.key__GT_prop.call(null,k)]);
if(self__.recursive_QMARK_){
return cljs_bean.core.__GT_val.call(null,G__13561,self__.prop__GT_key,self__.key__GT_prop);
} else {
return G__13561;
}
} else {
throw (new Error("lookup after persistent!"));
}
});
var G__13565__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if(self__.editable_QMARK_){
var ret = goog.object.get(self__.obj,self__.key__GT_prop.call(null,k),not_found);
var G__13562 = ret;
if(((self__.recursive_QMARK_) && (!((ret === not_found))))){
return cljs_bean.core.__GT_val.call(null,G__13562,self__.prop__GT_key,self__.key__GT_prop);
} else {
return G__13562;
}
} else {
throw (new Error("lookup after persistent!"));
}
});
G__13565 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__13565__2.call(this,self__,k);
case 3:
return G__13565__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__13565.cljs$core$IFn$_invoke$arity$2 = G__13565__2;
G__13565.cljs$core$IFn$_invoke$arity$3 = G__13565__3;
return G__13565;
})()
;

cljs_bean.core.TransientBean.prototype.apply = (function (self__,args13557){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args13557)));
});

cljs_bean.core.TransientBean.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if(self__.editable_QMARK_){
var G__13563 = (self__.obj[self__.key__GT_prop.call(null,k)]);
if(self__.recursive_QMARK_){
return cljs_bean.core.__GT_val.call(null,G__13563,self__.prop__GT_key,self__.key__GT_prop);
} else {
return G__13563;
}
} else {
throw (new Error("lookup after persistent!"));
}
});

cljs_bean.core.TransientBean.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var _ = this;
if(self__.editable_QMARK_){
var ret = goog.object.get(self__.obj,self__.key__GT_prop.call(null,k),not_found);
var G__13564 = ret;
if(((self__.recursive_QMARK_) && (!((ret === not_found))))){
return cljs_bean.core.__GT_val.call(null,G__13564,self__.prop__GT_key,self__.key__GT_prop);
} else {
return G__13564;
}
} else {
throw (new Error("lookup after persistent!"));
}
});

cljs_bean.core.TransientBean.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"editable?","editable?",-164945806,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"prop->key","prop->key",342816281,null),new cljs.core.Symbol(null,"key->prop","key->prop",612078996,null),cljs.core.with_meta(new cljs.core.Symbol(null,"recursive?","recursive?",-1314360525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"__cnt","__cnt",1833584904,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs_bean.core.TransientBean.cljs$lang$type = true;

cljs_bean.core.TransientBean.cljs$lang$ctorStr = "cljs-bean.core/TransientBean";

cljs_bean.core.TransientBean.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs-bean.core/TransientBean");
});

/**
 * Positional factory function for cljs-bean.core/TransientBean.
 */
cljs_bean.core.__GT_TransientBean = (function cljs_bean$core$__GT_TransientBean(editable_QMARK_,obj,prop__GT_key,key__GT_prop,recursive_QMARK_,__cnt){
return (new cljs_bean.core.TransientBean(editable_QMARK_,obj,prop__GT_key,key__GT_prop,recursive_QMARK_,__cnt));
});


/**
* @constructor
 * @implements {cljs_bean.core.Object}
*/
cljs_bean.core.BeanIterator = (function (obj,prop__GT_key,key__GT_prop,recursive_QMARK_,arr,i,cnt){
this.obj = obj;
this.prop__GT_key = prop__GT_key;
this.key__GT_prop = key__GT_prop;
this.recursive_QMARK_ = recursive_QMARK_;
this.arr = arr;
this.i = i;
this.cnt = cnt;
});
cljs_bean.core.BeanIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.cnt);
});

cljs_bean.core.BeanIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = cljs_bean.core.indexed_entry.call(null,self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.recursive_QMARK_,self__.arr,self__.i);
self__.i = (self__.i + (1));

return ret;
});

cljs_bean.core.BeanIterator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"prop->key","prop->key",342816281,null),new cljs.core.Symbol(null,"key->prop","key->prop",612078996,null),cljs.core.with_meta(new cljs.core.Symbol(null,"recursive?","recursive?",-1314360525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),new cljs.core.Symbol(null,"arr","arr",2115492975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null)], null);
});

cljs_bean.core.BeanIterator.cljs$lang$type = true;

cljs_bean.core.BeanIterator.cljs$lang$ctorStr = "cljs-bean.core/BeanIterator";

cljs_bean.core.BeanIterator.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs-bean.core/BeanIterator");
});

/**
 * Positional factory function for cljs-bean.core/BeanIterator.
 */
cljs_bean.core.__GT_BeanIterator = (function cljs_bean$core$__GT_BeanIterator(obj,prop__GT_key,key__GT_prop,recursive_QMARK_,arr,i,cnt){
return (new cljs_bean.core.BeanIterator(obj,prop__GT_key,key__GT_prop,recursive_QMARK_,arr,i,cnt));
});


/**
* @constructor
 * @implements {cljs_bean.core.Object}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ASeq}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
cljs_bean.core.BeanSeq = (function (obj,prop__GT_key,key__GT_prop,recursive_QMARK_,arr,i,meta){
this.obj = obj;
this.prop__GT_key = prop__GT_key;
this.key__GT_prop = key__GT_prop;
this.recursive_QMARK_ = recursive_QMARK_;
this.arr = arr;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2179858686;
this.cljs$lang$protocol_mask$partition1$ = 8192;
});
cljs_bean.core.BeanSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs_bean.core.BeanSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs_bean.core.BeanSeq.prototype.indexOf = (function() {
var G__13566 = null;
var G__13566__1 = (function (x){
var self__ = this;
var coll = this;
return cljs_bean.from.cljs.core._indexOf.call(null,coll,x,(0));
});
var G__13566__2 = (function (x,start){
var self__ = this;
var coll = this;
return cljs_bean.from.cljs.core._indexOf.call(null,coll,x,start);
});
G__13566 = function(x,start){
switch(arguments.length){
case 1:
return G__13566__1.call(this,x);
case 2:
return G__13566__2.call(this,x,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13566.cljs$core$IFn$_invoke$arity$1 = G__13566__1;
G__13566.cljs$core$IFn$_invoke$arity$2 = G__13566__2;
return G__13566;
})()
;

cljs_bean.core.BeanSeq.prototype.lastIndexOf = (function() {
var G__13567 = null;
var G__13567__1 = (function (x){
var self__ = this;
var coll = this;
return cljs_bean.from.cljs.core._lastIndexOf.call(null,coll,x,cljs.core.count.call(null,coll));
});
var G__13567__2 = (function (x,start){
var self__ = this;
var coll = this;
return cljs_bean.from.cljs.core._lastIndexOf.call(null,coll,x,start);
});
G__13567 = function(x,start){
switch(arguments.length){
case 1:
return G__13567__1.call(this,x);
case 2:
return G__13567__2.call(this,x,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13567.cljs$core$IFn$_invoke$arity$1 = G__13567__1;
G__13567.cljs$core$IFn$_invoke$arity$2 = G__13567__2;
return G__13567;
})()
;

cljs_bean.core.BeanSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
var i__$1 = (n + self__.i);
if(((((0) <= i__$1)) && ((i__$1 < self__.arr.length)))){
return cljs_bean.core.indexed_entry.call(null,self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.recursive_QMARK_,self__.arr,i__$1);
} else {
throw (new Error("Index out of bounds"));
}
});

cljs_bean.core.BeanSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,not_found){
var self__ = this;
var ___$1 = this;
var i__$1 = (n + self__.i);
if(((((0) <= i__$1)) && ((i__$1 < self__.arr.length)))){
return cljs_bean.core.indexed_entry.call(null,self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.recursive_QMARK_,self__.arr,i__$1);
} else {
return not_found;
}
});

cljs_bean.core.BeanSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs_bean.core.BeanSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

cljs_bean.core.BeanSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs_bean.core.BeanSeq(self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.recursive_QMARK_,self__.arr,self__.i,self__.meta));
});

cljs_bean.core.BeanSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((self__.i + (1)) < self__.arr.length)){
return (new cljs_bean.core.BeanSeq(self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.recursive_QMARK_,self__.arr,(self__.i + (1)),null));
} else {
return null;
}
});

cljs_bean.core.BeanSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var x__4037__auto__ = (0);
var y__4038__auto__ = (self__.arr.length - self__.i);
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
});

cljs_bean.core.BeanSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll.call(null,coll__$1);
});

cljs_bean.core.BeanSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs_bean.from.cljs.core.equiv_sequential.call(null,coll__$1,other);
});

cljs_bean.core.BeanSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.List.EMPTY;
});

cljs_bean.core.BeanSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs_bean.from.cljs.core.ci_reduce.call(null,coll__$1,f);
});

cljs_bean.core.BeanSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs_bean.from.cljs.core.ci_reduce.call(null,coll__$1,f,start);
});

cljs_bean.core.BeanSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs_bean.core.indexed_entry.call(null,self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.recursive_QMARK_,self__.arr,self__.i);
});

cljs_bean.core.BeanSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((self__.i + (1)) < self__.arr.length)){
return (new cljs_bean.core.BeanSeq(self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.recursive_QMARK_,self__.arr,(self__.i + (1)),null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs_bean.core.BeanSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs_bean.core.BeanSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
if((new_meta === self__.meta)){
return coll__$1;
} else {
return (new cljs_bean.core.BeanSeq(self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.recursive_QMARK_,self__.arr,self__.i,new_meta));
}
});

cljs_bean.core.BeanSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons.call(null,o,coll__$1);
});

cljs_bean.core.BeanSeq.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"prop->key","prop->key",342816281,null),new cljs.core.Symbol(null,"key->prop","key->prop",612078996,null),cljs.core.with_meta(new cljs.core.Symbol(null,"recursive?","recursive?",-1314360525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),new cljs.core.Symbol(null,"arr","arr",2115492975,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
});

cljs_bean.core.BeanSeq.cljs$lang$type = true;

cljs_bean.core.BeanSeq.cljs$lang$ctorStr = "cljs-bean.core/BeanSeq";

cljs_bean.core.BeanSeq.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs-bean.core/BeanSeq");
});

/**
 * Positional factory function for cljs-bean.core/BeanSeq.
 */
cljs_bean.core.__GT_BeanSeq = (function cljs_bean$core$__GT_BeanSeq(obj,prop__GT_key,key__GT_prop,recursive_QMARK_,arr,i,meta){
return (new cljs_bean.core.BeanSeq(obj,prop__GT_key,key__GT_prop,recursive_QMARK_,arr,i,meta));
});


/**
* @constructor
 * @implements {cljs_bean.core.Object}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEditableCollection}
 * @implements {cljs.core.IFind}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
cljs_bean.core.Bean = (function (meta,obj,prop__GT_key,key__GT_prop,recursive_QMARK_,__arr,__cnt,__hash){
this.meta = meta;
this.obj = obj;
this.prop__GT_key = prop__GT_key;
this.key__GT_prop = key__GT_prop;
this.recursive_QMARK_ = recursive_QMARK_;
this.__arr = __arr;
this.__cnt = __cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2164131599;
this.cljs$lang$protocol_mask$partition1$ = 139268;
});
cljs_bean.core.Bean.prototype.cljs$core$IFind$ = cljs.core.PROTOCOL_SENTINEL;

cljs_bean.core.Bean.prototype.cljs$core$IFind$_find$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var v = goog.object.get(self__.obj,self__.key__GT_prop.call(null,k),cljs_bean.core.lookup_sentinel);
if((v === cljs_bean.core.lookup_sentinel)){
return null;
} else {
return (new cljs.core.MapEntry(k,(function (){var G__13569 = v;
if(self__.recursive_QMARK_){
return cljs_bean.core.__GT_val.call(null,G__13569,self__.prop__GT_key,self__.key__GT_prop);
} else {
return G__13569;
}
})(),null));
}
});

cljs_bean.core.Bean.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs_bean.core.Bean.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs_bean.core.Bean.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator.call(null,cljs.core.keys.call(null,coll));
});

cljs_bean.core.Bean.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator.call(null,cljs.core.seq.call(null,coll));
});

cljs_bean.core.Bean.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator.call(null,cljs.core.vals.call(null,coll));
});

cljs_bean.core.Bean.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_.call(null,coll,k);
});

cljs_bean.core.Bean.prototype.get = (function (k,not_found){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});

cljs_bean.core.Bean.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__13570 = cljs.core.seq.call(null,coll);
var chunk__13571 = null;
var count__13572 = (0);
var i__13573 = (0);
while(true){
if((i__13573 < count__13572)){
var vec__13574 = cljs.core._nth.call(null,chunk__13571,i__13573);
var k = cljs.core.nth.call(null,vec__13574,(0),null);
var v = cljs.core.nth.call(null,vec__13574,(1),null);
f.call(null,v,k);


var G__13591 = seq__13570;
var G__13592 = chunk__13571;
var G__13593 = count__13572;
var G__13594 = (i__13573 + (1));
seq__13570 = G__13591;
chunk__13571 = G__13592;
count__13572 = G__13593;
i__13573 = G__13594;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__13570);
if(temp__5457__auto__){
var seq__13570__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13570__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__13570__$1);
var G__13595 = cljs.core.chunk_rest.call(null,seq__13570__$1);
var G__13596 = c__4351__auto__;
var G__13597 = cljs.core.count.call(null,c__4351__auto__);
var G__13598 = (0);
seq__13570 = G__13595;
chunk__13571 = G__13596;
count__13572 = G__13597;
i__13573 = G__13598;
continue;
} else {
var vec__13577 = cljs.core.first.call(null,seq__13570__$1);
var k = cljs.core.nth.call(null,vec__13577,(0),null);
var v = cljs.core.nth.call(null,vec__13577,(1),null);
f.call(null,v,k);


var G__13599 = cljs.core.next.call(null,seq__13570__$1);
var G__13600 = null;
var G__13601 = (0);
var G__13602 = (0);
seq__13570 = G__13599;
chunk__13571 = G__13600;
count__13572 = G__13601;
i__13573 = G__13602;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs_bean.core.Bean.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var G__13580 = (self__.obj[self__.key__GT_prop.call(null,k)]);
if(self__.recursive_QMARK_){
return cljs_bean.core.__GT_val.call(null,G__13580,self__.prop__GT_key,self__.key__GT_prop);
} else {
return G__13580;
}
});

cljs_bean.core.Bean.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var ret = goog.object.get(self__.obj,self__.key__GT_prop.call(null,k),not_found);
var G__13581 = ret;
if(((self__.recursive_QMARK_) && (!((ret === not_found))))){
return cljs_bean.core.__GT_val.call(null,G__13581,self__.prop__GT_key,self__.key__GT_prop);
} else {
return G__13581;
}
});

cljs_bean.core.Bean.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
try{var result = cljs.core.volatile_BANG_.call(null,init);
goog.object.forEach(self__.obj,((function (result,___$1){
return (function (v,k,___$2){
var r = cljs.core._vreset_BANG_.call(null,result,f.call(null,cljs.core._deref.call(null,result),self__.prop__GT_key.call(null,k),(function (){var G__13583 = v;
if(self__.recursive_QMARK_){
return cljs_bean.core.__GT_val.call(null,G__13583,self__.prop__GT_key,self__.key__GT_prop);
} else {
return G__13583;
}
})()));
if(cljs.core.reduced_QMARK_.call(null,r)){
throw r;
} else {
return null;
}
});})(result,___$1))
);

return cljs.core.deref.call(null,result);
}catch (e13582){var x = e13582;
if(cljs.core.reduced_QMARK_.call(null,x)){
return cljs.core.deref.call(null,x);
} else {
throw x;
}
}});

cljs_bean.core.Bean.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core.print_map.call(null,coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs_bean.core.Bean.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.__arr == null)){
self__.__arr = cljs.core.js_keys.call(null,self__.obj);
} else {
}

return (new cljs_bean.core.BeanIterator(self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.recursive_QMARK_,self__.__arr,(0),cljs.core._count.call(null,coll__$1)));
});

cljs_bean.core.Bean.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

cljs_bean.core.Bean.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs_bean.core.Bean(self__.meta,self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.recursive_QMARK_,self__.__arr,self__.__cnt,self__.__hash));
});

cljs_bean.core.Bean.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__.__cnt == null)){
if((self__.__arr == null)){
self__.__arr = cljs.core.js_keys.call(null,self__.obj);
} else {
}

return self__.__cnt = self__.__arr.length;
} else {
return self__.__cnt;
}
});

cljs_bean.core.Bean.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = cljs.core.hash_unordered_coll.call(null,coll__$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

cljs_bean.core.Bean.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map.call(null,coll__$1,other);
});

cljs_bean.core.Bean.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs_bean.core.TransientBean(true,goog.object.clone(self__.obj),self__.prop__GT_key,self__.key__GT_prop,self__.recursive_QMARK_,self__.__cnt));
});

cljs_bean.core.Bean.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs_bean.core.Bean(self__.meta,({}),self__.prop__GT_key,self__.key__GT_prop,self__.recursive_QMARK_,[],(0),null));
});

cljs_bean.core.Bean.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core._reduce.call(null,cljs.core._seq.call(null,coll__$1),f);
});

cljs_bean.core.Bean.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core._kv_reduce.call(null,coll__$1,((function (coll__$1){
return (function (r,k,v){
return f.call(null,r,(new cljs.core.MapEntry(k,v,null)));
});})(coll__$1))
,start);
});

cljs_bean.core.Bean.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new cljs_bean.core.Bean(self__.meta,(function (){var G__13584 = goog.object.clone(self__.obj);
delete G__13584[self__.key__GT_prop.call(null,k)];

return G__13584;
})(),self__.prop__GT_key,self__.key__GT_prop,self__.recursive_QMARK_,null,null,null));
});

cljs_bean.core.Bean.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs_bean.core.snapshot_QMARK_.call(null,k,v,self__.prop__GT_key,self__.recursive_QMARK_))){
return cljs.core._assoc.call(null,cljs.core.with_meta.call(null,cljs_bean.core.snapshot.call(null,self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.recursive_QMARK_),self__.meta),k,v);
} else {
return (new cljs_bean.core.Bean(self__.meta,(function (){var G__13585 = goog.object.clone(self__.obj);
(G__13585[self__.key__GT_prop.call(null,k)] = (function (){var G__13586 = v;
if(self__.recursive_QMARK_){
return cljs_bean.core.unwrap.call(null,G__13586);
} else {
return G__13586;
}
})());

return G__13585;
})(),self__.prop__GT_key,self__.key__GT_prop,self__.recursive_QMARK_,null,null,null));
}
});

cljs_bean.core.Bean.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core.contains_QMARK_.call(null,coll__$1,k);
});

cljs_bean.core.Bean.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__.__arr == null)){
self__.__arr = cljs.core.js_keys.call(null,self__.obj);
} else {
}

if((self__.__arr.length > (0))){
return (new cljs_bean.core.BeanSeq(self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.recursive_QMARK_,self__.__arr,(0),null));
} else {
return null;
}
});

cljs_bean.core.Bean.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
if((new_meta === self__.meta)){
return coll__$1;
} else {
return (new cljs_bean.core.Bean(new_meta,self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.recursive_QMARK_,self__.__arr,self__.__cnt,self__.__hash));
}
});

cljs_bean.core.Bean.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
return cljs_bean.from.cljs.core.PersistentArrayMap_conj.call(null,coll__$1,entry);
});

cljs_bean.core.Bean.prototype.call = (function() {
var G__13603 = null;
var G__13603__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__13587 = (self__.obj[self__.key__GT_prop.call(null,k)]);
if(self__.recursive_QMARK_){
return cljs_bean.core.__GT_val.call(null,G__13587,self__.prop__GT_key,self__.key__GT_prop);
} else {
return G__13587;
}
});
var G__13603__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var ret = goog.object.get(self__.obj,self__.key__GT_prop.call(null,k),not_found);
var G__13588 = ret;
if(((self__.recursive_QMARK_) && (!((ret === not_found))))){
return cljs_bean.core.__GT_val.call(null,G__13588,self__.prop__GT_key,self__.key__GT_prop);
} else {
return G__13588;
}
});
G__13603 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__13603__2.call(this,self__,k);
case 3:
return G__13603__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__13603.cljs$core$IFn$_invoke$arity$2 = G__13603__2;
G__13603.cljs$core$IFn$_invoke$arity$3 = G__13603__3;
return G__13603;
})()
;

cljs_bean.core.Bean.prototype.apply = (function (self__,args13568){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args13568)));
});

cljs_bean.core.Bean.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
var G__13589 = (self__.obj[self__.key__GT_prop.call(null,k)]);
if(self__.recursive_QMARK_){
return cljs_bean.core.__GT_val.call(null,G__13589,self__.prop__GT_key,self__.key__GT_prop);
} else {
return G__13589;
}
});

cljs_bean.core.Bean.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var _ = this;
var ret = goog.object.get(self__.obj,self__.key__GT_prop.call(null,k),not_found);
var G__13590 = ret;
if(((self__.recursive_QMARK_) && (!((ret === not_found))))){
return cljs_bean.core.__GT_val.call(null,G__13590,self__.prop__GT_key,self__.key__GT_prop);
} else {
return G__13590;
}
});

cljs_bean.core.Bean.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"prop->key","prop->key",342816281,null),new cljs.core.Symbol(null,"key->prop","key->prop",612078996,null),cljs.core.with_meta(new cljs.core.Symbol(null,"recursive?","recursive?",-1314360525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"__arr","__arr",2056204649,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"__cnt","__cnt",1833584904,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs_bean.core.Bean.cljs$lang$type = true;

cljs_bean.core.Bean.cljs$lang$ctorStr = "cljs-bean.core/Bean";

cljs_bean.core.Bean.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs-bean.core/Bean");
});

/**
 * Positional factory function for cljs-bean.core/Bean.
 */
cljs_bean.core.__GT_Bean = (function cljs_bean$core$__GT_Bean(meta,obj,prop__GT_key,key__GT_prop,recursive_QMARK_,__arr,__cnt,__hash){
return (new cljs_bean.core.Bean(meta,obj,prop__GT_key,key__GT_prop,recursive_QMARK_,__arr,__cnt,__hash));
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ITransientCollection}
 * @implements {cljs.core.ITransientVector}
 * @implements {cljs.core.ITransientAssociative}
 * @implements {cljs.core.ILookup}
*/
cljs_bean.core.TransientArrayVector = (function (editable_QMARK_,arr,prop__GT_key,key__GT_prop){
this.editable_QMARK_ = editable_QMARK_;
this.arr = arr;
this.prop__GT_key = prop__GT_key;
this.key__GT_prop = key__GT_prop;
this.cljs$lang$protocol_mask$partition1$ = 88;
this.cljs$lang$protocol_mask$partition0$ = 275;
});
cljs_bean.core.TransientArrayVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
if(self__.editable_QMARK_){
if(cljs.core.not.call(null,cljs_bean.core.compatible_value_QMARK_.call(null,o,true))){
return cljs.core._conj_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.vec.call(null,self__.arr)),o);
} else {
self__.arr.push(cljs_bean.core.unwrap.call(null,o));

return tcoll__$1;
}
} else {
throw (new Error("conj! after persistent!"));
}
});

cljs_bean.core.TransientArrayVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(self__.editable_QMARK_){
self__.editable_QMARK_ = false;

return (new cljs_bean.core.ArrayVector(null,self__.prop__GT_key,self__.key__GT_prop,self__.arr,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs_bean.core.TransientArrayVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
return cljs_bean.from.cljs.core.TransientVector_assoc_BANG_.call(null,tcoll__$1,key,val,"TransientArrayVector");
});

cljs_bean.core.TransientArrayVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var self__ = this;
var tcoll__$1 = this;
if(self__.editable_QMARK_){
if(cljs.core.not.call(null,cljs_bean.core.compatible_value_QMARK_.call(null,val,true))){
return cljs.core._assoc_n_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.vec.call(null,self__.arr)),n,val);
} else {
if(((((0) <= n)) && ((n < self__.arr.length)))){
(self__.arr[n] = cljs_bean.core.unwrap.call(null,val));

return tcoll__$1;
} else {
if((n === self__.arr.length)){
return cljs.core._conj_BANG_.call(null,tcoll__$1,val);
} else {
throw (new Error(["Index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," out of bounds for TransientArrayVector of length",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.arr.length)].join('')));

}
}
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs_bean.core.TransientArrayVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(self__.editable_QMARK_){
if((self__.arr.length === (0))){
throw (new Error("Can't pop empty vector"));
} else {
self__.arr = self__.arr.slice((0),(self__.arr.length - (1)));

return tcoll__$1;
}
} else {
throw (new Error("pop! after persistent!"));
}
});

cljs_bean.core.TransientArrayVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(self__.editable_QMARK_){
return self__.arr.length;
} else {
throw (new Error("count after persistent!"));
}
});

cljs_bean.core.TransientArrayVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if(self__.editable_QMARK_){
return cljs_bean.core.__GT_val.call(null,(self__.arr[n]),self__.prop__GT_key,self__.key__GT_prop);
} else {
throw (new Error("nth after persistent!"));
}
});

cljs_bean.core.TransientArrayVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if(((((0) <= n)) && ((n < self__.arr.length)))){
return cljs.core._nth.call(null,coll__$1,n);
} else {
return not_found;
}
});

cljs_bean.core.TransientArrayVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.call(null,coll__$1,k,null);
});

cljs_bean.core.TransientArrayVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.call(null,coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs_bean.core.TransientArrayVector.prototype.call = (function() {
var G__13605 = null;
var G__13605__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k);
});
var G__13605__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13605 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__13605__2.call(this,self__,k);
case 3:
return G__13605__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__13605.cljs$core$IFn$_invoke$arity$2 = G__13605__2;
G__13605.cljs$core$IFn$_invoke$arity$3 = G__13605__3;
return G__13605;
})()
;

cljs_bean.core.TransientArrayVector.prototype.apply = (function (self__,args13604){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args13604)));
});

cljs_bean.core.TransientArrayVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k);
});

cljs_bean.core.TransientArrayVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});

cljs_bean.core.TransientArrayVector.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"editable?","editable?",-164945806,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"arr","arr",2115492975,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"prop->key","prop->key",342816281,null),new cljs.core.Symbol(null,"key->prop","key->prop",612078996,null)], null);
});

cljs_bean.core.TransientArrayVector.cljs$lang$type = true;

cljs_bean.core.TransientArrayVector.cljs$lang$ctorStr = "cljs-bean.core/TransientArrayVector";

cljs_bean.core.TransientArrayVector.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs-bean.core/TransientArrayVector");
});

/**
 * Positional factory function for cljs-bean.core/TransientArrayVector.
 */
cljs_bean.core.__GT_TransientArrayVector = (function cljs_bean$core$__GT_TransientArrayVector(editable_QMARK_,arr,prop__GT_key,key__GT_prop){
return (new cljs_bean.core.TransientArrayVector(editable_QMARK_,arr,prop__GT_key,key__GT_prop));
});


/**
* @constructor
 * @implements {cljs_bean.core.Object}
*/
cljs_bean.core.ArrayVectorIterator = (function (prop__GT_key,key__GT_prop,arr,i,cnt){
this.prop__GT_key = prop__GT_key;
this.key__GT_prop = key__GT_prop;
this.arr = arr;
this.i = i;
this.cnt = cnt;
});
cljs_bean.core.ArrayVectorIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.cnt);
});

cljs_bean.core.ArrayVectorIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = cljs_bean.core.__GT_val.call(null,(self__.arr[self__.i]),self__.prop__GT_key,self__.key__GT_prop);
self__.i = (self__.i + (1));

return ret;
});

cljs_bean.core.ArrayVectorIterator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prop->key","prop->key",342816281,null),new cljs.core.Symbol(null,"key->prop","key->prop",612078996,null),new cljs.core.Symbol(null,"arr","arr",2115492975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null)], null);
});

cljs_bean.core.ArrayVectorIterator.cljs$lang$type = true;

cljs_bean.core.ArrayVectorIterator.cljs$lang$ctorStr = "cljs-bean.core/ArrayVectorIterator";

cljs_bean.core.ArrayVectorIterator.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs-bean.core/ArrayVectorIterator");
});

/**
 * Positional factory function for cljs-bean.core/ArrayVectorIterator.
 */
cljs_bean.core.__GT_ArrayVectorIterator = (function cljs_bean$core$__GT_ArrayVectorIterator(prop__GT_key,key__GT_prop,arr,i,cnt){
return (new cljs_bean.core.ArrayVectorIterator(prop__GT_key,key__GT_prop,arr,i,cnt));
});


/**
* @constructor
 * @implements {cljs_bean.core.Object}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ASeq}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
cljs_bean.core.ArrayVectorSeq = (function (prop__GT_key,key__GT_prop,arr,i,meta){
this.prop__GT_key = prop__GT_key;
this.key__GT_prop = key__GT_prop;
this.arr = arr;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2179858686;
this.cljs$lang$protocol_mask$partition1$ = 8192;
});
cljs_bean.core.ArrayVectorSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs_bean.core.ArrayVectorSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs_bean.core.ArrayVectorSeq.prototype.indexOf = (function() {
var G__13606 = null;
var G__13606__1 = (function (x){
var self__ = this;
var coll = this;
return cljs_bean.from.cljs.core._indexOf.call(null,coll,x,(0));
});
var G__13606__2 = (function (x,start){
var self__ = this;
var coll = this;
return cljs_bean.from.cljs.core._indexOf.call(null,coll,x,start);
});
G__13606 = function(x,start){
switch(arguments.length){
case 1:
return G__13606__1.call(this,x);
case 2:
return G__13606__2.call(this,x,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13606.cljs$core$IFn$_invoke$arity$1 = G__13606__1;
G__13606.cljs$core$IFn$_invoke$arity$2 = G__13606__2;
return G__13606;
})()
;

cljs_bean.core.ArrayVectorSeq.prototype.lastIndexOf = (function() {
var G__13607 = null;
var G__13607__1 = (function (x){
var self__ = this;
var coll = this;
return cljs_bean.from.cljs.core._lastIndexOf.call(null,coll,x,cljs.core.count.call(null,coll));
});
var G__13607__2 = (function (x,start){
var self__ = this;
var coll = this;
return cljs_bean.from.cljs.core._lastIndexOf.call(null,coll,x,start);
});
G__13607 = function(x,start){
switch(arguments.length){
case 1:
return G__13607__1.call(this,x);
case 2:
return G__13607__2.call(this,x,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13607.cljs$core$IFn$_invoke$arity$1 = G__13607__1;
G__13607.cljs$core$IFn$_invoke$arity$2 = G__13607__2;
return G__13607;
})()
;

cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
var i__$1 = (n + self__.i);
if(((((0) <= i__$1)) && ((i__$1 < self__.arr.length)))){
return cljs_bean.core.__GT_val.call(null,(self__.arr[i__$1]),self__.prop__GT_key,self__.key__GT_prop);
} else {
throw (new Error("Index out of bounds"));
}
});

cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,not_found){
var self__ = this;
var ___$1 = this;
var i__$1 = (n + self__.i);
if(((((0) <= i__$1)) && ((i__$1 < self__.arr.length)))){
return cljs_bean.core.__GT_val.call(null,(self__.arr[i__$1]),self__.prop__GT_key,self__.key__GT_prop);
} else {
return not_found;
}
});

cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs_bean.core.ArrayVectorSeq(self__.prop__GT_key,self__.key__GT_prop,self__.arr,self__.i,self__.meta));
});

cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((self__.i + (1)) < self__.arr.length)){
return (new cljs_bean.core.ArrayVectorSeq(self__.prop__GT_key,self__.key__GT_prop,self__.arr,(self__.i + (1)),null));
} else {
return null;
}
});

cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var x__4037__auto__ = (0);
var y__4038__auto__ = (self__.arr.length - self__.i);
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
});

cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll.call(null,coll__$1);
});

cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs_bean.from.cljs.core.equiv_sequential.call(null,coll__$1,other);
});

cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.List.EMPTY;
});

cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs_bean.from.cljs.core.ci_reduce.call(null,coll__$1,f);
});

cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs_bean.from.cljs.core.ci_reduce.call(null,coll__$1,f,start);
});

cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs_bean.core.__GT_val.call(null,(self__.arr[self__.i]),self__.prop__GT_key,self__.key__GT_prop);
});

cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((self__.i + (1)) < self__.arr.length)){
return (new cljs_bean.core.ArrayVectorSeq(self__.prop__GT_key,self__.key__GT_prop,self__.arr,(self__.i + (1)),null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
if((new_meta === self__.meta)){
return coll__$1;
} else {
return (new cljs_bean.core.ArrayVectorSeq(self__.prop__GT_key,self__.key__GT_prop,self__.arr,self__.i,new_meta));
}
});

cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons.call(null,o,coll__$1);
});

cljs_bean.core.ArrayVectorSeq.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prop->key","prop->key",342816281,null),new cljs.core.Symbol(null,"key->prop","key->prop",612078996,null),new cljs.core.Symbol(null,"arr","arr",2115492975,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
});

cljs_bean.core.ArrayVectorSeq.cljs$lang$type = true;

cljs_bean.core.ArrayVectorSeq.cljs$lang$ctorStr = "cljs-bean.core/ArrayVectorSeq";

cljs_bean.core.ArrayVectorSeq.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs-bean.core/ArrayVectorSeq");
});

/**
 * Positional factory function for cljs-bean.core/ArrayVectorSeq.
 */
cljs_bean.core.__GT_ArrayVectorSeq = (function cljs_bean$core$__GT_ArrayVectorSeq(prop__GT_key,key__GT_prop,arr,i,meta){
return (new cljs_bean.core.ArrayVectorSeq(prop__GT_key,key__GT_prop,arr,i,meta));
});


/**
* @constructor
 * @implements {cljs_bean.core.Object}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IVector}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEditableCollection}
 * @implements {cljs.core.IFind}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
cljs_bean.core.ArrayVector = (function (meta,prop__GT_key,key__GT_prop,arr,__hash){
this.meta = meta;
this.prop__GT_key = prop__GT_key;
this.key__GT_prop = key__GT_prop;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2315150111;
this.cljs$lang$protocol_mask$partition1$ = 141316;
});
cljs_bean.core.ArrayVector.prototype.cljs$core$IFind$ = cljs.core.PROTOCOL_SENTINEL;

cljs_bean.core.ArrayVector.prototype.cljs$core$IFind$_find$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
if(((((0) <= n)) && ((n < self__.arr.length)))){
return (new cljs.core.MapEntry(n,cljs_bean.core.__GT_val.call(null,(self__.arr[n]),self__.prop__GT_key,self__.key__GT_prop),null));
} else {
return null;
}
});

cljs_bean.core.ArrayVector.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs_bean.core.ArrayVector.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs_bean.core.ArrayVector.prototype.indexOf = (function() {
var G__13609 = null;
var G__13609__1 = (function (x){
var self__ = this;
var coll = this;
return cljs_bean.from.cljs.core._indexOf.call(null,coll,x,(0));
});
var G__13609__2 = (function (x,start){
var self__ = this;
var coll = this;
return cljs_bean.from.cljs.core._indexOf.call(null,coll,x,start);
});
G__13609 = function(x,start){
switch(arguments.length){
case 1:
return G__13609__1.call(this,x);
case 2:
return G__13609__2.call(this,x,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13609.cljs$core$IFn$_invoke$arity$1 = G__13609__1;
G__13609.cljs$core$IFn$_invoke$arity$2 = G__13609__2;
return G__13609;
})()
;

cljs_bean.core.ArrayVector.prototype.lastIndexOf = (function() {
var G__13610 = null;
var G__13610__1 = (function (x){
var self__ = this;
var coll = this;
return cljs_bean.from.cljs.core._lastIndexOf.call(null,coll,x);
});
var G__13610__2 = (function (x,start){
var self__ = this;
var coll = this;
return cljs_bean.from.cljs.core._lastIndexOf.call(null,coll,x,start);
});
G__13610 = function(x,start){
switch(arguments.length){
case 1:
return G__13610__1.call(this,x);
case 2:
return G__13610__2.call(this,x,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13610.cljs$core$IFn$_invoke$arity$1 = G__13610__1;
G__13610.cljs$core$IFn$_invoke$arity$2 = G__13610__2;
return G__13610;
})()
;

cljs_bean.core.ArrayVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.call(null,coll__$1,k,null);
});

cljs_bean.core.ArrayVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
return cljs_bean.from.cljs.core.PersistentVector_lookup.call(null,coll__$1,k,not_found);
});

cljs_bean.core.ArrayVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var v__$1 = this;
var i = (0);
var init__$1 = init;
while(true){
if((i < self__.arr.length)){
var len = self__.arr.length;
var init__$2 = (function (){var j = (0);
var init__$2 = init__$1;
while(true){
if((j < len)){
var init__$3 = f.call(null,init__$2,(j + i),cljs_bean.core.__GT_val.call(null,(self__.arr[j]),self__.prop__GT_key,self__.key__GT_prop));
if(cljs.core.reduced_QMARK_.call(null,init__$3)){
return init__$3;
} else {
var G__13611 = (j + (1));
var G__13612 = init__$3;
j = G__13611;
init__$2 = G__13612;
continue;
}
} else {
return init__$2;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__$2)){
return cljs.core.deref.call(null,init__$2);
} else {
var G__13613 = (i + len);
var G__13614 = init__$2;
i = G__13613;
init__$1 = G__13614;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs_bean.core.ArrayVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
if(((((0) <= n)) && ((n < self__.arr.length)))){
return cljs_bean.core.__GT_val.call(null,(self__.arr[n]),self__.prop__GT_key,self__.key__GT_prop);
} else {
throw (new Error(["No item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," in vector of length ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.arr.length)].join('')));
}
});

cljs_bean.core.ArrayVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if(((((0) <= n)) && ((n < self__.arr.length)))){
return cljs_bean.core.__GT_val.call(null,(self__.arr[n]),self__.prop__GT_key,self__.key__GT_prop);
} else {
return not_found;
}
});

cljs_bean.core.ArrayVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs_bean.core.ArrayVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
var coll__$1 = this;
if(((((0) <= n)) && ((n < self__.arr.length)))){
if(cljs.core.not.call(null,cljs_bean.core.compatible_value_QMARK_.call(null,val,true))){
return cljs.core._assoc_n.call(null,cljs.core.vec.call(null,self__.arr),n,val);
} else {
var new_arr = cljs.core.aclone.call(null,self__.arr);
(new_arr[n] = cljs_bean.core.unwrap.call(null,val));

return (new cljs_bean.core.ArrayVector(self__.meta,self__.prop__GT_key,self__.key__GT_prop,new_arr,null));
}
} else {
if((n === self__.arr.length)){
return cljs.core._conj.call(null,coll__$1,val);
} else {
throw (new Error(["Index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," out of bounds  [0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.arr.length),"]"].join('')));

}
}
});

cljs_bean.core.ArrayVector.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs_bean.core.ArrayVectorIterator(self__.prop__GT_key,self__.key__GT_prop,self__.arr,(0),self__.arr.length));
});

cljs_bean.core.ArrayVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs_bean.core.ArrayVector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs_bean.core.ArrayVector(self__.meta,self__.prop__GT_key,self__.key__GT_prop,self__.arr,self__.__hash));
});

cljs_bean.core.ArrayVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.arr.length;
});

cljs_bean.core.ArrayVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.arr.length > (0))){
return cljs.core._nth.call(null,coll__$1,(self__.arr.length - (1)));
} else {
return null;
}
});

cljs_bean.core.ArrayVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.arr.length === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.arr.length)){
return cljs.core._empty.call(null,coll__$1);
} else {
var new_arr = cljs.core.aclone.call(null,self__.arr);
return (new cljs_bean.core.ArrayVector(self__.meta,self__.prop__GT_key,self__.key__GT_prop,new_arr.slice((0),(new_arr.length - (1))),null));

}
}
});

cljs_bean.core.ArrayVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.arr.length > (0))){
return (new cljs.core.RSeq(coll__$1,(self__.arr.length - (1)),null));
} else {
return null;
}
});

cljs_bean.core.ArrayVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

cljs_bean.core.ArrayVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs_bean.from.cljs.core.PersistentVector_equiv.call(null,coll__$1,other,cljs_bean.core.ArrayVector,self__.arr.length);
});

cljs_bean.core.ArrayVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs_bean.core.TransientArrayVector(true,cljs.core.aclone.call(null,self__.arr),self__.prop__GT_key,self__.key__GT_prop));
});

cljs_bean.core.ArrayVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs_bean.core.ArrayVector(self__.meta,self__.prop__GT_key,self__.key__GT_prop,[],null));
});

cljs_bean.core.ArrayVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var self__ = this;
var v__$1 = this;
return cljs_bean.from.cljs.core.ci_reduce.call(null,v__$1,f);
});

cljs_bean.core.ArrayVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var v__$1 = this;
return cljs_bean.from.cljs.core.ci_reduce.call(null,v__$1,f,init);
});

cljs_bean.core.ArrayVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
return cljs_bean.from.cljs.core.PersistentVector_assoc.call(null,coll__$1,k,v);
});

cljs_bean.core.ArrayVector.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs_bean.from.cljs.core.PersistentVector_contains_key_QMARK_.call(null,coll__$1,k,self__.arr.length);
});

cljs_bean.core.ArrayVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.arr.length > (0))){
return (new cljs_bean.core.ArrayVectorSeq(self__.prop__GT_key,self__.key__GT_prop,self__.arr,(0),null));
} else {
return null;
}
});

cljs_bean.core.ArrayVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
if((new_meta === self__.meta)){
return coll__$1;
} else {
return (new cljs_bean.core.ArrayVector(new_meta,self__.prop__GT_key,self__.key__GT_prop,self__.arr,self__.__hash));
}
});

cljs_bean.core.ArrayVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,cljs_bean.core.compatible_value_QMARK_.call(null,o,true))){
return cljs.core._conj.call(null,cljs.core.vec.call(null,self__.arr),o);
} else {
var new_arr = cljs.core.aclone.call(null,self__.arr);
(new_arr[new_arr.length] = cljs_bean.core.unwrap.call(null,o));

return (new cljs_bean.core.ArrayVector(self__.meta,self__.prop__GT_key,self__.key__GT_prop,new_arr,null));
}
});

cljs_bean.core.ArrayVector.prototype.call = (function() {
var G__13615 = null;
var G__13615__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._nth.call(null,coll,k);
});
var G__13615__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__13615 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__13615__2.call(this,self__,k);
case 3:
return G__13615__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__13615.cljs$core$IFn$_invoke$arity$2 = G__13615__2;
G__13615.cljs$core$IFn$_invoke$arity$3 = G__13615__3;
return G__13615;
})()
;

cljs_bean.core.ArrayVector.prototype.apply = (function (self__,args13608){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args13608)));
});

cljs_bean.core.ArrayVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return cljs.core._nth.call(null,coll,k);
});

cljs_bean.core.ArrayVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return cljs.core._nth.call(null,coll,k,not_found);
});

cljs_bean.core.ArrayVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var self__ = this;
var x__$1 = this;
if(cljs.core.vector_QMARK_.call(null,y)){
return cljs_bean.from.cljs.core.compare_indexed.call(null,x__$1,y);
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')));
}
});

cljs_bean.core.ArrayVector.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"prop->key","prop->key",342816281,null),new cljs.core.Symbol(null,"key->prop","key->prop",612078996,null),new cljs.core.Symbol(null,"arr","arr",2115492975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs_bean.core.ArrayVector.cljs$lang$type = true;

cljs_bean.core.ArrayVector.cljs$lang$ctorStr = "cljs-bean.core/ArrayVector";

cljs_bean.core.ArrayVector.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs-bean.core/ArrayVector");
});

/**
 * Positional factory function for cljs-bean.core/ArrayVector.
 */
cljs_bean.core.__GT_ArrayVector = (function cljs_bean$core$__GT_ArrayVector(meta,prop__GT_key,key__GT_prop,arr,__hash){
return (new cljs_bean.core.ArrayVector(meta,prop__GT_key,key__GT_prop,arr,__hash));
});

cljs_bean.core.default_key__GT_prop = (function cljs_bean$core$default_key__GT_prop(x){
if((x instanceof cljs.core.Keyword)){
return x.fqn;
} else {
return null;
}
});
/**
 * Takes a JavaScript object and returns a read-only implementation of the map
 *   abstraction backed by the object.
 * 
 *   By default, bean produces beans that keywordize the keys. Supply
 *   :keywordize-keys false to suppress this behavior. You can alternatively
 *   supply :prop->key and :key->prop with functions that control the mapping
 *   between properties and keys.
 * 
 *   Supply :recursive true to create a bean which recursively converts
 *   JavaScript object values to beans and JavaScript arrays into vectors.
 * 
 *   Calling (bean) produces an empty bean.
 */
cljs_bean.core.bean = (function cljs_bean$core$bean(var_args){
var G__13619 = arguments.length;
switch (G__13619) {
case 0:
return cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___13623 = arguments.length;
var i__4532__auto___13624 = (0);
while(true){
if((i__4532__auto___13624 < len__4531__auto___13623)){
args_arr__4546__auto__.push((arguments[i__4532__auto___13624]));

var G__13625 = (i__4532__auto___13624 + (1));
i__4532__auto___13624 = G__13625;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((1)),(0),null));
return cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4547__auto__);

}
});

cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new cljs_bean.core.Bean(null,({}),cljs.core.keyword,cljs_bean.core.default_key__GT_prop,false,[],(0),null));
});

cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new cljs_bean.core.Bean(null,x,cljs.core.keyword,cljs_bean.core.default_key__GT_prop,false,null,null,null));
});

cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$variadic = (function (x,opts){
var map__13620 = opts;
var map__13620__$1 = ((((!((map__13620 == null)))?(((((map__13620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13620):map__13620);
var keywordize_keys = cljs.core.get.call(null,map__13620__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252));
var prop__GT_key = cljs.core.get.call(null,map__13620__$1,new cljs.core.Keyword(null,"prop->key","prop->key",-1297715246));
var key__GT_prop = cljs.core.get.call(null,map__13620__$1,new cljs.core.Keyword(null,"key->prop","key->prop",-1028452531));
var recursive = cljs.core.get.call(null,map__13620__$1,new cljs.core.Keyword(null,"recursive","recursive",718885872));
if(keywordize_keys === false){
return (new cljs_bean.core.Bean(null,x,cljs.core.identity,cljs.core.identity,cljs.core.boolean$.call(null,recursive),null,null,null));
} else {
if(((!((prop__GT_key == null))) && (!((key__GT_prop == null))))){
return (new cljs_bean.core.Bean(null,x,prop__GT_key,key__GT_prop,cljs.core.boolean$.call(null,recursive),null,null,null));
} else {
return (new cljs_bean.core.Bean(null,x,cljs.core.keyword,cljs_bean.core.default_key__GT_prop,cljs.core.boolean$.call(null,recursive),null,null,null));

}
}
});

/** @this {Function} */
cljs_bean.core.bean.cljs$lang$applyTo = (function (seq13617){
var G__13618 = cljs.core.first.call(null,seq13617);
var seq13617__$1 = cljs.core.next.call(null,seq13617);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13618,seq13617__$1);
});

cljs_bean.core.bean.cljs$lang$maxFixedArity = (1);

/**
 * Returns true if x is a bean.
 */
cljs_bean.core.bean_QMARK_ = (function cljs_bean$core$bean_QMARK_(x){
return (x instanceof cljs_bean.core.Bean);
});
/**
 * Takes a bean and returns a JavaScript object.
 */
cljs_bean.core.object = (function cljs_bean$core$object(b){
return b.obj;
});
/**
 * Recursively converts JavaScript values to ClojureScript.
 * 
 *   JavaScript objects are converted to beans with keywords for keys.
 * 
 *   JavaScript arrays are converted to read-only implementations of the vector
 *   abstraction, backed by the supplied array.
 */
cljs_bean.core.__GT_clj = (function cljs_bean$core$__GT_clj(x){
return cljs_bean.core.__GT_val.call(null,x,cljs.core.keyword,cljs_bean.core.default_key__GT_prop);
});
/**
 * Recursively converts ClojureScript values to JavaScript.
 * 
 *   Where possible, directly returns the backing objects and arrays for values
 *   produced using ->clj and bean.
 */
cljs_bean.core.__GT_js = (function cljs_bean$core$__GT_js(x){
if((x instanceof cljs_bean.core.Bean)){
return x.obj;
} else {
if((x instanceof cljs_bean.core.ArrayVector)){
return x.arr;
} else {
return cljs.core.clj__GT_js.call(null,x,new cljs.core.Keyword(null,"keyword-fn","keyword-fn",-64566675),cljs_bean.core.default_key__GT_prop);

}
}
});
/**
 * Set empty map and array to Bean and ArrayVector. Useful for testing.
 */
cljs_bean.core.set_empty_colls_BANG_ = (function cljs_bean$core$set_empty_colls_BANG_(){
cljs.core.PersistentArrayMap.EMPTY = cljs_bean.core.__GT_clj.call(null,({}));

cljs.core.PersistentVector.EMPTY = cljs_bean.core.__GT_clj.call(null,[]);

return null;
});

//# sourceMappingURL=core.js.map
