(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[6564],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,y=d["".concat(c,".").concat(f)]||d[f]||p[f]||s;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88718:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(22122),o=n(19756),s=(n(67294),n(3905)),i=["components"],a={id:"ssl-https-tls",title:"SSL/TLS, HTTPS, Self-Signed Certificates"},c=void 0,u={unversionedId:"guides/ssl-https-tls",id:"guides/ssl-https-tls",isDocsHomePage:!1,title:"SSL/TLS, HTTPS, Self-Signed Certificates",description:"If you want to run ORY Hydra using self-signed TLS certificates, you can do the",source:"@site/docs/guides/ssl-https-tls.mdx",sourceDirName:"guides",slug:"/guides/ssl-https-tls",permalink:"/hydra/docs/next/guides/ssl-https-tls",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/guides/ssl-https-tls.mdx",tags:[],version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1603198549,formattedLastUpdatedAt:"10/20/2020",frontMatter:{id:"ssl-https-tls",title:"SSL/TLS, HTTPS, Self-Signed Certificates"},sidebar:"docs",previous:{title:"Kubernetes Helm Chart",permalink:"/hydra/docs/next/guides/kubernetes-helm-chart"},next:{title:"Configuring Cookies",permalink:"/hydra/docs/next/guides/cookies"}},l=[],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"If you want to run ORY Hydra using self-signed TLS certificates, you can do the\nfollowing:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ openssl genrsa -out key.pem 4096\n$ openssl req -new -x509 -sha256 -key key.pem -out cert.crt -days 365\n\n$ SERVE_TLS_CERT_BASE64=$(base64 -i cert.crt)\n$ SERVE_TLS_KEY_BASE64=$(base64 -i key.pem)\n\n# or\n\n$ SERVE_TLS_KEY_PATH=/path/to/key.pem\n$ SERVE_TLS_CERT_PATH=/path/to/cert.crt\n")),(0,s.kt)("p",null,"If you run Docker locally, you can then use"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'$ docker run ... \\\n    -e SERVE_TLS_CERT_BASE64="$SERVE_TLS_CERT_BASE64" \\\n    -e SERVE_TLS_KEY_BASE64="$SERVE_TLS_KEY_BASE64" \\\n    ...\n')),(0,s.kt)("p",null,"or mount the files using ",(0,s.kt)("inlineCode",{parentName:"p"},"--mount")," and linking to the files."))}d.isMDXComponent=!0}}]);