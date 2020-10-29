(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(413)),o={id:"account-activation-email-verification",title:"Setting up Account Activation and E-Mail Verification"},c={unversionedId:"guides/account-activation-email-verification",id:"version-v0.5/guides/account-activation-email-verification",isDocsHomePage:!1,title:"Setting up Account Activation and E-Mail Verification",description:"To set up email verification, your",source:"@site/versioned_docs/version-v0.5/guides/account-activation-email-verification.mdx",slug:"/guides/account-activation-email-verification",permalink:"/kratos/docs/guides/account-activation-email-verification",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/guides/account-activation-email-verification.mdx",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1602674546,sidebar:"version-v0.5/docs",previous:{title:"Setting up Account Recovery and Password Reset",permalink:"/kratos/docs/guides/account-recovery-password-reset"},next:{title:"Zero Trust with IAP Proxy",permalink:"/kratos/docs/guides/zero-trust-iap-proxy-identity-access-proxy"}},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To set up email verification, your\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/kratos/docs/concepts/identity-data-model"}),"Identity JSON Schema")," must have an email in\nits traits and add"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "ory.sh/kratos": {\n    "verification": {\n      "via": "email"\n    }\n  }\n}\n')),Object(i.b)("p",null,"to it, for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),'{\n  "$id": "https://schemas.ory.sh/presets/kratos/quickstart/email-password/identity.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "email": {\n          "type": "string",\n          "format": "email",\n          "title": "E-Mail",\n          "minLength": 3,\n+         "ory.sh/kratos": {\n+           "verification": {\n+             "via": "email"\n+           }\n+         }\n        }\n      }\n    }\n  }\n}\n')),Object(i.b)("p",null,"Email verification currently supports sending out a recovery link to an email\naddress. For this to work, you must have the courier SMTP connection configured\nin your ORY Kratos Config File (",Object(i.b)("inlineCode",{parentName:"p"},"kratos serve -c /home/kratos/.kratos.yml"),"):"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"})," # ORY Kratos Config File\n+courier:\n+  smtp:\n+    connection_uri: smtps://username:password@smtp-server:1234/\n # ...\n")),Object(i.b)("p",null,"You also need to enable verification:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"})," selfservice:\n   flows:\n     # login ...\n     # registration...\n\n+    verification:\n+      enabled: true\n+      ui_url: http://127.0.0.1:4455/verify\n\n # ...\n")),Object(i.b)("p",null,"That all that's needed! For more information on implementing the UI and details\nabout the payloads, head over to the\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/kratos/docs/self-service/flows/verify-email-account-activation"}),"Email and Phone Verification and Account Activation Documentation"),"!"))}u.isMDXComponent=!0},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);