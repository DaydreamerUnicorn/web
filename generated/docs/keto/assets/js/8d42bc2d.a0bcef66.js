(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[1048],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return u}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=i,h=m["".concat(l,".").concat(u)]||m[u]||k[u]||n;return a?r.createElement(h,s(s({ref:t},p),{},{components:a})):r.createElement(h,s({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<n;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},10043:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=a(22122),i=a(19756),n=(a(67294),a(3905)),s=["components"],o={id:"milestones",title:"Milestones and Roadmap"},l=void 0,c={unversionedId:"milestones",id:"version-v0.7/milestones",isDocsHomePage:!1,title:"Milestones and Roadmap",description:"v0.7.0-alpha.0.pre.2",source:"@site/versioned_docs/version-v0.7/milestones.md",sourceDirName:".",slug:"/milestones",permalink:"/keto/docs/milestones",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.7/milestones.md",tags:[],version:"v0.7",lastUpdatedBy:"zepatrik",lastUpdatedAt:1633352919,formattedLastUpdatedAt:"10/4/2021",frontMatter:{id:"milestones",title:"Milestones and Roadmap"},sidebar:"version-v0.7/docs",previous:{title:"Overview",permalink:"/keto/docs/sdk/index"}},p=[{value:"v0.7.0-alpha.0.pre.2",id:"v070-alpha0pre2",children:[{value:"Bug",id:"bug",children:[]},{value:"Feat",id:"feat",children:[]},{value:"Docs",id:"docs",children:[]},{value:"Ci",id:"ci",children:[]},{value:"Blocking",id:"blocking",children:[]}]}],k={toc:p};function m(e){var t=e.components,a=(0,i.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"v070-alpha0pre2"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/ory/keto/milestone/5"},"v0.7.0-alpha.0.pre.2")),(0,n.kt)("p",null,"The biggest change for the next release will be the new SQL table structure\n(",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ory/keto/pull/638"},"https://github.com/ory/keto/pull/638"),"). The main goal is to improve the QoS, big\nfeatures are planned for the next release."),(0,n.kt)("h3",{id:"bug"},(0,n.kt)("a",{parentName:"h3",href:"https://github.com/ory/keto/labels/bug"},"Bug")),(0,n.kt)("p",null,"Something is not working."),(0,n.kt)("h4",{id:"issues"},"Issues"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Check valid relation-tuple characters on insert\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ory/keto/issues/661"},"keto#661"),")"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Keto version API does not work in REST API and CLI.\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ory/keto/issues/696"},"keto#696"),") -\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/zepatrik"},"@Patrik")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Keto patch relation tuple REST API panic rather than return bad request\nfor wrong input. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ory/keto/issues/706"},"keto#706"),") -\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/zepatrik"},"@Patrik")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Change REST API to not work with encoded subjects\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ory/keto/issues/708"},"keto#708"),")"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Config schema: replace ",(0,n.kt)("inlineCode",{parentName:"li"},"ory://*")," references with something actually\nresolvable (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ory/keto/issues/719"},"keto#719"),") -\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/zepatrik"},"@Patrik")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Docker files and docker-compose.yml do not work on master\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ory/keto/issues/725"},"keto#725"),") -\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/zepatrik"},"@Patrik"))),(0,n.kt)("h3",{id:"feat"},(0,n.kt)("a",{parentName:"h3",href:"https://github.com/ory/keto/labels/feat"},"Feat")),(0,n.kt)("p",null,"New feature or request."),(0,n.kt)("h4",{id:"issues-1"},"Issues"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Ensure telemetry is running for GRPC\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ory/keto/issues/298"},"keto#298"),") -\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman"),",\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/zepatrik"},"@Patrik"),",\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/robinbraemer"},"@Robin Br\xe4mer")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Single table migration: run as one big transaction\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ory/keto/issues/734"},"keto#734"),") -\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/zepatrik"},"@Patrik"))),(0,n.kt)("h3",{id:"docs"},(0,n.kt)("a",{parentName:"h3",href:"https://github.com/ory/keto/labels/docs"},"Docs")),(0,n.kt)("p",null,"Affects documentation."),(0,n.kt)("h4",{id:"issues-2"},"Issues"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Guide for data migration to new single table schema\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ory/keto/issues/733"},"keto#733"),") -\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/zepatrik"},"@Patrik")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Document and improve go gRPC client import\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ory/keto/issues/635"},"keto#635"),")")),(0,n.kt)("h3",{id:"ci"},(0,n.kt)("a",{parentName:"h3",href:"https://github.com/ory/keto/labels/ci"},"Ci")),(0,n.kt)("p",null,"Affects Continuous Integration (CI)."),(0,n.kt)("h4",{id:"issues-3"},"Issues"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Document and improve go gRPC client import\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ory/keto/issues/635"},"keto#635"),")"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Keto version API does not work in REST API and CLI.\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ory/keto/issues/696"},"keto#696"),") -\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/zepatrik"},"@Patrik")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Config schema: replace ",(0,n.kt)("inlineCode",{parentName:"li"},"ory://*")," references with something actually\nresolvable (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ory/keto/issues/719"},"keto#719"),") -\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/zepatrik"},"@Patrik"))),(0,n.kt)("h3",{id:"blocking"},(0,n.kt)("a",{parentName:"h3",href:"https://github.com/ory/keto/labels/blocking"},"Blocking")),(0,n.kt)("p",null,"Blocks milestones or other issues or pulls."),(0,n.kt)("h4",{id:"issues-4"},"Issues"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Ensure telemetry is running for GRPC\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ory/keto/issues/298"},"keto#298"),") -\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/aeneasr"},"@hackerman"),",\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/zepatrik"},"@Patrik"),",\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/robinbraemer"},"@Robin Br\xe4mer")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Config schema: replace ",(0,n.kt)("inlineCode",{parentName:"li"},"ory://*")," references with something actually\nresolvable (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ory/keto/issues/719"},"keto#719"),") -\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/zepatrik"},"@Patrik")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Docker files and docker-compose.yml do not work on master\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ory/keto/issues/725"},"keto#725"),") -\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/zepatrik"},"@Patrik"))))}m.isMDXComponent=!0}}]);