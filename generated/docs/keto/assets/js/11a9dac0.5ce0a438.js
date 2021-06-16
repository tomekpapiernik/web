(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[7631],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10731:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={id:"keto-relation-tuple-parse",title:"keto relation-tuple parse",description:"keto relation-tuple parse Parse human readable relation tuples"},l={unversionedId:"cli/keto-relation-tuple-parse",id:"cli/keto-relation-tuple-parse",isDocsHomePage:!1,title:"keto relation-tuple parse",description:"keto relation-tuple parse Parse human readable relation tuples",source:"@site/docs/cli/keto-relation-tuple-parse.md",sourceDirName:"cli",slug:"/cli/keto-relation-tuple-parse",permalink:"/keto/docs/next/cli/keto-relation-tuple-parse",editUrl:"https://github.com/ory/keto/edit/master/docs/docs/cli/keto-relation-tuple-parse.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619369953,formattedLastUpdatedAt:"4/25/2021",frontMatter:{id:"keto-relation-tuple-parse",title:"keto relation-tuple parse",description:"keto relation-tuple parse Parse human readable relation tuples"},sidebar:"docs",previous:{title:"keto relation-tuple get",permalink:"/keto/docs/next/cli/keto-relation-tuple-get"},next:{title:"keto serve",permalink:"/keto/docs/next/cli/keto-serve"}},p=[{value:"keto relation-tuple parse",id:"keto-relation-tuple-parse",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],s={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"keto-relation-tuple-parse"},"keto relation-tuple parse"),(0,a.kt)("p",null,"Parse human readable relation tuples"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Parse human readable relation tuples as used in the documentation. Supports\nvarious output formats. Especially useful for piping into other commands by\nusing ",(0,a.kt)("inlineCode",{parentName:"p"},"--format json"),". Ignores comments (starting with ",(0,a.kt)("inlineCode",{parentName:"p"},"//"),") and blank lines."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"keto relation-tuple parse [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -f, --format string   Set the output format. One of table, json, and json-pretty. (default &#34;default&#34;)\n  -h, --help            help for parse\n  -q, --quiet           Be quiet with output printing.\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -c, --config strings   Config files to load, overwriting in the order specified. (default [/home/circleci/keto.yml])\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"keto-relation-tuple"},"keto relation-tuple")," - Read and manipulate relation\ntuples")))}u.isMDXComponent=!0}}]);