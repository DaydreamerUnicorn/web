"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[85736],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),l=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return o.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?o.createElement(f,i(i({ref:r},u),{},{components:t})):o.createElement(f,i({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},35933:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var o=t(87462),n=t(63366),a=(t(67294),t(3905)),i=["components"],c={id:"kratos-courier",title:"kratos courier",description:"kratos courier Commands related to the Ory Kratos message courier"},s=void 0,l={unversionedId:"cli/kratos-courier",id:"version-v0.8/cli/kratos-courier",isDocsHomePage:!1,title:"kratos courier",description:"kratos courier Commands related to the Ory Kratos message courier",source:"@site/versioned_docs/version-v0.8/cli/kratos-courier.md",sourceDirName:"cli",slug:"/cli/kratos-courier",permalink:"/kratos/docs/v0.8/cli/kratos-courier",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.8/cli/kratos-courier.md",tags:[],version:"v0.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1635084599,formattedLastUpdatedAt:"10/24/2021",frontMatter:{id:"kratos-courier",title:"kratos courier",description:"kratos courier Commands related to the Ory Kratos message courier"},sidebar:"version-v0.8/docs",previous:{title:"kratos",permalink:"/kratos/docs/v0.8/cli/kratos"},next:{title:"kratos courier watch",permalink:"/kratos/docs/v0.8/cli/kratos-courier-watch"}},u=[{value:"kratos courier",id:"kratos-courier",children:[{value:"Options",id:"options",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],p={toc:u};function d(e){var r=e.components,t=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"kratos-courier"},"kratos courier"),(0,a.kt)("p",null,"Commands related to the Ory Kratos message courier"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -c, --config strings   Path to one or more .json, .yaml, .yml, .toml config files. Values are loaded in the order provided, meaning that the last config file overwrites values from the previous config file.\n  -h, --help             help for courier\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"kratos"},"kratos")," -"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"kratos-courier-watch"},"kratos courier watch")," - Starts the Ory Kratos message\ncourier")))}d.isMDXComponent=!0}}]);