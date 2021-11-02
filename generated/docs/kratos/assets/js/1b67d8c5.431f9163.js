(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[37218],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,s(s({ref:e},p),{},{components:n})):r.createElement(m,s({ref:e},p))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31461:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),s=["components"],i={id:"kratos-jsonnet-lint",title:"kratos jsonnet lint",description:"kratos jsonnet lint"},c=void 0,l={unversionedId:"cli/kratos-jsonnet-lint",id:"version-v0.8/cli/kratos-jsonnet-lint",isDocsHomePage:!1,title:"kratos jsonnet lint",description:"kratos jsonnet lint",source:"@site/versioned_docs/version-v0.8/cli/kratos-jsonnet-lint.md",sourceDirName:"cli",slug:"/cli/kratos-jsonnet-lint",permalink:"/kratos/docs/cli/kratos-jsonnet-lint",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.8/cli/kratos-jsonnet-lint.md",tags:[],version:"v0.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1635084599,formattedLastUpdatedAt:"10/24/2021",frontMatter:{id:"kratos-jsonnet-lint",title:"kratos jsonnet lint",description:"kratos jsonnet lint"},sidebar:"version-v0.8/docs",previous:{title:"kratos jsonnet format",permalink:"/kratos/docs/cli/kratos-jsonnet-format"},next:{title:"kratos migrate",permalink:"/kratos/docs/cli/kratos-migrate"}},p=[{value:"kratos jsonnet lint",id:"kratos-jsonnet-lint",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],u={toc:p};function d(t){var e=t.components,n=(0,o.Z)(t,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"kratos-jsonnet-lint"},"kratos jsonnet lint"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Lints JSONNet files using the official JSONNet linter and exits with a status\ncode of 1 when issues are detected."),(0,a.kt)("p",null,"Glob Syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pattern:\n    { term }\n\nterm:\n    &#39;*&#39;         matches any sequence of non-separator characters\n    &#39;**&#39;        matches any sequence of characters\n    &#39;?&#39;         matches any single non-separator character\n    &#39;[&#39; [ &#39;!&#39; ] { character-range } &#39;]&#39;\n                character class (must be non-empty)\n    &#39;{&#39; pattern-list &#39;}&#39;\n                pattern alternatives\n    c           matches character c (c != &#39;*&#39;, &#39;**&#39;, &#39;?&#39;, &#39;\\&#39;, &#39;[&#39;, &#39;{&#39;, &#39;}&#39;)\n    &#39;\\&#39; c       matches character c\n\ncharacter-range:\n    c           matches character c (c != &#39;\\\\&#39;, &#39;-&#39;, &#39;]&#39;)\n    &#39;\\&#39; c       matches character c\n    lo &#39;-&#39; hi   matches character c for lo &lt;= c &lt;= hi\n\npattern-list:\n    pattern { &#39;,&#39; pattern }\n                comma-separated (without spaces) patterns\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kratos jsonnet lint path/to/files/*.jsonnet [more/files.jsonnet, [supports/**/{foo,bar}.jsonnet]] [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help   help for lint\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"kratos-jsonnet"},"kratos jsonnet")," - Helpers for linting and formatting JSONNet\ncode")))}d.isMDXComponent=!0}}]);