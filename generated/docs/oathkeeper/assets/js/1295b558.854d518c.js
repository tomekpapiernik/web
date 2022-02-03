"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[2293],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,m=p["".concat(s,".").concat(u)]||p[u]||h[u]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},77657:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"index",slug:"/",title:"Introduction"},s=void 0,c={unversionedId:"index",id:"version-v0.37/index",isDocsHomePage:!1,title:"Introduction",description:"ORY Oathkeeper authorizes incoming HTTP requests. It can be the Policy",source:"@site/versioned_docs/version-v0.37/index.md",sourceDirName:".",slug:"/",permalink:"/oathkeeper/docs/v0.37/",editUrl:"https://github.com/ory/oathkeeper/edit/master/docs/versioned_docs/version-v0.37/index.md",tags:[],version:"v0.37",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601371031,formattedLastUpdatedAt:"9/29/2020",frontMatter:{id:"index",slug:"/",title:"Introduction"},sidebar:"version-v0.37/docs",next:{title:"Installation",permalink:"/oathkeeper/docs/v0.37/install"}},d=[{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Operating Modes",id:"operating-modes",children:[{value:"Reverse Proxy",id:"reverse-proxy",children:[{value:"Example",id:"example",children:[],level:4}],level:3},{value:"Access Control Decision API",id:"access-control-decision-api",children:[{value:"Example",id:"example-1",children:[],level:4}],level:3}],level:2},{value:"Decision Engine",id:"decision-engine",children:[],level:2}],h={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ORY Oathkeeper authorizes incoming HTTP requests. It can be the Policy\nEnforcement Point in your cloud architecture, i.e. a reverse proxy in front of\nyour upstream API or web server that rejects unauthorized requests and forwards\nauthorized ones to your server. If you want to use another API Gateway (Kong,\nNginx, Envoy, AWS API Gateway, ...), Oathkeeper can also plug into that and act\nas its Policy Decision Point."),(0,i.kt)("p",null,"The implemented problem domain and scope is called Zero-Trust Network\nArchitecture, ",(0,i.kt)("a",{parentName:"p",href:"https://www.beyondcorp.com"},"BeyondCorp"),", and Identity And Access\nProxy (IAP)."),(0,i.kt)("p",null,"While ORY Oathkeeper works well with ORY Hydra and ORY Keto, ORY Oathkeeper can\nbe used completely standalone and alongside other stacks with adjacent problem\ndomains (Keycloak, Gluu, Vault, ...). ORY Oathkeeper's Access Control Decision\nAPI works with"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/datawire/ambassador"},"Ambassador")," via\n",(0,i.kt)("a",{parentName:"li",href:"https://www.getambassador.io/reference/services/auth-service"},"auth service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.envoyproxy.io"},"Envoy")," via the\n",(0,i.kt)("a",{parentName:"li",href:"https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/security/ext_authz_filter.html"},"External Authorization HTTP Filter")),(0,i.kt)("li",{parentName:"ul"},"AWS API Gateway via\n",(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/de/blogs/compute/introducing-custom-authorizers-in-amazon-api-gateway/"},"Custom Authorizers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.nginx.com"},"Nginx")," via\n",(0,i.kt)("a",{parentName:"li",href:"https://docs.nginx.com/nginx/admin-guide/security-controls/configuring-subrequest-authentication/"},"Authentication Based on Subrequest Result"))),(0,i.kt)("p",null,"among others."),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"ORY Oathkeeper does not have any dependencies to other services. It can work\ncompletely in isolation and does not require a database or any other type of\npersistent storage. ORY Oathkeeper is configurable with yaml configuration\nfiles, JSON files, and environment variables."),(0,i.kt)("h2",{id:"operating-modes"},"Operating Modes"),(0,i.kt)("p",null,"Starting Oathkeeper via ",(0,i.kt)("inlineCode",{parentName:"p"},"oathkeeper serve")," exposes two ports: One port serves\nthe reverse proxy, the other ORY Oathkeeper's API."),(0,i.kt)("h3",{id:"reverse-proxy"},"Reverse Proxy"),(0,i.kt)("p",null,"The port exposing the reverse proxy forwards requests to the upstream server,\ndefined in the rule, if the request is allowed. If the request is not allowed,\nORY Oathkeeper does not forward the request and instead returns an error\nmessage."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgcGFydGljaXBhbnQgQyBhcyBDbGllbnRcbiAgICBwYXJ0aWNpcGFudCBPIGFzIE9hdGhrZWVwZXIgUHJveHlcbiAgICBwYXJ0aWNpcGFudCBBIGFzIFByb3RlY3RlZCBTZXJ2ZXIvQVBJXG4gICAgQy0-Pk86IEhUVFAgUmVxdWVzdFxuICAgIE8tLT4-TzogQ2hlY2sgaWYgcmVxdWVzdCBpcyBhbGxvd2VkXG4gICAgYWx0IGlzIG5vdCBhbGxvd2VkXG4gICAgTy0-PkM6IFJldHVybiBIVFRQIEVycm9yIFxuICAgIGVsc2UgaXMgYWxsb3dlZFxuICAgIE8tPj5BOiBGb3J3YXJkIEhUVFAgUmVxdWVzdCBcbiAgICBBLT4-TzogUmV0dXJuIEhUVFAgUmVzcG9uc2VcbiAgICBPLT4-QzogUmV0dXJuIEhUVFAgUmVzcG9uc2VcbiAgICBlbmQiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ"},(0,i.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgcGFydGljaXBhbnQgQyBhcyBDbGllbnRcbiAgICBwYXJ0aWNpcGFudCBPIGFzIE9hdGhrZWVwZXIgUHJveHlcbiAgICBwYXJ0aWNpcGFudCBBIGFzIFByb3RlY3RlZCBTZXJ2ZXIvQVBJXG4gICAgQy0-Pk86IEhUVFAgUmVxdWVzdFxuICAgIE8tLT4-TzogQ2hlY2sgaWYgcmVxdWVzdCBpcyBhbGxvd2VkXG4gICAgYWx0IGlzIG5vdCBhbGxvd2VkXG4gICAgTy0-PkM6IFJldHVybiBIVFRQIEVycm9yIFxuICAgIGVsc2UgaXMgYWxsb3dlZFxuICAgIE8tPj5BOiBGb3J3YXJkIEhUVFAgUmVxdWVzdCBcbiAgICBBLT4-TzogUmV0dXJuIEhUVFAgUmVzcG9uc2VcbiAgICBPLT4-QzogUmV0dXJuIEhUVFAgUmVzcG9uc2VcbiAgICBlbmQiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ",alt:"ORY Oathkeeper deployed as a Reverse Proxy"}))),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("p",null,"Assuming the following request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET /my-service/whatever HTTP/1.1\nHost: oathkeeper-proxy:4455\nAuthorization: bearer some-token\n")),(0,i.kt)("p",null,"and you have the following rule defined (which allows this request)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service"\n  },\n  "match": {\n    "url": "http://oathkeeper-proxy:4455/my-service/whatever",\n    "methods": ["GET"]\n  },\n  "authenticators": [\n    {\n      "handler": "anonymous"\n    }\n  ],\n  "authorizer": {\n    "handler": "allow"\n  },\n  "mutators": [\n    {\n      "handler": "noop"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"then the request will be forwarded by ORY Oathkeeper as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET /my-service/whatever HTTP/1.1\nHost: my-backend-service:4455\nAuthorization: bearer some-token\n")),(0,i.kt)("p",null,"The response of this request will then be sent to the client that made the\nrequest to ORY Oathkeeper."),(0,i.kt)("h3",{id:"access-control-decision-api"},"Access Control Decision API"),(0,i.kt)("p",null,"The ORY Oathkeeper Access Control Decision API follows best-practices and works\nwith most (if not all) modern API gateways and reverse proxies. To verify a\nrequest, send it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"decisions")," endpoint located at the Ory Authkeeper API\nport. It matches every sub-path and HTTP Method:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /decisions/v1/api")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PUT /decisions/my/other/api")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DELETE /decisions/users?foo=?bar"))),(0,i.kt)("p",null,"When matching a rule, the ",(0,i.kt)("inlineCode",{parentName:"p"},"/decision")," prefix is stripped from the matching path."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgcGFydGljaXBhbnQgQyBhcyBDbGllbnRcbiAgICBwYXJ0aWNpcGFudCBBRyBhcyBBUEkgR2F0ZXdheVxuICAgIHBhcnRpY2lwYW50IE8gYXMgT2F0aGtlZXBlciBBUElcbiAgICBwYXJ0aWNpcGFudCBBIGFzIFByb3RlY3RlZCBTZXJ2ZXIvQVBJXG4gICAgQy0-PkFHOiBIVFRQIFJlcXVlc3RcbiAgICBBRy0-Pk86IEFzayBqdWRnZSBBUEkgZm9yIGF1dGhvcml6YXRpb25cblxuICAgIGFsdCBpcyBhbGxvd2VkXG4gICAgTy0-PkFHOiBSZXR1cm4gYXV0aCBpbmZvXG4gICAgQUctPj5BOiBGb3J3YXJkIEhUVFAgUmVxdWVzdFxuICAgIEEtPj5BRzogUmV0dXJuIEhUVFAgUmVzcG9uc2VcbiAgICBBRy0-PkM6IFJldHVybiBIVFRQIFJlc3BvbnNlXG4gICAgZWxzZSBpcyBub3QgYWxsb3dlZFxuICAgIE8tPj5BRzogRGVueSByZXF1ZXN0XG4gICAgQUctPj5DOiBSZXR1cm4gSFRUUCBFcnJvclxuICAgIGVuZCIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In19"},(0,i.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgcGFydGljaXBhbnQgQyBhcyBDbGllbnRcbiAgICBwYXJ0aWNpcGFudCBBRyBhcyBBUEkgR2F0ZXdheVxuICAgIHBhcnRpY2lwYW50IE8gYXMgT2F0aGtlZXBlciBBUElcbiAgICBwYXJ0aWNpcGFudCBBIGFzIFByb3RlY3RlZCBTZXJ2ZXIvQVBJXG4gICAgQy0-PkFHOiBIVFRQIFJlcXVlc3RcbiAgICBBRy0-Pk86IEFzayBqdWRnZSBBUEkgZm9yIGF1dGhvcml6YXRpb25cblxuICAgIGFsdCBpcyBhbGxvd2VkXG4gICAgTy0-PkFHOiBSZXR1cm4gYXV0aCBpbmZvXG4gICAgQUctPj5BOiBGb3J3YXJkIEhUVFAgUmVxdWVzdFxuICAgIEEtPj5BRzogUmV0dXJuIEhUVFAgUmVzcG9uc2VcbiAgICBBRy0-PkM6IFJldHVybiBIVFRQIFJlc3BvbnNlXG4gICAgZWxzZSBpcyBub3QgYWxsb3dlZFxuICAgIE8tPj5BRzogRGVueSByZXF1ZXN0XG4gICAgQUctPj5DOiBSZXR1cm4gSFRUUCBFcnJvclxuICAgIGVuZCIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In19",alt:"ORY Oathkeeper deployed as an Decision API"}))),(0,i.kt)("h4",{id:"example-1"},"Example"),(0,i.kt)("p",null,"Assuming you are making the following request to ORY Oathkeeper's Access Control\nDecision API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET /decision/my-service/whatever HTTP/1.1\nHost: oathkeeper-api:4456\nAuthorization: bearer some-token\n")),(0,i.kt)("p",null,"and you have the following rule defined (which allows this request)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "some-id",\n  "match": {\n    "url": "http://oathkeeper-api:4456/my-service/whatever",\n    "methods": ["GET"]\n  },\n  "authenticators": [\n    {\n      "handler": "noop"\n    }\n  ],\n  "authorizer": {\n    "handler": "allow"\n  },\n  "mutators": [\n    {\n      "handler": "noop"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"then this endpoint will directly respond with HTTP Status Code 200:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nAuthorization: bearer some-token\n")),(0,i.kt)("p",null,"If any other status code is returned, the request must not be allowed, for\nexample:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HTTP/1.1 401 OK\nContent-Length: 0\nConnection: Closed\n")),(0,i.kt)("p",null,"It is also possible to have this endpoint return other error responses such as\nthe HTTP Status Found (HTTP Status Code ",(0,i.kt)("inlineCode",{parentName:"p"},"302"),"), depending configured on the\nerror handling. Use this feature only if your Reverse Proxy supports these type\nof responses."),(0,i.kt)("p",null,"Depending on the mutator defined by the access rule, the HTTP Response might\ncontain additional or mutated HTTP Headers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nX-User-ID: john.doe\n")),(0,i.kt)("h2",{id:"decision-engine"},"Decision Engine"),(0,i.kt)("p",null,"The decision engine allows to configure how ORY Oathkeeper authorizes HTTP\nrequests. Authorization happens in four steps, each of which can be configured:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Access Rule Matching:")," Verifies that the HTTP method, path, and host of\nthe incoming HTTP request conform to your access rules. The request is denied\nif no access rules match. The configuration of the matching access rule\nbecomes the input for the next steps."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Authentication:"),' Oathkeeper can validate credentials via a variety of\nmethods like Bearer Token, Basic Authorization, or cookie. Invalid\ncredentials result in denial of the request. The "internal" session state\n(e.g. user ID) of valid (authenticated) credentials becomes input for the\nnext steps.'),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Authorization:"),' Access Rules can check permissions. To secure, for\nexample, an API that requires admin privileges, configure the authorizer to\ncheck if the user ID from step 2 has the "admin" permission or role.\nOathkeeper supports a variety of authorizers. Failed authorization (e.g. user\ndoes not have role "admin") results denial of the request.'),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Mutation:")," The Access Rule can add session data to the HTTP request that\nit forwards to the upstream API. For example, the mutator could add\n",(0,i.kt)("inlineCode",{parentName:"li"},"X-User-ID: the-user-id")," to the HTTP headers or generate a JWT with session\ninformation and set it as ",(0,i.kt)("inlineCode",{parentName:"li"},"Authorization: Bearer the.jwt.token"),".")),(0,i.kt)("p",null,"Additionally, error handling can be configured. You may want to send an\n",(0,i.kt)("inlineCode",{parentName:"p"},"application/json")," response for API clients and a HTTP Redirect response for\nbrowsers with an end user."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcblxucihIVFRQIFJlcXVlc3QpIC0tPiBhcm0oQWNjZXNzIFJ1bGUgTWF0Y2hlcilcbmFybSAtLWZvdW5kIG1hdGNoaW5nIGFjY2VzcyBydWxlLS0-IGFuKEF1dGhlbnRpY2F0b3IpXG5hcm0gLS1kaWQgbm90IGZpbmQgYWNjZXNzIHJ1bGUtLT4gZWhcbmFuIC0tY3JlZGVudGlhbHMgaW4gcmVxdWVzdCBhcmUgdmFsaWQtLT5heihBdXRob3JpemVyKVxuYW4gLS1jcmVkZW50aWFscyBpbiByZXF1ZXN0IGFyZSBpbnZhbGlkLS0-IGVoXG5heiAtLXJlcXVlc3QgZG9lcyBub3QgaGF2ZSBwZXJtaXNzaW9uLS0-IGVoXG5heiAtLXJlcXVlc3QgaGFzIHBlcm1pc3Npb24tLT5tdChNdXRhdG9yKVxubXQtLXRyYW5zZm9ybSBodHRwIHJlcXVlc3QtLT5yZXMoRm9yd2FyZCBIVFRQIFJlcXVlc3QpXG5cbmVoKEVycm9yIEhhbmRsZXIpIC0tIGlmIGVycm9yIGhhbmRsZWQgYXMganNvbiAtLT4gZWhqc29uKEhUVFAgSlNPTiBFcnJvciByZXNwb25zZSlcbmVoKEVycm9yIEhhbmRsZXIpIC0tIGlmIGVycm9yIGhhbmRsZWQgYXMgcmVkaXJlY3QgLS0-IGVocmVkaXJlY3QoSFRUUCBSZWRpcmVjdCByZXNwb25zZSlcbmVoKEVycm9yIEhhbmRsZXIpIC0tIG90aGVycyAtLT4gZWhvdGhlcihFeGVjdXRlIGFueSBvdGhlciBlcnJvciBoYW5kbGluZyBsb2dpYy4uLikiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCIsInRoZW1lQ1NTIjoiLmxhYmVsIGZvcmVpZ25PYmplY3QgeyBvdmVyZmxvdzogdmlzaWJsZTsgZm9udC1zaXplOiAxM3B4IH0ifX0"},(0,i.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcblxucihIVFRQIFJlcXVlc3QpIC0tPiBhcm0oQWNjZXNzIFJ1bGUgTWF0Y2hlcilcbmFybSAtLWZvdW5kIG1hdGNoaW5nIGFjY2VzcyBydWxlLS0-IGFuKEF1dGhlbnRpY2F0b3IpXG5hcm0gLS1kaWQgbm90IGZpbmQgYWNjZXNzIHJ1bGUtLT4gZWhcbmFuIC0tY3JlZGVudGlhbHMgaW4gcmVxdWVzdCBhcmUgdmFsaWQtLT5heihBdXRob3JpemVyKVxuYW4gLS1jcmVkZW50aWFscyBpbiByZXF1ZXN0IGFyZSBpbnZhbGlkLS0-IGVoXG5heiAtLXJlcXVlc3QgZG9lcyBub3QgaGF2ZSBwZXJtaXNzaW9uLS0-IGVoXG5heiAtLXJlcXVlc3QgaGFzIHBlcm1pc3Npb24tLT5tdChNdXRhdG9yKVxubXQtLXRyYW5zZm9ybSBodHRwIHJlcXVlc3QtLT5yZXMoRm9yd2FyZCBIVFRQIFJlcXVlc3QpXG5cbmVoKEVycm9yIEhhbmRsZXIpIC0tIGlmIGVycm9yIGhhbmRsZWQgYXMganNvbiAtLT4gZWhqc29uKEhUVFAgSlNPTiBFcnJvciByZXNwb25zZSlcbmVoKEVycm9yIEhhbmRsZXIpIC0tIGlmIGVycm9yIGhhbmRsZWQgYXMgcmVkaXJlY3QgLS0-IGVocmVkaXJlY3QoSFRUUCBSZWRpcmVjdCByZXNwb25zZSlcbmVoKEVycm9yIEhhbmRsZXIpIC0tIG90aGVycyAtLT4gZWhvdGhlcihFeGVjdXRlIGFueSBvdGhlciBlcnJvciBoYW5kbGluZyBsb2dpYy4uLikiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCIsInRoZW1lQ1NTIjoiLmxhYmVsIGZvcmVpZ25PYmplY3QgeyBvdmVyZmxvdzogdmlzaWJsZTsgZm9udC1zaXplOiAxM3B4IH0ifX0",alt:"ORY Oathkeeper Pipeline"}))))}p.isMDXComponent=!0}}]);