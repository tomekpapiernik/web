"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[62769],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=r,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return t?o.createElement(g,i(i({ref:n},c),{},{components:t})):o.createElement(g,i({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},70396:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),i=["components"],l={id:"token-expiration",title:"Configuring Expiration"},s=void 0,u={unversionedId:"guides/token-expiration",id:"guides/token-expiration",isDocsHomePage:!1,title:"Configuring Expiration",description:"In the Hydra config.yaml - located in your Hydra directory - you can set times",source:"@site/docs/guides/token-expiration.mdx",sourceDirName:"guides",slug:"/guides/token-expiration",permalink:"/hydra/docs/next/guides/token-expiration",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/guides/token-expiration.mdx",tags:[],version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1596553807,formattedLastUpdatedAt:"8/4/2020",frontMatter:{id:"token-expiration",title:"Configuring Expiration"},sidebar:"docs",previous:{title:"Using OAuth2",permalink:"/hydra/docs/next/guides/using-oauth2"},next:{title:"OAuth 2.0 Token Introspection",permalink:"/hydra/docs/next/guides/oauth2-token-introspection"}},c=[{value:"Login and Consent Request Expiration",id:"login-and-consent-request-expiration",children:[],level:2},{value:"Access Token Expiration",id:"access-token-expiration",children:[],level:2},{value:"Refresh Token Expiration",id:"refresh-token-expiration",children:[],level:2},{value:"ID Token Expiration",id:"id-token-expiration",children:[],level:2},{value:"Auth Code Expiration",id:"auth-code-expiration",children:[],level:2}],p={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the Hydra config.yaml - located in your Hydra directory - you can set times\nfor how long a login/consent flow may take, expiration times for access tokens,\nrefresh tokens, id tokens and auth codes."),(0,a.kt)("h2",{id:"login-and-consent-request-expiration"},"Login and Consent Request Expiration"),(0,a.kt)("p",null,"Key ",(0,a.kt)("inlineCode",{parentName:"p"},"ttl.login_consent_request")," configures how long a user login and consent\nflow may take."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="path/to/hydra/config.yaml"',title:'"path/to/hydra/config.yaml"'},"#....\n  ## login_consent_request ##\n  #\n  # Configures how long a user login and consent flow may take.\n  #\n  # Default value: 1h\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TTL_LOGIN_CONSENT_REQUEST=<value>\n  # - Windows Command Line (CMD):\n  #    > set TTL_LOGIN_CONSENT_REQUEST=<value>\n  #\n  login_consent_request: 1h\n #....\n")),(0,a.kt)("h2",{id:"access-token-expiration"},"Access Token Expiration"),(0,a.kt)("p",null,"Key ",(0,a.kt)("inlineCode",{parentName:"p"},"ttl.access_token")," configures how long access tokens are valid."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="path/to/hydra/config.yaml"',title:'"path/to/hydra/config.yaml"'},"#....\n  ## access_token ##\n  #\n  # Configures how long access tokens are valid.\n  #\n  # Default value: 1h\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TTL_ACCESS_TOKEN=<value>\n  # - Windows Command Line (CMD):\n  #    > set TTL_ACCESS_TOKEN=<value>\n  #\n  access_token: 1h\n   #....\n")),(0,a.kt)("h2",{id:"refresh-token-expiration"},"Refresh Token Expiration"),(0,a.kt)("p",null,"Key ",(0,a.kt)("inlineCode",{parentName:"p"},"ttl.refresh_token")," configures how long refresh tokens are valid. Set to -1\nfor refresh tokens to never expire."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="path/to/hydra/config.yaml"',title:'"path/to/hydra/config.yaml"'},'#....\n  ## refresh_token ##\n  #\n  # Configures how long refresh tokens are valid. Set to -1 for refresh tokens to never expire.\n  #\n  # Default value: 720h\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TTL_REFRESH_TOKEN=<value>\n  # - Windows Command Line (CMD):\n  #    > set TTL_REFRESH_TOKEN=<value>\n  #\n  refresh_token: "-1"\n    #....\n')),(0,a.kt)("h2",{id:"id-token-expiration"},"ID Token Expiration"),(0,a.kt)("p",null,"Key ",(0,a.kt)("inlineCode",{parentName:"p"},"ttl.id_token")," configures how long id tokens are valid."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="path/to/hydra/config.yaml"',title:'"path/to/hydra/config.yaml"'},"#....\n  ## id_token ##\n  #\n  # Configures how long id tokens are valid.\n  #\n  # Default value: 1h\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TTL_ID_TOKEN=<value>\n  # - Windows Command Line (CMD):\n  #    > set TTL_ID_TOKEN=<value>\n  #\n  id_token: 1h\n     #....\n")),(0,a.kt)("h2",{id:"auth-code-expiration"},"Auth Code Expiration"),(0,a.kt)("p",null,"Key ",(0,a.kt)("inlineCode",{parentName:"p"},"ttl.auth_code")," configures how long auth codes are valid."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="path/to/hydra/config.yaml"',title:'"path/to/hydra/config.yaml"'},"#....\n\n    ## auth_code ##\n  #\n  # Configures how long auth codes are valid.\n  #\n  # Default value: 10m\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TTL_AUTH_CODE=<value>\n  # - Windows Command Line (CMD):\n  #    > set TTL_AUTH_CODE=<value>\n  #\n  auth_code: 1h\n     #....\n")))}d.isMDXComponent=!0}}]);