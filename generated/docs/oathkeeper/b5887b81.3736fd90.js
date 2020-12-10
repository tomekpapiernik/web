(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(124)),l={id:"install",title:"Installation"},i={unversionedId:"install",id:"version-v0.38/install",isDocsHomePage:!1,title:"Installation",description:"Installing ORY Oathkeeper on any system is straight forward. We provide",source:"@site/versioned_docs/version-v0.38/install.md",slug:"/install",permalink:"/oathkeeper/docs/install",editUrl:"https://github.com/ory/oathkeeper/edit/master/docs/versioned_docs/version-v0.38/install.md",version:"v0.38",lastUpdatedBy:"aeneasr",lastUpdatedAt:1607509379,sidebar:"version-v0.38/docs",previous:{title:"Introduction",permalink:"/oathkeeper/docs/"},next:{title:"Contribution Guidelines",permalink:"/oathkeeper/docs/contributing"}},c=[{value:"Docker",id:"docker",children:[]},{value:"macOS",id:"macos",children:[]},{value:"Linux",id:"linux",children:[]},{value:"Windows",id:"windows",children:[]},{value:"Download Binaries",id:"download-binaries",children:[]},{value:"Building from Source",id:"building-from-source",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Installing ORY Oathkeeper on any system is straight forward. We provide\npre-built binaries, Docker Images and support various package managers."),Object(o.b)("h2",{id:"docker"},"Docker"),Object(o.b)("p",null,"We recommend using Docker to run ORY Oathkeeper:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ docker pull oryd/oathkeeper:v0.38.5-beta.1.pre.1\n$ docker run --rm -it oryd/oathkeeper help\n")),Object(o.b)("h2",{id:"macos"},"macOS"),Object(o.b)("p",null,"You can install ORY Oathkeeper using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://brew.sh/"}),"homebrew")," on macOS:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ brew tap ory/oathkeeper\n$ brew install ory/oathkeeper/oathkeeper\n$ oathkeeper help\n")),Object(o.b)("h2",{id:"linux"},"Linux"),Object(o.b)("p",null,"On linux, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"bash <(curl ...)")," to fetch the latest stable binary\nusing:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ bash <(curl https://raw.githubusercontent.com/ory/oathkeeper/master/install.sh) -b . v0.38.5-beta.1.pre.1\n$ ./oathkeeper help\n")),Object(o.b)("p",null,"You may want to move ORY Oathkeeper to your ",Object(o.b)("inlineCode",{parentName:"p"},"$PATH"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ sudo mv ./oathkeeper /usr/local/bin/\n$ oathkeeper help\n")),Object(o.b)("h2",{id:"windows"},"Windows"),Object(o.b)("p",null,"You can install ORY Oathkeeper using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://scoop.sh"}),"scoop")," on Windows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"> scoop bucket add ory-oathkeeper https://github.com/ory/scoop-oathkeeper.git\n> scoop install oathkeeper\n> oathkeeper help\n")),Object(o.b)("h2",{id:"download-binaries"},"Download Binaries"),Object(o.b)("p",null,"The client and server ",Object(o.b)("strong",{parentName:"p"},"binaries are downloadable at the\n",Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"https://github.com/ory/oathkeeper/releases"}),"releases tab")),". There is currently\nno installer available. You have to add the Oathkeeper binary to the PATH\nenvironment variable yourself or put the binary in a location that is already in\nyour ",Object(o.b)("inlineCode",{parentName:"p"},"$PATH")," (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"/usr/local/bin"),", ...)."),Object(o.b)("p",null,"Once installed, you should be able to run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ oathkeeper help\n")),Object(o.b)("h2",{id:"building-from-source"},"Building from Source"),Object(o.b)("p",null,"If you wish to compile ORY Oathkeeper yourself, you need to install and set up\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://golang.org/"}),"Go 1.12+")," and add ",Object(o.b)("inlineCode",{parentName:"p"},"$GOPATH/bin")," to your ",Object(o.b)("inlineCode",{parentName:"p"},"$PATH"),"."),Object(o.b)("p",null,"The following commands will check out the latest release tag of ORY Oathkeeper\nand compile it and set up flags so that ",Object(o.b)("inlineCode",{parentName:"p"},"oathkeeper version")," works as expected.\nPlease note that this will only work with a linux shell like bash or sh."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ go get -d -u github.com/ory/oathkeeper\n$ cd $(go env GOPATH)/src/github.com/ory/oathkeeper\n$ GO111MODULE=on make install-stable\n$ $(go env GOPATH)/bin/oathkeeper help\n")))}p.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,h=b["".concat(l,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(h,i(i({ref:t},s),{},{components:n})):a.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);