import{s as $,f as p,a as b,g as c,h as g,B as E,c as I,d as _,j as h,i as B,r as a,u as q,v as D,w as K,z as M}from"../chunks/scheduler.427c93e9.js";import{S as O,i as T}from"../chunks/index.d4e4d1b7.js";import{b as P}from"../chunks/assistant.store.fd75cd50.js";function V(m){let t,n,o="Settings",v,i,e,d,A="OpenAI API Key:",x,s,y,u,L="This key is required to use the assistant feature.",C,S;return{c(){t=p("div"),n=p("h2"),n.textContent=o,v=b(),i=p("form"),e=p("div"),d=p("label"),d.textContent=A,x=b(),s=p("input"),y=b(),u=p("small"),u.textContent=L,this.h()},l(l){t=c(l,"DIV",{class:!0});var r=g(t);n=c(r,"H2",{"data-svelte-h":!0}),E(n)!=="svelte-15f2bar"&&(n.textContent=o),v=I(r),i=c(r,"FORM",{});var k=g(i);e=c(k,"DIV",{class:!0});var f=g(e);d=c(f,"LABEL",{"data-svelte-h":!0}),E(d)!=="svelte-1ntqkn9"&&(d.textContent=A),x=I(f),s=c(f,"INPUT",{type:!0,class:!0,placeholder:!0}),y=I(f),u=c(f,"SMALL",{class:!0,"data-svelte-h":!0}),E(u)!=="svelte-he9tvv"&&(u.textContent=L),f.forEach(_),k.forEach(_),r.forEach(_),this.h()},h(){h(s,"type","text"),h(s,"class","metro-input"),h(s,"placeholder","Enter your key"),h(u,"class","text-muted"),h(e,"class","form-group"),h(t,"class","cell-6 offset-3")},m(l,r){B(l,t,r),a(t,n),a(t,v),a(t,i),a(i,e),a(e,d),a(e,x),a(e,s),q(s,m[0]),a(e,y),a(e,u),C||(S=D(s,"input",m[1]),C=!0)},p(l,[r]){r&1&&s.value!==l[0]&&q(s,l[0])},i:K,o:K,d(l){l&&_(t),C=!1,S()}}}function j(m,t,n){let o;M(m,P,i=>n(0,o=i));function v(){o=this.value,P.set(o)}return[o,v]}class H extends O{constructor(t){super(),T(this,t,j,V,$,{})}}export{H as component};
