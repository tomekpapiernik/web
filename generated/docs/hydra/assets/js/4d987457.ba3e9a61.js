(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[33202],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),y=i,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9213:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=r(22122),i=r(19756),o=(r(67294),r(3905)),a=["components"],s={id:"hydra-clients-import",title:"hydra clients import",description:"hydra clients import Imports cryptographic keys of any format to the JSON Web Key Store"},l=void 0,c={unversionedId:"cli/hydra-clients-import",id:"version-v1.10/cli/hydra-clients-import",isDocsHomePage:!1,title:"hydra clients import",description:"hydra clients import Imports cryptographic keys of any format to the JSON Web Key Store",source:"@site/versioned_docs/version-v1.10/cli/hydra-clients-import.md",sourceDirName:"cli",slug:"/cli/hydra-clients-import",permalink:"/hydra/docs/cli/hydra-clients-import",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/cli/hydra-clients-import.md",version:"v1.10",lastUpdatedBy:"aeneasr",lastUpdatedAt:1616672187,formattedLastUpdatedAt:"3/25/2021",frontMatter:{id:"hydra-clients-import",title:"hydra clients import",description:"hydra clients import Imports cryptographic keys of any format to the JSON Web Key Store"},sidebar:"version-v1.10/docs",previous:{title:"hydra clients get",permalink:"/hydra/docs/cli/hydra-clients-get"},next:{title:"hydra clients import",permalink:"/hydra/docs/cli/hydra-clients-import"}},p=[{value:"hydra clients import",id:"hydra-clients-import",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],d={toc:p};function u(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"hydra-clients-import"},"hydra clients import"),(0,o.kt)("p",null,"Imports cryptographic keys of any format to the JSON Web Key Store"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"This command allows you to import cryptographic keys to the JSON Web Key Store."),(0,o.kt)("p",null,"Currently supported formats are raw JSON Web Keys or PEM/DER encoded data. If\nthe JSON Web Key Set exists already, the imported keys will be added to that\nset. Otherwise, a new set will be created."),(0,o.kt)("p",null,"Please be aware that importing a private key does not automatically import its\npublic key as well."),(0,o.kt)("p",null,"Examples: hydra keys import my-set ./path/to/jwk.json ./path/to/jwk-2.json hydra\nkeys import my-set ./path/to/rsa.key ./path/to/rsa.pub"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hydra clients import &lt;set&gt; &lt;file-1&gt; [&lt;file-2&gt; [&lt;file-3 [&lt;...&gt;]]] [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help         help for import\n      --use string   Sets the &#34;use&#34; value of the JSON Web Key if not &#34;use&#34; value was defined by the key itself (default &#34;sig&#34;)\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --access-token string    Set an access token to be used in the Authorization header, defaults to environment variable OAUTH2_ACCESS_TOKEN\n      --endpoint string        Set the URL where ORY Hydra is hosted, defaults to environment variable HYDRA_ADMIN_URL. A unix socket can be set in the form unix:///path/to/socket\n      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   Fake tls termination by adding &#34;X-Forwarded-Proto: https&#34; to http headers\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unknown certificate authorities\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"hydra-clients"},"hydra clients")," - Manage OAuth 2.0 Clients")))}u.isMDXComponent=!0}}]);