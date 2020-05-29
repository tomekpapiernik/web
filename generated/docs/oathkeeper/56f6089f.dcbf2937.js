(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(9),i=(n(0),n(187)),o={id:"api-access-rules",title:"API Access Rules"},l={id:"version-v0.37/api-access-rules",title:"API Access Rules",description:"ORY Oathkeeper reaches decisions to allow or deny access by applying Access",source:"@site/versioned_docs/version-v0.37/api-access-rules.md",permalink:"/oathkeeper/docs/v0.37/api-access-rules",editUrl:"https://github.com/ory/oathkeeper/edit/master/docs/versioned_docs/version-v0.37/api-access-rules.md",version:"v0.37",lastUpdatedBy:"hackerman",lastUpdatedAt:1586177132,sidebar:"version-v0.37/docs",previous:{title:"Installation",permalink:"/oathkeeper/docs/v0.37/install"},next:{title:"Access Rule Pipeline",permalink:"/oathkeeper/docs/v0.37/pipeline/index"}},c=[{value:"Access Rule Format",id:"access-rule-format",children:[]},{value:"Handler configuration",id:"handler-configuration",children:[]},{value:"Scoped Credentials",id:"scoped-credentials",children:[]},{value:"Match strategy behavior",id:"match-strategy-behavior",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"ORY Oathkeeper reaches decisions to allow or deny access by applying Access\nRules. Access Rules can be stored on the file system, set as an environment\nvariable, or fetched from HTTP(s) remotes. These repositories can be configured\nin the configuration file (",Object(i.b)("inlineCode",{parentName:"p"},"oathkeeper -c ./path/to/config.yml ..."),")"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Configures Access Rules\naccess_rules:\n  # Locations (list of URLs) where access rules should be fetched from on boot.\n  # It is expected that the documents at those locations return a JSON or YAML Array containing ORY Oathkeeper Access Rules.\n  repositories:\n    # If the URL Scheme is `file://`, the access rules (an array of access rules is expected) will be\n    # fetched from the local file system.\n    - file://path/to/rules.json\n    # If the URL Scheme is `inline://`, the access rules (an array of access rules is expected)\n    # are expected to be a base64 encoded (with padding!) JSON/YAML string (base64_encode(`[{"id":"foo-rule","authenticators":[....]}]`)):\n    - inline://W3siaWQiOiJmb28tcnVsZSIsImF1dGhlbnRpY2F0b3JzIjpbXX1d\n    # If the URL Scheme is `http://` or `https://`, the access rules (an array of access rules is expected) will be\n    # fetched from the provided HTTP(s) location.\n    - https://path-to-my-rules/rules.json\n  # Determines a matching strategy for the access rules . Currently supported values are `glob` and `regexp`. Empty string defaults to regexp.\n  matching_strategy: glob\n')),Object(i.b)("p",null,"or by setting the equivalent environment variable:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ export ACCESS_RULES_REPOSITORIES='file://path/to/rules.json,https://path-to-my-rules/rules.json,inline://W3siaWQiOiJmb28tcnVsZSIsImF1dGhlbnRpY2F0b3JzIjpbXX1d'\n")),Object(i.b)("p",null,"The repository (file, inline, remote) must be formatted either as a JSON or a\nYAML array containing the access rules:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'$ cat ./rules.json\n[{\n    "id": "my-first-rule"\n},{\n    "id": "my-second-rule"\n}]\n\n$ cat ./rules.yaml\n- id: my-first-rule\n  version: v0.36.0-beta.4\n  authenticators:\n    - handler: noop\n- id: my-second-rule\n  version: v0.36.0-beta.4\n  authorizer:\n    handler: allow\n')),Object(i.b)("h2",{id:"access-rule-format"},"Access Rule Format"),Object(i.b)("p",null,"Access Rules have four principal keys:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"id")," (string): The unique ID of the Access Rule."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"version")," (string): The version of ORY Oathkeeper this rule targets with out\nthe ",Object(i.b)("inlineCode",{parentName:"li"},"+oryOS.<x>")," appendix. ORY Oathkeeper is able to migrate access rules\nacross versions. If left empty ORY Oathkeeper will assume that the rule is\nusing the same tag as the version that is running."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"upstream")," (object): The location of the server where requests matching this\nrule should be forwarded to. This only needs to be set when using the ORY\nOathkeeper Proxy as the Decision API does not forward the request to the\nupstream.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"url")," (string): The URL the request will be forwarded to."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"preserve_host")," (bool): If set to ",Object(i.b)("inlineCode",{parentName:"li"},"false")," (default), the forwarded request\nwill include the host and port of the ",Object(i.b)("inlineCode",{parentName:"li"},"url")," value. If ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", the host and\nport of the ORY Oathkeeper Proxy will be used instead:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"false"),": Incoming HTTP Header ",Object(i.b)("inlineCode",{parentName:"li"},"Host: mydomain.com"),"-> Forwarding HTTP\nHeader ",Object(i.b)("inlineCode",{parentName:"li"},"Host: someservice.intranet.mydomain.com:1234")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"strip_path")," (string): If set, replaces the provided path prefix when\nforwarding the requested URL to the upstream URL:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"set to ",Object(i.b)("inlineCode",{parentName:"li"},"/api/v1"),": Incoming HTTP Request at ",Object(i.b)("inlineCode",{parentName:"li"},"/api/v1/users")," -> Forwarding\nHTTP Request at ",Object(i.b)("inlineCode",{parentName:"li"},"/users"),"."),Object(i.b)("li",{parentName:"ul"},"unset: Incoming HTTP Request at ",Object(i.b)("inlineCode",{parentName:"li"},"/api/v1/users")," -> Forwarding HTTP Request\nat ",Object(i.b)("inlineCode",{parentName:"li"},"/api/v1/users"),"."))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"match")," (object): Defines the URL(s) this Access Rule should match.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"methods")," (string[]): Array of HTTP methods (e.g. GET, POST, PUT, DELETE,\n...)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"url")," (string): The URL that should be matched. You can use regular\nexpressions or glob patterns in this field to match more than one url. The\nmatching strategy (glob or regexp) is defined in the global configuration\nfile as ",Object(i.b)("inlineCode",{parentName:"li"},"access_rules.matching_strategy"),". This matcher ignores query\nparameters. Regular expressions (or glob patterns) are encapsulated in\nbrackets ",Object(i.b)("inlineCode",{parentName:"li"},"<")," and ",Object(i.b)("inlineCode",{parentName:"li"},">"),". Regular expressions examples:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"https://mydomain.com/")," matches ",Object(i.b)("inlineCode",{parentName:"li"},"https://mydomain.com/")," and does not match\n",Object(i.b)("inlineCode",{parentName:"li"},"https://mydomain.com/foo")," or ",Object(i.b)("inlineCode",{parentName:"li"},"https://mydomain.com"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<https|http>://mydomain.com/<.*>")," matches:",Object(i.b)("inlineCode",{parentName:"li"},"https://mydomain.com/")," or\n",Object(i.b)("inlineCode",{parentName:"li"},"http://mydomain.com/foo"),". Does not match: ",Object(i.b)("inlineCode",{parentName:"li"},"https://other-domain.com/")," or\n",Object(i.b)("inlineCode",{parentName:"li"},"https://mydomain.com"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"http://mydomain.com/<[[:digit:]]+>")," matches ",Object(i.b)("inlineCode",{parentName:"li"},"http://mydomain.com/123")," and\ndoes not match ",Object(i.b)("inlineCode",{parentName:"li"},"http://mydomain/abc"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"http://mydomain.com/<(?!protected).*>")," matches\n",Object(i.b)("inlineCode",{parentName:"li"},"http://mydomain.com/resource")," and does not match\n",Object(i.b)("inlineCode",{parentName:"li"},"http://mydomain.com/protected"),Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://tldp.org/LDP/GNU-Linux-Tools-Summary/html/x11655.htm"}),"Glop"),"\npatterns examples:"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"https://mydomain.com/<m?n>")," matches ",Object(i.b)("inlineCode",{parentName:"li"},"https://mydomain.com/man")," and does\nnot match ",Object(i.b)("inlineCode",{parentName:"li"},"http://mydomain.com/foo"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"https://mydomain.com/<{foo*,bar*}>")," matches ",Object(i.b)("inlineCode",{parentName:"li"},"https://mydomain.com/foo")," or\n",Object(i.b)("inlineCode",{parentName:"li"},"https://mydomain.com/bar")," and does not match ",Object(i.b)("inlineCode",{parentName:"li"},"https://mydomain.com/any"),"."))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"authenticators"),": A list of authentication handlers that authenticate the\nprovided credentials. Authenticators are checked iteratively from index ",Object(i.b)("inlineCode",{parentName:"li"},"0")," to\n",Object(i.b)("inlineCode",{parentName:"li"},"n"),' and the first authenticator to return a positive result will be the one\nused. If you want the rule to first check a specific authenticator before\n"falling back" to others, have that authenticator as the first item in the\narray. For the full list of available authenticators, click\n',Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/oathkeeper/docs/v0.37/pipeline/authn"}),"here"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"authorizer"),': The authorization handler which will try to authorize the\nsubject ("user") from the previously validated credentials making the request.\nFor example, you could check if the subject ("user") is part of the "admin"\ngroup or if he/she has permission to perform that action. For the full list of\navailable authorizers, click ',Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/oathkeeper/docs/v0.37/pipeline/authz"}),"here"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mutators"),": A list of mutation handlers that transform the HTTP request before\nforwarding it. A common use case is generating a new set of credentials (e.g.\nJWT) which then will be forwarded to the upstream server. When using ORY\nOathkeeper's Decision API, it is expected that the API Gateway forwards the\nmutated HTTP Headers to the upstream server. For the full list of available\nmutators, click ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/oathkeeper/docs/v0.37/pipeline/mutator"}),"here"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"errors"),": A list of error handlers that are executed when any of the previous\nhandlers (e.g. authentication) fail. Error handlers define what to do in case\nof an error, for example redirect the user to the login endpoint when a\nunauthorized (HTTP Status Code 401) error occurs. If left unspecified, errors\nwill always be handled as JSON responses unless the global configuration key\n",Object(i.b)("inlineCode",{parentName:"li"},"errors.fallback")," was changed. For more information on error handlers, click\n",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/oathkeeper/docs/v0.37/pipeline/error"}),"here"),".")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Examples")),Object(i.b)("p",null,"Rule in JSON format:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "some-id",\n  "version": "v0.36.0-beta.4",\n  "upstream": {\n    "url": "http://my-backend-service",\n    "preserve_host": true,\n    "strip_path": "/api/v1"\n  },\n  "match": {\n    "url": "http://my-app/some-route/<.*>",\n    "methods": ["GET", "POST"]\n  },\n  "authenticators": [{ "handler": "noop" }],\n  "authorizer": { "handler": "allow" },\n  "mutators": [{ "handler": "noop" }],\n  "errors": [{ "handler": "json" }]\n}\n')),Object(i.b)("p",null,"Rule in YAML format:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"id: some-id\nversion: v0.36.0-beta.4\nupstream:\n  url: http://my-backend-service\n  preserve_host: true\n  strip_path: /api/v1\nmatch:\n  url: http://my-app/some-route/<.*>\n  methods:\n    - GET\n    - POST\nauthenticators:\n  - handler: noop\nauthorizer:\n  hander: allow\nmutators:\n  - handler: noop\nerrors:\n  - handler: json\n")),Object(i.b)("h2",{id:"handler-configuration"},"Handler configuration"),Object(i.b)("p",null,"Handlers (Authenticators, Mutators, Authorizers, Errors) sometimes require\nconfiguration. The configuration can be defined globally as well as per Access\nRule. The configuration from the Access Rule is overrides values from the global\nconfiguration."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"oathkeeper.yml")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"authenticators:\n  anonymous:\n    enabled: true\n    config:\n      subject: anon\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"rule.json")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service",\n    "preserve_host": true,\n    "strip_path": "/api/v1"\n  },\n  "match": {\n    "url": "http://my-app/some-route/<.*>",\n    "methods": ["GET", "POST"]\n  },\n  "authenticators": [\n    { "handler": "anonymous", "config": { "subject": "anon" } }\n  ],\n  "authorizer": { "handler": "allow" },\n  "mutators": [{ "handler": "noop" }]\n}\n')),Object(i.b)("h2",{id:"scoped-credentials"},"Scoped Credentials"),Object(i.b)("p",null,'Some credentials are scoped. For example, OAuth 2.0 Access Tokens usually are\nscoped ("OAuth 2.0 Scope"). Scope validation depends on the meaning of the\nscope. Therefore, wherever ORY Oathkeeper validates a scope, these scope\nstrategies are supported:'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"hierarchic"),": Scope ",Object(i.b)("inlineCode",{parentName:"li"},"foo")," matches ",Object(i.b)("inlineCode",{parentName:"li"},"foo"),", ",Object(i.b)("inlineCode",{parentName:"li"},"foo.bar"),", ",Object(i.b)("inlineCode",{parentName:"li"},"foo.baz")," but not ",Object(i.b)("inlineCode",{parentName:"li"},"bar")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"wildcard"),": Scope ",Object(i.b)("inlineCode",{parentName:"li"},"foo.*")," matches ",Object(i.b)("inlineCode",{parentName:"li"},"foo"),", ",Object(i.b)("inlineCode",{parentName:"li"},"foo.bar"),", ",Object(i.b)("inlineCode",{parentName:"li"},"foo.baz")," but not ",Object(i.b)("inlineCode",{parentName:"li"},"bar"),".\nScope ",Object(i.b)("inlineCode",{parentName:"li"},"foo")," matches ",Object(i.b)("inlineCode",{parentName:"li"},"foo")," but not ",Object(i.b)("inlineCode",{parentName:"li"},"foo.bar")," nor ",Object(i.b)("inlineCode",{parentName:"li"},"bar")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"exact"),": Scope ",Object(i.b)("inlineCode",{parentName:"li"},"foo")," matches ",Object(i.b)("inlineCode",{parentName:"li"},"foo")," but not ",Object(i.b)("inlineCode",{parentName:"li"},"bar")," nor ",Object(i.b)("inlineCode",{parentName:"li"},"foo.bar")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"none"),": Scope validation is disabled. If however a scope is configured to be\nvalidated, the request will fail with an error message.")),Object(i.b)("h2",{id:"match-strategy-behavior"},"Match strategy behavior"),Object(i.b)("p",null,"With the ",Object(i.b)("strong",{parentName:"p"},"Regular expression")," strategy, you can use the extracted groups in\nall handlers where the substitutions are supported by using the Go\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://golang.org/pkg/text/template/"}),Object(i.b)("inlineCode",{parentName:"a"},"text/template"))," package, receiving the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/oathkeeper/blob/master/pipeline/authn/authenticator.go#L39"}),"AuthenticationSession"),"\nstruct:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),"type AuthenticationSession struct {\n    Subject      string\n    Extra        map[string]interface{}\n    Header       http.Header\n    MatchContext MatchContext\n}\n\ntype MatchContext struct {\n    RegexpCaptureGroups []string\n    URL                 *url.URL\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Examples")),Object(i.b)("p",null,"If the match URL is ",Object(i.b)("inlineCode",{parentName:"p"},"<https|http>://mydomain.com/<.*>")," and the request is\n",Object(i.b)("inlineCode",{parentName:"p"},"http://mydomain.com/foo"),", the ",Object(i.b)("inlineCode",{parentName:"p"},"MatchContext")," field will contain"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RegexpCaptureGroups"),": ",'["http", "foo"]'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"URL"),': "',Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://mydomain.com/foo%22"}),'http://mydomain.com/foo"'))))}b.isMDXComponent=!0},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,h=p["".concat(o,".").concat(u)]||p[u]||m[u]||i;return n?r.a.createElement(h,l(l({ref:t},s),{},{components:n})):r.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);