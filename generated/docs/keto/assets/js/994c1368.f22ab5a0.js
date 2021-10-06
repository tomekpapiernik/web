(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[9017],{58215:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(67294),o=n(79443);var r=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(86010),c="tabItem_1uMI",i="tabItemActive_2DSg";var l=function(e){var t,n=e.lazy,o=e.block,l=e.defaultValue,u=e.values,p=e.groupId,d=e.className,h=a.Children.toArray(e.children),m=null!=u?u:h.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=l?l:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value,f=r(),g=f.tabGroupChoices,v=f.setTabGroupChoices,y=(0,a.useState)(k),b=y[0],w=y[1],N=[];if(null!=p){var x=g[p];null!=x&&x!==b&&m.some((function(e){return e.value===x}))&&w(x)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),a=m[n].value;w(a),null!=p&&(v(p,a),setTimeout((function(){var e,n,a,o,r,s,c,l;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,r=e.right,s=window,c=s.innerHeight,l=s.innerWidth,n>=0&&r<=l&&o<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case"ArrowLeft":var o=N.indexOf(e.target)-1;n=N[o]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},d)},m.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:_,onFocus:C,onClick:C},null!=n?n:t)}))),n?(0,a.cloneElement)(h.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},57203:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var a=n(67294),o=n(55064),r=n(58215),s=n(83300),c=n.n(s),i=n(11756),l="container_2x1S",u=n(25108),p=function(e,t){if(!e)return 0;var n=t.findIndex((function(t){return t.indexOf(e)>-1}));return-1===n?0:n},d=function(e){var t=e.src,n=e.title,o=(0,a.useState)(""),r=o[0],s=o[1];(0,a.useEffect)((function(){var n,a,o;c()(t.replace("github.com","raw.githubusercontent.com").replace("/blob/","/")).then((function(e){return e.text()})).then((n=e,a=n.startAt,o=n.endAt,function(e){var t=e.split("\n"),n=p(a,t);n>0&&(t=["// ..."].concat(t.slice(n,-1)));var r=p(o,t);return r>0&&(t=[].concat(t.slice(0,r+1),["// ..."])),t.join("\n")})).then(s).catch(u.error)}),[]);var d="language-"+function(e){var t=e.split(".").pop();switch(t){case"jsx":return"jsx";case"tsx":return"tsx";case"ts":return"typescript";case"go":return"go";case"yaml":case"yml":return"yaml";case"js":return"javascript";case"html":return"html";case"pug":return"pug";default:return t}}(t),h='title="'+(n||function(e){var t=e.match(new RegExp("https://github.com/[^/]+/[^/]+/blob/[^/]+/(.+)","i"))||[];return t.length>=2?t[1]:e}(t))+'"';return a.createElement("div",{className:l},a.createElement(i.Z,{metastring:h,className:d,children:r}))},h=function(e){var t=e.sampleId,n=e.version;return a.createElement(a.Fragment,null,a.createElement(o.Z,{values:[{label:"gRPC Go",value:"grpc-go"},{label:"gRPC node.js",value:"grpc-nodejs"},{label:"REST",value:"rest"},{label:"Keto Client CLI",value:"cli"}],defaultValue:"grpc-go"},a.createElement(r.Z,{value:"grpc-go"},a.createElement(d,{src:"https://github.com/ory/keto/blob/"+n+"/contrib/docs-code-samples/"+t+"/main.go"})),a.createElement(r.Z,{value:"grpc-nodejs"},a.createElement(d,{src:"https://github.com/ory/keto/blob/"+n+"/contrib/docs-code-samples/"+t+"/index.js"})),a.createElement(r.Z,{value:"rest"},a.createElement(d,{src:"https://github.com/ory/keto/blob/"+n+"/contrib/docs-code-samples/"+t+"/curl.sh"})),a.createElement(r.Z,{value:"cli"},a.createElement(d,{src:"https://github.com/ory/keto/blob/"+n+"/contrib/docs-code-samples/"+t+"/cli.sh"}))),a.createElement(d,{src:"https://github.com/ory/keto/blob/"+n+"/contrib/docs-code-samples/"+t+"/expected_output.txt",title:"Result"}))}},32527:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var a=n(67294),o=n(21140),r=n.n(o),s="graph_1lrJ",c="pointer_3d8u",i="overlay_2fuY",l="visible_2Z3U",u="backdrop_2z5L",p=n(94184),d=n.n(p);r().initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});var h=function(e){var t,n=e.chart,o=(0,a.useState)(!1),p=o[0],h=o[1],m=(0,a.useState)(void 0),k=m[0],f=m[1],g=(0,a.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],v=function(){return h(!p)};return(0,a.useEffect)((function(){r().render(g,n,(function(e){f(e)}))}),[]),a.createElement(a.Fragment,null,a.createElement("div",{onClick:v,className:d()(s,c),dangerouslySetInnerHTML:{__html:k}}),a.createElement("div",{onClick:v,className:d()(i,c,s,(t={},t[l]=p,t))},a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:d()(u,s),dangerouslySetInnerHTML:{__html:k}})))}},46713:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),s=n(32527),c=n(57203),i=["components"],l={title:"Check whether a User has Access to Something"},u=void 0,p={unversionedId:"guides/simple-access-check-guide",id:"guides/simple-access-check-guide",isDocsHomePage:!1,title:"Check whether a User has Access to Something",description:"This guide will explain how you can use Ory Keto's",source:"@site/docs/guides/simple-access-check-guide.mdx",sourceDirName:"guides",slug:"/guides/simple-access-check-guide",permalink:"/keto/docs/next/guides/simple-access-check-guide",editUrl:"https://github.com/ory/keto/edit/master/docs/docs/guides/simple-access-check-guide.mdx",tags:[],version:"current",lastUpdatedBy:"zepatrik",lastUpdatedAt:1633511029,formattedLastUpdatedAt:"10/6/2021",frontMatter:{title:"Check whether a User has Access to Something"},sidebar:"docs",previous:{title:"Secure",permalink:"/keto/docs/next/secure"},next:{title:"List API: Display all Objects a User has Access to",permalink:"/keto/docs/next/guides/list-api-display-objects"}},d=[{value:"Synchronous Authorization Flow",id:"synchronous-authorization-flow",children:[{value:"Directly Defined Access",id:"directly-defined-access",children:[]},{value:"Indirectly Defined Access",id:"indirectly-defined-access",children:[]}]},{value:"Caching Keto&#39;s responses",id:"caching-ketos-responses",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],h={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide will explain how you can use Ory Keto's\n",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/next/concepts/api-overview#check-relation-tuple"},"check-API")," to determine\nwhether a ",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/next/concepts/subjects"},"subject")," has a specific\n",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/next/concepts/relation-tuples"},"relation")," on an\n",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/next/concepts/objects"},"object"),". The result can be used for controlling access\nto specific resources."),(0,r.kt)("h2",{id:"synchronous-authorization-flow"},"Synchronous Authorization Flow"),(0,r.kt)("p",null,"We recommend offloading the whole burden of access control to Ory Keto.\nTypically, this means that the application forwards every incoming request as a\ncheck request to Ory Keto. The following chart demonstrates how such a flow can\nlook like:"),(0,r.kt)(s.Z,{chart:"\nsequenceDiagram\n    participant U as User 'john'\n    participant A as Application\n    participant K as Ory Keto\n%%\n    U->>A: decypher(02y_15_4w350m3)\n    A->>K: check(messages:02y_15_4w350m3#35;decypher@john)\n%%\n    alt is allowed\n      K--\x3e>A: true\n      A--\x3e>U: ory_is_awesome\n    else is not allowed\n      K--\x3e>A: false\n      A--\x3e>U: Error 403\n    end\n",mdxType:"Mermaid"}),(0,r.kt)("p",null,"Note that the channel of communication between user <-> application, and\napplication <-> Ory Keto can vastly differ. The application could offer a JSON\nAPI towards the user, while communicating with Keto through gRPC."),(0,r.kt)("p",null,"As a first step, the application has to authenticate the user reliably to\nprovide the subject to Keto. This can be achieved e.g. by using\n",(0,r.kt)("a",{parentName:"p",href:"https://www.ory.sh/kratos/docs/"},"Ory Kratos")," or any other authentication\nsystem."),(0,r.kt)("p",null,"The request (here ",(0,r.kt)("inlineCode",{parentName:"p"},"decypher")," of the message ",(0,r.kt)("inlineCode",{parentName:"p"},"02y_15_4w350m3"),") is then translated\ninto a request to Ory Keto's\n",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/next/concepts/api-overview#check-relation-tuple"},"check-API"),'. Basically, the\napplication is asking Keto "Is john allowed to decypher the text\n02y_15_4w350m3?"'),(0,r.kt)("p",null,"This question is encoded as the following\n",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/next/concepts/relation-tuples"},"relation tuple"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"messages:02y_15_4w350m3#decypher@john\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It is up to the application and its defined relation tuples how the check\nrequests have to be encoded. In this example we assume that the known cypher\nmessages are stored in Ory Keto and access to the cleartext is encoded by the\n",(0,r.kt)("inlineCode",{parentName:"p"},"decypher")," relation."))),(0,r.kt)("h3",{id:"directly-defined-access"},"Directly Defined Access"),(0,r.kt)("p",null,"Ory Keto can know the exact relation tuple that the application is checking.\nIntuitively, this means that ",(0,r.kt)("inlineCode",{parentName:"p"},"john")," was allowed to ",(0,r.kt)("inlineCode",{parentName:"p"},"decypher")," the message\n",(0,r.kt)("inlineCode",{parentName:"p"},"02y_15_4w350m3"),' directly (imagine a "Share with ',(0,r.kt)("inlineCode",{parentName:"p"},"john"),'" input in a UI).'),(0,r.kt)("p",null,"Try this yourself by first adding the relation tuple using the\n",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/next/concepts/api-overview#write-apis"},"write API"),":"),(0,r.kt)(c.Z,{sampleId:"simple-access-check-guide/00-write-direct-access",version:"v0.7.0-alpha.0",mdxType:"CodeTabs"}),(0,r.kt)("p",null,"Now, we can use the check-API to verify that ",(0,r.kt)("inlineCode",{parentName:"p"},"john")," is allowed to ",(0,r.kt)("inlineCode",{parentName:"p"},"decypher")," the\nmessage:"),(0,r.kt)(c.Z,{sampleId:"simple-access-check-guide/01-check-direct-access",version:"v0.7.0-alpha.0",mdxType:"CodeTabs"}),(0,r.kt)("h3",{id:"indirectly-defined-access"},"Indirectly Defined Access"),(0,r.kt)("p",null,"On the other hand, it is possible to indirectly grant ",(0,r.kt)("inlineCode",{parentName:"p"},"john")," access to the\nresource. This could e.g. be done by adding a group, lets call it ",(0,r.kt)("inlineCode",{parentName:"p"},"hackers"),". Now\nwe can grant access to the resource to everyone in that group by adding the\nfollowing relation tuple to Ory Keto:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"messages:02y_15_4w350m3#decypher@(groups:hackers#member)\n")),(0,r.kt)("p",null,"We also have to make ",(0,r.kt)("inlineCode",{parentName:"p"},"john")," a ",(0,r.kt)("inlineCode",{parentName:"p"},"member")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"hackers")," by adding the relation\ntuple:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"groups:hackers#member@john\n")),(0,r.kt)("p",null,"Now, when Keto receives above check request, it will resolve the\n",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/next/concepts/subjects#subject-sets"},"subject set")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"groups:hackers#member\n")),(0,r.kt)("p",null,"and determine that ",(0,r.kt)("inlineCode",{parentName:"p"},"john")," is a subject in the resulting set. Therefore, it\napproves the check request."),(0,r.kt)("p",null,"There is no limit on the number of indirections through subject sets. It is\nhowever important to follow our\n",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/next/guides/access-control-list-design-best-practices"},"best practices")," to ensure a\ngood ",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/next/performance"},"performance"),"."),(0,r.kt)("h2",{id:"caching-ketos-responses"},"Caching Keto's responses"),(0,r.kt)("p",null,"We do not recommend that you cache the responses from Ory Keto. It is designed\nto respond quickly and still provide\n",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/next/concepts/snaptokens-evaluation-consistency"},"some consistency guarantees"),".\nEspecially, for the revocation of access it is important to not use a local\ncache. Be ensured that Ory Keto heavily utilizes caching wherever possible. If\nyou still happen to find unacceptably slow check requests, check that you follow\nour ",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/next/guides/access-control-list-design-best-practices"},"best practices")," for good\n",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/next/performance"},"performance"),", or open an issue if the problem still\npersists."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"We learned how to integrate check requests and access control into an\napplication using Ory Keto's\n",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/next/concepts/api-overview#check-relation-tuple"},"check-API"),"."))}m.isMDXComponent=!0},11748:function(e,t,n){var a={"./locale":89234,"./locale.js":89234};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=11748},83300:function(e,t){"use strict";var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,n.fetch&&(t.default=n.fetch.bind(n)),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response}}]);