"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[82707],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),f=c(n),p=o,h=f["".concat(l,".").concat(p)]||f[p]||u[p]||i;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},23721:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return f}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],a={id:"after",title:"After Jobs"},l=void 0,c={unversionedId:"self-service/workflows/jobs/after",id:"version-v0.1/self-service/workflows/jobs/after",isDocsHomePage:!1,title:"After Jobs",description:"User Login",source:"@site/versioned_docs/version-v0.1/self-service/workflows/jobs/after.md",sourceDirName:"self-service/workflows/jobs",slug:"/self-service/workflows/jobs/after",permalink:"/kratos/docs/v0.1/self-service/workflows/jobs/after",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.1/self-service/workflows/jobs/after.md",tags:[],version:"v0.1",lastUpdatedBy:"hackerman",lastUpdatedAt:1586177162,formattedLastUpdatedAt:"4/6/2020",frontMatter:{id:"after",title:"After Jobs"},sidebar:"version-v0.1/docs",previous:{title:"Before Jobs",permalink:"/kratos/docs/v0.1/self-service/workflows/jobs/before"},next:{title:"Configuration",permalink:"/kratos/docs/v0.1/reference/configuration"}},d=[{value:"User Login",id:"user-login",children:[{value:"<code>session</code>",id:"session",children:[],level:3},{value:"<code>redirect</code>",id:"redirect",children:[],level:3},{value:"<code>revoke_active_sessions</code>",id:"revoke_active_sessions",children:[],level:3}],level:2},{value:"User Registration",id:"user-registration",children:[{value:"<code>session</code>",id:"session-1",children:[],level:3},{value:"<code>redirect</code>",id:"redirect-1",children:[],level:3}],level:2}],u={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"user-login"},"User Login"),(0,i.kt)("p",null,"Jobs running after successful user authentication can be defined per\nSelf-Service Login Strategy in ORY Kratos' configuration file, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"selfservice:\n  login:\n    after:\n      passwordless:\n        - job: redirect\n          config:\n            redirect_to: https://url-to-redirect/to\n      oidc:\n        - job: redirect\n          config:\n            redirect_to: https://url-to-redirect/to\n      password:\n        - job: redirect\n          config:\n            redirect_to: https://url-to-redirect/to\n")),(0,i.kt)("h3",{id:"session"},(0,i.kt)("inlineCode",{parentName:"h3"},"session")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"session")," job will send a ",(0,i.kt)("inlineCode",{parentName:"p"},"Set-Cookie")," header which contains the session\ncookie. To use it, you must first define one or more (for secret rotation)\nsession secrets and then use it in one of the ",(0,i.kt)("inlineCode",{parentName:"p"},"after")," work flows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'secrets:\n  session:\n    - something-super-secret # The first entry will be used to sign and verify session cookies\n\n    # All other entries will be used to verify session cookies that were signed before "something-super-secret" became\n    # the current signing secret.\n    - old-session-secret\n    - older-session-secret\n    - ancient-session-secret\n\nselfservice:\n  registration:\n    after:\n      <strategy>:\n        - job: session\n          # can not be configured\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This job is required for login to work, otherwise no session will be created.")),(0,i.kt)("h3",{id:"redirect"},(0,i.kt)("inlineCode",{parentName:"h3"},"redirect")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect")," job will send a HTTP 302 Found response and redirect the client\nto the specified endpoint. There are two configuration options available:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"selfservice:\n  login:\n    after:\n      <strategy>:\n        - job: redirect\n          config:\n            # redirect_to sets the URL the client will be redirected to.\n            redirect_to: https://url-to-redirect/to\n\n            # allow_user_defined, if enabled, will check for a `?return_to` query parameter in the original request URL.\n            # If the parameter is set and the URL is whitelisted in `urls.whitelisted_return_to_domains`\n            allow_user_defined: true\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It is highly recommended to set up a redirect job after login, otherwise the\nuser might get stuck on an empty, white screen.")),(0,i.kt)("h3",{id:"revoke_active_sessions"},(0,i.kt)("inlineCode",{parentName:"h3"},"revoke_active_sessions")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"revoke_active_sessions")," will delete all active sessions for that user on\nsuccessful login:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"selfservice:\n  login:\n    after:\n      <strategy>:\n        - job: revoke_active_sessions\n          # can not be configured\n")),(0,i.kt)("h2",{id:"user-registration"},"User Registration"),(0,i.kt)("p",null,"Jobs running after successful user registration can be defined per Self-Service\nRegistration Strategy in ORY Kratos' configuration file, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"selfservice:\n  registration:\n    after:\n      passwordless:\n        - job: redirect\n          config:\n            redirect_to: https://url-to-redirect/to\n      oidc:\n        - job: redirect\n          config:\n            redirect_to: https://url-to-redirect/to\n      password:\n        - job: redirect\n          config:\n            redirect_to: https://url-to-redirect/to\n")),(0,i.kt)("h3",{id:"session-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"session")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"session")," job will send a ",(0,i.kt)("inlineCode",{parentName:"p"},"Set-Cookie")," header which contains the session\ncookie. To use it, you must first define one or more (for secret rotation)\nsession secrets and then use it in one of the ",(0,i.kt)("inlineCode",{parentName:"p"},"after")," work flows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'secrets:\n  session:\n    - something-super-secret # The first entry will be used to sign and verify session cookies\n\n    # All other entries will be used to verify session cookies that were signed before "something-super-secret" became\n    # the current signing secret.\n    - old-session-secret\n    - older-session-secret\n    - ancient-session-secret\n\nselfservice:\n  registration:\n    after:\n      <strategy>:\n        - job: session\n          # can not be configured\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"session")," job is useful if you want users to be signed in immediately after\nregistration, without further account activation or an additional login flow."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Using this job as part of your post-registration workflow makes your system\nvulnerable to\n",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/v0.1/concepts/security#account-enumeration-attacks"},"Account Enumeration Attacks"),"\nbecause a threat agent can distinguish between existing and non-existing\naccounts by checking if ",(0,i.kt)("inlineCode",{parentName:"p"},"Set-Cookie")," was sent as part of the registration\nresponse.")),(0,i.kt)("h3",{id:"redirect-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"redirect")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect")," job will send a HTTP 302 Found response and redirect the client\nto the specified endpoint. There are two configuration options available:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"selfservice:\n  registration:\n    after:\n      <strategy>:\n        - job: redirect\n          config:\n            # redirect_to sets the URL the client will be redirected to.\n            redirect_to: https://url-to-redirect/to\n\n            # allow_user_defined, if enabled, will check for a `?return_to` query parameter in the original request URL.\n            # If the parameter is set and the URL is whitelisted in `urls.whitelisted_return_to_domains`\n            allow_user_defined: true\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It is highly recommended to set up a redirect job after registration,\notherwise the user might get stuck on an empty, white screen.")))}f.isMDXComponent=!0}}]);