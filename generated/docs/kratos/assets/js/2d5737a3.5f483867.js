"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[48874],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return n?o.createElement(f,a(a({ref:t},m),{},{components:n})):o.createElement(f,a({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},14879:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return p}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],s={id:"multi-domain-cookies",title:"Getting Cookies to Work on Multi-Domains"},c=void 0,l={unversionedId:"guides/multi-domain-cookies",id:"version-v0.5/guides/multi-domain-cookies",isDocsHomePage:!1,title:"Getting Cookies to Work on Multi-Domains",description:"ORY Kratos' browser features rely heavily on HTTP Cookies to mitigate common",source:"@site/versioned_docs/version-v0.5/guides/multi-domain-cookies.mdx",sourceDirName:"guides",slug:"/guides/multi-domain-cookies",permalink:"/kratos/docs/v0.5/guides/multi-domain-cookies",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/guides/multi-domain-cookies.mdx",tags:[],version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1602674546,formattedLastUpdatedAt:"10/14/2020",frontMatter:{id:"multi-domain-cookies",title:"Getting Cookies to Work on Multi-Domains"}},m=[],u={toc:m};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ORY Kratos' browser features rely heavily on HTTP Cookies to mitigate common\nattack vectors and make the integration as easy as possible to use. Therefore it\nis important to know that"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/1612177/are-http-cookies-port-specific"},"HTTP Cookies ignore ports"),",\nmeaning the browser will send a cookie it received for\n",(0,i.kt)("inlineCode",{parentName:"li"},"http://my-domain.com:1234")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"http://my-domain.com:4321")," as well."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/18492576/share-cookie-between-subdomain-and-domain"},"Subdomains can set HTTP Cookies for parent domains"),",\nmeaning a HTTP Cookie specifying ",(0,i.kt)("inlineCode",{parentName:"li"},"domain=my-domain.com")," will be allowed to\nset even if the URL is ",(0,i.kt)("inlineCode",{parentName:"li"},"http://sub.my-domain.com")," or\n",(0,i.kt)("inlineCode",{parentName:"li"},"http://sub.sub.my-domain.com"),".")),(0,i.kt)("p",null,"You can adjust the session cookie's domain using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'},"session:\n  cookie:\n    domain: my-domain.com\n")),(0,i.kt)("p",null,"What ",(0,i.kt)("strong",{parentName:"p"},"is not")," currently possible is to set up ORY Kratos in a way where you\nget session cookies running on two separate top level domains (e.g.\n",(0,i.kt)("inlineCode",{parentName:"p"},"my-domain.com")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"another-domain.com"),"). This is tracked as\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/662"},"kratos#662"),"."))}p.isMDXComponent=!0}}]);