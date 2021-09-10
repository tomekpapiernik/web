(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[62317],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63949:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),i=["components"],c={id:"common-oauth2-openid-connect-flows",title:"Using Common OAuth2 and OpenID Connect Flows"},l=void 0,s={unversionedId:"guides/common-oauth2-openid-connect-flows",id:"guides/common-oauth2-openid-connect-flows",isDocsHomePage:!1,title:"Using Common OAuth2 and OpenID Connect Flows",description:"Authorize Code Flow with Refresh Token",source:"@site/docs/guides/common-oauth2-openid-connect-flows.mdx",sourceDirName:"guides",slug:"/guides/common-oauth2-openid-connect-flows",permalink:"/hydra/docs/next/guides/common-oauth2-openid-connect-flows",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/guides/common-oauth2-openid-connect-flows.mdx",tags:[],version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594381209,formattedLastUpdatedAt:"7/10/2020",frontMatter:{id:"common-oauth2-openid-connect-flows",title:"Using Common OAuth2 and OpenID Connect Flows"},sidebar:"docs",previous:{title:"Creating OAuth 2.0 Clients",permalink:"/hydra/docs/next/guides/oauth2-clients"},next:{title:"Using OAuth2",permalink:"/hydra/docs/next/guides/using-oauth2"}},u=[{value:"Authorize Code Flow with Refresh Token",id:"authorize-code-flow-with-refresh-token",children:[]},{value:"Client Credentials Flow",id:"client-credentials-flow",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"authorize-code-flow-with-refresh-token"},"Authorize Code Flow with Refresh Token"),(0,a.kt)("p",null,"The following command creates an OAuth 2.0 Client capable of executing the\nAuthorize Code Flow, requesting ID and Refresh Tokens and performing the OAuth\n2.0 Refresh Grant:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"hydra clients create \\\n    --endpoint http://ory-hydra:4445 \\\n    --id client-id \\\n    --secret client-secret \\\n    --grant-types authorization_code,refresh_token \\\n    --response-types code \\\n    --scope offline_access \\\n    --callbacks http://my-app.com/callback,http://my-other-app.com/callback\n")),(0,a.kt)("p",null,"The OAuth 2.0 Client will be allowed to use values ",(0,a.kt)("inlineCode",{parentName:"p"},"http://my-app.com/callback"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"http://my-other-app.com/callback")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"redirect_url"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"It is expected that the OAuth 2.0 Client sends its credentials using HTTP\nBasic Authorization.")),(0,a.kt)("p",null,"If you wish to send credentials in the POST Body, add the following flag to the\ncommand above:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    --token-endpoint-auth-method client_secret_post \\\n")),(0,a.kt)("p",null,"The same can be achieved by setting\n",(0,a.kt)("inlineCode",{parentName:"p"},'"token_endpoint_auth_method": "client_secret_post"')," in the request body of\n",(0,a.kt)("inlineCode",{parentName:"p"},"POST /clients")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"PUT /clients/<id>"),"."),(0,a.kt)("p",null,"To initiate the flow, redirect the user's browser to the OAuth2 Auth Code URL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<a\n  href="https://ory-hydra:4444/oauth2/auth/?client_id=client-id&scope=offline_access&redirect_uri=http://my-app.com/callback"\n>\n  Connect with ...\n</a>\n')),(0,a.kt)("h2",{id:"client-credentials-flow"},"Client Credentials Flow"),(0,a.kt)("p",null,"To create a client only capable of performing the OAuth 2.0 Client Credentials\nflow, use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"hydra clients create \\\n    --endpoint http://ory-hydra:4445 \\\n    --id my-client \\\n    --secret secret \\\n    -g client_credentials\n")))}d.isMDXComponent=!0}}]);