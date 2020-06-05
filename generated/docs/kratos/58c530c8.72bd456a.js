(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{206:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return s}));var n=t(2),o=t(9),a=(t(0),t(327)),c={id:"error",title:"This should be the Error UI"},i={id:"version-v0.3/fallback/error",title:"This should be the Error UI",description:"You ended up here because you did not set the following configuration value:",source:"@site/versioned_docs/version-v0.3/fallback/error.mdx",permalink:"/kratos/docs/fallback/error",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.3/fallback/error.mdx",version:"v0.3",lastUpdatedBy:"aeneasr",lastUpdatedAt:1589548840},l=[],u={rightToc:l};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You ended up here because you did not set the following configuration value:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'}),"urls:\n  error_ui: http://my-app.com/error\n")),Object(a.b)("p",null,"You can set this configuration value using environment variable ",Object(a.b)("inlineCode",{parentName:"p"},"URLS_ERROR_UI"),"\nas well!"),Object(a.b)("p",null,"If you don't know what that means, head over to\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/self-service/flows/user-facing-errors"}),"User-Facing Error"),"!"))}s.isMDXComponent=!0},327:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=n,b=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return t?o.a.createElement(b,i(i({ref:r},u),{},{components:t})):o.a.createElement(b,i({ref:r},u))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);