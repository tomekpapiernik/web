"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[95827],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},69793:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],s={id:"faq",title:"FAQ"},l=void 0,c={unversionedId:"faq",id:"version-v1.9/faq",isDocsHomePage:!1,title:"FAQ",description:"This file keeps track of questions and discussions from Gitter and general help",source:"@site/versioned_docs/version-v1.9/faq.md",sourceDirName:".",slug:"/faq",permalink:"/hydra/docs/v1.9/faq",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/faq.md",tags:[],version:"v1.9",lastUpdatedBy:"Vincent",lastUpdatedAt:1612248974,formattedLastUpdatedAt:"2/2/2021",frontMatter:{id:"faq",title:"FAQ"},sidebar:"version-v1.9/docs",previous:{title:"Logout not Working as Expected",permalink:"/hydra/docs/v1.9/debug/logout"},next:{title:"Overview",permalink:"/hydra/docs/v1.9/sdk"}},u=[{value:"How can I store custom data ?",id:"how-can-i-store-custom-data-",children:[],level:2},{value:"How can I control SQL connection limits?",id:"how-can-i-control-sql-connection-limits",children:[],level:2},{value:"Why is the Resource Owner Password Credentials grant not supported?",id:"why-is-the-resource-owner-password-credentials-grant-not-supported",children:[],level:2},{value:"Should I use OAuth2 tokens for authentication?",id:"should-i-use-oauth2-tokens-for-authentication",children:[],level:2},{value:"How to deal with mobile apps?",id:"how-to-deal-with-mobile-apps",children:[],level:2},{value:"How should I run migrations?",id:"how-should-i-run-migrations",children:[],level:2},{value:"What does the installation process look like?",id:"what-does-the-installation-process-look-like",children:[],level:2},{value:"What does a migration process look like?",id:"what-does-a-migration-process-look-like",children:[],level:2},{value:"How can I do this in docker?",id:"how-can-i-do-this-in-docker",children:[],level:2},{value:"Can I set the log level to warn, error, debug, ...?",id:"can-i-set-the-log-level-to-warn-error-debug-",children:[],level:2},{value:"How can I import TLS certificates?",id:"how-can-i-import-tls-certificates",children:[],level:2},{value:"Is there an HTTP API Documentation?",id:"is-there-an-http-api-documentation",children:[],level:2},{value:"How can I disable HTTPS for testing?",id:"how-can-i-disable-https-for-testing",children:[],level:2},{value:"MySQL gives <code>unsupported Scan, storing driver.Value type []uint8 into type *time.Time</code>",id:"mysql-gives-unsupported-scan-storing-drivervalue-type-uint8-into-type-timetime",children:[],level:2},{value:"The docker image exits immediately",id:"the-docker-image-exits-immediately",children:[],level:2},{value:"Insufficient Entropy",id:"insufficient-entropy",children:[],level:2},{value:"I get compile errors!",id:"i-get-compile-errors",children:[],level:2},{value:"Refreshing tokens",id:"refreshing-tokens",children:[],level:2},{value:"Hydra won&#39;t remember my login",id:"hydra-wont-remember-my-login",children:[],level:2},{value:"Where can I get documentation on running multiple instances of Hydra?",id:"where-can-i-get-documentation-on-running-multiple-instances-of-hydra",children:[],level:2},{value:"Is it possible to disable/enable certain flows in Hydra?",id:"is-it-possible-to-disableenable-certain-flows-in-hydra",children:[],level:2},{value:"How can i test if my 4445 is running properly?",id:"how-can-i-test-if-my-4445-is-running-properly",children:[],level:2}],p={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This file keeps track of questions and discussions from Gitter and general help\nwith various issues."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Please be aware that some things noted here might be highly outdated. If you\nfind an outdated section, please create a PR which removes or updates it!")),(0,i.kt)("h2",{id:"how-can-i-store-custom-data-"},"How can I store custom data ?"),(0,i.kt)("p",null,"From ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra/issues/2333"},"Github")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"How can I store custom data in the client that can be retrieved along with the\nlogin request (using the challenge code)?",(0,i.kt)("br",{parentName:"p"}),"\n",'I would like send in some metadata to the /oauth2/auth endpoint that can be\nretrievable by the "challenge code" that Hydra creates.')),(0,i.kt)("p",null,"You can do this using the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/27dc147a37c1cb98b7beb5428c389545958dd122/consent/types.go#L505"},(0,i.kt)("inlineCode",{parentName:"a"},"request url")),"."),(0,i.kt)("p",null,"Both Login and Consent Requests have a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/27dc147a37c1cb98b7beb5428c389545958dd122/consent/types.go#L505"},(0,i.kt)("inlineCode",{parentName:"a"},"request url")),"\nwhich contains the original OAuth2 Authorize URL (e.g.\n",(0,i.kt)("inlineCode",{parentName:"p"},"/oauth2/auth?client_id=...&your_custom_param=...."),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"RequestURL is the original OAuth 2.0 Authorization URL requested by the OAuth 2.0 client.\nIt is the URL which initiates the OAuth 2.0 Authorization Code or OAuth 2.0 Implicit flow.\nThis URL is typically not needed, but might come in handy if you want to deal with additional request parameters.\n")),(0,i.kt)("h2",{id:"how-can-i-control-sql-connection-limits"},"How can I control SQL connection limits?"),(0,i.kt)("p",null,"You can configure SQL connection limits by appending parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"max_conns"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"max_idle_conns"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"max_conn_lifetime")," to the DSN:\n",(0,i.kt)("inlineCode",{parentName:"p"},"postgres://foo:bar@host:port/database?max_conns=12"),"."),(0,i.kt)("h2",{id:"why-is-the-resource-owner-password-credentials-grant-not-supported"},"Why is the Resource Owner Password Credentials grant not supported?"),(0,i.kt)("p",null,"The following is a copy of the original\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra/pull/297#issuecomment-294282671"},"comment on GitHub"),":"),(0,i.kt)("p",null,'I took a long time for this issue, primarily because I felt very uncomfortable\nimplementing it. The ROCP grant is something from the "dark ages" of OAuth2 and\nthere are suitable replacements for mobile clients, such as public oauth2\nclients, which are supported by Hydra:\n',(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/draft-ietf-oauth-native-apps-09"},"https://tools.ietf.org/html/draft-ietf-oauth-native-apps-09")),(0,i.kt)("p",null,"The OAuth2 Thread Model explicitly states that the ROPC grant is commonly used\nin legacy/migration scenarios, and"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This grant type has higher risk because it maintains the UID/password\nanti-pattern. Additionally, because the user does not have control over the\nauthorization process, clients using this grant type are not limited by scope\nbut instead have potentially the same capabilities as the user themselves. As\nthere is no authorization step, the ability to offer token revocation is\nbypassed.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Because passwords are often used for more than 1 service, this anti-pattern\nmay also put at risk whatever else is accessible with the supplied credential.\nAdditionally, any easily derived equivalent (e.g., ",(0,i.kt)("a",{parentName:"p",href:"mailto:joe@example.com"},"joe@example.com")," and\n",(0,i.kt)("a",{parentName:"p",href:"mailto:joe@example.net"},"joe@example.net"),") might easily allow someone to guess that the same password\ncan be used elsewhere.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Impact: The resource server can only differentiate scope based on the access\ntoken being associated with a particular client. The client could also acquire\nlong-lived tokens and pass them up to an attacker's web service for further\nabuse. The client, eavesdroppers, or endpoints could eavesdrop the user id and\npassword.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"o Except for migration reasons, minimize use of this grant type.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc6819#section-4.4.3"},"source"))),(0,i.kt)("p",null,"Thus, I decided to not implement the ROPC grant in Hydra. Over time, I will add\ndocumentation how to deal with mobile scenarios and similar."),(0,i.kt)("h2",{id:"should-i-use-oauth2-tokens-for-authentication"},"Should I use OAuth2 tokens for authentication?"),(0,i.kt)("p",null,"OAuth2 tokens are like money. It allows you to buy stuff, but the cashier does\nnot really care if the money is yours or if you stole it, as long as it's valid\nmoney. Depending on what you understand as authentication, this is a yes and no\nanswer:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Yes:"),' You can use access tokens to find out which user ("subject") is\nperforming an action in a resource provider (blog article service, shopping\nbasket, ...). Coming back to the money example: ',(0,i.kt)("em",{parentName:"li"},"You"),", the subject, receives a\ncappuccino from the vendor (resource provider) in exchange for money (access\ntoken)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"No:")," Never use access tokens for logging people in, for example\n",(0,i.kt)("inlineCode",{parentName:"li"},"http://myapp.com/login?access_token=..."),'. Coming back to the money example:\nThe police officer ("authentication server") will not accept money ("access\ntoken") as a proof of identity ("it\'s really you"). Unless he is corrupt\n("vulnerable"), of course.')),(0,i.kt)("p",null,'In the second example ("authentication server"), you must use OpenID Connect ID\nTokens.'),(0,i.kt)("h2",{id:"how-to-deal-with-mobile-apps"},"How to deal with mobile apps?"),(0,i.kt)("p",null,"Read ",(0,i.kt)("a",{parentName:"p",href:"https://www.ory.sh/oauth2-for-mobile-app-spa-browser"},"this article"),"."),(0,i.kt)("h2",{id:"how-should-i-run-migrations"},"How should I run migrations?"),(0,i.kt)("p",null,"Since ORY Hydra 0.8.0, migrations are no longer run automatically on boot. This\nis required in production environments, because:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Although SQL migrations are tested, migrating schemas can cause data loss and\nshould only be done consciously with prior back ups."),(0,i.kt)("li",{parentName:"ol"},"Running a production system with a user that has right such as ALTER TABLE is\na security anti-pattern.")),(0,i.kt)("p",null,"Thus, to initialize the database schemas, it is required to run\n",(0,i.kt)("inlineCode",{parentName:"p"},"hydra migrate sql driver://user:password@host:port/db")," before running\n",(0,i.kt)("inlineCode",{parentName:"p"},"hydra host"),"."),(0,i.kt)("h2",{id:"what-does-the-installation-process-look-like"},"What does the installation process look like?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"hydra migrate sql ...")," on a host close to the database (e.g. a virtual\nmachine with access to the SQL instance).")),(0,i.kt)("h2",{id:"what-does-a-migration-process-look-like"},"What does a migration process look like?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Make sure a database update is required by checking the release notes."),(0,i.kt)("li",{parentName:"ol"},"Make a back up of the database."),(0,i.kt)("li",{parentName:"ol"},"Run the migration script on a host close to the database (e.g. a virtual\nmachine with access to the SQL instance). Schemas are usually backwards\ncompatible, so instances running previous versions of ORY Hydra should keep\nworking fine. If backwards compatibility is not given, this will be addressed\nin the patch notes."),(0,i.kt)("li",{parentName:"ol"},"Upgrade all ORY Hydra instances.")),(0,i.kt)("h2",{id:"how-can-i-do-this-in-docker"},"How can I do this in docker?"),(0,i.kt)("p",null,"Many deployments of ORY Hydra use Docker. Although several options are\navailable, we advise to extend the ORY Hydra Docker image"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dockerfile")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"FROM oryd/hydra:<tag>\n\nENTRYPOINT hydra migrate sql --yes $DATABASE_URL\n")),(0,i.kt)("p",null,"and run it in your infrastructure once."),(0,i.kt)("p",null,"Additionally, ",(0,i.kt)("em",{parentName:"p"},"but not recommended"),", it is possible to override the entry point\nof the ORY Hydra Docker image using CLI flag\n",(0,i.kt)("inlineCode",{parentName:"p"},'--entrypoint "hydra migrate sql --yes $DATABASE_URL; hydra host"')," or with\n",(0,i.kt)("inlineCode",{parentName:"p"},"entrypoint: hydra migrate sql $DATABASE_URL; hydra host")," set in your docker\ncompose config."),(0,i.kt)("h2",{id:"can-i-set-the-log-level-to-warn-error-debug-"},"Can I set the log level to warn, error, debug, ...?"),(0,i.kt)("p",null,"Yes, you can do so by setting the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL=<level>"),".\nThere are various levels supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"debug"),(0,i.kt)("li",{parentName:"ul"},"info"),(0,i.kt)("li",{parentName:"ul"},"warn"),(0,i.kt)("li",{parentName:"ul"},"error"),(0,i.kt)("li",{parentName:"ul"},"fatal"),(0,i.kt)("li",{parentName:"ul"},"panic")),(0,i.kt)("h2",{id:"how-can-i-import-tls-certificates"},"How can I import TLS certificates?"),(0,i.kt)("p",null,"You can import TLS certificates when running ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra host"),". This can be done by\nsetting the following environment variables:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Read from file")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HTTPS_TLS_CERT_PATH"),": The path to the TLS certificate (pem encoded)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HTTPS_TLS_KEY_PATH"),": The path to the TLS private key (pem encoded).")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Embedded")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HTTPS_TLS_CERT"),": A pem encoded TLS certificate passed as string. Can be used\ninstead of TLS_CERT_PATH."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HTTPS_TLS_KEY"),": A pem encoded TLS key passed as string. Can be used instead\nof TLS_KEY_PATH.")),(0,i.kt)("p",null,"Or by specifying the following flags:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--https-tls-cert-path string   Path to the certificate file for HTTP/2 over TLS (https). You can set HTTPS_TLS_KEY_PATH or HTTPS_TLS_KEY instead.\n--https-tls-key-path string    Path to the key file for HTTP/2 over TLS (https). You can set HTTPS_TLS_KEY_PATH or HTTPS_TLS_KEY instead.\n")),(0,i.kt)("h2",{id:"is-there-an-http-api-documentation"},"Is there an HTTP API Documentation?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.ory.sh/docs/hydra/reference/api.mdx"},"Yes"),". bro"),(0,i.kt)("h2",{id:"how-can-i-disable-https-for-testing"},"How can I disable HTTPS for testing?"),(0,i.kt)("p",null,"You can do so by running ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra host --dangerous-force-http"),"."),(0,i.kt)("h2",{id:"mysql-gives-unsupported-scan-storing-drivervalue-type-uint8-into-type-timetime"},"MySQL gives ",(0,i.kt)("inlineCode",{parentName:"h2"},"unsupported Scan, storing driver.Value type []uint8 into type *time.Time")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"did a quick test to get mysql running, but run into migrate sql issue - seems\nmysql related An error occurred while running the migrations: Could not apply\nladon SQL migrations: Could not migrate sql schema, applied 0 migrations: sql:\nScan error on column index 0: unsupported Scan, storing driver.Value type\n[]uint8 into type ","*","time.Time is this a known bug ? or any specific mysql\nversion which is required (running 5.7) ?")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ hydra help host\n...\n   - MySQL: If DATABASE_URL is a DSN starting with mysql:// MySQL will be used as storage backend.\n        Example: DATABASE_URL=mysql://user:password@tcp(host:123)/database?parseTime=true\n\n        Be aware that the ?parseTime=true parameter is mandatory, or timestamps will not work.\n...\n")),(0,i.kt)("h2",{id:"the-docker-image-exits-immediately"},"The docker image exits immediately"),(0,i.kt)("p",null,"Check the logs using ",(0,i.kt)("inlineCode",{parentName:"p"},"docker logs <container-id>"),"."),(0,i.kt)("h2",{id:"insufficient-entropy"},"Insufficient Entropy"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Hey there , I am getting this error when I try request an access token "The\nrequest used a security parameter (e.g., anti-replay, anti-csrf) with\ninsufficient entropy (minimum of 8 characters)"')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Kareem Diaa @kimooz Jun 07 16:41 Hey there , I am getting this error when I\ntry request an access token "The request used a security parameter (e.g.,\nanti-replay, anti-csrf) with insufficient entropy (minimum of 8 characters)"')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Aeneas @arekkas Jun 07 16:41 @kimooz make sure state and nonce are set in your\nauth code url\n(http://hydra/oauth2/auth?client_id=...&nonce=THIS_NEEDS_TO_BE_SET&state=THIS_ALSO_NEEDS_TO_BE_SET")),(0,i.kt)("h2",{id:"i-get-compile-errors"},"I get compile errors!"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"I would try deleting the vendor dir and glide\u2019s files and try glide init again\nor clear Glide\u2019s global cache.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"follow the steps in the readme\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra#building-from-source"},"https://github.com/ory/hydra#building-from-source"))),(0,i.kt)("h2",{id:"refreshing-tokens"},"Refreshing tokens"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Kareem Diaa @kimooz 15:48 One last question if you don't mind from your\nexperience do you think that saving the user access token in a session and\nvalidating it from the client on ever refresh does that make sense or not?\nusing the introspect endpoint")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Aeneas @arekkas 15:51 nah, simply write your http calls in a way that if a 401\nor 403 occurs, the token is refreshed that's the easiest and cleanest")),(0,i.kt)("h2",{id:"hydra-wont-remember-my-login"},"Hydra won't remember my login"),(0,i.kt)("p",null,"Hydra only keeps track of the session if you set the ",(0,i.kt)("inlineCode",{parentName:"p"},"remember_me")," parameter in\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"accept login request"),". Otherwise the login challenge will always instruct\nyou to show the login UI."),(0,i.kt)("h2",{id:"where-can-i-get-documentation-on-running-multiple-instances-of-hydra"},"Where can I get documentation on running multiple instances of Hydra?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"@killa#7335 20190103 01:06 My company is thinking about adopting Hydra. There\nis a performance benchmark including data at\n",(0,i.kt)("a",{parentName:"p",href:"https://www.ory.sh/docs/next/performance/hydra"},"https://www.ory.sh/docs/next/performance/hydra")," and some information on how to\nscale hydra. Where can I get documentation on running multiple instances of\nHydra? Source: Discord/ory/general")),(0,i.kt)("p",null,"Hydra scales according to 12 factor principles. Just add another instance with\nthe same config. Please check the documentation section for 12 factor principles\nfor more information: ",(0,i.kt)("a",{parentName:"p",href:"https://www.ory.sh/docs/ecosystem/cloud-native"},"https://www.ory.sh/docs/ecosystem/cloud-native"),". There is\nalso some information on collecting statistics in the section on\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus"},"prometheus")," in the\n",(0,i.kt)("a",{parentName:"p",href:"/hydra/docs/v1.9/5min-tutorial"},"five minute tutorial"),"."),(0,i.kt)("h2",{id:"is-it-possible-to-disableenable-certain-flows-in-hydra"},"Is it possible to disable/enable certain flows in Hydra?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Is it possible to leave only OpenID authorization code grant flow, while\ndisabling all the rest of the flows in Hydra? Is it configurable that way?")),(0,i.kt)("p",null,"Yes - you can configure that in your client. It has things like grant_types\netc - there you can basically whitelist the flows you need."),(0,i.kt)("h2",{id:"how-can-i-test-if-my-4445-is-running-properly"},"How can i test if my 4445 is running properly?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"I am using ory hydra for authentication.",(0,i.kt)("br",{parentName:"p"}),"\n","I get a 404 when im trying to create a client on my private EC2 hydra task.",(0,i.kt)("br",{parentName:"p"}),"\n","Is there a way to test if my 4445 is running properly?")),(0,i.kt)("p",null,"You can check /health/alive, to see if it's alive. and /health/ready, to see if\nit's also in ready state (meaning db connectivity works)."))}h.isMDXComponent=!0}}]);