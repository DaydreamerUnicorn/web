(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[34173],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),f=i,h=u["".concat(c,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50182:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return u}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=["components"],s={id:"retrieve-social-sign-in-access-refresh-id-token",title:"Get Access, Refresh, ID Tokens from Social Sign In Providers"},c=void 0,d={unversionedId:"guides/retrieve-social-sign-in-access-refresh-id-token",id:"version-v0.8/guides/retrieve-social-sign-in-access-refresh-id-token",isDocsHomePage:!1,title:"Get Access, Refresh, ID Tokens from Social Sign In Providers",description:"This document describes how to retrieve OpenID Connect / OAuth 2.0 Access,",source:"@site/versioned_docs/version-v0.8/guides/retrieve-social-sign-in-access-refresh-id-token.md",sourceDirName:"guides",slug:"/guides/retrieve-social-sign-in-access-refresh-id-token",permalink:"/kratos/docs/guides/retrieve-social-sign-in-access-refresh-id-token",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.8/guides/retrieve-social-sign-in-access-refresh-id-token.md",tags:[],version:"v0.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1635084599,formattedLastUpdatedAt:"10/24/2021",frontMatter:{id:"retrieve-social-sign-in-access-refresh-id-token",title:"Get Access, Refresh, ID Tokens from Social Sign In Providers"},sidebar:"version-v0.8/docs",previous:{title:"Secret and Key Rotation",permalink:"/kratos/docs/guides/secret-key-rotation"},next:{title:"Setting up Noop Cipher algorithm",permalink:"/kratos/docs/guides/setting-up-noop-cipher-parameters"}},l=[{value:"Encryption",id:"encryption",children:[]}],p={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document describes how to retrieve OpenID Connect / OAuth 2.0 Access,\nRefresh, and ID Tokens from Social Sign In at the ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /identities")," API. This\nguide assumes that you have the ",(0,a.kt)("inlineCode",{parentName:"p"},"oidc")," method enabled."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Please be aware that these tokens are only set when an identity sign ups with,\nor links a new Social Sign In provider. They are not updated when an identity\nsigns in!"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ curl --request GET -sL \\\n    --header "Content-Type: application/json" \\\n    http://127.0.0.1:4434/identities/3ade335e-62e6-4abb-b190-6efd48e077fc?include_credential=oidc\n\n{\n  "id": "714a9ddc-9fde-42ad-be42-784dfeadd098",\n  "credentials": {\n    "oidc": {\n      "type": "oidc",\n      "identifiers": [\n        "google:some-user"\n        "github:another-user"\n      ],\n      "config": {\n        "providers": [\n          {\n            "subject": "some-user",\n            "provider": "google",\n            "initial_access_token": "********************",\n            "initial_refresh_token": "********************",\n            "initial_id_token": "********************",\n          },\n          {\n            "subject": "another-user",\n            "provider": "github",\n            "initial_access_token": "********************",\n            "initial_refresh_token": "********************",\n            "initial_id_token": "********************",\n          }\n        ]\n      },\n      "created_at": "2021-10-08T12:17:18.834351+02:00",\n      "updated_at": "2021-10-08T12:17:18.834351+02:00"\n    }\n  },\n  "schema_id": "default",\n  "schema_url": "http://localhost:61342/schemas/default",\n  "state": "active",\n  "state_changed_at": "2021-10-08T12:17:18.83324+02:00",\n  "traits": {\n    "subject": "foo.oidc@bar.com"\n  },\n  "verifiable_addresses": [\n    {\n      "id": "88da96df-0457-4d69-832d-5e70ef25055c",\n      "value": "foo.oidc@bar.com",\n      "verified": false,\n      "via": "",\n      "status": "",\n      "verified_at": null,\n      "created_at": "2021-10-08T12:17:18.83324+02:00",\n      "updated_at": "2021-10-08T12:17:18.834202+02:00"\n    }\n  ],\n  "created_at": "2021-10-08T12:17:18.834043+02:00",\n  "updated_at": "2021-10-08T12:17:18.834043+02:00"\n}\n')),(0,a.kt)("h2",{id:"encryption"},"Encryption"),(0,a.kt)("p",null,"By default Access Token and Refresh Token are plaintext recorded\n",(0,a.kt)("a",{parentName:"p",href:"/kratos/docs/guides/setting-up-noop-cipher-parameters"},"Noop Cipher")),(0,a.kt)("p",null,"For a tighter security aspect you could choose following cipher:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AES by following this ",(0,a.kt)("a",{parentName:"li",href:"/kratos/docs/guides/setting-up-aes-cipher-parameters"},"setup")),(0,a.kt)("li",{parentName:"ul"},"XChaCha20 Poly1305 by following this\n",(0,a.kt)("a",{parentName:"li",href:"/kratos/docs/guides/setting-up-xchacha-cipher-parameters"},"setup"))))}u.isMDXComponent=!0}}]);