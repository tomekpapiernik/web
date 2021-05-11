(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{150:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return s})),i.d(t,"toc",(function(){return c})),i.d(t,"default",(function(){return d}));var r=i(3),n=i(8),a=(i(0),i(552)),o={id:"kratos-identities",title:"kratos identities",description:"kratos identities Tools to interact with remote identities"},s={unversionedId:"cli/kratos-identities",id:"cli/kratos-identities",isDocsHomePage:!1,title:"kratos identities",description:"kratos identities Tools to interact with remote identities",source:"@site/docs/cli/kratos-identities.md",sourceDirName:"cli",slug:"/cli/kratos-identities",permalink:"/kratos/docs/next/cli/kratos-identities",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/cli/kratos-identities.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619624197,formattedLastUpdatedAt:"4/28/2021",frontMatter:{id:"kratos-identities",title:"kratos identities",description:"kratos identities Tools to interact with remote identities"},sidebar:"docs",previous:{title:"kratos hashers argon2 load-test",permalink:"/kratos/docs/next/cli/kratos-hashers-argon2-load-test"},next:{title:"kratos identities delete",permalink:"/kratos/docs/next/cli/kratos-identities-delete"}},c=[{value:"kratos identities",id:"kratos-identities",children:[{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={toc:c};function d(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"kratos-identities"},"kratos identities"),Object(a.b)("p",null,"Tools to interact with remote identities"),Object(a.b)("h3",{id:"options"},"Options"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"  -e, --endpoint string   The URL of Ory Kratos&#39; Admin API. Alternatively set using the KRATOS_ADMIN_URL environmental variable.\n  -f, --format string     Set the output format. One of table, json, and json-pretty. (default &#34;default&#34;)\n  -h, --help              help for identities\n  -q, --quiet             Be quiet with output printing.\n")),Object(a.b)("h3",{id:"see-also"},"SEE ALSO"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"kratos"},"kratos")," -"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"kratos-identities-delete"},"kratos identities delete")," - Delete identities by ID"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"kratos-identities-get"},"kratos identities get")," - Get one or more identities by\nID"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"kratos-identities-import"},"kratos identities import")," - Import identities from\nfiles or STD_IN"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"kratos-identities-list"},"kratos identities list")," - List identities"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"kratos-identities-patch"},"kratos identities patch")," - Patch identities by ID\n(not yet implemented)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"kratos-identities-validate"},"kratos identities validate")," - Validate local\nidentity files")))}d.isMDXComponent=!0},552:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return m}));var r=i(0),n=i.n(r);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(i),b=r,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||a;return i?n.a.createElement(m,s(s({ref:t},l),{},{components:i})):n.a.createElement(m,s({ref:t},l))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=i[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,i)}b.displayName="MDXCreateElement"}}]);