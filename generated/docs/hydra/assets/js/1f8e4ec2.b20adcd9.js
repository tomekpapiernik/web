"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[2328],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},49777:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={id:"cors",title:"Setting up Cross-origin resource sharing (CORS)"},l=void 0,c={unversionedId:"guides/cors",id:"guides/cors",isDocsHomePage:!1,title:"Setting up Cross-origin resource sharing (CORS)",description:"Both ORY Hydra's Admin and Public endpoints support CORS. For detailed",source:"@site/docs/guides/cors.mdx",sourceDirName:"guides",slug:"/guides/cors",permalink:"/hydra/docs/next/guides/cors",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/guides/cors.mdx",tags:[],version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594375370,formattedLastUpdatedAt:"7/10/2020",frontMatter:{id:"cors",title:"Setting up Cross-origin resource sharing (CORS)"},sidebar:"docs",previous:{title:"Scaling ORY Hydra",permalink:"/hydra/docs/next/guides/scaling-hydra"},next:{title:"Gitlab Hydra integration",permalink:"/hydra/docs/next/guides/gitlab"}},p=[],u={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Both ORY Hydra's Admin and Public endpoints support CORS. For detailed\ninformation, head over to the exemplary\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/master/docs/config.yaml"},"config file"),"."),(0,i.kt)("p",null,"For CORS to work properly, we encourage to set the following values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"serve:\n  admin:\n    cors:\n      enabled: true\n      allowed_origins:\n        - https://example.com\n        - https://*.example.com\n      allowed_methods:\n        - POST\n        - GET\n        - PUT\n        - PATCH\n        - DELETE\n      allowed_headers:\n        - Authorization\n      exposed_headers:\n        - Content-Type\n  public:\n    cors:\n      enabled: true\n      allowed_origins:\n        - https://example.com\n        - https://*.example.com\n      allowed_methods:\n        - POST\n        - GET\n        - PUT\n        - PATCH\n        - DELETE\n      allowed_headers:\n        - Authorization\n      exposed_headers:\n        - Content-Type\n")),(0,i.kt)("p",null,"Keep in mind that the OAuth 2.0 Authorization Endpoint (",(0,i.kt)("inlineCode",{parentName:"p"},"/oauth2/auth"),") does not\nexpose CORS by design. This endpoint should never be consumed in a CORS-fashion.\nSome endpoints (",(0,i.kt)("inlineCode",{parentName:"p"},"/oauth2/token"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/userinfo"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/oauth2/revoke"),") additionally\ninclude URLs listed in field ",(0,i.kt)("inlineCode",{parentName:"p"},"allowed_cors_origins")," of the OAuth 2.0 Client that\nis making the request. For example, OAuth 2.0 Client"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "client_id": "foo",\n  "allowed_cors_origins": ["https://foo-bar.com/"]\n}\n')),(0,i.kt)("p",null,"is allowed to make CORS request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/oauth2/token")," from origin\n",(0,i.kt)("inlineCode",{parentName:"p"},"https://foo-bar.com/")," even if that origin is not listed in\n",(0,i.kt)("inlineCode",{parentName:"p"},"public.cors.allowed_origins"),"."))}d.isMDXComponent=!0}}]);