"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[44913],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},94923:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"docker",title:"Docker Images"},s=void 0,c={unversionedId:"guides/docker",id:"guides/docker",isDocsHomePage:!1,title:"Docker Images",description:"Supported tags and respective Dockerfile links",source:"@site/docs/guides/docker.md",sourceDirName:"guides",slug:"/guides/docker",permalink:"/kratos/docs/next/guides/docker",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/guides/docker.md",tags:[],version:"current",lastUpdatedBy:"shivam",lastUpdatedAt:1628579840,formattedLastUpdatedAt:"8/10/2021",frontMatter:{id:"docker",title:"Docker Images"},sidebar:"docs",previous:{title:"High Availability",permalink:"/kratos/docs/next/guides/high-availability-ha"},next:{title:"Setting up HTTPS (TLS)",permalink:"/kratos/docs/next/guides/https-tls"}},d=[{value:"Supported tags and respective <code>Dockerfile</code> links",id:"supported-tags-and-respective-dockerfile-links",children:[],level:2},{value:"Image Variants",id:"image-variants",children:[],level:2},{value:"How to use these images",id:"how-to-use-these-images",children:[{value:"Environment Variables",id:"environment-variables",children:[{value:"<code>DSN</code>",id:"dsn",children:[],level:4},{value:"<code>SECRETS_DEFAULT</code>",id:"secrets_default",children:[],level:4}],level:3},{value:"Volumes",id:"volumes",children:[{value:"Binding host directory",id:"binding-host-directory",children:[],level:4},{value:"Creating custom Docker image",id:"creating-custom-docker-image",children:[],level:4}],level:3},{value:"Examples",id:"examples",children:[],level:3}],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"supported-tags-and-respective-dockerfile-links"},"Supported tags and respective ",(0,o.kt)("inlineCode",{parentName:"h2"},"Dockerfile")," links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/blob/v0.4.3-alpha.1/.docker/Dockerfile"},(0,o.kt)("inlineCode",{parentName:"a"},"latest"),", ",(0,o.kt)("inlineCode",{parentName:"a"},"v0.4.3-alpha.1"),", ",(0,o.kt)("inlineCode",{parentName:"a"},"v0.4.3"),", ",(0,o.kt)("inlineCode",{parentName:"a"},"v0.4"),", ",(0,o.kt)("inlineCode",{parentName:"a"},"v0"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/blob/v0.4.3-alpha.1/.docker/Dockerfile-sqlite"},(0,o.kt)("inlineCode",{parentName:"a"},"latest-sqlite"),", ",(0,o.kt)("inlineCode",{parentName:"a"},"v0.4.3-alpha.1-sqlite"),", ",(0,o.kt)("inlineCode",{parentName:"a"},"v0.4.3-sqlite"),", ",(0,o.kt)("inlineCode",{parentName:"a"},"v0.4-sqlite"),", ",(0,o.kt)("inlineCode",{parentName:"a"},"v0-sqlite")))),(0,o.kt)("h2",{id:"image-variants"},"Image Variants"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Kratos")," Docker images come in two different flavors, one with and one\nwithout SQLite support. All Docker images with the postfix\n",(0,o.kt)("inlineCode",{parentName:"p"},"kratos:<version>-sqlite")," in the tag are compiled with embed SQLite support and\nuses libmusl. All Docker images (",(0,o.kt)("inlineCode",{parentName:"p"},"kratos:<version>"),") without the postfix\n",(0,o.kt)("inlineCode",{parentName:"p"},"-sqlite")," are compiled without SQLite support and therefore also don't include\nlibmusl."),(0,o.kt)("p",null,"If you don't make use of the embedded SQLite support we recommend to use the\nDocker images without SQLite support as they are smaller in size, include fewer\nlibraries and therefore have a smaller attack surface."),(0,o.kt)("h2",{id:"how-to-use-these-images"},"How to use these images"),(0,o.kt)("p",null,"In order to make the provided Docker images as useful as possible they can be\nconfigured through a set of supported Environment variables. In addition the\ndefault configuration directory can be bound to a directory of choice to make it\nsimple to pass in your own configuration files."),(0,o.kt)("h3",{id:"environment-variables"},"Environment Variables"),(0,o.kt)("h4",{id:"dsn"},(0,o.kt)("inlineCode",{parentName:"h4"},"DSN")),(0,o.kt)("p",null,"This environment variable allows you to specify the database source name. As the\n",(0,o.kt)("inlineCode",{parentName:"p"},"DSN")," normally consists of the url to the database system and the credentials to\naccess the database it is recommended to specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"DSN")," using a Environment\nvariable."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'docker run -e DSN="memory" oryd/kratos:latest')),(0,o.kt)("h4",{id:"secrets_default"},(0,o.kt)("inlineCode",{parentName:"h4"},"SECRETS_DEFAULT")),(0,o.kt)("p",null,"This environment variable allows you to specify the secret used to sign and\nverify signatures and encrypt things:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'docker run -e SECRETS_DEFAULT="CHANGE-ME" oryd/kratos:v0.4.3-alpha.1')),(0,o.kt)("h3",{id:"volumes"},"Volumes"),(0,o.kt)("p",null,"The provided Kratos Docker images currently do not include a default\nconfiguration file, but make it easy to pass in your own configuration file(s)\nby either binding a local directory or by creating your own custom Docker Image\nand adding the configuration file(s) to the custom image."),(0,o.kt)("h4",{id:"binding-host-directory"},"Binding host directory"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")," In this example we start the standard Docker container with SQLite\nsupport and use the quickstart email-password example configuration files by\nbind mounting the local directory. This example assumes that you checked out the\nKratos Git repo and execute the Docker command in the Kratos Git repo directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker run -it -e DSN="memory" \\\n       --mount type=bind,source="$(pwd)"/contrib/quickstart/kratos/email-password,target=/home/ory \\\n       oryd/kratos:latest-sqlite\n')),(0,o.kt)("p",null,"In general we only recommend this approach for local development."),(0,o.kt)("h4",{id:"creating-custom-docker-image"},"Creating custom Docker image"),(0,o.kt)("p",null,"You can create your own, custom Kratos Docker images which embeds your\nconfiguration files by simply using the official Kratos Docker images as the\nBase Image and just adding your configuration file(s) as shown in the example\nbelow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM oryd/kratos:latest\nCOPY contrib/quickstart/kratos/email-password/kratos.yml /home/ory\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note that in both cases"),", you must supply the location of the configuration\nfile using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--config")," flag when running the container."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$ docker run <theimage> --config /home/ory/kratos.yml")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Below you find different examples how to use the official Kratos Docker images."))}p.isMDXComponent=!0}}]);