(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[76158],{58215:function(e,t,o){"use strict";var n=o(67294);t.Z=function(e){var t=e.children,o=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:o,className:r},t)}},55064:function(e,t,o){"use strict";o.d(t,{Z:function(){return d}});var n=o(22122),r=o(67294),a=o(72389),s=o(79443);var i=function(){var e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=o(83039),u=o(86010),c="tabItem_1uMI";function p(e){var t,o,n,a=e.lazy,s=e.block,p=e.defaultValue,d=e.values,f=e.groupId,g=e.className,m=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:m.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),h=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(o=m.find((function(e){return e.props.default})))?void 0:o.props.value)?t:null==(n=m[0])?void 0:n.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=i(),b=w.tabGroupChoices,y=w.setTabGroupChoices,S=(0,r.useState)(k),L=S[0],T=S[1],A=[],R=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=b[f];null!=E&&E!==L&&v.some((function(e){return e.value===E}))&&T(E)}var U=function(e){var t=e.currentTarget,o=A.indexOf(t),n=v[o].value;n!==L&&(R(t),T(n),null!=f&&y(f,n))},C=function(e){var t,o=null;switch(e.key){case"ArrowRight":var n=A.indexOf(e.currentTarget)+1;o=A[n]||A[0];break;case"ArrowLeft":var r=A.indexOf(e.currentTarget)-1;o=A[r]||A[A.length-1]}null==(t=o)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":s},g)},v.map((function(e){var t=e.value,o=e.label;return r.createElement("li",{role:"tab",tabIndex:L===t?0:-1,"aria-selected":L===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":L===t}),key:t,ref:function(e){return A.push(e)},onKeyDown:C,onFocus:U,onClick:U},null!=o?o:t)}))),a?(0,r.cloneElement)(m.filter((function(e){return e.props.value===L}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==L})}))))}function d(e){var t=(0,a.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},79443:function(e,t,o){"use strict";var n=(0,o(67294).createContext)(void 0);t.Z=n},12669:function(e,t,o){"use strict";var n=o(55064),r=o(58215),a=o(67294),s=o(11756),i=o(73295),l=o(25108),u=function(e){var t=e.item;return t.code?(l.warn(t.code,"asfd"),a.createElement(s.Z,{className:"language-"+t.language,children:t.code})):t.image?a.createElement("img",{src:t.image,alt:t.alt}):t.codeFromRemote?a.createElement(i.Z,{language:t.language,link:t.codeFromRemote.link,src:t.codeFromRemote.src}):a.createElement("span",null,"Unknown item type: $",JSON.stringify(t))};t.Z=function(e){var t=e.items;return a.createElement(n.Z,{defaultValue:Object.keys(t)[0],values:Object.keys(t).map((function(e){return{label:t[e].label,value:e}}))},Object.keys(t).map((function(e){return a.createElement(r.Z,{key:e,value:e},a.createElement(u,{item:t[e]}))})))}},73295:function(e,t,o){"use strict";o.d(t,{Z:function(){return c}});var n=o(67294),r=o(83300),a=o.n(r),s=o(11756),i="container_2x1S",l=o(25108),u=function(e,t){if(!e)return 0;var o=t.findIndex((function(t){return t.indexOf(e)>-1}));return-1===o?0:o},c=function(e){var t=e.src,o=e.title,r=(0,n.useState)(""),c=r[0],p=r[1];(0,n.useEffect)((function(){var o,n,r;a()(t.replace("github.com","raw.githubusercontent.com").replace("/blob/","/")).then((function(e){return e.text()})).then((o=e,n=o.startAt,r=o.endAt,function(e){var t=e.split("\n"),o=u(n,t);o>0&&(t=["// ..."].concat(t.slice(o,-1)));var a=u(r,t);return a>0&&(t=[].concat(t.slice(0,a+1),["// ..."])),t.join("\n")})).then(p).catch(l.error)}),[]);var d="language-"+function(e){var t=e.split(".").pop();switch(t){case"jsx":return"jsx";case"tsx":return"tsx";case"ts":return"typescript";case"go":return"go";case"yaml":case"yml":return"yaml";case"js":return"javascript";case"html":return"html";case"pug":return"pug";default:return t}}(t),f='title="'+(o||function(e){var t=e.match(new RegExp("https://github.com/[^/]+/[^/]+/blob/[^/]+/(.+)","i"))||[];return t.length>=2?t[1]:e}(t))+'"';return n.createElement("div",{className:i},n.createElement(s.Z,{metastring:f,className:d,children:c}))}},32527:function(e,t,o){"use strict";o.d(t,{Z:function(){return f}});var n=o(67294),r=o(21140),a=o.n(r),s="graph_1lrJ",i="pointer_3d8u",l="overlay_2fuY",u="visible_2Z3U",c="backdrop_2z5L",p=o(94184),d=o.n(p);a().initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});var f=function(e){var t,o=e.chart,r=(0,n.useState)(!1),p=r[0],f=r[1],g=(0,n.useState)(void 0),m=g[0],v=g[1],h=(0,n.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],k=function(){return f(!p)};return(0,n.useEffect)((function(){a().render(h,o,(function(e){v(e)}))}),[]),n.createElement(n.Fragment,null,n.createElement("div",{onClick:k,className:d()(s,i),dangerouslySetInnerHTML:{__html:m}}),n.createElement("div",{onClick:k,className:d()(l,i,s,(t={},t[u]=p,t))},n.createElement("div",{onClick:function(e){return e.stopPropagation()},className:d()(c,s),dangerouslySetInnerHTML:{__html:m}})))}},2683:function(e,t,o){"use strict";var n=o(67294),r=o(32527);t.Z=function(){return n.createElement(r.Z,{chart:"\nsequenceDiagram\n\n  participant B as Browser\n  participant A as Server-Side HTML UI\n  participant K as Ory Kratos\n\n  B->>A: Makes request with Ory Session Cookie\n  A->>K: Requests logout URL for given Ory Session Cookie\n  K->>A: Returns logout URL\n  A--\x3e>A: Renders logout URL in UI / HTML\n  A->>B: Returns HTML\n  B->>K: Opens logout URL\n  alt Logout URL is valid\n    K--\x3e>K: Invalidates session\n    K->>B: Redirects to post logout return address.\n  else Logout URL is invalid\n    K->>B: Redirect to error UI.\n  end\n"})}},61503:function(e,t,o){"use strict";var n=o(67294),r=o(32527);t.Z=function(){return n.createElement(r.Z,{chart:"\nsequenceDiagram\n\n  participant B as Browser\n  participant A as Client-Side UI, e.g. ReactJS\n  participant K as Ory Kratos\n\n  B->>A: Makes request with Ory Session Cookie\n  A->>K: Requests logout URL for given Ory Session Cookie\n  K->>A: Returns logout URL\n  A--\x3e>A: Renders logout URL in UI / HTML\n  A->>B: Returns HTML\n  B->>K: Opens logout URL\n  alt Logout URL is valid\n    K--\x3e>K: Invalidates session\n    K->>B: Redirects to post logout return address.\n  else Logout URL is invalid\n    K->>B: Redirect to error UI.\n  end\n"})}},14185:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n='package main\n\nimport (\n\t"fmt"\n\n\t"github.com/ory/kratos/examples/go/pkg"\n\n\tory "github.com/ory/kratos-client-go"\n)\n\n// If you use Open Source this would be:\n//\n//var client = pkg.NewSDKForSelfHosted("http://127.0.0.1:4433")\nvar client = pkg.NewSDK("playground")\n\nfunc performLogout() {\n\t// Create a temporary user\n\temail, password := pkg.RandomCredentials()\n\t_, sessionToken := pkg.CreateIdentityWithSession(client, email, password)\n\n\t// Log out using session token\n\tres, err := client.V0alpha2Api.SubmitSelfServiceLogoutFlowWithoutBrowserExecute(ory.V0alpha2ApiApiSubmitSelfServiceLogoutFlowWithoutBrowserRequest{}.\n\t\tSubmitSelfServiceLogoutFlowWithoutBrowserBody(ory.SubmitSelfServiceLogoutFlowWithoutBrowserBody{SessionToken: sessionToken}))\n\tpkg.SDKExitOnError(err, res)\n}\n\nfunc main() {\n\tperformLogout()\n\tfmt.Println("Logout successful!")\n}\n'},24851:function(e,t,o){"use strict";o.r(t),o.d(t,{contentTitle:function(){return g},default:function(){return k},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return v}});var n=o(22122),r=o(19756),a=(o(67294),o(3905)),s=o(14185),i={curl:{label:"curl",language:"shell",code:o(42553).Z},go:{label:"Go",language:"go",code:s.Z}},l={node:{label:"NodeJS (ExpressJS, ...)",language:"js",code:o(819).Z}},u=o(12669),c=o(2683),p=o(61503),d=["components"],f={id:"user-logout",title:"User Logout"},g=void 0,m={unversionedId:"self-service/flows/user-logout",id:"self-service/flows/user-logout",isDocsHomePage:!1,title:"User Logout",description:"Ory Kratos supports two logout flows:",source:"@site/docs/self-service/flows/user-logout.mdx",sourceDirName:"self-service/flows",slug:"/self-service/flows/user-logout",permalink:"/kratos/docs/next/self-service/flows/user-logout",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/self-service/flows/user-logout.mdx",tags:[],version:"current",lastUpdatedBy:"emrah",lastUpdatedAt:1631788299,formattedLastUpdatedAt:"9/16/2021",frontMatter:{id:"user-logout",title:"User Logout"},sidebar:"docs",previous:{title:"Email and Phone Verification and Account Activation",permalink:"/kratos/docs/next/self-service/flows/verify-email-account-activation"},next:{title:"User-Facing Errors",permalink:"/kratos/docs/next/self-service/flows/user-facing-errors"}},v=[{value:"Self-Service Logout for Server-Side Browser Applications",id:"self-service-logout-for-server-side-browser-applications",children:[],level:2},{value:"Self-Service Logout for Client-Side Browser Applications",id:"self-service-logout-for-client-side-browser-applications",children:[],level:2},{value:"Self-Service Logout for API Clients",id:"self-service-logout-for-api-clients",children:[],level:2}],h={toc:v};function k(e){var t=e.components,o=(0,r.Z)(e,d);return(0,a.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ory Kratos supports two logout flows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Browser-based (easy): This flow works for all applications running on top of a\nbrowser. Websites, single-page apps, Cordova/Ionic, and so on."),(0,a.kt)("li",{parentName:"ul"},"API-based (advanced): This flow works for native applications like iOS\n(Swift), Android (Java), Microsoft (.NET), React Native, Electron, and others.")),(0,a.kt)("h2",{id:"self-service-logout-for-server-side-browser-applications"},"Self-Service Logout for Server-Side Browser Applications"),(0,a.kt)("p",null,"To ensure that a logout was indeed intended by the user, Ory Kratos first\ngenerates a Logout URL for a given Ory Session Cookie. You can then open the\nLogout URL in the Browser."),(0,a.kt)(c.Z,{mdxType:"SelfServiceLogoutBrowserFlow"}),(0,a.kt)("p",null,"After successful logout, the browser will be redirected either to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"return_to")," query parameter from the initial request URL, or fall back to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"default_browser_return_url")," value set in Ory Kratos' configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# kratos.yaml\nselfservice:\n  flows:\n    logout:\n      after:\n        default_browser_return_url: http://test.kratos.ory.sh:4000/\n")),(0,a.kt)(u.Z,{items:l,mdxType:"CodeTabs"}),(0,a.kt)("p",null,"If an error occurs, the browser is redirected to the\n",(0,a.kt)("a",{parentName:"p",href:"/kratos/docs/next/self-service/flows/user-facing-errors"},"Error UI"),"."),(0,a.kt)("h2",{id:"self-service-logout-for-client-side-browser-applications"},"Self-Service Logout for Client-Side Browser Applications"),(0,a.kt)("p",null,"Similar to Server-Side Browser Applications, Ory Kratos first generates a Logout\nURL for a given Ory Session Cookie. However, you can simply call the Logout URL\nusing an AJAX request. Ory Kratos returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"204 No Content")," response on success\nor an error otherwise."),(0,a.kt)(p.Z,{mdxType:"SelfServiceLogoutSPAFlow"}),(0,a.kt)("p",null,"The following scripts show you how to do the browser flow based on cURL.\nPrerequisites are a recent version of cURL and a registered account in Kratos."),(0,a.kt)("p",null,"Before we start, we need to log in:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# Username/email and password for an existing account\nusername="myuser@ory.sh"\npassword="mysecret"\n\n# We use this cookie jar to initiate the login flow\ncookieJar=$(mktemp)\n\n# Initialize the flow\nflow=$( \\\n  curl -s -H "Accept: application/json"  --cookie $cookieJar --cookie-jar $cookieJar \\\n    \'https://playground.projects.oryapis.com/api/kratos/public/self-service/login/browser\' \\\n)\n\n# Get the action URL\nactionUrl=$(echo $flow | jq -r \'.ui.action\')\n\n# Get the CSRF Token\ncsrfToken=$( \\\n  echo $flow | \\\n    jq -r \'.ui.nodes[] | select(.attributes.name=="csrf_token") | .attributes.value\' \\\n)\n\n# Complete the login\nsession=$( \\\n  curl -s --cookie $cookieJar --cookie-jar $cookieJar -X POST \\\n    -H "Accept: application/json" -H "Content-Type: application/json" \\\n    --data \'{ "password_identifier": "\'$username\'", "password": "\'$password\'", "method": "password", "csrf_token": "\'$csrfToken\'" }\' \\\n    "$actionUrl" \\\n)\n\necho $session | jq\n\n# Check the current user id\ncurl -s --cookie $cookieJar --cookie-jar $cookieJar -H "Accept: application/json" \\\n  https://playground.projects.oryapis.com/api/kratos/public/sessions/whoami | \\\n  jq -r ".id"\n')),(0,a.kt)("p",null,"To logout, first get the generated Logout URL then point the Browser to it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# Get the Logout URL\nlogoutUrl=$( \\\n  curl -s --cookie $cookieJar --cookie-jar $cookieJar -H "Accept: application/json" \\\n    https://playground.projects.oryapis.com/api/kratos/public/self-service/logout/browser | \\\n    jq -r ".logout_url" \\\n)\n\n# Complete the logout\ncurl -s --cookie $cookieJar --cookie-jar $cookieJar "$logoutUrl"\n\n# Check the current user id again. It should be `null` after a succesful logout\ncurl -s --cookie $cookieJar --cookie-jar $cookieJar -H "Accept: application/json" \\\n  https://playground.projects.oryapis.com/api/kratos/public/sessions/whoami | \\\n  jq -r ".id"\n')),(0,a.kt)("h2",{id:"self-service-logout-for-api-clients"},"Self-Service Logout for API Clients"),(0,a.kt)("p",null,"API clients (e.g. native mobile apps) use Ory Session Tokens. To revoke such a\ntoken, call the logout API endpoint:"),(0,a.kt)(u.Z,{items:i,mdxType:"CodeTabs"}))}k.isMDXComponent=!0},11748:function(e,t,o){var n={"./locale":89234,"./locale.js":89234};function r(e){var t=a(e);return o(t)}function a(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=a,e.exports=r,r.id=11748},83300:function(e,t){"use strict";var o=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==o)return o;throw new Error("unable to locate global object")}();e.exports=t=o.fetch,o.fetch&&(t.default=o.fetch.bind(o)),t.Headers=o.Headers,t.Request=o.Request,t.Response=o.Response},42553:function(e,t){"use strict";t.Z='# Set your token here\nsession_token=8ziz8oCx0dsgXnoJJgElTQ60cNnbohAr\n\ncurl -s -v -X DELETE \\\n  -H "Accept: application/json" \\\n  -H "Content-Type: application/json" \\\n  --data \'{"session_token": "\'$session_token\'"}\' \\\n  https://playground.projects.oryapis.com/api/kratos/public/self-service/logout/api\n\n> DELETE /self-service/logout/api HTTP/1.1\n> Host: 127.0.0.1:4433\n> User-Agent: curl/7.64.1\n> Accept: application/json\n> Content-Type: application/json\n> Content-Length: 53\n\n< HTTP/1.1 204 No Content\n< Cache-Control: private, no-cache, no-store, must-revalidate\n< Vary: Cookie\n< Date: Fri, 18 Jun 2021 09:42:04 GMT\n'},819:function(e,t){"use strict";t.Z="import { Configuration, V0alpha1Api } from '@ory/kratos-client';\nconst kratos = new V0alpha1Api(new Configuration({ basePath: 'https://playground.projects.oryapis.com/api/kratos/public/' }));\n\nconst route = (req: Request, res: Response) => {\n  kratos.createSelfServiceLogoutFlowUrlForBrowsers(req.cookies['ory_kratos_session']).then(({data}) => {\n    .then(({ data }) => {\n      console.log(data.logout_url) // The logout URL\n      console.log(data.logout_token) // The logout token\n\n      // You can render the logout URL like so:\n      // <a href=\"{{data.logout_url}}>Logout</a>\n\n      // Or call the logout token:\n      // kratos.submitSelfServiceLogoutFlow(data.logout_token).then(() => {\n        // Logged out\n      // })\n    })\n}\n"}}]);