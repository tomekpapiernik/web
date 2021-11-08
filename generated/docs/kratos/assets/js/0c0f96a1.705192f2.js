"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[39866],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,v=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34043:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={id:"high-availability-ha",title:"High Availability"},l=void 0,u={unversionedId:"guides/high-availability-ha",id:"version-v0.3/guides/high-availability-ha",isDocsHomePage:!1,title:"High Availability",description:"ORY Kratos does not have any special requirements when it comes to High",source:"@site/versioned_docs/version-v0.3/guides/high-availability-ha.md",sourceDirName:"guides",slug:"/guides/high-availability-ha",permalink:"/kratos/docs/v0.3/guides/high-availability-ha",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.3/guides/high-availability-ha.md",tags:[],version:"v0.3",lastUpdatedBy:"aeneasr",lastUpdatedAt:1589548840,formattedLastUpdatedAt:"5/15/2020",frontMatter:{id:"high-availability-ha",title:"High Availability"},sidebar:"version-v0.3/docs",previous:{title:"Multitenancy",permalink:"/kratos/docs/v0.3/guides/multi-tenancy-multitenant"},next:{title:"Configuration",permalink:"/kratos/docs/v0.3/reference/configuration"}},c=[],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ORY Kratos does not have any special requirements when it comes to High\nAvailability as it does not manage state itself but instead relies on the SQL\ndatabase for that."),(0,a.kt)("p",null,"It is therefore possible to use ORY Kratos with Auto-Scaling Groups (e.g. in\nKubernetes) without any additional configuration."))}d.isMDXComponent=!0}}]);