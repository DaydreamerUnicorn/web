(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{452:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,f=p["".concat(a,".").concat(b)]||p[b]||l[b]||i;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(8),i=(n(0),n(452)),a={id:"production",title:"Going to Production"},c={unversionedId:"guides/production",id:"version-v0.5/guides/production",isDocsHomePage:!1,title:"Going to Production",description:"This document is still in development.",source:"@site/versioned_docs/version-v0.5/guides/production.md",slug:"/guides/production",permalink:"/kratos/docs/guides/production",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/guides/production.md",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1602674546,formattedLastUpdatedAt:"10/14/2020"},u=[{value:"Database",id:"database",children:[]},{value:"Security",id:"security",children:[{value:"Admin API",id:"admin-api",children:[]}]},{value:"Scaling",id:"scaling",children:[]}],s={toc:u};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,":::warn"),Object(i.b)("p",null,"This document is still in development."),Object(i.b)("p",null,":::"),Object(i.b)("h2",{id:"database"},"Database"),Object(i.b)("p",null,"ORY Kratos requires a production-grade database such as PostgreSQL, MySQL,\nCockroachDB. Do not use SQLite in production!"),Object(i.b)("h2",{id:"security"},"Security"),Object(i.b)("p",null,"When preparing for production it is paramount to omit the ",Object(i.b)("inlineCode",{parentName:"p"},"--dev")," flag from\n",Object(i.b)("inlineCode",{parentName:"p"},"kratos serve"),"."),Object(i.b)("h3",{id:"admin-api"},"Admin API"),Object(i.b)("p",null,"Never expose the ORY Kratos Admin API to the internet unsecured. Always require\nauthorization. A good practice is to not expose the Admin API at all to the\npublic internet and use a Zero Trust Networking Architecture within your\nintranet."),Object(i.b)("h2",{id:"scaling"},"Scaling"),Object(i.b)("p",null,"There are no additional requirements for scaling ORY Kratos, just spin up\nanother container!"))}d.isMDXComponent=!0}}]);