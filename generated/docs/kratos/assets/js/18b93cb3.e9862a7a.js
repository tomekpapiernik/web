(window.webpackJsonp=window.webpackJsonp||[]).push([[45,55,337],{117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),o=a(582),c=a(616),m=a(587);t.default=function(){var e,t=Object(l.default)().siteConfig,a=Object(m.useVersions)(),n=Object(m.useLatestVersion)(),i=a.find((function(e){return"current"===e.name})),s=a.filter((function(e){return e!==n&&"current"!==e.name})),u="https://github.com/"+t.organizationName+"/"+t.projectName,E="ORY "+((e=t.projectName).charAt(0).toUpperCase()+e.slice(1));return r.a.createElement(c.a,{title:"Versions",permalink:"/versions",description:"Overview of all "+E+" documentation versions."},r.a.createElement("main",{className:"container margin-vert--lg"},r.a.createElement("h1",null,E," documentation versions"),r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"next"},"Current version (Stable)"),r.a.createElement("p",null,"Here you can find the documentation for current released version."),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,n.name),r.a.createElement("td",null,r.a.createElement(o.a,{to:n.path},"Documentation")),r.a.createElement("td",null,r.a.createElement("a",{href:u+"/blob/master/CHANGELOG.md"},"Changelog")))))),i!==n&&r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"next"},"Next version (Unreleased)"),r.a.createElement("p",null,"Here you can find the documentation for unreleased version."),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"next"),r.a.createElement("td",null,r.a.createElement(o.a,{to:i.path},"Documentation")),r.a.createElement("td",null,r.a.createElement("a",{href:u},"Source Code")))))),s.length>0&&r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"archive"},"Past versions (Not maintained anymore)"),r.a.createElement("p",null,"Here you can find documentation for previous versions."),r.a.createElement("table",null,r.a.createElement("tbody",null,s.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("th",null,e.label),r.a.createElement("td",null,r.a.createElement(o.a,{to:e.path},"Documentation")),r.a.createElement("td",null,r.a.createElement("a",{href:u+"/blob/master/CHANGELOG.md"},"Changelog")))})))))))}},618:function(e,t,a){"use strict";var n=a(3),r=a(8),l=a(0),o=a.n(l),c=a(554),m=a(582),i=a(556),s=a(555),u=a(61),E=a.n(u);function f(e){var t=e.to,a=e.href,l=e.label,c=e.prependBaseUrlToHref,i=Object(r.a)(e,["to","href","label","prependBaseUrlToHref"]),u=Object(s.a)(t),E=Object(s.a)(a,{forcePrependBaseUrl:!0});return o.a.createElement(m.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?E:a}:{to:u},i),l)}var d=function(e){var t=e.url,a=e.alt;return o.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(i.useThemeConfig)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,l=t.logo,m=void 0===l?{}:l,u=Object(s.a)(m.src);return e?o.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},o.a.createElement("div",{className:"container"},r&&r.length>0&&o.a.createElement("div",{className:"row footer__links"},r.map((function(e,t){return o.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(f,e))}))):null)}))),(m||a)&&o.a.createElement("div",{className:"text--center"},m&&m.src&&o.a.createElement("div",{className:"margin-bottom--sm"},m.href?o.a.createElement("a",{href:m.href,target:"_blank",rel:"noopener noreferrer",className:E.a.footerLogoLink},o.a.createElement(d,{alt:m.alt,url:u})):o.a.createElement(d,{alt:m.alt,url:u})),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})))):null}}}]);