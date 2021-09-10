(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[34862],{58215:function(e,t,n){"use strict";var o=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var o=n(67294),a=n(79443);var s=function(){var e=(0,o.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=n(86010),i="tabItem_1uMI",c="tabItemActive_2DSg";var l=function(e){var t,n=e.lazy,a=e.block,l=e.defaultValue,d=e.values,u=e.groupId,m=e.className,p=o.Children.toArray(e.children),h=null!=d?d:p.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=l?l:null==(t=p.find((function(e){return e.props.default})))?void 0:t.props.value,g=s(),f=g.tabGroupChoices,b=g.setTabGroupChoices,y=(0,o.useState)(v),k=y[0],x=y[1],T=[];if(null!=u){var w=f[u];null!=w&&w!==k&&h.some((function(e){return e.value===w}))&&x(w)}var N=function(e){var t=e.currentTarget,n=T.indexOf(t),o=h[n].value;x(o),null!=u&&(b(u,o),setTimeout((function(){var e,n,o,a,s,r,i,l;(e=t.getBoundingClientRect(),n=e.top,o=e.left,a=e.bottom,s=e.right,r=window,i=r.innerHeight,l=r.innerWidth,n>=0&&s<=l&&a<=i&&o>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=T.indexOf(e.target)+1;n=T[o]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.target)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},m)},h.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,r.Z)("tabs__item",i,{"tabs__item--active":k===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:N,onClick:N},null!=n?n:t)}))),n?(0,o.cloneElement)(p.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){"use strict";var o=(0,n(67294).createContext)(void 0);t.Z=o},73295:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(67294),a=n(83300),s=n.n(a),r=n(11756),i="container_2x1S",c=n(25108),l=function(e,t){if(!e)return 0;var n=t.findIndex((function(t){return t.indexOf(e)>-1}));return-1===n?0:n},d=function(e){var t=e.src,n=e.title,a=(0,o.useState)(""),d=a[0],u=a[1];(0,o.useEffect)((function(){var n,o,a;s()(t.replace("github.com","raw.githubusercontent.com").replace("/blob/","/")).then((function(e){return e.text()})).then((n=e,o=n.startAt,a=n.endAt,function(e){var t=e.split("\n"),n=l(o,t);n>0&&(t=["// ..."].concat(t.slice(n,-1)));var s=l(a,t);return s>0&&(t=[].concat(t.slice(0,s+1),["// ..."])),t.join("\n")})).then(u).catch(c.error)}),[]);var m="language-"+function(e){var t=e.split(".").pop();switch(t){case"jsx":return"jsx";case"tsx":return"tsx";case"ts":return"typescript";case"go":return"go";case"yaml":case"yml":return"yaml";case"js":return"javascript";case"html":return"html";case"pug":return"pug";default:return t}}(t),p='title="'+(n||function(e){var t=e.match(new RegExp("https://github.com/[^/]+/[^/]+/blob/[^/]+/(.+)","i"))||[];return t.length>=2?t[1]:e}(t))+'"';return o.createElement("div",{className:i},o.createElement(r.Z,{metastring:p,className:m,children:d}))}},37233:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return p},default:function(){return v}});var o=n(22122),a=n(19756),s=(n(67294),n(3905)),r=n(55064),i=n(58215),c=n(73295),l=["components"],d={id:"consent",title:"Implementing the Consent Endpoint & UI",sidebar_label:"Consent Endpoint"},u=void 0,m={unversionedId:"guides/consent",id:"guides/consent",isDocsHomePage:!1,title:"Implementing the Consent Endpoint & UI",description:"Please read the Consent Flow Documentation first!",source:"@site/docs/guides/consent.mdx",sourceDirName:"guides",slug:"/guides/consent",permalink:"/hydra/docs/next/guides/consent",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/guides/consent.mdx",tags:[],version:"current",lastUpdatedBy:"Louis Laureys",lastUpdatedAt:1623407651,formattedLastUpdatedAt:"6/11/2021",frontMatter:{id:"consent",title:"Implementing the Consent Endpoint & UI",sidebar_label:"Consent Endpoint"},sidebar:"docs",previous:{title:"Login Endpoint",permalink:"/hydra/docs/next/guides/login"},next:{title:"Logout Endpoint",permalink:"/hydra/docs/next/guides/logout"}},p=[{value:"Implementing the Consent HTML Form",id:"implementing-the-consent-html-form",children:[]},{value:"Accepting the Consent Request",id:"accepting-the-consent-request",children:[]},{value:"Rejecting the Consent Request",id:"rejecting-the-consent-request",children:[]},{value:"Skipping Consent Screen",id:"skipping-consent-screen",children:[]},{value:"Complete Endpoint",id:"complete-endpoint",children:[]}],h={toc:p};function v(e){var t=e.components,d=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,o.Z)({},h,d,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Please read the ",(0,s.kt)("a",{parentName:"p",href:"/hydra/docs/next/concepts/consent"},"Consent Flow Documentation")," first!"))),(0,s.kt)("p",null,"In this document, you will learn how to implement the Consent Endpoint using our\nORY Hydra SDKs. The goal for this document is to have document this for multiple\nprogramming languages. If you are an expert in one of these languages, your help\nis highly appreciated in improving these docs!"),(0,s.kt)("p",null,"Code shown here is taken out of the ORY Hydra Login & Consent Node Reference\napplication which you can find on GitHub."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra-login-consent-node"},(0,s.kt)("img",{parentName:"a",src:"https://gh-card.dev/repos/ory/hydra-login-consent-node.svg",alt:"ory/hydra-login-consent-node - GitHub"}))),(0,s.kt)("h2",{id:"implementing-the-consent-html-form"},"Implementing the Consent HTML Form"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The Consent HTML Form cannot be only a Single Page App (Client-side browser\napplication) or a Mobile App! There has to be a server-side component with\naccess to ORY Hydra's Admin Endpoint!"))),(0,s.kt)(r.Z,{defaultValue:"ui",values:[{label:"UI",value:"ui"},{label:"NodeJS",value:"node"},{label:"HTML Example",value:"html"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ui",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("img",{alt:"OAuth2 Consent UI Screen",src:n(42148).Z}))),(0,s.kt)(i.Z,{value:"node",mdxType:"TabItem"},(0,s.kt)(c.Z,{src:"https://github.com/ory/hydra-login-consent-node/blob/master/src/routes/consent.ts",mdxType:"CodeFromRemote"})),(0,s.kt)(i.Z,{value:"html",mdxType:"TabItem"},(0,s.kt)(c.Z,{src:"https://github.com/ory/hydra-login-consent-node/blob/master/views/consent.pug",mdxType:"CodeFromRemote"}))),(0,s.kt)("h2",{id:"accepting-the-consent-request"},"Accepting the Consent Request"),(0,s.kt)(r.Z,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"node",mdxType:"TabItem"},(0,s.kt)(c.Z,{startAt:"let grantScope = req.body.grant_scope",endAt:"// label:docs-accept-consent",src:"https://github.com/ory/hydra-login-consent-node/blob/master/src/routes/consent.ts",mdxType:"CodeFromRemote"}))),(0,s.kt)("h2",{id:"rejecting-the-consent-request"},"Rejecting the Consent Request"),(0,s.kt)(r.Z,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"node",mdxType:"TabItem"},(0,s.kt)(c.Z,{startAt:"if (req.body.submit === 'Deny access') {",endAt:"// label:consent-deny-end",src:"https://github.com/ory/hydra-login-consent-node/blob/master/src/routes/consent.ts",mdxType:"CodeFromRemote"}))),(0,s.kt)("h2",{id:"skipping-consent-screen"},"Skipping Consent Screen"),(0,s.kt)(r.Z,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"node",mdxType:"TabItem"},(0,s.kt)(c.Z,{startAt:"// This section processes consent requests and either shows the consent UI",endAt:"// The consent request has now either been accepted automatically",src:"https://github.com/ory/hydra-login-consent-node/blob/master/src/routes/consent.ts",mdxType:"CodeFromRemote"}))),(0,s.kt)("h2",{id:"complete-endpoint"},"Complete Endpoint"),(0,s.kt)(r.Z,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"node",mdxType:"TabItem"},(0,s.kt)(c.Z,{src:"https://github.com/ory/hydra-login-consent-node/blob/master/src/routes/consent.ts",mdxType:"CodeFromRemote"}))))}v.isMDXComponent=!0},83300:function(e,t){"use strict";var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,n.fetch&&(t.default=n.fetch.bind(n)),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response},42148:function(e,t,n){"use strict";t.Z=n.p+"assets/images/consent-endpoint-31856a0555a6a8438d4603692bdab5d2.png"}}]);