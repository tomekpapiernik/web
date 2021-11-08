"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[40002],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62110:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={id:"rest-api",title:"REST API Design"},c=void 0,l={unversionedId:"concepts/rest-api",id:"concepts/rest-api",isDocsHomePage:!1,title:"REST API Design",description:"This chapter contains generally applicable information on API design. When using",source:"@site/docs/concepts/rest-api.mdx",sourceDirName:"concepts",slug:"/concepts/rest-api",permalink:"/kratos/docs/next/concepts/rest-api",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/concepts/rest-api.mdx",tags:[],version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619624197,formattedLastUpdatedAt:"4/28/2021",frontMatter:{id:"rest-api",title:"REST API Design"},sidebar:"docs",previous:{title:"Out-of-band communication via E-Mail and SMS",permalink:"/kratos/docs/next/concepts/email-sms"},next:{title:"Federation",permalink:"/kratos/docs/next/concepts/federation"}},s=[{value:"Pagination",id:"pagination",children:[],level:2},{value:"Date Format",id:"date-format",children:[],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This chapter contains generally applicable information on API design. When using\nOry services, one can expect a consistent experience when interacting with REST\nAPIs."),(0,o.kt)("h2",{id:"pagination"},"Pagination"),(0,o.kt)("p",null,"On REST endpoints that are explicitly labeled as such, pagination information is\navailable through the ",(0,o.kt)("inlineCode",{parentName:"p"},"Link")," HTTP header."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Link")," header contains a comma-delimited list of links to the following\npages (where applicable):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First"),(0,o.kt)("li",{parentName:"ul"},"Next"),(0,o.kt)("li",{parentName:"ul"},"Previous (prev)"),(0,o.kt)("li",{parentName:"ul"},"Last")),(0,o.kt)("p",null,"Pages are created based on the values of ",(0,o.kt)("inlineCode",{parentName:"p"},"per_page")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," provided in the\nquerystring, where ",(0,o.kt)("inlineCode",{parentName:"p"},"per_page")," is the page size, and ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," is the current page."),(0,o.kt)("p",null,"In most scenarios, the ",(0,o.kt)("inlineCode",{parentName:"p"},"per_page")," should be a multiple of the ",(0,o.kt)("inlineCode",{parentName:"p"},"page"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'> GET /resources?per_page=5&page=10 HTTP/1.1\n> Host: localhost:4445\n> User-Agent: curl/7.64.1\n> Accept: */*\n>\n< HTTP/1.1 200 OK\n< Content-Type: application/json\n< Link: </resources?per_page=5&page=0>; rel="first",</resources?per_page=5&page=15>; rel="next",</resources?per_page=5&page=5>; rel="prev",</resources?per_page=5&page=20>; rel="last"\n< Date: Mon, 22 Apr 2019 23:34:29 GMT\n< Transfer-Encoding: chunked\n<\n[...]\n')),(0,o.kt)("h2",{id:"date-format"},"Date Format"),(0,o.kt)("p",null,"Ory's APIs use ",(0,o.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc3339"},"rfc3339")," as the date\nformat:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "created_at": "2006-01-02T15:04:05Z07:00"\n}\n')))}d.isMDXComponent=!0}}]);