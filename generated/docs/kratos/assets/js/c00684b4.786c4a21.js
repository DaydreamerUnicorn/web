(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[15514],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return u},kt:function(){return p}});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(i),p=r,m=d["".concat(l,".").concat(p)]||d[p]||f[p]||a;return i?n.createElement(m,o(o({ref:t},u),{},{components:i})):n.createElement(m,o({ref:t},u))}));function p(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},13919:function(e,t,i){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}i.d(t,{b:function(){return n},Z:function(){return r}})},44996:function(e,t,i){"use strict";i.d(t,{C:function(){return a},Z:function(){return o}});var n=i(52263),r=i(13919);function a(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,i=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,i,n){var a=void 0===n?{}:n,o=a.forcePrependBaseUrl,s=void 0!==o&&o,l=a.absolute,c=void 0!==l&&l;if(!i)return i;if(i.startsWith("#"))return i;if((0,r.b)(i))return i;if(s)return t+i;var u=i.startsWith(t)?i:t+i.replace(/^\//,"");return c?e+u:u}(a,i,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},56640:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return f},default:function(){return p}});var n=i(22122),r=i(19756),a=(i(67294),i(3905)),o=i(44996),s=["components"],l={id:"verify-email-account-activation",title:"Email and Phone Verification and Account Activation"},c=void 0,u={unversionedId:"self-service/flows/verify-email-account-activation",id:"version-v0.1/self-service/flows/verify-email-account-activation",isDocsHomePage:!1,title:"Email and Phone Verification and Account Activation",description:"ORY Kratos allows users to verify their out-of-band (email, telephone number,",source:"@site/versioned_docs/version-v0.1/self-service/flows/verify-email-account-activation.mdx",sourceDirName:"self-service/flows",slug:"/self-service/flows/verify-email-account-activation",permalink:"/kratos/docs/v0.1/self-service/flows/verify-email-account-activation",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.1/self-service/flows/verify-email-account-activation.mdx",tags:[],version:"v0.1",lastUpdatedBy:"hackerman",lastUpdatedAt:1586177162,formattedLastUpdatedAt:"4/6/2020",frontMatter:{id:"verify-email-account-activation",title:"Email and Phone Verification and Account Activation"},sidebar:"version-v0.1/docs",previous:{title:"User-Facing Errors",permalink:"/kratos/docs/v0.1/self-service/flows/user-facing-errors"},next:{title:"Overview",permalink:"/kratos/docs/v0.1/self-service/strategies/index"}},f=[{value:"Account Activation",id:"account-activation",children:[],level:2},{value:"Setting Email Verification",id:"setting-email-verification",children:[{value:"Verify Email on User Registration",id:"verify-email-on-user-registration",children:[],level:3}],level:2},{value:"Self-Service Request or Resend Verification Link for Browser Applications",id:"self-service-request-or-resend-verification-link-for-browser-applications",children:[{value:"Server-Side Browser Applications",id:"server-side-browser-applications",children:[],level:3},{value:"Client-Side Browser Applications",id:"client-side-browser-applications",children:[],level:3}],level:2},{value:"Email Verification for API Clients",id:"email-verification-for-api-clients",children:[],level:2}],d={toc:f};function p(e){var t=e.components,i=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ORY Kratos allows users to verify their out-of-band (email, telephone number,\n...) communication channels. Verification can be initiated"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"after registration or by performing a verification flow;"),(0,a.kt)("li",{parentName:"ul"},"manually by the user.")),(0,a.kt)("p",null,"Currently, ORY Kratos only supports verification of email addresses. Before\nsending out a verification E-Mail, ORY Kratos will check if the email address is\nalready known. Depending on the result, one of the two flows will be executed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unknown email address: An email is sent to the address informing the recipient\nthat someone tried to verify this email address but that it is not known by\nthe system:  ",(0,a.kt)("img",{alt:"Verification email for unknown address",src:(0,o.Z)("img/docs/email-verify-unknown.png")}),";"),(0,a.kt)("li",{parentName:"ul"},"Known email address: An email which includes a verification link is sent to\nthe address:",(0,a.kt)("img",{alt:"Verification email for known address",src:(0,o.Z)("img/docs/email-verify-known.png")}),";")),(0,a.kt)("p",null,"This prevents Account Enumeration Attacks at is is not possible for a threat\nagent to determine if an account exists or not based on the verification flow."),(0,a.kt)("p",null,"The emails are using templates that can be customised as explained in\n",(0,a.kt)("a",{parentName:"p",href:"/kratos/docs/v0.1/concepts/email-sms#templates"},"Customizing E-Mail Templates"),". The\ntemplate IDs are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unknown email address: ",(0,a.kt)("inlineCode",{parentName:"li"},"verify_invalid")),(0,a.kt)("li",{parentName:"ul"},"Known email address: ",(0,a.kt)("inlineCode",{parentName:"li"},"verify_valids"))),(0,a.kt)("h2",{id:"account-activation"},"Account Activation"),(0,a.kt)("p",null,'Using this feature implements the so-called "account activation" with the\ndifference that ORY Kratos does not provide a feature that prevents sign in into\naccounts without verified addresses. The reason being that verification is\nproving that the user controls the given address, but it is not an\nauthentication mechanism.'),(0,a.kt)("p",null,"You may however chose to limit what an identity without verified addresses is\nable to do in your application logic or API Gateways."),(0,a.kt)("h2",{id:"setting-email-verification"},"Setting Email Verification"),(0,a.kt)("p",null,"You must define at least one Identity Traits field as a verification field. You\ncan do so by defining the following section in your Identity Traits JSON Schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  // ...\n  properties: {\n    // This could also be an array or any other field name\n    email: {\n      type: 'string',\n      format: 'email',\n      'ory.sh/kratos': {\n        verification: {\n          // Currently, only email is supported\n          via: 'email',\n        },\n      },\n    },\n  },\n  // ...\n}\n")),(0,a.kt)("p",null,"You can also combine this with the password strategy login identifier."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  // ...\n  properties: {\n    // This could also be an array or any other field name\n    email: {\n      type: 'string',\n      format: 'email',\n      'ory.sh/kratos': {\n        credentials: {\n          password: {\n            identifier: true,\n          },\n        },\n        verification: {\n          // Currently, only email is supported\n          via: 'email',\n        },\n      },\n    },\n  },\n  // ...\n}\n")),(0,a.kt)("p",null,"That way, the field ",(0,a.kt)("inlineCode",{parentName:"p"},"email")," (or any field you define with these properties) will\nserve as both the login identifier as well as a verifiable email address."),(0,a.kt)("h3",{id:"verify-email-on-user-registration"},"Verify Email on User Registration"),(0,a.kt)("p",null,"To send an email after user registration, add the following sections to your ORY\nKratos config file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# required\nurls:\n  # Similar to login_ui or profile_ui, this points to the user interface where the verificaiton\n  # user interface is implemented.\n  #\n  # For more information on this endpoint please head over to the next section\n  verify_ui: https://my-kratos-ui/verify\n\nselfservice:\n  registration:\n    after:\n      password:\n        # ....\n        - job: verify # This sends the verification email after successful registration\n        # ....\n")),(0,a.kt)("h2",{id:"self-service-request-or-resend-verification-link-for-browser-applications"},"Self-Service Request or Resend Verification Link for Browser Applications"),(0,a.kt)("p",null,"A user might want to resend a verification link because the link expired or did\nnot arrive in the inbox."),(0,a.kt)("p",null,"The flow implementing this feature uses the already established\n",(0,a.kt)("a",{parentName:"p",href:"/kratos/docs/v0.1/self-service/flows/index#network-flows-for-browsers"},"Network Flows for Browsers"),"."),(0,a.kt)("h3",{id:"server-side-browser-applications"},"Server-Side Browser Applications"),(0,a.kt)("p",null,"You can find an exemplary implementation for this flow on GitHub:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos-selfservice-ui-node/blob/master/src/routes/verify.ts"},"Verification HTTP Route")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos-selfservice-ui-node/blob/master/views/verify.hbs"},"Verification UI"))),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/kratos/docs/v0.1/self-service/flows/index#network-flows-for-browsers"},"Network Flows for Browsers")," works as\nfollows for Email Verification:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"An initial HTTP Request is made to\n",(0,a.kt)("inlineCode",{parentName:"li"},"/self-service/browser/flows/verification/:via"),". Currently, only ",(0,a.kt)("inlineCode",{parentName:"li"},"email")," is\nsupported as ",(0,a.kt)("inlineCode",{parentName:"li"},":via"),"."),(0,a.kt)("li",{parentName:"ol"},"ORY Kratos redirects the browser to the URL set in ",(0,a.kt)("inlineCode",{parentName:"li"},"urls.verify_ui")," and\nappends the ",(0,a.kt)("inlineCode",{parentName:"li"},"request")," URL Query Parameter (e.g.\n",(0,a.kt)("inlineCode",{parentName:"li"},"https://example.org/verify?request=abcde"),")."),(0,a.kt)("li",{parentName:"ol"},"The Endpoint at ",(0,a.kt)("inlineCode",{parentName:"li"},"/profile")," makes a HTTP GET Request to\n",(0,a.kt)("inlineCode",{parentName:"li"},"https://ory-kratos-admin.example-org.vpc/self-service/browser/flows/requests/verification?request=abcde"),"\nand fetches Verification Request JSON Payload that represent the individual\nfields that can be updated."),(0,a.kt)("li",{parentName:"ol"},"The user fills out the form and sends a HTTP POST request to\n",(0,a.kt)("inlineCode",{parentName:"li"},"https://example.org/.ory/kratos/public/self-service/browser/flows/verification/:via/complete?request=abcde"),".\nDepending on whether the address is known or not, a ",(0,a.kt)("inlineCode",{parentName:"li"},"verify_valid")," or\n",(0,a.kt)("inlineCode",{parentName:"li"},"verify_invalid")," message will be sent to the given address.")),(0,a.kt)("p",null,"An exemplary payload for a verification request looks as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "9c3e945c-096a-42ec-8617-caecda9e9263",\n  "expires_at": "2020-02-18T16:11:25.3112038Z",\n  "issued_at": "2020-02-18T15:11:25.3112824Z",\n  "request_url": "http://127.0.0.1:4455/self-service/browser/flows/verification/email",\n  "form": {\n    "action": "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/verification/email/complete?request=9c3e945c-096a-42ec-8617-caecda9e9263",\n    "method": "POST",\n    "fields": [\n      {\n        "name": "csrf_token",\n        "type": "hidden",\n        "required": true,\n        "value": "fMusJj65BxNtrog/DYryN4sZmuLA85WkbAh4yP9pT1lAQTIAPTVGJTmmLL66Y0HEbIpKEU5gTr5qJoRXHsBoSw=="\n      },\n      {\n        "name": "to_verify",\n        "type": "email",\n        "required": true\n      }\n    ]\n  },\n  "via": "email",\n  "success": false\n}\n')),(0,a.kt)("h3",{id:"client-side-browser-applications"},"Client-Side Browser Applications"),(0,a.kt)("p",null,"Because Client-Side Browser Applications do not have access to ORY Kratos' Admin\nAPI, they must use the ORY Kratos Public API instead. The flow for a Client-Side\nBrowser Application is almost the exact same as the one for Server-Side\nApplications, with the small difference that\n",(0,a.kt)("inlineCode",{parentName:"p"},"https://example.org/.ory/kratos/public/self-service/browser/flows/requests/verification?request=abcde"),"\nwould be called via AJAX instead of making a request to\n",(0,a.kt)("inlineCode",{parentName:"p"},"https://ory-kratos-admin.example-org.vpc/self-service/browser/flows/requests/verification?request=abcde"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To prevent brute force, guessing, session injection, and other attacks, it is\nrequired that cookies are working for this endpoint. The cookie set in the\ninitial HTTP request made to\n",(0,a.kt)("inlineCode",{parentName:"p"},"https://example.org/.ory/kratos/public/self-service/browser/flows/verification/:via"),"\nMUST be set and available when calling this endpoint!"),(0,a.kt)("p",{parentName:"blockquote"},"When making AJAX requests from JavaScript, make sure to set\n",(0,a.kt)("inlineCode",{parentName:"p"},"{ withCredentials: true }")," (name and layout may vary between libraries).")),(0,a.kt)("h2",{id:"email-verification-for-api-clients"},"Email Verification for API Clients"),(0,a.kt)("p",null,"Will be addressed in a future release."))}p.isMDXComponent=!0}}]);