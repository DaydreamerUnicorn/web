(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{452:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return r?o.a.createElement(b,s(s({ref:t},c),{},{components:r})):o.a.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(8),i=(r(0),r(452)),a={id:"index",title:"Overview"},s={unversionedId:"self-service/flows/index",id:"version-v0.1/self-service/flows/index",isDocsHomePage:!1,title:"Overview",description:"ORY Kratos allows end-users to sign up, log in, log out, update profile",source:"@site/versioned_docs/version-v0.1/self-service/flows/index.md",slug:"/self-service/flows/index",permalink:"/kratos/docs/v0.1/self-service/flows/index",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.1/self-service/flows/index.md",version:"v0.1",lastUpdatedBy:"aeneasr",lastUpdatedAt:1600065426,formattedLastUpdatedAt:"9/14/2020",sidebar:"version-v0.1/docs",previous:{title:"Threat Models and Security Profiles",permalink:"/kratos/docs/v0.1/concepts/security"},next:{title:"User Login and User Registration",permalink:"/kratos/docs/v0.1/self-service/flows/user-login-user-registration"}},l=[{value:"Network Flows for Browsers",id:"network-flows-for-browsers",children:[]}],c={toc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'ORY Kratos allows end-users to sign up, log in, log out, update profile\ninformation, recover accounts, and perform other important account management\ntasks without third party involvement ("self-service").'),Object(i.b)("p",null,"The opposite to self-service management is someone using administrative\nprivileges to create, update, or delete accounts."),Object(i.b)("h2",{id:"network-flows-for-browsers"},"Network Flows for Browsers"),Object(i.b)("p",null,"All Self-Service Flows such as ",Object(i.b)("a",{parentName:"p",href:"/kratos/docs/v0.1/self-service/flows/user-login-user-registration"},"User Login and User Registration"),",\n",Object(i.b)("a",{parentName:"p",href:"/kratos/docs/v0.1/self-service/flows/user-profile-management"},"Profile Management")," use the same template:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The Browser makes an HTTP request to the flow's initialization endpoint (e.g.\n",Object(i.b)("inlineCode",{parentName:"li"},"/auth/browser/login"),");"),Object(i.b)("li",{parentName:"ol"},"The initialization endpoint processes data and associates it with a request\nID and redirects the browser to the flow's configured UI URL (e.g.\n",Object(i.b)("inlineCode",{parentName:"li"},"urls.login_ui"),"), appending the request ID as the ",Object(i.b)("inlineCode",{parentName:"li"},"request")," URL Query\nParameter;"),Object(i.b)("li",{parentName:"ol"},"The endpoint responsible for the UI URL uses the ",Object(i.b)("inlineCode",{parentName:"li"},"request")," URL Query\nParameter (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"http://my-app/auth/login?request=abcde"),") to fetch the data\npreviously associated with the Request ID from either ORY Kratos's Public or\nAdmin API."),Object(i.b)("li",{parentName:"ol"},"The UI endpoint renders the fetched data in any way it sees it fit. The flow\nis typically completed by the browser making another request to one of ORY\nKratos' endpoints, which is usually described in the fetched request data.")))}u.isMDXComponent=!0}}]);