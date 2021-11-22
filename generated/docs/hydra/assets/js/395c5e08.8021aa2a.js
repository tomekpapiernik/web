"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[2829],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return u}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(t),u=a,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return t?n.createElement(h,o(o({ref:r},c),{},{components:t})):n.createElement(h,o({ref:r},c))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12569:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"hydra-migrate-sql",title:"hydra migrate sql",description:"hydra migrate sql Create SQL schemas and apply migration plans"},s=void 0,d={unversionedId:"cli/hydra-migrate-sql",id:"version-v1.10/cli/hydra-migrate-sql",isDocsHomePage:!1,title:"hydra migrate sql",description:"hydra migrate sql Create SQL schemas and apply migration plans",source:"@site/versioned_docs/version-v1.10/cli/hydra-migrate-sql.md",sourceDirName:"cli",slug:"/cli/hydra-migrate-sql",permalink:"/hydra/docs/cli/hydra-migrate-sql",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/cli/hydra-migrate-sql.md",tags:[],version:"v1.10",lastUpdatedBy:"aeneasr",lastUpdatedAt:1616672187,formattedLastUpdatedAt:"3/25/2021",frontMatter:{id:"hydra-migrate-sql",title:"hydra migrate sql",description:"hydra migrate sql Create SQL schemas and apply migration plans"},sidebar:"version-v1.10/docs",previous:{title:"hydra migrate",permalink:"/hydra/docs/cli/hydra-migrate"},next:{title:"hydra serve",permalink:"/hydra/docs/cli/hydra-serve"}},c=[{value:"hydra migrate sql",id:"hydra-migrate-sql",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"WARNING",id:"warning",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],p={toc:c};function m(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hydra-migrate-sql"},"hydra migrate sql"),(0,i.kt)("p",null,"Create SQL schemas and apply migration plans"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Run this command on a fresh SQL installation and when you upgrade Hydra to a new\nminor version. For example, upgrading Hydra 0.7.0 to 0.8.0 requires running this\ncommand."),(0,i.kt)("p",null,"It is recommended to run this command close to the SQL instance (e.g. same\nsubnet) instead of over the public internet. This decreases risk of failure and\ndecreases time required."),(0,i.kt)("p",null,"You can read in the database URL using the -e flag, for example: export DSN=...\nhydra migrate sql -e"),(0,i.kt)("h3",{id:"warning"},"WARNING"),(0,i.kt)("p",null,"Before running this command on an existing database, create a back up!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hydra migrate sql &lt;database-url&gt; [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -h, --help            help for sql\n  -e, --read-from-env   If set, reads the database connection string from the environment variable DSN or config file key dsn.\n  -y, --yes             If set all confirmation requests are accepted without user interaction.\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -c, --config strings   Path to one or more .json, .yaml, .yml, .toml config files. Values are loaded in the order provided, meaning that the last config file overwrites values from the previous config file.\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"hydra-migrate"},"hydra migrate")," - Various migration helpers")))}m.isMDXComponent=!0}}]);