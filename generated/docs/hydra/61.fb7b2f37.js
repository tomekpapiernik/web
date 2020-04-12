/*! For license information please see 61.fb7b2f37.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{197:function(e,t,n){"use strict";n.r(t);n(28),n(20),n(21),n(62),n(248);var r=n(0),o=n.n(r),a=n(199),i=n(200),c=n(69),l=n(218),s=n(1),u=n(205),f=n.n(u),p=n(226),d=n(227),y=n(207),h=n(211),m=n(144),v=n.n(m);function g(e){var t=e.item,n=e.onItemClick,a=e.collapsible,i=t.items,c=t.href,l=t.label,u=t.type,p=Object(r.useState)(t.collapsed),d=p[0],m=p[1],v=Object(r.useState)(null),b=v[0],k=v[1];t.collapsed!==b&&(k(t.collapsed),m(t.collapsed));var E=Object(r.useCallback)((function(e){e.preventDefault(),m((function(e){return!e}))}));switch(u){case"category":return i.length>0&&o.a.createElement("li",{className:f()("menu__list-item",{"menu__list-item--collapsed":d}),key:l},o.a.createElement("a",{className:f()("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&!t.collapsed}),href:"#!",onClick:a?E:void 0},l),o.a.createElement("ul",{className:"menu__list"},i.map((function(e){return o.a.createElement(g,{key:e.label,item:e,onItemClick:n,collapsible:a})}))));case"link":default:return o.a.createElement("li",{className:"menu__list-item",key:l},o.a.createElement(y.a,Object(s.a)({className:"menu__link",to:c},Object(h.a)(c)?{activeClassName:"menu__link--active",exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"}),l))}}var b=function(e){var t=Object(r.useState)(!1),n=t[0],a=t[1],c=Object(i.a)(),l=c.siteConfig,u=(l=void 0===l?{}:l).themeConfig.navbar,h=(u=void 0===u?{}:u).title,m=u.hideOnScroll,b=void 0!==m&&m,k=c.isClient,E=Object(d.a)(),O=E.logoLink,j=E.logoLinkProps,w=E.logoImageUrl,x=E.logoAlt,S=e.docsSidebars,T=e.path,_=e.sidebar,C=e.sidebarCollapsible;if(Object(p.a)(n),!_)return null;var N=S[_];if(!N)throw new Error('Cannot find the sidebar "'+_+'" in the sidebar config!');return C&&N.forEach((function(e){return function e(t,n){var r=t.items,o=t.href;switch(t.type){case"category":var a=r.map((function(t){return e(t,n)})).filter((function(e){return e})).length>0;return t.collapsed=!a,a;case"link":default:return o===n}}(e,T)})),o.a.createElement("div",{className:v.a.sidebar},b&&o.a.createElement(y.a,Object(s.a)({className:v.a.sidebarLogo,to:O},j),null!=w&&o.a.createElement("img",{key:k,src:w,alt:x}),null!=h&&o.a.createElement("strong",null,h)),o.a.createElement("div",{className:f()("menu","menu--responsive",v.a.menu,{"menu--show":n})},o.a.createElement("button",{"aria-label":n?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){a(!n)}},n?o.a.createElement("span",{className:f()(v.a.sidebarMenuIcon,v.a.sidebarMenuCloseIcon)},"\xd7"):o.a.createElement("svg",{"aria-label":"Menu",className:v.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),o.a.createElement("ul",{className:"menu__list"},N.map((function(e){return o.a.createElement(g,{key:e.label,item:e,onItemClick:function(){a(!1)},collapsible:C})})))))},k=(n(253),n(254),n(79),n(87),n(255),n(256),{plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]}),E={Prism:n(54).a,theme:k};function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var w=/\r\n|\r|\n/,x=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},S=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},T=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=j({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=j({},n,{backgroundColor:null}),o};function _(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var C=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),O(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?T(e.theme,e.language):void 0;return t.themeDict=n})),O(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=j({},_(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==o&&(a.style=void 0!==a.style?j({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),O(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var i=r?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(c))}})),O(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,i=j({},_(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?j({},i.style,o):o),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,i=0,c=[],l=[c];i>-1;){for(;(a=r[i]++)<o[i];){var s=void 0,u=t[i],f=n[i][a];if("string"==typeof f?(u=i>0?u:["plain"],s=f):(u=S(u,f.type),f.alias&&(u=S(u,f.alias)),s=f.content),"string"==typeof s){var p=s.split(w),d=p.length;c.push({types:u,content:p[0]});for(var y=1;y<d;y++)x(c),l.push(c=[]),c.push({types:u,content:p[y]})}else i++,t.push(u),n.push(s),r.push(0),o.push(s.length)}i--,t.pop(),n.pop(),r.pop(),o.pop()}return x(c),l}(void 0!==i?t.tokenize(r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),N=n(263),P=n.n(N),A=n(261),L=n.n(A),M=n(262),I=n.n(M),F=n(219),D=n(145),R=n.n(D),B=/{([\d,-]+)}/,H=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")},$=/title=".*"/,q=function(e){var t=e.children,n=e.className,a=e.metastring,c=Object(i.a)().siteConfig.themeConfig.prism,l=void 0===c?{}:c,u=Object(r.useState)(!1),p=u[0],d=u[1],y=Object(r.useState)(!1),h=y[0],m=y[1];Object(r.useEffect)((function(){m(!0)}),[]);var v=Object(r.useRef)(null),g=Object(r.useRef)(null),b=[],k="",O=Object(F.a)().isDarkTheme,j=l.theme||P.a,w=l.darkTheme||j,x=O?w:j;if(a&&B.test(a)){var S=a.match(B)[1];b=I.a.parse(S).filter((function(e){return e>0}))}a&&$.test(a)&&(k=a.match($)[0].split("title=")[1].replace(/"+/g,"")),Object(r.useEffect)((function(){var e;return g.current&&(e=new L.a(g.current,{target:function(){return v.current}})),function(){e&&e.destroy()}}),[g.current,v.current]);var T=n&&n.replace(/language-/,"");!T&&l.defaultLanguage&&(T=l.defaultLanguage);var _=t.replace(/\n$/,"");if(0===b.length&&void 0!==T){for(var N,A="",M=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return H(["js","jsBlock"]);case"jsx":case"tsx":return H(["js","jsBlock","jsx"]);case"html":return H(["js","jsBlock","html"]);case"python":case"py":return H(["python"]);default:return H()}}(T),D=t.replace(/\n$/,"").split("\n"),q=0;q<D.length;){var W=q+1,z=D[q].match(M);if(null!==z){switch(z.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":A+=W+",";break;case"highlight-start":N=W;break;case"highlight-end":A+=N+"-"+(W-1)+","}D.splice(q,1)}else q+=1}b=I.a.parse(A),_=D.join("\n")}var U=function(){window.getSelection().empty(),d(!0),setTimeout((function(){return d(!1)}),2e3)};return o.a.createElement(C,Object(s.a)({},E,{key:h,theme:x,code:_,language:T}),(function(e){var t,n,r=e.className,a=e.style,i=e.tokens,c=e.getLineProps,l=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,k&&o.a.createElement("div",{style:a,className:R.a.codeBlockTitle},k),o.a.createElement("div",{className:R.a.codeBlockContent},o.a.createElement("button",{ref:g,type:"button","aria-label":"Copy code to clipboard",className:f()(R.a.copyButton,(t={},t[R.a.copyButtonWithTitle]=k,t)),onClick:U},p?"Copied":"Copy"),o.a.createElement("div",{tabIndex:"0",className:f()(r,R.a.codeBlock,(n={},n[R.a.codeBlockWithTitle]=k,n))},o.a.createElement("div",{ref:v,className:R.a.codeBlockLines,style:a},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return b.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(s.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(s.a)({key:t},l({token:e,key:t})))})))}))))))}))},W=n(9),z=(n(146),n(147)),U=n.n(z),J=function(e){return function(t){var n,r=t.id,a=Object(W.a)(t,["id"]),c=Object(i.a)().siteConfig,l=(c=void 0===c?{}:c).themeConfig,s=(l=void 0===l?{}:l).navbar,u=(s=void 0===s?{}:s).hideOnScroll,p=void 0!==u&&u;return r?o.a.createElement(e,a,o.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:f()("anchor",(n={},n[U.a.enhancedAnchor]=!p,n)),id:r}),o.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#"),a.children):o.a.createElement(e,a)}},X=n(148),Y=n.n(X),G={code:function(e){var t=e.children;return"string"==typeof t?o.a.createElement(q,e):t},a:function(e){return/\.[^./]+$/.test(e.href)?o.a.createElement("a",e):o.a.createElement(y.a,e)},pre:function(e){return o.a.createElement("div",Object(s.a)({className:Y.a.mdxCodeBlock},e))},h1:J("h1"),h2:J("h2"),h3:J("h3"),h4:J("h4"),h5:J("h5"),h6:J("h6")},K=n(223),Q=n(212),V=n(149),Z=n.n(V);t.default=function(e){var t=e.route,n=e.docsMetadata,r=e.location,s=t.routes.find((function(e){return Object(Q.b)(r.pathname,e)}))||{},u=n.permalinkToSidebar,f=n.docsSidebars,p=n.version,d=u[s.path],y=Object(i.a)(),h=y.siteConfig,m=(h=void 0===h?{}:h).themeConfig,v=void 0===m?{}:m,g=y.isClient,k=v.sidebarCollapsible,E=void 0===k||k;return 0===Object.keys(s).length?o.a.createElement(K.default,e):o.a.createElement(l.a,{version:p,key:g},o.a.createElement("div",{className:Z.a.docPage},d&&o.a.createElement("div",{className:Z.a.docSidebarContainer},o.a.createElement(b,{docsSidebars:f,path:s.path,sidebar:d,sidebarCollapsible:E})),o.a.createElement("main",{className:Z.a.docMainContainer},o.a.createElement(a.a,{components:G},Object(c.a)(t.routes)))))}},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},f=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,y=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return n?o.a.createElement(y,c({ref:t},s,{components:n})):o.a.createElement(y,c({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},223:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(218);t.default=function(){return o.a.createElement(a.a,{title:"Page Not Found"},o.a.createElement("div",{className:"container margin-vert--xl"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col--6 col--offset-3"},o.a.createElement("h1",{className:"hero__title"},"Page Not Found"),o.a.createElement("p",null,"We could not find what you were looking for."),o.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},248:function(e,t,n){"use strict";var r=n(12),o=n(249)(5),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),r(r.P+r.F*a,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n(77)("find")},249:function(e,t,n){var r=n(27),o=n(60),a=n(32),i=n(25),c=n(250);e.exports=function(e,t){var n=1==e,l=2==e,s=3==e,u=4==e,f=6==e,p=5==e||f,d=t||c;return function(t,c,y){for(var h,m,v=a(t),g=o(v),b=r(c,y,3),k=i(g.length),E=0,O=n?d(t,k):l?d(t,0):void 0;k>E;E++)if((p||E in g)&&(m=b(h=g[E],E,v),e))if(n)O[E]=m;else if(m)switch(e){case 3:return!0;case 5:return h;case 6:return E;case 2:O.push(h)}else if(u)return!1;return f?-1:s||u?u:O}}},250:function(e,t,n){var r=n(251);e.exports=function(e,t){return new(r(e))(t)}},251:function(e,t,n){var r=n(13),o=n(252),a=n(2)("species");e.exports=function(e){var t;return o(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!o(t.prototype)||(t=void 0),r(t)&&null===(t=t[a])&&(t=void 0)),void 0===t?Array:t}},252:function(e,t,n){var r=n(22);e.exports=Array.isArray||function(e){return"Array"==r(e)}},253:function(e,t,n){"use strict";var r=n(12),o=n(84)(!0);r(r.P,"Array",{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n(77)("includes")},254:function(e,t,n){"use strict";var r=n(12),o=n(203);r(r.P+r.F*n(204)("includes"),"String",{includes:function(e){return!!~o(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},255:function(e,t,n){"use strict";var r=n(8),o=n(25),a=n(56),i=n(57);n(58)("match",1,(function(e,t,n,c){return[function(n){var r=e(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,r):new RegExp(n)[t](String(r))},function(e){var t=c(n,e,this);if(t.done)return t.value;var l=r(e),s=String(this);if(!l.global)return i(l,s);var u=l.unicode;l.lastIndex=0;for(var f,p=[],d=0;null!==(f=i(l,s));){var y=String(f[0]);p[d]=y,""===y&&(l.lastIndex=a(s,o(l.lastIndex),u)),d++}return 0===d?null:p}]}))},256:function(e,t,n){var r=n(5),o=n(257),a=n(29).f,i=n(260).f,c=n(76),l=n(80),s=r.RegExp,u=s,f=s.prototype,p=/a/g,d=/a/g,y=new s(p)!==p;if(n(10)&&(!y||n(14)((function(){return d[n(2)("match")]=!1,s(p)!=p||s(d)==d||"/a/i"!=s(p,"i")})))){s=function(e,t){var n=this instanceof s,r=c(e),a=void 0===t;return!n&&r&&e.constructor===s&&a?e:o(y?new u(r&&!a?e.source:e,t):u((r=e instanceof s)?e.source:e,r&&a?l.call(e):t),n?this:f,s)};for(var h=function(e){e in s||a(s,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},m=i(u),v=0;m.length>v;)h(m[v++]);f.constructor=s,s.prototype=f,n(15)(r,"RegExp",s)}n(85)("RegExp")},257:function(e,t,n){var r=n(13),o=n(258).set;e.exports=function(e,t,n){var a,i=t.constructor;return i!==n&&"function"==typeof i&&(a=i.prototype)!==n.prototype&&r(a)&&o&&o(e,a),e}},258:function(e,t,n){var r=n(13),o=n(8),a=function(e,t){if(o(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{(r=n(27)(Function.call,n(259).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(o){t=!0}return function(e,n){return a(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:a}},259:function(e,t,n){var r=n(64),o=n(59),a=n(31),i=n(82),c=n(30),l=n(81),s=Object.getOwnPropertyDescriptor;t.f=n(10)?s:function(e,t){if(e=a(e),t=i(t,!0),l)try{return s(e,t)}catch(n){}if(c(e,t))return o(!r.f.call(e,t),e[t])}},260:function(e,t,n){var r=n(83),o=n(61).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},261:function(e,t,n){var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(e),r.removeAllRanges(),r.addRange(o),t=r.toString()}return t}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function o(){r.off(e,o),t.apply(n,arguments)}return o._=t,this.on(e,o,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],o=[];if(r&&t)for(var a=0,i=r.length;a<i;a++)r[a].fn!==t&&r[a].fn._!==t&&o.push(r[a]);return o.length?n[e]=o:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},function(e,t,n){var r=n(3),o=n(4);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(r.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(r.string(e))return function(e,t,n){return o(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){var r=n(5);function o(e,t,n,r,o){var i=a.apply(this,arguments);return e.addEventListener(n,i,o),{destroy:function(){e.removeEventListener(n,i,o)}}}function a(e,t,n,o){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&o.call(e,n)}}e.exports=function(e,t,n,r,a){return"function"==typeof e.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return o(e,t,n,r,a)})))}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return i(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=o()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":a(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),l=n(1),s=n.n(l),u=n(2),f=n.n(u),p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.resolveOptions(n),r.listenClick(e),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),d(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===p(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=f()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new c({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return h("action",e)}},{key:"defaultTarget",value:function(e){var t=h("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return h("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}(s.a);function h(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t.default=y}]).default},e.exports=r()},262:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],r=t[2],o=t[3];if(n&&o){var a=[],i=(n=parseInt(n))<(o=parseInt(o))?1:-1;"-"!=r&&".."!=r&&"\u2025"!=r||(o+=i);for(var c=n;c!=o;c+=i)a.push(c);return a}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},263:function(e,t){e.exports={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]}}}]);