"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[90652],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82504:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={id:"index",slug:"/",title:"Introduction"},l=void 0,c={unversionedId:"index",id:"version-v0.4/index",isDocsHomePage:!1,title:"Introduction",description:"ORY Kratos is an API-first Identity and User Management system that is built",source:"@site/versioned_docs/version-v0.4/index.md",sourceDirName:".",slug:"/",permalink:"/kratos/docs/v0.4/",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/index.md",tags:[],version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601453645,formattedLastUpdatedAt:"9/30/2020",frontMatter:{id:"index",slug:"/",title:"Introduction"},sidebar:"version-v0.4/docs",next:{title:"Quickstart",permalink:"/kratos/docs/v0.4/quickstart"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ORY Kratos is an API-first Identity and User Management system that is built\naccording to\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ory.sh/docs/ecosystem/software-architecture-philosophy/"},"cloud architecture best practices"),".\nIt implements core use cases that almost every software application needs to\ndeal with:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Self-service Login and Registration"),": Allow end-users to create and sign\ninto accounts (we call them ",(0,o.kt)("strong",{parentName:"li"},"identities"),') using Username / Email and\npassword combinations, Social Sign In ("Sign in with Google, GitHub"),\nPasswordless flows, and others.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Multi-Factor Authentication (MFA/2FA)"),": Support protocols such as TOTP\n(",(0,o.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc6238"},"RFC 6238")," and\n",(0,o.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc4226"},"IETF RFC 4226")," - better known as\n",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Google_Authenticator"},"Google Authenticator"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Account Verification"),": Verify that an E-Mail address, phone number, or\nphysical address actually belong to that identity."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Account Recovery"),': Recover access using "Forgot Password" flows, Security\nCodes (in case of MFA device loss), etc.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Profile and Account Management"),": Update passwords, personal details, email\naddresses, linked social profiles using secure flows."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Admin APIs"),": Import, update, delete identities.")),(0,o.kt)("p",null,"Identity is a hard problem and ORY Kratos solves it in a unique way. We value\nsecurity, flexibility, and integration with cloud technology (such as\nKubernetes) most:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ORY Kratos does not ship an HTML Rendering Engine. You can build your own UI\n(or use our example UIs) in the language and framework you feel most\ncomfortable with."),(0,o.kt)("li",{parentName:"ul"},"The workflow engine allows you to fully customize your user experience. Whether\nyour users need to activate their account after registration, or have a\nmulti-step (progressive) registration - it's all possible!"),(0,o.kt)("li",{parentName:"ul"},"One Identity Data Model does not fit all - you may have customers that need a\nbilling address, internal support staff that is assigned to a cost center, and\nthat smart fridge on floor 4. You can express the different data models using\n",(0,o.kt)("a",{parentName:"li",href:"https://json-schema.org/"},"JSON Schema")," and make the system work for you - not\nthe other way around.")),(0,o.kt)("p",null,"To learn more about what's different and how ORY Kratos compares to other open\nsource solutions, head over to ",(0,o.kt)("a",{parentName:"p",href:"/kratos/docs/v0.4/concepts/index"},"Concepts")," and\n",(0,o.kt)("a",{parentName:"p",href:"/kratos/docs/v0.4/further-reading/comparison"},"Comparison"),"."),(0,o.kt)("p",null,"ORY Kratos isn't just about features; it stands out because it runs on any\noperating system (Linux, macOS, Windows) and on most processors (i386, amd64,\narm, etc.). The compiled binary has ",(0,o.kt)("em",{parentName:"p"},"no system or library or file dependencies"),"\nand can be run as a single, static binary on top of, for example, a raw Linux\nkernel. The binary and Docker image are each less than 20MB in size."),(0,o.kt)("p",null,"ORY Kratos scales horizontally without effort. The only external dependency is\nan RDBMS - we currently support SQLite, PostgreSQL, MySQL, CockroachDB. You will\nnot need memcached, etcd, or any other system to scale ORY Kratos."),(0,o.kt)("p",null,"We believe in strong separation of concerns, which is a guiding principle in the\ndesign of each ORY project. As such, we build software that solves specific\nproblems very well and offloads adjacent issues (such as a user interface) to\nother applications."))}d.isMDXComponent=!0}}]);