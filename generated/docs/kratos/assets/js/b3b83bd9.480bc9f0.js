"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[49431],{3905:function(t,e,o){o.d(e,{Zo:function(){return c},kt:function(){return p}});var n=o(67294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var s=n.createContext({}),u=function(t){var e=n.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},c=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=u(o),p=r,y=d["".concat(s,".").concat(p)]||d[p]||h[p]||i;return o?n.createElement(y,a(a({ref:e},c),{},{components:o})):n.createElement(y,a({ref:e},c))}));function p(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},60660:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=o(87462),r=o(63366),i=(o(67294),o(3905)),a=["components"],l={id:"kratos-video-tutorials",title:"Video Tutorials"},s=void 0,u={unversionedId:"further-reading/kratos-video-tutorials",id:"further-reading/kratos-video-tutorials",isDocsHomePage:!1,title:"Video Tutorials",description:"In this document we will gather video guides for Ory Kratos.",source:"@site/docs/further-reading/kratos-video-tutorials.mdx",sourceDirName:"further-reading",slug:"/further-reading/kratos-video-tutorials",permalink:"/kratos/docs/next/further-reading/kratos-video-tutorials",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/further-reading/kratos-video-tutorials.mdx",tags:[],version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619624197,formattedLastUpdatedAt:"4/28/2021",frontMatter:{id:"kratos-video-tutorials",title:"Video Tutorials"},sidebar:"docs",previous:{title:"Comparison",permalink:"/kratos/docs/next/further-reading/comparison"}},c=[],h={toc:c};function d(t){var e=t.components,o=(0,r.Z)(t,a);return(0,i.kt)("wrapper",(0,n.Z)({},h,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this document we will gather video guides for Ory Kratos."),(0,i.kt)("p",null,"Below each video you will find a transcript of the video. If you think we can\nimprove the video or should make any other changes, you can open an issue here."),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/JhlIZ3aChXc",frameborder:"0",allowfullscreen:!0}),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Transcript Kratos Quickstart"),(0,i.kt)("p",null,"Welcome to the Quickstart Introduction of Ory Kratos on Windows."),(0,i.kt)("p",null,"First of all you need Docker Desktop and Git to launch this quickstart."),(0,i.kt)("p",null,"You will find download links for those in the description."),(0,i.kt)("p",null,"I already have my git bash open here and I am starting Docker now."),(0,i.kt)("p",null,"Next I will open my browser to navigate to the Kratos Quickstart."),(0,i.kt)("p",null,"If you have not already read the whole quickstart, I really recommend it, but I\nwill focus on the practical steps now."),(0,i.kt)("p",null,"So scroll down a little bit and you will see the commands you have to put into\nyour console to get Kratos running."),(0,i.kt)("p",null,"The first command here will clone the Kratos repository to your machine."),(0,i.kt)("p",null,"This will take a little bit depending on your internet speed."),(0,i.kt)("p",null,"Then you want to set your directory to your Kratos directory and lastly switch\nthe branch to the 0.3.0alpha version, since this is the version this quickstart\nis tailored to."),(0,i.kt)("p",null,"As I don't have make installed, I need to docker pull the latest SQL and the\nself service as well, that is our SecureApp."),(0,i.kt)("p",null,"And now we have all the building parts ready and can use the docker-compose\ncommand to get this thing going."),(0,i.kt)("p",null,"So just copy the docker-compose command and cross your fingers that everything\nwill work correctly."),(0,i.kt)("p",null,"This part can actually take a few minutes, but once the output has slowed down\nyou can see the last two lines here indicate that everything has been set up and\neverything is working fine."),(0,i.kt)("p",null,"Now we can actually test our SecureApp login and registration."),(0,i.kt)("p",null,"So I go back to the quickstart and scroll down where we find the URL to our\nSecureApp dashboard."),(0,i.kt)("p",null,'In this case I will just use my email to create an account and I will use a very\nsecure password, which in this case actually "securepassword".'),(0,i.kt)("p",null,"But oh look, there is an error already since this password is not actually\nsecure but has been found in more than 200 data leaks, so this is some basic\nsecurity that is already set up in your SecureApp."),(0,i.kt)("p",null,"And I will try this again with an actually secure password now, I copied it down\nin my notepad here. And there we are, we are logged in, everything has worked\ncorrectly."),(0,i.kt)("p",null,"Here you will see a bunch of information about your login."),(0,i.kt)("p",null,"Now I want to show you the email confirmation real quick. Since we actually\ndidn't send an email to a real address, but are using Mailslurper as a testing\nenvironment, you can go back to the quickstart page and scroll down a little\nbit, there is the url."),(0,i.kt)("p",null,"Just click on it and you will see there is our email. And there it is, we have\nconfirmed our email."),(0,i.kt)("p",null,"Now I will logout once more and see if we can get back in. And it seems to work\nfine, very nice!"),(0,i.kt)("p",null,"This is the basic quickstart for Kratos on Windows and I hope this video will\nhelp to get you started."),(0,i.kt)("p",null,"If you have any further questions, please leave a comment or visit our community\nforum or slack, the links are in the description."),(0,i.kt)("p",null,"Don't forget to star us on github and like, subscribe for more upcoming\ntutorials.")),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Hz_dP5c_qvc",frameborder:"0",allowfullscreen:!0}),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Transcript Kratos Sign in with Github"),(0,i.kt)("p",null,"Welcome to the Sign in with Github Tutorial for Ory Kratos."),(0,i.kt)("p",null,"This continues where we left off with the Quickstart Tutorial for Kratos, so if\nyou haven\u2019t done the Quickstart already, check that out."),(0,i.kt)("p",null,"To be able to offer \u201cSign in with github\u201d you have to create a GitHub OAuth2\nClient."),(0,i.kt)("p",null,"So you go to your settings page on your github profile, then developer settings,\nthen OAuth apps, then register a new application."),(0,i.kt)("p",null,"You can pick any name that suits you, then put the Kratos login in the homepage\nurl, that is the port 4455 on your localhost."),(0,i.kt)("p",null,"You use this port in the quickstart for our SecureApp. If you are not familiar\nwith this self service app, check the links in the description."),(0,i.kt)("p",null,"Next you put in the Authorization callback URL. This URL is built really simple,\nso first you have the kratos domain and the port and just at the end you put in\nthe OIDC provider ID, in this case github."),(0,i.kt)("p",null,"This provider ID must point to the provider's ID set in the Ory Kratos\nconfiguration file."),(0,i.kt)("p",null,"I\u2019ll link a document in the description, that explains this in more detail, also\nhow you can implement any other OIDC provider."),(0,i.kt)("p",null,"Now navigate to the Kratos directory and create a new file."),(0,i.kt)("p",null,"If you are unsure where your kratos directory is (in my case it is my Git\nfolder) you can look it up on docker."),(0,i.kt)("p",null,"Now you have to create a JSONNNET code for the provider in this case github. so\nyou just copy this code, create a new file called O ID C dot github dot jsonnet\nand save"),(0,i.kt)("p",null,"Next you enable the OIDC provider in the Kratos configuration located in the\nsame directory. Just copy this part of the code, this is basically what Kratos\nneeds to understand your OIDC provider. Just copy it in your configuration file\nand save."),(0,i.kt)("p",null,"The final step to get this working is to get the client id and the client secret\n. Those are provided to you by the Github oauth app. You input those into your\nkratos yaml and now it should be ready to go!"),(0,i.kt)("p",null,"Now navigate to the login of your selfservice app and you should see \u201clogin with\ngithub\u201d."),(0,i.kt)("p",null,"Once your account is authorized you will be redirected to the login page and you\ncan login with github now."),(0,i.kt)("p",null,"That was it for this tutorial, if you like to know more check the links in the\ndescription, if you have any feedback leave me a message in the comment section.\nand I'm looking forward to seeing you in the next one!")))}d.isMDXComponent=!0}}]);