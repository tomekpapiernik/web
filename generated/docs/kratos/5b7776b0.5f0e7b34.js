(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{169:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return u}));var n=t(1),o=t(9),c=(t(0),t(214)),a={id:"password-reset-account-recovery",title:"Account Recovery"},s={id:"version-v0.1/self-service/flows/password-reset-account-recovery",title:"Account Recovery",description:"Account Recovery must be performed if access to an account needs to be",source:"@site/versioned_docs/version-v0.1/self-service/flows/password-reset-account-recovery.md",permalink:"/kratos/docs/self-service/flows/password-reset-account-recovery",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.1/self-service/flows/password-reset-account-recovery.md",version:"v0.1",lastUpdatedBy:"hackerman",lastUpdatedAt:1586177162,sidebar:"version-v0.1/docs",previous:{title:"user-profile-management",permalink:"/kratos/docs/self-service/flows/user-profile-management"},next:{title:"User-Facing Errors",permalink:"/kratos/docs/self-service/flows/user-facing-errors"}},i=[{value:"Forgot Password",id:"forgot-password",children:[]}],l={rightToc:i};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Account Recovery must be performed if access to an account needs to be\nrecovered. Common use cases include:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},'"Forgot password" flows'),Object(c.b)("li",{parentName:"ul"},'"Lost MFA device" flows'),Object(c.b)("li",{parentName:"ul"},"...")),Object(c.b)("h2",{id:"forgot-password"},"Forgot Password"),Object(c.b)("p",null,"The forgot password flow is a work in progress and will be implemented in a\nfuture release of ORY Kratos."))}u.isMDXComponent=!0},214:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s({},r,{},e)),t},p=function(e){var r=u(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=n,m=p["".concat(a,".").concat(d)]||p[d]||f[d]||c;return t?o.a.createElement(m,s({ref:r},l,{components:t})):o.a.createElement(m,s({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=d;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<c;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);