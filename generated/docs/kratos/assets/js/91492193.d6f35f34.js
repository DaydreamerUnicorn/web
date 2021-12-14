"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[22035],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13919:function(e,t,n){function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return r}})},44996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return i}});var o=n(52263),r=n(13919);function a(){var e=(0,o.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var a=void 0===o?{}:o,i=a.forcePrependBaseUrl,s=void 0!==i&&i,l=a.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},52387:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(67294),r=n(83300),a=n.n(r),i=n(19055),s="container_2x1S",l=n(25108),c=function(e,t){if(!e)return 0;var n=t.findIndex((function(t){return t.indexOf(e)>-1}));return-1===n?0:n},u=function(e){var t=e.src,n=e.title,r=(0,o.useState)(""),u=r[0],p=r[1];(0,o.useEffect)((function(){var n,o,r;a()(t.replace("github.com","raw.githubusercontent.com").replace("/blob/","/")).then((function(e){return e.text()})).then((n=e,o=n.startAt,r=n.endAt,function(e){var t=e.split("\n"),n=c(o,t);n>0&&(t=["// ..."].concat(t.slice(n,-1)));var a=c(r,t);return a>0&&(t=[].concat(t.slice(0,a+1),["// ..."])),t.join("\n")})).then(p).catch(l.error)}),[]);var d="language-"+function(e){var t=e.split(".").pop();switch(t){case"jsx":return"jsx";case"tsx":return"tsx";case"ts":return"typescript";case"go":return"go";case"yaml":case"yml":return"yaml";case"js":return"javascript";case"html":return"html";case"pug":return"pug";default:return t}}(t),m='title="'+(n||function(e){var t=e.match(new RegExp("https://github.com/[^/]+/[^/]+/blob/[^/]+/(.+)","i"))||[];return t.length>=2?t[1]:e}(t))+'"';return o.createElement("div",{className:s},o.createElement(i.Z,{metastring:m,className:d,children:u}))}},79077:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=n(44996),s=n(52387),l=["components"],c={id:"csrf",title:"Common Cookie and CSRF Pitfalls"},u=void 0,p={unversionedId:"debug/csrf",id:"version-v0.8/debug/csrf",isDocsHomePage:!1,title:"Common Cookie and CSRF Pitfalls",description:"Because Ory Kratos is not just an API, but instead talks to your users' browsers",source:"@site/versioned_docs/version-v0.8/debug/csrf.mdx",sourceDirName:"debug",slug:"/debug/csrf",permalink:"/kratos/docs/v0.8/debug/csrf",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.8/debug/csrf.mdx",tags:[],version:"v0.8",lastUpdatedBy:"rvo",lastUpdatedAt:1637686420,formattedLastUpdatedAt:"11/23/2021",frontMatter:{id:"csrf",title:"Common Cookie and CSRF Pitfalls"},sidebar:"version-v0.8/docs",previous:{title:"kratos version",permalink:"/kratos/docs/v0.8/cli/kratos-version"},next:{title:"Performance Problems and Out Of Memory Panics Caused by Password Hashing",permalink:"/kratos/docs/v0.8/debug/performance-out-of-memory-password-hashing-argon2"}},d=[{value:"Common Pitfalls",id:"common-pitfalls",children:[{value:"SameSite Attribute",id:"samesite-attribute",children:[],level:3},{value:"Ory Kratos running over HTTP without dev-mode enabled",id:"ory-kratos-running-over-http-without-dev-mode-enabled",children:[],level:3},{value:"Running on separate (sub-)domains",id:"running-on-separate-sub-domains",children:[],level:3},{value:"Mixing up 127.0.0.1 and localhost",id:"mixing-up-127001-and-localhost",children:[],level:3},{value:"Trying to access Ory Kratos Cookies from client-side JavaScript",id:"trying-to-access-ory-kratos-cookies-from-client-side-javascript",children:[],level:3},{value:"Accessing Ory Kratos APIs from client-side JavaScript / AJAX",id:"accessing-ory-kratos-apis-from-client-side-javascript--ajax",children:[],level:3},{value:"Accessing Ory Kratos APIs from a server-side application",id:"accessing-ory-kratos-apis-from-a-server-side-application",children:[],level:3}],level:2}],m={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Because Ory Kratos is not just an API, but instead talks to your users' browsers\ndirectly, several security measures have been implemented in Ory Kratos. One of\nthem is protection against CSRF:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"CSRF is an attack that tricks the victim into submitting a malicious request.\nIt inherits the identity and privileges of the victim to perform an undesired\nfunction on the victim\u2019s behalf. For most sites, browser requests\nautomatically include any credentials associated with the site, such as the\nuser\u2019s session cookie, IP address, Windows domain credentials, and so forth.\nTherefore, if the user is currently authenticated to the site, the site will\nhave no way to distinguish between the forged request sent by the victim and a\nlegitimate request sent by the victim."),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://owasp.org/www-community/attacks/csrf"},"Source"))),(0,a.kt)("p",null,"To protect against CSRF, several endpoints are protected by Anti-CSRF measures.\nTypically, endpoints accepting ",(0,a.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PUT")," actions have Anti-CSRF\nmeasures. When rendering a form for example, a\n",(0,a.kt)("inlineCode",{parentName:"p"},'<input type="hidden" name="csrf_token" value="...">')," HTML Input Element is\nadded. Ory Kratos compares that value to the value set in the Anti-CSRF Cookie.\nIf the values match, the request is allowed."),(0,a.kt)("p",null,"Ory Kratos uses HTTP Cookies to store login sessions when accessed via a\nbrowser."),(0,a.kt)("h2",{id:"common-pitfalls"},"Common Pitfalls"),(0,a.kt)("p",null,"Sometimes, cookies and CSRF just wont work - all requests end up with a 401\nUnauthorized or 400 Bad Request. Here are some common causes and easy fixes if\nthat happens to you!"),(0,a.kt)("p",null,"Before starting to debug cookie and CSRF issues, make sure to check out the\nChrome Developer Tools (or any comparable technology) Cookies tabs in the\nApplication tab"),(0,a.kt)("img",{alt:"Google Chrome Developer Tools - Application Tab - Cookies",src:(0,i.Z)("img/docs/csrf_app_tab.png")}),(0,a.kt)("p",null,"as well as the network tab - look for ",(0,a.kt)("inlineCode",{parentName:"p"},"Cookie")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Set-Cookie")," HTTP Headers:"),(0,a.kt)("img",{alt:"Google Chrome Developer Tools - Network Tab - Cookies",src:(0,i.Z)("img/docs/csrf_network_tab.png")}),(0,a.kt)("h3",{id:"samesite-attribute"},"SameSite Attribute"),(0,a.kt)("p",null,"If you run Ory Kratos in ",(0,a.kt)("inlineCode",{parentName:"p"},"--dev")," mode, it disables ",(0,a.kt)("inlineCode",{parentName:"p"},"SameSite=Lax")," as Google\nChrome rejects all cookies that have ",(0,a.kt)("inlineCode",{parentName:"p"},"SameSite=Lax")," but have ",(0,a.kt)("inlineCode",{parentName:"p"},"secure")," set to\n",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". If you require ",(0,a.kt)("inlineCode",{parentName:"p"},"SameSite=Lax"),", you need to run Ory Kratos with HTTPS\nand not use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--dev")," flag."),(0,a.kt)("h3",{id:"ory-kratos-running-over-http-without-dev-mode-enabled"},"Ory Kratos running over HTTP without dev-mode enabled"),(0,a.kt)("p",null,"Ory Kratos' cookies have the ",(0,a.kt)("inlineCode",{parentName:"p"},"Secure")," flag enabled by default. This means that\nthe browser will not send the cookie unless the URL is a HTTPS URL. If you want\nOry Kratos to work with HTTP (e.g. on localhost) you can add the ",(0,a.kt)("inlineCode",{parentName:"p"},"--dev")," flag:\n",(0,a.kt)("inlineCode",{parentName:"p"},"kratos serve --dev"),"."),(0,a.kt)("p",null,"Do not do this in production!"),(0,a.kt)("h3",{id:"running-on-separate-sub-domains"},"Running on separate (sub-)domains"),(0,a.kt)("p",null,"Cookies work best on the same domain. While it is possible to get cookies\nrunning on subdomains it is not possible to do that across Top Level Domains\n(TLDs)."),(0,a.kt)("p",null,"Make sure that your application (e.g. the SecureApp from the quickstart) and Ory\nKrato's Public API are available on the same domain - preferably without\nsubdomains. Hosting both systems and routing paths with a Reverse Proxy such as\nNginx or Envoy or AWS API Gateway is the best solution. For example, routing\n",(0,a.kt)("inlineCode",{parentName:"p"},"https://my-website/kratos/...")," to Ory Kratos and ",(0,a.kt)("inlineCode",{parentName:"p"},"https://my-website/dashboard"),"\nto the SecureApp's Dashboard. Alternatively you can use piping in your app as we\ndo in the Quickstart guide."),(0,a.kt)("p",null,"We do not recommend running them on separate subdomains, e.g.\n",(0,a.kt)("inlineCode",{parentName:"p"},"https://kratos.my-website/")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"https://secureapp.my-website/"),"."),(0,a.kt)("p",null,"To allow cookies to work across subdomains, make sure to set the domain name in\nthe Kratos config file under\n",(0,a.kt)("a",{parentName:"p",href:"https://www.ory.sh/kratos/docs/next/guides/configuring-cookies/#session-cookies"},(0,a.kt)("inlineCode",{parentName:"a"},"session.cookie.domain")),"."),(0,a.kt)("p",null,"Running the apps on different TLDs will not work at all, e.g.\n",(0,a.kt)("inlineCode",{parentName:"p"},"https://kratos-my-website/")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"https://secureapp-my-website/"),"."),(0,a.kt)("p",null,"Running the services on different ports however is ok, if the domain stays the\nsame."),(0,a.kt)("h3",{id:"mixing-up-127001-and-localhost"},"Mixing up 127.0.0.1 and localhost"),(0,a.kt)("p",null,"As already explained, make sure that the TLD stays the same. This is especially\ntrue for ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," which are both separate TLDs. Make sure\nthat you use ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," consistently across your configuration!"),(0,a.kt)("h3",{id:"trying-to-access-ory-kratos-cookies-from-client-side-javascript"},"Trying to access Ory Kratos Cookies from client-side JavaScript"),(0,a.kt)("p",null,"The cookies Ory Kratos sets cannot be accessed directly from Client-Side\nJavaScript because the ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpOnly")," flag is set. This flag cannot be modified!"),(0,a.kt)("h3",{id:"accessing-ory-kratos-apis-from-client-side-javascript--ajax"},"Accessing Ory Kratos APIs from client-side JavaScript / AJAX"),(0,a.kt)("p",null,"When implementing a Single Page App (SPA) using AngularJS or ReactJS you\nprobably want to access Ory Krato's Public APIs."),(0,a.kt)("p",null,"To prevent several attack vectors, Ory Krato's Public API is protected - even\nfor some GET requests - with Anti-CSRF measures."),(0,a.kt)("p",null,"Because AJAX does not send cookies per default, you need to configure your AJAX\nrequest to include cookies. Using the Browser's ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," function, you need to\nset\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters"},(0,a.kt)("inlineCode",{parentName:"a"},"credentials: 'include'")),"\nfor example."),(0,a.kt)("h3",{id:"accessing-ory-kratos-apis-from-a-server-side-application"},"Accessing Ory Kratos APIs from a server-side application"),(0,a.kt)("p",null,"When implementing a server-side application (e.g. in PHP, Java, Go, NodeJS, ...)\nmake sure to include the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cookie")," header from the client when fetching the\nself-service flows (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /self-service/login/flows?id=..."),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export default (req: Request, res: Response) => {\n  // ...\n  kratos.getSelfServiceLoginFlow(flow, req.header('cookie'))\n}\n")),(0,a.kt)("p",null,"A complete example looks as follows:"),(0,a.kt)(s.Z,{lang:"js",link:"https://github.com/ory/kratos-selfservice-ui-node/blob/782f20cb023c140b230dfa0f5358c76999e9b938/src/routes/login.ts#L25",src:"https://raw.githubusercontent.com/ory/kratos-selfservice-ui-node/master/src/routes/login.ts",mdxType:"CodeFromRemote"}),(0,a.kt)("p",null,"Without forwarding the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cookie")," HTTP Header it will not be possible to fetch the\nflow due to a security error. This protection prevents accidental leak of\npersonal information when users copy/paste, for example, the login URL."))}f.isMDXComponent=!0},83300:function(e,t){var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,n.fetch&&(t.default=n.fetch.bind(n)),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response}}]);