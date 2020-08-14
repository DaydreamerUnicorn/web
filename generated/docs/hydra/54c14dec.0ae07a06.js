(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{137:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return s})),n.d(r,"rightToc",(function(){return c})),n.d(r,"default",(function(){return d}));var t=n(2),o=n(6),a=(n(0),n(308)),i={id:"hydra-serve-all",title:"hydra serve all",description:"hydra serve all Serves both public and administrative HTTP/2 APIs"},s={unversionedId:"cli/hydra-serve-all",id:"version-v1.7/cli/hydra-serve-all",isDocsHomePage:!1,title:"hydra serve all",description:"hydra serve all Serves both public and administrative HTTP/2 APIs",source:"@site/versioned_docs/version-v1.7/cli/hydra-serve-all.md",permalink:"/hydra/docs/cli/hydra-serve-all",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.7/cli/hydra-serve-all.md",version:"v1.7",sidebar:"version-v1.7/docs",previous:{title:"hydra serve admin",permalink:"/hydra/docs/cli/hydra-serve-admin"},next:{title:"hydra serve public",permalink:"/hydra/docs/cli/hydra-serve-public"}},c=[{value:"hydra serve all",id:"hydra-serve-all",children:[{value:"Synopsis",id:"synopsis",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={rightToc:c};function d(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"hydra-serve-all"},"hydra serve all"),Object(a.b)("p",null,"Serves both public and administrative HTTP/2 APIs"),Object(a.b)("h3",{id:"synopsis"},"Synopsis"),Object(a.b)("p",null,"Starts a process which listens on two ports for public and administrative HTTP/2\nAPI requests."),Object(a.b)("p",null,'If you want more granular control (e.g. different TLS settings) over each API\ngroup (administrative, public) you can run "serve admin" and "serve public"\nseparately.'),Object(a.b)("p",null,'This command exposes a variety of controls via environment variables. You can\nset environments using "export KEY=VALUE" (Linux/macOS) or "set KEY=VALUE"\n(Windows). On Linux, you can also set environments by prepending key value\npairs: "KEY=VALUE KEY2=VALUE2 hydra"'),Object(a.b)("p",null,"All possible controls are listed below. This command exposes exposes command\nline flags, which are listed below the controls section."),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"ORY Hydra can be configured using environment variables as well as a\nconfiguration file. For more information on configuration options, open the\nconfiguration documentation:"),Object(a.b)("blockquote",null,Object(a.b)("blockquote",{parentName:"blockquote"},Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/ory/hydra/blob/undefined/docs/config.yaml"}),"https://github.com/ory/hydra/blob/undefined/docs/config.yaml")," <<"))),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{}),"hydra serve all [flags]\n")),Object(a.b)("h3",{id:"options"},"Options"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{}),"  -h, --help   help for all\n")),Object(a.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{}),"      --config string                                    Config file (default is $HOME/.hydra.yaml)\n      --dangerous-allow-insecure-redirect-urls strings   DO NOT USE THIS IN PRODUCTION - Disable HTTPS enforcement for the provided redirect URLs\n      --dangerous-force-http                             DO NOT USE THIS IN PRODUCTION - Disables HTTP/2 over TLS (HTTPS) and serves HTTP instead\n      --disable-telemetry                                Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n      --skip-tls-verify                                  Foolishly accept TLS certificates signed by unkown certificate authorities\n      --sqa-opt-out                                      Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n")),Object(a.b)("h3",{id:"see-also"},"SEE ALSO"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(t.a)({parentName:"li"},{href:"hydra-serve"}),"hydra serve")," - Parent command for starting public and\nadministrative HTTP/2 APIs")))}d.isMDXComponent=!0},308:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return m}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var r=o.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=d(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),b=t,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||a;return n?o.a.createElement(m,s(s({ref:r},l),{},{components:n})):o.a.createElement(m,s({ref:r},l))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);