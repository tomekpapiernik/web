(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{157:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(9),i=(r(0),r(175)),a={id:"secure",title:"Secure"},c={id:"version-v0.5/secure",title:"Secure",description:"Similar to other services in our ecosystem, ORY Keto's APIs have no integrated",source:"@site/versioned_docs/version-v0.5/secure.md",permalink:"/keto/docs/secure",editUrl:"https://github.com/docs/keto/edit/master/docs/versioned_docs/version-v0.5/secure.md",version:"v0.5",lastUpdatedBy:"hackerman",lastUpdatedAt:1586170560,sidebar:"version-v0.5/docs",previous:{title:"Configure and Deploy",permalink:"/keto/docs/configure-deploy"},next:{title:"Access Control Engines - Introduction",permalink:"/keto/docs/engines/index"}},s=[],u={rightToc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Similar to other services in our ecosystem, ORY Keto's APIs have no integrated\naccess control on their own. Any request made to any Keto API is considered\nauthenticated, authorized, and is thus being executed. However, these endpoints\nare very sensitive as they define who is allowed to do what in your system."),Object(i.b)("p",null,"Please protect these endpoints using\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ory/oathkeeper"}),"ORY Oathkeeper")," or a comparable API Gateway.\nHow you protect them, is up to you."),Object(i.b)("p",null,"If you require support for this, consider ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:hi@ory.sh"}),"asking us"),"."))}p.isMDXComponent=!0},175:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),f=n,y=l["".concat(a,".").concat(f)]||l[f]||d[f]||i;return r?o.a.createElement(y,c({ref:t},u,{components:r})):o.a.createElement(y,c({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);