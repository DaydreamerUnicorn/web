(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[49387],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return u},kt:function(){return h}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?t.createElement(m,a(a({ref:r},u),{},{components:n})):t.createElement(m,a({ref:r},u))}));function h(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},35216:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var t=n(22122),o=n(19756),i=(n(67294),n(3905)),a=["components"],s={id:"hydra-serve-public",title:"hydra serve public",description:"hydra serve public Serves Public HTTP/2 APIs"},l=void 0,c={unversionedId:"cli/hydra-serve-public",id:"version-v1.10/cli/hydra-serve-public",isDocsHomePage:!1,title:"hydra serve public",description:"hydra serve public Serves Public HTTP/2 APIs",source:"@site/versioned_docs/version-v1.10/cli/hydra-serve-public.md",sourceDirName:"cli",slug:"/cli/hydra-serve-public",permalink:"/hydra/docs/cli/hydra-serve-public",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/cli/hydra-serve-public.md",version:"v1.10",lastUpdatedBy:"aeneasr",lastUpdatedAt:1626263488,formattedLastUpdatedAt:"7/14/2021",frontMatter:{id:"hydra-serve-public",title:"hydra serve public",description:"hydra serve public Serves Public HTTP/2 APIs"},sidebar:"version-v1.10/docs",previous:{title:"hydra serve all",permalink:"/hydra/docs/cli/hydra-serve-all"},next:{title:"hydra token",permalink:"/hydra/docs/cli/hydra-token"}},u=[{value:"hydra serve public",id:"hydra-serve-public",children:[{value:"Synopsis",id:"synopsis",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],d={toc:u};function p(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hydra-serve-public"},"hydra serve public"),(0,i.kt)("p",null,"Serves Public HTTP/2 APIs"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"This command opens one port and listens to HTTP/2 API requests. The exposed API\nhandles requests coming from the public internet, like OAuth 2.0 Authorization\nand Token requests, OpenID Connect UserInfo, OAuth 2.0 Token Revokation, and\nOpenID Connect Discovery."),(0,i.kt)("p",null,"This command is configurable using the same options available to ",'"',"serve\nadmin",'"'," and ",'"',"serve all",'"',"."),(0,i.kt)("p",null,"It is generally recommended to use this command only if you require granular\ncontrol over the privileged and public APIs. For example, you might want to run\ndifferent TLS certificates or CORS settings on the public and privileged API."),(0,i.kt)("p",null,"This command does not work with the ",'"',"memory",'"'," database. Both services\n(privileged, public) MUST use the same database connection to be able to\nsynchronize."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"ORY Hydra can be configured using environment variables as well as a\nconfiguration file. For more information on configuration options, open the\nconfiguration documentation:"),(0,i.kt)("p",null,">",">"," ",(0,i.kt)("a",{parentName:"p",href:"https://www.ory.sh/hydra/docs/reference/configuration"},"https://www.ory.sh/hydra/docs/reference/configuration")," ","<","<"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hydra serve public [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -h, --help   help for public\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -c, --config strings                                   Path to one or more .json, .yaml, .yml, .toml config files. Values are loaded in the order provided, meaning that the last config file overwrites values from the previous config file.\n      --dangerous-allow-insecure-redirect-urls strings   DO NOT USE THIS IN PRODUCTION - Disable HTTPS enforcement for the provided redirect URLs\n      --dangerous-force-http                             DO NOT USE THIS IN PRODUCTION - Disables HTTP/2 over TLS (HTTPS) and serves HTTP instead\n      --sqa-opt-out                                      Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"hydra-serve"},"hydra serve")," - Parent command for starting public and\nadministrative HTTP/2 APIs")))}p.isMDXComponent=!0}}]);