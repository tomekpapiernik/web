(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[8809,9031],{546:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var a=r(2122),l=r(9756),n=r(7294),o=r(6010),c=r(6742),s=r(941),m=r(4996),i="footerLogoLink_qW4Z",u=["to","href","label","prependBaseUrlToHref"];function f(e){var t=e.to,r=e.href,o=e.label,s=e.prependBaseUrlToHref,i=(0,l.Z)(e,u),f=(0,m.Z)(t),_=(0,m.Z)(r,{forcePrependBaseUrl:!0});return n.createElement(c.Z,(0,a.Z)({className:"footer__link-item"},r?{target:"_blank",rel:"noopener noreferrer",href:s?_:r}:{to:f},i),o)}var _=function(e){var t=e.url,r=e.alt;return n.createElement("img",{className:"footer__logo",alt:r,src:t})};var d=function(){var e=(0,s.LU)().footer,t=e||{},r=t.copyright,a=t.links,l=void 0===a?[]:a,c=t.logo,u=void 0===c?{}:c,d=(0,m.Z)(u.src);return e?n.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},n.createElement("div",{className:"container"},l&&l.length>0&&n.createElement("div",{className:"row footer__links"},l.map((function(e,t){return n.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?n.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement(f,e))}))):null)}))),(u||r)&&n.createElement("div",{className:"text--center"},u&&u.src&&n.createElement("div",{className:"margin-bottom--sm"},u.href?n.createElement("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:i},n.createElement(_,{alt:u.alt,url:d})):n.createElement(_,{alt:u.alt,url:d})),n.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))):null}},3591:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n}});var a=r(7294),l=r(6);function n(e){return a.createElement("div",{id:"route-identifier","data-route":e.location.pathname},a.createElement(l.Z,e))}}}]);