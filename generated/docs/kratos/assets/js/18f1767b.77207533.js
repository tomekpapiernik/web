"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[10537],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),u=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=n,h=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return r?o.createElement(h,s(s({ref:t},l),{},{components:r})):o.createElement(h,s({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var u=2;u<a;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},92395:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var o=r(87462),n=r(63366),a=(r(67294),r(3905)),s=["components"],c={id:"look-up-secrets",title:"Look-up Secrets and Recovery Codes"},i=void 0,u={unversionedId:"concepts/authenticators/look-up-secrets",id:"version-v0.6/concepts/authenticators/look-up-secrets",isDocsHomePage:!1,title:"Look-up Secrets and Recovery Codes",description:"Google Authenticator Backup Codes",source:"@site/versioned_docs/version-v0.6/concepts/authenticators/look-up-secrets.mdx",sourceDirName:"concepts/authenticators",slug:"/concepts/authenticators/look-up-secrets",permalink:"/kratos/docs/v0.6/concepts/authenticators/look-up-secrets",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/concepts/authenticators/look-up-secrets.mdx",tags:[],version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619690398,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"look-up-secrets",title:"Look-up Secrets and Recovery Codes"}},l=[{value:"Resilient to Offline Attacks",id:"resilient-to-offline-attacks",children:[],level:2}],p={toc:l};function f(e){var t=e.components,c=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Google Authenticator Backup Codes",src:r(82514).Z})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'A look-up secret authenticator is a physical or electronic record that stores\na set of secrets shared between the claimant and the CSP. The claimant uses\nthe authenticator to look up the appropriate secret(s) needed to respond to a\nprompt from the verifier. For example, the verifier may ask a claimant to\nprovide a specific subset of the numeric or character strings printed on a\ncard in table format. A common application of look-up secrets is the use of\n"recovery keys" stored by the subscriber for use in the event another\nauthenticator is lost or malfunctions. A look-up secret is something you\nhave. -\n',(0,a.kt)("a",{parentName:"p",href:"https://pages.nist.gov/800-63-3/sp800-63b.html#-512-look-up-secrets"},"Source"))),(0,a.kt)("h2",{id:"resilient-to-offline-attacks"},"Resilient to Offline Attacks"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Verifiers SHALL store look-up secrets in a form that is resistant to offline\nattacks. Look-up secrets having at least 112 bits of entropy SHALL be hashed\nwith an approved one-way function as described in Section 5.1.1.2. Look-up\nsecrets with fewer than 112 bits of entropy SHALL be salted and hashed using a\nsuitable one-way key derivation function, also described in Section 5.1.1.2.\nThe salt value SHALL be at least 32 in bits in length and arbitrarily chosen\nso as to minimize salt value collisions among stored hashes. Both the salt\nvalue and the resulting hash SHALL be stored for each look-up secret. -\n",(0,a.kt)("a",{parentName:"p",href:"https://pages.nist.gov/800-63-3/sp800-63b.html#5122-look-up-secret-verifiers"},"Source"))))}f.isMDXComponent=!0},82514:function(e,t,r){t.Z=r.p+"assets/images/google-authenticator-backup-codes-ca3b77648bc2932ee1f5e96633640ae3.png"}}]);