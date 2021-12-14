"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[41777],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(n),g=o,d=m["".concat(l,".").concat(g)]||m[g]||p[g]||i;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20144:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],a={id:"integration-with-other-systems-using-web-hooks",title:"Integration using Web-Hooks"},l=void 0,u={unversionedId:"guides/integration-with-other-systems-using-web-hooks",id:"version-v0.8/guides/integration-with-other-systems-using-web-hooks",isDocsHomePage:!1,title:"Integration using Web-Hooks",description:"Ory Kratos supports integration with other systems (e.g. ERP, Marketing, etc)",source:"@site/versioned_docs/version-v0.8/guides/integration-with-other-systems-using-web-hooks.md",sourceDirName:"guides",slug:"/guides/integration-with-other-systems-using-web-hooks",permalink:"/kratos/docs/v0.8/guides/integration-with-other-systems-using-web-hooks",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.8/guides/integration-with-other-systems-using-web-hooks.md",tags:[],version:"v0.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1635084599,formattedLastUpdatedAt:"10/24/2021",frontMatter:{id:"integration-with-other-systems-using-web-hooks",title:"Integration using Web-Hooks"},sidebar:"version-v0.8/docs",previous:{title:"Setting up Argon2 Password Hashing Parameters",permalink:"/kratos/docs/v0.8/guides/setting-up-password-hashing-parameters"},next:{title:"Distributed Tracing",permalink:"/kratos/docs/v0.8/guides/tracing"}},c=[{value:"Mailchimp",id:"mailchimp",children:[],level:3}],p={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ory Kratos supports integration with other systems (e.g. ERP, Marketing, etc)\nusing Web-Hooks."),(0,i.kt)("h3",{id:"mailchimp"},"Mailchimp"),(0,i.kt)("p",null,"To send marketing email using ",(0,i.kt)("a",{parentName:"p",href:"https://mailchimp.com"},"Mailchimp")," upon\nregistration, add the following to your Ory Kratos config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    registration:\n      after:\n        password:\n          hooks:\n            - hook: web_hook\n              config:\n                url: https://mandrillapp.com/api/1.0/messages/send\n                method: POST\n                body: /path/to/my/mandrillapp.jsonnet\n")),(0,i.kt)("p",null,"And create a JsonNet file. Please be aware that Mailchimps' authentication\nmechanism currently requires to save the Mailchimp key in the JsonNet. For other\nsystems you would be using the ",(0,i.kt)("inlineCode",{parentName:"p"},"web_hook"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," config."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsonnet",metastring:'title="/path/to/my/mandrillapp.jsonnet"',title:'"/path/to/my/mandrillapp.jsonnet"'},'function(ctx) {\n  key: "<Your-Api-Key>",\n  message: {\n    from_email: "hello@example.com",\n    subject: "Hello from Ory Kratos",\n    text: "Welcome to Ory Kratos",\n    to: [\n      {\n        email: ctx.identity.verifiable_addresses[0].value,\n        type: "to"\n      }\n    ]\n  }\n}\n')))}m.isMDXComponent=!0}}]);