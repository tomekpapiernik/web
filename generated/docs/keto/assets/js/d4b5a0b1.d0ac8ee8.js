(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(8),r=(n(0),n(198)),c=n(199),s={title:"Namespaces"},i={unversionedId:"concepts/namespaces",id:"version-v0.6/concepts/namespaces",isDocsHomePage:!1,title:"Namespaces",description:"RelationTuplePrism()",source:"@site/versioned_docs/version-v0.6/concepts/namespaces.mdx",sourceDirName:"concepts",slug:"/concepts/namespaces",permalink:"/keto/docs/concepts/namespaces",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.6/concepts/namespaces.mdx",version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1617730042,formattedLastUpdatedAt:"4/6/2021",frontMatter:{title:"Namespaces"},sidebar:"version-v0.6/docs",previous:{title:"Relation Tuples",permalink:"/keto/docs/concepts/relation-tuples"},next:{title:"Objects",permalink:"/keto/docs/concepts/objects"}};Object(c.a)();var p=[{value:"Scoping of Objects",id:"scoping-of-objects",children:[]},{value:"Migrations",id:"migrations",children:[]},{value:"Naming Conventions",id:"naming-conventions",children:[]}],l={toc:p};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Ory Keto knows the concept of namespaces to organize\n",Object(r.b)("a",{parentName:"p",href:"/keto/docs/concepts/relation-tuples"},"relation tuples"),". Namespaces have a configuration that\ndefines the relations, and some other important values\n(",Object(r.b)("a",{parentName:"p",href:"/keto/docs/reference/configuration"},"see reference"),"). Unlike other applications, Ory\nKeto does ",Object(r.b)("strong",{parentName:"p"},"not")," isolate namespaces. Especially, ",Object(r.b)("a",{parentName:"p",href:"/keto/docs/concepts/subjects"},"subject sets"),"\ncan cross-reference from one namespace to another. The namespaces' purpose is to\nsplit up the data into coherent partitions, each with its corresponding\nconfiguration. Internally each namespace has its own table in the database to\nallow setting individual\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/ory/keto/issues/303"},"storage specific options"),"."),Object(r.b)("h2",{id:"scoping-of-objects"},"Scoping of Objects"),Object(r.b)("p",null,"The application can also use namespaces to scope ",Object(r.b)("a",{parentName:"p",href:"/keto/docs/concepts/objects"},"objects"),"\nbecause Ory Keto only compares objects within a namespace. For example, if Ory\nKeto knows the following relation tuples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"// user1 has acces to the directory foo\ndirectories:foo#access@user1\n// user2 has access to the file foo\nfiles:foo#access@user2\n")),Object(r.b)("p",null,"both of the following ",Object(r.b)("a",{parentName:"p",href:"/keto/docs/concepts/api-overview#check-relation-tuples"},"check")," requests"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"// Does user2 have access to the directory foo?\ndirectories:foo#access@user2\n// Does user1 have access to the file foo?\nfiles:foo#access@user1\n")),Object(r.b)("p",null,"will evaluate to false (a.k.a. rejected)."),Object(r.b)("p",null,"Vice versa, all relation tuples containing an object have to be in the same\nnamespace to reference the same object."),Object(r.b)("h2",{id:"migrations"},"Migrations"),Object(r.b)("p",null,"Because namespaces each come with an individual configuration that can even\nmodify some storage specific options, it is required to manually review and run\nmigrations on namespace configuration updates. Please refer to the\n",Object(r.b)("a",{parentName:"p",href:"/keto/docs/cli/keto-namespace-migrate"},"namespace migration CLI reference")," and\n",Object(r.b)("a",{parentName:"p",href:"/keto/docs/guides/production"},"running in production guide")," to learn more about that\nprocess."),Object(r.b)("h2",{id:"naming-conventions"},"Naming Conventions"),Object(r.b)("p",null,"Namespaces should be named after the plural of the type of objects they describe\n(e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"files"),", ",Object(r.b)("inlineCode",{parentName:"p"},"chats"),", ",Object(r.b)("inlineCode",{parentName:"p"},"organizations"),"). Relations within a namespace should be\na word that describes what relation a subject has towards an object. As a rule\nof thumb, every relation tuple should translate to an english sentence like so:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Subject")," has ",Object(r.b)("strong",{parentName:"p"},"relation")," on ",Object(r.b)("strong",{parentName:"p"},"object")," which is one of the ",Object(r.b)("strong",{parentName:"p"},"namespace"),".")),Object(r.b)("p",null,"Examples:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"// good examples\n\n\nfiles:8f427c01-c295-44f3-b43d-49c3a1042f35#write@02a3c847-c903-446a-a34f-dae74b4fab86\ngroups:43784684-103e-44c0-9d6c-db9fb265f617#member@b8d00059-b803-4123-9d3d-b3613bfe7c1b\ndirectories:803a87e9-0da0-486e-bc08-ef559dd8e034#child@(files:11488ab9-4ede-479f-add4-f1379da4ae43#_)\nfiles:11488ab9-4ede-479f-add4-f1379da4ae43#parent@(directories:803a87e9-0da0-486e-bc08-ef559dd8e034#_)\n\n// bad examples\n\n\n// namespace is not describing homogenous type of objects\ntenant-1-objects:62237c27-19c3-4bb1-9cbc-a5a67372569b#access@7a012165-7b21-495b-b84b-cf4e1a21b484\n// relation describes a relation of the object towards the subject\ndirectories:803a87e9-0da0-486e-bc08-ef559dd8e034#parent@(files:11488ab9-4ede-479f-add4-f1379da4ae43#_)\n")))}b.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=l(n),d=a,f=b["".concat(c,".").concat(d)]||b[d]||u[d]||r;return n?o.a.createElement(f,s(s({ref:t},p),{},{components:n})):o.a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var p=2;p<r;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},199:function(e,t,n){"use strict";var a=n(21),o={punctuation:/[:#@()]/},r={pattern:/[^:#@()\n]+:/,inside:Object.assign({},o,{namespace:/.*/})},c={pattern:/[^:#@()\n]+#/,inside:Object.assign({},o,{symbol:/.*/})},s={pattern:/[^:#@()\n]+/,alias:"string"},i={pattern:/@[^:#@()\n]+/,inside:Object.assign({},o,{keyword:/.*/})},p={pattern:/@\(([^:#@()\n]+:)?([^:#@()\n]+)#([^:#@()\n]*)\)/,inside:{punctuation:/[@()]/,namespace:r,object:c,relation:s}};a.a.languages["keto-relation-tuples"]={comment:/\/\/.*(\n|$)/,"relation-tuple":{pattern:/([^:#@()\n]+:)?([^:#@()\n]+)#([^:#@()\n]+)@?((\(([^:#@()\n]+:)?([^:#@()\n]+)#([^:#@()\n]*)\))|([^:#@()\n]+))/,inside:{namespace:r,object:c,subjectID:i,subjectSet:p,relation:s}}},t.a=function(){}}}]);