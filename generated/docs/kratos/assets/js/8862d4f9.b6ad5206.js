(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{264:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),a=(n(0),n(452)),s={id:"kratos-jsonnet-format",title:"kratos jsonnet format",description:"kratos jsonnet format"},c={unversionedId:"cli/kratos-jsonnet-format",id:"version-v0.5/cli/kratos-jsonnet-format",isDocsHomePage:!1,title:"kratos jsonnet format",description:"kratos jsonnet format",source:"@site/versioned_docs/version-v0.5/cli/kratos-jsonnet-format.md",slug:"/cli/kratos-jsonnet-format",permalink:"/kratos/docs/cli/kratos-jsonnet-format",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/cli/kratos-jsonnet-format.md",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1607456241,formattedLastUpdatedAt:"12/8/2020",sidebar:"version-v0.5/docs",previous:{title:"kratos jsonnet",permalink:"/kratos/docs/cli/kratos-jsonnet"},next:{title:"kratos jsonnet lint",permalink:"/kratos/docs/cli/kratos-jsonnet-lint"}},i=[{value:"kratos jsonnet format",id:"kratos-jsonnet-format",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={toc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"kratos-jsonnet-format"},"kratos jsonnet format"),Object(a.b)("h3",{id:"synopsis"},"Synopsis"),Object(a.b)("p",null,"Formats JSONNet files using the official JSONNet formatter."),Object(a.b)("p",null,"Use -w or --write to write output back to files instead of stdout."),Object(a.b)("p",null,"Glob Syntax:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"pattern:\n    { term }\n\nterm:\n    '*'         matches any sequence of non-separator characters\n    '**'        matches any sequence of characters\n    '?'         matches any single non-separator character\n    '[' [ '!' ] { character-range } ']'\n                character class (must be non-empty)\n    '{' pattern-list '}'\n                pattern alternatives\n    c           matches character c (c != '*', '**', '?', '\\', '[', '{', '}')\n    '\\' c       matches character c\n\ncharacter-range:\n    c           matches character c (c != '\\\\', '-', ']')\n    '\\' c       matches character c\n    lo '-' hi   matches character c for lo <= c <= hi\n\npattern-list:\n    pattern { ',' pattern }\n                comma-separated (without spaces) patterns\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"kratos jsonnet format path/to/files/*.jsonnet [more/files.jsonnet, [supports/**/{foo,bar}.jsonnet]] [flags]\n")),Object(a.b)("h3",{id:"options"},"Options"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"  -h, --help    help for format\n  -w, --write   Write formatted output back to file.\n")),Object(a.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'  -c, --config string   Path to config file. Supports .json, .yaml, .yml, .toml. Default is "$HOME/.kratos.(yaml|yml|toml|json)"\n')),Object(a.b)("h3",{id:"see-also"},"SEE ALSO"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"kratos-jsonnet"},"kratos jsonnet")," - Helpers for linting and formatting JSONNet\ncode")))}p.isMDXComponent=!0},452:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,d=m["".concat(s,".").concat(u)]||m[u]||f[u]||a;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);