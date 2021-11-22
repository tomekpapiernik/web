"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[76144],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return n?o.createElement(m,s(s({ref:t},h),{},{components:n})):o.createElement(m,s({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},910:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return u}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),s=["components"],i={id:"oauth2",title:"OAuth 2.0"},l=void 0,c={unversionedId:"concepts/oauth2",id:"version-v1.10/concepts/oauth2",isDocsHomePage:!1,title:"OAuth 2.0",description:"This section describes on a high level what OAuth 2.0 is and how it works.",source:"@site/versioned_docs/version-v1.10/concepts/oauth2.mdx",sourceDirName:"concepts",slug:"/concepts/oauth2",permalink:"/hydra/docs/concepts/oauth2",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/concepts/oauth2.mdx",tags:[],version:"v1.10",lastUpdatedBy:"aeneasr",lastUpdatedAt:1616672187,formattedLastUpdatedAt:"3/25/2021",frontMatter:{id:"oauth2",title:"OAuth 2.0"},sidebar:"version-v1.10/docs",previous:{title:"Do You Need OAuth2?",permalink:"/hydra/docs/concepts/before-oauth2"},next:{title:"OpenID Connect",permalink:"/hydra/docs/concepts/openid-connect-oidc"}},h=[{value:"OAuth 2.0",id:"oauth-20",children:[],level:3},{value:"Terminology",id:"terminology",children:[],level:3},{value:"OAuth 2.0 Scope",id:"oauth-20-scope",children:[],level:3},{value:"OAuth 2.0 Access Token Audience",id:"oauth-20-access-token-audience",children:[],level:3},{value:"OAuth 2.0 Refresh Tokens",id:"oauth-20-refresh-tokens",children:[],level:3},{value:"OAuth 2.0 Token Introspection",id:"oauth-20-token-introspection",children:[],level:3}],p={toc:h};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section describes on a high level what OAuth 2.0 is and how it works.\nPlease keep in mind that ORY Hydra is a technology targeted at professionals\nusing OAuth 2.0 on a regular basis. While we try to cover some of the concepts,\nOAuth 2.0 and OpenID knowledge is expected from you in order to understand and\nuse ORY Hydra to its fullest potential."),(0,r.kt)("p",null,"If you are new to these topics we recommend watching the following talk"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/996OiexHze0",frameborder:"0",allowfullscreen:!0}),(0,r.kt)("p",null,"and read these articles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2"},"DigitalOcean: An Introduction to OAuth 2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aaronparecki.com/2012/07/29/2/oauth2-simplified"},"Aaron Parecki: OAuth2 Simplified")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zapier.com/learn/apis/chapter-5-authentication-part-2/"},"Zapier: Chapter 5: Authentication, Part 2"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'If you are not building a system that involves third parties - for example a\nthird party company (CircleCI) using your (GitHub) APIs - but instead are\nlooking to solve "Single Sign On", mobile / single page app authentication, or\ngenerally "I want an API token after someone logs in", take a look at\n',(0,r.kt)("a",{parentName:"p",href:"https://www.ory.sh/kratos"},"ORY Kratos")," instead!"))),(0,r.kt)("h3",{id:"oauth-20"},"OAuth 2.0"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6749"},"The OAuth 2.0 authorization framework")," is\nspecified in ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6749"},"IETF RFC 6749"),". OAuth 2.0\nenables a third-party application to obtain limited access to resources on an\nHTTP server on behalf of the owner of those resources."),(0,r.kt)("p",null,"Why is this important? Without OAuth 2.0, a resource owner who wants to share\nresources in their account with a third party would have to share their\ncredentials with that third party. As an example, let's say you (a resource\nowner) have some photos (resources) stored on a social network (the resource\nserver). Now you want to print them using a third-party printing service. Before\nOAuth 2.0 existed, you would have to enter your social network password into the\nprinting service so that it can access and print your photos. Sharing secret\npasswords with third parties is obviously very problematic."),(0,r.kt)("p",null,"OAuth addresses this problem by introducing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the distinction between resource ownership and resource access for clients"),(0,r.kt)("li",{parentName:"ul"},"the ability to define fine-grained access privileges (called OAuth scopes)\ninstead of full account access for third parties"),(0,r.kt)("li",{parentName:"ul"},"an authorization layer and workflow that allows resource owners to grant\nparticular clients particular types of access to particular resources.")),(0,r.kt)("p",null,"With OAuth, clients can request access to resources on a server, and the owner\nof these resources can grant the requested access together with dedicated\ncredentials. In our example, you could grant the printing service read-only\naccess to your photos (only your photos, not your friend list) on the social\nnetwork. These credentials come in the form of an access token -- a string\ndenoting a specific scope, lifetime, and other access attributes. The client\n(printing service) can use this access token to request the protected resources\n(your photos) from the resource server (the social network)."),(0,r.kt)("h3",{id:"terminology"},"Terminology"),(0,r.kt)("p",null,"To read more natural, this guide uses simpler terminologies like ",(0,r.kt)("em",{parentName:"p"},"user")," instead\nof ",(0,r.kt)("em",{parentName:"p"},"resource owner"),". Here is a full list of terms."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("strong",{parentName:"li"},"resource owner"),' is the user account who authorizes an external\napplication to access their account. This access is limited (scoped) to\nparticular actions (the granted "scopes" like read photos or write messages).\nThis guide refers to resource owners as ',(0,r.kt)("em",{parentName:"li"},"users")," or ",(0,r.kt)("em",{parentName:"li"},"end users"),"."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("strong",{parentName:"li"},"OAuth 2.0 Authorization Server")," implements the OAuth 2.0 protocol (and\noptionally OpenID Connect). In our case, this is ",(0,r.kt)("strong",{parentName:"li"},"ORY Hydra"),"."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("strong",{parentName:"li"},"resource provider")," is the service that hosts (provides) the resources.\nThese resources (e.g. blog articles, printers, todo lists) are owned by a\nresource owner (user) mentioned above."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("strong",{parentName:"li"},"OAuth 2.0 Client")," is the ",(0,r.kt)("em",{parentName:"li"},"external application")," that wants to access a\nresource owner's resources (read a user's images). To do that, it asks the\nOAuth 2.0 Authorization Server for an access token in a resource owner's\nbehalf. The authorization server will ask the user if he/she \"is ok with\"\ngiving that external application e.g. write access to personal images."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("strong",{parentName:"li"},"Identity Provider")," is a service that allows users to register\naccounts, log in, etc."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"User Agent")," is usually a browser."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"OpenID Connect")," is a protocol built on top of OAuth 2.0 for just\nauthentication (instead of authorizing access to resources).")),(0,r.kt)("p",null,"A typical OAuth 2.0 flow looks as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A developer registers an OAuth 2.0 Client (external application) with the\nAuthorization Server (ORY Hydra) the intention to obtain information on\nbehalf of a user."),(0,r.kt)("li",{parentName:"ol"},"The application UI asks the user to authorize the application to access\ninformation/data on his/her behalf."),(0,r.kt)("li",{parentName:"ol"},"The user is redirected to the Authorization Server."),(0,r.kt)("li",{parentName:"ol"},"The Authorization Server confirms the user's identity and asks the user to\ngrant the OAuth 2.0 Client certain permissions."),(0,r.kt)("li",{parentName:"ol"},"The Authorization Server issues tokens that the OAuth 2.0 client uses to\naccess resources on the user's behalf.")),(0,r.kt)("h3",{id:"oauth-20-scope"},"OAuth 2.0 Scope"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please read the section about OAuth2 Scope in\n",(0,r.kt)("a",{parentName:"p",href:"/hydra/docs/concepts/before-oauth2"},"Read this before learning OAuth2 / OpenID Connect"),"."))),(0,r.kt)("p",null,"A second important concept is the OAuth 2.0 Scope. Many people confuse OAuth 2.0\nScope with internal Access Control like for example Role Based Access Control\n(RBAC) or Access Control Lists (ACL). Both concepts cover different aspects of\naccess control."),(0,r.kt)("p",null,"Internal access control (RBAC, ACL, etc) decides what a user can do in your\nsystem. An administrator might be allowed to modify everything. A regular user\nmight only be allowed to read their own messages."),(0,r.kt)("p",null,"OAuth 2.0 Scopes, on the other hand, describe what a user allowed an external\napplication (OAuth 2.0 client) to do on his/her behalf. For example, an access\ntoken might grant the external application to see a user's pictures, but not\nupload new pictures on his/her behalf (which we assume a user could do herself)."),(0,r.kt)("p",null,"In an extreme case, the user could lie and grant an external application OAuth\nscopes that he himself doesn't have permission to (\"read all classified\ndocuments\"). The OAuth Access Token with those scopes wouldn't help the external\napplication read those documents because it can only act in the name of the\nuser, and that user doesn't have these access privileges."),(0,r.kt)("p",null,"The scope of an OAuth 2.0 scope defines the permission the token was granted by\nthe end-user. For example, a specific token might be allowed to access public\npictures, but not private ones. The granted permissions are established during\nthe consent screen."),(0,r.kt)("p",null,"ORY Hydra has pre-defined OAuth 2.0 Scope values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"offline_access"),": Include this scope if you wish to receive a refresh token"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openid"),": Include this scope if you wish to perform an OpenID Connect request.")),(0,r.kt)("p",null,"When performing an OAuth 2.0 Flow where the end-user is involved (e.g. Implicit\nor Authorize Code), the granted OAuth 2.0 Scope must be set when accepting the\nconsent using the ",(0,r.kt)("inlineCode",{parentName:"p"},"grant_scope")," key."),(0,r.kt)("h3",{id:"oauth-20-access-token-audience"},"OAuth 2.0 Access Token Audience"),(0,r.kt)("p",null,"The Audience of an Access Token refers to the Resource Servers that this token\nis intended for. The audience usually refers to one or more URLs such as"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://api.mydomain.com/blog/posts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://api.mydomain.com/users"))),(0,r.kt)("p",null,"but may also refer to a subset of resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://api.mydomain.com/tenants/foo/users"))),(0,r.kt)("p",null,"When performing an OAuth 2.0 Flow where the end-user is involved (e.g. Implicit\nor Authorize Code), the granted audience must be set when accepting the consent\nusing the ",(0,r.kt)("inlineCode",{parentName:"p"},"grant_access_token_audience")," key. In most cases, it is ok to grant\nthe audience without user-interaction."),(0,r.kt)("h3",{id:"oauth-20-refresh-tokens"},"OAuth 2.0 Refresh Tokens"),(0,r.kt)("p",null,"OAuth 2.0 Refresh Tokens are issued only when an Authorize Code Flow\n(",(0,r.kt)("inlineCode",{parentName:"p"},"response_type=code"),") or an OpenID Connect Hybrid Flow with an Authorize Code\nResponse Type (",(0,r.kt)("inlineCode",{parentName:"p"},"response_type=code+..."),") is executed. OAuth 2.0 Refresh Tokens\nare not returned for Implicit or Client Credentials grants:"),(0,r.kt)("p",null,"Capable of issuing an OAuth 2.0 Refresh Token:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ory-hydra.example/oauth2/auth?response_type=code&"},"https://ory-hydra.example/oauth2/auth?response_type=code&"),"..."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ory-hydra.example/oauth2/auth?response_type=code+token&"},"https://ory-hydra.example/oauth2/auth?response_type=code+token&"),"..."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ory-hydra.example/oauth2/auth?response_type=code+token+id_token&"},"https://ory-hydra.example/oauth2/auth?response_type=code+token+id_token&"),"..."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ory-hydra.example/oauth2/auth?response_type=code+id_token&"},"https://ory-hydra.example/oauth2/auth?response_type=code+id_token&"),"...")),(0,r.kt)("p",null,"Will not issue an OAuth 2.0 Refresh Token:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ory-hydra.example/oauth2/auth?response_type=token&"},"https://ory-hydra.example/oauth2/auth?response_type=token&"),"..."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ory-hydra.example/oauth2/auth?response_type=token+id_token&"},"https://ory-hydra.example/oauth2/auth?response_type=token+id_token&"),"..."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ory-hydra.example/oauth2/token?grant_type=client_credentials&"},"https://ory-hydra.example/oauth2/token?grant_type=client_credentials&"),"...")),(0,r.kt)("p",null,"Additionally, each OAuth 2.0 Client that wants to request an OAuth 2.0 Refresh\nToken must be allowed to request scope ",(0,r.kt)("inlineCode",{parentName:"p"},"offline_access"),". When performing an\nOAuth 2.0 Authorize Code Flow, the ",(0,r.kt)("inlineCode",{parentName:"p"},"offline_access")," value must be included in\nthe requested OAuth 2.0 Scope:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://authorization-server.com/auth\n &scope=offline_access\n ?response_type=code\n &client_id=...\n &redirect_uri=...\n &state=...\n")),(0,r.kt)("p",null,"When ",(0,r.kt)("a",{parentName:"p",href:"consent"},"accepting the consent request"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"offline_access")," must be in the\nlist of ",(0,r.kt)("inlineCode",{parentName:"p"},"grant_scope"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fetch('https://hydra/oauth2/auth/requests/consent/accept?challenge=' + encodeURIComponent(challenge), {\n    method: 'PUT',\n    body: JSON.stringify(body),\n    headers: { 'Content-Type': 'application/json' }\n}).\nconst body = {\n    grant_scope: [\"offline_access\"],\n}\n")),(0,r.kt)("p",null,"Refresh Token Lifespan can be set using configuration key ",(0,r.kt)("inlineCode",{parentName:"p"},"ttl.refresh_token"),".\nIf set to -1, Refresh Tokens never expire."),(0,r.kt)("h3",{id:"oauth-20-token-introspection"},"OAuth 2.0 Token Introspection"),(0,r.kt)("p",null,"OAuth2 Token Introspection is an ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7662"},"IETF"),"\nstandard. It defines a method for a protected resource to query an OAuth 2.0\nauthorization server to determine the active state of an OAuth 2.0 token and to\ndetermine meta-information about this token. OAuth 2.0 deployments can use this\nmethod to convey information about the authorization context of the token from\nthe authorization server to the protected resource."),(0,r.kt)("p",null,"The usage of an access token or client credentials is required to access the\nendpoint. ORY Hydra will however accept any valid token or valid credentials as\nthere is no built-in access control."))}u.isMDXComponent=!0}}]);