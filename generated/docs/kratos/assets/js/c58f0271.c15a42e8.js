(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{421:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(8),s=(t(0),t(552)),o={id:"username-email-password",title:"Username / Email & Password"},i={unversionedId:"concepts/credentials/username-email-password",id:"version-v0.6/concepts/credentials/username-email-password",isDocsHomePage:!1,title:"Username / Email & Password",description:"The password method is the most commonly used form of authentication, it",source:"@site/versioned_docs/version-v0.6/concepts/credentials/username-email-password.mdx",sourceDirName:"concepts/credentials",slug:"/concepts/credentials/username-email-password",permalink:"/kratos/docs/concepts/credentials/username-email-password",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/concepts/credentials/username-email-password.mdx",version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619690398,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"username-email-password",title:"Username / Email & Password"},sidebar:"version-v0.6/docs",previous:{title:"Overview",permalink:"/kratos/docs/concepts/credentials"},next:{title:"Social Sign In, OpenID Connect, and OAuth2",permalink:"/kratos/docs/concepts/credentials/openid-connect-oidc-oauth2"}},l=[{value:"Configuration",id:"configuration",children:[]},{value:"Choosing between Username, Email, Phone Number",id:"choosing-between-username-email-phone-number",children:[{value:"Picking the right Identity JSON Schema",id:"picking-the-right-identity-json-schema",children:[]},{value:"Use Case: Phone Number And Password",id:"use-case-phone-number-and-password",children:[]}]},{value:"Example",id:"example",children:[]}],c={toc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"password")," method is the most commonly used form of authentication, it\nrequires an ",Object(s.b)("inlineCode",{parentName:"p"},"identifier")," (username, email, phone number, ...) and a ",Object(s.b)("inlineCode",{parentName:"p"},"password"),"\nduring registration and login."),Object(s.b)("p",null,"Ory Kratos hashes the password after registration, password reset, and password\nchange using:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"BCrypt (default)."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/kratos/docs/concepts/security#Argon2"},"Argon2"))),Object(s.b)("h2",{id:"configuration"},"Configuration"),Object(s.b)("p",null,"Enabling this method is as easy as setting"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"# $ kratos -c path/to/my/kratos/config.yml serve\nselfservice:\n  methods:\n    password:\n      enabled: true\n")),Object(s.b)("p",null,"in your Ory Kratos configuration."),Object(s.b)("p",null,"You can configure the BCrypt hasher using the following options:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"hashers:\n  algorithm: bcrypt\n")),Object(s.b)("p",null,":::warn"),Object(s.b)("p",null,"Due to the way BCrypt is implemented in Golang, passwords will be truncated\nafter 72 characters before being hashed. This implies that all characters in the\npassword after position 72 will be ignored!"),Object(s.b)("p",null,":::"),Object(s.b)("p",null,"Bcrypt algorithm can be configured only by the following ",Object(s.b)("inlineCode",{parentName:"p"},"cost")," option (default\nvalue is 12):"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"# $ kratos -c path/to/my/kratos/config.yml serve\nhashers:\n  bcrypt:\n    cost: 12\n")),Object(s.b)("p",null,"By default, Kratos uses BCrypt algorithm for password hashing. Use the following\noption to use the Argon2id algorithm:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"# $ kratos -c path/to/my/kratos/config.yml serve\nhashers:\n  argon2:\n    parallelism: 1\n    memory: 128MB\n    iterations: 3\n    salt_length: 16\n    key_length: 32\n")),Object(s.b)("p",null,"To determine the ideal parameters, head over to the\n",Object(s.b)("a",{parentName:"p",href:"../../guides/setting-up-password-hashing-parameters"},"setup guide"),"."),Object(s.b)("p",null,"When a user signs up using this method, the Default Identity JSON Schema (set\nusing ",Object(s.b)("inlineCode",{parentName:"p"},"identity.default_schema_url"),") is used:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"identity:\n  default_schema_url: file:///path/to/default-identity.schema.json\n  # also works with HTTP(S):\n  #\n  # default_schema_url: https://mydomain.com/path/to/default-identity.schema.json\n")),Object(s.b)("p",null,"If you don't know what that means, please read the\n",Object(s.b)("a",{parentName:"p",href:"/kratos/docs/concepts/identity-data-model"},"Identity Data Model Chapter")," in the\ndocs' concepts section."),Object(s.b)("p",null,"For a complete reference, defaults, and description please check the\n",Object(s.b)("a",{parentName:"p",href:"/kratos/docs/reference/configuration"},"Configuration Reference"),"."),Object(s.b)("p",null,"For a better understanding of security implications imposed by Argon2\nConfiguration, head over to ",Object(s.b)("a",{parentName:"p",href:"/kratos/docs/concepts/security#argon2"},"Argon2 Security"),"."),Object(s.b)("h2",{id:"choosing-between-username-email-phone-number"},"Choosing between Username, Email, Phone Number"),Object(s.b)("p",null,"Before you start, you need to decide what data you want to collect from your\nusers and why! It is hard to change this decision afterwards, so make sure\nyou've taken everything into account!"),Object(s.b)("p",null,"When logging in, the user will use a login identifier and a password to sign up\nand in. The identifier can be"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},'a username - e.g. "john.doe" or "johndoe123" or "oryuser",'),Object(s.b)("li",{parentName:"ul"},"an email address - e.g. ",Object(s.b)("inlineCode",{parentName:"li"},"john.doe@gmail.com"),","),Object(s.b)("li",{parentName:"ul"},"a phone number - e.g. ",Object(s.b)("inlineCode",{parentName:"li"},"+49-1234-4321-1234-4321"),".")),Object(s.b)("p",null,"All of these approaches have up- and downsides."),Object(s.b)("p",null,'Using the email address as the login identifier is easy to remember, does not\nrequire additional fields (because the email address is already being\ncollected), and is usually unique. It\'s usually unique because sometimes\ncompanies use a "shared" email account (e.g. ',Object(s.b)("a",{parentName:"p",href:"mailto:office@acme.org"},"office@acme.org"),") to access\nservices. In that case, multiple real identities are using the same email\nidentifier to log in."),Object(s.b)("p",null,"The email address however represents a unique identifier and personally\nidentifiable information (PII). An attacker could for example check if an email\naddress (e.g. ",Object(s.b)("inlineCode",{parentName:"p"},"john.doe@gmail.com"),") is registered at a site (e.g. an adult\nwebsite) and use that information for blackmail (see\n",Object(s.b)("a",{parentName:"p",href:"/kratos/docs/concepts/security#account-enumeration-attacks"},"Account Enumeration Attacks"),")."),Object(s.b)("p",null,"The same considerations apply to using a phone number as the primary\nregistration & login identifier."),Object(s.b)("p",null,'Using a free text username reduces the privacy risk because it is much harder to\nmake a connection between the username and a real world identity. It\'s still\npossible in cases where users choose a username such as\n"john.doe.from.newyork.1970", but finding the right username identifier is still\ndifficult and there is plausible deniability because anyone could use that\nusername.'),Object(s.b)("p",null,"A free text username however requires capturing additional fields (e.g. an email\naddress for password resets / account recovery) and is hard to remember. It is\noften very difficult to find unique usernames as people tend to use a\ncombination of their names and initials (e.g. ",Object(s.b)("inlineCode",{parentName:"p"},"john.doe"),") which has a high\nchance of collision. Therefore, one ends up with usernames such as\n",Object(s.b)("inlineCode",{parentName:"p"},"john.doe1234432"),"."),Object(s.b)("p",null,"It is important to understand that Ory Kratos lowercases all ",Object(s.b)("inlineCode",{parentName:"p"},"password"),"\nidentifiers and therefore E-Mail addresses. Characters ",Object(s.b)("inlineCode",{parentName:"p"},"+")," or ",Object(s.b)("inlineCode",{parentName:"p"},".")," which have\nspecial meaning for some E-Mail Providers (e.g. GMail) are not normalized:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"userNAME")," is equal to ",Object(s.b)("inlineCode",{parentName:"li"},"username")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"foo@BaR.com")," is equal to ",Object(s.b)("inlineCode",{parentName:"li"},"foo@bar.com")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"foo+baz@bar.com")," is NOT equal to ",Object(s.b)("inlineCode",{parentName:"li"},"foo@bar.com")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"foo.baz@bar.com")," is NOT equal to ",Object(s.b)("inlineCode",{parentName:"li"},"foobaz@bar.com"))),Object(s.b)("p",null,"You need to decide which route you want to take."),Object(s.b)("h3",{id:"picking-the-right-identity-json-schema"},"Picking the right Identity JSON Schema"),Object(s.b)("p",null,"When processing an identity and its traits, the method will use\n",Object(s.b)("a",{parentName:"p",href:"/kratos/docs/reference/json-schema-json-paths"},"JSON Schema")," to extract one or more\nidentifiers."),Object(s.b)("h4",{id:"use-case-email-and-password"},"Use Case: Email and Password"),Object(s.b)("p",null,"To use the email address as the login identifier, define the following Identity\nJSON Schema:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "https://example.com/registration.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "email": {\n          "type": "string",\n          "format": "email",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(s.b)("h4",{id:"use-case-multiple-e-mails-and-password"},"Use Case: Multiple E-Mails and Password"),Object(s.b)("p",null,"You can allow users to sign up with multiple E-Mail Addresses and use any of\nthose for log in:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "https://example.com/registration.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "emails": {\n          "type": "array",\n          "items": {\n            "type": "string",\n            "format": "email",\n            "ory.sh/kratos": {\n              "credentials": {\n                "password": {\n                  "identifier": true\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(s.b)("h4",{id:"use-case-username-and-password"},"Use Case: Username and Password"),Object(s.b)("p",null,"To use a username as the login identifier, define the following Identity JSON\nSchema:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "https://example.com/registration.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "username": {\n          "type": "string",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(s.b)("h4",{id:"use-case-username-and-email-and-password"},"Use Case: Username and Email and Password"),Object(s.b)("p",null,"You may also mix usernames and passwords:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "https://example.com/registration.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "email": {\n          "type": "string",\n          "format": "email",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        },\n        "username": {\n          "type": "string",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(s.b)("h3",{id:"use-case-phone-number-and-password"},"Use Case: Phone Number And Password"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"This will be addressed in a future release and is tracked as\n",Object(s.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/137"},"kratos#137"),".")),Object(s.b)("h2",{id:"example"},"Example"),Object(s.b)("p",null,"Assuming your Identity JSON Schema is as follows:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "https://example.com/example.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "first_name": {\n          "type": "string"\n        },\n        "email": {\n          "type": "string",\n          "format": "email",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        },\n        "username": {\n          "type": "string",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')),Object(s.b)("p",null,"And an identity registers with the following JSON payload (more on registration\nin ",Object(s.b)("a",{parentName:"p",href:"/kratos/docs/self-service/flows/user-registration"},"Selfservice Registration"),"):"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "traits": {\n    "first_name": "John Doe",\n    "email": "john.doe@example.org",\n    "username": "johndoe123"\n  },\n  "password": "my-secret-password"\n}\n')),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"password")," method would generate a credentials block as follows:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"credentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@example.org\n      - johndoe123\n    config:\n      hashed_password: ... # this would be a hash of `my-secret-password` string\n")),Object(s.b)("p",null,"Because credential identifiers need to be unique, no other identity can be\ncreated that has ",Object(s.b)("inlineCode",{parentName:"p"},"johndoe123")," or ",Object(s.b)("inlineCode",{parentName:"p"},"john.doe@example.org")," as their ",Object(s.b)("inlineCode",{parentName:"p"},"email")," or\n",Object(s.b)("inlineCode",{parentName:"p"},"username"),"."))}p.isMDXComponent=!0},552:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,b=d["".concat(o,".").concat(u)]||d[u]||m[u]||s;return t?r.a.createElement(b,i(i({ref:n},c),{},{components:t})):r.a.createElement(b,i({ref:n},c))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);