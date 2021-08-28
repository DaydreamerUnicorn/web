(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[30847],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return h}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(t),h=a,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||o;return t?r.createElement(m,l(l({ref:n},d),{},{components:t})):r.createElement(m,l({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7129:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),l=["components"],i={id:"install",title:"Installation"},s=void 0,u={unversionedId:"install",id:"version-v1.10/install",isDocsHomePage:!1,title:"Installation",description:"Installing ORY Hydra on any system is straight forward. We provide pre-built",source:"@site/versioned_docs/version-v1.10/install.md",sourceDirName:".",slug:"/install",permalink:"/hydra/docs/install",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/install.md",version:"v1.10",lastUpdatedBy:"aeneasr",lastUpdatedAt:1629189835,formattedLastUpdatedAt:"8/17/2021",frontMatter:{id:"install",title:"Installation"},sidebar:"version-v1.10/docs",previous:{title:"5 Minute Tutorial",permalink:"/hydra/docs/5min-tutorial"},next:{title:"Contribution Guidelines",permalink:"/hydra/docs/contributing"}},d=[{value:"Docker",id:"docker",children:[]},{value:"macOS",id:"macos",children:[]},{value:"Linux",id:"linux",children:[]},{value:"Windows",id:"windows",children:[]},{value:"Kubernetes",id:"kubernetes",children:[]},{value:"Download Binaries",id:"download-binaries",children:[]},{value:"Building from Source",id:"building-from-source",children:[]}],c={toc:d};function p(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Installing ORY Hydra on any system is straight forward. We provide pre-built\nbinaries, Docker Images and support various package managers."),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("p",null,"We recommend using Docker to run ORY Hydra:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker pull oryd/hydra:v1.10.6\n$ docker run --rm -it oryd/hydra:v1.10.6 help\n")),(0,o.kt)("h2",{id:"macos"},"macOS"),(0,o.kt)("p",null,"You can install ORY Hydra using ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew")," on macOS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew tap ory/hydra\n$ brew install ory/hydra/hydra\n$ hydra help\n")),(0,o.kt)("h2",{id:"linux"},"Linux"),(0,o.kt)("p",null,"On linux, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"bash <(curl ...)")," to fetch the latest stable binary\nusing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ bash <(curl https://raw.githubusercontent.com/ory/hydra/v1.9.0/install.sh) -b . v1.9.0\n$ ./hydra help\n")),(0,o.kt)("p",null,"You may want to move ORY Hydra to your ",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo mv ./hydra /usr/local/bin/\n$ hydra help\n")),(0,o.kt)("h2",{id:"windows"},"Windows"),(0,o.kt)("p",null,"You can install ORY Hydra using ",(0,o.kt)("a",{parentName:"p",href:"https://scoop.sh"},"scoop")," on Windows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> scoop bucket add ory-hydra https://github.com/ory/scoop-hydra.git\n> scoop install hydra\n> hydra help\n")),(0,o.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("p",null,"Please head over to the ",(0,o.kt)("a",{parentName:"p",href:"guides/kubernetes-helm-chart"},"Kubernetes Helm Chart"),"\ndocumentation."),(0,o.kt)("h2",{id:"download-binaries"},"Download Binaries"),(0,o.kt)("p",null,"You can download the client and server binaries on our\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra/releases"},"Github releases")," page. There is\ncurrently no installer available. You have to add the Hydra binary to the PATH\nin your environment yourself, for example by putting it into ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," or\nsomething comparable."),(0,o.kt)("p",null,"Once installed, you should be able to run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ hydra help\n")),(0,o.kt)("h2",{id:"building-from-source"},"Building from Source"),(0,o.kt)("p",null,"If you wish to compile ORY Hydra yourself, you need to install and set up\n",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/"},"Go 1.15+")," and add ",(0,o.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin")," to your ",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH"),"."),(0,o.kt)("p",null,"The following commands will check out the latest release tag of ORY Hydra,\ncompile it, and set up flags so that ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra version")," works as expected. Please\nnote that this will only work in a Bash-like shell."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/ory/hydra.git\n$ cd hydra\n$ GO111MODULE=on make install-stable\n$ $(go env GOPATH)/bin/hydra help\n")))}p.isMDXComponent=!0}}]);