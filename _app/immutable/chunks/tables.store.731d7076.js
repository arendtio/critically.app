var w=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var n=(s,t,e)=>(w(s,t,"read from private field"),e?e.call(s):t.get(s)),l=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},u=(s,t,e,i)=>(w(s,t,"write to private field"),i?i.call(s,e):t.set(s,e),e);var a=(s,t,e)=>(w(s,t,"access private method"),e);import{w as I}from"./index.7c868b58.js";var r,c,o,d,f,x;const p=class p{constructor(t){l(this,o);l(this,f);l(this,r,void 0);l(this,c,void 0);u(this,r,[t]),u(this,c,t)}getHeader(){return n(this,r)[0]}changeHeadings(t){if(t.length!==n(this,r)[0].length)throw new Error("New headings must have the same length as current headings");return n(this,r)[0]=t,this}getAllIds(){return n(this,r).slice(1).map(t=>t[0])}getRow(t){let e=a(this,o,d).call(this,t),i=n(this,r)[e];return i===void 0&&(i=[]),i}toJSON(){return n(this,r)}static fromJSON(t){const e=JSON.parse(t),i=new p(e[0]);return i.restore(e),i}restore(t){return u(this,r,t),this}add_or_replace_row(t,e){t||(t=e[0]);let i=a(this,o,d).call(this,t);return i===null?n(this,r).push(e):n(this,r)[i]=e,this}delete_row(t){let e=a(this,o,d).call(this,t);return n(this,r).splice(e,1),this}clear_table(){return u(this,r,[n(this,c)]),this}add_or_replace_column(t,e){if(e.length===0||e[0]!==t)throw new Error("First value must be the column name");const i=n(this,r).length-1;if(e.length-1!==i)throw new Error(`Column values must match number of rows (${i})`);let g=a(this,f,x).call(this,t);if(g===-1){g=n(this,r)[0].length,n(this,r)[0].push(t);for(let h=1;h<n(this,r).length;h++)n(this,r)[h].push("")}for(let h=0;h<i;h++)n(this,r)[h+1][g]=e[h+1];return this}};r=new WeakMap,c=new WeakMap,o=new WeakSet,d=function(t){let e=n(this,r).slice(1).findIndex(i=>i[0]==t);return e===-1?null:e+1},f=new WeakSet,x=function(t){return n(this,r)[0].indexOf(t)};let m=p;const b=new Map;function _(s,t){let e=new m(t);b.set(s,I(e))}function C(s){return b.get(s)}const N=["Id","Task","Min","Likely","Max","Resources","Predecessors","Progress"];_("tasks",N);const k=["Date","Dev 1","Dev 2","Dev 3"];_("resources",k);export{m as T,C as g};
