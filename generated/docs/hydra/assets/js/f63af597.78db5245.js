"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[55984],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=i,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54752:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={id:"hydra-token-client",title:"hydra token client",description:"hydra token client An exemplary OAuth 2.0 Client performing the OAuth 2.0 Client Credentials Flow"},c=void 0,s={unversionedId:"cli/hydra-token-client",id:"version-v1.8/cli/hydra-token-client",isDocsHomePage:!1,title:"hydra token client",description:"hydra token client An exemplary OAuth 2.0 Client performing the OAuth 2.0 Client Credentials Flow",source:"@site/versioned_docs/version-v1.8/cli/hydra-token-client.md",sourceDirName:"cli",slug:"/cli/hydra-token-client",permalink:"/hydra/docs/v1.8/cli/hydra-token-client",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.8/cli/hydra-token-client.md",tags:[],version:"v1.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601730608,formattedLastUpdatedAt:"10/3/2020",frontMatter:{id:"hydra-token-client",title:"hydra token client",description:"hydra token client An exemplary OAuth 2.0 Client performing the OAuth 2.0 Client Credentials Flow"},sidebar:"version-v1.8/docs",previous:{title:"hydra token",permalink:"/hydra/docs/v1.8/cli/hydra-token"},next:{title:"hydra token delete",permalink:"/hydra/docs/v1.8/cli/hydra-token-delete"}},d=[{value:"hydra token client",id:"hydra-token-client",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"hydra-token-client"},"hydra token client"),(0,o.kt)("p",null,"An exemplary OAuth 2.0 Client performing the OAuth 2.0 Client Credentials Flow"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Performs the OAuth 2.0 Client Credentials Flow. This command will help you to\nsee if ORY Hydra has been configured properly."),(0,o.kt)("p",null,"This command should not be used for anything else than manual testing or demo\npurposes. The server will terminate on error and success."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hydra token client [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --audience strings       Request a specific OAuth 2.0 Access Token Audience\n      --client-id string       Use the provided OAuth 2.0 Client ID, defaults to environment variable OAUTH2_CLIENT_ID\n      --client-secret string   Use the provided OAuth 2.0 Client Secret, defaults to environment variable OAUTH2_CLIENT_SECRET\n      --endpoint string        Set the URL where ORY Hydra is hosted, defaults to environment variable HYDRA_URL\n  -h, --help                   help for client\n      --scope strings          OAuth2 scope to request\n  -v, --verbose                Toggle verbose output mode\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --config string          Config file (default is $HOME/.hydra.yaml)\n      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   fake tls termination by adding "X-Forwarded-Proto: https" to http headers\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unkown certificate authorities\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"hydra-token"},"hydra token")," - Issue and Manage OAuth2 tokens")))}p.isMDXComponent=!0}}]);