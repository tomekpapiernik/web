(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[4050],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8795:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o={id:"sqa",title:"Software Quality Assurance"},s=void 0,l={unversionedId:"ecosystem/sqa",id:"ecosystem/sqa",isDocsHomePage:!1,title:"Software Quality Assurance",description:"Our goal is to provide you with the fastest and most reliable open source",source:"@site/docs/ecosystem/sqa.md",sourceDirName:"ecosystem",slug:"/ecosystem/sqa",permalink:"/docs/ecosystem/sqa",editUrl:"https://github.com/ory/docs/edit/master/docs/docs/ecosystem/sqa.md",version:"current",lastUpdatedBy:"Vincent",lastUpdatedAt:1617015841,formattedLastUpdatedAt:"3/29/2021",frontMatter:{id:"sqa",title:"Software Quality Assurance"},sidebar:"docs",previous:{title:"Contributing",permalink:"/docs/ecosystem/contributing"},next:{title:"Roadmap",permalink:"/docs/ecosystem/roadmap"}},d=[{value:"Data Processing",id:"data-processing",children:[]},{value:"Opt Out",id:"opt-out",children:[]},{value:"Data Privacy",id:"data-privacy",children:[{value:"Identification",id:"identification",children:[]},{value:"Request telemetry",id:"request-telemetry",children:[]},{value:"Source Code",id:"source-code",children:[]},{value:"Data Example",id:"data-example",children:[]}]}],c={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Our goal is to provide you with the fastest and most reliable open source\nservices. To achieve this goal, we collect metrics on endpoint performance and\nsend a ",(0,r.kt)("strong",{parentName:"p"},"fully anonymized"),' telemetry report ("anonymous usage statistics") to\nour servers. This data helps us understand how changes impact performance and\nstability of our open source service and identify potential issues.'),(0,r.kt)("p",null,"We are committed to full transparency on what data we transmit why and how. The\nsource code of the telemetry package is completely open source and located\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/x/blob/master/metricsx"},"here"),". If you do not wish to\nhelp us improve our projects by sharing telemetry data, it is possible to\n",(0,r.kt)("a",{parentName:"p",href:"#opt-out"},"opt out of this feature"),"."),(0,r.kt)("h2",{id:"data-processing"},"Data Processing"),(0,r.kt)("p",null,"We want to give you a thorough understanding why we collect this data, how we\ncollect it, and what we do with it, as well as real-world examples of how this\ndata improved a project."),(0,r.kt)("p",null,"The data processing pipeline has the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Telemetry data is collected at each service."),(0,r.kt)("li",{parentName:"ol"},"Periodically this data is sent to the ",(0,r.kt)("a",{parentName:"li",href:"https://segment.com/"},"segment.com"),"\nAPI."),(0,r.kt)("li",{parentName:"ol"},"Segment forwards this data to a private AWS S3 Bucket owned by the Ory\norganization. The data is not shared with any other party."),(0,r.kt)("li",{parentName:"ol"},"The AWS S3 Bucket(s) are periodically downloaded onto on of our on-premise\nservers."),(0,r.kt)("li",{parentName:"ol"},"The downloaded data is extracted, filtered, processed, and analyzed. The\noutput is a CSV report which we analyze using Open Office.")),(0,r.kt)("p",null,"We built this pipeline with the following goals in mind:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Be able to say how many production deployments exist."),(0,r.kt)("li",{parentName:"ul"},"Understand which features are used and how."),(0,r.kt)("li",{parentName:"ul"},"Understand how much throughput deployments handle."),(0,r.kt)("li",{parentName:"ul"},"Evaluate how frequently specific features are used."),(0,r.kt)("li",{parentName:"ul"},"Detect issues introduced by new features (e.g. buggy releases)."),(0,r.kt)("li",{parentName:"ul"},"Identify problems at scale (e.g. slow endpoints)."),(0,r.kt)("li",{parentName:"ul"},"Understand which versions are deployed.")),(0,r.kt)("p",null,"The following real-world outcomes have been achieved using this data (excerpt):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We were able to identify that Ory Hydra's Warden and Policy API were heavily\nunderused and decided to move these APIs to a different project (Ory Keto)\nwhich has been received very well by the community."),(0,r.kt)("li",{parentName:"ol"},"A v1.0.0 beta released caused a heavy increase in response times for certain\nenvironments at one Consent API endpoint. We identified that a missing\ndatabase index caused this issue and resolved it in the next patch."),(0,r.kt)("li",{parentName:"ol"},"We learned that many developers still run old versions, sometimes with\ncritical security vulnerabilities. To resolve this, we improved the release\nprocess and introduced a release newsletter. Use of vulnerable versions has\ndropped by 20% since then."),(0,r.kt)("li",{parentName:"ol"},"A heavy uptake in usage of Ory Keto showed us that we need to provide certain\nmigration tools for an update that introduces breaking changes. We were under\nthe impression that the service was only used in test environments.")),(0,r.kt)("h2",{id:"opt-out"},"Opt Out"),(0,r.kt)("p",null,"You can opt out of software quality assurance features (telemetry)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"by providing the ",(0,r.kt)("inlineCode",{parentName:"li"},"--sqa-opt-out")," flag."),(0,r.kt)("li",{parentName:"ul"},"by setting environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"SQA_OPT_OUT=true"),"."),(0,r.kt)("li",{parentName:"ul"},"by setting the yaml configuration key (if supported) ",(0,r.kt)("inlineCode",{parentName:"li"},"sqa.opt_out=true"),".")),(0,r.kt)("p",null,"Disabling telemetry does not have any downsides, except for us not being able to\nimprove the project. Note that Ory always sends minimal ping with version\ninformation once on start up."),(0,r.kt)("h2",{id:"data-privacy"},"Data Privacy"),(0,r.kt)("p",null,"To protect your privacy, we filter out any data that could identify you or your\nusers. We are taking the following measures to protect your privacy:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We only transmit information on how often endpoints are requested, how fast\nthey respond and what HTTP status code was sent."),(0,r.kt)("li",{parentName:"ol"},"We filter out any query parameters, headers, response and request bodies and\npath parameters. A full list of transmitted URL paths is listed in section\n",(0,r.kt)("a",{parentName:"li",href:"#request-telemetry"},"Request telemetry"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"We are unable to see or store the IP address of your host"),", as the\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/x/blob/master/metricsx/middleware.go"},"IP is set to ",(0,r.kt)("inlineCode",{parentName:"a"},"0.0.0.0")),"\nwhen transmitting data to our metrics aggregator."),(0,r.kt)("li",{parentName:"ol"},"We do not transmit any environment information from the host, except:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Operating system id (windows, linux, osx)"),(0,r.kt)("li",{parentName:"ul"},"The target architecture (amd64, darwin, ...)"),(0,r.kt)("li",{parentName:"ul"},"Number of CPUs available"),(0,r.kt)("li",{parentName:"ul"},"Binary build time, git hash, git tag"),(0,r.kt)("li",{parentName:"ul"},"Memory consumption of the process")),(0,r.kt)("p",null,"The information is stored in an aggregated format without any personally\nidentifiable information."),(0,r.kt)("h3",{id:"identification"},"Identification"),(0,r.kt)("p",null,"To identify an installation and group together clusters, we create a SHA-256\nhash of unique information (e.g. host, port) for identification. Additionally,\neach running instance is identified using an unique identifier which is set\nevery time the service starts. The identifier is a Universally Unique Identifier\n(V4) and is thus a cryptographically safe random string. Identification is\ntriggered when we are confident that the instance is not a test instance (e.g.\none of the tutorials or a local installation)."),(0,r.kt)("p",null,"We collect the following system metrics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"goarch"),": The target architecture of the service binary."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"goos"),": The target system of the service binary."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"numCpu"),": The number of CPUs available."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"runtimeVersion"),": The go version used to create the binary."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"version"),": The version of this binary."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hash"),": The git hash of this binary."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"buildTime"),": The build time of this binary.")),(0,r.kt)("h3",{id:"request-telemetry"},"Request telemetry"),(0,r.kt)("p",null,"The IP addresses of both host and client are anonymized to ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0"),". Any\nidentifiable information in the URL path and query is hashed with SHA-256 using\na randomly assigned UUID v4 salt:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/clients/foo")," with salt ",(0,r.kt)("inlineCode",{parentName:"li"},"ABCDEFGH")," becomes ",(0,r.kt)("inlineCode",{parentName:"li"},'/clients/sha256("foo|ABCDEFGH")'),":\n",(0,r.kt)("inlineCode",{parentName:"li"},"/clients/0301424a80469ad03a208de925563a97ec6ab2f9dc7a2ad71b2ded85a7f7a7af")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/policies?owner=foo")," with salt ",(0,r.kt)("inlineCode",{parentName:"li"},"ABCDEFGH")," becomes\n",(0,r.kt)("inlineCode",{parentName:"li"},'/policies?owner=sha256("foo|ABCDEFGH")'),":\n",(0,r.kt)("inlineCode",{parentName:"li"},"/policies?owner=0301424a80469ad03a208de925563a97ec6ab2f9dc7a2ad71b2ded85a7f7a7af"),").")),(0,r.kt)("h3",{id:"source-code"},"Source Code"),(0,r.kt)("p",null,"The full code-base is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/metrics-middleware"},"open source"),"."),(0,r.kt)("h3",{id:"data-example"},"Data Example"),(0,r.kt)("p",null,"The following code snippet represents two raw event types (",(0,r.kt)("inlineCode",{parentName:"p"},"page")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"identify"),") collected by a real Ory Hydra instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "context": {\n      "ip": "0.0.0.0",\n      "library": {\n        "name": "analytics-go",\n        "version": "3.0.0"\n      }\n    },\n    "messageId": "21999137-d1d2-4102-9a94-57beed5e5fca",\n    "timestamp": "2018-01-18T18:41:37.028Z",\n    "traits": {\n      "buildTime": "2018-01-18 18:41:35.6222348 +0000 UTC",\n      "goarch": "amd64",\n      "goos": "windows",\n      "hash": "undefined",\n      "instanceId": "c2bdd39c-3b0a-4f3d-b394-8e51f23833c4",\n      "numCpu": 8,\n      "runtimeVersion": "go1.9",\n      "version": "dev-master"\n    },\n    "type": "identify",\n    "userId": "22b137b6aae9bc40feb7ff14a08a1b9ecbc6305f77956214404c5b744c3b3fe2",\n    "writeKey": "yF6PTASTliRjCtRbUnwgsvjrvneqACDM",\n    "sentAt": "2018-01-18T18:41:42.546Z",\n    "integrations": {},\n    "receivedAt": "2018-01-18T18:41:41.972Z",\n    "originalTimestamp": "2018-01-18T19:41:37.6027834+01:00"\n  },\n  {\n    "context": {\n      "ip": "0.0.0.0",\n      "library": {\n        "name": "analytics-go",\n        "version": "3.0.0"\n      }\n    },\n    "messageId": "258f0127-498a-4d71-8c55-ce678a5d92b8",\n    "name": "/clients",\n    "properties": {\n      "latency": 0,\n      "method": "GET",\n      "name": "/clients",\n      "path": "/clients",\n      "size": 154,\n      "status": 401,\n      "url": "http://22b137b6aae9bc40feb7ff14a08a1b9ecbc6305f77956214404c5b744c3b3fe2/clients"\n    },\n    "timestamp": "2018-01-18T18:41:49.537Z",\n    "type": "page",\n    "userId": "22b137b6aae9bc40feb7ff14a08a1b9ecbc6305f77956214404c5b744c3b3fe2",\n    "writeKey": "yF6PTASTliRjCtRbUnwgsvjrvneqACDM",\n    "sentAt": "2018-01-18T18:41:52.547Z",\n    "integrations": {},\n    "receivedAt": "2018-01-18T18:41:51.380Z",\n    "originalTimestamp": "2018-01-18T19:41:50.7046198+01:00"\n  }\n]\n')))}u.isMDXComponent=!0}}]);