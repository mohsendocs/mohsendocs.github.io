(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(6),s=(n(0),n(140)),c={id:"repo-container-stress",title:"Container Stress",sidebar_label:"Container Stress"},o={id:"projects/repo-container-stress",title:"Container Stress",description:":::important\r",source:"@site/docs/projects/repo-container-stress.md",permalink:"/docs/projects/repo-container-stress",editUrl:"https://github.com/mohsenco/mohsendocs.github.io/docs/projects/repo-container-stress.md",sidebar_label:"Container Stress",sidebar:"someSidebar",previous:{title:"Cloak Shadowsocks Docker",permalink:"/docs/projects/repo-cloak-shadowsocks-docker"},next:{title:"Docker Openresty Prometheus",permalink:"/docs/projects/repo-docker-openresty-prometheus"}},b=[],i={rightToc:b};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("div",{className:"admonition admonition-important alert alert--info"},Object(s.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(s.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"The repository of this docs is on GitHub ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mohsenmottaghi/container-stress"}),"https://github.com/mohsenmottaghi/container-stress")))),Object(s.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(s.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(s.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(s.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"This docs is not ready"))),Object(s.b)("h1",{id:"container-stress"},"container-stress"),Object(s.b)("p",null,Object(s.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/mohsenmottaghi/container-stress/workflows/Docker%20Image%20CI/badge.svg",alt:"Docker Image CI"}))," ",Object(s.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/Dockerfile-Pass-%3CCOLOR%3E.svg",alt:"Generic badge"}))," ",Object(s.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/Docker_Image_Layer-3-blue.svg",alt:"Generic badge"}))," ",Object(s.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/Docker_Image_Size-5_MB-blue.svg",alt:"Generic badge"}))," ",Object(s.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/Docker_run-Ready-%3CCOLOR%3E.svg",alt:"Generic badge"}))," ",Object(s.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/Swarm_Cluster-Ready-%3CCOLOR%3E.svg",alt:"Generic badge"}))," ",Object(s.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/Kubernetes_Deployment-Ready-%3CCOLOR%3E.svg",alt:"Generic badge"}))),Object(s.b)("p",null,"This is Stress test for container environments.\nThis project work base on ",Object(s.b)("strong",{parentName:"p"},"stress")," you can access the source on this link:\n",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://people.seas.harvard.edu/~apw/stress/"}),"https://people.seas.harvard.edu/~apw/stress/")),Object(s.b)("h1",{id:"build-dockerfile"},"Build Dockerfile"),Object(s.b)("p",null,"we use alpine as the base image. for build Dockerfile Use:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker build --tag=<DOCKER_IMAGE_NAME_TAG> .\n")),Object(s.b)("h1",{id:"stress-command"},"Stress command"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"stress")," imposes certain types of compute stress on your system"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"Usage: stress [OPTION [ARG]] ...\n -?, --help         show this help statement\n     --version      show version statement\n -v, --verbose      be verbose\n -q, --quiet        be quiet\n -n, --dry-run      show what would have been done\n -t, --timeout N    timeout after N seconds\n     --backoff N    wait factor of N microseconds before work starts\n -c, --cpu N        spawn N workers spinning on sqrt()\n -i, --io N         spawn N workers spinning on sync()\n -m, --vm N         spawn N workers spinning on malloc()/free()\n     --vm-bytes B   malloc B bytes per vm worker (default is 256MB)\n     --vm-stride B  touch a byte every B bytes (default is 4096)\n     --vm-hang N    sleep N secs before free (default none, 0 is inf)\n     --vm-keep      redirty memory instead of freeing and reallocating\n -d, --hdd N        spawn N workers spinning on write()/unlink()\n     --hdd-bytes B  write B bytes per hdd worker (default is 1GB)\n")),Object(s.b)("p",null,"Example:\n",Object(s.b)("inlineCode",{parentName:"p"},"stress --cpu 8 --io 4 --vm 2 --vm-bytes 128M --timeout 10s")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Note: Numbers may be suffixed with s,m,h,d,y (time) or B,K,M,G (size).")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"stress command examples :")),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Command"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"stress --verbose --vm 1 --vm-bytes 256M"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"stress --verbose --vm 1 --vm-bytes 256M"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"stress --verbose --vm 1 --vm-bytes 512M"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"stress --verbose --vm 1 --vm-bytes 1024M"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"stress --verbose --vm 2 --vm-bytes 256M"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"stress --verbose --vm 2 --vm-bytes 512M"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"stress --verbose --vm 2 --vm-bytes 1024M"))))),Object(s.b)("h1",{id:"run-stress-test-on-single-docker-host"},"Run Stress test on single docker host"),Object(s.b)("p",null,"For test on single docker host you can use this command:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker run --rm -it mohsenmottaghi/container-stress <COMMAND>\n")),Object(s.b)("p",null,"or"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker run --name stress -idt mohsenmottaghi/container-stress <COMMAND>\n")),Object(s.b)("h1",{id:"run-stress-test-on-swarm-cluster"},"Run Stress test on Swarm cluster"),Object(s.b)("p",null,"For stress test on Swarm cluster, you can use the ",Object(s.b)("strong",{parentName:"p"},"docker-compose.yml")," file."),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"initialize the Swarm cluster or use your current cluster")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"edit the docker-compose.yml with your specific command and replicas")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"deploy stress stack with command like this:"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker stack deploy -c docker-compose.yml <STACK_NAME>\n"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"(Optional) you can use Docker viualizer "),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker service create \\\n      --name=viz \\\n      --publish=8080:8080/tcp \\\n      --constraint=node.role==manager \\\n      --mount=type=bind,src=/var/run/docker.sock,dst=/var/run/docker.sock \\\n      dockersamples/visualizer\n")))),Object(s.b)("h1",{id:"run-stress-test-on-kubernetes-cluster"},"Run Stress test on Kubernetes Cluster"),Object(s.b)("p",null,"For stress test on kubernetes cluster, you need to deploy the Deployment ",Object(s.b)("inlineCode",{parentName:"p"},"yaml")," file."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ kubectl apply -f stress-deployment.yml\n")),Object(s.b)("p",null,"To check the deployment status:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ kubectl get deployment container-stress\n")),Object(s.b)("p",null,"or check all resources:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ kubectl get all\n")),Object(s.b)("p",null,"To remove deployment:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ kubectl delete deployment container-stress\n")),Object(s.b)("p",null,"or "),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ kubectl delete -f stress-deployment.yml\n")))}l.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,O=p["".concat(c,".").concat(d)]||p[d]||m[d]||s;return n?a.a.createElement(O,o({ref:t},i,{components:n})):a.a.createElement(O,o({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,c=new Array(s);c[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var i=2;i<s;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);