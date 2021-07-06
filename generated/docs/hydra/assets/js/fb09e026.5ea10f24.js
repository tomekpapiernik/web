(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[6027],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66504:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],s={id:"sdk",title:"Software Development Kits (SDKs)",sidebar_label:"Overview"},p=void 0,l={unversionedId:"sdk",id:"version-v1.7/sdk",isDocsHomePage:!1,title:"Software Development Kits (SDKs)",description:"All SDKs use automated code generation provided by",source:"@site/versioned_docs/version-v1.7/sdk.md",sourceDirName:".",slug:"/sdk",permalink:"/hydra/docs/v1.7/sdk",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.7/sdk.md",version:"v1.7",lastUpdatedBy:"aeneasr",lastUpdatedAt:1597407772,formattedLastUpdatedAt:"8/14/2020",frontMatter:{id:"sdk",title:"Software Development Kits (SDKs)",sidebar_label:"Overview"},sidebar:"version-v1.7/docs",previous:{title:"Logout not Working as Expected",permalink:"/hydra/docs/v1.7/debug/logout"},next:{title:"Go",permalink:"/hydra/docs/v1.7/sdk/go"}},u=[],c={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All SDKs use automated code generation provided by\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator"},(0,a.kt)("inlineCode",{parentName:"a"},"openapi-generator")),".\nUnfortunately, ",(0,a.kt)("inlineCode",{parentName:"p"},"openapi-generator")," has serious breaking changes in the generated\ncode when upgrading versions. Therefore, we do not make backwards compatibility\npromises with regards to the generated SDKs. We hope to improve this process in\nthe future."),(0,a.kt)("p",null,"Before you check out the SDKs, head over to the ",(0,a.kt)("a",{parentName:"p",href:"/hydra/docs/v1.7/reference/api"},"REST API"),"\ndocumentation which includes code samples for common programming languages for\neach REST endpoint."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The SDKs do not provide a good API for dealing with OAuth 2.0 Flows (e.g.\nAuthorize Code Flow, Refresh Flow, ...). But there are tons of\n",(0,a.kt)("a",{parentName:"p",href:"https://oauth.net/code/"},"libraries available for consuming OAuth 2.0"),". Do not\nwrite your own OAuth 2.0 Library!")),(0,a.kt)("p",null,"We publish our SDKs for popular languages in their respective package\nrepositories:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pypi.org/project/ory-hydra-client/"},"Python")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://packagist.org/packages/ory/hydra-client"},"PHP")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ory/hydra-client-go"},"Go")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@oryd/hydra-client"},"NodeJS")," (with TypeScript)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://search.maven.org/artifact/sh.ory.hydra/hydra-client"},"Java")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rubygems.org/gems/ory-hydra-client"},"Ruby"))),(0,a.kt)("p",null,"We also provide more info for these SDKs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"sdk/go"},"Golang")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"sdk/js"},"JavaScript"))),(0,a.kt)("p",null,"Missing your programming language?\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra/issues"},"Create an issue")," and help us build, test\nand publish the SDK for your programming language!"))}d.isMDXComponent=!0}}]);