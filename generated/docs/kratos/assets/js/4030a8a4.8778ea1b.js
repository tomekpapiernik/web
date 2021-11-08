"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[67823],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var i=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),g=s,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||r;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71629:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var i=n(87462),s=n(63366),r=(n(67294),n(3905)),a=["components"],o={id:"user-settings",title:"User Settings",sidebar_label:"Overview"},l=void 0,c={unversionedId:"self-service/flows/user-settings",id:"version-v0.3/self-service/flows/user-settings",isDocsHomePage:!1,title:"User Settings",description:"ORY Kratos allows users to update their own settings and profile information",source:"@site/versioned_docs/version-v0.3/self-service/flows/user-settings.mdx",sourceDirName:"self-service/flows",slug:"/self-service/flows/user-settings",permalink:"/kratos/docs/v0.3/self-service/flows/user-settings",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.3/self-service/flows/user-settings.mdx",tags:[],version:"v0.3",lastUpdatedBy:"aeneasr",lastUpdatedAt:1589548840,formattedLastUpdatedAt:"5/15/2020",frontMatter:{id:"user-settings",title:"User Settings",sidebar_label:"Overview"},sidebar:"version-v0.3/docs",previous:{title:"Social Sign In with OpenID Connect and OAuth2",permalink:"/kratos/docs/v0.3/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2"},next:{title:"User Profile Management",permalink:"/kratos/docs/v0.3/self-service/flows/user-settings/user-profile-management"}},d=[{value:"Self-Service User Settings for Browser Applications",id:"self-service-user-settings-for-browser-applications",children:[{value:"The Settings User Interface",id:"the-settings-user-interface",children:[],level:3},{value:"Code",id:"code",children:[{value:"Server-side route",id:"server-side-route",children:[],level:4},{value:"Views",id:"views",children:[],level:4}],level:3},{value:"Server-Side Browser Applications",id:"server-side-browser-applications",children:[{value:"Network Architecture",id:"network-architecture",children:[],level:4},{value:"User Settings Process Sequence",id:"user-settings-process-sequence",children:[],level:4}],level:3},{value:"Client-Side Browser Applications",id:"client-side-browser-applications",children:[],level:3}],level:2},{value:"Self-Service User Settings for API Clients",id:"self-service-user-settings-for-api-clients",children:[],level:2},{value:"Hooks",id:"hooks",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,s.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ORY Kratos allows users to update their own settings and profile information\nusing two principal flows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Browser-based (easy): This flow works for all applications running on top of a\nbrowser. Websites, single-page apps, Cordova/Ionic, and so on."),(0,r.kt)("li",{parentName:"ul"},"API-based (advanced): This flow works for native applications like iOS\n(Swift), Android (Java), Microsoft (.NET), React Native, Electron, and others.")),(0,r.kt)("p",null,"The flow described here is implemented by the\n",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/v0.3/self-service/flows/user-settings/user-profile-management"},"profile"),",\n",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/v0.3/self-service/flows/user-login-user-registration/username-email-password"},"password"),", and\n",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/v0.3/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2"},"oidc"),". strategy."),(0,r.kt)("h2",{id:"self-service-user-settings-for-browser-applications"},"Self-Service User Settings for Browser Applications"),(0,r.kt)("p",null,"ORY Kratos supports browser applications that run on server-side (e.g. Java,\nNodeJS, PHP) as well as client-side (e.g. JQuery, ReactJS, AngularJS, ...)."),(0,r.kt)("p",null,"Browser-based user settings management makes use of three core HTTP\ntechnologies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HTTP Redirects"),(0,r.kt)("li",{parentName:"ul"},"HTTP POST (",(0,r.kt)("inlineCode",{parentName:"li"},"application/json"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"application/x-www-urlencoded"),") and RESTful GET\nrequests."),(0,r.kt)("li",{parentName:"ul"},"HTTP Cookies to prevent CSRF and Session Hijaking attack vectors.")),(0,r.kt)("p",null,"The browser flow is the easiest and most secure to set up and integrated with.\nORY Kratos takes care of all required session and CSRF cookies and ensures that\nall security requirements are fulfilled."),(0,r.kt)("p",null,"This flow is not suitable for scenarios where you use purely programmatic\nclients that do not work well with HTTP Cookies and HTTP Redirects."),(0,r.kt)("h3",{id:"the-settings-user-interface"},"The Settings User Interface"),(0,r.kt)("p",null,"The Settings User Interface is a route (page / site) in your application that\nshould render a sign in and registration form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Profile management --\x3e\n<form action="..." method="POST">\n  <input type="hidden" name="csrf_token" value="cdef..." />\n  <input type="string" name="first_name" />\n  <input type="string" name="last_name" />\n  <input type="string" name="address" />\n  <input type="..." name="..." />\n  <input type="submit" />\n</form>\n\n\x3c!-- Password management --\x3e\n<form action="..." method="POST">\n  <input type="hidden" name="csrf_token" value="cdef..." />\n  <input\n    type="password"\n    name="password"\n    placeholder="Enter your new password here"\n  />\n</form>\n\n\x3c!-- Social Sign in  management --\x3e\n<form action="..." method="POST">\n  <input type="hidden" name="csrf_token" value="cdef..." />\n  \x3c!-- ... --\x3e\n</form>\n')),(0,r.kt)("p",null,"Reference these UI endpoints your ORY Kratos config file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml"',title:'"path/to/kratos/config.yml"'},"urls:\n  settings_ui: https://.../settings\n")),(0,r.kt)("p",null,"In stark contrast to other Identity Systems, ORY Kratos does not render this\nHTML. Instead, you need to implement the HTML code in your application (e.g.\nNodeJS + ExpressJS, Java, PHP, ReactJS, ...), which gives you extreme\nflexibility and customizability in your user interface flows and designs."),(0,r.kt)("p",null,"Each Settings Strategy (",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/v0.3/self-service/flows/user-settings/user-profile-management"},"Profile"),",\n",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/v0.3/self-service/flows/user-login-user-registration/username-email-password"},"Username and Password"),",\n",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/v0.3/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2"},"Social Sign In"),",\nPasswordless, ...) works a bit different but they all boil down to the same\nabstract sequence:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gIHBhcnRpY2lwYW50IEIgYXMgQnJvd3NlclxuICBwYXJ0aWNpcGFudCBLIGFzIE9SWSBLcmF0b3NcbiAgcGFydGljaXBhbnQgQSBhcyBZb3VyIEFwcGxpY2F0aW9uXG5cblxuICBCLT4-SzogSW5pdGlhdGUgTG9naW5cbiAgSy0-PkI6IFJlZGlyZWN0cyB0byB5b3VyIEFwcGxpY2F0aW9uJ3MgL3NldHRpbmdzX3VpIGVuZHBvaW50XG4gIEItPj5BOiBDYWxscyAvc2V0dGluZ3NfdWlcbiAgQS0tPj5LOiBGZXRjaGVzIGRhdGEgdG8gcmVuZGVyIGZvcm1zIGV0Y1xuICBCLS0-PkE6IEZpbGxzIG91dCBmb3JtcywgY2xpY2tzIGUuZy4gXCJTYXZlIENoYW5nZXNcIlxuICBCLT4-SzogUE9TVHMgZGF0YSB0b1xuICBLLS0-Pks6IFByb2Nlc3NlcyBTZXR0aW5ncyBJbmZvXG5cbiAgYWx0IFNldHRpbmdzIGRhdGEgdmFsaWRcbiAgICBLLS0-PkI6IFVwZGF0ZXMgSWRlbnRpdHkgU2V0dGluZ3NcbiAgICBLLT4-QjogUmVkaXJlY3RzIHRvIGUuZy4gRGFzaGJvYXJkXG4gIGVsc2UgU2V0aW5ncyBkYXRhIGludmFsaWRcbiAgICBLLS0-PkI6IFJlZGlyZWN0cyB0byB5b3VyIEFwcGxpY2FpdG9uJ3MgL3NldHRpbmdzX3VpIGVuZHBvaW50XG4gICAgQi0-PkE6IENhbGxzIC9zZXR0aW5nc191aVxuICAgIEEtLT4-SzogRmV0Y2hlcyBkYXRhIHRvIHJlbmRlciBmb3JtIGZpZWxkcyBhbmQgZXJyb3JzXG4gICAgQi0tPj5BOiBGaWxscyBvdXQgZm9ybXMgYWdhaW4sIGNvcnJlY3RzIGVycm9yc1xuICAgIEItPj5LOiBQT1NUcyBkYXRhIGFnYWluIC0gYW5kIHNvIG9uLi4uXG4gIGVuZFxuIiwibWVybWFpZCI6eyJ0aGVtZSI6Im5ldXRyYWwiLCJzZXF1ZW5jZURpYWdyYW0iOnsiZGlhZ3JhbU1hcmdpblgiOjE1LCJkaWFncmFtTWFyZ2luWSI6MTUsImJveFRleHRNYXJnaW4iOjAsIm5vdGVNYXJnaW4iOjE1LCJtZXNzYWdlTWFyZ2luIjo0NSwibWlycm9yQWN0b3JzIjp0cnVlfX0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9"},(0,r.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gIHBhcnRpY2lwYW50IEIgYXMgQnJvd3NlclxuICBwYXJ0aWNpcGFudCBLIGFzIE9SWSBLcmF0b3NcbiAgcGFydGljaXBhbnQgQSBhcyBZb3VyIEFwcGxpY2F0aW9uXG5cblxuICBCLT4-SzogSW5pdGlhdGUgTG9naW5cbiAgSy0-PkI6IFJlZGlyZWN0cyB0byB5b3VyIEFwcGxpY2F0aW9uJ3MgL3NldHRpbmdzX3VpIGVuZHBvaW50XG4gIEItPj5BOiBDYWxscyAvc2V0dGluZ3NfdWlcbiAgQS0tPj5LOiBGZXRjaGVzIGRhdGEgdG8gcmVuZGVyIGZvcm1zIGV0Y1xuICBCLS0-PkE6IEZpbGxzIG91dCBmb3JtcywgY2xpY2tzIGUuZy4gXCJTYXZlIENoYW5nZXNcIlxuICBCLT4-SzogUE9TVHMgZGF0YSB0b1xuICBLLS0-Pks6IFByb2Nlc3NlcyBTZXR0aW5ncyBJbmZvXG5cbiAgYWx0IFNldHRpbmdzIGRhdGEgdmFsaWRcbiAgICBLLS0-PkI6IFVwZGF0ZXMgSWRlbnRpdHkgU2V0dGluZ3NcbiAgICBLLT4-QjogUmVkaXJlY3RzIHRvIGUuZy4gRGFzaGJvYXJkXG4gIGVsc2UgU2V0aW5ncyBkYXRhIGludmFsaWRcbiAgICBLLS0-PkI6IFJlZGlyZWN0cyB0byB5b3VyIEFwcGxpY2FpdG9uJ3MgL3NldHRpbmdzX3VpIGVuZHBvaW50XG4gICAgQi0-PkE6IENhbGxzIC9zZXR0aW5nc191aVxuICAgIEEtLT4-SzogRmV0Y2hlcyBkYXRhIHRvIHJlbmRlciBmb3JtIGZpZWxkcyBhbmQgZXJyb3JzXG4gICAgQi0tPj5BOiBGaWxscyBvdXQgZm9ybXMgYWdhaW4sIGNvcnJlY3RzIGVycm9yc1xuICAgIEItPj5LOiBQT1NUcyBkYXRhIGFnYWluIC0gYW5kIHNvIG9uLi4uXG4gIGVuZFxuIiwibWVybWFpZCI6eyJ0aGVtZSI6Im5ldXRyYWwiLCJzZXF1ZW5jZURpYWdyYW0iOnsiZGlhZ3JhbU1hcmdpblgiOjE1LCJkaWFncmFtTWFyZ2luWSI6MTUsImJveFRleHRNYXJnaW4iOjAsIm5vdGVNYXJnaW4iOjE1LCJtZXNzYWdlTWFyZ2luIjo0NSwibWlycm9yQWN0b3JzIjp0cnVlfX0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",alt:"Abstract Settings Flow"}))),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("p",null,"The code example used here is universal and does not use an SDK because we want\nyou to understand the fundamentals of how this flow works."),(0,r.kt)("p",null,"While this example assumes a Server-Side Application, a Client-Side (e.g.\nReactJS) Application would work the same, but use ORY Kratos' Public API\ninstead."),(0,r.kt)("h4",{id:"server-side-route"},"Server-side route"),(0,r.kt)("p",null,"You will notice that this endpoint is very similar to the one documented for\n",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/v0.3/self-service/flows/user-settings"},"User Login and Registration"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Uses the ORY Kratos NodeJS SDK - for more SDKs check:\n//\n//  https://www.ory.sh/kratos/docs/sdk/index\nconst { CommonApi } = require('@oryd/kratos-client');\n\n// The browser config key is used to redirect the user. It reflects where ORY Kratos' Public API\n// is accessible from. Here, we're assuming traffic going to `http://example.org/.ory/kratos/public/`\n// will be forwarded to ORY Kratos' Public API.\nconst kratosBrowserUrl = 'http://example.org/.ory/kratos/public/';\n\n// Initializes the SDK with ORY Kratos' Admin API.\nconst commonApi = new CommonApi('https://ory-kratos-admin.example-org.vpc/');\n\n// This route would be used like:\n//\n//    app.get('/user/settings', authHandler('registration'))\n//\nexport const settingsHandler = (req, res, next) => {\n  // The request ID is used to identify the login and registraion request and\n  // return data like the csrf_token and so on.\n  const request = req.query.request;\n  if (!request) {\n    console.log('No request found in URL, initializing flow.');\n    res.redirect(`${kratosBrowserUrl}/self-service/browser/flows/settings`);\n    return;\n  }\n\n  commonApi\n    .getSelfServiceBrowserSettingsRequest(request)\n    .then(({ body, response }) => {\n      if (response.statusCode !== 200) {\n        res.redirect(`${kratosBrowserUrl}/self-service/browser/flows/settings`);\n        return;\n      }\n\n      // \"body\" contains all the request data for this Registration request.\n      // You can process that data here, if you want.\n\n      // Lastly, you probably want to render the data using a view (e.g. Jade Template):\n      res.render('settings', body);\n    });\n  // Handle errors using ExpressJS' next functionality:\n  //\n  //    .catch(next)\n};\n")),(0,r.kt)("h4",{id:"views"},"Views"),(0,r.kt)("p",null,"Implementing the view is simple as ORY Kratos provides you with all the\ninformation you need for rendering the forms. The following example illustrates\na generic form generator (we use handlebars here) that works with ORY Kratos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-handlebars",metastring:'name="views/partials/form.hbs"',name:'"views/partials/form.hbs"'},'<form action="{{form.action}}" method="{{form.method}}">\n    {{~#each form.errors~}}\n        \x3c!-- global form validation errors --\x3e\n        <div class="error">{{message}}</div>\n    {{~/each~}}\n\n    {{#each form.fields}}\n        {{~#each errors~}}\n            \x3c!-- validation errors for this specific field --\x3e\n            <div class="error">{{message}}</div>\n        {{~/each~}}\n        <input name="{{name}}" type="{{type}}" value="{{value}}" {{#if disabled}}disabled{{/if}}>\n    {{/each}}\n\n    <button type="submit">Save</button>\n</form>\n')),(0,r.kt)("p",null,'In your main "Settings" view you would then consume this template for all the\nmethods you want to support:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-handlebars",metastring:'name="views/login_or_signup.hbs"',name:'"views/login_or_signup.hbs"'},"\x3c!-- Make profile changes form: --\x3e\n{{#if methods.profile.config}}\n    {{> form form=methods.profile.config}}\n{{/if}}\n\n\x3c!-- Change passowrd form: --\x3e\n{{#if methods.password.config}}\n    {{> form form=methods.password.config}}\n{{/if}}\n\n\x3c!-- ... form: --\x3e\n\x3c!-- ... --\x3e\n")),(0,r.kt)("p",null,"For details on payloads and potential HTML snippets consult the individual\nSelf-Service Strategies for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/kratos/docs/v0.3/self-service/flows/user-login-user-registration/username-email-password"},"Username and Password Strategy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/kratos/docs/v0.3/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2"},"Social Sign In Strategy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/kratos/docs/v0.3/self-service/flows/user-settings/user-profile-management"},"Profile"))),(0,r.kt)("h3",{id:"server-side-browser-applications"},"Server-Side Browser Applications"),(0,r.kt)("p",null,"Let's take a look at the concrete network topologies, calls, and payloads. Here,\nwe're assuming that you're running a server-side browser application (written in\ne.g. PHP, Java, NodeJS) to render the settings screen on the server and make all\nAPI calls from that server code. The counterpart to this would be a client-side\nbrowser application (written in e.g. Vanilla JavaScript, JQuery, ReactJS,\nAngularJS, ...) that uses AJAX requests to fetch data. For these type of\napplications, read this section first and go to section\n",(0,r.kt)("a",{parentName:"p",href:"#client-side-browser-applications"},"Client-Side Browser Applications")," next."),(0,r.kt)("h4",{id:"network-architecture"},"Network Architecture"),(0,r.kt)("p",null,"We recommend checking out the\n",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/v0.3/quickstart#network-architecture"},"Quickstart Network Architecture")," for\na high-level, exemplary, overview of the network. In summary:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The SecureApp (your application) is exposed at ",(0,r.kt)("a",{parentName:"li",href:"http://127.0.0.1:4455"},"http://127.0.0.1:4455")," and\nproxies requests matching path ",(0,r.kt)("inlineCode",{parentName:"li"},"./ory/kratos/public/*")," to ORY Krato's Public\nAPI Port."),(0,r.kt)("li",{parentName:"ol"},"ORY Kratos exposes (for debugging only!!) the Public API at\n",(0,r.kt)("a",{parentName:"li",href:"http://127.0.0.1:4433"},"http://127.0.0.1:4433")," and Admin API at ",(0,r.kt)("a",{parentName:"li",href:"http://127.0.0.1:4434"},"http://127.0.0.1:4434"),"."),(0,r.kt)("li",{parentName:"ol"},'Within the "intranet" or "private network", ORY Kratos is exposed at\nhttp://kratos:4433 and http://kratos:4434. These URLs are be used by the\nSecureApp to communicate with ORY Kratos.')),(0,r.kt)("p",null,"Keep in mind that his architecture is just one of many possible network\narchitectures. It is however one of the simplest as well and it works locally.\nFor production deployments you would probably use an Reverse Proxy such as\nNginx, Kong, Envoy, ORY Oathkeeper, or others."),(0,r.kt)("h4",{id:"user-settings-process-sequence"},"User Settings Process Sequence"),(0,r.kt)("p",null,"The User Settings Flow is composed of several high-level steps summarized in\nthis state diagram:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic3RhdGVEaWFncmFtXG4gIHMxOiBVc2VyIGJyb3dzZXMgYXBwXG4gIHMzOiBVc2VyIEludGVyZmFjZSBBcHBsaWNhdGlvbiByZW5kZXJzIFwiU2V0dGluZ3MgUmVxdWVzdFwiXG4gIHM0OiBFeGVjdXRlIFwiQWZ0ZXIgU2V0dGluZ3MgSG9vayhzKVwiXG4gIHM1OiBVcGRhdGUgXCJTZXR0aW5ncyBSZXF1ZXN0XCIgd2l0aCBFcnJvciBDb250ZXh0KHMpXG4gIHM2OiBTZXR0aW5ncyB1cGRhdGUgc3VjY2Vzc2Z1bFxuXG5cdFsqXSAtLT4gczFcbiAgczEgLS0-IHMzIDogVXNlciBjbGlja3MgXCJNYW5hZ2UgQWNjb3VudFwiIGFuZCBpcyByZWRpcmVjdGVkIHRvIFNldHRpbmdzIEluaXQgRW5kcG9pbnRcbiAgczMgLS0-IHM0IDogVXNlciBwcm92aWRlcyB2YWxpZCBwcm9maWxlIGRhdGFcbiAgczMgLS0-IHM1IDogVXNlciBwcm92aWRlcyBpbnZhbGlkIHByb2ZpbGUgZGF0YVxuICBzNSAtLT4gczMgOiBVc2VyIGlzIHJlZGlyZWN0ZWQgdG8gU2V0dGluZ3MgVUkgVVJMXG4gIHM0IC0tPiBFcnJvciA6IEEgSG9vayBmYWlsc1xuICBzNCAtLT4gczZcbiAgczYgLS0-IFsqXVxuXG4gIEVycm9yIC0tPiBbKl1cblxuXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ"},(0,r.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/eyJjb2RlIjoic3RhdGVEaWFncmFtXG4gIHMxOiBVc2VyIGJyb3dzZXMgYXBwXG4gIHMzOiBVc2VyIEludGVyZmFjZSBBcHBsaWNhdGlvbiByZW5kZXJzIFwiU2V0dGluZ3MgUmVxdWVzdFwiXG4gIHM0OiBFeGVjdXRlIFwiQWZ0ZXIgU2V0dGluZ3MgSG9vayhzKVwiXG4gIHM1OiBVcGRhdGUgXCJTZXR0aW5ncyBSZXF1ZXN0XCIgd2l0aCBFcnJvciBDb250ZXh0KHMpXG4gIHM2OiBTZXR0aW5ncyB1cGRhdGUgc3VjY2Vzc2Z1bFxuXG5cdFsqXSAtLT4gczFcbiAgczEgLS0-IHMzIDogVXNlciBjbGlja3MgXCJNYW5hZ2UgQWNjb3VudFwiIGFuZCBpcyByZWRpcmVjdGVkIHRvIFNldHRpbmdzIEluaXQgRW5kcG9pbnRcbiAgczMgLS0-IHM0IDogVXNlciBwcm92aWRlcyB2YWxpZCBwcm9maWxlIGRhdGFcbiAgczMgLS0-IHM1IDogVXNlciBwcm92aWRlcyBpbnZhbGlkIHByb2ZpbGUgZGF0YVxuICBzNSAtLT4gczMgOiBVc2VyIGlzIHJlZGlyZWN0ZWQgdG8gU2V0dGluZ3MgVUkgVVJMXG4gIHM0IC0tPiBFcnJvciA6IEEgSG9vayBmYWlsc1xuICBzNCAtLT4gczZcbiAgczYgLS0-IFsqXVxuXG4gIEVycm9yIC0tPiBbKl1cblxuXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ",alt:"User Settings State Machine"}))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The flow is initiated by directing the user's browser to\n",(0,r.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/settings"),"."),(0,r.kt)("li",{parentName:"ol"},"ORY Kratos does some internal processing (e.g. checks if a session cookie is\nset, generates payloads for form fields, sets CSRF token, ...) and redirects\nthe user's browser to the Settings UI URL which is defined using the\n",(0,r.kt)("inlineCode",{parentName:"li"},"urls.settings_ui")," config or ",(0,r.kt)("inlineCode",{parentName:"li"},"URLS_SETTINGS_UI")," environment variable, which\nis set to the ui endpoints - for example ",(0,r.kt)("inlineCode",{parentName:"li"},"https://127.0.0.1:4455/settings"),".\nThe user's browser is thus redirected to\n",(0,r.kt)("inlineCode",{parentName:"li"},"https://127.0.0.1:4455/settings?request=abcde"),". The ",(0,r.kt)("inlineCode",{parentName:"li"},"request")," query\nparameter includes a unique ID which will be used to fetch contextual data\nfor this login request."),(0,r.kt)("li",{parentName:"ol"},"Your Server-Side Application makes a ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," request to\n",(0,r.kt)("inlineCode",{parentName:"li"},"http://kratos:4434/self-service/browser/flows/requests/settings?request=abcde"),".\nORY Kratos responds with a JSON Payload that contains data (form fields,\nerror messages, ...) for all enabled User Profile Strategies:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  id: 'abcde',\n  request_url: '...',\n  methods: {\n    profile: { method: 'profile', config: { action: '...', fields: [] } },\n    password: { method: 'password', config: { action: '...', fields: [] } },\n    oidc: { method: 'oidc', config: { action: '...', fields: [] } },\n  },\n}\n"))),(0,r.kt)("li",{parentName:"ol"},"Your Server-Side applications renders the data however you see fit. The User\ninteracts with it and completes the flow by e.g. updating the password or\nsome other profile data."),(0,r.kt)("li",{parentName:"ol"},"The User's browser makes a request to one of ORY Kratos' Strategy URLs (e.g.\n",(0,r.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/settings/strategies/profile?request=abcde"),"\nor ",(0,r.kt)("inlineCode",{parentName:"li"},"/self-service/browser/flows/settings/strategies/password?request=abcde"),").\nORY Kratos validates the data:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the form data is invalid, the Login Request's JSON Payload is updated -\nfor example with",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  id: 'abcde',\n  methods: {\n    oidc: {\n      method: 'oidc',\n      config: {\n        /* ... */\n      },\n    },\n    password: {\n      method: 'password',\n      config: {\n        /* ... */\n        errors: [\n          {\n            message: 'The provided credentials are invalid. Check for spelling mistakes in your password or username, email address, or phone number.',\n          },\n        ],\n      },\n    },\n  },\n}\n")),"and the user's Browser is redirected back to the Login UI:\n",(0,r.kt)("inlineCode",{parentName:"li"},"https://127.0.0.1:4455/settings_ui?request=abcde"),"."),(0,r.kt)("li",{parentName:"ul"},"If the data is valid but the modifications require proof of identity (e.g.\nbecause the primary email address or the password was changed), a login\nflow is executed. Only after a successful login flow will the changed data\nbe stored!"),(0,r.kt)("li",{parentName:"ul"},"If data is valid, ORY Kratos proceeds with the next step."))),(0,r.kt)("li",{parentName:"ol"},"ORY Kratos executes hooks defined in the ",(0,r.kt)("strong",{parentName:"li"},"After Settings Hooks"),". If a\nfailure occurs, the whole flow is aborted."),(0,r.kt)("li",{parentName:"ol"},"The client receives the expected response. For browsers, this is a HTTP\nRedirection, for API clients it will be a JSON response containing the\nsession and/or identity. For more information on this topic check\n",(0,r.kt)("a",{parentName:"li",href:"/kratos/docs/v0.3/concepts/selfservice-flow-completion"},"Self-Service Flow Completion"),".")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gIHBhcnRpY2lwYW50IEIgYXMgQnJvd3NlclxuICBwYXJ0aWNpcGFudCBBIGFzIFlvdXIgU2VydmVyLVNpZGUgQXBwbGljYXRpb25cbiAgcGFydGljaXBhbnQgS1AgYXMgT1JZIEtyYXRvcyBQdWJsaWMgQVBJXG4gIHBhcnRpY2lwYW50IEtBIGFzIE9SWSBLcmF0b3MgQWRtaW4gQVBJXG5cbiAgQi0-PitBOiBHRVQgLy5vcnkva3JhdG9zL3B1YmxpYy9zZWxmLXNlcnZpY2UvYnJvd3Nlci9mbG93cy9zZXR0aW5nc1xuICBBLT4-K0tQOiBHRVQgL3NlbGYtc2VydmljZS9icm93c2VyL2Zsb3dzL3NldHRpbmdzXG4gIEtQLS0-Pi1BOiBIVFRQIDMwMiBGb3VuZCAvc2V0dGluZ3M_cmVxdWVzdD1hYmNkZVxuICBBLS0-Pi1COiBIVFRQIDMwMiBGb3VuZCAvc2V0dGluZ3M_cmVxdWVzdD1hYmNkZVxuXG4gIEItPj4rQTogR0VUIC9zZXR0aW5ncz9yZXF1ZXN0PWFiY2RlXG4gIEEtPj4rS0E6IEdFVCAvc2VsZi1zZXJ2aWNlL2Jyb3dzZXIvZmxvd3MvcmVxdWVzdHMvc2V0dGluZ3M_cmVxdWVzdD1hYmNkZVxuICBLQS0-Pi1BOiBTZW5kcyBTZXR0aW5ncyBSZXF1ZXN0IEpTT04gUGF5bG9hZFxuICBOb3RlIG92ZXIgQSxLQTogIHtcIm1ldGhvZHNcIjp7XCJwYXNzd29yZFwiOi4uLixcIm9pZGNcIjouLn19XG4gIEEtLT4-QTogR2VuZXJhdGUgYW5kIHJlbmRlciBIVE1MXG4gIEEtLT4-LUI6IFJldHVybiBIVE1MIChGb3JtLCAuLi4pXG5cbiAgQi0tPj5COiBGaWxsIG91dCBIVE1MXG5cbiAgQi0-PitLUDogUE9TVCBIVE1MIEZvcm1cbiAgS1AtLT4-S1A6IENoZWNrcyBwcm9maWxlIGRhdGFcblxuXG4gIGFsdCBTZXR0aW5nIHVwZGF0ZXMgYXJlIHZhbGlkXG4gICAgS1AtLT4-LUtQOiBFeGVjdXRlIEpvYnMgZGVmaW5lZCBpbiBcIkFmdGVyIFNldHRpbmdzIFdvcmtmbG93KHMpXCJcbiAgICBLUC0tPj5BOiBIVFRQIDMwMiBGb3VuZCAvZGFzaGJvYXJkXG4gIGVsc2UgU2V0dGluZyB1cGRhdGVzIHJlcXVpcmUgcmUtYXV0aGVudGljYXRpb25cbiAgICBOb3RlIG92ZXIgS1AsQjogVXNlciBpcyBhc2tlZCB0byBsb2dpbiBpbiBhZ2Fpbi4gSWYgdGhlIGxvZ2luIGlzIHZhbGlkLCB0aGUgZGF0YSBpcyB1cGRhdGVkLlxuICAgIEtQLS0-PkI6IEhUVFAgMzAyIEZvdW5kIC9zZXR0aW5ncz9yZXF1ZXN0PWFiY2RlXG4gIGVsc2UgU2V0dGluZyB1cGRhdGVzIGFyZSBpbnZhbGlkXG4gICAgTm90ZSBvdmVyIEtQLEI6IFVzZXIgcmV0cmllcyBzZXR0aW5ncyBmbG93XG4gICAgS1AtLT4-QjogSFRUUCAzMDIgRm91bmQgL3NldHRpbmdzP3JlcXVlc3Q9YWJjZGVcbiAgZW5kXG4gICIsIm1lcm1haWQiOnsidGhlbWUiOiJuZXV0cmFsIiwic2VxdWVuY2VEaWFncmFtIjp7ImRpYWdyYW1NYXJnaW5YIjoxNSwiZGlhZ3JhbU1hcmdpblkiOjE1LCJib3hUZXh0TWFyZ2luIjoxLCJub3RlTWFyZ2luIjoxMCwibWVzc2FnZU1hcmdpbiI6NTUsIm1pcnJvckFjdG9ycyI6dHJ1ZX19LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ"},(0,r.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gIHBhcnRpY2lwYW50IEIgYXMgQnJvd3NlclxuICBwYXJ0aWNpcGFudCBBIGFzIFlvdXIgU2VydmVyLVNpZGUgQXBwbGljYXRpb25cbiAgcGFydGljaXBhbnQgS1AgYXMgT1JZIEtyYXRvcyBQdWJsaWMgQVBJXG4gIHBhcnRpY2lwYW50IEtBIGFzIE9SWSBLcmF0b3MgQWRtaW4gQVBJXG5cbiAgQi0-PitBOiBHRVQgLy5vcnkva3JhdG9zL3B1YmxpYy9zZWxmLXNlcnZpY2UvYnJvd3Nlci9mbG93cy9zZXR0aW5nc1xuICBBLT4-K0tQOiBHRVQgL3NlbGYtc2VydmljZS9icm93c2VyL2Zsb3dzL3NldHRpbmdzXG4gIEtQLS0-Pi1BOiBIVFRQIDMwMiBGb3VuZCAvc2V0dGluZ3M_cmVxdWVzdD1hYmNkZVxuICBBLS0-Pi1COiBIVFRQIDMwMiBGb3VuZCAvc2V0dGluZ3M_cmVxdWVzdD1hYmNkZVxuXG4gIEItPj4rQTogR0VUIC9zZXR0aW5ncz9yZXF1ZXN0PWFiY2RlXG4gIEEtPj4rS0E6IEdFVCAvc2VsZi1zZXJ2aWNlL2Jyb3dzZXIvZmxvd3MvcmVxdWVzdHMvc2V0dGluZ3M_cmVxdWVzdD1hYmNkZVxuICBLQS0-Pi1BOiBTZW5kcyBTZXR0aW5ncyBSZXF1ZXN0IEpTT04gUGF5bG9hZFxuICBOb3RlIG92ZXIgQSxLQTogIHtcIm1ldGhvZHNcIjp7XCJwYXNzd29yZFwiOi4uLixcIm9pZGNcIjouLn19XG4gIEEtLT4-QTogR2VuZXJhdGUgYW5kIHJlbmRlciBIVE1MXG4gIEEtLT4-LUI6IFJldHVybiBIVE1MIChGb3JtLCAuLi4pXG5cbiAgQi0tPj5COiBGaWxsIG91dCBIVE1MXG5cbiAgQi0-PitLUDogUE9TVCBIVE1MIEZvcm1cbiAgS1AtLT4-S1A6IENoZWNrcyBwcm9maWxlIGRhdGFcblxuXG4gIGFsdCBTZXR0aW5nIHVwZGF0ZXMgYXJlIHZhbGlkXG4gICAgS1AtLT4-LUtQOiBFeGVjdXRlIEpvYnMgZGVmaW5lZCBpbiBcIkFmdGVyIFNldHRpbmdzIFdvcmtmbG93KHMpXCJcbiAgICBLUC0tPj5BOiBIVFRQIDMwMiBGb3VuZCAvZGFzaGJvYXJkXG4gIGVsc2UgU2V0dGluZyB1cGRhdGVzIHJlcXVpcmUgcmUtYXV0aGVudGljYXRpb25cbiAgICBOb3RlIG92ZXIgS1AsQjogVXNlciBpcyBhc2tlZCB0byBsb2dpbiBpbiBhZ2Fpbi4gSWYgdGhlIGxvZ2luIGlzIHZhbGlkLCB0aGUgZGF0YSBpcyB1cGRhdGVkLlxuICAgIEtQLS0-PkI6IEhUVFAgMzAyIEZvdW5kIC9zZXR0aW5ncz9yZXF1ZXN0PWFiY2RlXG4gIGVsc2UgU2V0dGluZyB1cGRhdGVzIGFyZSBpbnZhbGlkXG4gICAgTm90ZSBvdmVyIEtQLEI6IFVzZXIgcmV0cmllcyBzZXR0aW5ncyBmbG93XG4gICAgS1AtLT4-QjogSFRUUCAzMDIgRm91bmQgL3NldHRpbmdzP3JlcXVlc3Q9YWJjZGVcbiAgZW5kXG4gICIsIm1lcm1haWQiOnsidGhlbWUiOiJuZXV0cmFsIiwic2VxdWVuY2VEaWFncmFtIjp7ImRpYWdyYW1NYXJnaW5YIjoxNSwiZGlhZ3JhbU1hcmdpblkiOjE1LCJib3hUZXh0TWFyZ2luIjoxLCJub3RlTWFyZ2luIjoxMCwibWVzc2FnZU1hcmdpbiI6NTUsIm1pcnJvckFjdG9ycyI6dHJ1ZX19LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ",alt:"User Settings Sequence Diagram for Server-Side Applications"}))),(0,r.kt)("h3",{id:"client-side-browser-applications"},"Client-Side Browser Applications"),(0,r.kt)("p",null,"Because Client-Side Browser Applications do not have access to ORY Kratos' Admin\nAPI, they must use the ORY Kratos Public API instead. The flow for a Client-Side\nBrowser Application is almost the exact same as the one for Server-Side\nApplications, with the small difference that\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/requests/settings?request=abcde"),"\nwould be called via AJAX instead of making a request to\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://kratos:4434/self-service/browser/flows/requests/settings?request=abcde"),"."),(0,r.kt)("p",null,"To prevent brute force, guessing, session injection, and other attacks, it is\nrequired that cookies are working for this endpoint. The cookie set in the\ninitial HTTP request made to\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://127.0.0.1:4455/.ory/kratos/public/self-service/browser/settings")," MUST\nbe set and available when calling this endpoint!"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The initialization request\n(",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/settings"),")\n",(0,r.kt)("strong",{parentName:"p"},"cannot")," be made via AJAX or API requests. You ",(0,r.kt)("strong",{parentName:"p"},"must")," open that URL in the\nuser's browser using e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"window.open")," ",(0,r.kt)("inlineCode",{parentName:"p"},"location.href")," or plain and simple old\n",(0,r.kt)("inlineCode",{parentName:"p"},"<a href=...>"),"."))),(0,r.kt)("h2",{id:"self-service-user-settings-for-api-clients"},"Self-Service User Settings for API Clients"),(0,r.kt)("p",null,"Will be addressed in a future release."),(0,r.kt)("h2",{id:"hooks"},"Hooks"),(0,r.kt)("p",null,"ORY Kratos allows you to configure hooks that run before and after a profile\nupdate was successful. For more information about hooks please read the\n",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/v0.3/self-service/hooks/index"},"Hook Documentation"),"."))}u.isMDXComponent=!0}}]);