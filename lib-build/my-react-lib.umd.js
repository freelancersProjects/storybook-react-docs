(function(ne,ue){typeof exports=="object"&&typeof module<"u"?ue(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],ue):(ne=typeof globalThis<"u"?globalThis:ne||self,ue(ne.MyReactLib={},ne.React))})(this,function(ne,ue){"use strict";function pr(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Re={exports:{}},be={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var We;function yr(){if(We)return be;We=1;var u=ue,D=Symbol.for("react.element"),I=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,C=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function w(d,b,S){var c,E={},k=null,F=null;S!==void 0&&(k=""+S),b.key!==void 0&&(k=""+b.key),b.ref!==void 0&&(F=b.ref);for(c in b)l.call(b,c)&&!f.hasOwnProperty(c)&&(E[c]=b[c]);if(d&&d.defaultProps)for(c in b=d.defaultProps,b)E[c]===void 0&&(E[c]=b[c]);return{$$typeof:D,type:d,key:k,ref:F,props:E,_owner:C.current}}return be.Fragment=I,be.jsx=w,be.jsxs=w,be}var he={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qe;function br(){return qe||(qe=1,process.env.NODE_ENV!=="production"&&function(){var u=ue,D=Symbol.for("react.element"),I=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),d=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),c=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),F=Symbol.for("react.offscreen"),z=Symbol.iterator,M="@@iterator";function N(e){if(e===null||typeof e!="object")return null;var r=z&&e[z]||e[M];return typeof r=="function"?r:null}var U=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function Y(e){{for(var r=arguments.length,a=new Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];V("error",e,a)}}function V(e,r,a){{var s=U.ReactDebugCurrentFrame,A=s.getStackAddendum();A!==""&&(r+="%s",a=a.concat([A]));var $=a.map(function(O){return String(O)});$.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,$)}}var q=!1,o=!1,re=!1,me=!1,Ee=!1,fe;fe=Symbol.for("react.module.reference");function ge(e){return!!(typeof e=="string"||typeof e=="function"||e===l||e===f||Ee||e===C||e===S||e===c||me||e===F||q||o||re||typeof e=="object"&&e!==null&&(e.$$typeof===k||e.$$typeof===E||e.$$typeof===w||e.$$typeof===d||e.$$typeof===b||e.$$typeof===fe||e.getModuleId!==void 0))}function ce(e,r,a){var s=e.displayName;if(s)return s;var A=r.displayName||r.name||"";return A!==""?a+"("+A+")":a}function le(e){return e.displayName||"Context"}function H(e){if(e==null)return null;if(typeof e.tag=="number"&&Y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case l:return"Fragment";case I:return"Portal";case f:return"Profiler";case C:return"StrictMode";case S:return"Suspense";case c:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case d:var r=e;return le(r)+".Consumer";case w:var a=e;return le(a._context)+".Provider";case b:return ce(e,e.render,"ForwardRef");case E:var s=e.displayName||null;return s!==null?s:H(e.type)||"Memo";case k:{var A=e,$=A._payload,O=A._init;try{return H(O($))}catch{return null}}}return null}var K=Object.assign,te=0,X,ee,ae,de,t,i,m;function h(){}h.__reactDisabledLog=!0;function v(){{if(te===0){X=console.log,ee=console.info,ae=console.warn,de=console.error,t=console.group,i=console.groupCollapsed,m=console.groupEnd;var e={configurable:!0,enumerable:!0,value:h,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}te++}}function _(){{if(te--,te===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:K({},e,{value:X}),info:K({},e,{value:ee}),warn:K({},e,{value:ae}),error:K({},e,{value:de}),group:K({},e,{value:t}),groupCollapsed:K({},e,{value:i}),groupEnd:K({},e,{value:m})})}te<0&&Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var p=U.ReactCurrentDispatcher,y;function g(e,r,a){{if(y===void 0)try{throw Error()}catch(A){var s=A.stack.trim().match(/\n( *(at )?)/);y=s&&s[1]||""}return`
`+y+e}}var P=!1,T;{var B=typeof WeakMap=="function"?WeakMap:Map;T=new B}function n(e,r){if(!e||P)return"";{var a=T.get(e);if(a!==void 0)return a}var s;P=!0;var A=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var $;$=p.current,p.current=null,v();try{if(r){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(G){s=G}Reflect.construct(e,[],O)}else{try{O.call()}catch(G){s=G}e.call(O.prototype)}}else{try{throw Error()}catch(G){s=G}e()}}catch(G){if(G&&s&&typeof G.stack=="string"){for(var R=G.stack.split(`
`),J=s.stack.split(`
`),W=R.length-1,L=J.length-1;W>=1&&L>=0&&R[W]!==J[L];)L--;for(;W>=1&&L>=0;W--,L--)if(R[W]!==J[L]){if(W!==1||L!==1)do if(W--,L--,L<0||R[W]!==J[L]){var Q=`
`+R[W].replace(" at new "," at ");return e.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",e.displayName)),typeof e=="function"&&T.set(e,Q),Q}while(W>=1&&L>=0);break}}}finally{P=!1,p.current=$,_(),Error.prepareStackTrace=A}var ye=e?e.displayName||e.name:"",ie=ye?g(ye):"";return typeof e=="function"&&T.set(e,ie),ie}function Z(e,r,a){return n(e,!1)}function ve(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function oe(e,r,a){if(e==null)return"";if(typeof e=="function")return n(e,ve(e));if(typeof e=="string")return g(e);switch(e){case S:return g("Suspense");case c:return g("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case b:return Z(e.render);case E:return oe(e.type,r,a);case k:{var s=e,A=s._payload,$=s._init;try{return oe($(A),r,a)}catch{}}}return""}var Te=Object.prototype.hasOwnProperty,er={},rr=U.ReactDebugCurrentFrame;function Se(e){if(e){var r=e._owner,a=oe(e.type,e._source,r?r.type:null);rr.setExtraStackFrame(a)}else rr.setExtraStackFrame(null)}function Cr(e,r,a,s,A){{var $=Function.call.bind(Te);for(var O in e)if($(e,O)){var R=void 0;try{if(typeof e[O]!="function"){var J=Error((s||"React class")+": "+a+" type `"+O+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[O]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw J.name="Invariant Violation",J}R=e[O](r,O,s,a,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(W){R=W}R&&!(R instanceof Error)&&(Se(A),Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",s||"React class",a,O,typeof R),Se(null)),R instanceof Error&&!(R.message in er)&&(er[R.message]=!0,Se(A),Y("Failed %s type: %s",a,R.message),Se(null))}}}var wr=Array.isArray;function $e(e){return wr(e)}function xr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,a=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return a}}function jr(e){try{return tr(e),!1}catch{return!0}}function tr(e){return""+e}function nr(e){if(jr(e))return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",xr(e)),tr(e)}var ar=U.ReactCurrentOwner,Ar={key:!0,ref:!0,__self:!0,__source:!0},or,ir;function Ir(e){if(Te.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function kr(e){if(Te.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function $r(e,r){typeof e.ref=="string"&&ar.current}function Dr(e,r){{var a=function(){or||(or=!0,Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};a.isReactWarning=!0,Object.defineProperty(e,"key",{get:a,configurable:!0})}}function Mr(e,r){{var a=function(){ir||(ir=!0,Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};a.isReactWarning=!0,Object.defineProperty(e,"ref",{get:a,configurable:!0})}}var Fr=function(e,r,a,s,A,$,O){var R={$$typeof:D,type:e,key:r,ref:a,props:O,_owner:$};return R._store={},Object.defineProperty(R._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(R,"_self",{configurable:!1,enumerable:!1,writable:!1,value:s}),Object.defineProperty(R,"_source",{configurable:!1,enumerable:!1,writable:!1,value:A}),Object.freeze&&(Object.freeze(R.props),Object.freeze(R)),R};function Yr(e,r,a,s,A){{var $,O={},R=null,J=null;a!==void 0&&(nr(a),R=""+a),kr(r)&&(nr(r.key),R=""+r.key),Ir(r)&&(J=r.ref,$r(r,A));for($ in r)Te.call(r,$)&&!Ar.hasOwnProperty($)&&(O[$]=r[$]);if(e&&e.defaultProps){var W=e.defaultProps;for($ in W)O[$]===void 0&&(O[$]=W[$])}if(R||J){var L=typeof e=="function"?e.displayName||e.name||"Unknown":e;R&&Dr(O,L),J&&Mr(O,L)}return Fr(e,R,J,A,s,ar.current,O)}}var De=U.ReactCurrentOwner,ur=U.ReactDebugCurrentFrame;function pe(e){if(e){var r=e._owner,a=oe(e.type,e._source,r?r.type:null);ur.setExtraStackFrame(a)}else ur.setExtraStackFrame(null)}var Me;Me=!1;function Fe(e){return typeof e=="object"&&e!==null&&e.$$typeof===D}function sr(){{if(De.current){var e=H(De.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Wr(e){return""}var fr={};function qr(e){{var r=sr();if(!r){var a=typeof e=="string"?e:e.displayName||e.name;a&&(r=`

Check the top-level render call using <`+a+">.")}return r}}function cr(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var a=qr(r);if(fr[a])return;fr[a]=!0;var s="";e&&e._owner&&e._owner!==De.current&&(s=" It was passed a child from "+H(e._owner.type)+"."),pe(e),Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',a,s),pe(null)}}function lr(e,r){{if(typeof e!="object")return;if($e(e))for(var a=0;a<e.length;a++){var s=e[a];Fe(s)&&cr(s,r)}else if(Fe(e))e._store&&(e._store.validated=!0);else if(e){var A=N(e);if(typeof A=="function"&&A!==e.entries)for(var $=A.call(e),O;!(O=$.next()).done;)Fe(O.value)&&cr(O.value,r)}}}function Lr(e){{var r=e.type;if(r==null||typeof r=="string")return;var a;if(typeof r=="function")a=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===b||r.$$typeof===E))a=r.propTypes;else return;if(a){var s=H(r);Cr(a,e.props,"prop",s,e)}else if(r.PropTypes!==void 0&&!Me){Me=!0;var A=H(r);Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",A||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Ur(e){{for(var r=Object.keys(e.props),a=0;a<r.length;a++){var s=r[a];if(s!=="children"&&s!=="key"){pe(e),Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",s),pe(null);break}}e.ref!==null&&(pe(e),Y("Invalid attribute `ref` supplied to `React.Fragment`."),pe(null))}}var dr={};function vr(e,r,a,s,A,$){{var O=ge(e);if(!O){var R="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(R+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var J=Wr();J?R+=J:R+=sr();var W;e===null?W="null":$e(e)?W="array":e!==void 0&&e.$$typeof===D?(W="<"+(H(e.type)||"Unknown")+" />",R=" Did you accidentally export a JSX literal instead of a component?"):W=typeof e,Y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",W,R)}var L=Yr(e,r,a,A,$);if(L==null)return L;if(O){var Q=r.children;if(Q!==void 0)if(s)if($e(Q)){for(var ye=0;ye<Q.length;ye++)lr(Q[ye],e);Object.freeze&&Object.freeze(Q)}else Y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else lr(Q,e)}if(Te.call(r,"key")){var ie=H(e),G=Object.keys(r).filter(function(Kr){return Kr!=="key"}),Ye=G.length>0?"{key: someKey, "+G.join(": ..., ")+": ...}":"{key: someKey}";if(!dr[ie+Ye]){var Jr=G.length>0?"{"+G.join(": ..., ")+": ...}":"{}";Y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Ye,ie,Jr,ie),dr[ie+Ye]=!0}}return e===l?Ur(L):Lr(L),L}}function Vr(e,r,a){return vr(e,r,a,!0)}function Nr(e,r,a){return vr(e,r,a,!1)}var zr=Nr,Br=Vr;he.Fragment=l,he.jsx=zr,he.jsxs=Br}()),he}var Le;function hr(){return Le||(Le=1,process.env.NODE_ENV==="production"?Re.exports=yr():Re.exports=br()),Re.exports}var mr=hr(),_e={exports:{}},Oe={exports:{}},x={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ue;function Er(){if(Ue)return x;Ue=1;var u=typeof Symbol=="function"&&Symbol.for,D=u?Symbol.for("react.element"):60103,I=u?Symbol.for("react.portal"):60106,l=u?Symbol.for("react.fragment"):60107,C=u?Symbol.for("react.strict_mode"):60108,f=u?Symbol.for("react.profiler"):60114,w=u?Symbol.for("react.provider"):60109,d=u?Symbol.for("react.context"):60110,b=u?Symbol.for("react.async_mode"):60111,S=u?Symbol.for("react.concurrent_mode"):60111,c=u?Symbol.for("react.forward_ref"):60112,E=u?Symbol.for("react.suspense"):60113,k=u?Symbol.for("react.suspense_list"):60120,F=u?Symbol.for("react.memo"):60115,z=u?Symbol.for("react.lazy"):60116,M=u?Symbol.for("react.block"):60121,N=u?Symbol.for("react.fundamental"):60117,U=u?Symbol.for("react.responder"):60118,Y=u?Symbol.for("react.scope"):60119;function V(o){if(typeof o=="object"&&o!==null){var re=o.$$typeof;switch(re){case D:switch(o=o.type,o){case b:case S:case l:case f:case C:case E:return o;default:switch(o=o&&o.$$typeof,o){case d:case c:case z:case F:case w:return o;default:return re}}case I:return re}}}function q(o){return V(o)===S}return x.AsyncMode=b,x.ConcurrentMode=S,x.ContextConsumer=d,x.ContextProvider=w,x.Element=D,x.ForwardRef=c,x.Fragment=l,x.Lazy=z,x.Memo=F,x.Portal=I,x.Profiler=f,x.StrictMode=C,x.Suspense=E,x.isAsyncMode=function(o){return q(o)||V(o)===b},x.isConcurrentMode=q,x.isContextConsumer=function(o){return V(o)===d},x.isContextProvider=function(o){return V(o)===w},x.isElement=function(o){return typeof o=="object"&&o!==null&&o.$$typeof===D},x.isForwardRef=function(o){return V(o)===c},x.isFragment=function(o){return V(o)===l},x.isLazy=function(o){return V(o)===z},x.isMemo=function(o){return V(o)===F},x.isPortal=function(o){return V(o)===I},x.isProfiler=function(o){return V(o)===f},x.isStrictMode=function(o){return V(o)===C},x.isSuspense=function(o){return V(o)===E},x.isValidElementType=function(o){return typeof o=="string"||typeof o=="function"||o===l||o===S||o===f||o===C||o===E||o===k||typeof o=="object"&&o!==null&&(o.$$typeof===z||o.$$typeof===F||o.$$typeof===w||o.$$typeof===d||o.$$typeof===c||o.$$typeof===N||o.$$typeof===U||o.$$typeof===Y||o.$$typeof===M)},x.typeOf=V,x}var j={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ve;function gr(){return Ve||(Ve=1,process.env.NODE_ENV!=="production"&&function(){var u=typeof Symbol=="function"&&Symbol.for,D=u?Symbol.for("react.element"):60103,I=u?Symbol.for("react.portal"):60106,l=u?Symbol.for("react.fragment"):60107,C=u?Symbol.for("react.strict_mode"):60108,f=u?Symbol.for("react.profiler"):60114,w=u?Symbol.for("react.provider"):60109,d=u?Symbol.for("react.context"):60110,b=u?Symbol.for("react.async_mode"):60111,S=u?Symbol.for("react.concurrent_mode"):60111,c=u?Symbol.for("react.forward_ref"):60112,E=u?Symbol.for("react.suspense"):60113,k=u?Symbol.for("react.suspense_list"):60120,F=u?Symbol.for("react.memo"):60115,z=u?Symbol.for("react.lazy"):60116,M=u?Symbol.for("react.block"):60121,N=u?Symbol.for("react.fundamental"):60117,U=u?Symbol.for("react.responder"):60118,Y=u?Symbol.for("react.scope"):60119;function V(n){return typeof n=="string"||typeof n=="function"||n===l||n===S||n===f||n===C||n===E||n===k||typeof n=="object"&&n!==null&&(n.$$typeof===z||n.$$typeof===F||n.$$typeof===w||n.$$typeof===d||n.$$typeof===c||n.$$typeof===N||n.$$typeof===U||n.$$typeof===Y||n.$$typeof===M)}function q(n){if(typeof n=="object"&&n!==null){var Z=n.$$typeof;switch(Z){case D:var ve=n.type;switch(ve){case b:case S:case l:case f:case C:case E:return ve;default:var oe=ve&&ve.$$typeof;switch(oe){case d:case c:case z:case F:case w:return oe;default:return Z}}case I:return Z}}}var o=b,re=S,me=d,Ee=w,fe=D,ge=c,ce=l,le=z,H=F,K=I,te=f,X=C,ee=E,ae=!1;function de(n){return ae||(ae=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),t(n)||q(n)===b}function t(n){return q(n)===S}function i(n){return q(n)===d}function m(n){return q(n)===w}function h(n){return typeof n=="object"&&n!==null&&n.$$typeof===D}function v(n){return q(n)===c}function _(n){return q(n)===l}function p(n){return q(n)===z}function y(n){return q(n)===F}function g(n){return q(n)===I}function P(n){return q(n)===f}function T(n){return q(n)===C}function B(n){return q(n)===E}j.AsyncMode=o,j.ConcurrentMode=re,j.ContextConsumer=me,j.ContextProvider=Ee,j.Element=fe,j.ForwardRef=ge,j.Fragment=ce,j.Lazy=le,j.Memo=H,j.Portal=K,j.Profiler=te,j.StrictMode=X,j.Suspense=ee,j.isAsyncMode=de,j.isConcurrentMode=t,j.isContextConsumer=i,j.isContextProvider=m,j.isElement=h,j.isForwardRef=v,j.isFragment=_,j.isLazy=p,j.isMemo=y,j.isPortal=g,j.isProfiler=P,j.isStrictMode=T,j.isSuspense=B,j.isValidElementType=V,j.typeOf=q}()),j}var Ne;function ze(){return Ne||(Ne=1,process.env.NODE_ENV==="production"?Oe.exports=Er():Oe.exports=gr()),Oe.exports}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Pe,Be;function Tr(){if(Be)return Pe;Be=1;var u=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;function l(f){if(f==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(f)}function C(){try{if(!Object.assign)return!1;var f=new String("abc");if(f[5]="de",Object.getOwnPropertyNames(f)[0]==="5")return!1;for(var w={},d=0;d<10;d++)w["_"+String.fromCharCode(d)]=d;var b=Object.getOwnPropertyNames(w).map(function(c){return w[c]});if(b.join("")!=="0123456789")return!1;var S={};return"abcdefghijklmnopqrst".split("").forEach(function(c){S[c]=c}),Object.keys(Object.assign({},S)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return Pe=C()?Object.assign:function(f,w){for(var d,b=l(f),S,c=1;c<arguments.length;c++){d=Object(arguments[c]);for(var E in d)D.call(d,E)&&(b[E]=d[E]);if(u){S=u(d);for(var k=0;k<S.length;k++)I.call(d,S[k])&&(b[S[k]]=d[S[k]])}}return b},Pe}var Ce,Je;function we(){if(Je)return Ce;Je=1;var u="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ce=u,Ce}var xe,Ke;function Ge(){return Ke||(Ke=1,xe=Function.call.bind(Object.prototype.hasOwnProperty)),xe}var je,Xe;function Rr(){if(Xe)return je;Xe=1;var u=function(){};if(process.env.NODE_ENV!=="production"){var D=we(),I={},l=Ge();u=function(f){var w="Warning: "+f;typeof console<"u"&&console.error(w);try{throw new Error(w)}catch{}}}function C(f,w,d,b,S){if(process.env.NODE_ENV!=="production"){for(var c in f)if(l(f,c)){var E;try{if(typeof f[c]!="function"){var k=Error((b||"React class")+": "+d+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof f[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw k.name="Invariant Violation",k}E=f[c](w,c,b,d,null,D)}catch(z){E=z}if(E&&!(E instanceof Error)&&u((b||"React class")+": type specification of "+d+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof E+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),E instanceof Error&&!(E.message in I)){I[E.message]=!0;var F=S?S():"";u("Failed "+d+" type: "+E.message+(F??""))}}}}return C.resetWarningCache=function(){process.env.NODE_ENV!=="production"&&(I={})},je=C,je}var Ae,He;function _r(){if(He)return Ae;He=1;var u=ze(),D=Tr(),I=we(),l=Ge(),C=Rr(),f=function(){};process.env.NODE_ENV!=="production"&&(f=function(d){var b="Warning: "+d;typeof console<"u"&&console.error(b);try{throw new Error(b)}catch{}});function w(){return null}return Ae=function(d,b){var S=typeof Symbol=="function"&&Symbol.iterator,c="@@iterator";function E(t){var i=t&&(S&&t[S]||t[c]);if(typeof i=="function")return i}var k="<<anonymous>>",F={array:U("array"),bigint:U("bigint"),bool:U("boolean"),func:U("function"),number:U("number"),object:U("object"),string:U("string"),symbol:U("symbol"),any:Y(),arrayOf:V,element:q(),elementType:o(),instanceOf:re,node:ge(),objectOf:Ee,oneOf:me,oneOfType:fe,shape:le,exact:H};function z(t,i){return t===i?t!==0||1/t===1/i:t!==t&&i!==i}function M(t,i){this.message=t,this.data=i&&typeof i=="object"?i:{},this.stack=""}M.prototype=Error.prototype;function N(t){if(process.env.NODE_ENV!=="production")var i={},m=0;function h(_,p,y,g,P,T,B){if(g=g||k,T=T||y,B!==I){if(b){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}else if(process.env.NODE_ENV!=="production"&&typeof console<"u"){var Z=g+":"+y;!i[Z]&&m<3&&(f("You are manually calling a React.PropTypes validation function for the `"+T+"` prop on `"+g+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),i[Z]=!0,m++)}}return p[y]==null?_?p[y]===null?new M("The "+P+" `"+T+"` is marked as required "+("in `"+g+"`, but its value is `null`.")):new M("The "+P+" `"+T+"` is marked as required in "+("`"+g+"`, but its value is `undefined`.")):null:t(p,y,g,P,T)}var v=h.bind(null,!1);return v.isRequired=h.bind(null,!0),v}function U(t){function i(m,h,v,_,p,y){var g=m[h],P=X(g);if(P!==t){var T=ee(g);return new M("Invalid "+_+" `"+p+"` of type "+("`"+T+"` supplied to `"+v+"`, expected ")+("`"+t+"`."),{expectedType:t})}return null}return N(i)}function Y(){return N(w)}function V(t){function i(m,h,v,_,p){if(typeof t!="function")return new M("Property `"+p+"` of component `"+v+"` has invalid PropType notation inside arrayOf.");var y=m[h];if(!Array.isArray(y)){var g=X(y);return new M("Invalid "+_+" `"+p+"` of type "+("`"+g+"` supplied to `"+v+"`, expected an array."))}for(var P=0;P<y.length;P++){var T=t(y,P,v,_,p+"["+P+"]",I);if(T instanceof Error)return T}return null}return N(i)}function q(){function t(i,m,h,v,_){var p=i[m];if(!d(p)){var y=X(p);return new M("Invalid "+v+" `"+_+"` of type "+("`"+y+"` supplied to `"+h+"`, expected a single ReactElement."))}return null}return N(t)}function o(){function t(i,m,h,v,_){var p=i[m];if(!u.isValidElementType(p)){var y=X(p);return new M("Invalid "+v+" `"+_+"` of type "+("`"+y+"` supplied to `"+h+"`, expected a single ReactElement type."))}return null}return N(t)}function re(t){function i(m,h,v,_,p){if(!(m[h]instanceof t)){var y=t.name||k,g=de(m[h]);return new M("Invalid "+_+" `"+p+"` of type "+("`"+g+"` supplied to `"+v+"`, expected ")+("instance of `"+y+"`."))}return null}return N(i)}function me(t){if(!Array.isArray(t))return process.env.NODE_ENV!=="production"&&(arguments.length>1?f("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):f("Invalid argument supplied to oneOf, expected an array.")),w;function i(m,h,v,_,p){for(var y=m[h],g=0;g<t.length;g++)if(z(y,t[g]))return null;var P=JSON.stringify(t,function(B,n){var Z=ee(n);return Z==="symbol"?String(n):n});return new M("Invalid "+_+" `"+p+"` of value `"+String(y)+"` "+("supplied to `"+v+"`, expected one of "+P+"."))}return N(i)}function Ee(t){function i(m,h,v,_,p){if(typeof t!="function")return new M("Property `"+p+"` of component `"+v+"` has invalid PropType notation inside objectOf.");var y=m[h],g=X(y);if(g!=="object")return new M("Invalid "+_+" `"+p+"` of type "+("`"+g+"` supplied to `"+v+"`, expected an object."));for(var P in y)if(l(y,P)){var T=t(y,P,v,_,p+"."+P,I);if(T instanceof Error)return T}return null}return N(i)}function fe(t){if(!Array.isArray(t))return process.env.NODE_ENV!=="production"&&f("Invalid argument supplied to oneOfType, expected an instance of array."),w;for(var i=0;i<t.length;i++){var m=t[i];if(typeof m!="function")return f("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+ae(m)+" at index "+i+"."),w}function h(v,_,p,y,g){for(var P=[],T=0;T<t.length;T++){var B=t[T],n=B(v,_,p,y,g,I);if(n==null)return null;n.data&&l(n.data,"expectedType")&&P.push(n.data.expectedType)}var Z=P.length>0?", expected one of type ["+P.join(", ")+"]":"";return new M("Invalid "+y+" `"+g+"` supplied to "+("`"+p+"`"+Z+"."))}return N(h)}function ge(){function t(i,m,h,v,_){return K(i[m])?null:new M("Invalid "+v+" `"+_+"` supplied to "+("`"+h+"`, expected a ReactNode."))}return N(t)}function ce(t,i,m,h,v){return new M((t||"React class")+": "+i+" type `"+m+"."+h+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+v+"`.")}function le(t){function i(m,h,v,_,p){var y=m[h],g=X(y);if(g!=="object")return new M("Invalid "+_+" `"+p+"` of type `"+g+"` "+("supplied to `"+v+"`, expected `object`."));for(var P in t){var T=t[P];if(typeof T!="function")return ce(v,_,p,P,ee(T));var B=T(y,P,v,_,p+"."+P,I);if(B)return B}return null}return N(i)}function H(t){function i(m,h,v,_,p){var y=m[h],g=X(y);if(g!=="object")return new M("Invalid "+_+" `"+p+"` of type `"+g+"` "+("supplied to `"+v+"`, expected `object`."));var P=D({},m[h],t);for(var T in P){var B=t[T];if(l(t,T)&&typeof B!="function")return ce(v,_,p,T,ee(B));if(!B)return new M("Invalid "+_+" `"+p+"` key `"+T+"` supplied to `"+v+"`.\nBad object: "+JSON.stringify(m[h],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(t),null,"  "));var n=B(y,T,v,_,p+"."+T,I);if(n)return n}return null}return N(i)}function K(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(K);if(t===null||d(t))return!0;var i=E(t);if(i){var m=i.call(t),h;if(i!==t.entries){for(;!(h=m.next()).done;)if(!K(h.value))return!1}else for(;!(h=m.next()).done;){var v=h.value;if(v&&!K(v[1]))return!1}}else return!1;return!0;default:return!1}}function te(t,i){return t==="symbol"?!0:i?i["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&i instanceof Symbol:!1}function X(t){var i=typeof t;return Array.isArray(t)?"array":t instanceof RegExp?"object":te(i,t)?"symbol":i}function ee(t){if(typeof t>"u"||t===null)return""+t;var i=X(t);if(i==="object"){if(t instanceof Date)return"date";if(t instanceof RegExp)return"regexp"}return i}function ae(t){var i=ee(t);switch(i){case"array":case"object":return"an "+i;case"boolean":case"date":case"regexp":return"a "+i;default:return i}}function de(t){return!t.constructor||!t.constructor.name?k:t.constructor.name}return F.checkPropTypes=C,F.resetWarningCache=C.resetWarningCache,F.PropTypes=F,F},Ae}var Ie,Ze;function Or(){if(Ze)return Ie;Ze=1;var u=we();function D(){}function I(){}return I.resetWarningCache=D,Ie=function(){function l(w,d,b,S,c,E){if(E!==u){var k=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw k.name="Invariant Violation",k}}l.isRequired=l;function C(){return l}var f={array:l,bigint:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:C,element:l,elementType:l,instanceOf:C,node:l,objectOf:C,oneOf:C,oneOfType:C,shape:C,exact:C,checkPropTypes:I,resetWarningCache:D};return f.PropTypes=f,f},Ie}var Qe;function Sr(){if(Qe)return _e.exports;if(Qe=1,process.env.NODE_ENV!=="production"){var u=ze(),D=!0;_e.exports=_r()(u.isElement,D)}else _e.exports=Or()();return _e.exports}var Pr=Sr();const se=pr(Pr),ke=({label:u,onClick:D,type:I="button",disabled:l=!1,theme:C="primary",className:f=""})=>mr.jsx("button",{type:I,onClick:D,disabled:l,className:`btn btn-${C} ${f}`,children:u});ke.propTypes={label:se.string.isRequired,onClick:se.func,type:se.oneOf(["button","submit","reset"]),disabled:se.bool,theme:se.oneOf(["primary","secondary","danger"]),className:se.string},ke.defaultProps={onClick:()=>{},disabled:!1,theme:"primary",className:""},ne.Button=ke,Object.defineProperty(ne,Symbol.toStringTag,{value:"Module"})});