(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[59270],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6403:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=["components"],l={id:"contributing",title:"Contribution Guidelines"},s=void 0,u={unversionedId:"contributing",id:"version-v1.8/contributing",isDocsHomePage:!1,title:"Contribution Guidelines",description:"\x3c!--",source:"@site/versioned_docs/version-v1.8/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/hydra/docs/v1.8/contributing",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.8/contributing.md",version:"v1.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601676726,formattedLastUpdatedAt:"10/2/2020",frontMatter:{id:"contributing",title:"Contribution Guidelines"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Contributing Code",id:"contributing-code",children:[]},{value:"Disclosing vulnerabilities",id:"disclosing-vulnerabilities",children:[]},{value:"Code Style",id:"code-style",children:[]},{value:"Documentation",id:"documentation",children:[{value:"Develop",id:"develop",children:[]}]},{value:"Pull request procedure",id:"pull-request-procedure",children:[]},{value:"How We Organize Our Work",id:"how-we-organize-our-work",children:[]},{value:"Communication",id:"communication",children:[]},{value:"Conduct",id:"conduct",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contributing-to-ory-project"},"Contributing to ORY {{Project}}"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#contributing-code"},"Contributing Code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#disclosing-vulnerabilities"},"Disclosing vulnerabilities")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#code-style"},"Code Style")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#documentation"},"Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#pull-request-procedure"},"Pull request procedure")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#communication"},"Communication")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#conduct"},"Conduct"))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Please note: We take ORY {{Project}}'s security and our users' trust very\nseriously. If you believe you have found a security issue in ORY {{Project}},\nplease responsibly disclose by contacting us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:office@ory.sh"},"office@ory.sh"),"."),(0,o.kt)("p",null,"First: if you're unsure or afraid of anything, just ask or submit the issue or\npull request anyways. You won't be yelled at for giving it your best effort. The\nworst that can happen is that you'll be politely asked to change something. We\nappreciate any sort of contributions, and don't want a wall of rules to get in\nthe way of that."),(0,o.kt)("p",null,"That said, if you want to ensure that a pull request is likely to be merged,\ntalk to us! You can find out our thoughts and ensure that your contribution\nwon't clash or be obviated by ORY {{Project}}'s normal direction. A great way to\ndo this is via the ",(0,o.kt)("a",{parentName:"p",href:"https://community.ory.sh/"},"ORY Community")," or join the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ory.sh/chat"},"ORY Chat"),"."),(0,o.kt)("h2",{id:"contributing-code"},"Contributing Code"),(0,o.kt)("p",null,"Unless you are fixing a known bug, we ",(0,o.kt)("strong",{parentName:"p"},"strongly")," recommend discussing it with\nthe core team via a GitHub issue or ",(0,o.kt)("a",{parentName:"p",href:"https://www.ory.sh/chat"},"in our chat"),"\nbefore getting started to ensure your work is consistent with ORY {{Project}}'s\nroadmap and architecture."),(0,o.kt)("p",null,"All contributions are made via pull request. Note that ",(0,o.kt)("strong",{parentName:"p"},"all patches from all\ncontributors get reviewed"),". After a pull request is made other contributors\nwill offer feedback, and if the patch passes review a maintainer will accept it\nwith a comment. When pull requests fail testing, authors are expected to update\ntheir pull requests to address the failures until the tests pass and the pull\nrequest merges successfully."),(0,o.kt)("p",null,"At least one review from a maintainer is required for all patches (even patches\nfrom maintainers)."),(0,o.kt)("p",null,'Reviewers should leave a "LGTM" comment once they are satisfied with the patch.\nIf the patch was submitted by a maintainer with write access, the pull request\nshould be merged by the submitter after review.'),(0,o.kt)("h2",{id:"disclosing-vulnerabilities"},"Disclosing vulnerabilities"),(0,o.kt)("p",null,"Please disclose vulnerabilities exclusively to\n",(0,o.kt)("a",{parentName:"p",href:"mailto:security@ory.sh"},"security@ory.sh"),". Do not use GitHub issues."),(0,o.kt)("h2",{id:"code-style"},"Code Style"),(0,o.kt)("p",null,"Please follow these guidelines when formatting source code:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go code should match the output of ",(0,o.kt)("inlineCode",{parentName:"li"},"gofmt -s")," and pass ",(0,o.kt)("inlineCode",{parentName:"li"},"golangci-lint run"),"."),(0,o.kt)("li",{parentName:"ul"},"NodeJS and JavaScript code should be prettified using ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run format")," where\nappropriate.")),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"Please provide documentation when changing, removing, or adding features.\nDocumentation resides in the project's ",(0,o.kt)("inlineCode",{parentName:"p"},"docs")," folder."),(0,o.kt)("p",null,"In cases where a project does not have a ",(0,o.kt)("inlineCode",{parentName:"p"},"docs")," folder check the README for\ninstructions."),(0,o.kt)("p",null,"The commands listed below work exclusively for projects with a ",(0,o.kt)("inlineCode",{parentName:"p"},"docs")," folder"),(0,o.kt)("h3",{id:"develop"},"Develop"),(0,o.kt)("p",null,"To change the documentation locally, you need NodeJS installed and the project\nchecked out locally. Next, ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"docs")," and install the dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ cd docs\n$ npm install\n")),(0,o.kt)("h4",{id:"start"},"Start"),(0,o.kt)("p",null,"To start a local development server with hot reloading, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ npm start\n")),(0,o.kt)("p",null,"This command opens up a browser window. Please note that changes to the sidebar\nare not hot-reloaded and require a restart of the command."),(0,o.kt)("h4",{id:"build"},"Build"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"npm build")," generates static content into the ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," directory and can be\nserved using any static contents hosting service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ npm build\n")),(0,o.kt)("h2",{id:"pull-request-procedure"},"Pull request procedure"),(0,o.kt)("p",null,"To make a pull request, you will need a GitHub account; if you are unclear on\nthis process, see GitHub's documentation on\n",(0,o.kt)("a",{parentName:"p",href:"https://help.github.com/articles/fork-a-repo"},"forking")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://help.github.com/articles/using-pull-requests"},"pull requests"),". Pull\nrequests should be targeted at the ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," branch. Before creating a pull\nrequest, go through this checklist:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a feature branch off of ",(0,o.kt)("inlineCode",{parentName:"li"},"master")," so that changes do not get mixed up."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"http://git-scm.com/book/en/Git-Branching-Rebasing"},"Rebase")," your local\nchanges against the ",(0,o.kt)("inlineCode",{parentName:"li"},"master")," branch."),(0,o.kt)("li",{parentName:"ol"},"Run the full project test suite with the ",(0,o.kt)("inlineCode",{parentName:"li"},"go test ./...")," (or equivalent)\ncommand and confirm that it passes."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"gofmt -s")," (if the project is written in Go)."),(0,o.kt)("li",{parentName:"ol"},"Ensure that each commit has a subsystem prefix (ex: ",(0,o.kt)("inlineCode",{parentName:"li"},"controller:"),").")),(0,o.kt)("p",null,'Pull requests will be treated as "review requests," and maintainers will give\nfeedback on the style and substance of the patch.'),(0,o.kt)("p",null,"Normally, all pull requests must include tests that test your change.\nOccasionally, a change will be very difficult to test for. In those cases,\nplease include a note in your commit message explaining why."),(0,o.kt)("h2",{id:"how-we-organize-our-work"},"How We Organize Our Work"),(0,o.kt)("p",null,"All repositories in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory"},"ORY organization")," have their\nissues and pull requests monitored in the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/ory/projects/9"},"ORY Monitoring Board"),". This allows for\na transparent backlog of unanswered issues and pull requests across the\necosystem from those who are allowed to merge pull requests to the main branch."),(0,o.kt)("p",null,"The process is as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"Cards")," represent open issues and pull requests and are automatically\nassigned to the ",(0,o.kt)("strong",{parentName:"li"},"Triage")," column if the author is not one of the maintainers\nand no maintainer has answered yet."),(0,o.kt)("li",{parentName:"ol"},"A maintainer assigns the issue or pull request to someone or adds the label\n",(0,o.kt)("em",{parentName:"li"},"help wanted")," which moves the card to ",(0,o.kt)("strong",{parentName:"li"},"Requires Action"),"."),(0,o.kt)("li",{parentName:"ol"},"If a maintainer leaves a comment or review, the card moves to ",(0,o.kt)("strong",{parentName:"li"},"Pending\nReply"),", implying that the original author needs to do something (e.g.\nimplement a change, explain something in more detail, ...)."),(0,o.kt)("li",{parentName:"ol"},"If a non-maintainer pushes changes to the pull request or leaves a comment,\nthe card moves back to ",(0,o.kt)("strong",{parentName:"li"},"Requires Action"),"."),(0,o.kt)("li",{parentName:"ol"},"If a card stays inactive for 60 days or more days, we assume that public\ninterest in the issue or change has waned, ",(0,o.kt)("strong",{parentName:"li"},"archiving")," the card."),(0,o.kt)("li",{parentName:"ol"},"If the issue is closed or the pull request merged or closed, the card is\n",(0,o.kt)("strong",{parentName:"li"},"archived")," as well.")),(0,o.kt)("p",null,"We try our best to answer all issues and review all pull requests and hope that\nthis transparent way of keeping a backlog helps you better understand how heavy\nthe workload is."),(0,o.kt)("h2",{id:"communication"},"Communication"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://www.ory.sh/chat"},"Slack"),". You are welcome to drop in and ask\nquestions, discuss bugs, etc."),(0,o.kt)("h2",{id:"conduct"},"Conduct"),(0,o.kt)("p",null,"Whether you are a regular contributor or a newcomer, we care about making this\ncommunity a safe place for you and we've got your back."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We are committed to providing a friendly, safe and welcoming environment for\nall, regardless of gender, sexual orientation, disability, ethnicity,\nreligion, or similar personal characteristic."),(0,o.kt)("li",{parentName:"ul"},"Please avoid using nicknames that might detract from a friendly, safe and\nwelcoming environment for all."),(0,o.kt)("li",{parentName:"ul"},"Be kind and courteous. There is no need to be mean or rude."),(0,o.kt)("li",{parentName:"ul"},"We will exclude you from interaction if you insult, demean or harass anyone.\nIn particular, we do not tolerate behavior that excludes people in socially\nmarginalized groups."),(0,o.kt)("li",{parentName:"ul"},"Private harassment is also unacceptable. No matter who you are, if you feel\nyou have been or are being harassed or made uncomfortable by a community\nmember, please contact one of the channel ops or a member of the ORY\n{{Project}} core team immediately."),(0,o.kt)("li",{parentName:"ul"},"Likewise any spamming, trolling, flaming, baiting or other attention-stealing\nbehaviour is not welcome.")),(0,o.kt)("p",null,"We welcome discussion about creating a welcoming, safe, and productive\nenvironment for the community. If you have any questions, feedback, or concerns\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ory.sh/chat"},"please let us know"),"."))}d.isMDXComponent=!0}}]);