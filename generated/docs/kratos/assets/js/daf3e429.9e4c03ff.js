(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{381:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return s})),o.d(t,"default",(function(){return c}));var n=o(3),r=o(8),i=(o(0),o(453)),a={id:"kratos-video-tutorials",title:"Video Tutorials"},l={unversionedId:"further-reading/kratos-video-tutorials",id:"version-v0.5/further-reading/kratos-video-tutorials",isDocsHomePage:!1,title:"Video Tutorials",description:"In this document we will gather video guides for ORY Kratos.",source:"@site/versioned_docs/version-v0.5/further-reading/kratos-video-tutorials.mdx",sourceDirName:"further-reading",slug:"/further-reading/kratos-video-tutorials",permalink:"/kratos/docs/further-reading/kratos-video-tutorials",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/further-reading/kratos-video-tutorials.mdx",version:"v0.5",lastUpdatedBy:"Vincent",lastUpdatedAt:1613563081,formattedLastUpdatedAt:"2/17/2021",frontMatter:{id:"kratos-video-tutorials",title:"Video Tutorials"},sidebar:"version-v0.5/docs",previous:{title:"Comparison",permalink:"/kratos/docs/further-reading/comparison"}},s=[],u={toc:s};function c(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this document we will gather video guides for ORY Kratos."),Object(i.b)("p",null,"Below each video you will find a transcript of the video. If you think we can\nimprove the video or should make any other changes, you can open an issue here."),Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/JhlIZ3aChXc",frameborder:"0",allowfullscreen:!0}),Object(i.b)("details",null,Object(i.b)("summary",null,"Transcript Kratos Quickstart"),"Welcome to the Quickstart Introduction of ORY Kratos on Windows.",Object(i.b)("p",null,"First of all you need Docker Desktop and Git to launch this quickstart."),Object(i.b)("p",null,"You will find download links for those in the description."),Object(i.b)("p",null,"I already have my git bash open here and I am starting Docker now."),Object(i.b)("p",null,"Next I will open my browser to navigate to the Kratos Quickstart."),Object(i.b)("p",null,"If you have not already read the whole quickstart, I really recommend it, but I\nwill focus on the practical steps now."),Object(i.b)("p",null,"So scroll down a little bit and you will see the commands you have to put into\nyour console to get Kratos running."),Object(i.b)("p",null,"The first command here will clone the Kratos repository to your machine."),Object(i.b)("p",null,"This will take a little bit depending on your internet speed."),Object(i.b)("p",null,"Then you want to set your directory to your Kratos directory and lastly switch\nthe branch to the 0.3.0alpha version, since this is the version this quickstart\nis tailored to."),Object(i.b)("p",null,"As I don't have make installed, I need to docker pull the latest SQL and the\nself service as well, that is our SecureApp."),Object(i.b)("p",null,"And now we have all the building parts ready and can use the docker-compose\ncommand to get this thing going."),Object(i.b)("p",null,"So just copy the docker-compose command and cross your fingers that everything\nwill work correctly."),Object(i.b)("p",null,"This part can actually take a few minutes, but once the output has slowed down\nyou can see the last two lines here indicate that everything has been set up and\neverything is working fine."),Object(i.b)("p",null,"Now we can actually test our SecureApp login and registration."),Object(i.b)("p",null,"So I go back to the quickstart and scroll down where we find the URL to our\nSecureApp dashboard."),Object(i.b)("p",null,'In this case I will just use my email to create an account and I will use a very\nsecure password, which in this case actually "securepassword".'),Object(i.b)("p",null,"But oh look, there is an error already since this password is not actually\nsecure but has been found in more than 200 data leaks, so this is some basic\nsecurity that is already set up in your SecureApp."),Object(i.b)("p",null,"And I will try this again with an actually secure password now, I copied it down\nin my notepad here. And there we are, we are logged in, everything has worked\ncorrectly."),Object(i.b)("p",null,"Here you will see a bunch of information about your login."),Object(i.b)("p",null,"Now I want to show you the email confirmation real quick. Since we actually\ndidn't send an email to a real address, but are using Mailslurper as a testing\nenvironment, you can go back to the quickstart page and scroll down a little\nbit, there is the url."),Object(i.b)("p",null,"Just click on it and you will see there is our email. And there it is, we have\nconfirmed our email."),Object(i.b)("p",null,"Now I will logout once more and see if we can get back in. And it seems to work\nfine, very nice!"),Object(i.b)("p",null,"This is the basic quickstart for Kratos on Windows and I hope this video will\nhelp to get you started."),Object(i.b)("p",null,"If you have any further questions, please leave a comment or visit our community\nforum or slack, the links are in the description."),Object(i.b)("p",null,"Don't forget to star us on github and like, subscribe for more upcoming\ntutorials.")),Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Hz_dP5c_qvc",frameborder:"0",allowfullscreen:!0}),Object(i.b)("details",null,Object(i.b)("summary",null,"Transcript Kratos Sign in with Github"),Object(i.b)("p",null,"Welcome to the Sign in with Github Tutorial for ORY Kratos."),Object(i.b)("p",null,"This continues where we left off with the Quickstart Tutorial for Kratos, so if\nyou haven\u2019t done the Quickstart already, check that out."),Object(i.b)("p",null,"To be able to offer \u201cSign in with github\u201d you have to create a GitHub OAuth2\nClient."),Object(i.b)("p",null,"So you go to your settings page on your github profile, then developer settings,\nthen OAuth apps, then register a new application."),Object(i.b)("p",null,"You can pick any name that suits you, then put the Kratos login in the homepage\nurl, that is the port 4455 on your localhost."),Object(i.b)("p",null,"You use this port in the quickstart for our SecureApp. If you are not familiar\nwith this self service app, check the links in the description."),Object(i.b)("p",null,"Next you put in the Authorization callback URL. This URL is built really simple,\nso first you have the kratos domain and the port and just at the end you put in\nthe OIDC provider ID, in this case github."),Object(i.b)("p",null,"This provider ID must point to the provider's ID set in the ORY Kratos\nconfiguration file."),Object(i.b)("p",null,"I\u2019ll link a document in the description, that explains this in more detail, also\nhow you can implement any other OIDC provider."),Object(i.b)("p",null,"Now navigate to the Kratos directory and create a new file."),Object(i.b)("p",null,"If you are unsure where your kratos directory is (in my case it is my Git\nfolder) you can look it up on docker."),Object(i.b)("p",null,"Now you have to create a JSONNNET code for the provider in this case github. so\nyou just copy this code, create a new file called O ID C dot github dot jsonnet\nand save"),Object(i.b)("p",null,"Next you enable the OIDC provider in the Kratos configuration located in the\nsame directory. Just copy this part of the code, this is basically what Kratos\nneeds to understand your OIDC provider. Just copy it in your configuration file\nand save."),Object(i.b)("p",null,"The final step to get this working is to get the client id and the client secret\n. Those are provided to you by the Github oauth app. You input those into your\nkratos yaml and now it should be ready to go!"),Object(i.b)("p",null,"Now navigate to the login of your selfservice app and you should see \u201clogin with\ngithub\u201d."),Object(i.b)("p",null,"Once your account is authorized you will be redirected to the login page and you\ncan login with github now."),Object(i.b)("p",null,"That was it for this tutorial, if you like to know more check the links in the\ndescription, if you have any feedback leave me a message in the comment section.\nand I'm looking forward to seeing you in the next one!")))}c.isMDXComponent=!0},453:function(e,t,o){"use strict";o.d(t,"a",(function(){return h})),o.d(t,"b",(function(){return b}));var n=o(0),r=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=r.a.createContext({}),c=function(e){var t=r.a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},h=function(e){var t=c(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(o),p=n,b=h["".concat(a,".").concat(p)]||h[p]||d[p]||i;return o?r.a.createElement(b,l(l({ref:t},u),{},{components:o})):r.a.createElement(b,l({ref:t},u))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"}}]);