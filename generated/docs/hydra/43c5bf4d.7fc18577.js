(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{155:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(1),o=t(9),i=(t(0),t(199)),a={id:"php",title:"PHP"},c={id:"version-v1.4/sdk/php",title:"PHP",description:"> Please note that the PHP SDK is autogenerated and developer experience is not",source:"@site/versioned_docs/version-v1.4/sdk/php.md",permalink:"/hydra/docs/sdk/php",editUrl:"https://github.com/docs/hydra/edit/master/docs/versioned_docs/version-v1.4/sdk/php.md",version:"v1.4",lastUpdatedBy:"hackerman",lastUpdatedAt:1586178985,sidebar:"version-v1.4/docs",previous:{title:"JavaScript",permalink:"/hydra/docs/sdk/js"},next:{title:"Limitations",permalink:"/hydra/docs/limitations"}},p=[{value:"Configuration",id:"configuration",children:[]},{value:"API Usage",id:"api-usage",children:[]},{value:"API Docs",id:"api-docs",children:[]}],s={rightToc:p};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Please note that the PHP SDK is autogenerated and developer experience is not\ngreat.")),Object(i.b)("p",null,"To install the PHP SDK using ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://getcomposer.org"}),"Composer"),", run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"composer require ory/hydra-client\n")),Object(i.b)("h3",{id:"configuration"},"Configuration"),Object(i.b)("h4",{id:"basic-configuration"},"Basic configuration"),Object(i.b)("p",null,"Below is a basic configuration that demonstrates how to set the admin and public\nhost. Please note that you need to set the host everytime you want to switch\nbetween the admin and public host."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),'<?php\n\nrequire_once __DIR__ . "/vendor/autoload.php";\n\nuse HydraSDK\\Configuration;\nuse HydraSDK\\Api\\AdminApi;\nuse HydraSDK\\Api\\PublicApi;\n\n$config = new Configuration();\n// Configure Admin API\n$config->getDefaultConfiguration()->setHost("http://localhost:4445");\n$adminApi = new AdminApi();\n\n// Configure Public API\n$config->getDefaultConfiguration()->setHost("http://localhost:4444");\n$publicApi = new PublicApi();\n')),Object(i.b)("h3",{id:"api-usage"},"API Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"<?php\nrequire_once(__DIR__ . '/vendor/autoload.php');\n\nuse HydraSDK\\ApiException;\nuse HydraSDK\\Configuration;\nuse HydraSDK\\Api\\AdminApi;\nuse HydraSDK\\Api\\PublicApi;\n\ntry {\n  $config = new Configuration();\n  // Configure Admin API\n  $config->getDefaultConfiguration()->setHost(\"http://localhost:4445\");\n  $adminApi = new AdminApi();\n\n  // List OAuth2 Clients (Admin API)\n  $clients = $adminApi->listOAuth2Clients();\n  print_r($clients);\n\n  // Configure Public API\n  $config->getDefaultConfiguration()->setHost(\"http://localhost:4444\");\n  $publicApi = new PublicApi();\n\n  // Discover OpenID Connect Configuration (Public API)\n  $connect = $publicApi->discoverOpenIDConfiguration();\n  print_r($connect);\n} catch (ApiException $e) {\n  echo 'Exception occurred: ', $e->getMessage(), PHP_EOL;\n}\n?>\n")),Object(i.b)("h3",{id:"api-docs"},"API Docs"),Object(i.b)("p",null,"API docs are available\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ory/hydra/blob/master/sdk/php/swagger/README.md"}),"here"),".\nPlease note that those docs are generated and may introduce bugs if code\nexamples are used 1:1."))}u.isMDXComponent=!0},199:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},l=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(t),b=r,f=l["".concat(a,".").concat(b)]||l[b]||d[b]||i;return t?o.a.createElement(f,c({ref:n},s,{components:t})):o.a.createElement(f,c({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);