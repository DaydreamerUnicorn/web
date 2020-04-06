(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{194:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(9),a=(r(0),r(213)),i={id:"index",title:"Overview"},s={id:"self-service/flows/index",title:"Overview",description:"ORY Kratos allows end-users to sign up, log in, log out, update profile",source:"@site/docs/self-service/flows/index.md",permalink:"/kratos/docs/next/self-service/flows/index",editUrl:"https://github.com/docs/kratos/edit/master/docs/docs/self-service/flows/index.md",version:"next",lastUpdatedBy:"hackerman",lastUpdatedAt:1586177162,sidebar:"docs",previous:{title:"Threat Models and Security Profiles",permalink:"/kratos/docs/next/concepts/security"},next:{title:"User Login and User Registration",permalink:"/kratos/docs/next/self-service/flows/user-login-user-registration"}},c=[{value:"Network Flows for Browsers",id:"network-flows-for-browsers",children:[]}],l={rightToc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,'ORY Kratos allows end-users to sign up, log in, log out, update profile\ninformation, recover accounts, and perform other important account management\ntasks without third party involvement ("self-service").'),Object(a.b)("p",null,"The opposite to self-service management is someone using administrative\nprivileges to create, update, or delete accounts."),Object(a.b)("h2",{id:"network-flows-for-browsers"},"Network Flows for Browsers"),Object(a.b)("p",null,"All Self-Service Flows such as ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"./user-login.md"}),"User Login"),",\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/next/self-service/flows/user-login-user-registration"}),"User Registration"),",\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"./user-profile-management.md"}),"Profile Management")," use the same template:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The Browser makes an HTTP request to the flow's initialization endpoint (e.g.\n",Object(a.b)("inlineCode",{parentName:"li"},"/auth/browser/login"),");"),Object(a.b)("li",{parentName:"ol"},"The initialization endpoint processes data and associates it with a request\nID and redirects the browser to the flow's configured UI URL (e.g.\n",Object(a.b)("inlineCode",{parentName:"li"},"urls.login_ui"),"), appending the request ID as the ",Object(a.b)("inlineCode",{parentName:"li"},"request")," URL Query\nParameter;"),Object(a.b)("li",{parentName:"ol"},"The endpoint responsible for the UI URL uses the ",Object(a.b)("inlineCode",{parentName:"li"},"request")," URL Query\nParameter (e.g. ",Object(a.b)("inlineCode",{parentName:"li"},"http://my-app/auth/login?request=abcde"),") to fetch the data\npreviously associated with the Request ID from either ORY Kratos's Public or\nAdmin API."),Object(a.b)("li",{parentName:"ol"},"The UI endpoint renders the fetched data in any way it sees it fit. The flow\nis typically completed by the browser making another request to one of ORY\nKratos' endpoints, which is usually described in the fetched request data.")))}p.isMDXComponent=!0},213:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,b=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return r?o.a.createElement(b,s({ref:t},l,{components:r})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);