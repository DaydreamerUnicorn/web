(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[18041],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(m,u(u({ref:t},s),{},{components:r})):n.createElement(m,u({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var c=2;c<a;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},19713:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),u=["components"],l={id:"default_return_to",title:"This should be the Error UI"},i=void 0,c={unversionedId:"fallback/default_return_to",id:"version-v0.8/fallback/default_return_to",isDocsHomePage:!1,title:"This should be the Error UI",description:"You ended up here because you did not set the following configuration value:",source:"@site/versioned_docs/version-v0.8/fallback/default_return_to.mdx",sourceDirName:"fallback",slug:"/fallback/default_return_to",permalink:"/kratos/docs/fallback/default_return_to",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.8/fallback/default_return_to.mdx",tags:[],version:"v0.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1635084599,formattedLastUpdatedAt:"10/24/2021",frontMatter:{id:"default_return_to",title:"This should be the Error UI"}},s=[],f={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You ended up here because you did not set the following configuration value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'},"selfservice:\n  default_browser_return_url: http://my-app.com/dashboard\n")),(0,a.kt)("p",null,"You can set this configuration value using environment variable\n",(0,a.kt)("inlineCode",{parentName:"p"},"SELFSERVICE_DEFAULT_BROWSER_RETURN_URL")," as well!"),(0,a.kt)("p",null,"If you don't know what that means, head over to\n",(0,a.kt)("a",{parentName:"p",href:"/kratos/docs/concepts/browser-redirect-flow-completion"},"Self-Service Flow Completion"),"!"))}p.isMDXComponent=!0}}]);