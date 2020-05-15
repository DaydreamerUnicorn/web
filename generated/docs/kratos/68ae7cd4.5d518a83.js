(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(1),s=n(9),r=(n(0),n(275)),i={id:"identity-user-model",title:"Identity Data Model"},o={id:"version-v0.2/concepts/identity-user-model",title:"Identity Data Model",description:'An identity ("user", "user account", "account", "subject") is the "who" of a',source:"@site/versioned_docs/version-v0.2/concepts/identity-user-model.md",permalink:"/kratos/docs/concepts/identity-user-model",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.2/concepts/identity-user-model.md",version:"v0.2",lastUpdatedBy:"aeneasr",lastUpdatedAt:1588605498,sidebar:"version-v0.2/docs",previous:{title:"User Interface",permalink:"/kratos/docs/concepts/ui-user-interface"},next:{title:"Overview",permalink:"/kratos/docs/concepts/credentials"}},c=[{value:"Identity Traits and JSON Schemas",id:"identity-traits-and-json-schemas",children:[]},{value:"JSON Schema Vocabulary Extensions",id:"json-schema-vocabulary-extensions",children:[{value:"Identifier for Username and Password Flows",id:"identifier-for-username-and-password-flows",children:[]}]}],l={rightToc:c};function d(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,'An identity ("user", "user account", "account", "subject") is the "who" of a\nsoftware system. It can be a customer, an employee, a user, a contractor, and\neven a programmatic identity such as an IoT device, an application, or some\nother type of "robot."'),Object(r.b)("p",null,'Identities take different roles sometimes for instance called "Account Recovery"\nor "User Account" since these are commonly used terms. In ORY Kratos an identity\nis always called an "Identity," and it always exposed as ',Object(r.b)("inlineCode",{parentName:"p"},"identity")," in the API\nEndpoints, request and response payloads."),Object(r.b)("p",null,"The following examples uses YAML for improved readability. However the API\npayload is usually in JSON format. An ",Object(r.b)("inlineCode",{parentName:"p"},"identity")," has the following properties:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/kratos.config.yaml"',title:'"path/to/kratos.config.yaml"'}),"# A universally unique ID that is generated when the identity is created and that cannot be changed or updated\n# at a later stage.\nid: '9f425a8d-7efc-4768-8f23-7647a74fdf13'\n\n# This section represents all the credentials associated with this identity. It is further explained in section \"Credentials\".\ncredentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@acme.com\n      - johnd@ory.sh\n    config:\n      hashed_password: ...\n  oidc:\n    id: oidc\n    identifiers:\n      - google:j8kf7a3...\n      - facebook:83475891...\n    config:\n      - provider: google\n        identifier: j8kf7a3\n      - provider: facebook\n        identifier: 83475891\n\n# This is the JSON Schema ID used for validating the identities's traits.\ntraits_schema_id: default\n# Could also be another schema:\n# traits_schema_id: customer\n\n# Traits represent information about the identity, such as the first or last name. The traits content is completely\n# up to you and will be validated using the JSON Schema at `traits_schema_url`.\ntraits:\n  # These are just examples\n  email: office@ory.sh\n  name:\n    first: Aeneas\n    last: Rekkas\n  favorite_animal: Dog\n  accepted_tos: true\n")),Object(r.b)("h2",{id:"identity-traits-and-json-schemas"},"Identity Traits and JSON Schemas"),Object(r.b)("p",null,"An identity may have one or more traits. Traits can be modified by the identity\nitself e.g. as part of the registration or profile update process as well as\nanyone having access to ORY Krato's Admin API."),Object(r.b)("p",null,"Traits tell ORY Kratos that a field has a particular meaning. For example, trait\n",Object(r.b)("inlineCode",{parentName:"p"},"email"),' is a good candidate for the field "Email + Password" for signing up or\nlogging in.'),Object(r.b)("p",null,"To validate traits Ory Kratos uses\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://json-schema.org/learn/getting-started-step-by-step.html"}),"JSON Schema"),'\nadding a small extension "Vocabulary" that allows you to tell ORY Kratos that a\nspecific trait adds some specific meaning to the standard JSON Schema .'),Object(r.b)("p",null,"Each identity can, theoretically, have a different Traits Schema. This is useful\nin the following situations:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"there is more than one type of identity in the system for instance customers,\nsupport or staff;"),Object(r.b)("li",{parentName:"ul"},"the system includes both users and robots sometimes also known as named\nservice accounts;"),Object(r.b)("li",{parentName:"ul"},"the system needs to ingest another company's identity model, and"),Object(r.b)("li",{parentName:"ul"},"the system's identity model changes or grows over time and requires\nversioning.")),Object(r.b)("p",null,"The following example illustrates a usage scenario with three types of\nidentities: Regular customers,\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Grandfather_clause"}),"grandfather accounts"),", and\nService Accounts (Microsoft provides\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/service-accounts"}),"Service Accounts"),").\nThere would be one JSON Schema per type of identity:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Customers: ",Object(r.b)("inlineCode",{parentName:"li"},"http://mydomain.com/schemas/v1/customer.schema.json")),Object(r.b)("li",{parentName:"ul"},"Grandfather Accounts: ",Object(r.b)("inlineCode",{parentName:"li"},"http://mydomain.com/schemas/v2/customer.schema.json")),Object(r.b)("li",{parentName:"ul"},"Service Accounts: ",Object(r.b)("inlineCode",{parentName:"li"},"http://mydomain.com/schemas/service-account.schema.json"))),Object(r.b)("p",null,"ORY Kratos expects the JSON Schemas in its configuration file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"identity:\n  traits:\n    # This will be the default JSON Schema. If  `traits_schema_id` is empty when creating an identity using the\n    # Admin API, or a user signs up using a selfservice flow, this schema will be used.\n    #\n    # This is a required configuration field!\n    default_schema_url: http://foo.bar.com/person.schema.json\n\n    # Optionally define additional schemas here:\n    schemas:\n      # When creating an identity that uses this schema, `traits_schema_id: customer` would be set for that identity.\n      - id: customer\n        url: http://foo.bar.com/customer.schema.json\n")),Object(r.b)("p",null,"ORY Kratos enforces each of these schemas when at an identity's creation or\nupdate. The employed business logic must be able to distingush between these\nthree identities. The switch statement is used in this case. For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'// This is an example program that can deal with all three identities\n// session := ...\nswitch (session.Identity.TraitsSchemaURL) {\n    case "customer":\n        // ...\n    case "employee":\n        // ...\n    case "default":\n        fallthrough\n    default:\n        // ...\n}\n')),Object(r.b)("h2",{id:"json-schema-vocabulary-extensions"},"JSON Schema Vocabulary Extensions"),Object(r.b)("p",null,"As already explained, traits tell ORY Kratos that a particular field has a\nsystem-relevant meaning. That would for example include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The email address for recovering a lost password"),Object(r.b)("li",{parentName:"ul"},"The identifier for logging in e.g. username and password or email and password"),Object(r.b)("li",{parentName:"ul"},"The phone number for enabling SMS 2FA"),Object(r.b)("li",{parentName:"ul"},"...")),Object(r.b)("p",null,"ORY Kratos' JSON Schema Vocabulary Extension can be used within a property:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json5"}),"{\n  $id: 'http://mydomain.com/schemas/v2/customer.schema.json',\n  $schema: 'http://json-schema.org/draft-07/schema#',\n  title: 'A customer (v2)',\n  type: 'object',\n  properties: {\n    email: {\n      title: 'E-Mail',\n      type: 'string',\n      format: 'email',\n\n      // This tells ORY Kratos that the field should be used as the \"username\" for the username+password flow.\n      // It is an extension to the regular JSON Schema vocabulary.\n      'ory.sh/kratos': {\n        credentials: {\n          password: {\n            identifier: true,\n          },\n        },\n      },\n    },\n  },\n}\n")),Object(r.b)("p",null,"An overview of available configuration options follows in the next sections."),Object(r.b)("h3",{id:"identifier-for-username-and-password-flows"},"Identifier for Username and Password Flows"),Object(r.b)("p",null,"ORY Kratos can set specific fields to be used as the ",Object(r.b)("em",{parentName:"p"},"identifier")," e.g. username,\nemail, phone number, etc., in the Username and Password Registration and Login\nFlow:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json5"}),"{\n  'ory.sh/kratos': {\n    credentials: {\n      password: {\n        identifier: true,\n      },\n    },\n  },\n}\n")),Object(r.b)("p",null,"Looking at the traits from above"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"traits:\n  # These are just examples\n  email: office@ory.sh\n  name:\n    first: Aeneas\n    last: Rekkas\n  favorite_animal: Dog\n  accepted_tos: true\n")),Object(r.b)("p",null,"and using a JSON Schema that uses the ",Object(r.b)("inlineCode",{parentName:"p"},"email")," field as the identifier for the\npassword flow"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json5"}),"{\n  $id: 'http://mydomain.com/schemas/v2/customer.schema.json',\n  $schema: 'http://json-schema.org/draft-07/schema#',\n  title: 'A customer (v2)',\n  type: 'object',\n  properties: {\n    email: {\n      title: 'E-Mail',\n      type: 'string',\n      format: 'email',\n\n      // This tells ORY Kratos that the field should be used as the \"username\" for the Username and Password Flow.\n      'ory.sh/kratos': {\n        credentials: {\n          password: {\n            identifier: true,\n          },\n        },\n      },\n    },\n    name: {\n      type: 'object',\n      properties: {\n        first: {\n          type: 'string',\n        },\n        last: {\n          type: 'string',\n        },\n      },\n    },\n    favorite_animal: {\n      type: 'string',\n    },\n    accepted_tos: {\n      type: 'string',\n    },\n  },\n  required: ['email'],\n  additionalProperties: false,\n}\n")),Object(r.b)("p",null,"In this example, ORY Kratos understands that traits\u2709\ufe0f ",Object(r.b)("inlineCode",{parentName:"p"},"office@ory.sh")," is\nthe identity's identifier. The system expects ",Object(r.b)("inlineCode",{parentName:"p"},"office@ory.sh")," plus a password to\nsign in."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/concepts/credentials#username-and-password"}),"Username and Password Credentials"),"\ncontains more information and examples."),Object(r.b)("p",null,"There are currently no other extensions supported for Identity Traits. Further\nfields will be added in future releases!"))}d.isMDXComponent=!0},275:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var a=n(0),s=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),d=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},m=function(e){var t=d(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,h=m["".concat(i,".").concat(u)]||m[u]||p[u]||r;return n?s.a.createElement(h,o({ref:t},l,{components:n})):s.a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<r;l++)i[l]=n[l];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);