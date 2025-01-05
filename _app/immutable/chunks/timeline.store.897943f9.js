import{d as h}from"./index.2391f01a.js";import{g}from"./tables.store.42dbbbd7.js";import{l as p,c as v}from"./criticalPath.store.1c85e9a0.js";import{g as S}from"./gantt.store.e33e3c75.js";function m(r,e,i,n){let s=r.slice(0,i),t=e.slice(i);return this.validateAndMerge(s,t,n)}function w(r,e,i){let n=r;e.forEach((o,l)=>{n=this.pushAfterPredecessors(o,n,i)});let s=new Map(Object.entries(i));n=n.filter((o,l,a)=>{let c=String(o.id),u=s.has(c);return s.delete(c),u});let t=Array.from(s.keys()).map(o=>({id:o}));return n=n.concat(t),n}function d(r,e,i){let n=i[r.id].predecessors;return n===void 0&&(n=[]),n.forEach((s,t,o)=>{let l=!1;for(let a=e.length-1;a>=0;a--)if(e[a].id===s){l=!0;break}l===!1&&(e=d({id:s},e,i))}),e.push(r),e}function A(r,e,i,n){return[r[e],r[i]]=[r[i],r[e]],r=this.validateAndMerge([],r,n),r}function L(r){let e=r.slice(0,1),i=r.slice(1).map(n=>{let s=n.slice(0,1);return s=s.concat(n.slice(1).map(t=>(t=="0"&&(t=""),{free:p(t),allocations:[]}))),s});return e=e.concat(i),e}let R=g("resources");function N(r){let e=Object.keys(r).map(i=>({id:i}));return e=this.validateAndMerge([],e,r),e}function G(r,e){return e[r].predecessors.reduce((s,t)=>{if(e[t].progress==="100 %"||e[t].progress==="100 %")return s;if(e[t].endDate===void 0)throw console.log("a predecessors has not been allocated, something is wrong..."),"predecessor not allocated";return s===void 0||e[t].endDate>s?e[t].endDate:s},void 0)}function O(r,e){return e.map(n=>n.map(t=>{let o=r[0].indexOf(t);return o<0&&(console.log("The resource",t,"in task",id,"is not defined in the resource table"),alert("The resource "+t+" in task "+id+" is not defined in the resource table")),o}))}function D(r,e,i,n){let s=0,t=r[e][i].free;if(isNaN(t)||t===0)return!1;for(;n>0;){if(e+s>=r.length)return!1;if(t=r[e+s][i].free,isNaN(t)){s++;continue}if(t===0)return!1;n-=t,s++}return!0}function T(r,e,i,n){return e.reduce((t,o)=>{let l=!0;for(let a=0;a<o.length;a++)if(!this.slotAvailable(r,i,o[a],n)){l=!1;break}return l&&t.push({resIdList:o,row:i}),t},[])}function F(r,e,i,n){let s,t=!0;for(let o=1;o<r.length;o++){if((i===void 0||r[o-1][0]===i)&&(t=!1),t)continue;let l=this.availableSlotsForResourceLists(r,e,o,n);if(l.length>0){s=l[0];break}}return s}function P(r,e,i,n){let s=r[n.row][0],t,o;return n.resIdList.forEach(l=>{let a=e[i].expected;for(let c=n.row;c<r.length;c++){let u=r[c][l].free;if(!isNaN(u))if(a>u)a-=u,r[c][l].allocations.push({task:i,amount:u}),r[c][l].free=0;else{r[c][l].free-=a,r[c][l].allocations.push({task:i,amount:a}),a=0,o=c,t=r[c][0];break}}}),e[i].startDate=s,e[i].endDate=t,e[i].resIdList=e[i].resIdList.concat(n.resIdList),e[i].firstRow=n.row,e[i].lastRow=o,[r,e]}function b(r,e,i){return i=this.validateAndMerge([],i,e),i.forEach(n=>{if(e[n.id].progress==="100 %"||e[n.id].progress==="100 %")return;let s=this.earliestStartAllocation(n.id,e),t=this.convertResourcesToIdList(r,e[n.id].res),o=this.findFreeSlot(r,t,s,e[n.id].expected);if(o===void 0){let l="Task "+n.id+" could not be allocated. Please provide more resources or adjust constraints.";console.error(l),alert(l)}[r,e]=this.writeAllocations(r,e,n.id,o)}),[r,e]}function J(r,e,i){let n={iterations:20,size:10,crossover:.3,mutation:.3,webWorkers:!0,skip:5},s={timetable:r,taskMap:e},t=Genetic.create();t.optimize=Genetic.Optimize.Minimize,t.select1=Genetic.Select1.Tournament2,t.select2=Genetic.Select2.Tournament2,t.initialGeneration=N,t.createChild=m,t.validateAndMerge=w,t.pushAfterPredecessors=d,t.mutateSwap=A,t.earliestStartAllocation=G,t.convertResourcesToIdList=O,t.slotAvailable=D,t.availableSlotsForResourceLists=T,t.findFreeSlot=F,t.writeAllocations=P,t.allocateGeneration=b,t.seed=function(){return this.initialGeneration(this.userData.taskMap)},t.mutate=function(o){let l=Math.floor(Math.random()*o.length),a=Math.floor(Math.random()*o.length);return this.mutateSwap(o,l,a,this.userData.taskMap)},t.crossover=function(o,l){let a=o.length,c=Math.floor(Math.random()*a),u=this.createChild(o,l,c,this.userData.taskMap);return[this.createChild(l,o,c,this.userData.taskMap),u]},t.fitness=function(o){let l=JSON.parse(JSON.stringify(this.userData.timetable)),a=JSON.parse(JSON.stringify(this.userData.taskMap));return[l,a]=this.allocateGeneration(l,a,o),Object.values(a).reduce((u,f)=>(f.lastRow>u&&(u=f.lastRow),u),-1)},t.generation=function(o,l,a){},t.notification=function(o,l,a,c){c&&([r,e]=this.allocateGeneration(r,e,o[0].entity),console.log("genetic finished"),i(r,e))},console.log("starting genetic"),t.evolve(n,s)}const C=h([v,R],([r,e],i)=>{let n=L(e.toJSON());if(r.map===void 0){console.log("criticalPath not calculated yet"),i(n);return}let s=JSON.parse(JSON.stringify(r));console.log("gantt",s),J(n,s.map,(t,o)=>{s.map=o,S.set(s),i(t)}),i(n)},[[],[]]);export{C as t};
