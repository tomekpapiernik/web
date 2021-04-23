(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{570:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},y=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),y=d(n),u=o,b=y["".concat(i,".").concat(u)]||y[u]||p[u]||a;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(3),r=n(8),a=(n(0),n(570)),i={id:"secrets-key-rotation",title:"Secrets and Key Rotation"},s={unversionedId:"guides/secrets-key-rotation",id:"version-v1.9/guides/secrets-key-rotation",isDocsHomePage:!1,title:"Secrets and Key Rotation",description:"There are two types of key rotation:",source:"@site/versioned_docs/version-v1.9/guides/secrets-key-rotation.mdx",sourceDirName:"guides",slug:"/guides/secrets-key-rotation",permalink:"/hydra/docs/v1.9/guides/secrets-key-rotation",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/guides/secrets-key-rotation.mdx",version:"v1.9",lastUpdatedBy:"aeneasr",lastUpdatedAt:1607427290,formattedLastUpdatedAt:"12/8/2020",frontMatter:{id:"secrets-key-rotation",title:"Secrets and Key Rotation"},sidebar:"version-v1.9/docs",previous:{title:"Distributed Tracing",permalink:"/hydra/docs/v1.9/guides/tracing"},next:{title:"Kubernetes Helm Chart",permalink:"/hydra/docs/v1.9/guides/kubernetes-helm-chart"}},c=[{value:"Rotation of JSON Web Token Signing Keys",id:"rotation-of-json-web-token-signing-keys",children:[]},{value:"Rotation of HMAC Token Signing and Database and Cookie Encryption Keys",id:"rotation-of-hmac-token-signing-and-database-and-cookie-encryption-keys",children:[]}],l={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are two types of key rotation:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Rotation of JSON Web Token Signing Keys"),Object(a.b)("li",{parentName:"ul"},"Rotation of HMAC Token Signing and Database and Cookie Encryption Keys")),Object(a.b)("h3",{id:"rotation-of-json-web-token-signing-keys"},"Rotation of JSON Web Token Signing Keys"),Object(a.b)("p",null,"JSON Web Token Signing Key rotation is simple with ORY Hydra. You can rotate\nOpenID Connect ID Token and OAuth 2.0 Access Tokens, when using the JSON Web\nToken strategy, keys with one simple command."),Object(a.b)("p",null,"ORY Hydra takes the latest key from the key store to sign JSON Web Tokens. All\npublic keys will be shown at\n",Object(a.b)("inlineCode",{parentName:"p"},"http://ory-hydra-public-api/.well-known/jwks.json"),"."),Object(a.b)("h4",{id:"openid-connect-id-token"},"OpenID Connect ID Token"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"hydra keys create --endpoint=http://ory-hydra-admin-api/ hydra.openid.id-token -a RS256\n")),Object(a.b)("h4",{id:"oauth-20-access-tokens-json-web-token"},"OAuth 2.0 Access Tokens (JSON Web Token)"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This will only work when using the JWT access token strategy. Otherwise, this\nwill have no effect.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"hydra keys create --endpoint=http://ory-hydra-admin-api/ hydra.jwt.access-token -a RS256\n")),Object(a.b)("h3",{id:"rotation-of-hmac-token-signing-and-database-and-cookie-encryption-keys"},"Rotation of HMAC Token Signing and Database and Cookie Encryption Keys"),Object(a.b)("p",null,"Rotating database encryption keys is done by prepending the new encryption key\nto the respective configuration value. Assuming configuration"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"secrets:\n  cookie:\n    - the-old-cookie-encryption-key\n  system:\n    - the-old-system-encryption-key\n")),Object(a.b)("p",null,"one would add the new keys as follows"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"secrets:\n  cookie:\n    - the-new-cookie-encryption-key # the new key must be the first entry\n    - the-old-cookie-encryption-key\n  system:\n    - the-new-system-encryption-key # the new key must be the first entry\n    - the-old-system-encryption-key\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"It is very important that the new key is the first entry in the list as only\nthe first key is used for encryption while all keys from the list are used for\ndecryption. Please note that existing data will not be automatically\nre-encrypted using the new key. Only new data will be signed and encrypted\nusing the new key. It is therefore imperative that the old key is added to the\nlist, unless you want to also invalidate all data that was signed or encrypted\nusing the old key.")))}d.isMDXComponent=!0}}]);