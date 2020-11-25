(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{119:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},l=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),l=n,f=d["".concat(c,".").concat(l)]||d[l]||h[l]||a;return r?o.a.createElement(f,i(i({ref:t},p),{},{components:r})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=l;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},63:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(119)),c={id:"oauth2-token-introspection-hydra",title:"Connect to ORY Hydra OAuth2 Token Introspection"},i={unversionedId:"oauth2-token-introspection-hydra",id:"oauth2-token-introspection-hydra",isDocsHomePage:!1,title:"Connect to ORY Hydra OAuth2 Token Introspection",description:"This document is a work in progress.",source:"@site/docs/scope-strategies-hydra.mdx",slug:"/oauth2-token-introspection-hydra",permalink:"/oathkeeper/docs/next/oauth2-token-introspection-hydra",editUrl:"https://github.com/ory/oathkeeper/edit/master/docs/docs/scope-strategies-hydra.mdx",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1605018889,sidebar:"docs",previous:{title:"Configure and Deploy",permalink:"/oathkeeper/docs/next/configure-deploy"},next:{title:"Configuration",permalink:"/oathkeeper/docs/next/reference/configuration"}},s=[{value:"Synchronize Access Token / OAuth2 Scope Strategy",id:"synchronize-access-token--oauth2-scope-strategy",children:[]}],p={rightToc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This document is a work in progress."),Object(a.b)("h2",{id:"synchronize-access-token--oauth2-scope-strategy"},"Synchronize Access Token / OAuth2 Scope Strategy"),Object(a.b)("p",null,"When using ORY Oathkeeper together with ORY Hydra the scope strategy needs to be kept in sync."),Object(a.b)("p",null,"ORY Oathkeeper sends the scope as part of the introspection request. ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.oauth.com/oauth2-servers/token-introspection-endpoint/"}),"(More about token introspection)")),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ory.sh/hydra/docs/guides/oauth2-token-introspection/"}),"Hydra")," processes this scope parameter (which is actually not defined in the OAuth2 Introspection RFC) according to the scope strategy defined in Hydra."),Object(a.b)("p",null,"The scope strategy defined in ORY Oathkeeper serves as a fallback for when OAuth2 servers do not implement this feature."),Object(a.b)("p",null,"Therefore, these two settings must be kept in sync."),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ory.sh/hydra/docs/reference/api#parameters-27"}),"Here")," you can find the Hydra setting and ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ory.sh/oathkeeper/docs/v0.37/pipeline/authn/#configuration-5"}),"here")," the respective one for Oathkeeper."),Object(a.b)("p",null,"The same problem would arise if you configure your client to be allowed to request scope foo and your OAuth2 request requests foo.bar."))}u.isMDXComponent=!0}}]);