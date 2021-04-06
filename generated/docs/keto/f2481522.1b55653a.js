(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{186:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(194)),c={title:"Implemented and Planned Features"},i={unversionedId:"implemented-planned-features",id:"version-v0.6/implemented-planned-features",isDocsHomePage:!1,title:"Implemented and Planned Features",description:"In October 2020 we decided to rewrite Ory Keto from scratch, implementing",source:"@site/versioned_docs/version-v0.6/implemented-planned-features.mdx",slug:"/implemented-planned-features",permalink:"/keto/docs/implemented-planned-features",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.6/implemented-planned-features.mdx",version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1617730042,sidebar:"version-v0.6/docs",previous:{title:"Installation",permalink:"/keto/docs/install"},next:{title:"Performance",permalink:"/keto/docs/performance"}},l=[{value:"Implemented Features",id:"implemented-features",children:[]},{value:"Next Upcoming Features",id:"next-upcoming-features",children:[]},{value:"Planned Features",id:"planned-features",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In October 2020 we decided to rewrite Ory Keto from scratch, implementing\nstate-of-the-art access control and permissions. We decided to make Ory Keto the\nfirst Open Source implementation of\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://research.google/pubs/pub48190/"}),"Google's Zanzibar paper"),"."),Object(o.b)("p",null,"This document gives an overview of all implemented and planned features.\nUnfortunately we cannot give delivery time estimates for Open Source products,\nbut you can help us to accelerate development by\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://opencollective.com/ory"}),"supporting Ory"),"."),Object(o.b)("h2",{id:"implemented-features"},"Implemented Features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/keto/pull/269"}),"Read-API")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/keto/pull/275"}),"Write-API")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/keto/pull/277"}),"Check-API")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/keto/pull/285"}),"Expand-API")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/keto/pull/324"}),"Namespaces"))),Object(o.b)("h2",{id:"next-upcoming-features"},"Next Upcoming Features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/263"}),"Subject Set rewrites")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/319"}),"Native ABAC & RBAC Support")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/318"}),"Integration with other policy servers"))),Object(o.b)("h2",{id:"planned-features"},"Planned Features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/306"}),"Database sharding")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/303"}),"Namespace-specific database settings")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/504"}),"Cockroach optimized persistence layer")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/keto/issues/312"}),"Latency reduction through aggressive caching"))),Object(o.b)("p",null,"... and many more, tracked as ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ory/keto/issues"}),"issues")))}s.isMDXComponent=!0},194:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(d,i(i({ref:t},p),{},{components:r})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);