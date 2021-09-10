(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[2474],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4753:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],p={id:"pipeline",title:"Access Rule Pipeline"},s=void 0,l={unversionedId:"pipeline",id:"pipeline",isDocsHomePage:!1,title:"Access Rule Pipeline",description:"Read more about the",source:"@site/docs/pipeline.md",sourceDirName:".",slug:"/pipeline",permalink:"/oathkeeper/docs/next/pipeline",editUrl:"https://github.com/ory/oathkeeper/edit/master/docs/docs/pipeline.md",tags:[],version:"current",lastUpdatedBy:"Sumit Maheshwari",lastUpdatedAt:1620999160,formattedLastUpdatedAt:"5/14/2021",frontMatter:{id:"pipeline",title:"Access Rule Pipeline"},sidebar:"docs",previous:{title:"API Access Rules",permalink:"/oathkeeper/docs/next/api-access-rules"},next:{title:"Authenticators",permalink:"/oathkeeper/docs/next/pipeline/authn"}},u=[{value:"Templating",id:"templating",children:[]},{value:"Session",id:"session",children:[{value:"RegexpCaptureGroups",id:"regexpcapturegroups",children:[]},{value:"Configuration Examples",id:"configuration-examples",children:[]}]}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Read more about the\n",(0,i.kt)("a",{parentName:"p",href:"/oathkeeper/docs/next/api-access-rules"},"principal components and execution pipeline of access rules"),"\nif you have not already. This chapter explains the different pipeline handlers\navailable to you:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oathkeeper/docs/next/pipeline/authn"},"Authentication handlers"),' inspect HTTP requests (e.g. the\nHTTP Authorization Header) and execute some business logic that return true\n(for authentication ok) or false (for authentication invalid) as well as a\nsubject ("user"). The subject is typically the "user" that made the request,\nbut it could also be a machine (if you have machine-2-machine interaction) or\nsomething different.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oathkeeper/docs/next/pipeline/authz"},"Authorization handlers"),': ensure that a subject ("user")\nhas the right permissions. For example, a specific endpoint might only be\naccessible to subjects ("users") from group "admin". The authorizer handles\nthat logic.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oathkeeper/docs/next/pipeline/mutator"},"Mutation handlers"),": transforms the credentials from\nincoming requests to credentials that your backend understands. For example,\nthe ",(0,i.kt)("inlineCode",{parentName:"li"},"Authorization: basic")," header might be transformed to\n",(0,i.kt)("inlineCode",{parentName:"li"},"X-User: <subject-id>"),". This allows you to write backends that do not care if\nthe original request was an anonymous one, an OAuth 2.0 Access Token, or some\nother credential type. All your backend has to do is understand, for example,\nthe ",(0,i.kt)("inlineCode",{parentName:"li"},"X-User:"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oathkeeper/docs/next/pipeline/error"},"Error handlers"),": are responsible for executing logic\nafter, for example, authentication or authorization failed. ORY Oathkeeper\nsupports different error handlers and we will add more as the project\nprogresses.")),(0,i.kt)("h2",{id:"templating"},"Templating"),(0,i.kt)("p",null,"Some handlers such as the ",(0,i.kt)("a",{parentName:"p",href:"/oathkeeper/docs/next/pipeline/mutator#id_token"},"ID Token Mutator"),"\nsupport templating using\n",(0,i.kt)("a",{parentName:"p",href:"https://golang.org/pkg/text/template/"},"Golang Text Templates"),"\n(",(0,i.kt)("a",{parentName:"p",href:"https://blog.gopheracademy.com/advent-2017/using-go-templates/"},"examples"),").\nThe ",(0,i.kt)("a",{parentName:"p",href:"http://masterminds.github.io/sprig/"},"sprig")," is also supported, on top of\nthese two functions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'var _ = template.FuncMap{\n    "print": func(i interface{}) string {\n        if i == nil {\n            return ""\n        }\n        return fmt.Sprintf("%v", i)\n    },\n    "printIndex": func(element interface{}, i int) string {\n        if element == nil {\n            return ""\n        }\n\n        list := reflect.ValueOf(element)\n\n        if list.Kind() == reflect.Slice && i < list.Len() {\n            return fmt.Sprintf("%v", list.Index(i))\n        }\n\n        return ""\n    },\n}\n')),(0,i.kt)("h2",{id:"session"},"Session"),(0,i.kt)("p",null,"In all configurations supporting ",(0,i.kt)("a",{parentName:"p",href:"#templating"},"templating")," instructions, it's\npossible to use the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/oathkeeper/blob/master/pipeline/authn/authenticator.go#L39"},(0,i.kt)("inlineCode",{parentName:"a"},"AuthenticationSession")),"\nstruct content."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type AuthenticationSession struct {\n    Subject      string\n    Extra        map[string]interface{}\n    Header       http.Header\n    MatchContext MatchContext\n}\n\ntype MatchContext struct {\n    RegexpCaptureGroups []string\n    URL                 *url.URL\n    Method              string\n    Header              http.Header\n}\n")),(0,i.kt)("h3",{id:"regexpcapturegroups"},"RegexpCaptureGroups"),(0,i.kt)("h3",{id:"configuration-examples"},"Configuration Examples"),(0,i.kt)("p",null,"To use the subject extract to the token"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "config_field": "{{ print .subject }}" }\n')),(0,i.kt)("p",null,"To use any arbitrary header value from the request headers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "config_field": "{{ .MatchContext.Header.Get \\"some_header\\" }}" }\n')),(0,i.kt)("p",null,"To use an embedded value in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Extra")," map (most of the time, it's a JWT token\nclaim)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "config_field": "{{ print .Extra.some.arbitrary.data }}" }\n')),(0,i.kt)("p",null,"To use a Regex capture from the request URL Note the usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"printIndex")," to\nprint a value from the array"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "claims": "{\\"aud\\": \\"{{ print .Extra.aud }}\\", \\"resource\\": \\"{{ printIndex .MatchContext.RegexpCaptureGroups 0 }}\\""\n}\n')),(0,i.kt)("p",null,"To display a string array to JSON format, we can use the\n",(0,i.kt)("a",{parentName:"p",href:"https://golang.org/pkg/fmt/"},"fmt printf")," function"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "claims": "{\\"aud\\": \\"{{ print .Extra.aud }}\\", \\"scope\\": {{ printf \\"%+q\\" .Extra.scp }}}"\n}\n')),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthenticationSession")," struct has a field named ",(0,i.kt)("inlineCode",{parentName:"p"},"Extra")," which is\na ",(0,i.kt)("inlineCode",{parentName:"p"},"map[string]interface{}"),", which receives varying introspection data from the\nauthentication process. Because the contents of ",(0,i.kt)("inlineCode",{parentName:"p"},"Extra")," are so variable, nested\nand potentially non-existent values need special handling by the ",(0,i.kt)("inlineCode",{parentName:"p"},"text/template"),"\nparser, and a ",(0,i.kt)("inlineCode",{parentName:"p"},"print")," FuncMap function has been provided to ensure that\nnon-existent map values will simply return an empty string, rather than\n",(0,i.kt)("inlineCode",{parentName:"p"},"<no value>"),"."),(0,i.kt)("p",null,"If you find that your field contain the string ",(0,i.kt)("inlineCode",{parentName:"p"},"<no value>")," then you have most\nlikely omitted the ",(0,i.kt)("inlineCode",{parentName:"p"},"print")," function, and it is recommended you use it for all\nvalues out of an abundance of caution and for consistency."),(0,i.kt)("p",null,"In the same way, a ",(0,i.kt)("inlineCode",{parentName:"p"},"printIndex")," FuncMap function is provided to avoid ",(0,i.kt)("em",{parentName:"p"},"out of\nrange")," exception to access in a array. It can be useful for the regexp captures\nwhich depend of the request."))}d.isMDXComponent=!0}}]);