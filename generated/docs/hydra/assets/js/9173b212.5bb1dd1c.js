"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[11035],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},36259:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={id:"migrating-from-mitreid",title:"Migrating from MITREid"},l=void 0,c={unversionedId:"guides/migrating-from-mitreid",id:"version-v1.10/guides/migrating-from-mitreid",isDocsHomePage:!1,title:"Migrating from MITREid",description:"Please note this page doesn't pretend to be a step-by-step guide.",source:"@site/versioned_docs/version-v1.10/guides/migrating-from-mitreid.mdx",sourceDirName:"guides",slug:"/guides/migrating-from-mitreid",permalink:"/hydra/docs/guides/migrating-from-mitreid",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/guides/migrating-from-mitreid.mdx",tags:[],version:"v1.10",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619175811,formattedLastUpdatedAt:"4/23/2021",frontMatter:{id:"migrating-from-mitreid",title:"Migrating from MITREid"},sidebar:"version-v1.10/docs",previous:{title:"Gitlab Hydra integration",permalink:"/hydra/docs/guides/gitlab"},next:{title:"Merge multiple system.secrets",permalink:"/hydra/docs/guides/merge-multiple-db-secrets"}},d=[{value:"Scopes",id:"scopes",children:[],level:4},{value:"Scope vs Scp",id:"scope-vs-scp",children:[],level:4},{value:"Query String Parameters",id:"query-string-parameters",children:[],level:4},{value:"Scope Strategies if no scope is requested",id:"scope-strategies-if-no-scope-is-requested",children:[],level:4}],p={toc:d};function u(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Please note this page doesn't pretend to be a step-by-step guide."))),(0,a.kt)("p",null,"This piece of documentation will try to give you some hints to move your current\nMITREid instance to Hydra."),(0,a.kt)("h4",{id:"scopes"},"Scopes"),(0,a.kt)("p",null,"Scopes in hydra doesn't have a relational entity, every client defines its own\narray of scopes."),(0,a.kt)("h4",{id:"scope-vs-scp"},"Scope vs Scp"),(0,a.kt)("p",null,"Since hydra uses scp as the scope claim, you have to be sure your client\nlibraries are capable to use both, we had to modify the behavior of our version\nof spring.security.oauth2 library following the example:\n",(0,a.kt)("a",{parentName:"p",href:"https://dev.to/toojannarong/spring-security-with-jwt-the-easiest-way-2i43"},"Custom claim")),(0,a.kt)("h4",{id:"query-string-parameters"},"Query String Parameters"),(0,a.kt)("p",null,"MITREid doesn't mind if the parameters are passed in the body or in the query\nstring. In order to work with hydra, you have to migrate all your calls that are\nusing QS params to Body Parameters."),(0,a.kt)("p",null,"For example, you should move from"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl -X POST  http://127.0.0.1/mitreid-server/token?grant_type=client_credentials -H "Authorization: $AUTH" ...\n')),(0,a.kt)("p",null,"to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -X POST  http://127.0.0.1/mitreid-server/token -H \"Authorization: $AUTH\" --data-urlencode 'grant_type=client_credentials' ...\n")),(0,a.kt)("h4",{id:"scope-strategies-if-no-scope-is-requested"},"Scope Strategies if no scope is requested"),(0,a.kt)("p",null,"The last pitfall found during the migration was the difference of behaviour when\nperforming the ",(0,a.kt)("inlineCode",{parentName:"p"},"client_credentials")," grant without specifying a scope. By default\nORY Hydra returns an empty scope, but MITREid grants the default scope for the\nOAuth 2.0 Client."),(0,a.kt)("p",null,"To change the behaviour in ORY Hydra, either set environment variable\n",(0,a.kt)("inlineCode",{parentName:"p"},"OAUTH2_CLIENT_CREDENTIALS_DEFAULT_GRANT_SCOPE=true")," or alternatively add to ORY\nHydra's configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/hydra.yaml"',title:'"path/to/hydra.yaml"'},"oauth2:\n  client_credentials:\n    default_grant_allowed_scope: true\n")),(0,a.kt)("p",null,"Once set, ORY Hydra will behave like MITREid and grant the OAuth2 Client's scope\nwhen an empty scope is requested for a ",(0,a.kt)("inlineCode",{parentName:"p"},"client_credentials")," grant."))}u.isMDXComponent=!0}}]);