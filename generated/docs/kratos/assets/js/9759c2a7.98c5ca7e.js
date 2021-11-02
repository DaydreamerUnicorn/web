(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[89781],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(r),f=o,m=l["".concat(s,".").concat(f)]||l[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},49412:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return l}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],c={id:"federation",title:"Federation"},s=void 0,p={unversionedId:"concepts/federation",id:"version-v0.8/concepts/federation",isDocsHomePage:!1,title:"Federation",description:"Ory Kratos does not support federation features itself, but it integrates with",source:"@site/versioned_docs/version-v0.8/concepts/federation.md",sourceDirName:"concepts",slug:"/concepts/federation",permalink:"/kratos/docs/concepts/federation",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.8/concepts/federation.md",tags:[],version:"v0.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1635084599,formattedLastUpdatedAt:"10/24/2021",frontMatter:{id:"federation",title:"Federation"},sidebar:"version-v0.8/docs",previous:{title:"REST API Design",permalink:"/kratos/docs/concepts/rest-api"},next:{title:"Threat Models and Security Profiles",permalink:"/kratos/docs/concepts/security"}},u=[{value:"Becoming an OAuth2 and OpenID Connect Provider",id:"becoming-an-oauth2-and-openid-connect-provider",children:[],level:2}],d={toc:u};function l(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ory Kratos does not support federation features itself, but it integrates with\nprojects like ",(0,a.kt)("a",{parentName:"p",href:"https://www.ory.sh/hydra"},"Ory Hydra")," that implement federation\nprotocols."),(0,a.kt)("h2",{id:"becoming-an-oauth2-and-openid-connect-provider"},"Becoming an OAuth2 and OpenID Connect Provider"),(0,a.kt)("p",null,"Future releases of Ory Kratos will integrate with\n",(0,a.kt)("a",{parentName:"p",href:"https://www.ory.sh/hydra"},"Ory Hydra")," natively to support OAuth2 and OpenID\nConnect use cases."))}l.isMDXComponent=!0}}]);