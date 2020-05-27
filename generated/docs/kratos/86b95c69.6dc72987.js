(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{235:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var i=n(2),a=n(9),s=(n(0),n(318)),r={id:"user-settings-profile-management",title:"User Settings and Profile Management"},o={id:"version-v0.2/self-service/flows/user-settings-profile-management",title:"User Settings and Profile Management",description:"ORY Kratos allows users to update their own settings and profile information",source:"@site/versioned_docs/version-v0.2/self-service/flows/user-settings-profile-management.mdx",permalink:"/kratos/docs/v0.2/self-service/flows/user-settings-profile-management",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.2/self-service/flows/user-settings-profile-management.mdx",version:"v0.2",lastUpdatedBy:"aeneasr",lastUpdatedAt:1588605498,sidebar:"version-v0.2/docs",previous:{title:"User Logout",permalink:"/kratos/docs/v0.2/self-service/flows/user-logout"},next:{title:"Account Recovery",permalink:"/kratos/docs/v0.2/self-service/flows/password-reset-account-recovery"}},c=[{value:"Self-Service User Settings for Browser Applications",id:"self-service-user-settings-for-browser-applications",children:[{value:"The Settings User Interface",id:"the-settings-user-interface",children:[]},{value:"Code",id:"code",children:[]},{value:"Server-Side Browser Applications",id:"server-side-browser-applications",children:[]},{value:"Client-Side Browser Applications",id:"client-side-browser-applications",children:[]}]},{value:"Self-Service User Settings for API Clients",id:"self-service-user-settings-for-api-clients",children:[]},{value:"Hooks",id:"hooks",children:[]}],l={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"ORY Kratos allows users to update their own settings and profile information\nusing two principal flows:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Browser-based (easy): This flow works for all applications running on top of a\nbrowser. Websites, single-page apps, Cordova/Ionic, and so on."),Object(s.b)("li",{parentName:"ul"},"API-based (advanced): This flow works for native applications like iOS\n(Swift), Android (Java), Microsoft (.NET), React Native, Electron, and others.")),Object(s.b)("p",null,"The flow described here is implemented by the\n",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/v0.2/self-service/strategies/user-settings-profile"}),"profile"),",\n",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/v0.2/self-service/strategies/username-email-password"}),"password"),", and\n",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/v0.2/self-service/strategies/openid-connect-social-sign-in-oauth2"}),"oidc"),". strategy."),Object(s.b)("h2",{id:"self-service-user-settings-for-browser-applications"},"Self-Service User Settings for Browser Applications"),Object(s.b)("p",null,"ORY Kratos supports browser applications that run on server-side (e.g. Java,\nNodeJS, PHP) as well as client-side (e.g. JQuery, ReactJS, AngularJS, ...)."),Object(s.b)("p",null,"Browser-based user settings management makes use of three core HTTP\ntechnologies:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"HTTP Redirects"),Object(s.b)("li",{parentName:"ul"},"HTTP POST (",Object(s.b)("inlineCode",{parentName:"li"},"application/json"),", ",Object(s.b)("inlineCode",{parentName:"li"},"application/x-www-urlencoded"),") and RESTful GET\nrequests."),Object(s.b)("li",{parentName:"ul"},"HTTP Cookies to prevent CSRF and Session Hijaking attack vectors.")),Object(s.b)("p",null,"The browser flow is the easiest and most secure to set up and integrated with.\nORY Kratos takes care of all required session and CSRF cookies and ensures that\nall security requirements are fulfilled."),Object(s.b)("p",null,"This flow is not suitable for scenarios where you use purely programmatic\nclients that do not work well with HTTP Cookies and HTTP Redirects."),Object(s.b)("h3",{id:"the-settings-user-interface"},"The Settings User Interface"),Object(s.b)("p",null,"The Settings User Interface is a route (page / site) in your application that\nshould render a sign in and registration form:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- Profile management --\x3e\n<form action="..." method="POST">\n  <input type="hidden" name="csrf_token" value="cdef..." />\n  <input type="string" name="first_name" />\n  <input type="string" name="last_name" />\n  <input type="string" name="address" />\n  <input type="..." name="..." />\n  <input type="submit" />\n</form>\n\n\x3c!-- Password management --\x3e\n<form action="..." method="POST">\n  <input type="hidden" name="csrf_token" value="cdef..." />\n  <input\n    type="password"\n    name="password"\n    placeholder="Enter your new password here"\n  />\n</form>\n\n\x3c!-- Social Sign in  management --\x3e\n<form action="..." method="POST">\n  <input type="hidden" name="csrf_token" value="cdef..." />\n  \x3c!-- ... --\x3e\n</form>\n')),Object(s.b)("p",null,"Reference these UI endpoints your ORY Kratos config file:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/kratos/config.yml"',title:'"path/to/kratos/config.yml"'}),"urls:\n  settings_ui: https://.../settings\n")),Object(s.b)("p",null,"In stark contrast to other Identity Systems, ORY Kratos does not render this\nHTML. Instead, you need to implement the HTML code in your application (e.g.\nNodeJS + ExpressJS, Java, PHP, ReactJS, ...), which gives you extreme\nflexibility and customizability in your user interface flows and designs."),Object(s.b)("p",null,"Each Settings Strategy (",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/v0.2/self-service/strategies/user-settings-profile"}),"Profile"),",\n",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/v0.2/self-service/strategies/username-email-password"}),"Username and Password"),",\n",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/v0.2/self-service/strategies/openid-connect-social-sign-in-oauth2"}),"Social Sign In"),",\nPasswordless, ...) works a bit different but they all boil down to the same\nabstract sequence:"),Object(s.b)("p",null,Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gIHBhcnRpY2lwYW50IEIgYXMgQnJvd3NlclxuICBwYXJ0aWNpcGFudCBLIGFzIE9SWSBLcmF0b3NcbiAgcGFydGljaXBhbnQgQSBhcyBZb3VyIEFwcGxpY2F0aW9uXG5cblxuICBCLT4-SzogSW5pdGlhdGUgTG9naW5cbiAgSy0-PkI6IFJlZGlyZWN0cyB0byB5b3VyIEFwcGxpY2F0aW9uJ3MgL3NldHRpbmdzX3VpIGVuZHBvaW50XG4gIEItPj5BOiBDYWxscyAvc2V0dGluZ3NfdWlcbiAgQS0tPj5LOiBGZXRjaGVzIGRhdGEgdG8gcmVuZGVyIGZvcm1zIGV0Y1xuICBCLS0-PkE6IEZpbGxzIG91dCBmb3JtcywgY2xpY2tzIGUuZy4gXCJTYXZlIENoYW5nZXNcIlxuICBCLT4-SzogUE9TVHMgZGF0YSB0b1xuICBLLS0-Pks6IFByb2Nlc3NlcyBTZXR0aW5ncyBJbmZvXG5cbiAgYWx0IFNldHRpbmdzIGRhdGEgdmFsaWRcbiAgICBLLS0-PkI6IFVwZGF0ZXMgSWRlbnRpdHkgU2V0dGluZ3NcbiAgICBLLT4-QjogUmVkaXJlY3RzIHRvIGUuZy4gRGFzaGJvYXJkXG4gIGVsc2UgU2V0aW5ncyBkYXRhIGludmFsaWRcbiAgICBLLS0-PkI6IFJlZGlyZWN0cyB0byB5b3VyIEFwcGxpY2FpdG9uJ3MgL3NldHRpbmdzX3VpIGVuZHBvaW50XG4gICAgQi0-PkE6IENhbGxzIC9zZXR0aW5nc191aVxuICAgIEEtLT4-SzogRmV0Y2hlcyBkYXRhIHRvIHJlbmRlciBmb3JtIGZpZWxkcyBhbmQgZXJyb3JzXG4gICAgQi0tPj5BOiBGaWxscyBvdXQgZm9ybXMgYWdhaW4sIGNvcnJlY3RzIGVycm9yc1xuICAgIEItPj5LOiBQT1NUcyBkYXRhIGFnYWluIC0gYW5kIHNvIG9uLi4uXG4gIGVuZFxuIiwibWVybWFpZCI6eyJ0aGVtZSI6Im5ldXRyYWwiLCJzZXF1ZW5jZURpYWdyYW0iOnsiZGlhZ3JhbU1hcmdpblgiOjE1LCJkaWFncmFtTWFyZ2luWSI6MTUsImJveFRleHRNYXJnaW4iOjAsIm5vdGVNYXJnaW4iOjE1LCJtZXNzYWdlTWFyZ2luIjo0NSwibWlycm9yQWN0b3JzIjp0cnVlfX0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9"}),Object(s.b)("img",Object(i.a)({parentName:"a"},{src:"https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gIHBhcnRpY2lwYW50IEIgYXMgQnJvd3NlclxuICBwYXJ0aWNpcGFudCBLIGFzIE9SWSBLcmF0b3NcbiAgcGFydGljaXBhbnQgQSBhcyBZb3VyIEFwcGxpY2F0aW9uXG5cblxuICBCLT4-SzogSW5pdGlhdGUgTG9naW5cbiAgSy0-PkI6IFJlZGlyZWN0cyB0byB5b3VyIEFwcGxpY2F0aW9uJ3MgL3NldHRpbmdzX3VpIGVuZHBvaW50XG4gIEItPj5BOiBDYWxscyAvc2V0dGluZ3NfdWlcbiAgQS0tPj5LOiBGZXRjaGVzIGRhdGEgdG8gcmVuZGVyIGZvcm1zIGV0Y1xuICBCLS0-PkE6IEZpbGxzIG91dCBmb3JtcywgY2xpY2tzIGUuZy4gXCJTYXZlIENoYW5nZXNcIlxuICBCLT4-SzogUE9TVHMgZGF0YSB0b1xuICBLLS0-Pks6IFByb2Nlc3NlcyBTZXR0aW5ncyBJbmZvXG5cbiAgYWx0IFNldHRpbmdzIGRhdGEgdmFsaWRcbiAgICBLLS0-PkI6IFVwZGF0ZXMgSWRlbnRpdHkgU2V0dGluZ3NcbiAgICBLLT4-QjogUmVkaXJlY3RzIHRvIGUuZy4gRGFzaGJvYXJkXG4gIGVsc2UgU2V0aW5ncyBkYXRhIGludmFsaWRcbiAgICBLLS0-PkI6IFJlZGlyZWN0cyB0byB5b3VyIEFwcGxpY2FpdG9uJ3MgL3NldHRpbmdzX3VpIGVuZHBvaW50XG4gICAgQi0-PkE6IENhbGxzIC9zZXR0aW5nc191aVxuICAgIEEtLT4-SzogRmV0Y2hlcyBkYXRhIHRvIHJlbmRlciBmb3JtIGZpZWxkcyBhbmQgZXJyb3JzXG4gICAgQi0tPj5BOiBGaWxscyBvdXQgZm9ybXMgYWdhaW4sIGNvcnJlY3RzIGVycm9yc1xuICAgIEItPj5LOiBQT1NUcyBkYXRhIGFnYWluIC0gYW5kIHNvIG9uLi4uXG4gIGVuZFxuIiwibWVybWFpZCI6eyJ0aGVtZSI6Im5ldXRyYWwiLCJzZXF1ZW5jZURpYWdyYW0iOnsiZGlhZ3JhbU1hcmdpblgiOjE1LCJkaWFncmFtTWFyZ2luWSI6MTUsImJveFRleHRNYXJnaW4iOjAsIm5vdGVNYXJnaW4iOjE1LCJtZXNzYWdlTWFyZ2luIjo0NSwibWlycm9yQWN0b3JzIjp0cnVlfX0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",alt:"Abstract Settings Flow"})))),Object(s.b)("h3",{id:"code"},"Code"),Object(s.b)("p",null,"The code example used here is universal and does not use an SDK because we want\nyou to understand the fundamentals of how this flow works."),Object(s.b)("p",null,"While this example assumes a Server-Side Application, a Client-Side (e.g.\nReactJS) Application would work the same, but use ORY Kratos' Public API\ninstead."),Object(s.b)("h4",{id:"server-side-route"},"Server-side route"),Object(s.b)("p",null,"You will notice that this endpoint is very similar to the one documented for\n",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/v0.2/self-service/flows/user-settings-profile-management"}),"User Login and Registration"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"// Uses the ORY Kratos NodeJS SDK - for more SDKs check:\n//\n//  https://www.ory.sh/kratos/docs/sdk/index\nconst { CommonApi } = require('@oryd/kratos-client');\n\n// The browser config key is used to redirect the user. It reflects where ORY Kratos' Public API\n// is accessible from. Here, we're assuming traffic going to `http://example.org/.ory/kratos/public/`\n// will be forwarded to ORY Kratos' Public API.\nconst kratosBrowserUrl = 'http://example.org/.ory/kratos/public/';\n\n// Initializes the SDK with ORY Kratos' Admin API.\nconst commonApi = new CommonApi('https://ory-kratos-admin.example-org.vpc/');\n\n// This route would be used like:\n//\n//    app.get('/user/settings', authHandler('registration'))\n//\nexport const settingsHandler = (req, res, next) => {\n  // The request ID is used to identify the login and registraion request and\n  // return data like the csrf_token and so on.\n  const request = req.query.request;\n  if (!request) {\n    console.log('No request found in URL, initializing flow.');\n    res.redirect(`${kratosBrowserUrl}/self-service/browser/flows/settings`);\n    return;\n  }\n\n  commonApi\n    .getSelfServiceBrowserSettingsRequest(request)\n    .then(({ body, response }) => {\n      if (response.statusCode !== 200) {\n        res.redirect(`${kratosBrowserUrl}/self-service/browser/flows/settings`);\n        return;\n      }\n\n      // \"body\" contains all the request data for this Registration request.\n      // You can process that data here, if you want.\n\n      // Lastly, you probably want to render the data using a view (e.g. Jade Template):\n      res.render('settings', body);\n    });\n  // Handle errors using ExpressJS' next functionality:\n  //\n  //    .catch(next)\n};\n")),Object(s.b)("h4",{id:"views"},"Views"),Object(s.b)("p",null,"Implementing the view is simple as ORY Kratos provides you with all the\ninformation you need for rendering the forms. The following example illustrates\na generic form generator (we use handlebars here) that works with ORY Kratos:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-handlebars",metastring:'name="views/partials/form.hbs"',name:'"views/partials/form.hbs"'}),'<form action="{{form.action}}" method="{{form.method}}">\n    {{~#each form.errors~}}\n        \x3c!-- global form validation errors --\x3e\n        <div class="error">{{message}}</div>\n    {{~/each~}}\n\n    {{#each form.fields}}\n        {{~#each errors~}}\n            \x3c!-- validation errors for this specific field --\x3e\n            <div class="error">{{message}}</div>\n        {{~/each~}}\n        <input name="{{name}}" type="{{type}}" value="{{value}}" {{#if disabled}}disabled{{/if}}>\n    {{/each}}\n\n    <button type="submit">Save</button>\n</form>\n')),Object(s.b)("p",null,'In your main "Settings" view you would then consume this template for all the\nmethods you want to support:'),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-handlebars",metastring:'name="views/login_or_signup.hbs"',name:'"views/login_or_signup.hbs"'}),"\x3c!-- Make profile changes form: --\x3e\n{{#if methods.profile.config}}\n    {{> form form=methods.profile.config}}\n{{/if}}\n\n\x3c!-- Change passowrd form: --\x3e\n{{#if methods.password.config}}\n    {{> form form=methods.password.config}}\n{{/if}}\n\n\x3c!-- ... form: --\x3e\n\x3c!-- ... --\x3e\n")),Object(s.b)("p",null,"For details on payloads and potential HTML snippets consult the individual\nSelf-Service Strategies for:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"/kratos/docs/v0.2/self-service/strategies/username-email-password"}),"Username and Password Strategy")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"/kratos/docs/v0.2/self-service/strategies/openid-connect-social-sign-in-oauth2"}),"Social Sign In Strategy")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"/kratos/docs/v0.2/self-service/strategies/user-settings-profile"}),"Profile"))),Object(s.b)("h3",{id:"server-side-browser-applications"},"Server-Side Browser Applications"),Object(s.b)("p",null,"Let's take a look at the concrete network topologies, calls, and payloads. Here,\nwe're assuming that you're running a server-side browser application (written in\ne.g. PHP, Java, NodeJS) to render the settings screen on the server and make all\nAPI calls from that server code. The counterpart to this would be a client-side\nbrowser application (written in e.g. Vanilla JavaScript, JQuery, ReactJS,\nAngularJS, ...) that uses AJAX requests to fetch data. For these type of\napplications, read this section first and go to section\n",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"#client-side-browser-applications"}),"Client-Side Browser Applications")," next."),Object(s.b)("h4",{id:"network-architecture"},"Network Architecture"),Object(s.b)("p",null,"We recommend checking out the\n",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/v0.2/quickstart#network-architecture"}),"Quickstart Network Architecture")," for\na high-level, exemplary, overview of the network. In summary:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"The SecureApp (your application) is exposed at ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"http://127.0.0.1:4455"}),"http://127.0.0.1:4455")," and\nproxies requests matching path ",Object(s.b)("inlineCode",{parentName:"li"},"./ory/kratos/public/*")," to ORY Krato's Public\nAPI Port."),Object(s.b)("li",{parentName:"ol"},"ORY Kratos exposes (for debugging only!!) the Public API at\n",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"http://127.0.0.1:4433"}),"http://127.0.0.1:4433")," and Admin API at ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"http://127.0.0.1:4434"}),"http://127.0.0.1:4434"),"."),Object(s.b)("li",{parentName:"ol"},'Within the "intranet" or "private network", ORY Kratos is exposed at\nhttp://kratos:4433 and http://kratos:4434. These URLs are be used by the\nSecureApp to communicate with ORY Kratos.')),Object(s.b)("p",null,"Keep in mind that his architecture is just one of many possible network\narchitectures. It is however one of the simplest as well and it works locally.\nFor production deployments you would probably use an Reverse Proxy such as\nNginx, Kong, Envoy, ORY Oathkeeper, or others."),Object(s.b)("h4",{id:"user-settings-process-sequence"},"User Settings Process Sequence"),Object(s.b)("p",null,"The User Settings Flow is composed of several high-level steps summarized in\nthis state diagram:"),Object(s.b)("p",null,Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic3RhdGVEaWFncmFtXG4gIHMxOiBVc2VyIGJyb3dzZXMgYXBwXG4gIHMyOiBFeGVjdXRlIFwiQmVmb3JlIExvZ2luL1JlZ2lzdHJhdGlvbiBIb29rKHMpXCJcbiAgczM6IFVzZXIgSW50ZXJmYWNlIEFwcGxpY2F0aW9uIHJlbmRlcnMgXCJMb2dpbi9SZWdpc3RyYXRpb24gUmVxdWVzdFwiXG4gIHM0OiBFeGVjdXRlIFwiQWZ0ZXIgTG9naW4vUmVnaXN0cmF0aW9uIEhvb2socylcIlxuICBzNTogVXBkYXRlIFwiTG9naW4vUmVnaXN0cmF0aW9uIFJlcXVlc3RcIiB3aXRoIEVycm9yIENvbnRleHQocylcbiAgczY6IExvZ2luL1JlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsXG5cblxuXG5cdFsqXSAtLT4gczFcbiAgczEgLS0-IHMyIDogVXNlciBjbGlja3MgXCJMb2cgaW4gLyBTaWduIHVwXCJcbiAgczIgLS0-IEVycm9yIDogQSBob29rIGZhaWxzXG4gIHMyIC0tPiBzMyA6IFVzZXIgaXMgcmVkaXJlY3RlZCB0byBMb2dpbi9SZWdpc3RyYXRpb24gVUkgVVJMXG4gIHMzIC0tPiBzNCA6IFVzZXIgcHJvdmlkZXMgdmFsaWQgY3JlZGVudGlhbHMvcmVnaXN0cmF0aW9uIGRhdGFcbiAgczMgLS0-IHM1IDogVXNlciBwcm92aWRlcyBpbnZhbGlkIGNyZWRlbnRpYWxzL3JlZ2lzdHJhdGlvbiBkYXRhXG4gIHM1IC0tPiBzMyA6IFVzZXIgaXMgcmVkaXJlY3RlZCB0byBMb2dpbi9SZWdpc3RyYXRpb24gVUkgVVJMXG4gIHM0IC0tPiBFcnJvciA6IEEgSG9vayBmYWlsc1xuICBzNCAtLT4gczZcbiAgczYgLS0-IFsqXVxuXG4gIEVycm9yIC0tPiBbKl1cblxuXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ"}),Object(s.b)("img",Object(i.a)({parentName:"a"},{src:"https://mermaid.ink/img/eyJjb2RlIjoic3RhdGVEaWFncmFtXG4gIHMxOiBVc2VyIGJyb3dzZXMgYXBwXG4gIHMyOiBFeGVjdXRlIFwiQmVmb3JlIExvZ2luL1JlZ2lzdHJhdGlvbiBIb29rKHMpXCJcbiAgczM6IFVzZXIgSW50ZXJmYWNlIEFwcGxpY2F0aW9uIHJlbmRlcnMgXCJMb2dpbi9SZWdpc3RyYXRpb24gUmVxdWVzdFwiXG4gIHM0OiBFeGVjdXRlIFwiQWZ0ZXIgTG9naW4vUmVnaXN0cmF0aW9uIEhvb2socylcIlxuICBzNTogVXBkYXRlIFwiTG9naW4vUmVnaXN0cmF0aW9uIFJlcXVlc3RcIiB3aXRoIEVycm9yIENvbnRleHQocylcbiAgczY6IExvZ2luL1JlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsXG5cblxuXG5cdFsqXSAtLT4gczFcbiAgczEgLS0-IHMyIDogVXNlciBjbGlja3MgXCJMb2cgaW4gLyBTaWduIHVwXCJcbiAgczIgLS0-IEVycm9yIDogQSBob29rIGZhaWxzXG4gIHMyIC0tPiBzMyA6IFVzZXIgaXMgcmVkaXJlY3RlZCB0byBMb2dpbi9SZWdpc3RyYXRpb24gVUkgVVJMXG4gIHMzIC0tPiBzNCA6IFVzZXIgcHJvdmlkZXMgdmFsaWQgY3JlZGVudGlhbHMvcmVnaXN0cmF0aW9uIGRhdGFcbiAgczMgLS0-IHM1IDogVXNlciBwcm92aWRlcyBpbnZhbGlkIGNyZWRlbnRpYWxzL3JlZ2lzdHJhdGlvbiBkYXRhXG4gIHM1IC0tPiBzMyA6IFVzZXIgaXMgcmVkaXJlY3RlZCB0byBMb2dpbi9SZWdpc3RyYXRpb24gVUkgVVJMXG4gIHM0IC0tPiBFcnJvciA6IEEgSG9vayBmYWlsc1xuICBzNCAtLT4gczZcbiAgczYgLS0-IFsqXVxuXG4gIEVycm9yIC0tPiBbKl1cblxuXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ",alt:"User Login and Registration State Machine"})))),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"The flow is initiated by directing the user's browser to\n",Object(s.b)("inlineCode",{parentName:"li"},"http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/settings"),"."),Object(s.b)("li",{parentName:"ol"},"ORY Kratos does some internal processing (e.g. checks if a session cookie is\nset, generates payloads for form fields, sets CSRF token, ...) and redirects\nthe user's browser to the Settings UI URL which is defined using the\n",Object(s.b)("inlineCode",{parentName:"li"},"urls.settings_ui")," config or ",Object(s.b)("inlineCode",{parentName:"li"},"URLS_SETTINGS_UI")," environment variable, which\nis set to the ui endpoints - for example ",Object(s.b)("inlineCode",{parentName:"li"},"https://127.0.0.1:4455/settings"),".\nThe user's browser is thus redirected to\n",Object(s.b)("inlineCode",{parentName:"li"},"https://127.0.0.1:4455/settings?request=abcde"),". The ",Object(s.b)("inlineCode",{parentName:"li"},"request")," query\nparameter includes a unique ID which will be used to fetch contextual data\nfor this login request."),Object(s.b)("li",{parentName:"ol"},"Your Server-Side Application makes a ",Object(s.b)("inlineCode",{parentName:"li"},"GET")," request to\n",Object(s.b)("inlineCode",{parentName:"li"},"http://kratos:4434/self-service/browser/flows/requests/settings?request=abcde"),".\nORY Kratos responds with a JSON Payload that contains data (form fields,\nerror messages, ...) for all enabled User Profile Strategies:",Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json5"}),"{\n  id: 'abcde',\n  request_url: '...',\n  methods: {\n    profile: { method: 'profile', config: { action: '...', fields: [] } },\n    password: { method: 'password', config: { action: '...', fields: [] } },\n    oidc: { method: 'oidc', config: { action: '...', fields: [] } },\n  },\n}\n"))),Object(s.b)("li",{parentName:"ol"},"Your Server-Side applications renders the data however you see fit. The User\ninteracts with it and completes the flow by e.g. updating the password or\nsome other profile data."),Object(s.b)("li",{parentName:"ol"},"The User's browser makes a request to one of ORY Kratos' Strategy URLs (e.g.\n",Object(s.b)("inlineCode",{parentName:"li"},"http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/settings/strategies/profile?request=abcde"),"\nor ",Object(s.b)("inlineCode",{parentName:"li"},"/self-service/browser/flows/settings/strategies/password?request=abcde"),").\nORY Kratos validates the data:",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"If the form data is invalid, the Login Request's JSON Payload is updated -\nfor example with",Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json5"}),"{\n  id: 'abcde',\n  methods: {\n    oidc: {\n      method: 'oidc',\n      config: {\n        /* ... */\n      },\n    },\n    password: {\n      method: 'password',\n      config: {\n        /* ... */\n        errors: [\n          {\n            message: 'The provided credentials are invalid. Check for spelling mistakes in your password or username, email address, or phone number.',\n          },\n        ],\n      },\n    },\n  },\n}\n")),"and the user's Browser is redirected back to the Login UI:\n",Object(s.b)("inlineCode",{parentName:"li"},"https://127.0.0.1:4455/settings_ui?request=abcde"),"."),Object(s.b)("li",{parentName:"ul"},"If the data is valid but the modifications require proof of identity (e.g.\nbecause the primary email address or the password was changed), a login\nflow is executed. Only after a successful login flow will the changed data\nbe stored!"),Object(s.b)("li",{parentName:"ul"},"If data is valid, ORY Kratos proceeds with the next step."))),Object(s.b)("li",{parentName:"ol"},"ORY Kratos executes hooks defined in the ",Object(s.b)("strong",{parentName:"li"},"After Settings Hooks"),". If a\nfailure occurs, the whole flow is aborted."),Object(s.b)("li",{parentName:"ol"},"The client receives the expected response. For browsers, this is a HTTP\nRedirection, for API clients it will be a JSON response containing the\nsession and/or identity. For more information on this topic check\n",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"/kratos/docs/v0.2/concepts/selfservice-flow-completion"}),"Self-Service Flow Completion"),".")),Object(s.b)("p",null,Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gIHBhcnRpY2lwYW50IEIgYXMgQnJvd3NlclxuICBwYXJ0aWNpcGFudCBBIGFzIFlvdXIgU2VydmVyLVNpZGUgQXBwbGljYXRpb25cbiAgcGFydGljaXBhbnQgS1AgYXMgT1JZIEtyYXRvcyBQdWJsaWMgQVBJXG4gIHBhcnRpY2lwYW50IEtBIGFzIE9SWSBLcmF0b3MgQWRtaW4gQVBJXG5cbiAgQi0-PitBOiBHRVQgLy5vcnkva3JhdG9zL3B1YmxpYy9zZWxmLXNlcnZpY2UvYnJvd3Nlci9mbG93cy9zZXR0aW5nc1xuICBBLT4-K0tQOiBHRVQgL3NlbGYtc2VydmljZS9icm93c2VyL2Zsb3dzL3NldHRpbmdzXG4gIEtQLS0-Pi1BOiBIVFRQIDMwMiBGb3VuZCAvc2V0dGluZ3M_cmVxdWVzdD1hYmNkZVxuICBBLS0-Pi1COiBIVFRQIDMwMiBGb3VuZCAvc2V0dGluZ3M_cmVxdWVzdD1hYmNkZVxuXG4gIEItPj4rQTogR0VUIC9zZXR0aW5ncz9yZXF1ZXN0PWFiY2RlXG4gIEEtPj4rS0E6IEdFVCAvc2VsZi1zZXJ2aWNlL2Jyb3dzZXIvZmxvd3MvcmVxdWVzdHMvc2V0dGluZ3M_cmVxdWVzdD1hYmNkZVxuICBLQS0-Pi1BOiBTZW5kcyBTZXR0aW5ncyBSZXF1ZXN0IEpTT04gUGF5bG9hZFxuICBOb3RlIG92ZXIgQSxLQTogIHtcIm1ldGhvZHNcIjp7XCJwYXNzd29yZFwiOi4uLixcIm9pZGNcIjouLn19XG4gIEEtLT4-QTogR2VuZXJhdGUgYW5kIHJlbmRlciBIVE1MXG4gIEEtLT4-LUI6IFJldHVybiBIVE1MIChGb3JtLCAuLi4pXG5cbiAgQi0tPj5COiBGaWxsIG91dCBIVE1MXG5cbiAgQi0-PitLUDogUE9TVCBIVE1MIEZvcm1cbiAgS1AtLT4-S1A6IENoZWNrcyBwcm9maWxlIGRhdGFcblxuXG4gIGFsdCBTZXR0aW5nIHVwZGF0ZXMgYXJlIHZhbGlkXG4gICAgS1AtLT4-LUtQOiBFeGVjdXRlIEpvYnMgZGVmaW5lZCBpbiBcIkFmdGVyIFNldHRpbmdzIFdvcmtmbG93KHMpXCJcbiAgICBLUC0tPj5BOiBIVFRQIDMwMiBGb3VuZCAvZGFzaGJvYXJkXG4gIGVsc2UgU2V0dGluZyB1cGRhdGVzIHJlcXVpcmUgcmUtYXV0aGVudGljYXRpb25cbiAgICBOb3RlIG92ZXIgS1AsQjogVXNlciBpcyBhc2tlZCB0byBsb2dpbiBpbiBhZ2Fpbi4gSWYgdGhlIGxvZ2luIGlzIHZhbGlkLCB0aGUgZGF0YSBpcyB1cGRhdGVkLlxuICAgIEtQLS0-PkI6IEhUVFAgMzAyIEZvdW5kIC9zZXR0aW5ncz9yZXF1ZXN0PWFiY2RlXG4gIGVsc2UgU2V0dGluZyB1cGRhdGVzIGFyZSBpbnZhbGlkXG4gICAgTm90ZSBvdmVyIEtQLEI6IFVzZXIgcmV0cmllcyBzZXR0aW5ncyBmbG93XG4gICAgS1AtLT4-QjogSFRUUCAzMDIgRm91bmQgL3NldHRpbmdzP3JlcXVlc3Q9YWJjZGVcbiAgZW5kXG4gICIsIm1lcm1haWQiOnsidGhlbWUiOiJuZXV0cmFsIiwic2VxdWVuY2VEaWFncmFtIjp7ImRpYWdyYW1NYXJnaW5YIjoxNSwiZGlhZ3JhbU1hcmdpblkiOjE1LCJib3hUZXh0TWFyZ2luIjoxLCJub3RlTWFyZ2luIjoxMCwibWVzc2FnZU1hcmdpbiI6NTUsIm1pcnJvckFjdG9ycyI6dHJ1ZX19LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ"}),Object(s.b)("img",Object(i.a)({parentName:"a"},{src:"https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gIHBhcnRpY2lwYW50IEIgYXMgQnJvd3NlclxuICBwYXJ0aWNpcGFudCBBIGFzIFlvdXIgU2VydmVyLVNpZGUgQXBwbGljYXRpb25cbiAgcGFydGljaXBhbnQgS1AgYXMgT1JZIEtyYXRvcyBQdWJsaWMgQVBJXG4gIHBhcnRpY2lwYW50IEtBIGFzIE9SWSBLcmF0b3MgQWRtaW4gQVBJXG5cbiAgQi0-PitBOiBHRVQgLy5vcnkva3JhdG9zL3B1YmxpYy9zZWxmLXNlcnZpY2UvYnJvd3Nlci9mbG93cy9zZXR0aW5nc1xuICBBLT4-K0tQOiBHRVQgL3NlbGYtc2VydmljZS9icm93c2VyL2Zsb3dzL3NldHRpbmdzXG4gIEtQLS0-Pi1BOiBIVFRQIDMwMiBGb3VuZCAvc2V0dGluZ3M_cmVxdWVzdD1hYmNkZVxuICBBLS0-Pi1COiBIVFRQIDMwMiBGb3VuZCAvc2V0dGluZ3M_cmVxdWVzdD1hYmNkZVxuXG4gIEItPj4rQTogR0VUIC9zZXR0aW5ncz9yZXF1ZXN0PWFiY2RlXG4gIEEtPj4rS0E6IEdFVCAvc2VsZi1zZXJ2aWNlL2Jyb3dzZXIvZmxvd3MvcmVxdWVzdHMvc2V0dGluZ3M_cmVxdWVzdD1hYmNkZVxuICBLQS0-Pi1BOiBTZW5kcyBTZXR0aW5ncyBSZXF1ZXN0IEpTT04gUGF5bG9hZFxuICBOb3RlIG92ZXIgQSxLQTogIHtcIm1ldGhvZHNcIjp7XCJwYXNzd29yZFwiOi4uLixcIm9pZGNcIjouLn19XG4gIEEtLT4-QTogR2VuZXJhdGUgYW5kIHJlbmRlciBIVE1MXG4gIEEtLT4-LUI6IFJldHVybiBIVE1MIChGb3JtLCAuLi4pXG5cbiAgQi0tPj5COiBGaWxsIG91dCBIVE1MXG5cbiAgQi0-PitLUDogUE9TVCBIVE1MIEZvcm1cbiAgS1AtLT4-S1A6IENoZWNrcyBwcm9maWxlIGRhdGFcblxuXG4gIGFsdCBTZXR0aW5nIHVwZGF0ZXMgYXJlIHZhbGlkXG4gICAgS1AtLT4-LUtQOiBFeGVjdXRlIEpvYnMgZGVmaW5lZCBpbiBcIkFmdGVyIFNldHRpbmdzIFdvcmtmbG93KHMpXCJcbiAgICBLUC0tPj5BOiBIVFRQIDMwMiBGb3VuZCAvZGFzaGJvYXJkXG4gIGVsc2UgU2V0dGluZyB1cGRhdGVzIHJlcXVpcmUgcmUtYXV0aGVudGljYXRpb25cbiAgICBOb3RlIG92ZXIgS1AsQjogVXNlciBpcyBhc2tlZCB0byBsb2dpbiBpbiBhZ2Fpbi4gSWYgdGhlIGxvZ2luIGlzIHZhbGlkLCB0aGUgZGF0YSBpcyB1cGRhdGVkLlxuICAgIEtQLS0-PkI6IEhUVFAgMzAyIEZvdW5kIC9zZXR0aW5ncz9yZXF1ZXN0PWFiY2RlXG4gIGVsc2UgU2V0dGluZyB1cGRhdGVzIGFyZSBpbnZhbGlkXG4gICAgTm90ZSBvdmVyIEtQLEI6IFVzZXIgcmV0cmllcyBzZXR0aW5ncyBmbG93XG4gICAgS1AtLT4-QjogSFRUUCAzMDIgRm91bmQgL3NldHRpbmdzP3JlcXVlc3Q9YWJjZGVcbiAgZW5kXG4gICIsIm1lcm1haWQiOnsidGhlbWUiOiJuZXV0cmFsIiwic2VxdWVuY2VEaWFncmFtIjp7ImRpYWdyYW1NYXJnaW5YIjoxNSwiZGlhZ3JhbU1hcmdpblkiOjE1LCJib3hUZXh0TWFyZ2luIjoxLCJub3RlTWFyZ2luIjoxMCwibWVzc2FnZU1hcmdpbiI6NTUsIm1pcnJvckFjdG9ycyI6dHJ1ZX19LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ",alt:"User Settings Sequence Diagram for Server-Side Applications"})))),Object(s.b)("h3",{id:"client-side-browser-applications"},"Client-Side Browser Applications"),Object(s.b)("p",null,"Because Client-Side Browser Applications do not have access to ORY Kratos' Admin\nAPI, they must use the ORY Kratos Public API instead. The flow for a Client-Side\nBrowser Application is almost the exact same as the one for Server-Side\nApplications, with the small difference that\n",Object(s.b)("inlineCode",{parentName:"p"},"https://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/requests/settings?request=abcde"),"\nwould be called via AJAX instead of making a request to\n",Object(s.b)("inlineCode",{parentName:"p"},"https://kratos:4434/self-service/browser/flows/requests/settings?request=abcde"),"."),Object(s.b)("p",null,"To prevent brute force, guessing, session injection, and other attacks, it is\nrequired that cookies are working for this endpoint. The cookie set in the\ninitial HTTP request made to\n",Object(s.b)("inlineCode",{parentName:"p"},"https://127.0.0.1:4455/.ory/kratos/public/self-service/browser/settings")," MUST\nbe set and available when calling this endpoint!"),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(s.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"The initialization request\n(",Object(s.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/settings"),")\n",Object(s.b)("strong",{parentName:"p"},"cannot")," be made via AJAX or API requests. You ",Object(s.b)("strong",{parentName:"p"},"must")," open that URL in the\nuser's browser using e.g. ",Object(s.b)("inlineCode",{parentName:"p"},"window.open")," ",Object(s.b)("inlineCode",{parentName:"p"},"location.href")," or plain and simple old\n",Object(s.b)("inlineCode",{parentName:"p"},"<a href=...>"),"."))),Object(s.b)("h2",{id:"self-service-user-settings-for-api-clients"},"Self-Service User Settings for API Clients"),Object(s.b)("p",null,"Will be addressed in a future release."),Object(s.b)("h2",{id:"hooks"},"Hooks"),Object(s.b)("p",null,"ORY Kratos allows you to configure hooks that run before and after a profile\nupdate was successful. For more information about hooks please read the\n",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/v0.2/self-service/hooks/index"}),"Hook Documentation"),"."))}d.isMDXComponent=!0},318:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var i=n(0),a=n.n(i);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=d(n),m=i,g=b["".concat(r,".").concat(m)]||b[m]||p[m]||s;return n?a.a.createElement(g,o(o({ref:t},l),{},{components:n})):a.a.createElement(g,o({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var l=2;l<s;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);