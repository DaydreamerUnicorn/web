(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[93398],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59132:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=["components"],s={id:"index",title:"Overview"},l=void 0,c={unversionedId:"concepts/index",id:"version-v0.4/concepts/index",isDocsHomePage:!1,title:"Overview",description:"ORY Kratos is a new software archetype Identity Infrastructure Service.",source:"@site/versioned_docs/version-v0.4/concepts/index.md",sourceDirName:"concepts",slug:"/concepts/index",permalink:"/kratos/docs/v0.4/concepts/index",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/concepts/index.md",tags:[],version:"v0.4",lastUpdatedBy:"debrutal",lastUpdatedAt:1600952899,formattedLastUpdatedAt:"9/24/2020",frontMatter:{id:"index",title:"Overview"},sidebar:"version-v0.4/docs",previous:{title:"Installation",permalink:"/kratos/docs/v0.4/install"},next:{title:"User Interface",permalink:"/kratos/docs/v0.4/concepts/ui-user-interface"}},u=[{value:"Full-stack Identity and Access Management (IAM)",id:"full-stack-identity-and-access-management-iam",children:[],level:3},{value:"Identity as a Service (IDaaS)",id:"identity-as-a-service-idaas",children:[],level:3},{value:"Use a library",id:"use-a-library",children:[],level:3},{value:"Roll your own",id:"roll-your-own",children:[],level:3},{value:"ORY Kratos",id:"ory-kratos",children:[{value:"Solving a specific problem domain",id:"solving-a-specific-problem-domain",children:[],level:3},{value:"Software Architecture",id:"software-architecture",children:[],level:3},{value:"Bring your own User Interface (Framework)",id:"bring-your-own-user-interface-framework",children:[],level:3},{value:"Bring your own Identity Model(s)",id:"bring-your-own-identity-models",children:[],level:3},{value:"Forget passport-js, oidc-client, ...",id:"forget-passport-js-oidc-client-",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ORY Kratos is a new software archetype ",(0,o.kt)("strong",{parentName:"p"},"Identity Infrastructure Service"),".\nTraditional identity systems - sometimes referred to as Identity and Access\nManagement (IAM), Identity Management (IdM), Identity Provider (IP/IdP), or\nIdentity as a Service (IDaaS) - have shortcomings that highlight the main\ndifferences between ORY Kratos and other systems."),(0,o.kt)("p",null,"ORY Kratos solves identity on the network. It is not an on-device, for instance\nmobile phones, user database. In ORY Kratos there is always an exchange of\ncredentials. In the case of web applications and identity:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Username + Password -> Cookie, Token, ..."),(0,o.kt)("li",{parentName:"ul"},"Email + Password -> Cookie, Token, ..."),(0,o.kt)("li",{parentName:"ul"},"Passwordless login -> Cookie, Token, ...")),(0,o.kt)("p",null,'Even for alternative use cases for example mobile, browser, or native\napplication there is either a cookie, which accesses the application directly\nthrough the browser, or a token that accesses the application using a\nprogrammatic client via an API. While it is nowadays common - but bad practice -\nto use tokens for "Single Page Apps" or apps running on the client-side browser,\nthere is no real difference between these two approaches as both represent a set\nof credentials valid for a certain domain or a number of domains.'),(0,o.kt)("p",null,"Still there is a vast solution set available for OAuth2 and OpenID Connect. The\nreasons for this would perhaps include the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Assumption - companies offer complexity as security (In ORY's view pretty\nbad);"),(0,o.kt)("li",{parentName:"ul"},"Assumption - the nature of closed source does not allow for new, open and\nde-facto standards to emerge and instead uses a consenus driven feature set,\neven if it doesn't fit the use case 100%.")),(0,o.kt)("p",null,"ORY Kratos tackles both assumptions as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"With inspiration from the approach taken in the Kubernetes Project, ORY\nprovides an open source project that hopefully becomes an open standard in the\nfuture.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Prioritise simplicity and ease of use for developers. ORY Kratos integrates\ncritical security components without relying on complex flows and protocols."))),(0,o.kt)("p",null,"Using ORY Kratos it is possible to consume OAuth2 and OpenID Connect, and/or\ncreate an OAuth2 and OpenID Connect Provider by combining ORY Kratos with\n",(0,o.kt)("a",{parentName:"p",href:"http://github.com/ory/hydra"},"ORY Hydra")," ."),(0,o.kt)("p",null,"With a primary developer audience, ORY designs, secures, and tests critical\nnetwork flows, system architectures, user flows, protocols, and business logic."),(0,o.kt)("h3",{id:"full-stack-identity-and-access-management-iam"},"Full-stack Identity and Access Management (IAM)"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Disclaimer: There are neither product nor project names in this section. This\nsection's goal is to describe circumstances and problems that mostly stem from\nthe community's experience. For information purposes, there is a preliminary\ncomparision of ORY Kratos and other projects and products available at\n",(0,o.kt)("a",{parentName:"em",href:"/kratos/docs/v0.4/further-reading/comparison"},"Comparison")),"."),(0,o.kt)("p",null,"Full-stack IAM is usually sold as a one-size-fits-all solution. Due to size and\ncomplexity, these full-stack solutions are typically written in an enterprise\nclass programming language such as Java EE. The full-stack products have rich\nfeature sets that include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"theming to customize the user experience, and to constrain the anticipated\ntheming use case;"),(0,o.kt)("li",{parentName:"ul"},"HTML Template Engines specific to the language used, such as Java Server Pages or\n",(0,o.kt)("a",{parentName:"li",href:"https://www.keycloak.org/docs/latest/server_development/#html-templates"},"Apache FreeMarker\u2122"),";"),(0,o.kt)("li",{parentName:"ul"},"plugin loaders and APIs to add custom logic or even custom API endpoints,\nspecific to the language used by the project; and"),(0,o.kt)("li",{parentName:"ul"},"features such as integrated Load Balancers, Service Discovery, and other\nfeatures designed prior to today's mature cloud architectures.")),(0,o.kt)("p",null,"Full-stack software projects come with some overhead:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the software has a large disk, CPU, and memory footprint;"),(0,o.kt)("li",{parentName:"ul"},"while scaling and clustering for High Availability is possible, it is complex\nsince inter-process-communication for caches and other features is required\nfor example using protocols such as ",(0,o.kt)("a",{parentName:"li",href:"http://jgroups.org/"},"JGroups"),"; and"),(0,o.kt)("li",{parentName:"ul"},"starting off with pre-defined use cases is easy, yet customization and\napplication specific features require much more work.")),(0,o.kt)("p",null,"Most full-stack projects we've seen are in-house solutions for IAM problems.\nImagine Google releasing their IAM as an open source product. It's certainly\ngreat, and it covers a lot of ground, but it also comes with drawbacks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Strict data models specific to the company developing the product:"),(0,o.kt)("li",{parentName:"ul"},"Inflexible login process with either a username or an email for login, but not\nboth or unable to change it later;"),(0,o.kt)("li",{parentName:"ul"},"Any application specific additional attributes are stored as unstructured\ndata, sometimes even as plain key/value pairs;"),(0,o.kt)("li",{parentName:"ul"},"Complex build pipelines when using modern frontend frameworks like React or\nAngular in the HTML Rendering engine;"),(0,o.kt)("li",{parentName:"ul"},"The user model stays the same, even when differentiating between customers\nand employees in your system; and"),(0,o.kt)("li",{parentName:"ul"},"API consumption is usually an after-thought because most flows are built\naround the user doing something in the browser. All of the above leads to\nadded complexity in application development and deployment due to session\nmanagement, cookie management, CSRF protection, and other mechanisms related\nto identity and security.")),(0,o.kt)("h3",{id:"identity-as-a-service-idaas"},"Identity as a Service (IDaaS)"),(0,o.kt)("p",null,'In today\'s market, with many proprietary SAAS companies offering Identity as a\nService, it seems easy to make sign-on cumbersome for both developers and users.\nEven with delegated third party login processes such as "Login with Google,"\nwhere OAuth2 and OpenID Connect are often the primary protocols, the challenge\nis making a secure and simple login without any extra overhead, for instance, with Oauth2 and OpenID.'),(0,o.kt)("p",null,"ORY's focus is on simplicity, user experience, and above all, using the right\ntools and technologies for the target application. Feedback from ORY's user\ncommunity as well as the open source development efforts involved in ORY Hydra-\nOAuth2 and OpenID Connect server ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra"},"ORY Hydra"),", show\nthat implementing OAuth2 or OpenID Connect is often frustrating and too complex.\nThese technologies are not one size fits all, and not designed for every\nimplementation scenario."),(0,o.kt)("p",null,"The main point is that OAuth2 and OpenID Connect protocols solve identity\nfederation. For instance, when the target application authenticates an identity\nor authorizes access by using a system outside of the\napplication's control, for example within an enterprise, company domain or another third party service. These protocols don't solve processes like updating a\nuser's profile, adding a secondary recovery email, solving 2FA, storing and\nmanaging sessions, or solving global logout. These processes are the developer's\nresponsibility and while the OAuth2 and OpenID Connect protocols offer a way\nto securely solve identity federation over the browser, they do not solve:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Storage and management of all these tokens. These would often end up in the\nlocalStore making them vulnerable to XSS attacks. Or in a cookie issued by an\nHTTP server; here an extra function would need to be developed."),(0,o.kt)("li",{parentName:"ul"},"Managing and storing the user session. This would require the developer to\ncreate the cookie for the session, delete the cookie at log out, and to make\nsure that the cookie implements best security practices."),(0,o.kt)("li",{parentName:"ul"},"Refreshing expiring tokens. While this function is straightforward for one\nrequest, synchronising for example fifteen concurrent requests can be\ndifficult.")),(0,o.kt)("p",null,'The point is that OAuth2 is hard to use because the intended use cases (for\ninstance "Facebook Photo Backups") are very specific, and the proper security\nmechanisms need to be in place to deal with malicious third parties. ORY Kratos\nsimplifies user login.'),(0,o.kt)("h3",{id:"use-a-library"},"Use a library"),(0,o.kt)("p",null,"Due to the multitude of programming languages across front end, backend and core\ninfrastructure, ORY Kratos embraced a polyglot design. In other words ORY Kratos\nprovides Software Development Kits (SDK) and libraries for the main programming\nlanguages."),(0,o.kt)("p",null,"As software development teams grow, product requirements change. During a development lifecycle different parts, for instance humans, servers, and\ncode, need to scale to size. Over time, the original product splits into\nsmaller, more manageable chunks. The libraries chosen at the outset will need to\nrun on the newest version of the programming language. Sometimes even the\nprogramming language or implementation framework are subject to change as a\nwhole. Still, the identity system is often so interlinked with all of the source\ncode, middlewares, annotations, shared state, etc., that it becomes an absolute\nnightmare to decouple."),(0,o.kt)("h3",{id:"roll-your-own"},"Roll your own"),(0,o.kt)("p",null,"Starting from scratch is sometimes the only option to fulfill the product's\narchitectural requirements. In this case, the following are some of the main\nconsiderations and challenges in ORY's efforts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To manage changing user models;"),(0,o.kt)("li",{parentName:"ul"},'To choose and use some encryption algorithms such as BCrypt, PBKDF2,\nScrypt, Argon2, Argon2i, Argon2id, Argon2d. There are many alternatives and\nmost of the algorithms have numerous versions and parametrization options for\nexample "Salt length parameter." The multitude of options makes it hard to\nconfigure the most secure setting;'),(0,o.kt)("li",{parentName:"ul"},'To consider and implement a wide range of processes and process variants. For\ninstance, the user signs up via email, and later uses "Sign up with Google"\nthat has the same email address. Or, the user previously signed up using the\nemail/password process or flow, and then signs up using "Sign up with Google"\nand vice versa. Even these fairly simple use cases warrant considerable\ndevelopment effort to correctly implement with some degree of user\nfriendliness;'),(0,o.kt)("li",{parentName:"ul"},"To prevent security threats for example\n",(0,o.kt)("a",{parentName:"li",href:"https://wiki.owasp.org/index.php/Testing_for_User_Enumeration_and_Guessable_User_Account_(OWASP-AT-002)"},"account enumeration attacks"),";"),(0,o.kt)("li",{parentName:"ul"},"To implement two factor authentication (2FA). When the user\nloses access to a registered and approved device, there should be a\nfallback phone number for SMS or offline security codes;"),(0,o.kt)("li",{parentName:"ul"},"To understand and use all of the important rules such as activation, welcome,\netc., around sending emails that don't alert spam filters;"),(0,o.kt)("li",{parentName:"ul"},"To support a broad ecosystem of products and services. For example in the event\nthat a target application needs to notify Stripe when a new customer signs up.")),(0,o.kt)("p",null,"The list above is purposely kept short. There are very many things to consider\nwhen building Kratos in concert with the other products ORY Keto, ORY Hydra,\nand ORY Oathkeeper. The list is really, really long."),(0,o.kt)("h2",{id:"ory-kratos"},"ORY Kratos"),(0,o.kt)("p",null,"Considering all of the information above, there would be enough context to\nunderstand why and how ORY Kratos started, and why it's different from other\nmore conventional approaches. ORY Kratos uses a new stack, is open source, and\npeer reviewed and developed in a broad community of experts."),(0,o.kt)("h3",{id:"solving-a-specific-problem-domain"},"Solving a specific problem domain"),(0,o.kt)("p",null,"ORY Kratos addresses a clearly defined problem domain:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"managing credentials such as passwords, recovery email addresses, and security\nquestions;"),(0,o.kt)("li",{parentName:"ul"},"authentication including secure login, keeping track of sessions and devices;"),(0,o.kt)("li",{parentName:"ul"},"selfservice account management for example update profile, add/update email\naddresses, and changing passwords;"),(0,o.kt)("li",{parentName:"ul"},"account/identity administration such as create, read, delete, update, import,\nand get; and"),(0,o.kt)("li",{parentName:"ul"},"managing identity data for example first name, last name, profile picture, and\nbirthday, etc.")),(0,o.kt)("p",null,"ORY has numerous products that support the protocols OAuth2 or OpenID Connect in\n",(0,o.kt)("a",{parentName:"p",href:"http://github.com/ory/hydra"},"ORY Hydra"),", a permission system in\n",(0,o.kt)("a",{parentName:"p",href:"http://github.com/ory/keto"},"ORY Keto"),", and a Reverse Proxy in\n",(0,o.kt)("a",{parentName:"p",href:"http://github.com/ory/oathkeeper"},"ORY Oathkeeper"),"."),(0,o.kt)("h3",{id:"software-architecture"},"Software Architecture"),(0,o.kt)("p",null,"ORY's\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ory.sh/docs/ecosystem/software-architecture-philosophy"},"Software Architecture and Philosophy"),"\ndocument, explains the architectural beliefs and framework behind the ORY\nProducts in particular:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Small runtime footprint with an about five (5) MB binary running on all operating\nsystems without any system, library, or VM dependencies;"),(0,o.kt)("li",{parentName:"ul"},"Fully virtualised in a fifteen (15) MB Docker image;"),(0,o.kt)("li",{parentName:"ul"},"Easy to manage with exactly one binary for the server and the cli;"),(0,o.kt)("li",{parentName:"ul"},"Run-time orchestration using the latest Kubernetes providing fast and easy to\nuse ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory/k8s"},"Helm charts"),";"),(0,o.kt)("li",{parentName:"ul"},"Horizontal scaling with no etcd key value store or memcached or adjacent tool\nrequired.")),(0,o.kt)("h3",{id:"bring-your-own-user-interface-framework"},"Bring your own User Interface (Framework)"),(0,o.kt)("p",null,"ORY's approach to user interface and user experience is to provide for an\ninteraction concept with maximum flexibility and creativity. Some companies need\n",(0,o.kt)("a",{parentName:"p",href:"https://blog.hubspot.com/blog/tabid/6307/bid/34155/how-to-capture-more-and-better-lead-intel-with-progressive-profiling.aspx"},"progressive profiling"),"\nand build a NodeJS app. Other companies desire to capture everything in one go,\nusing Client-Side JavaScript library such as Angular or React. Some companies\nwant an iOS-native registration and login experience. While ORY's cloud native\nheadless API approach address many integration and UI issues, with ORY Kratos,\npredefined flows make it easy to implement a custom user interface for login,\nregistration, profile management, account reset, etc. Furthermore, to make it\nvery easy to get started there is a reference implementation\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos-selfservice-ui-node"},"github.com/ory/kratos-selfservice-ui-node"),"."),(0,o.kt)("p",null,"For more details about each individual flow, consult the\n",(0,o.kt)("a",{parentName:"p",href:"/kratos/docs/v0.4/self-service"},"Self-Service Flows Chapter"),"."),(0,o.kt)("h3",{id:"bring-your-own-identity-models"},"Bring your own Identity Model(s)"),(0,o.kt)("p",null,"Sometimes it is necessary to store more than one type of identity in your\nsystem:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A customer that uses email + password to login, and needs to set a birthdate;\nor"),(0,o.kt)("li",{parentName:"ul"},"An employee that uses a unique username + password to login with a cost center\nattached to the profile.")),(0,o.kt)("p",null,"ORY Kratos implements both scenarios by using\n",(0,o.kt)("a",{parentName:"p",href:"/kratos/docs/v0.4/concepts/identity-user-model"},"JSON Schemas for Identities")),(0,o.kt)("h3",{id:"forget-passport-js-oidc-client-"},"Forget passport-js, oidc-client, ..."),(0,o.kt)("p",null,"While proprietary and bespoke middleware can protect APIs and Web endpoints, ORY\nOpen Source provides a base solution for many use cases. For example, ORY Kratos\nintegrates with ORY Oathkeeper, a Reverse Proxy solution. Defining Access Rules\nis as easy as writing a few lines of JSON / JSON5 / YAML!"),(0,o.kt)("p",null,"Please consult the ",(0,o.kt)("a",{parentName:"p",href:"/kratos/docs/v0.4/quickstart"},"Quickstart documentation"),", for\nfurther information."))}d.isMDXComponent=!0}}]);