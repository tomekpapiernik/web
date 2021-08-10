(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[3227],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||l[m]||a;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},83617:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),s=["components"],i={id:"html-forms",title:"HTML Form Parser"},c=void 0,p={unversionedId:"reference/html-forms",id:"version-v0.7/reference/html-forms",isDocsHomePage:!1,title:"HTML Form Parser",description:"If you're using HTML Forms to sign users up or update profiles, Ory Kratos needs",source:"@site/versioned_docs/version-v0.7/reference/html-forms.md",sourceDirName:"reference",slug:"/reference/html-forms",permalink:"/kratos/docs/reference/html-forms",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.7/reference/html-forms.md",version:"v0.7",lastUpdatedBy:"Vincent",lastUpdatedAt:1628585413,formattedLastUpdatedAt:"8/10/2021",frontMatter:{id:"html-forms",title:"HTML Form Parser"},sidebar:"version-v0.7/docs",previous:{title:"JSON Schema and JSON Paths",permalink:"/kratos/docs/reference/json-schema-json-paths"},next:{title:"kratos",permalink:"/kratos/docs/cli/kratos"}},u=[{value:"Nesting",id:"nesting",children:[]},{value:"Checkboxes",id:"checkboxes",children:[]}],l={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you're using HTML Forms to sign users up or update profiles, Ory Kratos needs\nto assert the type of each field, as HTML Form Field Values are untyped."),(0,a.kt)("p",null,"Ory Kratos uses the Identity Schema to assert form field types. There are a\nfew tricks you should know when using this feature."),(0,a.kt)("h2",{id:"nesting"},"Nesting"),(0,a.kt)("p",null,"Assuming this Identity Schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "name": {\n          "type": "object",\n          "properties": {\n            "first": {\n              "type": "string"\n            },\n            "last": {\n              "type": "string"\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"You could address ",(0,a.kt)("inlineCode",{parentName:"p"},"traits.name.first")," this with an HTML Input Form:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<input type="text" name="traits.name.last">\n')),(0,a.kt)("h2",{id:"checkboxes"},"Checkboxes"),(0,a.kt)("p",null,"Checkboxes for ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," can be set up as follows. If the value is\nsupposed to be false: not checked:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<input type="hidden" value="false" name="traits.path.to.my.boolean" />\n<input type="checkbox" value="true" name="traits.path.to.my.boolean" />\n')))}f.isMDXComponent=!0}}]);