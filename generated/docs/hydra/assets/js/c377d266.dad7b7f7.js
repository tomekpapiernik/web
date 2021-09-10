(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[2695],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},70918:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=["components"],s={id:"hydra-clients-update",title:"hydra clients update",description:"hydra clients update Update an entire OAuth 2.0 Client"},l=void 0,c={unversionedId:"cli/hydra-clients-update",id:"cli/hydra-clients-update",isDocsHomePage:!1,title:"hydra clients update",description:"hydra clients update Update an entire OAuth 2.0 Client",source:"@site/docs/cli/hydra-clients-update.md",sourceDirName:"cli",slug:"/cli/hydra-clients-update",permalink:"/hydra/docs/next/cli/hydra-clients-update",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/cli/hydra-clients-update.md",tags:[],version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1616671249,formattedLastUpdatedAt:"3/25/2021",frontMatter:{id:"hydra-clients-update",title:"hydra clients update",description:"hydra clients update Update an entire OAuth 2.0 Client"},sidebar:"docs",previous:{title:"hydra clients list",permalink:"/hydra/docs/next/cli/hydra-clients-list"},next:{title:"hydra janitor",permalink:"/hydra/docs/next/cli/hydra-janitor"}},d=[{value:"hydra clients update",id:"hydra-clients-update",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],u={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"hydra-clients-update"},"hydra clients update"),(0,a.kt)("p",null,"Update an entire OAuth 2.0 Client"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"This command replaces an OAuth 2.0 Client by its ID."),(0,a.kt)("p",null,"Please be aware that this command replaces the entire client. To update only the\nname, a full client should be provided, for example: hydra clients update\nclient-1 -n ",'"',"my updated app",'"'," -c http://localhost/cb -g\nauthorization_code -r code -a core,foobar"),(0,a.kt)("p",null,"If only the name flag (-n ",'"',"my updated app",'"',") is provided, the all other\nfields are updated to their default values."),(0,a.kt)("p",null,"To encrypt auto generated client secret, use ",'"',"--pgp-key",'"',",\n",'"',"--pgp-key-url",'"'," or ",'"',"--keybase",'"'," flag, for example: hydra clients\nupdate client-1 -n ",'"',"my updated app",'"'," -g client_credentials -r token -a\ncore,foobar --keybase keybase_username"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hydra clients update &lt;id&gt; [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      --allowed-cors-origins strings           The list of URLs allowed to make CORS requests. Requires CORS_ENABLED.\n      --audience strings                       The audience this client is allowed to request\n      --backchannel-logout-callback string     Client URL that will cause the client to log itself out when sent a Logout Token by Hydra.\n      --backchannel-logout-session-required    Boolean flag specifying whether the client requires that a sid (session ID) Claim be included in the Logout Token to identify the client session with the OP when the backchannel-logout-callback is used. If omitted, the default value is false.\n  -c, --callbacks strings                      REQUIRED list of allowed callback URLs\n      --client-uri string                      A URL string of a web page providing information about the client\n      --frontchannel-logout-callback string    Client URL that will cause the client to log itself out when rendered in an iframe by Hydra.\n      --frontchannel-logout-session-required   Boolean flag specifying whether the client requires that a sid (session ID) Claim be included in the Logout Token to identify the client session with the OP when the frontchannel-logout-callback is used. If omitted, the default value is false.\n  -g, --grant-types strings                    A list of allowed grant types (default [authorization_code])\n  -h, --help                                   help for update\n      --jwks-uri string                        Define the URL where the JSON Web Key Set should be fetched from when performing the &#34;private_key_jwt&#34; client authentication method\n      --keybase string                         Keybase username for encrypting client secret\n      --logo-uri string                        A URL string that references a logo for the client\n  -n, --name string                            The client&#39;s name\n      --pgp-key string                         Base64 encoded PGP encryption key for encrypting client secret\n      --pgp-key-url string                     PGP encryption key URL for encrypting client secret\n      --policy-uri string                      A URL string that points to a human-readable privacy policy document that describes how the deployment organization collects, uses, retains, and discloses personal data\n      --post-logout-callbacks strings          List of allowed URLs to be redirected to after a logout\n  -r, --response-types strings                 A list of allowed response types (default [code])\n  -a, --scope strings                          The scope the client is allowed to request\n      --secret string                          Provide the client&#39;s secret\n      --subject-type string                    A identifier algorithm. Valid values are &#34;public&#34; and &#34;pairwise&#34; (default &#34;public&#34;)\n      --token-endpoint-auth-method string      Define which authentication method the client may use at the Token Endpoint. Valid values are &#34;client_secret_post&#34;, &#34;client_secret_basic&#34;, &#34;private_key_jwt&#34;, and &#34;none&#34; (default &#34;client_secret_basic&#34;)\n      --tos-uri string                         A URL string that points to a human-readable terms of service document for the client that describes a contractual relationship between the end-user and the client that the end-user accepts when authorizing the client\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      --access-token string    Set an access token to be used in the Authorization header, defaults to environment variable OAUTH2_ACCESS_TOKEN\n      --endpoint string        Set the URL where ORY Hydra is hosted, defaults to environment variable HYDRA_ADMIN_URL. A unix socket can be set in the form unix:///path/to/socket\n      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   Fake tls termination by adding &#34;X-Forwarded-Proto: https&#34; to http headers\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unknown certificate authorities\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"hydra-clients"},"hydra clients")," - Manage OAuth 2.0 Clients")))}p.isMDXComponent=!0}}]);