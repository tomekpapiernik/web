"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[73858],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return m}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),d=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=d(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?t.createElement(h,o(o({ref:r},c),{},{components:n})):t.createElement(h,o({ref:r},c))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},86287:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var t=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"hydra-serve",title:"hydra serve",description:"hydra serve Parent command for starting public and administrative HTTP/2 APIs"},l=void 0,d={unversionedId:"cli/hydra-serve",id:"version-v1.10/cli/hydra-serve",isDocsHomePage:!1,title:"hydra serve",description:"hydra serve Parent command for starting public and administrative HTTP/2 APIs",source:"@site/versioned_docs/version-v1.10/cli/hydra-serve.md",sourceDirName:"cli",slug:"/cli/hydra-serve",permalink:"/hydra/docs/cli/hydra-serve",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/cli/hydra-serve.md",tags:[],version:"v1.10",lastUpdatedBy:"aeneasr",lastUpdatedAt:1626263488,formattedLastUpdatedAt:"7/14/2021",frontMatter:{id:"hydra-serve",title:"hydra serve",description:"hydra serve Parent command for starting public and administrative HTTP/2 APIs"},sidebar:"version-v1.10/docs",previous:{title:"hydra migrate sql",permalink:"/hydra/docs/cli/hydra-migrate-sql"},next:{title:"hydra serve admin",permalink:"/hydra/docs/cli/hydra-serve-admin"}},c=[{value:"hydra serve",id:"hydra-serve",children:[{value:"Synopsis",id:"synopsis",children:[],level:3}],level:2},{value:"Configuration",id:"configuration",children:[{value:"Options",id:"options",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],u={toc:c};function p(e){var r=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hydra-serve"},"hydra serve"),(0,i.kt)("p",null,"Parent command for starting public and administrative HTTP/2 APIs"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"ORY Hydra exposes two ports, a public and an administrative port. The public\nport is responsible for handling requests from the public internet, such as the\nOAuth 2.0 Authorize and Token URLs. The administrative port handles\nadministrative requests like creating OAuth 2.0 Clients, managing JSON Web Keys,\nand managing User Login and Consent sessions."),(0,i.kt)("p",null,"It is recommended to run ",'"',"hydra serve all",'"',". If you need granular control\nover CORS settings or similar, you may want to run ",'"',"hydra serve admin",'"',"\nand ",'"',"hydra serve public",'"'," separately."),(0,i.kt)("p",null,"To learn more about each individual command, run:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"hydra help serve all"),(0,i.kt)("li",{parentName:"ul"},"hydra help serve admin"),(0,i.kt)("li",{parentName:"ul"},"hydra help serve public")),(0,i.kt)("p",null,"All sub-commands share command line flags and configuration options."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"ORY Hydra can be configured using environment variables as well as a\nconfiguration file. For more information on configuration options, open the\nconfiguration documentation:"),(0,i.kt)("p",null,">",">"," ",(0,i.kt)("a",{parentName:"p",href:"https://www.ory.sh/hydra/docs/reference/configuration"},"https://www.ory.sh/hydra/docs/reference/configuration")," ","<","<"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -c, --config strings                                   Path to one or more .json, .yaml, .yml, .toml config files. Values are loaded in the order provided, meaning that the last config file overwrites values from the previous config file.\n      --dangerous-allow-insecure-redirect-urls strings   DO NOT USE THIS IN PRODUCTION - Disable HTTPS enforcement for the provided redirect URLs\n      --dangerous-force-http                             DO NOT USE THIS IN PRODUCTION - Disables HTTP/2 over TLS (HTTPS) and serves HTTP instead\n  -h, --help                                             help for serve\n      --sqa-opt-out                                      Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"hydra"},"hydra")," - Run and manage ORY Hydra"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"hydra-serve-admin"},"hydra serve admin")," - Serves Administrative HTTP/2 APIs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"hydra-serve-all"},"hydra serve all")," - Serves both public and administrative\nHTTP/2 APIs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"hydra-serve-public"},"hydra serve public")," - Serves Public HTTP/2 APIs")))}p.isMDXComponent=!0}}]);