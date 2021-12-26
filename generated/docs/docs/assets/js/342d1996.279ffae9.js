"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[8532],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61626:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"bring-your-user-interface",title:"Bring Your Own UI"},l=void 0,c={unversionedId:"guides/bring-your-user-interface",id:"guides/bring-your-user-interface",isDocsHomePage:!1,title:"Bring Your Own UI",description:'Ory provides a "managed UI" for essential pages such as User Login, User',source:"@site/docs/guides/bring-your-user-interface.mdx",sourceDirName:"guides",slug:"/guides/bring-your-user-interface",permalink:"/docs/guides/bring-your-user-interface",editUrl:"https://github.com/ory/docs/edit/master/docs/docs/guides/bring-your-user-interface.mdx",tags:[],version:"current",lastUpdatedBy:"hackerman",lastUpdatedAt:1636539307,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"bring-your-user-interface",title:"Bring Your Own UI"},sidebar:"docs",previous:{title:"Using a Custom Domain",permalink:"/docs/guides/custom-domains"},next:{title:"Create And Use Personal Access Tokens",permalink:"/docs/guides/create-personal-access-token"}},u=[{value:"Reference Implementations and Guided Examples",id:"reference-implementations-and-guided-examples",children:[],level:2},{value:"Development",id:"development",children:[],level:2},{value:"Native Apps",id:"native-apps",children:[],level:2},{value:"Technical Concepts and APIs",id:"technical-concepts-and-apis",children:[],level:2}],p={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Ory provides a "managed UI" for essential pages such as User Login, User\nRegistration, Account Recovery / Password Reset, Account Verification / Email\nVerification, User Settings, and more. The Managed UI will be customizable in\nthe future.'),(0,o.kt)("p",null,"Further, Ory is an API-first service. Implementing these pages in your language\nand framework of choice is straightforward using our SDKs."),(0,o.kt)("p",null,"Unless you are building a ",(0,o.kt)("a",{parentName:"p",href:"#native-apps"},"Native App"),", you will need to configure\nthe endpoints where your UI pages for the individual flows (login, registration,\n...) are located."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Customize UI Endpoints in the Ory Cloud Console",src:n(84562).Z})),(0,o.kt)("p",null,"If you leave fields empty, the Ory cloud Managed UI will be used for that flow."),(0,o.kt)("p",null,"Let's say you have an app hosted at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://www.example.org")," with a login\nscreen at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://www.example.org/login")," but have no other screens implemented\nyet? Your configuration would look as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Customize UI Endpoints in the Ory Cloud Console",src:n(38487).Z})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are unsure how to set up your Ory Cloud Project to be connected to your\ndomain (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"example.org"),"), head over to\n",(0,o.kt)("a",{parentName:"p",href:"/docs/start-building/deploy-auth-production"},"Get Ready for Production"),"."))),(0,o.kt)("p",null,"All other flows (registration, settings, verification, recovery, error) would\nstill use Ory Cloud's managed UI!"),(0,o.kt)("h2",{id:"reference-implementations-and-guided-examples"},"Reference Implementations and Guided Examples"),(0,o.kt)("p",null,"We have several reference implementations and guides available for building your\nown login, registration, ... user interface and forms on top of Ory's APIs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.ory.sh/nextjs-authentication-spa-custom-flows-open-source/"},"Add Custom Login, Registration, User Settings to Your Next.js & React Single Page Application (SPA)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos-selfservice-ui-node"},"NodeJS / ExpressJS UI Reference Implementation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos-selfservice-ui-react-native"},"React Native UI Reference Implementation"))),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("p",null,"If you are developing locally, you can set the configuration to, for example,\n",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:1234/login"),". To make this work, you will need to use the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/proxy"},"Ory Proxy")," locally!"),(0,o.kt)("h2",{id:"native-apps"},"Native Apps"),(0,o.kt)("p",null,"Native Apps refer to applications that do not have a browser, such as React\nNative, Swift, Android SDK, and others."),(0,o.kt)("p",null,"You can interface with Ory's Cloud APIs to build your own UI for native apps\ntoday. Behind the scenes, we are using Ory Kratos to provide the features around\nlogin, registration, recovery, verification, and account settings."),(0,o.kt)("p",null,"To learn more, head over to the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/start-building/native-mobile-app#react-native"},"Getting Started with React Native"),"\nguide!"),(0,o.kt)("h2",{id:"technical-concepts-and-apis"},"Technical Concepts and APIs"),(0,o.kt)("p",null,"Behind the scenes, Ory Cloud is powered by Open Source Ory Kratos. To learn more\nabout the technical details of how the (login, registration, ...) flows work and\nwhat the API interactions look like, head over to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.ory.sh/kratos/docs/concepts/ui-user-interface"},"Ory Kratos User Interface")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.ory.sh/kratos/docs/self-service"},"Ory Kratos Self-Service Flows"))))}d.isMDXComponent=!0},84562:function(e,t,n){t.Z=n.p+"assets/images/cloud-config-d5cd4840e5e6281cfd0e277a9f97ce29.png"},38487:function(e,t,n){t.Z=n.p+"assets/images/login-ui-bcf9b326f7f492039adcc083688fa98f.png"}}]);