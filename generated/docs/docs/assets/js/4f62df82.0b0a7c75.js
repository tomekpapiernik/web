"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[1881],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=s(r),h=o,d=y["".concat(p,".").concat(h)]||y[h]||c[h]||a;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},34231:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return y}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),l=["components"],i={id:"ory-proxy",title:"ory proxy",description:"ory proxy Integrate your application with Ory using the Ory Proxy"},p=void 0,s={unversionedId:"cli/ory-proxy",id:"cli/ory-proxy",isDocsHomePage:!1,title:"ory proxy",description:"ory proxy Integrate your application with Ory using the Ory Proxy",source:"@site/docs/cli/ory-proxy.md",sourceDirName:"cli",slug:"/cli/ory-proxy",permalink:"/docs/cli/ory-proxy",editUrl:"https://github.com/ory/docs/edit/master/docs/docs/cli/ory-proxy.md",tags:[],version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1642432318,formattedLastUpdatedAt:"1/17/2022",frontMatter:{id:"ory-proxy",title:"ory proxy",description:"ory proxy Integrate your application with Ory using the Ory Proxy"},sidebar:"docs",previous:{title:"ory",permalink:"/docs/cli/ory"},next:{title:"ory version",permalink:"/docs/cli/ory-version"}},u=[{value:"ory proxy",id:"ory-proxy",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],c={toc:u};function y(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ory-proxy"},"ory proxy"),(0,a.kt)("p",null,"Integrate your application with Ory using the Ory Proxy"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"This command starts a reverse proxy which must be deployed in front of your\napplication. This proxy works both in development and in production, for example\nwhen deploying a React, NodeJS, Java, PHP, ... app to a server / the cloud or\nwhen developing it locally on your machine."),(0,a.kt)("p",null,"Before you start, you need to have a running instance of Ory Kratos / Ory Hydra\n/ ... either locally or in Ory Cloud. Set the environment variable ORY_SDK_URL\nto the path where Ory is available. For Ory Cloud, this is the ",'"',"SDK URL",'"',"\nwhich can be found in the ",'"',"API ","&"," Services",'"'," section of your Ory Cloud\nConsole."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ export ORY_SDK_URL=https://playground.projects.oryapis.com\n")),(0,a.kt)("p",null,"Alternatively, you can set this using the --sdk-url flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ory proxy --sdk-url https://playground.projects.oryapis.com \\\n    ...\n")),(0,a.kt)("p",null,"The first argument ","[upstream]"," points to the location of your application. If you\nare running the proxy and your app on the same host, this could be localhost."),(0,a.kt)("p",null,"The second argument ","[public-url]"," is optional. It refers to the public URL of\nyour application (e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://www.example.org"},"https://www.example.org"),")."),(0,a.kt)("p",null,"If ","[public-url]"," is not set, it will default to the default host and port this\nproxy listens on:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://localhost:4000\n")),(0,a.kt)("p",null,"You must set the ","[public-url]"," if you are not using the Ory Proxy in locally or\nin development:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ory proxy \\\n    http://localhost:3000 \\\n    https://example.org\n")),(0,a.kt)("p",null,"Please note that you can not set a path in the ","[public-url]","!"),(0,a.kt)("p",null,"Per default, the proxy listens on port 4000. If you want to listen on another\nport, use the port flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ory proxy --port 8080 \\\n    http://localhost:3000 \\\n    https://example.org\n")),(0,a.kt)("p",null,"If your public URL is available on a non-standard HTTP/HTTPS port, you can set\nthat port in the ","[public-url]",":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ory proxy \\\n    http://localhost:3000 \\\n    https://example.org:1234\n")),(0,a.kt)("p",null,"If this proxy runs on a subdomain, and you want Ory","'","s cookies (e.g. the\nsession cookie) to be available on all of your domain, you can use the following\nCLI flag to customize the cookie domain:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ory proxy \\\n    --cookie-domain example.org \\\n    http://127.0.0.1:3000 \\\n    https://ory.example.org\n")),(0,a.kt)("p",null,"If the request is not authenticated, the HTTP Authorization Header will be\nempty:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET / HTTP/1.1\nHost: localhost:3000\n")),(0,a.kt)("p",null,"If the request was authenticated, a JSON Web Token will be sent in the HTTP\nAuthorization Header containing the Ory Session:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET / HTTP/1.1\nHost: localhost:3000\nAuthorization: Bearer &lt;the-json-web-token&gt;\n")),(0,a.kt)("p",null,"The JSON Web Token claims contain:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",'"',"sub",'"'," field which is set to the Ory Identity ID."),(0,a.kt)("li",{parentName:"ul"},"The ",'"',"session",'"'," field which contains the full Ory Session.")),(0,a.kt)("p",null,"The JSON Web Token is signed using the ES256 algorithm. The public key can be\nfound by fetching the /.ory/jwks.json path when calling the proxy - for example\n",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:4000/.ory/jwks.json"},"http://127.0.0.1:4000/.ory/jwks.json")),(0,a.kt)("p",null,"An example payload of the JSON Web Token is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n  &#34;id&#34;: &#34;821f5a53-a0b3-41fa-9c62-764560fa4406&#34;,\n  &#34;active&#34;: true,\n  &#34;expires_at&#34;: &#34;2021-02-25T09:25:37.929792Z&#34;,\n  &#34;authenticated_at&#34;: &#34;2021-02-24T09:25:37.931774Z&#34;,\n  &#34;issued_at&#34;: &#34;2021-02-24T09:25:37.929813Z&#34;,\n  &#34;identity&#34;: {\n    &#34;id&#34;: &#34;18aafd3e-b00c-4b19-81c8-351e38705126&#34;,\n    &#34;schema_id&#34;: &#34;default&#34;,\n    &#34;schema_url&#34;: &#34;https://example.projects.oryapis.com/api/kratos/public/schemas/default&#34;,\n    &#34;traits&#34;: {\n      &#34;email&#34;: &#34;foo@bar&#34;,\n      // ... your other identity traits\n    }\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ory proxy [upstream] &lt;[public-url]&gt; [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      --cookie-domain string   Set a dedicated cookie domain.\n  -h, --help                   help for proxy\n      --no-jwt                 Do not create a JWT from the Ory Kratos Session. Useful if you need fast start up times of the Ory Proxy.\n      --open                   Open the browser when the proxy starts.\n      --port int               The port the proxy should listen on. (default 4000)\n      --sdk-url string         Set the Ory SDK URL.\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"ory"},"ory")," - The ORY CLI")))}y.isMDXComponent=!0}}]);