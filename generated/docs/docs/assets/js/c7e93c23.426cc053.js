(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[2687],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return i}});var a=n(2263),r=n(3919);function o(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,s=void 0!==i&&i,c=o.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8414:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=n(4996),s={id:"get-started",title:"Get Started"},c=void 0,l={unversionedId:"get-started",id:"get-started",isDocsHomePage:!1,title:"Get Started",description:"Ory Open Source documentation has moved in the navigation on the left. Ory (the",source:"@site/docs/get-started.mdx",sourceDirName:".",slug:"/get-started",permalink:"/docs/get-started",editUrl:"https://github.com/ory/docs/edit/master/docs/docs/get-started.mdx",version:"current",lastUpdatedBy:"Vincent",lastUpdatedAt:1621605826,formattedLastUpdatedAt:"5/21/2021",frontMatter:{id:"get-started",title:"Get Started"},sidebar:"docs",previous:{title:"Welcome",permalink:"/docs/"},next:{title:"Ory Open Source",permalink:"/docs/open-source"}},p=[{value:"Create Project",id:"create-project",children:[]},{value:"Create Personal Access Token",id:"create-personal-access-token",children:[]},{value:"Install the Ory CLI",id:"install-the-ory-cli",children:[{value:"Install on macOS",id:"install-on-macos",children:[]},{value:"Install on Linux",id:"install-on-linux",children:[]},{value:"Install on Windows",id:"install-on-windows",children:[]}]},{value:"Integration",id:"integration",children:[]}],d={toc:p};function u(e){var t=e.components,s=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Ory Open Source documentation has moved in the navigation on the left. Ory (the\nSaaS product) is currently only available to Ory Insiders and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/early-access"},"haslimitations"),"."))),(0,o.kt)("p",null,"To get started, head over to ",(0,o.kt)("a",{parentName:"p",href:"https://console.ory.sh"},"console.ory.sh")," and sign\nup for an account."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sign up for Ory",src:n(6553).Z})),(0,o.kt)("h2",{id:"create-project"},"Create Project"),(0,o.kt)("p",null,"Once your account is set up, you will be greeted with your projects list."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Empty Ory projects list",src:n(6129).Z})),(0,o.kt)("p",null,"Next, ",(0,o.kt)("a",{parentName:"p",href:"https://console.ory.sh/projects/create"},"create a project"),'. You will be\nprompted for an invite code. If you do not have an invite code but would like to\nbecome an Ory Insider, please click the "Contact Us" button. Once Ory is GA,\nthis step will no longer be needed.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Ory project creation requires invite code",src:n(8693).Z})),(0,o.kt)("p",null,"Once entered, you will be greeted with the project creation screen."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Ory project creation screen",src:n(3249).Z})),(0,o.kt)("p",null,"Enter a project name and leave the application URL empty for now."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Ory project creation screen",src:n(9854).Z})),(0,o.kt)("p",null,"The Identity Model is a JSON Schema which describes your identity's (e.g. your\ncustomers / users / ...) fields. In Ory, every identity can have their own\nmodel, allowing you to separate between different customer types, user types\n(e.g. employees and customers)."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/identity"},"Learn more about the Identity Model"),' and the available\nprofiles! For the quickstart, we will use the "Demo Profile" model.'),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'The "Demo Profile" is a preset for technical demonstrations. Do not use it in\nreal applications as we will eventually change or delete this profile.'))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Choose identity model for Ory project",src:n(9302).Z})),(0,o.kt)("p",null,"For demo applications, we recommend enabling sign in after registration."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Enable sign in after registration disables account enumeration defenses!"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Enable &quot;session after registration&quot; for Ory project",src:n(5871).Z})),(0,o.kt)("p",null,'Next, hit "create" and fill out the details on the check out page. Your project\nshould come alive shortly after!'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Created Ory project in the project list",src:n(3626).Z})),(0,o.kt)("h2",{id:"create-personal-access-token"},"Create Personal Access Token"),(0,o.kt)("p",null,"Personal Access Tokens are bound to a project. They are needed to access\nadministrative APIs (e.g. deleting an identity, using the Ory CLI, ...)."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Personal Access Tokens are an interim security mechanism. In the future, more\nsecure mechanisms such as JWT Assertions and mTLS will be supported."))),(0,o.kt)("p",null,'Head over to the "Personal Access Token" page'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Personal Access Token list",src:n(8745).Z})),(0,o.kt)("p",null,"and click on the plus symbol to create a new token."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CreatePersonal Access Token",src:n(9018).Z})),(0,o.kt)("p",null,"Once created, a dialog will appear on the bottom left containing your personal\naccess token. Copy this into a password manager or another safe place. The token\nwill never be displayed again! If you forget it, you will need to create a new\ntoken."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CreatePersonal Access Token",src:n(3262).Z})),(0,o.kt)("h2",{id:"install-the-ory-cli"},"Install the Ory CLI"),(0,o.kt)("p",null,"The Ory CLI (Command-Line-Interface) makes integrating and interfacing with Ory\neasy! For a more in-depth look at the CLI head over to\n",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/ory-cli-install-use"},"install and use the Ory CLI"),"!"),(0,o.kt)("h3",{id:"install-on-macos"},"Install on macOS"),(0,o.kt)("p",null,"You can install the Ory CLI using ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew")," on macOS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew tap ory/ory\n$ brew install ory/ory/ory\n$ ory help\n")),(0,o.kt)("h3",{id:"install-on-linux"},"Install on Linux"),(0,o.kt)("p",null,"On linux, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"bash <(curl ...)")," to fetch the latest stable binary\nusing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ bash <(curl https://raw.githubusercontent.com/ory/cli/master/install.sh) -b .\n$ ./ory help\n")),(0,o.kt)("p",null,"You may want to move the Ory CLI to your ",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo mv ./ory /usr/local/bin/\n$ ory help\n")),(0,o.kt)("h3",{id:"install-on-windows"},"Install on Windows"),(0,o.kt)("p",null,"You can install Ory CLI using ",(0,o.kt)("a",{parentName:"p",href:"https://scoop.sh"},"scoop")," on Windows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> scoop bucket add ory-cli https://github.com/ory/scoop-ory.git\n> scoop install ory\n> ory help\n")),(0,o.kt)("h2",{id:"integration"},"Integration"),(0,o.kt)("p",null,"Now it's time to choose your integration!"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,(0,o.kt)("img",{alt:"Integrate Ory with NodeJS",width:100,src:(0,i.Z)("img/nodejs.png")})),(0,o.kt)("th",null))),(0,o.kt)("tbody",null,(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/guides/integrate-nodejs"},"Integrate with ExpressJS"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"More integrations soon!")))))}u.isMDXComponent=!0},8693:function(e,t,n){"use strict";t.Z=n.p+"assets/images/create-project-invite-code-6b22b6f0926325949e02d08c97acde14.png"},9018:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pat-create-11cfd3931071434d0fbb8c0a790192c2.png"},8745:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pat-list-3f4c6e66f4a5b57cd16a2a53085f327c.png"},3262:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pat-ready-44f96995109b29c34f57644961e18cb2.png"},9854:function(e,t,n){"use strict";t.Z=n.p+"assets/images/project-create-details-550fec8f9419fe4206f010e901eb8d70.png"},9302:function(e,t,n){"use strict";t.Z=n.p+"assets/images/project-create-identity-model-8a5ccbe8d839c4214f8c520ffc4af550.png"},5871:function(e,t,n){"use strict";t.Z=n.p+"assets/images/project-create-session-hook-0b25bc4fd806c4013340d58a1ee1a868.png"},3249:function(e,t,n){"use strict";t.Z=n.p+"assets/images/project-create-09c0a743273a14e983f85bc2765d4e58.png"},3626:function(e,t,n){"use strict";t.Z=n.p+"assets/images/project-created-ff77270a853b75036c9a56cd5f6014c8.png"},6129:function(e,t,n){"use strict";t.Z=n.p+"assets/images/project-list-empty-a868be10df2e3901998e49b4a2791d0e.png"},6553:function(e,t,n){"use strict";t.Z=n.p+"assets/images/signup-27b3850da518cbcb42c7357e72479a41.png"}}]);