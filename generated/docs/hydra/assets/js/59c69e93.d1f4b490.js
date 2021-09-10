(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[17078],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83793:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],s={id:"limitations",title:"Limitations"},l=void 0,c={unversionedId:"limitations",id:"version-v1.9/limitations",isDocsHomePage:!1,title:"Limitations",description:"ORY Hydra tries to solve all of OAuth 2.0 and OpenID Connect uses. There are,",source:"@site/versioned_docs/version-v1.9/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/hydra/docs/v1.9/limitations",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/limitations.md",tags:[],version:"v1.9",lastUpdatedBy:"aeneasr",lastUpdatedAt:1607427290,formattedLastUpdatedAt:"12/8/2020",frontMatter:{id:"limitations",title:"Limitations"},sidebar:"version-v1.9/docs",previous:{title:"JSON Web Key Sets",permalink:"/hydra/docs/v1.9/jwks"},next:{title:"Login Endpoint",permalink:"/hydra/docs/v1.9/guides/login"}},p=[{value:"MySQL &lt;= 5.6 / MariaDB",id:"mysql--56--mariadb",children:[]},{value:"OAuth 2.0 Client Secret Length",id:"oauth-20-client-secret-length",children:[]},{value:"Resource Owner Password Credentials Grant Type (ROCP)",id:"resource-owner-password-credentials-grant-type-rocp",children:[{value:"Overview",id:"overview",children:[]},{value:"Legacy &amp; Bad Security",id:"legacy--bad-security",children:[]},{value:"What about Auth0, Okta, ...?",id:"what-about-auth0-okta-",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ORY Hydra tries to solve all of OAuth 2.0 and OpenID Connect uses. There are,\nhowever, some limitations."),(0,o.kt)("h2",{id:"mysql--56--mariadb"},"MySQL <= 5.6 / MariaDB"),(0,o.kt)("p",null,"ORY Hydra has issues with MySQL <= 5.6 (but not MySQL 5.7+) and certain MariaDB\nversions. Read more about this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra/issues/377"},"here"),".\nOur recommendation is to use MySQL 5.7+ or PostgreSQL."),(0,o.kt)("h2",{id:"oauth-20-client-secret-length"},"OAuth 2.0 Client Secret Length"),(0,o.kt)("p",null,'OAuth 2.0 Client Secrets are hashed using BCrypt. BCrypt has, by design, a\nmaximum password length. The Golang BCrypt library has a maximum password length\nof 73 bytes. Any password longer will be "truncated":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ hydra clients create --id long-secret \\\n    --secret 525348e77144a9cee9a7471a8b67c50ea85b9e3eb377a3c1a3a23db88f9150eefe76e6a339fdbc62b817595f53d72549d9ebe36438f8c2619846b963e9f43a94 \\\n    --endpoint http://localhost:4445 \\\n    --token-endpoint-auth-method client_secret_post \\\n    --grant-types client_credentials\n\n$ hydra token client --client-id long-secret \\\n    --client-secret 525348e77144a9cee9a7471a8b67c50ea85b9e3eb377a3c1a3a23db88f9150eefe76e6a3 \\\n    --endpoint http://localhost:4444\n")),(0,o.kt)("p",null,"For more information on this topic we recommend reading:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://security.stackexchange.com/questions/39849/does-bcrypt-have-a-maximum-password-length"},"https://security.stackexchange.com/questions/39849/does-bcrypt-have-a-maximum-password-length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://security.stackexchange.com/questions/6623/pre-hash-password-before-applying-bcrypt-to-avoid-restricting-password-length"},"https://security.stackexchange.com/questions/6623/pre-hash-password-before-applying-bcrypt-to-avoid-restricting-password-length"))),(0,o.kt)("h2",{id:"resource-owner-password-credentials-grant-type-rocp"},"Resource Owner Password Credentials Grant Type (ROCP)"),(0,o.kt)("p",null,"ORY Hydra does not and will not implement the Resource Owner Password\nCredentials Grant Type. Read on for context."),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This grant type allows OAuth 2.0 Clients to exchange user credentials (username,\npassword) for an access token."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POST /oauth2/token HTTP/1.1\nHost: server.example.com\nAuthorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=password&username=johndoe&password=A3ddj3w\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nContent-Type: application/json;charset=UTF-8\nCache-Control: no-store\nPragma: no-cache\n\n{\n  "access_token":"2YotnFZFEjr1zCsicMWpAA",\n  "token_type":"example",\n  "expires_in":3600,\n  "refresh_token":"tGzv3JOkF0XG5Qx2TlKWIA",\n  "example_parameter":"example_value"\n}\n')),(0,o.kt)("p",null,"You might think that this is the perfect grant type for your first-party\napplication. This grant type is most commonly used in mobile authentication for\nfirst-party apps. If you plan on doing this, stop right now and read\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ory.sh/oauth2-for-mobile-app-spa-browser"},"this blog article"),"."),(0,o.kt)("h3",{id:"legacy--bad-security"},"Legacy & Bad Security"),(0,o.kt)("p",null,'The ROCP grant type is discouraged by developers, professionals, and the IETF\nitself. It was originally added because big legacy corporations (not dropping\nany names, but they are part of the IETF consortium) did not want to migrate\ntheir authentication infrastructure to the modern web but instead do what\nthey\'ve been doing all along "but OAuth 2.0" and for systems that want to\nupgrade from OAuth (1.0) to OAuth 2.0.'),(0,o.kt)("p",null,"There are a ton of good reasons why this is a bad flow, they are summarized in\n",(0,o.kt)("a",{parentName:"p",href:"https://www.scottbrady91.com/OAuth/Why-the-Resource-Owner-Password-Credentials-Grant-Type-is-not-Authentication-nor-Suitable-for-Modern-Applications"},"this excellent blog article as well"),"."),(0,o.kt)("h3",{id:"what-about-auth0-okta-"},"What about Auth0, Okta, ...?"),(0,o.kt)("p",null,"Auth0, Okta, Stormpath started early with OAuth 2.0 SaaS and adopted the ROPC\ngrant too. They since deprecated these old flows but still have them active as\nexisting apps rely on them."))}d.isMDXComponent=!0}}]);