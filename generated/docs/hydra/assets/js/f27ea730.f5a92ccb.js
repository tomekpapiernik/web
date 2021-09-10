(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[99851],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73858:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a=["components"],c={id:"js",title:"JavaScript"},s=void 0,u={unversionedId:"sdk/js",id:"version-v1.9/sdk/js",isDocsHomePage:!1,title:"JavaScript",description:"To install the JavaScript SDK, run:",source:"@site/versioned_docs/version-v1.9/sdk/js.md",sourceDirName:"sdk",slug:"/sdk/js",permalink:"/hydra/docs/v1.9/sdk/js",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/sdk/js.md",tags:[],version:"v1.9",lastUpdatedBy:"Simon-Pierre Gingras",lastUpdatedAt:1625153561,formattedLastUpdatedAt:"7/1/2021",frontMatter:{id:"js",title:"JavaScript"},sidebar:"version-v1.9/docs",previous:{title:"Go",permalink:"/hydra/docs/v1.9/sdk/go"},next:{title:"PHP",permalink:"/hydra/docs/v1.9/sdk/php"}},p=[{value:"Configuration",id:"configuration",children:[]},{value:"API Usage",id:"api-usage",children:[]}],l={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To install the JavaScript SDK, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install --save @ory/hydra-client\n")),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("h4",{id:"basic-configuration"},"Basic configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Configuration, PublicApi, AdminApi } from '@ory/hydra-client'\n\nconst hydraPublic = new PublicApi(\n  new Configuration({\n    basePath: 'https://public.hydra:4444/'\n  })\n)\n\nconst hydraAdmin = new AdminApi(\n  new Configuration({\n    basePath: 'https://public.hydra:4445/'\n  })\n)\n")),(0,i.kt)("h3",{id:"api-usage"},"API Usage"),(0,i.kt)("p",null,"We recommend using TypeScript with auto-completion as API usage is not well\ndocumented currently."))}d.isMDXComponent=!0}}]);