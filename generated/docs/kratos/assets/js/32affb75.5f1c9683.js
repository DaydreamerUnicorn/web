(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[61761],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},15692:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var r=t(22122),o=t(19756),i=(t(67294),t(3905)),a=["components"],c={id:"configuring",title:"Configuring"},s=void 0,l={unversionedId:"configuring",id:"version-v0.8/configuring",isDocsHomePage:!1,title:"Configuring",description:"This document describes how the service can be configured. For a documentation",source:"@site/versioned_docs/version-v0.8/configuring.md",sourceDirName:".",slug:"/configuring",permalink:"/kratos/docs/configuring",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.8/configuring.md",tags:[],version:"v0.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1635084599,formattedLastUpdatedAt:"10/24/2021",frontMatter:{id:"configuring",title:"Configuring"},sidebar:"version-v0.8/docs",previous:{title:"Installation",permalink:"/kratos/docs/install"},next:{title:"Contribution Guidelines",permalink:"/kratos/docs/contributing"}},u=[{value:"Configuration File",id:"configuration-file",children:[]},{value:"Environmental Variables",id:"environmental-variables",children:[]}],p={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes ",(0,i.kt)("em",{parentName:"p"},"how")," the service can be configured. For a documentation\non all configuration values head over to the\n",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/reference/configuration"},"configuration reference"),"."),(0,i.kt)("h2",{id:"configuration-file"},"Configuration File"),(0,i.kt)("p",null,"Files in the format of JSON, YAML and TOML are supported. When starting Kratos\nyou specify the path to the config file via the ",(0,i.kt)("inlineCode",{parentName:"p"},"--config")," flag. For more\nin-depth info run ",(0,i.kt)("inlineCode",{parentName:"p"},"kratos help"),". We recommend you name your configuration file\n",(0,i.kt)("inlineCode",{parentName:"p"},"kratos.(json|yml|yaml|toml)"),". This will enable automatic validation and code\ncompletion in VSCode, JetBrains' IDEs and other tools that utilise\n",(0,i.kt)("a",{parentName:"p",href:"https://www.schemastore.org/json/"},"schemastore.org")," JSON schemas. Alternatively\nyou can add the schema mapping manually as well. It is recommended to prevent\nleaking of secrets by setting sensitive values via environmental variables as\ndescribed in the following section."),(0,i.kt)("h2",{id:"environmental-variables"},"Environmental Variables"),(0,i.kt)("p",null,"Environmental variables take precedence over config file values. Nested paths\nget mapped to config values by putting an underscore ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," between every level,\ne.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"selfservice.flows.settings.ui_url")," becomes\n",(0,i.kt)("inlineCode",{parentName:"p"},"SELFSERVICE_FLOWS_SETTINGS_UI_URL=<value>"),"."),(0,i.kt)("p",null,"Please note that there are some caveats when using env vars\n",(0,i.kt)("a",{parentName:"p",href:"https://www.ory.sh/docs/ecosystem/configuring"},"documented here"),"."))}f.isMDXComponent=!0}}]);