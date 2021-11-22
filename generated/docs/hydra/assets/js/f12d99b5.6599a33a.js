"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[77558],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=s(n),d=o,g=l["".concat(u,".").concat(d)]||l[d]||f[d]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},73681:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return l}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={id:"config",title:"Debug Configuration"},u=void 0,s={unversionedId:"debug/config",id:"version-v1.9/debug/config",isDocsHomePage:!1,title:"Debug Configuration",description:"To debug the configuration, set up tracing. Once set",source:"@site/versioned_docs/version-v1.9/debug/config.mdx",sourceDirName:"debug",slug:"/debug/config",permalink:"/hydra/docs/v1.9/debug/config",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/debug/config.mdx",tags:[],version:"v1.9",lastUpdatedBy:"aeneasr",lastUpdatedAt:1607427290,formattedLastUpdatedAt:"12/8/2020",frontMatter:{id:"config",title:"Debug Configuration"},sidebar:"version-v1.9/docs",previous:{title:"Common CSRF Pitfalls",permalink:"/hydra/docs/v1.9/debug/csrf"},next:{title:"Wrong Token Endpoint Auth Method",permalink:"/hydra/docs/v1.9/debug/token-endpoint-auth-method"}},p=[],f={toc:p};function l(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To debug the configuration, ",(0,i.kt)("a",{parentName:"p",href:"/hydra/docs/v1.9/guides/tracing"},"set up tracing"),". Once set\nup, all configuration keys will appear in your tracing UI:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jaeger Tracing UI for ORY Hydra",src:n(45454).Z})))}l.isMDXComponent=!0},45454:function(e,t,n){t.Z=n.p+"assets/images/tracing-config-47970660ba8bf88bd3f9f7a82740a9c5.png"}}]);