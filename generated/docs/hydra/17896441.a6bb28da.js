(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{224:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(261),i=a(226),c=a(227),m=a(230);var o=function(e){var t=e.metadata;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(m.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(m.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var s=function(e,t,a){var l=Object(n.useState)(void 0),r=l[0],i=l[1];Object(n.useEffect)((function(){var n=[],l=[];function c(){var c=function(){var e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){var l=n[e],r=l.getBoundingClientRect().top;r>=0&&r<=a&&(t=l),e+=1}return t}();if(c){var m=0,o=!1;for(l=document.getElementsByClassName(e);m<l.length&&!o;){var s=l[m],d=s.href,v=decodeURIComponent(d.substring(d.indexOf("#")+1));c.id===v&&(r&&r.classList.remove(t),s.classList.add(t),i(s),o=!0),m+=1}}}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}))},d=a(229),v=a(144),E=a.n(v);function u(e){var t=e.headings;return s("table-of-contents__link","table-of-contents__link--active",100),l.a.createElement("div",{className:"col col--3"},l.a.createElement("div",{className:E.a.tableOfContents},l.a.createElement(g,{headings:t})))}function g(e){var t=e.headings,a=e.isChild;return t.length?l.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:"table-of-contents__link",dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(g,{isChild:!0,headings:e.children}))}))):null}t.default=function(e){var t,a=Object(i.a)().siteConfig,n=void 0===a?{}:a,s=n.url,v=n.title,g=e.content,p=g.metadata,h=p.description,f=p.title,_=p.permalink,b=p.editUrl,N=p.lastUpdatedAt,w=p.lastUpdatedBy,k=p.version,y=p.latestVersionMainDocPermalink,x=g.frontMatter,C=x.image,L=x.keywords,O=x.hide_title,j=x.hide_table_of_contents,I=f?f+" | "+v:v,T=Object(c.a)(C,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,I),l.a.createElement("meta",{property:"og:title",content:I}),h&&l.a.createElement("meta",{name:"description",content:h}),h&&l.a.createElement("meta",{property:"og:description",content:h}),L&&L.length&&l.a.createElement("meta",{name:"keywords",content:L.join(",")}),C&&l.a.createElement("meta",{property:"og:image",content:T}),C&&l.a.createElement("meta",{property:"twitter:image",content:T}),C&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+f}),_&&l.a.createElement("meta",{property:"og:url",content:s+_}),_&&l.a.createElement("link",{rel:"canonical",href:s+_})),l.a.createElement("div",{className:Object(d.a)("container padding-vert--lg",E.a.docItemWrapper)},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(d.a)("col",(t={},t[E.a.docItemCol]=!j,t))},y&&l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"next"===k?l.a.createElement("div",null,"This is unreleased documentation for ",v," ",l.a.createElement("strong",null,k)," version."):l.a.createElement("div",null,"This is archived documentation for ",v," ",l.a.createElement("strong",null,"v",k),", which is no longer actively maintained."),l.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",l.a.createElement("strong",null,l.a.createElement(m.a,{to:y},"latest version")),".")),l.a.createElement("div",{className:E.a.docItemContainer},l.a.createElement("article",null,k&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",k)),!O&&l.a.createElement("header",null,l.a.createElement("h1",{className:E.a.docTitle},f)),l.a.createElement("div",{className:"markdown"},l.a.createElement(g,null))),(b||N||w)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},b&&l.a.createElement("a",{href:b,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(N||w)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",N&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*N).toISOString(),className:E.a.docLastUpdatedAt},new Date(1e3*N).toLocaleDateString()),w&&" "),w&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,w)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(o,{metadata:p})))),!j&&g.rightToc&&l.a.createElement(u,{headings:g.rightToc}))))}}}]);