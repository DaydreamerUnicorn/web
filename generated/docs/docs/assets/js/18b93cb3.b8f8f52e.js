(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[3042,2707],{351:function(e,t,n){"use strict";n.r(t);var r=n(7294),l=n(2263),a=n(6742),o=n(1391),m=n(907);t.default=function(){var e,t=(0,l.Z)().siteConfig,n=(0,m.gB)(),c=(0,m.yW)(),i=n.find((function(e){return"current"===e.name})),s=n.filter((function(e){return e!==c&&"current"!==e.name})),u="https://github.com/"+t.organizationName+"/"+t.projectName,E="ORY "+((e=t.projectName).charAt(0).toUpperCase()+e.slice(1));return r.createElement(o.Z,{title:"Versions",permalink:"/versions",description:"Overview of all "+E+" documentation versions."},r.createElement("main",{className:"container margin-vert--lg"},r.createElement("h1",null,E," documentation versions"),r.createElement("div",{className:"margin-bottom--lg"},r.createElement("h3",{id:"next"},"Current version (Stable)"),r.createElement("p",null,"Here you can find the documentation for current released version."),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,c.name),r.createElement("td",null,r.createElement(a.Z,{to:c.path},"Documentation")),r.createElement("td",null,r.createElement("a",{href:u+"/blob/master/CHANGELOG.md"},"Changelog")))))),i!==c&&r.createElement("div",{className:"margin-bottom--lg"},r.createElement("h3",{id:"next"},"Next version (Unreleased)"),r.createElement("p",null,"Here you can find the documentation for unreleased version."),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,"next"),r.createElement("td",null,r.createElement(a.Z,{to:i.path},"Documentation")),r.createElement("td",null,r.createElement("a",{href:u},"Source Code")))))),s.length>0&&r.createElement("div",{className:"margin-bottom--lg"},r.createElement("h3",{id:"archive"},"Past versions (Not maintained anymore)"),r.createElement("p",null,"Here you can find documentation for previous versions."),r.createElement("table",null,r.createElement("tbody",null,s.map((function(e){return r.createElement("tr",{key:e.name},r.createElement("th",null,e.label),r.createElement("td",null,r.createElement(a.Z,{to:e.path},"Documentation")),r.createElement("td",null,r.createElement("a",{href:u+"/blob/master/CHANGELOG.md"},"Changelog")))})))))))}},546:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(2122),l=n(9756),a=n(7294),o=n(6010),m=n(6742),c=n(9306),i=n(4996),s="footerLogoLink_qW4Z";function u(e){var t=e.to,n=e.href,o=e.label,c=e.prependBaseUrlToHref,s=(0,l.Z)(e,["to","href","label","prependBaseUrlToHref"]),u=(0,i.Z)(t),E=(0,i.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(m.Z,(0,r.Z)({className:"footer__link-item"},n?{target:"_blank",rel:"noopener noreferrer",href:c?E:n}:{to:u},s),o)}var E=function(e){var t=e.url,n=e.alt;return a.createElement("img",{className:"footer__logo",alt:n,src:t})};var f=function(){var e=(0,c.LU)().footer,t=e||{},n=t.copyright,r=t.links,l=void 0===r?[]:r,m=t.logo,f=void 0===m?{}:m,d=(0,i.Z)(f.src);return e?a.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},l&&l.length>0&&a.createElement("div",{className:"row footer__links"},l.map((function(e,t){return a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(u,e))}))):null)}))),(f||n)&&a.createElement("div",{className:"text--center"},f&&f.src&&a.createElement("div",{className:"margin-bottom--sm"},f.href?a.createElement("a",{href:f.href,target:"_blank",rel:"noopener noreferrer",className:s},a.createElement(E,{alt:f.alt,url:d})):a.createElement(E,{alt:f.alt,url:d})),a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})))):null}}}]);