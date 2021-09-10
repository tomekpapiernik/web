(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[18996],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return y},kt:function(){return p}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},y=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=r,k=u["".concat(c,".").concat(p)]||u[p]||d[p]||i;return n?o.createElement(k,a(a({ref:t},y),{},{components:n})):o.createElement(k,a({ref:t},y))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95123:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return y},default:function(){return u}});var o=n(22122),r=n(19756),i=(n(67294),n(3905)),a=["components"],s={id:"secrets-key-rotation",title:"Secrets and Key Rotation"},c=void 0,l={unversionedId:"guides/secrets-key-rotation",id:"version-v1.10/guides/secrets-key-rotation",isDocsHomePage:!1,title:"Secrets and Key Rotation",description:"There are two types of key rotation:",source:"@site/versioned_docs/version-v1.10/guides/secrets-key-rotation.mdx",sourceDirName:"guides",slug:"/guides/secrets-key-rotation",permalink:"/hydra/docs/guides/secrets-key-rotation",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/guides/secrets-key-rotation.mdx",tags:[],version:"v1.10",lastUpdatedBy:"aeneasr",lastUpdatedAt:1616672187,formattedLastUpdatedAt:"3/25/2021",frontMatter:{id:"secrets-key-rotation",title:"Secrets and Key Rotation"},sidebar:"version-v1.10/docs",previous:{title:"Distributed Tracing",permalink:"/hydra/docs/guides/tracing"},next:{title:"Kubernetes Helm Chart",permalink:"/hydra/docs/guides/kubernetes-helm-chart"}},y=[{value:"Rotation of JSON Web Token Signing Keys",id:"rotation-of-json-web-token-signing-keys",children:[]},{value:"Rotation of HMAC Token Signing and Database and Cookie Encryption Keys",id:"rotation-of-hmac-token-signing-and-database-and-cookie-encryption-keys",children:[]}],d={toc:y};function u(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are two types of key rotation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rotation of JSON Web Token Signing Keys"),(0,i.kt)("li",{parentName:"ul"},"Rotation of HMAC Token Signing and Database and Cookie Encryption Keys")),(0,i.kt)("h3",{id:"rotation-of-json-web-token-signing-keys"},"Rotation of JSON Web Token Signing Keys"),(0,i.kt)("p",null,"JSON Web Token Signing Key rotation is simple with ORY Hydra. You can rotate\nOpenID Connect ID Token and OAuth 2.0 Access Tokens, when using the JSON Web\nToken strategy, keys with one simple command."),(0,i.kt)("p",null,"ORY Hydra takes the latest key from the key store to sign JSON Web Tokens. All\npublic keys will be shown at\n",(0,i.kt)("inlineCode",{parentName:"p"},"http://ory-hydra-public-api/.well-known/jwks.json"),"."),(0,i.kt)("h4",{id:"openid-connect-id-token"},"OpenID Connect ID Token"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hydra keys create --endpoint=http://ory-hydra-admin-api/ hydra.openid.id-token -a RS256\n")),(0,i.kt)("h4",{id:"oauth-20-access-tokens-json-web-token"},"OAuth 2.0 Access Tokens (JSON Web Token)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This will only work when using the JWT access token strategy. Otherwise, this\nwill have no effect.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hydra keys create --endpoint=http://ory-hydra-admin-api/ hydra.jwt.access-token -a RS256\n")),(0,i.kt)("h3",{id:"rotation-of-hmac-token-signing-and-database-and-cookie-encryption-keys"},"Rotation of HMAC Token Signing and Database and Cookie Encryption Keys"),(0,i.kt)("p",null,"Rotating database encryption keys is done by prepending the new encryption key\nto the respective configuration value. Assuming configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"secrets:\n  cookie:\n    - the-old-cookie-encryption-key\n  system:\n    - the-old-system-encryption-key\n")),(0,i.kt)("p",null,"one would add the new keys as follows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"secrets:\n  cookie:\n    - the-new-cookie-encryption-key # the new key must be the first entry\n    - the-old-cookie-encryption-key\n  system:\n    - the-new-system-encryption-key # the new key must be the first entry\n    - the-old-system-encryption-key\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It is very important that the new key is the first entry in the list as only\nthe first key is used for encryption while all keys from the list are used for\ndecryption. Please note that existing data will not be automatically\nre-encrypted using the new key. Only new data will be signed and encrypted\nusing the new key. It is therefore imperative that the old key is added to the\nlist, unless you want to also invalidate all data that was signed or encrypted\nusing the old key.")))}u.isMDXComponent=!0}}]);