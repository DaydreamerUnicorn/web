(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{241:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(411)),c={id:"kratos-jsonnet-format",title:"kratos jsonnet format",description:"kratos jsonnet format"},s={unversionedId:"cli/kratos-jsonnet-format",id:"version-v0.5/cli/kratos-jsonnet-format",isDocsHomePage:!1,title:"kratos jsonnet format",description:"kratos jsonnet format",source:"@site/versioned_docs/version-v0.5/cli/kratos-jsonnet-format.md",slug:"/cli/kratos-jsonnet-format",permalink:"/kratos/docs/cli/kratos-jsonnet-format",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/cli/kratos-jsonnet-format.md",version:"v0.5",sidebar:"version-v0.5/docs",previous:{title:"kratos jsonnet",permalink:"/kratos/docs/cli/kratos-jsonnet"},next:{title:"kratos jsonnet lint",permalink:"/kratos/docs/cli/kratos-jsonnet-lint"}},i=[{value:"kratos jsonnet format",id:"kratos-jsonnet-format",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={rightToc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"kratos-jsonnet-format"},"kratos jsonnet format"),Object(a.b)("h3",{id:"synopsis"},"Synopsis"),Object(a.b)("p",null,"Formats JSONNet files using the official JSONNet formatter."),Object(a.b)("p",null,"Use -w or --write to write output back to files instead of stdout."),Object(a.b)("p",null,"Glob Syntax:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"pattern:\n    { term }\n\nterm:\n    '*'         matches any sequence of non-separator characters\n    '**'        matches any sequence of characters\n    '?'         matches any single non-separator character\n    '[' [ '!' ] { character-range } ']'\n                character class (must be non-empty)\n    '{' pattern-list '}'\n                pattern alternatives\n    c           matches character c (c != '*', '**', '?', '\\', '[', '{', '}')\n    '\\' c       matches character c\n\ncharacter-range:\n    c           matches character c (c != '\\\\', '-', ']')\n    '\\' c       matches character c\n    lo '-' hi   matches character c for lo <= c <= hi\n\npattern-list:\n    pattern { ',' pattern }\n                comma-separated (without spaces) patterns\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"kratos jsonnet format path/to/files/*.jsonnet [more/files.jsonnet, [supports/**/{foo,bar}.jsonnet]] [flags]\n")),Object(a.b)("h3",{id:"options"},"Options"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"  -h, --help    help for format\n  -w, --write   Write formatted output back to file.\n")),Object(a.b)("h3",{id:"see-also"},"SEE ALSO"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"kratos-jsonnet"}),"kratos jsonnet")," - Helpers for linting and formatting JSONNet code")))}p.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(c,".").concat(m)]||u[m]||f[m]||a;return n?o.a.createElement(b,s(s({ref:t},l),{},{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);