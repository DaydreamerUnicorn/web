(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),a=(n(0),n(215)),c={id:"federation",title:"Federation"},i={id:"concepts/federation",title:"Federation",description:"ORY Kratos does not support federation features itself, but it integrates with",source:"@site/docs/concepts/federation.md",permalink:"/kratos/docs/next/concepts/federation",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/concepts/federation.md",version:"next",lastUpdatedBy:"hackerman",lastUpdatedAt:1586177162,sidebar:"docs",previous:{title:"Out-of-band communication via E-Mail and SMS",permalink:"/kratos/docs/next/concepts/email-sms"},next:{title:"Threat Models and Security Profiles",permalink:"/kratos/docs/next/concepts/security"}},p=[{value:"Becoming an OAuth2 and OpenID Connect Provider",id:"becoming-an-oauth2-and-openid-connect-provider",children:[]}],s={rightToc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"ORY Kratos does not support federation features itself, but it integrates with\nprojects like ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.ory.sh/hydra"}),"ORY Hydra")," that implement federation\nprotocols."),Object(a.b)("h2",{id:"becoming-an-oauth2-and-openid-connect-provider"},"Becoming an OAuth2 and OpenID Connect Provider"),Object(a.b)("p",null,"Future releases of ORY Kratos will integrate with\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.ory.sh/hydra"}),"ORY Hydra")," natively to support OAuth2 and OpenID\nConnect use cases."))}u.isMDXComponent=!0},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,b=d["".concat(c,".").concat(f)]||d[f]||l[f]||a;return n?o.a.createElement(b,i({ref:t},s,{components:n})):o.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);