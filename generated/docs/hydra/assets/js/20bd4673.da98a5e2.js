"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[58886],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,h=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},44996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(52263),o=n(13919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,u=void 0!==a&&a,c=i.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(u)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},49301:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=(n(44996),["components"]),u={id:"oauth2-public-spa-mobile",title:"Mobile & Browser (Single-Page-App) with OAuth2"},c=void 0,l={unversionedId:"guides/oauth2-public-spa-mobile",id:"version-v1.8/guides/oauth2-public-spa-mobile",isDocsHomePage:!1,title:"Mobile & Browser (Single-Page-App) with OAuth2",description:"We have an",source:"@site/versioned_docs/version-v1.8/guides/oauth2-public-spa-mobile.mdx",sourceDirName:"guides",slug:"/guides/oauth2-public-spa-mobile",permalink:"/hydra/docs/v1.8/guides/oauth2-public-spa-mobile",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.8/guides/oauth2-public-spa-mobile.mdx",tags:[],version:"v1.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601676726,formattedLastUpdatedAt:"10/2/2020",frontMatter:{id:"oauth2-public-spa-mobile",title:"Mobile & Browser (Single-Page-App) with OAuth2"},sidebar:"version-v1.8/docs",previous:{title:"OAuth 2.0 Token Introspection",permalink:"/hydra/docs/v1.8/guides/oauth2-token-introspection"},next:{title:"Configuration",permalink:"/hydra/docs/v1.8/reference/configuration"}},p=[{value:"Creating a public OAuth 2.0 Client",id:"creating-a-public-oauth-20-client",children:[],level:3}],s={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We have an\n",(0,i.kt)("a",{parentName:"p",href:"https://www.ory.sh/oauth2-for-mobile-app-spa-browser"},"excellent blog post")," on\nthis topic. Read it now!"),(0,i.kt)("h3",{id:"creating-a-public-oauth-20-client"},"Creating a public OAuth 2.0 Client"),(0,i.kt)("p",null,"You can create a public OAuth 2.0 Client (e.g. for the authorize code + PKCE or\nimplicit flow) with the CLI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hydra clients create --endpoint http://ory-hydra-admin-api --token-endpoint-auth-method none\n")),(0,i.kt)("p",null,"or by setting in the HTTP API JSON body when POSTing to ",(0,i.kt)("inlineCode",{parentName:"p"},"/clients"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "client_id": "...",\n  "token_endpoint_auth_method": "none"\n}\n')),(0,i.kt)("p",null,"Be aware that when making requests to ",(0,i.kt)("inlineCode",{parentName:"p"},"/oauth2/token")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"/oauth2/revoke")," with a\npublic OAuth 2.0 Client, you cannot authenticate with the HTTP Basic\nAuthorization but must include the ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id")," in the POST body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"POST /oauth2/token\n...\n\nclient_id=...&\n  ...\n")))}d.isMDXComponent=!0}}]);