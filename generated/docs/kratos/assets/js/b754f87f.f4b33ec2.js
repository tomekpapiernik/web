"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[49492],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97892:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={id:"setting-up-aes-cipher-parameters",title:"Setting up AES Cipher algorithm"},p=void 0,c={unversionedId:"guides/setting-up-aes-cipher-parameters",id:"version-v0.8/guides/setting-up-aes-cipher-parameters",isDocsHomePage:!1,title:"Setting up AES Cipher algorithm",description:"Ory Kratos supports encryption and decryption only for oidc token for now. This",source:"@site/versioned_docs/version-v0.8/guides/setting-up-aes-cipher-parameters.mdx",sourceDirName:"guides",slug:"/guides/setting-up-aes-cipher-parameters",permalink:"/kratos/docs/guides/setting-up-aes-cipher-parameters",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.8/guides/setting-up-aes-cipher-parameters.mdx",tags:[],version:"v0.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1635084599,formattedLastUpdatedAt:"10/24/2021",frontMatter:{id:"setting-up-aes-cipher-parameters",title:"Setting up AES Cipher algorithm"},sidebar:"version-v0.8/docs",previous:{title:"Setting up XChaCha20 Poly1305 Cipher algorithm",permalink:"/kratos/docs/guides/setting-up-xchacha-cipher-parameters"},next:{title:"High Availability",permalink:"/kratos/docs/guides/high-availability-ha"}},u=[],l={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ory Kratos supports encryption and decryption only for oidc token for now. This\nsection explain how to use and configure Kratos for using AES Cipher algorithm."),(0,a.kt)("p",null,"The algorithm and secrets key must be set in the configuration. These\n",(0,a.kt)("a",{parentName:"p",href:"secret-key-rotation"},"secrets key rotation")," must be set and be a string of 32\ncharacters long."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'},"secrets:\n  cipher:\n    - 32-LONG-SECRET-NOT-SECURE-AT-ALL\nciphers:\n  algorithm: aes\n")))}d.isMDXComponent=!0}}]);