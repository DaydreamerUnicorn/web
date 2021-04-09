(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{282:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(8),r=(n(0),n(452)),s={id:"openid-connect-social-sign-in-oauth2",title:"Social Sign In with OpenID Connect and OAuth2"},o={unversionedId:"self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2",id:"version-v0.3/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2",isDocsHomePage:!1,title:"Social Sign In with OpenID Connect and OAuth2",description:"Please read the",source:"@site/versioned_docs/version-v0.3/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2.mdx",slug:"/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2",permalink:"/kratos/docs/v0.3/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.3/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2.mdx",version:"v0.3",lastUpdatedBy:"aeneasr",lastUpdatedAt:1600065426,formattedLastUpdatedAt:"9/14/2020",sidebar:"version-v0.3/docs",previous:{title:"Username or Email and Password",permalink:"/kratos/docs/v0.3/self-service/flows/user-login-user-registration/username-email-password"},next:{title:"User Settings",permalink:"/kratos/docs/v0.3/self-service/flows/user-settings"}},l=[{value:"Registration",id:"registration",children:[]},{value:"Login",id:"login",children:[]},{value:"Security and Defenses",id:"security-and-defenses",children:[{value:"Account Enumeration",id:"account-enumeration",children:[]}]}],c={toc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Before you start")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Please read the\n",Object(r.b)("a",{parentName:"p",href:"/kratos/docs/v0.3/concepts/credentials/openid-connect-oidc-oauth2"},"OpenID Connect / OAuth2 Credentials Documentation"),"\nand ",Object(r.b)("a",{parentName:"p",href:"/kratos/docs/v0.3/self-service/flows/user-login-user-registration"},"identity Login and Registration Documentation")," first."))),Object(r.b)("p",null,"The Social Sign In Strategy enables you to use"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://github.com/"},"GitHub"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://developer.apple.com/sign-in-with-apple/"},"Apple"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://developers.google.com/identity/sign-in/web/sign-in"},"Google"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://developers.facebook.com/docs/facebook-login/"},"Facebook"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.ory.sh/hydra"},"ORY Hydra"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.keycloak.org"},"Keycloak"),";"),Object(r.b)("li",{parentName:"ul"},"and every other OpenID Connect Certified Provider")),Object(r.b)("p",null,"as the Identity Provider.  It implements several flows, specifically\n",Object(r.b)("a",{parentName:"p",href:"/kratos/docs/v0.3/self-service/flows/user-login-user-registration"},"identity Login and identity Registration"),"\nand ",Object(r.b)("a",{parentName:"p",href:"/kratos/docs/v0.3/self-service/flows/user-settings"},"identity Settings"),"."),Object(r.b)("p",null,"Because OAuth2 and OpenID Connect (OIDC) require the identity to interact with a browser,\nthis strategy does not work with API-only flows. You cannot log in or sign up a identity\nusing this strategy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"with REST API or AJAX requests only;"),Object(r.b)("li",{parentName:"ul"},"without a browser.")),Object(r.b)("p",null,'This document summarizes exemplary request payloads for performing "Sign in with ..." flows\nusing the identity login and registration flow with the ',Object(r.b)("inlineCode",{parentName:"p"},"oidc")," strategy."),Object(r.b)("p",null,"ORY Kratos automatically converts registration to login flows and vice versa. A user\nthat's already signed up with his/her Google account will be logged in even if you\ninitiate a registration request."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},'It is very important to add the "session" hook to the after oidc registration\nhooks. Otherwise your users need to use the login flow again to be able to get a\nsession.'),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"# $ kratos -c path/to/my/kratos/config.yml serve\nselfservice:\n  registration:\n    after:\n      oidc:\n        hooks:\n          - hook: session\n")))),Object(r.b)("p",null,"Here we use a configuration with 3 providers:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"selfservice:\n  strategies:\n    oidc:\n      enabled: true\n      config:\n        providers:\n          - id: hydra\n            # provider, client_id, issuer_url, scope, ...\n          - id: google\n            # provider, client_id, issuer_url, scope, ...\n          - id: github\n            # provider, client_id, issuer_url, scope, ...\n")),Object(r.b)("h2",{id:"registration"},"Registration"),Object(r.b)("p",null,"Redirecting the browser to the ",Object(r.b)("a",{parentName:"p",href:"/kratos/docs/v0.3/self-service/flows/user-login-user-registration#user-login-and-user-registration-process-sequence"},"Self-Service Login and Registration Endpoint"),"\ninitiates the flow. If the ",Object(r.b)("inlineCode",{parentName:"p"},"oidc")," strategy is enabled and at least one provider is configued,\nthe Registration Request Response Payload will include an ",Object(r.b)("inlineCode",{parentName:"p"},"oidc")," method. The method contains different providers,\nbased on your OpenID Connect Provider configuration:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/registration?request=54a9f113-3a7b-4cb8-a553-f072aa4e1622"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/registration?request":'54a9f113-3a7b-4cb8-a553-f072aa4e1622"'},'{\n    "id": "54a9f113-3a7b-4cb8-a553-f072aa4e1622",\n    "expires_at": "2020-05-15T11:04:09.342537Z",\n    "issued_at": "2020-05-15T10:04:09.342537Z",\n    "request_url": "http://127.0.0.1:4433/self-service/browser/flows/registration",\n    "methods": {\n        "oidc": {\n            "method": "oidc",\n            "config": {\n                "action": "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/strategies/oidc/auth/54a9f113-3a7b-4cb8-a553-f072aa4e1622",\n                "method": "POST",\n                "fields": [\n                    {\n                        "name": "csrf_token",\n                        "type": "hidden",\n                        "required": true,\n                        "value": "J9blMEwxnz6cL7rgcpu1vthggR13RH+7YMS77GBPn9yo7FqPNc9tTsvCQhu7Cu8AAREWXZF2FiaPia26SfrPBA=="\n                    },\n                    {\n                        "name": "provider",\n                        "type": "submit",\n                        "value": "hydra"\n                    },\n                    {\n                        "name": "provider",\n                        "type": "submit",\n                        "value": "google"\n                    },\n                    {\n                        "name": "provider",\n                        "type": "submit",\n                        "value": "github"\n                    }\n                ]\n            }\n        },\n        "password": {\n            "method": "password",\n            "config": {\n                "action": "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/registration/strategies/password?request=54a9f113-3a7b-4cb8-a553-f072aa4e1622",\n                "method": "POST",\n                "fields": [\n                    {\n                        "name": "csrf_token",\n                        "type": "hidden",\n                        "required": true,\n                        "value": "J9blMEwxnz6cL7rgcpu1vthggR13RH+7YMS77GBPn9yo7FqPNc9tTsvCQhu7Cu8AAREWXZF2FiaPia26SfrPBA=="\n                    },\n                    {\n                        "name": "password",\n                        "type": "password",\n                        "required": true\n                    },\n                    {\n                        "name": "traits.email",\n                        "type": "email"\n                    },\n                    {\n                        "name": "traits.website",\n                        "type": "url"\n                    }\n                ]\n            }\n        }\n    }\n}\n')),Object(r.b)("p",null,"The next step depends on your Identity Traits JSON Schema and your JsonNet code. We're using the following\nin this example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsonnet",metastring:'title="path/to/identity.traits.json.schema',title:'"path/to/identity.traits.json.schema'},'{\n  "$id": "https://schemas.ory.sh/presets/kratos/quickstart/email-password/identity.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "email": {\n      "type": "string",\n      "format": "email",\n      "title": "E-Mail",\n      "minLength": 3,\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    },\n    "website": {\n      "type": "string",\n      "format": "uri",\n      "minLength": 10\n    }\n  },\n  "required": [\n    "email",\n    "website"\n  ],\n  "additionalProperties": false\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsonnet",metastring:'title="path/to/google.jsonnet',title:'"path/to/google.jsonnet'},"local claims = std.extVar('claims');\n\nif std.length(claims.sub) == 0 then\n  error 'claim sub not set'\nelse\n  {\n    identity: {\n      traits: {\n        email: claims.sub,\n        [if \"website\" in claims then \"website\" else null]: claims.website,\n      },\n    },\n  }\n")),Object(r.b)("p",null,"This implies that the identity has a required attributes ",Object(r.b)("inlineCode",{parentName:"p"},"email")," and ",Object(r.b)("inlineCode",{parentName:"p"},"website"),". When singing in using Google,\nwe take the ",Object(r.b)("inlineCode",{parentName:"p"},"sub")," and ",Object(r.b)("inlineCode",{parentName:"p"},"website")," claim are used to hydrate these fields. If they're missing or invalid (because e.g. not an\nemail, the user\nreturns to the registration form with additional fields that need to be filled out. Please note that these claims\nare just examples, Google doesn't actually use email addresses in ",Object(r.b)("inlineCode",{parentName:"p"},"sub")," fields and also does not include the ",Object(r.b)("inlineCode",{parentName:"p"},"website"),"\nclaim:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/registration?request=54a9f113-3a7b-4cb8-a553-f072aa4e1622"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/registration?request":'54a9f113-3a7b-4cb8-a553-f072aa4e1622"'},'{\n    "id": "54a9f113-3a7b-4cb8-a553-f072aa4e1622",\n    // ...\n    "active": "oidc", // <-- this is now set\n    "methods": {\n        "oidc": {\n            "method": "oidc",\n            "config": {\n                "action": "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/strategies/oidc/auth/54a9f113-3a7b-4cb8-a553-f072aa4e1622",\n                "method": "POST",\n                // Errors can be included here, for example:\n                // "errors": [\n                //     {\n                //         "message": "Authentication failed because no id_token was returned. Please accept the \\"openid\\" permission and try again."\n                //     }\n                // ]\n                "fields": [\n                    {\n                        "name": "csrf_token",\n                        "type": "hidden",\n                        "required": true,\n                        "value": "A84oYSplXqtJTkhSipZc/2+tFXCN2gzWAfhmoK049FKM9JfeU5us2x6jsKlDBwZBttyCMGvoZUvutXD2hI2kig=="\n                    },\n                    {\n                        "name": "traits.email",\n                        "type": "text",\n                        "value": "superuser@ory.sh"\n                    },\n                    {\n                        "name": "traits.website",\n                        "type": "",\n                        "errors": [\n                            {\n                                "message": "missing properties: \\"website\\"" // <-- because "website" was not set, the user has to fill it out manually.\n                            }\n                        ]\n                    },\n                    {\n                        "name": "provider",\n                        "type": "submit",\n                        "value": "google"\n                    }\n                ]\n            }\n        },\n    }\n}\n')),Object(r.b)("h2",{id:"login"},"Login"),Object(r.b)("p",null,"Redirecting the browser to the ",Object(r.b)("a",{parentName:"p",href:"/kratos/docs/v0.3/self-service/flows/user-login-user-registration#user-login-and-user-registration-process-sequence"},"Self-Service Login and Registration Endpoint"),"\ninitiates the flow. If the ",Object(r.b)("inlineCode",{parentName:"p"},"oidc")," strategy is enabled and at least one provider is configued,\nthe Login Request Response Payload will include an ",Object(r.b)("inlineCode",{parentName:"p"},"oidc")," method. The method contains different providers,\nbased on your OpenID Connect Provider configuration:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/login?request=a1c78949-1436-44bd-93ae-a57836be01c7"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/login?request":'a1c78949-1436-44bd-93ae-a57836be01c7"'},'{\n    "id": "a1c78949-1436-44bd-93ae-a57836be01c7",\n    "expires_at": "2020-05-15T10:49:58.770828Z",\n    "issued_at": "2020-05-15T09:49:58.770829Z",\n    "request_url": "http://127.0.0.1:4433/self-service/browser/flows/login",\n    "methods": {\n        // password: ...\n        "oidc": {\n            "method": "oidc",\n            "config": {\n                "action": "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/strategies/oidc/auth/a1c78949-1436-44bd-93ae-a57836be01c7",\n                "method": "POST",\n                "fields": [\n                    {\n                        "name": "csrf_token",\n                        "type": "hidden",\n                        "required": true,\n                        "value": "/Q85ogDm+Hv7D+ca7DUXYBRqmkTdMiIzXrZxt8IXgFHd7rkc8+U1WoWNmScDfJ8/cEju/hUIko5N48GR3rMfag=="\n                    },\n                    {\n                        "name": "provider",\n                        "type": "submit",\n                        "value": "hydra"\n                    },\n                    {\n                        "name": "provider",\n                        "type": "submit",\n                        "value": "google"\n                    },\n                    {\n                        "name": "provider",\n                        "type": "submit",\n                        "value": "github"\n                    }\n                ]\n            }\n        }\n    },\n    "forced": false\n}\n')),Object(r.b)("p",null,"The only form validation error that can happen during this flow is that the ID Token is missing\nbecause the user did not authorize the ",Object(r.b)("inlineCode",{parentName:"p"},"openid")," grant (does not apply for ",Object(r.b)("inlineCode",{parentName:"p"},"provider: github"),"):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/login?request=a1c78949-1436-44bd-93ae-a57836be01c7"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/login?request":'a1c78949-1436-44bd-93ae-a57836be01c7"'},'{\n    "id": "a1c78949-1436-44bd-93ae-a57836be01c7",\n    // expires_at, ...\n    "active": "oidc", // <- this is now set!\n    "methods": {\n        // password: ...\n        "oidc": {\n            "method": "oidc",\n            "config": {\n                "action": "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/strategies/oidc/auth/a1c78949-1436-44bd-93ae-a57836be01c7",\n                "method": "POST",\n                "errors": [\n                    {\n                        "message": "Authentication failed because no id_token was returned. Please accept the \\"openid\\" permission and try again."\n                    }\n                ],\n                "fields": [\n                    {\n                        "name": "csrf_token",\n                        "type": "hidden",\n                        "required": true,\n                        "value": "viM0pQKXUIthwPklREm/86pdIg3d8CWJOzGOiHtrCW4xGYsae2mi+zYtAd6N2OVNcyy1TTvCTBTUfJjeUt5Ztg=="\n                    },\n                    {\n                        "name": "provider",\n                        "type": "submit",\n                        "value": "hydra"\n                    },\n                    {\n                        "name": "provider",\n                        "type": "submit",\n                        "value": "google"\n                    },\n                    {\n                        "name": "provider",\n                        "type": "submit",\n                        "value": "github"\n                    }\n                ]\n            }\n        }\n    },\n    "forced": false\n}\n')),Object(r.b)("p",null,"The flow completes otherwise."),Object(r.b)("h2",{id:"security-and-defenses"},"Security and Defenses"),Object(r.b)("h3",{id:"account-enumeration"},"Account Enumeration"),Object(r.b)("p",null,"Scenario: In some cases you might want to use the email address returned by e.g.\nthe GitHub profile to be added to your identity's account. You might also want to use\nit as an email + password identifier so that the identity is able to log in\nwith a password as well. An attacker is able to exploit that by creating a social\nprofile on another site (e.g. Google) and use the victims email address to set it up\n(this only works when the victim does not yet have an account with that email at Google).\nThe attacker can then use that \"spoofed\" social profile to try and sign up with your ORY Kratos\ninstallation. Because the victim's email address is already known to ORY Kratos, the\nattacker might be able to observe the behavior (e.g. seeing an error page) and come\nto the conclusion that the victim already has an account at the website."),Object(r.b)("p",null,"Mitigation: This attack surface is rather small and requires a lot of effort, including\nforging an e.g. Google profile, and can fail at several stages. To completely mitigate\nany chance of that happening, only accept email addresses that are marked as verified\nin your Jsonnet code:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json",metastring:'title="contrib/quickstart/kratos/email-password/oidc.github.jsonnet"',title:'"contrib/quickstart/kratos/email-password/oidc.github.jsonnet"'},'local claims = {\n  email_verified: false\n} + std.extVar(\'claims\');\n\n{\n  identity: {\n    traits: {\n      // Allowing unverified email addresses enables account\n      // enumeration attacks, especially if the value is used for\n      // e.g. verification or as a password login identifier.\n      //\n      // Therefore we only return the email if it (a) exists and (b) is marked verified\n      // by GitHub.\n      [if "email_primary" in claims && claims.email_verified then "email" else null]: claims.email_primary,\n    },\n  },\n}\n')))}d.isMDXComponent=!0},452:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,m=u["".concat(s,".").concat(b)]||u[b]||p[b]||r;return n?i.a.createElement(m,o(o({ref:t},c),{},{components:n})):i.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);