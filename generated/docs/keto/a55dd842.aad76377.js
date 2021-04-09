(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a(3),s=a(7),c=(a(0),a(194)),o=a(227),i=a(196),r={title:"List API: Display all Objects a User has Access to"},l={unversionedId:"guides/list-api-display-objects",id:"version-v0.6/guides/list-api-display-objects",isDocsHomePage:!1,title:"List API: Display all Objects a User has Access to",description:"RelationTuplePrism()",source:"@site/versioned_docs/version-v0.6/guides/list-api-display-objects.mdx",slug:"/guides/list-api-display-objects",permalink:"/keto/docs/guides/list-api-display-objects",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.6/guides/list-api-display-objects.mdx",version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1617816906,sidebar:"version-v0.6/docs",previous:{title:"Check whether a User has Access to Something",permalink:"/keto/docs/guides/simple-access-check-guide"},next:{title:"Expand API: Display who has Access to an Object",permalink:"/keto/docs/guides/expand-api-display-who-has-access"}};Object(i.a)();var b=[{value:"Example",id:"example",children:[{value:"Listing Objects",id:"listing-objects",children:[]},{value:"Listing Subjects",id:"listing-subjects",children:[]}]},{value:"Application Context",id:"application-context",children:[]},{value:"Pagination",id:"pagination",children:[]}],p={rightToc:b};function u(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"In this guide you will learn how to use Ory Keto's list API to display a list of\nall objects (e.g. files, ...) a user has access to. Please refer to the\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/reference/proto-api"}),"gRPC")," and ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/reference/api"}),"REST")," API\nreference documentation for all details. In general, the list API allows you to\nquery relation tuples based on partial relation tuples."),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("p",null,"As an example, we want to look at a chat application. Every user is part of one\nor more chats, and each chat has one or more members."),Object(c.b)("p",null,"Chats are stored in Ory Keto within the ",Object(c.b)("inlineCode",{parentName:"p"},"chats")," namespace. They are identified\nby a UUID that the application maps to the actual object metadata. Users are\nalso identified by and mapped to a UUID."),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"For the sake of readability, the code samples use the name of the chat and\nusername instead of the UUIDs. Please refer to the\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/concepts/objects"}),"objects")," and ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/concepts/subjects"}),"subjects"),"\npages for why the mapping is necessary."))),Object(c.b)("h3",{id:"listing-objects"},"Listing Objects"),Object(c.b)("p",null,"Our example application allows users to browse the chats they belong to. To\nachieve that, it uses Ory Keto's list API."),Object(c.b)("p",null,"We assume that the application currently has the following chats:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"memes:\n  members:\n    - PM\n    - Vincent\n    - Julia\ncars:\n  members:\n    - PM\n    - Julia\ncoffee-break:\n  members:\n    - PM\n    - Vincent\n    - Julia\n    - Patrik\n")),Object(c.b)("p",null,"This is represented in Ory Keto by the following\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/concepts/relation-tuples"}),"relation tuples"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-keto-relation-tuples"}),"chats:memes#member@PM\nchats:memes#member@Vincent\nchats:memes#member@Julia\n\nchats:cars#member@PM\nchats:cars#member@Julia\n\nchats:coffee-break#member@PM\nchats:coffee-break#member@Vincent\nchats:coffee-break#member@Julia\nchats:coffee-break#member@Patrik\n")),Object(c.b)("p",null,"The user ",Object(c.b)("inlineCode",{parentName:"p"},"PM")," now opens the chat application. To display a list of all of ",Object(c.b)("inlineCode",{parentName:"p"},"PM"),"'s\nchats, the application uses Keto's list API:"),Object(c.b)(o.a,{sampleId:"list-api-display-objects/01-list-PM",version:"v0.6.0-alpha.1",mdxType:"CodeTabs"}),Object(c.b)("p",null,"As a response, the application gets the list of all chats the user ",Object(c.b)("inlineCode",{parentName:"p"},"PM")," is a\nmember of. It can then use the information to build the UI."),Object(c.b)("h3",{id:"listing-subjects"},"Listing Subjects"),Object(c.b)("p",null,"Another view of the chat application has to display all members of a specific\ngroup to the user. This can also be achieved using the list API. In cases where\nsuch a membership would be modeled through\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/concepts/subjects#subject-sets"}),"subject sets"),", you have to use the\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/guides/expand-api-display-who-has-access"}),"expand-API"),"."),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"In this case the application should probably first use the\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/guides/simple-access-check-guide"}),"check-API")," to check whether the user is\nallowed to list the members of a group. This step is not part of this example."))),Object(c.b)("p",null,"In our example, a user wants to see who is a member of the ",Object(c.b)("inlineCode",{parentName:"p"},"coffee-break")," group:"),Object(c.b)(o.a,{sampleId:"list-api-display-objects/02-list-coffee-break",version:"v0.6.0-alpha.1",mdxType:"CodeTabs"}),Object(c.b)("h2",{id:"application-context"},"Application Context"),Object(c.b)("p",null,"It is important to note that the list API does ",Object(c.b)("strong",{parentName:"p"},"not")," expand\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/concepts/subjects#subject-sets"}),"subject sets"),'. Usually the application\nhas some context to determine what tuples to query anyway. That could be e.g.\nknowledge of the structure of subject sets like depth or hierarchy, or the UI\ncontext, like a "My Items" view which should probably contain other objects than\na "My Organizations" or "Shared with Me" views. If there really is no way to\nnarrow down a query, you will have to use the\n',Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"./expand-api-display-who-has-access"}),"expand-API")," instead, or repeatedly call\nthe list API. Try to avoid such cases because they require a lot of resources\nand can quickly degrade the service quality for all users. Please refer to the\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/performance"}),"performance considerations"),"."),Object(c.b)("h2",{id:"pagination"},"Pagination"),Object(c.b)("p",null,"The list API only returns paginated results. Currently, it is not possible to\ncustomize the order of results. The response returns an opaque token that has to\nbe used to retrieve the following page. The first page can be retrieved by\npassing no, or an empty token."),Object(c.b)("p",null,"The page size can be adjusted at any point, not only when requesting the first\npage. It defaults to 100 items."))}u.isMDXComponent=!0},196:function(e,t,a){"use strict";var n=a(21),s={punctuation:/[:#@()]/},c={pattern:/[^:#@()\n]+:/,inside:Object.assign({},s,{namespace:/.*/})},o={pattern:/[^:#@()\n]+#/,inside:Object.assign({},s,{symbol:/.*/})},i={pattern:/[^:#@()\n]+/,alias:"string"},r={pattern:/@[^:#@()\n]+/,inside:Object.assign({},s,{keyword:/.*/})},l={pattern:/@\(([^:#@()\n]+:)?([^:#@()\n]+)#([^:#@()\n]*)\)/,inside:{punctuation:/[@()]/,namespace:c,object:o,relation:i}};n.a.languages["keto-relation-tuples"]={comment:/\/\/.*(\n|$)/,"relation-tuple":{pattern:/([^:#@()\n]+:)?([^:#@()\n]+)#([^:#@()\n]+)@?((\(([^:#@()\n]+:)?([^:#@()\n]+)#([^:#@()\n]*)\))|([^:#@()\n]+))/,inside:{namespace:c,object:o,subjectID:r,subjectSet:l,relation:i}}},t.a=function(){}},207:function(e,t,a){"use strict";var n=a(0),s=a.n(n),c=a(204),o=a(198),i=a(54),r=a.n(i),l=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,p=e.values,u=e.groupId,d=e.className,h=Object(c.a)(),m=h.tabGroupChoices,j=h.setTabGroupChoices,f=Object(n.useState)(i),g=f[0],v=f[1],O=n.Children.toArray(e.children);if(null!=u){var y=m[u];null!=y&&y!==g&&p.some((function(e){return e.value===y}))&&v(y)}var w=function(e){v(e),null!=u&&j(u,e)},k=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},d)},p.map((function(e){var t=e.value,a=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(o.a)("tabs__item",r.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},a)}))),t?Object(n.cloneElement)(O.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):s.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},208:function(e,t,a){"use strict";var n=a(3),s=a(0),c=a.n(s);t.a=function(e){var t=e.children,a=e.hidden,s=e.className;return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:s}),t)}},226:function(e,t,a){"use strict";var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,n.fetch&&(t.default=n.fetch.bind(n)),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response},227:function(e,t,a){"use strict";var n=a(0),s=a.n(n),c=a(207),o=a(208),i=a(226),r=a.n(i),l=a(254),b=a(56),p=a.n(b),u=function(e,t){if(!e)return 0;var a=t.findIndex((function(t){return t.indexOf(e)>-1}));return-1===a?0:a},d=function(e){var t=e.src,a=e.title,c=Object(n.useState)(""),o=c[0],i=c[1];Object(n.useEffect)((function(){var a,n,s;r()(t.replace("github.com","raw.githubusercontent.com").replace("/blob/","/")).then((function(e){return e.text()})).then((a=e,n=a.startAt,s=a.endAt,function(e){var t=e.split("\n"),a=u(n,t);a>0&&(t=["// ..."].concat(t.slice(a,-1)));var c=u(s,t);return c>0&&(t=[].concat(t.slice(0,c+1),["// ..."])),t.join("\n")})).then(i).catch(console.error)}),[]);var b="language-"+function(e){var t=e.split(".").pop();switch(t){case"jsx":return"jsx";case"tsx":return"tsx";case"ts":return"typescript";case"go":return"go";case"yaml":case"yml":return"yaml";case"js":return"javascript";case"html":return"html";case"pug":return"pug";default:return t}}(t),d='title="'+(a||function(e){var t=e.match(new RegExp("https://github.com/[^/]+/[^/]+/blob/[^/]+/(.+)","i"))||[];return t.length>=2?t[1]:e}(t))+'"';return s.a.createElement("div",{className:p.a.container},s.a.createElement(l.a,{metastring:d,className:b,children:o}))};t.a=function(e){var t=e.sampleId,a=e.version;return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,{values:[{label:"gRPC Go",value:"grpc-go"},{label:"gRPC node.js",value:"grpc-nodejs"},{label:"REST",value:"rest"},{label:"Keto Client CLI",value:"cli"}],defaultValue:"grpc-go"},s.a.createElement(o.a,{value:"grpc-go"},s.a.createElement(d,{src:"https://github.com/ory/keto/blob/"+a+"/contrib/docs-code-samples/"+t+"/main.go"})),s.a.createElement(o.a,{value:"grpc-nodejs"},s.a.createElement(d,{src:"https://github.com/ory/keto/blob/"+a+"/contrib/docs-code-samples/"+t+"/index.js"})),s.a.createElement(o.a,{value:"rest"},s.a.createElement(d,{src:"https://github.com/ory/keto/blob/"+a+"/contrib/docs-code-samples/"+t+"/curl.sh"})),s.a.createElement(o.a,{value:"cli"},s.a.createElement(d,{src:"https://github.com/ory/keto/blob/"+a+"/contrib/docs-code-samples/"+t+"/cli.sh"}))),s.a.createElement(d,{src:"https://github.com/ory/keto/blob/"+a+"/contrib/docs-code-samples/"+t+"/expected_output.txt",title:"Result"}))}}}]);