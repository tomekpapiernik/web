(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[46259],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var h=a.createContext({}),l=function(e){var t=a.useContext(h),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(h.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,h=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,f=p["".concat(h,".").concat(d)]||p[d]||u[d]||o;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var h in t)hasOwnProperty.call(t,h)&&(i[h]=t[h]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},69781:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return h},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=r(22122),n=r(19756),o=(r(67294),r(3905)),s=["components"],i={id:"kratos-hashers-argon2-hash",title:"kratos hashers argon2 hash",description:"kratos hashers argon2 hash Hash a list of passwords for benchmarking the hashing parameters"},h=void 0,l={unversionedId:"cli/kratos-hashers-argon2-hash",id:"cli/kratos-hashers-argon2-hash",isDocsHomePage:!1,title:"kratos hashers argon2 hash",description:"kratos hashers argon2 hash Hash a list of passwords for benchmarking the hashing parameters",source:"@site/docs/cli/kratos-hashers-argon2-hash.md",sourceDirName:"cli",slug:"/cli/kratos-hashers-argon2-hash",permalink:"/kratos/docs/next/cli/kratos-hashers-argon2-hash",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/cli/kratos-hashers-argon2-hash.md",tags:[],version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1634916379,formattedLastUpdatedAt:"10/22/2021",frontMatter:{id:"kratos-hashers-argon2-hash",title:"kratos hashers argon2 hash",description:"kratos hashers argon2 hash Hash a list of passwords for benchmarking the hashing parameters"},sidebar:"docs",previous:{title:"kratos hashers argon2 calibrate",permalink:"/kratos/docs/next/cli/kratos-hashers-argon2-calibrate"},next:{title:"kratos hashers argon2 load-test",permalink:"/kratos/docs/next/cli/kratos-hashers-argon2-load-test"}},c=[{value:"kratos hashers argon2 hash",id:"kratos-hashers-argon2-hash",children:[{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],u={toc:c};function p(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"kratos-hashers-argon2-hash"},"kratos hashers argon2 hash"),(0,o.kt)("p",null,"Hash a list of passwords for benchmarking the hashing parameters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kratos hashers argon2 hash &lt;password1&gt; [&lt;password2&gt; ...] [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -c, --config strings                Path to one or more .json, .yaml, .yml, .toml config files. Values are loaded in the order provided, meaning that the last config file overwrites values from the previous config file.\n      --dedicated-memory byte_size    Amount of memory dedicated for password hashing. Kratos will try to not consume more memory. (default 1.00GB)\n      --expected-deviation duration   Expected deviation of the time a hashing operation (~login request) takes. (default 500ms)\n  -h, --help                          help for hash\n      --iterations uint32             Number of iterations to start probing at. (default 1)\n      --key-length uint32             Length of the key in bytes. (default 32)\n      --memory byte_size              Memory to use. (default 128.00MB)\n      --min-duration duration         Minimal duration a hashing operation (~login request) takes. (default 500ms)\n      --parallel                      Run all hashing operations in parallel.\n      --parallelism uint8             Number of threads to use. (default 72)\n      --salt-length uint32            Length of the salt in bytes. (default 16)\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kratos-hashers-argon2"},"kratos hashers argon2")," -")))}p.isMDXComponent=!0}}]);