(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{194:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(m,s(s({ref:t},p),{},{components:n})):r.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},196:function(e,t,n){"use strict";var a=n(21),r={punctuation:/[:#@()]/},o={pattern:/[^:#@()\n]+:/,inside:Object.assign({},r,{namespace:/.*/})},i={pattern:/[^:#@()\n]+#/,inside:Object.assign({},r,{symbol:/.*/})},s={pattern:/[^:#@()\n]+/,alias:"string"},c={pattern:/@[^:#@()\n]+/,inside:Object.assign({},r,{keyword:/.*/})},p={pattern:/@\(([^:#@()\n]+:)?([^:#@()\n]+)#([^:#@()\n]*)\)/,inside:{punctuation:/[@()]/,namespace:o,object:i,relation:s}};a.a.languages["keto-relation-tuples"]={comment:/\/\/.*(\n|$)/,"relation-tuple":{pattern:/([^:#@()\n]+:)?([^:#@()\n]+)#([^:#@()\n]+)@?((\(([^:#@()\n]+:)?([^:#@()\n]+)#([^:#@()\n]*)\))|([^:#@()\n]+))/,inside:{namespace:o,object:i,subjectID:c,subjectSet:p,relation:s}}},t.a=function(){}},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(194)),i=n(196),s={title:"Subjects"},c={unversionedId:"concepts/subjects",id:"version-v0.6/concepts/subjects",isDocsHomePage:!1,title:"Subjects",description:"RelationTuplePrism()",source:"@site/versioned_docs/version-v0.6/concepts/subjects.mdx",slug:"/concepts/subjects",permalink:"/keto/docs/concepts/subjects",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.6/concepts/subjects.mdx",version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1617730042,sidebar:"version-v0.6/docs",previous:{title:"Objects",permalink:"/keto/docs/concepts/objects"},next:{title:"The Graph of Relations",permalink:"/keto/docs/concepts/graph-of-relations"}};Object(i.a)();var p=[{value:"Subject IDs",id:"subject-ids",children:[]},{value:"Subject Sets",id:"subject-sets",children:[]},{value:"Basic Example",id:"basic-example",children:[]},{value:"Advanced Example: Using Application Information within Keto Subjects",id:"advanced-example-using-application-information-within-keto-subjects",children:[]}],l={rightToc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In Ory Keto subjects are a recursive polymorphic datatype. They either refer to\na specific subject (e.g. user) by some application defined identifier, or a set\nof subjects."),Object(o.b)("h2",{id:"subject-ids"},"Subject IDs"),Object(o.b)("p",null,"A subject ID can be any string. It is up to the application to map its users,\ndevices, ... to a constant, unique identifier. We recommend the usage of UUIDs\nas they provide a high entropy. It is however possible to use e.g. URLs or\nopaque tokens of any kind. Please check the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#advanced-example-using-application-information-within-keto-subjects"}),"limitations"),".\nOry Keto will consider subject IDs equal iff their string representation is\nequal."),Object(o.b)("h2",{id:"subject-sets"},"Subject Sets"),Object(o.b)("p",null,"A subject set is the set of all subjects that have a specific relation on an\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/concepts/objects"}),"object"),". They empower Ory Keto to be as flexible as you need it\nby defining indirections. They can be used to realize e.g.\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/guides/rbac"}),"RBAC")," or\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/guides/access-control-inheritance"}),"inheritance of relations"),". Subject\nsets themselves can again indirect to subject sets. For a performant evaluation\nof requests it is however required to follow some\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/performance"}),"best practices"),'. As a special case, subject sets can also\nrefer to an object by using the empty relation. Effectively, this is interpreted\nas "any relation, even a non-existent one".'),Object(o.b)("p",null,"Subject sets also represent all intermediary nodes in\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/concepts/graph-of-relations"}),"the graph of relations"),"."),Object(o.b)("h2",{id:"basic-example"},"Basic Example"),Object(o.b)("p",null,"In the basic case an application uses the same subject identifiers as it uses\ninternally, e.g. a constant, unique username like ",Object(o.b)("inlineCode",{parentName:"p"},"zepatrik")," or preferably\nUUIDv4 like ",Object(o.b)("inlineCode",{parentName:"p"},"480158d4-0031-4412-9453-1bb0cdf76104"),"."),Object(o.b)("p",null,"Head over to the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/examples/olymp-file-sharing"}),"basic full feature example")," to see an\nexample with some context."),Object(o.b)("h2",{id:"advanced-example-using-application-information-within-keto-subjects"},"Advanced Example: Using Application Information within Keto Subjects"),Object(o.b)("p",null,"Because the Keto client can use arbitrary strings as subjects, it is tempting to\nencode application data within the subject. ",Object(o.b)("strong",{parentName:"p"},"We strongly discourage this\npractice.")," Instead, you should use a UUID to map application data to Keto\nsubjects. This is required to ensure:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"single source of truth and easy data update"),Object(o.b)("li",{parentName:"ol"},"free choice of encoding (Keto does not allow the characters ",Object(o.b)("inlineCode",{parentName:"li"},":#@"),")"),Object(o.b)("li",{parentName:"ol"},"unlimited data size (Keto only allows up to 64 characters)")),Object(o.b)("p",null,"For example, this can be used to implement a crude ABAC system by mapping\nattributes to a subject ID. The application can then define relation tuples that\nreflect permissions depending on the value of attributes. It will have to map\neach request to the subject representing the attributes."),Object(o.b)("p",null,"Let's assume the application knows the following mapping between attributes and\nUUIDs:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"c5b6454f-f79c-4a6d-9e1b-b44e04b56009:\n  subnet: 192.168.0.0/24\n  office_hours: true\n")),Object(o.b)("p",null,"Keto could then know the following relation tuple:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-keto-relation-tuples"}),"// allow access to TCP port 22 when the request originates from a specific subnet during office hours\ntcp/22#access@c5b6454f-f79c-4a6d-9e1b-b44e04b56009\n")),Object(o.b)("p",null,"The application has to map each incoming request to a subject string\nrepresenting the attributes of the request. Ory Keto will reply with a positive\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/concepts/api-overview#check-relation-tuple"}),"check response")," depending on the\nstring equality of the requested subject representing the attributes with the\nknown relation tuples. Remember that Ory Keto does ",Object(o.b)("strong",{parentName:"p"},"not")," know how to interpret\nany information stored in the relation tuples. Rather, the application has to\npreprocess and map the value to the corresponding UUID."))}u.isMDXComponent=!0}}]);