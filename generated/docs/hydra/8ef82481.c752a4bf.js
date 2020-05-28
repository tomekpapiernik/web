(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(9),i=(n(0),n(224)),c={id:"integration",title:"Consuming OAuth 2.0"},o={id:"integration",title:"Consuming OAuth 2.0",description:"This article explains how you to integrate ORY Hydra in your system.",source:"@site/docs/integration.md",permalink:"/hydra/docs/next/integration",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/integration.md",version:"next",lastUpdatedBy:"hackerman",lastUpdatedAt:1586178985,sidebar:"docs",previous:{title:"Advanced Topics",permalink:"/hydra/docs/next/advanced"},next:{title:"Configuration",permalink:"/hydra/docs/next/reference/configuration"}},l=[{value:"Overview",id:"overview",children:[{value:"Interacting with OAuth 2.0",id:"interacting-with-oauth-20",children:[]},{value:"Validating OAuth 2.0 Access Tokens",id:"validating-oauth-20-access-tokens",children:[]}]}],b={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This article explains how you to integrate ORY Hydra in your system."),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"A high-level overview of the interaction between a client, ORY Hydra\n(Authorization Server) and an API looks as follows:"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gIHBhcnRpY2lwYW50IENsaWVudFxuICBwYXJ0aWNpcGFudCBPUlkgSHlkcmFcbiAgcGFydGljaXBhbnQgQVBJXG4gIENsaWVudC0-Pk9SWSBIeWRyYTogUGVyZm9ybSBPQXV0aCAyLjAgRmxvd1xuICBPUlkgSHlkcmEtPj5DbGllbnQ6IEFjY2VzcyBUb2tlblxuICBDbGllbnQtPj5BUEk6IFJlcXVlc3Qgd2l0aCBBY2Nlc3MgVG9rZW5cbiAgQVBJLT5PUlkgSHlkcmE6IFZhbGlkYXRlcyBBY2Nlc3MgVG9rZW5cbiAgQVBJLT4-Q2xpZW50OiBSZXNwb25zZSIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gIHBhcnRpY2lwYW50IENsaWVudFxuICBwYXJ0aWNpcGFudCBPUlkgSHlkcmFcbiAgcGFydGljaXBhbnQgQVBJXG4gIENsaWVudC0-Pk9SWSBIeWRyYTogUGVyZm9ybSBPQXV0aCAyLjAgRmxvd1xuICBPUlkgSHlkcmEtPj5DbGllbnQ6IEFjY2VzcyBUb2tlblxuICBDbGllbnQtPj5BUEk6IFJlcXVlc3Qgd2l0aCBBY2Nlc3MgVG9rZW5cbiAgQVBJLT5PUlkgSHlkcmE6IFZhbGlkYXRlcyBBY2Nlc3MgVG9rZW5cbiAgQVBJLT4-Q2xpZW50OiBSZXNwb25zZSIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",alt:"ORY Hydra OAuth2 Server Overview"})))),Object(i.b)("p",null,"Most of what is explained here can also be seen as real-life examples in the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/examples"}),"ory/examples")," repository!"),Object(i.b)("h3",{id:"interacting-with-oauth-20"},"Interacting with OAuth 2.0"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Please, do not write your own code to interact with OAuth 2.0"),". Use open\nsource & battle-tested libraries instead. Here are some examples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"NodeJS",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.passportjs.org/"}),"passport")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/lelylan/simple-oauth2"}),"simple-oauth2")))),Object(i.b)("li",{parentName:"ul"},"Golang",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/golang/oauth2"}),"golang/oauth2")," ","*",Object(i.b)("em",{parentName:"li"},"recommended")))),Object(i.b)("li",{parentName:"ul"},"PHP",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/thephpleague/oauth2-client"}),"oauth2-client")))),Object(i.b)("li",{parentName:"ul"},"Java",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://spring.io/projects/spring-security-oauth"}),"Spring Security OAuth"))))),Object(i.b)("p",null,"For a full list of client libraries go ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://oauth.net/code/"}),"here"),"."),Object(i.b)("h3",{id:"validating-oauth-20-access-tokens"},"Validating OAuth 2.0 Access Tokens"),Object(i.b)("p",null,"The best and easiest way to validate OAuth 2.0 Access Tokens is by performing\nOAuth 2.0 Token Introspection. You can do this with the CLI\n",Object(i.b)("inlineCode",{parentName:"p"},"hydra token introspect <token>"),"."),Object(i.b)("h4",{id:"nodejs"},"NodeJS"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"const token = 'the access token'\nconst body = qs.stringify({ token })\n\nfetch('http://ory-hydra/oauth2/introspect', {\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n      'Content-Length': body.length\n    },\n    method: 'POST', body\n}).then(body => {\n    if (!body.active) {\n        // Token is not active/valid\n    } else if (body.token_type !== 'access_token') {\n        // Token is not an access token (probably a refresh token)\n    }\n\n    // token is active\n})\n")),Object(i.b)("h4",{id:"curl"},"CURL"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ curl -X POST \\\n    -d 'token=<the-token>' \\\n    http://localhost:4445/oauth2/introspect\n")))}s.isMDXComponent=!0},224:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,h=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return n?r.a.createElement(h,o(o({ref:t},b),{},{components:n})):r.a.createElement(h,o({ref:t},b))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);