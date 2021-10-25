(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[95134],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=i,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},94934:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=r(22122),i=r(19756),o=(r(67294),r(3905)),a=["components"],s={id:"high-availability-ha",title:"High Availability"},l=void 0,u={unversionedId:"guides/high-availability-ha",id:"version-v0.7/guides/high-availability-ha",isDocsHomePage:!1,title:"High Availability",description:"This document explains how to set up Ory Kratos in for High Availability.",source:"@site/versioned_docs/version-v0.7/guides/high-availability-ha.md",sourceDirName:"guides",slug:"/guides/high-availability-ha",permalink:"/kratos/docs/v0.7/guides/high-availability-ha",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.7/guides/high-availability-ha.md",tags:[],version:"v0.7",lastUpdatedBy:"aeneasr",lastUpdatedAt:1626195872,formattedLastUpdatedAt:"7/13/2021",frontMatter:{id:"high-availability-ha",title:"High Availability"},sidebar:"version-v0.7/docs",previous:{title:"Secret and Key Rotation",permalink:"/kratos/docs/v0.7/guides/secret-key-rotation"},next:{title:"Docker Images",permalink:"/kratos/docs/v0.7/guides/docker"}},c=[],d={toc:c};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document explains how to set up Ory Kratos in for High Availability."),(0,o.kt)("h1",{id:"horizontal-scaling"},"Horizontal Scaling"),(0,o.kt)("p",null,"Ory Kratos scales effortlessly to thousands of pods without any additional work!"),(0,o.kt)("h1",{id:"mail-courier"},"Mail courier"),(0,o.kt)("p",null,"Ory Kratos processes emails by storing them in an email queue on your database\nand running a mail courier worker to handle this queue. To avoid processing the\nsame email multiple times, only one instance of this mail courier should be run\nat one time. For simple single-instance Kratos deployments, the courier can\nsimply be run as a background worker, but for multi-instance Kratos deployments,\nit needs to be run a distinct singleton foreground worker. For setup details,\nrefer to the ",(0,o.kt)("a",{parentName:"p",href:"/kratos/docs/v0.7/concepts/email-sms"},"Out of Band Communication guide"),"."),(0,o.kt)("p",null,"Ory Kratos does not have any special requirements when it comes to High\nAvailability as it does not manage state itself but instead relies on the SQL\ndatabase for that."),(0,o.kt)("p",null,"It is therefore possible to use Ory Kratos with Auto-Scaling Groups (e.g. in\nKubernetes) without any additional configuration."))}p.isMDXComponent=!0}}]);