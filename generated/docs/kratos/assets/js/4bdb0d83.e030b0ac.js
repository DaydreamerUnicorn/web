(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{176:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(8),i=(t(0),t(452)),a={id:"configuring",title:"Configuring"},c={unversionedId:"configuring",id:"configuring",isDocsHomePage:!1,title:"Configuring",description:"This document describes how the service can be configured. For a documentation",source:"@site/docs/configuring.md",slug:"/configuring",permalink:"/kratos/docs/next/configuring",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/configuring.md",version:"current",lastUpdatedBy:"Patrik",lastUpdatedAt:1596634577,formattedLastUpdatedAt:"8/5/2020",sidebar:"docs",previous:{title:"Installation",permalink:"/kratos/docs/next/install"},next:{title:"Contribution Guidelines",permalink:"/kratos/docs/next/contributing"}},l=[{value:"Configuration File",id:"configuration-file",children:[]},{value:"Environmental Variables",id:"environmental-variables",children:[]}],s={toc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document describes ",Object(i.b)("em",{parentName:"p"},"how")," the service can be configured. For a documentation\non all configuration values head over to the\n",Object(i.b)("a",{parentName:"p",href:"/kratos/docs/next/reference/configuration"},"configuration reference"),"."),Object(i.b)("h2",{id:"configuration-file"},"Configuration File"),Object(i.b)("p",null,"Files in the format of JSON, YAML and TOML are supported. When starting Kratos\nyou specify the path to the config file via the ",Object(i.b)("inlineCode",{parentName:"p"},"--config")," flag. For more\nin-depth info run ",Object(i.b)("inlineCode",{parentName:"p"},"kratos help"),". We recommend you name your configuration file\n",Object(i.b)("inlineCode",{parentName:"p"},"kratos.(json|yml|yaml|toml)"),". This will enable automatic validation and code\ncompletion in VSCode, JetBrains' IDEs and other tools that utilise\n",Object(i.b)("a",{parentName:"p",href:"https://www.schemastore.org/json/"},"schemastore.org")," JSON schemas. Alternatively\nyou can add the schema mapping manually as well. It is recommended to prevent\nleaking of secrets by setting sensitive values via environmental variables as\ndescribed in the following section."),Object(i.b)("h2",{id:"environmental-variables"},"Environmental Variables"),Object(i.b)("p",null,"Environmental variables take precedence over config file values. Nested paths\nget mapped to config values by putting an underscore ",Object(i.b)("inlineCode",{parentName:"p"},"_")," between every level,\ne.g. ",Object(i.b)("inlineCode",{parentName:"p"},"selfservice.flows.settings.ui_url")," becomes\n",Object(i.b)("inlineCode",{parentName:"p"},"SELFSERVICE_FLOWS_SETTINGS_UI_URL=<value>"),"."),Object(i.b)("p",null,"Please note that there are some caveats when using env vars\n",Object(i.b)("a",{parentName:"p",href:"https://www.ory.sh/docs/ecosystem/configuring"},"documented here"),"."))}u.isMDXComponent=!0},452:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,m=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return t?o.a.createElement(m,c(c({ref:n},s),{},{components:t})):o.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);