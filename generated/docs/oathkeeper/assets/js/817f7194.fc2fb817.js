(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[4072],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=p(a),m=i,u=k["".concat(l,".").concat(m)]||k[m]||h[m]||s;return a?r.createElement(u,n(n({ref:t},c),{},{components:a})):r.createElement(u,n({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,n=new Array(s);n[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,n[1]=o;for(var p=2;p<s;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1433:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return k}});var r=a(2122),i=a(9756),s=(a(7294),a(3905)),n=["components"],o={id:"milestones",title:"Milestones and Roadmap"},l=void 0,p={unversionedId:"milestones",id:"milestones",isDocsHomePage:!1,title:"Milestones and Roadmap",description:"v0.39.0",source:"@site/docs/milestones.md",sourceDirName:".",slug:"/milestones",permalink:"/oathkeeper/docs/next/milestones",editUrl:"https://github.com/ory/oathkeeper/edit/master/docs/docs/milestones.md",tags:[],version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1616806897,formattedLastUpdatedAt:"3/27/2021",frontMatter:{id:"milestones",title:"Milestones and Roadmap"},sidebar:"docs",previous:{title:"Overview",permalink:"/oathkeeper/docs/next/sdk"}},c=[{value:"v0.39.0",id:"v0390",children:[{value:"Bug",id:"bug",children:[]},{value:"Feat",id:"feat",children:[]}]},{value:"v1.0.0",id:"v100",children:[{value:"Bug",id:"bug-1",children:[]},{value:"Feat",id:"feat-1",children:[]},{value:"Rfc",id:"rfc",children:[]}]}],h={toc:c};function k(e){var t=e.components,a=(0,i.Z)(e,n);return(0,s.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"v0390"},(0,s.kt)("a",{parentName:"h2",href:"https://github.com/ory/oathkeeper/milestone/7"},"v0.39.0")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"This milestone does not have a description.")),(0,s.kt)("h3",{id:"bug"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/ory/oathkeeper/labels/bug"},"Bug")),(0,s.kt)("p",null,"Something is not working."),(0,s.kt)("h4",{id:"issues"},"Issues"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Integrate with Traefik, Nginx, Ambassador, Envoy\n(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/263"},"oathkeeper#263"),")"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Rule mutator template changes not reloaded after file update\n(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/272"},"oathkeeper#272"),")"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Log specified http request headers\n(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/361"},"oathkeeper#361"),")"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Timeout in oauth2_client_credentials when using self-signed certificates\n(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/368"},"oathkeeper#368"),")"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","oauth2_introspection not parsing single string aud valie\n(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/491"},"oathkeeper#491"),")"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","JWT validation sometimes appends trailing slash to issuer\n(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/527"},"oathkeeper#527"),")"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","I found some data race warnings\n(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/574"},"oathkeeper#574"),")"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",'"fatal error: concurrent map writes" panic, unable to reproduce\n(',(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/551"},"oathkeeper#551"),") -\n",(0,s.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman")),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",'Authenticator oauth2_introspection only works if token_type returned is an\n"access_token"\n(',(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/553"},"oathkeeper#553"),")")),(0,s.kt)("h3",{id:"feat"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/ory/oathkeeper/labels/feat"},"Feat")),(0,s.kt)("p",null,"New feature or request."),(0,s.kt)("h4",{id:"issues-1"},"Issues"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Implement GRPC response handler in Decisions API\n(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/134"},"oathkeeper#134"),")"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Pass query parameters to the hydrator\n(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/339"},"oathkeeper#339"),")"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Switch to go-jose key generation lib\n(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/419"},"oathkeeper#419"),")"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","remote_json: Enable timeout configuration for calls to authorization\nendpoint (",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/515"},"oathkeeper#515"),")"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Start as Envoy AuthService\n(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/560"},"oathkeeper#560"),")"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Hydator Mutator Client Credential\n(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/565"},"oathkeeper#565"),")"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Oathkeeper behind ssl terminating balancer\n(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/153"},"oathkeeper#153"),")"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Clean up logging in case of invalid credentials\n(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/505"},"oathkeeper#505"),")"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Fetch JWKs from object storage (S3)\n(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/518"},"oathkeeper#518"),")"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Enable forwarding of original authorization header to (remote) authorizer\n(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/528"},"oathkeeper#528"),") -\n",(0,s.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman"))),(0,s.kt)("h4",{id:"pull-requests"},"Pull Requests"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","refactor: refactor decisions API and add traefik (#486)\n(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/pull/487"},"oathkeeper#487"),") -\n",(0,s.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman"))),(0,s.kt)("h2",{id:"v100"},(0,s.kt)("a",{parentName:"h2",href:"https://github.com/ory/oathkeeper/milestone/2"},"v1.0.0")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"This milestone does not have a description.")),(0,s.kt)("h3",{id:"bug-1"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/ory/oathkeeper/labels/bug"},"Bug")),(0,s.kt)("p",null,"Something is not working."),(0,s.kt)("h4",{id:"issues-2"},"Issues"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Adopt new Keto SDK\n(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/172"},"oathkeeper#172"),")")),(0,s.kt)("h3",{id:"feat-1"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/ory/oathkeeper/labels/feat"},"Feat")),(0,s.kt)("p",null,"New feature or request."),(0,s.kt)("h4",{id:"issues-3"},"Issues"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","TLS Termination 'X-Forwarded-Proto'\n(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/95"},"oathkeeper#95"),")"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Provide an endpoint that allows to fetch configuration information\n(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/131"},"oathkeeper#131"),") -\n",(0,s.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman"),",\n",(0,s.kt)("a",{parentName:"li",href:"https://github.com/zepatrik"},"@Patrik")),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Adopt new Keto SDK\n(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/172"},"oathkeeper#172"),")"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Add file watcher for config file\n(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/215"},"oathkeeper#215"),") -\n",(0,s.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman")),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Add file watcher for access rules\n(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/216"},"oathkeeper#216"),") -\n",(0,s.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman"))),(0,s.kt)("h3",{id:"rfc"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/ory/oathkeeper/labels/rfc"},"Rfc")),(0,s.kt)("p",null,"A request for comments to discuss and share ideas."),(0,s.kt)("h4",{id:"issues-4"},"Issues"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Customizable on unauthenticated, forbidden, route not found, and other\nerror handlers\n(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/issues/284"},"oathkeeper#284"),")")))}k.isMDXComponent=!0}}]);