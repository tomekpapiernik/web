(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),i=(n(0),n(413)),o={id:"ui-user-interface",title:"User Interface"},s={unversionedId:"concepts/ui-user-interface",id:"version-v0.5/concepts/ui-user-interface",isDocsHomePage:!1,title:"User Interface",description:"ORY Kratos has no user interface included. Instead, it defines HTTP flows and",source:"@site/versioned_docs/version-v0.5/concepts/ui-user-interface.md",slug:"/concepts/ui-user-interface",permalink:"/kratos/docs/concepts/ui-user-interface",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/concepts/ui-user-interface.md",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1602674546,sidebar:"version-v0.5/docs",previous:{title:"Terminology",permalink:"/kratos/docs/concepts/terminology"},next:{title:"Identity Data Model",permalink:"/kratos/docs/concepts/identity-data-model"}},l=[{value:"Administrative User Interface (Admin UI)",id:"administrative-user-interface-admin-ui",children:[]},{value:"Self-service User Interface (SSUI)",id:"self-service-user-interface-ssui",children:[]},{value:"Messages",id:"messages",children:[]}],c={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"ORY Kratos has no user interface included. Instead, it defines HTTP flows and\nAPIs that make it simple to write your own UI in a variety of languages and\nframeworks."),Object(i.b)("p",null,"The following two examples are typical UIs used in connection with ORY Kratos."),Object(i.b)("h2",{id:"administrative-user-interface-admin-ui"},"Administrative User Interface (Admin UI)"),Object(i.b)("p",null,"The AUI might show all of the identities in the system and provide features to\nadministrators such as editing profiles, resetting passwords, and so on."),Object(i.b)("p",null,"At present, there is no Open Source AUI for ORY Kratos."),Object(i.b)("h2",{id:"self-service-user-interface-ssui"},"Self-service User Interface (SSUI)"),Object(i.b)("p",null,'The SSUI renders forms such as "Login", "Registration", "Update your profile",\n"Recover access to your account", and others. The following provides more\nreference for SSUI at\n',Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ory/kratos-selfservice-ui-node"}),"github.com/ory/kratos-selfservice-ui-node"),"."),Object(i.b)("p",null,"The SSUI can be built in any programming language including Java, Node, or\nPython and can be run both a server or a end-user device for example a browser,\nor a mobile phone. Implementing a SSUI is simple and straight forward. There is\nno complex authentication mechanism required and no need to worry about possible\nattack vectors such as CSRF or Session Attacks since ORY Kratos provides the\npreventive measures built in."),Object(i.b)("p",null,"Chapter ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../self-service"}),"Self-Service Flows")," contains further information on\nAPIs and flows related to the SSUI, and build self service applications."),Object(i.b)("h2",{id:"messages"},"Messages"),Object(i.b)("p",null,'ORY Kratos helps users understand what is happening by providing messages that\nexplain what went wrong or what needs to be done. Examples are "The provided\ncredentials are invalid", "Missing property email" and similar.'),Object(i.b)("p",null,"Typically login, registration, settings, ... flows include such messages on\ndifferent levels:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"At the root level, indicating that the message affects the whole request\n(e.g. request expired)"),Object(i.b)("li",{parentName:"ol"},"At the method (password, oidc, profile) level, indicating that the message\naffects a specific method / form."),Object(i.b)("li",{parentName:"ol"},"At the field level, indicating that the message affects a form field (e.g.\nvalidation errors).")),Object(i.b)("p",null,"Each message has a layout of:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json5"}),"{\n  id: 1234, // This ID will not change and can be used to translate the message or use your own message content.\n  text: 'Some default text', // A default text in english that you can display if you do not want to customize the message.\n  context: {} // A JSON object which may contain additional fields such as `expires_at`. This is helpful if you want to craft your own messages.\n}\n")),Object(i.b)("p",null,"We will list all messages, their contents, their contexts, and their IDs at a\nlater stage. For now please check out the code in the\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ory/kratos/tree/master/text"}),"text module"),"."),Object(i.b)("p",null,"The message ID is a 7-digit number (",Object(i.b)("inlineCode",{parentName:"p"},"xyyzzzz"),") where"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"x")," is the message type which is either ",Object(i.b)("inlineCode",{parentName:"li"},"1")," for an info message (e.g.\n",Object(i.b)("inlineCode",{parentName:"li"},"1020000"),"), ",Object(i.b)("inlineCode",{parentName:"li"},"4")," (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"4020000"),") for an input validation error message, and\n",Object(i.b)("inlineCode",{parentName:"li"},"5")," (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"5020000"),") for a generic error message."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"yy")," is the module or flow this error references and can be:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"01")," for login messages (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"1010000"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"02")," for logout messages (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"1020000"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"03")," for multi-factor authentication messages (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"1030000"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"04")," for registration messages (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"1040000"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"05")," for settings messages (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"1050000"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"06")," for account recovery messages (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"1060000"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"07")," for email/phone verification messages (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"1070000"),")"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"zzzz")," is the message ID and typically starts at ",Object(i.b)("inlineCode",{parentName:"li"},"0001"),". For example, message\nID ",Object(i.b)("inlineCode",{parentName:"li"},"4070001")," (",Object(i.b)("inlineCode",{parentName:"li"},"4")," for input validation error, ",Object(i.b)("inlineCode",{parentName:"li"},"07")," for verification, ",Object(i.b)("inlineCode",{parentName:"li"},"0001"),"\nfor the concrete message) is:\n",Object(i.b)("inlineCode",{parentName:"li"},"The verification code has expired or was otherwise invalid. Please request another code."),".")))}d.isMDXComponent=!0},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,m=p["".concat(o,".").concat(u)]||p[u]||b[u]||i;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);