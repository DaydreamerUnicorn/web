"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[20966],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8155:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"custom-ui",title:"Build Your Own UI"},c=void 0,u={unversionedId:"guides/custom-ui",id:"version-v/guides/custom-ui",isDocsHomePage:!1,title:"Build Your Own UI",description:"Ory Kratos is an HTTP API server and does not include a traditional HTML user",source:"@site/versioned_docs/version-v/guides/custom-ui.mdx",sourceDirName:"guides",slug:"/guides/custom-ui",permalink:"/kratos/docs/guides/custom-ui",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v/guides/custom-ui.mdx",tags:[],version:"v",lastUpdatedBy:"aeneasr",lastUpdatedAt:1639468831,formattedLastUpdatedAt:"12/14/2021",frontMatter:{id:"custom-ui",title:"Build Your Own UI"}},l=[{value:"React Native",id:"react-native",children:[],level:2},{value:"ExpressJS",id:"expressjs",children:[],level:2},{value:"ReactJS",id:"reactjs",children:[],level:2}],p={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Ory Kratos is an HTTP API server and does not include a traditional HTML user\ninterface (rendering forms such as "Login" or "Registration") in its code base.'),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please read the ",(0,o.kt)("a",{parentName:"p",href:"/kratos/docs/concepts/ui-user-interface"},"User Interface concepts"),"\nbefore starting this journey! It contains many code and API examples and is a\nuseful starting point for anyone implementing their own UI!"))),(0,o.kt)("p",null,"We provide several reference UI implementations which you can use to get started\nquickly, or as the basis for your own UI:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos-selfservice-ui-react-native"},"React Native Reference Implementation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos-selfservice-ui-node"},"NodeJS Reference Implementation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory/react-nextjs-example"},"React / SPA Reference Implementation"))),(0,o.kt)("p",null,"Let's take a look at some individual examples!"),(0,o.kt)("h2",{id:"react-native"},"React Native"),(0,o.kt)("p",null,"You can implement your own login, registration, account recovery, ... user\ninterface for Ory Kratos in React Native. Check out our in-depth\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ory.sh/login-react-native-authentication-example-api/"},"Add Authentication to your React Native App"),"\nguide!"),(0,o.kt)("h2",{id:"expressjs"},"ExpressJS"),(0,o.kt)("p",null,"For now, please head over to our\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos-selfservice-ui-node"},"NodeJS Reference Implementation"),"."),(0,o.kt)("h2",{id:"reactjs"},"ReactJS"),(0,o.kt)("p",null,"For now, please head over to our\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/react-nextjs-example"},"React / SPA Reference Implementation"),"."))}d.isMDXComponent=!0}}]);