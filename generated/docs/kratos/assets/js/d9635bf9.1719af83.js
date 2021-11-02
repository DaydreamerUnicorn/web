(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[28272],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var h=a.createContext({}),l=function(e){var r=a.useContext(h),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return a.createElement(h.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,h=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(t),d=n,f=p["".concat(h,".").concat(d)]||p[d]||u[d]||o;return t?a.createElement(f,s(s({ref:r},c),{},{components:t})):a.createElement(f,s({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=p;var i={};for(var h in r)hasOwnProperty.call(r,h)&&(i[h]=r[h]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},17625:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return h},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=t(22122),n=t(19756),o=(t(67294),t(3905)),s=["components"],i={id:"kratos-hashers-argon2-hash",title:"kratos hashers argon2 hash",description:"kratos hashers argon2 hash Hash a list of passwords for benchmarking the hashing parameters"},h=void 0,l={unversionedId:"cli/kratos-hashers-argon2-hash",id:"version-v0.6/cli/kratos-hashers-argon2-hash",isDocsHomePage:!1,title:"kratos hashers argon2 hash",description:"kratos hashers argon2 hash Hash a list of passwords for benchmarking the hashing parameters",source:"@site/versioned_docs/version-v0.6/cli/kratos-hashers-argon2-hash.md",sourceDirName:"cli",slug:"/cli/kratos-hashers-argon2-hash",permalink:"/kratos/docs/v0.6/cli/kratos-hashers-argon2-hash",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/cli/kratos-hashers-argon2-hash.md",tags:[],version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619690398,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"kratos-hashers-argon2-hash",title:"kratos hashers argon2 hash",description:"kratos hashers argon2 hash Hash a list of passwords for benchmarking the hashing parameters"},sidebar:"version-v0.6/docs",previous:{title:"kratos hashers argon2 calibrate",permalink:"/kratos/docs/v0.6/cli/kratos-hashers-argon2-calibrate"},next:{title:"kratos hashers argon2 load-test",permalink:"/kratos/docs/v0.6/cli/kratos-hashers-argon2-load-test"}},c=[{value:"kratos hashers argon2 hash",id:"kratos-hashers-argon2-hash",children:[{value:"Options",id:"options",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],u={toc:c};function p(e){var r=e.components,t=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"kratos-hashers-argon2-hash"},"kratos hashers argon2 hash"),(0,o.kt)("p",null,"Hash a list of passwords for benchmarking the hashing parameters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kratos hashers argon2 hash &lt;password1&gt; [&lt;password2&gt; ...] [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -c, --config strings                Path to one or more .json, .yaml, .yml, .toml config files. Values are loaded in the order provided, meaning that the last config file overwrites values from the previous config file.\n      --dedicated-memory byte_size    Amount of memory dedicated for password hashing. Kratos will try to not consume more memory. (default 1.00GB)\n      --expected-deviation duration   Expected deviation of the time a hashing operation (~login request) takes. (default 500ms)\n  -h, --help                          help for hash\n      --iterations uint32             Number of iterations to start probing at. (default 1)\n      --key-length uint32             Length of the key in bytes. (default 32)\n      --memory byte_size              Memory to use. (default 128.00MB)\n      --min-duration duration         Minimal duration a hashing operation (~login request) takes. (default 500ms)\n      --parallel                      Run all hashing operations in parallel.\n      --parallelism uint8             Number of threads to use. (default 72)\n      --salt-length uint32            Length of the salt in bytes. (default 16)\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kratos-hashers-argon2"},"kratos hashers argon2")," -")))}p.isMDXComponent=!0}}]);