"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[96150],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},23873:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={id:"sdk",title:"SDKs",sidebar_label:"Overview"},p=void 0,c={unversionedId:"sdk",id:"version-v0.4/sdk",isDocsHomePage:!1,title:"SDKs",description:"All SDKs use automated code generation provided by",source:"@site/versioned_docs/version-v0.4/sdk.md",sourceDirName:".",slug:"/sdk",permalink:"/kratos/docs/v0.4/sdk",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/sdk.md",tags:[],version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594198226,formattedLastUpdatedAt:"7/8/2020",frontMatter:{id:"sdk",title:"SDKs",sidebar_label:"Overview"},sidebar:"version-v0.4/docs",previous:{title:"Common Cookie and CSRF Pitfalls",permalink:"/kratos/docs/v0.4/debug/csrf"},next:{title:"Comparison",permalink:"/kratos/docs/v0.4/further-reading/comparison"}},l=[],u={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All SDKs use automated code generation provided by\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator"},(0,a.kt)("inlineCode",{parentName:"a"},"openapi-generator")),".\nUnfortunately, ",(0,a.kt)("inlineCode",{parentName:"p"},"openapi-generator")," has serious breaking changes in the generated\ncode when upgrading versions. Therefore, we do not make backwards compatibility\npromises with regards to the generated SDKs. We hope to improve this process in\nthe future."),(0,a.kt)("p",null,"Before you check out the SDKs, head over to the ",(0,a.kt)("a",{parentName:"p",href:"reference/api"},"REST API"),"\ndocumentation documentation which includes code samples for common programming\nlanguages for each REST endpoint."),(0,a.kt)("p",null,"We publish our SDKs for popular languages in their respective package\nrepositories:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pypi.org/project/ory-kratos-client/"},"Python")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://packagist.org/packages/ory/kratos-client"},"PHP")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos-client-go"},"Go")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@oryd/kratos-client"},"NodeJS")," (with TypeScript)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://search.maven.org/artifact/sh.ory.kratos/kratos-client"},"Java")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rubygems.org/gems/ory-kratos-client"},"Ruby"))),(0,a.kt)("p",null,"Missing your programming language?\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues"},"Create an issue")," and help us build, test\nand publish the SDK for your programming language!"))}d.isMDXComponent=!0}}]);