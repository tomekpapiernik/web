"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[51043],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,y=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return t?n.createElement(y,o(o({ref:r},s),{},{components:t})):n.createElement(y,o({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},53876:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"hydra-migrate",title:"hydra migrate",description:"hydra migrate Various migration helpers"},c=void 0,d={unversionedId:"cli/hydra-migrate",id:"cli/hydra-migrate",isDocsHomePage:!1,title:"hydra migrate",description:"hydra migrate Various migration helpers",source:"@site/docs/cli/hydra-migrate.md",sourceDirName:"cli",slug:"/cli/hydra-migrate",permalink:"/hydra/docs/next/cli/hydra-migrate",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/cli/hydra-migrate.md",tags:[],version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1616498182,formattedLastUpdatedAt:"3/23/2021",frontMatter:{id:"hydra-migrate",title:"hydra migrate",description:"hydra migrate Various migration helpers"},sidebar:"docs",previous:{title:"hydra keys import",permalink:"/hydra/docs/next/cli/hydra-keys-import"},next:{title:"hydra migrate sql",permalink:"/hydra/docs/next/cli/hydra-migrate-sql"}},s=[{value:"hydra migrate",id:"hydra-migrate",children:[{value:"Options",id:"options",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],u={toc:s};function p(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hydra-migrate"},"hydra migrate"),(0,i.kt)("p",null,"Various migration helpers"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -c, --config strings   Path to one or more .json, .yaml, .yml, .toml config files. Values are loaded in the order provided, meaning that the last config file overwrites values from the previous config file.\n  -h, --help             help for migrate\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"hydra"},"hydra")," - Run and manage ORY Hydra"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"hydra-migrate-sql"},"hydra migrate sql")," - Create SQL schemas and apply\nmigration plans")))}p.isMDXComponent=!0}}]);