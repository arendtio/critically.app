import{w as n}from"./index.2391f01a.js";const h=n([]),v=n([["Date","Dev 1","Dev 2","Dev 3"]]),m=n({});function o(a,t){t===void 0&&(t=navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language);let[,c,,,,f]=1111.1.toLocaleString(t);return a=Array.from(a,l=>l===c?"":l===f?".":l).join(""),parseFloat(a)}m.calculate=function(){let a={},t,c=[],f={};h.update(e=>(t=e,e)),t.forEach(e=>{let r=e[0];a[r]={id:r,name:e[1],min:o(e[2]),likely:o(e[3]),max:o(e[4]),res:e[5].split(",").map(s=>s.trim()),predecessors:e[6].split(",").map(s=>s.trim()).filter(s=>s!==""),successors:[],progress:e[7],earlyCol:0,es:0,ef:0,ls:0,lf:0,slack:-1,expected:Math.round((o(e[2])+o(e[3])*4+o(e[4]))/6)},e[6]==""&&c.push(r),a[r].predecessors.map(s=>{f[s]=!0})});let l=Object.keys(a).filter(e=>!Object.keys(f).includes(e)),p=e=>{a[e].predecessors.map(r=>{a[r].successors.push(e),p(r)})};l.forEach(p),console.log(l);let u=e=>{let r=0,s=0;a[e].predecessors.forEach(i=>{u(i),r<a[i].ef&&(r=a[i].ef),s<a[i].earlyCol&&(s=a[i].earlyCol)}),a[e].es=1+r,a[e].ef=a[e].es+a[e].expected-1,a[e].earlyCol=1+s};l.forEach(u);let d=Math.max(...l.map(e=>a[e].ef));console.log(d);let g=e=>{let r=d+1;a[e].successors.forEach(s=>{g(s),r>a[s].ls&&(r=a[s].ls)}),a[e].lf=r-1,a[e].ls=a[e].lf-a[e].expected+1,a[e].slack=a[e].ls-a[e].es};c.forEach(g),console.log(a),m.set({starts:c,map:a,ends:l})};export{m as c,o as l,v as r,h as t};