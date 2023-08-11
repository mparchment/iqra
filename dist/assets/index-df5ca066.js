function Zg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Hf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wf={exports:{}},Cs={},Vf={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oi=Symbol.for("react.element"),ey=Symbol.for("react.portal"),ty=Symbol.for("react.fragment"),ny=Symbol.for("react.strict_mode"),ry=Symbol.for("react.profiler"),iy=Symbol.for("react.provider"),oy=Symbol.for("react.context"),sy=Symbol.for("react.forward_ref"),ay=Symbol.for("react.suspense"),ly=Symbol.for("react.memo"),uy=Symbol.for("react.lazy"),xc=Symbol.iterator;function cy(e){return e===null||typeof e!="object"?null:(e=xc&&e[xc]||e["@@iterator"],typeof e=="function"?e:null)}var Gf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kf=Object.assign,Qf={};function kr(e,t,n){this.props=e,this.context=t,this.refs=Qf,this.updater=n||Gf}kr.prototype.isReactComponent={};kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yf(){}Yf.prototype=kr.prototype;function du(e,t,n){this.props=e,this.context=t,this.refs=Qf,this.updater=n||Gf}var fu=du.prototype=new Yf;fu.constructor=du;Kf(fu,kr.prototype);fu.isPureReactComponent=!0;var Rc=Array.isArray,qf=Object.prototype.hasOwnProperty,hu={current:null},Xf={key:!0,ref:!0,__self:!0,__source:!0};function Jf(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)qf.call(t,r)&&!Xf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Oi,type:e,key:o,ref:s,props:i,_owner:hu.current}}function dy(e,t){return{$$typeof:Oi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Oi}function fy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pc=/\/+/g;function ia(e,t){return typeof e=="object"&&e!==null&&e.key!=null?fy(""+e.key):t.toString(36)}function yo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Oi:case ey:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+ia(s,0):r,Rc(i)?(n="",e!=null&&(n=e.replace(Pc,"$&/")+"/"),yo(i,t,n,"",function(u){return u})):i!=null&&(pu(i)&&(i=dy(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Pc,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Rc(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+ia(o,a);s+=yo(o,t,n,l,i)}else if(l=cy(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+ia(o,a++),s+=yo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function qi(e,t,n){if(e==null)return e;var r=[],i=0;return yo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function hy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},vo={transition:null},py={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:vo,ReactCurrentOwner:hu};b.Children={map:qi,forEach:function(e,t,n){qi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qi(e,function(){t++}),t},toArray:function(e){return qi(e,function(t){return t})||[]},only:function(e){if(!pu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};b.Component=kr;b.Fragment=ty;b.Profiler=ry;b.PureComponent=du;b.StrictMode=ny;b.Suspense=ay;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=py;b.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Kf({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=hu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)qf.call(t,l)&&!Xf.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Oi,type:e.type,key:i,ref:o,props:r,_owner:s}};b.createContext=function(e){return e={$$typeof:oy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:iy,_context:e},e.Consumer=e};b.createElement=Jf;b.createFactory=function(e){var t=Jf.bind(null,e);return t.type=e,t};b.createRef=function(){return{current:null}};b.forwardRef=function(e){return{$$typeof:sy,render:e}};b.isValidElement=pu;b.lazy=function(e){return{$$typeof:uy,_payload:{_status:-1,_result:e},_init:hy}};b.memo=function(e,t){return{$$typeof:ly,type:e,compare:t===void 0?null:t}};b.startTransition=function(e){var t=vo.transition;vo.transition={};try{e()}finally{vo.transition=t}};b.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};b.useCallback=function(e,t){return we.current.useCallback(e,t)};b.useContext=function(e){return we.current.useContext(e)};b.useDebugValue=function(){};b.useDeferredValue=function(e){return we.current.useDeferredValue(e)};b.useEffect=function(e,t){return we.current.useEffect(e,t)};b.useId=function(){return we.current.useId()};b.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};b.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};b.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};b.useMemo=function(e,t){return we.current.useMemo(e,t)};b.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};b.useRef=function(e){return we.current.useRef(e)};b.useState=function(e){return we.current.useState(e)};b.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};b.useTransition=function(){return we.current.useTransition()};b.version="18.2.0";Vf.exports=b;var I=Vf.exports;const Xe=Hf(I),my=Zg({__proto__:null,default:Xe},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy=I,yy=Symbol.for("react.element"),vy=Symbol.for("react.fragment"),wy=Object.prototype.hasOwnProperty,Sy=gy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_y={key:!0,ref:!0,__self:!0,__source:!0};function Zf(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)wy.call(t,r)&&!_y.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:yy,type:e,key:o,ref:s,props:i,_owner:Sy.current}}Cs.Fragment=vy;Cs.jsx=Zf;Cs.jsxs=Zf;Wf.exports=Cs;var C=Wf.exports,Qa={},eh={exports:{}},De={},th={exports:{}},nh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(x,N){var O=x.length;x.push(N);e:for(;0<O;){var G=O-1>>>1,X=x[G];if(0<i(X,N))x[G]=N,x[O]=X,O=G;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var N=x[0],O=x.pop();if(O!==N){x[0]=O;e:for(var G=0,X=x.length,ct=X>>>1;G<ct;){var xe=2*(G+1)-1,Tt=x[xe],Re=xe+1,je=x[Re];if(0>i(Tt,O))Re<X&&0>i(je,Tt)?(x[G]=je,x[Re]=O,G=Re):(x[G]=Tt,x[xe]=O,G=xe);else if(Re<X&&0>i(je,O))x[G]=je,x[Re]=O,G=Re;else break e}}return N}function i(x,N){var O=x.sortIndex-N.sortIndex;return O!==0?O:x.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,y=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(x){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=x)r(u),N.sortIndex=N.expirationTime,t(l,N);else break;N=n(u)}}function w(x){if(v=!1,m(x),!y)if(n(l)!==null)y=!0,an(S);else{var N=n(u);N!==null&&be(w,N.startTime-x)}}function S(x,N){y=!1,v&&(v=!1,p(P),P=-1),g=!0;var O=d;try{for(m(N),h=n(l);h!==null&&(!(h.expirationTime>N)||x&&!Te());){var G=h.callback;if(typeof G=="function"){h.callback=null,d=h.priorityLevel;var X=G(h.expirationTime<=N);N=e.unstable_now(),typeof X=="function"?h.callback=X:h===n(l)&&r(l),m(N)}else r(l);h=n(l)}if(h!==null)var ct=!0;else{var xe=n(u);xe!==null&&be(w,xe.startTime-N),ct=!1}return ct}finally{h=null,d=O,g=!1}}var T=!1,k=null,P=-1,z=5,M=-1;function Te(){return!(e.unstable_now()-M<z)}function on(){if(k!==null){var x=e.unstable_now();M=x;var N=!0;try{N=k(!0,x)}finally{N?sn():(T=!1,k=null)}}else T=!1}var sn;if(typeof f=="function")sn=function(){f(on)};else if(typeof MessageChannel<"u"){var Qi=new MessageChannel,na=Qi.port2;Qi.port1.onmessage=on,sn=function(){na.postMessage(null)}}else sn=function(){_(on,0)};function an(x){k=x,T||(T=!0,sn())}function be(x,N){P=_(function(){x(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,an(S))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(x){switch(d){case 1:case 2:case 3:var N=3;break;default:N=d}var O=d;d=N;try{return x()}finally{d=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,N){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var O=d;d=x;try{return N()}finally{d=O}},e.unstable_scheduleCallback=function(x,N,O){var G=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?G+O:G):O=G,x){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=O+X,x={id:c++,callback:N,priorityLevel:x,startTime:O,expirationTime:X,sortIndex:-1},O>G?(x.sortIndex=O,t(u,x),n(l)===null&&x===n(u)&&(v?(p(P),P=-1):v=!0,be(w,O-G))):(x.sortIndex=X,t(l,x),y||g||(y=!0,an(S))),x},e.unstable_shouldYield=Te,e.unstable_wrapCallback=function(x){var N=d;return function(){var O=d;d=N;try{return x.apply(this,arguments)}finally{d=O}}}})(nh);th.exports=nh;var Ey=th.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rh=I,Le=Ey;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ih=new Set,ai={};function Nn(e,t){ur(e,t),ur(e+"Capture",t)}function ur(e,t){for(ai[e]=t,e=0;e<t.length;e++)ih.add(t[e])}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ya=Object.prototype.hasOwnProperty,ky=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ac={},Nc={};function Iy(e){return Ya.call(Nc,e)?!0:Ya.call(Ac,e)?!1:ky.test(e)?Nc[e]=!0:(Ac[e]=!0,!1)}function Cy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ty(e,t,n,r){if(t===null||typeof t>"u"||Cy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var mu=/[\-:]([a-z])/g;function gu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mu,gu);ce[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mu,gu);ce[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mu,gu);ce[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function yu(e,t,n,r){var i=ce.hasOwnProperty(t)?ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ty(t,n,i,r)&&(n=null),r||i===null?Iy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ct=rh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xi=Symbol.for("react.element"),Un=Symbol.for("react.portal"),zn=Symbol.for("react.fragment"),vu=Symbol.for("react.strict_mode"),qa=Symbol.for("react.profiler"),oh=Symbol.for("react.provider"),sh=Symbol.for("react.context"),wu=Symbol.for("react.forward_ref"),Xa=Symbol.for("react.suspense"),Ja=Symbol.for("react.suspense_list"),Su=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),ah=Symbol.for("react.offscreen"),Oc=Symbol.iterator;function Or(e){return e===null||typeof e!="object"?null:(e=Oc&&e[Oc]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,oa;function zr(e){if(oa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);oa=t&&t[1]||""}return`
`+oa+e}var sa=!1;function aa(e,t){if(!e||sa)return"";sa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{sa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zr(e):""}function xy(e){switch(e.tag){case 5:return zr(e.type);case 16:return zr("Lazy");case 13:return zr("Suspense");case 19:return zr("SuspenseList");case 0:case 2:case 15:return e=aa(e.type,!1),e;case 11:return e=aa(e.type.render,!1),e;case 1:return e=aa(e.type,!0),e;default:return""}}function Za(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zn:return"Fragment";case Un:return"Portal";case qa:return"Profiler";case vu:return"StrictMode";case Xa:return"Suspense";case Ja:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sh:return(e.displayName||"Context")+".Consumer";case oh:return(e._context.displayName||"Context")+".Provider";case wu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Su:return t=e.displayName||null,t!==null?t:Za(e.type)||"Memo";case Nt:t=e._payload,e=e._init;try{return Za(e(t))}catch{}}return null}function Ry(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Za(t);case 8:return t===vu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Py(e){var t=lh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ji(e){e._valueTracker||(e._valueTracker=Py(e))}function uh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=lh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $o(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function el(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Lc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ch(e,t){t=t.checked,t!=null&&yu(e,"checked",t,!1)}function tl(e,t){ch(e,t);var n=Jt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nl(e,t.type,n):t.hasOwnProperty("defaultValue")&&nl(e,t.type,Jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Dc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function nl(e,t,n){(t!=="number"||$o(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fr=Array.isArray;function Jn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function rl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Mc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Fr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Jt(n)}}function dh(e,t){var n=Jt(t.value),r=Jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function bc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function il(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zi,hh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zi=Zi||document.createElement("div"),Zi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function li(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ay=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(e){Ay.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kr[t]=Kr[e]})});function ph(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kr.hasOwnProperty(e)&&Kr[e]?(""+t).trim():t+"px"}function mh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ph(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ny=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ol(e,t){if(t){if(Ny[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function sl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var al=null;function _u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ll=null,Zn=null,er=null;function jc(e){if(e=Mi(e)){if(typeof ll!="function")throw Error(E(280));var t=e.stateNode;t&&(t=As(t),ll(e.stateNode,e.type,t))}}function gh(e){Zn?er?er.push(e):er=[e]:Zn=e}function yh(){if(Zn){var e=Zn,t=er;if(er=Zn=null,jc(e),t)for(e=0;e<t.length;e++)jc(t[e])}}function vh(e,t){return e(t)}function wh(){}var la=!1;function Sh(e,t,n){if(la)return e(t,n);la=!0;try{return vh(e,t,n)}finally{la=!1,(Zn!==null||er!==null)&&(wh(),yh())}}function ui(e,t){var n=e.stateNode;if(n===null)return null;var r=As(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var ul=!1;if(St)try{var Lr={};Object.defineProperty(Lr,"passive",{get:function(){ul=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{ul=!1}function Oy(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Qr=!1,Uo=null,zo=!1,cl=null,Ly={onError:function(e){Qr=!0,Uo=e}};function Dy(e,t,n,r,i,o,s,a,l){Qr=!1,Uo=null,Oy.apply(Ly,arguments)}function My(e,t,n,r,i,o,s,a,l){if(Dy.apply(this,arguments),Qr){if(Qr){var u=Uo;Qr=!1,Uo=null}else throw Error(E(198));zo||(zo=!0,cl=u)}}function On(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $c(e){if(On(e)!==e)throw Error(E(188))}function by(e){var t=e.alternate;if(!t){if(t=On(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return $c(i),e;if(o===r)return $c(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Eh(e){return e=by(e),e!==null?kh(e):null}function kh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=kh(e);if(t!==null)return t;e=e.sibling}return null}var Ih=Le.unstable_scheduleCallback,Uc=Le.unstable_cancelCallback,jy=Le.unstable_shouldYield,$y=Le.unstable_requestPaint,Z=Le.unstable_now,Uy=Le.unstable_getCurrentPriorityLevel,Eu=Le.unstable_ImmediatePriority,Ch=Le.unstable_UserBlockingPriority,Fo=Le.unstable_NormalPriority,zy=Le.unstable_LowPriority,Th=Le.unstable_IdlePriority,Ts=null,st=null;function Fy(e){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(Ts,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:Wy,By=Math.log,Hy=Math.LN2;function Wy(e){return e>>>=0,e===0?32:31-(By(e)/Hy|0)|0}var eo=64,to=4194304;function Br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Br(a):(o&=s,o!==0&&(r=Br(o)))}else s=n&~i,s!==0?r=Br(s):o!==0&&(r=Br(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),i=1<<n,r|=e[n],t&=~i;return r}function Vy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Je(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Vy(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function dl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xh(){var e=eo;return eo<<=1,!(eo&4194240)&&(eo=64),e}function ua(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Li(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function Ky(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Je(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ku(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Rh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ph,Iu,Ah,Nh,Oh,fl=!1,no=[],Ft=null,Bt=null,Ht=null,ci=new Map,di=new Map,Lt=[],Qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zc(e,t){switch(e){case"focusin":case"focusout":Ft=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":Ht=null;break;case"pointerover":case"pointerout":ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":di.delete(t.pointerId)}}function Dr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Mi(t),t!==null&&Iu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Yy(e,t,n,r,i){switch(t){case"focusin":return Ft=Dr(Ft,e,t,n,r,i),!0;case"dragenter":return Bt=Dr(Bt,e,t,n,r,i),!0;case"mouseover":return Ht=Dr(Ht,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ci.set(o,Dr(ci.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,di.set(o,Dr(di.get(o)||null,e,t,n,r,i)),!0}return!1}function Lh(e){var t=hn(e.target);if(t!==null){var n=On(t);if(n!==null){if(t=n.tag,t===13){if(t=_h(n),t!==null){e.blockedOn=t,Oh(e.priority,function(){Ah(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);al=r,n.target.dispatchEvent(r),al=null}else return t=Mi(n),t!==null&&Iu(t),e.blockedOn=n,!1;t.shift()}return!0}function Fc(e,t,n){wo(e)&&n.delete(t)}function qy(){fl=!1,Ft!==null&&wo(Ft)&&(Ft=null),Bt!==null&&wo(Bt)&&(Bt=null),Ht!==null&&wo(Ht)&&(Ht=null),ci.forEach(Fc),di.forEach(Fc)}function Mr(e,t){e.blockedOn===t&&(e.blockedOn=null,fl||(fl=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,qy)))}function fi(e){function t(i){return Mr(i,e)}if(0<no.length){Mr(no[0],e);for(var n=1;n<no.length;n++){var r=no[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ft!==null&&Mr(Ft,e),Bt!==null&&Mr(Bt,e),Ht!==null&&Mr(Ht,e),ci.forEach(t),di.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)Lh(n),n.blockedOn===null&&Lt.shift()}var tr=Ct.ReactCurrentBatchConfig,Ho=!0;function Xy(e,t,n,r){var i=U,o=tr.transition;tr.transition=null;try{U=1,Cu(e,t,n,r)}finally{U=i,tr.transition=o}}function Jy(e,t,n,r){var i=U,o=tr.transition;tr.transition=null;try{U=4,Cu(e,t,n,r)}finally{U=i,tr.transition=o}}function Cu(e,t,n,r){if(Ho){var i=hl(e,t,n,r);if(i===null)wa(e,t,r,Wo,n),zc(e,r);else if(Yy(i,e,t,n,r))r.stopPropagation();else if(zc(e,r),t&4&&-1<Qy.indexOf(e)){for(;i!==null;){var o=Mi(i);if(o!==null&&Ph(o),o=hl(e,t,n,r),o===null&&wa(e,t,r,Wo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else wa(e,t,r,null,n)}}var Wo=null;function hl(e,t,n,r){if(Wo=null,e=_u(r),e=hn(e),e!==null)if(t=On(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wo=e,null}function Dh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uy()){case Eu:return 1;case Ch:return 4;case Fo:case zy:return 16;case Th:return 536870912;default:return 16}default:return 16}}var $t=null,Tu=null,So=null;function Mh(){if(So)return So;var e,t=Tu,n=t.length,r,i="value"in $t?$t.value:$t.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return So=i.slice(e,1<r?1-r:void 0)}function _o(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ro(){return!0}function Bc(){return!1}function Me(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ro:Bc,this.isPropagationStopped=Bc,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),t}var Ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xu=Me(Ir),Di=q({},Ir,{view:0,detail:0}),Zy=Me(Di),ca,da,br,xs=q({},Di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==br&&(br&&e.type==="mousemove"?(ca=e.screenX-br.screenX,da=e.screenY-br.screenY):da=ca=0,br=e),ca)},movementY:function(e){return"movementY"in e?e.movementY:da}}),Hc=Me(xs),ev=q({},xs,{dataTransfer:0}),tv=Me(ev),nv=q({},Di,{relatedTarget:0}),fa=Me(nv),rv=q({},Ir,{animationName:0,elapsedTime:0,pseudoElement:0}),iv=Me(rv),ov=q({},Ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sv=Me(ov),av=q({},Ir,{data:0}),Wc=Me(av),lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cv[e])?!!t[e]:!1}function Ru(){return dv}var fv=q({},Di,{key:function(e){if(e.key){var t=lv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?_o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hv=Me(fv),pv=q({},xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vc=Me(pv),mv=q({},Di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),gv=Me(mv),yv=q({},Ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),vv=Me(yv),wv=q({},xs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sv=Me(wv),_v=[9,13,27,32],Pu=St&&"CompositionEvent"in window,Yr=null;St&&"documentMode"in document&&(Yr=document.documentMode);var Ev=St&&"TextEvent"in window&&!Yr,bh=St&&(!Pu||Yr&&8<Yr&&11>=Yr),Gc=String.fromCharCode(32),Kc=!1;function jh(e,t){switch(e){case"keyup":return _v.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $h(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function kv(e,t){switch(e){case"compositionend":return $h(t);case"keypress":return t.which!==32?null:(Kc=!0,Gc);case"textInput":return e=t.data,e===Gc&&Kc?null:e;default:return null}}function Iv(e,t){if(Fn)return e==="compositionend"||!Pu&&jh(e,t)?(e=Mh(),So=Tu=$t=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bh&&t.locale!=="ko"?null:t.data;default:return null}}var Cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cv[e.type]:t==="textarea"}function Uh(e,t,n,r){gh(r),t=Vo(t,"onChange"),0<t.length&&(n=new xu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qr=null,hi=null;function Tv(e){qh(e,0)}function Rs(e){var t=Wn(e);if(uh(t))return e}function xv(e,t){if(e==="change")return t}var zh=!1;if(St){var ha;if(St){var pa="oninput"in document;if(!pa){var Yc=document.createElement("div");Yc.setAttribute("oninput","return;"),pa=typeof Yc.oninput=="function"}ha=pa}else ha=!1;zh=ha&&(!document.documentMode||9<document.documentMode)}function qc(){qr&&(qr.detachEvent("onpropertychange",Fh),hi=qr=null)}function Fh(e){if(e.propertyName==="value"&&Rs(hi)){var t=[];Uh(t,hi,e,_u(e)),Sh(Tv,t)}}function Rv(e,t,n){e==="focusin"?(qc(),qr=t,hi=n,qr.attachEvent("onpropertychange",Fh)):e==="focusout"&&qc()}function Pv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rs(hi)}function Av(e,t){if(e==="click")return Rs(t)}function Nv(e,t){if(e==="input"||e==="change")return Rs(t)}function Ov(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:Ov;function pi(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ya.call(t,i)||!tt(e[i],t[i]))return!1}return!0}function Xc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jc(e,t){var n=Xc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xc(n)}}function Bh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hh(){for(var e=window,t=$o();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$o(e.document)}return t}function Au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Lv(e){var t=Hh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bh(n.ownerDocument.documentElement,n)){if(r!==null&&Au(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Jc(n,o);var s=Jc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Dv=St&&"documentMode"in document&&11>=document.documentMode,Bn=null,pl=null,Xr=null,ml=!1;function Zc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ml||Bn==null||Bn!==$o(r)||(r=Bn,"selectionStart"in r&&Au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xr&&pi(Xr,r)||(Xr=r,r=Vo(pl,"onSelect"),0<r.length&&(t=new xu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Bn)))}function io(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Hn={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},ma={},Wh={};St&&(Wh=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function Ps(e){if(ma[e])return ma[e];if(!Hn[e])return e;var t=Hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wh)return ma[e]=t[n];return e}var Vh=Ps("animationend"),Gh=Ps("animationiteration"),Kh=Ps("animationstart"),Qh=Ps("transitionend"),Yh=new Map,ed="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(e,t){Yh.set(e,t),Nn(t,[e])}for(var ga=0;ga<ed.length;ga++){var ya=ed[ga],Mv=ya.toLowerCase(),bv=ya[0].toUpperCase()+ya.slice(1);en(Mv,"on"+bv)}en(Vh,"onAnimationEnd");en(Gh,"onAnimationIteration");en(Kh,"onAnimationStart");en("dblclick","onDoubleClick");en("focusin","onFocus");en("focusout","onBlur");en(Qh,"onTransitionEnd");ur("onMouseEnter",["mouseout","mouseover"]);ur("onMouseLeave",["mouseout","mouseover"]);ur("onPointerEnter",["pointerout","pointerover"]);ur("onPointerLeave",["pointerout","pointerover"]);Nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));function td(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,My(r,t,void 0,e),e.currentTarget=null}function qh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;td(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;td(i,a,u),o=l}}}if(zo)throw e=cl,zo=!1,cl=null,e}function H(e,t){var n=t[Sl];n===void 0&&(n=t[Sl]=new Set);var r=e+"__bubble";n.has(r)||(Xh(t,e,2,!1),n.add(r))}function va(e,t,n){var r=0;t&&(r|=4),Xh(n,e,r,t)}var oo="_reactListening"+Math.random().toString(36).slice(2);function mi(e){if(!e[oo]){e[oo]=!0,ih.forEach(function(n){n!=="selectionchange"&&(jv.has(n)||va(n,!1,e),va(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oo]||(t[oo]=!0,va("selectionchange",!1,t))}}function Xh(e,t,n,r){switch(Dh(t)){case 1:var i=Xy;break;case 4:i=Jy;break;default:i=Cu}n=i.bind(null,t,n,e),i=void 0,!ul||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function wa(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=hn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Sh(function(){var u=o,c=_u(n),h=[];e:{var d=Yh.get(e);if(d!==void 0){var g=xu,y=e;switch(e){case"keypress":if(_o(n)===0)break e;case"keydown":case"keyup":g=hv;break;case"focusin":y="focus",g=fa;break;case"focusout":y="blur",g=fa;break;case"beforeblur":case"afterblur":g=fa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=gv;break;case Vh:case Gh:case Kh:g=iv;break;case Qh:g=vv;break;case"scroll":g=Zy;break;case"wheel":g=Sv;break;case"copy":case"cut":case"paste":g=sv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Vc}var v=(t&4)!==0,_=!v&&e==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=ui(f,p),w!=null&&v.push(gi(f,w,m)))),_)break;f=f.return}0<v.length&&(d=new g(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",d&&n!==al&&(y=n.relatedTarget||n.fromElement)&&(hn(y)||y[_t]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?hn(y):null,y!==null&&(_=On(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=Hc,w="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(v=Vc,w="onPointerLeave",p="onPointerEnter",f="pointer"),_=g==null?d:Wn(g),m=y==null?d:Wn(y),d=new v(w,f+"leave",g,n,c),d.target=_,d.relatedTarget=m,w=null,hn(c)===u&&(v=new v(p,f+"enter",y,n,c),v.target=m,v.relatedTarget=_,w=v),_=w,g&&y)t:{for(v=g,p=y,f=0,m=v;m;m=bn(m))f++;for(m=0,w=p;w;w=bn(w))m++;for(;0<f-m;)v=bn(v),f--;for(;0<m-f;)p=bn(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=bn(v),p=bn(p)}v=null}else v=null;g!==null&&nd(h,d,g,v,!1),y!==null&&_!==null&&nd(h,_,y,v,!0)}}e:{if(d=u?Wn(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var S=xv;else if(Qc(d))if(zh)S=Nv;else{S=Pv;var T=Rv}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=Av);if(S&&(S=S(e,u))){Uh(h,S,n,c);break e}T&&T(e,d,u),e==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&nl(d,"number",d.value)}switch(T=u?Wn(u):window,e){case"focusin":(Qc(T)||T.contentEditable==="true")&&(Bn=T,pl=u,Xr=null);break;case"focusout":Xr=pl=Bn=null;break;case"mousedown":ml=!0;break;case"contextmenu":case"mouseup":case"dragend":ml=!1,Zc(h,n,c);break;case"selectionchange":if(Dv)break;case"keydown":case"keyup":Zc(h,n,c)}var k;if(Pu)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Fn?jh(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(bh&&n.locale!=="ko"&&(Fn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Fn&&(k=Mh()):($t=c,Tu="value"in $t?$t.value:$t.textContent,Fn=!0)),T=Vo(u,P),0<T.length&&(P=new Wc(P,e,null,n,c),h.push({event:P,listeners:T}),k?P.data=k:(k=$h(n),k!==null&&(P.data=k)))),(k=Ev?kv(e,n):Iv(e,n))&&(u=Vo(u,"onBeforeInput"),0<u.length&&(c=new Wc("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=k))}qh(h,t)})}function gi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ui(e,n),o!=null&&r.unshift(gi(e,o,i)),o=ui(e,t),o!=null&&r.push(gi(e,o,i))),e=e.return}return r}function bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nd(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ui(n,o),l!=null&&s.unshift(gi(n,l,a))):i||(l=ui(n,o),l!=null&&s.push(gi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var $v=/\r\n?/g,Uv=/\u0000|\uFFFD/g;function rd(e){return(typeof e=="string"?e:""+e).replace($v,`
`).replace(Uv,"")}function so(e,t,n){if(t=rd(t),rd(e)!==t&&n)throw Error(E(425))}function Go(){}var gl=null,yl=null;function vl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wl=typeof setTimeout=="function"?setTimeout:void 0,zv=typeof clearTimeout=="function"?clearTimeout:void 0,id=typeof Promise=="function"?Promise:void 0,Fv=typeof queueMicrotask=="function"?queueMicrotask:typeof id<"u"?function(e){return id.resolve(null).then(e).catch(Bv)}:wl;function Bv(e){setTimeout(function(){throw e})}function Sa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),fi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fi(t)}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function od(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cr=Math.random().toString(36).slice(2),ot="__reactFiber$"+Cr,yi="__reactProps$"+Cr,_t="__reactContainer$"+Cr,Sl="__reactEvents$"+Cr,Hv="__reactListeners$"+Cr,Wv="__reactHandles$"+Cr;function hn(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=od(e);e!==null;){if(n=e[ot])return n;e=od(e)}return t}e=n,n=e.parentNode}return null}function Mi(e){return e=e[ot]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function As(e){return e[yi]||null}var _l=[],Vn=-1;function tn(e){return{current:e}}function V(e){0>Vn||(e.current=_l[Vn],_l[Vn]=null,Vn--)}function B(e,t){Vn++,_l[Vn]=e.current,e.current=t}var Zt={},me=tn(Zt),ke=tn(!1),kn=Zt;function cr(e,t){var n=e.type.contextTypes;if(!n)return Zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ie(e){return e=e.childContextTypes,e!=null}function Ko(){V(ke),V(me)}function sd(e,t,n){if(me.current!==Zt)throw Error(E(168));B(me,t),B(ke,n)}function Jh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,Ry(e)||"Unknown",i));return q({},n,r)}function Qo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zt,kn=me.current,B(me,e),B(ke,ke.current),!0}function ad(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Jh(e,t,kn),r.__reactInternalMemoizedMergedChildContext=e,V(ke),V(me),B(me,e)):V(ke),B(ke,n)}var ht=null,Ns=!1,_a=!1;function Zh(e){ht===null?ht=[e]:ht.push(e)}function Vv(e){Ns=!0,Zh(e)}function nn(){if(!_a&&ht!==null){_a=!0;var e=0,t=U;try{var n=ht;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ht=null,Ns=!1}catch(i){throw ht!==null&&(ht=ht.slice(e+1)),Ih(Eu,nn),i}finally{U=t,_a=!1}}return null}var Gn=[],Kn=0,Yo=null,qo=0,$e=[],Ue=0,In=null,pt=1,mt="";function un(e,t){Gn[Kn++]=qo,Gn[Kn++]=Yo,Yo=e,qo=t}function ep(e,t,n){$e[Ue++]=pt,$e[Ue++]=mt,$e[Ue++]=In,In=e;var r=pt;e=mt;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var o=32-Je(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,pt=1<<32-Je(t)+i|n<<i|r,mt=o+e}else pt=1<<o|n<<i|r,mt=e}function Nu(e){e.return!==null&&(un(e,1),ep(e,1,0))}function Ou(e){for(;e===Yo;)Yo=Gn[--Kn],Gn[Kn]=null,qo=Gn[--Kn],Gn[Kn]=null;for(;e===In;)In=$e[--Ue],$e[Ue]=null,mt=$e[--Ue],$e[Ue]=null,pt=$e[--Ue],$e[Ue]=null}var Oe=null,Ne=null,K=!1,Ye=null;function tp(e,t){var n=ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ld(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Oe=e,Ne=Wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Oe=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=In!==null?{id:pt,overflow:mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Oe=e,Ne=null,!0):!1;default:return!1}}function El(e){return(e.mode&1)!==0&&(e.flags&128)===0}function kl(e){if(K){var t=Ne;if(t){var n=t;if(!ld(e,t)){if(El(e))throw Error(E(418));t=Wt(n.nextSibling);var r=Oe;t&&ld(e,t)?tp(r,n):(e.flags=e.flags&-4097|2,K=!1,Oe=e)}}else{if(El(e))throw Error(E(418));e.flags=e.flags&-4097|2,K=!1,Oe=e}}}function ud(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oe=e}function ao(e){if(e!==Oe)return!1;if(!K)return ud(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vl(e.type,e.memoizedProps)),t&&(t=Ne)){if(El(e))throw np(),Error(E(418));for(;t;)tp(e,t),t=Wt(t.nextSibling)}if(ud(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=Wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Oe?Wt(e.stateNode.nextSibling):null;return!0}function np(){for(var e=Ne;e;)e=Wt(e.nextSibling)}function dr(){Ne=Oe=null,K=!1}function Lu(e){Ye===null?Ye=[e]:Ye.push(e)}var Gv=Ct.ReactCurrentBatchConfig;function Ke(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Xo=tn(null),Jo=null,Qn=null,Du=null;function Mu(){Du=Qn=Jo=null}function bu(e){var t=Xo.current;V(Xo),e._currentValue=t}function Il(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nr(e,t){Jo=e,Du=Qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ee=!0),e.firstContext=null)}function Be(e){var t=e._currentValue;if(Du!==e)if(e={context:e,memoizedValue:t,next:null},Qn===null){if(Jo===null)throw Error(E(308));Qn=e,Jo.dependencies={lanes:0,firstContext:e}}else Qn=Qn.next=e;return t}var pn=null;function ju(e){pn===null?pn=[e]:pn.push(e)}function rp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ju(t)):(n.next=i.next,i.next=n),t.interleaved=n,Et(e,r)}function Et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ot=!1;function $u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ip(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Et(e,n)}return i=r.interleaved,i===null?(t.next=t,ju(r)):(t.next=i.next,i.next=t),r.interleaved=t,Et(e,n)}function Eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ku(e,n)}}function cd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zo(e,t,n,r){var i=e.updateQueue;Ot=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;s=0,c=u=l=null,a=o;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(d=t,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(g,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(g,h,d):y,d==null)break e;h=q({},h,d);break e;case 2:Ot=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,s|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Tn|=s,e.lanes=s,e.memoizedState=h}}function dd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var op=new rh.Component().refs;function Cl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Os={isMounted:function(e){return(e=e._reactInternals)?On(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Kt(e),o=vt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Vt(e,o,i),t!==null&&(Ze(t,e,i,r),Eo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Kt(e),o=vt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Vt(e,o,i),t!==null&&(Ze(t,e,i,r),Eo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=Kt(e),i=vt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Vt(e,i,r),t!==null&&(Ze(t,e,r,n),Eo(t,e,r))}};function fd(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!pi(n,r)||!pi(i,o):!0}function sp(e,t,n){var r=!1,i=Zt,o=t.contextType;return typeof o=="object"&&o!==null?o=Be(o):(i=Ie(t)?kn:me.current,r=t.contextTypes,o=(r=r!=null)?cr(e,i):Zt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Os,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function hd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Os.enqueueReplaceState(t,t.state,null)}function Tl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=op,$u(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Be(o):(o=Ie(t)?kn:me.current,i.context=cr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Cl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Os.enqueueReplaceState(i,i.state,null),Zo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function jr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===op&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function lo(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pd(e){var t=e._init;return t(e._payload)}function ap(e){function t(p,f){if(e){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Qt(p,f),p.index=0,p.sibling=null,p}function o(p,f,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,w){return f===null||f.tag!==6?(f=Ra(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,w){var S=m.type;return S===zn?c(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Nt&&pd(S)===f.type)?(w=i(f,m.props),w.ref=jr(p,f,m),w.return=p,w):(w=Ro(m.type,m.key,m.props,null,p.mode,w),w.ref=jr(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Pa(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,w,S){return f===null||f.tag!==7?(f=wn(m,p.mode,w,S),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ra(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Xi:return m=Ro(f.type,f.key,f.props,null,p.mode,m),m.ref=jr(p,null,f),m.return=p,m;case Un:return f=Pa(f,p.mode,m),f.return=p,f;case Nt:var w=f._init;return h(p,w(f._payload),m)}if(Fr(f)||Or(f))return f=wn(f,p.mode,m,null),f.return=p,f;lo(p,f)}return null}function d(p,f,m,w){var S=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:a(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Xi:return m.key===S?l(p,f,m,w):null;case Un:return m.key===S?u(p,f,m,w):null;case Nt:return S=m._init,d(p,f,S(m._payload),w)}if(Fr(m)||Or(m))return S!==null?null:c(p,f,m,w,null);lo(p,m)}return null}function g(p,f,m,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(f,p,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Xi:return p=p.get(w.key===null?m:w.key)||null,l(f,p,w,S);case Un:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,S);case Nt:var T=w._init;return g(p,f,m,T(w._payload),S)}if(Fr(w)||Or(w))return p=p.get(m)||null,c(f,p,w,S,null);lo(f,w)}return null}function y(p,f,m,w){for(var S=null,T=null,k=f,P=f=0,z=null;k!==null&&P<m.length;P++){k.index>P?(z=k,k=null):z=k.sibling;var M=d(p,k,m[P],w);if(M===null){k===null&&(k=z);break}e&&k&&M.alternate===null&&t(p,k),f=o(M,f,P),T===null?S=M:T.sibling=M,T=M,k=z}if(P===m.length)return n(p,k),K&&un(p,P),S;if(k===null){for(;P<m.length;P++)k=h(p,m[P],w),k!==null&&(f=o(k,f,P),T===null?S=k:T.sibling=k,T=k);return K&&un(p,P),S}for(k=r(p,k);P<m.length;P++)z=g(k,p,P,m[P],w),z!==null&&(e&&z.alternate!==null&&k.delete(z.key===null?P:z.key),f=o(z,f,P),T===null?S=z:T.sibling=z,T=z);return e&&k.forEach(function(Te){return t(p,Te)}),K&&un(p,P),S}function v(p,f,m,w){var S=Or(m);if(typeof S!="function")throw Error(E(150));if(m=S.call(m),m==null)throw Error(E(151));for(var T=S=null,k=f,P=f=0,z=null,M=m.next();k!==null&&!M.done;P++,M=m.next()){k.index>P?(z=k,k=null):z=k.sibling;var Te=d(p,k,M.value,w);if(Te===null){k===null&&(k=z);break}e&&k&&Te.alternate===null&&t(p,k),f=o(Te,f,P),T===null?S=Te:T.sibling=Te,T=Te,k=z}if(M.done)return n(p,k),K&&un(p,P),S;if(k===null){for(;!M.done;P++,M=m.next())M=h(p,M.value,w),M!==null&&(f=o(M,f,P),T===null?S=M:T.sibling=M,T=M);return K&&un(p,P),S}for(k=r(p,k);!M.done;P++,M=m.next())M=g(k,p,P,M.value,w),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?P:M.key),f=o(M,f,P),T===null?S=M:T.sibling=M,T=M);return e&&k.forEach(function(on){return t(p,on)}),K&&un(p,P),S}function _(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===zn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Xi:e:{for(var S=m.key,T=f;T!==null;){if(T.key===S){if(S=m.type,S===zn){if(T.tag===7){n(p,T.sibling),f=i(T,m.props.children),f.return=p,p=f;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Nt&&pd(S)===T.type){n(p,T.sibling),f=i(T,m.props),f.ref=jr(p,T,m),f.return=p,p=f;break e}n(p,T);break}else t(p,T);T=T.sibling}m.type===zn?(f=wn(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=Ro(m.type,m.key,m.props,null,p.mode,w),w.ref=jr(p,f,m),w.return=p,p=w)}return s(p);case Un:e:{for(T=m.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=Pa(m,p.mode,w),f.return=p,p=f}return s(p);case Nt:return T=m._init,_(p,f,T(m._payload),w)}if(Fr(m))return y(p,f,m,w);if(Or(m))return v(p,f,m,w);lo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Ra(m,p.mode,w),f.return=p,p=f),s(p)):n(p,f)}return _}var fr=ap(!0),lp=ap(!1),bi={},at=tn(bi),vi=tn(bi),wi=tn(bi);function mn(e){if(e===bi)throw Error(E(174));return e}function Uu(e,t){switch(B(wi,t),B(vi,e),B(at,bi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:il(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=il(t,e)}V(at),B(at,t)}function hr(){V(at),V(vi),V(wi)}function up(e){mn(wi.current);var t=mn(at.current),n=il(t,e.type);t!==n&&(B(vi,e),B(at,n))}function zu(e){vi.current===e&&(V(at),V(vi))}var Q=tn(0);function es(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ea=[];function Fu(){for(var e=0;e<Ea.length;e++)Ea[e]._workInProgressVersionPrimary=null;Ea.length=0}var ko=Ct.ReactCurrentDispatcher,ka=Ct.ReactCurrentBatchConfig,Cn=0,Y=null,ne=null,oe=null,ts=!1,Jr=!1,Si=0,Kv=0;function de(){throw Error(E(321))}function Bu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tt(e[n],t[n]))return!1;return!0}function Hu(e,t,n,r,i,o){if(Cn=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ko.current=e===null||e.memoizedState===null?Xv:Jv,e=n(r,i),Jr){o=0;do{if(Jr=!1,Si=0,25<=o)throw Error(E(301));o+=1,oe=ne=null,t.updateQueue=null,ko.current=Zv,e=n(r,i)}while(Jr)}if(ko.current=ns,t=ne!==null&&ne.next!==null,Cn=0,oe=ne=Y=null,ts=!1,t)throw Error(E(300));return e}function Wu(){var e=Si!==0;return Si=0,e}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?Y.memoizedState=oe=e:oe=oe.next=e,oe}function He(){if(ne===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=oe===null?Y.memoizedState:oe.next;if(t!==null)oe=t,ne=e;else{if(e===null)throw Error(E(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},oe===null?Y.memoizedState=oe=e:oe=oe.next=e}return oe}function _i(e,t){return typeof t=="function"?t(e):t}function Ia(e){var t=He(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=ne,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Cn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,Y.lanes|=c,Tn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,tt(r,t.memoizedState)||(Ee=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,Tn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ca(e){var t=He(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);tt(o,t.memoizedState)||(Ee=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function cp(){}function dp(e,t){var n=Y,r=He(),i=t(),o=!tt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ee=!0),r=r.queue,Vu(pp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,Ei(9,hp.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(E(349));Cn&30||fp(n,t,i)}return i}function fp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hp(e,t,n,r){t.value=n,t.getSnapshot=r,mp(t)&&gp(e)}function pp(e,t,n){return n(function(){mp(t)&&gp(e)})}function mp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tt(e,n)}catch{return!0}}function gp(e){var t=Et(e,1);t!==null&&Ze(t,e,1,-1)}function md(e){var t=rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_i,lastRenderedState:e},t.queue=e,e=e.dispatch=qv.bind(null,Y,e),[t.memoizedState,e]}function Ei(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yp(){return He().memoizedState}function Io(e,t,n,r){var i=rt();Y.flags|=e,i.memoizedState=Ei(1|t,n,void 0,r===void 0?null:r)}function Ls(e,t,n,r){var i=He();r=r===void 0?null:r;var o=void 0;if(ne!==null){var s=ne.memoizedState;if(o=s.destroy,r!==null&&Bu(r,s.deps)){i.memoizedState=Ei(t,n,o,r);return}}Y.flags|=e,i.memoizedState=Ei(1|t,n,o,r)}function gd(e,t){return Io(8390656,8,e,t)}function Vu(e,t){return Ls(2048,8,e,t)}function vp(e,t){return Ls(4,2,e,t)}function wp(e,t){return Ls(4,4,e,t)}function Sp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _p(e,t,n){return n=n!=null?n.concat([e]):null,Ls(4,4,Sp.bind(null,t,e),n)}function Gu(){}function Ep(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function kp(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ip(e,t,n){return Cn&21?(tt(n,t)||(n=xh(),Y.lanes|=n,Tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=n)}function Qv(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=ka.transition;ka.transition={};try{e(!1),t()}finally{U=n,ka.transition=r}}function Cp(){return He().memoizedState}function Yv(e,t,n){var r=Kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Tp(e))xp(t,n);else if(n=rp(e,t,n,r),n!==null){var i=ve();Ze(n,e,r,i),Rp(n,t,r)}}function qv(e,t,n){var r=Kt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tp(e))xp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,tt(a,s)){var l=t.interleaved;l===null?(i.next=i,ju(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=rp(e,t,i,r),n!==null&&(i=ve(),Ze(n,e,r,i),Rp(n,t,r))}}function Tp(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function xp(e,t){Jr=ts=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ku(e,n)}}var ns={readContext:Be,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},Xv={readContext:Be,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:gd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Io(4194308,4,Sp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Io(4194308,4,e,t)},useInsertionEffect:function(e,t){return Io(4,2,e,t)},useMemo:function(e,t){var n=rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=rt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yv.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:md,useDebugValue:Gu,useDeferredValue:function(e){return rt().memoizedState=e},useTransition:function(){var e=md(!1),t=e[0];return e=Qv.bind(null,e[1]),rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=rt();if(K){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),ae===null)throw Error(E(349));Cn&30||fp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,gd(pp.bind(null,r,o,e),[e]),r.flags|=2048,Ei(9,hp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=rt(),t=ae.identifierPrefix;if(K){var n=mt,r=pt;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Si++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jv={readContext:Be,useCallback:Ep,useContext:Be,useEffect:Vu,useImperativeHandle:_p,useInsertionEffect:vp,useLayoutEffect:wp,useMemo:kp,useReducer:Ia,useRef:yp,useState:function(){return Ia(_i)},useDebugValue:Gu,useDeferredValue:function(e){var t=He();return Ip(t,ne.memoizedState,e)},useTransition:function(){var e=Ia(_i)[0],t=He().memoizedState;return[e,t]},useMutableSource:cp,useSyncExternalStore:dp,useId:Cp,unstable_isNewReconciler:!1},Zv={readContext:Be,useCallback:Ep,useContext:Be,useEffect:Vu,useImperativeHandle:_p,useInsertionEffect:vp,useLayoutEffect:wp,useMemo:kp,useReducer:Ca,useRef:yp,useState:function(){return Ca(_i)},useDebugValue:Gu,useDeferredValue:function(e){var t=He();return ne===null?t.memoizedState=e:Ip(t,ne.memoizedState,e)},useTransition:function(){var e=Ca(_i)[0],t=He().memoizedState;return[e,t]},useMutableSource:cp,useSyncExternalStore:dp,useId:Cp,unstable_isNewReconciler:!1};function pr(e,t){try{var n="",r=t;do n+=xy(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ta(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var e0=typeof WeakMap=="function"?WeakMap:Map;function Pp(e,t,n){n=vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){is||(is=!0,jl=r),xl(e,t)},n}function Ap(e,t,n){n=vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){xl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){xl(e,t),typeof r!="function"&&(Gt===null?Gt=new Set([this]):Gt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function yd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new e0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=p0.bind(null,e,t,n),t.then(e,e))}function vd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function wd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vt(-1,1),t.tag=2,Vt(n,t,1))),n.lanes|=1),e)}var t0=Ct.ReactCurrentOwner,Ee=!1;function ye(e,t,n,r){t.child=e===null?lp(t,null,n,r):fr(t,e.child,n,r)}function Sd(e,t,n,r,i){n=n.render;var o=t.ref;return nr(t,i),r=Hu(e,t,n,r,o,i),n=Wu(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(K&&n&&Nu(t),t.flags|=1,ye(e,t,r,i),t.child)}function _d(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ec(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Np(e,t,o,r,i)):(e=Ro(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:pi,n(s,r)&&e.ref===t.ref)return kt(e,t,i)}return t.flags|=1,e=Qt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Np(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(pi(o,r)&&e.ref===t.ref)if(Ee=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ee=!0);else return t.lanes=e.lanes,kt(e,t,i)}return Rl(e,t,n,r,i)}function Op(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(qn,Pe),Pe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(qn,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,B(qn,Pe),Pe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,B(qn,Pe),Pe|=r;return ye(e,t,i,n),t.child}function Lp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Rl(e,t,n,r,i){var o=Ie(n)?kn:me.current;return o=cr(t,o),nr(t,i),n=Hu(e,t,n,r,o,i),r=Wu(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(K&&r&&Nu(t),t.flags|=1,ye(e,t,n,i),t.child)}function Ed(e,t,n,r,i){if(Ie(n)){var o=!0;Qo(t)}else o=!1;if(nr(t,i),t.stateNode===null)Co(e,t),sp(t,n,r),Tl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Be(u):(u=Ie(n)?kn:me.current,u=cr(t,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&hd(t,s,r,u),Ot=!1;var d=t.memoizedState;s.state=d,Zo(t,r,s,i),l=t.memoizedState,a!==r||d!==l||ke.current||Ot?(typeof c=="function"&&(Cl(t,n,c,r),l=t.memoizedState),(a=Ot||fd(t,n,a,r,d,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,ip(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ke(t.type,a),s.props=u,h=t.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Be(l):(l=Ie(n)?kn:me.current,l=cr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||d!==l)&&hd(t,s,r,l),Ot=!1,d=t.memoizedState,s.state=d,Zo(t,r,s,i);var y=t.memoizedState;a!==h||d!==y||ke.current||Ot?(typeof g=="function"&&(Cl(t,n,g,r),y=t.memoizedState),(u=Ot||fd(t,n,u,r,d,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Pl(e,t,n,r,o,i)}function Pl(e,t,n,r,i,o){Lp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&ad(t,n,!1),kt(e,t,o);r=t.stateNode,t0.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=fr(t,e.child,null,o),t.child=fr(t,null,a,o)):ye(e,t,a,o),t.memoizedState=r.state,i&&ad(t,n,!0),t.child}function Dp(e){var t=e.stateNode;t.pendingContext?sd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sd(e,t.context,!1),Uu(e,t.containerInfo)}function kd(e,t,n,r,i){return dr(),Lu(i),t.flags|=256,ye(e,t,n,r),t.child}var Al={dehydrated:null,treeContext:null,retryLane:0};function Nl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mp(e,t,n){var r=t.pendingProps,i=Q.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(Q,i&1),e===null)return kl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=bs(s,r,0,null),e=wn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Nl(n),t.memoizedState=Al,e):Ku(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return n0(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Qt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Qt(a,o):(o=wn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Nl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Al,r}return o=e.child,e=o.sibling,r=Qt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ku(e,t){return t=bs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function uo(e,t,n,r){return r!==null&&Lu(r),fr(t,e.child,null,n),e=Ku(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function n0(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ta(Error(E(422))),uo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=bs({mode:"visible",children:r.children},i,0,null),o=wn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&fr(t,e.child,null,s),t.child.memoizedState=Nl(s),t.memoizedState=Al,o);if(!(t.mode&1))return uo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(E(419)),r=Ta(o,r,void 0),uo(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ee||a){if(r=ae,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Et(e,i),Ze(r,e,i,-1))}return Zu(),r=Ta(Error(E(421))),uo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=m0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ne=Wt(i.nextSibling),Oe=t,K=!0,Ye=null,e!==null&&($e[Ue++]=pt,$e[Ue++]=mt,$e[Ue++]=In,pt=e.id,mt=e.overflow,In=t),t=Ku(t,r.children),t.flags|=4096,t)}function Id(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Il(e.return,t,n)}function xa(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function bp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ye(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Id(e,n,t);else if(e.tag===19)Id(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&es(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),xa(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&es(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}xa(t,!0,n,null,o);break;case"together":xa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Co(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function r0(e,t,n){switch(t.tag){case 3:Dp(t),dr();break;case 5:up(t);break;case 1:Ie(t.type)&&Qo(t);break;case 4:Uu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(Xo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Mp(e,t,n):(B(Q,Q.current&1),e=kt(e,t,n),e!==null?e.sibling:null);B(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return bp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Op(e,t,n)}return kt(e,t,n)}var jp,Ol,$p,Up;jp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ol=function(){};$p=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,mn(at.current);var o=null;switch(n){case"input":i=el(e,i),r=el(e,r),o=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),o=[];break;case"textarea":i=rl(e,i),r=rl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Go)}ol(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ai.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ai.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Up=function(e,t,n,r){n!==r&&(t.flags|=4)};function $r(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function i0(e,t,n){var r=t.pendingProps;switch(Ou(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return Ie(t.type)&&Ko(),fe(t),null;case 3:return r=t.stateNode,hr(),V(ke),V(me),Fu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ao(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(zl(Ye),Ye=null))),Ol(e,t),fe(t),null;case 5:zu(t);var i=mn(wi.current);if(n=t.type,e!==null&&t.stateNode!=null)$p(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return fe(t),null}if(e=mn(at.current),ao(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ot]=t,r[yi]=o,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Hr.length;i++)H(Hr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Lc(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":Mc(r,o),H("invalid",r)}ol(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&so(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&so(r.textContent,a,e),i=["children",""+a]):ai.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&H("scroll",r)}switch(n){case"input":Ji(r),Dc(r,o,!0);break;case"textarea":Ji(r),bc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Go)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[ot]=t,e[yi]=r,jp(e,t,!1,!1),t.stateNode=e;e:{switch(s=sl(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<Hr.length;i++)H(Hr[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":Lc(e,r),i=el(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),H("invalid",e);break;case"textarea":Mc(e,r),i=rl(e,r),H("invalid",e);break;default:i=r}ol(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?mh(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&li(e,l):typeof l=="number"&&li(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ai.hasOwnProperty(o)?l!=null&&o==="onScroll"&&H("scroll",e):l!=null&&yu(e,o,l,s))}switch(n){case"input":Ji(e),Dc(e,r,!1);break;case"textarea":Ji(e),bc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Jt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Jn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Jn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Go)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.stateNode!=null)Up(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=mn(wi.current),mn(at.current),ao(t)){if(r=t.stateNode,n=t.memoizedProps,r[ot]=t,(o=r.nodeValue!==n)&&(e=Oe,e!==null))switch(e.tag){case 3:so(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&so(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ot]=t,t.stateNode=r}return fe(t),null;case 13:if(V(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Ne!==null&&t.mode&1&&!(t.flags&128))np(),dr(),t.flags|=98560,o=!1;else if(o=ao(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[ot]=t}else dr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;fe(t),o=!1}else Ye!==null&&(zl(Ye),Ye=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?re===0&&(re=3):Zu())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return hr(),Ol(e,t),e===null&&mi(t.stateNode.containerInfo),fe(t),null;case 10:return bu(t.type._context),fe(t),null;case 17:return Ie(t.type)&&Ko(),fe(t),null;case 19:if(V(Q),o=t.memoizedState,o===null)return fe(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)$r(o,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=es(e),s!==null){for(t.flags|=128,$r(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>mr&&(t.flags|=128,r=!0,$r(o,!1),t.lanes=4194304)}else{if(!r)if(e=es(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$r(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!K)return fe(t),null}else 2*Z()-o.renderingStartTime>mr&&n!==1073741824&&(t.flags|=128,r=!0,$r(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=Q.current,B(Q,r?n&1|2:n&1),t):(fe(t),null);case 22:case 23:return Ju(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pe&1073741824&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function o0(e,t){switch(Ou(t),t.tag){case 1:return Ie(t.type)&&Ko(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hr(),V(ke),V(me),Fu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zu(t),null;case 13:if(V(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Q),null;case 4:return hr(),null;case 10:return bu(t.type._context),null;case 22:case 23:return Ju(),null;case 24:return null;default:return null}}var co=!1,he=!1,s0=typeof WeakSet=="function"?WeakSet:Set,R=null;function Yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function Ll(e,t,n){try{n()}catch(r){J(e,t,r)}}var Cd=!1;function a0(e,t){if(gl=Ho,e=Hh(),Au(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,h=e,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===e)break t;if(d===n&&++u===i&&(a=s),d===o&&++c===r&&(l=s),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(yl={focusedElem:e,selectionRange:n},Ho=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,_=y.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ke(t.type,v),_);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){J(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return y=Cd,Cd=!1,y}function Zr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ll(t,n,o)}i=i.next}while(i!==r)}}function Ds(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Dl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zp(e){var t=e.alternate;t!==null&&(e.alternate=null,zp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ot],delete t[yi],delete t[Sl],delete t[Hv],delete t[Wv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fp(e){return e.tag===5||e.tag===3||e.tag===4}function Td(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ml(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Go));else if(r!==4&&(e=e.child,e!==null))for(Ml(e,t,n),e=e.sibling;e!==null;)Ml(e,t,n),e=e.sibling}function bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bl(e,t,n),e=e.sibling;e!==null;)bl(e,t,n),e=e.sibling}var le=null,Qe=!1;function Rt(e,t,n){for(n=n.child;n!==null;)Bp(e,t,n),n=n.sibling}function Bp(e,t,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(Ts,n)}catch{}switch(n.tag){case 5:he||Yn(n,t);case 6:var r=le,i=Qe;le=null,Rt(e,t,n),le=r,Qe=i,le!==null&&(Qe?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(Qe?(e=le,n=n.stateNode,e.nodeType===8?Sa(e.parentNode,n):e.nodeType===1&&Sa(e,n),fi(e)):Sa(le,n.stateNode));break;case 4:r=le,i=Qe,le=n.stateNode.containerInfo,Qe=!0,Rt(e,t,n),le=r,Qe=i;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ll(n,t,s),i=i.next}while(i!==r)}Rt(e,t,n);break;case 1:if(!he&&(Yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){J(n,t,a)}Rt(e,t,n);break;case 21:Rt(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,Rt(e,t,n),he=r):Rt(e,t,n);break;default:Rt(e,t,n)}}function xd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new s0),t.forEach(function(r){var i=g0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:le=a.stateNode,Qe=!1;break e;case 3:le=a.stateNode.containerInfo,Qe=!0;break e;case 4:le=a.stateNode.containerInfo,Qe=!0;break e}a=a.return}if(le===null)throw Error(E(160));Bp(o,s,i),le=null,Qe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){J(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hp(t,e),t=t.sibling}function Hp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),nt(e),r&4){try{Zr(3,e,e.return),Ds(3,e)}catch(v){J(e,e.return,v)}try{Zr(5,e,e.return)}catch(v){J(e,e.return,v)}}break;case 1:Ge(t,e),nt(e),r&512&&n!==null&&Yn(n,n.return);break;case 5:if(Ge(t,e),nt(e),r&512&&n!==null&&Yn(n,n.return),e.flags&32){var i=e.stateNode;try{li(i,"")}catch(v){J(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ch(i,o),sl(a,s);var u=sl(a,o);for(s=0;s<l.length;s+=2){var c=l[s],h=l[s+1];c==="style"?mh(i,h):c==="dangerouslySetInnerHTML"?hh(i,h):c==="children"?li(i,h):yu(i,c,h,u)}switch(a){case"input":tl(i,o);break;case"textarea":dh(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Jn(i,!!o.multiple,g,!1):d!==!!o.multiple&&(o.defaultValue!=null?Jn(i,!!o.multiple,o.defaultValue,!0):Jn(i,!!o.multiple,o.multiple?[]:"",!1))}i[yi]=o}catch(v){J(e,e.return,v)}}break;case 6:if(Ge(t,e),nt(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){J(e,e.return,v)}}break;case 3:if(Ge(t,e),nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fi(t.containerInfo)}catch(v){J(e,e.return,v)}break;case 4:Ge(t,e),nt(e);break;case 13:Ge(t,e),nt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(qu=Z())),r&4&&xd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(he=(u=he)||c,Ge(t,e),he=u):Ge(t,e),nt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(R=e,c=e.child;c!==null;){for(h=R=c;R!==null;){switch(d=R,g=d.child,d.tag){case 0:case 11:case 14:case 15:Zr(4,d,d.return);break;case 1:Yn(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){J(r,n,v)}}break;case 5:Yn(d,d.return);break;case 22:if(d.memoizedState!==null){Pd(h);continue}}g!==null?(g.return=d,R=g):Pd(h)}c=c.sibling}e:for(c=null,h=e;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ph("display",s))}catch(v){J(e,e.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){J(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ge(t,e),nt(e),r&4&&xd(e);break;case 21:break;default:Ge(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fp(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(li(i,""),r.flags&=-33);var o=Td(e);bl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Td(e);Ml(e,a,s);break;default:throw Error(E(161))}}catch(l){J(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function l0(e,t,n){R=e,Wp(e)}function Wp(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||co;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||he;a=co;var u=he;if(co=s,(he=l)&&!u)for(R=i;R!==null;)s=R,l=s.child,s.tag===22&&s.memoizedState!==null?Ad(i):l!==null?(l.return=s,R=l):Ad(i);for(;o!==null;)R=o,Wp(o),o=o.sibling;R=i,co=a,he=u}Rd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):Rd(e)}}function Rd(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||Ds(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ke(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&dd(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}dd(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&fi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}he||t.flags&512&&Dl(t)}catch(d){J(t,t.return,d)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Pd(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Ad(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ds(4,t)}catch(l){J(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){J(t,i,l)}}var o=t.return;try{Dl(t)}catch(l){J(t,o,l)}break;case 5:var s=t.return;try{Dl(t)}catch(l){J(t,s,l)}}}catch(l){J(t,t.return,l)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var u0=Math.ceil,rs=Ct.ReactCurrentDispatcher,Qu=Ct.ReactCurrentOwner,Fe=Ct.ReactCurrentBatchConfig,j=0,ae=null,te=null,ue=0,Pe=0,qn=tn(0),re=0,ki=null,Tn=0,Ms=0,Yu=0,ei=null,_e=null,qu=0,mr=1/0,dt=null,is=!1,jl=null,Gt=null,fo=!1,Ut=null,os=0,ti=0,$l=null,To=-1,xo=0;function ve(){return j&6?Z():To!==-1?To:To=Z()}function Kt(e){return e.mode&1?j&2&&ue!==0?ue&-ue:Gv.transition!==null?(xo===0&&(xo=xh()),xo):(e=U,e!==0||(e=window.event,e=e===void 0?16:Dh(e.type)),e):1}function Ze(e,t,n,r){if(50<ti)throw ti=0,$l=null,Error(E(185));Li(e,n,r),(!(j&2)||e!==ae)&&(e===ae&&(!(j&2)&&(Ms|=n),re===4&&Dt(e,ue)),Ce(e,r),n===1&&j===0&&!(t.mode&1)&&(mr=Z()+500,Ns&&nn()))}function Ce(e,t){var n=e.callbackNode;Gy(e,t);var r=Bo(e,e===ae?ue:0);if(r===0)n!==null&&Uc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Uc(n),t===1)e.tag===0?Vv(Nd.bind(null,e)):Zh(Nd.bind(null,e)),Fv(function(){!(j&6)&&nn()}),n=null;else{switch(Rh(r)){case 1:n=Eu;break;case 4:n=Ch;break;case 16:n=Fo;break;case 536870912:n=Th;break;default:n=Fo}n=Jp(n,Vp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vp(e,t){if(To=-1,xo=0,j&6)throw Error(E(327));var n=e.callbackNode;if(rr()&&e.callbackNode!==n)return null;var r=Bo(e,e===ae?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ss(e,r);else{t=r;var i=j;j|=2;var o=Kp();(ae!==e||ue!==t)&&(dt=null,mr=Z()+500,vn(e,t));do try{f0();break}catch(a){Gp(e,a)}while(1);Mu(),rs.current=o,j=i,te!==null?t=0:(ae=null,ue=0,t=re)}if(t!==0){if(t===2&&(i=dl(e),i!==0&&(r=i,t=Ul(e,i))),t===1)throw n=ki,vn(e,0),Dt(e,r),Ce(e,Z()),n;if(t===6)Dt(e,r);else{if(i=e.current.alternate,!(r&30)&&!c0(i)&&(t=ss(e,r),t===2&&(o=dl(e),o!==0&&(r=o,t=Ul(e,o))),t===1))throw n=ki,vn(e,0),Dt(e,r),Ce(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:cn(e,_e,dt);break;case 3:if(Dt(e,r),(r&130023424)===r&&(t=qu+500-Z(),10<t)){if(Bo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=wl(cn.bind(null,e,_e,dt),t);break}cn(e,_e,dt);break;case 4:if(Dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Je(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*u0(r/1960))-r,10<r){e.timeoutHandle=wl(cn.bind(null,e,_e,dt),r);break}cn(e,_e,dt);break;case 5:cn(e,_e,dt);break;default:throw Error(E(329))}}}return Ce(e,Z()),e.callbackNode===n?Vp.bind(null,e):null}function Ul(e,t){var n=ei;return e.current.memoizedState.isDehydrated&&(vn(e,t).flags|=256),e=ss(e,t),e!==2&&(t=_e,_e=n,t!==null&&zl(t)),e}function zl(e){_e===null?_e=e:_e.push.apply(_e,e)}function c0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!tt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dt(e,t){for(t&=~Yu,t&=~Ms,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function Nd(e){if(j&6)throw Error(E(327));rr();var t=Bo(e,0);if(!(t&1))return Ce(e,Z()),null;var n=ss(e,t);if(e.tag!==0&&n===2){var r=dl(e);r!==0&&(t=r,n=Ul(e,r))}if(n===1)throw n=ki,vn(e,0),Dt(e,t),Ce(e,Z()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cn(e,_e,dt),Ce(e,Z()),null}function Xu(e,t){var n=j;j|=1;try{return e(t)}finally{j=n,j===0&&(mr=Z()+500,Ns&&nn())}}function xn(e){Ut!==null&&Ut.tag===0&&!(j&6)&&rr();var t=j;j|=1;var n=Fe.transition,r=U;try{if(Fe.transition=null,U=1,e)return e()}finally{U=r,Fe.transition=n,j=t,!(j&6)&&nn()}}function Ju(){Pe=qn.current,V(qn)}function vn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zv(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(Ou(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ko();break;case 3:hr(),V(ke),V(me),Fu();break;case 5:zu(r);break;case 4:hr();break;case 13:V(Q);break;case 19:V(Q);break;case 10:bu(r.type._context);break;case 22:case 23:Ju()}n=n.return}if(ae=e,te=e=Qt(e.current,null),ue=Pe=t,re=0,ki=null,Yu=Ms=Tn=0,_e=ei=null,pn!==null){for(t=0;t<pn.length;t++)if(n=pn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}pn=null}return e}function Gp(e,t){do{var n=te;try{if(Mu(),ko.current=ns,ts){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ts=!1}if(Cn=0,oe=ne=Y=null,Jr=!1,Si=0,Qu.current=null,n===null||n.return===null){re=1,ki=t,te=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=ue,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=vd(s);if(g!==null){g.flags&=-257,wd(g,s,a,o,t),g.mode&1&&yd(o,u,t),t=g,l=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(l),t.updateQueue=v}else y.add(l);break e}else{if(!(t&1)){yd(o,u,t),Zu();break e}l=Error(E(426))}}else if(K&&a.mode&1){var _=vd(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),wd(_,s,a,o,t),Lu(pr(l,a));break e}}o=l=pr(l,a),re!==4&&(re=2),ei===null?ei=[o]:ei.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Pp(o,l,t);cd(o,p);break e;case 1:a=l;var f=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Gt===null||!Gt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Ap(o,a,t);cd(o,w);break e}}o=o.return}while(o!==null)}Yp(n)}catch(S){t=S,te===n&&n!==null&&(te=n=n.return);continue}break}while(1)}function Kp(){var e=rs.current;return rs.current=ns,e===null?ns:e}function Zu(){(re===0||re===3||re===2)&&(re=4),ae===null||!(Tn&268435455)&&!(Ms&268435455)||Dt(ae,ue)}function ss(e,t){var n=j;j|=2;var r=Kp();(ae!==e||ue!==t)&&(dt=null,vn(e,t));do try{d0();break}catch(i){Gp(e,i)}while(1);if(Mu(),j=n,rs.current=r,te!==null)throw Error(E(261));return ae=null,ue=0,re}function d0(){for(;te!==null;)Qp(te)}function f0(){for(;te!==null&&!jy();)Qp(te)}function Qp(e){var t=Xp(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?Yp(e):te=t,Qu.current=null}function Yp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=o0(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=i0(n,t,Pe),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function cn(e,t,n){var r=U,i=Fe.transition;try{Fe.transition=null,U=1,h0(e,t,n,r)}finally{Fe.transition=i,U=r}return null}function h0(e,t,n,r){do rr();while(Ut!==null);if(j&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ky(e,o),e===ae&&(te=ae=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fo||(fo=!0,Jp(Fo,function(){return rr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Fe.transition,Fe.transition=null;var s=U;U=1;var a=j;j|=4,Qu.current=null,a0(e,n),Hp(n,e),Lv(yl),Ho=!!gl,yl=gl=null,e.current=n,l0(n),$y(),j=a,U=s,Fe.transition=o}else e.current=n;if(fo&&(fo=!1,Ut=e,os=i),o=e.pendingLanes,o===0&&(Gt=null),Fy(n.stateNode),Ce(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(is)throw is=!1,e=jl,jl=null,e;return os&1&&e.tag!==0&&rr(),o=e.pendingLanes,o&1?e===$l?ti++:(ti=0,$l=e):ti=0,nn(),null}function rr(){if(Ut!==null){var e=Rh(os),t=Fe.transition,n=U;try{if(Fe.transition=null,U=16>e?16:e,Ut===null)var r=!1;else{if(e=Ut,Ut=null,os=0,j&6)throw Error(E(331));var i=j;for(j|=4,R=e.current;R!==null;){var o=R,s=o.child;if(R.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:Zr(8,c,o)}var h=c.child;if(h!==null)h.return=c,R=h;else for(;R!==null;){c=R;var d=c.sibling,g=c.return;if(zp(c),c===u){R=null;break}if(d!==null){d.return=g,R=d;break}R=g}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}R=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,R=s;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Zr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,R=p;break e}R=o.return}}var f=e.current;for(R=f;R!==null;){s=R;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,R=m;else e:for(s=f;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ds(9,a)}}catch(S){J(a,a.return,S)}if(a===s){R=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,R=w;break e}R=a.return}}if(j=i,nn(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(Ts,e)}catch{}r=!0}return r}finally{U=n,Fe.transition=t}}return!1}function Od(e,t,n){t=pr(n,t),t=Pp(e,t,1),e=Vt(e,t,1),t=ve(),e!==null&&(Li(e,1,t),Ce(e,t))}function J(e,t,n){if(e.tag===3)Od(e,e,n);else for(;t!==null;){if(t.tag===3){Od(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gt===null||!Gt.has(r))){e=pr(n,e),e=Ap(t,e,1),t=Vt(t,e,1),e=ve(),t!==null&&(Li(t,1,e),Ce(t,e));break}}t=t.return}}function p0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ue&n)===n&&(re===4||re===3&&(ue&130023424)===ue&&500>Z()-qu?vn(e,0):Yu|=n),Ce(e,t)}function qp(e,t){t===0&&(e.mode&1?(t=to,to<<=1,!(to&130023424)&&(to=4194304)):t=1);var n=ve();e=Et(e,t),e!==null&&(Li(e,t,n),Ce(e,n))}function m0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qp(e,n)}function g0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),qp(e,n)}var Xp;Xp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Ee=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ee=!1,r0(e,t,n);Ee=!!(e.flags&131072)}else Ee=!1,K&&t.flags&1048576&&ep(t,qo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Co(e,t),e=t.pendingProps;var i=cr(t,me.current);nr(t,n),i=Hu(null,t,r,e,i,n);var o=Wu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(r)?(o=!0,Qo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$u(t),i.updater=Os,t.stateNode=i,i._reactInternals=t,Tl(t,r,e,n),t=Pl(null,t,r,!0,o,n)):(t.tag=0,K&&o&&Nu(t),ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Co(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=v0(r),e=Ke(r,e),i){case 0:t=Rl(null,t,r,e,n);break e;case 1:t=Ed(null,t,r,e,n);break e;case 11:t=Sd(null,t,r,e,n);break e;case 14:t=_d(null,t,r,Ke(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),Rl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),Ed(e,t,r,i,n);case 3:e:{if(Dp(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ip(e,t),Zo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=pr(Error(E(423)),t),t=kd(e,t,r,n,i);break e}else if(r!==i){i=pr(Error(E(424)),t),t=kd(e,t,r,n,i);break e}else for(Ne=Wt(t.stateNode.containerInfo.firstChild),Oe=t,K=!0,Ye=null,n=lp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dr(),r===i){t=kt(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return up(t),e===null&&kl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,vl(r,i)?s=null:o!==null&&vl(r,o)&&(t.flags|=32),Lp(e,t),ye(e,t,s,n),t.child;case 6:return e===null&&kl(t),null;case 13:return Mp(e,t,n);case 4:return Uu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fr(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),Sd(e,t,r,i,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,B(Xo,r._currentValue),r._currentValue=s,o!==null)if(tt(o.value,s)){if(o.children===i.children&&!ke.current){t=kt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=vt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Il(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(E(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Il(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,nr(t,n),i=Be(i),r=r(i),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,i=Ke(r,t.pendingProps),i=Ke(r.type,i),_d(e,t,r,i,n);case 15:return Np(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),Co(e,t),t.tag=1,Ie(r)?(e=!0,Qo(t)):e=!1,nr(t,n),sp(t,r,i),Tl(t,r,i,n),Pl(null,t,r,!0,e,n);case 19:return bp(e,t,n);case 22:return Op(e,t,n)}throw Error(E(156,t.tag))};function Jp(e,t){return Ih(e,t)}function y0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,t,n,r){return new y0(e,t,n,r)}function ec(e){return e=e.prototype,!(!e||!e.isReactComponent)}function v0(e){if(typeof e=="function")return ec(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wu)return 11;if(e===Su)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ro(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")ec(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case zn:return wn(n.children,i,o,t);case vu:s=8,i|=8;break;case qa:return e=ze(12,n,t,i|2),e.elementType=qa,e.lanes=o,e;case Xa:return e=ze(13,n,t,i),e.elementType=Xa,e.lanes=o,e;case Ja:return e=ze(19,n,t,i),e.elementType=Ja,e.lanes=o,e;case ah:return bs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oh:s=10;break e;case sh:s=9;break e;case wu:s=11;break e;case Su:s=14;break e;case Nt:s=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=ze(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function wn(e,t,n,r){return e=ze(7,e,r,t),e.lanes=n,e}function bs(e,t,n,r){return e=ze(22,e,r,t),e.elementType=ah,e.lanes=n,e.stateNode={isHidden:!1},e}function Ra(e,t,n){return e=ze(6,e,null,t),e.lanes=n,e}function Pa(e,t,n){return t=ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function w0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ua(0),this.expirationTimes=ua(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ua(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tc(e,t,n,r,i,o,s,a,l){return e=new w0(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ze(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$u(o),e}function S0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zp(e){if(!e)return Zt;e=e._reactInternals;e:{if(On(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Ie(n))return Jh(e,n,t)}return t}function em(e,t,n,r,i,o,s,a,l){return e=tc(n,r,!0,e,i,o,s,a,l),e.context=Zp(null),n=e.current,r=ve(),i=Kt(n),o=vt(r,i),o.callback=t??null,Vt(n,o,i),e.current.lanes=i,Li(e,i,r),Ce(e,r),e}function js(e,t,n,r){var i=t.current,o=ve(),s=Kt(i);return n=Zp(n),t.context===null?t.context=n:t.pendingContext=n,t=vt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vt(i,t,s),e!==null&&(Ze(e,i,s,o),Eo(e,i,s)),s}function as(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ld(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nc(e,t){Ld(e,t),(e=e.alternate)&&Ld(e,t)}function _0(){return null}var tm=typeof reportError=="function"?reportError:function(e){console.error(e)};function rc(e){this._internalRoot=e}$s.prototype.render=rc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));js(e,t,null,null)};$s.prototype.unmount=rc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){js(null,e,null,null)}),t[_t]=null}};function $s(e){this._internalRoot=e}$s.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&Lh(e)}};function ic(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Us(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dd(){}function E0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=as(s);o.call(u)}}var s=em(t,r,e,0,null,!1,!1,"",Dd);return e._reactRootContainer=s,e[_t]=s.current,mi(e.nodeType===8?e.parentNode:e),xn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=as(l);a.call(u)}}var l=tc(e,0,!1,null,null,!1,!1,"",Dd);return e._reactRootContainer=l,e[_t]=l.current,mi(e.nodeType===8?e.parentNode:e),xn(function(){js(t,l,n,r)}),l}function zs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=as(s);a.call(l)}}js(t,s,e,i)}else s=E0(n,t,e,i,r);return as(s)}Ph=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Br(t.pendingLanes);n!==0&&(ku(t,n|1),Ce(t,Z()),!(j&6)&&(mr=Z()+500,nn()))}break;case 13:xn(function(){var r=Et(e,1);if(r!==null){var i=ve();Ze(r,e,1,i)}}),nc(e,1)}};Iu=function(e){if(e.tag===13){var t=Et(e,134217728);if(t!==null){var n=ve();Ze(t,e,134217728,n)}nc(e,134217728)}};Ah=function(e){if(e.tag===13){var t=Kt(e),n=Et(e,t);if(n!==null){var r=ve();Ze(n,e,t,r)}nc(e,t)}};Nh=function(){return U};Oh=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};ll=function(e,t,n){switch(t){case"input":if(tl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=As(r);if(!i)throw Error(E(90));uh(r),tl(r,i)}}}break;case"textarea":dh(e,n);break;case"select":t=n.value,t!=null&&Jn(e,!!n.multiple,t,!1)}};vh=Xu;wh=xn;var k0={usingClientEntryPoint:!1,Events:[Mi,Wn,As,gh,yh,Xu]},Ur={findFiberByHostInstance:hn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},I0={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Eh(e),e===null?null:e.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance||_0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ho.isDisabled&&ho.supportsFiber)try{Ts=ho.inject(I0),st=ho}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k0;De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ic(t))throw Error(E(200));return S0(e,t,null,n)};De.createRoot=function(e,t){if(!ic(e))throw Error(E(299));var n=!1,r="",i=tm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=tc(e,1,!1,null,null,n,!1,r,i),e[_t]=t.current,mi(e.nodeType===8?e.parentNode:e),new rc(t)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Eh(t),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return xn(e)};De.hydrate=function(e,t,n){if(!Us(t))throw Error(E(200));return zs(null,e,t,!0,n)};De.hydrateRoot=function(e,t,n){if(!ic(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=tm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=em(t,null,e,1,n??null,i,!1,o,s),e[_t]=t.current,mi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new $s(t)};De.render=function(e,t,n){if(!Us(t))throw Error(E(200));return zs(null,e,t,!1,n)};De.unmountComponentAtNode=function(e){if(!Us(e))throw Error(E(40));return e._reactRootContainer?(xn(function(){zs(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1};De.unstable_batchedUpdates=Xu;De.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Us(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return zs(e,t,n,!1,r)};De.version="18.2.0-next-9e3b772b8-20220608";function nm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nm)}catch(e){console.error(e)}}nm(),eh.exports=De;var C0=eh.exports,rm,Md=C0;rm=Qa.createRoot=Md.createRoot,Qa.hydrateRoot=Md.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ii(){return Ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ii.apply(this,arguments)}var zt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(zt||(zt={}));const bd="popstate";function T0(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Fl("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:im(i)}return R0(t,n,null,e)}function ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function oc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function x0(){return Math.random().toString(36).substr(2,8)}function jd(e,t){return{usr:e.state,key:e.key,idx:t}}function Fl(e,t,n,r){return n===void 0&&(n=null),Ii({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Tr(t):t,{state:n,key:t&&t.key||r||x0()})}function im(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Tr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function R0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=zt.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(Ii({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function h(){a=zt.Pop;let _=c(),p=_==null?null:_-u;u=_,l&&l({action:a,location:v.location,delta:p})}function d(_,p){a=zt.Push;let f=Fl(v.location,_,p);n&&n(f,_),u=c()+1;let m=jd(f,u),w=v.createHref(f);try{s.pushState(m,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(w)}o&&l&&l({action:a,location:v.location,delta:1})}function g(_,p){a=zt.Replace;let f=Fl(v.location,_,p);n&&n(f,_),u=c();let m=jd(f,u),w=v.createHref(f);s.replaceState(m,"",w),o&&l&&l({action:a,location:v.location,delta:0})}function y(_){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof _=="string"?_:im(_);return ie(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return a},get location(){return e(i,s)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(bd,h),l=_,()=>{i.removeEventListener(bd,h),l=null}},createHref(_){return t(i,_)},createURL:y,encodeLocation(_){let p=y(_);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:g,go(_){return s.go(_)}};return v}var $d;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})($d||($d={}));function P0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Tr(t):t,i=am(r.pathname||"/",n);if(i==null)return null;let o=om(e);A0(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=U0(o[a],B0(i));return s}function om(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(ie(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Sn([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(ie(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),om(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:j0(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of sm(o.path))i(o,s,l)}),t}function sm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=sm(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function A0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:$0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const N0=/^:\w+$/,O0=3,L0=2,D0=1,M0=10,b0=-2,Ud=e=>e==="*";function j0(e,t){let n=e.split("/"),r=n.length;return n.some(Ud)&&(r+=b0),t&&(r+=L0),n.filter(i=>!Ud(i)).reduce((i,o)=>i+(N0.test(o)?O0:o===""?D0:M0),r)}function $0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function U0(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=z0({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;o.push({params:r,pathname:Sn([i,c.pathname]),pathnameBase:Q0(Sn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Sn([i,c.pathnameBase]))}return o}function z0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=F0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";s=o.slice(0,o.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=H0(a[h]||"",c),u},{}),pathname:o,pathnameBase:s,pattern:e}}function F0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),oc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function B0(e){try{return decodeURI(e)}catch(t){return oc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function H0(e,t){try{return decodeURIComponent(e)}catch(n){return oc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function am(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function W0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Tr(e):e;return{pathname:n?n.startsWith("/")?n:V0(n,t):t,search:Y0(r),hash:q0(i)}}function V0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Aa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function G0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function K0(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Tr(e):(i=Ii({},e),ie(!i.pathname||!i.pathname.includes("?"),Aa("?","pathname","search",i)),ie(!i.pathname||!i.pathname.includes("#"),Aa("#","pathname","hash",i)),ie(!i.search||!i.search.includes("#"),Aa("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let h=t.length-1;if(s.startsWith("..")){let d=s.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?t[h]:"/"}let l=W0(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Sn=e=>e.join("/").replace(/\/\/+/g,"/"),Q0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Y0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,q0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function X0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const lm=["post","put","patch","delete"];new Set(lm);const J0=["get",...lm];new Set(J0);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ls(){return ls=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ls.apply(this,arguments)}const sc=I.createContext(null),Z0=I.createContext(null),Fs=I.createContext(null),Bs=I.createContext(null),xr=I.createContext({outlet:null,matches:[],isDataRoute:!1}),um=I.createContext(null);function Hs(){return I.useContext(Bs)!=null}function cm(){return Hs()||ie(!1),I.useContext(Bs).location}function dm(e){I.useContext(Fs).static||I.useLayoutEffect(e)}function ji(){let{isDataRoute:e}=I.useContext(xr);return e?f1():e1()}function e1(){Hs()||ie(!1);let e=I.useContext(sc),{basename:t,navigator:n}=I.useContext(Fs),{matches:r}=I.useContext(xr),{pathname:i}=cm(),o=JSON.stringify(G0(r).map(l=>l.pathnameBase)),s=I.useRef(!1);return dm(()=>{s.current=!0}),I.useCallback(function(l,u){if(u===void 0&&(u={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let c=K0(l,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Sn([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,o,i,e])}function t1(e,t){return n1(e,t)}function n1(e,t,n){Hs()||ie(!1);let{navigator:r}=I.useContext(Fs),{matches:i}=I.useContext(xr),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=cm(),u;if(t){var c;let v=typeof t=="string"?Tr(t):t;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||ie(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",g=P0(e,{pathname:d}),y=a1(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:Sn([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Sn([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return t&&y?I.createElement(Bs.Provider,{value:{location:ls({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:zt.Pop}},y):y}function r1(){let e=d1(),t=X0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},t),n?I.createElement("pre",{style:i},n):null,o)}const i1=I.createElement(r1,null);class o1 extends I.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?I.createElement(xr.Provider,{value:this.props.routeContext},I.createElement(um.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function s1(e){let{routeContext:t,match:n,children:r}=e,i=I.useContext(sc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(xr.Provider,{value:t},r)}function a1(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||ie(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,u)=>{let c=l.route.id?s==null?void 0:s[l.route.id]:null,h=null;n&&(h=l.route.errorElement||i1);let d=t.concat(o.slice(0,u+1)),g=()=>{let y;return c?y=h:l.route.Component?y=I.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,I.createElement(s1,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?I.createElement(o1,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:g(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):g()},null)}var fm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(fm||{}),us=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(us||{});function l1(e){let t=I.useContext(sc);return t||ie(!1),t}function u1(e){let t=I.useContext(Z0);return t||ie(!1),t}function c1(e){let t=I.useContext(xr);return t||ie(!1),t}function hm(e){let t=c1(),n=t.matches[t.matches.length-1];return n.route.id||ie(!1),n.route.id}function d1(){var e;let t=I.useContext(um),n=u1(us.UseRouteError),r=hm(us.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function f1(){let{router:e}=l1(fm.UseNavigateStable),t=hm(us.UseNavigateStable),n=I.useRef(!1);return dm(()=>{n.current=!0}),I.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ls({fromRouteId:t},o)))},[e,t])}function dn(e){ie(!1)}function h1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=zt.Pop,navigator:o,static:s=!1}=e;Hs()&&ie(!1);let a=t.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=Tr(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:g="default"}=r,y=I.useMemo(()=>{let v=am(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:d,key:g},navigationType:i}},[a,u,c,h,d,g,i]);return y==null?null:I.createElement(Fs.Provider,{value:l},I.createElement(Bs.Provider,{children:n,value:y}))}function p1(e){let{children:t,location:n}=e;return t1(Bl(t),n)}new Promise(()=>{});function Bl(e,t){t===void 0&&(t=[]);let n=[];return I.Children.forEach(e,(r,i)=>{if(!I.isValidElement(r))return;let o=[...t,i];if(r.type===I.Fragment){n.push.apply(n,Bl(r.props.children,o));return}r.type!==dn&&ie(!1),!r.props.index||!r.props.children||ie(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Bl(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const m1="startTransition",zd=my[m1];function g1(e){let{basename:t,children:n,future:r,window:i}=e,o=I.useRef();o.current==null&&(o.current=T0({window:i,v5Compat:!0}));let s=o.current,[a,l]=I.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=I.useCallback(h=>{u&&zd?zd(()=>l(h)):l(h)},[l,u]);return I.useLayoutEffect(()=>s.listen(c),[s,c]),I.createElement(h1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s})}var Fd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Fd||(Fd={}));var Bd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Bd||(Bd={}));var pe=function(){return pe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},pe.apply(this,arguments)};function ac(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Ci(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var W="-ms-",ni="-moz-",$="-webkit-",pm="comm",Ws="rule",lc="decl",y1="@import",mm="@keyframes",v1="@layer",w1=Math.abs,uc=String.fromCharCode,Hl=Object.assign;function S1(e,t){return se(e,0)^45?(((t<<2^se(e,0))<<2^se(e,1))<<2^se(e,2))<<2^se(e,3):0}function gm(e){return e.trim()}function ft(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function Po(e,t){return e.indexOf(t)}function se(e,t){return e.charCodeAt(t)|0}function gr(e,t,n){return e.slice(t,n)}function it(e){return e.length}function ym(e){return e.length}function Wr(e,t){return t.push(e),e}function _1(e,t){return e.map(t).join("")}function Hd(e,t){return e.filter(function(n){return!ft(n,t)})}var Vs=1,yr=1,vm=0,We=0,ee=0,Rr="";function Gs(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Vs,column:yr,length:s,return:"",siblings:a}}function At(e,t){return Hl(Gs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function jn(e){for(;e.root;)e=At(e.root,{children:[e]});Wr(e,e.siblings)}function E1(){return ee}function k1(){return ee=We>0?se(Rr,--We):0,yr--,ee===10&&(yr=1,Vs--),ee}function et(){return ee=We<vm?se(Rr,We++):0,yr++,ee===10&&(yr=1,Vs++),ee}function _n(){return se(Rr,We)}function Ao(){return We}function Ks(e,t){return gr(Rr,e,t)}function Wl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function I1(e){return Vs=yr=1,vm=it(Rr=e),We=0,[]}function C1(e){return Rr="",e}function Na(e){return gm(Ks(We-1,Vl(e===91?e+2:e===40?e+1:e)))}function T1(e){for(;(ee=_n())&&ee<33;)et();return Wl(e)>2||Wl(ee)>3?"":" "}function x1(e,t){for(;--t&&et()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return Ks(e,Ao()+(t<6&&_n()==32&&et()==32))}function Vl(e){for(;et();)switch(ee){case e:return We;case 34:case 39:e!==34&&e!==39&&Vl(ee);break;case 40:e===41&&Vl(e);break;case 92:et();break}return We}function R1(e,t){for(;et()&&e+ee!==47+10;)if(e+ee===42+42&&_n()===47)break;return"/*"+Ks(t,We-1)+"*"+uc(e===47?e:et())}function P1(e){for(;!Wl(_n());)et();return Ks(e,We)}function A1(e){return C1(No("",null,null,null,[""],e=I1(e),0,[0],e))}function No(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,h=s,d=0,g=0,y=0,v=1,_=1,p=1,f=0,m="",w=i,S=o,T=r,k=m;_;)switch(y=f,f=et()){case 40:if(y!=108&&se(k,h-1)==58){Po(k+=D(Na(f),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:k+=Na(f);break;case 9:case 10:case 13:case 32:k+=T1(y);break;case 92:k+=x1(Ao()-1,7);continue;case 47:switch(_n()){case 42:case 47:Wr(N1(R1(et(),Ao()),t,n,l),l);break;default:k+="/"}break;case 123*v:a[u++]=it(k)*p;case 125*v:case 59:case 0:switch(f){case 0:case 125:_=0;case 59+c:p==-1&&(k=D(k,/\f/g,"")),g>0&&it(k)-h&&Wr(g>32?Vd(k+";",r,n,h-1,l):Vd(D(k," ","")+";",r,n,h-2,l),l);break;case 59:k+=";";default:if(Wr(T=Wd(k,t,n,u,c,i,a,m,w=[],S=[],h,o),o),f===123)if(c===0)No(k,t,T,T,w,o,h,a,S);else switch(d===99&&se(k,3)===110?100:d){case 100:case 108:case 109:case 115:No(e,T,T,r&&Wr(Wd(e,T,T,0,0,i,a,m,i,w=[],h,S),S),i,S,h,a,r?w:S);break;default:No(k,T,T,T,[""],S,0,a,S)}}u=c=g=0,v=p=1,m=k="",h=s;break;case 58:h=1+it(k),g=y;default:if(v<1){if(f==123)--v;else if(f==125&&v++==0&&k1()==125)continue}switch(k+=uc(f),f*v){case 38:p=c>0?1:(k+="\f",-1);break;case 44:a[u++]=(it(k)-1)*p,p=1;break;case 64:_n()===45&&(k+=Na(et())),d=_n(),c=h=it(m=k+=P1(Ao())),f++;break;case 45:y===45&&it(k)==2&&(v=0)}}return o}function Wd(e,t,n,r,i,o,s,a,l,u,c,h){for(var d=i-1,g=i===0?o:[""],y=ym(g),v=0,_=0,p=0;v<r;++v)for(var f=0,m=gr(e,d+1,d=w1(_=s[v])),w=e;f<y;++f)(w=gm(_>0?g[f]+" "+m:D(m,/&\f/g,g[f])))&&(l[p++]=w);return Gs(e,t,n,i===0?Ws:a,l,u,c,h)}function N1(e,t,n,r){return Gs(e,t,n,pm,uc(E1()),gr(e,2,-2),0,r)}function Vd(e,t,n,r,i){return Gs(e,t,n,lc,gr(e,0,r),gr(e,r+1,-1),r,i)}function wm(e,t,n){switch(S1(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 4789:return ni+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+ni+e+W+e+e;case 5936:switch(se(e,t+11)){case 114:return $+e+W+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+W+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+W+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return $+e+W+e+e;case 6165:return $+e+W+"flex-"+e+e;case 5187:return $+e+D(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+W+"flex-$1$2")+e;case 5443:return $+e+W+"flex-item-"+D(e,/flex-|-self/g,"")+(ft(e,/flex-|baseline/)?"":W+"grid-row-"+D(e,/flex-|-self/g,""))+e;case 4675:return $+e+W+"flex-line-pack"+D(e,/align-content|flex-|-self/g,"")+e;case 5548:return $+e+W+D(e,"shrink","negative")+e;case 5292:return $+e+W+D(e,"basis","preferred-size")+e;case 6060:return $+"box-"+D(e,"-grow","")+$+e+W+D(e,"grow","positive")+e;case 4554:return $+D(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+W+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4200:if(!ft(e,/flex-|baseline/))return W+"grid-column-align"+gr(e,t)+e;break;case 2592:case 3360:return W+D(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,ft(r.props,/grid-\w+-end/)})?~Po(e+(n=n[t].value),"span")?e:W+D(e,"-start","")+e+W+"grid-row-span:"+(~Po(n,"span")?ft(n,/\d+/):+ft(n,/\d+/)-+ft(e,/\d+/))+";":W+D(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ft(r.props,/grid-\w+-start/)})?e:W+D(D(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(it(e)-1-t>6)switch(se(e,t+1)){case 109:if(se(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+ni+(se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Po(e,"stretch")?wm(D(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return D(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return W+i+":"+o+u+(s?W+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(se(e,t+6)===121)return D(e,":",":"+$)+e;break;case 6444:switch(se(e,se(e,14)===45?18:11)){case 120:return D(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$+(se(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+W+"$2box$3")+e;case 100:return D(e,":",":"+W)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return D(e,"scroll-","scroll-snap-")+e}return e}function cs(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function O1(e,t,n,r){switch(e.type){case v1:if(e.children.length)break;case y1:case lc:return e.return=e.return||e.value;case pm:return"";case mm:return e.return=e.value+"{"+cs(e.children,r)+"}";case Ws:if(!it(e.value=e.props.join(",")))return""}return it(n=cs(e.children,r))?e.return=e.value+"{"+n+"}":""}function L1(e){var t=ym(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function D1(e){return function(t){t.root||(t=t.return)&&e(t)}}function M1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case lc:e.return=wm(e.value,e.length,n);return;case mm:return cs([At(e,{value:D(e.value,"@","@"+$)})],r);case Ws:if(e.length)return _1(n=e.props,function(i){switch(ft(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jn(At(e,{props:[D(i,/:(read-\w+)/,":"+ni+"$1")]})),jn(At(e,{props:[i]})),Hl(e,{props:Hd(n,r)});break;case"::placeholder":jn(At(e,{props:[D(i,/:(plac\w+)/,":"+$+"input-$1")]})),jn(At(e,{props:[D(i,/:(plac\w+)/,":"+ni+"$1")]})),jn(At(e,{props:[D(i,/:(plac\w+)/,W+"input-$1")]})),jn(At(e,{props:[i]})),Hl(e,{props:Hd(n,r)});break}return""})}}var b1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},vr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",cc=typeof window<"u"&&"HTMLElement"in window,j1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),$1={},Qs=Object.freeze([]),wr=Object.freeze({});function Sm(e,t,n){return n===void 0&&(n=wr),e.theme!==n.theme&&e.theme||t||n.theme}var _m=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),U1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,z1=/(^-|-$)/g;function Gd(e){return e.replace(U1,"-").replace(z1,"")}var F1=/(a)(d)/gi,Kd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Gl(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Kd(t%52)+n;return(Kd(t%52)+n).replace(F1,"$1-$2")}var Oa,Xn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Em=function(e){return Xn(5381,e)};function km(e){return Gl(Em(e)>>>0)}function B1(e){return e.displayName||e.name||"Component"}function La(e){return typeof e=="string"&&!0}var Im=typeof Symbol=="function"&&Symbol.for,Cm=Im?Symbol.for("react.memo"):60115,H1=Im?Symbol.for("react.forward_ref"):60112,W1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},V1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Tm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},G1=((Oa={})[H1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Oa[Cm]=Tm,Oa);function Qd(e){return("type"in(t=e)&&t.type.$$typeof)===Cm?Tm:"$$typeof"in e?G1[e.$$typeof]:W1;var t}var K1=Object.defineProperty,Q1=Object.getOwnPropertyNames,Yd=Object.getOwnPropertySymbols,Y1=Object.getOwnPropertyDescriptor,q1=Object.getPrototypeOf,qd=Object.prototype;function xm(e,t,n){if(typeof t!="string"){if(qd){var r=q1(t);r&&r!==qd&&xm(e,r,n)}var i=Q1(t);Yd&&(i=i.concat(Yd(t)));for(var o=Qd(e),s=Qd(t),a=0;a<i.length;++a){var l=i[a];if(!(l in V1||n&&n[l]||s&&l in s||o&&l in o)){var u=Y1(t,l);try{K1(e,l,u)}catch{}}}}return e}function Sr(e){return typeof e=="function"}function dc(e){return typeof e=="object"&&"styledComponentId"in e}function gn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Kl(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ti(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ql(e,t,n){if(n===void 0&&(n=!1),!n&&!Ti(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ql(e[r],t[r]);else if(Ti(t))for(var r in t)e[r]=Ql(e[r],t[r]);return e}function fc(e,t){Object.defineProperty(e,"toString",{value:t})}function $i(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var X1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw $i(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},e}(),Oo=new Map,ds=new Map,Da=1,po=function(e){if(Oo.has(e))return Oo.get(e);for(;ds.has(Da);)Da++;var t=Da++;return Oo.set(e,t),ds.set(t,e),t},J1=function(e,t){Oo.set(e,t),ds.set(t,e)},Z1="style[".concat(vr,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),ew=new RegExp("^".concat(vr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),tw=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},nw=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(ew);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(J1(c,u),tw(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function rw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Rm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(vr,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(vr,"active"),r.setAttribute("data-styled-version","6.0.7");var s=rw();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},iw=function(){function e(t){this.element=Rm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw $i(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),ow=function(){function e(t){this.element=Rm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),sw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Xd=cc,aw={isServer:!cc,useCSSOMInjection:!j1},fs=function(){function e(t,n,r){t===void 0&&(t=wr),n===void 0&&(n={});var i=this;this.options=pe(pe({},aw),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&cc&&Xd&&(Xd=!1,function(o){for(var s=document.querySelectorAll(Z1),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(vr)!=="active"&&(nw(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),fc(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(h){var d=function(p){return ds.get(p)}(h);if(d===void 0)return"continue";var g=o.names.get(d),y=s.getGroup(h);if(g===void 0||y.length===0)return"continue";var v="".concat(vr,".g").concat(h,'[id="').concat(d,'"]'),_="";g!==void 0&&g.forEach(function(p){p.length>0&&(_+="".concat(p,","))}),l+="".concat(y).concat(v,'{content:"').concat(_,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return po(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(pe(pe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new sw(i):r?new iw(i):new ow(i)}(this.options),new X1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(po(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(po(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(po(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),lw=/&/g,uw=/^\s*\/\/.*$/gm;function Pm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Pm(n.children,t)),n})}function cw(e){var t,n,r,i=e===void 0?wr:e,o=i.options,s=o===void 0?wr:o,a=i.plugins,l=a===void 0?Qs:a,u=function(d,g,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):d},c=l.slice();c.push(function(d){d.type===Ws&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(lw,n).replace(r,u))}),s.prefix&&c.push(M1),c.push(O1);var h=function(d,g,y,v){g===void 0&&(g=""),y===void 0&&(y=""),v===void 0&&(v="&"),t=v,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var _=d.replace(uw,""),p=A1(y||g?"".concat(y," ").concat(g," { ").concat(_," }"):_);s.namespace&&(p=Pm(p,s.namespace));var f=[];return cs(p,L1(c.concat(D1(function(m){return f.push(m)})))),f};return h.hash=l.length?l.reduce(function(d,g){return g.name||$i(15),Xn(d,g.name)},5381).toString():"",h}var dw=new fs,Yl=cw(),Am=Xe.createContext({shouldForwardProp:void 0,styleSheet:dw,stylis:Yl});Am.Consumer;Xe.createContext(void 0);function ql(){return I.useContext(Am)}var fw=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Yl);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,fc(this,function(){throw $i(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Yl),this.name+t.hash},e}(),hw=function(e){return e>="A"&&e<="Z"};function Jd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;hw(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Nm=function(e){return e==null||e===!1||e===""},Om=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Nm(o)&&(Array.isArray(o)&&o.isCss||Sr(o)?r.push("".concat(Jd(i),":"),o,";"):Ti(o)?r.push.apply(r,Ci(Ci(["".concat(i," {")],Om(o),!1),["}"],!1)):r.push("".concat(Jd(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in b1||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Yt(e,t,n,r){if(Nm(e))return[];if(dc(e))return[".".concat(e.styledComponentId)];if(Sr(e)){if(!Sr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Yt(i,t,n,r)}var o;return e instanceof fw?n?(e.inject(n,r),[e.getName(r)]):[e]:Ti(e)?Om(e):Array.isArray(e)?Array.prototype.concat.apply(Qs,e.map(function(s){return Yt(s,t,n,r)})):[e.toString()]}function Lm(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Sr(n)&&!dc(n))return!1}return!0}var pw=Em("6.0.7"),mw=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Lm(t),this.componentId=n,this.baseHash=Xn(pw,n),this.baseStyle=r,fs.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=gn(i,this.staticRulesId);else{var o=Kl(Yt(this.rules,t,n,r)),s=Gl(Xn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=gn(i,s),this.staticRulesId=s}else{for(var l=Xn(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var h=this.rules[c];if(typeof h=="string")u+=h;else if(h){var d=Kl(Yt(h,t,n,r));l=Xn(l,d),u+=d}}if(u){var g=Gl(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=gn(i,g)}}return i},e}(),hc=Xe.createContext(void 0);hc.Consumer;var Ma={};function gw(e,t,n){var r=dc(e),i=e,o=!La(e),s=t.attrs,a=s===void 0?Qs:s,l=t.componentId,u=l===void 0?function(m,w){var S=typeof m!="string"?"sc":Gd(m);Ma[S]=(Ma[S]||0)+1;var T="".concat(S,"-").concat(km("6.0.7"+S+Ma[S]));return w?"".concat(w,"-").concat(T):T}(t.displayName,t.parentComponentId):l,c=t.displayName;c===void 0&&function(m){return La(m)?"styled.".concat(m):"Styled(".concat(B1(m),")")}(e);var h=t.displayName&&t.componentId?"".concat(Gd(t.displayName),"-").concat(t.componentId):t.componentId||u,d=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;g=function(m,w){return y(m,w)&&v(m,w)}}else g=y}var _=new mw(n,h,r?i.componentStyle:void 0);function p(m,w){return function(S,T,k){var P=S.attrs,z=S.componentStyle,M=S.defaultProps,Te=S.foldedComponentIds,on=S.styledComponentId,sn=S.target,Qi=Xe.useContext(hc),na=ql(),an=S.shouldForwardProp||na.shouldForwardProp,be=function(ct,xe,Tt){for(var Re,je=pe(pe({},xe),{className:void 0,theme:Tt}),ra=0;ra<ct.length;ra+=1){var Yi=Sr(Re=ct[ra])?Re(je):Re;for(var xt in Yi)je[xt]=xt==="className"?gn(je[xt],Yi[xt]):xt==="style"?pe(pe({},je[xt]),Yi[xt]):Yi[xt]}return xe.className&&(je.className=gn(je.className,xe.className)),je}(P,T,Sm(T,Qi,M)||wr),x=be.as||sn,N={};for(var O in be)be[O]===void 0||O[0]==="$"||O==="as"||O==="theme"||(O==="forwardedAs"?N.as=be.forwardedAs:an&&!an(O,x)||(N[O]=be[O]));var G=function(ct,xe){var Tt=ql(),Re=ct.generateAndInjectStyles(xe,Tt.styleSheet,Tt.stylis);return Re}(z,be),X=gn(Te,on);return G&&(X+=" "+G),be.className&&(X+=" "+be.className),N[La(x)&&!_m.has(x)?"class":"className"]=X,N.ref=k,I.createElement(x,N)}(f,m,w)}var f=Xe.forwardRef(p);return f.attrs=d,f.componentStyle=_,f.shouldForwardProp=g,f.foldedComponentIds=r?gn(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=h,f.target=r?i.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?function(w){for(var S=[],T=1;T<arguments.length;T++)S[T-1]=arguments[T];for(var k=0,P=S;k<P.length;k++)Ql(w,P[k],!0);return w}({},i.defaultProps,m):m}}),fc(f,function(){return".".concat(f.styledComponentId)}),o&&xm(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function Zd(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ef=function(e){return Object.assign(e,{isCss:!0})};function Dm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Sr(e)||Ti(e)){var r=e;return ef(Yt(Zd(Qs,Ci([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Yt(i):ef(Yt(Zd(i,t)))}function Xl(e,t,n){if(n===void 0&&(n=wr),!t)throw $i(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Dm.apply(void 0,Ci([i],o,!1)))};return r.attrs=function(i){return Xl(e,t,pe(pe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Xl(e,t,pe(pe({},n),i))},r}var Mm=function(e){return Xl(gw,e)},A=Mm;_m.forEach(function(e){A[e]=Mm(e)});var yw=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Lm(t),fs.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Kl(Yt(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&fs.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function vw(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Dm.apply(void 0,Ci([e],t,!1)),i="sc-global-".concat(km(JSON.stringify(r))),o=new yw(r,i),s=function(l){var u=ql(),c=Xe.useContext(hc),h=Xe.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(h,l,u.styleSheet,c,u.stylis),Xe.useLayoutEffect(function(){if(!u.styleSheet.server)return a(h,l,u.styleSheet,c,u.stylis),function(){return o.removeStyles(h,u.styleSheet)}},[h,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,h,d){if(o.isStatic)o.renderStyles(l,$1,c,d);else{var g=pe(pe({},u),{theme:Sm(u,h,s.defaultProps)});o.renderStyles(l,g,c,d)}}return Xe.memo(s)}const bm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAADwCAQAAAAXmBgiAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfmCBUMGRTTvjpSAAAM2ElEQVR42u2deXQV1R3HP+8FCBASSLCAEFFZNKAocUEoiCKuoKm4sHiKSA8gHG3Vntpjj1brH/ZgtQtyjmCxiCBWcEFcMOqxCimCIAUji8GwyGoghEACWUgy/SMGXpI3783ce2feS/L73H9IMsOb+X7f3e/93QBCY9IYymD60ocupNGTQpHET5IYx1w2U4MVkn4uwvhFG27jdUrryV+X7vH+41uJA5zLI0wkzfbvHcQGrxnA7xlH6yhFleAhA/mwQS0QPj0oUnlFZ2ZR5cACC4t7RS4vaM1DFDu0wMJijEjmRVG02YUFFhYjRTSzBPkd5S5NsMgU4UzSjRWuLbCwSBHpzHEthUom7BfpzHEfFUomWHwm4pkhwJ8ULbCweFEENDNO8IaGCRa/EglNtI0Wa5lg0UtE1C+OXtI0YY+IqM/zmiZYvCoi6vK4tgkWk0RGPbKo1jahnE4ipA4Zrgbv7NIyEVKHJPIMmGAxXqTUYY4RE0pl3k2HGx3NqUn/2VPSOGDEhGouFDFjXSBZvC9SqpPpeIY5WrpOxFQfvFhpyIQ1BEROVcYbMsFiqIipStD1ZL9dekfEVGesIROq6C9iqtcLGwzZ8JyIqc6thkzIp72Iqc4KIybUcL1IqU66of7CXJFShz8aMSFXCiS96jnfgAnHyRApdRhkpFa4K5ZdnubAzQb+j2d4S77PeqwxsAJDxpA0SdNuJb0nWzH1uUvThC9oF/vhsKaP3jaQ9xlFmXyX9XlfIyfMl+LIFD8omzBTxDNFR8V1GEXcKeKZ4xIlE3LoKdKZZLjC0pdZUcIzCK7JcmnCeq4S0cwz0YUFhTwUn030pt9cS3Z4XQlz+DPH4vMlmr4N5Q6uOcyLvECRFB3eMSZKQbSO6bEfrGj+DLU1YAtP0KdpvETTH97t3CAuZBW5rGEta9jRdF6iOYyyn8t5nEWQao5wgL2OagtBEKRQAlJJJYUOdCAZqOY4RezjUBzokEAvBtCP8+hOT1JIJpH2lFNGDYUUcpjD7GcbW9lOZVO0oTtXkMGFZJBhE+u0nG3k8g1fsoEqn+VvxzUMZRiDHK9QOkU+W9jAKtZzKv7zWSduZzZbXe69zGYG3X15vh5M4z1OaEwZnSCbGaTHqwFpPMCXGtP0NazlMQ83APbhKTYY2i1qUcM6fk3n+BoaGc2bCkEF7fq/MwwHS0hlOquN7QgKTRW8HR+75ZL5AweNv14Zi7nBwKhoAqN5y9gXxC5tYEIsR+lSeEIxoKCztIPH6KrRvXuavR4bELo/YnwsOsUpPEmRD69XyZuu80Uid5NtIJKM5XpqaYS/vY672ePrC+5jJhc4eraLmMkh3w04k5byM39MuICcGL3iah6hn81TBRnE08b2hOqkQ0zw2oIgj3Ayxq+5m7ncw8Cf5t9SyGQSr1AQBwaEbu3t5J0JXfk0rl62ilNx9Tz1q+yB3phwnQcN0+acTnKfeROmUSnSuk6zTDZiWzFXJFVM80gwY0Iib4mcGuld+6UJARfdtA+4WiZotFjB7eEHx51mlCQ+ZLjoqElfevMulqoNSWRLTjDCAFL4WM2G1iyTkGfGGEIZq1XGjeZL9Wo0Vavs435KhPNgtCndXUspi2XNJJJAfPEVw0NXeESuGy7kI9qKZh6QTpD/hI6URuquLZEzzzxiGbPrD1jb8xcuFb08oIyHuYMCZ3XDjWRLOA8P2MgE8pwOZnTgW84TzYyziKlUNP61XaH0ZzHBOBZPMimcCXa5IZP1poZlhZ+oYAqv2f2xVVhrXhATDFPIbay1/3M4GyYwTHQzymGuJzfyiFFDWpPH+aKcQQoYyZbIlzSuoqeICUYp4ZZoJjTODW3Jp4doZ4xKRjk5cbphbrhXTDDaRJ3s7NjvYIOfHhbtDPI8rzu7sH6hdLscv2iQz7iJameX1s8ND4p2xtjPeKcm1Lehl7+r8pt5rTC1QRAJxzZMk3k2Y/yTj9xcfqZuSGAvZ4t+RtjNJZS4ueHM9/9aMcEYD7szIdSGCaKeIT5nudtb6gql1hSQKgoaoJrLIg/jRcoNw8QEQyxwb8IZG0aLfkao4VmV2+psGCUKGuEdvle5rbZuSGevKGiEq1innhtk54IZctRMqLPhGlHQUPWsSG2htNV2z73gnHK6qQafDgIpHoaQakm8px4BPAgMlCE9IyxWvzUIXC4KGqCCT/VskHXbJlirc2xZEKR6NsIXOjcHwWGYKCEyn+vcHKBL/Q0PgmJjNVUnRHuQvqKhAbbrxckPco5oaIA8vduDPoViFhui2CCLJc0USpo2dBMN48GGNNHQAAd1begkGhqgVGxoFjZIOAZ9KnUPmgnKCYEGKNH9D4LN4FTQ2HNS34Y2oqI2Cfo2yDni+iTq22CJivFgwylRUZsk3aI96MWZfi2OAGeJDfFAF7EhHkjXtaFCNDRAH10bjoqGYkNz4WJdG4pEQwNk6i1AldxghhS9YklygymG6dkgi8XMMELPBtn1ZoaROjGcg+wTBY1wNldKbogHxqjfGiBIucw5GGEXfahRzQ017BcFjXA+N6kXStorzoTTTNexIU/0M8StqnH+xQaTBJmibsN3op8x7qej2BB7zuJRtQYrwGHduVThNGVc4L5LXDs8+42oZ4x2PK5WKMFGUc8gU7hIzYb/iXYGacVCt+MStasvqyQ6t1HOppwc91V0kKOyz8EoFVzJt24LpZpIpzAJCiTyqpudI3UT2atFOcNkMs9t3QAJTBLlDHMJJ/jSTd0ASRTLvh/jVDOaj90USiek7+ABCSxlkBsbCD3LWzBGCp9wmRsbPhXNPKEj2fR3WjdAIkW0F9U8oYBRkUcqgiEdjhzRyyO6spKbndkAn4hentGB5fzSmQ0rRC0PacMi/m7XKai/4O87CRPtMasYG27VcP1V+ctFJ48ZTi6/EBtiTxfeZR7JkQqlIPsl6JsvHOQxFoZ2t0Ox6MsVopEPJDOGq8jlULhCCd4QhXzjFjaxtHazVqBRXbFHQoL6yikWMKthJCCLdIaINj6SwOXc2ngb6b9FGd9ZHm6/1nYJn+4zN4TbVD1fdPGVI6wMZ8MCCXXlK0s4Fc6GH8kWbXzkNWwiPbws2vhGPmvtbFgh2xJ9Yz6WXQTRGtpznSjkA1XcRwm24Wde0jurRnDaY+AA2NtwmKWikQ/8tMDSPtzGFawXlTzmezJq4wrYx8T6WlZqeM4/6oI7RAo+M5oPRCkPKaInJ2r/GSlC3IeyrtVT5tSZEC3kfSl3iFoecYqJHK/7IXK8xCXsEr08YmHo7unIuaGGUrJEMU/ywrjQmJ/RoocukMAmnrCInaE/RjsOxeKYTvAyISzVTKgfeDV6LN3X2Sa6Ga8Xvq//i+iHA1n8yFhRziBVjG8YhNhJZOm3pT9tlLnkN/yVsxCumXytFwpcOE0xfSls+Etn4m6UZTPGeKaxCTgOaNyTbbIzzgA76R/u/Bin5/cdA0aKitpMCx/QxHl47zZsop/oqMV/GR7+uEPnFW8l0+XERM2G6m/sFHTT/lnFa6KlBs/aTxy4O3OgE5tl2b0i27nUfpmFu95AsXoU6haOxYxIa10SXHvai0tFVdfMY3akP7s/CCWVXN2jF1scB+lPcaQL3A9RHGWi6mERLbZAuj+yCWrHr+8mkatFXce8xN+iXaJ2OlMrVskOOYfkk0mpNzZALzZK5FZHXbZhfBX9MtXh651MFY0d8JQTE9Tqhlq20FuarlHIYaqzASCNk/tIYl30KHItmKNk8oOzS3Xm1E5wByWitm0zdbJTE9Cc2sxjmuhtw/NuwiIlaH7YZnpwuWjeiHVMpNr55QHtD2zLaicBX1sUxWSy280N+ustyhnLEVG+Xl9hnDsTMLLsZQdjqBT1T/Pb2IVSnYwlCQtLLeJIgiEbNpEio0xADmPdVM3mSeCDFp8T8umsJl7AoBHJrCSzBeeEAq5uuFLbzyq6jhJGtuAT5I5xi6oJ5unC1hZZHB2Lt5qxJRpRzGA90QIeGJHOF/T2wfCTbGMbuyhgLycpoxxoQxJt6UZ3etCPi0jzpU4YzYZ4LCe7s9HD794hFjKVfo7qtXO4hzns8fBptnJ+/FZYyWR78Mr7mM0Ihb5OgME8xy4PnugjUuO75dCKmdQYe91SXmaIdhE6mAWUGXumKp5oGnugsjhi4HVzeYCOxp6pM4+yw8BT5TWlRUJdeVPjVStYzFAPnirIbXyikVfLeYa2Ta1jk6XUhP2Bx+nq6XNlMFsht1bxCuc2zR5mApNdWFHMvxjhU6nbhiyWcNLhkxXy16YeODvACBZF+fYd4FXuikF2T+FOXmQzVbZPtp95jPHuyQK+54shDGEA/UgjlUQqOMYRdrOTTXzN9hh/VdpxMb3pQXc60I7WHOcohWxmC3u9/eD/AyOAGJD2io7KAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA4LTIxVDEyOjI1OjIwKzAwOjAwUAqSZAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wOC0yMVQxMjoyNToyMCswMDowMCFXKtgAAAAASUVORK5CYII=",jm="/iqra-client/assets/google-logo-63068940.png";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},ww=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Um={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,h=(o&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray($m(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ww(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||h==null)throw new Sw;const d=o<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Sw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _w=function(e){const t=$m(e);return Um.encodeByteArray(t,!0)},zm=function(e){return _w(e).replace(/\./g,"")},Fm=function(e){try{return Um.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=()=>Ew().__FIREBASE_DEFAULTS__,Iw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Cw=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Fm(e[1]);return t&&JSON.parse(t)},pc=()=>{try{return kw()||Iw()||Cw()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Tw=e=>{var t,n;return(n=(t=pc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Bm=()=>{var e;return(e=pc())===null||e===void 0?void 0:e.config},Hm=e=>{var t;return(t=pc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function Pw(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Aw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nw(){const e=ge();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ow(){try{return typeof indexedDB=="object"}catch{return!1}}function Lw(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="FirebaseError";class rn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Dw,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ui.prototype.create)}}class Ui{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Mw(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new rn(i,a,r)}}function Mw(e,t){return e.replace(bw,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const bw=/\{\$([^}]+)}/g;function jw(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function hs(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(tf(o)&&tf(s)){if(!hs(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function tf(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Vr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function Gr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function $w(e,t){const n=new Uw(e,t);return n.subscribe.bind(n)}class Uw{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zw(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=ba),i.error===void 0&&(i.error=ba),i.complete===void 0&&(i.complete=ba);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zw(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ba(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e){return e&&e._delegate?e._delegate:e}class _r{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new xw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Hw(t))try{this.getOrInitializeService({instanceIdentifier:fn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=fn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=fn){return this.instances.has(t)}getOptions(t=fn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bw(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=fn){return this.component?this.component.multipleInstances?t:fn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bw(e){return e===fn?void 0:e}function Hw(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Fw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(F||(F={}));const Vw={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Gw=F.INFO,Kw={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Qw=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Kw[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Wm{constructor(t){this.name=t,this._logLevel=Gw,this._logHandler=Qw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Vw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const Yw=(e,t)=>t.some(n=>e instanceof n);let nf,rf;function qw(){return nf||(nf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xw(){return rf||(rf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vm=new WeakMap,Jl=new WeakMap,Gm=new WeakMap,ja=new WeakMap,mc=new WeakMap;function Jw(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(qt(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Vm.set(n,e)}).catch(()=>{}),mc.set(t,e),t}function Zw(e){if(Jl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Jl.set(e,t)}let Zl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Jl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Gm.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function eS(e){Zl=e(Zl)}function tS(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call($a(this),t,...n);return Gm.set(r,t.sort?t.sort():[t]),qt(r)}:Xw().includes(e)?function(...t){return e.apply($a(this),t),qt(Vm.get(this))}:function(...t){return qt(e.apply($a(this),t))}}function nS(e){return typeof e=="function"?tS(e):(e instanceof IDBTransaction&&Zw(e),Yw(e,qw())?new Proxy(e,Zl):e)}function qt(e){if(e instanceof IDBRequest)return Jw(e);if(ja.has(e))return ja.get(e);const t=nS(e);return t!==e&&(ja.set(e,t),mc.set(t,e)),t}const $a=e=>mc.get(e);function rS(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=qt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(qt(s.result),l.oldVersion,l.newVersion,qt(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const iS=["get","getKey","getAll","getAllKeys","count"],oS=["put","add","delete","clear"],Ua=new Map;function of(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ua.get(t))return Ua.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=oS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||iS.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ua.set(t,o),o}eS(e=>({...e,get:(t,n,r)=>of(t,n)||e.get(t,n,r),has:(t,n)=>!!of(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function aS(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const eu="@firebase/app",sf="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new Wm("@firebase/app"),lS="@firebase/app-compat",uS="@firebase/analytics-compat",cS="@firebase/analytics",dS="@firebase/app-check-compat",fS="@firebase/app-check",hS="@firebase/auth",pS="@firebase/auth-compat",mS="@firebase/database",gS="@firebase/database-compat",yS="@firebase/functions",vS="@firebase/functions-compat",wS="@firebase/installations",SS="@firebase/installations-compat",_S="@firebase/messaging",ES="@firebase/messaging-compat",kS="@firebase/performance",IS="@firebase/performance-compat",CS="@firebase/remote-config",TS="@firebase/remote-config-compat",xS="@firebase/storage",RS="@firebase/storage-compat",PS="@firebase/firestore",AS="@firebase/firestore-compat",NS="firebase",OS="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu="[DEFAULT]",LS={[eu]:"fire-core",[lS]:"fire-core-compat",[cS]:"fire-analytics",[uS]:"fire-analytics-compat",[fS]:"fire-app-check",[dS]:"fire-app-check-compat",[hS]:"fire-auth",[pS]:"fire-auth-compat",[mS]:"fire-rtdb",[gS]:"fire-rtdb-compat",[yS]:"fire-fn",[vS]:"fire-fn-compat",[wS]:"fire-iid",[SS]:"fire-iid-compat",[_S]:"fire-fcm",[ES]:"fire-fcm-compat",[kS]:"fire-perf",[IS]:"fire-perf-compat",[CS]:"fire-rc",[TS]:"fire-rc-compat",[xS]:"fire-gcs",[RS]:"fire-gcs-compat",[PS]:"fire-fst",[AS]:"fire-fst-compat","fire-js":"fire-js",[NS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=new Map,nu=new Map;function DS(e,t){try{e.container.addComponent(t)}catch(n){Rn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function xi(e){const t=e.name;if(nu.has(t))return Rn.debug(`There were multiple attempts to register component ${t}.`),!1;nu.set(t,e);for(const n of ps.values())DS(n,e);return!0}function Km(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Xt=new Ui("app","Firebase",MS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=OS;function Qm(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:tu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Xt.create("bad-app-name",{appName:String(i)});if(n||(n=Bm()),!n)throw Xt.create("no-options");const o=ps.get(i);if(o){if(hs(n,o.options)&&hs(r,o.config))return o;throw Xt.create("duplicate-app",{appName:i})}const s=new Ww(i);for(const l of nu.values())s.addComponent(l);const a=new bS(n,r,s);return ps.set(i,a),a}function jS(e=tu){const t=ps.get(e);if(!t&&e===tu&&Bm())return Qm();if(!t)throw Xt.create("no-app",{appName:e});return t}function ir(e,t,n){var r;let i=(r=LS[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Rn.warn(a.join(" "));return}xi(new _r(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S="firebase-heartbeat-database",US=1,Ri="firebase-heartbeat-store";let za=null;function Ym(){return za||(za=rS($S,US,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ri)}}}).catch(e=>{throw Xt.create("idb-open",{originalErrorMessage:e.message})})),za}async function zS(e){try{return await(await Ym()).transaction(Ri).objectStore(Ri).get(qm(e))}catch(t){if(t instanceof rn)Rn.warn(t.message);else{const n=Xt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Rn.warn(n.message)}}}async function af(e,t){try{const r=(await Ym()).transaction(Ri,"readwrite");await r.objectStore(Ri).put(t,qm(e)),await r.done}catch(n){if(n instanceof rn)Rn.warn(n.message);else{const r=Xt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rn.warn(r.message)}}}function qm(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=1024,BS=30*24*60*60*1e3;class HS{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=lf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=BS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=lf(),{heartbeatsToSend:n,unsentEntries:r}=WS(this._heartbeatsCache.heartbeats),i=zm(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function lf(){return new Date().toISOString().substring(0,10)}function WS(e,t=FS){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),uf(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),uf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class VS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ow()?Lw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await zS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return af(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return af(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function uf(e){return zm(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(e){xi(new _r("platform-logger",t=>new sS(t),"PRIVATE")),xi(new _r("heartbeat",t=>new HS(t),"PRIVATE")),ir(eu,sf,e),ir(eu,sf,"esm2017"),ir("fire-js","")}GS("");var KS="firebase",QS="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ir(KS,QS,"app");function Xm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YS=Xm,Jm=new Ui("auth","Firebase",Xm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new Wm("@firebase/auth");function qS(e,...t){ms.logLevel<=F.WARN&&ms.warn(`Auth (${Fi}): ${e}`,...t)}function Lo(e,...t){ms.logLevel<=F.ERROR&&ms.error(`Auth (${Fi}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(e,...t){throw gc(e,...t)}function lt(e,...t){return gc(e,...t)}function Zm(e,t,n){const r=Object.assign(Object.assign({},YS()),{[t]:n});return new Ui("auth","Firebase",r).create(t,{appName:e.name})}function XS(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Ve(e,"argument-error"),Zm(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Jm.create(e,...t)}function L(e,t,...n){if(!e)throw gc(t,...n)}function gt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Lo(t),new Error(t)}function It(e,t){e||gt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function JS(){return cf()==="http:"||cf()==="https:"}function cf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JS()||Pw()||"connection"in navigator)?navigator.onLine:!0}function e_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t,n){this.shortDelay=t,this.longDelay=n,It(n>t,"Short delay should be less than long delay!"),this.isMobile=Rw()||Aw()}get(){return ZS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(e,t){It(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=new Bi(3e4,6e4);function Pr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ar(e,t,n,r,i={}){return tg(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=zi(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),eg.fetch()(ng(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function tg(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},t_),t);try{const i=new r_(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw mo(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw mo(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw mo(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw mo(e,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Zm(e,c,u);Ve(e,c)}}catch(i){if(i instanceof rn)throw i;Ve(e,"network-request-failed",{message:String(i)})}}async function Hi(e,t,n,r,i={}){const o=await Ar(e,t,n,r,i);return"mfaPendingCredential"in o&&Ve(e,"multi-factor-auth-required",{_serverResponse:o}),o}function ng(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?yc(e.config,i):`${e.config.apiScheme}://${i}`}class r_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(lt(this.auth,"network-request-failed")),n_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=lt(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i_(e,t){return Ar(e,"POST","/v1/accounts:delete",t)}async function o_(e,t){return Ar(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function s_(e,t=!1){const n=Ln(e),r=await n.getIdToken(t),i=vc(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ri(Fa(i.auth_time)),issuedAtTime:ri(Fa(i.iat)),expirationTime:ri(Fa(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Fa(e){return Number(e)*1e3}function vc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Lo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Fm(n);return i?JSON.parse(i):(Lo("Failed to decode base64 JWT payload"),null)}catch(i){return Lo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function a_(e){const t=vc(e);return L(t,"internal-error"),L(typeof t.exp<"u","internal-error"),L(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof rn&&l_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function l_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ri(this.lastLoginAt),this.creationTime=ri(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Pi(e,o_(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?f_(o.providerUserInfo):[],a=d_(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new rg(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,h)}async function c_(e){const t=Ln(e);await gs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function d_(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function f_(e){return e.map(t=>{var{providerId:n}=t,r=ac(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h_(e,t){const n=await tg(e,{},async()=>{const r=zi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=ng(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",eg.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){L(t.idToken,"internal-error"),L(typeof t.idToken<"u","internal-error"),L(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):a_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return L(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await h_(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Ai;return r&&(L(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(L(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ai,this.toJSON())}_performRefresh(){return gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(e,t){L(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class En{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=ac(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new u_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new rg(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Pi(this,this.stsTokenManager.getToken(this.auth,t));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return s_(this,t)}reload(){return c_(this)}_assign(t){this!==t&&(L(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new En(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await gs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Pi(this,i_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:S,providerData:T,stsTokenManager:k}=n;L(m&&k,t,"internal-error");const P=Ai.fromJSON(this.name,k);L(typeof m=="string",t,"internal-error"),Pt(h,t.name),Pt(d,t.name),L(typeof w=="boolean",t,"internal-error"),L(typeof S=="boolean",t,"internal-error"),Pt(g,t.name),Pt(y,t.name),Pt(v,t.name),Pt(_,t.name),Pt(p,t.name),Pt(f,t.name);const z=new En({uid:m,auth:t,email:d,emailVerified:w,displayName:h,isAnonymous:S,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:P,createdAt:p,lastLoginAt:f});return T&&Array.isArray(T)&&(z.providerData=T.map(M=>Object.assign({},M))),_&&(z._redirectEventId=_),z}static async _fromIdTokenResponse(t,n,r=!1){const i=new Ai;i.updateFromServerResponse(n);const o=new En({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await gs(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df=new Map;function yt(e){It(e instanceof Function,"Expected a class definition");let t=df.get(e);return t?(It(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,df.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}ig.type="NONE";const ff=ig;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(e,t,n){return`firebase:${e}:${t}:${n}`}class or{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Do(this.userKey,i.apiKey,o),this.fullPersistenceKey=Do("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?En._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new or(yt(ff),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||yt(ff);const s=Do(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const h=En._fromJSON(t,c);u!==o&&(a=h),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new or(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new or(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ag(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(og(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ug(t))return"Blackberry";if(cg(t))return"Webos";if(wc(t))return"Safari";if((t.includes("chrome/")||sg(t))&&!t.includes("edge/"))return"Chrome";if(lg(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function og(e=ge()){return/firefox\//i.test(e)}function wc(e=ge()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function sg(e=ge()){return/crios\//i.test(e)}function ag(e=ge()){return/iemobile/i.test(e)}function lg(e=ge()){return/android/i.test(e)}function ug(e=ge()){return/blackberry/i.test(e)}function cg(e=ge()){return/webos/i.test(e)}function Ys(e=ge()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function p_(e=ge()){var t;return Ys(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function m_(){return Nw()&&document.documentMode===10}function dg(e=ge()){return Ys(e)||lg(e)||cg(e)||ug(e)||/windows phone/i.test(e)||ag(e)}function g_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(e,t=[]){let n;switch(e){case"Browser":n=hf(ge());break;case"Worker":n=`${hf(ge())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fi}/${r}`}async function hg(e,t){return Ar(e,"GET","/v2/recaptchaConfig",Pr(e,t))}function pf(e){return e!==void 0&&e.enterprise!==void 0}class pg{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function mg(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=lt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",y_().appendChild(r)})}function v_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const w_="https://www.google.com/recaptcha/enterprise.js?render=",S_="recaptcha-enterprise",__="NO_RECAPTCHA";class gg{constructor(t){this.type=S_,this.auth=Dn(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{hg(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new pg(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;pf(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(__)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&pf(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}mg(w_+a).then(()=>{i(a,o,s)}).catch(l=>{s(l)})}}).catch(a=>{s(a)})})}}async function ys(e,t,n,r=!1){const i=new gg(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mf(this),this.idTokenSubscription=new mf(this),this.beforeStateQueue=new E_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=yt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await or.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await gs(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=e_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Ln(t):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&L(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yt(t))})}async initializeRecaptchaConfig(){const t=await hg(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new pg(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new gg(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ui("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&yt(t)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await or.create(this,[yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return L(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=fg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&qS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Dn(e){return Ln(e)}class mf{constructor(t){this.auth=t,this.observer=null,this.addObserver=$w(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(e,t){const n=Km(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(hs(o,t??{}))return i;Ve(i,"already-initialized")}return n.initialize({options:t})}function C_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function T_(e,t,n){const r=Dn(e);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=yg(t),{host:s,port:a}=x_(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||R_()}function yg(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function x_(e){const t=yg(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:gf(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:gf(s)}}}function gf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function R_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return gt("not implemented")}_getIdTokenResponse(t){return gt("not implemented")}_linkToIdToken(t,n){return gt("not implemented")}_getReauthenticationResolver(t){return gt("not implemented")}}async function P_(e,t){return Ar(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ba(e,t){return Hi(e,"POST","/v1/accounts:signInWithPassword",Pr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A_(e,t){return Hi(e,"POST","/v1/accounts:signInWithEmailLink",Pr(e,t))}async function N_(e,t){return Hi(e,"POST","/v1/accounts:signInWithEmailLink",Pr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Sc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Ni(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Ni(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await ys(t,r,"signInWithPassword");return Ba(t,i)}else return Ba(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const o=await ys(t,r,"signInWithPassword");return Ba(t,o)}else return Promise.reject(i)});case"emailLink":return A_(t,{email:this._email,oobCode:this._password});default:Ve(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return P_(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return N_(t,{idToken:n,email:this._email,oobCode:this._password});default:Ve(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(e,t){return Hi(e,"POST","/v1/accounts:signInWithIdp",Pr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="http://localhost";class Pn extends Sc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Pn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=ac(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Pn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return sr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,sr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,sr(t,n)}buildRequest(){const t={requestUri:O_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=zi(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function D_(e){const t=Vr(Gr(e)).link,n=t?Vr(Gr(t)).deep_link_id:null,r=Vr(Gr(e)).deep_link_id;return(r?Vr(Gr(r)).link:null)||r||n||t||e}class _c{constructor(t){var n,r,i,o,s,a;const l=Vr(Gr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=L_((i=l.mode)!==null&&i!==void 0?i:null);L(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=D_(t);try{return new _c(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.providerId=Nr.PROVIDER_ID}static credential(t,n){return Ni._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=_c.parseLink(n);return L(r,"argument-error"),Ni._fromEmailAndCode(t,r.code,r.tenantId)}}Nr.PROVIDER_ID="password";Nr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Nr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends Ec{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Wi{constructor(){super("facebook.com")}static credential(t){return Pn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mt.credentialFromTaggedObject(t)}static credentialFromError(t){return Mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mt.credential(t.oauthAccessToken)}catch{return null}}}Mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends Wi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Pn._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ae.credentialFromTaggedObject(t)}static credentialFromError(t){return Ae.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ae.credential(n,r)}catch{return null}}}Ae.GOOGLE_SIGN_IN_METHOD="google.com";Ae.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Wi{constructor(){super("github.com")}static credential(t){return Pn._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return bt.credentialFromTaggedObject(t)}static credentialFromError(t){return bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return bt.credential(t.oauthAccessToken)}catch{return null}}}bt.GITHUB_SIGN_IN_METHOD="github.com";bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Wi{constructor(){super("twitter.com")}static credential(t,n){return Pn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return jt.credential(n,r)}catch{return null}}}jt.TWITTER_SIGN_IN_METHOD="twitter.com";jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(e,t){return Hi(e,"POST","/v1/accounts:signUp",Pr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await En._fromIdTokenResponse(t,r,i),s=yf(r);return new An({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=yf(r);return new An({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function yf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends rn{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vs.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new vs(t,n,r,i)}}function vg(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?vs._fromErrorAndOperation(e,o,t,r):o})}async function M_(e,t,n=!1){const r=await Pi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return An._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b_(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await Pi(e,vg(r,i,t,e),n);L(o.idToken,r,"internal-error");const s=vc(o.idToken);L(s,r,"internal-error");const{sub:a}=s;return L(e.uid===a,r,"user-mismatch"),An._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ve(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wg(e,t,n=!1){const r="signIn",i=await vg(e,r,t),o=await An._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function j_(e,t){return wg(Dn(e),t)}async function $_(e,t,n){var r;const i=Dn(e),o={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await ys(i,o,"signUpPassword");s=Ha(i,u)}else s=Ha(i,o).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await ys(i,o,"signUpPassword");return Ha(i,c)}else return Promise.reject(u)});const a=await s.catch(u=>Promise.reject(u)),l=await An._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function U_(e,t,n){return j_(Ln(e),Nr.credential(t,n))}function z_(e,t,n,r){return Ln(e).onIdTokenChanged(t,n,r)}function F_(e,t,n){return Ln(e).beforeAuthStateChanged(t,n)}const ws="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ws,"1"),this.storage.removeItem(ws),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(){const e=ge();return wc(e)||Ys(e)}const H_=1e3,W_=10;class _g extends Sg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=B_()&&g_(),this.fallbackToPolling=dg(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);m_()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,W_):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},H_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}_g.type="LOCAL";const V_=_g;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg extends Sg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Eg.type="SESSION";const kg=Eg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new qs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await G_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=kc("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(d.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return window}function Q_(e){ut().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(){return typeof ut().WorkerGlobalScope<"u"&&typeof ut().importScripts=="function"}async function Y_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function q_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function X_(){return Ig()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg="firebaseLocalStorageDb",J_=1,Ss="firebaseLocalStorage",Tg="fbase_key";class Vi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xs(e,t){return e.transaction([Ss],t?"readwrite":"readonly").objectStore(Ss)}function Z_(){const e=indexedDB.deleteDatabase(Cg);return new Vi(e).toPromise()}function iu(){const e=indexedDB.open(Cg,J_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ss,{keyPath:Tg})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ss)?t(r):(r.close(),await Z_(),t(await iu()))})})}async function vf(e,t,n){const r=Xs(e,!0).put({[Tg]:t,value:n});return new Vi(r).toPromise()}async function eE(e,t){const n=Xs(e,!1).get(t),r=await new Vi(n).toPromise();return r===void 0?null:r.value}function wf(e,t){const n=Xs(e,!0).delete(t);return new Vi(n).toPromise()}const tE=800,nE=3;class xg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await iu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>nE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ig()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qs._getInstance(X_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Y_(),!this.activeServiceWorker)return;this.sender=new K_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||q_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await iu();return await vf(t,ws,"1"),await wf(t,ws),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>eE(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>wf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Xs(i,!1).getAll();return new Vi(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xg.type="LOCAL";const rE=xg;new Bi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(e,t){return t?yt(t):(L(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends Sc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return sr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return sr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return sr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function iE(e){return wg(e.auth,new Ic(e),e.bypassAuthState)}function oE(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),b_(n,new Ic(e),e.bypassAuthState)}async function sE(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),M_(n,new Ic(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return iE;case"linkViaPopup":case"linkViaRedirect":return sE;case"reauthViaPopup":case"reauthViaRedirect":return oE;default:Ve(this.auth,"internal-error")}}resolve(t){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=new Bi(2e3,1e4);async function Ag(e,t,n){const r=Dn(e);XS(e,t,Ec);const i=Rg(r,n);return new yn(r,"signInViaPopup",t,i).executeNotNull()}class yn extends Pg{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,yn.currentPopupAction&&yn.currentPopupAction.cancel(),yn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return L(t,this.auth,"internal-error"),t}async onExecution(){It(this.filter.length===1,"Popup operations only handle one event");const t=kc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,aE.get())};t()}}yn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE="pendingRedirect",Mo=new Map;class uE extends Pg{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Mo.get(this.auth._key());if(!t){try{const r=await cE(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Mo.set(this.auth._key(),t)}return this.bypassAuthState||Mo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cE(e,t){const n=hE(t),r=fE(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function dE(e,t){Mo.set(e._key(),t)}function fE(e){return yt(e._redirectPersistence)}function hE(e){return Do(lE,e.config.apiKey,e.name)}async function pE(e,t,n=!1){const r=Dn(e),i=Rg(r,t),s=await new uE(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=10*60*1e3;class gE{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!yE(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Ng(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(lt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=mE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sf(t))}saveEventToCache(t){this.cachedEventUids.add(Sf(t)),this.lastProcessedEventTime=Date.now()}}function Sf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Ng({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function yE(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ng(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vE(e,t={}){return Ar(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SE=/^https?/;async function _E(e){if(e.config.emulator)return;const{authorizedDomains:t}=await vE(e);for(const n of t)try{if(EE(n))return}catch{}Ve(e,"unauthorized-domain")}function EE(e){const t=ru(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!SE.test(n))return!1;if(wE.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=new Bi(3e4,6e4);function _f(){const e=ut().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function IE(e){return new Promise((t,n)=>{var r,i,o;function s(){_f(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{_f(),n(lt(e,"network-request-failed"))},timeout:kE.get()})}if(!((i=(r=ut().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=ut().gapi)===null||o===void 0)&&o.load)s();else{const a=v_("iframefcb");return ut()[a]=()=>{gapi.load?s():n(lt(e,"network-request-failed"))},mg(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw bo=null,t})}let bo=null;function CE(e){return bo=bo||IE(e),bo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=new Bi(5e3,15e3),xE="__/auth/iframe",RE="emulator/auth/iframe",PE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NE(e){const t=e.config;L(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?yc(t,RE):`https://${e.config.authDomain}/${xE}`,r={apiKey:t.apiKey,appName:e.name,v:Fi},i=AE.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${zi(r).slice(1)}`}async function OE(e){const t=await CE(e),n=ut().gapi;return L(n,e,"internal-error"),t.open({where:document.body,url:NE(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PE,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=lt(e,"network-request-failed"),a=ut().setTimeout(()=>{o(s)},TE.get());function l(){ut().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DE=500,ME=600,bE="_blank",jE="http://localhost";class Ef{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $E(e,t,n,r=DE,i=ME){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},LE),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ge().toLowerCase();n&&(a=sg(u)?bE:n),og(u)&&(t=t||jE,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(p_(u)&&a!=="_self")return UE(t||"",a),new Ef(null);const h=window.open(t||"",a,c);L(h,e,"popup-blocked");try{h.focus()}catch{}return new Ef(h)}function UE(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE="__/auth/handler",FE="emulator/auth/handler",BE=encodeURIComponent("fac");async function kf(e,t,n,r,i,o){L(e.config.authDomain,e,"auth-domain-config-required"),L(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Fi,eventId:i};if(t instanceof Ec){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",jw(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,h]of Object.entries(o||{}))s[c]=h}if(t instanceof Wi){const c=t.getScopes().filter(h=>h!=="");c.length>0&&(s.scopes=c.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${BE}=${encodeURIComponent(l)}`:"";return`${HE(e)}?${zi(a).slice(1)}${u}`}function HE({config:e}){return e.emulator?yc(e,FE):`https://${e.authDomain}/${zE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="webStorageSupport";class WE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kg,this._completeRedirectFn=pE,this._overrideRedirectResult=dE}async _openPopup(t,n,r,i){var o;It((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await kf(t,n,r,ru(),i);return $E(t,s,kc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await kf(t,n,r,ru(),i);return Q_(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(It(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await OE(t),r=new gE(t);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Wa,{type:Wa},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Wa];s!==void 0&&n(!!s),Ve(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_E(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return dg()||wc()||Ys()}}const VE=WE;var If="@firebase/auth",Cf="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function QE(e){xi(new _r("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;L(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fg(e)},u=new k_(r,i,o,l);return C_(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),xi(new _r("auth-internal",t=>{const n=Dn(t.getProvider("auth").getImmediate());return(r=>new GE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ir(If,Cf,KE(e)),ir(If,Cf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=5*60,qE=Hm("authIdTokenMaxAge")||YE;let Tf=null;const XE=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qE)return;const i=n==null?void 0:n.token;Tf!==i&&(Tf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function JE(e=jS()){const t=Km(e,"auth");if(t.isInitialized())return t.getImmediate();const n=I_(e,{popupRedirectResolver:VE,persistence:[rE,V_,kg]}),r=Hm("authTokenSyncURL");if(r){const o=XE(r);F_(n,o,()=>o(n.currentUser)),z_(n,s=>o(s))}const i=Tw("auth");return i&&T_(n,`http://${i}`),n}QE("Browser");const ZE={apiKey:"AIzaSyCZhqLRgqG2MWJf6N4hjSXwTmBt9gHHTxc",authDomain:"iqra-372fd.firebaseapp.com",projectId:"iqra-372fd",storageBucket:"iqra-372fd.appspot.com",messagingSenderId:"942368873108",appId:"1:942368873108:web:eace8c2ae8932ed715f281",measurementId:"G-JSH95EFSZT"},ek=Qm(ZE),Og=new Ae,Er=JE(ek),tk=A.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`,nk=A.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-top: .5rem;
    margin-bottom: 1rem;
    gap: 1rem;
`,rk=A.div`
    width: 80%;
    text-align: left;
    font-weight: 800;
    color: rgb(75,75,75);
`,ik=A.div`
    width: 80%;
`,Lg=A.button`
    letter-spacing: .5px;
    text-transform: uppercase;
    border-radius: 10px;
    padding: 12px 50px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 800;
    font-family: inherit;

    &:active {
        transform: scale(0.98);
    }
`,ok=A(Lg)`
    background-color: var(--primary);
    color: white;
    border: 2px solid var(--primary);
    box-shadow: 0px 3px 0px var(--primary-shadow);

    &:active {
        box-shadow: 0px 1px 0px var(--primary-shadow);
    }
`,xf=A.input`
    border: 2px solid lightgray;
    border-radius: 10px;
    font-size: 15px;
    padding: 12px 0 12px 16px;
    width: 90%;
    font-family: inherit;
    margin-bottom: 1rem;
`,sk=A.hr`
    width: 80%;
    border: 1px solid lightgray;
    margin-top: 1rem;
    margin-bottom: 2rem;
`,ak=A.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`,lk=A.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-bottom: 1rem;
    margin-top: 1rem;
    gap: 1rem;
`,Rf=A(Lg)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    border: 2px solid lightgray;
    box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.2);
    color: rgb(75,75,75);
    white-space: nowrap;
    width: 95%;
    padding-left: 20px;
`,Pf=A.img`
    width: 20px;
    margin-right: 30px;
`,uk=A.span`
    padding-top: 1rem;
    font-size: 14px;
`,ck=A.span`
    color: red;
    font-size: 14px;
    margin-bottom: .7rem;
    margin-top: .33rem;
`,dk=A.a`
    color: var(--primary);
    font-weight: 800;
    cursor: pointer;
`;A.img`
    height: 20px;
    cursor: pointer;
`;A.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`;const fk=()=>{const e=ji(),[t,n]=I.useState(""),[r,i]=I.useState(""),[o,s]=I.useState(!1),a=()=>{e("/sign-up")},l=async c=>{c.preventDefault();try{const d=(await U_(Er,t,r)).user;e("/dashboard")}catch(h){console.log(h.code,h.message)}},u=()=>{Ag(Er,Og).then(c=>{Ae.credentialFromResult(c).accessToken,c.user,e("/dashboard")}).catch(c=>{c.code,c.message,c.email,Ae.credentialFromError(c)})};return C.jsxs(tk,{children:[C.jsx(rk,{children:C.jsx("h1",{children:"Welcome back!"})}),C.jsxs(lk,{children:[C.jsxs(Rf,{onClick:u,children:[C.jsx(Pf,{src:jm}),"Sign in with Google"]}),C.jsxs(Rf,{children:[C.jsx(Pf,{src:bm}),"Sign in with Apple"]})]}),C.jsx(sk,{}),C.jsx(ik,{children:C.jsxs(ak,{onSubmit:l,children:[C.jsx(xf,{type:"email",placeholder:"Email",value:t,onChange:c=>n(c.target.value)}),C.jsx(xf,{type:"password",placeholder:"Password",value:r,onChange:c=>i(c.target.value)}),o&&C.jsx(ck,{children:"Invalid email or password."})]})}),C.jsxs(nk,{children:[C.jsxs(uk,{children:["Don't have an account? ",C.jsx(dk,{onClick:a,children:"Sign up"}),"."]}),C.jsx(ok,{onClick:l,children:"Sign In"})]})]})},hk=A.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`,pk=A.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-top: .5rem;
    margin-bottom: 1rem;
    gap: 1rem;
`,mk=A.div`
    width: 80%;
    text-align: left;
    font-weight: 800;
    color: rgb(75,75,75);
`,gk=A.div`
    width: 80%;
`,Dg=A.button`
    letter-spacing: .5px;
    text-transform: uppercase;
    border-radius: 10px;
    padding: 12px 50px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 800;
    font-family: inherit;

    &:active {
        transform: scale(0.98);
    }
`,yk=A(Dg)`
    background-color: var(--primary);
    color: white;
    border: 2px solid var(--primary);
    box-shadow: 0px 3px 0px var(--primary-shadow);

    &:active {
        box-shadow: 0px 1px 0px var(--primary-shadow);
    }
`,Va=A.input`
    border: 2px solid lightgray;
    border-radius: 10px;
    font-size: 15px;
    padding: 12px 0 12px 16px;
    width: 90%;
    font-family: inherit;
    margin-bottom: 1rem;
`,vk=A.hr`
    width: 80%;
    border: 1px solid lightgray;
    margin-top: 1rem;
    margin-bottom: 2rem;
`,wk=A.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`,Sk=A.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-bottom: 1rem;
    margin-top: 1rem;
    gap: 1rem;
`,Af=A(Dg)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    border: 2px solid lightgray;
    box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.2);
    color: rgb(75,75,75);
    white-space: nowrap;
    width: 95%;
    padding-left: 20px;
`,Nf=A.img`
    width: 20px;
    margin-right: 30px;
`,_k=A.span`
    padding-top: 1rem;
    font-size: 14px;
`,Of=A.span`
    color: red;
    font-size: 14px;
    margin-bottom: .33rem;
`,Ek=A.a`
    color: var(--primary);
    font-weight: 800;
    cursor: pointer;
`;A.img`
    height: 20px;
    cursor: pointer;
`;A.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`;const kk=()=>{const e=ji(),[t,n]=I.useState(""),[r,i]=I.useState(""),[o,s]=I.useState(""),[a,l]=I.useState(!1),[u,c]=I.useState(!1),h=()=>{e("/sign-in")},d=()=>t!==""&&t.indexOf("@")!==-1&&t.indexOf(".")!==-1,g=()=>r===o,y=async()=>{if(!g()){l(!0),i(""),s("");return}if(!d()){c(!0);return}try{const p=(await $_(Er,t,r)).user;e("/dashboard")}catch(_){console.log(_.code,_.message)}},v=()=>{Ag(Er,Og).then(_=>{Ae.credentialFromResult(_).accessToken,_.user,e("/dashboard")}).catch(_=>{_.code,_.message,_.email,Ae.credentialFromError(_)})};return C.jsxs(hk,{children:[C.jsxs(mk,{children:[C.jsx("h1",{children:"Welcome!"}),C.jsx("h3",{children:"Please, create an account."})]}),C.jsxs(Sk,{children:[C.jsxs(Af,{onClick:v,children:[C.jsx(Nf,{src:jm}),"Sign up with Google"]}),C.jsxs(Af,{children:[C.jsx(Nf,{src:bm}),"Sign up with Apple"]})]}),C.jsx(vk,{}),C.jsx(gk,{children:C.jsxs(wk,{onSubmit:y,children:[C.jsx(Va,{type:"email",placeholder:"Email",value:t,onChange:_=>n(_.target.value)}),C.jsx(Va,{type:"password",placeholder:"Password",value:r,onChange:_=>i(_.target.value)}),C.jsx(Va,{type:"password",placeholder:"Confirm Password",value:o,onChange:_=>s(_.target.value)}),u&&C.jsx(Of,{children:"Invalid email."}),a&&C.jsx(Of,{children:"Passwords do not match."})]})}),C.jsxs(pk,{children:[C.jsxs(_k,{children:["Already have an account? ",C.jsx(Ek,{onClick:h,children:"Sign in"}),"."]}),C.jsx(yk,{onClick:y,children:"Create Account"})]})]})},Ik=A.div`
    text-align: center;
    color: var(--primary);
    margin-top: .5rem;
    width: 100%;
`,Ck=A.h1`
    font-size: 2rem;
    font-weight: 900;
    user-select: none;
    margin: 0;
`;function Mg(){return C.jsx(Ik,{children:C.jsx(Ck,{children:"Iqra"})})}const Tk=A.button`
    letter-spacing: .5px;
    text-transform: uppercase;
    border-radius: 10px;
    padding: 12px 50px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 800;
    font-family: inherit;

    background-color: #fc1303;
    color: white;
    border: 2px solid #fc1303;
    box-shadow: 0px 3px 0px #850d04;

    &:active {
        transform: scale(0.98);
        box-shadow: 0px 1px 0px #850d04;
    }
`,xk=()=>{const e=ji(),t=async()=>{try{await Er.signOut(),e("/")}catch(n){console.error("Error signing out:",n)}};return C.jsx(Tk,{onClick:t,children:"Sign Out"})},bg=I.createContext(),Rk=A.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100vh;
    gap: 3rem;
    padding-top: 1rem;
`;function Pk(){const e=I.useContext(bg),t=ji(),n=()=>{t("/listening")};return C.jsxs(Rk,{children:[C.jsx(Mg,{}),e&&C.jsxs(C.Fragment,{children:["Welcome to your dashboard, ",e.email]}),C.jsx("button",{onClick:n,children:"Listening"}),C.jsx(xk,{})]})}const Ak=Object,Js=Map,Gi=Set,Cc=Gi.prototype.has,Nk=Gi.prototype.add,_s=Js.prototype.has,Lf=Js.prototype.get,Zs=Js.prototype.set,ar=1,ou=2,ii=4,Es=8,Ok=16,Lk=32,ln="__t",Df="__p",su="__e",Dk=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Mk="http://www.w3.org/1999/xlink",bk="http://www.w3.org/2000/xmlns/",jk=120,$k=new Gi(["href","list","form","tabIndex","download"]),Uk=new Gi(["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","isindex","keygen","link","menuitem","meta","nextid","param","source","track","wbr"]);if(typeof window>"u")throw new Error("See http://million.dev/docs/install to install the compiler.");const wt=document,ks=queueMicrotask;wt.createElement("template");const jg=wt.createElement("template"),zk=jg.content,Fk=wt.createElement("template"),Bk=wt.createElementNS("http://www.w3.org/2000/svg","svg"),Hk=Fk.content.firstChild,Mn=Node.prototype,ea=Element.prototype,Wk=CharacterData.prototype,ta=Ak.getOwnPropertyDescriptor,jo=Mn.insertBefore,Vk=Mn.cloneNode,Gk=Mn.replaceChild,Kk=ea.remove,Qk=Mn.addEventListener,Yk=ea.removeAttribute,qk=ea.setAttribute,Mf=ea.setAttributeNS,Xk=ta(Mn,"textContent").set,Jk=ta(Mn,"firstChild").get,Zk=ta(Mn,"nextSibling").get,eI=ta(Wk,"data").set,tI=(e,t)=>{const n=t?Bk:jg;return n.innerHTML=e,(t?Hk:zk).firstChild};wt[su]=new Gi;const bf=(e,t,n)=>{const r=t.toLowerCase(),i=`$$${r}`;Cc.call(wt[su],r)||(Qk.call(wt,r,s=>{s.stopPropagation=()=>{s.cancelBubble=!0,s.stopImmediatePropagation()},requestAnimationFrame(()=>{let a=s.target;for(;a;){const l=a[i];l&&(Object.defineProperty(s,"currentTarget",{configurable:!0,get(){return a}}),l(s)),a=a.parentNode}})}),Nk.call(wt[su],r));const o=s=>{var a;s?"key"in s&&s.key===((a=e[i])==null?void 0:a.key)||(e[i]=s):e[i]=null};return o(n),o},oi=(e,t)=>{let n=Jk.call(e);if(t)for(let r=0;r<t&&n;++r)n=Zk.call(n);return n},jf=(e,t,n)=>{const r=wt.createTextNode(t),i=oi(e,n);return jo.call(e,r,i),r},nI=(e,t)=>{eI.call(e,t)},go=(e,t,n)=>{typeof n!="number"||Dk.test(t)?e.style[t]=n:typeof n=="string"?e.style.cssText=n:t.startsWith("-")?e.style.setProperty(t,String(n)):n==null?e.style[t]="":e.style[t]=`${String(n)}px`},$f=(e,t,n)=>{t=t.replace(/xlink(?:H|:h)/,"h").replace(/sName$/,"s"),t.startsWith("xmlns")?Mf.call(e,bk,t,String(n)):t.startsWith("xlink")&&Mf.call(e,Mk,"href",String(n))},Uf=(e,t,n)=>{const r=n==null;if(n=r?"":n,t in e&&e[t]!==void 0&&e[t]!==null&&!(e instanceof SVGElement)&&Cc.call($k,t))try{e[t]=n}catch{}else!r&&n!==""&&(n!==!1||t.includes("-"))?qk.call(e,t,String(n)):Yk.call(e,t)};class si{}const $g=(e,t=[],n=[])=>{var a,l;if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="bigint"||e===!0)return String(e);if(e==null||e===!1)return"";if(typeof e=="object"&&"$"in e)return t.push({p:n,e:[{t:ar,n:null,v:null,h:e.$,i:0,l:null,p:null,b:null}],i:[]}),"<slot/>";let r="",i="";const o={p:n,e:[],i:[]};for(let u in e.props){const c=e.props[u];if(!(u==="key"||u==="ref"||u==="children")){if(u==="className"&&(u="class"),u==="htmlFor"&&(u="for"),u.startsWith("on")){"$"in c?o.e.push({t:ii,n:u.slice(2),v:null,h:c.$,i:null,l:null,p:null,b:null}):o.i.push({t:ii,n:u.slice(2),v:null,h:null,i:null,l:c,p:null,b:null});continue}if(c){if(typeof c=="object"&&"$"in c){u==="style"?o.e.push({t:Es,n:u,v:null,h:c.$,i:null,l:null,p:null,b:null}):u.charCodeAt(0)===jk?o.e.push({t:Ok,n:u,v:null,h:c.$,i:null,l:null,p:null,b:null}):o.e.push({t:ou,n:u,v:null,h:c.$,i:null,l:null,p:null,b:null});continue}if(u==="style"&&typeof c=="object"){let h="";for(const d in c){if(typeof c[d]=="object"){o.e.push({t:Es,n:d,v:null,h:c[d].$,i:null,l:null,p:null,b:null});continue}let g="";for(let y=0,v=d.length;y<v;++y){const _=d.charCodeAt(y);_<97?g+=`-${String.fromCharCode(_+32)}`:g+=d[y]}h+=`${g}:${String(c[d])};`}r+=` style="${h}"`;continue}r+=` ${u}="${String(c)}"`}}}if(Cc.call(Uk,e.type))return o.e.length&&t.push(o),`<${e.type}${r} />`;let s=!1;for(let u=0,c=((a=e.props.children)==null?void 0:a.length)||0,h=0;u<c;++u){const d=(l=e.props.children)==null?void 0:l[u];if(d==null||d===!1)continue;if(typeof d=="object"&&"$"in d){o.e.push({t:ar,n:null,v:null,h:d.$,i:u,l:null,p:null,b:null});continue}if(d instanceof si){o.i.push({t:Lk,n:null,v:null,h:null,i:u,l:null,p:null,b:d});continue}if(typeof d=="string"||typeof d=="number"||typeof d=="bigint"){const y=typeof d=="number"||typeof d=="bigint"?String(d):d;if(s){o.i.push({t:ar,n:null,v:y,h:null,i:u,l:null,p:null,b:null});continue}s=!0,i+=y,h++;continue}s=!1;const g=n.slice();g.push(h++),i+=$g(d,t,g)}return(o.i.length||o.e.length)&&t.push(o),`<${e.type}${r}>${i}</${e.type}>`},zf=e=>new Ug(e);class Ug extends si{constructor(t){super(),this.b=t}v(){}p(t){const n=this.b,r=t.b,i=n.length,o=r.length,s=this.t();if(this===t||o===0&&i===0)return s;if(this.b=r,o===0)return rI.call(this),s;if(i===0)return zg.call(t,s),s;let a=0,l=0,u=i-1,c=o-1,h=n[0],d=r[0],g=n[u],y=r[c],v;for(;a<=u&&l<=c;){if(!h){h=n[++a];continue}if(!g){g=n[--u];continue}const _=h.k,p=d.k;if(_===p){$n.call(h,d),r[l]=h,h=n[++a],d=r[++l];continue}const f=g.k,m=y.k;if(f===m){$n.call(g,y),r[c]=g,g=n[--u],y=r[--c];continue}if(_===m){$n.call(h,y),r[c]=h;const S=r[c+1];Ga.call(h,S,(S==null?void 0:S.l)||null),h=n[++a],y=r[--c];continue}if(f===p){$n.call(g,d),r[l]=g;const S=n[a];Ga.call(g,S,(S==null?void 0:S.l)||null),g=n[--u],d=r[++l];continue}if(!v){v=new Js;for(let S=a;S<=u;S++)Zs.call(v,n[S].k,S)}const w=v.get(p);if(w===void 0)lr.call(d,s,h.l||null);else{const S=n[w];Ga.call(S,h,null),$n.call(S,d),r[l]=S,n[w]=null}d=r[++l]}if(a<=u||l<=c)if(a>u){const _=r[c+1];for(let p=l;p<=c;++p)lr.call(r[p],s,_?_.l:null)}else for(let _=a;_<=u;++_)au.call(n[_]);return s}m(t,n=null){if(this._t)return this._t;for(let r=0,i=this.b.length;r<i;++r){const o=this.b[r];lr.call(o,t,n)}return this._t=t,t}x(){const t=this.t();if(t)Xk.call(t,"");else for(let n=0,r=this.b.length;n<r;++n)au.call(this.b[n]);this.b=[]}u(){return!0}s(){return this.b.map(t=>t.s()).join("")}t(){return this._t||(this._t=this.b[0].t()),this._t}}const Tc=Ug.prototype,zg=Tc.m,Fg=Tc.p,rI=Tc.x,iI=new Proxy({},{get(e,t){return{$:t}}}),Bg=(e,t,n,r)=>{const i=e(iI),o=[],s=tI($g(t?t(i):i,o),r);return(a,l,u)=>new Hg(s,o,a,l??(a==null?void 0:a.key)??null,u??n??null,null)},oI=(e,t)=>{if(("b"in e||"b"in t)&&Fg.call(e,t),e.l||lr.call(e),e.k&&e.k===t.k||e.r===t.r)return $n.call(e,t);const n=lr.call(t,e.t(),e.l);return au.call(e),e.k=t.k,n};class Hg extends si{constructor(t,n,r,i,o,s){super(),this.r=t,this.d=r,this.e=n,this.k=i,this.c=Array(n.length),o&&(this.u=o),s&&(this.g=s)}m(t,n=null){var o,s;if(this.l)return this.l;const r=Vk.call(this.r,!0),i=(o=this.g)==null?void 0:o.call(this,r);i&&(this.c=i);for(let a=0,l=this.e.length;a<l;++a){const u=this.e[a],c=(i==null?void 0:i[a])??Ff(u.p,r,this.c,a);for(let d=0,g=u.e.length;d<g;++d){const y=u.e[d],v=this.d[y.h];if(y.t&ar){if(v instanceof si){v.m(c,oi(c,y.i));continue}if(c[ln]||(c[ln]=new Array(g)),typeof v=="function"){const _=v(null);c[ln][d]=_,jo.call(c,_,oi(c,y.i));continue}c[ln][d]=jf(c,v==null||v===!1?"":String(v),y.i)}else if(y.t&ii){const _=bf(c,y.n,v);c[Df+y.n]=_}else if(y.t&ou)Uf(c,y.n,v);else if(y.t&Es)if(typeof v=="string"||typeof v=="number")go(c,y.n,v);else for(const _ in v)go(c,_,v[_]);else $f(c,y.n,v)}const h=(s=u.i)==null?void 0:s.length;if(h)for(let d=0;d<h;++d){const g=u.i[d];g.t&ar?g.v&&jf(c,g.v,g.i):g.t&ii?bf(c,g.n,g.l):g.b.m(c,oi(c,g.i))}}return t&&jo.call(t,r,n),this.l=r,r}p(t){var i,o;const n=this.l;if(!t.d)return n;const r=this.d;if(!sI.call(this,r,t.d))return n;this.d=t.d;for(let s=0,a=this.e.length;s<a;++s){const l=this.e[s],u=this.c[s]??Ff(l.p,n,this.c,s);for(let c=0,h=l.e.length;c<h;++c){const d=l.e[c],g=r[d.h],y=t.d[d.h];if(y!==g){if(d.t&ii){u[Df+d.n](y);continue}if(d.t&ar){if(g instanceof si){const v=(o=(i=t.e)==null?void 0:i[s])==null?void 0:o.e[c],_=t.d[v.h];g.p(_);continue}if(typeof y=="function"){const v=u[ln][c];if("unstable"in y&&g!==y){const _=y(null);u[ln][c]=_,Gk.call(u,_,v)}else y(v);continue}nI(u[ln][c],y==null||y===!1?"":String(y))}else if(d.t&ou)Uf(u,d.n,y);else if(d.t&Es)if(typeof y=="string"||typeof y=="number")go(u,d.n,y);else for(const v in y)y[v]!==g[v]&&go(u,v,y[v]);else $f(u,d.n,y)}}}return n}v(t=null,n=null){jo.call(this.t(),this.l,t?t.l:n)}x(){Kk.call(this.l),this.l=null}u(t,n){return!0}s(){var t;return String((t=this.l)==null?void 0:t.outerHTML)}t(){var t;return this._t||(this._t=(t=this.l)==null?void 0:t.parentElement),this._t}}const Ff=(e,t,n,r)=>{const i=e.length;if(!i)return t;if(n&&r!==void 0&&n[r])return n[r];for(let o=0;o<i;++o){const s=e[o];t=oi(t,s)}return n&&r!==void 0&&(n[r]=t),t},Ki=Hg.prototype,lr=Ki.m,$n=Ki.p,Ga=Ki.v,au=Ki.x,sI=Ki.u,Is="slot",Wg="g",Ka="__react_root",aI=({effect:e})=>(I.useEffect(e,[]),null),qe=new Map,lI=(e,t)=>{const n={ref:t};for(const r in e){const i=e[r];if(I.isValidElement(i)){n[r]=Vg(i);continue}n[r]=e[r]}return n},Vg=(e,t)=>{if(typeof window>"u")return I.createElement(Is,{suppressHydrationWarning:!0},e);if(I.isValidElement(e)&&typeof e.type=="function"&&"callable"in e.type){const r=e.type(e.props);if(qe.has(r.type)){const i=qe.get(r.type);if(typeof i=="function")return i(r.props)}}const n=r=>{const i=r??document.createElement(Is);return(Ka in i?i[Ka]:i[Ka]=rm(i)).render(e),i};return t&&(n.unstable=!0),n},lu=e=>{var i;if(typeof e!="object"||e===null||!("type"in e))return typeof e=="number"?String(e):e;let t=e.type;if(typeof t=="function")return lu(t(e.props??{}));if(typeof t=="object"&&"$"in t)return t;const n={...e.props};"css"in n&&"__EMOTION_TYPE_PLEASE_DO_NOT_USE__"in n&&(n.style=n.css.styles,t=n.__EMOTION_TYPE_PLEASE_DO_NOT_USE__,delete n.__EMOTION_TYPE_PLEASE_DO_NOT_USE__,delete n.css);const r=(i=e.props)==null?void 0:i.children;return r!=null&&(n.children=uu(e.props.children).map(o=>lu(o))),{type:t,props:n}},uu=e=>{if(e==null)return[];if(typeof e=="object"&&"type"in e&&e.type===I.Fragment)return uu(e.props.children);if(!Array.isArray(e)||typeof e=="object"&&"$"in e)return[e];const t=e.flat(1/0),n=[];for(let r=0,i=t.length;r<i;++r)n.push(...uu(t[r]));return n},uI=(e,{block:t,shouldUpdate:n,svg:r,as:i}={})=>{const o=e?Bg(e,lu,n,r):t,s=r?Wg:Is,a=(l,u)=>{var v;const c=I.useRef(null),h=I.useRef(null);l=lI(l,u),(v=h.current)==null||v.call(h,l);const d=I.useCallback(()=>{const _=o(l,l.key);c.current&&h.current===null&&(ks(()=>{lr.call(_,c.current,null)}),h.current=p=>{ks(()=>{oI(_,o(p,p.key,n))})})},[]),g=I.useMemo(()=>I.createElement(i??s,{ref:c}),[]);return I.createElement(I.Fragment,null,g,I.createElement(aI,{effect:d}))};return _s.call(qe,a)||Zs.call(qe,a,o),a},cI=({each:e,children:t,memo:n,svg:r,as:i,...o})=>{const s=I.useRef(null),a=I.useRef(null),l=I.useRef({each:null,children:null,mounted:null});a.current&&(e!==l.current.each||!n)&&ks(()=>{const h=Bf(e,t,l,n);Fg.call(a.current,zf(h))});const u=r?Wg:Is,c=I.createElement(i??u,{...o,ref:s});return I.useEffect(()=>{!s.current||a.current||ks(()=>{l.current.mounted&&(s.current.textContent="");const h=Bf(e,t,l,n);a.current=zf(h),_s.call(qe,c)||Zs.call(qe,c,a.current),zg.call(a.current,s.current),l.current.mounted=!0})},[s.current]),c},dI=I.memo;dI(cI);const Bf=(e,t,n,r)=>{var s;const i=Array(e.length),o=n.current;for(let a=0,l=e.length;a<l;++a){if(r&&o.each&&o.each[a]===e[a]){i[a]=(s=o.children)==null?void 0:s[a];continue}const u=t(e[a],a);if(_s.call(qe,u.type)){o.block||(o.block=Lf.call(qe,u.type)),i[a]=o.block(u.props);continue}if(typeof u.type=="function"&&"callable"in u.type){const d=u.type(u.props);if(_s.call(qe,d.type)){const g=Lf.call(qe,d.type);if(typeof g=="function"){i[a]=g(d.props);continue}}}const c=Bg(d=>d==null?void 0:d.scope),h=d=>c({scope:Vg(I.createElement(u.type,d))},u.key?String(u.key):void 0);Zs.call(qe,u.type,h),o.block=h,i[a]=h(u.props)}return o.each=e,o.children=i,i},Gg=()=>C.jsx(fI,{}),fI=uI(({})=>C.jsxs("div",{children:[C.jsx("h1",{children:"404: Page Not Found"}),C.jsx("p",{children:"Sorry, the page you are looking for doesn't exist."}),C.jsx("a",{href:"/",children:"Go Back to Home"})," "]}),{svg:!1,original:null,shouldUpdate:(e,t)=>!0});Gg.callable=!0;const hI=Gg,pI=A.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`,mI=A.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 0.1;
`,gI=A.div`
    flex-grow: 1;
    width: 80%;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary-text);
    display: flex;
    justify-content: center;
    align-items: center;
`,Kg=A.button`
    font-family: inherit;
    font-size: 15px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 12px 50px;
    border-radius: 10px;
    cursor: pointer;

    &:active {
        transform: scale(0.98);
    }
`,yI=A(Kg)`
    background-color: var(--primary);
    color: white;
    border: 2px solid var(--primary);
    box-shadow: 0px 3px 0px var(--primary-shadow);

    &:active {
        box-shadow: 0px 1px 0px var(--primary-shadow);
    }
`,vI=A(Kg)`
    background-color: transparent;
    color: var(--primary);
    border: 2px solid lightgray;
    box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.2);

    &:active {
        box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
    }
`,wI=A.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-grow: 0.05;
`;function SI(){const e=ji(),t=()=>{e("/sign-up")},n=()=>{e("/sign-in")};return C.jsxs(pI,{children:[C.jsx(mI,{children:C.jsx(Mg,{})}),C.jsx(gI,{children:"The free, fun, and effective way to learn Arabic!"}),C.jsxs(wI,{children:[C.jsx(yI,{onClick:t,children:"Get started"}),C.jsx(vI,{onClick:n,children:"I already have an account"})]})]})}var Qg={exports:{}},_I="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",EI=_I,kI=EI;function Yg(){}function qg(){}qg.resetWarningCache=Yg;var II=function(){function e(r,i,o,s,a,l){if(l!==kI){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:qg,resetWarningCache:Yg};return n.PropTypes=n,n};Qg.exports=II();var CI=Qg.exports;const cu=Hf(CI),TI=A.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,xI=A.h1`
    font-size: 1rem;
    font-weight: 700;
    margin: 1rem;
    text-align: center;
`,RI=A.div`
    height: 12.5rem;
    width: 12.5rem;
    background: #EDF0F5;
    font-style: italic;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 5%;
`,PI=A.div`
    font-family: 'Noto Sans Arabic', sans-serif;
    font-size: 1.5rem;
    direction: rtl;
    display: flex;
    align-items: center;
`,Xg=e=>{const{answerSelected:t,answerText:n}=e,r=I.useMemo(()=>t?`
                text-decoration: underline;
                text-decoration-thickness: 2.5px;
                text-underline-offset: 10px;
                margin-left: .33rem;
            `:`
                font-family: 'Noto Sans Arabic', sans-serif;
                background-color: #EDF0F5;
                color: transparent;
                display: inline-block;
                margin-left: .33rem;
                border-radius: 6px;
                width: 75px;
                height: 35px;
                user-select: none;
            `,[t]),i=A.span`
        ${r}
    `;return C.jsx(i,{children:n})};Xg.propTypes={answerSelected:cu.bool.isRequired,answerText:cu.string.isRequired};const AI=A.div`
    margin-top: .5rem;
    margin-bottom: .5rem;
`,NI=A.div`
    display: flex;
    gap: .33rem;
    margin-top: 1rem;
`,OI=A.button`
    background: #EDF0F5;
    font-family: 'Noto Sans Arabic', sans-serif;
    font-size: 1.1rem;
    border-radius: 6px;
    font-weight: 600;
    border: none;
    padding-left: 1rem;
    padding-right: 1rem;

    &:active {
        scale: 0.95;
    }

    &:hover {
        background: gold;
        cursor: pointer;
    }
`;function LI(){const[e,t]=I.useState(!1),n=()=>{t(!0),console.log(e)};return C.jsxs(TI,{children:[C.jsx(xI,{children:"Listen to the sentence and select the word:"}),C.jsx(RI,{}),C.jsxs(PI,{children:[C.jsx(Xg,{answerSelected:e,answerText:"أدرس"}),"اللغة العربية"]}),C.jsx(AI,{children:"I am studying Arabic."}),!e&&C.jsx(NI,{children:C.jsx(OI,{onClick:n,children:"أدرس"})})]})}const DI="/iqra-client/assets/NotoSansArabic-Thin-e6adb7c6.ttf",MI="/iqra-client/assets/NotoSansArabic-Light-7c68ccdb.ttf",bI="/iqra-client/assets/NotoSansArabic-Regular-90f50de4.ttf",jI="/iqra-client/assets/NotoSansArabic-Medium-a7d26bee.ttf",$I="/iqra-client/assets/NotoSansArabic-SemiBold-10ab5095.ttf",UI="/iqra-client/assets/NotoSansArabic-Bold-7c5404ac.ttf",zI="/iqra-client/assets/NotoSansArabic-ExtraBold-ced61204.ttf",FI="/iqra-client/assets/NotoSansArabic-ExtraLight-cea51d0b.ttf",BI="/iqra-client/assets/MuseoSansRounded100-277b7380.otf",HI="/iqra-client/assets/MuseoSansRounded300-3e4b353d.otf",WI="/iqra-client/assets/MuseoSansRounded500-0027c252.otf",VI="/iqra-client/assets/MuseoSansRounded700-ec5c9f85.otf",GI="/iqra-client/assets/MuseoSansRounded900-3a46eec7.otf",KI="/iqra-client/assets/MuseoSansRounded1000-bf425f18.otf",QI=vw`
  @font-face {
    font-family: 'Noto Sans Arabic';
    src: url(${UI}) format('truetype');
    font-weight: bold;
  }

  @font-face {
    font-family: 'Noto Sans Arabic';
    src: url(${zI}) format('truetype');
    font-weight: 800;
  }

  @font-face {
    font-family: 'Noto Sans Arabic';
    src: url(${$I}) format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Noto Sans Arabic';
    src: url(${jI}) format('truetype');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Noto Sans Arabic';
    src: url(${MI}) format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Noto Sans Arabic';
    src: url(${bI}) format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Noto Sans Arabic';
    src: url(${DI}) format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Noto Sans Arabic';
    src: url(${FI}) format('truetype');
    font-weight: 200;
  }

  @font-face {
    font-family: 'Museo';
    src: url(${KI}) format('opentype');
    font-weight: 1000;
  }

  @font-face {
    font-family: 'Museo';
    src: url(${GI}) format('opentype');
    font-weight: 900;
  }

  @font-face {
    font-family: 'Museo';
    src: url(${VI}) format('opentype');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Museo';
    src: url(${WI}) format('opentype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Museo';
    src: url(${HI}) format('opentype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Museo';
    src: url(${BI}) format('opentype');
    font-weight: 100;
  }

  :root {
    --primary: #48b6e5;
    --primary-shadow: #2e88af;
    --primary-text: rgb(75,75,75);
  }

  body {
    margin: 0;
    padding: 0;
    max-width: 414px;
    margin: 0 auto;
    font-family: 'Museo', sans-serif;
  }
`,Jg=({children:e})=>{const[t,n]=I.useState(null);return I.useEffect(()=>{const r=Er.onAuthStateChanged(i=>{n(i||null)});return()=>r()},[]),C.jsx(bg.Provider,{value:t,children:e})};Jg.propTypes={children:cu.node.isRequired};function YI(){return C.jsx(Jg,{children:C.jsxs(g1,{children:[C.jsx(QI,{}),C.jsxs(p1,{children:[C.jsx(dn,{path:"/",element:C.jsx(SI,{})}),C.jsx(dn,{path:"/sign-in",element:C.jsx(fk,{})}),C.jsx(dn,{path:"/sign-up",element:C.jsx(kk,{})}),C.jsx(dn,{path:"/listening",element:C.jsx(LI,{})}),C.jsx(dn,{path:"/dashboard",element:C.jsx(Pk,{})}),C.jsx(dn,{path:"*",element:C.jsx(hI,{})})]})]})})}Qa.createRoot(document.getElementById("root")).render(C.jsx(Xe.StrictMode,{children:C.jsx(YI,{})}));
