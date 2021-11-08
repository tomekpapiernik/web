"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[78935],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(t),u=r,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return t?a.createElement(h,s(s({ref:n},p),{},{components:t})):a.createElement(h,s({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},31042:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),s=["components"],o={id:"username-email-password",title:"Username / Email & Password"},l=void 0,d={unversionedId:"concepts/credentials/username-email-password",id:"version-v0.8/concepts/credentials/username-email-password",isDocsHomePage:!1,title:"Username / Email & Password",description:"The password method is the most commonly used form of authentication, it",source:"@site/versioned_docs/version-v0.8/concepts/credentials/username-email-password.mdx",sourceDirName:"concepts/credentials",slug:"/concepts/credentials/username-email-password",permalink:"/kratos/docs/concepts/credentials/username-email-password",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.8/concepts/credentials/username-email-password.mdx",tags:[],version:"v0.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1635361981,formattedLastUpdatedAt:"10/27/2021",frontMatter:{id:"username-email-password",title:"Username / Email & Password"},sidebar:"version-v0.8/docs",previous:{title:"Overview",permalink:"/kratos/docs/concepts/credentials"},next:{title:"Social Sign In, OpenID Connect, and OAuth2",permalink:"/kratos/docs/concepts/credentials/openid-connect-oidc-oauth2"}},p=[{value:"Configuration",id:"configuration",children:[],level:2},{value:"Choosing between Username, Email, Phone Number",id:"choosing-between-username-email-phone-number",children:[{value:"Picking the right Identity Schema",id:"picking-the-right-identity-schema",children:[{value:"Use Case: Email and Password",id:"use-case-email-and-password",children:[],level:4},{value:"Use Case: Multiple E-Mails and Password",id:"use-case-multiple-e-mails-and-password",children:[],level:4},{value:"Use Case: Username and Password",id:"use-case-username-and-password",children:[],level:4},{value:"Use Case: Username and Email and Password",id:"use-case-username-and-email-and-password",children:[],level:4}],level:3},{value:"Use Case: Phone Number And Password",id:"use-case-phone-number-and-password",children:[],level:3}],level:2},{value:"Hashed Password Format",id:"hashed-password-format",children:[{value:"BCrypt",id:"bcrypt",children:[{value:"Format",id:"format",children:[],level:4}],level:3},{value:"Argon2",id:"argon2",children:[{value:"Format",id:"format-1",children:[],level:4},{value:"Parameters",id:"parameters",children:[],level:4},{value:"Example",id:"example",children:[],level:4}],level:3},{value:"PBKDF2",id:"pbkdf2",children:[{value:"Format",id:"format-2",children:[],level:4},{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Example",id:"example-1",children:[],level:4}],level:3}],level:2},{value:"Example",id:"example-2",children:[],level:2}],m={toc:p};function c(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," method is the most commonly used form of authentication, it\nrequires an ",(0,i.kt)("inlineCode",{parentName:"p"},"identifier")," (username, email, phone number, ...) and a ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),"\nduring registration and login."),(0,i.kt)("p",null,"Ory Kratos hashes the password after registration, password reset, and password\nchange using:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"BCrypt (default)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/kratos/docs/concepts/security#Argon2"},"Argon2"))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Enabling this method is as easy as setting"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"# $ kratos -c path/to/my/kratos/config.yml serve\nselfservice:\n  methods:\n    password:\n      enabled: true\n")),(0,i.kt)("p",null,"in your Ory Kratos configuration."),(0,i.kt)("p",null,"You can configure the BCrypt hasher using the following options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"hashers:\n  algorithm: bcrypt\n")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Due to the way BCrypt is implemented in Golang, passwords will be truncated\nafter 72 characters before being hashed. This implies that all characters in the\npassword after position 72 will be ignored!"))),(0,i.kt)("p",null,"Bcrypt algorithm can be configured only by the following ",(0,i.kt)("inlineCode",{parentName:"p"},"cost")," option (default\nvalue is 12):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"# $ kratos -c path/to/my/kratos/config.yml serve\nhashers:\n  bcrypt:\n    cost: 12\n")),(0,i.kt)("p",null,"By default, Kratos uses BCrypt algorithm for password hashing. Use the following\noption to use the Argon2id algorithm:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"# $ kratos -c path/to/my/kratos/config.yml serve\nhashers:\n  argon2:\n    parallelism: 1\n    memory: 128MB\n    iterations: 3\n    salt_length: 16\n    key_length: 32\n")),(0,i.kt)("p",null,"To determine the ideal parameters, head over to the\n",(0,i.kt)("a",{parentName:"p",href:"../../guides/setting-up-password-hashing-parameters"},"setup guide"),"."),(0,i.kt)("p",null,"When a user signs up using this method, the Default Identity Schema (set using\n",(0,i.kt)("inlineCode",{parentName:"p"},"identity.default_schema_url"),") is used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"identity:\n  default_schema_url: file:///path/to/default-identity.schema.json\n  # also works with HTTP(S):\n  #\n  # default_schema_url: https://mydomain.com/path/to/default-identity.schema.json\n")),(0,i.kt)("p",null,"If you don't know what that means, please read the\n",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/concepts/identity-schema"},"Identity Schema Chapter")," in the docs'\nconcepts section."),(0,i.kt)("p",null,"For a complete reference, defaults, and description please check the\n",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/reference/configuration"},"Configuration Reference"),"."),(0,i.kt)("p",null,"For a better understanding of security implications imposed by Argon2\nConfiguration, head over to ",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/concepts/security#argon2"},"Argon2 Security"),"."),(0,i.kt)("h2",{id:"choosing-between-username-email-phone-number"},"Choosing between Username, Email, Phone Number"),(0,i.kt)("p",null,"Before you start, you need to decide what data you want to collect from your\nusers and why! It is hard to change this decision afterwards, so make sure\nyou've taken everything into account!"),(0,i.kt)("p",null,"When logging in, the user will use a login identifier and a password to sign up\nand in. The identifier can be"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'a username - e.g. "john.doe" or "johndoe123" or "oryuser",'),(0,i.kt)("li",{parentName:"ul"},"an email address - e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"john.doe@gmail.com"),","),(0,i.kt)("li",{parentName:"ul"},"a phone number - e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"+49-1234-4321-1234-4321"),".")),(0,i.kt)("p",null,"All of these approaches have up- and downsides."),(0,i.kt)("p",null,'Using the email address as the login identifier is easy to remember, does not\nrequire additional fields (because the email address is already being\ncollected), and is usually unique. It\'s usually unique because sometimes\ncompanies use a "shared" email account (e.g. ',(0,i.kt)("a",{parentName:"p",href:"mailto:office@acme.org"},"office@acme.org"),") to access\nservices. In that case, multiple real identities are using the same email\nidentifier to log in."),(0,i.kt)("p",null,"The email address however represents a unique identifier and personally\nidentifiable information (PII). An attacker could for example check if an email\naddress (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"john.doe@gmail.com"),") is registered at a site (e.g. an adult\nwebsite) and use that information for blackmail (see\n",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/concepts/security#account-enumeration-attacks"},"Account Enumeration Attacks"),")."),(0,i.kt)("p",null,"The same considerations apply to using a phone number as the primary\nregistration & login identifier."),(0,i.kt)("p",null,'Using a free text username reduces the privacy risk because it is much harder to\nmake a connection between the username and a real world identity. It\'s still\npossible in cases where users choose a username such as\n"john.doe.from.newyork.1970", but finding the right username identifier is still\ndifficult and there is plausible deniability because anyone could use that\nusername.'),(0,i.kt)("p",null,"A free text username however requires capturing additional fields (e.g. an email\naddress for password resets / account recovery) and is hard to remember. It is\noften very difficult to find unique usernames as people tend to use a\ncombination of their names and initials (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"john.doe"),") which has a high\nchance of collision. Therefore, one ends up with usernames such as\n",(0,i.kt)("inlineCode",{parentName:"p"},"john.doe1234432"),"."),(0,i.kt)("p",null,"It is important to understand that Ory Kratos lowercases all ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),"\nidentifiers and therefore E-Mail addresses. Characters ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".")," which have\nspecial meaning for some E-Mail Providers (e.g. GMail) are not normalized:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userNAME")," is equal to ",(0,i.kt)("inlineCode",{parentName:"li"},"username")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"foo@BaR.com")," is equal to ",(0,i.kt)("inlineCode",{parentName:"li"},"foo@bar.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"foo+baz@bar.com")," is NOT equal to ",(0,i.kt)("inlineCode",{parentName:"li"},"foo@bar.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"foo.baz@bar.com")," is NOT equal to ",(0,i.kt)("inlineCode",{parentName:"li"},"foobaz@bar.com"))),(0,i.kt)("p",null,"You need to decide which route you want to take."),(0,i.kt)("h3",{id:"picking-the-right-identity-schema"},"Picking the right Identity Schema"),(0,i.kt)("p",null,"When processing an identity and its traits, the method will use\n",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/reference/json-schema-json-paths"},"JSON Schema")," to extract one or more\nidentifiers."),(0,i.kt)("h4",{id:"use-case-email-and-password"},"Use Case: Email and Password"),(0,i.kt)("p",null,"To use the email address as the login identifier, define the following Identity\nJSON Schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "https://example.com/registration.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "email": {\n          "type": "string",\n          "format": "email",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("h4",{id:"use-case-multiple-e-mails-and-password"},"Use Case: Multiple E-Mails and Password"),(0,i.kt)("p",null,"You can allow users to sign up with multiple E-Mail Addresses and use any of\nthose for log in:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "https://example.com/registration.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "emails": {\n          "type": "array",\n          "items": {\n            "type": "string",\n            "format": "email",\n            "ory.sh/kratos": {\n              "credentials": {\n                "password": {\n                  "identifier": true\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("h4",{id:"use-case-username-and-password"},"Use Case: Username and Password"),(0,i.kt)("p",null,"To use a username as the login identifier, define the following Identity JSON\nSchema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "https://example.com/registration.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "username": {\n          "type": "string",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("h4",{id:"use-case-username-and-email-and-password"},"Use Case: Username and Email and Password"),(0,i.kt)("p",null,"You may also mix usernames and passwords:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "https://example.com/registration.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "email": {\n          "type": "string",\n          "format": "email",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        },\n        "username": {\n          "type": "string",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"use-case-phone-number-and-password"},"Use Case: Phone Number And Password"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This will be addressed in a future release and is tracked as\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/137"},"kratos#137"),".")),(0,i.kt)("h2",{id:"hashed-password-format"},"Hashed Password Format"),(0,i.kt)("h3",{id:"bcrypt"},"BCrypt"),(0,i.kt)("p",null,"Ory Kratos can hash passwords by BCrypt and can compare stored BCrypt hash and\nmigrate if configured hasher (",(0,i.kt)("inlineCode",{parentName:"p"},"hashers.algorithm"),") is not BCrypt."),(0,i.kt)("h4",{id:"format"},"Format"),(0,i.kt)("p",null,"BCrypt format is described\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bcrypt#Description"},"here"),"."),(0,i.kt)("h3",{id:"argon2"},"Argon2"),(0,i.kt)("p",null,"Ory Kratos can hash passwords by Argon2 and can compare stored Argon2 hash and\nmigrate if configured hasher (",(0,i.kt)("inlineCode",{parentName:"p"},"hashers.algorithm"),") is not Argon2."),(0,i.kt)("h4",{id:"format-1"},"Format"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$argon2id$v=<version>$m=<memory>,t=<iterations>,p=<parallelism>$<hash>")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version"),"(",(0,i.kt)("inlineCode",{parentName:"li"},"number"),"): The current version."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"memory"),"(",(0,i.kt)("inlineCode",{parentName:"li"},"number"),"): Amount of memory to use."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"iterations"),"(",(0,i.kt)("inlineCode",{parentName:"li"},"number"),"): Number of iterations to perform."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"parallelism"),"(",(0,i.kt)("inlineCode",{parentName:"li"},"number"),"): Degree of parallelism."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hash"),"(",(0,i.kt)("inlineCode",{parentName:"li"},"string"),"): The computed derived key by the Argon2 algorithm encoded in\nbase64.")),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$argon2id$v=19$m=32,t=2,p=4$cm94YnRVOW5jZzFzcVE4bQ$MNzk5BtR2vUhrp6qQEjRNw")),(0,i.kt)("h3",{id:"pbkdf2"},"PBKDF2"),(0,i.kt)("p",null,"Ory Kratos doesn't hash passwords by PBKDF2 but can compare stored PBKDF2 hash\nand migrate to configured hasher (",(0,i.kt)("inlineCode",{parentName:"p"},"hashers.algorithm"),")."),(0,i.kt)("p",null,"But Kratos doesn't have ability to import credentials now. There is an open\nissue for this feature:",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/605"},"Issue"),"."),(0,i.kt)("h4",{id:"format-2"},"Format"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$pbkdf2-<algorithm>$i=<iteration>,l=<length>$<salt>$<hash>")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"digest"),"(",(0,i.kt)("inlineCode",{parentName:"li"},"string"),"): The HMAC digest algorithm applied to derive a key of the\ninput password."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"iterations"),"(",(0,i.kt)("inlineCode",{parentName:"li"},"number"),"): The number of iterations desired. The higher the\nnumber of iterations, the more secure the derived key will be, but will take a\nlonger amount of time to complete."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"length"),"(",(0,i.kt)("inlineCode",{parentName:"li"},"number"),"): Length in octets of derived key."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"salt"),"(",(0,i.kt)("inlineCode",{parentName:"li"},"string"),"): A sequence of bits, known as a cryptographic salt encoded in\nbase64."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hash"),"(",(0,i.kt)("inlineCode",{parentName:"li"},"string"),"): The computed derived key by the PBKDF2 algorithm encoded in\nbase64.")),(0,i.kt)("h4",{id:"example-1"},"Example"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$pbkdf2-sha256$i=100000,l=32$1jP+5Zxpxgtee/iPxGgOz0RfE9/KJuDElP1ley4VxXc$QJxzfvdbHYBpydCbHoFg3GJEqMFULwskiuqiJctoYpI")),(0,i.kt)("h2",{id:"example-2"},"Example"),(0,i.kt)("p",null,"Assuming your Identity Schema is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "https://example.com/example.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "first_name": {\n          "type": "string"\n        },\n        "email": {\n          "type": "string",\n          "format": "email",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        },\n        "username": {\n          "type": "string",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')),(0,i.kt)("p",null,"And an identity registers with the following JSON payload (more on registration\nin ",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/self-service/flows/user-registration"},"Selfservice Registration"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "traits": {\n    "first_name": "John Doe",\n    "email": "john.doe@example.org",\n    "username": "johndoe123"\n  },\n  "password": "my-secret-password"\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," method would generate a credentials block as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"credentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@example.org\n      - johndoe123\n    config:\n      hashed_password: ... # this would be a hash of `my-secret-password` string\n")),(0,i.kt)("p",null,"Because credential identifiers need to be unique, no other identity can be\ncreated that has ",(0,i.kt)("inlineCode",{parentName:"p"},"johndoe123")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"john.doe@example.org")," as their ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," or\n",(0,i.kt)("inlineCode",{parentName:"p"},"username"),"."))}c.isMDXComponent=!0}}]);