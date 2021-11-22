"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[4589],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),h=i,y=u["".concat(c,".").concat(h)]||u[h]||p[h]||l;return n?r.createElement(y,a(a({ref:t},d),{},{components:n})):r.createElement(y,a({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37317:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=n(87462),i=n(63366),l=(n(67294),n(3905)),a=["components"],o={id:"hydra-clients-delete",title:"hydra clients delete",description:"hydra clients delete Delete an OAuth 2.0 Client"},c=void 0,s={unversionedId:"cli/hydra-clients-delete",id:"version-v1.7/cli/hydra-clients-delete",isDocsHomePage:!1,title:"hydra clients delete",description:"hydra clients delete Delete an OAuth 2.0 Client",source:"@site/versioned_docs/version-v1.7/cli/hydra-clients-delete.md",sourceDirName:"cli",slug:"/cli/hydra-clients-delete",permalink:"/hydra/docs/v1.7/cli/hydra-clients-delete",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.7/cli/hydra-clients-delete.md",tags:[],version:"v1.7",lastUpdatedBy:"aeneasr",lastUpdatedAt:1597407772,formattedLastUpdatedAt:"8/14/2020",frontMatter:{id:"hydra-clients-delete",title:"hydra clients delete",description:"hydra clients delete Delete an OAuth 2.0 Client"},sidebar:"version-v1.7/docs",previous:{title:"hydra clients create",permalink:"/hydra/docs/v1.7/cli/hydra-clients-create"},next:{title:"hydra clients get",permalink:"/hydra/docs/v1.7/cli/hydra-clients-get"}},d=[{value:"hydra clients delete",id:"hydra-clients-delete",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"hydra-clients-delete"},"hydra clients delete"),(0,l.kt)("p",null,"Delete an OAuth 2.0 Client"),(0,l.kt)("h3",{id:"synopsis"},"Synopsis"),(0,l.kt)("p",null,"This command deletes one or more OAuth 2.0 Clients by their respective IDs."),(0,l.kt)("p",null,"Example: hydra clients delete client-1 client-2 client-3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hydra clients delete <id> [<id>...] [flags]\n")),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  -h, --help   help for delete\n")),(0,l.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'      --access-token string    Set an access token to be used in the Authorization header, defaults to environment variable OAUTH2_ACCESS_TOKEN\n      --config string          Config file (default is $HOME/.hydra.yaml)\n      --endpoint string        Set the URL where ORY Hydra is hosted, defaults to environment variable HYDRA_ADMIN_URL. A unix socket can be set in the form unix:///path/to/socket\n      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   Fake tls termination by adding "X-Forwarded-Proto: https" to http headers\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unkown certificate authorities\n')),(0,l.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"hydra-clients"},"hydra clients")," - Manage OAuth 2.0 Clients")))}u.isMDXComponent=!0}}]);