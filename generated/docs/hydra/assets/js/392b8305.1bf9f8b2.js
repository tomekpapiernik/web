(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[24917],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},96895:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),s=["components"],i={id:"js",title:"JavaScript"},c=void 0,l={unversionedId:"sdk/js",id:"version-v1.5/sdk/js",isDocsHomePage:!1,title:"JavaScript",description:"The JavaScript SDK is autogenerated and developer experience is not great. We",source:"@site/versioned_docs/version-v1.5/sdk/js.md",sourceDirName:"sdk",slug:"/sdk/js",permalink:"/hydra/docs/v1.5/sdk/js",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.5/sdk/js.md",tags:[],version:"v1.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1592320450,formattedLastUpdatedAt:"6/16/2020",frontMatter:{id:"js",title:"JavaScript"},sidebar:"version-v1.5/docs",previous:{title:"Go",permalink:"/hydra/docs/v1.5/sdk/go"},next:{title:"PHP",permalink:"/hydra/docs/v1.5/sdk/php"}},u=[{value:"Configuration",id:"configuration",children:[]},{value:"API Usage",id:"api-usage",children:[]},{value:"API Docs",id:"api-docs",children:[]}],d={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The JavaScript SDK is autogenerated and developer experience is not great. We\nencourage you to use\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},(0,o.kt)("inlineCode",{parentName:"a"},"fetch"))," instead.")),(0,o.kt)("p",null,"To install the JavaScript SDK, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install --save @oryd/hydra-client\n")),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("h4",{id:"basic-configuration"},"Basic configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const Hydra = require('@oryd/hydra-client')\n\n// Set this to Hydra's URL\nHydra.ApiClient.instance.basePath = 'http://localhost:4445'\n")),(0,o.kt)("h3",{id:"api-usage"},"API Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const hydra = new Hydra.AdminAPI()\n\n// for example, let's fetch all OAuth2 clients\nhydra.listOAuth2Clients((error, data, response) => {\n  if (error) {\n    // a network error occurred.\n    throw error\n  } else if (response.statusCode < 200 || response.statusCode >= 400) {\n    // an application error occurred.\n    throw new Error(\n      'Consent endpoint gave status code ' +\n        response.statusCode +\n        ', but status code 200 was expected.'\n    )\n  }\n\n  console.log(response) // a list of OAuth2 clients.\n})\n")),(0,o.kt)("h3",{id:"api-docs"},"API Docs"),(0,o.kt)("p",null,"API docs are available\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/master/sdk/js/swagger/README.md"},"here"),".\nPlease note that those docs are generated and may introduce bugs if code\nexamples are used 1:1. Especially the package name is not correct."))}p.isMDXComponent=!0}}]);