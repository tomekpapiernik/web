"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[36091],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),m=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=m(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),p=m(n),u=i,h=p["".concat(c,".").concat(u)]||p[u]||d[u]||a;return n?o.createElement(h,s(s({ref:t},l),{},{components:n})):o.createElement(h,s({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var m=2;m<a;m++)s[m]=n[m];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},82786:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return l},default:function(){return p}});var o=n(87462),i=n(63366),a=(n(67294),n(3905)),s=["components"],r={id:"multi-domain-cookies",title:"Advanced Base URL, CSRF & Session Cookie Settings"},c=void 0,m={unversionedId:"guides/multi-domain-cookies",id:"version-v0.7/guides/multi-domain-cookies",isDocsHomePage:!1,title:"Advanced Base URL, CSRF & Session Cookie Settings",description:"This document describes advanced strategies for multi-domain environments and",source:"@site/versioned_docs/version-v0.7/guides/multi-domain-cookies.mdx",sourceDirName:"guides",slug:"/guides/multi-domain-cookies",permalink:"/kratos/docs/v0.7/guides/multi-domain-cookies",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.7/guides/multi-domain-cookies.mdx",tags:[],version:"v0.7",lastUpdatedBy:"aeneasr",lastUpdatedAt:1626195872,formattedLastUpdatedAt:"7/13/2021",frontMatter:{id:"multi-domain-cookies",title:"Advanced Base URL, CSRF & Session Cookie Settings"},sidebar:"version-v0.7/docs",previous:{title:"Configuring Cookies",permalink:"/kratos/docs/v0.7/guides/configuring-cookies"},next:{title:"Setting up Cross-origin resource sharing (CORS)",permalink:"/kratos/docs/v0.7/guides/setting-up-cors"}},l=[{value:"Base URL",id:"base-url",children:[],level:2},{value:"Cookies",id:"cookies",children:[],level:2}],d={toc:l};function p(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document describes advanced strategies for multi-domain environments and\nother scenarios."),(0,a.kt)("h2",{id:"base-url"},"Base URL"),(0,a.kt)("p",null,"The public base URL (",(0,a.kt)("inlineCode",{parentName:"p"},"serve.public.base_url"),") is used to compute redirect URLs,\nform action URLs, and more. If you host Ory Kratos on more than one domain you\nmight want to enable the domain aliasing feature. This allows to register\nadditional base URLs. On incoming HTTP Requests, Ory Kratos checks the HTTP\n",(0,a.kt)("inlineCode",{parentName:"p"},"Host")," Header and compares that to the list of domain aliases."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'},"serve:\n  public:\n    base_url: https://this-is-the-default/base-url\n    domain_aliases:\n      - match_domain: www.another-domain.com\n        base_path: /kratos\n        scheme: https\n      - match_domain: that-domain.com\n        base_path: /\n        scheme: http\n")),(0,a.kt)("p",null,"If a match is found, the value ",(0,a.kt)("inlineCode",{parentName:"p"},"serve.public.base_url")," will be ignored and\ninstead the base URL is computed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<config.protocol>://<request.host + request.port><config.base_path>\n")),(0,a.kt)("p",null,"Values ",(0,a.kt)("inlineCode",{parentName:"p"},"<request.host>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<request.port>")," are set by the incoming HTTP request\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"<config.base_path>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<config.protocol>"),", by the config:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Incoming request is to ",(0,a.kt)("inlineCode",{parentName:"li"},"https://www.another-domain.com:123/kratos/identities/"),"\nso the result is ",(0,a.kt)("inlineCode",{parentName:"li"},"https://www.another-domain.com:123/kratos")),(0,a.kt)("li",{parentName:"ul"},"Incoming request is to ",(0,a.kt)("inlineCode",{parentName:"li"},"http://www.another-domain.com/kratos/sessions/")," so the\nresult is ",(0,a.kt)("inlineCode",{parentName:"li"},"http://www.another-domain.com/kratos")),(0,a.kt)("li",{parentName:"ul"},"Incoming request is to ",(0,a.kt)("inlineCode",{parentName:"li"},"https://that-domain.com/identities/")," so the result is\n",(0,a.kt)("inlineCode",{parentName:"li"},"https://that-domain.com/identities"))),(0,a.kt)("h2",{id:"cookies"},"Cookies"),(0,a.kt)("p",null,"Ory Kratos' browser features rely heavily on HTTP Cookies to mitigate common\nattack vectors and make the integration as easy as possible to use. Therefore it\nis important to know that"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/1612177/are-http-cookies-port-specific"},"HTTP Cookies ignore ports"),",\nmeaning the browser will send a cookie it received for\n",(0,a.kt)("inlineCode",{parentName:"li"},"http://my-domain.com:1234")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"http://my-domain.com:4321")," as well."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/18492576/share-cookie-between-subdomain-and-domain"},"Subdomains can set HTTP Cookies for parent domains"),",\nmeaning a HTTP Cookie specifying ",(0,a.kt)("inlineCode",{parentName:"li"},"domain=my-domain.com")," will be allowed to\nset even if the URL is ",(0,a.kt)("inlineCode",{parentName:"li"},"http://sub.my-domain.com")," or\n",(0,a.kt)("inlineCode",{parentName:"li"},"http://sub.sub.my-domain.com"),".")),(0,a.kt)("p",null,"You can adjust the session cookie's domain using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml"',title:'"path/to/kratos/config.yml"'},"# Settings for both anti-CSRF and session cookies\ncookies:\n  domain: www.cookies.com\n  path: /cookies\n  same_site: Lax\n\nsession:\n  cookie:\n    # Overrides cookies.domain for session cookies\n    domain: my-domain.com\n\n    # Overrides cookies.path for session cookies\n    path: /\n\n    # Overrides cookies.samesite for session cookies\n    same_site: Strict\n\nserve:\n  public:\n    domain_aliases:\n      # When a request is coming from www.another-domain.com or that-domain.com, these these override:\n      #\n      # - session.cookie.domain and session.cookie.path for sessions\n      # - cookies.domain and cookies.path for anti-CSRF cookies\n\n      - match_domain: www.another-domain.com\n        base_path: /kratos\n\n        # The scheme has NO effect on the cookie `secure` flag!\n        # scheme: https\n\n      - match_domain: that-domain.com\n        base_path: /\n\n        # The scheme has NO effect on the cookie `secure` flag!\n        # scheme: http\n")),(0,a.kt)("p",null,"What ",(0,a.kt)("strong",{parentName:"p"},"is not")," currently possible is to set up Ory Kratos in a way where you\nget session cookies running on two separate top level domains (e.g.\n",(0,a.kt)("inlineCode",{parentName:"p"},"my-domain.com")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"another-domain.com"),"). This is tracked as\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/662"},"kratos#662"),"."))}p.isMDXComponent=!0}}]);