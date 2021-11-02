(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[2061],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,f=d["".concat(l,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47193:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],s={id:"tracing",title:"Distributed Tracing"},l=void 0,c={unversionedId:"guides/tracing",id:"version-v0.8/guides/tracing",isDocsHomePage:!1,title:"Distributed Tracing",description:"Configuring Distributed Tracing (DT) will enable you to obtain a visualization",source:"@site/versioned_docs/version-v0.8/guides/tracing.mdx",sourceDirName:"guides",slug:"/guides/tracing",permalink:"/kratos/docs/guides/tracing",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.8/guides/tracing.mdx",tags:[],version:"v0.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1635084599,formattedLastUpdatedAt:"10/24/2021",frontMatter:{id:"tracing",title:"Distributed Tracing"},sidebar:"version-v0.8/docs",previous:{title:"Integration using Web-Hooks",permalink:"/kratos/docs/guides/integration-with-other-systems-using-web-hooks"},next:{title:"HTTP API",permalink:"/kratos/docs/reference/api"}},u=[{value:"What a Kratos trace includes",id:"what-a-kratos-trace-includes",children:[],level:3}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Configuring Distributed Tracing (DT) will enable you to obtain a visualization\nof the call paths that take place in order to process a request made to Kratos.\nIt's yet another tool that you can use to aid you in profiling, debugging and\nultimately understanding your deployment of Kratos better. Kratos currently\nsupports the following tracing options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tracing backend(s): Jaeger, Elastic APM, Datadog, Zipkin and Instana - ",(0,i.kt)("em",{parentName:"li"},"Note:\nadding support for other\n",(0,i.kt)("a",{parentName:"em",href:"https://opentracing.io/docs/supported-tracers"},"opentracing compliant backends"),"\nis planned. To aid in priority, please\n",(0,i.kt)("a",{parentName:"em",href:"https://github.com/ory/kratos/issues"},"create an issue")," with your feature\nrequest.")),(0,i.kt)("li",{parentName:"ul"},"Following existing traces: If you have deployed Kratos behind a proxy that has\ninitiated a trace, Kratos will attempt to join that trace by examining the\nrequest headers for tracing context.")),(0,i.kt)("h3",{id:"what-a-kratos-trace-includes"},"What a Kratos trace includes"),(0,i.kt)("p",null,"In DT speak, a trace is comprised of one or more spans which are logical units\nof work. Each Kratos span is encapsulated with the following state:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A name"),(0,i.kt)("li",{parentName:"ul"},"A start time"),(0,i.kt)("li",{parentName:"ul"},"A finish time"),(0,i.kt)("li",{parentName:"ul"},"A set of zero or more tags")),(0,i.kt)("p",null,"Kratos currently creates the following spans:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Top level span (",(0,i.kt)("em",{parentName:"li"},"named after the request path"),") for the requested endpoint.\nSpan tags: - http method - http status code - error IFF status code >= 400"),(0,i.kt)("li",{parentName:"ul"},"Child span will be created if bcrypt is called. Span tags: - bcrypt work\nfactor"),(0,i.kt)("li",{parentName:"ul"},"All SQL database interactions. Spans/tags will vary depending on the database\ndriver used.")),(0,i.kt)("p",null,"This is still evolving and subject to change as tracing support continues to\nexpand in Kratos. If you see something that is missing/wrong, please create an\nissue."))}d.isMDXComponent=!0}}]);