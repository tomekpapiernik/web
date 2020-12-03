(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{1140:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/secureapp-login-62bb1fd8642674c32a4ed197b0397641.png"},1141:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/secureapp-login-ntrace-528cfa7d906b7a218e442a85909fed33.png"},1142:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/secureapp-registration-8d3897c8516f99648767a8e230fd9ed8.png"},1143:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/secureapp-registration-ntrace-7628b52a112090f4e5dc461123f88adf.png"},1144:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/secureapp-registration-pwpolicy-61e8c6492d55b6fdde7e0fa71c56c13d.png"},1145:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/secureapp-dashboard-17e618c35cf2d5bee1cb27532ef61cb2.png"},1146:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/mailslurper-quickstart-956e96c6f57f93dc59fb6288fab220b9.png"},1147:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/secureapp-verified-dashboard-84c4a536838adbcc6aad295a1865dc18.png"},1148:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/quickstart-recover-i-1c1311d3f7a2ba75e6abf5548de57aa6.png"},1149:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/quickstart-recover-ii-3a213f3ca6d4963a6c472af37c801a0d.png"},1150:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/quickstart-recover-iii-531b1e0013432c60ff3546a10c4a9402.png"},1151:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/quickstart-recover-iv-900b407f650b56e181ea57ddbceb821b.png"},238:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a(3),o=a(7),r=(a(0),a(440)),i=a(441),s=a(455),c={id:"quickstart",title:"Quickstart"},l={unversionedId:"quickstart",id:"version-v0.5/quickstart",isDocsHomePage:!1,title:"Quickstart",description:"ORY Kratos has several moving parts and getting everything right from the",source:"@site/versioned_docs/version-v0.5/quickstart.mdx",slug:"/quickstart",permalink:"/kratos/docs/quickstart",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/quickstart.mdx",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1605099704,sidebar:"version-v0.5/docs",previous:{title:"Introduction",permalink:"/kratos/docs/"},next:{title:"Installation",permalink:"/kratos/docs/install"}},b=[{value:"Use Case: Application Login and Registration",id:"use-case-application-login-and-registration",children:[]},{value:"Setup",id:"setup",children:[{value:"Clone ORY Kratos and Run it in Docker",id:"clone-ory-kratos-and-run-it-in-docker",children:[]},{value:"Network Architecture",id:"network-architecture",children:[]}]},{value:"Perform Registration, Login, and Logout",id:"perform-registration-login-and-logout",children:[{value:"Understanding How Login and Registration Works",id:"understanding-how-login-and-registration-works",children:[]},{value:"Email Verification",id:"email-verification",children:[]},{value:"Account Recovery",id:"account-recovery",children:[]}]},{value:"Cleaning Up Docker",id:"cleaning-up-docker",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],d={rightToc:b};function u(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"ORY Kratos has several moving parts and getting everything right from the\nbeginning can be challenging. This getting started guide will help you install\nORY Kratos and some additional dependencies so that you can see how it works."),Object(r.b)("p",null,"Please be aware that this guide is not a replacement for studying the docs. You\nmust understand core concepts and APIs to use ORY Kratos productively. This is\nmerely a guide to get you set up with some examples."),Object(r.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/5t1Zr_zJc7E",frameborder:"0",allowfullscreen:!0}),Object(r.b)("h2",{id:"use-case-application-login-and-registration"},"Use Case: Application Login and Registration"),Object(r.b)("p",null,"This section gives you some context on what we want to achieve and what tools we\nneed for that. You will also learn about the network set up we picked for this\nguide."),Object(r.b)("p",null,"This quickstart guide operates on the assumption that we are writing a NodeJS\napp called ",Object(r.b)("strong",{parentName:"p"},"SecureApp"),". This app is using nothing fancy - some ExpressJS and a\nbit of HTML Templating using Handlebars. We do want to use TypeScript, but only\nbecause it's more readable - not because we're doing anything out of the\nordinary!"),Object(r.b)("p",null,"You could pick any technology here, of course. This works with Swift, ReactJS,\nor Angular (client side) as well as with PHP, Ruby, Python, Java (server side) -\nyou name it! We picked NodeJS + TypeScript because we believe it is the easiest\nto understand, and because JavaScript and NodeJS are universally understood and\neasy to install."),Object(r.b)("p",null,"We know that SecureApp will need to have some type of dashboard and that it\nneeds users. Therefore, we need:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Login"),Object(r.b)("li",{parentName:"ul"},"Logout"),Object(r.b)("li",{parentName:"ul"},"Registration"),Object(r.b)("li",{parentName:"ul"},'Profile management ("update first name", "update avatar", etc.)'),Object(r.b)("li",{parentName:"ul"},'Credentials Management ("add a new recovery email", "change password", etc.)'),Object(r.b)("li",{parentName:"ul"},'Account Recovery ("password reset")'),Object(r.b)("li",{parentName:"ul"},"Email Verification"),Object(r.b)("li",{parentName:"ul"},"Two Factor Authentication"),Object(r.b)("li",{parentName:"ul"},'"Sign in with Google" and "Sign in with GitHub"')),Object(r.b)("p",null,"and of course:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A dashboard that shows\n",Object(r.b)("inlineCode",{parentName:"li"},"Hello {{ traits.name.first }} {{ traits.name.last }}}!")," which is only visible\nwhen the user is signed in.")),Object(r.b)("h2",{id:"setup"},"Setup"),Object(r.b)("p",null,'As you might already know, ORY Kratos is API-only; it does not have a UI or HTML\ntemplating engine. We will implement all the user-facing UIs like "dashboard",\n"login", and "registration" in our NodeJS SecureApp!'),Object(r.b)("p",null,"To ensure that no one can access the dashboard without prior authentication\n(login), we can use a small piece of code (here ExpressJS) to do that:"),Object(r.b)(s.a,{lang:"js",link:"https://github.com/ory/kratos-selfservice-ui-node/blob/master/src/middleware/simple.ts",src:"https://raw.githubusercontent.com/ory/kratos-selfservice-ui-node/master/src/middleware/simple.ts",mdxType:"CodeFromRemote"}),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"ORY Kratos is not just an API: it uses cookies, HTTP redirects, anti-CSRF tokens\nand more so you don't have to."))),Object(r.b)("p",null,"The SecureApp and ORY Kratos need to share cookies in order for anti-CSRF tokens\nand login sessions to work. Because the quickstart runs on different ports on\n",Object(r.b)("inlineCode",{parentName:"p"},"127.0.0.1")," there is nothing we need to do to get this all working. In\nenvironments where you have multiple sub-domains or reverse proxies, the set up\nwill be a bit more sophisticated. You can find more information about the\ndifferent set up possibilities in the\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/guides/multi-domain-cookies"}),"Getting Cookies to Work on Multi-Domains Guide"),"."),Object(r.b)("p",null,"ORY Kratos does not ship with an administrative user interface. You must\nimplement that yourself or choose the ORY Cloud offering (to be announced). In\nthis quickstart we will use ORY Kratos' CLI to interact with ORY Kratos' APIs."),Object(r.b)("p",null,"The quickstart also comes with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://mailslurper.com"}),"MailSlurper"),", a mock\nSMTP server the demo uses to show how email verification works."),Object(r.b)("h3",{id:"clone-ory-kratos-and-run-it-in-docker"},"Clone ORY Kratos and Run it in Docker"),Object(r.b)("p",null,"To get this example working, you will need Git,\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/get-docker/"}),"Docker"),", and\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/compose/install/"}),"Docker Compose")," installed on your\nsystem. No other dependencies are required. Before you start, make sure that\nDocker has enough disk space."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This tutorial uses Docker-Compose volumes which have reported to run out of disk\nspace. Check the remaining disk space using ",Object(r.b)("inlineCode",{parentName:"p"},"docker system df"),". If the volumes\nare above the 85% threshold,\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/config/pruning/"}),"prune old Docker objects")," before you\nstart!"))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you encounter build errors (e.g. network timeout), make sure that the network\nis running correctly and run ",Object(r.b)("inlineCode",{parentName:"p"},"make docker")," again. If the problem persists, feel\nfree to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ory/kratos/issues/new/choose"}),"open an issue"),"."))),Object(r.b)("p",null,"Let's clone ORY Kratos and run ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"git clone https://github.com/ory/kratos.git\ncd kratos\ngit checkout v0.5.4-alpha.1\n\ndocker pull oryd/kratos:latest-sqlite\ndocker pull oryd/kratos-selfservice-ui-node:latest\ndocker-compose -f quickstart.yml -f quickstart-standalone.yml up --build --force-recreate\n")),Object(r.b)("p",null,"This might take a minute or two. Once the output slows down and logs indicate a\nhealthy system you're ready to roll! A healthy system will show something along\nthe lines of (the order of messages might be reversed):"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'kratos_1 | time="2020-01-20T14:52:13Z" level=info msg="Starting the admin httpd on: 0.0.0.0:4434"\nkratos_1 | time="2020-01-20T14:52:13Z" level=info msg="Starting the public httpd on: 0.0.0.0:4433"\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"There are two important factors to get a fully functional system:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"You need to make sure that ports ",Object(r.b)("inlineCode",{parentName:"li"},"4455"),", ",Object(r.b)("inlineCode",{parentName:"li"},"4433"),", ",Object(r.b)("inlineCode",{parentName:"li"},"4434"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"4436"),"\xa0",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://serverfault.com/questions/309052/check-if-port-is-open-or-closed-on-a-linux-server"}),"are free"),"."),Object(r.b)("li",{parentName:"ul"},"Make sure to always use ",Object(r.b)("inlineCode",{parentName:"li"},"127.0.0.1")," as the hostname; never use ",Object(r.b)("inlineCode",{parentName:"li"},"localhost"),"!\nThis is important because browsers treat these two as separate domains and\nwill therefore have issues with setting and using cookies correctly.")))),Object(r.b)("p",null,"You might notice that no database is being used in this example. ORY Kratos\nsupports SQLite, PostgreSQL, MySQL, and CockroachDB as database backends. For\nthe quickstart, we're mounting a persistent volume to store the SQLite database\nin."),Object(r.b)("p",null,"Future guides will explain how to set up a production system."),Object(r.b)("h3",{id:"network-architecture"},"Network Architecture"),Object(r.b)("p",null,"This demo makes use of several services:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/kratos"}),"ORY Kratos"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'Public ("Browser") API (port 4433)'),Object(r.b)("li",{parentName:"ul"},"Admin API (port 4434) - This is only made public so we can test via the\nCLI."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"http://github.com/ory/kratos-selfservice-ui-node"}),"SecureApp"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Public (port 4455) - an example application written in NodeJS that\nimplements the login, registration, logout, dashboard, and other UIs."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/mailslurper"}),"MailSlurper"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Public (port 4436) - a development SMTP server which ORY Kratos will use to\nsend emails.")))),Object(r.b)("p",null,"To better understand the application architecture, let's take a look at the\nnetwork configuration. This assumes that you have at least some understanding of\nhow Docker networks work:"),Object(r.b)(i.a,{chart:'\ngraph TD\nsubgraph hn[Host Network]\n    B[Browser]\n    B--\x3e|Can access URLs via 127.0.0.1:4455|OKPHN\n    B--\x3e|Can access URLs via 127.0.0.1:4433|PAPI\n    B--\x3e|Can access UI via 127.0.0.1:4436|SMTPUI\n    OKPHN([SecureApp exposed at :4455])\n    SMTPUI([MailSlurper UI exposed at :4436])\n    PAPI([ORY Kratos Public API exposed at :4433])\nend\nsubgraph dn["Internal Docker Network (intranet)"]\n    OKPHN-.->SA\n    SMTPUI-.->SMTP\n    PAPI-.->OK\n    SA--\x3e|Talks to and validates login sessions using|OK\n    OK--\x3e|Sends mail via|SMTP\n    OK[ORY Kratos]\n    SA["SecureApp (ORY Kratos SelfService UI Node Example)"]\n    SMTP["SMTP Server (MailSlurper)"]\nend\n',mdxType:"Mermaid"}),Object(r.b)("h2",{id:"perform-registration-login-and-logout"},"Perform Registration, Login, and Logout"),Object(r.b)("p",null,"Enough theory, it's time to get this thing going! Let's start by trying to open\nthe dashboard - ",Object(r.b)("strong",{parentName:"p"},"go to\n",Object(r.b)("a",Object(n.a)({parentName:"strong"},{href:"http://127.0.0.1:4455/dashboard"}),"127.0.0.1:4455/dashboard")),"."),Object(r.b)("p",null,"You should notice that you're ending up at the login endpoint instead of the\ndashboard:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Login screen of your secured app",src:a(1140).default})),Object(r.b)("p",null,"Looking at the network stack, you can see two redirects happening:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Network trace of your secured app",src:a(1141).default})),Object(r.b)("p",null,"Here's a play-by-play of what happened:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"SecureApp used the ORY Kratos JavaScript language client to guard the\n",Object(r.b)("inlineCode",{parentName:"li"},"/dashboard")," route. The ORY Kratos client checked the cookies from the\nrequest and saw you were not logged in."),Object(r.b)("li",{parentName:"ol"},"The route guard redirected you from ",Object(r.b)("inlineCode",{parentName:"li"},"/dashboard")," to ",Object(r.b)("inlineCode",{parentName:"li"},"/auth/login"),". ORY\nKratos' browser API requires a ",Object(r.b)("inlineCode",{parentName:"li"},"<flow_id>")," in order to log you in. It looked\nfor this ID in the URL as a query parameter but couldn't find it."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"/auth/login")," redirected you to\n",Object(r.b)("inlineCode",{parentName:"li"},"http://127.0.0.1:4433/self-service/login/browser"),", which is one of ORY\nKratos' APIs used for logging in browser-based applications."),Object(r.b)("li",{parentName:"ol"},"ORY Kratos performed some security checks, prepared form data, created a\n",Object(r.b)("inlineCode",{parentName:"li"},"csrf_token"),", and redirected the browser to ",Object(r.b)("inlineCode",{parentName:"li"},"/auth/login?flow=<flow_id>"),"."),Object(r.b)("li",{parentName:"ol"},"SecureApp handled the ",Object(r.b)("inlineCode",{parentName:"li"},"/auth/login")," route, found the ",Object(r.b)("inlineCode",{parentName:"li"},"<flow_id>")," in the URL\nquery parameter, and used it to make an HTTP request to\n",Object(r.b)("inlineCode",{parentName:"li"},"http://kratos:4434/self-service/login/flows?id=<flow_id>"),". Notice the URI is\n",Object(r.b)("inlineCode",{parentName:"li"},"kratos:4434")," because SecureApp is making a server-side HTTP request via\nDocker's private network to ORY Kratos' Admin API."),Object(r.b)("li",{parentName:"ol"},"ORY Kratos responded with data which SecureApp used to render the HTML login\nform.")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Your rendered login form should be a standard HTML ",Object(r.b)("inlineCode",{parentName:"p"},"<form>"),". AJAX requests will\nnot work!"))),Object(r.b)("p",null,"We can use ",Object(r.b)("inlineCode",{parentName:"p"},"curl")," to see what ORY Kratos responds with. Try visiting\n",Object(r.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:4455/auth/login"),", copying the generated ",Object(r.b)("inlineCode",{parentName:"p"},"<flow_id>"),", and\nmaking the request yourself:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'# curl -s "http://127.0.0.1:4434/self-service/login/flows?id=ee6e1565-d3c3-4f3a-a6ff-0ba6b3a6481b" \\\n$ curl -s "http://127.0.0.1:4434/self-service/login/flows?id=<flow_id>" \\\n  | jq\n\n{\n  "id": "ee6e1565-d3c3-4f3a-a6ff-0ba6b3a6481b",\n  "type": "browser",\n  "expires_at": "2020-09-13T10:49:54.8295242Z",\n  "issued_at": "2020-09-13T10:39:54.8295242Z",\n  "request_url": "http://127.0.0.1:4433/self-service/login/browser",\n  "methods": {\n    "password": {\n      "method": "password",\n      "config": {\n        "action": "http://127.0.0.1:4433/self-service/login/methods/password?flow=ee6e1565-d3c3-4f3a-a6ff-0ba6b3a6481b",\n        "method": "POST",\n        "fields": [\n          {\n            "name": "identifier",\n            "type": "text",\n            "required": true,\n            "value": ""\n          },\n          {\n            "name": "password",\n            "type": "password",\n            "required": true\n          },\n          {\n            "name": "csrf_token",\n            "type": "hidden",\n            "required": true,\n            "value": "lNrB8sW2fZY6xnnA91V7ISYrUVcJbmRCOoGHjsnsfI7MsIL5RTbuWFm5TRv1azQW+7IRCfnt2Ch6pC42/45sJQ=="\n          }\n        ]\n      }\n    }\n  },\n  "forced": false\n}\n')),Object(r.b)("p",null,"This flow also works with Single Page Apps (SPA) and frameworks like Angular or\nReactJS. For more details about the specific flows (login, registration, logout,\netc.), head over to the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/concepts/index"}),"concept")," chapter."),Object(r.b)("p",null,'Let\'s move on to the next flow - registration! Click on "Register new account",\nwhich initiates a flow similar to the one we just used:'),Object(r.b)("p",null,Object(r.b)("img",{alt:"Registration screen of your secured app",src:a(1142).default})),Object(r.b)("p",null,"The network trace should look familiar by now:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Registration with network trace screen of your secured app",src:a(1143).default})),Object(r.b)("p",null,"If we try to sign up using a password like ",Object(r.b)("inlineCode",{parentName:"p"},"123456"),", Krato's password policy\nwill complain:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Registration with network trace screen of your secured app",src:a(1144).default})),Object(r.b)("p",null,"The error message is coming directly from ORY Kratos' Admin API:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'# curl -s "http://127.0.0.1:4433/self-service/registration/flows?id=2b1f8c5d-e830-4068-97b8-35f776df9217" \\\n$ curl -s "http://127.0.0.1:4433/self-service/registration/flows?id=<flow_id>" \\\n  | jq\n\n{\n  "id": "2b1f8c5d-e830-4068-97b8-35f776df9217",\n  "type": "browser",\n  "expires_at": "2020-09-13T10:53:15.1774019Z",\n  "issued_at": "2020-09-13T10:43:15.1774019Z",\n  "request_url": "http://127.0.0.1:4433/self-service/registration/browser",\n  "active": "password",\n  "messages": null,\n  "methods": {\n    "password": {\n      "method": "password",\n      "config": {\n        "action": "http://127.0.0.1:4433/self-service/registration/methods/password?flow=2b1f8c5d-e830-4068-97b8-35f776df9217",\n        "method": "POST",\n        "fields": [\n          {\n            "name": "csrf_token",\n            "type": "hidden",\n            "required": true,\n            "value": "1IlHWNjkAZxuYhO82WPgNTgujKsUSaW87j6og/20i2uM4wRTWGSSUg0dJ2fbXa8C5bfM9eTKGdauGwE7y9abwA=="\n          },\n          {\n            "name": "password",\n            "type": "password",\n            "required": true,\n            "messages": [\n              {\n                "id": 4000005,\n                "text": "The password can not be used because the password has been found in at least 23597311 data breaches and must no longer be used..",\n                "type": "error",\n                "context": {\n                  "reason": "the password has been found in at least 23597311 data breaches and must no longer be used."\n                }\n              }\n            ]\n          },\n          {\n            "name": "traits.email",\n            "type": "text",\n            "value": "foo@ory.sh"\n          },\n          {\n            "name": "traits.name.first",\n            "type": "text",\n            "value": "Ory"\n          },\n          {\n            "name": "traits.name.last",\n            "type": "text",\n            "value": "Corp"\n          }\n        ]\n      }\n    }\n  }\n}\n')),Object(r.b)("p",null,"Setting a password that doesn't violate these policies, we will be immediately\nredirected to the dashboard:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"SecureApp Dashboard",src:a(1145).default})),Object(r.b)("p",null,'By clicking the "logout" icon in the top right, you will be redirected to the\nlogin screen again where you will be able to use your credentials to log back in\nagain. Exciting!'),Object(r.b)("h3",{id:"understanding-how-login-and-registration-works"},"Understanding How Login and Registration Works"),Object(r.b)("p",null,"Head over to the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/self-service"}),"Self-Service Flows Chapter")," for an in-depth\nexplanation of how each individual flow works."),Object(r.b)("h3",{id:"email-verification"},"Email Verification"),Object(r.b)("p",null,"As you've signed up, an email was sent to the email address you used. Because\nthe quickstart uses a fake SMTP server, the email did not arrive in your inbox.\nYou can retrieve the email however by opening the MailSlurper UI at\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://127.0.0.1:4436"}),"127.0.0.1:4436"),"."),Object(r.b)("p",null,"You should see something like this:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"User Email Verification",src:a(1146).default})),Object(r.b)("p",null,"If not, hard refresh the tab or click on the home icon in the menu bar."),Object(r.b)("p",null,"Next, click the verification link. You will end up at the dashboard, with a\nverified email address (check the ",Object(r.b)("inlineCode",{parentName:"p"},"verified")," and ",Object(r.b)("inlineCode",{parentName:"p"},"verified_at")," field in the JSON\nresponse):"),Object(r.b)("p",null,Object(r.b)("img",{alt:"SecureApp Dashboard",src:a(1147).default})),Object(r.b)("p",null,"To re-request the verification email, fill out the form at\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://127.0.0.1:4455/verify"}),"127.0.0.1:4455/verify"),"."),Object(r.b)("p",null,"To learn more about verification recovery, head over to the\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/self-service/flows/verify-email-account-activation"}),"Email and Phone Verification and Account Activation Documentation"),"."),Object(r.b)("h3",{id:"account-recovery"},"Account Recovery"),Object(r.b)("p",null,'The quickstart has account recovery enabled. To recover an account, log out and\nclick on "Recover account":'),Object(r.b)("p",null,Object(r.b)("img",{alt:"Click on recover account",src:a(1148).default})),Object(r.b)("p",null,"The next screen shows a HTML form where you enter your email address:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Enter your email address",src:a(1149).default})),Object(r.b)("p",null,'Hit "submit" and check the emails for the account recovery message:'),Object(r.b)("p",null,Object(r.b)("img",{alt:"Check your email for the password reset email",src:a(1150).default})),Object(r.b)("p",null,"Click the link, and change your password:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Change your password",src:a(1151).default})),Object(r.b)("p",null,"You are now able to sign in with the new password. To learn more about account\nrecovery, head over to the\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/self-service/flows/account-recovery"}),"Account Recovery Documentation"),"."),Object(r.b)("h4",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"You can find all configuration files used for this quickstart guide in\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ory/kratos/tree/v0.5.4-alpha.1/contrib/quickstart/kratos/email-password"}),Object(r.b)("inlineCode",{parentName:"a"},"./contrib/quickstart/kratos")),"\n,\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ory/kratos/blob/v0.5.4-alpha.1/quickstart.yml"}),Object(r.b)("inlineCode",{parentName:"a"},"./quickstart.yml")),",\nand\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ory/kratos/blob/v0.5.4-alpha.1/quickstart-standalone.yml"}),Object(r.b)("inlineCode",{parentName:"a"},"./quickstart-standalone.yml")),".\nTo understand what each of those configuration files does, consult the other\nchapters of this documentation."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"To get a minimal version of ORY Kratos running, you need to set configuration\nvalues for\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ory/kratos/blob/v0.5.4-alpha.1/contrib/quickstart/kratos/email-password/.kratos.yml#L67"}),Object(r.b)("inlineCode",{parentName:"a"},"identity.default_schema_url")),"\nand\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ory/kratos/blob/v0.5.4-alpha.1/quickstart.yml#L42"}),Object(r.b)("inlineCode",{parentName:"a"},"DSN")),".\nYou should also configure\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ory/kratos/blob/v0.5.4-alpha.1/contrib/quickstart/kratos/email-password/.kratos.yml#L40"}),Object(r.b)("inlineCode",{parentName:"a"},"selfservice.flows.*.ui_url")),"\nor else Kratos will use fallback URLs."))),Object(r.b)("p",null,"In the future, this guide will support more use cases such as:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"GitHub to login and registration")),Object(r.b)("h2",{id:"cleaning-up-docker"},"Cleaning Up Docker"),Object(r.b)("p",null,"To clean everything up, you need to bring down the Docker Compose environment\nand remove all mounted volumes."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"docker-compose -f quickstart.yml down -v\ndocker-compose -f quickstart.yml rm -fsv\n")),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)("p",null,"Here is some information if you want to modify the quickstart to test ORY Kratos\nin with different settings."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Using different databases")),Object(r.b)("p",null,"If you want to run the quickstart with PostgreSQL, run the following\ndocker-compose:\n",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose -f quickstart.yml -f quickstart-standalone.yml -f quickstart-postgres.yml up --build --force-recreate")),Object(r.b)("p",null,"If you want to run the quickstart with CockroachDB, run the following\ndocker-compose:\n",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose -f quickstart.yml -f quickstart-standalone.yml -f quickstart-crdb.yml up --build --force-recreate")),Object(r.b)("p",null,"If you want to run the quickstart with MySQL, run the following docker-compose:\n",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose -f quickstart.yml -f quickstart-standalone.yml -f quickstart-mysql.yml up --build --force-recreate")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Changing ports")),Object(r.b)("p",null,"If you want to change ports for the SelfService-UI, you need to change them in\n",Object(r.b)("inlineCode",{parentName:"p"},"quickstart.yml")," as well as in the\n",Object(r.b)("inlineCode",{parentName:"p"},"contrib/quickstart/kratos/email-password/.kratos.yml")," accordingly."),Object(r.b)("p",null,"Note that you also need to change the ports for flows (error, settings,\nrecovery, verification, logout, login, registration)."),Object(r.b)("p",null,"The same procedure applies if you want to change ports for the Public UI/Admin\nUI or the Mailslurper."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Hooks")),Object(r.b)("p",null,"If you want to change the redirects happening after registration,login or a\nsettings change, take a look at this document: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/self-service/hooks"}),"Hooks"),"."),Object(r.b)("p",null,"If you delete the ",Object(r.b)("inlineCode",{parentName:"p"},"session")," hook from ",Object(r.b)("inlineCode",{parentName:"p"},"kratos.yml"),", the user will ",Object(r.b)("em",{parentName:"p"},"not")," be\nimmediately signed in after registration."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"OIDC")),Object(r.b)("p",null,"If you want to test ORY Kratos integration with different OIDC providers, you\nwill find more information in this document:\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/guides/sign-in-with-github-google-facebook-linkedin"}),"OIDC")))}u.isMDXComponent=!0},441:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(457),i=a.n(r),s=a(54),c=a.n(s),l=a(454),b=a.n(l);i.a.initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});t.a=function(e){var t,a=e.chart,r=Object(n.useState)(!1),s=r[0],l=r[1],d=Object(n.useState)(void 0),u=d[0],p=d[1],h=Object(n.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],m=function(){return l(!s)};return Object(n.useEffect)((function(){i.a.render(h,a,(function(e){p(e)}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{onClick:m,className:b()(c.a.graph,c.a.pointer),dangerouslySetInnerHTML:{__html:u}}),o.a.createElement("div",{onClick:m,className:b()(c.a.overlay,c.a.pointer,c.a.graph,(t={},t[c.a.visible]=s,t))},o.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:b()(c.a.backdrop,c.a.graph),dangerouslySetInnerHTML:{__html:u}})))}},455:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(476),i=a.n(r),s=a(456),c=a(56),l=a.n(c),b=function(e,t){if(!e)return 0;var a=t.findIndex((function(t){return t.indexOf(e)>-1}));return-1===a?0:a};t.a=function(e){var t=e.src,a=Object(n.useState)(""),r=a[0],c=a[1];Object(n.useEffect)((function(){var a,n,o;i()(t.replace("github.com","raw.githubusercontent.com").replace("/blob/","/")).then((function(e){return e.text()})).then((a=e,n=a.startAt,o=a.endAt,function(e){var t=e.split("\n"),a=b(n,t);a>0&&(t=["// ..."].concat(t.slice(a,-1)));var r=b(o,t);return r>0&&(t=[].concat(t.slice(0,r+1),["// ..."])),t.join("\n")})).then(c).catch(console.error)}),[]);var d="language-"+function(e){var t=e.split(".").pop();switch(t){case"jsx":return"jsx";case"tsx":return"tsx";case"ts":return"typescript";case"go":return"go";case"yaml":case"yml":return"yaml";case"js":return"javascript";case"html":return"html";case"pug":return"pug";default:return t}}(t),u='title="'+function(e){var t=e.match(new RegExp("https://github.com/[^/]+/[^/]+/blob/[^/]+/(.+)","i"))||[];return t.length>=2?t[1]:e}(t)+'"';return o.a.createElement("div",{className:l.a.container},o.a.createElement(s.a,{metastring:u,className:d,children:r}))}},458:function(e,t){},459:function(e,t){},460:function(e,t){},461:function(e,t){},462:function(e,t){},463:function(e,t){},464:function(e,t){},465:function(e,t){},466:function(e,t){},467:function(e,t){},468:function(e,t){},469:function(e,t){},471:function(e,t,a){var n={"./locale":447,"./locale.js":447};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=471},476:function(e,t,a){"use strict";var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,n.fetch&&(t.default=n.fetch.bind(n)),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response}}]);