(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[65288],{32527:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var a=t(67294),o=t(21140),s=t.n(o),i="graph_1lrJ",r="pointer_3d8u",l="overlay_2fuY",c="visible_2Z3U",d="backdrop_2z5L",p=t(94184),h=t.n(p);s().initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});var u=function(e){var n,t=e.chart,o=(0,a.useState)(!1),p=o[0],u=o[1],m=(0,a.useState)(void 0),k=m[0],g=m[1],f=(0,a.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],b=function(){return u(!p)};return(0,a.useEffect)((function(){s().render(f,t,(function(e){g(e)}))}),[]),a.createElement(a.Fragment,null,a.createElement("div",{onClick:b,className:h()(i,r),dangerouslySetInnerHTML:{__html:k}}),a.createElement("div",{onClick:b,className:h()(l,r,i,(n={},n[c]=p,n))},a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:h()(d,i),dangerouslySetInnerHTML:{__html:k}})))}},51137:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return h},toc:function(){return u},default:function(){return k}});var a=t(22122),o=t(19756),s=(t(67294),t(3905)),i=t(32527),r=t(55064),l=t(58215),c=["components"],d={id:"consent",title:"Consent Flow"},p=void 0,h={unversionedId:"concepts/consent",id:"concepts/consent",isDocsHomePage:!1,title:"Consent Flow",description:"OAuth2 and OpenID Connect require an authenticated End-User session for all",source:"@site/docs/concepts/consent.mdx",sourceDirName:"concepts",slug:"/concepts/consent",permalink:"/hydra/docs/next/concepts/consent",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/concepts/consent.mdx",tags:[],version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1617623008,formattedLastUpdatedAt:"4/5/2021",frontMatter:{id:"consent",title:"Consent Flow"},sidebar:"docs",previous:{title:"Login Flow",permalink:"/hydra/docs/next/concepts/login"},next:{title:"Logout Flow",permalink:"/hydra/docs/next/concepts/logout"}},u=[{value:"Redirection to the Consent Endpoint",id:"redirection-to-the-consent-endpoint",children:[{value:"Previous Consent",id:"previous-consent",children:[]}]},{value:"The Consent Endpoint",id:"the-consent-endpoint",children:[{value:"Accepting the Consent Flow",id:"accepting-the-consent-flow",children:[]},{value:"Rejecting the Consent Flow",id:"rejecting-the-consent-flow",children:[]}]},{value:"Revoking Consent",id:"revoking-consent",children:[]}],m={toc:u};function k(e){var n=e.components,d=(0,o.Z)(e,c);return(0,s.kt)("wrapper",(0,a.Z)({},m,d,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"OAuth2 and OpenID Connect require an authenticated End-User session for all\nOAuth2 / OpenID Connect flows except the ",(0,s.kt)("inlineCode",{parentName:"p"},"client_credentials")," flow which does\nnot involve End-Users."),(0,s.kt)("p",null,'ORY Hydra does not contain a database with End-Users but instead uses HTTP\nRedirection to "delegate" the login and consent flow to another app - we call\nthis the Login & Consent App.'),(0,s.kt)("p",null,"The following short video shows the flow from an End-User's perspective - it\nincludes both login and consent."),(0,s.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/txUmfORzu8Y",frameBorder:"0",allowFullScreen:!0}),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Please read ",(0,s.kt)("a",{parentName:"p",href:"/hydra/docs/next/concepts/login"},"Login Flow")," first, as the Login Flow happens before\nthe consent flow."))),(0,s.kt)("p",null,"The following sequence diagram describes the different API calls and HTTP\nRedirects when performing the OAuth2 flow:"),(0,s.kt)(i.Z,{chart:"sequenceDiagram\n    OAuth2 Client->>ORY Hydra: Initiates OAuth2 Authorize Code or Implicit Flow\n    ORY Hydra--\x3e>ORY Hydra: No end user session available (not authenticated)\n    ORY Hydra->>Login Endpoint: Redirects end user with login challenge\n    Login Endpoint--\x3eORY Hydra: Fetches login info\n    Login Endpoint--\x3e>Login Endpoint: Authenticates user with credentials\n    Login Endpoint--\x3eORY Hydra: Transmits login info and receives redirect url with login verifier\n    Login Endpoint->>ORY Hydra: Redirects end user to redirect url with login verifier\n    ORY Hydra--\x3e>ORY Hydra: First time that client asks user for permissions\n    ORY Hydra->>Consent Endpoint: Redirects end user with consent challenge\n    Consent Endpoint--\x3eORY Hydra: Fetches consent info (which user, what app, what scopes)\n    Consent Endpoint--\x3e>Consent Endpoint: Asks for end user's permission to grant application access\n    Consent Endpoint--\x3eORY Hydra: Transmits consent result and receives redirect url with consent verifier\n    Consent Endpoint->>ORY Hydra: Redirects to redirect url with consent verifier\n    ORY Hydra--\x3e>ORY Hydra: Verifies grant\n    ORY Hydra->>OAuth2 Client: Transmits authorization code/token",mdxType:"Mermaid"}),(0,s.kt)("h2",{id:"redirection-to-the-consent-endpoint"},"Redirection to the Consent Endpoint"),(0,s.kt)("p",null,"Once the login challenge is accepted, ORY Hydra will ask the user for consent:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"OAuth 2.0 Asking for User Consent",src:t(80139).Z})),(0,s.kt)("p",null,'The UI is fully under your control, because ORY Hydra redirects the End-User\'s\nbrowser to the "Consent Endpoint" established in your config:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="hydra serve all -c path/to/hydra/config.yml"',title:'"hydra',serve:!0,all:!0,"-c":!0,'path/to/hydra/config.yml"':!0},"# Can also be set using the environment variable:\n#   URLS_CONSENT=https://consent-app/consent\nurls:\n  consent: https://consent-app/consent\n")),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"You can implement the Login and Consent endpoints in the same code base /\napplication. Check out our\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra-login-consent-node"},"Login, Consent & Logout NodeJS Reference implementation"),"!"))),(0,s.kt)("p",null,"ORY Hydra appends a ",(0,s.kt)("inlineCode",{parentName:"p"},"consent_challenge")," query parameter to the url. The value is\na ID which should later be used by the Consent Endpoint to fetch important\ninformation about the request."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"https://consent-app/consent?consent_challenge=7bb518c4eec2454dbb289f5fdb4c0ee2\n")),(0,s.kt)("h3",{id:"previous-consent"},"Previous Consent"),(0,s.kt)("p",null,"A consent has four distinctive attributes:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The requested scope\n(",(0,s.kt)("inlineCode",{parentName:"li"},"/oauth2/auth?...&...&scope=email+profile+offline_access"),");"),(0,s.kt)("li",{parentName:"ul"},"The OAuth2 Client (",(0,s.kt)("inlineCode",{parentName:"li"},"/oauth2/auth?client_id=abcd"),");"),(0,s.kt)("li",{parentName:"ul"},"The End-User (this is the ",(0,s.kt)("inlineCode",{parentName:"li"},"subject")," set in the ",(0,s.kt)("a",{parentName:"li",href:"/hydra/docs/next/concepts/login"},"Login Flow"),");"),(0,s.kt)("li",{parentName:"ul"},"Whether or not a previous consent exists, the previous consent has\n",(0,s.kt)("inlineCode",{parentName:"li"},"remember: true"),", and the scope granted by the user (did the user accept all\nof ",(0,s.kt)("inlineCode",{parentName:"li"},"email"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"profile"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"offline_access"),"?)")),(0,s.kt)("p",null,"There are three possible states:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'The user has never before authorized ("consent") the OAuth2 Client before.'),(0,s.kt)("li",{parentName:"ul"},'The user has authorized ("consent") the OAuth2 Client before and chose to\nremember the "consent".'),(0,s.kt)("li",{parentName:"ul"},'The user has authorized ("consent") the OAuth2 Client before, and chose to\nremember the "consent", but the OAuth2 Client now also wants additional\npermissions ("has changed the token scope" in ',(0,s.kt)("inlineCode",{parentName:"li"},"/oauth2/auth?scope=..."),").")),(0,s.kt)("p",null,"Regardless of which of these three states we are in, the End-User's browser is\nalways redirected to the consent endpoint. What changes is the ",(0,s.kt)("inlineCode",{parentName:"p"},"skip")," value, as\nexplained a bit later."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"In certain scenarios (e.g. a special OAuth2 Client) you might not want to show\nthe consent screen at all. In those cases you can choose to skip showing the UI\nand just accept the consent. Please keep in mind that OAuth2 is a delegation\nprotocol and that it makes most sense for third-party access. Not showing the\nconsent screen will break OpenID Connect Certification."))),(0,s.kt)("h2",{id:"the-consent-endpoint"},"The Consent Endpoint"),(0,s.kt)("p",null,"The Consent Endpoint (set by ",(0,s.kt)("inlineCode",{parentName:"p"},"urls.consent"),") is an application written by you.\nYou can find an exemplary\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra-login-consent-node"},"NodeJS reference implementation on our GitHub"),"."),(0,s.kt)("p",null,"The Consent Endpoint uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"consent_challenge")," value in the URL to fetch\ninformation about the consent request by making a HTTP GET request to:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"http(s)://<HYDRA_ADMIN_URL>/oauth2/auth/requests/consent?consent_challenge=<challenge>\n")),(0,s.kt)("p",null,'The response (see below in "Consent Challenge Response" tab) contains\ninformation about the consent request. The body contains a ',(0,s.kt)("inlineCode",{parentName:"p"},"skip")," value. If the\nvalue is ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),", the user interface must be shown. If ",(0,s.kt)("inlineCode",{parentName:"p"},"skip")," is true, you\nshould not show the user interface but instead just accept or reject the consent\nrequest! For more details about the implementation check the\n",(0,s.kt)("a",{parentName:"p",href:"/hydra/docs/next/guides/login"},'"Implementing the Consent Endpoint" Guide'),"."),(0,s.kt)(r.Z,{defaultValue:"ui",values:[{label:"UI",value:"ui"},{label:"curl",value:"curl"},{label:"Consent Challenge Response",value:"json"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ui",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Exemplary OAuth 2.0 Consent Screen",src:t(42148).Z}))),(0,s.kt)(l.Z,{value:"curl",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ curl \\\n  "http://127.0.0.1:4445/oauth2/auth/requests/consent?consent_challenge=7bb518c4eec2454dbb289f5fdb4c0ee2"\n')),(0,s.kt)("p",null,"Check the ",(0,s.kt)("a",{parentName:"p",href:"/hydra/docs/next/guides/consent"},'"Implementing the Consent Endpoint" Guide')," for\nexamples using the ORY Hydra SDK in different languages.")),(0,s.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "challenge": "f633e49d56bc40e0a876ac8242eb9891",\n  "requested_scope": ["openid", "offline"],\n  "requested_access_token_audience": [],\n  "skip": false,\n  "subject": "foo@bar.com",\n  "oidc_context": {\n    "acr_values": [],\n    "display": "",\n    "id_token_hint_claims": {},\n    "login_hint": "",\n    "ui_locales": []\n  },\n  "client": {\n    "client_id": "auth-code-client",\n    "client_name": "",\n    "redirect_uris": ["http://127.0.0.1:5555/callback"],\n    "grant_types": ["authorization_code", "refresh_token"],\n    "response_types": ["code", "id_token"],\n    "scope": "openid offline",\n    "audience": null,\n    "owner": "",\n    "policy_uri": "",\n    "allowed_cors_origins": null,\n    "tos_uri": "",\n    "client_uri": "",\n    "logo_uri": "",\n    "contacts": null,\n    "client_secret_expires_at": 0,\n    "subject_type": "public",\n    "token_endpoint_auth_method": "client_secret_basic",\n    "userinfo_signed_response_alg": "none",\n    "created_at": "2020-07-09T10:07:01Z",\n    "updated_at": "2020-07-09T10:07:01Z"\n  },\n  "request_url": "http://127.0.0.1:4444/oauth2/auth?audience=&client_id=auth-code-client&max_age=0&nonce=shfxjszihgvbptswjbqsrdbg&prompt=&redirect_uri=http%3A%2F%2F127.0.0.1%3A5555%2Fcallback&response_type=code&scope=openid+offline&state=pmkekezifwwpgmzpckiqxzbt",\n  "login_challenge": "de814daf9bbb4b788b505b3c2dd5ce20",\n  "login_session_id": "c829da46-2041-400c-b72d-08324f878d0a",\n  "acr": ""\n}\n')))),(0,s.kt)("p",null,"The way you collect the consent information from the End-User is up to you. In\nmost cases, you will show an HTML form similar to:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<form action="/consent" method="post">\n  <input type="hidden" name="csrf_token" value="...." />\n  \x3c!-- Use CSRF tokens in your HTML forms! --\x3e\n  <input type="checkbox" name="scope" />\n</form>\n')),(0,s.kt)("h3",{id:"accepting-the-consent-flow"},"Accepting the Consent Flow"),(0,s.kt)("p",null,"To accept the Consent Challenge, make an HTTP PUT request with\n",(0,s.kt)("inlineCode",{parentName:"p"},"Content-Type: application/json")," and a JSON payload (see\n",(0,s.kt)("a",{parentName:"p",href:"/hydra/docs/next/reference/api#schemaacceptconsentrequest"},"Accept Consent Request HTTP API Reference"),")"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // The scope granted by the user.\n  "grant_scope": ["openid", "offline_access"],\n\n  // The following fields are optional\n\n  // The Access Token Audience if needed. Typically equals the `requested_access_token_audience` field from\n  // the consent challenge.\n  "grant_access_token_audience": ["https://my-audience.com"],\n\n  // Remember, if set to true, tells ORY Hydra to remember this consent authorization and reuse it if the same client\n  // asks the same user for the same, or a subset of, scope.\n  "remember": true,\n  // RememberFor sets how long the consent authorization should be remembered for in seconds. If set to 0, the\n  // authorization will be remembered indefinitely.\n  "remember_for": 3600,\n\n  // Set the data for this consent "session"\n  "session": {\n    "access_token": {\n      "foo": "This field will be available when introspecting the Access Token"\n    },\n    "id_token": {\n      "bar": "This field will be available as a claim in the ID Token"\n    }\n  }\n}\n')),(0,s.kt)("p",null,"With ",(0,s.kt)("inlineCode",{parentName:"p"},"curl")," this might look like the following request:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ curl --location --request PUT 'http://127.0.0.1:4445/oauth2/auth/requests/consent/accept?consent_challenge=7bb518c4eec2454dbb289f5fdb4c0ee2' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n  \"grant_scope\": [\"openid\", \"offline_access\"]\n}'\n")),(0,s.kt)("p",null,"The server responds with JSON"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "redirect_to": "http://127.0.0.1:4445/oauth2/auth..."\n}\n')),(0,s.kt)("p",null,"which is the URL your application must the End-User's browser to."),(0,s.kt)("p",null,"Check the ",(0,s.kt)("a",{parentName:"p",href:"/hydra/docs/next/guides/consent"},'"Implementing the Consent Endpoint" Guide')," for\nexamples using the ORY Hydra SDK in different languages."),(0,s.kt)("h3",{id:"rejecting-the-consent-flow"},"Rejecting the Consent Flow"),(0,s.kt)("p",null,"To reject the Login Challenge, make a HTTP PUT request with\n",(0,s.kt)("inlineCode",{parentName:"p"},"Content-Type: application/json")," and a JSON payload (see\n",(0,s.kt)("a",{parentName:"p",href:"/hydra/docs/next/reference/api#schemarejectrequest"},"Reject Consent Request HTTP API Reference"),")"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // The error should follow the OAuth2 error format (e.g. `invalid_request`, `login_required`).\n  "error": "user_banned",\n\n  // Description of the error in a human readable format.\n  "error_description": "You are banned!",\n\n  // Hint to help resolve the error.\n  "error_hint": "Contact the site administrator.",\n\n  // Debug contains information to help resolve the problem as a developer. Usually not exposed\n  // to the public but only in the server logs.\n  "error_debug": "The user was marked banned in the database.",\n\n  // Represents the HTTP status code of the error (e.g. 401 or 403)\n  //\n  // Defaults to 400\n  "status_code": 403\n}\n')),(0,s.kt)("p",null,"With ",(0,s.kt)("inlineCode",{parentName:"p"},"curl")," this might look like the following request:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ curl --location --request PUT \'http://127.0.0.1:4445/oauth2/auth/requests/consent/reject?consent_challenge=7bb518c4eec2454dbb289f5fdb4c0ee2\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "error": "user_banned",\n  "error_debug": "The user was marked banned in the database.",\n  "error_description": "You are banned!",\n  "error_hint": "Contact the site administrator.",\n  "status_code": 403\n}\'\n')),(0,s.kt)("p",null,"The server responds with JSON"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "redirect_to": "http://127.0.0.1:4445/oauth2/auth..."\n}\n')),(0,s.kt)("p",null,"which is the URL your application must the End-User's browser to."),(0,s.kt)("p",null,"Check the ",(0,s.kt)("a",{parentName:"p",href:"/hydra/docs/next/guides/login"},'"Implementing the Login Endpoint" Guide')," for\nexamples using the ORY Hydra SDK in different languages."),(0,s.kt)("h2",{id:"revoking-consent"},"Revoking Consent"),(0,s.kt)("p",null,"You can revoke a user's consent either on a per application basis or for all\napplications."),(0,s.kt)("p",null,"Revoking the consent will automatically revoke all related access and refresh\ntokens."),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},'Do not use this endpoint to "invalidate" user sessions. Please revise your\napproach to and usage of OAuth2 if you use access / refresh tokens as user\nsessions (i.e. instead of browser cookies).'))),(0,s.kt)("p",null,"Revoking all consent sessions of a user is as easy as sending ",(0,s.kt)("inlineCode",{parentName:"p"},"DELETE")," to\n",(0,s.kt)("inlineCode",{parentName:"p"},"/oauth2/auth/sessions/consent?subject={subject}"),"."),(0,s.kt)("p",null,"Revoking the consent sessions of a user for a specific client is as easy as\nsending ",(0,s.kt)("inlineCode",{parentName:"p"},"DELETE")," to\n",(0,s.kt)("inlineCode",{parentName:"p"},"/oauth2/auth/sessions/consent?subject={subject}&client={client}"),"."))}k.isMDXComponent=!0},11748:function(e,n,t){var a={"./locale":89234,"./locale.js":89234};function o(e){var n=s(e);return t(n)}function s(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=s,e.exports=o,o.id=11748},42148:function(e,n,t){"use strict";n.Z=t.p+"assets/images/consent-endpoint-31856a0555a6a8438d4603692bdab5d2.png"},80139:function(e,n,t){"use strict";n.Z=t.p+"assets/images/google-consent-playground-b56a6f80957ed4699601ceaf9932d735.png"}}]);