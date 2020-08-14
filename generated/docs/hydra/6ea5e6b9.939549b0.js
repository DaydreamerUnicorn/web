(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),o=(n(0),n(308)),i={id:"hydra-token-flush",title:"hydra token flush",description:"hydra token flush Removes inactive access tokens from the database"},c={unversionedId:"cli/hydra-token-flush",id:"cli/hydra-token-flush",isDocsHomePage:!1,title:"hydra token flush",description:"hydra token flush Removes inactive access tokens from the database",source:"@site/docs/cli/hydra-token-flush.md",permalink:"/hydra/docs/next/cli/hydra-token-flush",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/cli/hydra-token-flush.md",version:"next",lastUpdatedBy:"aeneasr",lastUpdatedAt:1597405950,sidebar:"docs",previous:{title:"hydra token client",permalink:"/hydra/docs/next/cli/hydra-token-client"},next:{title:"hydra token introspect",permalink:"/hydra/docs/next/cli/hydra-token-introspect"}},s=[{value:"hydra token flush",id:"hydra-token-flush",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={rightToc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hydra-token-flush"},"hydra token flush"),Object(o.b)("p",null,"Removes inactive access tokens from the database"),Object(o.b)("h3",{id:"synopsis"},"Synopsis"),Object(o.b)("p",null,"Removes inactive access tokens from the database"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"hydra token flush [flags]\n")),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"      --access-token string   Set an access token to be used in the Authorization header, defaults to environment variable OAUTH2_ACCESS_TOKEN\n      --endpoint string       Set the URL where ORY Hydra is hosted, defaults to environment variable HYDRA_ADMIN_URL\n  -h, --help                  help for flush\n      --min-age duration      Skip removing tokens which do not satisfy the minimum age (1s, 1m, 1h)\n")),Object(o.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'      --config string          Config file (default is $HOME/.hydra.yaml)\n      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   fake tls termination by adding "X-Forwarded-Proto: https" to http headers\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unkown certificate authorities\n')),Object(o.b)("h3",{id:"see-also"},"SEE ALSO"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"hydra-token"}),"hydra token")," - Issue and Manage OAuth2 tokens")))}d.isMDXComponent=!0},308:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,f=u["".concat(i,".").concat(h)]||u[h]||p[h]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);