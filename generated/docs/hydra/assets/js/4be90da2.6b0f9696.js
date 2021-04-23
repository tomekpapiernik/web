(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{230:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return s})),n.d(r,"toc",(function(){return l})),n.d(r,"default",(function(){return d}));var t=n(3),a=n(8),o=(n(0),n(570)),i={id:"hydra-serve-all",title:"hydra serve all",description:"hydra serve all Serves both public and administrative HTTP/2 APIs"},s={unversionedId:"cli/hydra-serve-all",id:"version-v1.9/cli/hydra-serve-all",isDocsHomePage:!1,title:"hydra serve all",description:"hydra serve all Serves both public and administrative HTTP/2 APIs",source:"@site/versioned_docs/version-v1.9/cli/hydra-serve-all.md",sourceDirName:"cli",slug:"/cli/hydra-serve-all",permalink:"/hydra/docs/v1.9/cli/hydra-serve-all",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/cli/hydra-serve-all.md",version:"v1.9",lastUpdatedBy:"aeneasr",lastUpdatedAt:1607427290,formattedLastUpdatedAt:"12/8/2020",frontMatter:{id:"hydra-serve-all",title:"hydra serve all",description:"hydra serve all Serves both public and administrative HTTP/2 APIs"},sidebar:"version-v1.9/docs",previous:{title:"hydra serve admin",permalink:"/hydra/docs/v1.9/cli/hydra-serve-admin"},next:{title:"hydra serve public",permalink:"/hydra/docs/v1.9/cli/hydra-serve-public"}},l=[{value:"hydra serve all",id:"hydra-serve-all",children:[{value:"Synopsis",id:"synopsis",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],c={toc:l};function d(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},c,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hydra-serve-all"},"hydra serve all"),Object(o.b)("p",null,"Serves both public and administrative HTTP/2 APIs"),Object(o.b)("h3",{id:"synopsis"},"Synopsis"),Object(o.b)("p",null,"Starts a process which listens on two ports for public and administrative HTTP/2\nAPI requests."),Object(o.b)("p",null,'If you want more granular control (e.g. different TLS settings) over each API\ngroup (administrative, public) you can run "serve admin" and "serve public"\nseparately.'),Object(o.b)("p",null,'This command exposes a variety of controls via environment variables. You can\nset environments using "export KEY=VALUE" (Linux/macOS) or "set KEY=VALUE"\n(Windows). On Linux, you can also set environments by prepending key value\npairs: "KEY=VALUE KEY2=VALUE2 hydra"'),Object(o.b)("p",null,"All possible controls are listed below. This command exposes exposes command\nline flags, which are listed below the controls section."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"ORY Hydra can be configured using environment variables as well as a\nconfiguration file. For more information on configuration options, open the\nconfiguration documentation:"),Object(o.b)("blockquote",null,Object(o.b)("blockquote",{parentName:"blockquote"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/undefined/docs/docs/reference/config.md"},"https://github.com/ory/hydra/blob/undefined/docs/docs/reference/config.md")," <<"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"hydra serve all [flags]\n")),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  -h, --help   help for all\n")),Object(o.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  -c, --config strings                                   Path to one or more .json, .yaml, .yml, .toml config files. Values are loaded in the order provided, meaning that the last config file overwrites values from the previous config file.\n      --dangerous-allow-insecure-redirect-urls strings   DO NOT USE THIS IN PRODUCTION - Disable HTTPS enforcement for the provided redirect URLs\n      --dangerous-force-http                             DO NOT USE THIS IN PRODUCTION - Disables HTTP/2 over TLS (HTTPS) and serves HTTP instead\n      --sqa-opt-out                                      Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n")),Object(o.b)("h3",{id:"see-also"},"SEE ALSO"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"hydra-serve"},"hydra serve")," - Parent command for starting public and\nadministrative HTTP/2 APIs")))}d.isMDXComponent=!0},570:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return m}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var r=a.a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=d(e.components);return a.a.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=t,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return n?a.a.createElement(m,s(s({ref:r},c),{},{components:n})):a.a.createElement(m,s({ref:r},c))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);