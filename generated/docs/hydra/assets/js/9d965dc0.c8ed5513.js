"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[31232],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var s=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=s.createContext({}),l=function(e){var n=s.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return s.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},p=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),h=r,m=p["".concat(o,".").concat(h)]||p[h]||d[h]||a;return t?s.createElement(m,i(i({ref:n},u),{},{components:t})):s.createElement(m,i({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}p.displayName="MDXCreateElement"},33134:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var s=t(87462),r=t(63366),a=(t(67294),t(3905)),i=["components"],c={id:"benchmark",title:"Benchmarks"},o=void 0,l={unversionedId:"benchmark",id:"benchmark",isDocsHomePage:!1,title:"Benchmarks",description:"In this document you will find benchmark results for different endpoints of ORY",source:"@site/docs/benchmark.md",sourceDirName:".",slug:"/benchmark",permalink:"/hydra/docs/next/benchmark",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/benchmark.md",tags:[],version:"current",lastUpdatedBy:"hackerman",lastUpdatedAt:1586178985,formattedLastUpdatedAt:"4/6/2020",frontMatter:{id:"benchmark",title:"Benchmarks"},sidebar:"docs",previous:{title:"OAuth 2.0 Case Study",permalink:"/hydra/docs/next/case-study"},next:{title:"Security Architecture",permalink:"/hydra/docs/next/security-architecture"}},u=[{value:"BCrypt",id:"bcrypt",children:[],level:2},{value:"OAuth 2.0",id:"oauth-20",children:[{value:"Token Introspection",id:"token-introspection",children:[],level:3},{value:"Client Credentials Grant",id:"client-credentials-grant",children:[],level:3}],level:2},{value:"OAuth 2.0 Client Management",id:"oauth-20-client-management",children:[{value:"Creating OAuth 2.0 Clients",id:"creating-oauth-20-clients",children:[],level:3},{value:"Listing OAuth 2.0 Clients",id:"listing-oauth-20-clients",children:[],level:3},{value:"Fetching a specific OAuth 2.0 Client",id:"fetching-a-specific-oauth-20-client",children:[],level:3}],level:2}],d={toc:u};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,s.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this document you will find benchmark results for different endpoints of ORY\nHydra. All benchmarks are executed using\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rakyll/hey"},"rakyll/hey"),". Please note that these benchmarks\nrun against the in-memory storage adapter of ORY Hydra. These benchmarks\nrepresent what performance you would get with a zero-overhead database\nimplementation."),(0,a.kt)("p",null,"We do not include benchmarks against databases (e.g. MySQL, PostgreSQL or\nCockroachDB) as the performance greatly differs between deployments (e.g.\nrequest latency, database configuration) and tweaking individual things may\ngreatly improve performance. We believe, for that reason, that benchmark results\nfor these database adapters are difficult to generalize and potentially\ndeceiving. They are thus not included."),(0,a.kt)("p",null,"This file is updated on every push to master. It thus represents the benchmark\ndata for the latest version."),(0,a.kt)("p",null,"All benchmarks run 10.000 requests in total, with 100 concurrent requests. All\nbenchmarks run on Circle-CI with a\n",(0,a.kt)("a",{parentName:"p",href:"https://support.circleci.com/hc/en-us/articles/360000489307-Why-do-my-tests-take-longer-to-run-on-CircleCI-than-locally-"},'"2 CPU cores and 4GB RAM"'),"\nconfiguration."),(0,a.kt)("h2",{id:"bcrypt"},"BCrypt"),(0,a.kt)("p",null,"ORY Hydra uses BCrypt to obfuscate secrets of OAuth 2.0 Clients. When using\nflows such as the OAuth 2.0 Client Credentials Grant, ORY Hydra validates the\nclient credentials using BCrypt which causes (by design) CPU load. CPU load and\nperformance depend on the BCrypt cost which can be set using the environment\nvariable ",(0,a.kt)("inlineCode",{parentName:"p"},"BCRYPT_COST"),". For these benchmarks, we have set ",(0,a.kt)("inlineCode",{parentName:"p"},"BCRYPT_COST=8"),"."),(0,a.kt)("h2",{id:"oauth-20"},"OAuth 2.0"),(0,a.kt)("p",null,"This section contains various benchmarks against OAuth 2.0 endpoints"),(0,a.kt)("h3",{id:"token-introspection"},"Token Introspection"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\nSummary:\n  Total:    1.9573 secs\n  Slowest:  0.1461 secs\n  Fastest:  0.0002 secs\n  Average:  0.0186 secs\n  Requests/sec: 5108.9654\n\n  Total data:   1550000 bytes\n  Size/request: 155 bytes\n\nResponse time histogram:\n  0.000 [1] |\n  0.015 [5258]  |\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\n  0.029 [2339]  |\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\n  0.044 [1325]  |\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\n  0.059 [651]   |\u25a0\u25a0\u25a0\u25a0\u25a0\n  0.073 [261]   |\u25a0\u25a0\n  0.088 [117]   |\u25a0\n  0.102 [33]    |\n  0.117 [11]    |\n  0.131 [2] |\n  0.146 [2] |\n\n\nLatency distribution:\n  10% in 0.0006 secs\n  25% in 0.0015 secs\n  50% in 0.0133 secs\n  75% in 0.0284 secs\n  90% in 0.0454 secs\n  95% in 0.0563 secs\n  99% in 0.0799 secs\n\nDetails (average, fastest, slowest):\n  DNS+dialup:   0.0000 secs, 0.0002 secs, 0.1461 secs\n  DNS-lookup:   0.0000 secs, 0.0000 secs, 0.0049 secs\n  req write:    0.0000 secs, 0.0000 secs, 0.0052 secs\n  resp wait:    0.0185 secs, 0.0002 secs, 0.1460 secs\n  resp read:    0.0000 secs, 0.0000 secs, 0.0048 secs\n\nStatus code distribution:\n  [200] 10000 responses\n\n\n\n")),(0,a.kt)("h3",{id:"client-credentials-grant"},"Client Credentials Grant"),(0,a.kt)("p",null,"This endpoint uses ",(0,a.kt)("a",{parentName:"p",href:"#bcrypt"},"BCrypt"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\nSummary:\n  Total:    19.4831 secs\n  Slowest:  0.9063 secs\n  Fastest:  0.0171 secs\n  Average:  0.1861 secs\n  Requests/sec: 513.2648\n\n  Total data:   1570000 bytes\n  Size/request: 157 bytes\n\nResponse time histogram:\n  0.017 [1] |\n  0.106 [3566]  |\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\n  0.195 [2358]  |\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\n  0.284 [1850]  |\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\n  0.373 [1146]  |\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\n  0.462 [650]   |\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\n  0.551 [288]   |\u25a0\u25a0\u25a0\n  0.640 [101]   |\u25a0\n  0.728 [27]    |\n  0.817 [11]    |\n  0.906 [2] |\n\n\nLatency distribution:\n  10% in 0.0318 secs\n  25% in 0.0922 secs\n  50% in 0.1736 secs\n  75% in 0.2728 secs\n  90% in 0.3815 secs\n  95% in 0.4191 secs\n  99% in 0.5863 secs\n\nDetails (average, fastest, slowest):\n  DNS+dialup:   0.0001 secs, 0.0171 secs, 0.9063 secs\n  DNS-lookup:   0.0000 secs, 0.0000 secs, 0.0432 secs\n  req write:    0.0001 secs, 0.0000 secs, 0.0615 secs\n  resp wait:    0.1857 secs, 0.0171 secs, 0.9062 secs\n  resp read:    0.0001 secs, 0.0000 secs, 0.0302 secs\n\nStatus code distribution:\n  [200] 10000 responses\n\n\n\n")),(0,a.kt)("h2",{id:"oauth-20-client-management"},"OAuth 2.0 Client Management"),(0,a.kt)("h3",{id:"creating-oauth-20-clients"},"Creating OAuth 2.0 Clients"),(0,a.kt)("p",null,"This endpoint uses ",(0,a.kt)("a",{parentName:"p",href:"#bcrypt"},"BCrypt")," and generates IDs and secrets by reading\nfrom which negatively impacts performance. Performance will be better if IDs and\nsecrets are set in the request as opposed to generated by ORY Hydra."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"This test is currently disabled due to issues with /dev/urandom being inaccessible in the CI.\n")),(0,a.kt)("h3",{id:"listing-oauth-20-clients"},"Listing OAuth 2.0 Clients"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\nSummary:\n  Total:    0.6655 secs\n  Slowest:  0.0337 secs\n  Fastest:  0.0001 secs\n  Average:  0.0062 secs\n  Requests/sec: 15025.1907\n\n  Total data:   4880000 bytes\n  Size/request: 488 bytes\n\nResponse time histogram:\n  0.000 [1] |\n  0.003 [4995]  |\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\n  0.007 [960]   |\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\n  0.010 [1250]  |\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\n  0.014 [843]   |\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\n  0.017 [988]   |\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\n  0.020 [619]   |\u25a0\u25a0\u25a0\u25a0\u25a0\n  0.024 [243]   |\u25a0\u25a0\n  0.027 [80]    |\u25a0\n  0.030 [18]    |\n  0.034 [3] |\n\n\nLatency distribution:\n  10% in 0.0002 secs\n  25% in 0.0002 secs\n  50% in 0.0035 secs\n  75% in 0.0115 secs\n  90% in 0.0167 secs\n  95% in 0.0190 secs\n  99% in 0.0236 secs\n\nDetails (average, fastest, slowest):\n  DNS+dialup:   0.0000 secs, 0.0001 secs, 0.0337 secs\n  DNS-lookup:   0.0000 secs, 0.0000 secs, 0.0064 secs\n  req write:    0.0000 secs, 0.0000 secs, 0.0057 secs\n  resp wait:    0.0061 secs, 0.0001 secs, 0.0306 secs\n  resp read:    0.0001 secs, 0.0000 secs, 0.0038 secs\n\nStatus code distribution:\n  [200] 10000 responses\n\n\n\n")),(0,a.kt)("h3",{id:"fetching-a-specific-oauth-20-client"},"Fetching a specific OAuth 2.0 Client"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\nSummary:\n  Total:    0.5859 secs\n  Slowest:  0.0398 secs\n  Fastest:  0.0001 secs\n  Average:  0.0055 secs\n  Requests/sec: 17067.5827\n\n  Total data:   4860000 bytes\n  Size/request: 486 bytes\n\nResponse time histogram:\n  0.000 [1] |\n  0.004 [5492]  |\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\n  0.008 [1579]  |\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\n  0.012 [1105]  |\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\n  0.016 [923]   |\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\n  0.020 [595]   |\u25a0\u25a0\u25a0\u25a0\n  0.024 [178]   |\u25a0\n  0.028 [87]    |\u25a0\n  0.032 [29]    |\n  0.036 [7] |\n  0.040 [4] |\n\n\nLatency distribution:\n  10% in 0.0002 secs\n  25% in 0.0002 secs\n  50% in 0.0018 secs\n  75% in 0.0093 secs\n  90% in 0.0155 secs\n  95% in 0.0184 secs\n  99% in 0.0250 secs\n\nDetails (average, fastest, slowest):\n  DNS+dialup:   0.0000 secs, 0.0001 secs, 0.0398 secs\n  DNS-lookup:   0.0000 secs, 0.0000 secs, 0.0063 secs\n  req write:    0.0000 secs, 0.0000 secs, 0.0066 secs\n  resp wait:    0.0053 secs, 0.0001 secs, 0.0398 secs\n  resp read:    0.0001 secs, 0.0000 secs, 0.0101 secs\n\nStatus code distribution:\n  [200] 10000 responses\n\n\n\n")))}p.isMDXComponent=!0}}]);