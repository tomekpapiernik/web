(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{121:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),o=(r(0),r(194)),c={title:"API Overview"},s={unversionedId:"concepts/api-overview",id:"version-v0.6/concepts/api-overview",isDocsHomePage:!1,title:"API Overview",description:"This page gives an overview over all APIs Ory Keto offers, including common use",source:"@site/versioned_docs/version-v0.6/concepts/api-overview.mdx",slug:"/concepts/api-overview",permalink:"/keto/docs/concepts/api-overview",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.6/concepts/api-overview.mdx",version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1617730042,sidebar:"version-v0.6/docs",previous:{title:"The Graph of Relations",permalink:"/keto/docs/concepts/graph-of-relations"},next:{title:"Internal Algorithms",permalink:"/keto/docs/concepts/internal-algorithms"}},i=[{value:"Read APIs",id:"read-apis",children:[{value:"List Relation Tuples",id:"list-relation-tuples",children:[]},{value:"Check Relation Tuple",id:"check-relation-tuple",children:[]},{value:"Expand Subject Sets",id:"expand-subject-sets",children:[]}]},{value:"Write APIs",id:"write-apis",children:[{value:"Change Relation Tuples",id:"change-relation-tuples",children:[]}]}],l={rightToc:i};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This page gives an overview over all APIs Ory Keto offers, including common use\ncases."),Object(o.b)("p",null,"The APIs are separated based on privileges into a ",Object(o.b)("inlineCode",{parentName:"p"},"read")," and ",Object(o.b)("inlineCode",{parentName:"p"},"write")," endpoint.\nEach endpoint is exposed on a different port, so\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/secure"}),"you can decide how to restrict access"),". gRPC and REST connections\nare multiplexed on the same port."),Object(o.b)("p",null,"All APIs are available to gRPC and REST clients, although feature parity is not\nalways given. Because we follow gRPC and REST best practices and design\nguidelines, the APIs offer slightly different interfaces and capabilities."),Object(o.b)("h2",{id:"read-apis"},"Read APIs"),Object(o.b)("p",null,"The read-APIs are per default exposed on the TCP port ",Object(o.b)("inlineCode",{parentName:"p"},"4466"),"."),Object(o.b)("h3",{id:"list-relation-tuples"},"List Relation Tuples"),Object(o.b)("p",null,"This API allows you to query ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/concepts/relation-tuples"}),"relation tuples")," by\nproviding a partial relation tuple. It can be used to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/keto/docs/guides/list-api-display-objects#listing-objects"}),"list objects a user has access to")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/keto/docs/guides/list-api-display-objects#listing-subjects"}),"list users who have a specific role")),Object(o.b)("li",{parentName:"ul"},"list users who are members of a specific group"),Object(o.b)("li",{parentName:"ul"},"audit permissions in the system")),Object(o.b)("p",null,"For more details, head over to the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/reference/proto-api#readservice"}),"gRPC API reference")," or\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/reference/api#query-relation-tuples"}),"REST API reference"),"."),Object(o.b)("h3",{id:"check-relation-tuple"},"Check Relation Tuple"),Object(o.b)("p",null,"The check-API allows you to check whether a subject has a relation on an object.\nThis API resolves ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/concepts/subjects#subject-sets"}),"subject sets")," and\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/keto/issues/263"}),"subject set rewrites"),"."),Object(o.b)("p",null,"This API is primarily used to\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/guides/simple-access-check-guide"}),"check permissions to restrict actions"),"."),Object(o.b)("p",null,"For more details, head over to the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/reference/proto-api#checkservice"}),"gRPC API reference")," or\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/reference/api#check-a-relation-tuple"}),"REST API reference"),"."),Object(o.b)("h3",{id:"expand-subject-sets"},"Expand Subject Sets"),Object(o.b)("p",null,"The expand-API recursively expands a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/concepts/subjects#subject-sets"}),"subject set"),"\ninto a tree of subjects. For each subject, the tree assembles the relation\ntuples including the operands as defined in the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/concepts/namespaces"}),"namespace configuration"),". It can be used to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/keto/docs/guides/expand-api-display-who-has-access"}),"list who has access to an object")),Object(o.b)("li",{parentName:"ul"},"determine why someone has access to an object"),Object(o.b)("li",{parentName:"ul"},"audit permissions in the system")),Object(o.b)("p",null,"An expand-request has to include the maximum depth of the tree to be returned.\nThis is required to ensure low latency and limit the resource usage per request.\nTo find out more about Ory Keto's performance, head over to the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/performance"}),"performance considerations"),"."),Object(o.b)("p",null,"For more details, head over to the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/reference/proto-api#expandservice"}),"gRPC API reference")," or\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/reference/api#getexpand"}),"REST API reference"),"."),Object(o.b)("h2",{id:"write-apis"},"Write APIs"),Object(o.b)("p",null,"The write-APIs are per default exposed on the TCP port ",Object(o.b)("inlineCode",{parentName:"p"},"4467"),"."),Object(o.b)("h3",{id:"change-relation-tuples"},"Change Relation Tuples"),Object(o.b)("p",null,"The write-APIs offer multiple ways to insert and delete relation tuples. Please\nhead over to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/reference/proto-api#writeservice"}),"gRPC API reference"),"\nor ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/reference/api#write"}),"REST API reference")," to read more about the\navailable methods for each client type."),Object(o.b)("p",null,"In general, it is preferred to use the transaction based methods over repeatedly\ncalling simple methods for bulk updates. This is not only because they provide\nstronger consistency guarantees, but also because the database usually handles a\nsingle transaction with a lot of data faster than a lot of small transactions."),Object(o.b)("p",null,"The main use cases for the write-APIs are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"setting up permissions for a new object"),Object(o.b)("li",{parentName:"ul"},"sharing an object with another user"),Object(o.b)("li",{parentName:"ul"},"revoking access to an object"),Object(o.b)("li",{parentName:"ul"},"transferring relations to an object to another user")))}p.isMDXComponent=!0},194:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(r),d=a,h=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return r?n.a.createElement(h,s(s({ref:t},l),{},{components:r})):n.a.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);