(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[50870],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return y}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),y=a,f=d["".concat(c,".").concat(y)]||d[y]||u[y]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28443:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],s={id:"jwks",title:"JSON Web Key Sets"},c=void 0,p={unversionedId:"jwks",id:"version-v1.5/jwks",isDocsHomePage:!1,title:"JSON Web Key Sets",description:"A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that",source:"@site/versioned_docs/version-v1.5/jwks.md",sourceDirName:".",slug:"/jwks",permalink:"/hydra/docs/v1.5/jwks",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.5/jwks.md",version:"v1.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1588244570,formattedLastUpdatedAt:"4/30/2020",frontMatter:{id:"jwks",title:"JSON Web Key Sets"},sidebar:"version-v1.5/docs",previous:{title:"Limitations",permalink:"/hydra/docs/v1.5/limitations"},next:{title:"Benchmarks",permalink:"/hydra/docs/v1.5/benchmark"}},l=[{value:"Auto-generated JWKs",id:"auto-generated-jwks",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that\nrepresents a cryptographic key and is specified at\n",(0,o.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7517"},"IETF RFC7517"),". If you've heard of PEM\nfiles..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-----BEGIN ENCRYPTED PRIVATE KEY-----\nid: MIIFDjBABgkqhkiG9w0BBQ0wMzAbBgkqhkiG9w0BBQwwDg\nMBQGCCqGSIb3DQMHBAgD1kGN4ZslJgSCBMi1xk9jhlPxPc\n9g73NQbtqZwI+9X5OhpSg/2ALxlCCjbqvzgSu8gfFZ4yo+\nA .... MANY LINES LIKE THAT ....\nX0R+meOaudPTBxoSgCCM51poFgaqt4l6VlTN4FRpj+c/Wc\nblK948UAda/bWVmZjXfY4Tztah0CuqlAldOQBzu8TwE7WD\nH0ga/iLNvWYexG7FHLRiq5hTj0g9mUPEbeTXuPtOkTEb/0\nGEs=\n-----END ENCRYPTED PRIVATE KEY-----\n")),(0,o.kt)("p",null,"... JWKs are the same, but formatted using JSON:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "keys":\n  [\n   {"kty":"oct",\n    "alg":"A128KW",\n    "k":"GawgguFyGrWKav7AX4VKUg"},\n\n   {"kty":"oct",\n    "k":"AyM1SysPpbyDfgZld3umj1qzKObwVMkoqQ-EstJQLr_T-1qS0gZH75\n  aKtMN3Yj0iPS4hcgUuTwjAzZr1Z9CAow",\n    "kid":"HMAC key used in JWS spec Appendix A.1 example"}\n  ]\n}\n')),(0,o.kt)("p",null,"ORY Hydra offers an API for generating and managing JWKs, the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ory.sh/docs/api/hydra"},"JSON Web Keys API"),". When using persistent\nstorage backends, the keys are encrypted at rest using AES256-GCM and ",(0,o.kt)("em",{parentName:"p"},"the\nsystem secret"),". The system secret is generated by default and overridden by the\nenvironment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"SYSTEM_SECRET"),"."),(0,o.kt)("p",null,"JWKs are well supported amongst all languages. This endpoint helps you managing\ncertificates, private, public and symmetric keys. It is important to never\ntransport keys over insecure channels such as http."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://www.ory.sh/docs/api/hydra/"},"REST API Documentation")," will give you\ndetails on the various endpoints."),(0,o.kt)("h2",{id:"auto-generated-jwks"},"Auto-generated JWKs"),(0,o.kt)("p",null,"Hydra generates a couple of JSON Web Keys in order to operate correctly:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:4445/keys/hydra.openid.id-token"),": A RSA public/private key\npair for signing and validating OpenID Connect ID Tokens."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:4445/keys/https-tls"),": A RSA public/private key pair and a\ncertificate for signing HTTP over TLS.")))}d.isMDXComponent=!0}}]);