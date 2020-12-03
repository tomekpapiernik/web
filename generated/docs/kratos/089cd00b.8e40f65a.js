(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{440:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(440)),s={id:"json-schema-json-paths",title:"JSON Schema and JSON Paths"},i={unversionedId:"reference/json-schema-json-paths",id:"version-v0.1/reference/json-schema-json-paths",isDocsHomePage:!1,title:"JSON Schema and JSON Paths",description:"JSON Schema is a vocabulary that allows you to",source:"@site/versioned_docs/version-v0.1/reference/json-schema-json-paths.md",slug:"/reference/json-schema-json-paths",permalink:"/kratos/docs/v0.1/reference/json-schema-json-paths",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.1/reference/json-schema-json-paths.md",version:"v0.1",lastUpdatedBy:"hackerman",lastUpdatedAt:1586177162,sidebar:"version-v0.1/docs",previous:{title:"Configuration",permalink:"/kratos/docs/v0.1/reference/configuration"},next:{title:"HTML Form Parser",permalink:"/kratos/docs/v0.1/reference/html-forms"}},c=[{value:"JSON Path Syntax",id:"json-path-syntax",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://json-schema.org"}),"JSON Schema")," is a vocabulary that allows you to\nannotate and validate JSON documents. It is a IETF (Internet and Engineering\nTask Force) public standard and is similar to a XML DTD but suited for JSON\npayloads."),Object(o.b)("p",null,"We rely on JSON Schema heavily internally, from configuration validation to\ngenerating OpenAPI Spec to writing documentation. By using ORY Kratos, you will\nbe exposed to JSON Schema as it is used for defining Identity data models and\nother things."),Object(o.b)("p",null,"To learn more about JSON Schema, head over to\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://json-schema.org/learn/"}),"json-schema.org/learn/"),"."),Object(o.b)("p",null,"We are currently using JSON Schema Draft7 but plan on migrating to a newer\nversion in the future."),Object(o.b)("h2",{id:"json-path-syntax"},"JSON Path Syntax"),Object(o.b)("p",null,"In some cases you can define a JSON Path. We use\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tidwall/gjson"}),Object(o.b)("inlineCode",{parentName:"a"},"tidwall/gjson"))," for this. A GJSON Path is a\ntext string syntax that describes a search pattern for quickly retrieving values\nfrom a JSON payload."),Object(o.b)("p",null,"There are two types of JSON Paths:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Reading JSON using the\n",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/tidwall/gjson/blob/master/SYNTAX.md"}),"GJSON Syntax"),";"),Object(o.b)("li",{parentName:"ul"},"Writing JSON using the\n",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/tidwall/sjson#path-syntax"}),"SJSON Syntax"),".")))}u.isMDXComponent=!0}}]);