(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[64072],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return h}});var s=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,s,i=function(e,t){if(null==e)return{};var a,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=s.createContext({}),k=function(e){var t=s.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=k(e.components);return s.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=k(a),h=i,u=p["".concat(o,".").concat(h)]||p[h]||m[h]||r;return a?s.createElement(u,n(n({ref:t},c),{},{components:a})):s.createElement(u,n({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,n=new Array(r);n[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var k=2;k<r;k++)n[k]=a[k];return s.createElement.apply(null,n)}return s.createElement.apply(null,a)}p.displayName="MDXCreateElement"},21433:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return k},toc:function(){return c},default:function(){return p}});var s=a(22122),i=a(19756),r=(a(67294),a(3905)),n=["components"],l={id:"milestones",title:"Milestones and Roadmap"},o=void 0,k={unversionedId:"milestones",id:"milestones",isDocsHomePage:!1,title:"Milestones and Roadmap",description:"Stable Release",source:"@site/docs/milestones.md",sourceDirName:".",slug:"/milestones",permalink:"/kratos/docs/next/milestones",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/milestones.md",tags:[],version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1634774493,formattedLastUpdatedAt:"10/21/2021",frontMatter:{id:"milestones",title:"Milestones and Roadmap"},sidebar:"docs",previous:{title:"Overview",permalink:"/kratos/docs/next/sdk"},next:{title:"Comparison",permalink:"/kratos/docs/next/further-reading/comparison"}},c=[{value:"Stable Release",id:"stable-release",children:[{value:"Feat",id:"feat",children:[]}]},{value:"Incubating Release",id:"incubating-release",children:[{value:"Bug",id:"bug",children:[]},{value:"Feat",id:"feat-1",children:[]},{value:"Docs",id:"docs",children:[]},{value:"Rfc",id:"rfc",children:[]},{value:"Blocking",id:"blocking",children:[]},{value:"Ci",id:"ci",children:[]}]},{value:"v0.10.0-alpha.1",id:"v0100-alpha1",children:[{value:"Feat",id:"feat-2",children:[]}]},{value:"v0.7.x",id:"v07x",children:[{value:"Bug",id:"bug-1",children:[]},{value:"Docs",id:"docs-1",children:[]}]},{value:"v0.9.0-alpha.1",id:"v090-alpha1",children:[{value:"Bug",id:"bug-2",children:[]},{value:"Feat",id:"feat-3",children:[]},{value:"Docs",id:"docs-2",children:[]}]},{value:"v0.8.0-alpha.1",id:"v080-alpha1",children:[{value:"Bug",id:"bug-3",children:[]},{value:"Feat",id:"feat-4",children:[]},{value:"Docs",id:"docs-3",children:[]},{value:"Blocking",id:"blocking-1",children:[]}]}],m={toc:c};function p(e){var t=e.components,a=(0,i.Z)(e,n);return(0,r.kt)("wrapper",(0,s.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"stable-release"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/ory/kratos/milestone/15"},"Stable Release")),(0,r.kt)("p",null,"All issues which need to be resolved before we release Ory Kratos as stable."),(0,r.kt)("h3",{id:"feat"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/ory/kratos/labels/feat"},"Feat")),(0,r.kt)("p",null,"New feature or request."),(0,r.kt)("h4",{id:"issues"},"Issues"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Support prefixed env vars\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1855"},"kratos#1855"),")")),(0,r.kt)("h2",{id:"incubating-release"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/ory/kratos/milestone/14"},"Incubating Release")),(0,r.kt)("p",null,"This milestone tracks all issues we want to resolve before Ory Kratos goes into\nincubating phase."),(0,r.kt)("h3",{id:"bug"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/ory/kratos/labels/bug"},"Bug")),(0,r.kt)("p",null,"Something is not working."),(0,r.kt)("h4",{id:"issues-1"},"Issues"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Refresh Sessions Without Having to Log In Again\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/615"},"kratos#615"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Fetching a settings request after error is missing identity data\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/689"},"kratos#689"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Feature Request: Have access to username in email templates\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/925"},"kratos#925"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Implement email TTL for non-working/non-existant emails\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/944"},"kratos#944"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Relative path in ui_url or default_browser_return_url cause runtime crash\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1446"},"kratos#1446"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","/schemas/default does not work with base64 identity schemas\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1529"},"kratos#1529"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","panic: a handle is already registered for path\n'/self-service/recovery/methods/link'\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1068"},"kratos#1068"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Auto-Login on Registration flow does not return ",(0,r.kt)("inlineCode",{parentName:"li"},"session"),", only ",(0,r.kt)("inlineCode",{parentName:"li"},"identity"),"\nfor SPA requests\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1604"},"kratos#1604"),")")),(0,r.kt)("h3",{id:"feat-1"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/ory/kratos/labels/feat"},"Feat")),(0,r.kt)("p",null,"New feature or request."),(0,r.kt)("h4",{id:"issues-2"},"Issues"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Do not send credentials to hooks\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/77"},"kratos#77"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Implement immutable keyword in JSON Schema for Identity Traits\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/117"},"kratos#117"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Implement Hydra integration\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/273"},"kratos#273"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","SMTP Error spams the server logs\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/402"},"kratos#402"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","How to sign in with Twitter\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/517"},"kratos#517"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Throttling repeated login requests\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/654"},"kratos#654"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Require identity deactivation before administrative deletion\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/657"},"kratos#657"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Self-service GDPR identity export\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/658"},"kratos#658"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Rename strategy to method in internal APIs and Documentation\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/683"},"kratos#683"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Support OAuth2 and OpenID Connect in API-based flows\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/707"},"kratos#707"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","improve multi schema handling in different auth flows\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/765"},"kratos#765"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add i18n support to mail templates\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/834"},"kratos#834"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add option for disabling registration\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/882"},"kratos#882"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Password policies: make api.pwnedpasswords.com configurable\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/969"},"kratos#969"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Access identity schema information (e.g. usernames) within the jsonnet\nmapper (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/987"},"kratos#987"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","login ui returned without flowid\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1055"},"kratos#1055"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Allow account recovery for identities without email address\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1419"},"kratos#1419"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","[Feature]"," LOG_LEVEL to allow stacktrace in error for /api endpoint\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1589"},"kratos#1589"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Deprecate webhook loader without URI scheme\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1610"},"kratos#1610"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/zepatrik"},"@Patrik")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","EMail on registration with existing identifier\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1625"},"kratos#1625"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Require second factor only if device is unknown\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1643"},"kratos#1643"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Regenerate lookup secrets as part of login when last secret was used\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1649"},"kratos#1649"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Expand password validation error messages to facilitate i18n\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1071"},"kratos#1071"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","User deactivation does not deactivate user sessions\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1811"},"kratos#1811"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Implement full-spec with e2e tests for react native app\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1820"},"kratos#1820"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Validate identity schema on load\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/701"},"kratos#701"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Benehiko"},"@Alano Terblanche")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Field validation answer status code 422 instead of 400\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1559"},"kratos#1559"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Potentially encrypt settings InternalContext\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1647"},"kratos#1647"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Endpoint for fetching all schema IDs or all schemas\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1699"},"kratos#1699"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Email Courier SMTP Header Configuration\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1725"},"kratos#1725"),")")),(0,r.kt)("h3",{id:"docs"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/ory/kratos/labels/docs"},"Docs")),(0,r.kt)("p",null,"Affects documentation."),(0,r.kt)("h4",{id:"issues-3"},"Issues"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Config JSON Schema needs example values\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/179"},"kratos#179"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Tag version in docker-compose before commit&tag push\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1738"},"kratos#1738"),")")),(0,r.kt)("h3",{id:"rfc"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/ory/kratos/labels/rfc"},"Rfc")),(0,r.kt)("p",null,"A request for comments to discuss and share ideas."),(0,r.kt)("h4",{id:"issues-4"},"Issues"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Introduce prevent extension in Identity JSON schema\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/47"},"kratos#47"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","improve multi schema handling in different auth flows\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/765"},"kratos#765"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Strategies to prevent mass email sending for several flows\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1835"},"kratos#1835"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Field validation answer status code 422 instead of 400\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1559"},"kratos#1559"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Potentially encrypt settings InternalContext\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1647"},"kratos#1647"),")")),(0,r.kt)("h3",{id:"blocking"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/ory/kratos/labels/blocking"},"Blocking")),(0,r.kt)("p",null,"Blocks milestones or other issues or pulls."),(0,r.kt)("h4",{id:"issues-5"},"Issues"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Implement Hydra integration\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/273"},"kratos#273"),")")),(0,r.kt)("h3",{id:"ci"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/ory/kratos/labels/ci"},"Ci")),(0,r.kt)("p",null,"Affects Continuous Integration (CI)."),(0,r.kt)("h4",{id:"issues-6"},"Issues"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Tag version in docker-compose before commit&tag push\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1738"},"kratos#1738"),")")),(0,r.kt)("h2",{id:"v0100-alpha1"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/ory/kratos/milestone/13"},"v0.10.0-alpha.1")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This milestone does not have a description.")),(0,r.kt)("h3",{id:"feat-2"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/ory/kratos/labels/feat"},"Feat")),(0,r.kt)("p",null,"New feature or request."),(0,r.kt)("h4",{id:"issues-7"},"Issues"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Selfservice account deletion\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/596"},"kratos#596"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add ability to import user credentials\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/605"},"kratos#605"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman"))),(0,r.kt)("h2",{id:"v07x"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/ory/kratos/milestone/12"},"v0.7.x")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This milestone does not have a description.")),(0,r.kt)("h3",{id:"bug-1"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/ory/kratos/labels/bug"},"Bug")),(0,r.kt)("p",null,"Something is not working."),(0,r.kt)("h4",{id:"issues-8"},"Issues"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Submitting successful link verification again ends up with JSON response\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1546"},"kratos#1546"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Opening verification link in another browser causes GET request to fail\ndue to CSRF issue\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1547"},"kratos#1547"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","0.7.3.alpha.1, docker, panic if SESSION_COOKIE_NAME is set in\ndocker-compose.yml\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1695"},"kratos#1695"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",'kratos identities import - include "state" property of identity\n(',(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1767"},"kratos#1767"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Panic on recovery for deactivated user\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1794"},"kratos#1794"),")")),(0,r.kt)("h4",{id:"pull-requests"},"Pull Requests"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","fix(sdk): use proper annotation for genericError\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/pull/1611"},"kratos#1611"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman"))),(0,r.kt)("h3",{id:"docs-1"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/ory/kratos/labels/docs"},"Docs")),(0,r.kt)("p",null,"Affects documentation."),(0,r.kt)("h4",{id:"issues-9"},"Issues"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Update CSRF pitfall section for admin endpoints\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1557"},"kratos#1557"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Different payload for stub:500\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1568"},"kratos#1568"),")")),(0,r.kt)("h2",{id:"v090-alpha1"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/ory/kratos/milestone/11"},"v0.9.0-alpha.1")),(0,r.kt)("p",null,"This milestone focuses on passwordless authentication and improved recovery and\nverification flows."),(0,r.kt)("h3",{id:"bug-2"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/ory/kratos/labels/bug"},"Bug")),(0,r.kt)("p",null,"Something is not working."),(0,r.kt)("h4",{id:"issues-10"},"Issues"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Recovery link doesn't log out existing users\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1077"},"kratos#1077"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Email verification link is automatically opened by mail provider\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1202"},"kratos#1202"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Delete self-service flows after completion\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/952"},"kratos#952"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Dotenv files are respected and incorrectly override environment variables\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1856"},"kratos#1856"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","recovery link is open by email app\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1142"},"kratos#1142"),")")),(0,r.kt)("h3",{id:"feat-3"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/ory/kratos/labels/feat"},"Feat")),(0,r.kt)("p",null,"New feature or request."),(0,r.kt)("h4",{id:"issues-11"},"Issues"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Support email verification paswordless login\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/286"},"kratos#286"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Prevent account enumeration for profile updates\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/292"},"kratos#292"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Admin/Selfservice session management\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/655"},"kratos#655"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Benehiko"},"@Alano Terblanche")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Write new recovery and verification strategy that does not rely on links\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1451"},"kratos#1451"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Delete self-service flows after completion\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/952"},"kratos#952"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman"))),(0,r.kt)("h3",{id:"docs-2"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/ory/kratos/labels/docs"},"Docs")),(0,r.kt)("p",null,"Affects documentation."),(0,r.kt)("h4",{id:"issues-12"},"Issues"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Document that identity information (traits, etc) are available to token\nholders and backend systems\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/43"},"kratos#43"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","doc page for ui error messages\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1784"},"kratos#1784"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman"))),(0,r.kt)("h2",{id:"v080-alpha1"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/ory/kratos/milestone/10"},"v0.8.0-alpha.1")),(0,r.kt)("p",null,"This milestone focuses on MFA with TOTP, WebAuthn, and Recovery Codes."),(0,r.kt)("h3",{id:"bug-3"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/ory/kratos/labels/bug"},"Bug")),(0,r.kt)("p",null,"Something is not working."),(0,r.kt)("h4",{id:"issues-13"},"Issues"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Unmable to use Auth0 as a generic OIDC provider\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/609"},"kratos#609"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Typescript ErrorContainer type is incorrect\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/782"},"kratos#782"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Add option to remove recovery codes\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1751"},"kratos#1751"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","return_to_query_param not honored on OIDC login\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1773"},"kratos#1773"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Hide SQLite migration message\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1791"},"kratos#1791"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman"))),(0,r.kt)("h3",{id:"feat-4"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/ory/kratos/labels/feat"},"Feat")),(0,r.kt)("p",null,"New feature or request."),(0,r.kt)("h4",{id:"issues-14"},"Issues"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Implement identity state and administrative deactivation, deletion of\nidentities (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/598"},"kratos#598"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Add TLS configuration\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/791"},"kratos#791"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","More meta information about the managed identity\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/820"},"kratos#820"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Provide return_to value as part of flow entity\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1121"},"kratos#1121"),")"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Add ",(0,r.kt)("inlineCode",{parentName:"li"},"return_to")," to self-service SDK methods including logout\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1605"},"kratos#1605"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman"))),(0,r.kt)("h4",{id:"pull-requests-1"},"Pull Requests"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","feat: ReactJS, better SPA APIs, 2FA with WebAuthn &\xa0TOTP & Lookup Secrets,\nbetter errors, typescript e2e tests\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/pull/1624"},"kratos#1624"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman"))),(0,r.kt)("h3",{id:"docs-3"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/ory/kratos/labels/docs"},"Docs")),(0,r.kt)("p",null,"Affects documentation."),(0,r.kt)("h4",{id:"issues-15"},"Issues"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Include release notes in CHANGELOG.md\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1442"},"kratos#1442"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Include changelog in docs navigation\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1443"},"kratos#1443"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Config reference has not been updated since 0.5.0\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1597"},"kratos#1597"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman"))),(0,r.kt)("h3",{id:"blocking-1"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/ory/kratos/labels/blocking"},"Blocking")),(0,r.kt)("p",null,"Blocks milestones or other issues or pulls."),(0,r.kt)("h4",{id:"issues-16"},"Issues"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Ory Kratos 0.8 Release Prep\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1663"},"kratos#1663"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Add option to remove recovery codes\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/1751"},"kratos#1751"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman"))),(0,r.kt)("h4",{id:"pull-requests-2"},"Pull Requests"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","feat: ReactJS, better SPA APIs, 2FA with WebAuthn &\xa0TOTP & Lookup Secrets,\nbetter errors, typescript e2e tests\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/pull/1624"},"kratos#1624"),") -\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman"))))}p.isMDXComponent=!0}}]);