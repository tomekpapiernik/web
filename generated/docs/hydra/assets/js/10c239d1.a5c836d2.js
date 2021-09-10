(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[76445],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51159:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=["components"],s={title:"Run ORY Hydra in Docker",id:"configure-deploy"},l=void 0,d={unversionedId:"configure-deploy",id:"configure-deploy",isDocsHomePage:!1,title:"Run ORY Hydra in Docker",description:"The goal of this chapter is to introduce you to a fully functional set up that",source:"@site/docs/configure-deploy.mdx",sourceDirName:".",slug:"/configure-deploy",permalink:"/hydra/docs/next/configure-deploy",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/configure-deploy.mdx",tags:[],version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1630176340,formattedLastUpdatedAt:"8/28/2021",frontMatter:{title:"Run ORY Hydra in Docker",id:"configure-deploy"},sidebar:"docs",previous:{title:"Logout Endpoint",permalink:"/hydra/docs/next/guides/logout"},next:{title:"Database Setup and Configuration",permalink:"/hydra/docs/next/dependencies-environment"}},p=[{value:"Create a Network",id:"create-a-network",children:[]},{value:"Deploy PostgreSQL",id:"deploy-postgresql",children:[]},{value:"Deploy ORY Hydra",id:"deploy-ory-hydra",children:[]},{value:"Deploy Login &amp; Consent App",id:"deploy-login--consent-app",children:[]},{value:"Perform OAuth 2.0 Flow",id:"perform-oauth-20-flow",children:[]}],c={toc:p};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The goal of this chapter is to introduce you to a fully functional set up that\nincludes ORY Hydra as well as our User Login & Consent Provider reference\nimplementation."),(0,o.kt)("p",null,"The goal of this section is to familiarize you with the specifics of setting up\nORY Hydra in your environment. Before starting with this section, please check\nout the ",(0,o.kt)("a",{parentName:"p",href:"5min-tutorial"},"tutorial"),". It will teach you the most important flows\nand settings for Hydra."),(0,o.kt)("p",null,"This guide will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download and run a PostgreSQL container in Docker."),(0,o.kt)("li",{parentName:"ol"},"Download and run ORY Hydra in Docker."),(0,o.kt)("li",{parentName:"ol"},"Download and run our reference User Login & Consent Provider."),(0,o.kt)("li",{parentName:"ol"},"Create an OAuth 2.0 Client to perform the OAuth 2.0 Authorize Code Flow."),(0,o.kt)("li",{parentName:"ol"},"Perform the OAuth 2.0 Authorize Code flow.")),(0,o.kt)("p",null,"Before starting with this guide, please install the most recent version of\n",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/community-edition#/download"},"Docker"),". While docker is\nnot required for running ORY Hydra, we recommend using it for this tutorial as\nit will greatly reduce the complexity of setting up a database on your system\nwithout virtualization, installing Go, and compiling ORY Hydra."),(0,o.kt)("h2",{id:"create-a-network"},"Create a Network"),(0,o.kt)("p",null,"Before we can start, a network must be created which we will attach all our\nDocker containers to. That way, the containers can talk to one another."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker network create hydraguide\n")),(0,o.kt)("h2",{id:"deploy-postgresql"},"Deploy PostgreSQL"),(0,o.kt)("p",null,"For the purpose of this tutorial, we will use PostgreSQL as a database. As you\nprobably already know, don't run databases in Docker in production! For the sake\nof this tutorial however, let's use Docker to quickly deploy the database."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run \\\n  --network hydraguide \\\n  --name ory-hydra-example--postgres \\\n  -e POSTGRES_USER=hydra \\\n  -e POSTGRES_PASSWORD=secret \\\n  -e POSTGRES_DB=hydra \\\n  -d postgres:9.6\n")),(0,o.kt)("p",null,"This command will start a postgres instance with name\n",(0,o.kt)("inlineCode",{parentName:"p"},"ory-hydra-example--postgres"),", set up a database called ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra")," and create a\nuser ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra")," with password ",(0,o.kt)("inlineCode",{parentName:"p"},"secret"),"."),(0,o.kt)("h2",{id:"deploy-ory-hydra"},"Deploy ORY Hydra"),(0,o.kt)("p",null,"We highly recommend using Docker to run Hydra, as installing, configuring and\nrunning Hydra is easiest with Docker. ORY Hydra is available on\n",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/oryd/hydra/"},"Docker Hub"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# The system secret can only be set against a fresh database. Key rotation is currently not supported. This\n# secret is used to encrypt the database and needs to be set to the same value every time the process (re-)starts.\n# You can use /dev/urandom to generate a secret. But make sure that the secret must be the same anytime you define it.\n# You could, for example, store the value somewhere.\n$ export SECRETS_SYSTEM=$(export LC_CTYPE=C; cat /dev/urandom | tr -dc \'a-zA-Z0-9\' | fold -w 32 | head -n 1)\n#\n# Alternatively you can obviously just set a secret:\n# $ export SECRETS_SYSTEM=this_needs_to_be_the_same_always_and_also_very_$3cuR3-._\n\n# The database url points us at the postgres instance. This could also be an ephemeral in-memory database (`export DSN=memory`)\n# or a MySQL URI.\n$ export DSN=postgres://hydra:secret@ory-hydra-example--postgres:5432/hydra?sslmode=disable\n\n# Before starting, let\'s pull the latest ORY Hydra tag from docker.\n$ docker pull oryd/hydra:v1.10.6\n\n# This command will show you all the environment variables that you can set. Read this carefully.\n# It is the equivalent to `hydra help serve`.\n$ docker run -it --rm --entrypoint hydra oryd/hydra:v1.10.6 help serve\n\nStarts all HTTP/2 APIs and connects to a database backend.\n[...]\n\n# ORY Hydra does not do magic, it requires conscious decisions, for example running SQL migrations which is required\n# when installing a new version of ORY Hydra, or upgrading an existing installation.\n# It is the equivalent to `hydra migrate sql --yes postgres://hydra:secret@ory-hydra-example--postgres:5432/hydra?sslmode=disable`\n$ docker run -it --rm \\\n  --network hydraguide \\\n  oryd/hydra:v1.10.6 \\\n  migrate sql --yes $DSN\n\nApplying `client` SQL migrations...\n[...]\nMigration successful!\n\n# Let\'s run the server (settings explained below):\n$ docker run -d \\\n  --name ory-hydra-example--hydra \\\n  --network hydraguide \\\n  -p 9000:4444 \\\n  -p 9001:4445 \\\n  -e SECRETS_SYSTEM=$SECRETS_SYSTEM \\\n  -e DSN=$DSN \\\n  -e URLS_SELF_ISSUER=https://localhost:9000/ \\\n  -e URLS_CONSENT=http://localhost:9020/consent \\\n  -e URLS_LOGIN=http://localhost:9020/login \\\n  oryd/hydra:v1.10.6 serve all\n\n# And check if it\'s running:\n$ docker logs ory-hydra-example--hydra\n\ntime="2017-06-29T21:26:26Z" level=info msg="Connecting with postgres://*:*@postgres:5432/hydra?sslmode=disable"\ntime="2017-06-29T21:26:26Z" level=info msg="Connected to SQL!"\n[...]\ntime="2017-06-29T21:26:34Z" level=info msg="Setting up http server on :4444"\n')),(0,o.kt)("p",null,"Let's dive into the various settings:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--network hydraguide")," connects this instance to the network and makes it\npossible to connect to the PostgreSQL database."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-p 9000:4444")," exposes ORY Hydra's public API on ",(0,o.kt)("inlineCode",{parentName:"li"},"https://localhost:9000/"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-p 9001:4445")," exposes ORY Hydra's administrative API on\n",(0,o.kt)("inlineCode",{parentName:"li"},"https://localhost:9001/"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-e SECRETS_SYSTEM=$SECRETS_SYSTEM")," sets the system secret environment\nvariable ",(0,o.kt)("strong",{parentName:"li"},"(required)"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-e DSN=$DSN")," sets the database url environment variable ",(0,o.kt)("strong",{parentName:"li"},"(required)"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-e URLS_SELF_ISSUER=https://localhost:9000/")," this value must be set to the\npublicly available URL of ORY Hydra ",(0,o.kt)("strong",{parentName:"li"},"(required)"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-e URLS_CONSENT=http://localhost:9020/consent")," this sets the URL of the\nconsent provider ",(0,o.kt)("strong",{parentName:"li"},"(required)"),". We will set up the service that handles\nrequests at that URL in the next sections."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-e URLS_LOGIN=http://localhost:9020/login")," this sets the URL of the login\nprovider ",(0,o.kt)("strong",{parentName:"li"},"(required)"),". We will set up the service that handles requests at\nthat URL in the next sections.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In this example we did not define a value for the optional setting ",(0,o.kt)("inlineCode",{parentName:"p"},"URLS_ERROR"),".\nThis URL can be used to provide an endpoint which will receive error messages\nfrom ORY Hydra that should be displayed to the end user. The URL receives\n",(0,o.kt)("inlineCode",{parentName:"p"},"error")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"error_description")," parameters. If this value is not set, Hydra uses\nthe fallback endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"/oauth2/fallbacks/error")," and displays a default error\nmessage. In order to obtain a uniform UI, you might want to include such an\nendpoint in your login or consent provider."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We only used environmental variables to configure ORY Hydra in this example. If\nyou use a ",(0,o.kt)("a",{parentName:"p",href:"/hydra/docs/next/reference/configuration"},"configuration file")," instead, remember to\nmount it in the container. For example:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run -d \\\n  -v $(pwd)/hydra.yaml:/hydra.yaml \\\n  oryd/hydra:v1.10.6 serve all --config /hydra.yaml\n")))),(0,o.kt)("p",null,"To confirm that the instance is running properly,\n",(0,o.kt)("a",{parentName:"p",href:"https://localhost:9001/health/ready"},"open the health check"),". If asked, accept\nthe self-signed certificate in your browser. You should simply see ",(0,o.kt)("inlineCode",{parentName:"p"},"ok"),"."),(0,o.kt)("p",null,"On start up, ORY Hydra is initializing some values. Let's take a look at the\nlogs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ docker logs ory-hydra-example--hydra\ntime="2017-06-30T09:06:34Z" level=info msg="Connecting with postgres://*:*@postgres:5432/hydra?sslmode=disable"\ntime="2017-06-30T09:06:34Z" level=info msg="Connected to SQL!"\ntime="2017-06-30T09:06:34Z" level=info msg="Key pair for signing hydra.openid.id-token is missing. Creating new one."\ntime="2017-06-30T09:06:41Z" level=warning msg="No TLS Key / Certificate for HTTPS found. Generating self-signed certificate."\ntime="2017-06-30T09:06:41Z" level=info msg="Setting up http server on :4444"\n')),(0,o.kt)("p",null,"As you can see, the following steps are performed when running ORY Hydra against\na fresh database:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If no system secret was given (in our case we provided one), a random one is\ngenerated and emitted to the logs. Note this down, otherwise you won't be\nable to restart Hydra."),(0,o.kt)("li",{parentName:"ol"},"Cryptographic keys are generated for the OpenID Connect ID Token, the consent\nchallenge and response, and TLS encryption using a self-signed certificate,\nwhich is why we need to run all commands using ",(0,o.kt)("inlineCode",{parentName:"li"},"--skip-tls-verify"),".")),(0,o.kt)("p",null,"ORY Hydra can be managed using the Hydra Command Line Interface (CLI), which is\nusing ORY Hydra's REST APIs. To see the available commands, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run --rm -it --entrypoint hydra oryd/hydra:v1.10.6 help\nHydra is a cloud native high throughput OAuth2 and OpenID Connect provider\n\nUsage:\n  hydra [command]\n\n[...]\n")),(0,o.kt)("h2",{id:"deploy-login--consent-app"},"Deploy Login & Consent App"),(0,o.kt)("p",null,"The Login Provider and Consent Provider can be two separate web services. We\nprovide a\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra-login-consent-node"},"reference implementation"),"\nwhich combines both features in one app. Here, we will use deploy that app using\nDocker."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker pull oryd/hydra-login-consent-node:v1.3.2\n$ docker run -d \\\n  --name ory-hydra-example--consent \\\n  -p 9020:3000 \\\n  --network hydraguide \\\n  -e HYDRA_ADMIN_URL=https://ory-hydra-example--hydra:4445 \\\n  -e NODE_TLS_REJECT_UNAUTHORIZED=0 \\\n  oryd/hydra-login-consent-node:v1.3.2\n\n# Let's check if it's running ok:\n$ docker logs ory-hydra-example--consent\n")),(0,o.kt)("p",null,"Let's take a look at the arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-p 9020:3000")," exposes this service at port 9020. If you remember, that's the\nport of the ",(0,o.kt)("inlineCode",{parentName:"li"},"URLS_CONSENT")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"URLS_LOGIN")," value from the ORY Hydra docker\ncontainer (",(0,o.kt)("inlineCode",{parentName:"li"},"URLS_CONSENT=http://localhost:9020/consent"),",\n",(0,o.kt)("inlineCode",{parentName:"li"},"URLS_LOGIN=http://localhost:9020/login"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HYDRA_ADMIN_URL=http://hydra:4445")," point to the ORY Hydra Administrative API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NODE_TLS_REJECT_UNAUTHORIZED=0")," disables TLS verification, because we are\nusing self-signed certificates.")),(0,o.kt)("h2",{id:"perform-oauth-20-flow"},"Perform OAuth 2.0 Flow"),(0,o.kt)("p",null,"Great! Our infrastructure is all set up! Next it's time to perform the OAuth 2.0\nAuthorize Code flow. For that purpose, the ORY Hydra CLI has a feature that sets\nup an OAuth 2.0 Consumer and an OAuth 2.0 callback URL. Typically, this would be\na third-party application that requests access to a user's resources on your\nservers - for example a Facebook App you wrote that backs up a user's photos and\nthus requires read access to the user's photos."),(0,o.kt)("p",null,"Before we go ahead, the OAuth 2.0 Client that performs the request has to be set\nup. Let's call the client ",(0,o.kt)("inlineCode",{parentName:"p"},"facebook-photo-backup"),". We have to specify which\nOAuth 2.0 Grant Types, OAuth 2.0 Scope, OAuth 2.0 Response Types, and Callback\nURLs the client may request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run --rm -it \\\n  -e HYDRA_ADMIN_URL=https://ory-hydra-example--hydra:4445 \\\n  --network hydraguide \\\n  oryd/hydra:v1.10.6 \\\n  clients create --skip-tls-verify \\\n    --id facebook-photo-backup \\\n    --secret some-secret \\\n    --grant-types authorization_code,refresh_token,client_credentials,implicit \\\n    --response-types token,code,id_token \\\n    --scope openid,offline,photos.read \\\n    --callbacks http://127.0.0.1:9010/callback\n\nClient facebook-photo-backup\nClient Secret: some-secret\n")),(0,o.kt)("p",null,"Let's dive into some of the arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--skip-tls-verify")," is supported by all management commands\n(create/delete/update/... OAuth 2.0 Client, JSON Web Key, ...) and tells the\nCLI to trust any certificate authority - even self-signed ones. We need this\nflag because the server uses a self-signed certificate. In production\ndeployments, you would use a certificate signed by a trusted CA."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--grant-types authorize_code,refresh_token,client_credentials,implicit")," we\nwant to be able to perform all of these OAuth 2.0 flows."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--response-types token,code,id_token")," allows us to receive authorize codes,\naccess and refresh tokens, and OpenID Connect ID Tokens."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--scope openid,offline,photos.read")," allows the client to request various\npermissions:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"openid")," allows the client to perform the OpenID Connect flow and request an\nOpenID Connect ID Token."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"offline")," allows the client to request a refresh token. Because we want to\ncontinuously backup photos, the app must be able to refresh expired access\ntokens. This scope allows that."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"photos.read")," this is an imaginary scope that is not handled by ORY Hydra\nbut serves the purpose of making it clear that we could request read access\nto a user's photos. You can obviously omit this scope or use your own scope."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--callbacks http://localhost:9010/callback")," allows the client to request\nthis redirect uri.")))),(0,o.kt)("p",null,"Perfect, let's perform an exemplary OAuth 2.0 Authorize Code Flow! To make this\neasy, the ORY Hydra CLI provides a helper command called ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra token user"),".\nJust imagine this being, for example, passport.js that is generating an auth\ncode url, redirecting the browser to it, and then exchanging the authorize code\nfor an access token. The same thing happens with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run --rm -it \\\n  --network hydraguide \\\n  -p 9010:9010 \\\n  oryd/hydra:v1.10.6 \\\n  token user --skip-tls-verify \\\n    --port 9010 \\\n    --auth-url https://localhost:9000/oauth2/auth \\\n    --token-url https://ory-hydra-example--hydra:4444/oauth2/token \\\n    --client-id facebook-photo-backup \\\n    --client-secret some-secret \\\n    --scope openid,offline,photos.read\n\nSetting up callback listener on http://localhost:9010/callback\nPress ctrl + c on Linux / Windows or cmd + c on OSX to end the process.\nIf your browser does not open automatically, navigate to:\n\n        https://localhost:9010/\n")),(0,o.kt)("p",null,"open the link, as prompted, in your browser, and follow the steps shown there.\nYou might encounter a screen like the following one:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Allow connecting with self-signed TLS Certificate",src:n(91528).Z})),(0,o.kt)("p",null,"This happens because we run ORY Hydra with a self-signed TLS certificate. In\nproduction deployments, you would probably use a certificate signed by a trusted\nCA and not see this screen."),(0,o.kt)("p",null,'When you see this screen, click on "Advanced" and "Add Exception" to continue.\nIn some browsers, this might work differently, but it\'s always possible to\nproceed.'),(0,o.kt)("p",null,"When completed, you should land at a screen that looks like this one:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"OAuth 2.0 access and refresh token in the result page",src:n(63603).Z})))}u.isMDXComponent=!0},91528:function(e,t,n){"use strict";t.Z=n.p+"assets/images/insecure-connection-26d35641951f189ef23d1606d59ce6a8.png"},63603:function(e,t,n){"use strict";t.Z=n.p+"assets/images/install-result-193cacbd418864a96682f6811bbb6355.png"}}]);