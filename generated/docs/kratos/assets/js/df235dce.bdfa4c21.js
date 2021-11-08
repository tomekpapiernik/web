"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[9002],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(87462),a=n(67294),i=n(72389),o=n(79443);var s=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(89521),c=n(86010),u="tabItem_1uMI";function d(e){var t,n,r,i=e.lazy,o=e.block,d=e.defaultValue,p=e.values,m=e.groupId,h=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),y=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=s(),b=k.tabGroupChoices,w=k.setTabGroupChoices,T=(0,a.useState)(g),N=T[0],O=T[1],I=[],x=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=b[m];null!=E&&E!==N&&v.some((function(e){return e.value===E}))&&O(E)}var C=function(e){var t=e.currentTarget,n=I.indexOf(t),r=v[n].value;r!==N&&(x(t),O(r),null!=m&&w(m,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=I.indexOf(e.currentTarget)+1;n=I[r]||I[0];break;case"ArrowLeft":var a=I.indexOf(e.currentTarget)-1;n=I[a]||I[I.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},h)},v.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":N===t}),key:t,ref:function(e){return I.push(e)},onKeyDown:P,onFocus:C,onClick:C},null!=n?n:t)}))),i?(0,a.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function p(e){var t=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},44703:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return h}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(26396),s=n(58215),l=["components"],c={id:"managing-users-identities",title:"Managing Users and Identities"},u=void 0,d={unversionedId:"admin/managing-users-identities",id:"version-v0.7/admin/managing-users-identities",isDocsHomePage:!1,title:"Managing Users and Identities",description:"This document walks you through the administrative identity management in Ory",source:"@site/versioned_docs/version-v0.7/admin/managing-users-identities.mdx",sourceDirName:"admin",slug:"/admin/managing-users-identities",permalink:"/kratos/docs/v0.7/admin/managing-users-identities",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.7/admin/managing-users-identities.mdx",tags:[],version:"v0.7",lastUpdatedBy:"aeneasr",lastUpdatedAt:1629722980,formattedLastUpdatedAt:"8/23/2021",frontMatter:{id:"managing-users-identities",title:"Managing Users and Identities"},sidebar:"version-v0.7/docs",previous:{title:"Hooks",permalink:"/kratos/docs/v0.7/self-service/hooks"},next:{title:"Sign in with GitHub, GitLab, Google, Facebook, LinkedIn, Microsoft ...",permalink:"/kratos/docs/v0.7/guides/sign-in-with-github-google-facebook-linkedin"}},p=[{value:"Creating an Identity",id:"creating-an-identity",children:[{value:"Invite a User",id:"invite-a-user",children:[],level:3},{value:"Import a User Identity",id:"import-a-user-identity",children:[],level:3},{value:"Creating a Machine Identity",id:"creating-a-machine-identity",children:[],level:3},{value:"Enable recovery flows",id:"enable-recovery-flows",children:[],level:3}],level:2}],m={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document walks you through the administrative identity management in Ory\nKratos. You should already be familiar with the\n",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/v0.7/concepts/identity-schema"},"Identity Schema")," before reading this guide."),(0,i.kt)("h2",{id:"creating-an-identity"},"Creating an Identity"),(0,i.kt)("p",null,"There are three principal flows supported for creating identities as an\nadministrator:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Inviting users - e.g. inviting a new employee to your organization IT."),(0,i.kt)("li",{parentName:"ol"},"Importing existing users - e.g. when migrating from another system to Ory\nKratos."),(0,i.kt)("li",{parentName:"ol"},"Creating machine users - e.g. creating Service Accounts.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Similar to other guides, we assume that Ory Kratos runs on 127.0.0.1:4433\n(public endpoint) and 127.0.0.1:4434 (admin endpoint) in this guide, which is\nthe default when running the quickstart."))),(0,i.kt)("h3",{id:"invite-a-user"},"Invite a User"),(0,i.kt)("p",null,"The goal of this flow is to create an identity and provide the end-user with a\nway of signing into the identity (account) and setting their password (or any\nother type of credential) for future logins. To achieve this, first create the\nidentity and set its traits and schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ curl --request POST -sL \\\n    --header "Content-Type: application/json" \\\n    --request POST \\\n    --data \'{\n  "schema_id": "default",\n  "traits": {\n    "email": "foo@ory.sh"\n  }\n}\' \\\n    http://127.0.0.1:4434/identities\n\n{\n  "id": "954f7f59-16a5-4152-8ce7-ad7c73bb124a",\n  "schema_id": "default",\n  "traits":{\n    "email": "foo@ory.sh"\n  }\n}\n')),(0,i.kt)("p",null,"Keep in mind that you can change the ",(0,i.kt)("inlineCode",{parentName:"p"},"schema_id"),' to reflect the schema you want\nto use for this user. Similarly, the trait key/values depend on your schema as\nwell. The command shown does not create a password for the identity or any other\ntype of credential. Instead, we will use another REST call to create a recovery\nlink (here "invite link" is probably more appropriate, but the flow uses an\naccount recovery link).'),(0,i.kt)("p",null,"To create the account recovery link, use:"),(0,i.kt)(o.Z,{defaultValue:"curl",values:[{label:"curl",value:"curl"},{label:"GoLang",value:"go"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"curl",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ curl --request POST -sL \\\n    --header "Content-Type: application/json" \\\n    --request POST \\\n    --data \'{\n  "expires_in": "12h",\n  "identity_id": "954f7f59-16a5-4152-8ce7-ad7c73bb124a"\n}\' \\\n    http://127.0.0.1:4434/recovery/link\n\n{\n  "expires_at": "2020-07-27T10:47:45.806Z",\n  "recovery_link": "https://playground.projects.oryapis.com/api/kratos/public/self-service/browser/flows/recovery/link?request=8b6fd3e4-1de2-49bf-aa88-1a26634bf062\\u0026token=b1tGmHf64cYDeHB9wKiuCF1FfycMJEyf"\n}\n'))),(0,i.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "github.com/ory/kratos-client-go/client"\n    "github.com/ory/kratos-client-go/client/admin"\n    "github.com/ory/kratos-client-go/models"\n)\n\nfunc main() {\n    c := client.New(nil, &client.TransportConfig{\n        Host: "127.0.0.1:4434",\n        BasePath: "/",\n        Schemes: []string{"http"},\n    })\n\n    res, err := c.Admin.CreateRecoveryLink(admin.NewCreateRecoveryLinkParams().WithBody(admin.CreateRecoveryLinkBody{\n        IdentityID: models.UUID("the-uuid"),\n    }))\n    if err != nil {\n        // ...\n    }\n\n    fmt.Printf("Use link: %s", *res.Payload.RecoveryLink)\n}\n')),(0,i.kt)("p",null,"The response contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"recovery_link")," value which is the link the user should\nuse to set up his or her credentials (e.g. connect to a Social Sign In Provider,\nset up a password, ...). The user has only a limited amount of time to do so -\nthe amount of time is specified in the Ory Kratos config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml"',title:'"path/to/kratos/config.yml"'},"selfservice:\n  flows:\n    settings:\n      privileged_session_max_age: 30m\n")),(0,i.kt)("p",null,"If the user fails to set up his / her credentials in time, another recovery link\nneeds to be issued and the user needs to re-do the flow."),(0,i.kt)("p",null,"It is currently not possible to send the recovery link directly to a user's\nemail, this feature is tracked as\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/595"},"#595"),"."))),(0,i.kt)("h3",{id:"import-a-user-identity"},"Import a User Identity"),(0,i.kt)("p",null,"This feature is not implemented yet."),(0,i.kt)("h3",{id:"creating-a-machine-identity"},"Creating a Machine Identity"),(0,i.kt)("p",null,"This feature is not implemented yet."),(0,i.kt)("h3",{id:"enable-recovery-flows"},"Enable recovery flows"),(0,i.kt)("p",null,"To enable recovery flows, make the following adjustments to your Ory Kratos\nconfiguration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/config/kratos.yml"',title:'"path/to/config/kratos.yml"'},"selfservice:\n  methods:\n    link:\n      enabled: true\n  flows:\n    recovery:\n      enabled: true\n")),(0,i.kt)("p",null,"To specify that an identity's trait is a recovery email, use the following\nIdentity Schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},' {\n   "$id": "https://schemas.ory.sh/presets/kratos/quickstart/email-password/identity.schema.json",\n   "$schema": "http://json-schema.org/draft-07/schema#",\n   "title": "Person",\n   "type": "object",\n   "properties": {\n     "traits": {\n       "type": "object",\n       "properties": {\n         "email": {\n           "type": "string",\n           "format": "email",\n           "ory.sh/kratos": {\n             "credentials": {\n               "password": {\n                 "identifier": true\n               }\n             },\n+            "recovery": {\n+              "via": "email"\n+            }\n           }\n         }\n       }\n       "additionalProperties": false\n     }\n   }\n }\n')),(0,i.kt)("p",null,"For more detailed information and general guidelines on these flows, take a look\nat the\n",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/v0.7/self-service/flows/account-recovery"},"Account Recovery and Password Reset"),"\nsection."))}h.isMDXComponent=!0}}]);