(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[21326],{32527:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(67294),i=n(21140),s=n.n(i),r="graph_1lrJ",o="pointer_3d8u",l="overlay_2fuY",d="visible_2Z3U",c="backdrop_2z5L",m=n(94184),h=n.n(m);s().initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});var p=function(e){var t,n=e.chart,i=(0,a.useState)(!1),m=i[0],p=i[1],u=(0,a.useState)(void 0),f=u[0],y=u[1],k=(0,a.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],g=function(){return p(!m)};return(0,a.useEffect)((function(){s().render(k,n,(function(e){y(e)}))}),[]),a.createElement(a.Fragment,null,a.createElement("div",{onClick:g,className:h()(r,o),dangerouslySetInnerHTML:{__html:f}}),a.createElement("div",{onClick:g,className:h()(l,o,r,(t={},t[d]=m,t))},a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:h()(c,r),dangerouslySetInnerHTML:{__html:f}})))}},50846:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var a=n(22122),i=n(19756),s=(n(67294),n(3905)),r=n(32527),o=["components"],l={id:"identity-schema",title:"Identity Schema"},d=void 0,c={unversionedId:"concepts/identity-schema",id:"concepts/identity-schema",isDocsHomePage:!1,title:"Identity Schema",description:'An identity ("user", "user account", "account", "subject") is the "who" of a',source:"@site/docs/concepts/identity-schema.mdx",sourceDirName:"concepts",slug:"/concepts/identity-schema",permalink:"/kratos/docs/next/concepts/identity-schema",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/concepts/identity-schema.mdx",tags:[],version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1634626107,formattedLastUpdatedAt:"10/19/2021",frontMatter:{id:"identity-schema",title:"Identity Schema"},sidebar:"docs",previous:{title:"Administrative User / Management Interface",permalink:"/kratos/docs/next/concepts/management-ui"},next:{title:"Overview",permalink:"/kratos/docs/next/concepts/credentials"}},m=[{value:"Identity State",id:"identity-state",children:[],level:2},{value:"Identity Traits and JSON Schemas",id:"identity-traits-and-json-schemas",children:[],level:2},{value:"Identity Schema Vocabulary Extensions",id:"identity-schema-vocabulary-extensions",children:[{value:"Identifier for Username and Password Flows",id:"identifier-for-username-and-password-flows",children:[],level:3}],level:2}],h={toc:m};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'An identity ("user", "user account", "account", "subject") is the "who" of a\nsoftware system. It can be a customer, employee, user, contractor, or even a\nprogrammatic identity such as an IoT device, application, or some other type of\n"robot."'),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},'In Ory Kratos\' terminology we call all of them "identities", and it is always\nexposed as ',(0,s.kt)("inlineCode",{parentName:"p"},"identity"),' in the API endpoints, requests, and response payloads. In\nthe documentation however, we mix these words as "account recovery" or "account\nactivation" is a widely accepted and understood terminology and user flow, while\n"identity recovery" or "identity activation" is not.'))),(0,s.kt)("p",null,"The following examples use YAML for improved readability. However, the API\npayload is usually in JSON format. An ",(0,s.kt)("inlineCode",{parentName:"p"},"identity")," has the following properties:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ curl http://kratos/admin-endpoint/identities/9f425a8d-7efc-4768-8f23-7647a74fdf13"',title:'"$',curl:!0,'http://kratos/admin-endpoint/identities/9f425a8d-7efc-4768-8f23-7647a74fdf13"':!0},"# A UUID that is generated when the identity is created and\n# which cannot be changed or updated at a later stage.\nid: '9f425a8d-7efc-4768-8f23-7647a74fdf13'\n\n# Every identity has a state. Inactive identities will not be able to log into the system.\nstate: active\n\n# This section represents all the credentials associated with this identity.\n# It is further explained in the \"Credentials\" section.\ncredentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@acme.com\n      - johnd@ory.sh\n    config:\n      hashed_password: ...\n  oidc:\n    id: oidc\n    identifiers:\n      - google:j8kf7a3...\n      - facebook:83475891...\n    config:\n      - provider: google\n        identifier: j8kf7a3\n      - provider: facebook\n        identifier: 83475891\n\n# This is the JSON Schema ID used for validating the identities' traits.\n# `default` is a special keyword to set this to the schema set by\n# `default_schema_url`, but it can be any another schema as well.\n# e.g. customer, employee, employee-v2\nschema_id: default\n\n# Traits represent information about the identity, such as the first or last name. The traits content is completely\n# up to you and will be validated using the JSON Schema at `traits_schema_url`.\ntraits:\n  # These are just examples\n  email: office@ory.sh\n  name:\n    first: Aeneas\n    last: Rekkas\n  favorite_animal: Dog\n  accepted_tos: true\n")),(0,s.kt)("h2",{id:"identity-state"},"Identity State"),(0,s.kt)("p",null,"Identities are"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"created")," - via API or self-service registration;"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"updated")," - via API or self-service settings, account recovery, etc.;"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"inactive")," - via API only;"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"deleted")," - via API or with a self-service flow (not yet implemented see\n",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/596"},"#596"),").")),(0,s.kt)("p",null,"The identity state is therefore ",(0,s.kt)("inlineCode",{parentName:"p"},"active")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"inactive"),"."),(0,s.kt)("p",null,"An inactive identity will not be able to log into the system. It will receive a\n401 with a reason indicating that the account has been disabled. More states\nwill be added later on for specific features."),(0,s.kt)(r.Z,{chart:"\nstateDiagram-v2\n[*] --\x3e Active: create\nActive --\x3e Active: update\nActive --\x3e Inactive: disable\nInactive --\x3e [*]: delete\nInactive --\x3e Active: enable\n",mdxType:"Mermaid"}),(0,s.kt)("h2",{id:"identity-traits-and-json-schemas"},"Identity Traits and JSON Schemas"),(0,s.kt)("p",null,"Traits are data associated with an identity. You have to define its schema\naccording to your application's needs. They are also supposed to be modified by\nthe identity itself e.g. as part of the registration or profile update process\nas well as anyone having access to Ory Krato's Admin API."),(0,s.kt)("p",null,"Ory Kratos uses\n",(0,s.kt)("a",{parentName:"p",href:"https://json-schema.org/learn/getting-started-step-by-step.html"},"JSON Schema"),"\nto validate Identity Traits."),(0,s.kt)("p",null,'Ory Kratos defines JSON Schema extension "Vocabulary" that allows you to tell\nOry Kratos that a specific trait adds some specific meaning to the standard JSON\nSchema (more on that later).'),(0,s.kt)("p",null,"Each identity can, theoretically, have a different JSON Schema. This is useful\nin the following situations:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"there is more than one type of identity in the system for instance customers,\nsupport or staff;"),(0,s.kt)("li",{parentName:"ul"},"the system includes both users and robots sometimes also known as named\nservice accounts;"),(0,s.kt)("li",{parentName:"ul"},"the system needs to ingest another company's Identity Schema, and"),(0,s.kt)("li",{parentName:"ul"},"the system's Identity Schema changes or grows over time and requires\nversioning.")),(0,s.kt)("p",null,"The following example illustrates a usage scenario with three types of\nidentities: Regular customers,\n",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Grandfather_clause"},"grandfather accounts"),", and\nService Accounts (e.g. Microsoft provides\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/service-accounts"},"Service Accounts"),").\nThere would be one JSON Schema per type of identity:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Customers: ",(0,s.kt)("inlineCode",{parentName:"li"},"http://mydomain.com/schemas/v2/customer.schema.json")),(0,s.kt)("li",{parentName:"ul"},"Grandfather Accounts: ",(0,s.kt)("inlineCode",{parentName:"li"},"http://mydomain.com/schemas/v1/customer.schema.json")),(0,s.kt)("li",{parentName:"ul"},"Service Accounts: ",(0,s.kt)("inlineCode",{parentName:"li"},"http://mydomain.com/schemas/service-account.schema.json"))),(0,s.kt)("p",null,"Ory Kratos expects the JSON Schemas in its configuration file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"identity:\n  # This will be the default JSON Schema. If `schema_id` is empty when creating an identity using the\n  # Admin API, or a user signs up using a selfservice flow, this schema will be used.\n  #\n  # This is a required configuration field!\n  default_schema_url: http://foo.bar.com/person.schema.json\n\n  # Optionally define additional schemas here:\n  schemas:\n    # When creating an identity that uses this schema, `traits_schema_id: customer` would be set for that identity.\n    - id: customer\n      url: http://foo.bar.com/customer.schema.json\n")),(0,s.kt)("p",null,"Ory Kratos validates the Identity Traits against the corresponding schema on all\nwriting operations (create / update). The employed business logic must be able\nto distinguish these three types of identities. You might use a switch statement\nlike in the following example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'// This is an example program that can deal with all three types of identities\nsession, err := ory.SessionFromRequest(r)\n// some error handling\nswitch (session.Identity.SchemaID) {\n    case "customer":\n        // ...\n    case "employee":\n        // ...\n    case "default":\n        fallthrough\n    default:\n        // ...\n}\n')),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Please keep in mind that the Identity Schema is not a place to store sensitive\ninformation that should not be visible to the end-user! Users can see traits and\nother data - except credentials - using the ",(0,s.kt)("inlineCode",{parentName:"p"},"sessions/whoami")," endpoint. The\nIdentity Schema is not the right place to store data that should be obfuscated\nfrom the user!"))),(0,s.kt)("h2",{id:"identity-schema-vocabulary-extensions"},"Identity Schema Vocabulary Extensions"),(0,s.kt)("p",null,"Because Ory Kratos does not know that a particular field has a system-relevant\nmeaning you have to specify these in the schema. This includes for example:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The email address for recovering a lost password"),(0,s.kt)("li",{parentName:"ul"},"The identifier for logging in with a password e.g. username or email"),(0,s.kt)("li",{parentName:"ul"},"The phone number for enabling SMS 2FA"),(0,s.kt)("li",{parentName:"ul"},"...")),(0,s.kt)("p",null,"Ory Kratos' JSON Schema Vocabulary Extension can be used within a property:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "http://mydomain.com/schemas/v2/customer.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "A customer (v2)",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "email": {\n          "title": "E-Mail",\n          "type": "string",\n          "format": "email",\n\n          // This tells Ory Kratos that the field should be used as the "username" for the username+password flow.\n          // It is an extension to the regular JSON Schema vocabulary.\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,s.kt)("p",null,"An overview of available configuration options follows in the next sections."),(0,s.kt)("h3",{id:"identifier-for-username-and-password-flows"},"Identifier for Username and Password Flows"),(0,s.kt)("p",null,"You can configure Ory Kratos to use specific fields as the ",(0,s.kt)("em",{parentName:"p"},"identifier")," e.g.\nusername, email, phone number, etc., in the Username and Password Registration\nand Login Flow:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ory.sh/kratos": {\n    "credentials": {\n      "password": {\n        "identifier": true\n      }\n    }\n  }\n}\n')),(0,s.kt)("p",null,"Looking at the traits from above"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"traits:\n  # These are just examples\n  email: office@ory.sh\n  name:\n    first: Aeneas\n    last: Rekkas\n  favorite_animal: Dog\n  accepted_tos: true\n")),(0,s.kt)("p",null,"and using a JSON Schema that uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"email")," field as the identifier for the\npassword flow"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "http://mydomain.com/schemas/v2/customer.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "A customer (v2)",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "email": {\n          "title": "E-Mail",\n          "type": "string",\n          "format": "email",\n\n          // This tells Ory Kratos that the field should be used as the "username" for the Username and Password Flow.\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        },\n        "name": {\n          "type": "object",\n          "properties": {\n            "first": {\n              "type": "string"\n            },\n            "last": {\n              "type": "string"\n            }\n          }\n        },\n        "favorite_animal": {\n          "type": "string"\n        },\n        "accepted_tos": {\n          "type": "string"\n        }\n      },\n      "required": ["email"],\n      "additionalProperties": false\n    }\n  }\n}\n')),(0,s.kt)("p",null,"In this example, Ory Kratos understands that traits\u2709\ufe0f ",(0,s.kt)("inlineCode",{parentName:"p"},"office@ory.sh")," is\nthe identity's identifier. The system expects ",(0,s.kt)("inlineCode",{parentName:"p"},"office@ory.sh")," plus a password to\nsign in."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/kratos/docs/next/concepts/credentials/username-email-password"},"Username and Password Credentials"),"\ncontains more information and examples."),(0,s.kt)("p",null,"There are currently no other extensions supported for Identity Traits. Further\nfields will be added in future releases!"))}p.isMDXComponent=!0},11748:function(e,t,n){var a={"./locale":89234,"./locale.js":89234};function i(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=s,e.exports=i,i.id=11748}}]);