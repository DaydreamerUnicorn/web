(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[36069],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23882:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a=["components"],s={id:"jsonnet",title:"Data Mapping with Jsonnet"},l=void 0,c={unversionedId:"reference/jsonnet",id:"version-v0.7/reference/jsonnet",isDocsHomePage:!1,title:"Data Mapping with Jsonnet",description:"Some modules like the",source:"@site/versioned_docs/version-v0.7/reference/jsonnet.mdx",sourceDirName:"reference",slug:"/reference/jsonnet",permalink:"/kratos/docs/v0.7/reference/jsonnet",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.7/reference/jsonnet.mdx",tags:[],version:"v0.7",lastUpdatedBy:"aeneasr",lastUpdatedAt:1626195872,formattedLastUpdatedAt:"7/13/2021",frontMatter:{id:"jsonnet",title:"Data Mapping with Jsonnet"}},p=[{value:"Formatting Jsonnet Code",id:"formatting-jsonnet-code",children:[],level:2},{value:"Linting Jsonnet Code",id:"linting-jsonnet-code",children:[],level:2},{value:"Testing Jsonnet Code",id:"testing-jsonnet-code",children:[],level:2},{value:"Tips &amp; Tricks",id:"tips--tricks",children:[{value:"Optionality",id:"optionality",children:[],level:3},{value:"Defaults",id:"defaults",children:[],level:3},{value:"Raising Errors",id:"raising-errors",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Some modules like the\n",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/v0.7/concepts/credentials/openid-connect-oidc-oauth2"},"OpenID Connect and OAuth2 Method"),"\nsupport ",(0,i.kt)("a",{parentName:"p",href:"https://jsonnet.org"},"Jsonnet"),", allowing you to easily write code that\nmodifies your identity's data and load it into Ory Kratos."),(0,i.kt)("p",null,"We highly recommend checking out the official\n",(0,i.kt)("a",{parentName:"p",href:"https://jsonnet.org/learning/tutorial.html"},"learning Jsonnet tutorial"),"."),(0,i.kt)("h2",{id:"formatting-jsonnet-code"},"Formatting Jsonnet Code"),(0,i.kt)("p",null,"Format Jsonnet code snippets using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ kratos help jsonnet format\n\n# e.g.:\n$ kratos jsonnet format --write path/to/files/*.jsonnet\n")),(0,i.kt)("h2",{id:"linting-jsonnet-code"},"Linting Jsonnet Code"),(0,i.kt)("p",null,"Lint Jsonnet code snippets using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ kratos help jsonnet lint\n\n# e.g.:\n$ kratos jsonnet lint path/to/files/*.jsonnet\n")),(0,i.kt)("p",null,"The command will exit with an exit code of ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," and print all found lint errors\nto stderr if the code snippet has lint issues."),(0,i.kt)("h2",{id:"testing-jsonnet-code"},"Testing Jsonnet Code"),(0,i.kt)("p",null,"This is an anticipated future feature. For progress check out\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/391"},"kratos#391"),"."),(0,i.kt)("h2",{id:"tips--tricks"},"Tips & Tricks"),(0,i.kt)("p",null,"The purpose of this section is to provide you with examples for common use\ncases."),(0,i.kt)("h3",{id:"optionality"},"Optionality"),(0,i.kt)("p",null,"When you're unsure that a field will be set in the ",(0,i.kt)("inlineCode",{parentName:"p"},"claims")," variable use the\nfollowing to make the trait field also optional:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsonnet"},'local claims = std.extVar(\'claims\');\n\n{\n  identity: {\n    traits: {\n      email: claims.sub,\n      [if "website" in claims then "website" else null]: claims.website,\n    },\n  },\n}\n')),(0,i.kt)("h3",{id:"defaults"},"Defaults"),(0,i.kt)("p",null,"Set defaults for the ",(0,i.kt)("inlineCode",{parentName:"p"},"claims")," variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsonnet"},"local claims = {\n website: 'i am the default website value'\n} + std.extVar('claims');\n\n{\n  identity: {\n    traits: {\n      website: claims.website\n    }\n  }\n}\n")),(0,i.kt)("h3",{id:"raising-errors"},"Raising Errors"),(0,i.kt)("p",null,"You can raise errors in the Jsonnet code. Keep in mind that these will be shown\nas system errors, not validation errors, and that the user will end up at the\nError UI!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsonnet"},"local claims = std.extVar('claims');\n\nif std.length(claims.sub) == 0 then\n  error 'claim sub not set'\nelse\n  {\n    identity: {\n      traits: {\n        // ...\n      },\n    },\n  }\n")))}d.isMDXComponent=!0}}]);