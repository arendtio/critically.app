import{s as $,n as q,e as B}from"../chunks/scheduler.72a81396.js";import{S as D,i as M,g as p,s as g,h as c,j as b,x as E,c as I,f as _,k as h,a as O,y as a,B as K,z as T}from"../chunks/index.45de7edf.js";import{a as P}from"../chunks/assistant.store.3f7e3d58.js";function V(m){let t,n,o="Settings",v,i,e,d,k="OpenAI API Key:",x,s,y,u,A="This key is required to use the assistant feature.",C,L;return{c(){t=p("div"),n=p("h2"),n.textContent=o,v=g(),i=p("form"),e=p("div"),d=p("label"),d.textContent=k,x=g(),s=p("input"),y=g(),u=p("small"),u.textContent=A,this.h()},l(l){t=c(l,"DIV",{class:!0});var r=b(t);n=c(r,"H2",{"data-svelte-h":!0}),E(n)!=="svelte-15f2bar"&&(n.textContent=o),v=I(r),i=c(r,"FORM",{});var S=b(i);e=c(S,"DIV",{class:!0});var f=b(e);d=c(f,"LABEL",{"data-svelte-h":!0}),E(d)!=="svelte-1ntqkn9"&&(d.textContent=k),x=I(f),s=c(f,"INPUT",{type:!0,class:!0,placeholder:!0}),y=I(f),u=c(f,"SMALL",{class:!0,"data-svelte-h":!0}),E(u)!=="svelte-he9tvv"&&(u.textContent=A),f.forEach(_),S.forEach(_),r.forEach(_),this.h()},h(){h(s,"type","text"),h(s,"class","metro-input"),h(s,"placeholder","Enter your key"),h(u,"class","text-muted"),h(e,"class","form-group"),h(t,"class","cell-6 offset-3")},m(l,r){O(l,t,r),a(t,n),a(t,v),a(t,i),a(i,e),a(e,d),a(e,x),a(e,s),K(s,m[0]),a(e,y),a(e,u),C||(L=T(s,"input",m[1]),C=!0)},p(l,[r]){r&1&&s.value!==l[0]&&K(s,l[0])},i:q,o:q,d(l){l&&_(t),C=!1,L()}}}function j(m,t,n){let o;B(m,P,i=>n(0,o=i));function v(){o=this.value,P.set(o)}return[o,v]}class N extends D{constructor(t){super(),M(this,t,j,V,$,{})}}export{N as component};