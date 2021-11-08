"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[25871],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27379:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],s={id:"terminology",title:"Terminology"},a=void 0,l={unversionedId:"concepts/terminology",id:"version-v0.5/concepts/terminology",isDocsHomePage:!1,title:"Terminology",description:"The purpose of this document is to define terminology used through this",source:"@site/versioned_docs/version-v0.5/concepts/terminology.mdx",sourceDirName:"concepts",slug:"/concepts/terminology",permalink:"/kratos/docs/v0.5/concepts/terminology",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/concepts/terminology.mdx",tags:[],version:"v0.5",lastUpdatedBy:"Bipin Paul Bedi",lastUpdatedAt:160303e4,formattedLastUpdatedAt:"10/18/2020",frontMatter:{id:"terminology",title:"Terminology"},sidebar:"version-v0.5/docs",previous:{title:"Overview",permalink:"/kratos/docs/v0.5/concepts/index"},next:{title:"User Interface",permalink:"/kratos/docs/v0.5/concepts/ui-user-interface"}},u=[{value:"End-User",id:"end-user",children:[],level:2},{value:"Identity",id:"identity",children:[],level:2},{value:"Self-Service",id:"self-service",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The purpose of this document is to define terminology used through this\ndocumentation."),(0,i.kt)("h2",{id:"end-user"},"End-User"),(0,i.kt)("p",null,"The person who actually uses a particular product that uses ORY Kratos."),(0,i.kt)("h2",{id:"identity"},"Identity"),(0,i.kt)("p",null,'the "who" of a software system. It can be a customer, employee, user,\ncontractor, or even a programmatic identity such as an IoT device, application,\nor some other type of "robot."'),(0,i.kt)("p",null,'Common aliases are "user", "user account", "account", "subject".'),(0,i.kt)("h2",{id:"self-service"},"Self-Service"),(0,i.kt)("p",null,"Interfaces and flows allowing customers to produce services independent of\ninvolvement of direct service employee."),(0,i.kt)("p",null,"You perform self-service registration when signing up for a new Google account,\nbecause no one (e.g. support) else is involved in the process."))}d.isMDXComponent=!0}}]);