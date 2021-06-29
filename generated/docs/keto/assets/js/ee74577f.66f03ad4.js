(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[4587],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),h=a,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||r;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83277:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var o=n(22122),a=n(19756),r=(n(67294),n(3905)),i={id:"contributing",title:"Contribution Guidelines"},s=void 0,l={unversionedId:"contributing",id:"version-v0.6/contributing",isDocsHomePage:!1,title:"Contribution Guidelines",description:"\x3c!--",source:"@site/versioned_docs/version-v0.6/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/keto/docs/contributing",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.6/contributing.md",version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1617730042,formattedLastUpdatedAt:"4/6/2021",frontMatter:{id:"contributing",title:"Contribution Guidelines"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"FAQ",id:"faq",children:[]},{value:"How can I contribute?",id:"how-can-i-contribute",children:[]},{value:"Communication",id:"communication",children:[]},{value:"Contributing Code",id:"contributing-code",children:[]},{value:"Documentation",id:"documentation",children:[]},{value:"Disclosing vulnerabilities",id:"disclosing-vulnerabilities",children:[]},{value:"Code Style",id:"code-style",children:[]},{value:"Pull request procedure",id:"pull-request-procedure",children:[{value:"Working with Forks",id:"working-with-forks",children:[]}]},{value:"Conduct",id:"conduct",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contributing-to-ory-keto"},"Contributing to ORY Keto"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#faq"},"FAQ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-can-i-contribute"},"How can I contribute?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#communication"},"Communication")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#contributing-code"},"Contributing Code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#documentation"},"Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disclosing-vulnerabilities"},"Disclosing vulnerabilities")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#code-style"},"Code Style")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#pull-request-procedure"},"Pull request procedure"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#working-with-forks"},"Working with Forks")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#conduct"},"Conduct"))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"There are many ways in which you can contribute, beyond writing code. The goal\nof this document is to provide a high-level overview of how you can get\ninvolved."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Please note"),": We take ORY Keto's security and our users' trust very seriously.\nIf you believe you have found a security issue in ORY Keto, please responsibly\ndisclose by contacting us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:security@ory.sh"},"security@ory.sh"),"."),(0,r.kt)("p",null,"First: As a potential contributor, your changes and ideas are welcome at any\nhour of the day or night, weekdays, weekends, and holidays. Please do not ever\nhesitate to ask a question or send a pull request."),(0,r.kt)("p",null,"If you are unsure, just ask or submit the issue or pull request anyways. You\nwon't be yelled at for giving it your best effort. The worst that can happen is\nthat you'll be politely asked to change something. We appreciate any sort of\ncontributions, and don't want a wall of rules to get in the way of that."),(0,r.kt)("p",null,"That said, if you want to ensure that a pull request is likely to be merged,\ntalk to us! You can find out our thoughts and ensure that your contribution\nwon't clash or be obviated by ORY Keto's normal direction. A great way to do\nthis is via ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/keto/discussions"},"ORY Keto Discussions")," or\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://www.ory.sh/chat"},"ORY Chat"),"."),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"I am new to the community. Where can I find the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/keto/blob/master/CODE_OF_CONDUCT.md"},"ORY Community Code of Conduct?"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"I have a question. Where can I get\n",(0,r.kt)("a",{parentName:"p",href:"#communication"},"answers to questions regarding ORY Keto?"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"I would like to contribute but I am not sure how. Are there\n",(0,r.kt)("a",{parentName:"p",href:"#how-can-i-contribute"},"easy ways to contribute?"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/search?l=&o=desc&q=label%3A%22help+wanted%22+label%3A%22good+first+issue%22+is%3Aopen+user%3Aory+user%3Aory-corp&s=updated&type=Issues"},"Or good first issues?"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"I want to talk to other ORY Keto users.\n",(0,r.kt)("a",{parentName:"p",href:"#communication"},"How can I become a part of the community?"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"I would like to know what I am agreeing to when I contribute to ORY Keto. Does\nORY have\n",(0,r.kt)("a",{parentName:"p",href:"https://cla-assistant.io/ory/keto"},"a Contributors License Agreement?"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"I would like updates about new versions of ORY Keto.\n",(0,r.kt)("a",{parentName:"p",href:"https://ory.us10.list-manage.com/subscribe?u=ffb1a878e4ec6c0ed312a3480&id=f605a41b53"},"How are new releases announced?")))),(0,r.kt)("h2",{id:"how-can-i-contribute"},"How can I contribute?"),(0,r.kt)("p",null,"If you want to start contributing code right away, we have a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/keto/labels/good%20first%20issue"},"list of good first issues"),"."),(0,r.kt)("p",null,"There are many other ways you can contribute without writing any code. Here are\na few things you can do to help out:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Give us a star.")," It may not seem like much, but it really makes a\ndifference. This is something that everyone can do to help out ORY Keto.\nGithub stars help the project gain visibility and stand out.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Join the community.")," Sometimes helping people can be as easy as listening\nto their problems and offering a different perspective. Join our Slack, have a\nlook at discussions in the forum and take part in our weekly hangout. More\ninfo on this in ",(0,r.kt)("a",{parentName:"p",href:"#communication"},"Communication"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Helping with open issues.")," We have a lot of open issues for ORY Keto and\nsome of them may lack necessary information, some are duplicates of older\nissues. You can help out by guiding people through the process of filling out\nthe issue template, asking for clarifying information, or pointing them to\nexisting issues that match their description of the problem.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Reviewing documentation changes.")," Most documentation just needs a review\nfor proper spelling and grammar. If you think a document can be improved in\nany way, feel free to hit the ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," button at the top of the page. More info\non contributing to documentation here.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Help with tests.")," Some pull requests may lack proper tests or test plans.\nThese are needed for the change to be implemented safely."))),(0,r.kt)("h2",{id:"communication"},"Communication"),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"https://www.ory.sh/chat"},"Slack"),". You are welcome to drop in and ask\nquestions, discuss bugs and feature requests, talk to other users of ORY, etc."),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/keto/discussions"},"ORY Keto Discussions"),". This\nis a great place for in-depth discussions and lots of code examples, logs and\nsimilar data."),(0,r.kt)("p",null,"You can also join our community hangout, if you want to speak to the ORY team\ndirectly or ask some questions. You can find more info on the hangouts in\n",(0,r.kt)("a",{parentName:"p",href:"https://www.ory.sh/chat"},"Slack"),"."),(0,r.kt)("p",null,"If you want to receive regular notifications about updates to ORY Keto, consider\njoining the mailing list. We will ",(0,r.kt)("em",{parentName:"p"},"only")," send you vital information on the\nprojects that you are interested in."),(0,r.kt)("p",null,"Also ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/orycorp"},"follow us on twitter"),"."),(0,r.kt)("h2",{id:"contributing-code"},"Contributing Code"),(0,r.kt)("p",null,"Unless you are fixing a known bug, we ",(0,r.kt)("strong",{parentName:"p"},"strongly")," recommend discussing it with\nthe core team via a GitHub issue or ",(0,r.kt)("a",{parentName:"p",href:"https://www.ory.sh/chat"},"in our chat"),"\nbefore getting started to ensure your work is consistent with ORY Keto's roadmap\nand architecture."),(0,r.kt)("p",null,"All contributions are made via pull request. Note that ",(0,r.kt)("strong",{parentName:"p"},"all patches from all\ncontributors get reviewed"),". After a pull request is made other contributors\nwill offer feedback, and if the patch passes review a maintainer will accept it\nwith a comment. When pull requests fail testing, authors are expected to update\ntheir pull requests to address the failures until the tests pass and the pull\nrequest merges successfully. Look here for more info on the\n",(0,r.kt)("a",{parentName:"p",href:"#pull-request-procedure"},"Pull request procedure"),"."),(0,r.kt)("p",null,"At least one review from a maintainer is required for all patches (even patches\nfrom maintainers)."),(0,r.kt)("p",null,"Before your contributions can be merged you need to sign our\n",(0,r.kt)("a",{parentName:"p",href:"https://cla-assistant.io/ory/keto"},"Contributor License Agreement"),"."),(0,r.kt)("p",null,"This agreement defines the terms under which your code is contributed to ORY.\nMore specifically it declares that you have the right to, and actually do, grant\nus the rights to use your contribution. You can see the Apache 2.0 license under\nwhich our projects are published\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/meta/blob/master/LICENSE"},"here"),"."),(0,r.kt)("p",null,'Reviewers should leave a "LGTM" comment once they are satisfied with the patch.\nIf the patch was submitted by a maintainer with write access, the pull request\nshould be merged by the submitter after review.'),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("p",null,"Please provide documentation when changing, removing, or adding features.\nDocumentation resides in the project's\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/keto/tree/master/docs"},"docs")," folder. Generate API and\nconfiguration reference documentation using ",(0,r.kt)("inlineCode",{parentName:"p"},"cd docs; npm run gen"),"."),(0,r.kt)("p",null,"For further instructions please head over to\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/keto/blob/master/README.md"},"docs/README.md"),"."),(0,r.kt)("h2",{id:"disclosing-vulnerabilities"},"Disclosing vulnerabilities"),(0,r.kt)("p",null,"Please disclose vulnerabilities exclusively to\n",(0,r.kt)("a",{parentName:"p",href:"mailto:security@ory.sh"},"security@ory.sh"),". Do not use GitHub issues."),(0,r.kt)("h2",{id:"code-style"},"Code Style"),(0,r.kt)("p",null,"Please follow these guidelines when formatting source code:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go code should match the output of ",(0,r.kt)("inlineCode",{parentName:"li"},"gofmt -s")," and pass ",(0,r.kt)("inlineCode",{parentName:"li"},"golangci-lint run"),"."),(0,r.kt)("li",{parentName:"ul"},"NodeJS and JavaScript code should be prettified using ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run format")," where\nappropriate.")),(0,r.kt)("h2",{id:"pull-request-procedure"},"Pull request procedure"),(0,r.kt)("p",null,"To make a pull request, you will need a GitHub account; if you are unclear on\nthis process, see GitHub's documentation on\n",(0,r.kt)("a",{parentName:"p",href:"https://help.github.com/articles/fork-a-repo"},"forking")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://help.github.com/articles/using-pull-requests"},"pull requests"),". Pull\nrequests should be targeted at the ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch. Before creating a pull\nrequest, go through this checklist:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a feature branch off of ",(0,r.kt)("inlineCode",{parentName:"li"},"master")," so that changes do not get mixed up."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"http://git-scm.com/book/en/Git-Branching-Rebasing"},"Rebase")," your local\nchanges against the ",(0,r.kt)("inlineCode",{parentName:"li"},"master")," branch."),(0,r.kt)("li",{parentName:"ol"},"Run the full project test suite with the ",(0,r.kt)("inlineCode",{parentName:"li"},"go test ./...")," (or equivalent)\ncommand and confirm that it passes."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"gofmt -s")," (if the project is written in Go)."),(0,r.kt)("li",{parentName:"ol"},"Ensure that each commit has a subsystem prefix (ex: ",(0,r.kt)("inlineCode",{parentName:"li"},"controller:"),").")),(0,r.kt)("p",null,'Pull requests will be treated as "review requests," and maintainers will give\nfeedback on the style and substance of the patch.'),(0,r.kt)("p",null,"Normally, all pull requests must include tests that test your change.\nOccasionally, a change will be very difficult to test for. In those cases,\nplease include a note in your commit message explaining why."),(0,r.kt)("h3",{id:"working-with-forks"},"Working with Forks"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# First you clone the original repository\ngit clone git@github.com:ory/ory/keto.git\n\n# Next you add a git remote that is your fork:\ngit remote add fork git@github.com:<YOUR-GITHUB-USERNAME-HERE>/ory/keto.git\n\n# Next you fetch the latest changes from origin for master:\ngit fetch origin\ngit checkout master\ngit pull --rebase\n\n# Next you create a new feature branch off of master:\ngit checkout my-feature-branch\n\n# Now you do your work and commit your changes:\ngit add -A\ngit commit -a -m "fix: this is the subject line" -m "This is the body line. Closes #123"\n\n# And the last step is pushing this to your fork\ngit push -u fork my-feature-branch\n')),(0,r.kt)("p",null,'Now go to the project\'s GitHub Pull Request page and click "New pull request"'),(0,r.kt)("h2",{id:"conduct"},"Conduct"),(0,r.kt)("p",null,"Whether you are a regular contributor or a newcomer, we care about making this\ncommunity a safe place for you and we've got your back."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We are committed to providing a friendly, safe and welcoming environment for\nall, regardless of gender, sexual orientation, disability, ethnicity,\nreligion, or similar personal characteristic."),(0,r.kt)("li",{parentName:"ul"},"Please avoid using nicknames that might detract from a friendly, safe and\nwelcoming environment for all."),(0,r.kt)("li",{parentName:"ul"},"Be kind and courteous. There is no need to be mean or rude."),(0,r.kt)("li",{parentName:"ul"},"We will exclude you from interaction if you insult, demean or harass anyone.\nIn particular, we do not tolerate behavior that excludes people in socially\nmarginalized groups."),(0,r.kt)("li",{parentName:"ul"},"Private harassment is also unacceptable. No matter who you are, if you feel\nyou have been or are being harassed or made uncomfortable by a community\nmember, please contact one of the channel ops or a member of the ORY Keto core\nteam immediately."),(0,r.kt)("li",{parentName:"ul"},"Likewise any spamming, trolling, flaming, baiting or other attention-stealing\nbehaviour is not welcome.")),(0,r.kt)("p",null,"We welcome discussion about creating a welcoming, safe, and productive\nenvironment for the community. If you have any questions, feedback, or concerns\n",(0,r.kt)("a",{parentName:"p",href:"https://www.ory.sh/chat"},"please let us know"),"."))}p.isMDXComponent=!0}}]);