(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{455:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var a=n(16),r=n(456);function c(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var c=void 0===a?{}:a,o=c.forcePrependBaseUrl,i=void 0!==o&&o,l=c.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(i)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+s:s}(c,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},456:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},462:function(e,t,n){"use strict";var a=n(0),r=n(463);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},463:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},465:function(e,t,n){"use strict";var a=n(0),r=n(466);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},466:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r},483:function(e,t,n){"use strict";var a=n(8),r=n(0),c=n.n(r),o=n(10),i=n(456),l=n(7),u=Object(r.createContext)({collectLink:function(){}}),s=n(455);t.a=function(e){var t,n,m,d=e.isNavLink,f=e.to,b=e.href,v=e.activeClassName,h=e.isActive,g=e["data-noBrokenLinkCheck"],O=e.autoAddBaseUrl,p=void 0===O||O,j=Object(a.a)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),E=Object(s.b)().withBaseUrl,k=Object(r.useContext)(u),y=f||b,C=Object(i.a)(y),w=null==y?void 0:y.replace("pathname://",""),N=void 0!==w?(n=w,p&&function(e){return e.startsWith("/")}(n)?E(n):n):void 0,S=Object(r.useRef)(!1),_=d?o.e:o.c,A=l.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!A&&C&&null!=N&&window.docusaurus.prefetch(N),function(){A&&m&&m.disconnect()}}),[N,A,C]);var L=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,D=!N||!C||L;return N&&C&&!L&&!g&&k.collectLink(N),D?c.a.createElement("a",Object.assign({href:N},y&&!C&&{target:"_blank",rel:"noopener noreferrer"},j)):c.a.createElement(_,Object.assign({},j,{onMouseEnter:function(){S.current||null==N||(window.docusaurus.preload(N),S.current=!0)},innerRef:function(e){var t,n;A&&e&&C&&(t=e,n=function(){null!=N&&window.docusaurus.prefetch(N)},(m=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(m.unobserve(t),m.disconnect(),n())}))}))).observe(t))},to:N||""},d&&{isActive:h,activeClassName:v}))}},511:function(e,t,n){"use strict";var a=n(3),r=n(8),c=n(0),o=n.n(c),i=n(457),l=n(483),u=n(455),s=n(22),m=n(458);function d(e){var t=e.activeBasePath,n=e.activeBaseRegex,c=e.to,i=e.href,s=e.label,m=e.activeClassName,d=void 0===m?"navbar__link--active":m,f=e.prependBaseUrlToHref,b=Object(r.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),v=Object(u.a)(c),h=Object(u.a)(t),g=Object(u.a)(i,{forcePrependBaseUrl:!0});return o.a.createElement(l.a,Object(a.a)({},i?{href:f?g:i}:Object.assign({isNavLink:!0,activeClassName:d,to:v},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(h)}}:null),b),s)}function f(e){var t,n=e.items,l=e.position,u=e.className,s=Object(r.a)(e,["items","position","className"]),m=Object(c.useRef)(null),f=Object(c.useRef)(null),b=Object(c.useState)(!1),v=b[0],h=b[1];Object(c.useEffect)((function(){var e=function(e){m.current&&!m.current.contains(e.target)&&h(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[m]);var g=function(e,t){return void 0===t&&(t=!1),Object(i.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?o.a.createElement("div",{ref:m,className:Object(i.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===l,"dropdown--right":"right"===l,"dropdown--show":v})},o.a.createElement(d,Object(a.a)({className:g(u)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),h(!v))}}),null!==(t=s.children)&&void 0!==t?t:s.label),o.a.createElement("ul",{ref:f,className:"dropdown__menu"},n.map((function(e,t){var c=e.className,i=Object(r.a)(e,["className"]);return o.a.createElement("li",{key:t},o.a.createElement(d,Object(a.a)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),h(!1);var a=m.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active",className:g(c,!0)},i)))})))):o.a.createElement(d,Object(a.a)({className:g(u)},s))}function b(e){var t,n,l,u=e.items,f=e.className,b=(e.position,Object(r.a)(e,["items","className","position"])),v=Object(c.useRef)(null),h=Object(s.useLocation)().pathname,g=Object(c.useState)((function(){var e;return null===(e=!(null!=u&&u.some((function(e){return Object(m.isSamePath)(e.to,h)}))))||void 0===e||e})),O=g[0],p=g[1],j=function(e,t){return void 0===t&&(t=!1),Object(i.a)("menu__link",{"menu__link--sublist":t},e)};if(!u)return o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(d,Object(a.a)({className:j(f)},b)));var E=null!==(t=v.current)&&void 0!==t&&t.scrollHeight?(null===(n=v.current)||void 0===n?void 0:n.scrollHeight)+"px":void 0;return o.a.createElement("li",{className:Object(i.a)("menu__list-item",{"menu__list-item--collapsed":O})},o.a.createElement(d,Object(a.a)({role:"button",className:j(f,!0)},b,{onClick:function(e){e.preventDefault(),p((function(e){return!e}))}}),null!==(l=b.children)&&void 0!==l?l:b.label),o.a.createElement("ul",{className:"menu__list",ref:v,style:{height:O?void 0:E}},u.map((function(e,t){var n=e.className,c=Object(r.a)(e,["className"]);return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(d,Object(a.a)({activeClassName:"menu__link--active",className:j(n)},c,{onClick:b.onClick})))}))))}t.a=function(e){var t=e.mobile,n=void 0!==t&&t,a=Object(r.a)(e,["mobile"]),c=n?b:f;return o.a.createElement(c,a)}},517:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(457),o=n(468),i=n(22),l=n(62),u=n.n(l);function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var m=function(){var e=Object(a.useRef)(null),t=Object(i.useLocation)();return Object(a.useEffect)((function(){!t.hash&&e.current&&s(e.current)}),[t.pathname]),r.a.createElement("div",{ref:e},r.a.createElement("a",{href:"#main",className:u.a.skipToContent,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},r.a.createElement(o.a,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},d=n(458),f=n(462),b=n(63),v=n.n(b);var h=function(){var e,t=Object(f.a)(),n=t.isAnnouncementBarClosed,a=t.closeAnnouncementBar,i=Object(d.useThemeConfig)().announcementBar;if(!i)return null;var l=i.content,u=i.backgroundColor,s=i.textColor,m=i.isCloseable;return!l||m&&n?null:r.a.createElement("div",{className:v.a.announcementBar,style:{backgroundColor:u,color:s},role:"banner"},r.a.createElement("div",{className:Object(c.a)(v.a.announcementBarContent,(e={},e[v.a.announcementBarCloseable]=m,e)),dangerouslySetInnerHTML:{__html:l}}),m?r.a.createElement("button",{type:"button",className:v.a.announcementBarClose,onClick:a,"aria-label":Object(o.b)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},g=n(3),O=n(8),p=n(25),j=n(16),E=n(455),k=n(483),y=n(23),C=n(608);function w(){return r.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var N=n(609);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(l){r=!0,c=l}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function L(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var D="Ctrl";var I=r.a.forwardRef((function(e,t){var n=e.translations,c=void 0===n?{}:n,o=L(e,["translations"]),i=c.buttonText,l=void 0===i?"Search":i,u=c.buttonAriaLabel,s=void 0===u?"Search":u,m=_(Object(a.useState)(null),2),d=m[0],f=m[1];return Object(a.useEffect)((function(){"undefined"!=typeof navigator&&f(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":D)}),[]),r.a.createElement("button",S({type:"button",className:"DocSearch DocSearch-Button","aria-label":s},o,{ref:t}),r.a.createElement("span",{className:"DocSearch-Button-Container"},r.a.createElement(N.a,null),r.a.createElement("span",{className:"DocSearch-Button-Placeholder"},l)),null!==d&&r.a.createElement("span",{className:"DocSearch-Button-Keys"},r.a.createElement("span",{className:"DocSearch-Button-Key"},d===D?r.a.createElement(w,null):d),r.a.createElement("span",{className:"DocSearch-Button-Key"},"K")))})),B=n(488);function T(){var e=function(){var e=Object(j.default)().i18n,t=Object(B.useAllDocsData)(),n=Object(B.useActivePluginAndVersion)(),a=Object(d.useDocsPreferredVersionByPluginId)(),r=[d.DEFAULT_SEARCH_TAG].concat(Object.keys(t).map((function(e){var r,c,o=(null==n||null===(r=n.activePlugin)||void 0===r?void 0:r.pluginId)===e?n.activeVersion:void 0,i=a[e],l=t[e].versions.find((function(e){return e.isLast})),u=null!==(c=null!=o?o:i)&&void 0!==c?c:l;return Object(d.docVersionSearchTag)(e,u.name)})));return{locale:e.currentLocale,tags:r}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}var P=null;function x(e){var t=e.hit,n=e.children;return r.a.createElement(k.a,{to:t.url},n)}function M(e){var t=e.state,n=e.onClose,a=Object(C.a)().generateSearchPageLink;return r.a.createElement(k.a,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function U(e){var t,c,l=e.contextualSearch,u=Object(O.a)(e,["contextualSearch"]),s=Object(j.default)().siteMetadata,m=T(),d=null!==(t=null===(c=u.searchParameters)||void 0===c?void 0:c.facetFilters)&&void 0!==t?t:[],f=l?[].concat(m,d):d,b=Object.assign({},u.searchParameters,{facetFilters:f}),v=Object(E.b)().withBaseUrl,h=Object(i.useHistory)(),k=Object(a.useRef)(null),C=Object(a.useRef)(null),w=Object(a.useState)(!1),N=w[0],S=w[1],_=Object(a.useState)(null),A=_[0],L=_[1],D=Object(a.useCallback)((function(){return P?Promise.resolve():Promise.all([n.e(384).then(n.bind(null,1119)),Promise.all([n.e(0),n.e(385)]).then(n.bind(null,1118)),n.e(0).then(n.t.bind(null,452,7))]).then((function(e){var t=e[0].DocSearchModal;P=t}))}),[]),B=Object(a.useCallback)((function(){D().then((function(){k.current=document.createElement("div"),document.body.insertBefore(k.current,document.body.firstChild),S(!0)}))}),[D,S]),U=Object(a.useCallback)((function(){S(!1),k.current.remove()}),[S]),R=Object(a.useCallback)((function(e){D().then((function(){S(!0),L(e.key)}))}),[D,S,L]),V=Object(a.useRef)({navigate:function(e){var t=e.itemUrl;h.push(t)}}).current,H=Object(a.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:v(""+t.pathname+t.hash)})}))})).current,F=Object(a.useMemo)((function(){return function(e){return r.a.createElement(M,Object(g.a)({},e,{onClose:U}))}}),[U]),K=Object(a.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",s.docusaurusVersion),e}),[s.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,c=e.onInput,o=e.searchButtonRef;r.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),o&&o.current===document.activeElement&&c&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&c(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,c,o])}({isOpen:N,onOpen:B,onClose:U,onInput:R,searchButtonRef:C});var z=Object(o.b)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement("link",{rel:"preconnect",href:"https://"+u.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),r.a.createElement(I,{onTouchStart:D,onFocus:D,onMouseOver:D,onClick:B,ref:C,translations:{buttonText:z,buttonAriaLabel:z}}),N&&Object(p.createPortal)(r.a.createElement(P,Object(g.a)({onClose:U,initialScrollY:window.scrollY,initialQuery:A,navigator:V,transformItems:H,hitComponent:x,resultsFooterComponent:F,transformSearchClient:K},u,{searchParameters:b})),k.current))}var R=function(){var e=Object(j.default)().siteConfig;return r.a.createElement(U,e.themeConfig.algolia)},V=n(64),H=n.n(V),F=function(e){var t=e.icon,n=e.style;return r.a.createElement("span",{className:Object(c.a)(H.a.toggle,H.a.dark),style:n},t)},K=function(e){var t=e.icon,n=e.style;return r.a.createElement("span",{className:Object(c.a)(H.a.toggle,H.a.light),style:n},t)},z=Object(a.memo)((function(e){var t=e.className,n=e.icons,o=e.checked,i=e.disabled,l=e.onChange,u=Object(a.useState)(o),s=u[0],m=u[1],d=Object(a.useState)(!1),f=d[0],b=d[1],v=Object(a.useRef)(null);return r.a.createElement("div",{className:Object(c.a)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":f,"react-toggle--disabled":i}),role:"button",tabIndex:-1,onClick:function(e){var t=v.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void m(null==t?void 0:t.checked)}},r.a.createElement("div",{className:"react-toggle-track"},r.a.createElement("div",{className:"react-toggle-track-check"},n.checked),r.a.createElement("div",{className:"react-toggle-track-x"},n.unchecked)),r.a.createElement("div",{className:"react-toggle-thumb"}),r.a.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:l,onFocus:function(){return b(!0)},onBlur:function(){return b(!1)}}))})),W=function(e){var t=Object(d.useThemeConfig)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,c=t.lightIcon,o=t.lightIconStyle,i=Object(j.default)().isClient;return r.a.createElement(z,Object(g.a)({disabled:!i,icons:{checked:r.a.createElement(F,{icon:n,style:a}),unchecked:r.a.createElement(K,{icon:c,style:o})}},e))},q=n(465),G=n(610),Y=function(e){var t=Object(i.useLocation)(),n=Object(a.useState)(e),r=n[0],c=n[1],o=Object(a.useRef)(!1),l=Object(a.useState)(0),u=l[0],s=l[1],m=Object(a.useCallback)((function(e){null!==e&&s(e.getBoundingClientRect().height)}),[]);return Object(G.a)((function(t,n){var a=t.scrollY,r=n.scrollY;if(e)if(a<u)c(!0);else{if(o.current)return o.current=!1,void c(!1);r&&0===a&&c(!0);var i=document.documentElement.scrollHeight-u,l=window.innerHeight;r&&a>=r?c(!1):a+l<i&&c(!0)}}),[u,o]),Object(a.useEffect)((function(){e&&c(!0)}),[t.pathname]),Object(a.useEffect)((function(){e&&t.hash&&(o.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:r}},Q=n(611),X=n(612),J=n(511),$=function(e){var t=e.width,n=void 0===t?20:t,a=e.height,c=void 0===a?20:a,o=Object(O.a)(e,["width","height"]);return r.a.createElement("svg",Object(g.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:n,height:c},o),r.a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};function Z(e){var t=e.mobile,n=e.dropdownItemsBefore,a=e.dropdownItemsAfter,c=Object(O.a)(e,["mobile","dropdownItemsBefore","dropdownItemsAfter"]),o=Object(j.default)().i18n,i=o.currentLocale,l=o.locales,u=o.localeConfigs,s=Object(d.useAlternatePageUtils)();function m(e){return u[e].label}var f=l.map((function(e){var t="pathname://"+s.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:m(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===i?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),b=[].concat(n,f,a),v=t?"Languages":m(i);return r.a.createElement(J.a,Object(g.a)({},c,{href:"#",mobile:t,label:r.a.createElement("span",null,r.a.createElement($,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.a.createElement("span",null,v)),items:b}))}var ee=n(65),te=n.n(ee);function ne(e){return e.mobile?null:r.a.createElement("div",{className:te.a.searchWrapper},r.a.createElement(R,null))}var ae={default:function(){return J.a},localeDropdown:function(){return Z},search:function(){return ne},docsVersion:function(){return n(708).default},docsVersionDropdown:function(){return n(709).default},doc:function(){return n(710).default}};function re(e){var t=e.type,n=Object(O.a)(e,["type"]),a=function(e){void 0===e&&(e="default");var t=ae[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(a,n)}var ce=n(693),oe=n(613),ie=n(67),le=n.n(ie),ue="right";var se=function(){var e,t=Object(d.useThemeConfig)(),n=t.navbar,o=n.items,i=n.hideOnScroll,l=n.style,u=t.colorMode.disableSwitch,s=Object(a.useState)(!1),m=s[0],f=s[1],b=Object(q.a)(),v=b.isDarkTheme,h=b.setLightTheme,O=b.setDarkTheme,p=Y(i),j=p.navbarRef,E=p.isNavbarVisible;Object(Q.a)(m);var k=Object(a.useCallback)((function(){f(!0)}),[f]),y=Object(a.useCallback)((function(){f(!1)}),[f]),C=Object(a.useCallback)((function(e){return e.target.checked?O():h()}),[h,O]),w=Object(X.a)();Object(a.useEffect)((function(){w===X.b.desktop&&f(!1)}),[w]);var N=o.some((function(e){return"search"===e.type})),S=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:ue)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:ue)}))}}(o),_=S.leftItems,A=S.rightItems;return r.a.createElement("nav",{ref:j,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===l,"navbar--primary":"primary"===l,"navbar-sidebar--show":m},e[le.a.navbarHideable]=i,e[le.a.navbarHidden]=i&&!E,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=o&&0!==o.length&&r.a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:k,onKeyDown:k},r.a.createElement(oe.a,null)),r.a.createElement(ce.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title")}),_.map((function(e,t){return r.a.createElement(re,Object(g.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},A.map((function(e,t){return r.a.createElement(re,Object(g.a)({},e,{key:t}))})),!u&&r.a.createElement(W,{className:le.a.displayOnlyInLargeViewport,checked:v,onChange:C}),!N&&r.a.createElement(R,null))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:y}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(ce.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:y}),!u&&m&&r.a.createElement(W,{checked:v,onChange:C})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.a.createElement(re,Object(g.a)({mobile:!0},e,{onClick:y,key:t}))})))))))},me=n(519),de=n(7),fe=Object(d.createStorageSlot)("theme"),be="light",ve="dark",he=function(e){return e===ve?ve:be},ge=function(e){Object(d.createStorageSlot)("theme").set(he(e))},Oe=function(){var e=Object(d.useThemeConfig)().colorMode,t=e.defaultMode,n=e.disableSwitch,r=e.respectPrefersColorScheme,c=Object(a.useState)(function(e){return de.a.canUseDOM?he(document.documentElement.getAttribute("data-theme")):he(e)}(t)),o=c[0],i=c[1],l=Object(a.useCallback)((function(){i(be),ge(be)}),[]),u=Object(a.useCallback)((function(){i(ve),ge(ve)}),[]);return Object(a.useEffect)((function(){document.documentElement.setAttribute("data-theme",he(o))}),[o]),Object(a.useEffect)((function(){if(!n)try{var e=fe.get();null!==e&&i(he(e))}catch(t){console.error(t)}}),[i]),Object(a.useEffect)((function(){n&&!r||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;i(t?ve:be)}))}),[]),{isDarkTheme:o===ve,setLightTheme:l,setDarkTheme:u}},pe=n(466);var je=function(e){var t=Oe(),n=t.isDarkTheme,a=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(pe.a.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:c}},e.children)};function Ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function ke(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return Ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ee(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var ye="docusaurus.tab.",Ce=function(){var e=Object(a.useState)({}),t=e[0],n=e[1],r=Object(a.useCallback)((function(e,t){Object(d.createStorageSlot)("docusaurus.tab."+e).set(t)}),[]);return Object(a.useEffect)((function(){try{for(var e,t={},a=ke(Object(d.listStorageKeys)());!(e=a()).done;){var r=e.value;if(r.startsWith(ye))t[r.substring(ye.length)]=Object(d.createStorageSlot)(r).get()}n(t)}catch(c){console.error(c)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},we=Object(d.createStorageSlot)("docusaurus.announcement.dismiss"),Ne=Object(d.createStorageSlot)("docusaurus.announcement.id"),Se=function(){var e=Object(d.useThemeConfig)().announcementBar,t=Object(a.useState)(!0),n=t[0],r=t[1],c=Object(a.useCallback)((function(){we.set("true"),r(!0)}),[]);return Object(a.useEffect)((function(){if(e){var t=e.id,n=Ne.get();"annoucement-bar"===n&&(n="announcement-bar");var a=t!==n;Ne.set(t),a&&we.set("false"),(a||"false"===we.get())&&r(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:c}},_e=n(463);var Ae=function(e){var t=Ce(),n=t.tabGroupChoices,a=t.setTabGroupChoices,c=Se(),o=c.isAnnouncementBarClosed,i=c.closeAnnouncementBar;return r.a.createElement(_e.a.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:o,closeAnnouncementBar:i}},e.children)};function Le(e){var t=e.children;return r.a.createElement(je,null,r.a.createElement(Ae,null,r.a.createElement(d.DocsPreferredVersionContextProvider,null,t)))}function De(e){var t=e.locale,n=e.version,a=e.tag,c=t;return r.a.createElement(y.a,null,c&&r.a.createElement("meta",{name:"docsearch:language",content:c}),n&&r.a.createElement("meta",{name:"docsearch:version",content:n}),a&&r.a.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}var Ie=n(544);function Be(){var e=Object(j.default)().i18n,t=e.defaultLocale,n=e.locales,a=Object(d.useAlternatePageUtils)();return r.a.createElement(y.a,null,n.map((function(e){return r.a.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.a.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function Te(e){var t=e.permalink,n=Object(j.default)().siteConfig.url,a=function(){var e=Object(j.default)().siteConfig.url,t=Object(i.useLocation)().pathname;return e+Object(E.a)(t)}(),c=t?""+n+t:a;return r.a.createElement(y.a,null,r.a.createElement("meta",{property:"og:url",content:c}),r.a.createElement("link",{rel:"canonical",href:c}))}function Pe(e){var t=Object(j.default)(),n=t.siteConfig,a=n.favicon,c=n.themeConfig.metadatas,o=t.i18n,i=o.currentLocale,l=o.localeConfigs,u=e.title,s=e.description,m=e.image,f=e.keywords,b=e.searchMetadatas,v=Object(E.a)(a),h=i,O=l[i].direction;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement("html",{lang:h,dir:O}),a&&r.a.createElement("link",{rel:"shortcut icon",href:v})),r.a.createElement(Ie.a,{title:u,description:s,keywords:f,image:m}),r.a.createElement(Te,null),r.a.createElement(Be,null),r.a.createElement(De,Object(g.a)({tag:d.DEFAULT_SEARCH_TAG,locale:i},b)),r.a.createElement(y.a,null,c.map((function(e,t){return r.a.createElement("meta",Object(g.a)({key:"metadata_"+t},e))}))))}n(68);var xe=function(){Object(a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};n(69);t.a=function(e){var t=e.children,n=e.noFooter,a=e.wrapperClassName,o=e.pageClassName;return xe(),r.a.createElement(Le,null,r.a.createElement(Pe,e),r.a.createElement(m,null),r.a.createElement(h,null),r.a.createElement(se,null),r.a.createElement("div",{className:Object(c.a)(d.ThemeClassNames.wrapper.main,a,o)},t),!n&&r.a.createElement(me.a,null))}},544:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),c=n(23),o=n(458),i=n(455);function l(e){var t=e.title,n=e.description,a=e.keywords,l=e.image,u=Object(o.useThemeConfig)().image,s=Object(o.useTitleFormatter)(t),m=Object(i.a)(l||u,{absolute:!0});return r.a.createElement(c.a,null,r.a.createElement("title",null,s),r.a.createElement("meta",{property:"og:title",content:s}),n&&r.a.createElement("meta",{name:"description",content:n}),n&&r.a.createElement("meta",{property:"og:description",content:n}),a&&r.a.createElement("meta",{name:"keywords",content:Array.isArray(a)?a.join(","):a}),m&&r.a.createElement("meta",{property:"og:image",content:m}),m&&r.a.createElement("meta",{name:"twitter:image",content:m}),m&&r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}},608:function(e,t,n){"use strict";var a=n(22),r=n(7),c=n(16);t.a=function(){var e=Object(a.useHistory)(),t=Object(a.useLocation)(),n=Object(c.default)().siteConfig,o=(n=void 0===n?{}:n).baseUrl;return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return o+"search?q="+encodeURIComponent(e)}}}},609:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a);function c(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},610:function(e,t,n){"use strict";var a=n(0),r=n(7),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var n=Object(a.useRef)(c()),r=function(){var t=c();e&&e(t,n.current),n.current=t};Object(a.useEffect)((function(){var e={passive:!0};return r(),window.addEventListener("scroll",r,e),function(){return window.removeEventListener("scroll",r,e)}}),t)}},611:function(e,t,n){"use strict";var a=n(0);t.a=function(e){void 0===e&&(e=!0),Object(a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},612:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n(0),r=n(7),c={desktop:"desktop",mobile:"mobile"};t.a=function(){var e=r.a.canUseDOM;function t(){if(e)return window.innerWidth>996?c.desktop:c.mobile}var n=Object(a.useState)(t),o=n[0],i=n[1];return Object(a.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){i(t())}}),[]),o}},613:function(e,t,n){"use strict";var a=n(3),r=n(8),c=n(0),o=n.n(c);t.a=function(e){var t=e.width,n=void 0===t?30:t,c=e.height,i=void 0===c?30:c,l=e.className,u=Object(r.a)(e,["width","height","className"]);return o.a.createElement("svg",Object(a.a)({"aria-label":"Menu",className:l,width:n,height:i,viewBox:"0 0 30 30",role:"img",focusable:"false"},u),o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},693:function(e,t,n){"use strict";var a=n(3),r=n(8),c=n(0),o=n.n(c),i=n(483),l=n(457),u=n(16),s=n(465),m=n(66),d=n.n(m),f=function(e){var t=Object(u.default)().isClient,n=Object(s.a)().isDarkTheme,c=e.sources,i=e.className,m=e.alt,f=void 0===m?"":m,b=Object(r.a)(e,["sources","className","alt"]),v=t?n?["dark"]:["light"]:["light","dark"];return o.a.createElement(o.a.Fragment,null,v.map((function(e){return o.a.createElement("img",Object(a.a)({key:e,src:c[e],alt:f,className:Object(l.a)(d.a.themedImage,d.a["themedImage--"+e],i)},b))})))},b=n(455),v=n(458);t.a=function(e){var t=Object(u.default)().isClient,n=Object(v.useThemeConfig)().navbar,c=n.title,l=n.logo,s=void 0===l?{src:""}:l,m=e.imageClassName,d=e.titleClassName,h=Object(r.a)(e,["imageClassName","titleClassName"]),g=Object(b.a)(s.href||"/"),O={light:Object(b.a)(s.src),dark:Object(b.a)(s.srcDark||s.src)};return o.a.createElement(i.a,Object(a.a)({to:g},h,s.target&&{target:s.target}),s.src&&o.a.createElement(f,{key:t,className:m,sources:O,alt:s.alt||c||"Logo"}),null!=c&&o.a.createElement("strong",{className:d},c))}},708:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),c=n(0),o=n.n(c),i=n(511),l=n(488),u=n(458);function s(e){var t,n=e.label,c=e.to,s=e.docsPluginId,m=Object(r.a)(e,["label","to","docsPluginId"]),d=Object(l.useActiveVersion)(s),f=Object(u.useDocsPreferredVersion)(s).preferredVersion,b=Object(l.useLatestVersion)(s),v=null!==(t=null!=d?d:f)&&void 0!==t?t:b,h=null!=n?n:v.label,g=null!=c?c:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(v).path;return o.a.createElement(i.a,Object(a.a)({},m,{label:h,to:g}))}},709:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(3),r=n(8),c=n(0),o=n.n(c),i=n(511),l=n(488),u=n(458),s=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function m(e){var t,n,c=e.mobile,m=e.docsPluginId,d=e.dropdownActiveClassDisabled,f=e.dropdownItemsBefore,b=e.dropdownItemsAfter,v=Object(r.a)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),h=Object(l.useActiveDocContext)(m),g=Object(l.useVersions)(m),O=Object(l.useLatestVersion)(m),p=Object(u.useDocsPreferredVersion)(m),j=p.preferredVersion,E=p.savePreferredVersionName;var k=null!==(t=null!==(n=h.activeVersion)&&void 0!==n?n:j)&&void 0!==t?t:O,y=c?"Versions":k.label,C=c?void 0:s(k).path;return o.a.createElement(i.a,Object(a.a)({},v,{mobile:c,label:y,to:C,items:function(){var e=g.map((function(e){var t=(null==h?void 0:h.alternateDocVersions[e.name])||s(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==h?void 0:h.activeVersion)},onClick:function(){E(e.name)}}})),t=[].concat(f,e,b);if(!(t.length<=1))return t}(),isActive:d?function(){return!1}:void 0}))}},710:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(3),r=n(8),c=n(0),o=n.n(c),i=n(511),l=n(488),u=n(457),s=n(458);function m(e){var t,n,c=e.docId,m=e.activeSidebarClassName,d=e.label,f=e.docsPluginId,b=Object(r.a)(e,["docId","activeSidebarClassName","label","docsPluginId"]),v=Object(l.useActiveDocContext)(f),h=v.activeVersion,g=v.activeDoc,O=Object(s.useDocsPreferredVersion)(f).preferredVersion,p=Object(l.useLatestVersion)(f),j=null!==(t=null!=h?h:O)&&void 0!==t?t:p,E=j.docs.find((function(e){return e.id===c}));if(!E){var k=j.docs.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id="+c+" in version "+j.name+".\nAvailable docIds=\n- "+k)}return o.a.createElement(i.a,Object(a.a)({exact:!0},b,{className:Object(u.a)(b.className,(n={},n[m]=g&&g.sidebar===E.sidebar,n)),label:null!=d?d:E.id,to:E.path}))}}}]);