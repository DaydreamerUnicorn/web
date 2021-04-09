(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{343:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(8),o=(r(0),r(452)),s={id:"index",title:"Before you start reading"},i={unversionedId:"self-service/index",id:"version-v0.2/self-service/index",isDocsHomePage:!1,title:"Before you start reading",description:"ORY Kratos implements flows that users perform themselves as opposed to",source:"@site/versioned_docs/version-v0.2/self-service/index.md",slug:"/self-service/index",permalink:"/kratos/docs/v0.2/self-service/index",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.2/self-service/index.md",version:"v0.2",lastUpdatedBy:"aeneasr",lastUpdatedAt:1600065426,formattedLastUpdatedAt:"9/14/2020",sidebar:"version-v0.2/docs",previous:{title:"Threat Models and Security Profiles",permalink:"/kratos/docs/v0.2/concepts/security"},next:{title:"Overview",permalink:"/kratos/docs/v0.2/self-service/flows/index"}},c=[],l={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"ORY Kratos implements flows that users perform themselves as opposed to\nadministrative intervention. Facebook and Google both provide self-service\nregistration and profile management features as you are able to make changes to\nyour profile and sign up yourself."),Object(o.b)("p",null,"Most believe that user management systems are easy to implement because picking\nthe right password hashing algorithm and sending an account verification code is\na solvable challenge. The real complexity however hides in the details and\nattack vectors of self-service flows. Most data leaks happen because someone is\nable to exploit"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"registration: with attack vectors such as account enumeration (), ...;"),Object(o.b)("li",{parentName:"ul"},"login: phishing, account enumeration, leaked password databases, brute-force,\n...;"),Object(o.b)("li",{parentName:"ul"},"user settings: account enumeration, account takeover, ...;"),Object(o.b)("li",{parentName:"ul"},"account recovery: social engineering attacks, account takeover, spoofing, and\nso on.")),Object(o.b)("p",null,"ORY Kratos applies best practices established by experts (National Institute of\nSciences NIST, Internet Engineering Task Force IETF, Microsoft Research, Google\nResearch, Troy Hunt, ...) and implements the following flows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/kratos/docs/v0.2/self-service/flows/user-login-user-registration"},"Login and Registration")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/kratos/docs/v0.2/self-service/flows/user-logout"},"Logout")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/kratos/docs/v0.2/self-service/flows/user-settings-profile-management"},"User Settings")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/kratos/docs/v0.2/self-service/flows/password-reset-account-recovery"},"Account Recovery")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/kratos/docs/v0.2/self-service/flows/verify-email-account-activation"},"Address Verification")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/kratos/docs/v0.2/self-service/flows/user-facing-errors"},"User-Facing Error")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/kratos/docs/v0.2/self-service/flows/2fa-mfa-multi-factor-authentication"},"2FA / MFA"))),Object(o.b)("p",null,"Some flows break down into strategies which implement some of the flow's\nbusiness logic:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",{parentName:"li",href:"/kratos/docs/v0.2/self-service/strategies/username-email-password"},"Password Strategy"),' implements\nlogin and registration flows (with email/username and password), account\nrecovery flows ("reset your password"), and user settings flows ("change your\npassword").'),Object(o.b)("li",{parentName:"ul"},"The\n",Object(o.b)("a",{parentName:"li",href:"/kratos/docs/v0.2/self-service/strategies/openid-connect-social-sign-in-oauth2"},"OpenID Connect Strategy"),'\nimplements login and registration flows (with email/username and password),\nand user settings flows ("un/link another social account").'),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",{parentName:"li",href:"/kratos/docs/v0.2/self-service/strategies/user-settings-profile"},"Profile Strategy"),' implement the settings flow\n("change your first/last name, ...").')),Object(o.b)("p",null,"Some flows additionally implement the ability ",Object(o.b)("a",{parentName:"p",href:"/kratos/docs/v0.2/self-service/hooks/index"},"to run hooks")," which allow users\nto be immediately signed in after registration, notify another system on\nsuccessful registration (e.g. Mailchimp)."))}u.isMDXComponent=!0},452:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return r?a.a.createElement(m,i(i({ref:t},l),{},{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);