(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[104],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=p(t),u=a,m=h["".concat(s,".").concat(u)]||h[u]||c[u]||i;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7562:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),o=["components"],l={id:"error",title:"Error Handlers"},s=void 0,p={unversionedId:"pipeline/error",id:"version-v0.38/pipeline/error",isDocsHomePage:!1,title:"Error Handlers",description:"A error handler is responsible for executing logic after, for example,",source:"@site/versioned_docs/version-v0.38/pipeline/error.md",sourceDirName:"pipeline",slug:"/pipeline/error",permalink:"/oathkeeper/docs/pipeline/error",editUrl:"https://github.com/ory/oathkeeper/edit/master/docs/versioned_docs/version-v0.38/pipeline/error.md",tags:[],version:"v0.38",lastUpdatedBy:"aeneasr",lastUpdatedAt:1607509379,formattedLastUpdatedAt:"12/9/2020",frontMatter:{id:"error",title:"Error Handlers"},sidebar:"version-v0.38/docs",previous:{title:"Mutators",permalink:"/oathkeeper/docs/pipeline/mutator"},next:{title:"Configure and Deploy",permalink:"/oathkeeper/docs/configure-deploy"}},d=[{value:"Error Matching",id:"error-matching",children:[{value:"Fallback",id:"fallback",children:[]},{value:"Matchers",id:"matchers",children:[]}]},{value:"Error Handlers",id:"error-handlers",children:[{value:"<code>json</code>",id:"json",children:[]},{value:"<code>redirect</code>",id:"redirect",children:[]},{value:"<code>www_authenticate</code>",id:"www_authenticate",children:[]}]}],c={toc:d};function h(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A error handler is responsible for executing logic after, for example,\nauthentication or authorization failed. ORY Oathkeeper supports different error\nhandlers and we will add more as the project progresses."),(0,i.kt)("p",null,"A error handler can be configured to match on certain conditions, for example,\nit is possible to configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," error handler to only be executed if the\nHTTP Header ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept")," contains ",(0,i.kt)("inlineCode",{parentName:"p"},"application/json"),"."),(0,i.kt)("p",null,"Each error handler has two keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"handler")," (string, required): Defines the handler (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"noop"),") to be used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config")," (object, optional): Configures the handler. Configuration keys vary\nper handler. The configuration can be defined in the global configuration\nfile, or per access rule.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "handler": "json",\n      "config": {}\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"You can define more than one error handler in the Access Rule. Depending on\ntheir matching conditions (see next chapter), the appropriate error handler will\nbe chosen."),(0,i.kt)("p",null,"Please be aware that defining error handlers with overlapping matching\nconditions will cause errors, because ORY Oathkeeper will not know which error\nhandler to execute!"),(0,i.kt)("h2",{id:"error-matching"},"Error Matching"),(0,i.kt)("p",null,"You can configure the error handlers in such a way, that - for example - ORY\nOathkeeper responds, in the case of an error, with"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a JSON response, such as\n",(0,i.kt)("inlineCode",{parentName:"li"},'{"error":{"code":403,"status":"Forbidden","message":"Access credentials are not sufficient to access this resource"}}'),",\nwhen the client that expects JSON (",(0,i.kt)("inlineCode",{parentName:"li"},"Accept: application/json"),");"),(0,i.kt)("li",{parentName:"ul"},"an XML response when the API Client expects XML (",(0,i.kt)("inlineCode",{parentName:"li"},"Accept: application/xml"),");"),(0,i.kt)("li",{parentName:"ul"},"a HTTP Redirect (HTTP Status Found - 302) to ",(0,i.kt)("inlineCode",{parentName:"li"},"/login")," when the endpoint is\ndirectly (no AJAX) accessed from a browser\n(",(0,i.kt)("inlineCode",{parentName:"li"},"Accept: text/html,application/xhtml+xml"),").")),(0,i.kt)("p",null,"There are also other possible matching strategies - such as defining a response\nper error type (unauthorized, forbidden, internal_server_error, ...) , per HTTP\n",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type")," Header (similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept"),"), or based on the Remote IP Address."),(0,i.kt)("p",null,"All match definitions are set in the handler's config, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"when")," key.\nThis is the same for all handlers!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  handler: 'json', // or redirect, www_authenticate, ...\n  config: {\n    when: [\n      {\n        error: ['unauthorized', '...', '...']\n      }\n    ]\n  }\n}\n")),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"when")," is empty, then no conditions are applied and the error handler is\nalways matching! In fact, this is also true for all subkeys. If left empty, the\nmatching condition will not be applied and is thus always true!"),(0,i.kt)("h3",{id:"fallback"},"Fallback"),(0,i.kt)("p",null,"Error handling can be set globally and per access rule. ORY Oathkeeper will\nfirst check for any access rule specific error handling before falling back to\nthe globally defined error handling."),(0,i.kt)("p",null,"Similar to other pipeline handlers (authentication, authorization, mutation),\nyou must enable the error handlers in the global ORY Oathkeeper config, except\nfor the ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," error handler which is always enabled by default:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# .oathkeeper.yaml\nerrors:\n  handlers:\n    json:\n      enabled: true # this is true by default\n      # config:\n      #   when: ...\n    redirect:\n      enabled: true # this is false by default\n      # config:\n      #   when: ...\n")),(0,i.kt)("p",null,"As discussed in the previous section, when ",(0,i.kt)("inlineCode",{parentName:"p"},"config.when")," is empty, the error\nhandler will always match. This of course is a problem because ORY Oathkeeper\nnow does not know if it should redirect or send a JSON error!"),(0,i.kt)("p",null,"Therefore, an additional configuration - called ",(0,i.kt)("inlineCode",{parentName:"p"},"fallback")," - is available:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# .oathkeeper.yaml\nerrors:\n  # `["json"]` is the default!\n  fallback:\n    - json\n\n  handlers:\n    json:\n      enabled: true # this is true by default\n      # config:\n      #   when: ...\n    redirect:\n      enabled: true # this is false by default\n      config:\n        to: http://mywebsite/login\n      # when: ...\n')),(0,i.kt)("p",null,"This feature tells ORY Oathkeeper that the ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," error handler should be used\nas fallback. You could also define multiple fallback handlers - the first\nmatching handler will be the one and only executed! This makes sense if you\nadditionally configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"when")," section:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# .oathkeeper.yaml\nerrors:\n  fallback:\n    - redirect\n    - json\n\n  handlers:\n    json:\n      enabled: true\n    redirect:\n      enabled: true\n      config:\n        when:\n          - request:\n              header:\n                accept:\n                  - text/*\n")),(0,i.kt)("p",null,"In this configuration example, ORY Oathkeeper would first check if the HTTP\nRequest Header contains ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept: text/html")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"text/xhtml"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"text/text"),", ...)\nand if not, would return a JSON Error Message."),(0,i.kt)("h3",{id:"matchers"},"Matchers"),(0,i.kt)("p",null,"All matchers are defined under the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.when")," key of the error handler, both\nin the global config and in the access rule:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},"// access-rule.json\n{\n  handler: 'json',\n  config: {\n    when: [\n      {\n        error: ['unauthorized', '...', '...']\n      }\n    ]\n  }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# .oathkeeper.yaml\nerrors:\n  handlers:\n    redirect:\n      enabled: true\n      config:\n        when:\n          - error:\n              - unauthorized\n              - ...\n              - ...\n")),(0,i.kt)("p",null,"You can define multiple when clauses which allows you to differentiate between\nerror types and HTTP Requests. The when sections are combined with ",(0,i.kt)("inlineCode",{parentName:"p"},"OR")," while\nthe subkeys (",(0,i.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"request.header.accept"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"request.header.content_type"),",\n...) are matched with ",(0,i.kt)("inlineCode",{parentName:"p"},"AND"),". Keys that have arrays as values (",(0,i.kt)("inlineCode",{parentName:"p"},"error"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"request.header.accept"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"request.header.content_type"),", ...) are usually matched\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},"OR"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# .oathkeeper.yaml\nerrors:\n  handlers:\n    redirect:\n      enabled: true\n      config:\n        when:\n          - error:\n              - unauthorized\n              # OR\n              - internal_server_error\n\n            # AND\n            request:\n              remote_ip:\n                match:\n                  - 192.168.1.0/24\n                  # OR\n                  - 192.178.1.0/24\n\n          # OR\n          - error:\n              - forbidden\n              # OR\n              - not_found\n\n            # AND\n            request:\n              header:\n                accept:\n                  - text/html\n                  # OR\n                  - text/xhtml\n\n                # AND\n                content_type:\n                  - application/x-www-form-urlencoded\n                  # OR\n                  - multipart/form-data\n")),(0,i.kt)("h4",{id:"error"},"Error"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"config.when.#.error")," key may contain zero, one, or multiple error names\nthat must match for this matching condition to be true. The error names are\nderived (lowercase and whitespaces replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"_"),") from the well-defined\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"},"HTTP Status")," messages\nsuch as ",(0,i.kt)("inlineCode",{parentName:"p"},"Not Found"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Forbidden"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Internal Server Error"),", and so on."),(0,i.kt)("p",null,"Here are some examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Internal Server Error")," (500) -> ",(0,i.kt)("inlineCode",{parentName:"li"},'{"errors": ["internal_server_error"]}')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Forbidden")," (403) -> ",(0,i.kt)("inlineCode",{parentName:"li"},'{"errors": ["forbidden"]}')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Not Found")," (404) -> ",(0,i.kt)("inlineCode",{parentName:"li"},'{"errors": ["not_found"]}')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Bad Request")," (400) -> ",(0,i.kt)("inlineCode",{parentName:"li"},'{"errors": ["bad_request"]}'))),(0,i.kt)("p",null,"Keep in mind that these errors must be emitted by ORY Oathkeeper itself, not by\nthe upstream API. Therefore, most HTTP Status Codes will not have any effect\nbecause ORY Oathkeeper - as of now - mostly returns 401, 403, 500 error codes."),(0,i.kt)("p",null,"As discussed previously, if this configuration key is left empty, then all error\ntypes will match!"),(0,i.kt)("h4",{id:"http-request-remote-ip"},"HTTP Request: Remote IP"),(0,i.kt)("p",null,"The HTTP Remote IP is the IP of the Client that initially made the request. The\nRemote Address is matched using\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing"},"CIDR Notation"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"config:\n  when:\n    - request:\n        remote_ip:\n          match:\n            - 192.168.1.0/24\n")),(0,i.kt)("p",null,"This configuration would match a HTTP Request coming directly from\n",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.1.1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.1.2"),", and so on."),(0,i.kt)("p",null,"If ORY Oathkeeper runs behind a Load Balancer or any other type of Reverse\nProxy, you can configure ORY Oathkeeper to check the\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For"},(0,i.kt)("inlineCode",{parentName:"a"},"X-Forwarded-For")," HTTP Header"),"\nheader as well:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"config:\n  when:\n    - request:\n        remote_ip:\n          respect_forwarded_for_header: true # defaults to false\n          match:\n            - 192.168.1.0/24\n")),(0,i.kt)("p",null,"As discussed previously, if this configuration key is left empty, then all\nremote IPs will match!"),(0,i.kt)("p",null,"HTTP Requests that include one of the matching IP Addresses in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"X-Forwarded-For")," HTTP Header, for example\n",(0,i.kt)("inlineCode",{parentName:"p"},"X-Forwarded-For: 123.123.123.123, ..., 192.168.1.1, ..."),", now match this error\nhandler."),(0,i.kt)("h4",{id:"http-request-header-accept"},"HTTP Request Header: Accept"),(0,i.kt)("p",null,"The HTTP ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept")," Header is the most common way to tell an HTTP API what MIME\ncontent type is expected. For example, FireFox sends\n",(0,i.kt)("inlineCode",{parentName:"p"},"Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")," for\nall regular requests (e.g. when opening ",(0,i.kt)("a",{parentName:"p",href:"https://www.ory.sh/"},"www.ory.sh"),"). And\na REST API Client usually sends ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept: application/json"),"."),(0,i.kt)("p",null,"Therefore, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept"),' header is one of the most common ways to\ndistinguish between "regular" browser traffic, REST API traffic, and other types\nof HTTP traffic.'),(0,i.kt)("p",null,"In ORY Oathkeeper, you can specify the matching conditions for the Accept header\nas follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"config:\n  when:\n    - request:\n        header:\n          accept:\n            - text/html\n            - text/*\n")),(0,i.kt)("p",null,"The defined matching condition would apply if a client sends one of the\nfollowing ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept")," headers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Accept: text/html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Accept: text/xhtml")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Accept: text/xhtml+xml")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Accept: text/...")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Accept: text/*"))),(0,i.kt)("p",null,"Most browsers (see the FireFox example) also send wildcard ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept")," headers such\nas ",(0,i.kt)("inlineCode",{parentName:"p"},"*/*"),". To prevent multiple conditions to match, HTTP Accept Headers from the\nclient are interpreted literally, meaning that wildcards are not interpreted."),(0,i.kt)("p",null,"Assuming the client sends ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept: */*")," and the error condition is set to\n",(0,i.kt)("inlineCode",{parentName:"p"},'accept: ["text/text"]'),", the error condition would not match. If however the\nclient sends ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept: text/text")," and the error condition is set to\n",(0,i.kt)("inlineCode",{parentName:"p"},'accept: ["*/*"]'),", then the condition would match."),(0,i.kt)("p",null,"To match against wildcards in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept")," header, you have to explicitly define\nthem in the error condition. Setting the configuration to ",(0,i.kt)("inlineCode",{parentName:"p"},'accept: ["*/*"]')," will\nmatch ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept: */*")," and of course any other type such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept: text/*"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Accept: text/html"),", and so on."),(0,i.kt)("p",null,"As discussed previously, if this configuration key is left empty, then all\n",(0,i.kt)("inlineCode",{parentName:"p"},"Accept")," headers will match!"),(0,i.kt)("h4",{id:"http-request-header-content-type"},"HTTP Request Header: Content-Type"),(0,i.kt)("p",null,"The\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type"},"HTTP Content Type"),"\nmatcher works similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept")," header. The HTTP Content Type Header\nhowever is much less common, as it is only used in POST, PUT, PATCH requests (or\nany other requests that send a HTTP Body)."),(0,i.kt)("p",null,"The main difference however is that the client never (unless it sends malformed\ndata) sends wildcard MIME types, as the MIME type needs to be deterministic.\nIt's typically something like ",(0,i.kt)("inlineCode",{parentName:"p"},"multipart/form-data"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"application/json"),"."),(0,i.kt)("p",null,"In ORY Oathkeeper, you can specify the matching conditions for the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type")," header as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"config:\n  when:\n    - request:\n        header:\n          content_type:\n            - multipart/form-data\n            # OR\n            - application/x-www-form-urlencoded\n            # OR\n            - application/json\n")),(0,i.kt)("p",null,"As discussed previously, if this configuration key is left empty, then all\n",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type")," headers will match!"),(0,i.kt)("h2",{id:"error-handlers"},"Error Handlers"),(0,i.kt)("h3",{id:"json"},(0,i.kt)("inlineCode",{parentName:"h3"},"json")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," Error Handler returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"application/json")," response type. Per\ndefault, error messages are stripped of their details to reduce OSINT attack\nsurface. You can enable more detailed error messages by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"verbose")," to\n",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". As discussed in the previous section, you can define error matching\nconditions under the ",(0,i.kt)("inlineCode",{parentName:"p"},"when")," key."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},"// access-rule.json\n{\n  handler: 'json',\n  config: {\n    verbose: true, // defaults to false\n    when: [\n      // ...\n    ]\n  }\n}\n")),(0,i.kt)("h3",{id:"redirect"},(0,i.kt)("inlineCode",{parentName:"h3"},"redirect")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect")," Error Handler returns a HTTP 302/301 response with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Location"),"\nHeader. As discussed in the previous section, you can define error matching\nconditions under the ",(0,i.kt)("inlineCode",{parentName:"p"},"when")," key."),(0,i.kt)("p",null,"If you want to append the current url (where the error happened) to address\nredirected to, You can specify ",(0,i.kt)("inlineCode",{parentName:"p"},"return_to_query_param")," to set the name of\nparameter that will hold the url."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},"// access-rule.json\n{\n  handler: 'json',\n  config: {\n    to: 'http://my-website/login', // required!!\n    return_to_query_param: 'return_to',\n    code: 301, // defaults to 302 - only 301 and 302 are supported.\n    when: [\n      // ...\n    ]\n  }\n}\n")),(0,i.kt)("p",null,"When the user accesses a protected url ",(0,i.kt)("inlineCode",{parentName:"p"},"http://my-website/settings"),", they will\nbe redirected to\n",(0,i.kt)("inlineCode",{parentName:"p"},"http://my-website/login?return_to=http%3A%2F%2Fmy-website%2Fsettings"),". The\nlogin page can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"return_to")," paramter to return user to intended page\nafter a successful login."),(0,i.kt)("h3",{id:"www_authenticate"},(0,i.kt)("inlineCode",{parentName:"h3"},"www_authenticate")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"www_authenticate")," Error Handler responds with HTTP 401 and a\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate"},(0,i.kt)("inlineCode",{parentName:"a"},"WWW-Authenticate")),"\nHTTP Header."),(0,i.kt)("p",null,"You can configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"realm")," the browser will display. The ",(0,i.kt)("inlineCode",{parentName:"p"},"realm"),' is a message\nthat will be displayed by the browser. Most browsers show a message like "The\nwebsite says: ',(0,i.kt)("inlineCode",{parentName:"p"},"<realm>"),'". Using a real message is thus more appropriate than a\nRealm identifier.'),(0,i.kt)("p",null,'This error handler is "exotic" as WWW-Authenticate is not a common pattern in\ntoday\'s web. As discussed in the previous section, you can define error matching\nconditions under the ',(0,i.kt)("inlineCode",{parentName:"p"},"when")," key."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},"// access-rule.json\n{\n  handler: 'json',\n  config: {\n    realm: 'Please enter your username and password', // Defaults to `Please authenticate.`\n    when: [\n      // ...\n    ]\n  }\n}\n")))}h.isMDXComponent=!0}}]);