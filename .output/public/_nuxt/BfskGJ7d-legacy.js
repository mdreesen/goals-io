System.register(["./DzOvJm9Y-legacy.js"],function(e,t){"use strict";var o;return{setters:[e=>{o=e.Y}],execute:function(){
/**
       * @license lucide-vue-next v0.556.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
const t=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),r=e=>{const t=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()))(e);return t.charAt(0).toUpperCase()+t.slice(1)},s=(...e)=>e.filter((e,t,o)=>Boolean(e)&&""!==e.trim()&&o.indexOf(e)===t).join(" ").trim(),i=e=>""===e;
/**
       * @license lucide-vue-next v0.556.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
/**
       * @license lucide-vue-next v0.556.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */const c=({name:e,iconNode:c,absoluteStrokeWidth:l,"absolute-stroke-width":a,strokeWidth:d,"stroke-width":u,size:h=n.width,color:w=n.stroke,...k},{slots:g})=>o("svg",{...n,...k,width:h,height:h,stroke:w,"stroke-width":i(l)||i(a)||!0===l||!0===a?24*Number(d||u||n["stroke-width"])/Number(h):d||u||n["stroke-width"],class:s("lucide",k.class,...e?[`lucide-${t(r(e))}-icon`,`lucide-${t(e)}`]:["lucide-icon"])},[...c.map(e=>o(...e)),...g.default?[g.default()]:[]]);
/**
       * @license lucide-vue-next v0.556.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */e("c",(e,t)=>(r,{slots:s,attrs:i})=>o(c,{...i,...r,iconNode:t,name:e},s))}}});
