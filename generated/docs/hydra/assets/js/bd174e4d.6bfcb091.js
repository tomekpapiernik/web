(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[91466],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return k}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(r),k=o,f=u["".concat(c,".").concat(k)]||u[k]||p[k]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2235:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return u}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],s={id:"hydra-token-revoke",title:"hydra token revoke",description:"hydra token revoke Revoke an access or refresh token"},c=void 0,d={unversionedId:"cli/hydra-token-revoke",id:"version-v1.8/cli/hydra-token-revoke",isDocsHomePage:!1,title:"hydra token revoke",description:"hydra token revoke Revoke an access or refresh token",source:"@site/versioned_docs/version-v1.8/cli/hydra-token-revoke.md",sourceDirName:"cli",slug:"/cli/hydra-token-revoke",permalink:"/hydra/docs/v1.8/cli/hydra-token-revoke",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.8/cli/hydra-token-revoke.md",tags:[],version:"v1.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601730608,formattedLastUpdatedAt:"10/3/2020",frontMatter:{id:"hydra-token-revoke",title:"hydra token revoke",description:"hydra token revoke Revoke an access or refresh token"},sidebar:"version-v1.8/docs",previous:{title:"hydra token introspect",permalink:"/hydra/docs/v1.8/cli/hydra-token-introspect"},next:{title:"hydra token user",permalink:"/hydra/docs/v1.8/cli/hydra-token-user"}},l=[{value:"hydra token revoke",id:"hydra-token-revoke",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],p={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"hydra-token-revoke"},"hydra token revoke"),(0,a.kt)("p",null,"Revoke an access or refresh token"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Revoke an access or refresh token"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hydra token revoke <token> [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      --client-id string       Use the provided OAuth 2.0 Client ID, defaults to environment variable OAUTH2_CLIENT_ID\n      --client-secret string   Use the provided OAuth 2.0 Client Secret, defaults to environment variable OAUTH2_CLIENT_SECRET\n      --endpoint string        Set the URL where ORY Hydra is hosted, defaults to environment variable HYDRA_URL\n  -h, --help                   help for revoke\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --config string          Config file (default is $HOME/.hydra.yaml)\n      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   fake tls termination by adding "X-Forwarded-Proto: https" to http headers\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unkown certificate authorities\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"hydra-token"},"hydra token")," - Issue and Manage OAuth2 tokens")))}u.isMDXComponent=!0}}]);