(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(91)),o={id:"api-design",title:"API Design"},c={unversionedId:"ecosystem/api-design",id:"ecosystem/api-design",isDocsHomePage:!1,title:"API Design",description:"This chapter contains generally applicable information on API design. When using",source:"@site/docs/ecosystem/api-design.md",slug:"/ecosystem/api-design",permalink:"/ecosystem/docs/ecosystem/api-design",editUrl:"https://github.com/ory/docs/edit/master/docs/docs/ecosystem/api-design.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1605884240},l=[{value:"Pagination",id:"pagination",children:[{value:"Total Count",id:"total-count",children:[]}]},{value:"Date Format",id:"date-format",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This chapter contains generally applicable information on API design. When using\nOry services, one can expect a consistent experience when interacting with REST\nAPIs."),Object(i.b)("h2",{id:"pagination"},"Pagination"),Object(i.b)("p",null,"On REST endpoints that are explicitly labeled as such, pagination information is\navailable through the ",Object(i.b)("inlineCode",{parentName:"p"},"Link")," HTTP header."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Link")," header contains a comma-delimited list of links to the following\npages (where applicable):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"First"),Object(i.b)("li",{parentName:"ul"},"Next"),Object(i.b)("li",{parentName:"ul"},"Previous (prev)"),Object(i.b)("li",{parentName:"ul"},"Last")),Object(i.b)("p",null,"Pages are created based on the values of ",Object(i.b)("inlineCode",{parentName:"p"},"limit")," and ",Object(i.b)("inlineCode",{parentName:"p"},"offset")," provided in the\nquerystring, where ",Object(i.b)("inlineCode",{parentName:"p"},"limit")," is the page size, and ",Object(i.b)("inlineCode",{parentName:"p"},"offset")," is the current item."),Object(i.b)("p",null,"In most scenarios, the ",Object(i.b)("inlineCode",{parentName:"p"},"offset")," should be a multiple of the ",Object(i.b)("inlineCode",{parentName:"p"},"limit"),"."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'> GET hydra-admin/clients?limit=5&offset=10 HTTP/1.1\n> Host: localhost:4445\n> User-Agent: curl/7.64.1\n> Accept: */*\n>\n< HTTP/1.1 200 OK\n< Content-Type: application/json\n< Link: <hydra-admin/clients?limit=5&offset=0>; rel="first",</clients?limit=5&offset=15>; rel="next",</clients?limit=5&offset=5>; rel="prev",</clients?limit=5&offset=20>; rel="last"\n< X-Total-Count: 123\n< Date: Mon, 22 Apr 2019 23:34:29 GMT\n< Transfer-Encoding: chunked\n<\n[...]\n')),Object(i.b)("h3",{id:"total-count"},"Total Count"),Object(i.b)("p",null,"You can get the total item count from the ",Object(i.b)("inlineCode",{parentName:"p"},"X-Total-Count")," HTTP Header."),Object(i.b)("h2",{id:"date-format"},"Date Format"),Object(i.b)("p",null,"ORY's APIs use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc3339"}),"rfc3339")," as the date\nformat:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n  "created_at": "2006-01-02T15:04:05Z07:00"\n}\n')))}p.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);