"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[66248],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75399:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],u={id:"using-oauth2",title:"Using OAuth2"},l=void 0,s={unversionedId:"guides/using-oauth2",id:"version-v1.9/guides/using-oauth2",isDocsHomePage:!1,title:"Using OAuth2",description:"Please, do not write your own code to interact with OAuth 2.0. Use open",source:"@site/versioned_docs/version-v1.9/guides/using-oauth2.mdx",sourceDirName:"guides",slug:"/guides/using-oauth2",permalink:"/hydra/docs/v1.9/guides/using-oauth2",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/guides/using-oauth2.mdx",tags:[],version:"v1.9",lastUpdatedBy:"aeneasr",lastUpdatedAt:1607427290,formattedLastUpdatedAt:"12/8/2020",frontMatter:{id:"using-oauth2",title:"Using OAuth2"},sidebar:"version-v1.9/docs",previous:{title:"Using Common OAuth2 and OpenID Connect Flows",permalink:"/hydra/docs/v1.9/guides/common-oauth2-openid-connect-flows"},next:{title:"Configuring Expiration",permalink:"/hydra/docs/v1.9/guides/token-expiration"}},p=[],c={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Please, do not write your own code to interact with OAuth 2.0"),". Use open\nsource & battle-tested libraries instead. Here are some examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NodeJS",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.passportjs.org/"},"passport")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/lelylan/simple-oauth2"},"simple-oauth2")))),(0,a.kt)("li",{parentName:"ul"},"Golang",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/golang/oauth2"},"golang/oauth2")," ","*",(0,a.kt)("em",{parentName:"li"},"recommended")))),(0,a.kt)("li",{parentName:"ul"},"PHP",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/thephpleague/oauth2-client"},"oauth2-client")))),(0,a.kt)("li",{parentName:"ul"},"Java",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-security-oauth"},"Spring Security OAuth"))))),(0,a.kt)("p",null,"For a full list of client libraries go ",(0,a.kt)("a",{parentName:"p",href:"https://oauth.net/code/"},"here"),"."))}m.isMDXComponent=!0}}]);