(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),i=(n(0),n(175)),o={id:"mutator",title:"Mutators"},l={id:"version-v0.37/pipeline/mutator",title:"Mutators",description:"A mutator transforms the credentials from incoming requests to credentials that",source:"@site/versioned_docs/version-v0.37/pipeline/mutator.md",permalink:"/oathkeeper/docs/pipeline/mutator",editUrl:"https://github.com/ory/oathkeeper/edit/master/docs/versioned_docs/version-v0.37/pipeline/mutator.md",version:"v0.37",lastUpdatedBy:"hackerman",lastUpdatedAt:1586177132,sidebar:"version-v0.37/docs",previous:{title:"Authorizers",permalink:"/oathkeeper/docs/pipeline/authz"},next:{title:"Error Handlers",permalink:"/oathkeeper/docs/pipeline/error"}},s=[{value:"<code>noop</code>",id:"noop",children:[{value:"Configuration",id:"configuration",children:[]},{value:"Access Rule Example",id:"access-rule-example",children:[]}]},{value:"<code>id_token</code>",id:"id_token",children:[{value:"Global Configuration",id:"global-configuration",children:[]},{value:"Configuration",id:"configuration-1",children:[]},{value:"Access Rule Example",id:"access-rule-example-1",children:[]}]},{value:"<code>header</code>",id:"header",children:[{value:"Configuration",id:"configuration-2",children:[]},{value:"Access Rule Example",id:"access-rule-example-2",children:[]}]},{value:"<code>cookie</code>",id:"cookie",children:[{value:"Configuration",id:"configuration-3",children:[]},{value:"Cookies",id:"cookies",children:[]}]},{value:"<code>hydrator</code>",id:"hydrator",children:[{value:"Configuration",id:"configuration-4",children:[]},{value:"Access Rule Example",id:"access-rule-example-3",children:[]}]}],c={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A mutator transforms the credentials from incoming requests to credentials that\nyour backend understands. For example, the ",Object(i.b)("inlineCode",{parentName:"p"},"Authorization: basic")," header might\nbe transformed to ",Object(i.b)("inlineCode",{parentName:"p"},"X-User: <subject-id>"),". This allows you to write backends that\ndo not care if the original request was an anonymous one, an OAuth 2.0 Access\nToken, or some other credential type. All your backend has to do is understand,\nfor example, the ",Object(i.b)("inlineCode",{parentName:"p"},"X-User:"),"."),Object(i.b)("p",null,"The Access Control Decision API will return the mutated result as the HTTP\nResponse."),Object(i.b)("h2",{id:"noop"},Object(i.b)("inlineCode",{parentName:"h2"},"noop")),Object(i.b)("p",null,"This mutator does not transform the HTTP request and simply forwards the headers\nas-is. This is useful if you don't want to replace, for example,\n",Object(i.b)("inlineCode",{parentName:"p"},"Authorization: basic")," with ",Object(i.b)("inlineCode",{parentName:"p"},"X-User: <subject-id>"),"."),Object(i.b)("h3",{id:"configuration"},"Configuration"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Global configuration file oathkeeper.yml\nmutators:\n  noop:\n    # Set enabled to true if the authenticator should be enabled and false to disable the authenticator. Defaults to false.\n    enabled: true\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Some Access Rule: access-rule-1.yaml\nid: access-rule-1\n# match: ...\n# upstream: ...\nmutators:\n  - handler: noop\n")),Object(i.b)("h3",{id:"access-rule-example"},"Access Rule Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'$ cat ./rules.json\n{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service"\n  },\n  "match": {\n    "url": "http://my-app/api/users/<[0-9]+>/<[a-zA-Z]+>",\n    "methods": [\n      "GET"\n    ]\n  },\n  "authenticators": [\n    {\n      "handler": "anonymous"\n    }\n  ],\n  "authorizer": {\n    "handler": "allow"\n  },\n  "mutators": [\n    {\n      "handler": "noop"\n    }\n  ]\n}\n\n$ curl -X GET http://my-app/some-route\n\nHTTP/1.0 200 Status OK\nThe request has been allowed! The original HTTP Request has not been modified.\n')),Object(i.b)("h2",{id:"id_token"},Object(i.b)("inlineCode",{parentName:"h2"},"id_token")),Object(i.b)("p",null,"This mutator takes the authentication information (e.g. subject) and transforms\nit to a signed JSON Web Token, and more specifically to an OpenID Connect ID\nToken. Your backend can verify the token by fetching the (public) key from the\n",Object(i.b)("inlineCode",{parentName:"p"},"/.well-known/jwks.json")," endpoint provided by the ORY Oathkeeper API."),Object(i.b)("p",null,"Let's say a request is made to a resource protected by ORY Oathkeeper using\nBasic Authorization:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"GET /api/resource HTTP/1.1\nHost: www.example.com\nAuthorization: Basic Zm9vOmJhcg==\n")),Object(i.b)("p",null,"Assuming that ORY Oathkeeper is granting the access request,\n",Object(i.b)("inlineCode",{parentName:"p"},"Basic Zm9vOmJhcg==")," will be replaced with a cryptographically signed JSON Web\nToken:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"GET /api/resource HTTP/1.1\nHost: internal-api-endpoint-dns\nAuthorization: Bearer <jwt-signed-id-token>\n")),Object(i.b)("p",null,"Now, the protected resource is capable of decoding and validating the JSON Web\nToken using the public key supplied by ORY Oathkeeper's API. The public key for\ndecoding the ID token is available at ORY Oathkeeper's ",Object(i.b)("inlineCode",{parentName:"p"},"/.well-known/jwks.json"),"\nendpoint:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"http://oathkeeper:4456/.well-known/jwks.json\n")),Object(i.b)("p",null,"The related flow diagram looks like this:"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgcGFydGljaXBhbnQgQyBhcyBDbGllbnRcbiAgICBwYXJ0aWNpcGFudCBPIGFzIE9hdGhrZWVwZXIgUHJveHlcbiAgICBwYXJ0aWNpcGFudCBBIGFzIFByb3RlY3RlZCBTZXJ2ZXIvQVBJXG4gICAgQy0-Pk86IEF1dGhvcml6YXRpb246IEJhc2ljIC4uLi5cbiAgICBPLS0-Pk86IFZhbGlkYXRlIGNyZWRlbnRpYWxzXG4gICAgTy0-PkE6IEF1dGhvcml6YXRpb246IEJlYXJlciBKLlcuVFxuICAgIEEtLT4-TzogRmV0Y2ggUHVibGljIEtleVxuICAgIEEtLT4-QTogVmFsaWRhdGUgSldUIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQiLCJ0aGVtZUNTUyI6Ii5sYWJlbCBmb3JlaWduT2JqZWN0IHsgb3ZlcmZsb3c6IHZpc2libGU7IGZvbnQtc2l6ZTogMTNweCB9In19"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgcGFydGljaXBhbnQgQyBhcyBDbGllbnRcbiAgICBwYXJ0aWNpcGFudCBPIGFzIE9hdGhrZWVwZXIgUHJveHlcbiAgICBwYXJ0aWNpcGFudCBBIGFzIFByb3RlY3RlZCBTZXJ2ZXIvQVBJXG4gICAgQy0-Pk86IEF1dGhvcml6YXRpb246IEJhc2ljIC4uLi5cbiAgICBPLS0-Pk86IFZhbGlkYXRlIGNyZWRlbnRpYWxzXG4gICAgTy0-PkE6IEF1dGhvcml6YXRpb246IEJlYXJlciBKLlcuVFxuICAgIEEtLT4-TzogRmV0Y2ggUHVibGljIEtleVxuICAgIEEtLT4-QTogVmFsaWRhdGUgSldUIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQiLCJ0aGVtZUNTUyI6Ii5sYWJlbCBmb3JlaWduT2JqZWN0IHsgb3ZlcmZsb3c6IHZpc2libGU7IGZvbnQtc2l6ZTogMTNweCB9In19",alt:"ID Token Transformation"})))),Object(i.b)("p",null,"Let's say the ",Object(i.b)("inlineCode",{parentName:"p"},"oauth2_client_credentials")," authenticator successfully\nauthenticated the credentials ",Object(i.b)("inlineCode",{parentName:"p"},"client-id:client-secret"),". This mutator will craft\nan ID Token (JWT) with the following exemplary claims:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "iss": "https://server.example.com",\n  "sub": "client-id",\n  "aud": "s6BhdRkqt3",\n  "jti": "n-0S6_WzA2Mj",\n  "exp": 1311281970,\n  "iat": 1311280970\n}\n')),Object(i.b)("p",null,"The ID Token Claims are as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"iss"),": Issuer Identifier for the Issuer of the response. The iss value is a\ncase sensitive URL using the https scheme that contains scheme, host, and\noptionally, port number and path components and no query or fragment\ncomponents. Typically, this is the URL of ORY Oathkeeper, for example:\n",Object(i.b)("inlineCode",{parentName:"li"},"https://oathkeeper.myapi.com"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sub"),": Subject Identifier. A locally unique and never reassigned identifier\nwithin the Issuer for the End-User, which is intended to be consumed by the\nClient, e.g., 24400320 or AItOawmwtWwcT0k51BayewNvutrJUqsvl6qs7A4. It must not\nexceed 255 ASCII characters in length. The sub value is a case sensitive\nstring. The End-User might also be an OAuth 2.0 Client, given that the access\ntoken was granted using the OAuth 2.0 Client Credentials flow."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"aud"),": Audience(s) that this ID Token is intended for. It MUST contain the\nOAuth 2.0 client_id of the Relying Party as an audience value. It MAY also\ncontain identifiers for other audiences. In the general case, the aud value is\nan array of case sensitive strings."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"exp"),": Expiration time on or after which the ID Token MUST NOT be accepted for\nprocessing. The processing of this parameter requires that the current\ndate/time MUST be before the expiration date/time listed in the value. Its\nvalue is a JSON number representing the number of seconds from\n1970-01-01T0:0:0Z as measured in UTC until the date/time. See RFC 3339\n","[RFC3339]"," for details regarding date/times in general and UTC in particular."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"iat"),": Time at which the JWT was issued. Its value is a JSON number\nrepresenting the number of seconds from 1970-01-01T0:0:0Z as measured in UTC\nuntil the date/time."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"jti"),": A cryptographically strong random identifier to ensure the ID Token's\nuniqueness.")),Object(i.b)("h3",{id:"global-configuration"},"Global Configuration"),Object(i.b)("h3",{id:"configuration-1"},"Configuration"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"issuer_url"),' (string, required) - Sets the "iss" value of the ID Token.'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"jwks_url")," (string, required) - Sets the URL where keys should be fetched\nfrom. Supports remote locations (http, https) as well as local filesystem\npaths."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ttl")," (string, optional) - Sets the time-to-live of the ID token. Defaults to\none minute. Valid time units are: s (second), m (minute), h (hour)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"claims")," (string, optional) - Allows you to customize the ID Token claims and\nsupport Go Templates. For more information, check section ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#claims"}),"Claims"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Global configuration file oathkeeper.yml\nmutators:\n  id_token:\n    # Set enabled to true if the authenticator should be enabled and false to disable the authenticator. Defaults to false.\n    enabled: true\n    config:\n      issuer_url: https://my-oathkeeper/\n      jwks_url: https://fetch-keys/from/this/location.json\n      # jwks_url: file:///from/this/absolute/location.json\n      # jwks_url: file://../from/this/relative/location.json\n      ttl: 60s\n      claims:\n        \'{"aud": ["https://my-backend-service/some/endpoint"],"def": "{{ print\n        .Extra.some.arbitrary.data }}"}\'\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Some Access Rule: access-rule-1.yaml\nid: access-rule-1\n# match: ...\n# upstream: ...\nmutators:\n  - handler: id_token\n    config:\n      issuer_url: https://my-oathkeeper/\n      jwks_url: https://fetch-keys/from/this/location.json\n      # jwks_url: file:///from/this/absolute/location.json\n      # jwks_url: file://../from/this/relative/location.json\n      ttl: 60s\n      claims:\n        \'{"aud": ["https://my-backend-service/some/endpoint"],"def": "{{ print\n        .Extra.some.arbitrary.data }}"}\'\n')),Object(i.b)("p",null,"The first private key found in the JSON Web Key Set defined by\n",Object(i.b)("inlineCode",{parentName:"p"},"mutators.id_token.jwks_url")," will be used for signing the JWT:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If the first key found is a symmetric key (",Object(i.b)("inlineCode",{parentName:"li"},"HS256")," algorithm), that key will\nbe used. That key ",Object(i.b)("strong",{parentName:"li"},"will not")," be broadcasted at ",Object(i.b)("inlineCode",{parentName:"li"},"/.well-known/jwks.json"),". You\nmust manually configure the upstream to be able to fetch the key (e.g. from an\nenvironment variable)."),Object(i.b)("li",{parentName:"ul"},"If the first key found is an asymmetric private key (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"RS256"),", ",Object(i.b)("inlineCode",{parentName:"li"},"ES256"),",\n...), that key will be used. The related public key will be broadcasted at\n",Object(i.b)("inlineCode",{parentName:"li"},"/.well-known/jwks.json"),".")),Object(i.b)("h4",{id:"claims"},"Claims"),Object(i.b)("p",null,"This mutator allows you to specify custom claims, like the audience of ID\ntokens, via the ",Object(i.b)("inlineCode",{parentName:"p"},"claims")," field of the mutator's ",Object(i.b)("inlineCode",{parentName:"p"},"config")," field. The keys\nrepresent names of claims and the values are arbitrary data structures which\nwill be parsed by the Go ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://golang.org/pkg/text/template/"}),"text/template"),"\npackage for value substitution, receiving the ",Object(i.b)("inlineCode",{parentName:"p"},"AuthenticationSession")," struct."),Object(i.b)("p",null,"For more details please check ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/oathkeeper/docs/pipeline/index#session"}),"Session variables")),Object(i.b)("p",null,"The claims configuration expects a string which is expected to be valid JSON:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "handler": "id_token",\n  "config": {\n    "claims": "{\\"aud\\": [\\"https://my-backend-service/some/endpoint\\"],\\"def\\": \\"{{ print .Extra.some.arbitrary.data }}\\"}"\n  }\n}\n')),Object(i.b)("p",null,"Please keep in mind that certain keys (such as the ",Object(i.b)("inlineCode",{parentName:"p"},"sub"),") claim ",Object(i.b)("strong",{parentName:"p"},"can not")," be\noverwritten!"),Object(i.b)("h3",{id:"access-rule-example-1"},"Access Rule Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'$ cat ./rules.json\n{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service"\n  },\n  "match": {\n    "url": "http://my-app/api/users/<[0-9]+>/<[a-zA-Z]+>",\n    "methods": [\n      "GET"\n    ]\n  },\n  "authenticators": [\n    {\n      "handler": "anonymous"\n    }\n  ],\n  "authorizer": {\n    "handler": "allow"\n  },\n  "mutators": [\n    {\n      "handler": "id_token",\n      "config": {\n        "aud": [\n          "audience-1",\n          "audience-2"\n        ],\n        "claims": "{\\"abc\\": \\"{{ print .Subject }}\\",\\"def\\": \\"{{ print .Extra.some.arbitrary.data }}\\"}"\n      }\n    }\n  ]\n}\n')),Object(i.b)("h2",{id:"header"},Object(i.b)("inlineCode",{parentName:"h2"},"header")),Object(i.b)("p",null,"This mutator will transform the request, allowing you to pass the credentials to\nthe upstream application via the headers. This will augment, for example,\n",Object(i.b)("inlineCode",{parentName:"p"},"Authorization: basic")," with ",Object(i.b)("inlineCode",{parentName:"p"},"X-User: <subject-id>"),"."),Object(i.b)("h3",{id:"configuration-2"},"Configuration"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"headers")," (object (",Object(i.b)("inlineCode",{parentName:"li"},"string: string"),"), required) - A keyed object\n(",Object(i.b)("inlineCode",{parentName:"li"},"string:string"),") representing the headers to be added to this request, see\nsection ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#headers"}),"headers"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Global configuration file oathkeeper.yml\nmutators:\n  header:\n    # Set enabled to true if the authenticator should be enabled and false to disable the authenticator. Defaults to false.\n    enabled: true\n    config:\n      headers:\n        X-User: '{{ print .Subject }}'\n        X-Some-Arbitrary-Data: '{{ print .Extra.some.arbitrary.data }}'\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Some Access Rule: access-rule-1.yaml\nid: access-rule-1\n# match: ...\n# upstream: ...\nmutators:\n  - handler: header\n    config:\n      headers:\n        X-User: '{{ print .Subject }}'\n        X-Some-Arbitrary-Data: '{{ print .Extra.some.arbitrary.data }}'\n")),Object(i.b)("h4",{id:"headers"},"Headers"),Object(i.b)("p",null,"The headers are specified via the ",Object(i.b)("inlineCode",{parentName:"p"},"headers")," field of the mutator's ",Object(i.b)("inlineCode",{parentName:"p"},"config"),"\nfield. The keys are the header name and the values are a string which will be\nparsed by the Go ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://golang.org/pkg/text/template/"}),Object(i.b)("inlineCode",{parentName:"a"},"text/template")),"\npackage for value substitution, receiving the ",Object(i.b)("inlineCode",{parentName:"p"},"AuthenticationSession")," struct."),Object(i.b)("p",null,"For more details please check ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/oathkeeper/docs/pipeline/index#session"}),"Session variables")),Object(i.b)("h3",{id:"access-rule-example-2"},"Access Rule Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service"\n  },\n  "match": {\n    "url": "http://my-app/api/<.*>",\n    "methods": ["GET"]\n  },\n  "authenticators": [\n    {\n      "handler": "anonymous"\n    }\n  ],\n  "authorizer": {\n    "handler": "allow"\n  },\n  "mutators": [\n    {\n      "handler": "header",\n      "config": {\n        "headers": {\n          "X-User": "{{ print .Subject }}",\n          "X-Some-Arbitrary-Data": "{{ print .Extra.some.arbitrary.data }}"\n        }\n      }\n    }\n  ]\n}\n')),Object(i.b)("h2",{id:"cookie"},Object(i.b)("inlineCode",{parentName:"h2"},"cookie")),Object(i.b)("p",null,"This mutator will transform the request, allowing you to pass the credentials to\nthe upstream application via the cookies."),Object(i.b)("h3",{id:"configuration-3"},"Configuration"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cookies")," (object (",Object(i.b)("inlineCode",{parentName:"li"},"string: string"),"), required) - A keyed object\n(",Object(i.b)("inlineCode",{parentName:"li"},"string:string"),") representing the cookies to be added to this request, see\nsection ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#cookies"}),"cookies"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Global configuration file oathkeeper.yml\nmutators:\n  cookie:\n    # Set enabled to true if the authenticator should be enabled and false to disable the authenticator. Defaults to false.\n    enabled: true\n    config:\n      cookies:\n        user: "{{ print .Subject }}",\n        some-arbitrary-data: "{{ print .Extra.some.arbitrary.data }}"\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Some Access Rule: access-rule-1.yaml\nid: access-rule-1\n# match: ...\n# upstream: ...\nmutators:\n  - handler: cookie\n    config:\n      cookies:\n        user: "{{ print .Subject }}",\n        some-arbitrary-data: "{{ print .Extra.some.arbitrary.data }}"\n')),Object(i.b)("h3",{id:"cookies"},"Cookies"),Object(i.b)("p",null,"The cookies are specified via the ",Object(i.b)("inlineCode",{parentName:"p"},"cookies")," field of the mutators ",Object(i.b)("inlineCode",{parentName:"p"},"config"),"\nfield. The keys are the cookie name and the values are a string which will be\nparsed by the Go ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://golang.org/pkg/text/template/"}),Object(i.b)("inlineCode",{parentName:"a"},"text/template")),"\npackage for value substitution, receiving the ",Object(i.b)("inlineCode",{parentName:"p"},"AuthenticationSession")," struct."),Object(i.b)("p",null,"For more details please check ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/oathkeeper/docs/pipeline/index#session"}),"Session variables")),Object(i.b)("h5",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service"\n  },\n  "match": {\n    "url": "http://my-app/api/<.*>",\n    "methods": ["GET"]\n  },\n  "authenticators": [\n    {\n      "handler": "anonymous"\n    }\n  ],\n  "authorizer": {\n    "handler": "allow"\n  },\n  "mutators": [\n    {\n      "handler": "cookie",\n      "config": {\n        "cookies": {\n          "user": "{{ print .Subject }}",\n          "some-arbitrary-data": "{{ print .Extra.some.arbitrary.data }}"\n        }\n      }\n    }\n  ]\n}\n')),Object(i.b)("h2",{id:"hydrator"},Object(i.b)("inlineCode",{parentName:"h2"},"hydrator")),Object(i.b)("p",null,"This mutator allows for fetching additional data from external APIs, which can\nbe then used by other mutators. It works by making an upstream HTTP call to an\nAPI specified in the ",Object(i.b)("strong",{parentName:"p"},"Per-Rule Configuration")," section below. The request is a\nPOST request and it contains JSON representation of\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/oathkeeper/blob/master/pipeline/authn/authenticator.go#L39"}),"AuthenticationSession"),"\nstruct in body, which is:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subject": String,\n  "extra": Object,\n  "header": Object,\n  "match_context": {\n    "regexp_capture_groups": Object,\n    "url": Object\n  }\n}\n')),Object(i.b)("p",null,"As a response the mutator expects similiar JSON object, but with ",Object(i.b)("inlineCode",{parentName:"p"},"extra")," or\n",Object(i.b)("inlineCode",{parentName:"p"},"header")," fields modified."),Object(i.b)("p",null,"Example request/response payload:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subject": "anonymous",\n  "extra": {\n    "foo": "bar"\n  },\n  "header": {\n    "foo": ["bar1", "bar2"]\n  },\n  "match_context": {\n    "regexp_capture_groups": ["http", "foo"],\n    "url": "http://domain.com/foo"\n  }\n}\n')),Object(i.b)("p",null,"The AuthenticationSession from this object replaces the original one and is\npassed to the next mutator, where it can be used to e.g. set a particular cookie\nto the value received from an API."),Object(i.b)("p",null,"Setting ",Object(i.b)("inlineCode",{parentName:"p"},"extra")," field does not transform the HTTP request, whereas headers set\nin the ",Object(i.b)("inlineCode",{parentName:"p"},"header")," field will be added to the final request headers."),Object(i.b)("h3",{id:"configuration-4"},"Configuration"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"api.url")," (string - required) - The API URL."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"api.auth.basic.*")," (optional) - Enables HTTP Basic Authorization."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"api.auth.retry.*")," (optional) - Configures the retry logic.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Global configuration file oathkeeper.yml\nmutators:\n  hydrator:\n    # Set enabled to true if the authenticator should be enabled and false to disable the authenticator. Defaults to false.\n    enabled: true\n    config:\n      api:\n        url: http://my-backend-api\n        auth:\n          basic:\n            username: someUserName\n            password: somePassword\n        retry:\n          give_up_after: 2s\n          max_delay: 100ms\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Some Access Rule: access-rule-1.yaml\nid: access-rule-1\n# match: ...\n# upstream: ...\nmutators:\n  - handler: hydrator\n    config:\n      api:\n        url: http://my-backend-api\n        auth:\n          basic:\n            username: someUserName\n            password: somePassword\n        retry:\n          give_up_after: 2s\n          max_delay: 100ms\n")),Object(i.b)("h3",{id:"access-rule-example-3"},"Access Rule Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service"\n  },\n  "match": {\n    "url": "http://my-app/api/<.*>",\n    "methods": ["GET"]\n  },\n  "authenticators": [\n    {\n      "handler": "anonymous"\n    }\n  ],\n  "authorizer": {\n    "handler": "allow"\n  },\n  "mutators": [\n    {\n      "handler": "hydrator",\n      "config": {\n        "api": {\n          "url": "http://my-backend-api"\n        }\n      }\n    },\n    {\n      "handler": "cookie",\n      "config": {\n        "cookies": {\n          "some-arbitrary-data": "{{ print .Extra.cookie }}"\n        }\n      }\n    }\n  ]\n}\n')))}b.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return n?r.a.createElement(m,l({ref:t},c,{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);