(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[70662],{13919:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return a}})},44996:function(e,t,n){"use strict";n.d(t,{C:function(){return r},Z:function(){return i}});var o=n(52263),a=n(13919);function r(){var e=(0,o.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var r=void 0===o?{}:o,i=r.forcePrependBaseUrl,s=void 0!==i&&i,l=r.absolute,d=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return d?e+c:c}(r,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},32527:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var o=n(67294),a=n(21140),r=n.n(a),i="graph_1lrJ",s="pointer_3d8u",l="overlay_2fuY",d="visible_2Z3U",c="backdrop_2z5L",u=n(94184),m=n.n(u);r().initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});var p=function(e){var t,n=e.chart,a=(0,o.useState)(!1),u=a[0],p=a[1],h=(0,o.useState)(void 0),g=h[0],v=h[1],f=(0,o.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],k=function(){return p(!u)};return(0,o.useEffect)((function(){r().render(f,n,(function(e){v(e)}))}),[]),o.createElement(o.Fragment,null,o.createElement("div",{onClick:k,className:m()(i,s),dangerouslySetInnerHTML:{__html:g}}),o.createElement("div",{onClick:k,className:m()(l,s,i,(t={},t[d]=u,t))},o.createElement("div",{onClick:function(e){return e.stopPropagation()},className:m()(c,i),dangerouslySetInnerHTML:{__html:g}})))}},20943:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return p},default:function(){return g}});var o=n(22122),a=n(19756),r=(n(67294),n(3905)),i=n(44996),s=(n(32527),n(55064)),l=n(58215),d=["components"],c={id:"logout",title:"Implementing the Logout Endpoint & UI",sidebar_label:"Logout Endpoint"},u=void 0,m={unversionedId:"guides/logout",id:"version-v1.8/guides/logout",isDocsHomePage:!1,title:"Implementing the Logout Endpoint & UI",description:"Please read the Logout Flow Documentation first!",source:"@site/versioned_docs/version-v1.8/guides/logout.mdx",sourceDirName:"guides",slug:"/guides/logout",permalink:"/hydra/docs/v1.8/guides/logout",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.8/guides/logout.mdx",version:"v1.8",lastUpdatedBy:"Louis Laureys",lastUpdatedAt:1623407651,formattedLastUpdatedAt:"6/11/2021",frontMatter:{id:"logout",title:"Implementing the Logout Endpoint & UI",sidebar_label:"Logout Endpoint"},sidebar:"version-v1.8/docs",previous:{title:"Consent Endpoint",permalink:"/hydra/docs/v1.8/guides/consent"},next:{title:"Run ORY Hydra in Docker",permalink:"/hydra/docs/v1.8/configure-deploy"}},p=[{value:"Implementing the Logout HTML Form",id:"implementing-the-logout-html-form",children:[]},{value:"Accepting Logout",id:"accepting-logout",children:[]},{value:"Rejecting Logout",id:"rejecting-logout",children:[]}],h={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,d);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please read the ",(0,r.kt)("a",{parentName:"p",href:"../concepts/logout"},"Logout Flow Documentation")," first!"))),(0,r.kt)("p",null,"In this document, you will learn how to implement the Logout Endpoint using our\nORY Hydra SDKs. The goal for this document is to have document this for multiple\nprogramming languages. If you are an expert in one of these languages, your help\nis highly appreciated in improving these docs!"),(0,r.kt)("h2",{id:"implementing-the-logout-html-form"},"Implementing the Logout HTML Form"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The Logout HTML Form cannot be only a Single Page App (Client-side browser\napplication) or a Mobile App! There has to be a server-side component with access\nto ORY Hydra's Admin Endpoint!"))),(0,r.kt)(s.Z,{defaultValue:"ui",values:[{label:"UI",value:"ui"},{label:"NodeJS",value:"node"},{label:"HTML Example",value:"html"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ui",mdxType:"TabItem"},(0,r.kt)("img",{src:(0,i.Z)("/img/docs/logout-endpoint.png")})),(0,r.kt)(l.Z,{value:"node",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Check out our\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra-login-consent-node"},"reference implementation")," of\nthis endpoint!"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="routes/logout.ts"',title:'"routes/logout.ts"'},"// This example uses ExpressJS\nimport express from 'express'\nimport url from 'url'\nimport csrf from 'csurf'\nimport { AdminApi } from '@oryd/hydra-client'\n\nconst hydraAdmin = new AdminApi(process.env.HYDRA_ADMIN_URL)\n\n// Sets up csrf protection. Always do this when handling HTML forms!\nconst csrfProtection = csrf({ cookie: true })\nconst router = express.Router()\n\nrouter.get('/', csrfProtection, (req, res, next) => {\n  // Parses the URL query\n  const query = url.parse(req.url, true).query\n\n  // The challenge is used to fetch information about the logout request from ORY Hydra.\n  const challenge = String(query.logout_challenge)\n  if (!challenge) {\n    next(new Error('Expected a logout challenge to be set but received none.'))\n    return\n  }\n\n  hydraAdmin\n    .getLogoutRequest(challenge)\n    // This will be called if the HTTP request was successful\n    .then(({ body }) => {\n      // Here we have access to e.g. response.subject, response.sid, ...\n\n      // The most secure way to perform a logout request is by asking the user if he/she really want to log out.\n      res.render('logout', {\n        csrfToken: req.csrfToken(),\n        challenge: challenge\n      })\n    })\n    // This will handle any error that happens when making HTTP calls to hydra\n    .catch(next)\n})\n"))),(0,r.kt)(l.Z,{value:"html",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<form action="/logout" method="POST">\n  <input type="hidden" name="_csrf" value="{{ .csrfToken }}" />\n  <input type="hidden" name="challenge" value="{{ .challenge }}" />\n  <input type="submit" id="accept" value="Yes" />\n  <input type="submit" id="reject" value="No" />\n</form>\n')))),(0,r.kt)("h2",{id:"accepting-logout"},"Accepting Logout"),(0,r.kt)(s.Z,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"node",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Check out our\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra-login-consent-node"},"reference implementation")," of\nthis endpoint!"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="routes/logout.ts"',title:'"routes/logout.ts"'},"// This is the endpoint the user ends up at once she/he inserts their password and username and hits \"Log in\".\nrouter.post('/logout', csrfProtection, (req, res, next) => {\n  // The user agreed to log out, let's accept the logout request.\n  hydraAdmin\n    .acceptLogoutRequest(challenge)\n    .then(({ body }) => {\n      // All we need to do now is to redirect the user back to hydra!\n      res.redirect(String(body.redirectTo))\n    })\n    // This will handle any error that happens when making HTTP calls to hydra\n    .catch(next)\n})\n")))),(0,r.kt)("h2",{id:"rejecting-logout"},"Rejecting Logout"),(0,r.kt)(s.Z,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"node",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Check out our\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra-login-consent-node"},"reference implementation")," of\nthis endpoint!"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="routes/logout.ts"',title:'"routes/logout.ts"'},"// This is the endpoint the user ends up at once she/he inserts their password and username and hits \"Log in\".\nrouter.post('/logout', csrfProtection, (req, res, next) => {\n  return (\n    hydraAdmin\n      .rejectLogoutRequest(challenge)\n      .then(() => {\n        // The user did not want to log out. Let's redirect him back somewhere or do something else.\n        res.redirect('https://www.ory.sh/')\n      })\n      // This will handle any error that happens when making HTTP calls to hydra\n      .catch(next)\n  )\n})\n")))))}g.isMDXComponent=!0},11748:function(e,t,n){var o={"./locale":89234,"./locale.js":89234};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id=11748}}]);