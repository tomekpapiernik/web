(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[91289],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},44996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(52263),i=n(13919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,l=void 0!==a&&a,s=o.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(l)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},79288:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),a=(n(44996),["components"]),l={id:"debug",title:"Common Problems",sidebar_label:"Common Problem Solutions"},s=void 0,u={unversionedId:"debug",id:"version-v1.7/debug",isDocsHomePage:!1,title:"Common Problems",description:"Spec-compliant OAuth 2.0 and OpenID Connect is hard. Let's take a look how to",source:"@site/versioned_docs/version-v1.7/debug.mdx",sourceDirName:".",slug:"/debug",permalink:"/hydra/docs/v1.7/debug",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.7/debug.mdx",tags:[],version:"v1.7",lastUpdatedBy:"aeneasr",lastUpdatedAt:1598881190,formattedLastUpdatedAt:"8/31/2020",frontMatter:{id:"debug",title:"Common Problems",sidebar_label:"Common Problem Solutions"},sidebar:"version-v1.7/docs",previous:{title:"hydra version",permalink:"/hydra/docs/v1.7/cli/hydra-version"},next:{title:"Common CSRF Pitfalls",permalink:"/hydra/docs/v1.7/debug/csrf"}},c=[{value:"First Aid",id:"first-aid",children:[]},{value:"OpenID Connect ID Token missing",id:"openid-connect-id-token-missing",children:[]},{value:"OAuth 2.0 Refresh Token is missing",id:"oauth-20-refresh-token-is-missing",children:[]},{value:"OAuth 2.0 Authorize Code Flow fails",id:"oauth-20-authorize-code-flow-fails",children:[]},{value:"Refresh Token Flow fails",id:"refresh-token-flow-fails",children:[{value:"Wrong or misconfigured OAuth 2.0 Client",id:"wrong-or-misconfigured-oauth-20-client",children:[]},{value:"Redirect URL is not whitelisted",id:"redirect-url-is-not-whitelisted",children:[]}]}],d={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Spec-compliant OAuth 2.0 and OpenID Connect is hard. Let's take a look how to\nresolve certain issues."),(0,o.kt)("h2",{id:"first-aid"},"First Aid"),(0,o.kt)("p",null,"There are three things you can do to quickly debug any issue:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Check the logs. ORY Hydra has extensive logging and you will find the issue\nmost likely in the logs. Here is an example log line for a client that\nrequested a redirect URL that did not match the whitelisted redirect URLS:\n",(0,o.kt)("inlineCode",{parentName:"li"},'time="2018-08-07T16:01:16Z" level=error msg="An error occurred" description="The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed" error=invalid_request hint="The \\"redirect_uri\\" parameter does not match any of the OAuth 2.0 Client\'s pre-registered redirect urls."')),(0,o.kt)("li",{parentName:"ol"},"Check the URL because of two reasons:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"ORY Hydra sends ",(0,o.kt)("inlineCode",{parentName:"li"},"error_hint"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"error"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"error_description"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"error_debug"),"\nin the URL. You will find the cause of the error most likely in there."),(0,o.kt)("li",{parentName:"ol"},"You are maybe in the wrong URL. Make sure the host and port and path is\ncorrect. This happens often, especially when you're just starting out and\nexperimenting"))),(0,o.kt)("li",{parentName:"ol"},"Set environment variable ",(0,o.kt)("inlineCode",{parentName:"li"},"OAUTH2_EXPOSE_INTERNAL_ERRORS=true"),". Do not do this\nin production, it is possible, though unlikely, that important data leaks\nwith this. If set to true, ORY Hydra will set the ",(0,o.kt)("inlineCode",{parentName:"li"},"error_debug")," query\nparameter if debug information is available."),(0,o.kt)("li",{parentName:"ol"},"If you're just starting out and experimenting your docker set up does not\nwork at all:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Stop all containers"),(0,o.kt)("li",{parentName:"ol"},"Remove them (unless you have something important running)"),(0,o.kt)("li",{parentName:"ol"},"Retry. ",(0,o.kt)("strong",{parentName:"li"},"This can help a lot if you are new to this!"))))),(0,o.kt)("h2",{id:"openid-connect-id-token-missing"},"OpenID Connect ID Token missing"),(0,o.kt)("p",null,"If you expect an OAuth 2.0 ID Token but are not receiving one, this can have\nmultiple reasons:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You are using the ",(0,o.kt)("inlineCode",{parentName:"li"},"client_credentials")," grant which can not return an ID\ntoken."),(0,o.kt)("li",{parentName:"ol"},"You forgot to request the ",(0,o.kt)("inlineCode",{parentName:"li"},"openid")," scope when calling\n",(0,o.kt)("inlineCode",{parentName:"li"},"/oauth2/auth?response_type=code")," (Authorize Code Flow - correct would be\n",(0,o.kt)("inlineCode",{parentName:"li"},"/oauth2/auth?response_type=code&scope=openid"),") or the ",(0,o.kt)("inlineCode",{parentName:"li"},"id_token")," response\ntype when calling ",(0,o.kt)("inlineCode",{parentName:"li"},"/oauth2/auth?response_type=token")," (Implicit/Hybrid flow -\ncorrect would be ",(0,o.kt)("inlineCode",{parentName:"li"},"/oauth2/auth?response_type=token+id_token&scope=openid")," or\nany other combination such as ",(0,o.kt)("inlineCode",{parentName:"li"},"response_type=id_token"),",\n",(0,o.kt)("inlineCode",{parentName:"li"},"response_type=token+code+id_token"),")."),(0,o.kt)("li",{parentName:"ol"},"You consent app did not send ",(0,o.kt)("inlineCode",{parentName:"li"},'granted_scope: ["openid"]')," or when accepting\nthe consent request."),(0,o.kt)("li",{parentName:"ol"},"The OAuth 2.0 Client making the request is not allowed to request the scope\n",(0,o.kt)("inlineCode",{parentName:"li"},"openid"),".")),(0,o.kt)("h2",{id:"oauth-20-refresh-token-is-missing"},"OAuth 2.0 Refresh Token is missing"),(0,o.kt)("p",null,"If you expect an OAuth 2.0 Refresh Token but are not receiving one, this can\nhave multiple reasons:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You are using an implicit or hybrid flow. These flows never return a refresh\ntoken!"),(0,o.kt)("li",{parentName:"ol"},"You are using the ",(0,o.kt)("inlineCode",{parentName:"li"},"client_credentials")," grant which can not return a refresh\ntoken."),(0,o.kt)("li",{parentName:"ol"},"You forgot to request the ",(0,o.kt)("inlineCode",{parentName:"li"},"offline")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"offline_access")," scope when calling\n",(0,o.kt)("inlineCode",{parentName:"li"},"/oauth2/auth"),"."),(0,o.kt)("li",{parentName:"ol"},"You consent app did not send ",(0,o.kt)("inlineCode",{parentName:"li"},'granted_scope: ["offline"]')," or\n",(0,o.kt)("inlineCode",{parentName:"li"},'granted_scope: ["offline_access"]')," when accepting the consent request."),(0,o.kt)("li",{parentName:"ol"},"The OAuth 2.0 Client making the request is not allowed to request the scope\n",(0,o.kt)("inlineCode",{parentName:"li"},"openid"),".")),(0,o.kt)("h2",{id:"oauth-20-authorize-code-flow-fails"},"OAuth 2.0 Authorize Code Flow fails"),(0,o.kt)("p",null,"The most likely cause is misconfiguration, summarized in the next sections."),(0,o.kt)("h2",{id:"refresh-token-flow-fails"},"Refresh Token Flow fails"),(0,o.kt)("p",null,"Refresh tokens can become invalid if abuse is detected, but coding issues may\nalso trigger this scenario, for example if a client makes multiple requests."),(0,o.kt)("p",null,"Some common examples:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Replay of authorization code grant."),(0,o.kt)("li",{parentName:"ol"},"Replay of refresh token grant.")),(0,o.kt)("h3",{id:"wrong-or-misconfigured-oauth-20-client"},"Wrong or misconfigured OAuth 2.0 Client"),(0,o.kt)("p",null,"You are using the wrong OAuth 2.0 Client or the OAuth 2.0 Client has a broken\nconfiguration. To check that you're using the right client, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hydra clients get --endpoint http://ory-hydra <the-client-id>\n")),(0,o.kt)("p",null,"The result shows you the whole client (excluding its secret). Check that the\nvalues are correct. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n        "client_id": "my-client",\n        "grant_types": [\n                "authorization_code"\n        ],\n        "jwks": {},\n        "redirect_uris": [\n                "http://127.0.0.1:5556/callback"\n        ],\n        "response_types": [\n                "code"\n        ],\n        "scope": "openid offline",\n        "subject_type": "pairwise",\n        "token_endpoint_auth_method": "client_secret_basic",\n        "userinfo_signed_response_alg": "none"\n}\n')),(0,o.kt)("h3",{id:"redirect-url-is-not-whitelisted"},"Redirect URL is not whitelisted"),(0,o.kt)("p",null,"A likely cause of your request failing is that you are using the wrong redirect\nURL. Assuming your OAuth 2.0 URL looks like\n",(0,o.kt)("inlineCode",{parentName:"p"},"http://ory-hydra/oauth2/auth?client_id=my-client&...&redirect_uri=http://my-url/callback")),(0,o.kt)("p",null,"The redirect URL ",(0,o.kt)("inlineCode",{parentName:"p"},"http://my-url/callback")," must be whitelisted in your client\nconfiguration. The URLs must match ",(0,o.kt)("strong",{parentName:"p"},"exactly"),". URL ",(0,o.kt)("inlineCode",{parentName:"p"},"http://my-url/callback")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"http://my-url/callback?foo=bar")," are different URLs!"),(0,o.kt)("p",null,"To see the whitelisted redirect_uris, check the client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'hydra clients get --endpoint http://ory-hydra <the-client-id>\n\n{\n        // ...\n        "redirect_uris": [\n                "http://127.0.0.1:5556/callback"\n        ],\n        // ...\n}\n')),(0,o.kt)("p",null,"Here you see that ",(0,o.kt)("inlineCode",{parentName:"p"},"http://my-url/callback")," is not in the list, which is why the\nrequest fails."))}p.isMDXComponent=!0}}]);