"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[32145],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(r),p=a,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||o;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},57304:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={id:"kratos-hashers-argon2-load-test",title:"kratos hashers argon2 load-test",description:"kratos hashers argon2 load-test Simulate the password hashing with a number of concurrent requests/minute."},l=void 0,u={unversionedId:"cli/kratos-hashers-argon2-load-test",id:"version-v0.6/cli/kratos-hashers-argon2-load-test",isDocsHomePage:!1,title:"kratos hashers argon2 load-test",description:"kratos hashers argon2 load-test Simulate the password hashing with a number of concurrent requests/minute.",source:"@site/versioned_docs/version-v0.6/cli/kratos-hashers-argon2-load-test.md",sourceDirName:"cli",slug:"/cli/kratos-hashers-argon2-load-test",permalink:"/kratos/docs/v0.6/cli/kratos-hashers-argon2-load-test",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/cli/kratos-hashers-argon2-load-test.md",tags:[],version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619690398,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"kratos-hashers-argon2-load-test",title:"kratos hashers argon2 load-test",description:"kratos hashers argon2 load-test Simulate the password hashing with a number of concurrent requests/minute."},sidebar:"version-v0.6/docs",previous:{title:"kratos hashers argon2 hash",permalink:"/kratos/docs/v0.6/cli/kratos-hashers-argon2-hash"},next:{title:"kratos identities",permalink:"/kratos/docs/v0.6/cli/kratos-identities"}},c=[{value:"kratos hashers argon2 load-test",id:"kratos-hashers-argon2-load-test",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],d={toc:c};function h(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"kratos-hashers-argon2-load-test"},"kratos hashers argon2 load-test"),(0,o.kt)("p",null,"Simulate the password hashing with a number of concurrent requests/minute."),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Simulates a number of concurrent authentication requests per minute. Gives\nstatistical data about the measured performance and resource consumption. Can be\nused to tune and test the hashing parameters for peak demand situations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kratos hashers argon2 load-test &lt;authentication-requests-per-minute&gt; [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -c, --config strings                Path to one or more .json, .yaml, .yml, .toml config files. Values are loaded in the order provided, meaning that the last config file overwrites values from the previous config file.\n      --dedicated-memory byte_size    Amount of memory dedicated for password hashing. Kratos will try to not consume more memory. (default 1.00GB)\n      --expected-deviation duration   Expected deviation of the time a hashing operation (~login request) takes. (default 500ms)\n  -f, --format string                 Set the output format. One of table, json, and json-pretty. (default &#34;default&#34;)\n  -h, --help                          help for load-test\n      --iterations uint32             Number of iterations to start probing at. (default 1)\n      --key-length uint32             Length of the key in bytes. (default 32)\n      --memory byte_size              Memory to use. (default 128.00MB)\n      --min-duration duration         Minimal duration a hashing operation (~login request) takes. (default 500ms)\n      --parallelism uint8             Number of threads to use. (default 72)\n  -q, --quiet                         Be quiet with output printing.\n      --salt-length uint32            Length of the salt in bytes. (default 16)\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kratos-hashers-argon2"},"kratos hashers argon2")," -")))}h.isMDXComponent=!0}}]);