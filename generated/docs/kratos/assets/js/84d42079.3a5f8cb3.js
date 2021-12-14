"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[20989],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(u,".").concat(m)]||p[m]||l[m]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54103:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={id:"production",title:"Going to Production"},u=void 0,s={unversionedId:"guides/production",id:"version-v/guides/production",isDocsHomePage:!1,title:"Going to Production",description:"This document is still in development.",source:"@site/versioned_docs/version-v/guides/production.md",sourceDirName:"guides",slug:"/guides/production",permalink:"/kratos/docs/guides/production",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v/guides/production.md",tags:[],version:"v",lastUpdatedBy:"aeneasr",lastUpdatedAt:1639468831,formattedLastUpdatedAt:"12/14/2021",frontMatter:{id:"production",title:"Going to Production"}},d=[{value:"Database",id:"database",children:[],level:2},{value:"Security",id:"security",children:[{value:"Admin API",id:"admin-api",children:[],level:3}],level:2},{value:"Scaling",id:"scaling",children:[],level:2}],l={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This document is still in development."))),(0,i.kt)("h2",{id:"database"},"Database"),(0,i.kt)("p",null,"Ory Kratos requires a production-grade database such as PostgreSQL, MySQL,\nCockroachDB. Do not use SQLite in production!"),(0,i.kt)("h2",{id:"security"},"Security"),(0,i.kt)("p",null,"When preparing for production it is paramount to omit the ",(0,i.kt)("inlineCode",{parentName:"p"},"--dev")," flag from\n",(0,i.kt)("inlineCode",{parentName:"p"},"kratos serve"),"."),(0,i.kt)("h3",{id:"admin-api"},"Admin API"),(0,i.kt)("p",null,"Never expose the Ory Kratos Admin API to the internet unsecured. Always require\nauthorization. A good practice is to not expose the Admin API at all to the\npublic internet and use a Zero Trust Networking Architecture within your\nintranet."),(0,i.kt)("h2",{id:"scaling"},"Scaling"),(0,i.kt)("p",null,"There are no additional requirements for scaling Ory Kratos, just spin up\nanother container!"))}p.isMDXComponent=!0}}]);