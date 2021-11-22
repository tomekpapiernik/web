"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[30175],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},69897:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"csrf",title:"Common CSRF Pitfalls"},l=void 0,u={unversionedId:"debug/csrf",id:"debug/csrf",isDocsHomePage:!1,title:"Common CSRF Pitfalls",description:"Because ORY Hydra is not just an API, but instead talks to your users' browsers",source:"@site/docs/debug/csrf.mdx",sourceDirName:"debug",slug:"/debug/csrf",permalink:"/hydra/docs/next/debug/csrf",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/debug/csrf.mdx",tags:[],version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1603198549,formattedLastUpdatedAt:"10/20/2020",frontMatter:{id:"csrf",title:"Common CSRF Pitfalls"},sidebar:"docs",previous:{title:"Common Problem Solutions",permalink:"/hydra/docs/next/debug"},next:{title:"Debug Configuration",permalink:"/hydra/docs/next/debug/config"}},c=[{value:"Common Pitfalls",id:"common-pitfalls",children:[{value:"Same-Site in Chrome",id:"same-site-in-chrome",children:[],level:3},{value:"ORY Hydra Running Over HTTP Without dev-mode Enabled",id:"ory-hydra-running-over-http-without-dev-mode-enabled",children:[],level:3},{value:"Mixing up <code>127.0.0.1</code> and <code>localhost</code>",id:"mixing-up-127001-and-localhost",children:[],level:3},{value:"Reverse Proxy / Load Balancers",id:"reverse-proxy--load-balancers",children:[],level:3},{value:"Running Flows in Separate Browsers or Browser Windows",id:"running-flows-in-separate-browsers-or-browser-windows",children:[],level:3},{value:"Running Multiple OAuth2 Flows Simultaneously",id:"running-multiple-oauth2-flows-simultaneously",children:[],level:3},{value:"Cookie Same-Site Mode",id:"cookie-same-site-mode",children:[],level:3},{value:"Using AJAX to call <code>/oauth2/auth</code>",id:"using-ajax-to-call-oauth2auth",children:[],level:3}],level:2}],d={toc:c};function p(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Because ORY Hydra is not just an API, but instead talks to your users' browsers\ndirectly, several security measures have been implemented in ORY Kratos. One of\nthem is protection against CSRF:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"CSRF is an attack that tricks the victim into submitting a malicious request.\nIt inherits the identity and privileges of the victim to perform an undesired\nfunction on the victim\u2019s behalf. For most sites, browser requests\nautomatically include any credentials associated with the site, such as the\nuser\u2019s session cookie, IP address, Windows domain credentials, and so forth.\nTherefore, if the user is currently authenticated to the site, the site will\nhave no way to distinguish between the forged request sent by the victim and a\nlegitimate request sent by the victim."),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://owasp.org/www-community/attacks/csrf"},"Source"))),(0,a.kt)("h2",{id:"common-pitfalls"},"Common Pitfalls"),(0,a.kt)("p",null,"Sometimes, cookies and CSRF just wont work - all requests end up with a 401\nUnauthorized or 400 Bad Request. Here are some common causes and easy fixes if\nthat happens to you!"),(0,a.kt)("p",null,"Before starting to debug cookie and CSRF issues, make sure to check out the\nChrome Developer Tools (or any comparable technology) Cookies tabs in the\nApplication tab"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Google Chrome Developer Tools - Application Tab - Cookies",src:n(1539).Z})),(0,a.kt)("p",null,"as well as the network tab - look for ",(0,a.kt)("inlineCode",{parentName:"p"},"Cookie")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Set-Cookie")," HTTP Headers:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Google Chrome Developer Tools - Network Tab - Cookies",src:n(45233).Z})),(0,a.kt)("h3",{id:"same-site-in-chrome"},"Same-Site in Chrome"),(0,a.kt)("p",null,"Google Chrome changed the behavior of ",(0,a.kt)("inlineCode",{parentName:"p"},"SameSite=None")," so that it is not possible\nto use this SameSite mode without the HTTP Cookie ",(0,a.kt)("inlineCode",{parentName:"p"},"secure")," flag."),(0,a.kt)("p",null,"If you run a version of ORY Hydra 1.6 and below and experience this issue:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make sure to not use the ",(0,a.kt)("inlineCode",{parentName:"li"},"--dangerous-force-http")," flag"),(0,a.kt)("li",{parentName:"ul"},"Set configuration value ",(0,a.kt)("inlineCode",{parentName:"li"},"serve.cookies.same_site_mode")," or environment variable\n",(0,a.kt)("inlineCode",{parentName:"li"},"SERVE_COOKIES_SAME_SITE_MODE")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"Lax")," - this happens automatically for ORY\nHydra v1.7.0 when running in HTTP mode.")),(0,a.kt)("p",null,"Chrome rejects cookies without the ",(0,a.kt)("inlineCode",{parentName:"p"},"secure")," flag if a cookie with the same name\nfor the same scope (domain, path) is set that has the ",(0,a.kt)("inlineCode",{parentName:"p"},"secure")," flag. ORY Hydra\n1.7.0+ uses different names for cookies with and without ",(0,a.kt)("inlineCode",{parentName:"p"},"secure")," flag. For\nversions prior to that, you need to delete the cookies for the domain in order\nto get them working again."),(0,a.kt)("h3",{id:"ory-hydra-running-over-http-without-dev-mode-enabled"},"ORY Hydra Running Over HTTP Without dev-mode Enabled"),(0,a.kt)("p",null,"You are running ORY Hydra via HTTP but are missing the ",(0,a.kt)("inlineCode",{parentName:"p"},"--dangerous-force-http"),"\nCLI flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ hydra serve all -c path/to/config.yml --dangerous-force-http\n")),(0,a.kt)("h3",{id:"mixing-up-127001-and-localhost"},"Mixing up ",(0,a.kt)("inlineCode",{parentName:"h3"},"127.0.0.1")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"localhost")),(0,a.kt)("p",null,"Use either ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," (and in general IPs) or ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," (and in general\nhostnames) consistently throughout your flow because cookies from an IP are not\navailable to the hostname and vice-versa."),(0,a.kt)("h3",{id:"reverse-proxy--load-balancers"},"Reverse Proxy / Load Balancers"),(0,a.kt)("p",null,"You are running ORY Hydra behind a Reverse Proxy (e.g. Load Balancer) that\nstrips the Cookie header. If the reverse proxy supports path rewrites that might\nalso cause issues!"),(0,a.kt)("h3",{id:"running-flows-in-separate-browsers-or-browser-windows"},"Running Flows in Separate Browsers or Browser Windows"),(0,a.kt)("p",null,'You are running the OAuth2 flow in separate browsers, or in a browser with\nincognito mode. The Brave browser is also known for notoriously discarding\ncookies when used in "No-Tracking" mode.'),(0,a.kt)("h3",{id:"running-multiple-oauth2-flows-simultaneously"},"Running Multiple OAuth2 Flows Simultaneously"),(0,a.kt)("p",null,"You are trying to do two OAuth2 flows at the same time in the same Browser."),(0,a.kt)("h3",{id:"cookie-same-site-mode"},"Cookie Same-Site Mode"),(0,a.kt)("p",null,"You have changed the Cookie SameSite behavior. If this is the default value (you\ndid not change it), this should not be an issue."),(0,a.kt)("h3",{id:"using-ajax-to-call-oauth2auth"},"Using AJAX to call ",(0,a.kt)("inlineCode",{parentName:"h3"},"/oauth2/auth")),(0,a.kt)("p",null,"You ",(0,a.kt)("strong",{parentName:"p"},"cannot")," call ",(0,a.kt)("inlineCode",{parentName:"p"},"/oauth2/auth")," using an AJAX request. It is not allowed and\nnot possible with OAuth2. This endpoint can only be accessed using a normal\nbrowser request by clicking a link or redirecting the end-user's browser to that\nendpoint."))}p.isMDXComponent=!0},1539:function(e,t,n){t.Z=n.p+"assets/images/csrf_app_tab-9180730beabe0cc7e1d797b9ecd9dce9.png"},45233:function(e,t,n){t.Z=n.p+"assets/images/csrf_network_tab-329cafc8522509cc9d2b3e104f63fd24.png"}}]);