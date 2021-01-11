(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{193:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(442)),i={id:"kratos-remote",title:"kratos remote",description:"kratos remote Helpers and management for remote ORY Kratos instances"},s={unversionedId:"cli/kratos-remote",id:"version-v0.5/cli/kratos-remote",isDocsHomePage:!1,title:"kratos remote",description:"kratos remote Helpers and management for remote ORY Kratos instances",source:"@site/versioned_docs/version-v0.5/cli/kratos-remote.md",slug:"/cli/kratos-remote",permalink:"/kratos/docs/cli/kratos-remote",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/cli/kratos-remote.md",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1607456241,sidebar:"version-v0.5/docs",previous:{title:"kratos migrate sql",permalink:"/kratos/docs/cli/kratos-migrate-sql"},next:{title:"kratos remote status",permalink:"/kratos/docs/cli/kratos-remote-status"}},c=[{value:"kratos remote",id:"kratos-remote",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"kratos-remote"},"kratos remote"),Object(a.b)("p",null,"Helpers and management for remote ORY Kratos instances"),Object(a.b)("h3",{id:"synopsis"},"Synopsis"),Object(a.b)("p",null,"Helpers and management for remote ORY Kratos instances"),Object(a.b)("h3",{id:"options"},"Options"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"  -e, --endpoint string   The URL of ORY Kratos' Admin API. Alternatively set using the KRATOS_ADMIN_URL environmental variable.\n  -f, --format string     Set the output format. One of table, json, and json-pretty.\n  -h, --help              help for remote\n  -q, --quiet             Prints only IDs, one per line. Takes precedence over --format.\n")),Object(a.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'  -c, --config string   Path to config file. Supports .json, .yaml, .yml, .toml. Default is "$HOME/.kratos.(yaml|yml|toml|json)"\n')),Object(a.b)("h3",{id:"see-also"},"SEE ALSO"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"kratos"}),"kratos")," -"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"kratos-remote-status"}),"kratos remote status")," - Print the alive and readiness\nstatus of a ORY Kratos instance"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"kratos-remote-version"}),"kratos remote version")," - Print the version of an ORY\nKratos instance")))}p.isMDXComponent=!0},442:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return r?o.a.createElement(b,s(s({ref:t},l),{},{components:r})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);