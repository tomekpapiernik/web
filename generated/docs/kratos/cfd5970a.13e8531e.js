(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{358:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return s})),n.d(e,"rightToc",(function(){return i})),n.d(e,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(440)),c={id:"kratos-jsonnet-format",title:"kratos jsonnet format",description:"kratos jsonnet format"},s={unversionedId:"cli/kratos-jsonnet-format",id:"cli/kratos-jsonnet-format",isDocsHomePage:!1,title:"kratos jsonnet format",description:"kratos jsonnet format",source:"@site/docs/cli/kratos-jsonnet-format.md",slug:"/cli/kratos-jsonnet-format",permalink:"/kratos/docs/next/cli/kratos-jsonnet-format",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/cli/kratos-jsonnet-format.md",version:"current",lastUpdatedBy:"zepatrik",lastUpdatedAt:1605629700,sidebar:"docs",previous:{title:"kratos jsonnet",permalink:"/kratos/docs/next/cli/kratos-jsonnet"},next:{title:"kratos jsonnet lint",permalink:"/kratos/docs/next/cli/kratos-jsonnet-lint"}},i=[{value:"kratos jsonnet format",id:"kratos-jsonnet-format",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={rightToc:i};function p(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"kratos-jsonnet-format"},"kratos jsonnet format"),Object(a.b)("h3",{id:"synopsis"},"Synopsis"),Object(a.b)("p",null,"Formats JSONNet files using the official JSONNet formatter."),Object(a.b)("p",null,"Use -w or --write to write output back to files instead of stdout."),Object(a.b)("p",null,"Glob Syntax:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"pattern:\n    { term }\n\nterm:\n    '*'         matches any sequence of non-separator characters\n    '**'        matches any sequence of characters\n    '?'         matches any single non-separator character\n    '[' [ '!' ] { character-range } ']'\n                character class (must be non-empty)\n    '{' pattern-list '}'\n                pattern alternatives\n    c           matches character c (c != '*', '**', '?', '\\', '[', '{', '}')\n    '\\' c       matches character c\n\ncharacter-range:\n    c           matches character c (c != '\\\\', '-', ']')\n    '\\' c       matches character c\n    lo '-' hi   matches character c for lo <= c <= hi\n\npattern-list:\n    pattern { ',' pattern }\n                comma-separated (without spaces) patterns\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"kratos jsonnet format path/to/files/*.jsonnet [more/files.jsonnet, [supports/**/{foo,bar}.jsonnet]] [flags]\n")),Object(a.b)("h3",{id:"options"},"Options"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"  -h, --help    help for format\n  -w, --write   Write formatted output back to file.\n")),Object(a.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'  -c, --config string   Path to config file. Supports .json, .yaml, .yml, .toml. Default is "$HOME/.kratos.(yaml|yml|toml|json)"\n')),Object(a.b)("h3",{id:"see-also"},"SEE ALSO"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"kratos-jsonnet"}),"kratos jsonnet")," - Helpers for linting and formatting JSONNet\ncode")))}p.isMDXComponent=!0},440:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=o.a.createContext({}),p=function(t){var e=o.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},m=function(t){var e=p(t.components);return o.a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},f=o.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),m=p(n),f=r,b=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?o.a.createElement(b,s(s({ref:e},l),{},{components:n})):o.a.createElement(b,s({ref:e},l))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,c=new Array(a);c[0]=f;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);