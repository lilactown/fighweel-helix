// Compiled by ClojureScript 1.10.339 {}
goog.provide('ueaq.core');
goog.require('cljs.core');
goog.require('goog.object');

/**
 * @interface
 */
ueaq.core.IUnwrappable = function(){};

ueaq.core._unwrap = (function ueaq$core$_unwrap(o){
if(((!((o == null))) && (!((o.ueaq$core$IUnwrappable$_unwrap$arity$1 == null))))){
return o.ueaq$core$IUnwrappable$_unwrap$arity$1(o);
} else {
var x__4243__auto__ = (((o == null))?null:o);
var m__4244__auto__ = (ueaq.core._unwrap[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,o);
} else {
var m__4244__auto____$1 = (ueaq.core._unwrap["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,o);
} else {
throw cljs.core.missing_protocol.call(null,"IUnwrappable.-unwrap",o);
}
}
}
});

ueaq.core.unkeywordize = (function ueaq$core$unkeywordize(k){
var temp__5455__auto__ = cljs.core.namespace.call(null,k);
if(cljs.core.truth_(temp__5455__auto__)){
var ns = temp__5455__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))].join('');
} else {
return cljs.core.name.call(null,k);
}
});
ueaq.core.unwrappable_QMARK_ = (function ueaq$core$unwrappable_QMARK_(p){
if(!((p == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p.ueaq$core$IUnwrappable$)))){
return true;
} else {
if((!p.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,ueaq.core.IUnwrappable,p);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,ueaq.core.IUnwrappable,p);
}
});
ueaq.core.unwrap = (function ueaq$core$unwrap(p){
if(((!((p == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === p.ueaq$core$IUnwrappable$))))?true:(((!p.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,ueaq.core.IUnwrappable,p):false)):cljs.core.native_satisfies_QMARK_.call(null,ueaq.core.IUnwrappable,p))){
return ueaq.core._unwrap.call(null,p);
} else {
throw (new Error("Does not implement IUnwrappable"));
}
});
ueaq.core.shallow_clj__GT_js = (function ueaq$core$shallow_clj__GT_js(m){
var entries = cljs.core.seq.call(null,m);
var o = ({});
while(true){
if((entries == null)){
return o;
} else {
var entry = cljs.core.first.call(null,entries);
var k = cljs.core.key.call(null,entry);
var v = cljs.core.val.call(null,entry);
var G__13631 = cljs.core.next.call(null,entries);
var G__13632 = (function (){var G__13630 = o;
goog.object.set(G__13630,ueaq.core.unkeywordize.call(null,k),v);

return G__13630;
})();
entries = G__13631;
o = G__13632;
continue;
}
break;
}
});
ueaq.core.getter = (function ueaq$core$getter(o,prop){
var handler = this;
var opts = handler.opts;
var context = handler.context;
var map__13633 = opts;
var map__13633__$1 = ((((!((map__13633 == null)))?(((((map__13633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13633):map__13633);
var recursive_QMARK_ = cljs.core.get.call(null,map__13633__$1,new cljs.core.Keyword(null,"recursive?","recursive?",1340075244));
var prop__GT_key = cljs.core.get.call(null,map__13633__$1,new cljs.core.Keyword(null,"prop->key","prop->key",-1297715246));
var v = cljs.core.get.call(null,o,prop__GT_key.call(null,prop),goog.object.get(context,prop));
if(cljs.core.truth_((function (){var and__3938__auto__ = recursive_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.associative_QMARK_.call(null,v);
} else {
return and__3938__auto__;
}
})())){
return ueaq.core.ueaq.call(null,v,opts);
} else {
return v;
}
});
ueaq.core.has = (function ueaq$core$has(o,prop){
var handler = this;
var map__13635 = handler.opts;
var map__13635__$1 = ((((!((map__13635 == null)))?(((((map__13635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13635):map__13635);
var prop__GT_key = cljs.core.get.call(null,map__13635__$1,new cljs.core.Keyword(null,"prop->key","prop->key",-1297715246));
return cljs.core.contains_QMARK_.call(null,o,prop__GT_key.call(null,prop));
});
ueaq.core.own_keys = (function ueaq$core$own_keys(o){
var handler = this;
var map__13637 = handler.opts;
var map__13637__$1 = ((((!((map__13637 == null)))?(((((map__13637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13637):map__13637);
var key__GT_prop = cljs.core.get.call(null,map__13637__$1,new cljs.core.Keyword(null,"key->prop","key->prop",-1028452531));
return cljs.core.to_array.call(null,cljs.core.map.call(null,key__GT_prop,cljs.core.keys.call(null,o)));
});
ueaq.core.enumerate = (function ueaq$core$enumerate(o){
var handler = this;
var map__13639 = handler.opts;
var map__13639__$1 = ((((!((map__13639 == null)))?(((((map__13639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13639):map__13639);
var key__GT_prop = cljs.core.get.call(null,map__13639__$1,new cljs.core.Keyword(null,"key->prop","key->prop",-1028452531));
return cljs.core.map.call(null,key__GT_prop,cljs.core.keys.call(null,o));
});
ueaq.core.get_own_property_descriptor = (function ueaq$core$get_own_property_descriptor(o,prop){
var handler = this;
var map__13641 = handler.opts;
var map__13641__$1 = ((((!((map__13641 == null)))?(((((map__13641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13641):map__13641);
var prop__GT_key = cljs.core.get.call(null,map__13641__$1,new cljs.core.Keyword(null,"prop->key","prop->key",-1297715246));
var k = prop__GT_key.call(null,prop);
if(cljs.core.contains_QMARK_.call(null,o,k)){
return ({"enumerable": true, "configurable": true, "writable": false, "value": cljs.core.get.call(null,o,k)});
} else {
return undefined;
}
});
ueaq.core.get_prototype_of = (function ueaq$core$get_prototype_of(_){
var handler = this;
return handler.context;
});
ueaq.core.setter = (function ueaq$core$setter(_,k,v){
var handler = this;
var context = handler.context;
return goog.object.set(context,k,v);
});
ueaq.core.ueaq = (function ueaq$core$ueaq(var_args){
var G__13644 = arguments.length;
switch (G__13644) {
case 1:
return ueaq.core.ueaq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ueaq.core.ueaq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ueaq.core.ueaq.cljs$core$IFn$_invoke$arity$1 = (function (o){
return ueaq.core.ueaq.call(null,o,cljs.core.PersistentArrayMap.EMPTY);
});

ueaq.core.ueaq.cljs$core$IFn$_invoke$arity$2 = (function (o,p__13645){
var map__13646 = p__13645;
var map__13646__$1 = ((((!((map__13646 == null)))?(((((map__13646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13646):map__13646);
var opts = map__13646__$1;
var recursive_QMARK_ = cljs.core.get.call(null,map__13646__$1,new cljs.core.Keyword(null,"recursive?","recursive?",1340075244),false);
var prop__GT_key = cljs.core.get.call(null,map__13646__$1,new cljs.core.Keyword(null,"prop->key","prop->key",-1297715246),cljs.core.keyword);
var key__GT_prop = cljs.core.get.call(null,map__13646__$1,new cljs.core.Keyword(null,"key->prop","key->prop",-1028452531),ueaq.core.unkeywordize);
var context = (function (){var x13648 = ({});
x13648.ueaq$core$IUnwrappable$ = cljs.core.PROTOCOL_SENTINEL;

x13648.ueaq$core$IUnwrappable$_unwrap$arity$1 = ((function (x13648,map__13646,map__13646__$1,opts,recursive_QMARK_,prop__GT_key,key__GT_prop){
return (function (_){
var ___$1 = this;
return o;
});})(x13648,map__13646,map__13646__$1,opts,recursive_QMARK_,prop__GT_key,key__GT_prop))
;

return x13648;
})();
var handler = ({"getOwnPropertyDescriptor": ueaq.core.get_own_property_descriptor, "get": ueaq.core.getter, "ownKeys": ueaq.core.own_keys, "getPrototypeOf": ueaq.core.get_prototype_of, "opts": cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"prop->key","prop->key",-1297715246),prop__GT_key,new cljs.core.Keyword(null,"key->prop","key->prop",-1028452531),key__GT_prop), "has": ueaq.core.has, "context": context, "set": ueaq.core.setter, "enumerate": ueaq.core.enumerate});
return (new Proxy(o,handler));
});

ueaq.core.ueaq.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map
