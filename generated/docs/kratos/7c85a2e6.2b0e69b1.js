(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{239:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),r=(n(0),n(440)),o={id:"hooks",title:"Hooks"},s={unversionedId:"self-service/hooks",id:"self-service/hooks",isDocsHomePage:!1,title:"Hooks",description:"Hooks execute logic after a flow (login, registration, settings, ...):",source:"@site/docs/self-service/hooks.mdx",slug:"/self-service/hooks",permalink:"/kratos/docs/next/self-service/hooks",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/self-service/hooks.mdx",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1600065426,sidebar:"docs",previous:{title:"MFA / 2FA",permalink:"/kratos/docs/next/self-service/flows/2fa-mfa-multi-factor-authentication"},next:{title:"Managing Users and Identities",permalink:"/kratos/docs/next/admin/managing-users-identities"}},c=[{value:"Login",id:"login",children:[{value:"After",id:"after",children:[]}]},{value:"Registration",id:"registration",children:[{value:"After",id:"after-1",children:[]},{value:"Registration Flow via Browser",id:"registration-flow-via-browser",children:[]},{value:"Registration Flow via API",id:"registration-flow-via-api",children:[]}]},{value:"Settings",id:"settings",children:[{value:"After",id:"after-2",children:[]}]}],l={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Hooks execute logic after a flow (login, registration, settings, ...):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"After login:")," is executed after a login was successful."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"After registration:")," is executed when a registration was successful:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Before persisting:")," runs before the identity is saved in the database."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"After persisting:")," runs after the identity was saved in the database."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"After settings:")," is executed when a settings was successful:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Before persisting:")," runs before the identity is saved in the database."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"After persisting:")," runs after the identity was saved in the database.")))),Object(r.b)("h2",{id:"login"},"Login"),Object(r.b)("h3",{id:"after"},"After"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  flows:\n    login:\n      after:\n        password:\n          - hook: revoke_active_sessions\n")),Object(r.b)("h4",{id:"revoke_active_sessions"},Object(r.b)("inlineCode",{parentName:"h4"},"revoke_active_sessions")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"revoke_active_sessions")," will delete all active sessions for that user on\nsuccessful login:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  flows:\n    login:\n      after:\n        <method>:\n          - hook: revoke_active_sessions\n            # can not be configured\n")),Object(r.b)("h2",{id:"registration"},"Registration"),Object(r.b)("p",null,"Hooks running after successful user registration are defined per Self-Service\nRegistration Method in ORY Kratos' configuration file."),Object(r.b)("h3",{id:"after-1"},"After"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  flows:\n    registration:\n      after:\n        oidc:\n          - hook: session\n        password:\n          - hook: session\n")),Object(r.b)("h4",{id:"session"},Object(r.b)("inlineCode",{parentName:"h4"},"session")),Object(r.b)("p",null,"Adding the ",Object(r.b)("inlineCode",{parentName:"p"},"session")," hook signs the user immediately in once the account has\nbeen created. It runs after the identity has been saved to the database."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Using this job as part of your post-registration workflow makes your system\nvulnerable to\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/concepts/security#account-enumeration-attacks"}),"Account Enumeration Attacks"),"\nbecause a threat agent can distinguish between existing and non-existing\naccounts by checking if ",Object(r.b)("inlineCode",{parentName:"p"},"Set-Cookie")," was sent as part of the registration\nresponse."))),Object(r.b)("p",null,'To use this hook, you must first define one or more (for secret rotation)\nsecrets. You can either choose to use the "default" secrets or the more specific\n"cookie" secrets. The other required config is setting the hook in ',Object(r.b)("inlineCode",{parentName:"p"},"after")," work\nflows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),'secrets:\n  cookie:\n    - something-super-secret # The first entry will be used to sign and verify session cookies\n\n    # All other entries will be used to verify session cookies that were signed before "something-super-secret" became\n    # the current signing secret.\n    - old-session-secret\n    - older-session-secret\n    - ancient-session-secret\n\nselfservice:\n  flows:\n    registration:\n      after:\n        <method>:\n          - hook: session\n            # can not be configured\n')),Object(r.b)("p",null,"Depending on the registration flow type the behavior changes."),Object(r.b)("h3",{id:"registration-flow-via-browser"},"Registration Flow via Browser"),Object(r.b)("p",null,"When performing a registration flow with a Browser, this hook sends a\n",Object(r.b)("inlineCode",{parentName:"p"},"Set-Cookie")," HTTP header which contains the session cookie."),Object(r.b)("p",null,"Therefore, the user is logged in immediately."),Object(r.b)("h3",{id:"registration-flow-via-api"},"Registration Flow via API"),Object(r.b)("p",null,"When performing a registration flow with an API client (e.g. mobile apo), this\nhook creates a session and returns the session token and the session itself in\nthe response body as application/json:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "session": {\n    "id": "..."\n    // ...\n  },\n  "session_token": "...",\n  "identity": {\n    "id": "..."\n    // ...\n  }\n}\n')),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Because the HTTP reply is handled by the hook itself, no other hooks can be\nexecuted because the HTTP reply can not be modified further (e.g. HTTP Status\nCode was already sent as 200 and cannot be changed to 301). You must ensure that\nthe session hook is the last hook in your configuration!"))),Object(r.b)("h2",{id:"settings"},"Settings"),Object(r.b)("p",null,"Hooks running after successfully updating user settings and are defined per\nSelf-Service Settings Method in ORY Kratos' configuration file."),Object(r.b)("h3",{id:"after-2"},"After"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  flows:\n    settings:\n      after:\n")),Object(r.b)("p",null,"No hooks are available for this flow at the moment."))}b.isMDXComponent=!0},440:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||r;return n?i.a.createElement(m,s(s({ref:t},l),{},{components:n})):i.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);