(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[58642],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41587:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],p={id:"sdk",title:"Software Development Kits (SDKs)",sidebar_label:"Overview"},s=void 0,l={unversionedId:"sdk",id:"version-v1.9/sdk",isDocsHomePage:!1,title:"Software Development Kits (SDKs)",description:"All SDKs use automated code generation provided by",source:"@site/versioned_docs/version-v1.9/sdk.md",sourceDirName:".",slug:"/sdk",permalink:"/hydra/docs/v1.9/sdk",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/sdk.md",tags:[],version:"v1.9",lastUpdatedBy:"aeneasr",lastUpdatedAt:1611740481,formattedLastUpdatedAt:"1/27/2021",frontMatter:{id:"sdk",title:"Software Development Kits (SDKs)",sidebar_label:"Overview"},sidebar:"version-v1.9/docs",previous:{title:"FAQ",permalink:"/hydra/docs/v1.9/faq"},next:{title:"Go",permalink:"/hydra/docs/v1.9/sdk/go"}},u=[],c={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All SDKs use automated code generation provided by\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator"},(0,o.kt)("inlineCode",{parentName:"a"},"openapi-generator")),".\nUnfortunately, ",(0,o.kt)("inlineCode",{parentName:"p"},"openapi-generator")," has serious breaking changes in the generated\ncode when upgrading versions. Therefore, we do not make backwards compatibility\npromises with regards to the generated SDKs. We hope to improve this process in\nthe future."),(0,o.kt)("p",null,"Before you check out the SDKs, head over to the ",(0,o.kt)("a",{parentName:"p",href:"/hydra/docs/v1.9/reference/api"},"REST API"),"\ndocumentation which includes code samples for common programming languages for\neach REST endpoint."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The SDKs do not provide a good API for dealing with OAuth 2.0 Flows (e.g.\nAuthorize Code Flow, Refresh Flow, ...). But there are tons of\n",(0,o.kt)("a",{parentName:"p",href:"https://oauth.net/code/"},"libraries available for consuming OAuth 2.0"),". Do not\nwrite your own OAuth 2.0 Library!")),(0,o.kt)("p",null,"We publish our SDKs for popular languages in their respective package\nrepositories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pub.dev/packages/ory_hydra_client"},"Dart")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory/hydra-client-go"},"Go")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://search.maven.org/artifact/sh.ory.hydra/hydra-client"},"Java")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@ory/hydra-client"},"JavaScript")," with TypeScript\ndefinitions and compatible with: NodeJS, ReactJS, AnuglarJS, Vue.js, and many\nmore."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://packagist.org/packages/ory/hydra-client"},"PHP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pypi.org/project/ory-hydra-client/"},"Python")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rubygems.org/gems/ory-hydra-client"},"Ruby")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/ory-hydra-client"},"Rust"))),(0,o.kt)("p",null,"We also provide more info for these SDKs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"sdk/go"},"Golang")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"sdk/js"},"JavaScript"))),(0,o.kt)("p",null,"Missing your programming language?\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra/issues"},"Create an issue")," and help us build, test\nand publish the SDK for your programming language!"))}d.isMDXComponent=!0}}]);