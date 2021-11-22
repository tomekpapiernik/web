"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[10027],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),h=o,f=p["".concat(l,".").concat(h)]||p[h]||c[h]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},27250:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={id:"hydra-token-user",title:"hydra token user",description:"hydra token user An exemplary OAuth 2.0 Client performing the OAuth 2.0 Authorize Code Flow"},l=void 0,u={unversionedId:"cli/hydra-token-user",id:"version-v1.8/cli/hydra-token-user",isDocsHomePage:!1,title:"hydra token user",description:"hydra token user An exemplary OAuth 2.0 Client performing the OAuth 2.0 Authorize Code Flow",source:"@site/versioned_docs/version-v1.8/cli/hydra-token-user.md",sourceDirName:"cli",slug:"/cli/hydra-token-user",permalink:"/hydra/docs/v1.8/cli/hydra-token-user",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.8/cli/hydra-token-user.md",tags:[],version:"v1.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601730608,formattedLastUpdatedAt:"10/3/2020",frontMatter:{id:"hydra-token-user",title:"hydra token user",description:"hydra token user An exemplary OAuth 2.0 Client performing the OAuth 2.0 Authorize Code Flow"},sidebar:"version-v1.8/docs",previous:{title:"hydra token revoke",permalink:"/hydra/docs/v1.8/cli/hydra-token-revoke"},next:{title:"hydra version",permalink:"/hydra/docs/v1.8/cli/hydra-version"}},d=[{value:"hydra token user",id:"hydra-token-user",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],c={toc:d};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hydra-token-user"},"hydra token user"),(0,i.kt)("p",null,"An exemplary OAuth 2.0 Client performing the OAuth 2.0 Authorize Code Flow"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Starts an exemplary web server that acts as an OAuth 2.0 Client performing the\nAuthorize Code Flow. This command will help you to see if ORY Hydra has been\nconfigured properly."),(0,i.kt)("p",null,"This command must not be used for anything else than manual testing or demo\npurposes. The server will terminate on error and success."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hydra token user [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --audience strings       Request a specific OAuth 2.0 Access Token Audience\n      --auth-url endpoint      Usually it is enough to specify the endpoint flag, but if you want to force the authorization url, use this flag\n      --client-id string       Use the provided OAuth 2.0 Client ID, defaults to environment variable OAUTH2_CLIENT_ID\n      --client-secret string   Use the provided OAuth 2.0 Client Secret, defaults to environment variable OAUTH2_CLIENT_SECRET\n      --endpoint string        Set the URL where ORY Hydra is hosted, defaults to environment variable HYDRA_URL\n  -h, --help                   help for user\n      --https                  Sets up HTTPS for the endpoint using a self-signed certificate which is re-generated every time you start this command\n      --max-age int            Set the OpenID Connect max_age parameter\n      --no-open                Do not open the browser window automatically\n  -p, --port int               The port on which the server should run (default 4446)\n      --prompt strings         Set the OpenID Connect prompt parameter\n      --redirect string        Force a redirect url\n      --scope strings          Request OAuth2 scope (default [offline,openid])\n      --token-url endpoint     Usually it is enough to specify the endpoint flag, but if you want to force the token url, use this flag\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --config string          Config file (default is $HOME/.hydra.yaml)\n      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   fake tls termination by adding "X-Forwarded-Proto: https" to http headers\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unkown certificate authorities\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"hydra-token"},"hydra token")," - Issue and Manage OAuth2 tokens")))}p.isMDXComponent=!0}}]);