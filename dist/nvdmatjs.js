!function(n,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?exports.NVDMATJS=i():n.NVDMATJS=i()}(this,function(){return function(n){var i={};function t(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=i,t.d=function(n,i,e){t.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,i){if(1&i&&(n=t(n)),8&i)return n;if(4&i&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&i&&"string"!=typeof n)for(var r in n)t.d(e,r,function(i){return n[i]}.bind(null,r));return e},t.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(i,"a",i),i},t.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},t.p="",t(t.s=0)}([function(n,i,t){const e=t(1);n.exports={ndfunc:e}},function(n,i,t){const e=t(2);function r(n){return null===n._pid}function l(n){return null===n._lsibid}function u(n){return null===n._rsibid}function d(n){return null===n._fstchid}function s(n){return null!==n._fstchid&&void 0!==n._fstchid}function o(n){return null!==n._rsibid&&void 0!==n._rsibid}function f(n,i){return null===n?null:e.afindv("_id",n,i)}function c(n){let i={_fstchid:void 0,_lsibid:void 0,_rsibid:void 0,_id:n.currid,_pid:void 0,_depth:0};return n.currid=n.currid+1,i}function _(n){return n._fstchid=null,n}function b(n,i){return f(n._lsibid,i)}function p(n,i){return f(n._rsibid,i)}function a(n,i){let t=[];for(;null!==n&&null!==(n=b(n,i));)t.push(n);return t.reverse(),t}function g(n,i){let t=[];for(;null!==n&&null!==(n=p(n,i));)t.push(n);return t}function h(n,i){let t=a(n,i);return 0===t.length?n:t[0]}function v(n,i){let t=g(n,i),r=0===t.length?n:e.getlstv(t);return r=void 0===r?null:r}function y(n,i){let t=a(n,i),e=g(n,i);return Array.prototype.concat(t,[n],e)}function A(n,i){return f(n._fstchid,i)}function S(n,i,t){if(d(i))return null;{let e=0,r=A(i,t),l=p(r,t);for(;e<n&&null!==l;)l=p(r=l,t),e+=1;return r=e<n?null:r}}function L(n,i){let t=[];if(d(n));else{let e=A(n,i);t.push(e),t=t.concat(g(e,i))}return t}function m(n,i){let t=L(n,i),r=e.getlstv(t);return r=void 0===r?null:r}function F(n,i){return f(h(n,i)._pid,i)}function O(n,i){let t=[],e=F(n,i);for(;null!==e;)t.push(e),e=F(e,i);return t}function x(n,i){let t=O(n,i);return Array.prototype.concat([n],t)}function w(n,i,t){let e=F(i,t),r=0;for(;null!==e&&r<n;)e=F(e,t),r+=1;return e}function N(n,i){let t=o(n);for(;!t&&null!==(n=F(n,i));)t=o(n);return n}function j(n,i){let t=0,e=F(n,i);for(;null!==e;)e=F(e,i),t+=1;return t}function R(n,i){let t=N(n,i);if(null===t)return null;return p(t,i)}function D(n,i){let t=n,e=m(t,i);for(;null!==e;)e=m(t=e,i);return t}function M(n,i){let t,e=A(n,i);return t=null===e?R(n,i):e}function I(n,i,t){let r=O(i,t);return e.afindi("_id",n._id,r)>=0}function P(n,i,t){let r=x(i,t);return e.afindi("_id",n._id,r)>=0}function T(n,i){let t=[],e=n;for(;null!==n&&P(e,n,i);)t.push(n),n=M(n,i);return t}function B(n,i){let t=n-i[0]._depth;return i=i.map(n=>(n._depth=n._depth+t,n))}function J(n){return n._pid=void 0,n}function q(n){return n._lsibid=null,n}function C(n){let i,t;return e.isArray(n)?t=(i=n)[0]:(i=[n],t=n),[i,t]}function $(n){return n._lsibid=null,n._rsibid=null,n._pid=null,n}function E(n){let i=n[0]._depth;return n=n.map(n=>(n._depth=n._depth-i,n))}function k(n,i){let t=T(n,i),r=e.afindi("_id",t[0]._id,i);return[r,r+t.length-1]}function H(n,i){let t,r=A(n,i);if(null!==r){let[l,u]=k(r,i);t=i.slice(l,u+1);let d=p(r,i);null===d?n=_(n):(n._fstchid=d._id,d._pid=n._id,d=q(d)),t=E(t),r=$(r),i=e.secdel(l,u,i)}else t=[];return[i,t]}function V(n,i){let t=F(h(n,i),i);return null===t?[[],i]:H(t,i)}function W(n,i){let t,r=p(n,i);if(null===r)t=[];else{let[l,u]=k(r,i);t=i.slice(l,u+1);let d=p(r,i);null===d?n._rsibid=null:(n._rsibid=d._id,d._lsibid=n._id),t=E(t),r=$(r),i=e.secdel(l,u,i)}return[i,t]}function z(n,i){let t;if(r(n))t=[i,[]];else if(l(n)){t=H(F(n,i),i)}else{t=W(b(n,i),i)}return t}n.exports={isRoot:r,isFstch:function(n){return null===n._lsibid&&null!==n._pid},isFstsib:l,isFstchButNotLstch:function(n){return null!==n._rsibid&&void 0!==n._rsibid&&null===n._lsibid&&null!==n._pid},isFstsibButNotLstsib:function(n){return null!==n._rsibid&&void 0!==n._rsibid&&null===n._lsibid},isLstch:function(n){return null===n._rsibid&&null!==n._pid},isLstsib:u,isLstchButNotFstch:function(n){return null===n._rsibid&&null!==n._lsibid&&void 0!==n._lsibid&&null!==n._pid},isLstsibButNotFstsib:function(n){return null===n._rsibid&&null!==n._lsibid&&void 0!==n._lsibid},isFstchAndLstch:function(n){return null===n._lsibid&&null===n._rsibid&&null!==n._pid},isFstsibAndLstsib:function(n){return null===n._lsibid&&null===n._rsibid},isMidch:function(n){return null!==n._lsibid&&void 0!==n._lsibid&&null!==n._rsibid&&void 0!==n._rsibid&&null!==n._pid},isMidsib:function(n){return null!==n._lsibid&&void 0!==n._lsibid&&null!==n._rsibid&&void 0!==n._rsibid},isLeaf:d,isNonLeaf:s,isUndefined:function(n){return void 0===n._fstchid},havingLsib:function(n){return null!==n._lsibid&&void 0!==n._lsibid},havingRsib:o,idgetnd:f,eq:function(n,i){for(let t in n){if(!1===(n[t]===i[t]))return!1}return!0},newIdPool:function(){return{currid:0}},newNode:c,newRoot:function(n){let i=c(n);return i._lsibid=null,i._rsibid=null,i._pid=null,i._depth=0,i},newFstsib:function(n){let i=c(n);return i._lsibid=null,i},newMidsib:function(n){return c(n)},newLstsib:function(n){let i=c(n);return i._rsibid=null,i},leafize:_,newLeafFstsib:function(n){let i=c(n);return i._lsibid=null,i._fstchid=null,i},newLeafMidsib:function(n){let i=c(n);return i._fstchid=null,i},newLeafLstsib:function(n){let i=c(n);return i._rsibid=null,i._fstchid=null,i},newLeafLonelySib:function(n){let i=c(n);return i._lsibid=null,i._rsibid=null,i._fstchid=null,i},getLsib:b,getRsib:p,getPrecedingSibs:a,getFollowingSibs:g,getFstsib:h,getLstsib:v,getAllSibs:y,getSib:function(n,i,t){return y(i,t)[n]},getFstch:A,getChild:S,getChildren:L,getLstch:m,getParent:F,getAllAnces:O,getAllAncesIncludingSelf:x,getAnces:w,getAncesIncludingSelf:function(n,i,t){return 0===n?i:w(n-1,i,t)},getFstAncesHavingRsibIncludingSelf:N,calcDepth:j,getDepth:function(n,i){return void 0===n._depth?j(n,i):n._depth},getSibseq:function(n,i){return a(n,i).length},getBreadth:function(n,i){let t=a(F(n,i),i).map(n=>L(n,i)),e=Array.prototype.concat(...t),r=a(n,i);return e.length+r.length},getRsibOfFstAncesHavingRsibIncludingSelf:R,getRdmost:D,sdfsNext:M,sdfsPrev:function(n,i){let t,e=b(n,i);return t=null===e?F(n,i):D(e,i)},isAncesOf:I,isDesOf:function(n,i,t){return I(i,n,t)},isAncesOfIncludingSelf:P,isDesOfIncludingSelf:function(n,i,t){return P(i,n,t)},getAllDesesIncludingSelf:T,getAllDeses:function(n,i){let t=T(n,i);return t.shift(),t},getFlatWidth:function(n,i){return T(n,i).filter(d).length},getFlatOffset:function(n,i){let t=i.findIndex(i=>i._id===n._id),e=i.slice(0,t);return(e=e.filter(d)).length},addLsib:function(n,i,t){return r(n)?console.log("rnd  can NOT addLsib"):i=l(n)?function(n,i,t){let[r,l]=C(t);r=B(n._depth,r);let u=F(n,i);u._fstchid=l._id,l._pid=u._id,n._pid=void 0,l._lsibid=null,l._rsibid=n._id,n._lsibid=l._id;let d=e.afindi("_id",n._id,i);return i=e.insertl(d,r,i)}(n,i,t):function(n,i,t){let[r,l]=C(t);r=B(n._depth,r);let u=b(n,i);u._rsibid=l._id,l._lsibid=u._id,n._lsibid=l._id,l._rsibid=n._id,l=J(l);let d=e.afindi("_id",n._id,i);return i=e.insertl(d,r,i)}(n,i,t),i},addRsib:function(n,i,t){return r(n)?(console.log("rnd  can NOT addRsib"),i):i=u(n)?function(n,i,t){let[r,l]=C(t);r=B(n._depth,r),l._lsibid=n._id,n._rsibid=l._id,l=J(l);let u=D(n,i),d=e.afindi("_id",u._id,i);return i=e.insertl(d+1,r,i)}(n,i,t):function(n,i,t){let[r,l]=C(t);r=B(n._depth,r);let u=p(n,i);u._lsibid=l._id,l._rsibid=u._id,n._rsibid=l._id,l._lsibid=n._id,l._rsibid=null,l=J(l);let d=D(n,i),s=e.afindi("_id",d._id,i);return i=e.insertl(s+1,r,i)}(n,i,t)},addFstch:function(n,i,t){let[r,l]=C(t);if(r=B(n._depth+1,r),s(n))return console.log("nonleaf  can NOT addFstch"),i;n._fstchid=l._id,l._pid=n._id,l=q(l);let u=e.afindi("_id",n._id,i);return i=e.insertl(u+1,r,i)},getDesFstiAndLsti:k,rmFstch:H,rmFstsib:V,rmRsib:W,rmLstsib:function(n,i){let t=b(v(n,i),i);return null===t?V(n,i):W(t,i)},rmLsib:function(n,i){let t,r=b(n,i);if(null===r)t=[];else{let[l,u]=k(r,i);t=i.slice(l,u+1);let d=b(r,i);if(null===d){n._lsibid=null,n._pid=r._pid,F(n,i)._fstchid=r._id}else n._lsibid=d._id,d._rsibid=n._id;t=E(t),r=$(r),i=e.secdel(l,u,i)}return[i,t]},rmSelf:z,rmChild:function(n,i,t){let e=S(n,i,t);return null===e?[t,[]]:z(e,t)}}},function(n,i){function t(n){return n.length-1}function e(n){return n[t(n)]}function r(n,i){return n===i||n!=n&&i!=i}function l(n){return Array.isArray(n)||n instanceof Array}function u(n){return"[object Date]"===toString.call(n)}function d(n){return"[object RegExp]"===toString.call(n)}function s(n){return n&&n.window===n}function o(n){return n&&n.$evalAsync&&n.$watch}function f(n){return"function"==typeof n}function c(n){return void 0!==n}function _(){return Object.create(null)}n.exports={deepcopyJSON:function(n){return JSON.parse(JSON.stringify(n))},afindi:function(n,i,t){return t.findIndex(t=>t[n]===i)},afindv:function(n,i,t){return t.find(t=>t[n]===i)},getlsti:t,getlstv:e,getlsta:function(n,i){return e(i)[n]},secdel:function(n,i,t){let e=i-n+1;return t.splice(n,e),t},insert:function(n,i,t){return t.splice(n,0,i),t},insertl:function(n,i,t){return t.splice(n,0,...i),t},norecurEq:function(n,i){for(let t=0;t<n.length;t++){if(!1===(n[k]===i[k]))return!1}return!0},simpleCompare:r,isArray:l,isDate:u,isRegExp:d,isWindow:s,isScope:o,isFunction:f,isDefined:c,createMap:_,equals:function n(i,t){if(i===t)return!0;if(null===i||null===t)return!1;if(i!=i&&t!=t)return!0;var e,b,p,a=typeof i;if(a===typeof t&&"object"===a){if(!l(i)){if(u(i))return!!u(t)&&r(i.getTime(),t.getTime());if(d(i))return!!d(t)&&i.toString()===t.toString();if(o(i)||o(t)||s(i)||s(t)||l(t)||u(t)||d(t))return!1;for(b in p=_(),i)if("$"!==b.charAt(0)&&!f(i[b])){if(!n(i[b],t[b]))return!1;p[b]=!0}for(b in t)if(!(b in p)&&"$"!==b.charAt(0)&&c(t[b])&&!f(t[b]))return!1;return!0}if(!l(t))return!1;if((e=i.length)===t.length){for(b=0;b<e;b++)if(!n(i[b],t[b]))return!1;return!0}}return!1}}}])});
//# sourceMappingURL=nvdmatjs.js.map