(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),s=a("NmYn"),i=a.n(s),r=a("Wbzz"),p=a("Xrax"),c=a("k4MR"),l=a("TSYQ"),b=a.n(l),u=a("QH2O"),m=a("qKvR"),d=function(e){var t,a=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(m.b)("div",{className:b()(u.pageHeader,(t={},t[u.withTabs]=o.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.text},a)))))},h=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,s=o.baseUrl,i=o.subDirectory,p=s+"/edit/"+o.branch+i+"/src/pages"+t;return s?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:p},"Edit this page on GitHub"))):null},f=a("FCXl"),O=a("dI71"),j=a("I8xM"),A=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=i()(e,{lower:!0,strict:!0}),s=o===n,p=new RegExp(n+"/?(#.*)?$"),c=a.replace(p,o);return Object(m.b)("li",{key:e,className:b()((t={},t[j.selectedItem]=s,t),j.listItem)},Object(m.b)(r.Link,{className:j.link,to:""+c},e))}));return Object(m.b)("div",{className:j.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:j.list},o))))))},t}(o.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,s=t.frontmatter,l=void 0===s?{}:s,b=t.relativePagePath,u=t.titleType,h=l.tabs,O=l.title,j=l.theme,y=l.description,v=l.keywords,N=Object(r.useStaticQuery)("2456312558").site.pathPrefix,x=N?n.pathname.replace(N,""):n.pathname,S=h?x.split("/").filter(Boolean).slice(-1)[0]||i()(h[0],{lower:!0}):"";return Object(m.b)(c.a,{tabs:h,homepage:!1,theme:j,pageTitle:O,pageDescription:y,pageKeywords:v,titleType:u},Object(m.b)(d,{title:o?Object(m.b)(o,null):O,label:"label",tabs:h}),h&&Object(m.b)(A,{slug:x,tabs:h,currentTab:S}),Object(m.b)(w.a,{padded:!0},a,Object(m.b)(g,{relativePagePath:b})),Object(m.b)(f.a,{pageContext:t,location:n,slug:x,tabs:h,currentTab:S}),Object(m.b)(p.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},CYwN:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return l}));var n=a("wx14"),o=a("zLVn"),s=(a("q1tI"),a("7ljp")),i=a("013z"),r=(a("qKvR"),{}),p={_frontmatter:r},c=i.a;function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(s.b)(c,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",null,"Support Overview"),Object(s.b)("p",null,"As a part of Day 2 operations, you may experience issues that require opening a trouble ticket with Red Hat support.  The Red Hat Support Portal is the primary mechanism for opening and managing trouble tickets for the platform.  "),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"If this is a OpenShift platform provided/managed by a third party, please ensure that you utilize the defined procedures provided to you as they may own/manage issues")),Object(s.b)("p",null,"In addition, Red Hat support (unless an add-on Entitlement has been purchased), will not accept problems related to Application Development.  However, if the Platform issue is the root cause of the Application Development issue, then it would be supported..\nAs part of opening the trouble ticket, it is expected and normal that you have the following information ready and available to ensure rapid response.  Detailed instructions on using the Red Hat Support Portal can be found at:\n",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://access.redhat.com/articles/38363"}),"Red Hat Support Portal"),"  "),Object(s.b)("h2",null,"Mapping to Personas"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Persona"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"task"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DevOps Engineer, SRE"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Getting support")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DevOps Engineer, SRE"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Gathering data")))),Object(s.b)("h2",null,"Getting support"),Object(s.b)("p",null,"In case you need help from Red Hat Support team, through the Customer Portal, you can submit a support case to Red Hat Support.\nYou access the URL ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://access.redhat.com/"}),"https://access.redhat.com/")," and click ",Object(s.b)("strong",{parentName:"p"},"Open a Support Case")," button.  "),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"81.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABcSAAAXEgFnn9JSAAADyElEQVQ4y6VS3U+bVRx+nWYSpKXYLyi0tHy0tAMKtIAFJsNpsv0NXi3Ih0ApbF1paVnHGBkmJpoYvfXG6GLm4iYTErclaoxXMzF6M7bI10bpB6Vf0EJfzuPvfWHojVee5Mnznvc85znP+Z0f19TayTtdF+FyjTO324OJCR+Gh53o7e0T8V7fAAYG3j9Gv4D+QQwODmFoaAQej5fgg9frR1f32+CUlWa+90I/XG4f6x+9hL6RcQwIPDyGAec4Ri9Pwun2YmjcjZFLExjzBuDyTGJswg934CqGLnowODqGdy/0QmduACctq+LrlBqYGlqZwmCGotIEud4MSVkVCZqgtdgg19VCqTdBY7JCX29HibYaaoMJKr0REo0BhWotClUaaM2N4GTlNbxgpK6yMJ3FTj+bUWqoo7kZSjIXjNS0rqqsJTaSoQ1WRzdsXT2wtneipeM0HGfPo/XMO9CfagGnMNTzluZ2tHS+xdp6zsPRcw62jm4oKqqg1NVATSnKa05BW9cIldYAeYUBd76bx9bWFjZCm4hGY8jlcnjy9Cm0tUZwqpom3mzvQnvPOdbkOIOWrrMQ2NzchsbWDjQ73kS93QF9XT20NSbIVKW4/9OvEAaPf0Y8Hqf1WiFhI++8HMCnn99kcx99hkpLC9WoFiWUUFaqg0RRhiJ5KQqkJThZVIxXJcWYnv0AdxYf4ta387h7bwGLPzzAl1/fgqXtNDiNyc4bGtphtHWzausbVDcjiqnIUnooKZnJ1OV4XVMJla4aFaYGQiO++OomlpYe49Gj3/D7H3/i8dITzH+/AKPVBu6ErJznXlOAk6gYVyAD91IBOO4k8REKS3CiSA6uQIqXJXK8IlXgw48/wY8//4J7C4u4/+Ahvrl9G5OBK3SwDpw3OMsHrt0AgU3NzGEyOAPflWnia5iauQH/1euYFOaEwPR1+IPT4rp/ehZeMvH4/PAFphCcmUVwdg7ci9pms7ssv78PPp/H/xncTnaf3wjHsLy8zFZWV7G5uSm2xDFiMcQTSaxvhEnzF1ZWVgkroi4cDouaGGmSySQODg7AZfd4fjMax9raKltbXxeFiUQC29vbR4gjmUojGotj4/lzhEIhRCIR0UwwSqfTSKVS2NnZOUwoGCZSGWrQKIuSQDgxk8mIwnT6kLPZLPapHDu7u9ilb/avKzLGRAjpBOZye/kX/cn+szAkpB3ER+DzRIcGh9vYsbFoGA5TPSIxtpXex1YqR4lyYtJIIotIMocDSpd49gyxUBjRSBKJcBx7dM0MJU5k9pAkCI+ZJ/wNhvtaxKmJi+EAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"support_1",title:"support_1",src:"/static/d3f7abaa3ee7926b44ff14473db79e3a/3cbba/support_1.png",srcSet:["/static/d3f7abaa3ee7926b44ff14473db79e3a/7fc1e/support_1.png 288w","/static/d3f7abaa3ee7926b44ff14473db79e3a/a5df1/support_1.png 576w","/static/d3f7abaa3ee7926b44ff14473db79e3a/3cbba/support_1.png 1152w","/static/d3f7abaa3ee7926b44ff14473db79e3a/e35c7/support_1.png 1372w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("p",null,"Or you access the URL ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://access.redhat.com/support/"}),"https://access.redhat.com/support/")," and click ",Object(s.b)("strong",{parentName:"p"},"OPEN NEW CASE")," button.  "),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"80.20833333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABcSAAAXEgFnn9JSAAADbElEQVQ4y21SbWsUVxQeUPxglWAotSIi1g/aikm0QesnpRES/SABWwpCFcyuiaZ5s+36HlBUzMafYksaWtuG0j8gaNx03c3Ozsy+JTub3ZnZ2ZnZnVmTPJ5zE4u0Xng455577nOec8+V2jo+R3hgEN9fv40fCJGb4wJjP97AwHdjCF8eQv/g6DsY+dfn8+GrEdwZv4srg8PoONQJqXX7Dpw/dw6RyHUMjY5hcHgEt+6M4969+7j/4CEmopOITj7GxERUIBpd8ycp9ujRBG7eIiHXbqD37Ndo/ehjSJu2tuCTzZuxa8dObGn9ELv37EV7+yHs3/cpvjh6DIcPd+LgwXYRa2vrQGfnERw40Cbsvv2f4YOWVkjSBkgbN5G/DdLxL7vQfaYXXT2n0fvVNwj3X0ZfuB/hSwMIXerHxYsh9PWFEQqFyYbEnvHt+Qs403sWXd2ncLK7h2wPTnSdhOTV6whsG95SCfVyGV6J7NKS2LslHQ06rzcaCIIAKysrAsvLy/8DL8MwIDWbTbhEWC4WUdaLwhpExlZfWBBJJSrgOI64tLq6iv+utzGbeCTf99EgBQuFPMqkzq5WUSWwKsd1USRS2zJhmaYgr5PiCnWiLy7CNCoEQ8S5A74nBYEPx/OQKiwib1go1RwUSR0Tm1RRIT9XMZAr6ijpuiBcMi2oegnFWg0l7oCEcKdrCsmpGyYK09PQp6ZgPp1GlRQ4pNzJaDB+nYLxy08wnz+DRW27FLcTcRhTT2BM/wxrPkmFawg4LghJql+1UP17BvbMU1h//QGbWnH9AE4+D2vmd1S5SGwWNj1BPWjCS8uw//xN5Duaghqpfk3C1lum6dGD+oSA0GQ0X8NvrsBffSfG55y7PtH3LaGwUqnAo1Y8Yvf4+7BPb+p5LjxS5Dk1uPRWLsV5SDztGu1rdnUN7BP4TqFQgKRpGrLUQjoWgxKPI51OQ1EUAVmWwecLNGnGIk32feAzHmQikYCUzWaR1nKYfSVDVjQiUKGqqiDkM3GJkpOyhn+SCmIJRVhNXc8jcFGdfkAqlVojlNUsns+loGZy9B8LQjoTcVVOFNWTKczFk5iXVSqcWS+uIZPJCMs53JGkkpIEVX8Wk/EqKZOytEjI04TfIpfLYy4h48XcPF7GZcSom1my86m0eCJWym3H6cneAFVTHu8JkOtVAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"support_3",title:"support_3",src:"/static/315e72f13022492a28d6aae28c8d117c/3cbba/support_3.png",srcSet:["/static/315e72f13022492a28d6aae28c8d117c/7fc1e/support_3.png 288w","/static/315e72f13022492a28d6aae28c8d117c/a5df1/support_3.png 576w","/static/315e72f13022492a28d6aae28c8d117c/3cbba/support_3.png 1152w","/static/315e72f13022492a28d6aae28c8d117c/b5909/support_3.png 1400w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("p",null,"Then you will get an ",Object(s.b)("strong",{parentName:"p"},"OPEN A SUPPORT CASE")," page as follow and fill in blanks.  Then, submit it to the support.    "),Object(s.b)("p",null,Object(s.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"80.55555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABcSAAAXEgFnn9JSAAACuElEQVQ4y42T208TQRTGNyH6gBEiGglqNBoTiQEqN0N8MwoBEoUoL8QQIlAwBVoQiw0XH8CEgv+hL15Kr7vdW/fS287nnFlb2xCIk/xyds7OfPudmbNSb2DAWVoJsU/Rz150O+bFYjvexuaWtx7e8NbXI144sulFNj42sboW9lY+hESkPTu7+yIfeDLkSR2dXe7c7Cyi0W22Go4gtBbG3v4XHBwc4vDwK46PTwRHR3FBPH4sODn5hjif7+zuYWs7hum3M7jZdRvS5avt7v3WVty9dYe13ehk9x48ZIFAP+vufsxGRp6xgYFh1tsbELm+vn42OPiU9fT0saHBYfaIr7nS3sEkqYVJLZdY27XrTHr+ctQdfz2NiVdTbPbdHEKhVSwtLf8liIWFJSwuBhEMLtfzNJ+ff4+pNzMYHZ/E2MSkiC/GxiE5juMWi0XomsYMwwBRKpXAGIPnefXYCA2e9t9xuAIq1SpM04TExVxaUK1WWW0DLbxoOLYF2yqIaFkWZFVDsVzhcxuS6w8UCgVGTiuVihDlHziXdE7Fr1QepzkdSU5G0VEpl7mG5TsUJes6FyxdKER4XhVZzcaPlIq07AtqpiOcc1O+YKVSJuvM/Xt2/kbvDH6ewTINyNk0FDmLHI+amheCVH7doclLpsuolXw+Vaimi7TqwrDL0K0SLKfc7JCEDNNiZS52nruaQ6pA1XT8/J1AMpkSKEr+nyDdCLmikv/nQui9XrD5+WnI5Q1xIaZlnxW0bZvxngTBn5so8xsUH6Ie5A4VzUQyLUPmznJyXvRukyAt5mWLM6xBIo2uGjF4A6czOWRyiiDLoaOoXwpt4lH0IfUkRaLW4BRr8BkyqoPvpzpSioWEXOBzv2Txp3CborG5bUYJsk0l0DNFOgJy2+heURQkEgmkkqfIpJNQ84roDsr/AeTMRQ2akgMFAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"support_2",title:"support_2",src:"/static/e8d2c4b5ecffa44d58f4bc812199aaa7/3cbba/support_2.png",srcSet:["/static/e8d2c4b5ecffa44d58f4bc812199aaa7/7fc1e/support_2.png 288w","/static/e8d2c4b5ecffa44d58f4bc812199aaa7/a5df1/support_2.png 576w","/static/e8d2c4b5ecffa44d58f4bc812199aaa7/3cbba/support_2.png 1152w","/static/e8d2c4b5ecffa44d58f4bc812199aaa7/b5909/support_2.png 1400w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"  "),Object(s.b)("h2",null,"Gathering data about your cluster"),Object(s.b)("p",null,"When opening and submitting a support case, it is recommended to provide the following information about your cluster to Red Hat Support to aid in troubleshooting:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Data gathered using the ",Object(s.b)("strong",{parentName:"li"},"oc adm must-gather")," command"),Object(s.b)("li",{parentName:"ul"},"The unique cluster ID.")),Object(s.b)("p",null,Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.ibm.com/CASE/OCP-Day2-operations/blob/master/Support/must-gather.txt"}),"Here")," is the sample output of the ",Object(s.b)("strong",{parentName:"p"},"oc adm must-gather")," command.",Object(s.b)("br",{parentName:"p"}),"\n","Note that the oc adm must-gather command will take a few minutes to complete.    "),Object(s.b)("p",null,"There are a few ways to get the unique cluster ID.",Object(s.b)("br",{parentName:"p"}),"\n","You can get it via the ",Object(s.b)("strong",{parentName:"p"},"oc get clusterversion")," command as follow."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"$ oc get  clusterversion version -o jsonpath='{.spec.clusterID}{\"\\n\"}'\n")),Object(s.b)("p",null,"You can also access this information from the console using the (?), help, button, located in the top right corner of the UI, and selecting the ",Object(s.b)("strong",{parentName:"p"},"About")," option.",Object(s.b)("br",{parentName:"p"}),"\n","Then, you will get a new window and see the Cluster ID as shown in below.\n",Object(s.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"515px"}}),"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98.95833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACL0lEQVQ4y5VUTY4SQRjtX5puoJuGbv4zzoQ4EGblwowLb+EBOICXYOfWGLeDjAxrdp7AhQlRM22iUcnABTjDs15BkRmlZ9rF4/u6qnj1vr/SHMeBZdvQDAOapsEWvud5cF1Xgn6hUMgMzRQErq7jSbuJp+fnaDQayOVykoiwLAu62M8Kjeos4US+j+OTE0lYLpdRqVQQRZFUaQj1pmlmgsYQjV24h8C9rJCE1o4wDQyDYT8EkklhhmGiVCyi3++j1+tJ2+128fj0FIPBmVw7OnqEZrOJVquFTqcjLVOjvuv1uiSVhHQYduCX4JdKwvrwRN6KBU9c5Elr6FpqSm5DhkynffYML958xIdP33GdJFh8TfAl+YFF8guL65/4/O03bm5WWK/XWK1Wd7BcLrHZbDAajbbEuviJjgd4/vI1Xr0d43LyDuPJJS7GE1xM3gt/KnF1NcNs9i+m0ynm8zmGw+GW0DQt5J0cWrUqwnIANjo3lP0fbKvMCgk4Th5OPi+b2rYtlMIIQdyG64ci4eZu3U7FvihSoSCK41iCzcybOEax8LmWtan3hAyvVqvBFxUmETfoh2GIomiptD8fnBRFSGWUraaDoxcEgfz+e14V2SFSjfljfticfAzUoWq1Ki8h6DMChs9znG8S36uQnX/7IWC4BJXSkpQ+LS9OJ9wp5O0qfwTDpTr16iilBM+lEloWHwd9n6v9xj39ps4dzOGW0LhTvSzvX2qVVUNm7bWH8AdWwvXPjDoXlwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"support_4",title:"support_4",src:"/static/4ae8fe880671e58861e56a1e346235e1/ecb64/support_4.png",srcSet:["/static/4ae8fe880671e58861e56a1e346235e1/7fc1e/support_4.png 288w","/static/4ae8fe880671e58861e56a1e346235e1/ecb64/support_4.png 515w"],sizes:"(max-width: 515px) 100vw, 515px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"  "),Object(s.b)("h2",null,"Impacting to your SLA"),Object(s.b)("p",null,"When you had an issue with your OpenShift which caused an outage of your service, you opened an issue with Red Hat. If they took 4 hours to get you a solution, you lost 4 hours of uptime.  "),Object(s.b)("p",null,"To solve the issue quicker, you need to understand how to open a support ticket and how to gather necessary data for problem determination.  We would recommend you to do a rehearsal if possible.\nFor example, you would have an experience to open a support ticket to get familiar with the procedure including how to find out the cluster ID as we mentioned before.  "),Object(s.b)("p",null,"Here is another example. If you kicked off the ",Object(s.b)("strong",{parentName:"p"},"oc adm must-gather")," command from remote terminal and the network transfer is not high enough, it may take longer than you would expect.  We saw that it took an hour to complete the command. You probably need to try the command to find out how long it will take because it will impact your SLA. You would gather data as quick as possible to send it to the support when you have an outage. Any incidents that cause outages or hits against the agreed upon SLAs should be capture and included within the platform performance measurements / your root cause analysis.  "),Object(s.b)("h2",null,"Simplifying OpenShift Case Information Gathering Workflow: Must-Gather Operator"),Object(s.b)("p",null,"While using the ",Object(s.b)("strong",{parentName:"p"},"must-gather")," command is fairly straightforward, the full end-to-end process to facilitate all of the available tasks can be time consuming. This process involves issuing the command, waiting for the associated tasks to complete, and then upload the resulting information to the Red Hat case management system.",Object(s.b)("br",{parentName:"p"}),"\n","The must-gather operator streamlines running the must-gather command and uploading the results to the Red Hat case management system. The ",Object(s.b)("strong",{parentName:"p"},"must-gather")," operator is intended to be used only by the cluster administrator as it requires elevated permissions on the cluster.  "),Object(s.b)("p",null,Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://blog.openshift.com/simplifying-openshift-case-information-gathering-workflow-must-gather-operator/"}),"https://blog.openshift.com/simplifying-openshift-case-information-gathering-workflow-must-gather-operator/"),"   "),Object(s.b)("h2",null,"Implementing Support"),Object(s.b)("p",null,"In this section, we will put a couple of lines.  Mainly, you will put the link to other page which discussed “how”."),Object(s.b)("h2",null,"Kubernetes"),Object(s.b)("p",null,"n/a "),Object(s.b)("h2",null,"OpenShift"),Object(s.b)("p",null,"The information we provide in this page is based on the OpenShift implementation."),Object(s.b)("h2",null,"On IBM Cloud"),Object(s.b)("p",null,"In case you are using OpenShift ",Object(s.b)("strong",{parentName:"p"},"Managed")," service from your cloud provider such as IBM Cloud and Azure, you would need to understand the support policy with your cloud provider."),Object(s.b)("h2",null,"With IBM Cloud Pak for MCM"),Object(s.b)("p",null,"n/a"),Object(s.b)("h2",null,"Others"),Object(s.b)("p",null,"If you have contract from 3rd vender to manage your OpenShift cluster, you need to follow the support policy provided by them. "),Object(s.b)("h2",null,"Other consideration"),Object(s.b)("p",null,"n/a"),Object(s.b)("h2",null,"Link to the official document"),Object(s.b)("p",null,"Please read the official document for more information.  "),Object(s.b)("p",null,Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/support/getting-support.html"}),"https://docs.openshift.com/container-platform/4.3/support/getting-support.html"),"\n",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/support/gathering-cluster-data.html"}),"https://docs.openshift.com/container-platform/4.3/support/gathering-cluster-data.html"),"  "))}l.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-day-2-misc-support-index-mdx-ad9dab2acd193944d6e1.js.map