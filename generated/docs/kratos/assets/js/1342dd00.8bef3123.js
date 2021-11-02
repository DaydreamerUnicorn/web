(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[17970],{3905:function(t,e,i){"use strict";i.d(e,{Zo:function(){return d},kt:function(){return u}});var n=i(67294);function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function a(t,e){if(null==t)return{};var i,n,r=function(t,e){if(null==t)return{};var i,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}var l=n.createContext({}),p=function(t){var e=n.useContext(l),i=e;return t&&(i="function"==typeof t?t(e):s(s({},e),t)),i},d=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var i=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,d=a(t,["components","mdxType","originalType","parentName"]),m=p(i),u=r,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return i?n.createElement(f,s(s({ref:e},d),{},{components:i})):n.createElement(f,s({ref:e},d))}));function u(t,e){var i=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=i.length,s=new Array(o);s[0]=m;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=t,a.mdxType="string"==typeof t?t:r,s[1]=a;for(var p=2;p<o;p++)s[p]=i[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},95099:function(t,e,i){"use strict";i.r(e),i.d(e,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=i(22122),r=i(19756),o=(i(67294),i(3905)),s=["components"],a={id:"kratos-identities-import",title:"kratos identities import",description:"kratos identities import Import identities from files or STD_IN"},l=void 0,p={unversionedId:"cli/kratos-identities-import",id:"cli/kratos-identities-import",isDocsHomePage:!1,title:"kratos identities import",description:"kratos identities import Import identities from files or STD_IN",source:"@site/docs/cli/kratos-identities-import.md",sourceDirName:"cli",slug:"/cli/kratos-identities-import",permalink:"/kratos/docs/next/cli/kratos-identities-import",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/cli/kratos-identities-import.md",tags:[],version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1634916379,formattedLastUpdatedAt:"10/22/2021",frontMatter:{id:"kratos-identities-import",title:"kratos identities import",description:"kratos identities import Import identities from files or STD_IN"},sidebar:"docs",previous:{title:"kratos identities get",permalink:"/kratos/docs/next/cli/kratos-identities-get"},next:{title:"kratos identities list",permalink:"/kratos/docs/next/cli/kratos-identities-list"}},d=[{value:"kratos identities import",id:"kratos-identities-import",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],c={toc:d};function m(t){var e=t.components,i=(0,r.Z)(t,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"kratos-identities-import"},"kratos identities import"),(0,o.kt)("p",null,"Import identities from files or STD_IN"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Import identities from files or STD_IN."),(0,o.kt)("p",null,"Files can contain only a single or an array of identities. The validity of files\ncan be tested beforehand using ",'"',"... identities validate",'"',"."),(0,o.kt)("p",null,"WARNING: Importing credentials is not yet supported."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kratos identities import &lt;file.json [file-2.json [file-3.json] ...]&gt; [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cat &gt; ./file.json &lt;&lt;EOF\n{\n    &#34;schema_id&#34;: &#34;default&#34;,\n    &#34;traits&#34;: {\n        &#34;email&#34;: &#34;foo@example.com&#34;\n    }\n}\nEOF\n\n$ kratos identities import file.json\n# Alternatively:\n$ cat file.json | kratos identities import\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for import\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -e, --endpoint string   The URL of Ory Kratos&#39; Admin API. Alternatively set using the KRATOS_ADMIN_URL environmental variable.\n  -f, --format string     Set the output format. One of table, json, and json-pretty. (default &#34;default&#34;)\n  -q, --quiet             Be quiet with output printing.\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kratos-identities"},"kratos identities")," - Tools to interact with remote\nidentities")))}m.isMDXComponent=!0}}]);