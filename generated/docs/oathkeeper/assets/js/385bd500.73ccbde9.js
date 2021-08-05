(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[8151,9031],{8517:function(e){e.exports={projectName:"ORY Oathkeeper",projectSlug:"oathkeeper",newsletter:"https://ory.us10.list-manage.com/subscribe?u=ffb1a878e4ec6c0ed312a3480&id=f605a41b53&group[17097][16]=1",projectTagLine:"A cloud native Identity & Access Proxy / API (IAP) and Access Control Decision API that authenticates, authorizes, and mutates incoming HTTP(s) requests. Inspired by the BeyondCorp / Zero Trust white paper. Written in Go.",updateTags:[{image:"oryd/oathkeeper",files:["docs/docs/install.md","docs/docs/configure-deploy.md"]},{replacer:function(e){var t=e.content,r=e.next;return t.replace(/v(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?/gi,""+r)},files:["docs/docs/install.md"]}],updateConfig:{src:"../.schema/config.schema.json",dst:"docs/reference/configuration.md"}}},8558:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(7294),a=r(2122),o=r(6199),c=r(9559);var l=function(e){var t=e.layoutProps,r=e.spec,l=t||{},s=l.title,i=void 0===s?"API Docs":s,u=l.description,m=void 0===u?"Open API Reference Docs for the API":u,d="object"===r.type?r.content:void 0,f="url"===r.type?r.content:void 0;return n.createElement(o.Z,(0,a.Z)({},t,{title:i,description:m}),n.createElement(c.Z,{spec:d,specUrl:f}))},s=r(4996),i=r(907),u=r(5977),m=r(8517),d=r.n(m);var f=function(){var e=(0,i.zu)().path;return d().enableRedoc?n.createElement(l,{layoutProps:{title:"HTTP API Docs",description:"Read the HTTP API reference documentation"},spec:{type:"url",content:(0,s.Z)(e+".static/api.json")}}):n.createElement(u.l_,{to:(0,s.Z)(e)})}},546:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(2122),a=r(9756),o=r(7294),c=r(6010),l=r(6742),s=r(3018),i=r(4996),u="footerLogoLink_qW4Z",m=["to","href","label","prependBaseUrlToHref"];function d(e){var t=e.to,r=e.href,c=e.label,s=e.prependBaseUrlToHref,u=(0,a.Z)(e,m),d=(0,i.Z)(t),f=(0,i.Z)(r,{forcePrependBaseUrl:!0});return o.createElement(l.Z,(0,n.Z)({className:"footer__link-item"},r?{target:"_blank",rel:"noopener noreferrer",href:s?f:r}:{to:d},u),c)}var f=function(e){var t=e.url,r=e.alt;return o.createElement("img",{className:"footer__logo",alt:r,src:t})};var p=function(){var e=(0,s.LU)().footer,t=e||{},r=t.copyright,n=t.links,a=void 0===n?[]:n,l=t.logo,m=void 0===l?{}:l,p=(0,i.Z)(m.src);return e?o.createElement("footer",{className:(0,c.Z)("footer",{"footer--dark":"dark"===e.style})},o.createElement("div",{className:"container"},a&&a.length>0&&o.createElement("div",{className:"row footer__links"},a.map((function(e,t){return o.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.createElement("li",{key:e.href||e.to,className:"footer__item"},o.createElement(d,e))}))):null)}))),(m||r)&&o.createElement("div",{className:"text--center"},m&&m.src&&o.createElement("div",{className:"margin-bottom--sm"},m.href?o.createElement("a",{href:m.href,target:"_blank",rel:"noopener noreferrer",className:u},o.createElement(f,{alt:m.alt,url:p})):o.createElement(f,{alt:m.alt,url:p})),o.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))):null}},5101:function(){},3197:function(){},6854:function(){},4616:function(){},9702:function(){}}]);