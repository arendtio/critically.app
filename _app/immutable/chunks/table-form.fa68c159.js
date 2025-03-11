import{s as at,f as E,a as le,g as k,h as H,B as Ae,c as re,d as w,j as i,i as he,r as _,v as U,w as Ce,x as He,y as ye,z as se,o as st,l as it,m as ct,n as dt,e as Fe,u as Ne,p as ut,D as Se}from"./scheduler.427c93e9.js";import{e as pe}from"./each.5e3737eb.js";import{S as ft,i as ht}from"./index.d4e4d1b7.js";import{g as gt,T as Le}from"./tables.store.11ebb287.js";import{w as fe}from"./index.113f7b86.js";const pt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;const{window:_t}=pt;function Pe(e,l,r){const o=e.slice();return o[67]=l[r],o[68]=l,o[69]=r,o}function Be(e,l,r){const o=e.slice();return o[70]=l[r],o}function qe(e,l,r){const o=e.slice();return o[67]=l[r],o[73]=l,o[74]=r,o}function Ye(e,l,r){const o=e.slice();return o[75]=l[r],o}function Ue(e){let l,r=e[75]+"",o;return{c(){l=E("th"),o=it(r)},l(n){l=k(n,"TH",{});var p=H(l);o=ct(p,r),p.forEach(w)},m(n,p){he(n,l,p),_(l,o)},p(n,p){p[0]&4&&r!==(r=n[75]+"")&&dt(o,r)},d(n){n&&w(l)}}}function Xe(e){var x,ae;let l,r,o,n,p,y,b,C,T,u,B,q,Z,S;function I(m,L){return L[0]&4&&(n=null),n==null&&(n=!!m[22](m[70])),n?wt:vt}let K=I(e,[-1,-1,-1]),X=K(e);function j(m,L){return m[7]?mt:bt}let z=j(e),A=z(e),Y=pe(((ae=(x=e[2])==null?void 0:x.getRow)==null?void 0:ae.call(x,e[70]))??[]),O=[];for(let m=0;m<Y.length;m+=1)O[m]=Ve(qe(e,Y,m));function $(){return e[53](e[70])}function Q(...m){return e[54](e[70],...m)}function ie(...m){return e[55](e[70],...m)}function oe(...m){return e[56](e[70],...m)}return{c(){l=E("tr"),r=E("td"),o=E("div"),X.c(),p=le(),y=E("td"),b=E("div"),A.c(),C=le();for(let m=0;m<O.length;m+=1)O[m].c();T=le(),u=E("td"),B=E("div"),q=E("span"),this.h()},l(m){l=k(m,"TR",{draggable:!0});var L=H(l);r=k(L,"TD",{class:!0});var J=H(r);o=k(J,"DIV",{class:!0});var G=H(o);X.l(G),G.forEach(w),J.forEach(w),p=re(L),y=k(L,"TD",{class:!0});var v=H(y);b=k(v,"DIV",{class:!0});var W=H(b);A.l(W),W.forEach(w),v.forEach(w),C=re(L);for(let M=0;M<O.length;M+=1)O[M].l(L);T=re(L),u=k(L,"TD",{class:!0});var P=H(u);B=k(P,"DIV",{class:!0});var ne=H(B);q=k(ne,"SPAN",{class:!0,role:!0,"aria-label":!0,title:!0}),H(q).forEach(w),ne.forEach(w),P.forEach(w),L.forEach(w),this.h()},h(){i(o,"class","hierarchy-controls svelte-1pcbvw8"),i(r,"class","tree-column svelte-1pcbvw8"),i(b,"class","hierarchy-controls svelte-1pcbvw8"),i(y,"class","control-column svelte-1pcbvw8"),i(q,"class","delete-button mif-cross-light svelte-1pcbvw8"),i(q,"role","button"),i(q,"aria-label","Delete row"),i(q,"title","Delete row"),i(B,"class","hierarchy-controls svelte-1pcbvw8"),i(u,"class","control-column svelte-1pcbvw8"),i(l,"draggable",e[7])},m(m,L){he(m,l,L),_(l,r),_(r,o),X.m(o,null),_(l,p),_(l,y),_(y,b),A.m(b,null),_(l,C);for(let J=0;J<O.length;J+=1)O[J]&&O[J].m(l,null);_(l,T),_(l,u),_(u,B),_(B,q),Z||(S=[U(q,"click",$),U(l,"dragstart",Q),U(l,"dragover",ie),U(l,"dragend",e[40]),U(l,"keydown",oe)],Z=!0)},p(m,L){var J,G;if(e=m,K===(K=I(e,L))&&X?X.p(e,L):(X.d(1),X=K(e),X&&(X.c(),X.m(o,null))),z===(z=j(e))&&A?A.p(e,L):(A.d(1),A=z(e),A&&(A.c(),A.m(b,null))),L[0]&2021654588|L[1]&25){Y=pe(((G=(J=e[2])==null?void 0:J.getRow)==null?void 0:G.call(J,e[70]))??[]);let v;for(v=0;v<Y.length;v+=1){const W=qe(e,Y,v);O[v]?O[v].p(W,L):(O[v]=Ve(W),O[v].c(),O[v].m(l,T))}for(;v<O.length;v+=1)O[v].d(1);O.length=Y.length}L[0]&128&&i(l,"draggable",e[7])},d(m){m&&w(l),X.d(),A.d(),He(O,m),Z=!1,ye(S)}}}function vt(e){let l;return{c(){l=E("span"),this.h()},l(r){l=k(r,"SPAN",{class:!0}),H(l).forEach(w),this.h()},h(){i(l,"class","hierarchy-spacer svelte-1pcbvw8")},m(r,o){he(r,l,o)},p:Ce,d(r){r&&w(l)}}}function wt(e){let l,r,o,n,p,y,b;function C(){return e[44](e[70])}return{c(){l=E("span"),r=E("span"),this.h()},l(T){l=k(T,"SPAN",{class:!0,role:!0,"aria-label":!0,title:!0});var u=H(l);r=k(u,"SPAN",{class:!0}),H(r).forEach(w),u.forEach(w),this.h()},h(){i(r,"class",o=e[9][e[70]]?"mif-plus":"mif-minus"),i(l,"class","hierarchy-toggle svelte-1pcbvw8"),i(l,"role","button"),i(l,"aria-label",n=e[9][e[70]]?"Expand":"Collapse"),i(l,"title",p=e[9][e[70]]?"Expand":"Collapse")},m(T,u){he(T,l,u),_(l,r),y||(b=U(l,"click",C),y=!0)},p(T,u){e=T,u[0]&516&&o!==(o=e[9][e[70]]?"mif-plus":"mif-minus")&&i(r,"class",o),u[0]&516&&n!==(n=e[9][e[70]]?"Expand":"Collapse")&&i(l,"aria-label",n),u[0]&516&&p!==(p=e[9][e[70]]?"Expand":"Collapse")&&i(l,"title",p)},d(T){T&&w(l),y=!1,b()}}}function bt(e){let l,r,o,n,p,y;function b(){return e[45](e[70])}function C(){return e[46](e[70])}return{c(){l=E("div"),r=E("span"),o=le(),n=E("span"),this.h()},l(T){l=k(T,"DIV",{});var u=H(l);r=k(u,"SPAN",{class:!0,role:!0,"aria-label":!0,title:!0}),H(r).forEach(w),o=re(u),n=k(u,"SPAN",{class:!0,role:!0,"aria-label":!0,title:!0}),H(n).forEach(w),u.forEach(w),this.h()},h(){i(r,"class","level-control mif-arrow-left svelte-1pcbvw8"),i(r,"role","button"),i(r,"aria-label","Decrease indentation level"),i(r,"title","Decrease indentation level (Shift+Tab)"),i(n,"class","level-control mif-arrow-right svelte-1pcbvw8"),i(n,"role","button"),i(n,"aria-label","Increase indentation level"),i(n,"title","Increase indentation level (Tab)")},m(T,u){he(T,l,u),_(l,r),_(l,o),_(l,n),p||(y=[U(r,"click",b),U(n,"click",C)],p=!0)},p(T,u){e=T},d(T){T&&w(l),p=!1,ye(y)}}}function mt(e){let l;return{c(){l=E("span"),this.h()},l(r){l=k(r,"SPAN",{class:!0,role:!0,"aria-label":!0,title:!0}),H(l).forEach(w),this.h()},h(){i(l,"class","reorder-handle mif-unfold-more svelte-1pcbvw8"),i(l,"role","button"),i(l,"aria-label","Drag to reorder"),i(l,"title","Drag to reorder")},m(r,o){he(r,l,o)},p:Ce,d(r){r&&w(l)}}}function Ve(e){let l,r,o,n,p,y,b;function C(){e[47].call(r,e[73],e[74])}function T(){return e[48](e[70])}function u(...S){return e[49](e[70],e[74],...S)}function B(...S){return e[50](e[70],e[74],...S)}function q(...S){return e[51](e[70],e[74],...S)}function Z(...S){return e[52](e[70],e[74],...S)}return{c(){l=E("td"),r=E("input"),o=le(),this.h()},l(S){l=k(S,"TD",{class:!0,style:!0,"data-row-id":!0,"data-col-index":!0});var I=H(l);r=k(I,"INPUT",{type:!0,class:!0}),o=re(I),I.forEach(w),this.h()},h(){i(r,"type","text"),i(r,"class","metro-input svelte-1pcbvw8"),i(l,"class","data-cell svelte-1pcbvw8"),i(l,"style",n=e[74]===0&&e[23](e[70])>0?`padding-left: ${e[23](e[70])*16}px;`:""),i(l,"data-row-id",p=e[70]),i(l,"data-col-index",e[74]),Se(l,"selected-cell",e[3]&&e[3].rowId===e[70]&&e[3].colIndex===e[74]),Se(l,"highlight",e[5]&&e[4]&&e[4].colIndex===e[74]&&e[30](e[70],e[74]))},m(S,I){he(S,l,I),_(l,r),Ne(r,e[67]),_(l,o),y||(b=[U(r,"input",C),U(r,"paste",e[31]),U(r,"blur",T),U(r,"keydown",u),U(l,"pointerdown",B),U(l,"click",q),U(l,"keydown",Z)],y=!0)},p(S,I){e=S,I[0]&4&&r.value!==e[67]&&Ne(r,e[67]),I[0]&4&&n!==(n=e[74]===0&&e[23](e[70])>0?`padding-left: ${e[23](e[70])*16}px;`:"")&&i(l,"style",n),I[0]&4&&p!==(p=e[70])&&i(l,"data-row-id",p),I[0]&12&&Se(l,"selected-cell",e[3]&&e[3].rowId===e[70]&&e[3].colIndex===e[74]),I[0]&1073741876&&Se(l,"highlight",e[5]&&e[4]&&e[4].colIndex===e[74]&&e[30](e[70],e[74]))},d(S){S&&w(l),y=!1,ye(b)}}}function Je(e){let l=e[21](e[70]),r,o=l&&Xe(e);return{c(){o&&o.c(),r=Fe()},l(n){o&&o.l(n),r=Fe()},m(n,p){o&&o.m(n,p),he(n,r,p)},p(n,p){p[0]&4&&(l=n[21](n[70])),l?o?o.p(n,p):(o=Xe(n),o.c(),o.m(r.parentNode,r)):o&&(o.d(1),o=null)},d(n){n&&w(r),o&&o.d(n)}}}function Ke(e){let l,r,o,n;function p(){e[57].call(r,e[68],e[69])}return{c(){l=E("td"),r=E("input"),this.h()},l(y){l=k(y,"TD",{class:!0});var b=H(l);r=k(b,"INPUT",{type:!0,class:!0}),b.forEach(w),this.h()},h(){i(r,"type","text"),i(r,"class","metro-input svelte-1pcbvw8"),i(l,"class","svelte-1pcbvw8")},m(y,b){he(y,l,b),_(l,r),Ne(r,e[67]),o||(n=[U(r,"input",p),U(r,"paste",e[31]),U(r,"blur",e[32])],o=!0)},p(y,b){e=y,b[0]&256&&r.value!==e[67]&&Ne(r,e[67])},d(y){y&&w(l),o=!1,ye(n)}}}function Tt(e){var _e,Ee,we,Te;let l,r,o,n,p='<span class="hierarchy-toggle mif-tree svelte-1pcbvw8" title="Hierarchy"></span>',y,b,C,T,u,B,q,Z,S,I,K='<span class="delete-button mif-bin svelte-1pcbvw8" title="Delete row"></span>',X,j,z,A,Y,O='<div class="hierarchy-controls svelte-1pcbvw8"><span class="hierarchy-spacer svelte-1pcbvw8"></span></div>',$,Q,ie='<div class="hierarchy-controls svelte-1pcbvw8"><span class="mif-chevron-thin-right"></span></div>',oe,x,ae,m,L,J,G=pe(((Ee=(_e=e[2])==null?void 0:_e.getHeader)==null?void 0:Ee.call(_e))??[]),v=[];for(let c=0;c<G.length;c+=1)v[c]=Ue(Ye(e,G,c));let W=pe(((Te=(we=e[2])==null?void 0:we.getAllIds)==null?void 0:Te.call(we))??[]),P=[];for(let c=0;c<W.length;c+=1)P[c]=Je(Be(e,W,c));let ne=pe(e[8]),M=[];for(let c=0;c<ne.length;c+=1)M[c]=Ke(Pe(e,ne,c));return{c(){l=E("table"),r=E("thead"),o=E("tr"),n=E("th"),n.innerHTML=p,y=le(),b=E("th"),C=E("span"),T=E("span"),Z=le();for(let c=0;c<v.length;c+=1)v[c].c();S=le(),I=E("th"),I.innerHTML=K,X=le(),j=E("tbody");for(let c=0;c<P.length;c+=1)P[c].c();z=le(),A=E("tr"),Y=E("td"),Y.innerHTML=O,$=le(),Q=E("td"),Q.innerHTML=ie,oe=le();for(let c=0;c<M.length;c+=1)M[c].c();x=le(),ae=E("td"),this.h()},l(c){l=k(c,"TABLE",{class:!0,id:!0});var F=H(l);r=k(F,"THEAD",{});var N=H(r);o=k(N,"TR",{});var ee=H(o);n=k(ee,"TH",{class:!0,"data-svelte-h":!0}),Ae(n)!=="svelte-1focd0m"&&(n.innerHTML=p),y=re(ee),b=k(ee,"TH",{class:!0});var ce=H(b);C=k(ce,"SPAN",{class:!0,role:!0,"aria-label":!0,title:!0});var ge=H(C);T=k(ge,"SPAN",{class:!0}),H(T).forEach(w),ge.forEach(w),ce.forEach(w),Z=re(ee);for(let te=0;te<v.length;te+=1)v[te].l(ee);S=re(ee),I=k(ee,"TH",{class:!0,"data-svelte-h":!0}),Ae(I)!=="svelte-89kh84"&&(I.innerHTML=K),ee.forEach(w),N.forEach(w),X=re(F),j=k(F,"TBODY",{});var h=H(j);for(let te=0;te<P.length;te+=1)P[te].l(h);z=re(h),A=k(h,"TR",{});var V=H(A);Y=k(V,"TD",{class:!0,"data-svelte-h":!0}),Ae(Y)!=="svelte-1r09gtc"&&(Y.innerHTML=O),$=re(V),Q=k(V,"TD",{class:!0,"data-svelte-h":!0}),Ae(Q)!=="svelte-18l50by"&&(Q.innerHTML=ie),oe=re(V);for(let te=0;te<M.length;te+=1)M[te].l(V);x=re(V),ae=k(V,"TD",{class:!0}),H(ae).forEach(w),V.forEach(w),h.forEach(w),F.forEach(w),this.h()},h(){i(n,"class","tree-column svelte-1pcbvw8"),i(T,"class",u=e[7]?"mif-tab":"mif-indent-increase"),i(C,"class","mode-toggle svelte-1pcbvw8"),i(C,"role","button"),i(C,"aria-label",B=e[7]?"Switch to level mode":"Switch to reorder mode"),i(C,"title",q=e[7]?"Switch to level mode":"Switch to reorder mode"),i(b,"class","control-column svelte-1pcbvw8"),i(I,"class","control-column svelte-1pcbvw8"),i(Y,"class","tree-column svelte-1pcbvw8"),i(Q,"class","control-column svelte-1pcbvw8"),i(ae,"class","control-column svelte-1pcbvw8"),i(l,"class","table subcompact table-border cell-border striped"),i(l,"id",m=e[0]+"-table")},m(c,F){he(c,l,F),_(l,r),_(r,o),_(o,n),_(o,y),_(o,b),_(b,C),_(C,T),_(o,Z);for(let N=0;N<v.length;N+=1)v[N]&&v[N].m(o,null);_(o,S),_(o,I),_(l,X),_(l,j);for(let N=0;N<P.length;N+=1)P[N]&&P[N].m(j,null);_(j,z),_(j,A),_(A,Y),_(A,$),_(A,Q),_(A,oe);for(let N=0;N<M.length;N+=1)M[N]&&M[N].m(A,null);_(A,x),_(A,ae),e[58](l),L||(J=[U(_t,"drop",e[39]),U(C,"click",e[36])],L=!0)},p(c,F){var N,ee,ce,ge;if(F[0]&128&&u!==(u=c[7]?"mif-tab":"mif-indent-increase")&&i(T,"class",u),F[0]&128&&B!==(B=c[7]?"Switch to level mode":"Switch to reorder mode")&&i(C,"aria-label",B),F[0]&128&&q!==(q=c[7]?"Switch to level mode":"Switch to reorder mode")&&i(C,"title",q),F[0]&4){G=pe(((ee=(N=c[2])==null?void 0:N.getHeader)==null?void 0:ee.call(N))??[]);let h;for(h=0;h<G.length;h+=1){const V=Ye(c,G,h);v[h]?v[h].p(V,F):(v[h]=Ue(V),v[h].c(),v[h].m(o,S))}for(;h<v.length;h+=1)v[h].d(1);v.length=G.length}if(F[0]&2146435772|F[1]&733){W=pe(((ge=(ce=c[2])==null?void 0:ce.getAllIds)==null?void 0:ge.call(ce))??[]);let h;for(h=0;h<W.length;h+=1){const V=Be(c,W,h);P[h]?P[h].p(V,F):(P[h]=Je(V),P[h].c(),P[h].m(j,z))}for(;h<P.length;h+=1)P[h].d(1);P.length=W.length}if(F[0]&256|F[1]&3){ne=pe(c[8]);let h;for(h=0;h<ne.length;h+=1){const V=Pe(c,ne,h);M[h]?M[h].p(V,F):(M[h]=Ke(V),M[h].c(),M[h].m(A,x))}for(;h<M.length;h+=1)M[h].d(1);M.length=ne.length}F[0]&1&&m!==(m=c[0]+"-table")&&i(l,"id",m)},i:Ce,o:Ce,d(c){c&&w(l),He(v,c),He(P,c),He(M,c),e[58](null),L=!1,ye(J)}}}function It(e,l,r){let o,n,p,y,b,C,T,u,B,q,Z,{name:S}=l,I=gt(S);se(e,I,t=>r(2,n=t));let K=fe([]);se(e,K,t=>r(8,b=t));let X=fe(!0);se(e,X,t=>r(7,o=t)),K.reset=()=>K.update(t=>{var a;return(a=n==null?void 0:n.getHeader())!=null&&a.length?Array(n.getHeader().length).fill(""):[]});let j=fe(null);se(e,j,t=>r(4,u=t));let z=fe(null);se(e,z,t=>r(42,T=t));let A=fe(!1);se(e,A,t=>r(5,B=t));let Y=fe(null);se(e,Y,t=>r(43,q=t));let O,$=fe(null);se(e,$,t=>r(3,C=t));let Q=fe(null);se(e,Q,t=>r(64,y=t));let ie=fe(null);se(e,ie,t=>r(63,p=t));let oe=null,x=fe({});se(e,x,t=>r(9,Z=t));function ae(t){x.update(a=>{const s={...a};return s[t]=!s[t],s}),I.update(a=>a)}function m(t){const a=Z,s=n.getAllIds(),g=s.indexOf(t);if(g===-1)return!1;const d=n.getRowLevel(t);if(d<=1)return!0;for(let f=g-1;f>=0;f--){const R=s[f],D=n.getRowLevel(R);if(D<d){if(D===d-1)return a[R]?!1:m(R);continue}}return!0}function L(t){return n.getChildren(t).length>0}function J(t){const a=n.getRowLevel(t);return Math.max(0,a-1)}function G(t){const a=n.getAllIds(),s=a.indexOf(t);if(s<=0)return;const g=n.getRowLevel(t),d=a[s-1],f=n.getRowLevel(d),R=Math.min(f+1,g+1);I.update(D=>(D.setRowLevel(t,R),D))}function v(t){const a=n.getRowLevel(t);a<=1||I.update(s=>(s.setRowLevel(t,a-1),s))}function W(t,a){a.key==="Tab"&&(a.preventDefault(),a.shiftKey?v(t):G(t))}st(()=>{console.log("Testing new table creation:");const t=new Le(["ID","Test1","Test2"]);console.log("Test Table Headers:",t.getHeader()),console.log("Test Table Full Headers:",t.getFullHeader()),console.log("Test Table Data:",t.toJSON());const a=g=>{if(!B||!u)return;const d=document.elementFromPoint(g.clientX,g.clientY);if(!d)return;const f=d.closest("td.data-cell");if(!f)return;const R=f.getAttribute("data-row-id"),D=parseInt(f.getAttribute("data-col-index"));if(!q){const ue=Math.abs(g.clientX-u.startX),be=Math.abs(g.clientY-u.startY);(ue>5||be>5)&&Y.set("rectangular")}z.set({rowId:R,colIndex:D}),document.querySelectorAll("td.data-cell").forEach(ue=>{ue.classList.remove("highlight")});const de=n.getAllIds(),ve=de.indexOf(u.rowId),Ie=de.indexOf(R),[Oe,ke]=ve<Ie?[ve,Ie]:[Ie,ve],[De,Re]=u.colIndex<D?[u.colIndex,D]:[D,u.colIndex];document.querySelectorAll("td.data-cell").forEach(ue=>{const be=ue.getAttribute("data-row-id"),me=parseInt(ue.getAttribute("data-col-index")),Me=de.indexOf(be);Me>=Oe&&Me<=ke&&me>=De&&me<=Re&&ue.classList.add("highlight")})},s=g=>{if(B&&u&&T){const d=document.elementFromPoint(g.clientX,g.clientY);if(d){const f=d.closest("td.data-cell");if(f){const R=f.getAttribute("data-row-id"),D=parseInt(f.getAttribute("data-col-index")),de=n.getRow(u.rowId);if(de){const ve=de[u.colIndex];P(u.rowId,R,u.colIndex,D,ve)}}}}document.querySelectorAll("td.data-cell").forEach(d=>{d.classList.remove("highlight")}),A.set(!1),j.set(null),z.set(null),$.set(null),Y.set(null)};return document.addEventListener("pointermove",a),document.addEventListener("pointerup",s),()=>{document.removeEventListener("pointermove",a),document.removeEventListener("pointerup",s)}});function P(t,a,s,g,d){const f=n.getAllIds(),R=f.indexOf(t),D=f.indexOf(a);if(R===-1||D===-1)return;const[de,ve]=R<D?[R,D]:[D,R],[Ie,Oe]=s<g?[s,g]:[g,s],ke=new Le(n.getHeader());f.forEach((De,Re)=>{const ue=n.getRow(De);if(ue){const be=[...ue];if(Re>=de&&Re<=ve)for(let me=Ie;me<=Oe;me++)be[me]=d;ke.add_or_replace_row(De,be)}}),I.set(ke)}function ne(t,a,s){const g=s.currentTarget.getBoundingClientRect(),d=s.clientX-g.left,f=s.clientY-g.top;d>g.width-8&&f>g.height-8&&(A.set(!0),j.set({rowId:t,colIndex:a,startX:s.clientX,startY:s.clientY}),z.set({rowId:t,colIndex:a}),$.set({rowId:t,colIndex:a}),Y.set(null),s.preventDefault(),s.stopPropagation())}function M(t,a,s){const g=s.currentTarget.getBoundingClientRect(),d=s.clientX-g.left,f=s.clientY-g.top;d>g.width-8&&f>g.height-8||($.set({rowId:t,colIndex:a}),s.stopPropagation())}function _e(){setTimeout(()=>{var t;!B&&((t=document.activeElement)==null?void 0:t.tagName)!=="INPUT"&&$.set(null)},0)}function Ee(t,a){if(!B||!u||!T||u.colIndex!==a)return!1;const s=n.getAllIds(),g=s.indexOf(u.rowId),d=s.indexOf(t),f=s.indexOf(T.rowId);if(g===-1||d===-1||f===-1)return!1;const[R,D]=g<f?[g,f]:[f,g];return d>=R&&d<=D}function we(t){let a=(t.clipboardData||window.clipboardData).getData("text");const s=a.includes(`
`),g=a.includes("	");if(s&&g){t.preventDefault();let d=a.split(/\n|\r/).filter(f=>f.length).map(f=>f.split(/\t/));I.update(f=>{if(d[0][0]!=="ID"){d[0].unshift("ID");for(let D=1;D<d.length;D++)d[D].unshift(String(D))}let R=new Le(d[0]);return d.slice(1).forEach(D=>{D.length>0&&R.add_or_replace_row(D[0],D)}),R}),K.reset()}else{const d=t.target.closest("tr")===t.target.closest("table").querySelector("tbody tr:last-child");setTimeout(d?()=>{Array.from(t.target.closest("tr").querySelectorAll("input")).some(R=>R.value.trim()!=="")&&Te()}:()=>{const f=t.target.closest("td");if(f){const R=f.getAttribute("data-row-id");R?F(R):console.warn("No row ID found for paste target:",f)}else console.warn("No td element found for paste target:",t.target)},0)}}function Te(){b.join("")!==""&&(I.update(t=>(t.add_or_replace_row(b[0],b),t)),K.reset())}function c(t){I.update(a=>(a.delete_row(t),a))}function F(t){if(!t){console.warn("onCellBlur called with invalid rowId:",t);return}const a=n.getRow(t);if(!a||!Array.isArray(a)||a.length===0){console.warn("onCellBlur: Invalid row data for rowId:",t);return}console.log(`onCellBlur for row ${t}:`,a);const s=[...a];String(s[0])!==String(t)&&(console.log(`Fixing row data for ${t} - first element was ${s[0]}`),s.unshift(t));try{I.update(g=>(g.add_or_replace_row(t,s),g))}catch(g){console.error("Error updating row:",g);try{const d=n.getFullRow(t);d&&d.length>0&&I.update(f=>(f.add_or_replace_rows([d]),f))}catch(d){console.error("Error in fallback update:",d)}}}function N(t,a,s){if(s.key==="Enter"||s.key==="ArrowDown"||s.key==="ArrowUp"){s.preventDefault();const g=n.getAllIds(),d=g.indexOf(t);let f;if(s.key==="ArrowUp"?f=d>0?d-1:d:f=d<g.length-1?d+1:d,f!==d){const R=g[f];$.set({rowId:R,colIndex:a})}}}function ee(){X.update(t=>!t)}function ce(t,a){o&&(a.dataTransfer.effectAllowed="move",Q.set(t),a.currentTarget.classList.add("dragging"))}function ge(t,a){o&&(a.preventDefault(),a.dataTransfer.dropEffect="move",ie.set(t),document.querySelectorAll("tr").forEach(s=>{s.classList.remove("drag-over")}),a.currentTarget.closest("tr").classList.add("drag-over"))}function h(t){if(o){if(t.preventDefault(),y&&p&&y!==p){const a=n.getAllIds(),s=a.indexOf(y),g=a.indexOf(p);if(s!==-1&&g!==-1){const d=new Le(n.getHeader()),f=[...a],[R]=f.splice(s,1);f.splice(g,0,R),f.forEach(D=>{const de=n.getRow(D);d.add_or_replace_row(D,de)}),I.set(d)}}Q.set(null),ie.set(null),document.querySelectorAll("tr").forEach(a=>{a.classList.remove("dragging","drag-over")})}}function V(){o&&(Q.set(null),ie.set(null),document.querySelectorAll("tr").forEach(t=>{t.classList.remove("dragging","drag-over")}))}const te=t=>ae(t),je=t=>v(t),Ge=t=>G(t);function ze(t,a){t[a]=this.value}const Qe=t=>{F(t),_e()},We=(t,a,s)=>N(t,a,s),Ze=(t,a,s)=>ne(t,a,s),$e=(t,a,s)=>M(t,a,s),xe=(t,a,s)=>N(t,a,s),et=t=>c(t),tt=(t,a)=>ce(t,a),lt=(t,a)=>ge(t,a),rt=(t,a)=>W(t,a);function nt(t,a){t[a]=this.value,K.set(b)}function ot(t){ut[t?"unshift":"push"](()=>{O=t,r(6,O)})}return e.$$set=t=>{"name"in t&&r(0,S=t.name)},e.$$.update=()=>{if(e.$$.dirty[0]&8|e.$$.dirty[1]&1024&&(r(41,oe=C),oe)){const t=document.querySelector(`td.data-cell[data-row-id="${oe.rowId}"][data-col-index="${oe.colIndex}"] input`);t&&document.activeElement!==t&&t.focus()}if(e.$$.dirty[0]&16,e.$$.dirty[1]&2048,e.$$.dirty[0]&32,e.$$.dirty[1]&4096,e.$$.dirty[0]&6&&n!=null&&n.getHeader()&&(K.set(Array(n.getHeader().length).fill("")),console.log("Table Headers:",n.getHeader()),console.log("Table Full Headers:",n.getFullHeader()),console.log("Table Data:",n.toJSON()),console.log("Table IDs:",n.getAllIds()),console.log("Raw Table Structure:",JSON.stringify(n)),n.getAllIds().length>0)){const t=n.getAllIds()[0];console.log("First Row:",n.getRow(t)),console.log("First Full Row:",n.getFullRow(t))}},[S,K,n,C,u,B,O,o,b,Z,I,X,j,z,A,Y,$,Q,ie,x,ae,m,L,J,G,v,W,ne,M,_e,Ee,we,Te,c,F,N,ee,ce,ge,h,V,oe,T,q,te,je,Ge,ze,Qe,We,Ze,$e,xe,et,tt,lt,rt,nt,ot]}class At extends ft{constructor(l){super(),ht(this,l,It,Tt,at,{name:0},null,[-1,-1,-1])}}export{At as T,pt as g};
