(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),s=n(9),i=(n(0),n(221)),a={id:"user-settings-profile",title:"User Profile"},o={id:"self-service/strategies/user-settings-profile",title:"User Profile",description:"The `profile` strategy allows a user to change their identity traits",source:"@site/docs/self-service/strategies/user-settings-profile.md",permalink:"/kratos/docs/next/self-service/strategies/user-settings-profile",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/self-service/strategies/user-settings-profile.md",version:"next",lastUpdatedBy:"hackerman",lastUpdatedAt:1588432565,sidebar:"docs",previous:{title:"Social Sign In with OpenID Connect and OAuth2",permalink:"/kratos/docs/next/self-service/strategies/openid-connect-social-sign-in-oauth2"},next:{title:"Hooks",permalink:"/kratos/docs/next/self-service/hooks/index"}},c=[{value:"Browser Clients",id:"browser-clients",children:[]},{value:"API Clients",id:"api-clients",children:[]},{value:"Security",id:"security",children:[{value:"Account Enumeration Defenses (work in progress)",id:"account-enumeration-defenses-work-in-progress",children:[]},{value:"Account Takeover Defenses",id:"account-takeover-defenses",children:[]}]}],l={rightToc:c};function u(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"profile"),' strategy allows a user to change their identity traits\n("profile").'),Object(i.b)("p",null,"The updated traits must be valid against the JSON Schema defined for its\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/kratos/docs/next/concepts/identity-user-model"}),"Identity Traits"),'. If one or more fields\ndo not validate (e.g. "Not an email"), the profile will not be updated.'),Object(i.b)("p",null,"ORY Kratos will prompt the user to re-authenticate if a privileged trait (e.g.\nemail used to log in) is changed, similar to the\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://help.github.com/en/github/authenticating-to-github/sudo-mode"}),"GitHub sudo mode"),"."),Object(i.b)("p",null,'You can configure how long a session is "privileged" by setting:'),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/kratos/config.yml"',title:'"path/to/kratos/config.yml"'}),"selfservice:\n  settings:\n    # Sessions older than a minute requires the user to sign in again before\n    # the password is changed.\n    privileged_session_max_age: 1m\n")),Object(i.b)("p",null,"This strategy does not implement any other flow!"),Object(i.b)("h2",{id:"browser-clients"},"Browser Clients"),Object(i.b)("p",null,"The Settings Request payload for this strategy looks as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "9c6473d4-9ffd-44cd-9794-adb82cbe4009",\n  "expires_at": "2020-05-02T16:06:08.131598Z",\n  "issued_at": "2020-05-02T15:06:08.131599Z",\n  "request_url": "http://127.0.0.1:4433/self-service/browser/flows/settings",\n  "active": "profile",\n  "methods": {\n    "profile": {\n      "method": "profile",\n      "config": {\n        "action": "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/settings/strategies/profile?request=9c6473d4-9ffd-44cd-9794-adb82cbe4009",\n        "method": "POST",\n        "fields": [\n          {\n            "name": "csrf_token",\n            "type": "hidden",\n            "required": true,\n            "value": "HfvOBEv/D6PbXc89hsoEd0UMfZXKsvQXJzmXZJnq6BsBAwm8zbMKQF4LLZwRL67hPDlViB/qcJtu6yf+klIBeg=="\n          },\n          {\n            "name": "traits.email",\n            "type": "text",\n            "required": false,\n            "value": "xx0bdh@l7zkk8"\n          },\n          {\n            "name": "traits.website",\n            "type": "text",\n            "required": false,\n            "value": "http://github.com/aeneasr"\n          }\n        ]\n      }\n    }\n  },\n  "identity": {\n    "id": "93548b1b-c8dc-4d3e-b19f-cfc6d812a8d0",\n    "traits_schema_id": "default",\n    "traits": {\n      "email": "xx0bdh@l7zkk8",\n      "website": "http://github.com/aeneasr"\n    }\n  },\n  "update_successful": false\n}\n')),Object(i.b)("p",null,"If the form validation fails, an error will bei included:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json5"}),"{\n  id: '9c6473d4-9ffd-44cd-9794-adb82cbe4009',\n  // expires_at, ...\n  active: 'profile',\n  methods: {\n    profile: {\n      method: 'profile',\n      config: {\n        // action, ...\n        fields: [\n          // csrf_token, ...\n          {\n            name: 'traits.website',\n            type: 'text',\n            required: false,\n            value: 'http://s',\n            errors: [\n              {\n                message: 'length must be >= 10, but got 8',\n              },\n            ],\n          },\n        ],\n      },\n    },\n  },\n  // identity, ...\n  update_successful: false,\n}\n")),Object(i.b)("p",null,"A successful flow will be marked with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json5"}),"{\n  id: '9c6473d4-9ffd-44cd-9794-adb82cbe4009',\n  // expires_at, ...\n  update_successful: true,\n}\n")),Object(i.b)("h2",{id:"api-clients"},"API Clients"),Object(i.b)("p",null,"API-based login and registration using this strategy will be addressed in a\nfuture release of ORY Kratos."),Object(i.b)("h2",{id:"security"},"Security"),Object(i.b)("h3",{id:"account-enumeration-defenses-work-in-progress"},"Account Enumeration Defenses (work in progress)"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This feature is a work in progress and is tracked as\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ory/kratos/issues/133"}),"kratos#133"),".")),Object(i.b)("h3",{id:"account-takeover-defenses"},"Account Takeover Defenses"),Object(i.b)("p",null,"The Settings flow implements account takeover defenses as it is not possible to\nchange the password without knowing the existing password. A good example of\nthis flow is the\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://help.github.com/en/github/authenticating-to-github/sudo-mode"}),"GitHub sudo mode"),"."))}u.isMDXComponent=!0},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),s=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),u=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},d=function(e){var t=u(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,f=d["".concat(a,".").concat(b)]||d[b]||p[b]||i;return n?s.a.createElement(f,o({ref:t},l,{components:n})):s.a.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var l=2;l<i;l++)a[l]=n[l];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);