(function(){var e={4355:function(){(function(e,t){var a=t.documentElement,n=e.devicePixelRatio||1;function o(){t.body?t.body.style.fontSize=12*n+"px":t.addEventListener("DOMContentLoaded",o)}function r(){var e=a.clientWidth/100;a.style.fontSize=e+"px"}if(o(),r(),e.addEventListener("resize",r),e.addEventListener("pageshow",(function(e){e.persisted&&r()})),n>=2){var i=t.createElement("body"),d=t.createElement("div");d.style.border=".5px solid transparent",i.appendChild(d),a.appendChild(i),1===d.offsetHeight&&a.classList.add("hairlines"),a.removeChild(i)}})(window,document)},9274:function(e,t,a){"use strict";var n=a(5130),o=a(6768);function r(e,t){const a=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(a)}var i=a(1241);const d={},c=(0,i.A)(d,[["render",r]]);var s=c,u=a(1387);var l=a(4232);var v=a(144);const p={class:"HelloIndexBox"},f=(0,o.Fv)('<div data-v-d148e06c></div><div class="CHJOOLogo" data-v-d148e06c><div id="REye" data-v-d148e06c><div id="OrbitalCavityR" data-v-d148e06c><div id="EyeballR" data-v-d148e06c></div></div></div><div id="LEye" data-v-d148e06c><div id="OrbitalCavityL" data-v-d148e06c><div id="EyeballL" data-v-d148e06c></div></div></div><div class="Mouth" data-v-d148e06c></div></div>',2),m=[f];var h={__name:"HomePage",setup(e){var t=(0,v.KR)(0),a=(0,v.KR)(0);function n(e){var n=(0,v.KR)(window.innerWidth),o=(0,v.KR)(window.innerHeight);t.value=e.clientX,a.value=e.clientY,r(parseFloat(n.value),parseFloat(o.value))}function r(e,n){var o=document.getElementById("EyeballL"),r=document.getElementById("EyeballR"),i=window.getComputedStyle(r),d=parseFloat(i.getPropertyValue("width")),c=parseFloat(i.getPropertyValue("height")),s=document.getElementById("OrbitalCavityR"),u=window.getComputedStyle(s),l=s.getBoundingClientRect(),v=parseFloat(u.getPropertyValue("width")),p=parseFloat(u.getPropertyValue("height")),f=l.left,m=l.top,h=2*(1-(f+v/2)/e),g=(m+p/2)/n*2,b=a.value*p/n*g;b>p-c&&(b=p-c);var w=t.value*v/e*h;w>v-d&&(w=v-d);var y=t.value>e*(1-h)?t.value-e*(1-h):0,C=y*v/e*h;C>v-d&&(C=v-d),r.style.top=b+"px",r.style.left=C+"px",o.style.top=b+"px",o.style.left=w+"px"}return(0,o.sV)((()=>{window.addEventListener("mousemove",n)})),(0,o.hi)((()=>{window.removeEventListener("mousemove",n)})),(e,t)=>((0,o.uX)(),(0,o.CE)("div",p,m))}};const g=(0,i.A)(h,[["__scopeId","data-v-d148e06c"]]);var b=g,w=a.p+"img/logo.17252c8d.jpg";const y=e=>((0,o.Qi)("data-v-16989eda"),e=e(),(0,o.jt)(),e),C={class:"ResumeMain"},E=(0,o.Fv)('<div class="PersonalIntroduction" data-v-16989eda><div class="HeadPortrait" data-v-16989eda><img src="'+w+'" class="HeadPortraitImg" data-v-16989eda></div><div class="Introduce" data-v-16989eda><p class="IntroduceText" data-v-16989eda><span class="IntroduceTextChild1" data-v-16989eda> CHJOO（曾永键）</span><br data-v-16989eda><span class="IntroduceTextChild2" data-v-16989eda>艺术家 &amp; 程序员</span><br data-v-16989eda><span class="IntroduceTextChild3" data-v-16989eda>你好！我叫曾永键，今年21岁，是一名刚毕业于软件开发专业的应届生，大学期间热衷于前端技术的开发。我熟练掌握HTML5、CSS3、JavaScript及Vu3，目前正学习Cocos creator。</span><br data-v-16989eda><span class="IntroduceTextChild4" data-v-16989eda>我对响应式设计和可访问性有着深刻的理解，能够确保网站在各种设备上都能提供出色的用户体验。因此，我正在积极寻找一段长期的前端开发工作机会。</span></p></div></div>',1),k=y((()=>(0,o.Lk)("div",{clas:"",s:"Working"}," 软件 ",-1))),L={class:"Software"},x=y((()=>(0,o.Lk)("p",{class:"SoftwareTitle"},"工作经历",-1))),j={class:"WorkExperienceName"},I={class:"WorkExperienceNameLi"},O={class:"WorkExperienceNameLi2"},_=y((()=>(0,o.Lk)("div",{class:"EventLine"}," 时间线 ",-1))),R={class:"ContactInformation"},P=["src"],S={class:"ContactAddress"};var T={__name:"Resume",setup(e){const t=(0,v.KR)([{img:"https://sns-avatar-qc.xhscdn.com/avatar/62f3d26a5690241205fabd3d.jpg?imageView2/2/w/540/format/webp|imageMogr2/strip2",url:"https://www.zhihu.com/people/chjoo-91"},{img:"https://sns-avatar-qc.xhscdn.com/avatar/62f3d26a5690241205fabd3d.jpg?imageView2/2/w/540/format/webp|imageMogr2/strip2",url:"https://www.xiaohongshu.com/user/profile/5d332a82000000001100cbf3"},{img:"https://sns-avatar-qc.xhscdn.com/avatar/62f3d26a5690241205fabd3d.jpg?imageView2/2/w/540/format/webp|imageMogr2/strip2",url:"https://github.com/IchjooI"},{img:"https://sns-avatar-qc.xhscdn.com/avatar/62f3d26a5690241205fabd3d.jpg?imageView2/2/w/540/format/webp|imageMogr2/strip2",url:"www_chjoo@163.com"}]),a=(0,v.KR)([{name:"2021/创办启程工作室（创始人）",briefIntroduction:"位于广东的某学院建信学院与学院院长共同创办了该校首个以竞赛为主的创新工作室。"},{name:"2023/北京云测信息技术有限技术公司（兼容测试工程师）",briefIntroduction:"在北京云测信息技术有限公司担任测试工程师期间，我专注于编写高质量的测试用例，并进行细致的测试评估工作。"}]);function n(e){return e%2===0}return(e,r)=>((0,o.uX)(),(0,o.CE)("div",C,[E,k,(0,o.Lk)("div",L,[x,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.value,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{class:"WorkExperience",key:t},[(0,o.Lk)("p",j,[(0,o.Lk)("li",I,(0,l.v_)(e.name),1),(0,o.Lk)("li",O,(0,l.v_)(e.briefIntroduction),1)])])))),128))]),_,(0,o.Lk)("div",R,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.value,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{class:"ContactSubmodule",key:t},[(0,o.Lk)("img",{src:e.img,alt:"",class:"ContactLogo"},null,8,P),(0,o.Lk)("div",S,[(0,o.Lk)("div",{class:(0,l.C4)({ContactBlank:n(t),ContactBlank2:!n(t)})},null,2),(0,o.Lk)("p",{class:(0,l.C4)({ContactUrl:n(t),ContactUrl2:!n(t)})},(0,l.v_)(e.url),3)])])))),128))])]))}};const F=(0,i.A)(T,[["__scopeId","data-v-16989eda"]]);var M=F;const V=[{path:"/",name:"home",component:b},{path:"/Me",name:"Resume",component:M},{path:"/about",name:"about",component:()=>a.e(594).then(a.bind(a,6628))}],B=(0,u.aE)({history:(0,u.Bt)(""),routes:V});var H=B,A=a(782),K=(0,A.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});a(4355);(0,n.Ef)(s).use(K).use(H).mount("#app")}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,r){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],r=e[u][2];for(var d=!0,c=0;c<n.length;c++)(!1&r||i>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(d=!1,r<i&&(i=r));if(d){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,o,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/about.21b75a3d.js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="is-chjoo:";a.l=function(n,o,r,i){if(e[n])e[n].push(o);else{var d,c;if(void 0!==r)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var l=s[u];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==t+r){d=l;break}}d||(c=!0,d=document.createElement("script"),d.charset="utf-8",d.timeout=120,a.nc&&d.setAttribute("nonce",a.nc),d.setAttribute("data-webpack",t+r),d.src=n),e[n]=[o];var v=function(t,a){d.onerror=d.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((function(e){return e(a)})),t)return t(a)},p=setTimeout(v.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=v.bind(null,d.onerror),d.onload=v.bind(null,d.onload),c&&document.head.appendChild(d)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){var e={524:0};a.f.j=function(t,n){var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(a,n){o=e[t]=[a,n]}));n.push(o[2]=r);var i=a.p+a.u(t),d=new Error,c=function(n){if(a.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",d.name="ChunkLoadError",d.type=r,d.request=i,o[1](d)}};a.l(i,c,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,i=n[0],d=n[1],c=n[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in d)a.o(d,o)&&(a.m[o]=d[o]);if(c)var u=c(a)}for(t&&t(n);s<i.length;s++)r=i[s],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},n=self["webpackChunkis_chjoo"]=self["webpackChunkis_chjoo"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(9274)}));n=a.O(n)})();
//# sourceMappingURL=app.46ad46ed.js.map