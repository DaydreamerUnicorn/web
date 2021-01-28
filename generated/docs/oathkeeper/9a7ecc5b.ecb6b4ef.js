(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(124)),i=t(127),c={id:"configure-deploy",title:"Configure and Deploy"},s={unversionedId:"configure-deploy",id:"configure-deploy",isDocsHomePage:!1,title:"Configure and Deploy",description:"The ORY Oathkeeper HTTP serve process oathkeeper serve opens two ports",source:"@site/docs/configure-deploy.md",slug:"/configure-deploy",permalink:"/oathkeeper/docs/next/configure-deploy",editUrl:"https://github.com/ory/oathkeeper/edit/master/docs/docs/configure-deploy.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1611739738,sidebar:"docs",previous:{title:"Error Handlers",permalink:"/oathkeeper/docs/next/pipeline/error"},next:{title:"Connect to ORY Hydra OAuth2 Token Introspection",permalink:"/oathkeeper/docs/next/oauth2-token-introspection-hydra"}},l=[{value:"Configure",id:"configure",children:[{value:"Access Rules",id:"access-rules",children:[]},{value:"Cryptographic Keys",id:"cryptographic-keys",children:[]},{value:"Dockerfile",id:"dockerfile",children:[]}]},{value:"Build &amp; Run",id:"build--run",children:[]},{value:"Authorizing Requests",id:"authorizing-requests",children:[]},{value:"Monitoring",id:"monitoring",children:[]}],p={rightToc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ORY Oathkeeper HTTP serve process ",Object(o.b)("inlineCode",{parentName:"p"},"oathkeeper serve")," opens two ports\nexposing the"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/oathkeeper/docs/next/#reverse-proxy"}),"reverse proxy")),Object(o.b)("li",{parentName:"ul"},"REST API which serves the\n",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/oathkeeper/docs/next/#access-control-decision-api"}),"Access Control Decision API")," as well as\nother API endpoints such as health checks, JSON Web Key Sets, and a list of\navailable rules.")),Object(o.b)("p",null,"For this guide we are using Docker. ORY Oathkeeper however can be\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/oathkeeper/docs/next/install"}),"installed in a variety of ways"),"."),Object(o.b)("h2",{id:"configure"},"Configure"),Object(o.b)("p",null,"ORY Oathkeeper can be configured via the filesystem as well as environment\nvariables. For more information on mapping the keys to environment variables\nplease head over to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/oathkeeper/docs/next/reference/configuration"}),"configuration chapter"),"."),Object(o.b)("p",null,"First, create an empty directory and ",Object(o.b)("inlineCode",{parentName:"p"},"cd")," into it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ mkdir oathkeeper-demo\n$ cd oathkeeper-demo\n")),Object(o.b)("p",null,"Create a file called ",Object(o.b)("inlineCode",{parentName:"p"},"config.yaml")," with the following content:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'$ cat << EOF > config.yaml\nserve:\n  proxy:\n    port: 4455 # run the proxy at port 4455\n  api:\n    port: 4456 # run the api at port 4456\n\naccess_rules:\n  repositories:\n    - file:///rules.json\n\nerrors:\n  fallback:\n    - json\n  handlers:\n    json:\n      enabled: true\n      config:\n        verbose: true\n    redirect:\n      enabled: true\n      config:\n        to: https://www.ory.sh/docs\n\nmutators:\n  header:\n    enabled: true\n    config:\n      headers:\n        X-User: "{{ print .Subject }}"\n        # You could add some other headers, for example with data from the\n        # session.\n        # X-Some-Arbitrary-Data: "{{ print .Extra.some.arbitrary.data }}"\n  noop:\n    enabled: true\n  id_token:\n    enabled: true\n    config:\n      issuer_url: http://localhost:4455/\n      jwks_url: file:///jwks.json\n\nauthorizers:\n  allow:\n    enabled: true\n  deny:\n    enabled: true\n\nauthenticators:\n  anonymous:\n    enabled: true\n    config:\n      subject: guest\nEOF\n')),Object(o.b)("p",null,"This configuration file will run the proxy at port 4455, the api at port 4456,\nand enable the anonymous authenticator, the allow and deny authorizers, and the\nnoop and id_token mutators."),Object(o.b)("h3",{id:"access-rules"},"Access Rules"),Object(o.b)("p",null,"We will be using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://httpbin.org"}),"httpbin.org")," as the upstream server. The\nservice echoes incoming HTTP Requests and is perfect for seeing how ORY\nOathkeeper works. Let's define three rules:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"An access rule that allowing anonymous access to\n",Object(o.b)("inlineCode",{parentName:"li"},"https://httpbin.org/anything/header")," and using the ",Object(o.b)("inlineCode",{parentName:"li"},"header")," mutator."),Object(o.b)("li",{parentName:"ol"},"An access rule denying every access to ",Object(o.b)("inlineCode",{parentName:"li"},"https://httpbin.org/anything/deny"),".\nIf the request header has ",Object(o.b)("inlineCode",{parentName:"li"},"Accept: application/json"),", we will receive a JSON\nresponse. If however the accept header has ",Object(o.b)("inlineCode",{parentName:"li"},"Accept: text/*"),", a HTTP Redirect\nwill be sent (to ",Object(o.b)("inlineCode",{parentName:"li"},"https://www.ory.sh/docs")," as configured above)."),Object(o.b)("li",{parentName:"ol"},"An access rule allowing anonymous access to\n",Object(o.b)("inlineCode",{parentName:"li"},"https://httpbin.org/anything/id_token")," using the ",Object(o.b)("inlineCode",{parentName:"li"},"id_token")," mutator.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'$ cat << EOF > rules.json\n[\n  {\n    "id": "allow-anonymous-with-header-mutator",\n    "version": "v0.36.0-beta.4",\n    "upstream": {\n      "url": "https://httpbin.org/anything/header"\n    },\n    "match": {\n      "url": "http://<127.0.0.1|localhost>:4455/anything/header",\n      "methods": [\n        "GET"\n      ]\n    },\n    "authenticators": [\n      {\n        "handler": "anonymous"\n      }\n    ],\n    "authorizer": {\n      "handler": "allow"\n    },\n    "mutators": [\n      {\n        "handler": "header",\n        "config": {\n          "headers": {\n            "X-User": "{{ print .Subject }}"\n          }\n        }\n      }\n    ]\n  },\n  {\n    "id": "deny-anonymous",\n    "version": "v0.36.0-beta.4",\n    "upstream": {\n      "url": "https://httpbin.org/anything/deny"\n    },\n    "match": {\n      "url": "http://<127.0.0.1|localhost>:4455/anything/deny",\n      "methods": [\n        "GET"\n      ]\n    },\n    "authenticators": [\n      {\n        "handler": "anonymous"\n      }\n    ],\n    "authorizer": {\n      "handler": "deny"\n    },\n    "mutators": [\n      {\n        "handler": "noop"\n      }\n    ],\n    "errors": [\n      {\n        "handler": "json",\n        "config": {\n          "when": [\n            {\n              "request": {\n                "header": {\n                  "accept": ["application/json"]\n                }\n              }\n            }\n          ]\n        }\n      },\n      {\n        "handler": "redirect",\n        "config": {\n          "when": [\n            {\n              "request": {\n                "header": {\n                  "accept": ["text/*"]\n                }\n              }\n            }\n          ]\n        }\n      }\n    ]\n  },\n  {\n    "id": "allow-anonymous-with-id-token-mutator",\n    "version": "v0.36.0-beta.4",\n    "upstream": {\n      "url": "https://httpbin.org/anything/id_token"\n    },\n    "match": {\n      "url": "http://<127.0.0.1|localhost>:4455/anything/id_token",\n      "methods": [\n        "GET"\n      ]\n    },\n    "authenticators": [\n      {\n        "handler": "anonymous"\n      }\n    ],\n    "authorizer": {\n      "handler": "allow"\n    },\n    "mutators": [\n      {\n        "handler": "id_token"\n      }\n    ]\n  }\n]\nEOF\n')),Object(o.b)("h3",{id:"cryptographic-keys"},"Cryptographic Keys"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"id_token")," mutator creates a signed JSON Web Token. For that to work, a\npublic/private key is required. Luckily, ORY Oathkeeper can assist you in\ncreating such keys. All common JWT algorithms are supported (RS256, ES256,\nHS256, ...). Let's generate a key for the RS256 algorithm that will be used by\nthe id_token mutator:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ docker run oryd/oathkeeper:v0.38.6-beta.1 credentials generate --alg RS256 > jwks.json\n")),Object(o.b)("h3",{id:"dockerfile"},"Dockerfile"),Object(o.b)("p",null,"Next we will be creating a custom Docker Image that adds these configuration\nfiles to the image:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ cat << EOF > Dockerfile\nFROM oryd/oathkeeper:v0.38.6-beta.1\n\nADD config.yaml /config.yaml\nADD rules.json /rules.json\nADD jwks.json /jwks.json\nEOF\n")),Object(o.b)("p",null,"We are doing this for demonstration purposes only. In a production environment\nyou would separate these configuration values from the build artifact itself. In\nKuberentes, it would make most sense to provide the JSON Web Keys as a\nKubernetes Secret mounted as in a directory, for example."),Object(o.b)("p",null,"We encourage you to check out our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://k8s.ory.sh/helm/"}),"helm charts")," which\napply these best practices."),Object(o.b)("h2",{id:"build--run"},"Build & Run"),Object(o.b)("p",null,"Before building the Docker Image, we need to make sure that the local ORY\nOathkeeper Docker Image is on the most recent version:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ docker pull oryd/oathkeeper:v0.38.6-beta.1\n")),Object(o.b)("p",null,"Next we will build our custom Docker Image"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ docker build -t ory-oathkeeper-demo .\n")),Object(o.b)("p",null,"and run it"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker run --rm \\\n  --name ory-oathkeeper-demo \\\n  -p 4455:4455 \\\n  -p 4456:4456 \\\n  ory-oathkeeper-demo \\\n  --config /config.yaml \\\n  serve\n")),Object(o.b)("p",null,"Let's open a new terminal and check if it is alive:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'$ curl http://127.0.0.1:4456/health/alive\n{"status":"ok"}\n\n$ curl http://127.0.0.1:4456/health/ready\n{"status":"ok"}\n')),Object(o.b)("p",null,"Let's also check if the rules have been imported properly:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'$ curl http://127.0.0.1:4456/rules\n[{"id":"allow-anonymous-with-header-mutator","description":"","match":{"methods":["GET"],...\n')),Object(o.b)("h2",{id:"authorizing-requests"},"Authorizing Requests"),Object(o.b)("p",null,"Everything is up and running and configured! Let's make some requests:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'$ curl -X GET http://127.0.0.1:4455/anything/header\n{\n  "args": {},\n  "data": "",\n  "files": {},\n  "form": {},\n  "headers": {\n    "Accept": "*/*",\n    "Accept-Encoding": "gzip",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.54.0",\n    "X-User": "guest"\n  },\n  "json": null,\n  "method": "GET",\n  "origin": "172.17.0.1, 82.135.11.242, 172.17.0.1",\n  "url": "https://httpbin.org/anything/header/anything/header"\n}\n\n# Make request and accept JSON (we get an error response)\n$ curl -H "Accept: application/json" -X GET http://127.0.0.1:4455/anything/deny\n{\n  "error":{\n    "code":403,\n    "status":"Forbidden",\n    "message":"Access credentials are not sufficient to access this resource"\n  }\n}\n\n# Make request and accept text/* (we get a redirect response).\n$ curl -H "Accept: text/html" -X GET http://127.0.0.1:4455/anything/deny\n<a href="https://www.ory.sh/docs">Found</a>.\n\n$ curl -X GET http://127.0.0.1:4455/anything/id_token\n{\n  "args": {},\n  "data": "",\n  "files": {},\n  "form": {},\n  "headers": {\n    "Accept": "*/*",\n    "Accept-Encoding": "gzip",\n    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjU3N2E2NWE0LTUzM2YtNDFhYi1hODI2LTgxNDliMDM2NDQ0MyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTgwMTg1MTcsImlhdCI6MTU1ODAxODQ1NywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo0NDU1LyIsImp0aSI6IjExNmRiNzhmLTQyMjEtNDU2ZC05OWIzLTY4NGJkMWVjYThjZSIsIm5iZiI6MTU1ODAxODQ1Nywic3ViIjoiZ3Vlc3QifQ.2VKW-oYtzkFGRPgK3sb4iRlObDSzW8PyHzgNiQubppFSlp0bzJLl4Rnt56orJndPqIa7hwsm8YIskf-Wp-FA1piv-aG_XljkUjgilKr3cncMXDP15yDRwZj8g0iVKEhnugQsw_zWf5gMU2YBev2Eyv4xciJxbhrKCat-X8xNT9SvAbwpY-VxQdu_rnpu1GKCA54DyIX6r-Qh5bQPrrT7NvIupA7jJQ23qq83m4C1cQfBgzlhm7dcCuPqKunYKRsc7NZuER3lT6TjkhsF1qhf7o7BZmCnhz6VuH8L8TwMZS8IJWKSjJd8dEKKwxwPkNXOcZO8A3hIO8SZx4Yd7jrONA",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.54.0"\n  },\n  "json": null,\n  "method": "GET",\n  "origin": "172.17.0.1, 82.135.11.242, 172.17.0.1",\n  "url": "https://httpbin.org/anything/id_token/anything/id_token"\n}\n')),Object(o.b)("p",null,"That's it! You can now clean up the demo using:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker rm -f ory-oathkeeper-demo\n$ docker rmi -f ory-oathkeeper-demo\n$ rm -rf oathkeeper-demo\n")),Object(o.b)("h2",{id:"monitoring"},"Monitoring"),Object(o.b)("p",null,"Oathkeeper provides an endpoint for Prometheus to scrape as a target. This\nendpoint can be accessed by default at:\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:9000/metrics"}),"http://localhost:9000/metrics"),":"),Object(o.b)("p",null,"You can adjust the settings within Oathkeeper's config."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ cat << EOF > config.yaml\nserve:\n  prometheus:\n    port: 9000\n    host: localhost\n    metrics_path: /metrics\nEOF\n")),Object(o.b)("p",null,"Prometheus can easily be run as a docker container. More information are\navailable on\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/prometheus/prometheus"}),"https://github.com/prometheus/prometheus"),".\nStart with setting up a prometheus configuration:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ cat << EOF > prometheus.yml\nglobal:\n  scrape_interval: 15s # By default, scrape targets every 15 seconds.\n\nscrape_configs:\n  - job_name: 'prometheus'\n    scrape_interval: 15s\n    static_configs:\n      - targets: ['localhost:9090']\n  - job_name: 'oathkeeper'\n    scrape_interval: 15s\n    metrics_path: /metrics\n    static_configs:\n      # The target needs to match what you've configured above\n      - targets: ['localhost:9000']\n")),Object(o.b)("p",null,"Then start the prometheus server and access it on\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:9090"}),"http://localhost:9090"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ docker run \\\n  --config.file=/etc/prometheus/prometheus.yml \\\n  -v ./prometheus.yml:/etc/prometheus/prometheus.yml \\\n  --name prometheus \\\n  -d \\\n  --net=host\n  -p 9090:9090 \\\n  prom/prometheus\n")),Object(o.b)("p",null,"Now where you have a basic monitoring setup running you can extend it by\nbuilding up nice visualizations eg. using Grafana. More information are\navailable on\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://prometheus.io/docs/visualization/grafana/"}),"https://prometheus.io/docs/visualization/grafana/"),"."),Object(o.b)("p",null,"We have a pre built Dashboard which you can use to get started quickly:\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ory/oathkeeper/tree/master/contrib/grafana/Oathkeeper-Dashboard.json"}),"Oathkeeper-Dashboard.json"),"."),Object(o.b)("img",{alt:"ORY Oathkeeper with Prometheus and Grafana",src:Object(i.a)("img/docs/grafana.png")}))}u.isMDXComponent=!0},124:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,d=u["".concat(i,".").concat(b)]||u[b]||h[b]||o;return t?a.a.createElement(d,c(c({ref:n},l),{},{components:t})):a.a.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},127:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return i}));var r=t(20),a=t(130);function o(){var e=Object(r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,l=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(c)return n+t;var p=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+p:p}(o,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},130:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}))}}]);