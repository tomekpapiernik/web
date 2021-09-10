(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[60633],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),u=a,h=p["".concat(c,".").concat(u)]||p[u]||y[u]||i;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},65792:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o=["components"],s={id:"hydra-keys",title:"hydra keys",description:"hydra keys Manage JSON Web Keys"},c=void 0,d={unversionedId:"cli/hydra-keys",id:"version-v1.9/cli/hydra-keys",isDocsHomePage:!1,title:"hydra keys",description:"hydra keys Manage JSON Web Keys",source:"@site/versioned_docs/version-v1.9/cli/hydra-keys.md",sourceDirName:"cli",slug:"/cli/hydra-keys",permalink:"/hydra/docs/v1.9/cli/hydra-keys",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/cli/hydra-keys.md",tags:[],version:"v1.9",lastUpdatedBy:"aeneasr",lastUpdatedAt:1616594949,formattedLastUpdatedAt:"3/24/2021",frontMatter:{id:"hydra-keys",title:"hydra keys",description:"hydra keys Manage JSON Web Keys"},sidebar:"version-v1.9/docs",previous:{title:"hydra clients update",permalink:"/hydra/docs/v1.9/cli/hydra-clients-update"},next:{title:"hydra keys create",permalink:"/hydra/docs/v1.9/cli/hydra-keys-create"}},l=[{value:"hydra keys",id:"hydra-keys",children:[{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],y={toc:l};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hydra-keys"},"hydra keys"),(0,i.kt)("p",null,"Manage JSON Web Keys"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --access-token string    Set an access token to be used in the Authorization header, defaults to environment variable OAUTH2_ACCESS_TOKEN\n      --endpoint string        Set the URL where ORY Hydra is hosted, defaults to environment variable HYDRA_ADMIN_URL\n      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   fake tls termination by adding "X-Forwarded-Proto: https" to http headers\n  -h, --help                   help for keys\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unknown certificate authorities\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"hydra"},"hydra")," - Run and manage ORY Hydra"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"hydra-keys-create"},"hydra keys create")," - Create a new JSON Web Key Set"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"hydra-keys-delete"},"hydra keys delete")," - Delete a new JSON Web Key Set"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"hydra-keys-get"},"hydra keys get")," - Get a new JSON Web Key Set"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"hydra-keys-import"},"hydra keys import")," - Imports cryptographic keys of any\nformat to the JSON Web Key Store")))}p.isMDXComponent=!0}}]);