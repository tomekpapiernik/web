(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[37741],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},82601:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],c={id:"js",title:"JavaScript"},s=void 0,l={unversionedId:"sdk/js",id:"version-v1.7/sdk/js",isDocsHomePage:!1,title:"JavaScript",description:"To install the JavaScript SDK, run:",source:"@site/versioned_docs/version-v1.7/sdk/js.md",sourceDirName:"sdk",slug:"/sdk/js",permalink:"/hydra/docs/v1.7/sdk/js",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.7/sdk/js.md",tags:[],version:"v1.7",lastUpdatedBy:"aeneasr",lastUpdatedAt:1597407772,formattedLastUpdatedAt:"8/14/2020",frontMatter:{id:"js",title:"JavaScript"},sidebar:"version-v1.7/docs",previous:{title:"Go",permalink:"/hydra/docs/v1.7/sdk/go"},next:{title:"PHP",permalink:"/hydra/docs/v1.7/sdk/php"}},u=[{value:"Configuration",id:"configuration",children:[]},{value:"API Usage",id:"api-usage",children:[]},{value:"API Docs",id:"api-docs",children:[]}],d={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To install the JavaScript SDK, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install --save @oryd/hydra-client\n")),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("h4",{id:"basic-configuration"},"Basic configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { AdminApi } from '@oryd/hydra-client'\n\n// Set this to Hydra's URL\nconst hydraAdmin = new AdminApi('http://localhost:4445')\n")),(0,o.kt)("h3",{id:"api-usage"},"API Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"hydraAdmin.listOAuth2Clients(10, 0).then(({ body }) => {\n  body.forEach((client) => {\n    console.log(client)\n  })\n})\n")),(0,o.kt)("h3",{id:"api-docs"},"API Docs"),(0,o.kt)("p",null,"API docs are available\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/master/sdk/js/swagger/README.md"},"here"),".\nPlease note that those docs are generated and may introduce bugs if code\nexamples are used 1:1. Especially the package name is not correct."))}p.isMDXComponent=!0}}]);