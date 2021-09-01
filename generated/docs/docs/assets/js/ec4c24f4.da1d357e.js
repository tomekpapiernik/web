(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[7484],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),y=c(r),d=o,h=y["".concat(p,".").concat(d)]||y[d]||u[d]||a;return r?n.createElement(h,l(l({ref:t},s),{},{components:r})):n.createElement(h,l({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},30410:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return y}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),l=["components"],i={id:"ory-proxy-local",title:"ory proxy local",description:"ory proxy local Develop an application locally and integrate it with Ory"},p=void 0,c={unversionedId:"cli/ory-proxy-local",id:"cli/ory-proxy-local",isDocsHomePage:!1,title:"ory proxy local",description:"ory proxy local Develop an application locally and integrate it with Ory",source:"@site/docs/cli/ory-proxy-local.md",sourceDirName:"cli",slug:"/cli/ory-proxy-local",permalink:"/docs/cli/ory-proxy-local",editUrl:"https://github.com/ory/docs/edit/master/docs/docs/cli/ory-proxy-local.md",version:"current",lastUpdatedBy:"hackerman",lastUpdatedAt:1630486355,formattedLastUpdatedAt:"9/1/2021",frontMatter:{id:"ory-proxy-local",title:"ory proxy local",description:"ory proxy local Develop an application locally and integrate it with Ory"},sidebar:"docs",previous:{title:"ory proxy",permalink:"/docs/cli/ory-proxy"},next:{title:"ory proxy production",permalink:"/docs/cli/ory-proxy-production"}},s=[{value:"ory proxy local",id:"ory-proxy-local",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],u={toc:s};function y(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ory-proxy-local"},"ory proxy local"),(0,a.kt)("p",null,"Develop an application locally and integrate it with Ory"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"This command starts a reverse proxy which can be deployed in front of your\napplication. This works best on local (your computer) environments, for example\nwhen developing a React, NodeJS, Java, PHP app."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ory proxy local --port 4000 \\\n    http://localhost:3000\n")),(0,a.kt)("p",null,"If the request is not authenticated, the HTTP Authorization Header will be\nempty:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET / HTTP/1.1\nHost: localhost:3000\n")),(0,a.kt)("p",null,"If the request was authenticated, a JSON Web Token will be sent in the HTTP\nAuthorization Header containing the Ory Session:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET / HTTP/1.1\nHost: localhost:3000\nAuthorization: Bearer &lt;the-json-web-token&gt;\n")),(0,a.kt)("p",null,"The JSON Web Token claims contain:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",'"',"sub",'"'," field which is set to the Ory Identity ID."),(0,a.kt)("li",{parentName:"ul"},"The ",'"',"session",'"'," field which contains the full Ory Session.")),(0,a.kt)("p",null,"The JSON Web Token is signed using the ES256 algorithm. The public key can be\nfound by fetching the /.ory/jwks.json path when calling the proxy - for example\n",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:4000/.ory/jwks.json"},"http://127.0.0.1:4000/.ory/jwks.json")),(0,a.kt)("p",null,"An example payload of the JSON Web Token is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n  &#34;id&#34;: &#34;821f5a53-a0b3-41fa-9c62-764560fa4406&#34;,\n  &#34;active&#34;: true,\n  &#34;expires_at&#34;: &#34;2021-02-25T09:25:37.929792Z&#34;,\n  &#34;authenticated_at&#34;: &#34;2021-02-24T09:25:37.931774Z&#34;,\n  &#34;issued_at&#34;: &#34;2021-02-24T09:25:37.929813Z&#34;,\n  &#34;identity&#34;: {\n    &#34;id&#34;: &#34;18aafd3e-b00c-4b19-81c8-351e38705126&#34;,\n    &#34;schema_id&#34;: &#34;default&#34;,\n    &#34;schema_url&#34;: &#34;https://example.projects.oryapis.com/api/kratos/public/schemas/default&#34;,\n    &#34;traits&#34;: {\n      &#34;email&#34;: &#34;foo@bar&#34;,\n      // ... your other identity traits\n    }\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ory proxy local [upstream] [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      --api-endpoint string           Use a different endpoint. (default &#34;https://oryapis.com&#34;)\n      --console-api-endpoint string   Use a different URL. (default &#34;https://api.console.ory.sh&#34;)\n      --dont-install-cert             If set will not try to add the HTTPS certificate to your certificate store.\n  -h, --help                          help for local\n      --no-open                       Do not open the browser when the proxy starts.\n      --port int                      The port the proxy should listen on. (default 4000)\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"ory-proxy"},"ory proxy")," - Easily protect applications with the Ory Proxy")))}y.isMDXComponent=!0}}]);