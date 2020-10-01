(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{316:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,b=d["".concat(o,".").concat(p)]||d[p]||h[p]||i;return r?a.a.createElement(b,c(c({ref:t},l),{},{components:r})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),i=(r(0),r(316)),o={id:"security-architecture",title:"Security Architecture"},c={unversionedId:"security-architecture",id:"version-v1.5/security-architecture",isDocsHomePage:!1,title:"Security Architecture",description:"Hydra is built with tough security in mind.",source:"@site/versioned_docs/version-v1.5/security-architecture.md",slug:"/security-architecture",permalink:"/hydra/docs/v1.5/security-architecture",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.5/security-architecture.md",version:"v1.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1588244570,sidebar:"version-v1.5/docs",previous:{title:"Benchmarks",permalink:"/hydra/docs/v1.5/benchmark"},next:{title:"FAQ",permalink:"/hydra/docs/v1.5/faq"}},s=[{value:"OAuth 2.0 Security Overview",id:"oauth-20-security-overview",children:[{value:"Advanced Token Validation (Datastore Security)",id:"advanced-token-validation-datastore-security",children:[]}]},{value:"Cryptography",id:"cryptography",children:[{value:"AES-GCM",id:"aes-gcm",children:[]},{value:"RS256",id:"rs256",children:[]},{value:"HMAC-SHA256",id:"hmac-sha256",children:[]},{value:"BCrypt",id:"bcrypt",children:[]}]},{value:"How does Access Control work with Hydra?",id:"how-does-access-control-work-with-hydra",children:[]}],l={rightToc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Hydra is built with tough security in mind."),Object(i.b)("h2",{id:"oauth-20-security-overview"},"OAuth 2.0 Security Overview"),Object(i.b)("p",null,"Hydra is an implementation of the security-first Fosite OAuth 2.0 SDK\n(",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ory/fosite"}),"https://github.com/ory/fosite"),"). Fosite\nrespects the\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc6819#section-5.1.5.3"}),"OAuth 2.0 Threat Model and Security Considerations"),"\nby the IETF, specifically:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"No Cleartext Storage of Credentials"),Object(i.b)("li",{parentName:"ul"},"Encryption of Credentials"),Object(i.b)("li",{parentName:"ul"},"Use Short Expiration Time"),Object(i.b)("li",{parentName:"ul"},"Limit Number of Usages or One-Time Usage"),Object(i.b)("li",{parentName:"ul"},"Bind Token to Client id"),Object(i.b)("li",{parentName:"ul"},"Automatic Revocation of Derived Tokens If Abuse Is Detected"),Object(i.b)("li",{parentName:"ul"},'Binding of Refresh Token to "client_id"'),Object(i.b)("li",{parentName:"ul"},"Refresh Token Rotation"),Object(i.b)("li",{parentName:"ul"},"Revocation of Refresh Tokens"),Object(i.b)("li",{parentName:"ul"},'Validate Pre-Registered "redirect_uri"'),Object(i.b)("li",{parentName:"ul"},'Binding of Authorization "code" to "client_id"'),Object(i.b)("li",{parentName:"ul"},'Binding of Authorization "code" to "redirect_uri"'),Object(i.b)("li",{parentName:"ul"},"Opaque access tokens"),Object(i.b)("li",{parentName:"ul"},"Opaque refresh tokens"),Object(i.b)("li",{parentName:"ul"},"Ensure Confidentiality of Requests"),Object(i.b)("li",{parentName:"ul"},"Use of Asymmetric Cryptography"),Object(i.b)("li",{parentName:"ul"},"Enforcing random states: Without a random-looking state or OpenID Connect\nnonce the request will fail.")),Object(i.b)("p",null,"Additionally these safeguards are implemented:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Advanced Token Validation: Tokens are laid out as\n","<","key",">",".","<","signature",">"," where ","<","signature",">"," is created using\nHMAC-SHA256 using a global secret.")),Object(i.b)("h3",{id:"advanced-token-validation-datastore-security"},"Advanced Token Validation (Datastore Security)"),Object(i.b)("p",null,"For a OAuth2 access token, refresh token or authorize code to be valid, one\nrequires both the key and the signature (formatted as\n","<","key",">",".","<","signature",">","). Only the signature is stored in the datastore\n(SQL), thus a compromised datastore will not allow an attacker to gain access to\nany valid authorize codes, access tokens, or refresh tokens."),Object(i.b)("p",null,"Because HMAC-SHA256 is used, the System Secret is required to create valid\nkey-signature pairs, rendering an attacker unable to inject new codes or tokens\ninto a compromised datastore."),Object(i.b)("h2",{id:"cryptography"},"Cryptography"),Object(i.b)("p",null,"Hydra uses different cryptographic methods, this is an overview of all of them."),Object(i.b)("h3",{id:"aes-gcm"},"AES-GCM"),Object(i.b)("p",null,"AES-GCM is used to encrypt JWKs at rest using a key size of 256 bit which\nexceeds requirements by Lenstra, ECRYPT II, NIST, ANSSI, and BSI, see\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.keylength.com/en/compare/"}),"https://www.keylength.com/en/compare/"),"."),Object(i.b)("p",null,"GCM (Galois/Counter Mode) is an authenticated encryption algorithm designed to\nprovide both data authenticity (integrity) and confidentiality. GCM uses a nonce\n(\u201cIV\u201d) that has an upper limit of 2^32 nonces. If more nonces are used, there is\nrisk of repeats. This means that you risk collisions when storing more than 2^32\ndocuments authenticated with GCM. Because AES-GCM is only used to encrypt data\nat rest, this is might only impose a problem if"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"more than 2^32 documents are stored using AES-GCM"),Object(i.b)("li",{parentName:"ol"},"an attacker gains access to the datastore where ",">"," 2^32 documents are\nstored"),Object(i.b)("li",{parentName:"ol"},"the attacker is able to exploit repeats, for example by authenticating\nmalicious documents")),Object(i.b)("h3",{id:"rs256"},"RS256"),Object(i.b)("p",null,"RSASSA-PKCS1-v1_5 using SHA-256 (RS256) is used to sign JWTs. It\u2019s use is\nrecommended by the JWA specification, see\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.rfc-editor.org/rfc/rfc7518.txt"}),"https://www.rfc-editor.org/rfc/rfc7518.txt")),Object(i.b)("p",null,"The RSA Key size is 4096 bit long, exceeding the minimum requirement of 2048 bit\nby\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.rfc-editor.org/rfc/rfc7518.txt"}),"https://www.rfc-editor.org/rfc/rfc7518.txt"),"."),Object(i.b)("p",null,"Recommendations from NIST, ANSSI, IAD-NSA, BSI, Lenstra and others vary between\n1300 and 2048 bit key lengths for asymmetric cryptography based on discrete\nlogarithms (RSA). 4096 exceeds all recommendations for 2017 from all\nauthorities, see\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.keylength.com/en/compare/"}),"https://www.keylength.com/en/compare/"),"."),Object(i.b)("h3",{id:"hmac-sha256"},"HMAC-SHA256"),Object(i.b)("p",null,"HMAC (FIPS 198) with SHA256 (FIPS 180-4) is used to sign access tokens,\nauthorize codes and refresh tokens. SHA-2 (with 256 bit) is encouraged by NIST,\nsee\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://csrc.nist.gov/groups/ST/hash/policy.html"}),"http://csrc.nist.gov/groups/ST/hash/policy.html")),Object(i.b)("h3",{id:"bcrypt"},"BCrypt"),Object(i.b)("p",null,"BCrypt is used to hash client credentials at rest. It is not officially\nrecommended by NIST as it is not based on hashing primitives such as SHA-2, but\nrather on Blowfish. However, BCrypt is much stronger than any other (salted)\nhashing method for passwords, has wide adoption and is an official golang/x\nlibrary."),Object(i.b)("p",null,"I recommend reading this thread on Security Stack Exchange on BCrypt, SCrypt and\nPBKDF2:\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://security.stackexchange.com/questions/4781/do-any-security-experts-recommend-bcrypt-for-password-storage"}),"https://security.stackexchange.com/questions/4781/do-any-security-experts-recommend-bcrypt-for-password-storage")),Object(i.b)("p",null,"Be aware that BCrypt causes very high CPU loads, depending on the Workload\nFactor. We strongly advise reducing the number of requests that use Basic\nAuthorization."),Object(i.b)("h2",{id:"how-does-access-control-work-with-hydra"},"How does Access Control work with Hydra?"),Object(i.b)("p",null,"Hydra supports two concepts of authorization. One is called Token Introspection\nwhich is a standard by the IETF (\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc7662"}),"https://tools.ietf.org/html/rfc7662")," ). It\nis primarily targeted at third-party services and is usually used by a\nprogrammatic API. It can be used by first-party services too. The sole purpose\nof this endpoint is to check whether an access token is valid or not."))}u.isMDXComponent=!0}}]);