(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{268:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return d}));var a=t(3),s=t(7),r=(t(0),t(442)),i={id:"username-email-password",title:"Username or Email and Password"},o={unversionedId:"self-service/strategies/username-email-password",id:"version-v0.1/self-service/strategies/username-email-password",isDocsHomePage:!1,title:"Username or Email and Password",description:"The password strategy implements the most-common used form of login and",source:"@site/versioned_docs/version-v0.1/self-service/strategies/username-email-password.md",slug:"/self-service/strategies/username-email-password",permalink:"/kratos/docs/v0.1/self-service/strategies/username-email-password",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.1/self-service/strategies/username-email-password.md",version:"v0.1",lastUpdatedBy:"aeneasr",lastUpdatedAt:1600065426,sidebar:"version-v0.1/docs",previous:{title:"Overview",permalink:"/kratos/docs/v0.1/self-service/strategies/index"},next:{title:"Social Sign In with OpenID Connect and OAuth2",permalink:"/kratos/docs/v0.1/self-service/strategies/openid-connect-social-sign-in-oauth2"}},l=[{value:"Choosing between Username, Email, Phone Number",id:"choosing-between-username-email-phone-number",children:[{value:"Email and Password",id:"email-and-password",children:[]},{value:"Multiple E-Mails and Password",id:"multiple-e-mails-and-password",children:[]},{value:"Username and Password",id:"username-and-password",children:[]},{value:"Username and Email and Password",id:"username-and-email-and-password",children:[]},{value:"Phone Number And Password",id:"phone-number-and-password",children:[]}]},{value:"Browser Clients",id:"browser-clients",children:[{value:"Registration",id:"registration",children:[]},{value:"Login",id:"login",children:[]}]},{value:"API Clients",id:"api-clients",children:[]},{value:"Security and Defenses",id:"security-and-defenses",children:[{value:"Anti-automation",id:"anti-automation",children:[]},{value:"Password Validation",id:"password-validation",children:[]},{value:"Account Enumeration Defenses (work in progress)",id:"account-enumeration-defenses-work-in-progress",children:[]}]}],c={rightToc:l};function d(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"password")," strategy implements the most-common used form of login and\nregistration: An identifier (username, email, phone number, ...) and a password."),Object(r.b)("p",null,"It implements several flows, specifically\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/v0.1/self-service/flows/user-login-user-registration"}),"User Login and User Registration"),"."),Object(r.b)("p",null,"To enable the ",Object(r.b)("inlineCode",{parentName:"p"},"password")," strategy, set ",Object(r.b)("inlineCode",{parentName:"p"},"selfservice.strategies.password.enabled"),"\nto true in your ORY Kratos configuration:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"selfservice:\n  strategies:\n    password:\n      enabled: true\n")),Object(r.b)("p",null,"Passwords are hashed using the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/v0.1/concepts/security#Argon2"}),"Argon2 Hashing Algorithm")," which can be\nconfigured in the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/v0.1/concepts/security#Argon2"}),"ORY Kratos Argon2 Configuration"),"."),Object(r.b)("p",null,"When a user signs up using this strategy, the Default Identity Traits Schema\n(set using ",Object(r.b)("inlineCode",{parentName:"p"},"identity.traits.default_schema_url"),") is used:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"identity:\n  traits:\n    # also supports http(s) of course\n    default_schema_url: file:///path/to/default-identity.schema.json\n")),Object(r.b)("p",null,"If you don't know what that means, please read the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/v0.1/concepts/identity-user-model"}),'"Concepts: Identity" Chapter'),"."),Object(r.b)("h2",{id:"choosing-between-username-email-phone-number"},"Choosing between Username, Email, Phone Number"),Object(r.b)("p",null,"Before you start, you need to decide what data you want to collect from your\nusers and why! It is hard to change this decision afterwards, so make sure\nyou've taken everything into account!"),Object(r.b)("p",null,"When logging in, the user will use a login identifier and a password to sign up\nand in. The identifier can be"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'a username - e.g. "john.doe" or "johndoe123" or "oryuser",'),Object(r.b)("li",{parentName:"ul"},"an email address - e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"john.doe@gmail.com"),","),Object(r.b)("li",{parentName:"ul"},"a phone number - e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"+49-1234-4321-1234-4321"),".")),Object(r.b)("p",null,"All of these approaches have up- and downsides."),Object(r.b)("p",null,'Using the email address as the login identifier is easy to remember, does not\nrequire additional fields (because the email address is already being\ncollected), and is usually unique. It\'s usually unique because sometimes\ncompanies use a "shared" email account (e.g. ',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:office@acme.org"}),"office@acme.org"),") to access\nservices. In that case, multiple real identities are using the same email\nidentifier to log in."),Object(r.b)("p",null,"The email address however represents a unique identifier and personally\nidentifiable information (PII). An attacker could for example check if an email\naddress (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"john.doe@gmail.com"),") is registered at a site (e.g. an adult\nwebsite) and use that information for blackmail (see\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/v0.1/concepts/security#account-enumeration-attacks"}),"Account Enumeration Attacks"),")."),Object(r.b)("p",null,"The same considerations apply to using a phone number as the primary\nregistration & login identifier."),Object(r.b)("p",null,'Using a free text username reduces the privacy risk because it is much harder to\nmake a connection between the username and a real world identity. It\'s still\npossible in cases where users choose a username such as\n"john.doe.from.mineapolis.1970", but finding the right username identifier is\nstill difficult and there is plausible deniability because anyone could use that\nusername.'),Object(r.b)("p",null,"A free text username however requires capturing additional fields (e.g. an email\naddress for password resets / account recovery) and is hard to remember. It is\noften very difficult to find unique usernames as people tend to use a\ncombination of their names and initials (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"john.doe"),") which has a high\nchance of collision. Therefore, one ends up with usernames such as\n",Object(r.b)("inlineCode",{parentName:"p"},"john.doe1234432"),"."),Object(r.b)("p",null,"It is important to understand that ORY Kratos lowercases all ",Object(r.b)("inlineCode",{parentName:"p"},"password"),"\nidentifiers and therefore E-Mail addresses. Characters ",Object(r.b)("inlineCode",{parentName:"p"},"+")," or ",Object(r.b)("inlineCode",{parentName:"p"},".")," which have\nspecial meaning for some E-Mail Providers (e.g. GMail) are not normalized:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"userNAME")," is equal to ",Object(r.b)("inlineCode",{parentName:"li"},"username")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"foo@BaR.com")," is equal to ",Object(r.b)("inlineCode",{parentName:"li"},"foo@bar.com")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"foo+baz@bar.com")," is NOT equal to ",Object(r.b)("inlineCode",{parentName:"li"},"foo@bar.com")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"foo.baz@bar.com")," is NOT equal to ",Object(r.b)("inlineCode",{parentName:"li"},"foobar@bar.com"))),Object(r.b)("p",null,"You need to decide which route you want to take."),Object(r.b)("h3",{id:"email-and-password"},"Email and Password"),Object(r.b)("p",null,"To use the email address as the login identifier, define the following Identity\nTraits Schema:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$id": "https://example.com/registration.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "email": {\n      "type": "string",\n      "format": "email",\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(r.b)("h3",{id:"multiple-e-mails-and-password"},"Multiple E-Mails and Password"),Object(r.b)("p",null,"You can allow users to sign up with multiple E-Mail Addresses and use any of\nthose for log in:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$id": "https://example.com/registration.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "emails": {\n      "type": "array",\n      "items": {\n        "type": "string",\n        "format": "email",\n        "ory.sh/kratos": {\n          "credentials": {\n            "password": {\n              "identifier": true\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(r.b)("h3",{id:"username-and-password"},"Username and Password"),Object(r.b)("p",null,"To use a username as the login identifier, define the following Identity Traits\nSchema:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$id": "https://example.com/registration.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "username": {\n      "type": "string",\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(r.b)("h3",{id:"username-and-email-and-password"},"Username and Email and Password"),Object(r.b)("p",null,"You may also mix usernames and passwords:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$id": "https://example.com/registration.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "email": {\n      "type": "string",\n      "format": "email",\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    },\n    "username": {\n      "type": "string",\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(r.b)("h3",{id:"phone-number-and-password"},"Phone Number And Password"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This will be addressed in a future release and is tracked as\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/kratos/issues/137"}),"kratos#137"),".")),Object(r.b)("h2",{id:"browser-clients"},"Browser Clients"),Object(r.b)("h3",{id:"registration"},"Registration"),Object(r.b)("p",null,"This strategy uses the high-level registration flow defined in chapter\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/v0.1/self-service/flows/user-login-user-registration"}),"Self-Service Registration User Flow"),"."),Object(r.b)("p",null,"Once the user is redirected to the Registration UI URL, the endpoint responsible\nfor that URL makes a request to ORY Kratos' Public / Admin API and appends the\n",Object(r.b)("inlineCode",{parentName:"p"},"request")," query parameter."),Object(r.b)("p",null,"ORY Kratos uses the JSON Schema defined in ",Object(r.b)("inlineCode",{parentName:"p"},"identity.traits.default_schema_url"),"\nto generate a list of form fields and add it to the Registration Request."),Object(r.b)("p",null,"Using a JSON Schema like"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$id": "https://schemas.ory.sh/presets/kratos/quickstart/email-password/identity.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "email": {\n      "type": "string",\n      "format": "email",\n      "title": "E-Mail",\n      "minLength": 3,\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    },\n    "name": {\n      "type": "object",\n      "properties": {\n        "first": {\n          "type": "string"\n        },\n        "last": {\n          "type": "string"\n        }\n      }\n    }\n  },\n  "required": ["email"],\n  "additionalProperties": false\n}\n')),Object(r.b)("p",null,"will result in the following Registration Request"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json5"}),"{\n  id: '713df601-d6c8-4331-8195-c29b92db459f',\n  expires_at: '2020-01-27T16:31:00.3507956Z',\n  issued_at: '2020-01-27T16:21:00.3508076Z',\n  request_url: 'http://127.0.0.1:4455/auth/browser/registration',\n  methods: {\n    password: {\n      method: 'password',\n      config: {\n        action: 'http://127.0.0.1:4455/.ory/kratos/public/auth/browser/methods/password/registration?request=713df601-d6c8-4331-8195-c29b92db459f',\n        method: 'POST',\n        fields: [\n          {\n            name: 'csrf_token',\n            type: 'hidden',\n            required: true,\n            value: '0klCuilgIO2k0Ev3J3IEsMOlmxg0RhjiiiWXVKm3Pd7HxZLVkDHWoOSfiT+/BJn69Dg2fmq6MHv8HkEx6MrVlw==',\n          },\n          {\n            name: 'traits.email',\n            type: 'email',\n            required: true,\n          },\n          {\n            name: 'password',\n            type: 'password',\n            required: true,\n          },\n          {\n            name: 'traits.name.first',\n            type: 'text',\n          },\n          {\n            name: 'traits.name.last',\n            type: 'text',\n          },\n        ],\n      },\n    },\n  },\n}\n")),Object(r.b)("p",null,"which in turn is easily to render by filling out a HTML Form template:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<form method="{{ method }}" action="{{ action }}">\n  \x3c!-- repeat this for every field --\x3e\n  <input type="{{ field.type }}" name="{{ field.name }} required="{{\n  field.required }}" value="{{ field.value }}"\n  \x3c!-- ... --\x3e>\n\n  <input type="submit" value="Create account" />\n</form>\n')),Object(r.b)("p",null,'Once the user clicks "Create Account", the payload will be sent to ORY Kratos\'\nPublic API. The data will be validated against the JSON Schema (e.g. checking if\na required field is missing, if some condition like ',Object(r.b)("inlineCode",{parentName:"p"},"minLength")," is not\nfulfilled, ...). If the data is invalid or incomplete, the browser will be\nredirected to the same login endpoint with the same request ID. When fetching\nthat request ID again, error details will be included in the JSON Response, such\nas:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json5"}),"{\n  id: '713df601-d6c8-4331-8195-c29b92db459f',\n  expires_at: '2020-01-27T16:31:00.3507956Z',\n  issued_at: '2020-01-27T16:21:00.3508076Z',\n  request_url: 'http://127.0.0.1:4455/auth/browser/registration',\n  methods: {\n    password: {\n      method: 'password',\n      config: {\n        errors: [\n          {\n            message: 'Please update the Form Fields to proceed.',\n          },\n        ],\n        action: 'http://127.0.0.1:4455/.ory/kratos/public/auth/browser/methods/password/registration?request=713df601-d6c8-4331-8195-c29b92db459f',\n        method: 'POST',\n        fields: [\n          /* ... */\n          {\n            name: 'password',\n            type: 'text',\n            value: 't4aegbydfv5234',\n            errors: [\n              {\n                message: \"traits.email: Does not match format 'email'\",\n              },\n            ],\n          },\n          /* ... */\n        ],\n      },\n    },\n  },\n}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Validation error messages and context will be improved in future releases.\nThis is tracked as ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/kratos/issues/185"}),"kratos#185"),".")),Object(r.b)("h3",{id:"login"},"Login"),Object(r.b)("p",null,"The Login flow is almost identical to the registration flow. The only difference\nis that only three fields will be requested:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json5"}),"{\n  id: '0cfb0f7e-3866-453c-9c23-28cc2cb7fead',\n  expires_at: '2020-01-27T16:48:53.8826084Z',\n  issued_at: '2020-01-27T16:38:53.8826392Z',\n  request_url: 'http://127.0.0.1:4455/auth/browser/login',\n  methods: {\n    password: {\n      method: 'password',\n      config: {\n        action: 'http://127.0.0.1:4455/.ory/kratos/public/auth/browser/methods/password/login?request=0cfb0f7e-3866-453c-9c23-28cc2cb7fead',\n        method: 'POST',\n        fields: [\n          {\n            name: 'csrf_token',\n            type: 'hidden',\n            required: true,\n            value: 'F0LABRxm/os+18VBUcbmz98LkJid1sEj++4X41rcdbcCzhBqpTcIxn6YB4nJsHuF6JY9/sMq6bqN1cGGG6Gd/g==',\n          },\n          {\n            name: 'identifier',\n            type: 'text',\n            required: true,\n          },\n          {\n            name: 'password',\n            type: 'password',\n            required: true,\n          },\n        ],\n      },\n    },\n  },\n}\n")),Object(r.b)("p",null,"If the login form is filled out incorrectly, errors are included in the\nresponse:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json5"}),"{\n  id: '0cfb0f7e-3866-453c-9c23-28cc2cb7fead',\n  expires_at: '2020-01-27T16:48:53.8826084Z',\n  issued_at: '2020-01-27T16:38:53.8826392Z',\n  request_url: 'http://127.0.0.1:4455/auth/browser/login',\n  methods: {\n    password: {\n      method: 'password',\n      config: {\n        errors: [\n          {\n            message: 'Please check the data you provided.',\n          },\n        ],\n        action: 'http://127.0.0.1:4455/.ory/kratos/public/auth/browser/methods/password/login?request=0cfb0f7e-3866-453c-9c23-28cc2cb7fead',\n        method: 'POST',\n        fields: [\n          /* ... */\n          {\n            name: 'password',\n            type: 'password',\n            required: true,\n            errors: [\n              {\n                message: 'password: password is required',\n              },\n            ],\n          },\n        ],\n      },\n    },\n  },\n}\n")),Object(r.b)("h2",{id:"api-clients"},"API Clients"),Object(r.b)("p",null,"API-based login and registration using this strategy will be addressed in a\nfuture release of ORY Kratos."),Object(r.b)("h2",{id:"security-and-defenses"},"Security and Defenses"),Object(r.b)("p",null,"Password-based authentication flows are subject to frequent abuse through"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Social Engineering Attacks;"),Object(r.b)("li",{parentName:"ul"},"Password Guessing Attacks;"),Object(r.b)("li",{parentName:"ul"},"Phishing Attacks.")),Object(r.b)("h3",{id:"anti-automation"},"Anti-automation"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This feature is a work in progress and is tracked as\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/kratos/issues/138"}),"kratos#133"),".")),Object(r.b)("p",null,"Actions that cause out-of-band communications, such as sending an activation\nlink via email or an activation code via SMS, can be abused by automated\nsystems. The goal of such an attack is to send out so many emails or SMS, that\nyour reputation worsens (spam filters) or you're faced with massive costs\n(carrier fees)."),Object(r.b)("p",null,"CAPTCHA renders these attacks either very difficult or impossible. ORY Kratos\nhas CAPTCHA support built-in. ORY Kratos will prompt the user to complete a\nCAPTCHA in the following scenarios:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The user tries to register more than one account within 72 hours."),Object(r.b)("li",{parentName:"ul"},"The user failed provide valid credentials for the third time within 12 hours."),Object(r.b)("li",{parentName:"ul"},"The user tries to recover their account for the second time within 72 hours.")),Object(r.b)("p",null,"For integration guidelines, please check the individual flow's (registration,\nlogin, account recovery) integration documentation."),Object(r.b)("h3",{id:"password-validation"},"Password Validation"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Further improvements are work in progress and are tracked on\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/kratos/issues?q=is%3Aopen+label%3Amodule%3Ass%2Fpassword+"}),"GitHub"))),Object(r.b)("p",null,"To prevent weak passwords ORY Kratos implements different measures. Users often\nchoose passwords similar to their traits. To prevent this ORY Kratos ensures\nthere is a sufficient\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Levenshtein_distance"}),"Levenshtein-Distance"),' (aka\n"Edit-Distance") between the identifier and the password. It also makes sure\nthat the identifier and password have a small enough longest common substring.'),Object(r.b)("p",null,"Furthermore the ",Object(r.b)("inlineCode",{parentName:"p"},"password")," strategy comes with a build-in check against the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://haveibeenpwned.com"}),'"Have I been pwned"'),' breach database. This way ORY\nKratos makes sure your users cannot use passwords like "password", "123456" or\nany other commonly used one. To protect the value of the password the\n',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://haveibeenpwned.com/API/v3#SearchingPwnedPasswordsByRange"}),"range API")," is\nbeing used."),Object(r.b)("h3",{id:"account-enumeration-defenses-work-in-progress"},"Account Enumeration Defenses (work in progress)"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This feature is a work in progress and is tracked as\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/kratos/issues/133"}),"kratos#133"),".")),Object(r.b)("p",null,'Account enumeration attacks allow a attacker to find out who is signed up. This\ncompromises the privacy of your users and can hurt reputation depending on the\nservice (e.g. "adult content").'),Object(r.b)("p",null,"This attack usually makes only sense if an email address or a phone number is\ncollected during registration. For chosen usernames, this attack is much more\ndifficult, as the attacker has to know what usernames the victim is using."),Object(r.b)("p",null,"There are three common ways an attacker can figure out if a user is signed up at\na service:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'During login: "No user with this email address was found"'),Object(r.b)("li",{parentName:"ul"},'During registration: "A user with this email address exists already"'),Object(r.b)("li",{parentName:"ul"},'During password reset: "No user with this email address was found"')),Object(r.b)("p",null,"To mitigate this attack, the following strategies need to be deployed:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'The login form should return the same message regardless of whether the\npassword is wrong or the email/username does not exist: "The provided\ncredentials are invalid."'),Object(r.b)("li",{parentName:"ul"},"The password reset form should always return a success message and send out an\nemail. If the email address is registered, a normal password reset email is\nsent. If the email address is not registered, an email is sent to the address\nindicating that no account is set up with that email address. This is helpful\nto users that have multiple email addresses and are using the wrong email\naddress for the password reset."),Object(r.b)("li",{parentName:"ul"},'The registration form should also always return a success message and send out\nan email. If the email address is not yet registered, a regular "account\nactivation" email is sent out. If the email address is registered already, a\nemail is sent out telling the user that the account is already set up, and\nlink to the login screen.')),Object(r.b)("p",null,"If you wish to mitigate account enumeration attacks, it is important to note\nthat you can not sign in users directly after sign up! Depending on the type of\nservice you provide, you might not care about this specific attack in which case\ndirect login after sign up would be ok."),Object(r.b)("h4",{id:"enabling-account-enumeration-defenses"},"Enabling Account Enumeration Defenses"),Object(r.b)("p",null,"Assuming you wish to enable account enumeration defenses, you need to configure\nORY Kratos as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Collect one or more email addresses during sign up and enable email\nverification."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Do not")," enable the ",Object(r.b)("inlineCode",{parentName:"li"},"session")," post-registration workflow. Use only the\n",Object(r.b)("inlineCode",{parentName:"li"},"redirect")," post-registration workflow.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'selfservice:\n  registration:\n    after:\n      password:\n        # !! DO NOT enable `session` or all registration processes will fail!!\n        # - run: session\n\n        # You **must** enable identifier verification or no email will be sent and the registration is thus just a blank\n        # entry in the database with no way of logging in.\n        - run: verify\n\n        # You **must** enable redirection. The page should show a message such as: "Registration complete, please\n        # check your email for further steps". The user will be redirected to this page regardless of the registration\n        # status (success, invalid).\n        - run: redirect\n          config:\n            default_redirect_url: http://test.kratos.ory.sh:4000/registration_next_steps\n')),Object(r.b)("h4",{id:"disable-account-enumeration-defenses"},"Disable Account Enumeration Defenses"),Object(r.b)("p",null,"Enforcing email verification, which requires an email round trip and disrupts\nthe sign up process, is not always feasible. In these cases, you might want to\ndisable account enumeration defenses."),Object(r.b)("p",null,"You can disable the defense mechanism on a per-field basis in your Identity\nTraits Schema:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"{\n  '$id': 'https://example.com/registration.schema.json',\n  '$schema': 'http://json-schema.org/draft-07/schema#',\n  'title': 'Person',\n  'type': 'object',\n  'properties':\n    {\n      'username':\n        {\n          'type': 'string',\n          'ory.sh/kratos':\n            {\n              'credentials':\n                {\n                  'password':\n                    {\n                      'identifier': true,\n                      'disable_account_enumeration_defenses': true,\n                    },\n                },\n            },\n        },\n    },\n}\n")),Object(r.b)("p",null,'This will tell ORY Kratos to display messages such as "a user with this email\naddress exists already" and "no user with this email address is registered on\nthis site". You can then enable the ',Object(r.b)("inlineCode",{parentName:"p"},"session")," post-registration workflow:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"selfservice:\n  registration:\n    after:\n      password:\n        - run: session\n\n        # You can optionally enable verification of the provided email address(es) or phone number(s)\n        # - run: verify\n\n        # You may now directly redirect to e.g. the dashboard:\n        - run: redirect\n          config:\n            default_redirect_url: http://test.kratos.ory.sh:4000/dashboard\n")))}d.isMDXComponent=!0},442:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),s=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=s.a.createContext({}),d=function(e){var n=s.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return s.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},p=s.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),p=a,m=u["".concat(i,".").concat(p)]||u[p]||b[p]||r;return t?s.a.createElement(m,o(o({ref:n},c),{},{components:t})):s.a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<r;c++)i[c]=t[c];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);