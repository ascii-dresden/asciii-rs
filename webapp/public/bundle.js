!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){t.exports=r(5)},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){"use strict";function n(){}function o(t,e){for(var r in e)t[r]=e[r];return t}function s(t,e){for(var r in e)t[r]=1;return t}function a(t,e){return 0===e&&t(),()=>{--e||t()}}function i(t){t()}function c(t,e){t.appendChild(e)}function l(t,e,r){t.insertBefore(e,r)}function u(t){t.parentNode.removeChild(t)}function d(t,e){for(var r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function p(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function m(){return document.createComment("")}function h(t,e,r,n){t.addEventListener(e,r,n)}function v(t,e,r,n){t.removeEventListener(e,r,n)}function _(t,e,r){null==r?t.removeAttribute(e):t.setAttribute(e,r)}function g(t,e){t.data=""+e}function y(t){return t}function b({a:t,b:e,delta:r,duration:n},o,s){const a=16.666/n;let i="{\n";for(let e=0;e<=1;e+=a){const n=t+r*o(e);i+=100*e+`%{${s(n,1-n)}}\n`}return i+`100% {${s(e,1-e)}}\n}`}function j(t){let e=5381,r=t.length;for(;r--;)e=(e<<5)-e^t.charCodeAt(r);return e>>>0}function x(t,e,r,o,s){let a,c,l,u=r.call(t,e,o),d=!1;return{t:s?0:1,running:!1,program:null,pending:null,run(t,e){"function"==typeof u?w.wait().then(()=>{u=u(),this._run(t,e)}):this._run(t,e)},_run(t,r){a=u.duration||300,c=u.easing||y;const o={start:window.performance.now()+(u.delay||0),b:t,callback:r||n};s&&!d&&(u.css&&u.delay&&(l=e.style.cssText,e.style.cssText+=u.css(0,1)),u.tick&&u.tick(0,1),d=!0),t||(o.group=N.current,N.current.remaining+=1),u.delay?this.pending=o:this.start(o),this.running||(this.running=!0,w.add(this))},start(r){if(t.fire(`${r.b?"intro":"outro"}.start`,{node:e}),r.a=this.t,r.delta=r.b-r.a,r.duration=a*Math.abs(r.b-r.a),r.end=r.start+r.duration,u.css){u.delay&&(e.style.cssText=l);const t=b(r,c,u.css);w.addRule(t,r.name="__svelte_"+j(t)),e.style.animation=(e.style.animation||"").split(", ").filter(t=>t&&(r.delta<0||!/__svelte/.test(t))).concat(`${r.name} ${r.duration}ms linear 1 forwards`).join(", ")}this.program=r,this.pending=null},update(t){const e=this.program;if(!e)return;const r=t-e.start;this.t=e.a+e.delta*c(r/e.duration),u.tick&&u.tick(this.t,1-this.t)},done(){const r=this.program;this.t=r.b,u.tick&&u.tick(this.t,1-this.t),t.fire(`${r.b?"intro":"outro"}.end`,{node:e}),r.b||r.invalidated?u.css&&w.deleteRule(e,r.name):(r.group.callbacks.push(()=>{r.callback(),u.css&&w.deleteRule(e,r.name)}),0==--r.group.remaining&&r.group.callbacks.forEach(i)),this.running=!!this.pending},abort(t){this.program&&(t&&u.tick&&u.tick(1,0),u.css&&w.deleteRule(e,this.program.name),this.program=this.pending=null,this.running=!1)},invalidate(){this.program&&(this.program.invalidated=!0)}}}r.r(e);let N={};function k(){N.current={remaining:0,callbacks:[]}}var w={running:!1,transitions:[],bound:null,stylesheet:null,activeRules:{},promise:null,add(t){this.transitions.push(t),this.running||(this.running=!0,requestAnimationFrame(this.bound||(this.bound=this.next.bind(this))))},addRule(t,e){if(!this.stylesheet){const t=p("style");document.head.appendChild(t),w.stylesheet=t.sheet}this.activeRules[e]||(this.activeRules[e]=!0,this.stylesheet.insertRule(`@keyframes ${e} ${t}`,this.stylesheet.cssRules.length))},next(){this.running=!1;const t=window.performance.now();let e=this.transitions.length;for(;e--;){const r=this.transitions[e];r.program&&t>=r.program.end&&r.done(),r.pending&&t>=r.pending.start&&r.start(r.pending),r.running?(r.update(t),this.running=!0):r.pending||this.transitions.splice(e,1)}if(this.running)requestAnimationFrame(this.bound);else if(this.stylesheet){let t=this.stylesheet.cssRules.length;for(;t--;)this.stylesheet.deleteRule(t);this.activeRules={}}},deleteRule(t,e){t.style.animation=t.style.animation.split(", ").filter(t=>t&&-1===t.indexOf(e)).join(", ")},wait:()=>(w.promise||(w.promise=Promise.resolve(),w.promise.then(()=>{w.promise=null})),w.promise)};function P(){return Object.create(null)}function S(t){this.destroy=n,this.fire("destroy"),this.set=n,this._fragment.d(!1!==t),this._fragment=null,this._state={}}function R(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function Y(t,e){return t!=t?e==e:t!==e}function O(t,e){var r=t in this._handlers&&this._handlers[t].slice();if(r)for(var n=0;n<r.length;n+=1){var o=r[n];if(!o.__calling)try{o.__calling=!0,o.call(this,e)}finally{o.__calling=!1}}}function I(t){t._lock=!0,L(t._beforecreate),L(t._oncreate),L(t._aftercreate),t._lock=!1}function C(){return this._state}function T(t,e){t._handlers=P(),t._slots=P(),t._bind=e._bind,t._staged={},t.options=e,t.root=e.root||t,t.store=e.store||t.root.store,e.root||(t._beforecreate=[],t._oncreate=[],t._aftercreate=[])}function M(t,e){var r=this._handlers[t]||(this._handlers[t]=[]);return r.push(e),{cancel:function(){var t=r.indexOf(e);~t&&r.splice(t,1)}}}function F(t){this._set(o({},t)),this.root._lock||I(this.root)}function $(t){var e=this._state,r={},n=!1;for(var s in t=o(this._staged,t),this._staged={},t)this._differs(t[s],e[s])&&(r[s]=n=!0);n&&(this._state=o(o({},e),t),this._recompute(r,this._state),this._bind&&this._bind(r,this._state),this._fragment&&(this.fire("state",{changed:r,current:this._state,previous:e}),this._fragment.p(r,this._state),this.fire("update",{changed:r,current:this._state,previous:e})))}function A(t){o(this._staged,t)}function L(t){for(;t&&t.length;)t.shift()()}function z(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)}var B={destroy:S,get:C,fire:O,on:M,set:F,_recompute:n,_set:$,_stage:A,_mount:z,_differs:R};function q(t){var e=t-1;return e*e*e+1}var E=function(t,e){var r=e.delay;void 0===r&&(r=0);var n=e.duration;void 0===n&&(n=400);var o=+getComputedStyle(t).opacity;return{delay:r,duration:n,css:function(t){return"opacity: "+t*o}}};var H=function(t,e){var r=e.delay;void 0===r&&(r=0);var n=e.duration;void 0===n&&(n=400);var o=e.easing;void 0===o&&(o=q);var s=e.x;void 0===s&&(s=0);var a=e.y;void 0===a&&(a=0);var i=getComputedStyle(t),c=+i.opacity,l="none"===i.transform?"":i.transform;return{delay:r,duration:n,easing:o,css:function(t){return"\n\t\t\ttransform: "+l+" translate("+(1-t)*s+"px, "+(1-t)*a+"px);\n\t\t\topacity: "+t*c}}};var G=function(t,e){var r=e.delay;void 0===r&&(r=0);var n=e.duration;void 0===n&&(n=400);var o=e.easing;void 0===o&&(o=q);var s=getComputedStyle(t),a=+s.opacity,i=parseFloat(s.height),c=parseFloat(s.paddingTop),l=parseFloat(s.paddingBottom),u=parseFloat(s.marginTop),d=parseFloat(s.marginBottom),p=parseFloat(s.borderTopWidth),f=parseFloat(s.borderBottomWidth);return{delay:r,duration:n,easing:o,css:function(t){return"overflow: hidden;opacity: "+Math.min(20*t,1)*a+";height: "+t*i+"px;padding-top: "+t*c+"px;padding-bottom: "+t*l+"px;margin-top: "+t*u+"px;margin-bottom: "+t*d+"px;border-top-width: "+t*p+"px;border-bottom-width: "+t*f+"px;"}}};r(1);const W=t=>t?"✔":"𝗫";var K={boolSym:W,clearSearch(){this.set({search:""})}};function V(t){const{component:e,ctx:r}=this._svelte;e.fire("select",{project:r.project})}function D(t,e,r){const n=Object.create(t);return n.key=e[r][0],n.project=e[r][1],n.index=r,n}function J(t,e){var r,n;function o(e){t.clearSearch()}return{c(){r=p("span"),(n=p("button")).innerHTML='<span aria-hidden="true">×</span>',h(n,"click",o),n.type="button",n.className="close",_(n,"aria-label","Close"),r.className="input-group-text",r.id="inputGroup-sizing-sm"},m(t,e){l(t,r,e),c(r,n)},d(t){t&&u(r),v(n,"click",o)}}}function Q(t,e){var r,n,o,s,a,i,d,m,_,y,b,j,N,k,w,P,S,R,Y,O,I,C,T,M,F,$,A,L,z,B,q,E,G,W,K=e.index+1,D=e.project.event.name,J=e.project.event.manager,Q=e.project.invoice.number||"",U=e.project.event.date,X=e.boolSym(e.project.checks.ready_for_offer),Z=e.boolSym(e.project.checks.ready_for_invoice),tt=e.boolSym(e.project.checks.ready_for_archive),et=e.boolSym(e.project.checks.payed_by_customer);return{c(){r=p("tr"),n=p("td"),o=f(K),s=f("\n            "),a=p("td"),i=f(D),d=f("\n            "),m=p("td"),_=f(J),y=f("\n            "),b=p("td"),j=f(Q),N=f("\n            "),k=p("td"),w=f(U),P=f("\n            "),S=p("td"),R=p("span"),Y=f(X),I=f("\n            "),C=p("span"),T=f(Z),F=f("\n            "),$=p("span"),A=f(tt),z=f("\n            "),B=p("span"),q=f(et),E=f("\n        "),R.className="checkbox",R.dataset.toggle="tooltip",R.dataset.placement="bottom",R.title=O=e.project.errors.ready_for_offer,C.className="checkbox",C.dataset.toggle="tooltip",C.dataset.placement="bottom",C.title=M=e.project.errors.ready_for_invoice,$.className="checkbox",$.dataset.toggle="tooltip",$.dataset.placement="bottom",$.title=L=e.project.errors.ready_for_archive,B.className="checkbox",S.className="checkbox svelte-ccexqv",r._svelte={component:t,ctx:e},h(r,"click",V),r.className="svelte-ccexqv"},m(t,e){l(t,r,e),c(r,n),c(n,o),c(r,s),c(r,a),c(a,i),c(r,d),c(r,m),c(m,_),c(r,y),c(r,b),c(b,j),c(r,N),c(r,k),c(k,w),c(r,P),c(r,S),c(S,R),c(R,Y),c(S,I),c(S,C),c(C,T),c(S,F),c(S,$),c($,A),c(S,z),c(S,B),c(B,q),c(r,E),W=!0},p(t,n){e=n,W&&!t.filteredProjects||D===(D=e.project.event.name)||g(i,D),W&&!t.filteredProjects||J===(J=e.project.event.manager)||g(_,J),W&&!t.filteredProjects||Q===(Q=e.project.invoice.number||"")||g(j,Q),W&&!t.filteredProjects||U===(U=e.project.event.date)||g(w,U),W&&!t.boolSym&&!t.filteredProjects||X===(X=e.boolSym(e.project.checks.ready_for_offer))||g(Y,X),W&&!t.filteredProjects||O===(O=e.project.errors.ready_for_offer)||(R.title=O),W&&!t.boolSym&&!t.filteredProjects||Z===(Z=e.boolSym(e.project.checks.ready_for_invoice))||g(T,Z),W&&!t.filteredProjects||M===(M=e.project.errors.ready_for_invoice)||(C.title=M),W&&!t.boolSym&&!t.filteredProjects||tt===(tt=e.boolSym(e.project.checks.ready_for_archive))||g(A,tt),W&&!t.filteredProjects||L===(L=e.project.errors.ready_for_archive)||($.title=L),W&&!t.boolSym&&!t.filteredProjects||et===(et=e.boolSym(e.project.checks.payed_by_customer))||g(q,et),r._svelte.ctx=e},i(e,n){W||(t.root._intro&&(G&&G.invalidate(),t.root._aftercreate.push(()=>{G||(G=x(t,r,H,{},!0)),G.run(1)})),this.m(e,n))},o(e){W&&(G||(G=x(t,r,H,{},!1)),G.run(0,()=>{e(),G=null}),W=!1)},d(t){t&&u(r),v(r,"click",V),t&&G&&G.abort()}}}function U(t){T(this,t),this._state=o({boolSym:W,search:""},t.data),this._recompute({search:1,projects:1},this._state),this._intro=!!t.intro,this._fragment=function(t,e){var r,n,o,s,i,m,y,b,j,x,N,w,P,S,R=e.filteredProjects.length,Y=!1;function O(){Y=!0,t.set({search:m.value}),Y=!1}for(var I=e.search&&J(t),C=e.filteredProjects,T=[],M=0;M<C.length;M+=1)T[M]=Q(t,D(e,C,M));function F(t,e,r){T[t]&&T[t].o(()=>{e&&(T[t].d(e),T[t]=null),r&&r()})}return{c(){r=p("div"),n=p("div"),o=p("span"),s=f(R),i=f("\n    "),m=p("input"),y=f("\n    "),b=p("div"),I&&I.c(),j=f("\n\n"),x=p("div"),N=p("div"),w=p("table"),P=p("tbody");for(var t=0;t<T.length;t+=1)T[t].c();o.className="input-group-text",o.id="inputGroup-sizing-sm",n.className="input-group-prepend",h(m,"input",O),m.placeholder="filter",_(m,"type","text"),m.className="form-control",_(m,"aria-label","Sizing example input"),_(m,"aria-describedby","inputGroup-sizing-sm"),b.className="input-group-prepend",r.className="input-group mb-3",w.id="project-list",w.className="table table-striped table-sm",N.className="table-responsive",x.id="projects",x.className="container-fluid svelte-ccexqv"},m(t,a){l(t,r,a),c(r,n),c(n,o),c(o,s),c(r,i),c(r,m),m.value=e.search,c(r,y),c(r,b),I&&I.m(b,null),l(t,j,a),l(t,x,a),c(x,N),c(N,w),c(w,P);for(var u=0;u<T.length;u+=1)T[u].i(P,null);S=!0},p(e,r){if(S&&!e.filteredProjects||R===(R=r.filteredProjects.length)||g(s,R),!Y&&e.search&&(m.value=r.search),r.search?I||((I=J(t)).c(),I.m(b,null)):I&&(I.d(1),I=null),e.filteredProjects||e.boolSym){C=r.filteredProjects;for(var n=0;n<C.length;n+=1){const o=D(r,C,n);T[n]?T[n].p(e,o):(T[n]=Q(t,o),T[n].c()),T[n].i(P,null)}for(k();n<T.length;n+=1)F(n,1)}},i(t,e){S||this.m(t,e)},o(t){if(!S)return;const e=a(t,(T=T.filter(Boolean)).length);for(let t=0;t<T.length;t+=1)F(t,0,e);S=!1},d(t){t&&u(r),v(m,"input",O),I&&I.d(),t&&(u(j),u(x)),d(T,t)}}}(this,this._state),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),I(this)),this._intro=!0}o(U.prototype,B),o(U.prototype,K),U.prototype._recompute=function(t,e){(t.search||t.projects)&&this._differs(e.filteredProjects,e.filteredProjects=function({search:t,projects:e}){t=t.toLowerCase();const r=e=>e&&e.toLowerCase().includes(t);return e.filter(([,e])=>{const{event:{name:n,manager:o},client:{full_name:s},invoice:{number_long:a,number:i}}=e;return 0===t.length||[n,o,s,a,i].some(r)})}(e))&&(t.filteredProjects=!0)},U.prototype._differs=Y;var X=U;r(2);function Z(t,e,r){const n=Object.create(t);return n.gross_sum=e[r].gross_sum,n.tax_sum=e[r].tax_sum,n.tax_value=e[r].tax_value,n}function tt(t,e,r){const n=Object.create(t);return n.name=e[r].name,n.price=e[r].price,n.amount=e[r].amount,n.cost=e[r].cost,n.price=e[r].price,n.tax=e[r].tax,n.index=r,n}function et(t,e){var r,n,o,s=e.date&&rt(t,e);return{c(){r=p("h3"),n=f(e.name),o=f(" "),s&&s.c(),r.className="card-title"},m(t,e){l(t,r,e),c(r,n),c(r,o),s&&s.m(r,null)},p(e,o){e.name&&g(n,o.name),o.date?s?s.p(e,o):((s=rt(t,o)).c(),s.m(r,null)):s&&(s.d(1),s=null)},d(t){t&&u(r),s&&s.d()}}}function rt(t,e){var r,n;return{c(){r=p("small"),n=f(e.date)},m(t,e){l(t,r,e),c(r,n)},p(t,e){t.date&&g(n,e.date)},d(t){t&&u(r)}}}function nt(t,e){var r;return{c(){r=f("−")},m(t,e){l(t,r,e)},p:n,d(t){t&&u(r)}}}function ot(t,e){var r;return{c(){r=f(e.id)},m(t,e){l(t,r,e)},p(t,e){t.id&&g(r,e.id)},d(t){t&&u(r)}}}function st(t,e){var r,n,o,s,a,i,d,m,h,v,_,y,b,j,x,N,k,w=e.index+1,P=e.name,S=e.amount,R=e.price,Y=e.cost;return{c(){r=p("tr"),n=p("td"),o=f(w),s=f("\n                "),a=p("td"),i=f(P),m=f("\n                "),h=p("td"),v=f(S),_=f("x"),y=f("\n                "),b=p("td"),j=f(R),x=f("\n                "),N=p("td"),k=f(Y),n.className="number svelte-w0m8ky",a.className="checkbox",a.dataset.toggle="tooltip",a.dataset.placement="bottom",a.title=d=100*e.tax+"%",h.className="number svelte-w0m8ky",b.className="cost svelte-w0m8ky",N.className="cost svelte-w0m8ky"},m(t,e){l(t,r,e),c(r,n),c(n,o),c(r,s),c(r,a),c(a,i),c(r,m),c(r,h),c(h,v),c(h,_),c(r,y),c(r,b),c(b,j),c(r,x),c(r,N),c(N,k)},p(t,e){t.bill&&P!==(P=e.name)&&g(i,P),t.bill&&d!==(d=100*e.tax+"%")&&(a.title=d),t.bill&&S!==(S=e.amount)&&g(v,S),t.bill&&R!==(R=e.price)&&g(j,R),t.bill&&Y!==(Y=e.cost)&&g(k,Y)},d(t){t&&u(r)}}}function at(t,e){var r,n,o,s,a,i,d,m,h,v,_,y,b,j=e.desc.gross_total,x=e.tax_value,N=e.tax_sum;return{c(){r=p("tr"),n=p("td"),o=f("\n                "),s=p("td"),a=f(j),i=f("\n            "),d=p("tr"),m=p("td"),h=f(x),v=f("%"),_=f("\n                "),y=p("td"),b=f(N),n.className="number svelte-w0m8ky",n.colSpan="4",s.className="number svelte-w0m8ky",s.colSpan="1",m.className="tax svelte-w0m8ky",m.colSpan="4",y.className="number svelte-w0m8ky",y.colSpan="1"},m(t,e){l(t,r,e),c(r,n),c(r,o),c(r,s),c(s,a),l(t,i,e),l(t,d,e),c(d,m),c(m,h),c(m,v),c(d,_),c(d,y),c(y,b)},p(t,e){t.desc&&j!==(j=e.desc.gross_total)&&g(a,j),t.desc&&x!==(x=e.tax_value)&&g(h,x),t.desc&&N!==(N=e.tax_sum)&&g(b,N)},d(t){t&&(u(r),u(i),u(d))}}}function it(t,e){var r,n=e.tax_value>0&&at(0,e);return{c(){n&&n.c(),r=m()},m(t,e){n&&n.m(t,e),l(t,r,e)},p(t,e){e.tax_value>0?n?n.p(t,e):((n=at(0,e)).c(),n.m(r.parentNode,r)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&u(r)}}}function ct(t){T(this,t),this._state=o({},t.data),this._intro=!!t.intro,this._fragment=function(t,e){var r,n,o,s,a,m,h,v,_,y,b,j,x,N,k,w,P,S,R,Y=e.desc.net_total,O=e.name&&et(t,e);function I(t){return t.id?ot:nt}for(var C=I(e),T=C(t,e),M=e.bill,F=[],$=0;$<M.length;$+=1)F[$]=st(0,tt(e,M,$));var A=e.desc.sums,L=[];for($=0;$<A.length;$+=1)L[$]=it(0,Z(e,A,$));return{c(){r=p("div"),n=p("div"),O&&O.c(),o=f("\n\n        "),s=p("div"),a=f("Nummer: "),T.c(),m=f("\n\n        "),h=p("table"),(v=p("thead")).innerHTML='<tr><th class="number"></th>\n\t\t\t                <th>Produkt</th>\n\t\t\t                <th class="number">Anzahl</th>\n\t\t\t                <th class="cost">Einzelpreis</th>\n\t\t\t                <th class="cost">Kosten</th></tr>',_=f("\n            "),y=p("tbody");for(var t=0;t<F.length;t+=1)F[t].c();for(b=f("\n\n            "),j=p("tfoot"),t=0;t<L.length;t+=1)L[t].c();x=f("\n            "),N=p("tr"),k=p("td"),w=f("\n                "),P=p("td"),S=f(Y),s.className="card-text",v.className="thead-light",k.className="number svelte-w0m8ky",k.colSpan="4",P.className="total svelte-w0m8ky",j.className="table-borderless table-sm",h.className="table table-light table-responsive",n.className="card-body",r.className="card"},m(t,e){l(t,r,e),c(r,n),O&&O.m(n,null),c(n,o),c(n,s),c(s,a),T.m(s,null),c(n,m),c(n,h),c(h,v),c(h,_),c(h,y);for(var i=0;i<F.length;i+=1)F[i].m(y,null);for(c(h,b),c(h,j),i=0;i<L.length;i+=1)L[i].m(j,null);c(j,x),c(j,N),c(N,k),c(N,w),c(N,P),c(P,S),R=!0},p(e,r){if(r.name?O?O.p(e,r):((O=et(t,r)).c(),O.m(n,o)):O&&(O.d(1),O=null),C===(C=I(r))&&T?T.p(e,r):(T.d(1),(T=C(t,r)).c(),T.m(s,null)),e.bill){M=r.bill;for(var a=0;a<M.length;a+=1){const t=tt(r,M,a);F[a]?F[a].p(e,t):(F[a]=st(0,t),F[a].c(),F[a].m(y,null))}for(;a<F.length;a+=1)F[a].d(1);F.length=M.length}if(e.desc){for(A=r.desc.sums,a=0;a<A.length;a+=1){const t=Z(r,A,a);L[a]?L[a].p(e,t):(L[a]=it(0,t),L[a].c(),L[a].m(j,x))}for(;a<L.length;a+=1)L[a].d(1);L.length=A.length}e.desc&&Y!==(Y=r.desc.net_total)&&g(S,Y)},i(t,e){R||this.m(t,e)},o:i,d(t){t&&u(r),O&&O.d(),T.d(),d(F,t),d(L,t)}}}(this,this._state),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor)),this._intro=!0}o(ct.prototype,B),ct.prototype._differs=Y;var lt=ct,ut=(r(3),{closeView(){this.destroy()}});function dt(t,e,r){const n=Object.create(t);return n.error=e[r],n}function pt(t,e,r){const n=Object.create(t);return n.error=e[r],n}function ft(t,e){var r;return{c(){(r=p("small")).textContent="🚫 Abgesagt"},m(t,e){l(t,r,e)},d(t){t&&u(r)}}}function mt(t,e){var r,n,o,s,a,i,d=e.project.client.email;return{c(){r=f("(\n                            "),n=p("a"),o=f("✉️ "),s=f(d),i=f(")"),n.href=a="mailto:"+e.project.client.email+" "},m(t,e){l(t,r,e),l(t,n,e),c(n,o),c(n,s),l(t,i,e)},p(t,e){t.project&&d!==(d=e.project.client.email)&&g(s,d),t.project&&a!==(a="mailto:"+e.project.client.email+" ")&&(n.href=a)},d(t){t&&(u(r),u(n),u(i))}}}function ht(t,e){var r,n,o=e.project.invoice.official;return{c(){r=p("strong"),n=f(o)},m(t,e){l(t,r,e),c(r,n)},p(t,e){t.project&&o!==(o=e.project.invoice.official)&&g(n,o)},d(t){t&&u(r)}}}function vt(t,e){var r,n,o,s=e.error;return{c(){r=p("li"),n=f("❌ "),o=f(s)},m(t,e){l(t,r,e),c(r,n),c(r,o)},p(t,e){t.project&&s!==(s=e.error)&&g(o,s)},d(t){t&&u(r)}}}function _t(t,e){var r,n,o,s=e.error;return{c(){r=p("li"),n=f("❌ "),o=f(s)},m(t,e){l(t,r,e),c(r,n),c(r,o)},p(t,e){t.project&&s!==(s=e.error)&&g(o,s)},d(t){t&&u(r)}}}function gt(t){T(this,t),this._state=o({},t.data),this._intro=!!t.intro,this._fragment=function(t,e){var r,n,o,s,i,m,y,b,j,N,k,w,P,S,R,Y,O,I,C,T,M,F,$,A,L,z,B,q,H,W,K,V,D,J,Q,U,X,Z,tt,et=e.project.event.name,rt=e.project.client.full_name,nt=e.project.client.address,ot=e.project.event.manager;function st(e){t.fire("close")}for(var at=e.project.checks.canceled&&ft(),it=e.project.client.email&&mt(0,e),ct=e.project.invoice.official&&ht(0,e),ut=e.project.errors.ready_for_invoice,gt=[],yt=0;yt<ut.length;yt+=1)gt[yt]=vt(0,pt(e,ut,yt));var bt=e.project.errors.ready_for_archive,jt=[];for(yt=0;yt<bt.length;yt+=1)jt[yt]=_t(0,dt(e,bt,yt));var xt={name:"Angebot",id:e.project.offer.number,date:e.project.offer.date,bill:e.project.bills.offer,desc:e.project.offer},Nt=new lt({root:t.root,store:t.store,data:xt}),kt={name:"Rechnung",id:e.project.invoice.number_long,date:e.project.invoice.date,bill:e.project.bills.invoice,desc:e.project.invoice},wt=new lt({root:t.root,store:t.store,data:kt});return{c(){r=p("hr"),n=f("\n\n"),o=p("div"),s=p("div"),(i=p("button")).innerHTML='<span aria-hidden="true">×</span>',m=f("\n\n        "),y=p("h2"),at&&at.c(),b=f("\n            "),j=f(et),N=f("\n\n        "),k=p("div"),w=p("div"),P=p("div"),S=p("span"),R=p("address"),Y=f(rt),O=f(" "),it&&it.c(),I=f("\n                            "),C=p("pre"),T=f(nt),M=f(" "),ct&&ct.c(),F=f("\n                "),$=p("div"),A=f(ot),L=f("\n                    "),z=p("ul");for(var t=0;t<gt.length;t+=1)gt[t].c();for(B=f("\n\n                    "),q=p("ul"),t=0;t<jt.length;t+=1)jt[t].c();W=f("\n\n        "),K=p("div"),V=p("div"),D=p("div"),Nt._fragment.c(),Q=f("\n                "),U=p("div"),wt._fragment.c(),h(i,"click",st),i.type="button",i.className="close svelte-19yxhpk",_(i,"aria-label","Close"),y.className="card-title",R.className="container",S.id="flex",S.className="svelte-19yxhpk",P.className="col-9",z.className="list-inline",q.className="list-inline",$.className="col-3",w.className="row",k.className="container",D.className="col",U.className="col",V.className="row",K.className="container",s.className="card-body",o.className="card"},m(t,e){l(t,r,e),l(t,n,e),l(t,o,e),c(o,s),c(s,i),c(s,m),c(s,y),at&&at.m(y,null),c(y,b),c(y,j),c(s,N),c(s,k),c(k,w),c(w,P),c(P,S),c(S,R),c(R,Y),c(R,O),it&&it.m(R,null),c(R,I),c(R,C),c(C,T),c(R,M),ct&&ct.m(R,null),c(w,F),c(w,$),c($,A),c($,L),c($,z);for(var a=0;a<gt.length;a+=1)gt[a].m(z,null);for(c($,B),c($,q),a=0;a<jt.length;a+=1)jt[a].m(q,null);c(s,W),c(s,K),c(K,V),c(V,D),Nt._mount(D,null),c(V,Q),c(V,U),wt._mount(U,null),tt=!0},p(t,e){if(e.project.checks.canceled?at||((at=ft()).c(),at.m(y,b)):at&&(at.d(1),at=null),tt&&!t.project||et===(et=e.project.event.name)||g(j,et),tt&&!t.project||rt===(rt=e.project.client.full_name)||g(Y,rt),e.project.client.email?it?it.p(t,e):((it=mt(0,e)).c(),it.m(R,I)):it&&(it.d(1),it=null),tt&&!t.project||nt===(nt=e.project.client.address)||g(T,nt),e.project.invoice.official?ct?ct.p(t,e):((ct=ht(0,e)).c(),ct.m(R,null)):ct&&(ct.d(1),ct=null),tt&&!t.project||ot===(ot=e.project.event.manager)||g(A,ot),t.project){ut=e.project.errors.ready_for_invoice;for(var r=0;r<ut.length;r+=1){const n=pt(e,ut,r);gt[r]?gt[r].p(t,n):(gt[r]=vt(0,n),gt[r].c(),gt[r].m(z,null))}for(;r<gt.length;r+=1)gt[r].d(1);gt.length=ut.length}if(t.project){for(bt=e.project.errors.ready_for_archive,r=0;r<bt.length;r+=1){const n=dt(e,bt,r);jt[r]?jt[r].p(t,n):(jt[r]=_t(0,n),jt[r].c(),jt[r].m(q,null))}for(;r<jt.length;r+=1)jt[r].d(1);jt.length=bt.length}var n={};t.project&&(n.id=e.project.offer.number),t.project&&(n.date=e.project.offer.date),t.project&&(n.bill=e.project.bills.offer),t.project&&(n.desc=e.project.offer),Nt._set(n);var o={};t.project&&(o.id=e.project.invoice.number_long),t.project&&(o.date=e.project.invoice.date),t.project&&(o.bill=e.project.bills.invoice),t.project&&(o.desc=e.project.invoice),wt._set(o)},i(e,r){tt||(t.root._intro&&(H&&H.invalidate(),t.root._aftercreate.push(()=>{H||(H=x(t,k,G,{},!0)),H.run(1)}),J&&J.invalidate(),t.root._aftercreate.push(()=>{J||(J=x(t,D,E,{},!0)),J.run(1)}),X&&X.invalidate(),t.root._aftercreate.push(()=>{X||(X=x(t,U,E,{},!0)),X.run(1)}),Z&&Z.invalidate(),t.root._aftercreate.push(()=>{Z||(Z=x(t,K,G,{},!0)),Z.run(1)})),this.m(e,r))},o(e){tt&&(e=a(e,6),H||(H=x(t,k,G,{},!1)),H.run(0,()=>{e(),H=null}),Nt&&Nt._fragment.o(e),J||(J=x(t,D,E,{},!1)),J.run(0,()=>{e(),J=null}),wt&&wt._fragment.o(e),X||(X=x(t,U,E,{},!1)),X.run(0,()=>{e(),X=null}),Z||(Z=x(t,K,G,{},!1)),Z.run(0,()=>{e(),Z=null}),tt=!1)},d(t){t&&(u(r),u(n),u(o)),v(i,"click",st),at&&at.d(),it&&it.d(),ct&&ct.d(),d(gt,t),d(jt,t),t&&H&&H.abort(),Nt.destroy(),t&&J&&J.abort(),wt.destroy(),t&&(X&&X.abort(),Z&&Z.abort())}}}(this,this._state),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),I(this)),this._intro=!0}o(gt.prototype,B),o(gt.prototype,ut),gt.prototype._differs=Y;var yt=gt;function bt(t){const{component:e,ctx:r}=this._svelte;e.fire("select",{year:r.year})}function jt(t){const{component:e,ctx:r}=this._svelte;e.fire("select",{year:r.year})}function xt(t,e,r){const n=Object.create(t);return n.year=e[r],n}function Nt(t,e){var r,n,o,s=e.year;return{c(){r=p("button"),n=f(s),o=f(" "),r._svelte={component:t,ctx:e},h(r,"click",bt),r.type="button",r.className="btn btn-light"},m(t,e){l(t,r,e),c(r,n),c(r,o)},p(t,o){e=o,t.yearsReversed&&s!==(s=e.year)&&g(n,s),r._svelte.ctx=e},d(t){t&&u(r),v(r,"click",bt)}}}function kt(t,e){var r,n,o,s=e.year;return{c(){r=p("button"),n=f(s),o=f(" "),r._svelte={component:t,ctx:e},h(r,"click",jt),r.type="button",r.className="btn btn-secondary"},m(t,e){l(t,r,e),c(r,n),c(r,o)},p(t,o){e=o,t.yearsReversed&&s!==(s=e.year)&&g(n,s),r._svelte.ctx=e},d(t){t&&u(r),v(r,"click",jt)}}}function wt(t,e){var r;function n(t){return t.selectedYear==t.year?kt:Nt}var o=n(e),s=o(t,e);return{c(){s.c(),r=m()},m(t,e){s.m(t,e),l(t,r,e)},p(e,a){o===(o=n(a))&&s?s.p(e,a):(s.d(1),(s=o(t,a)).c(),s.m(r.parentNode,r))},d(t){s.d(t),t&&u(r)}}}function Pt(t){T(this,t),this._state=o({},t.data),this._recompute({years:1},this._state),this._intro=!!t.intro,this._fragment=function(t,e){for(var r,n,o=e.yearsReversed,s=[],a=0;a<o.length;a+=1)s[a]=wt(t,xt(e,o,a));return{c(){r=p("div");for(var t=0;t<s.length;t+=1)s[t].c();r.className="btn-group",_(r,"role","group"),_(r,"aria-label","Basic example")},m(t,e){l(t,r,e);for(var o=0;o<s.length;o+=1)s[o].m(r,null);n=!0},p(e,n){if(e.selectedYear||e.yearsReversed){o=n.yearsReversed;for(var a=0;a<o.length;a+=1){const i=xt(n,o,a);s[a]?s[a].p(e,i):(s[a]=wt(t,i),s[a].c(),s[a].m(r,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=o.length}},i(t,e){n||this.m(t,e)},o:i,d(t){t&&u(r),d(s,t)}}}(this,this._state),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor)),this._intro=!0}o(Pt.prototype,B),Pt.prototype._recompute=function(t,e){t.years&&this._differs(e.yearsReversed,e.yearsReversed=function({years:t}){return t.reverse()}(e))&&(t.yearsReversed=!0)},Pt.prototype._differs=Y;var St=Pt;const Rt=([,{extras:{sort_index:t}}],[,{extras:{sort_index:e}}])=>t>e,Yt=t=>t.json(),Ot=t=>Object.entries(t).sort(Rt),It=t=>fetch(`http://localhost:8000/api/full_projects/year/${t}`).then(Yt).then(Ot),Ct=()=>fetch("http://localhost:8000/api/full_projects/workingdir").then(Yt).then(Ot);r(4);var Tt={async selectYear(t){"working"===t?(this.set({selectedYear:t}),this.set({projects:await Ct()})):(this.set({selectedYear:t}),this.set({projects:await It(t)}))},selectProject(t){this.set({selectedProject:t})},unselectProject(){this.set({selectedProject:null})}};function Mt(t){}function Ft(t,e){var r,n,o,s,a,i,d,m,h,v,_,y=e.versionInfo.version,b=e.versionInfo.built,j=e.versionInfo.commit,x=e.versionInfo.profile;return{c(){r=p("header"),n=p("small"),o=p("pre"),s=f("v"),a=f(y),i=f(" built "),d=f(b),m=f(" "),h=f(j),v=f(" --"),_=f(x),r.className="nav justify-content-end"},m(t,e){l(t,r,e),c(r,n),c(n,o),c(o,s),c(o,a),c(o,i),c(o,d),c(o,m),c(o,h),c(o,v),c(o,_)},p(t,e){t.versionInfo&&y!==(y=e.versionInfo.version)&&g(a,y),t.versionInfo&&b!==(b=e.versionInfo.built)&&g(d,b),t.versionInfo&&j!==(j=e.versionInfo.commit)&&g(h,j),t.versionInfo&&x!==(x=e.versionInfo.profile)&&g(_,x)},d(t){t&&u(r)}}}function $t(t,e){var r,n,o={project:e.selectedProject},s=new yt({root:t.root,store:t.store,data:o});return s.on("close",function(e){t.unselectProject()}),{c(){r=p("div"),s._fragment.c(),r.className="container"},m(t,e){l(t,r,e),s._mount(r,null),n=!0},p(t,e){var r={};t.selectedProject&&(r.project=e.selectedProject),s._set(r)},i(t,e){n||this.m(t,e)},o(t){n&&(s&&s._fragment.o(t),n=!1)},d(t){t&&u(r),s.destroy()}}}function At(t){T(this,t),this._state=o({},t.data),this._intro=!!t.intro,this._handlers.state=[Mt],Mt.call(this,{changed:s({},this._state),current:this._state}),this._fragment=function(t,e){var r,n,o,s,i,d,m,h,v,_,g=e.versionInfo&&Ft(0,e),y={years:e.years,selectedYear:e.selectedYear},b=new St({root:t.root,store:t.store,data:y});b.on("select",function(e){t.selectYear(e.year)});var j={projects:e.projects,selectedYear:e.selectedYear},x=new X({root:t.root,store:t.store,data:j});x.on("select",function(e){t.selectProject(e.project)});var N=e.selectedProject&&$t(t,e);return{c(){g&&g.c(),r=f("\n\n"),n=p("div"),o=p("nav"),(s=p("a")).innerHTML="<strong>asciii web</strong>",i=f("\n        "),b._fragment.c(),d=f("\n\n    "),m=p("div"),h=p("div"),x._fragment.c(),v=f("\n\n    "),N&&N.c(),s.className="navbar-brand",s.href="/",o.className="navbar navbar-light bg-light",h.className="row justify-content-md-center",m.className="container-fluid",n.className="container"},m(t,e){g&&g.m(t,e),l(t,r,e),l(t,n,e),c(n,o),c(o,s),c(o,i),b._mount(o,null),c(n,d),c(n,m),c(m,h),x._mount(h,null),c(n,v),N&&N.m(n,null),_=!0},p(e,o){o.versionInfo?g?g.p(e,o):((g=Ft(0,o)).c(),g.m(r.parentNode,r)):g&&(g.d(1),g=null);var s={};e.years&&(s.years=o.years),e.selectedYear&&(s.selectedYear=o.selectedYear),b._set(s);var a={};e.projects&&(a.projects=o.projects),e.selectedYear&&(a.selectedYear=o.selectedYear),x._set(a),o.selectedProject?(N?N.p(e,o):(N=$t(t,o))&&N.c(),N.i(n,null)):N&&(k(),N.o(function(){N.d(1),N=null}))},i(t,e){_||this.m(t,e)},o(t){_&&(t=a(t,3),b&&b._fragment.o(t),x&&x._fragment.o(t),N?N.o(t):t(),_=!1)},d(t){g&&g.d(t),t&&(u(r),u(n)),b.destroy(),x.destroy(),N&&N.d()}}}(this,this._state),this.root._oncreate.push(()=>{this.fire("update",{changed:s({},this._state),current:this._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),I(this)),this._intro=!0}o(At.prototype,B),o(At.prototype,Tt),At.prototype._differs=Y;const Lt=new At({target:document.body,data:{years:[],projects:[],selectedYear:null,selectedProject:null,versionInfo:null}});window.app=Lt,(()=>fetch("http://localhost:8000/api/projects/year").then(Yt))().then(t=>Lt.set({years:["working"].concat(t)})),Ct().then(t=>Lt.set({selectedYear:"working",projects:t})),(()=>fetch("http://localhost:8000/api/version").then(Yt))().then(t=>Lt.set({versionInfo:t}));e.default=Lt}]);