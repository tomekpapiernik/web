"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[52382],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),u=a,f=p["".concat(c,".").concat(u)]||p[u]||y[u]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},91392:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={id:"hydra-keys-create",title:"hydra keys create",description:"hydra keys create Create a new JSON Web Key Set"},c=void 0,d={unversionedId:"cli/hydra-keys-create",id:"version-v1.8/cli/hydra-keys-create",isDocsHomePage:!1,title:"hydra keys create",description:"hydra keys create Create a new JSON Web Key Set",source:"@site/versioned_docs/version-v1.8/cli/hydra-keys-create.md",sourceDirName:"cli",slug:"/cli/hydra-keys-create",permalink:"/hydra/docs/v1.8/cli/hydra-keys-create",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.8/cli/hydra-keys-create.md",tags:[],version:"v1.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601730608,formattedLastUpdatedAt:"10/3/2020",frontMatter:{id:"hydra-keys-create",title:"hydra keys create",description:"hydra keys create Create a new JSON Web Key Set"},sidebar:"version-v1.8/docs",previous:{title:"hydra keys",permalink:"/hydra/docs/v1.8/cli/hydra-keys"},next:{title:"hydra keys delete",permalink:"/hydra/docs/v1.8/cli/hydra-keys-delete"}},l=[{value:"hydra keys create",id:"hydra-keys-create",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],y={toc:l};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hydra-keys-create"},"hydra keys create"),(0,i.kt)("p",null,"Create a new JSON Web Key Set"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Create a new JSON Web Key Set"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hydra keys create <set> <key> [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  -a, --alg string   The algorithm to be used to generated they key. Supports: RS256, ES512, HS256 (default "RS256")\n  -h, --help         help for create\n  -u, --use string   The intended use of this key (default "sig")\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --access-token string    Set an access token to be used in the Authorization header, defaults to environment variable OAUTH2_ACCESS_TOKEN\n      --config string          Config file (default is $HOME/.hydra.yaml)\n      --endpoint string        Set the URL where ORY Hydra is hosted, defaults to environment variable HYDRA_ADMIN_URL\n      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   fake tls termination by adding "X-Forwarded-Proto: https" to http headers\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unkown certificate authorities\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"hydra-keys"},"hydra keys")," - Manage JSON Web Keys")))}p.isMDXComponent=!0}}]);