(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[5656],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=i,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7135:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=["components"],s={id:"identity",title:"Identity Schema, Custom Fields"},c=void 0,l={unversionedId:"concepts/identity",id:"concepts/identity",isDocsHomePage:!1,title:"Identity Schema, Custom Fields",description:"The Identity Schema is a JSON Schema which describes your identity's (e.g. your",source:"@site/docs/concepts/identity.mdx",sourceDirName:"concepts",slug:"/concepts/identity",permalink:"/docs/concepts/identity",editUrl:"https://github.com/ory/docs/edit/master/docs/docs/concepts/identity.mdx",version:"current",lastUpdatedBy:"Vincent",lastUpdatedAt:1628693769,formattedLastUpdatedAt:"8/11/2021",frontMatter:{id:"identity",title:"Identity Schema, Custom Fields"},sidebar:"docs",previous:{title:"Personal Access Tokens",permalink:"/docs/concepts/personal-access-token"},next:{title:"Self-Service (End-User)",permalink:"/docs/concepts/self-service"}},d=[{value:"Available Presets",id:"available-presets",children:[{value:"Only Username",id:"only-username",children:[]},{value:"Only Email",id:"only-email",children:[]},{value:"Demo Profile",id:"demo-profile",children:[]}]},{value:"Custom Identity Schema",id:"custom-identity-schema",children:[]}],m={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Identity Schema is a JSON Schema which describes your identity's (e.g. your\ncustomers / users / ...) fields. In Ory, every identity can have their own\nmodel, allowing you to separate between different customer types, user types\n(e.g. employees and customers). For technical information on Identity Schemas,\ncheck out the open source documentation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ory.sh/kratos/docs/concepts/identity-schema"},"Identity Schema")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ory.sh/kratos/docs/concepts/credentials"},"Identity Credentials"))),(0,r.kt)("p",null,"The Identity Schema can either be one of the available presets or a\n",(0,r.kt)("a",{parentName:"p",href:"#custom-identity-model"},"customized model"),"."),(0,r.kt)("h2",{id:"available-presets"},"Available Presets"),(0,r.kt)("p",null,"Ory Cloud provides three basic Identity Schema Presets."),(0,r.kt)("h3",{id:"only-username"},"Only Username"),(0,r.kt)("p",null,"This preset is useful for applications that do not require email addresses and a\nhigh degree of anonymity."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This preset disables account verification, account recovery, and account\nenumeration defenses! Do not use it in security-sensitive environments."))),(0,r.kt)("p",null,"With this preset, every identity has exactly one trait - the ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," - which\nis used as the login identifier:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},"// Identity example\n{\n  id: '6e9d3d30-f93e-4630-901f-c2096953723d',\n  traits: {\n    username: 'some-username'\n  }\n}\n")),(0,r.kt)("h3",{id:"only-email"},"Only Email"),(0,r.kt)("p",null,"With this preset, identities have exactly one trait, the ",(0,r.kt)("inlineCode",{parentName:"p"},"email"),". It is used as\nthe login identifier, for email verification, and for account recovery:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},"// Identity example\n{\n  id: '6e9d3d30-f93e-4630-901f-c2096953723d',\n  traits: {\n    email: 'foo@bar.com'\n  }\n}\n")),(0,r.kt)("h3",{id:"demo-profile"},"Demo Profile"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This profile is EXPERIMENTAL and is encouraged to be used only in PoCs and\ndemos. It will eventually be removed!"))),(0,r.kt)("p",null,'The "Demo Profile" preset has - similar to the "Only Email" preset - an email\nfield and additionally a first name, last name, and a checkbox.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},"// Identity example\n{\n  id: '6e9d3d30-f93e-4630-901f-c2096953723d',\n  traits: {\n    email: 'foo@bar.com',\n    name: {\n      first: 'Foo',\n      last: 'Bar'\n    },\n    newsletter: true\n  }\n}\n")),(0,r.kt)("h2",{id:"custom-identity-schema"},"Custom Identity Schema"),(0,r.kt)("p",null,"Ory gives you the option to add custom fields to your Identity Schema."),(0,r.kt)("p",null,"You can define new traits for an identity, save the identity as a template and\nswitch between different Identity Schemas."),(0,r.kt)("p",null,"For a hands-on guide on how to create a custom Identity Schema, please head over\nto this document:\n",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/customize-identity-schema"},"Customize Identity Schema Guide"),"."))}p.isMDXComponent=!0}}]);