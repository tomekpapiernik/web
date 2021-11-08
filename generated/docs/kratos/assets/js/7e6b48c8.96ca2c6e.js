"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[19349],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),f=s,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3863:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(87462),s=n(63366),i=(n(67294),n(3905)),o=["components"],a={id:"user-settings-profile",title:"User Profile"},l=void 0,c={unversionedId:"self-service/strategies/user-settings-profile",id:"version-v0.2/self-service/strategies/user-settings-profile",isDocsHomePage:!1,title:"User Profile",description:"The profile strategy allows a user to change their identity traits",source:"@site/versioned_docs/version-v0.2/self-service/strategies/user-settings-profile.md",sourceDirName:"self-service/strategies",slug:"/self-service/strategies/user-settings-profile",permalink:"/kratos/docs/v0.2/self-service/strategies/user-settings-profile",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.2/self-service/strategies/user-settings-profile.md",tags:[],version:"v0.2",lastUpdatedBy:"aeneasr",lastUpdatedAt:1588605498,formattedLastUpdatedAt:"5/4/2020",frontMatter:{id:"user-settings-profile",title:"User Profile"},sidebar:"version-v0.2/docs",previous:{title:"Social Sign In with OpenID Connect and OAuth2",permalink:"/kratos/docs/v0.2/self-service/strategies/openid-connect-social-sign-in-oauth2"},next:{title:"Hooks",permalink:"/kratos/docs/v0.2/self-service/hooks/index"}},u=[{value:"Browser Clients",id:"browser-clients",children:[],level:2},{value:"API Clients",id:"api-clients",children:[],level:2},{value:"Security",id:"security",children:[{value:"Account Enumeration Defenses (work in progress)",id:"account-enumeration-defenses-work-in-progress",children:[],level:3},{value:"Account Takeover Defenses",id:"account-takeover-defenses",children:[],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"profile"),' strategy allows a user to change their identity traits\n("profile").'),(0,i.kt)("p",null,"The updated traits must be valid against the JSON Schema defined for its\n",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/v0.2/concepts/identity-user-model"},"Identity Traits"),'. If one or more fields\ndo not validate (e.g. "Not an email"), the profile will not be updated.'),(0,i.kt)("p",null,"ORY Kratos will prompt the user to re-authenticate if a privileged trait (e.g.\nemail used to log in) is changed, similar to the\n",(0,i.kt)("a",{parentName:"p",href:"https://help.github.com/en/github/authenticating-to-github/sudo-mode"},"GitHub sudo mode"),"."),(0,i.kt)("p",null,'You can configure how long a session is "privileged" by setting:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml"',title:'"path/to/kratos/config.yml"'},"selfservice:\n  settings:\n    # Sessions older than a minute requires the user to sign in again before\n    # the password is changed.\n    privileged_session_max_age: 1m\n")),(0,i.kt)("p",null,"This strategy does not implement any other flow!"),(0,i.kt)("h2",{id:"browser-clients"},"Browser Clients"),(0,i.kt)("p",null,"The Settings Request payload for this strategy looks as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "9c6473d4-9ffd-44cd-9794-adb82cbe4009",\n  "expires_at": "2020-05-02T16:06:08.131598Z",\n  "issued_at": "2020-05-02T15:06:08.131599Z",\n  "request_url": "http://127.0.0.1:4433/self-service/browser/flows/settings",\n  "active": "profile",\n  "methods": {\n    "profile": {\n      "method": "profile",\n      "config": {\n        "action": "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/settings/strategies/profile?request=9c6473d4-9ffd-44cd-9794-adb82cbe4009",\n        "method": "POST",\n        "fields": [\n          {\n            "name": "csrf_token",\n            "type": "hidden",\n            "required": true,\n            "value": "HfvOBEv/D6PbXc89hsoEd0UMfZXKsvQXJzmXZJnq6BsBAwm8zbMKQF4LLZwRL67hPDlViB/qcJtu6yf+klIBeg=="\n          },\n          {\n            "name": "traits.email",\n            "type": "text",\n            "required": false,\n            "value": "xx0bdh@l7zkk8"\n          },\n          {\n            "name": "traits.website",\n            "type": "text",\n            "required": false,\n            "value": "http://github.com/aeneasr"\n          }\n        ]\n      }\n    }\n  },\n  "identity": {\n    "id": "93548b1b-c8dc-4d3e-b19f-cfc6d812a8d0",\n    "traits_schema_id": "default",\n    "traits": {\n      "email": "xx0bdh@l7zkk8",\n      "website": "http://github.com/aeneasr"\n    }\n  },\n  "update_successful": false\n}\n')),(0,i.kt)("p",null,"If the form validation fails, an error will bei included:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  id: '9c6473d4-9ffd-44cd-9794-adb82cbe4009',\n  // expires_at, ...\n  active: 'profile',\n  methods: {\n    profile: {\n      method: 'profile',\n      config: {\n        // action, ...\n        fields: [\n          // csrf_token, ...\n          {\n            name: 'traits.website',\n            type: 'text',\n            required: false,\n            value: 'http://s',\n            errors: [\n              {\n                message: 'length must be >= 10, but got 8',\n              },\n            ],\n          },\n        ],\n      },\n    },\n  },\n  // identity, ...\n  update_successful: false,\n}\n")),(0,i.kt)("p",null,"A successful flow will be marked with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  id: '9c6473d4-9ffd-44cd-9794-adb82cbe4009',\n  // expires_at, ...\n  update_successful: true,\n}\n")),(0,i.kt)("h2",{id:"api-clients"},"API Clients"),(0,i.kt)("p",null,"API-based login and registration using this strategy will be addressed in a\nfuture release of ORY Kratos."),(0,i.kt)("h2",{id:"security"},"Security"),(0,i.kt)("h3",{id:"account-enumeration-defenses-work-in-progress"},"Account Enumeration Defenses (work in progress)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This feature is a work in progress and is tracked as\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/133"},"kratos#133"),".")),(0,i.kt)("h3",{id:"account-takeover-defenses"},"Account Takeover Defenses"),(0,i.kt)("p",null,"The Settings flow implements account takeover defenses as it is not possible to\nchange the password without knowing the existing password. A good example of\nthis flow is the\n",(0,i.kt)("a",{parentName:"p",href:"https://help.github.com/en/github/authenticating-to-github/sudo-mode"},"GitHub sudo mode"),"."))}p.isMDXComponent=!0}}]);