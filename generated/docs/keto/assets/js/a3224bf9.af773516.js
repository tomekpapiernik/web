(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{154:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(8),i=(r(0),r(198)),a={id:"keto-serve",title:"keto serve",description:"keto serve Starts the server and serves the HTTP REST and gRPC APIs"},s={unversionedId:"cli/keto-serve",id:"cli/keto-serve",isDocsHomePage:!1,title:"keto serve",description:"keto serve Starts the server and serves the HTTP REST and gRPC APIs",source:"@site/docs/cli/keto-serve.md",sourceDirName:"cli",slug:"/cli/keto-serve",permalink:"/keto/docs/next/cli/keto-serve",editUrl:"https://github.com/ory/keto/edit/master/docs/docs/cli/keto-serve.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619369953,formattedLastUpdatedAt:"4/25/2021",frontMatter:{id:"keto-serve",title:"keto serve",description:"keto serve Starts the server and serves the HTTP REST and gRPC APIs"},sidebar:"docs",previous:{title:"keto relation-tuple parse",permalink:"/keto/docs/next/cli/keto-relation-tuple-parse"},next:{title:"keto status",permalink:"/keto/docs/next/cli/keto-status"}},c=[{value:"keto serve",id:"keto-serve",children:[{value:"Synopsis",id:"synopsis",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={toc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"keto-serve"},"keto serve"),Object(i.b)("p",null,"Starts the server and serves the HTTP REST and gRPC APIs"),Object(i.b)("h3",{id:"synopsis"},"Synopsis"),Object(i.b)("p",null,"This command opens the network ports and listens to HTTP and gRPC API requests."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"ORY Keto can be configured using environment variables as well as a\nconfiguration file. For more information on configuration options, open the\nconfiguration documentation:"),Object(i.b)("p",null,">",">"," ",Object(i.b)("a",{parentName:"p",href:"https://www.ory.sh/keto/docs/reference/configuration"},"https://www.ory.sh/keto/docs/reference/configuration")," ","<","<"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"keto serve [flags]\n")),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"      --disable-telemetry   Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa (default true)\n  -h, --help                help for serve\n      --sqa-opt-out         Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa (default true)\n")),Object(i.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  -c, --config strings   Config files to load, overwriting in the order specified. (default [/home/circleci/keto.yml])\n")),Object(i.b)("h3",{id:"see-also"},"SEE ALSO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"keto"},"keto")," - Global and consistent permission and authorization server")))}p.isMDXComponent=!0},198:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,b=d["".concat(a,".").concat(f)]||d[f]||u[f]||i;return r?o.a.createElement(b,s(s({ref:t},l),{},{components:r})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);