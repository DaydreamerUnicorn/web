"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[91319],{3905:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return u}});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=p(i),u=n,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return i?r.createElement(f,s(s({ref:t},d),{},{components:i})):r.createElement(f,s({ref:t},d))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var p=2;p<o;p++)s[p]=i[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},9077:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=i(87462),n=i(63366),o=(i(67294),i(3905)),s=["components"],a={id:"kratos-identities-import",title:"kratos identities import",description:"kratos identities import Import identities from files or STD_IN"},l=void 0,p={unversionedId:"cli/kratos-identities-import",id:"version-v0.8/cli/kratos-identities-import",isDocsHomePage:!1,title:"kratos identities import",description:"kratos identities import Import identities from files or STD_IN",source:"@site/versioned_docs/version-v0.8/cli/kratos-identities-import.md",sourceDirName:"cli",slug:"/cli/kratos-identities-import",permalink:"/kratos/docs/v0.8/cli/kratos-identities-import",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.8/cli/kratos-identities-import.md",tags:[],version:"v0.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1635084599,formattedLastUpdatedAt:"10/24/2021",frontMatter:{id:"kratos-identities-import",title:"kratos identities import",description:"kratos identities import Import identities from files or STD_IN"},sidebar:"version-v0.8/docs",previous:{title:"kratos identities get",permalink:"/kratos/docs/v0.8/cli/kratos-identities-get"},next:{title:"kratos identities list",permalink:"/kratos/docs/v0.8/cli/kratos-identities-list"}},d=[{value:"kratos identities import",id:"kratos-identities-import",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],c={toc:d};function m(e){var t=e.components,i=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"kratos-identities-import"},"kratos identities import"),(0,o.kt)("p",null,"Import identities from files or STD_IN"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Import identities from files or STD_IN."),(0,o.kt)("p",null,"Files can contain only a single or an array of identities. The validity of files\ncan be tested beforehand using ",'"',"... identities validate",'"',"."),(0,o.kt)("p",null,"WARNING: Importing credentials is not yet supported."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kratos identities import &lt;file.json [file-2.json [file-3.json] ...]&gt; [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cat &gt; ./file.json &lt;&lt;EOF\n{\n    &#34;schema_id&#34;: &#34;default&#34;,\n    &#34;traits&#34;: {\n        &#34;email&#34;: &#34;foo@example.com&#34;\n    }\n}\nEOF\n\n$ kratos identities import file.json\n# Alternatively:\n$ cat file.json | kratos identities import\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for import\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -e, --endpoint string   The URL of Ory Kratos&#39; Admin API. Alternatively set using the KRATOS_ADMIN_URL environmental variable.\n  -f, --format string     Set the output format. One of table, json, and json-pretty. (default &#34;default&#34;)\n  -q, --quiet             Be quiet with output printing.\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kratos-identities"},"kratos identities")," - Tools to interact with remote\nidentities")))}m.isMDXComponent=!0}}]);