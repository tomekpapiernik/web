(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return h}));var a=n(3),r=n(8),i=(n(0),n(198)),s=n(223),o=n(199),c={title:"Performance"},l={unversionedId:"performance",id:"performance",isDocsHomePage:!1,title:"Performance",description:"RelationTuplePrism()",source:"@site/docs/performance.mdx",sourceDirName:".",slug:"/performance",permalink:"/keto/docs/next/performance",editUrl:"https://github.com/ory/keto/edit/master/docs/docs/performance.mdx",version:"current",lastUpdatedBy:"Patrik",lastUpdatedAt:1617728945,formattedLastUpdatedAt:"4/6/2021",frontMatter:{title:"Performance"},sidebar:"docs",previous:{title:"Implemented and Planned Features",permalink:"/keto/docs/next/implemented-planned-features"},next:{title:"Quickstart: Cat Videos Example",permalink:"/keto/docs/next/quickstart"}};Object(o.a)();var d=[{value:"Check Engine",id:"check-engine",children:[]},{value:"Expand Engine",id:"expand-engine",children:[]},{value:"References",id:"references",children:[]}],p={toc:d};function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document explains the time complexity of Ory Keto. Main memory complexity\nwill be analyzed and added at a later point. We only examine the evaluation\nengines (check- and expand-API) as all other parts are mainly determined by\ndependencies like your database of choice, or the de-/encoding of messages.\nExamples given omit the namespace for clarity."),Object(i.b)("h2",{id:"check-engine"},"Check Engine"),Object(i.b)("p",null,"In essence, the check-engine assumes that the relation tuples and their\nindirections assemble an acyclic directed graph, known as\n",Object(i.b)("a",{parentName:"p",href:"concepts/graph-of-relations"},"the graph of relations"),"."),Object(i.b)("p",null,"Consider the following example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"file#access@(file#owner)       // probably defined via subjectset rewrites\nfile#access@user1              // access was granted directly\nfile#owner@user2               // file owner record; indirectly gets access\n")),Object(i.b)("p",null,"This is interpreted as the following graph:"),Object(i.b)(s.a,{chart:"\ngraph TD\n    A[file] --\x3e|access| B{{file#owner}}\n    A --\x3e|owner| C([user2])\n    A --\x3e|access| D([user1])\n    B -. file#access .-> C\n",mdxType:"Mermaid"}),Object(i.b)("p",null,"A check request of the form ",Object(i.b)("inlineCode",{parentName:"p"},"object#relation@user")," will be evaluated by\nsearching the graph starting at ",Object(i.b)("inlineCode",{parentName:"p"},"object")," going through ",Object(i.b)("inlineCode",{parentName:"p"},"relation")," trying to\nreach ",Object(i.b)("inlineCode",{parentName:"p"},"user"),". The request is allowed iff there is such a path."),Object(i.b)("p",null,"The algorithm used in Ory Keto for this graph traversal is breadth-first search.\nIn the worst case it has a time complexity of ",Object(i.b)("inlineCode",{parentName:"p"},"O(n+e)")," where ",Object(i.b)("inlineCode",{parentName:"p"},"n")," is the number\nof nodes reachable from the node ",Object(i.b)("inlineCode",{parentName:"p"},"object#relation")," through ",Object(i.b)("inlineCode",{parentName:"p"},"e")," edges. Space\ncomplexity is ",Object(i.b)("inlineCode",{parentName:"p"},"O(n)"),". Rearranged, both space and time complexity are ",Object(i.b)("inlineCode",{parentName:"p"},"O(b^d)"),"\nwhere ",Object(i.b)("inlineCode",{parentName:"p"},"b")," is the maximum breadth and ",Object(i.b)("inlineCode",{parentName:"p"},"d")," the maximum depth in the graph, seen\nfrom the search root. ",Object(i.b)("a",{parentName:"p",href:"#references"},"[1]")),Object(i.b)("p",null,"This means that the complexity heavily depends on the structure of the graph. If\nit contains deeply nested indirections, it will require many recursive calls to\nresolve those indirections. Analogously, if there are widely nested\nindirections, Ory Keto has to possibly resolve all of them. The goal is to\ndesign the ACL tuples in a way such that there are only view indirections to\nresolve. Learn more in our\n",Object(i.b)("a",{parentName:"p",href:"/keto/docs/next/guides/access-control-list-design-best-practices"},"best practices around ACL design"),"."),Object(i.b)("p",null,"Because of this we decided that generic benchmarks will not yield any meaningful\nresult. We will therefore add a comparison with other similar projects later on."),Object(i.b)("h2",{id:"expand-engine"},"Expand Engine"),Object(i.b)("p",null,"Similar to how the check-engine traverses the graph of relationtuples, the\nexpand-engine builds the tree of all set operations it encounters. It resolves\nall indirections starting at the requested subjectset up to the specified depth.\nBecause it also uses breadth-first search, time and space complexity linearly\ndepend on the nodes reachable from the requested subjectset. The same\nperformance considerations apply here, while it is important to note that\nrequesting a low depth will further limit the complexity of the operation. The\nreturned tree can also exceed reasonable size limits quickly if the\nrelationtuples are deeply and/or widely nested."),Object(i.b)("h2",{id:"references"},"References"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Breadth-first_search"},"[1] Breadth-first search"),"\non Wikipedia"))}h.isMDXComponent=!0},199:function(e,t,n){"use strict";var a=n(21),r={punctuation:/[:#@()]/},i={pattern:/[^:#@()\n]+:/,inside:Object.assign({},r,{namespace:/.*/})},s={pattern:/[^:#@()\n]+#/,inside:Object.assign({},r,{symbol:/.*/})},o={pattern:/[^:#@()\n]+/,alias:"string"},c={pattern:/@[^:#@()\n]+/,inside:Object.assign({},r,{keyword:/.*/})},l={pattern:/@\(([^:#@()\n]+:)?([^:#@()\n]+)#([^:#@()\n]*)\)/,inside:{punctuation:/[@()]/,namespace:i,object:s,relation:o}};a.a.languages["keto-relation-tuples"]={comment:/\/\/.*(\n|$)/,"relation-tuple":{pattern:/([^:#@()\n]+:)?([^:#@()\n]+)#([^:#@()\n]+)@?((\(([^:#@()\n]+:)?([^:#@()\n]+)#([^:#@()\n]*)\))|([^:#@()\n]+))/,inside:{namespace:i,object:s,subjectID:c,subjectSet:l,relation:o}}},t.a=function(){}},223:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(242),s=n.n(i),o=n(58),c=n.n(o),l=n(241),d=n.n(l);s.a.initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});t.a=function(e){var t,n=e.chart,i=Object(a.useState)(!1),o=i[0],l=i[1],p=Object(a.useState)(void 0),h=p[0],u=p[1],m=Object(a.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],b=function(){return l(!o)};return Object(a.useEffect)((function(){s.a.render(m,n,(function(e){u(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onClick:b,className:d()(c.a.graph,c.a.pointer),dangerouslySetInnerHTML:{__html:h}}),r.a.createElement("div",{onClick:b,className:d()(c.a.overlay,c.a.pointer,c.a.graph,(t={},t[c.a.visible]=o,t))},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:d()(c.a.backdrop,c.a.graph),dangerouslySetInnerHTML:{__html:h}})))}},250:function(e,t,n){var a={"./locale":221,"./locale.js":221};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=250}}]);