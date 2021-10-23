(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[47038],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var s=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=s.createContext({}),p=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return s.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},u=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?s.createElement(h,a(a({ref:n},c),{},{components:t})):s.createElement(h,a({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var p=2;p<i;p++)a[p]=t[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}u.displayName="MDXCreateElement"},62435:function(e,n,t){"use strict";t.d(n,{wF:function(){return a},l3:function(){return i},VG:function(){return o}});var s=t.p+"assets/medias/browser-privileged-update-d9baeff585c2a00d88b6d4b42614317f.mp4",r=t.p+"assets/medias/browser-privileged-update-1f0a8534724a1c3e63af722453ea483e.webm",i={browser:{label:"Browser UI",image:t(30442).Z,alt:"User Profile HTML Form with validation errors"},missing:{label:"Not An Email",language:"shell",code:t(86866).Z}},a={browser:{label:"Browser UI",image:t(7837).Z,alt:"User Registration HTML Form with validation errors"},missing:{label:"Missing Password",language:"shell",code:t(64785).Z},wrong:{label:"Password Policy Violation",language:"shell",code:t(49122).Z}},o={mp4:s,webm:r}},70712:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var s=t(22122),r=t(19756),i=(t(67294),t(3905)),a=t(62435),o=["components"],l={id:"session",title:"Ory Session Token / Ory Session Cookie"},p=void 0,c={unversionedId:"concepts/session",id:"concepts/session",isDocsHomePage:!1,title:"Ory Session Token / Ory Session Cookie",description:"When an identity or end-user authenticates using e.g. the password method,",source:"@site/docs/concepts/session.mdx",sourceDirName:"concepts",slug:"/concepts/session",permalink:"/kratos/docs/next/concepts/session",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/concepts/session.mdx",tags:[],version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1634626107,formattedLastUpdatedAt:"10/19/2021",frontMatter:{id:"session",title:"Ory Session Token / Ory Session Cookie"},sidebar:"docs",previous:{title:"Terminology",permalink:"/kratos/docs/next/concepts/terminology"},next:{title:"Customize User Interface",permalink:"/kratos/docs/next/concepts/ui-user-interface"}},d=[{value:"<code>active</code>",id:"active",children:[]},{value:"<code>expires_at</code>",id:"expires_at",children:[]},{value:"<code>authenticated_at</code>",id:"authenticated_at",children:[]},{value:"Ory Session Cookie",id:"ory-session-cookie",children:[]},{value:"Ory Session Token",id:"ory-session-token",children:[]},{value:"Privileged Sessions",id:"privileged-sessions",children:[]},{value:"Refreshing Sessions",id:"refreshing-sessions",children:[]}],u={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,s.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When an identity or end-user authenticates using e.g. the ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," method,\nthey will receive an Ory Session. The Ory Session can either be issued as an"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ory Session Cookie, which is used for all browser-flows (e.g. PHP app, single\npage app, ...);"),(0,i.kt)("li",{parentName:"ul"},"Ory Session Token, which is used for non-browser flows (e.g. native apps).")),(0,i.kt)("p",null,"The session's content may look like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  id: '1338410d-c473-4503-a96a-53efa06e2531',\n  active: true,\n  expires_at: '2021-10-15T15:58:57.683338Z',\n  authenticated_at: '2021-10-14T15:58:57.683338Z',\n  authenticator_assurance_level: 'aal2',\n  authentication_methods: [\n    {\n      method: 'password',\n      completed_at: '2021-10-14T15:55:19.03621Z'\n    },\n    {\n      method: 'lookup_secret',\n      completed_at: '2021-10-14T15:56:21.257867Z'\n    },\n    {\n      method: 'lookup_secret',\n      completed_at: '2021-10-14T15:58:57.683337Z'\n    },\n    {\n      method: 'lookup_secret',\n      completed_at: '2021-10-14T16:03:14.833192Z'\n    }\n  ],\n  issued_at: '2021-10-14T15:58:57.683338Z',\n  identity: {\n    id: '9496bbd5-f426-473f-b087-c7df853f274a',\n    schema_id: 'default',\n    schema_url: 'https://<your-project-slug>.projects.oryapis.com/schemas/default',\n    state: 'active',\n    state_changed_at: '2021-10-14T17:55:17.885497+02:00',\n    traits: {\n      website: 'https://www.ory.sh/',\n      email: '0.wz4yhr0zwyd@ory.sh'\n    },\n    verifiable_addresses: [\n      {\n        id: '4de14270-ca13-4efb-ac3f-8f03b1f649d8',\n        value: '0.wz4yhr0zwyd@ory.sh',\n        verified: false,\n        via: 'email',\n        status: 'sent',\n        created_at: '2021-10-14T17:55:17.886639+02:00',\n        updated_at: '2021-10-14T18:03:14.839009+02:00'\n      }\n    ],\n    recovery_addresses: [\n      {\n        id: 'fdab5a5f-5efc-4202-93b5-fd3ee632420b',\n        value: '0.wz4yhr0zwyd@ory.sh',\n        via: 'email',\n        created_at: '2021-10-14T17:55:17.886831+02:00',\n        updated_at: '2021-10-14T18:03:14.839105+02:00'\n      }\n    ],\n    created_at: '2021-10-14T17:55:17.886237+02:00',\n    updated_at: '2021-10-14T17:55:17.886237+02:00'\n  }\n}\n")),(0,i.kt)("h3",{id:"active"},(0,i.kt)("inlineCode",{parentName:"h3"},"active")),(0,i.kt)("p",null,"If set to true, Ory Session is active and can be used to authenticate requests."),(0,i.kt)("h3",{id:"expires_at"},(0,i.kt)("inlineCode",{parentName:"h3"},"expires_at")),(0,i.kt)("p",null,"Indicates when the Ory Session expires."),(0,i.kt)("h3",{id:"authenticated_at"},(0,i.kt)("inlineCode",{parentName:"h3"},"authenticated_at")),(0,i.kt)("p",null,"Indicates the time of the most recent authentication. When a new Ory Session is\ncreated (e.g. because of a successful login), this is set to the current time."),(0,i.kt)("p",null,"This field is updated when:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The end-user authenticates with a second factor (e.g. TOTP)"),(0,i.kt)("li",{parentName:"ul"},"The end-user refreshes their Ory Session using the\n",(0,i.kt)("a",{parentName:"li",href:"../reference/api#operation/initializeSelfServiceLoginFlowForBrowsers"},(0,i.kt)("inlineCode",{parentName:"a"},"/self-service/login/browser")),"\nor\n",(0,i.kt)("a",{parentName:"li",href:"../reference/api#operation/initializeSelfServiceLoginFlowWithoutBrowser"},(0,i.kt)("inlineCode",{parentName:"a"},"/self-service/login/api")),"\nendpoint and setting ",(0,i.kt)("inlineCode",{parentName:"li"},"refresh")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"))),(0,i.kt)("h2",{id:"ory-session-cookie"},"Ory Session Cookie"),(0,i.kt)("p",null,"The Ory Session Cookie will be issued when the end-user is using a browser (e.g.\nChrome) to sign in. You can fetch the session's payload using the\n",(0,i.kt)("inlineCode",{parentName:"p"},"/sessions/whoami")," endpoint:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl 'https://<your-project-slug>.projects.oryapis.com/sessions/whoami' \\\n  -H 'Accept: application/json \\\n  -H 'Cookie: ory_kratos_session=MTYzNDIyNzEzN3xEdi1CQkFFQ180SUFBUkFCRUFBQVJfLUNBQUVHYzNSeWFXNW5EQThBRFhObGMzTnBiMjVmZEc5clpXNEdjM1J5YVc1bkRDSUFJRTFDYWtvME5VNVlaVWxvYVZWeWJrUnZhSEF4YmxSV2VVRlhNMWwxVlVGenxXpsk2cL21Dclk3nCoXV41N6bFxvVJSt7CeICy_815Aw=='\n")),(0,i.kt)("h2",{id:"ory-session-token"},"Ory Session Token"),(0,i.kt)("p",null,"The Ory Session Token will be issued when the end-user is using, for example, a\nnative mobile app to sign in. In this case, you need to include the Ory Session\nToken in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," HTTP Header"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl 'https://<your-project-slug>.projects.oryapis.com/sessions/whoami' \\\n  -H 'Accept: application/json \\\n  -H 'Authorization: Bearer BRFbGMzTnBiMjVmZEcEdjM1J5YVc1bkRDSUFvME5VNVlaVeWJrUnZhSEF4YmxSV2VVRlhNMWwxVlVGenxXpsk2cLXV41N6bFxvVJSt7CeICy'\n")),(0,i.kt)("p",null,"or alternatively in the ",(0,i.kt)("inlineCode",{parentName:"p"},"X-Session-Token")," HTTP Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl 'https://<your-project-slug>.projects.oryapis.com/sessions/whoami' \\\n  -H 'Accept: application/json \\\n  -H 'X-Session-Token: BRFbGMzTnBiMjVmZEcEdjM1J5YVc1bkRDSUFvME5VNVlaVeWJrUnZhSEF4YmxSV2VVRlhNMWwxVlVGenxXpsk2cLXV41N6bFxvVJSt7CeICy'\n")),(0,i.kt)("h2",{id:"privileged-sessions"},"Privileged Sessions"),(0,i.kt)("p",null,"Some profile changes, such as updating the password or adding / removing second\nfactors, require a privileged Ory Session Token or Ory Session Cookie to be\ncompleted successfully:"),(0,i.kt)("video",{controls:!0,width:"100%"},(0,i.kt)("source",{src:a.VG.webm,type:"video/webm"}),(0,i.kt)("source",{src:a.VG.mp4,type:"video/mp4"}),"Sorry, your browser doesn't support embedded videos."),(0,i.kt)("p",null,'Ory Sessions are considered "privileged" if their ',(0,i.kt)("inlineCode",{parentName:"p"},"authenticated_at")," time is not\nolder than the ",(0,i.kt)("inlineCode",{parentName:"p"},"privileged_session_max_age")," specified in your config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="path/to/kratos/config.yml"',title:'"path/to/kratos/config.yml"'},"selfservice:\n  flows:\n    settings:\n      privileged_session_max_age: 15m\n")),(0,i.kt)("p",null,'In the example above, an Ory Session would be considered "privileged" for 15\nminutes. The end-user can perform any profile changes (e.g. update password,\nlink another social provider, add a 2fa method, ...) without being prompted to\nre-authenticate.'),(0,i.kt)("p",null,"This flow is similar to\n",(0,i.kt)("a",{parentName:"p",href:"https://help.github.com/en/github/authenticating-to-github/sudo-mode"},"GitHub's sudo mode"),"!"),(0,i.kt)("h2",{id:"refreshing-sessions"},"Refreshing Sessions"),(0,i.kt)("p",null,"You can prompt the user to re-authenticate by interacting with the\n",(0,i.kt)("a",{parentName:"p",href:"../reference/api#operation/initializeSelfServiceLoginFlowForBrowsers"},(0,i.kt)("inlineCode",{parentName:"a"},"/self-service/login/browser")),"\nor\n",(0,i.kt)("a",{parentName:"p",href:"../reference/api#operation/initializeSelfServiceLoginFlowWithoutBrowser"},(0,i.kt)("inlineCode",{parentName:"a"},"/self-service/login/api")),"\nAPI and setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh")," parameter to true. Once the user has\nre-authenticated, the ",(0,i.kt)("inlineCode",{parentName:"p"},"authenticated_at")," timestamp of the Ory Session will be\nset to the current time."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/self-service/login/browser?refresh=true\n")),(0,i.kt)("p",null,"If enabled, you can also refresh the second factor by setting both ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"aal"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/self-service/login/browser?refresh=true&aal=aal2\n")))}m.isMDXComponent=!0},64785:function(e,n){"use strict";n.Z='$ curl -s -X GET \\\n    -H "Authorization: Bearer $sessionToken"  \\\n    -H "Accept: application/json"  \\\n    \'https://playground.projects.oryapis.com/api/kratos/public/self-service/settings/flows?id=f71743cd-700d-4a30-9275-8edc90de07cc\' | \\\n      jq -r \'.ui.nodes[] | select(.group=="password")\'\n{\n  "type": "input",\n  "group": "password",\n  "attributes": {\n    "name": "password",\n    "type": "password",\n    "required": true,\n    "disabled": false\n  },\n  "messages": [\n    {\n      "id": 4000001,\n      "text": "length must be >= 1, but got 0",\n      "type": "error"\n    }\n  ],\n  "meta": {\n    "label": {\n      "id": 1070001,\n      "text": "Password",\n      "type": "info"\n    }\n  }\n}\n{\n  "type": "input",\n  "group": "password",\n  "attributes": {\n    "name": "method",\n    "type": "submit",\n    "value": "password",\n    "disabled": false\n  },\n  "messages": null,\n  "meta": {\n    "label": {\n      "id": 1070003,\n      "text": "Save",\n      "type": "info"\n    }\n  }\n}\n'},49122:function(e,n){"use strict";n.Z='$ curl -s -X GET \\\n    -H "Authorization: Bearer $sessionToken"  \\\n    -H "Accept: application/json"  \\\n    \'https://playground.projects.oryapis.com/api/kratos/public/self-service/settings/flows?id=f71743cd-700d-4a30-9275-8edc90de07cc\' | \\\n      jq -r \'.ui.nodes[] | select(.group=="password")\'\n{\n  "type": "input",\n  "group": "password",\n  "attributes": {\n    "name": "password",\n    "type": "password",\n    "required": true,\n    "disabled": false\n  },\n  "messages": [\n    {\n      "id": 4000005,\n      "text": "The password can not be used because the password has been found in data breaches and must no longer be used.",\n      "type": "error",\n      "context": {\n        "reason": "the password has been found in data breaches and must no longer be used."\n      }\n    }\n  ],\n  "meta": {\n    "label": {\n      "id": 1070001,\n      "text": "Password",\n      "type": "info"\n    }\n  }\n}\n{\n  "type": "input",\n  "group": "password",\n  "attributes": {\n    "name": "method",\n    "type": "submit",\n    "value": "password",\n    "disabled": false\n  },\n  "messages": null,\n  "meta": {\n    "label": {\n      "id": 1070003,\n      "text": "Save",\n      "type": "info"\n    }\n  }\n}\n'},86866:function(e,n){"use strict";n.Z='$ curl -s -X GET \\\n    -H "Authorization: Bearer $sessionToken" \\\n    -H "Accept: application/json" \\\n    \'https://playground.projects.oryapis.com/api/kratos/public/self-service/settings/flows?id=f71743cd-700d-4a30-9275-8edc90de07cc\' | \\\n      jq -r \'.ui.nodes[] | select(.group=="profile")\'\n\n{\n  "type": "input",\n  "group": "profile",\n  "attributes": {\n    "name": "traits.email",\n    "type": "email",\n    "value": "notanemail",\n    "disabled": false\n  },\n  "messages": [\n    {\n      "id": 4000001,\n      "text": "\\"notanemail\\" is not valid \\"email\\"",\n      "type": "error"\n    }\n  ],\n  "meta": {\n    "label": {\n      "id": 1070002,\n      "text": "E-Mail",\n      "type": "info"\n    }\n  }\n}\n{\n  "type": "input",\n  "group": "profile",\n  "attributes": {\n    "name": "traits.name.first",\n    "type": "text",\n    "value": "",\n    "disabled": false\n  },\n  "messages": null,\n  "meta": {\n    "label": {\n      "id": 1070002,\n      "text": "First Name",\n      "type": "info"\n    }\n  }\n}\n{\n  "type": "input",\n  "group": "profile",\n  "attributes": {\n    "name": "traits.name.last",\n    "type": "text",\n    "value": "",\n    "disabled": false\n  },\n  "messages": null,\n  "meta": {\n    "label": {\n      "id": 1070002,\n      "text": "Last Name",\n      "type": "info"\n    }\n  }\n}\n{\n  "type": "input",\n  "group": "profile",\n  "attributes": {\n    "name": "method",\n    "type": "submit",\n    "value": "profile",\n    "disabled": false\n  },\n  "messages": null,\n  "meta": {\n    "label": {\n      "id": 1070003,\n      "text": "Save",\n      "type": "info"\n    }\n  }\n}\n'},7837:function(e,n,t){"use strict";n.Z=t.p+"assets/images/browser-password-missing-82cf4700a84269454ba45634383943fe.png"},30442:function(e,n,t){"use strict";n.Z=t.p+"assets/images/browser-profile-invalid-f0aee09bf26012c1338bc2b7b1ef69d9.png"}}]);