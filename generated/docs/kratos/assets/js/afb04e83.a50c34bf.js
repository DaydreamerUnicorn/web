(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{319:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var s=n(3),r=n(8),i=(n(0),n(452)),a={id:"user-profile-management",title:"User Profile Management"},o={unversionedId:"self-service/flows/user-settings/user-profile-management",id:"version-v0.4/self-service/flows/user-settings/user-profile-management",isDocsHomePage:!1,title:"User Profile Management",description:"Please read through the User Settings Documentation",source:"@site/versioned_docs/version-v0.4/self-service/flows/user-settings/user-profile-management.mdx",slug:"/self-service/flows/user-settings/user-profile-management",permalink:"/kratos/docs/v0.4/self-service/flows/user-settings/user-profile-management",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/self-service/flows/user-settings/user-profile-management.mdx",version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594203957,formattedLastUpdatedAt:"7/8/2020",sidebar:"version-v0.4/docs",previous:{title:"User Settings",permalink:"/kratos/docs/v0.4/self-service/flows/user-settings"},next:{title:"Change Password",permalink:"/kratos/docs/v0.4/self-service/flows/user-settings/change-password"}},c=[{value:"Browser Clients",id:"browser-clients",children:[]},{value:"API Clients",id:"api-clients",children:[]},{value:"Security",id:"security",children:[{value:"Account Enumeration Defenses (work in progress)",id:"account-enumeration-defenses-work-in-progress",children:[]},{value:"Account Takeover Defenses",id:"account-takeover-defenses",children:[]}]}],l={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(s.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Before you start")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Please read through the ",Object(i.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/self-service/flows/user-settings"},"User Settings Documentation"),"\nfirst."))),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"profile"),' strategy allows a user to change their identity traits\n("profile").'),Object(i.b)("p",null,"The updated traits must be valid against the Identity JSON Schema defined for\nits ",Object(i.b)("a",{parentName:"p",href:"../../../concepts/identity-user-model"},"Identity Traits"),'. If one or more\nfields do not validate (e.g. "Not an email"), the profile will not be updated.'),Object(i.b)("p",null,"ORY Kratos will prompt the user to re-authenticate if a privileged trait (e.g.\nemail used to log in) is changed, similar to the\n",Object(i.b)("a",{parentName:"p",href:"https://help.github.com/en/github/authenticating-to-github/sudo-mode"},"GitHub sudo mode"),"."),Object(i.b)("p",null,'You can configure how long a session is "privileged" by setting:'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml"',title:'"path/to/kratos/config.yml"'},"selfservice:\n  flows:\n    settings:\n      # Sessions older than a minute requires the user to sign in again before\n      # the password is changed.\n      privileged_session_max_age: 1m\n")),Object(i.b)("p",null,"This strategy does not implement any other flow."),Object(i.b)("h2",{id:"browser-clients"},"Browser Clients"),Object(i.b)("p",null,"Redirecting the browser to the\n",Object(i.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/self-service/flows/user-settings#user-settings-process-sequence"},"Self-Service Settings Endpoint"),"\ninitiates the flow."),Object(i.b)("p",null,"The Settings Request Response Payload always includes a ",Object(i.b)("inlineCode",{parentName:"p"},"profile")," method:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/settings?request=9c6473d4-9ffd-44cd-9794-adb82cbe4009"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/settings?request":'9c6473d4-9ffd-44cd-9794-adb82cbe4009"'},'{\n  "id": "9c6473d4-9ffd-44cd-9794-adb82cbe4009",\n  "expires_at": "2020-05-02T16:06:08.131598Z",\n  "issued_at": "2020-05-02T15:06:08.131599Z",\n  "request_url": "http://127.0.0.1:4433/self-service/browser/flows/settings",\n  "active": "profile",\n  "methods": {\n    "profile": {\n      "method": "profile",\n      "config": {\n        "action": "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/settings/strategies/profile?request=9c6473d4-9ffd-44cd-9794-adb82cbe4009",\n        "method": "POST",\n        "fields": [\n          {\n            "name": "csrf_token",\n            "type": "hidden",\n            "required": true,\n            "value": "HfvOBEv/D6PbXc89hsoEd0UMfZXKsvQXJzmXZJnq6BsBAwm8zbMKQF4LLZwRL67hPDlViB/qcJtu6yf+klIBeg=="\n          },\n          {\n            "name": "traits.email",\n            "type": "text",\n            "required": false,\n            "value": "xx0bdh@l7zkk8"\n          },\n          {\n            "name": "traits.website",\n            "type": "text",\n            "required": false,\n            "value": "http://github.com/aeneasr"\n          }\n        ]\n      }\n    }\n  },\n  "identity": {\n    "id": "93548b1b-c8dc-4d3e-b19f-cfc6d812a8d0",\n    "schema_id": "default",\n    "traits": {\n      "email": "xx0bdh@l7zkk8",\n      "website": "http://github.com/aeneasr"\n    }\n  },\n  "update_successful": false\n}\n')),Object(i.b)("p",null,"If the form validation fails, an error will be included:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/settings?request=9c6473d4-9ffd-44cd-9794-adb82cbe4009"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/settings?request":'9c6473d4-9ffd-44cd-9794-adb82cbe4009"'},"{\n  id: '9c6473d4-9ffd-44cd-9794-adb82cbe4009',\n  // expires_at, ...\n  active: 'profile', // <- this is now set!\n  methods: {\n    profile: {\n      method: 'profile',\n      config: {\n        // action, ...\n        fields: [\n          // csrf_token, ...\n          {\n            name: 'traits.website',\n            type: 'text',\n            required: false,\n            value: 'http://s',\n            messages: [\n              {\n                /* id, type */\n                text: 'length must be >= 10, but got 8'\n              }\n            ]\n          }\n        ]\n      }\n    }\n  },\n  // identity, ...\n  update_successful: false\n}\n")),Object(i.b)("p",null,"A successful flow will be marked with:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/settings?request=9c6473d4-9ffd-44cd-9794-adb82cbe4009"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/settings?request":'9c6473d4-9ffd-44cd-9794-adb82cbe4009"'},"{\n  id: '9c6473d4-9ffd-44cd-9794-adb82cbe4009',\n  // expires_at, active, methods, ...\n  update_successful: true\n}\n")),Object(i.b)("h2",{id:"api-clients"},"API Clients"),Object(i.b)("p",null,"API-based login and registration using this strategy will be addressed in a\nfuture release of ORY Kratos."),Object(i.b)("h2",{id:"security"},"Security"),Object(i.b)("h3",{id:"account-enumeration-defenses-work-in-progress"},"Account Enumeration Defenses (work in progress)"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This feature is a work in progress and is tracked as\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/133"},"kratos#133"),".")),Object(i.b)("h3",{id:"account-takeover-defenses"},"Account Takeover Defenses"),Object(i.b)("p",null,"The Settings flow implements account takeover defenses as it is not possible to\nchange the password without knowing the existing password. A good example of\nthis flow is the\n",Object(i.b)("a",{parentName:"p",href:"https://help.github.com/en/github/authenticating-to-github/sudo-mode"},"GitHub sudo mode"),"."))}d.isMDXComponent=!0},452:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var s=n(0),r=n.n(s);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),f=s,b=u["".concat(a,".").concat(f)]||u[f]||p[f]||i;return n?r.a.createElement(b,o(o({ref:t},l),{},{components:n})):r.a.createElement(b,o({ref:t},l))}));function b(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);