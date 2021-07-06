(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[26542],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return l},kt:function(){return m}});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=t.createContext({}),c=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},l=function(e){var r=c(e.components);return t.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return n?t.createElement(f,a(a({ref:r},l),{},{components:n})):t.createElement(f,a({ref:r},l))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},51708:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var t=n(22122),i=n(19756),o=(n(67294),n(3905)),a=["components"],s={id:"hydra-serve-admin",title:"hydra serve admin",description:"hydra serve admin Serves Administrative HTTP/2 APIs"},d=void 0,c={unversionedId:"cli/hydra-serve-admin",id:"version-v1.8/cli/hydra-serve-admin",isDocsHomePage:!1,title:"hydra serve admin",description:"hydra serve admin Serves Administrative HTTP/2 APIs",source:"@site/versioned_docs/version-v1.8/cli/hydra-serve-admin.md",sourceDirName:"cli",slug:"/cli/hydra-serve-admin",permalink:"/hydra/docs/v1.8/cli/hydra-serve-admin",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.8/cli/hydra-serve-admin.md",version:"v1.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601730608,formattedLastUpdatedAt:"10/3/2020",frontMatter:{id:"hydra-serve-admin",title:"hydra serve admin",description:"hydra serve admin Serves Administrative HTTP/2 APIs"},sidebar:"version-v1.8/docs",previous:{title:"hydra serve",permalink:"/hydra/docs/v1.8/cli/hydra-serve"},next:{title:"hydra serve all",permalink:"/hydra/docs/v1.8/cli/hydra-serve-all"}},l=[{value:"hydra serve admin",id:"hydra-serve-admin",children:[{value:"Synopsis",id:"synopsis",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],u={toc:l};function p(e){var r=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"hydra-serve-admin"},"hydra serve admin"),(0,o.kt)("p",null,"Serves Administrative HTTP/2 APIs"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"This command opens one port and listens to HTTP/2 API requests. The exposed API\nhandles administrative requests like managing OAuth 2.0 Clients, JSON Web Keys,\nlogin and consent sessions, and others."),(0,o.kt)("p",null,'This command is configurable using the same options available to "serve public"\nand "serve all".'),(0,o.kt)("p",null,"It is generally recommended to use this command only if you require granular\ncontrol over the administrative and public APIs. For example, you might want to\nrun different TLS certificates or CORS settings on the public and administrative\nAPI."),(0,o.kt)("p",null,'This command does not work with the "memory" database. Both services\n(administrative, public) MUST use the same database connection to be able to\nsynchronize.'),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"ORY Hydra can be configured using environment variables as well as a\nconfiguration file. For more information on configuration options, open the\nconfiguration documentation:"),(0,o.kt)("blockquote",null,(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/undefined/docs/docs/reference/configuration.md"},"https://github.com/ory/hydra/blob/undefined/docs/docs/reference/configuration.md"),"\n<<"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hydra serve admin [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for admin\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --config string                                    Config file (default is $HOME/.hydra.yaml)\n      --dangerous-allow-insecure-redirect-urls strings   DO NOT USE THIS IN PRODUCTION - Disable HTTPS enforcement for the provided redirect URLs\n      --dangerous-force-http                             DO NOT USE THIS IN PRODUCTION - Disables HTTP/2 over TLS (HTTPS) and serves HTTP instead\n      --disable-telemetry                                Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n      --skip-tls-verify                                  Foolishly accept TLS certificates signed by unkown certificate authorities\n      --sqa-opt-out                                      Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"hydra-serve"},"hydra serve")," - Parent command for starting public and\nadministrative HTTP/2 APIs")))}p.isMDXComponent=!0}}]);