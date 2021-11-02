(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[39083],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50802:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),s=["components"],i={id:"e2e-integration-tests",title:"Writing End-To-End and Integration Tests"},c=void 0,u={unversionedId:"guides/e2e-integration-tests",id:"version-v0.5/guides/e2e-integration-tests",isDocsHomePage:!1,title:"Writing End-To-End and Integration Tests",description:"We run integration tests for both the",source:"@site/versioned_docs/version-v0.5/guides/e2e-integration-tests.mdx",sourceDirName:"guides",slug:"/guides/e2e-integration-tests",permalink:"/kratos/docs/v0.5/guides/e2e-integration-tests",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/guides/e2e-integration-tests.mdx",tags:[],version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1607456241,formattedLastUpdatedAt:"12/8/2020",frontMatter:{id:"e2e-integration-tests",title:"Writing End-To-End and Integration Tests"}},p=[{value:"Testing React Native on Web with Cypress",id:"testing-react-native-on-web-with-cypress",children:[],level:2}],l={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We run integration tests for both the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos-selfservice-ui-node"},"NodeJS")," and\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos-selfservice-ui-react-native"},"React Native"),"\nreference implementation using ",(0,a.kt)("a",{parentName:"p",href:"https://www.cypress.io"},"Cypress"),". You can find\nthe set up and source code for these tests in\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/blob/master/test/e2e/run.sh"},"./test/e2e/run.sh"),".\nIn principle, we start ORY Kratos with some configuration and an in-memory\ndatabase in the background"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ DSN=memory hydra serve -c ./path/to/config/kratos.yml --dev > "kratos.e2e.log" 2>&1 &\n')),(0,a.kt)("p",null,"as well as our application in the background as well. Then, we start the Cypress\ntest runner which executes the different e2e tests. This works really well to\ntest compliance and integration of ORY Kratos."),(0,a.kt)("p",null,"If you run ORY Kratos and your app on separate domains or ports you might want\nto add"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "chromeWebSecurity": false\n}\n')),(0,a.kt)("p",null,"to your ",(0,a.kt)("inlineCode",{parentName:"p"},"cypress.json")," config file."),(0,a.kt)("h2",{id:"testing-react-native-on-web-with-cypress"},"Testing React Native on Web with Cypress"),(0,a.kt)("p",null,"If you want to test React Native (rendered as a web application) in Cypress, you\nneed to disable security features preventing browser from executing self-service\nAPI flows. To do this, set the environment variable\n",(0,a.kt)("inlineCode",{parentName:"p"},"DEV_DISABLE_API_FLOW_ENFORCEMENT=1"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ DSN=memory \\\n    DEV_DISABLE_API_FLOW_ENFORCEMENT=true\n    hydra serve -c ./path/to/config/kratos.yml --dev  > "kratos.e2e.log" 2>&1 &)\n')))}d.isMDXComponent=!0}}]);