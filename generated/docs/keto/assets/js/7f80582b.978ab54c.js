(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[1288],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28902:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a={id:"keto-migrate-down",title:"keto migrate down",description:"keto migrate down Migrate the database down"},s=void 0,c={unversionedId:"cli/keto-migrate-down",id:"cli/keto-migrate-down",isDocsHomePage:!1,title:"keto migrate down",description:"keto migrate down Migrate the database down",source:"@site/docs/cli/keto-migrate-down.md",sourceDirName:"cli",slug:"/cli/keto-migrate-down",permalink:"/keto/docs/next/cli/keto-migrate-down",editUrl:"https://github.com/ory/keto/edit/master/docs/docs/cli/keto-migrate-down.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619369953,formattedLastUpdatedAt:"4/25/2021",frontMatter:{id:"keto-migrate-down",title:"keto migrate down",description:"keto migrate down Migrate the database down"},sidebar:"docs",previous:{title:"keto migrate",permalink:"/keto/docs/next/cli/keto-migrate"},next:{title:"keto migrate status",permalink:"/keto/docs/next/cli/keto-migrate-status"}},d=[{value:"keto migrate down",id:"keto-migrate-down",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"keto-migrate-down"},"keto migrate down"),(0,i.kt)("p",null,"Migrate the database down"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Migrate the database down a specific amount of steps. Pass 0 steps to fully\nmigrate down. This does not affect namespaces. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"keto namespace migrate down"),"\nfor migrating namespaces."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"keto migrate down &lt;steps&gt; [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -f, --format string   Set the output format. One of table, json, and json-pretty. (default &#34;default&#34;)\n  -h, --help            help for down\n  -q, --quiet           Be quiet with output printing.\n  -y, --yes             yes to all questions, no user input required\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -c, --config strings   Config files to load, overwriting in the order specified. (default [/home/circleci/keto.yml])\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"keto-migrate"},"keto migrate")," - Commands to migrate the database")))}p.isMDXComponent=!0}}]);