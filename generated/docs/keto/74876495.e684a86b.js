(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),o=(n(0),n(194)),r=n(196),s={title:"Quickstart: Cat Videos Example"},c={unversionedId:"quickstart",id:"quickstart",isDocsHomePage:!1,title:"Quickstart: Cat Videos Example",description:"RelationTuplePrism()",source:"@site/docs/quickstart.mdx",slug:"/quickstart",permalink:"/keto/docs/next/quickstart",editUrl:"https://github.com/ory/keto/edit/master/docs/docs/quickstart.mdx",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1617816906,sidebar:"docs",previous:{title:"Performance",permalink:"/keto/docs/next/performance"},next:{title:"Relation Tuples",permalink:"/keto/docs/next/concepts/relation-tuples"}};Object(r.a)();var l=[{value:"Starting the Example",id:"starting-the-example",children:[]},{value:"State of the System",id:"state-of-the-system",children:[]},{value:"Simulating the Video Sharing Application",id:"simulating-the-video-sharing-application",children:[{value:"Check Incoming Requests",id:"check-incoming-requests",children:[]}]}],p={rightToc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'This example describes a video sharing service. The individual videos are\norganized in directories. Every directory has an owner and every video has the\nsame owner as it\'s parent directory. The owner has elevated privileges about the\nvideo files that are not modeled individually in Ory Keto. The only other\nprivilege modeled in this example is "view access." Every owner has view access\nto their objects, and this privilege can be granted to other users as well. The\nvideo sharing application interprets the special ',Object(o.b)("inlineCode",{parentName:"p"},"*")," user ID as any user,\nincluding anonymous users. Note that Ory Keto does not interpret this subject\nany differently from other subjects. It also does not know anything about\ndirectory structures or induced ownership."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Terminology")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},'The "Keto client" is the application interacting with Keto. In this case we\nrefer to the video sharing service backend as the Keto client.'))),Object(o.b)("h2",{id:"starting-the-example"},"Starting the Example"),Object(o.b)("p",null,"First, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/next/install"}),"install Keto"),"."),Object(o.b)("p",null,"Now you can start the example using either ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose")," or a bash script.\nThe bash script requires you to have the ",Object(o.b)("inlineCode",{parentName:"p"},"keto")," binary in your ",Object(o.b)("inlineCode",{parentName:"p"},"$PATH"),"."),Object(o.b)("p",null,"Alternatively, use Docker to automatically get the required images."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"# clone the repository if you don't have it yet\ngit clone git@github.com:ory/keto.git && cd keto\n\ndocker-compose -f contrib/cat-videos-example/docker-compose.yml up\n# or\n./contrib/cat-videos-example/up.sh\n\n# output: all initially created relation tuples\n\n# NAMESPACE       OBJECT          RELATION NAME   SUBJECT\n# videos          /cats/1.mp4     owner           videos:/cats#owner\n# videos          /cats/1.mp4     view            videos:/cats/1.mp4#owner\n# videos          /cats/1.mp4     view            *\n# videos          /cats/2.mp4     owner           videos:/cats#owner\n# videos          /cats/2.mp4     view            videos:/cats/2.mp4#owner\n# videos          /cats           owner           cat lady\n# videos          /cats           view            videos:/cats#owner\n")),Object(o.b)("h2",{id:"state-of-the-system"},"State of the System"),Object(o.b)("p",null,"At the current state only one user with the username ",Object(o.b)("inlineCode",{parentName:"p"},"cat lady")," has added\nvideos. Both videos are in the ",Object(o.b)("inlineCode",{parentName:"p"},"/cats")," directory owned by ",Object(o.b)("inlineCode",{parentName:"p"},"cat lady"),". The file\n",Object(o.b)("inlineCode",{parentName:"p"},"/cats/1.mp4")," can be viewed by anyone (",Object(o.b)("inlineCode",{parentName:"p"},"*"),"), while ",Object(o.b)("inlineCode",{parentName:"p"},"/cats/2.mp4")," has no extra\nsharing options, and can therefore only be viewed by its owner, ",Object(o.b)("inlineCode",{parentName:"p"},"cat lady"),". The\nrelation tuple definitions are located in the\n",Object(o.b)("inlineCode",{parentName:"p"},"contrib/cat-videos-example/relation-tuples")," directory."),Object(o.b)("h2",{id:"simulating-the-video-sharing-application"},"Simulating the Video Sharing Application"),Object(o.b)("p",null,"Now you can open a second terminal to run the queries against, just like the\nvideo service client would do. In this example we will use the Keto CLI client."),Object(o.b)("p",null,"If you want to run the Keto CLI within ",Object(o.b)("strong",{parentName:"p"},"Docker"),", set the alias"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'alias keto="docker run -it --network cat-videos-example_default -e KETO_READ_REMOTE=\\"keto:4466\\" oryd/keto:v0.6.0-alpha.1"\n')),Object(o.b)("p",null,"in your terminal session. Alternatively, you need to set the remote endpoint so\nthat the Keto CLI knows where to connect to (not necessary if using Docker):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'export KETO_READ_REMOTE="127.0.0.1:4466"\n')),Object(o.b)("h3",{id:"check-incoming-requests"},"Check Incoming Requests"),Object(o.b)("p",null,"First off, we get a request by an anonymous user that would like to view\n",Object(o.b)("inlineCode",{parentName:"p"},"/cats/2.mp4"),". The client now has to ask Keto if that operation should be\nallowed or denied."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'# Is "*" allowed to "view" the object "videos":"/cats/2.mp4"?\nketo check "*" view videos /cats/2.mp4\n# output:\n\n# Denied\n')),Object(o.b)("p",null,"We already discussed that this request should be denied, but it is always good\nto see this in action."),Object(o.b)("p",null,"Now ",Object(o.b)("inlineCode",{parentName:"p"},"cat lady")," wants to change some view permissions of ",Object(o.b)("inlineCode",{parentName:"p"},"/cats/1.mp4"),". For this,\nthe video service application has to show all users that are currently allowed\nto view the video. It uses Keto's\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/next/concepts/api-overview#expand-subject-set"}),"expand-API")," to get these data:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'# Who is allowed to "view" the object "videos":"/cats/2.mp4"?\nketo expand view videos /cats/1.mp4\n# output:\n\n# \u222a videos:/cats/1.mp4#view\n# \u251c\u2500 \u222a videos:/cats/1.mp4#owner\n# \u2502  \u251c\u2500 \u222a videos:/cats#owner\n# \u2502  \u2502  \u251c\u2500 \u2618 cat lady\ufe0f\n# \u251c\u2500 \u2618 *\ufe0f\n')),Object(o.b)("p",null,"Here we can see the full subject set expansion. The first branch"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-keto-relation-tuples"}),"videos:/cats/1.mp4#view\n")),Object(o.b)("p",null,"indicates that every owner of the object is allowed to view"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-keto-relation-tuples"}),"videos:/cats/1.mp4#owner\n")),Object(o.b)("p",null,"In the next step we see that the object's owners are the owners of ",Object(o.b)("inlineCode",{parentName:"p"},"/cats")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-keto-relation-tuples"}),"videos:/cats#owner\n")),Object(o.b)("p",null,"Finally, we see that ",Object(o.b)("inlineCode",{parentName:"p"},"cat lady")," is the owner of ",Object(o.b)("inlineCode",{parentName:"p"},"/cats"),"."),Object(o.b)("p",null,"Note that there is no direct relation tuple that would grant ",Object(o.b)("inlineCode",{parentName:"p"},"cat lady")," view\naccess on ",Object(o.b)("inlineCode",{parentName:"p"},"/cats/1.mp4")," as this is indirectly defined via the ownership\nrelation."),Object(o.b)("p",null,"The special user ",Object(o.b)("inlineCode",{parentName:"p"},"*")," on the other hand was directly granted view access on the\nobject, as it is a first-level leaf of the expansion tree. The following CLI\ncommand proves that this is the case:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'# Is "*" allowed to "view" the object "videos":"/cats/1.mp4"?\nketo check "*" view videos /cats/1.mp4\n# output:\n\n# Allowed\n')),Object(o.b)("p",null,"Updating the view permissions will be added here at a later stage."))}d.isMDXComponent=!0},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(r,".").concat(u)]||d[u]||b[u]||o;return n?i.a.createElement(h,s(s({ref:t},l),{},{components:n})):i.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},196:function(e,t,n){"use strict";var a=n(21),i={punctuation:/[:#@()]/},o={pattern:/[^:#@()\n]+:/,inside:Object.assign({},i,{namespace:/.*/})},r={pattern:/[^:#@()\n]+#/,inside:Object.assign({},i,{symbol:/.*/})},s={pattern:/[^:#@()\n]+/,alias:"string"},c={pattern:/@[^:#@()\n]+/,inside:Object.assign({},i,{keyword:/.*/})},l={pattern:/@\(([^:#@()\n]+:)?([^:#@()\n]+)#([^:#@()\n]*)\)/,inside:{punctuation:/[@()]/,namespace:o,object:r,relation:s}};a.a.languages["keto-relation-tuples"]={comment:/\/\/.*(\n|$)/,"relation-tuple":{pattern:/([^:#@()\n]+:)?([^:#@()\n]+)#([^:#@()\n]+)@?((\(([^:#@()\n]+:)?([^:#@()\n]+)#([^:#@()\n]*)\))|([^:#@()\n]+))/,inside:{namespace:o,object:r,subjectID:c,subjectSet:l,relation:s}}},t.a=function(){}}}]);