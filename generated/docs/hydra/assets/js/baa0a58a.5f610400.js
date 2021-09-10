(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[40612],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return d},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?n.createElement(f,i(i({ref:r},d),{},{components:t})):n.createElement(f,i({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},15178:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var n=t(22122),a=t(19756),o=(t(67294),t(3905)),i=["components"],s={id:"hydra-serve-all",title:"hydra serve all",description:"hydra serve all Serves both public and administrative HTTP/2 APIs"},l=void 0,c={unversionedId:"cli/hydra-serve-all",id:"cli/hydra-serve-all",isDocsHomePage:!1,title:"hydra serve all",description:"hydra serve all Serves both public and administrative HTTP/2 APIs",source:"@site/docs/cli/hydra-serve-all.md",sourceDirName:"cli",slug:"/cli/hydra-serve-all",permalink:"/hydra/docs/next/cli/hydra-serve-all",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/cli/hydra-serve-all.md",tags:[],version:"current",lastUpdatedBy:"hackerman",lastUpdatedAt:1626252568,formattedLastUpdatedAt:"7/14/2021",frontMatter:{id:"hydra-serve-all",title:"hydra serve all",description:"hydra serve all Serves both public and administrative HTTP/2 APIs"},sidebar:"docs",previous:{title:"hydra serve admin",permalink:"/hydra/docs/next/cli/hydra-serve-admin"},next:{title:"hydra serve public",permalink:"/hydra/docs/next/cli/hydra-serve-public"}},d=[{value:"hydra serve all",id:"hydra-serve-all",children:[{value:"Synopsis",id:"synopsis",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],p={toc:d};function u(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"hydra-serve-all"},"hydra serve all"),(0,o.kt)("p",null,"Serves both public and administrative HTTP/2 APIs"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Starts a process which listens on two ports for public and administrative HTTP/2\nAPI requests."),(0,o.kt)("p",null,"If you want more granular control (e.g. different TLS settings) over each API\ngroup (administrative, public) you can run ",'"',"serve admin",'"'," and ",'"',"serve\npublic",'"'," separately."),(0,o.kt)("p",null,"This command exposes a variety of controls via environment variables. You can\nset environments using ",'"',"export KEY=VALUE",'"'," (Linux/macOS) or ",'"',"set\nKEY=VALUE",'"'," (Windows). On Linux, you can also set environments by prepending\nkey value pairs: ",'"',"KEY=VALUE KEY2=VALUE2 hydra",'"'),(0,o.kt)("p",null,"All possible controls are listed below. This command exposes exposes command\nline flags, which are listed below the controls section."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"ORY Hydra can be configured using environment variables as well as a\nconfiguration file. For more information on configuration options, open the\nconfiguration documentation:"),(0,o.kt)("p",null,">",">"," ",(0,o.kt)("a",{parentName:"p",href:"https://www.ory.sh/hydra/docs/reference/configuration"},"https://www.ory.sh/hydra/docs/reference/configuration")," ","<","<"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hydra serve all [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for all\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -c, --config strings                                   Path to one or more .json, .yaml, .yml, .toml config files. Values are loaded in the order provided, meaning that the last config file overwrites values from the previous config file.\n      --dangerous-allow-insecure-redirect-urls strings   DO NOT USE THIS IN PRODUCTION - Disable HTTPS enforcement for the provided redirect URLs\n      --dangerous-force-http                             DO NOT USE THIS IN PRODUCTION - Disables HTTP/2 over TLS (HTTPS) and serves HTTP instead\n      --sqa-opt-out                                      Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"hydra-serve"},"hydra serve")," - Parent command for starting public and\nadministrative HTTP/2 APIs")))}u.isMDXComponent=!0}}]);