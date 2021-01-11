(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{205:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return b}));var i=t(3),a=t(7),o=(t(0),t(442)),r=t(447),s=t(448),c={id:"login-session",title:"Configuring And Checking for Login Sessions"},l={unversionedId:"guides/login-session",id:"version-v0.5/guides/login-session",isDocsHomePage:!1,title:"Configuring And Checking for Login Sessions",description:"A login session is created when a user signs in. The session is stored as a",source:"@site/versioned_docs/version-v0.5/guides/login-session.mdx",slug:"/guides/login-session",permalink:"/kratos/docs/guides/login-session",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/guides/login-session.mdx",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1605099704,sidebar:"version-v0.5/docs",previous:{title:"Sign in with GitHub, GitLab, Google, Facebook, LinkedIn, Microsoft ...",permalink:"/kratos/docs/guides/sign-in-with-github-google-facebook-linkedin"},next:{title:"Configuring Cookies",permalink:"/kratos/docs/guides/configuring-cookies"}},d=[{value:"Login Session Configuration",id:"login-session-configuration",children:[]},{value:"Checking for Login Sessions",id:"checking-for-login-sessions",children:[{value:"Browser Client",id:"browser-client",children:[]},{value:"API Client",id:"api-client",children:[]}]}],u={rightToc:d};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A login session is created when a user signs in. The session is stored as a\ncookie or as a token, depending on the interaction type."),Object(o.b)("h2",{id:"login-session-configuration"},"Login Session Configuration"),Object(o.b)("p",null,"A session is valid for the session lifespan you specify in the ORY Kratos\nconfig:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'}),"session:\n  lifespan: 720h # 30 days\n")),Object(o.b)("p",null,"Per default the session cookie has the ",Object(o.b)("inlineCode",{parentName:"p"},"max-age")," parameter set to the specified\nsession lifespan. You may disable this behavior by setting:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'}),"session:\n  cookie:\n    persistent: false\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The cookie ",Object(o.b)("inlineCode",{parentName:"p"},"max-age")," parameter behaves as follows:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"The browser interprets the cookie to be removed when the session ends if\n",Object(o.b)("inlineCode",{parentName:"li"},"max-age")," is not set as part of the ",Object(o.b)("inlineCode",{parentName:"li"},"Set-Cookie")," header. A session ends if the\nbrowser is terminated due to a reboot or when shutting down the browser."),Object(o.b)("li",{parentName:"ul"},"The browser keeps the cookie until ",Object(o.b)("inlineCode",{parentName:"li"},"max-age")," is reached otherwise.")))),Object(o.b)("p",null,"Once the lifespan is reached, the user needs to sign in again."),Object(o.b)("h2",{id:"checking-for-login-sessions"},"Checking for Login Sessions"),Object(o.b)("h3",{id:"browser-client"},"Browser Client"),Object(o.b)("p",null,"The easiest way to check if a user is signed in is to call the\n",Object(o.b)("inlineCode",{parentName:"p"},"http(s)://<kratos-public/sessions/whoami")," endpoint which will return either a\n401 Unauthorized or HTTP 200 OK with the session."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Make sure to include the ORY Kratos Session Cookie when calling this endpoint.\nIf you are calling this endpoint from a proxy or middleware, make sure to\nforward the cookies sent to the proxy/middleware. If you are calling this\nendpoint as an AJAX call, make sure to include credentials and configure CORS\nproperly."))),Object(o.b)("p",null,"A typical session payload will look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "8f660ce3-69ec-4aeb-9fda-f9230dc3243f",\n  "active": true,\n  "expires_at": "2020-08-25T13:42:15.7411522Z",\n  "authenticated_at": "2020-08-24T13:42:15.7411522Z",\n  "issued_at": "2020-08-24T13:42:15.7412042Z",\n  "identity": {\n    "id": "bf32596a-f853-47c4-91e6-a3f41cf4949d",\n    "schema_id": "default",\n    "schema_url": "http://127.0.0.1:4433/schemas/default",\n    "traits": {\n      "email": "api@user.org",\n      "name": {\n        "last": "User",\n        "first": "API"\n      }\n    },\n    "verifiable_addresses": [\n      {\n        "id": "f877db6c-7dfb-45e3-bbeb-ac8349348128",\n        "value": "api@user.org",\n        "verified": false,\n        "via": "email",\n        "verified_at": null,\n        "expires_at": "2020-08-24T14:35:59.125873Z"\n      }\n    ],\n    "recovery_addresses": [\n      {\n        "id": "065a908c-82be-4110-bf67-9910f36242b7",\n        "value": "api@user.org",\n        "via": "email"\n      }\n    ]\n  }\n}\n')),Object(o.b)("h4",{id:"code-examples"},"Code Examples"),Object(o.b)(r.a,{defaultValue:"nodejs",values:[{label:"ExpressJS",value:"nodejs"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"nodejs",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"import { PublicApi } from '@oryd/kratos-client'\n\nconst publicEndpoint = new PublicApi(config.kratos.public)\nconst protect = (req: Request, res: Response, next: NextFunction) => {\n  req.headers['host'] = config.kratos.public.split('/')[2]\n  publicEndpoint\n    .whoami(req)\n    .then(({ body, response }) => {\n      req.user = { session: body }\n      next()\n    })\n    .catch(() => {\n      // Redirect to login if not logged in\n      res.redirect('/auth/login')\n    })\n\n// const app = express()\n// ...\n\napp.get('/', protect, dashboard)\n")))),Object(o.b)("h3",{id:"api-client"},"API Client"),Object(o.b)("p",null,"API clients receive and use ORY Kratos Session Tokens which can be checked by\ncalling the ",Object(o.b)("inlineCode",{parentName:"p"},"/sessions/whoami")," endpoint and including the ORY Kratos Session\nToken as a bearer token in the HTTP Authorization Header:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'$ sessionToken=oFZzgLpsacUpUy2cvQPtrGa2046WcXCR\n$ curl -s -X POST -H  "Accept: application/json" \\\n    -H "Authorization: Bearer $sessionToken" \\\n    # OR: \\\n    # -H "X-Session-Token: $sessionToken" \\\n    http://127.0.0.1:4433/sessions/whoami | jq\n\n{\n  "id": "8f660ce3-69ec-4aeb-9fda-f9230dc3243f",\n  "active": true,\n  "expires_at": "2020-08-25T13:42:15.7411522Z",\n  "authenticated_at": "2020-08-24T13:42:15.7411522Z",\n  "issued_at": "2020-08-24T13:42:15.7412042Z",\n  "identity": {\n    "id": "bf32596a-f853-47c4-91e6-a3f41cf4949d",\n    "schema_id": "default",\n    "schema_url": "http://127.0.0.1:4433/schemas/default",\n    "traits": {\n      "email": "api@user.org",\n      "name": {\n        "last": "User",\n        "first": "API"\n      }\n    },\n    "verifiable_addresses": [\n      {\n        "id": "f877db6c-7dfb-45e3-bbeb-ac8349348128",\n        "value": "api@user.org",\n        "verified": false,\n        "via": "email",\n        "verified_at": null,\n        "expires_at": "2020-08-24T14:35:59.125873Z"\n      }\n    ],\n    "recovery_addresses": [\n      {\n        "id": "065a908c-82be-4110-bf67-9910f36242b7",\n        "value": "api@user.org",\n        "via": "email"\n      }\n    ]\n  }\n}\n')))}b.isMDXComponent=!0},442:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var i=t(0),a=t.n(i);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),d=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(t),p=i,f=u["".concat(r,".").concat(p)]||u[p]||b[p]||o;return t?a.a.createElement(f,s(s({ref:n},l),{},{components:t})):a.a.createElement(f,s({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},446:function(e,n,t){"use strict";function i(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(a&&(a+=" "),a+=n);return a}},447:function(e,n,t){"use strict";var i=t(0),a=t.n(i),o=t(451),r=t(446),s=t(55),c=t.n(s),l=37,d=39;n.a=function(e){var n=e.lazy,t=e.block,s=e.defaultValue,u=e.values,b=e.groupId,p=e.className,f=Object(o.a)(),m=f.tabGroupChoices,h=f.setTabGroupChoices,g=Object(i.useState)(s),v=g[0],O=g[1],j=i.Children.toArray(e.children);if(null!=b){var y=m[b];null!=y&&y!==v&&u.some((function(e){return e.value===y}))&&O(y)}var w=function(e){O(e),null!=b&&h(b,e)},k=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t},p)},u.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===n,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===n}),key:n,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case d:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(k,e.target,e)},onFocus:function(){return w(n)},onClick:function(){w(n)}},t)}))),n?Object(i.cloneElement)(j.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,n){return Object(i.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))}},448:function(e,n,t){"use strict";var i=t(3),a=t(0),o=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return o.a.createElement("div",Object(i.a)({role:"tabpanel"},{hidden:t,className:a}),n)}},451:function(e,n,t){"use strict";var i=t(0),a=t(452);n.a=function(){var e=Object(i.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},452:function(e,n,t){"use strict";var i=t(0),a=Object(i.createContext)(void 0);n.a=a}}]);