(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(1),i=n(9),a=(n(0),n(221)),o={id:"ui-user-interface",title:"User Interface"},s={id:"concepts/ui-user-interface",title:"User Interface",description:"ORY Kratos has no user interface included. Instead, it defines HTTP flows and",source:"@site/docs/concepts/ui-user-interface.md",permalink:"/kratos/docs/next/concepts/ui-user-interface",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/concepts/ui-user-interface.md",version:"next",lastUpdatedBy:"hackerman",lastUpdatedAt:1586177162,sidebar:"docs",previous:{title:"Overview",permalink:"/kratos/docs/next/concepts/index"},next:{title:"Identity Data Model",permalink:"/kratos/docs/next/concepts/identity-user-model"}},c=[{value:"Administrative User Interface (Admin UI)",id:"administrative-user-interface-admin-ui",children:[]},{value:"Self-service User Interface (SSUI)",id:"self-service-user-interface-ssui",children:[]}],u={rightToc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"ORY Kratos has no user interface included. Instead, it defines HTTP flows and\nAPIs that make it simple to write your own UI in a variety of languages and\nframeworks."),Object(a.b)("p",null,"The following two examples are typical UIs used in connection with ORY Kratos."),Object(a.b)("h2",{id:"administrative-user-interface-admin-ui"},"Administrative User Interface (Admin UI)"),Object(a.b)("p",null,"The AUI might show all of the identities in the system and provide features to\nadministrators such as editing profiles, resetting passwords, and so on."),Object(a.b)("p",null,"At present, there is no Open Source AUI for ORY Kratos."),Object(a.b)("h2",{id:"self-service-user-interface-ssui"},"Self-service User Interface (SSUI)"),Object(a.b)("p",null,'The SSUI shows screens such as "login", "Registration", "Update your profile",\n"Recover your account", and others. The following provides more reference for\nSSUI at\n',Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ory/kratos-selfservice-ui-node"}),"github.com/ory/kratos-selfservice-ui-node"),"."),Object(a.b)("p",null,"The SSUI can be built in any programming language including Java, Node, or\nPython and can be run both a server or a end-user device for example a browser,\nor a mobile phone. Implementing a SSUI is simple and straight forward. There is\nno complex authentication mechanism required and no need to worry about possible\nattack vectors such as CSRF or Session Attacks since ORY Kratos provides the\npreventive measures built in."),Object(a.b)("p",null,"Chapter ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/kratos/docs/next/self-service/flows/index"}),"Self-Service Flows")," contains further\ninformation on APIs and flows related to the SSUI, and build self service\napplications."))}l.isMDXComponent=!0},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,m=p["".concat(o,".").concat(f)]||p[f]||d[f]||a;return n?i.a.createElement(m,s({ref:t},u,{components:n})):i.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);