(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),o=(n(0),n(291)),c=n(293),i={id:"5min-tutorial",title:"5 Minute Tutorial"},s={id:"version-v1.6/5min-tutorial",isDocsHomePage:!1,title:"5 Minute Tutorial",description:"This tutorial walks you through a quick setup of ORY Hydra, a PostgreSQL",source:"@site/versioned_docs/version-v1.6/5min-tutorial.mdx",permalink:"/hydra/docs/5min-tutorial",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.6/5min-tutorial.mdx",version:"v1.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1595248858,sidebar:"version-v1.6/docs",previous:{title:"ORY Hydra",permalink:"/hydra/docs/"},next:{title:"Installation",permalink:"/hydra/docs/install"}},l=[],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This tutorial walks you through a quick setup of ORY Hydra, a PostgreSQL\ninstance and an exemplary User Login & Consent App based on Docker Compose. You\nneed to have the latest ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.docker.com"}),"Docker")," and\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/compose"}),"Docker Compose")," version installed."),Object(o.b)("img",{alt:"OAuth2 Flow",src:Object(c.a)("img/docs/oauth2-flow.gif")}),";",Object(o.b)("p",null,"We will use the Docker Compose configuration in the ORY Hydra code base. Getting\nthe Hydra source code is easy:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"if you have Go 1.12+ installed: ",Object(o.b)("inlineCode",{parentName:"li"},"go get -d github.com/ory/hydra")),Object(o.b)("li",{parentName:"ul"},"if you have Git installed: ",Object(o.b)("inlineCode",{parentName:"li"},"git clone https://github.com/ory/hydra.git")),Object(o.b)("li",{parentName:"ul"},"otherwise: download the\n",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/ory-am/hydra/archive/master.zip"}),"Hydra source code"),". and\nextract it somewhere")),Object(o.b)("p",null,"Change into the directory with the Hydra source code and run the following\ncommand to start the needed containers:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ docker-compose -f quickstart.yml \\\n    -f quickstart-postgres.yml \\\n    up --build\nStarting hydra_postgresd_1\nStarting hydra_hydra_1\n[...]\n")),Object(o.b)("p",null,"If you prefer to use MySQL as the database backend, run this command instead:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ docker-compose -f quickstart.yml \\\n    -f quickstart-mysql.yml \\\n    up --build\n")),Object(o.b)("p",null,"This command makes Docker Compose start up a database server and a basic base\nORY Hydra server that uses this database. If you need more details on this,\nplease examine the ",Object(o.b)("inlineCode",{parentName:"p"},"scripts/5-min-tutorial.sh")," and ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose*.yml")," files."),Object(o.b)("p",null,"You may also extend the command above to enable distributed tracing. The tracing\nUI is exposed at ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://127.0.0.1:16686/search"}),"http://127.0.0.1:16686/search"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ docker-compose -f quickstart.yml \\\n    -f quickstart-postgres.yml \\\n    -f quickstart-tracing.yml \\\n    up --build\n")),Object(o.b)("p",null,"Hydra provides an endpoint for Prometheus to scrape as a target. You can run the\nfollowing command to start the needed containers, and status of Hydra is exposed\nat targets page in Prometheus\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:9090/targets"}),"http://localhost:9090/targets"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"docker-compose -f quickstart.yml \\\n  -f quickstart-prometheus.yml \\\n  up --build\n")),Object(o.b)("p",null,"Let's confirm that everything is working by creating an OAuth 2.0 Client."),Object(o.b)("p",null,"Note: The following commands run Hydra inside Docker. If you have the ORY Hydra\nCLI installed locally, you can omit\n",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose -f quickstart.yml exec /hydra")," in front of each command."),Object(o.b)("p",null,"The OAuth 2.0 client uses port ",Object(o.b)("inlineCode",{parentName:"p"},"4444")," and ",Object(o.b)("inlineCode",{parentName:"p"},"4445"),". The former is ORY Hydra's\npublic endpoint, the latter its administrative endpoint. For more information\nhead over to\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"hydra/production.md"}),"Exposing Administrative and Public API Endpoints"),"."),Object(o.b)("p",null,"Let's create the OAuth 2.0 Client:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra clients create \\\n    --endpoint http://127.0.0.1:4445/ \\\n    --id my-client \\\n    --secret secret \\\n    -g client_credentials\n")),Object(o.b)("p",null,"If you get an error message about a config file not being found, you can ignore\nit for now:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'Config file not found because "Config File ".hydra" Not Found in "[/]""\nOAuth2 client my-client\n')),Object(o.b)("p",null,"Let's perform the client credentials grant:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra token client \\\n    --endpoint http://127.0.0.1:4444/ \\\n    --client-id my-client \\\n    --client-secret secret\n\nUDYMha9TwsMBejEvKfnDOXkhgkLsnmUNYVQDklT5bD8.ZNpuNRC85erbIYDjPqhMwTinlvQmNTk_UvttcLQxFJY\n")),Object(o.b)("p",null,"Let's perform token introspection on that token. Make sure to copy the token you\njust got and not the dummy value."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'$ docker-compose -f quickstart.yml exec hydra \\\n    hydra token introspect \\\n    --endpoint http://127.0.0.1:4445/ \\\n    --client-id my-client \\\n    --client-secret secret \\\n\nUDYMha9TwsMBejEvKfnDOXkhgkLsnmUNYVQDklT5bD8.ZNpuNRC85erbIYDjPqhMwTinlvQmNTk_UvttcLQxFJY\n\n{\n    "active": true,\n    "client_id": "my-client",\n    "exp": 1527078658,\n    "iat": 1527075058,\n    "iss": "http://127.0.0.1:4444/",\n    "sub": "my-client",\n    "token_type": "access_token"\n}\n')),Object(o.b)("p",null,"Next, we will perform the OAuth 2.0 Authorization Code Grant. For that, we must\nfirst create a client that is capable of performing that grant:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra clients create \\\n    --endpoint http://127.0.0.1:4445 \\\n    --id auth-code-client \\\n    --secret secret \\\n    --grant-types authorization_code,refresh_token \\\n    --response-types code,id_token \\\n    --scope openid,offline \\\n    --callbacks http://127.0.0.1:5555/callback\n")),Object(o.b)("p",null,"Note that you need to add ",Object(o.b)("inlineCode",{parentName:"p"},"--token-endpoint-auth-method none")," if your clients\nare public (such as SPA apps and native apps) because the public clients cannot\nprovide client secrets."),Object(o.b)("p",null,"The following command starts a server that serves an example web application.\nThe application will perform the OAuth 2.0 Authorization Code Flow using ORY\nHydra. The web server runs on ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://127.0.0.1:5555"}),"http://127.0.0.1:5555"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra token user \\\n    --client-id auth-code-client \\\n    --client-secret secret \\\n    --endpoint http://127.0.0.1:4444/ \\\n    --port 5555 \\\n    --scope openid,offline\n\nSetting up home route on http://127.0.0.1:4445/\nSetting up callback listener on http://127.0.0.1:4445/callback\nPress ctrl + c on Linux / Windows or cmd + c on OSX to end the process.\nIf your browser does not open automatically, navigate to:\n\n        http://127.0.0.1:5555/\n")),Object(o.b)("p",null,"Open the URL ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://127.0.0.1:5555"}),"http://127.0.0.1:5555"),", log in, and\nauthorize the application. Next, you should see at least an access token in the\nresponse. If you granted the ",Object(o.b)("inlineCode",{parentName:"p"},"offline")," scope, you will also see a refresh token.\nIf you granted the ",Object(o.b)("inlineCode",{parentName:"p"},"openid")," scope, you will get an ID Token as well."),Object(o.b)("p",null,"Great! You installed Ory Hydra, connected the CLI, created a client and\ncompleted two authentication flows! Before you continue, clean up this set up in\norder to avoid conflicts with other tutorials from this guide:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ docker-compose -f quickstart.yml kill\n$ docker-compose -f quickstart.yml rm -f -v\n")))}u.isMDXComponent=!0},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},292:function(e,t,n){"use strict";var r=n(0),a=n(52);t.a=function(){return Object(r.useContext)(a.a)}},293:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(76);var r=n(292),a=n(294);function o(e,t){var n=void 0===t?{}:t,o=n.forcePrependBaseUrl,c=void 0!==o&&o,i=n.absolute,s=void 0!==i&&i,l=Object(r.a)().siteConfig,p=(l=void 0===l?{}:l).baseUrl,u=void 0===p?"/":p,d=l.url;if(!e)return e;if(c)return u+e;if(!Object(a.a)(e))return e;var b=u+e.replace(/^\//,"");return s?d+b:b}},294:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return r}))}}]);