(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[76130],{13919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},44996:function(e,t,n){"use strict";n.d(t,{C:function(){return s},Z:function(){return l}});var r=n(52263),a=n(13919);function s(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,s=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var s=void 0===r?{}:r,l=s.forcePrependBaseUrl,o=void 0!==l&&l,i=s.absolute,u=void 0!==i&&i;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(o)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(s,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,s().withBaseUrl)(e,t)}},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},26396:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(87462),a=n(67294),s=n(72389),l=n(79443);var o=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(89521),u=n(86010),c="tabItem_1uMI";function d(e){var t,n,r,s=e.lazy,l=e.block,d=e.defaultValue,m=e.values,v=e.groupId,p=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,i.lx)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=o(),g=b.tabGroupChoices,w=b.setTabGroupChoices,T=(0,a.useState)(y),x=T[0],N=T[1],q=[],_=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var Z=g[v];null!=Z&&Z!==x&&h.some((function(e){return e.value===Z}))&&N(Z)}var I=function(e){var t=e.currentTarget,n=q.indexOf(t),r=h[n].value;r!==x&&(_(t),N(r),null!=v&&w(v,r))},R=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=q.indexOf(e.currentTarget)+1;n=q[r]||q[0];break;case"ArrowLeft":var a=q.indexOf(e.currentTarget)-1;n=q[a]||q[q.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},p)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":x===t}),key:t,ref:function(e){return q.push(e)},onKeyDown:R,onFocus:I,onClick:I},null!=n?n:t)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,s.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},59079:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(67294),a=n(21140),s=n.n(a),l="graph_1lrJ",o="pointer_3d8u",i="overlay_2fuY",u="visible_2Z3U",c="backdrop_2z5L",d=n(94184),m=n.n(d);s().initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});var v=function(e){var t,n=e.chart,a=(0,r.useState)(!1),d=a[0],v=a[1],p=(0,r.useState)(void 0),f=p[0],h=p[1],k=(0,r.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],y=function(){return v(!d)};return(0,r.useEffect)((function(){s().render(k,n,(function(e){h(e)}))}),[]),r.createElement(r.Fragment,null,r.createElement("div",{onClick:y,className:m()(l,o),dangerouslySetInnerHTML:{__html:f}}),r.createElement("div",{onClick:y,className:m()(i,o,l,(t={},t[u]=d,t))},r.createElement("div",{onClick:function(e){return e.stopPropagation()},className:m()(c,l),dangerouslySetInnerHTML:{__html:f}})))}},19500:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return v},toc:function(){return p},default:function(){return h}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),l=n(44996),o=n(59079),i=n(26396),u=n(58215),c=["components"],d={id:"password-reset-recovery-link",title:"Recovery Link and Password Reset"},m=void 0,v={unversionedId:"self-service/flows/account-recovery/password-reset-recovery-link",id:"version-v0.4/self-service/flows/account-recovery/password-reset-recovery-link",isDocsHomePage:!1,title:"Recovery Link and Password Reset",description:"Please read the Account Recover Documentation first.",source:"@site/versioned_docs/version-v0.4/self-service/flows/account-recovery/password-reset-recovery-link.mdx",sourceDirName:"self-service/flows/account-recovery",slug:"/self-service/flows/account-recovery/password-reset-recovery-link",permalink:"/kratos/docs/v0.4/self-service/flows/account-recovery/password-reset-recovery-link",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/self-service/flows/account-recovery/password-reset-recovery-link.mdx",tags:[],version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594198226,formattedLastUpdatedAt:"7/8/2020",frontMatter:{id:"password-reset-recovery-link",title:"Recovery Link and Password Reset"},sidebar:"version-v0.4/docs",previous:{title:"Account Recovery",permalink:"/kratos/docs/v0.4/self-service/flows/account-recovery"},next:{title:"User Logout",permalink:"/kratos/docs/v0.4/self-service/flows/user-logout"}},p=[{value:"Browser Clients",id:"browser-clients",children:[],level:2},{value:"API Clients",id:"api-clients",children:[],level:2},{value:"Security",id:"security",children:[{value:"Account Enumeration Defenses",id:"account-enumeration-defenses",children:[],level:3}],level:2}],f={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,c);return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Before you start")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Please read the ",(0,s.kt)("a",{parentName:"p",href:"/kratos/docs/v0.4/self-service/flows/account-recovery"},"Account Recover Documentation")," first."))),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"link")," strategy performs account recovery (also known as password reset) by\nsending an email containing a recovery link to the user."),(0,s.kt)("p",null,"There are two email types sent by this strategy:"),(0,s.kt)("p",null,(0,s.kt)("figure",null,(0,s.kt)("img",{alt:"Recovery email sent to unknown address",src:(0,l.Z)("img/docs/mailslurper-recovery-unknown.png")}),(0,s.kt)("figcaption",null,"If the requested email address is a known recovery address, a recovery link is sent to that email address."))),(0,s.kt)("p",null,(0,s.kt)("figure",null,(0,s.kt)("img",{alt:"Recovery email sent to unknown address",src:(0,l.Z)("img/docs/mailslurper-recovery-unknown.png")}),(0,s.kt)("figcaption",null,"If the requested email address is a known recovery address, a recovery link is sent to that email address."))),(0,s.kt)("p",null,"This prevents account enumeration attacks as explained in this\n",(0,s.kt)("a",{parentName:"p",href:"https://www.troyhunt.com/website-enumeration-insanity-how-our-personal-data-is-leaked/"},"brilliant blog post by Troy Hunt"),"."),(0,s.kt)("p",null,"You should also configure how long a session is privileged. The user will only\nbe able to update his/her password (or any other credential) for the specified\namount of time after clicking on the recovery link:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml"',title:'"path/to/kratos/config.yml"'},"selfservice:\n  flows:\n    settings:\n      privileged_session_max_age: 15m\n")),(0,s.kt)("p",null,"This strategy does not implement any other flow."),(0,s.kt)("h2",{id:"browser-clients"},"Browser Clients"),(0,s.kt)("p",null,"To initiate the request, point the browser to\n",(0,s.kt)("a",{parentName:"p",href:"/kratos/docs/v0.4/self-service/flows/account-recovery"},"Self-Service Recovery Endpoint"),":"),(0,s.kt)(i.Z,{defaultValue:"html",values:[{label:"HTML",value:"html"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(u.Z,{value:"html",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<a\n  href="https://<kratos-public>/self-service/browser/flows/recovery"/>\n    Recover your account!\n</a>\n'))),(0,s.kt)(u.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// ...\nwindow.location.href =\n  'https://<kratos-public>/self-service/browser/flows/recovery'\n")))),(0,s.kt)("p",null,"Next, the user is redirected to the Recovery UI set by config variable\n",(0,s.kt)("inlineCode",{parentName:"p"},"selfservice.flows.recovery.ui_url")," with a ",(0,s.kt)("inlineCode",{parentName:"p"},"?request=...")," query parameter:"),(0,s.kt)(i.Z,{defaultValue:"ui",values:[{label:"Recovery User Interface",value:"ui"},{label:"Recovery Request Payload",value:"json"},{label:"HTML Form Example",value:"form"}],mdxType:"Tabs"},(0,s.kt)(u.Z,{value:"ui",mdxType:"TabItem"},(0,s.kt)("p",null,"The browser is redirected to, for example:\n",(0,s.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4455/recovery?request=e219b0ee-58a8-4dc4-aeb6-294e9787dfa9")),(0,s.kt)("img",{alt:"Choosing a Recovery method",src:(0,l.Z)("img/docs/secureapp-recovery-choose_method.png")})),(0,s.kt)(u.Z,{value:"json",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/recovery?request=e219b0ee-58a8-4dc4-aeb6-294e9787dfa9"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/recovery?request":'e219b0ee-58a8-4dc4-aeb6-294e9787dfa9"'},'{\n  "id": "e219b0ee-58a8-4dc4-aeb6-294e9787dfa9",\n  "expires_at": "2020-07-02T15:41:22.1559315Z",\n  "issued_at": "2020-07-02T14:41:22.1559545Z",\n  "request_url": "http://kratos:4433/self-service/browser/flows/recovery",\n  "messages": null,\n  "methods": {\n    "link": {\n      "method": "link",\n      "config": {\n        "action": "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/recovery/link?request=4f49fd6b-fd13-4de2-ac66-adeffa5e5fe3",\n        "method": "POST",\n        "fields": [\n          {\n            "name": "csrf_token",\n            "type": "hidden",\n            "required": true,\n            "value": "9uShdYinBW8ynTrlu0keAR00Itdq5xgMZREbxqTzrjQmgRxZytFlhbAujU7X4iDBlHUtQLO3Q7D+e4fVt1BWWg=="\n          },\n          {\n            "name": "email",\n            "type": "email",\n            "required": true\n          }\n        ]\n      }\n    }\n  },\n  "state": "choose_method"\n}\n'))),(0,s.kt)(u.Z,{value:"form",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container">\n    <h4>Recover your account</h4>\n    <div id="recovery-token">\n        <form action="http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/recovery/link?request=e219b0ee-58a8-4dc4-aeb6-294e9787dfa9" method="POST">\n            <input name="csrf_token" type="hidden" value="9uShdYinBW8ynTrlu0keAR00Itdq5xgMZREbxqTzrjQmgRxZytFlhbAujU7X4iDBlHUtQLO3Q7D+e4fVt1BWWg==">\n            <fieldset>\n            <label>\n                <input name="email" type="email" value="" placeholder="email">\n                <span>email</span>\n            </label>\n            <button type="submit">submit</button>\n        </form>\n    </div>\n</div>\n')))),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"state")," parameter follows the state machine"),(0,s.kt)(o.Z,{chart:"\nstateDiagram-v2\n\t[*] --\x3e choose_method\n\tchoose_method --\x3e sent_email\n\tsent_email --\x3e sent_email\n\tnote right of sent_email\n\t    The user may fill out the email form input again as a way to re-send the email.\n\tend note\n\tsent_email --\x3e passed_challenge\n\tpassed_challenge --\x3e [*]\n",mdxType:"Mermaid"}),(0,s.kt)("p",null,"where"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"choose_method")," indicates that the user has not chosen a recovery method yet.\nThis is useful when ",(0,s.kt)("inlineCode",{parentName:"li"},"link")," is not the only recovery method active."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"sent_email")," implies that the recovery email has been sent out."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"passwed_challenge")," is set when the user has clicked the recovery link and\ncompleted the account recovery.")),(0,s.kt)("p",null,"If the form validation fails, an error will be included and ",(0,s.kt)("inlineCode",{parentName:"p"},"state")," will also be\nset:"),(0,s.kt)(i.Z,{defaultValue:"ui",values:[{label:"Recovery User Interface",value:"ui"},{label:"Recovery Request Payload",value:"json"},{label:"HTML Form Example",value:"form"}],mdxType:"Tabs"},(0,s.kt)(u.Z,{value:"ui",mdxType:"TabItem"},(0,s.kt)("img",{alt:"Sent form data is invalid",src:(0,l.Z)("img/docs/secureapp-recovery-link-form-data.png")})),(0,s.kt)(u.Z,{value:"json",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/recovery?request=81d6f25e-6163-467a-afa3-1dae6c58b83d"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/recovery?request":'81d6f25e-6163-467a-afa3-1dae6c58b83d"'},'{\n  "id": "e6b25130-72d8-4776-8435-8d4790f7ec2f",\n  "expires_at": "2020-07-03T16:07:55.1926121Z",\n  "issued_at": "2020-07-03T15:07:55.1927213Z",\n  "request_url": "http://kratos:4433/self-service/browser/flows/recovery",\n  "active": "link",\n  "messages": null,\n  "methods": {\n    "link": {\n      "method": "link",\n      "config": {\n        "action": "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/recovery/link?request=e6b25130-72d8-4776-8435-8d4790f7ec2f",\n        "method": "POST",\n        "fields": [\n          {\n            "name": "csrf_token",\n            "type": "hidden",\n            "required": true,\n            "value": "k+efLwMKH9WilerNWEiUu48qMtKqGxAXrcVR506mXVNDgiIDQXx/PyAmXWY046p7Bms9RXNLS6s2r830XQWlPQ=="\n          },\n          {\n            "name": "email",\n            "type": "email",\n            "required": true,\n            "value": "",\n            "messages": [\n              {\n                "id": 4000002,\n                "text": "Property email is missing.",\n                "type": "error",\n                "context": {\n                  "property": "email"\n                }\n              }\n            ]\n          }\n        ]\n      }\n    }\n  },\n  "state": "choose_method"\n}\n'))),(0,s.kt)(u.Z,{value:"form",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container">\n  <h4>Recover your account</h4>\n  <div id="recovery-token">\n    <form\n      action="http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/recovery/link?request=e6b25130-72d8-4776-8435-8d4790f7ec2f"\n      method="POST"\n    >\n      <input\n        name="csrf_token"\n        type="hidden"\n        value="k+efLwMKH9WilerNWEiUu48qMtKqGxAXrcVR506mXVNDgiIDQXx/PyAmXWY046p7Bms9RXNLS6s2r830XQWlPQ=="\n      />\n      <fieldset>\n        <label>\n          <input name="email" type="email" value="" placeholder="email" />\n          <span>email</span>\n        </label>\n        <div class="messages ">\n          <div class="message error">Property email is missing.</div>\n        </div>\n      </fieldset>\n      <button type="submit">submit</button>\n    </form>\n  </div>\n</div>\n')))),(0,s.kt)("p",null,"If the form data is valid, the ",(0,s.kt)("inlineCode",{parentName:"p"},"state")," is set to ",(0,s.kt)("inlineCode",{parentName:"p"},"sent_email")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"messages"),"\nwill also be set:"),(0,s.kt)(i.Z,{defaultValue:"ui",values:[{label:"Recovery User Interface",value:"ui"},{label:"Recovery Request Payload",value:"json"},{label:"HTML Form Example",value:"form"}],mdxType:"Tabs"},(0,s.kt)(u.Z,{value:"ui",mdxType:"TabItem"},(0,s.kt)("img",{alt:"Sent form data is invalid",src:(0,l.Z)("img/docs/secureapp-recovery-link-form-data-valid.png")})),(0,s.kt)(u.Z,{value:"json",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/recovery?request=7f3b531f-f78b-46ba-b770-873082dca1b7"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/recovery?request":'7f3b531f-f78b-46ba-b770-873082dca1b7"'},'{\n  "id": "7f3b531f-f78b-46ba-b770-873082dca1b7",\n  "expires_at": "2020-07-03T16:12:16.1835054Z",\n  "issued_at": "2020-07-03T15:12:16.183525Z",\n  "request_url": "http://kratos:4433/self-service/browser/flows/recovery",\n  "active": "link",\n  "messages": [\n    {\n      "id": 1060002,\n      "text": "An email containing a recovery link has been sent to the email address you provided.",\n      "type": "info",\n      "context": {}\n    }\n  ],\n  "methods": {\n    "link": {\n      "method": "link",\n      "config": {\n        "action": "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/recovery/link?request=7f3b531f-f78b-46ba-b770-873082dca1b7",\n        "method": "POST",\n        "fields": [\n          {\n            "name": "csrf_token",\n            "type": "hidden",\n            "required": true,\n            "value": "Iq5ga/L7JIXHgxiLkSSyH+X4Scp/kLTFaLQexH4vUBDyy91HsI1Eb0UwryD9j4zfbLlGXabA73nz3oLXbYyofg=="\n          },\n          {\n            "name": "email",\n            "type": "email",\n            "required": true,\n            "value": "exists@ory.sh"\n          }\n        ]\n      }\n    }\n  },\n  "state": "sent_email"\n}\n'))),(0,s.kt)(u.Z,{value:"form",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container">\n  <h4>Recover your account</h4>\n  <div class="messages global">\n    <div class="message info">\n      An email containing a recovery link has been sent to the email address you\n      provided.\n    </div>\n  </div>\n  <div id="recovery-token">\n    <form\n      action="http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/recovery/link?request=7f3b531f-f78b-46ba-b770-873082dca1b7"\n      method="POST"\n    >\n      <input\n        name="csrf_token"\n        type="hidden"\n        value="Iq5ga/L7JIXHgxiLkSSyH+X4Scp/kLTFaLQexH4vUBDyy91HsI1Eb0UwryD9j4zfbLlGXabA73nz3oLXbYyofg=="\n      />\n      <fieldset>\n        <label>\n          <input\n            name="email"\n            type="email"\n            value="exists@ory.sh"\n            placeholder="email"\n          />\n          <span>email</span>\n        </label>\n      </fieldset>\n      <button type="submit">submit</button>\n    </form>\n  </div>\n</div>\n')))),(0,s.kt)("p",null,"Once the user clicks the link in the E-Mail, she/he will be redirected to the\nSettings endpoint (e.g.\n",(0,s.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4455/settings?request=752b6d46-af3d-40d2-9d06-b3e3c0279f02"),")\ndirecting the user to update the password / other credentials:"),(0,s.kt)(i.Z,{defaultValue:"ui",values:[{label:"Settings User Interface",value:"ui"},{label:"Settings Request Payload",value:"json"},{label:"HTML Form Example",value:"form"}],mdxType:"Tabs"},(0,s.kt)(u.Z,{value:"ui",mdxType:"TabItem"},(0,s.kt)("img",{alt:"Recovery email sent to unknown address",src:(0,l.Z)("img/docs/secureapp-recovery-change.png")})),(0,s.kt)(u.Z,{value:"json",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/settings?request=752b6d46-af3d-40d2-9d06-b3e3c0279f02"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/settings?request":'752b6d46-af3d-40d2-9d06-b3e3c0279f02"'},"{\n  id: '752b6d46-af3d-40d2-9d06-b3e3c0279f02',\n  expires_at: '2020-07-03T15:26:14.1768727Z',\n  issued_at: '2020-07-03T14:26:14.1768883Z',\n  request_url: 'http://kratos:4433/self-service/browser/flows/recovery/link?token=DrFHnM3UAgSpqfSfpho4EbIhiR4Ov0B6',\n  messages: [\n    {\n      id: 1060001,\n      text: 'You successfully recovered your accent. Please change your password or set up an alternative login method (e.g. social sign in) within the next 15.00 minutes.',\n      type: 'info',\n      context: {\n        privilegedSessionExpiresAt: '2020-07-03T14:41:14.176908Z'\n      }\n    }\n  ]\n  // ...\n}\n")))),(0,s.kt)("p",null,"If the user clicks an invalid (already used, expired) recovery link, a new\nrecovery request will be initiated and she/he will be asked to retry the flow:"),(0,s.kt)(i.Z,{defaultValue:"ui",values:[{label:"Recovery User Interface",value:"ui"},{label:"Recovery Request Payload",value:"json"}],mdxType:"Tabs"},(0,s.kt)(u.Z,{value:"ui",mdxType:"TabItem"},(0,s.kt)("img",{alt:"Recovery email sent to unknown address",src:(0,l.Z)("img/docs/secureapp-recovery-change.png")})),(0,s.kt)(u.Z,{value:"json",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/recovery?request=ce7a8d78-ffd7-438f-90d3-f6b923faa405"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/recovery?request":'ce7a8d78-ffd7-438f-90d3-f6b923faa405"'},"{\n  id: 'ce7a8d78-ffd7-438f-90d3-f6b923faa405',\n  expires_at: '2020-07-03T15:36:33.192578Z',\n  issued_at: '2020-07-03T14:36:33.1925938Z',\n  request_url: 'http://kratos:4433/self-service/browser/flows/recovery/link?token=lsBuo123',\n  messages: [\n    {\n      id: 4060004,\n      text: 'The recovery token is invalid or has already been used. Please retry the flow.',\n      type: 'error',\n      context: {}\n    }\n  ],\n  methods: {\n    link: {\n      // ...\n    }\n  },\n  state: 'choose_method'\n}\n")))),(0,s.kt)("h2",{id:"api-clients"},"API Clients"),(0,s.kt)("p",null,"API-based login and registration using this strategy will be addressed in a\nfuture release of ORY Kratos."),(0,s.kt)("h2",{id:"security"},"Security"),(0,s.kt)("h3",{id:"account-enumeration-defenses"},"Account Enumeration Defenses"),(0,s.kt)("p",null,"This flow follows best practices by prevent account enumeration attacks using\nthe recovery flow."))}h.isMDXComponent=!0},11748:function(e,t,n){var r={"./locale":89234,"./locale.js":89234};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=11748}}]);