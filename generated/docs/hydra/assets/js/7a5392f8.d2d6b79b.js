(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[10979],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return n?o.createElement(y,a(a({ref:t},l),{},{components:n})):o.createElement(y,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},51572:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var o=n(22122),r=n(19756),s=(n(67294),n(3905)),a=["components"],i={id:"case-study",title:"OAuth 2.0 Case Study"},c=void 0,u={unversionedId:"case-study",id:"version-v1.7/case-study",isDocsHomePage:!1,title:"OAuth 2.0 Case Study",description:"OAuth2 and OpenID Connect are tricky to understand. It is important to keep in",source:"@site/versioned_docs/version-v1.7/case-study.md",sourceDirName:".",slug:"/case-study",permalink:"/hydra/docs/v1.7/case-study",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.7/case-study.md",version:"v1.7",lastUpdatedBy:"aeneasr",lastUpdatedAt:1597407772,formattedLastUpdatedAt:"8/14/2020",frontMatter:{id:"case-study",title:"OAuth 2.0 Case Study"},sidebar:"version-v1.7/docs",previous:{title:"Milestones and Roadmap",permalink:"/hydra/docs/v1.7/milestones"},next:{title:"Benchmarks",permalink:"/hydra/docs/v1.7/benchmark"}},l=[],d={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"OAuth2 and OpenID Connect are tricky to understand. It is important to keep in\nmind that OAuth2 is a delegation protocol. Let's look at a use case to\nunderstand how Hydra makes sense in new and existing projects."),(0,s.kt)("p",null,"Let's assume we are running todo24.com, a ToDo list app. ToDo24 has a login\nendpoint (todo24.com/login). The login endpoint is written in Node.JS and uses\nMongoDB to store user information (email + password + user profile). Of course,\nToDo24 has other services as well: list management (todo24.com/lists: create,\nrename, close lists), item management (todo24.com/lists/{list-id}/items: add or\nmark an item as solved), and so on. You are using cookie-based user sessions."),(0,s.kt)("p",null,"Now you decide to use OAuth2 on top of your current infrastructure. There are\nmany reasons to do this:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"You want to open your APIs to third-party developers. Their apps will be using\nOAuth2 Access Tokens to access your users todo lists."),(0,s.kt)("li",{parentName:"ul"},"You want to build more client applications like a web app, mobile app,\nchat-bot, etc."),(0,s.kt)("li",{parentName:"ul"},"You have cross-origin requests. Making cookies work with cross-origin requests\nweakens or even disables important anti-CSRF measures.")),(0,s.kt)("p",null,"These are only a couple of reasons to use OAuth2. You might decide to use OAuth2\nas your only authorization workflow, thus minimizing maintainance overhead while\nalways being able to support third party applications. With OpenID Connect, you\ncan delegate authentication as well!"),(0,s.kt)("p",null,"So you decide to implement OAuth2 and use ORY Hydra to do the job. You run Hydra\nby adding its Docker image to your cluster. Next, you set up some exemplary\nOAuth2 clients. These clients need to access a user's todo lists. To do so, the\nclient initiates an OAuth2 request. This is where Hydra's\n",(0,s.kt)("a",{parentName:"p",href:"/hydra/docs/v1.7/concepts/oauth2"},"user login & consent flow")," comes into play. Before Hydra\ncan issue an access token, we need to know which user is giving consent. To\ndetermine this, Hydra redirects the user agent (browser, mobile device) to\nToDo24's login endpoint alongside with a challenge that contains important\nrequest information. The login endpoint (todo24.com/login) authenticates the\nuser as usual, for example by username & password, session cookie or other\nmeans. Upon successful authentication, the login endpoint redirects the user\nback to ORY Hydra. Next, ORY Hydra needs the user's consent. It redirects the\nuser agent to the consent endpoint (todo24.com/consent) where the user is asked\nsomething like ",(0,s.kt)("em",{parentName:"p"},'"Do you want to grant MyAnalyticsApp read access to your todo\nlists? ',"[Yes][no]",'"'),". Once the user gives consent by clicking ",(0,s.kt)("em",{parentName:"p"},"Yes"),", the consent\nendpoint redirects back to ORY Hydra. Hydra validates the request and finally\nissues the access, refresh, and ID tokens."),(0,s.kt)("p",null,"You can validate the access tokens which are sent to your API directly at ORY\nHydra, or use an Identity & Access Proxy like ORY Oathkeeper to do it for you."))}p.isMDXComponent=!0}}]);