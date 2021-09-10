(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[53585],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13919:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},44996:function(e,t,r){"use strict";r.d(t,{C:function(){return i},Z:function(){return a}});var n=r(52263),o=r(13919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,u=void 0!==a&&a,s=i.absolute,l=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(u)return t+r;var c=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+c:c}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},79586:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=r(22122),o=r(19756),i=(r(67294),r(3905)),a=(r(44996),["components"]),u={id:"using-oauth2",title:"Using OAuth2"},s=void 0,l={unversionedId:"guides/using-oauth2",id:"version-v1.7/guides/using-oauth2",isDocsHomePage:!1,title:"Using OAuth2",description:"Please, do not write your own code to interact with OAuth 2.0. Use open",source:"@site/versioned_docs/version-v1.7/guides/using-oauth2.mdx",sourceDirName:"guides",slug:"/guides/using-oauth2",permalink:"/hydra/docs/v1.7/guides/using-oauth2",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.7/guides/using-oauth2.mdx",tags:[],version:"v1.7",lastUpdatedBy:"aeneasr",lastUpdatedAt:1597407772,formattedLastUpdatedAt:"8/14/2020",frontMatter:{id:"using-oauth2",title:"Using OAuth2"},sidebar:"version-v1.7/docs",previous:{title:"Using Common OAuth2 and OpenID Connect Flows",permalink:"/hydra/docs/v1.7/guides/common-oauth2-openid-connect-flows"},next:{title:"Configuring Expiration",permalink:"/hydra/docs/v1.7/guides/token-expiration"}},c=[],p={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Please, do not write your own code to interact with OAuth 2.0"),". Use open\nsource & battle-tested libraries instead. Here are some examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NodeJS",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.passportjs.org/"},"passport")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/lelylan/simple-oauth2"},"simple-oauth2")))),(0,i.kt)("li",{parentName:"ul"},"Golang",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/golang/oauth2"},"golang/oauth2")," ","*",(0,i.kt)("em",{parentName:"li"},"recommended")))),(0,i.kt)("li",{parentName:"ul"},"PHP",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/thephpleague/oauth2-client"},"oauth2-client")))),(0,i.kt)("li",{parentName:"ul"},"Java",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-security-oauth"},"Spring Security OAuth"))))),(0,i.kt)("p",null,"For a full list of client libraries go ",(0,i.kt)("a",{parentName:"p",href:"https://oauth.net/code/"},"here"),"."))}d.isMDXComponent=!0}}]);