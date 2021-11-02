(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[32447],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(k,i(i({ref:t},d),{},{components:n})):o.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98418:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),i=["components"],l={id:"debug-docker-delve-ory-kratos",title:"Debugging Ory Kratos in Docker with Delve"},s=void 0,c={unversionedId:"debug/debug-docker-delve-ory-kratos",id:"version-v0.8/debug/debug-docker-delve-ory-kratos",isDocsHomePage:!1,title:"Debugging Ory Kratos in Docker with Delve",description:"Very often, there is a need to debug Kratos being deployed as a Docker image. To",source:"@site/versioned_docs/version-v0.8/debug/debug-docker-delve-ory-kratos.mdx",sourceDirName:"debug",slug:"/debug/debug-docker-delve-ory-kratos",permalink:"/kratos/docs/debug/debug-docker-delve-ory-kratos",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.8/debug/debug-docker-delve-ory-kratos.mdx",tags:[],version:"v0.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1635084599,formattedLastUpdatedAt:"10/24/2021",frontMatter:{id:"debug-docker-delve-ory-kratos",title:"Debugging Ory Kratos in Docker with Delve"},sidebar:"version-v0.8/docs",previous:{title:"Performance Problems and Out Of Memory Panics Caused by Password Hashing",permalink:"/kratos/docs/debug/performance-out-of-memory-password-hashing-argon2"},next:{title:"Overview",permalink:"/kratos/docs/sdk"}},d=[{value:"As part of a docker-compose setup",id:"as-part-of-a-docker-compose-setup",children:[],level:2},{value:"As a standalone Docker container",id:"as-a-standalone-docker-container",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Very often, there is a need to debug Kratos being deployed as a Docker image. To\nsupport this, Kratos ships with a couple of files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Dockerfile-debug")," file, which you can find in the ",(0,a.kt)("inlineCode",{parentName:"li"},".docker")," directory."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose.template.dbg")," file, which you can find in the same\ndirectory. This file defines a template for a service, one would like to debug\nin Docker"),(0,a.kt)("li",{parentName:"ul"},"and a supplementary ",(0,a.kt)("inlineCode",{parentName:"li"},"debug-entrypoint.sh")," skript, located in the ",(0,a.kt)("inlineCode",{parentName:"li"},"script"),"\ndirectory.")),(0,a.kt)("p",null,"Actually, these files do not include any Kratos specifica and thus can be used\nfor any Golang based project. As you already could infer, this support is meant\nto be used in a docker-compose setup as described below. You can however run it\nas a standalone Docker container as well. You can find some information on how\nto achieve this at the end of this document."),(0,a.kt)("h2",{id:"as-part-of-a-docker-compose-setup"},"As part of a docker-compose setup"),(0,a.kt)("p",null,"Imagine you have the following project structure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"docker-compose - a directory containing your ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose.yaml")," file"),(0,a.kt)("li",{parentName:"ul"},"kratos - a directory containing the Kratos code"),(0,a.kt)("li",{parentName:"ul"},"kratos-frontend - a directory containing a frontend application for Kratos")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," mentioned above could look as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3.7'\n\nvolumes:\n  postgres-db:\n\nservices:\n  postgresd:\n    image: postgres:9.6\n    ports:\n      - '5432:5432'\n    volumes:\n      - type: volume\n        source: postgres-db\n        target: /var/lib/postgresql/data\n        read_only: false\n    environment:\n      - PGDATA=/var/lib/postgresql/data/pgdata\n      - POSTGRES_PASSWORD=secret\n      - POSTGRES_USER=kratos\n\n  kratos-migrate:\n    image: kratos\n    build:\n      context: ../kratos\n      dockerfile: ./.docker/Dockerfile-build\n    environment:\n      - DSN=postgres://kratos:secret@postgresd:5432/kratos?sslmode=disable&max_conns=20&max_idle_conns=4\n    volumes:\n      - type: bind\n        source: path-to-kratos-config\n        target: /etc/config/kratos\n    command: migrate sql -e --yes\n    depends_on:\n      - postgresd\n\n  kratos:\n    image: kratos\n    build:\n      context: ../kratos\n      dockerfile: ./.docker/Dockerfile-build\n    depends_on:\n      - kratos-migrate\n    ports:\n      - '4433:4433' # public\n      - '4434:4434' # admin\n    command: serve -c /etc/config/kratos/kratos.yml --watch-courier --dev\n    volumes:\n      - type: bind\n        source: path-to-kratos-config\n        target: /etc/config/kratos\n\n  kratos-frontend:\n    image: kratos-frontend\n    build:\n      context: ../kratos-kratos-frontend\n      dockerfile: ./Dockerfile\n    env_file:\n      - file-containing-all-required-configuration.env\n")),(0,a.kt)("p",null,"To enable debugging of Kratos without changing the above docker-compose file,\nyou can do the following (from the docker-compose directory):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"SERVICE_NAME=kratos SERVICE_ROOT=../kratos REMOTE_DEBUGGING_PORT=9999 envsubst < ../kratos/.docker/docker-compose.template.dbg \\\n  > docker-compose.kratos.tmp\ndocker-compose -f docker-compose.yaml -f docker-compose.kratos.tmp up --build -d kratos\n")),(0,a.kt)("p",null,"The first line will create an overwrite docker-compose file to have a debug\nconfiguration for the kratos service. The second line will start a debug\ncontainer by"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"mounting your ",(0,a.kt)("inlineCode",{parentName:"li"},"kratos")," directory into the resulting Docker container,"),(0,a.kt)("li",{parentName:"ul"},"downloading Delve,"),(0,a.kt)("li",{parentName:"ul"},"building Kratos inside the container,"),(0,a.kt)("li",{parentName:"ul"},"starting it in Delve with the arguments, you've defined in your regular\ndocker-compose file - in the example above, this would be\n",(0,a.kt)("inlineCode",{parentName:"li"},"serve -c /etc/config/kratos/kratos.yml --watch-courier --dev")," - and"),(0,a.kt)("li",{parentName:"ul"},"watching for changes on any go file within the mounted code base.")),(0,a.kt)("p",null,"Each time you change a .go file, the Delve process will be stopped, Kratos will\nbe recompiled and Delve will be started again. With other words, you'll have to\nre-connect with your debugger again after each change."),(0,a.kt)("p",null,"As you can see from the above usage, the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.template.dbg")," template\nexpects the following variables to be defined:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SERVICE_ROOT")," - the root directory of the service to be started in the debug\nmode."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SERVICE_NAME")," - the name of the service from the docker-compose file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"REMOTE_DEBUGGING_PORT")," - the host port, the Delve listening port should be\nexposed as. This is the port you should connect your remote debugger to.")),(0,a.kt)("p",null,"If you run docker-compose this way, the container run with debugging enabled\nwill wait until the debugger connects. If your IDE supports remote debugging,\nset host to ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," and port to the value, you've used for\n",(0,a.kt)("inlineCode",{parentName:"p"},"REMOTE_DEBUGGING_PORT")," in your remote debugging configuration."),(0,a.kt)("h2",{id:"as-a-standalone-docker-container"},"As a standalone Docker container"),(0,a.kt)("p",null,"If you just would like to start Kratos in a container in debug mode, you can\njust use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile-debug")," file instead of the regular ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),". Make\nhowever sure your build context in the root directory of Kratos and not the\n",(0,a.kt)("inlineCode",{parentName:"p"},".docker")," directory. In your IDE the debug configuration has to reference that\nfile. In addition, you'll have to expose the Delve service port 40000 under the\nport 8000, as well as the actual port of the service, you'll like to access from\nyour host, configure the bind mounts and set the run options to\n",(0,a.kt)("inlineCode",{parentName:"p"},'--security-opt="apparmor=unconfined" --cap-add=SYS_PTRACE'),"."))}p.isMDXComponent=!0}}]);