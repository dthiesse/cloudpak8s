(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),l=n("NmYn"),i=n.n(l),s=n("Wbzz"),r=n("Xrax"),c=n("k4MR"),b=n("TSYQ"),d=n.n(b),p=n("QH2O"),u=n("qKvR"),m=function(e){var t,n=e.title,a=e.tabs,o=void 0===a?[]:a;return Object(u.b)("div",{className:d()(p.pageHeader,(t={},t[p.withTabs]=o.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.text},n)))))},h=n("BAC9"),g=function(e){var t=e.relativePagePath,n=e.repository,a=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=n||a,l=o.baseUrl,i=o.subDirectory,r=l+"/edit/"+o.branch+i+"/src/pages"+t;return l?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:r},"Edit this page on GitHub"))):null},O=n("FCXl"),j=n("dI71"),f=n("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,a=n.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=i()(e,{lower:!0,strict:!0}),l=o===a,r=new RegExp(a+"/?(#.*)?$"),c=n.replace(r,o);return Object(u.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=l,t),f.listItem)},Object(u.b)(s.Link,{className:f.link,to:""+c},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:f.list},o))))))},t}(o.a.Component),x=n("MjG9");t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,o=e.Title,l=t.frontmatter,b=void 0===l?{}:l,d=t.relativePagePath,p=t.titleType,h=b.tabs,j=b.title,f=b.theme,v=b.description,N=b.keywords,T=Object(s.useStaticQuery)("2456312558").site.pathPrefix,k=T?a.pathname.replace(T,""):a.pathname,C=h?k.split("/").filter(Boolean).slice(-1)[0]||i()(h[0],{lower:!0}):"";return Object(u.b)(c.a,{tabs:h,homepage:!1,theme:f,pageTitle:j,pageDescription:v,pageKeywords:N,titleType:p},Object(u.b)(m,{title:o?Object(u.b)(o,null):j,label:"label",tabs:h}),h&&Object(u.b)(w,{slug:k,tabs:h,currentTab:C}),Object(u.b)(x.a,{padded:!0},n,Object(u.b)(g,{relativePagePath:d})),Object(u.b)(O.a,{pageContext:t,location:a,slug:k,tabs:h,currentTab:C}),Object(u.b)(r.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},rt93:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n("wx14"),o=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("013z"),s=(n("qKvR"),{}),r={_frontmatter:s},c=i.a;function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)(c,Object(a.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",null,"Prerequisites"),Object(l.b)("p",null,"Before beginning these steps you should have:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"A github account (or Github Enterprise)"),Object(l.b)("li",{parentName:"ol"},"A Dockerhub account (needed to install docker)"),Object(l.b)("li",{parentName:"ol"},"A Red Hat entitled customer account (to install oc)"),Object(l.b)("li",{parentName:"ol"},"An IDE (Eclipse or VS Code to use with Codewind)"),Object(l.b)("li",{parentName:"ol"},"A login for your Openshift Container cluster")),Object(l.b)("h2",null,"Installing Client tools from web pages on the cluster"),Object(l.b)("p",null,"A landing page is created during the install of Cloud Pak for Applications.\nThe landing page is available in the top menu bar and is named Cloud Pak Console.\nThe landing page is also found in the Administrator Console under Networking::Routes and is named icpa-landing in the kabanero namespace.\nThe Cloud Pak Console pages provide the most current installation information about the client tools.\nThis document will also provide links to these tools on the web."),Object(l.b)("p",null,"When the OpenShift cluster is created, a reference page is generated for the OpenShift command line tools. There are several useful links on this page. Get this URL from your administrator."),Object(l.b)("img",{src:"/assets/img/cp4a/command-line-tools.png",alt:"Command Line Tools"}),Object(l.b)("img",{src:"/assets/img/cp4a/command-line-tools-download.png",alt:"Download Command Line Tools"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," You will need to authenticate (login) to your cluster."),Object(l.b)("p",null,"The Cloud Pak Console provides additional information on installing additional development tools.  In the Console page, select the Setup dev tools button and follow instructions in the pop-up."),Object(l.b)("img",{src:"/assets/img/cp4a/dev-tools.png",alt:"Cloud Pak Console"}),Object(l.b)("img",{src:"/assets/img/cp4a/setup-dev-tools.png",alt:"Setup Dev Tools"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," You will need to authenticate (login) to your cluster."),Object(l.b)("h2",null,"Command line tools"),Object(l.b)("h4",null,"git"),Object(l.b)("p",null,"Install git for windows from: ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitforwindows.org/"}),"https://gitforwindows.org/")),Object(l.b)("h3",null,"OpenShift OpenShift command line interface (oc)"),Object(l.b)("p",null,"Recommend to download from OpenShift cluster using instructions with Setup Dev Tools.\nAlternatively, more information can be found here:\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.2/cli_reference/openshift_cli/getting-started-cli.html"}),"https://docs.openshift.com/container-platform/4.2/cli_reference/openshift_cli/getting-started-cli.html")," "),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," You will need to login using your RedHat customer account."),Object(l.b)("p",null,"oc is also available from ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://mirror.openshift.com/pub/openshift-v4/clients/oc/latest/windows/"}),"https://mirror.openshift.com/pub/openshift-v4/clients/oc/latest/windows/")),Object(l.b)("h3",null,"docker"),Object(l.b)("p",null,"Install docker from here:\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/install/"}),"https://docs.docker.com/install/"),"\n",Object(l.b)("strong",{parentName:"p"},"Note:")," You will need to authenticate (login) to docker."),Object(l.b)("h4",null,"appsody"),Object(l.b)("p",null,"Follow the link on the Cloud Pak Console landing page.\nOr use multiple platform installation instructions ",Object(l.b)("inlineCode",{parentName:"p"},"https://appsody.dev/docs/getting-started/installation")),Object(l.b)("h2",null,"IDE: Codewind with Eclipse or VS Code"),Object(l.b)("p",null,"These installations provide shortcuts and commands from within the IDE."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.eclipse.org/codewind/mdteclipsegettingstarted.html"}),"Eclipse installation")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.eclipse.org/codewind/mdt-vsc-getting-started.html"}),"VS Code installation"))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-apps-cp-4-a-install-dev-tools-win-index-mdx-11029401edddc193dcd0.js.map