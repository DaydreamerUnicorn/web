(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[53378],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37622:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),a=["components"],s={id:"openid-connect-social-sign-in-oauth2",title:"Social Sign In with OpenID Connect and OAuth2"},l=void 0,c={unversionedId:"self-service/strategies/openid-connect-social-sign-in-oauth2",id:"version-v0.1/self-service/strategies/openid-connect-social-sign-in-oauth2",isDocsHomePage:!1,title:"Social Sign In with OpenID Connect and OAuth2",description:"The OpenID Connect Strategy does already work but needs further documentation",source:"@site/versioned_docs/version-v0.1/self-service/strategies/openid-connect-social-sign-in-oauth2.md",sourceDirName:"self-service/strategies",slug:"/self-service/strategies/openid-connect-social-sign-in-oauth2",permalink:"/kratos/docs/v0.1/self-service/strategies/openid-connect-social-sign-in-oauth2",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.1/self-service/strategies/openid-connect-social-sign-in-oauth2.md",tags:[],version:"v0.1",lastUpdatedBy:"hackerman",lastUpdatedAt:1586177162,formattedLastUpdatedAt:"4/6/2020",frontMatter:{id:"openid-connect-social-sign-in-oauth2",title:"Social Sign In with OpenID Connect and OAuth2"},sidebar:"version-v0.1/docs",previous:{title:"Username or Email and Password",permalink:"/kratos/docs/v0.1/self-service/strategies/username-email-password"},next:{title:"Before Jobs",permalink:"/kratos/docs/v0.1/self-service/workflows/jobs/before"}},u=[{value:"Browser Clients",id:"browser-clients",children:[{value:"Login",id:"login",children:[],level:3},{value:"Registration",id:"registration",children:[],level:3}],level:2},{value:"API Clients",id:"api-clients",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The OpenID Connect Strategy does already work but needs further documentation\nand code improvements. It will be documented in an upcoming release of ORY\nKratos.")),(0,o.kt)("p",null,"The Social Sign In Strategy enables you to use"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://github.com/"},"GitHub"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.apple.com/sign-in-with-apple/"},"Apple"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/identity/sign-in/web/sign-in"},"Google"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/facebook-login/"},"Facebook"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.ory.sh/hydra"},"ORY Hydra"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.keycloak.org"},"Keycloak"),";"),(0,o.kt)("li",{parentName:"ul"},"and every other OpenID Connect Certified Provider")),(0,o.kt)("p",null,"as the Identity Provider."),(0,o.kt)("p",null,"Because of the nature of this flow (a browser is required) it does not work"),(0,o.kt)("h2",{id:"browser-clients"},"Browser Clients"),(0,o.kt)("h3",{id:"login"},"Login"),(0,o.kt)("p",null,"Sign In only works when an identity exists for that profile already. If it does\nnot exist, a registration flow will be performed instead."),(0,o.kt)("h3",{id:"registration"},"Registration"),(0,o.kt)("p",null,"Sign Up on conflict with existing primary identifiers like email:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sign Up is dis-allowed and the user is asked to instead log in and then link\nhis/her account instead.")),(0,o.kt)("h2",{id:"api-clients"},"API Clients"),(0,o.kt)("p",null,"API-based login and registration using this strategy will be addressed in a\nfuture release of ORY Kratos."),(0,o.kt)("p",null,'Please be aware that OpenID Connect providers always require a Browser, with the\nexception of "Sign in with Apple" on recent iOS versions.'))}d.isMDXComponent=!0}}]);