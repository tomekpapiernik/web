(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[69973],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return t?n.createElement(h,o(o({ref:r},c),{},{components:t})):n.createElement(h,o({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},55967:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var n=t(22122),a=t(19756),i=(t(67294),t(3905)),o=["components"],s={id:"hydra-serve",title:"hydra serve",description:"hydra serve Parent command for starting public and administrative HTTP/2 APIs"},l=void 0,d={unversionedId:"cli/hydra-serve",id:"version-v1.9/cli/hydra-serve",isDocsHomePage:!1,title:"hydra serve",description:"hydra serve Parent command for starting public and administrative HTTP/2 APIs",source:"@site/versioned_docs/version-v1.9/cli/hydra-serve.md",sourceDirName:"cli",slug:"/cli/hydra-serve",permalink:"/hydra/docs/v1.9/cli/hydra-serve",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/cli/hydra-serve.md",tags:[],version:"v1.9",lastUpdatedBy:"aeneasr",lastUpdatedAt:1607427290,formattedLastUpdatedAt:"12/8/2020",frontMatter:{id:"hydra-serve",title:"hydra serve",description:"hydra serve Parent command for starting public and administrative HTTP/2 APIs"},sidebar:"version-v1.9/docs",previous:{title:"hydra migrate sql",permalink:"/hydra/docs/v1.9/cli/hydra-migrate-sql"},next:{title:"hydra serve admin",permalink:"/hydra/docs/v1.9/cli/hydra-serve-admin"}},c=[{value:"hydra serve",id:"hydra-serve",children:[{value:"Synopsis",id:"synopsis",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],u={toc:c};function p(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hydra-serve"},"hydra serve"),(0,i.kt)("p",null,"Parent command for starting public and administrative HTTP/2 APIs"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"ORY Hydra exposes two ports, a public and an administrative port. The public\nport is responsible for handling requests from the public internet, such as the\nOAuth 2.0 Authorize and Token URLs. The administrative port handles\nadministrative requests like creating OAuth 2.0 Clients, managing JSON Web Keys,\nand managing User Login and Consent sessions."),(0,i.kt)("p",null,'It is recommended to run "hydra serve all". If you need granular control over\nCORS settings or similar, you may want to run "hydra serve admin" and "hydra\nserve public" separately.'),(0,i.kt)("p",null,"To learn more about each individual command, run:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"hydra help serve all"),(0,i.kt)("li",{parentName:"ul"},"hydra help serve admin"),(0,i.kt)("li",{parentName:"ul"},"hydra help serve public")),(0,i.kt)("p",null,"All sub-commands share command line flags and configuration options."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"ORY Hydra can be configured using environment variables as well as a\nconfiguration file. For more information on configuration options, open the\nconfiguration documentation:"),(0,i.kt)("blockquote",null,(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/undefined/docs/docs/reference/config.md"},"https://github.com/ory/hydra/blob/undefined/docs/docs/reference/config.md")," <<"))),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -c, --config strings                                   Path to one or more .json, .yaml, .yml, .toml config files. Values are loaded in the order provided, meaning that the last config file overwrites values from the previous config file.\n      --dangerous-allow-insecure-redirect-urls strings   DO NOT USE THIS IN PRODUCTION - Disable HTTPS enforcement for the provided redirect URLs\n      --dangerous-force-http                             DO NOT USE THIS IN PRODUCTION - Disables HTTP/2 over TLS (HTTPS) and serves HTTP instead\n  -h, --help                                             help for serve\n      --sqa-opt-out                                      Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"hydra"},"hydra")," - Run and manage ORY Hydra"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"hydra-serve-admin"},"hydra serve admin")," - Serves Administrative HTTP/2 APIs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"hydra-serve-all"},"hydra serve all")," - Serves both public and administrative\nHTTP/2 APIs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"hydra-serve-public"},"hydra serve public")," - Serves Public HTTP/2 APIs")))}p.isMDXComponent=!0}}]);