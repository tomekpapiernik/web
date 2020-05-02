(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(221)),s={id:"index",title:"Before you start reading"},i={id:"self-service/index",title:"Before you start reading",description:"ORY Kratos implements flows that users perform themselves as opposed to",source:"@site/docs/self-service/index.md",permalink:"/kratos/docs/next/self-service/index",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/self-service/index.md",version:"next",lastUpdatedBy:"hackerman",lastUpdatedAt:1588432565,sidebar:"docs",previous:{title:"Threat Models and Security Profiles",permalink:"/kratos/docs/next/concepts/security"},next:{title:"Overview",permalink:"/kratos/docs/next/self-service/flows/index"}},c=[],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"ORY Kratos implements flows that users perform themselves as opposed to\nadministrative intervention. Facebook and Google both provide self-service\nregistration and profile management features as you are able to make changes to\nyour profile and sign up yourself."),Object(o.b)("p",null,"Most believe that user management systems are easy to implement because picking\nthe right password hashing algorithm and sending an account verification code is\na solvable challenge. The real complexity however hides in the details and\nattack vectors of self-service flows. Most data leaks happen because someone is\nable to exploit"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"registration: with attack vectors such as account enumeration (), ...;"),Object(o.b)("li",{parentName:"ul"},"login: phishing, account enumeration, leaked password databases, brute-force,\n...;"),Object(o.b)("li",{parentName:"ul"},"user settings: account enumeration, account takeover, ...;"),Object(o.b)("li",{parentName:"ul"},"account recovery: social engineering attacks, account takeover, spoofing, and\nso on.")),Object(o.b)("p",null,"ORY Kratos applies best practices established by experts (National Institute of\nSciences NIST, Internet Engineering Task Force IETF, Microsoft Research, Google\nResearch, Troy Hunt, ...) and implements the following flows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/kratos/docs/next/self-service/flows/user-login-user-registration"}),"Login and Registration")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/kratos/docs/next/self-service/flows/user-logout"}),"Logout")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/kratos/docs/next/self-service/flows/user-settings-profile-management"}),"User Settings")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/kratos/docs/next/self-service/flows/password-reset-account-recovery"}),"Account Recovery")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/kratos/docs/next/self-service/flows/verify-email-account-activation"}),"Address Verification")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/kratos/docs/next/self-service/flows/user-facing-errors"}),"User-Facing Error")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/kratos/docs/next/self-service/flows/2fa-mfa-multi-factor-authentication"}),"2FA / MFA"))),Object(o.b)("p",null,"Some flows break down into strategies which implement some of the flow's\nbusiness logic:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/kratos/docs/next/self-service/strategies/username-email-password"}),"Password Strategy"),' implements\nlogin and registration flows (with email/username and password), account\nrecovery flows ("reset your password"), and user settings flows ("change your\npassword").'),Object(o.b)("li",{parentName:"ul"},"The\n",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/kratos/docs/next/self-service/strategies/openid-connect-social-sign-in-oauth2"}),"OpenID Connect Strategy"),'\nimplements login and registration flows (with email/username and password),\nand user settings flows ("un/link another social account").'),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"strategies/profile.md"}),"Profile Strategy"),' implement the settings flow\n("change your first/last name, ...").')),Object(o.b)("p",null,"Some flows additionally implement the ability ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:""}),"to run hooks")," which allow users\nto be immediately signed in after registration, notify another system on\nsuccessful registration (e.g. Mailchimp)."))}u.isMDXComponent=!0},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(s,".").concat(f)]||p[f]||b[f]||o;return n?a.a.createElement(m,i({ref:t},l,{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);