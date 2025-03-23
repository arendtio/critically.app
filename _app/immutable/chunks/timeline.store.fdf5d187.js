import{d as D}from"./index.9f5fd596.js";import{g as v}from"./tables.store.bf0f6b47.js";import{l as S,c as m}from"./criticalPath.store.4e62f4c4.js";import{g as A}from"./gantt.store.04884ee6.js";function R(e,t,i,n){let o=e.slice(0,i),r=t.slice(i);return this.validateAndMerge(o,r,n)}function L(e,t,i){let n=e;t.forEach((s,l)=>{n=this.pushAfterPredecessors(s,n,i)});let o=new Map(Object.entries(i));n=n.filter((s,l,a)=>{let f=String(s.id),u=o.has(f);return o.delete(f),u});let r=Array.from(o.keys()).map(s=>({id:s}));return n=n.concat(r),n}function w(e,t,i){let n=i[e.id].predecessors;return n===void 0&&(n=[]),n.forEach((o,r,s)=>{let l=!1;for(let a=t.length-1;a>=0;a--)if(t[a].id===o){l=!0;break}l===!1&&(t=w({id:o},t,i))}),t.push(e),t}function N(e,t,i,n){return[e[t],e[i]]=[e[i],e[t]],e=this.validateAndMerge([],e,n),e}function G(e){let i=[e.getHeader().filter(o=>o!==e.getLevelColumnName())];const n=e.getAllIds().map(o=>{const r=e.getRow(o),s=e.getHeader().indexOf(e.getLevelColumnName());let l=r.filter((u,c)=>c!==s);const a=[l[0]];let f=l.slice(1).map(u=>(u=="0"&&(u=""),{free:S(u),allocations:[]}));return a.concat(f)});return i=i.concat(n),i}let O=v("resources");function x(e){let t=Object.keys(e).map(i=>({id:i}));return t=this.validateAndMerge([],t,e),t}function C(e,t){return t[e].predecessors.reduce((o,r)=>{if(t[r].progress==="100 %"||t[r].progress==="100 %")return o;if(t[r].endDate===void 0)throw console.log("a predecessors has not been allocated, something is wrong..."),"predecessor not allocated";return o===void 0||t[r].endDate>o?t[r].endDate:o},void 0)}function F(e,t){return t.map(n=>n.map(r=>{let s=e[0].indexOf(r);return s<0&&(console.log("The resource",r,"in task",id,"is not defined in the resource table"),alert("The resource "+r+" in task "+id+" is not defined in the resource table")),s}))}function E(e,t,i,n){let o=0,r=n,s=e[t][i].free;if(isNaN(s)||s===0)return!1;for(;r>0;){if(t+o>=e.length)return!1;if(s=e[t+o][i].free,isNaN(s)){o++;continue}if(s===0)return!1;r-=s,o++}return r<=0}function P(e,t,i,n){return t.reduce((r,s)=>{let l=!0;for(let a=0;a<s.length;a++)if(!this.slotAvailable(e,i,s[a],n)){l=!1;break}return l&&r.push({resIdList:s,row:i}),r},[])}function J(e,t,i,n,o){let r,s=!0,l=-1,a=-1;if(o){for(let f=1;f<e.length;f++)o.startDate&&e[f][0]===o.startDate&&(l=f),o.endDate&&e[f][0]===o.endDate&&(a=f);if(o.startDate&&l===-1||o.endDate&&a===-1)return}for(let f=1;f<e.length;f++){if((i===void 0||e[f-1][0]===i)&&(s=!1),s||o&&o.startDate&&f!==l)continue;if(o&&o.endDate){let c=n,d=f,h=!1;for(;c>0&&d<=a;){let g=0;if(t[0].forEach(p=>{g+=e[d][p].free||0}),g===0){d++;continue}if(c-=g,c<=0){h=!0;break}d++}if(!h)continue}let u=this.availableSlotsForResourceLists(e,t,f,n);if(u.length>0){r=u[0];break}}return r}function T(e,t,i,n){if(!n)return[e,t];let o=e[n.row][0],r,s;const l=t[i];if(l.startDate&&o!==l.startDate)return[e,t];let a=-1;if(l.endDate){for(let u=1;u<e.length;u++)if(e[u][0]===l.endDate){a=u;break}}let f=!0;return l.expected,n.resIdList.forEach(u=>{let c=l.expected;for(let d=n.row;d<e.length;d++){if(a!==-1&&d>a){f=!1;break}let h=e[d][u].free;if(!isNaN(h))if(c>h)c-=h,e[d][u].allocations.push({task:i,amount:h}),e[d][u].free=0;else{e[d][u].free-=c,e[d][u].allocations.push({task:i,amount:c}),c=0,s=d,r=e[d][0];break}}c>0&&(f=!1)}),!f||l.endDate&&r!==l.endDate?[e,t]:(t[i].startDate=o,t[i].endDate=r,t[i].resIdList=t[i].resIdList.concat(n.resIdList),t[i].firstRow=n.row,t[i].lastRow=s,[e,t])}function I(e,t,i){return i=this.validateAndMerge([],i,t),i.forEach(n=>{if(t[n.id].progress==="100 %"||t[n.id].progress==="100 %")return;let o=this.earliestStartAllocation(n.id,t),r=this.convertResourcesToIdList(e,t[n.id].res),s=this.findFreeSlot(e,r,o,t[n.id].expected,t[n.id]);if(s===void 0){let l="Task "+n.id+" could not be allocated. Please provide more resources or adjust constraints.";console.error(l),alert(l)}[e,t]=this.writeAllocations(e,t,n.id,s)}),[e,t]}function j(e,t,i){let n={iterations:20,size:10,crossover:.3,mutation:.3,webWorkers:!0,skip:5},o={timetable:e,taskMap:t},r=Genetic.create();r.optimize=Genetic.Optimize.Minimize,r.select1=Genetic.Select1.Tournament2,r.select2=Genetic.Select2.Tournament2,r.initialGeneration=x,r.createChild=R,r.validateAndMerge=L,r.pushAfterPredecessors=w,r.mutateSwap=N,r.earliestStartAllocation=C,r.convertResourcesToIdList=F,r.slotAvailable=E,r.availableSlotsForResourceLists=P,r.findFreeSlot=J,r.writeAllocations=T,r.allocateGeneration=I,r.seed=function(){return this.initialGeneration(this.userData.taskMap)},r.mutate=function(s){let l=Math.floor(Math.random()*s.length),a=Math.floor(Math.random()*s.length);return this.mutateSwap(s,l,a,this.userData.taskMap)},r.crossover=function(s,l){let a=s.length,f=Math.floor(Math.random()*a),u=this.createChild(s,l,f,this.userData.taskMap);return[this.createChild(l,s,f,this.userData.taskMap),u]},r.fitness=function(s){let l=JSON.parse(JSON.stringify(this.userData.timetable)),a=JSON.parse(JSON.stringify(this.userData.taskMap));return[l,a]=this.allocateGeneration(l,a,s),Object.values(a).reduce((u,c)=>(c.lastRow>u&&(u=c.lastRow),u),-1)},r.generation=function(s,l,a){},r.notification=function(s,l,a,f){f&&([e,t]=this.allocateGeneration(e,t,s[0].entity),i(e,t))},r.evolve(n,o)}const _=D([m,O],([e,t],i)=>{let n=G(t);if(e.map===void 0){i(n);return}let o=JSON.parse(JSON.stringify(e));j(n,o.map,(r,s)=>{o.map=s,A.set(o),i(r)}),i(n)},[[],[]]);export{_ as t};
