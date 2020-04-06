(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(1),i=n(9),r=(n(0),n(161)),o={id:"sqa",title:"Software Quality Assurance"},l={id:"ecosystem/sqa",title:"Software Quality Assurance",description:"Our goal is to provide you with the fastest and most reliable open source",source:"@site/docs/ecosystem/sqa.md",permalink:"/docs/ecosystem/sqa",editUrl:"https://github.com/ory/docs/edit/master/docs/ecosystem/sqa.md",lastUpdatedBy:"hackerman",lastUpdatedAt:1558105892,sidebar:"docs",previous:{title:"Roadmap",permalink:"/docs/ecosystem/roadmap"}},s=[{value:"Data Processing",id:"data-processing",children:[]},{value:"Opt Out",id:"opt-out",children:[]},{value:"Data Privacy",id:"data-privacy",children:[{value:"Identification",id:"identification",children:[]},{value:"Request telemetry",id:"request-telemetry",children:[]},{value:"Source Code",id:"source-code",children:[]},{value:"Data Example",id:"data-example",children:[]}]}],c={rightToc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Our goal is to provide you with the fastest and most reliable open source\nservices. To achieve this goal, we collect metrics on endpoint performance and\nsend a ",Object(r.b)("strong",{parentName:"p"},"fully anonymized"),' telemetry report ("anonymous usage statistics") to\nour servers. This data helps us understand how changes impact performance and\nstability of our open source service and identify potential issues.'),Object(r.b)("p",null,"We are committed to full transparency on what data we transmit why and how. The\nsource code of the telemetry package is completely open source and located\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/x/blob/master/metricsx"}),"here"),". If you do not wish to\nhelp us improve our products by sharing telemetry data, it is possible to\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#opt-out"}),"opt out of this feature"),"."),Object(r.b)("h2",{id:"data-processing"},"Data Processing"),Object(r.b)("p",null,"We want to give you a thorough understanding why we collect this data, how we\ncollect it, and what we do with it, as well as real-world examples of how this\ndata improved a product."),Object(r.b)("p",null,"The data processing pipeline has the following steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Telemetry data is collected at each service."),Object(r.b)("li",{parentName:"ol"},"Periodically this data is sent to the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://segment.com/"}),"segment.com"),"\nAPI."),Object(r.b)("li",{parentName:"ol"},"Segment forwards this data to a private AWS S3 Bucket owned by the ORY\norganization. The data is not shared with any other party."),Object(r.b)("li",{parentName:"ol"},"The AWS S3 Bucket(s) are periodically downloaded onto on of our on-premise\nservers."),Object(r.b)("li",{parentName:"ol"},"The downloaded data is extracted, filtered, processed, and analyzed. The\noutput is a CSV report which we analyze using Open Office.")),Object(r.b)("p",null,"We built this pipeline the data with the following goals:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Be able to say how many production deployments exist.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Understand which features are used and how."),Object(r.b)("li",{parentName:"ul"},"Understand how much throughput deployments handle."),Object(r.b)("li",{parentName:"ul"},"Evaluate how frequently specific features are used."),Object(r.b)("li",{parentName:"ul"},"Detect issues introduced by new features (e.g. buggy releases)."),Object(r.b)("li",{parentName:"ul"},"Identify problems at scale (e.g. slow endpoints)."),Object(r.b)("li",{parentName:"ul"},"Understand which versions are deployed.")),Object(r.b)("p",null,"The following real-world outcomes have been achieved using this data (excerpt):"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"We were able to identify that ORY Hydra's Warden and Policy API were heavily\nunderused and decided to move these APIs to a different product (ORY Keto)\nwhich has been received very well by the community."),Object(r.b)("li",{parentName:"ol"},"A v1.0.0 beta released caused a heavy increase in response times for certain\nenvironments at one Consent API endpoint. We identified that a missing\ndatabase index caused this issue and resolved it in the next patch."),Object(r.b)("li",{parentName:"ol"},"We learned that many developers still run old versions, sometimes with\ncritical security vulnerabilities. To resolve this, we improved the release\nprocess and introduced a release newsletter. Use of vulnerable versions has\ndropped by 20% since then."),Object(r.b)("li",{parentName:"ol"},"A heavy uptake in usage of ORY Keto showed us that we need to provide certain\nmigration tools for an update that introduces breaking changes. We were under\nthe impression that the service was only used in test environments.")),Object(r.b)("h2",{id:"opt-out"},"Opt Out"),Object(r.b)("p",null,"You can opt out of software quality assurance features (telemetry)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"by providing the ",Object(r.b)("inlineCode",{parentName:"li"},"--sqa-opt-out")," flag."),Object(r.b)("li",{parentName:"ul"},"by setting environment variable ",Object(r.b)("inlineCode",{parentName:"li"},"SQA_OPT_OUT=true"),"."),Object(r.b)("li",{parentName:"ul"},"by setting the yaml configuration key (if supported) ",Object(r.b)("inlineCode",{parentName:"li"},"sqa.opt_out=true"),".")),Object(r.b)("p",null,"Disabling telemetry does not have any downsides, except for us not being able to\nimprove the product. Note that ORY always sends minimal ping with version\ninformation once on start up."),Object(r.b)("h2",{id:"data-privacy"},"Data Privacy"),Object(r.b)("p",null,"To protect your privacy, we filter out any data that could identify you or your\nusers. We are taking the following measures to protect your privacy:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"We only transmit information on how often endpoints are requested, how fast\nthey respond and what HTTP status code was sent."),Object(r.b)("li",{parentName:"ol"},"We filter out any query parameters, headers, response and request bodies and\npath parameters. A full list of transmitted URL paths is listed in section\n",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#request-telemetry"}),"Request telemetry"),"."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"We are unable to see or store the IP address of your host"),", as the\n",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ory/x/blob/master/metricsx/middleware.go"}),"IP is set to ",Object(r.b)("inlineCode",{parentName:"a"},"0.0.0.0")),"\nwhen transmitting data to our metrics aggregator."),Object(r.b)("li",{parentName:"ol"},"We do not transmit any environment information from the host, except:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Operating system id (windows, linux, osx)"),Object(r.b)("li",{parentName:"ul"},"The target architecture (amd64, darwin, ...)"),Object(r.b)("li",{parentName:"ul"},"Number of CPUs available"),Object(r.b)("li",{parentName:"ul"},"Binary build time, git hash, git tag"),Object(r.b)("li",{parentName:"ul"},"Memory consumption of the process")),Object(r.b)("p",null,"The information is stored in an aggregated format without any personally\nidentifiable information."),Object(r.b)("h3",{id:"identification"},"Identification"),Object(r.b)("p",null,"To identify an installation and group together clusters, we create a SHA-256\nhash of unique information (e.g. host, port) for identification. Additionally,\neach running instance is identified using an unique identifier which is set\nevery time the service starts. The identifier is a Universally Unique Identifier\n(V4) and is thus a cryptographically safe random string. Identification is\ntriggered when we are confident that the instance is not a test instance (e.g.\none of the tutorials or a local installation)."),Object(r.b)("p",null,"We collect the following system metrics:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"goarch"),": The target architecture of the service binary."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"goos"),": The target system of the service binary."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"numCpu"),": The number of CPUs available."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"runtimeVersion"),": The go version used to create the binary."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"version"),": The version of this binary."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"hash"),": The git hash of this binary."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"buildTime"),": The build time of this binary.")),Object(r.b)("h3",{id:"request-telemetry"},"Request telemetry"),Object(r.b)("p",null,"The ip addresses of both host and client are anonymized to ",Object(r.b)("inlineCode",{parentName:"p"},"0.0.0.0"),". Any\nidentifiable information in the URL path and query is hashed with sha256 using a\nrandomly assigned uuid v4 salt:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/clients/foo")," with salt ",Object(r.b)("inlineCode",{parentName:"li"},"ABCDEFGH")," becomes ",Object(r.b)("inlineCode",{parentName:"li"},'/clients/sha256("foo|ABCDEFGH")'),":\n",Object(r.b)("inlineCode",{parentName:"li"},"/clients/0301424a80469ad03a208de925563a97ec6ab2f9dc7a2ad71b2ded85a7f7a7af")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/policies?owner=foo")," with salt ",Object(r.b)("inlineCode",{parentName:"li"},"ABCDEFGH")," becomes\n",Object(r.b)("inlineCode",{parentName:"li"},'/policies?owner=sha256("foo|ABCDEFGH")'),":\n",Object(r.b)("inlineCode",{parentName:"li"},"/policies?owner=0301424a80469ad03a208de925563a97ec6ab2f9dc7a2ad71b2ded85a7f7a7af"),").")),Object(r.b)("h3",{id:"source-code"},"Source Code"),Object(r.b)("p",null,"The full code-base is ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/metrics-middleware"}),"open source"),"."),Object(r.b)("h3",{id:"data-example"},"Data Example"),Object(r.b)("p",null,"The following code snippet represents two raw event types (",Object(r.b)("inlineCode",{parentName:"p"},"page")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"identify"),") collected by a real ORY Hydra instance:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "context": {\n      "ip": "0.0.0.0",\n      "library": {\n        "name": "analytics-go",\n        "version": "3.0.0"\n      }\n    },\n    "messageId": "21999137-d1d2-4102-9a94-57beed5e5fca",\n    "timestamp": "2018-01-18T18:41:37.028Z",\n    "traits": {\n      "buildTime": "2018-01-18 18:41:35.6222348 +0000 UTC",\n      "goarch": "amd64",\n      "goos": "windows",\n      "hash": "undefined",\n      "instanceId": "c2bdd39c-3b0a-4f3d-b394-8e51f23833c4",\n      "numCpu": 8,\n      "runtimeVersion": "go1.9",\n      "version": "dev-master"\n    },\n    "type": "identify",\n    "userId": "22b137b6aae9bc40feb7ff14a08a1b9ecbc6305f77956214404c5b744c3b3fe2",\n    "writeKey": "yF6PTASTliRjCtRbUnwgsvjrvneqACDM",\n    "sentAt": "2018-01-18T18:41:42.546Z",\n    "integrations": {},\n    "receivedAt": "2018-01-18T18:41:41.972Z",\n    "originalTimestamp": "2018-01-18T19:41:37.6027834+01:00"\n  },\n  {\n    "context": {\n      "ip": "0.0.0.0",\n      "library": {\n        "name": "analytics-go",\n        "version": "3.0.0"\n      }\n    },\n    "messageId": "258f0127-498a-4d71-8c55-ce678a5d92b8",\n    "name": "/clients",\n    "properties": {\n      "latency": 0,\n      "method": "GET",\n      "name": "/clients",\n      "path": "/clients",\n      "size": 154,\n      "status": 401,\n      "url": "http://22b137b6aae9bc40feb7ff14a08a1b9ecbc6305f77956214404c5b744c3b3fe2/clients"\n    },\n    "timestamp": "2018-01-18T18:41:49.537Z",\n    "type": "page",\n    "userId": "22b137b6aae9bc40feb7ff14a08a1b9ecbc6305f77956214404c5b744c3b3fe2",\n    "writeKey": "yF6PTASTliRjCtRbUnwgsvjrvneqACDM",\n    "sentAt": "2018-01-18T18:41:52.547Z",\n    "integrations": {},\n    "receivedAt": "2018-01-18T18:41:51.380Z",\n    "originalTimestamp": "2018-01-18T19:41:50.7046198+01:00"\n  }\n]\n')))}b.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||r;return n?i.a.createElement(m,l({ref:t},c,{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);