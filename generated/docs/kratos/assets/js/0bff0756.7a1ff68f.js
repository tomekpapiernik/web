"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[10674],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return E}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),E=o,_=d["".concat(c,".").concat(E)]||d[E]||l[E]||a;return n?r.createElement(_,s(s({ref:t},p),{},{components:n})):r.createElement(_,s({ref:t},p))}));function E(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21922:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={id:"https-tls",title:"Setting up HTTPS (TLS)"},c=void 0,u={unversionedId:"guides/https-tls",id:"version-v0.7/guides/https-tls",isDocsHomePage:!1,title:"Setting up HTTPS (TLS)",description:"If you want to run ORY Hydra using self-signed TLS certificates, you can do the",source:"@site/versioned_docs/version-v0.7/guides/https-tls.mdx",sourceDirName:"guides",slug:"/guides/https-tls",permalink:"/kratos/docs/v0.7/guides/https-tls",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.7/guides/https-tls.mdx",tags:[],version:"v0.7",lastUpdatedBy:"aeneasr",lastUpdatedAt:1626195872,formattedLastUpdatedAt:"7/13/2021",frontMatter:{id:"https-tls",title:"Setting up HTTPS (TLS)"},sidebar:"version-v0.7/docs",previous:{title:"Docker Images",permalink:"/kratos/docs/v0.7/guides/docker"},next:{title:"Setting up Argon2 Password Hashing Parameters",permalink:"/kratos/docs/v0.7/guides/setting-up-password-hashing-parameters"}},p=[],l={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you want to run ORY Hydra using self-signed TLS certificates, you can do the\nfollowing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ openssl genrsa -out key.pem 4096\n$ openssl req -new -x509 -sha256 -key key.pem -out cert.crt -days 365\n\n$ SERVE_PUBLIC_TLS_CERT_BASE64=$(base64 -i cert.crt)\n$ SERVE_PUBLIC_TLS_KEY_BASE64=$(base64 -i key.pem)\n$ SERVE_ADMIN_TLS_CERT_BASE64=$(base64 -i cert.crt)\n$ SERVE_ADMIN_TLS_KEY_BASE64=$(base64 -i key.pem)\n\n# or\n\n$ SERVE_PUBLIC_TLS_KEY_PATH=/path/to/key.pem\n$ SERVE_PUBLIC_TLS_CERT_PATH=/path/to/cert.crt\n$ SERVE_ADMIN_TLS_KEY_PATH=/path/to/key.pem\n$ SERVE_ADMIN_TLS_CERT_PATH=/path/to/cert.crt\n")),(0,a.kt)("p",null,"If you run Docker locally, you can then use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ docker run ... \\\n    -e SERVE_PUBLIC_TLS_CERT_BASE64="$SERVE_PUBLIC_TLS_CERT_BASE64" \\\n    -e SERVE_PUBLIC_TLS_KEY_BASE64="$SERVE_PUBLIC_TLS_KEY_BASE64" \\\n    -e SERVE_ADMIN_TLS_CERT_BASE64="$SERVE_ADMIN_TLS_CERT_BASE64" \\\n    -e SERVE_ADMIN_TLS_KEY_BASE64="$SERVE_ADMIN_TLS_KEY_BASE64" \\\n    ...\n')),(0,a.kt)("p",null,"or mount the files using ",(0,a.kt)("inlineCode",{parentName:"p"},"--mount")," and linking to the files."))}d.isMDXComponent=!0}}]);