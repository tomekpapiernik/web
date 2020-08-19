(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),o=n(6),a=(n(0),n(95)),l={id:"install",title:"Installation"},i={unversionedId:"install",id:"version-v0.5/install",isDocsHomePage:!1,title:"Installation",description:"Installing ORY Keto on any system is straightforward. We provide pre-built",source:"@site/versioned_docs/version-v0.5/install.md",permalink:"/keto/docs/install",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.5/install.md",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1590665913,sidebar:"version-v0.5/docs",previous:{title:"Introduction",permalink:"/keto/docs/"},next:{title:"Configure and Deploy",permalink:"/keto/docs/configure-deploy"}},c=[{value:"Docker",id:"docker",children:[]},{value:"macOS",id:"macos",children:[]},{value:"Linux",id:"linux",children:[]},{value:"Windows",id:"windows",children:[]},{value:"Download Binaries",id:"download-binaries",children:[]},{value:"Building from Source",id:"building-from-source",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Installing ORY Keto on any system is straightforward. We provide pre-built\nbinaries, Docker images, and support a number of package managers."),Object(a.b)("h2",{id:"docker"},"Docker"),Object(a.b)("p",null,"We recommend using Docker to run ORY Keto:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ docker pull oryd/keto:v0.5.6-alpha.1\n$ docker run --rm -it oryd/keto:v0.5.6-alpha.1 help\n")),Object(a.b)("h2",{id:"macos"},"macOS"),Object(a.b)("p",null,"You can install ORY Keto using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://brew.sh/"}),"homebrew")," on macOS:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ brew tap ory/keto\n$ brew install ory/keto/keto\n$ keto help\n")),Object(a.b)("h2",{id:"linux"},"Linux"),Object(a.b)("p",null,"On linux, you can use ",Object(a.b)("inlineCode",{parentName:"p"},"bash <(curl ...)")," to fetch the latest stable binary\nusing:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ bash <(curl https://raw.githubusercontent.com/ory/keto/master/install.sh) -b . v0.5.6-alpha.1\n$ ./keto help\n")),Object(a.b)("p",null,"You may want to move ORY Keto into your ",Object(a.b)("inlineCode",{parentName:"p"},"$PATH"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ sudo mv ./keto /usr/local/bin/\n$ keto help\n")),Object(a.b)("h2",{id:"windows"},"Windows"),Object(a.b)("p",null,"You can install ORY Keto using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://scoop.sh"}),"scoop")," on Windows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"> scoop bucket add ory-keto https://github.com/ory/scoop-keto.git\n> scoop install keto\n> keto help\n")),Object(a.b)("h2",{id:"download-binaries"},"Download Binaries"),Object(a.b)("p",null,"The client and server ",Object(a.b)("strong",{parentName:"p"},"binaries are downloadable via\n",Object(a.b)("a",Object(r.a)({parentName:"strong"},{href:"https://github.com/ory/keto/releases"}),"GitHub releases")),". There is currently no\ninstaller available. You have to add the Keto binary to the PATH environment\nvariable yourself or put the binary in a location that is already in your\n",Object(a.b)("inlineCode",{parentName:"p"},"$PATH"),", for example ",Object(a.b)("inlineCode",{parentName:"p"},"/usr/local/bin"),"."),Object(a.b)("p",null,"Once installed, you should be able to run:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ keto help\n")),Object(a.b)("h2",{id:"building-from-source"},"Building from Source"),Object(a.b)("p",null,"If you wish to compile ORY Keto yourself, you need to install and set up\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://golang.org/"}),"Go 1.12+")," and add ",Object(a.b)("inlineCode",{parentName:"p"},"$GOPATH/bin")," to your ",Object(a.b)("inlineCode",{parentName:"p"},"$PATH"),"."),Object(a.b)("p",null,"The following commands check out the latest release tag of ORY Keto, compile it,\nand set up flags so that ",Object(a.b)("inlineCode",{parentName:"p"},"keto version")," works as expected. Please note that this\nwill only work with a Linux shell like bash or sh."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ go get -d -u github.com/ory/keto\n$ cd $(go env GOPATH)/src/github.com/ory/keto\n$ GO111MODULE=on make install-stable\n$ $(go env GOPATH)/bin/keto help\n")))}b.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,O=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return n?o.a.createElement(O,i(i({ref:t},s),{},{components:n})):o.a.createElement(O,i({ref:t},s))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);