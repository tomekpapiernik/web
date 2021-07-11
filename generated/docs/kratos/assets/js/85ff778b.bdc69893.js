(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[999],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19982:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l=["components"],i={id:"install",title:"Installation"},s=void 0,c={unversionedId:"install",id:"version-v0.5/install",isDocsHomePage:!1,title:"Installation",description:"Installing ORY Kratos on any system is straight forward. We provide prebuilt",source:"@site/versioned_docs/version-v0.5/install.md",sourceDirName:".",slug:"/install",permalink:"/kratos/docs/v0.5/install",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/install.md",version:"v0.5",lastUpdatedBy:"vinckr",lastUpdatedAt:1625748939,formattedLastUpdatedAt:"7/8/2021",frontMatter:{id:"install",title:"Installation"},sidebar:"version-v0.5/docs",previous:{title:"Quickstart",permalink:"/kratos/docs/v0.5/quickstart"},next:{title:"Configuring",permalink:"/kratos/docs/v0.5/configuring"}},u=[{value:"Docker",id:"docker",children:[]},{value:"macOS",id:"macos",children:[]},{value:"Linux",id:"linux",children:[]},{value:"Windows",id:"windows",children:[]},{value:"Download Binaries",id:"download-binaries",children:[]},{value:"Building From Source",id:"building-from-source",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Installing ORY Kratos on any system is straight forward. We provide prebuilt\nbinaries, Docker images, and support various package managers."),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("p",null,"We recommend using Docker to run ORY Kratos:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker pull oryd/kratos:v0.5.5-alpha.1\n$ docker run --rm -it oryd/kratos help\n")),(0,o.kt)("p",null,"You can find more detailed information on the official Kratos docker images\n",(0,o.kt)("a",{parentName:"p",href:"/kratos/docs/v0.5/guides/docker"},"here"),"."),(0,o.kt)("h2",{id:"macos"},"macOS"),(0,o.kt)("p",null,"You can install ORY Kratos using ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew")," on macOS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew tap ory/kratos\n$ brew install ory/kratos/kratos\n$ kratos help\n")),(0,o.kt)("h2",{id:"linux"},"Linux"),(0,o.kt)("p",null,"On linux, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"bash <(curl ...)")," to fetch the latest stable binary\nusing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ bash <(curl https://raw.githubusercontent.com/ory/kratos/v0.5.5-alpha.1/install.sh) -b . v0.5.5-alpha.1\n$ ./kratos help\n")),(0,o.kt)("p",null,"You may want to move ORY Kratos to your ",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo mv ./kratos /usr/local/bin/\n$ kratos help\n")),(0,o.kt)("h2",{id:"windows"},"Windows"),(0,o.kt)("p",null,"You can install ORY Kratos using ",(0,o.kt)("a",{parentName:"p",href:"https://scoop.sh"},"scoop")," on Windows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> scoop bucket add ory-kratos https://github.com/ory/scoop-kratos.git\n> scoop install kratos\n> kratos help\n")),(0,o.kt)("h2",{id:"download-binaries"},"Download Binaries"),(0,o.kt)("p",null,"The client and server binaries are downloadable at the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/releases"},"releases tab"),". There is currently no\ninstaller available. You have to add the Kratos binary to the PATH environment\nvariable yourself or put the binary in a location that is already in your\n",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),")."),(0,o.kt)("p",null,"Once installed, you should be able to run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kratos help\n")),(0,o.kt)("h2",{id:"building-from-source"},"Building From Source"),(0,o.kt)("p",null,"If you wish to compile ORY Kratos yourself, you need to install and set up\n",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/"},"Go 1.12+")," and add ",(0,o.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin")," to your ",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH"),"."),(0,o.kt)("p",null,"The following commands will check out the latest release tag of ORY Kratos,\ncompile it, and set up flags so that ",(0,o.kt)("inlineCode",{parentName:"p"},"kratos version")," works as expected. Please\nnote that this will only work with POSIX-compliant shells like ",(0,o.kt)("inlineCode",{parentName:"p"},"bash")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"sh"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/ory/kratos.git\n$ cd kratos\n$ GO111MODULE=on make install\n$ $(go env GOPATH)/bin/kratos help\n")))}d.isMDXComponent=!0}}]);