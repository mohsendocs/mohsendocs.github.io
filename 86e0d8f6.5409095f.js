(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(94)),i={id:"repo-mtu_ips_bypass",title:"MTU IPS Bypass",sidebar_label:"MTU IPS Bypass"},c={unversionedId:"projects/repo-mtu_ips_bypass",id:"projects/repo-mtu_ips_bypass",isDocsHomePage:!1,title:"MTU IPS Bypass",description:"The repository of this docs is on GitHub https://github.com/mohsenmottaghi/mtuipsbypass",source:"@site/docs/projects/repo-mtu_ips_bypass.md",permalink:"/docs/projects/repo-mtu_ips_bypass",editUrl:"https://github.com/mohsenco/mohsendocs.github.io/docs/projects/repo-mtu_ips_bypass.md",sidebar_label:"MTU IPS Bypass",sidebar:"someSidebar",previous:{title:"Docker web stack with mysql nginx proxy",permalink:"/docs/projects/repo-docker-web-stack-with-mysql-nginx-proxy"},next:{title:"NGINX Pagespeed",permalink:"/docs/projects/repo-nginx-pagespeed"}},s=[],p={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The repository of this docs is on GitHub ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mohsenmottaghi/mtu_ips_bypass"}),"https://github.com/mohsenmottaghi/mtu_ips_bypass")))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This docs is not ready"))),Object(o.b)("h1",{id:"bypass-ips-with-packet-fragmentation"},"Bypass IPS with packet fragmentation"),Object(o.b)("p",null,"This is funny project for bypass IPSs with packet fragmentation."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"http://uupload.ir/files/pyr9_fragment_series.png",alt:"Packet Fragmentation"}))),Object(o.b)("h1",{id:"why-dns-over-https-"},"Why DNS over HTTPS ?"),Object(o.b)("p",null,"In some countries, Internet ISPs try to use DNS Spoofing techniques to prevent access to websites that are hosted jointly and they can`t block their IP address.\nThat's why we try to get the actual destination address by getting through the DNS over HTTPS first and then our traffic forwarded through IPSs with Packet Fragmentation."),Object(o.b)("h1",{id:"supported-linux-distro"},"Supported Linux Distro:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Distro"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Status"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Ubuntu 18.04 LTS"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2705")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Ubuntu 16.04 LTS"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2753")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Kali Linux 2019.2"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2705")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Debian 9"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2753")))),Object(o.b)("h1",{id:"how-to-use"},"How to use"),Object(o.b)("p",null,"First set permission on script file to be executable:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$ chmod +x m-bipf.sh\n")),Object(o.b)("p",null,"then use ",Object(o.b)("em",{parentName:"p"},"help"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'$ ./m-bipf.sh --help\n\nHelp:\n      --help , -h , help              For show help of shell script\n           \n          install   , --install           For installing tools and configure network\n          ghost     , --ghost             same function as "install"\n          uninstall , --unistall          For uninstall DNS over HTTPS software\n          recovery  , --recovery          For recovery network setting to original setting\n')))}b.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(n),u=a,d=l["".concat(i,".").concat(u)]||l[u]||m[u]||o;return n?r.a.createElement(d,c(c({ref:t},p),{},{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);