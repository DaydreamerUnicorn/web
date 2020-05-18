(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var i=n(1),a=n(9),r=(n(0),n(323)),o={id:"sign-in-with-github-google-facebook-linkedin",title:"Sign in with GitHub, Google, Facebook, LinkedIn, ..."},c={id:"version-v0.3/guides/sign-in-with-github-google-facebook-linkedin",title:"Sign in with GitHub, Google, Facebook, LinkedIn, ...",description:'In this document we will take a look at setting up "Sign in with GitHub" using',source:"@site/versioned_docs/version-v0.3/guides/sign-in-with-github-google-facebook-linkedin.mdx",permalink:"/kratos/docs/guides/sign-in-with-github-google-facebook-linkedin",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.3/guides/sign-in-with-github-google-facebook-linkedin.mdx",version:"v0.3",lastUpdatedBy:"aeneasr",lastUpdatedAt:1589548840,sidebar:"version-v0.3/docs",previous:{title:"Hooks",permalink:"/kratos/docs/self-service/hooks/index"},next:{title:"Zero Trust with IAP Proxy",permalink:"/kratos/docs/guides/zero-trust-iap-proxy-identity-access-proxy"}},s=[{value:"GitHub",id:"github",children:[]},{value:"Google, LinkedIn, Facebook",id:"google-linkedin-facebook",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,'In this document we will take a look at setting up "Sign in with GitHub" using\nORY Kratos.'),Object(r.b)("p",null,"Run the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/quickstart"}),"Quickstart")," with Docker Compose:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'# This assumes that you have ORY Kratos checked out locally and\n# that your current directory ("pwd") is the folder where ORY Kratos\n# is.\n\n$ make quickstart\n')),Object(r.b)("h2",{id:"github"},"GitHub"),Object(r.b)("p",null,'To set up "Sign in with GitHub" you must create a\n',Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/"}),"GitHub OAuth2 Client"),"."),Object(r.b)("p",null,'Set the "Authorization callback URL" to:'),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/strategies/oidc/callback/github\n")),Object(r.b)("p",null,"The pattern of this URL is:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"http(s)://<domain-of-ory-kratos>:<public-port>/self-service/browser/flows/strategies/oidc/callback/<provider-id>\n")),Object(r.b)("p",null,"The provider ID must point to the provider's ID set in the ORY Kratos\nconfiguration file (explained in paragraphs)."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"GitHub does not implement OpenID Connect. Therefore, ORY Kratos makes a request\nto\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.github.com/v3/users/#get-the-authenticated-user"}),"GitHub's User API"),"\nand adds that data to ",Object(r.b)("inlineCode",{parentName:"p"},"std.extVar('claims')"),". Check out what data is available\nat\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/"}),"GitHub's Scope Docs"),".\nNot all GitHub fields are supported however. Check the list of supported fields\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ory/kratos/blob/v0.2.1-alpha.1/selfservice/strategy/oidc/provider_github.go#L72-L98"}),"in the source code"),"."))),Object(r.b)("p",null,"As explained in\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/concepts/credentials/openid-connect-oidc-oauth2"}),"OpenID Connect and OAuth2 Credentails"),",\nyou must also create a Jsonnet code snippet for the provider. Save the code in\n",Object(r.b)("inlineCode",{parentName:"p"},"<kratos-directory>/contrib/quickstart/kratos/email-password/oidc.github.jsonnet"),".\nThe following schema takes ",Object(r.b)("inlineCode",{parentName:"p"},"email_primary")," and maps it to ",Object(r.b)("inlineCode",{parentName:"p"},"traits.email"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json",metastring:'title="contrib/quickstart/kratos/email-password/oidc.github.jsonnet"',title:'"contrib/quickstart/kratos/email-password/oidc.github.jsonnet"'}),'local claims = {\n  email_verified: false\n} + std.extVar(\'claims\');\n\n{\n  identity: {\n    traits: {\n      // Allowing unverified email addresses enables account\n      // enumeration attacks, especially if the value is used for\n      // e.g. verification or as a password login identifier.\n      //\n      // Therefore we only return the email if it (a) exists and (b) is marked verified\n      // by GitHub.\n      [if "email_primary" in claims && claims.email_verified then "email" else null]: claims.email_primary,\n    },\n  },\n}\n')),Object(r.b)("p",null,"Now, enable the GitHub provider in the ORY Kratos config located at\n",Object(r.b)("inlineCode",{parentName:"p"},"<kratos-directory>/contrib/quickstart/kratos/email-password/.kratos.yml"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/kratos/email-password/.kratos.yml"',title:'"contrib/quickstart/kratos/email-password/.kratos.yml"'}),"# $ kratos -c path/to/my/kratos/config.yml serve\nselfservice:\n  strategies:\n    oidc:\n      enabled: true\n      config:\n        providers:\n          - id: github # this is `<provider-id>` in the Authorization callback URL. DO NOT CHANGE IT ONCE SET!\n            provider: github\n            client_id: .... # Replace this with the OAuth2 Client ID provided by GitHub\n            client_secret: .... # Replace this with the OAuth2 Client Secret provided by GitHub\n            mapper_url: file:///etc/config/kratos/oidc.github.jsonnet\n            scope:\n              - user:email\n")),Object(r.b)("p",null,"Next, open the login endpoint of the SecureApp and you should see the GitHub\nLogin option!"),Object(r.b)("h2",{id:"google-linkedin-facebook"},"Google, LinkedIn, Facebook"),Object(r.b)("p",null,"Connecting with other Social Sign In providers will be very similar to the\nGitHub flow. If you've managed to do it, write it down and make a PR against\nthis document! :)"))}p.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=i,h=b["".concat(o,".").concat(u)]||b[u]||d[u]||r;return n?a.a.createElement(h,c({ref:t},l,{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);