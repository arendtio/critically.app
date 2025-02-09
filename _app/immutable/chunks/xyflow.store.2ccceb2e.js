import{w as y}from"./index.7c868b58.js";import{c as B}from"./criticalPath.store.a5bf573a.js";function G(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;const n=document.implementation.createHTMLDocument(),r=n.createElement("base"),s=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(s),e&&(r.href=e),s.href=t,s.href}const X=(()=>{let t=0;const e=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(t+=1,`u${e()}${t}`)})();function f(t){const e=[];for(let n=0,r=t.length;n<r;n++)e.push(t[n]);return e}function d(t,e){const r=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return r?parseFloat(r.replace("px","")):0}function K(t){const e=d(t,"border-left-width"),n=d(t,"border-right-width");return t.clientWidth+e+n}function J(t){const e=d(t,"border-top-width"),n=d(t,"border-bottom-width");return t.clientHeight+e+n}function F(t,e={}){const n=e.width||K(t),r=e.height||J(t);return{width:n,height:r}}function Q(){let t,e;try{e=process}catch{}const n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}const u=16384;function Z(t){(t.width>u||t.height>u)&&(t.width>u&&t.height>u?t.width>t.height?(t.height*=u/t.width,t.width=u):(t.width*=u/t.height,t.height=u):t.width>u?(t.height*=u/t.width,t.width=u):(t.width*=u/t.height,t.height=u))}function w(t){return new Promise((e,n)=>{const r=new Image;r.decode=()=>e(r),r.onload=()=>e(r),r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=t})}async function Y(t){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function N(t,e,n){const r="http://www.w3.org/2000/svg",s=document.createElementNS(r,"svg"),i=document.createElementNS(r,"foreignObject");return s.setAttribute("width",`${e}`),s.setAttribute("height",`${n}`),s.setAttribute("viewBox",`0 0 ${e} ${n}`),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("externalResourcesRequired","true"),s.appendChild(i),i.appendChild(t),Y(s)}const l=(t,e)=>{if(t instanceof e)return!0;const n=Object.getPrototypeOf(t);return n===null?!1:n.constructor.name===e.name||l(n,e)};function tt(t){const e=t.getPropertyValue("content");return`${t.cssText} content: '${e.replace(/'|"/g,"")}';`}function et(t){return f(t).map(e=>{const n=t.getPropertyValue(e),r=t.getPropertyPriority(e);return`${e}: ${n}${r?" !important":""};`}).join(" ")}function nt(t,e,n){const r=`.${t}:${e}`,s=n.cssText?tt(n):et(n);return document.createTextNode(`${r}{${s}}`)}function C(t,e,n){const r=window.getComputedStyle(t,n),s=r.getPropertyValue("content");if(s===""||s==="none")return;const i=X();try{e.className=`${e.className} ${i}`}catch{return}const c=document.createElement("style");c.appendChild(nt(i,n,r)),e.appendChild(c)}function rt(t,e){C(t,e,":before"),C(t,e,":after")}const P="application/font-woff",$="image/jpeg",st={woff:P,woff2:P,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:$,jpeg:$,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function it(t){const e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}function E(t){const e=it(t).toLowerCase();return st[e]||""}function ct(t){return t.split(/,/)[1]}function x(t){return t.search(/^(data:)/)!==-1}function M(t,e){return`data:${e};base64,${t}`}async function U(t,e,n){const r=await fetch(t,e);if(r.status===404)throw new Error(`Resource "${r.url}" not found`);const s=await r.blob();return new Promise((i,c)=>{const o=new FileReader;o.onerror=c,o.onloadend=()=>{try{i(n({res:r,result:o.result}))}catch(a){c(a)}},o.readAsDataURL(s)})}const S={};function ot(t,e,n){let r=t.replace(/\?.*/,"");return n&&(r=t),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),e?`[${e}]${r}`:r}async function R(t,e,n){const r=ot(t,e,n.includeQueryParams);if(S[r]!=null)return S[r];n.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+new Date().getTime());let s;try{const i=await U(t,n.fetchRequestInit,({res:c,result:o})=>(e||(e=c.headers.get("Content-Type")||""),ct(o)));s=M(i,e)}catch(i){s=n.imagePlaceholder||"";let c=`Failed to fetch resource: ${t}`;i&&(c=typeof i=="string"?i:i.message),c&&console.warn(c)}return S[r]=s,s}async function at(t){const e=t.toDataURL();return e==="data:,"?t.cloneNode(!1):w(e)}async function lt(t,e){if(t.currentSrc){const i=document.createElement("canvas"),c=i.getContext("2d");i.width=t.clientWidth,i.height=t.clientHeight,c==null||c.drawImage(t,0,0,i.width,i.height);const o=i.toDataURL();return w(o)}const n=t.poster,r=E(n),s=await R(n,r,e);return w(s)}async function ut(t){var e;try{if(!((e=t==null?void 0:t.contentDocument)===null||e===void 0)&&e.body)return await p(t.contentDocument.body,{},!0)}catch{}return t.cloneNode(!1)}async function ft(t,e){return l(t,HTMLCanvasElement)?at(t):l(t,HTMLVideoElement)?lt(t,e):l(t,HTMLIFrameElement)?ut(t):t.cloneNode(!1)}const ht=t=>t.tagName!=null&&t.tagName.toUpperCase()==="SLOT";async function mt(t,e,n){var r,s;let i=[];return ht(t)&&t.assignedNodes?i=f(t.assignedNodes()):l(t,HTMLIFrameElement)&&(!((r=t.contentDocument)===null||r===void 0)&&r.body)?i=f(t.contentDocument.body.childNodes):i=f(((s=t.shadowRoot)!==null&&s!==void 0?s:t).childNodes),i.length===0||l(t,HTMLVideoElement)||await i.reduce((c,o)=>c.then(()=>p(o,n)).then(a=>{a&&e.appendChild(a)}),Promise.resolve()),e}function gt(t,e){const n=e.style;if(!n)return;const r=window.getComputedStyle(t);r.cssText?(n.cssText=r.cssText,n.transformOrigin=r.transformOrigin):f(r).forEach(s=>{let i=r.getPropertyValue(s);s==="font-size"&&i.endsWith("px")&&(i=`${Math.floor(parseFloat(i.substring(0,i.length-2)))-.1}px`),l(t,HTMLIFrameElement)&&s==="display"&&i==="inline"&&(i="block"),s==="d"&&e.getAttribute("d")&&(i=`path(${e.getAttribute("d")})`),n.setProperty(s,i,r.getPropertyPriority(s))})}function dt(t,e){l(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),l(t,HTMLInputElement)&&e.setAttribute("value",t.value)}function wt(t,e){if(l(t,HTMLSelectElement)){const n=e,r=Array.from(n.children).find(s=>t.value===s.getAttribute("value"));r&&r.setAttribute("selected","")}}function yt(t,e){return l(e,Element)&&(gt(t,e),rt(t,e),dt(t,e),wt(t,e)),e}async function pt(t,e){const n=t.querySelectorAll?t.querySelectorAll("use"):[];if(n.length===0)return t;const r={};for(let i=0;i<n.length;i++){const o=n[i].getAttribute("xlink:href");if(o){const a=t.querySelector(o),m=document.querySelector(o);!a&&m&&!r[o]&&(r[o]=await p(m,e,!0))}}const s=Object.values(r);if(s.length){const i="http://www.w3.org/1999/xhtml",c=document.createElementNS(i,"svg");c.setAttribute("xmlns",i),c.style.position="absolute",c.style.width="0",c.style.height="0",c.style.overflow="hidden",c.style.display="none";const o=document.createElementNS(i,"defs");c.appendChild(o);for(let a=0;a<s.length;a++)o.appendChild(s[a]);t.appendChild(c)}return t}async function p(t,e,n){return!n&&e.filter&&!e.filter(t)?null:Promise.resolve(t).then(r=>ft(r,e)).then(r=>mt(t,r,e)).then(r=>yt(t,r)).then(r=>pt(r,e))}const V=/url\((['"]?)([^'"]+?)\1\)/g,bt=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,St=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function xt(t){const e=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")}function Et(t){const e=[];return t.replace(V,(n,r,s)=>(e.push(s),n)),e.filter(n=>!x(n))}async function Rt(t,e,n,r,s){try{const i=n?G(e,n):e,c=E(e);let o;if(s){const a=await s(i);o=M(a,c)}else o=await R(i,c,r);return t.replace(xt(e),`$1${o}$3`)}catch{}return t}function Ct(t,{preferredFontFormat:e}){return e?t.replace(St,n=>{for(;;){const[r,,s]=bt.exec(n)||[];if(!s)return"";if(s===e)return`src: ${r};`}}):t}function O(t){return t.search(V)!==-1}async function H(t,e,n){if(!O(t))return t;const r=Ct(t,n);return Et(r).reduce((i,c)=>i.then(o=>Rt(o,c,e,n)),Promise.resolve(r))}async function g(t,e,n){var r;const s=(r=e.style)===null||r===void 0?void 0:r.getPropertyValue(t);if(s){const i=await H(s,null,n);return e.style.setProperty(t,i,e.style.getPropertyPriority(t)),!0}return!1}async function Pt(t,e){await g("background",t,e)||await g("background-image",t,e),await g("mask",t,e)||await g("mask-image",t,e)}async function $t(t,e){const n=l(t,HTMLImageElement);if(!(n&&!x(t.src))&&!(l(t,SVGImageElement)&&!x(t.href.baseVal)))return;const r=n?t.src:t.href.baseVal,s=await R(r,E(r),e);await new Promise((i,c)=>{t.onload=i,t.onerror=c;const o=t;o.decode&&(o.decode=i),o.loading==="lazy"&&(o.loading="eager"),n?(t.srcset="",t.src=s):t.href.baseVal=s})}async function Tt(t,e){const r=f(t.childNodes).map(s=>_(s,e));await Promise.all(r).then(()=>t)}async function _(t,e){l(t,Element)&&(await Pt(t,e),await $t(t,e),await Tt(t,e))}function Lt(t,e){const{style:n}=t;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width=`${e.width}px`),e.height&&(n.height=`${e.height}px`);const r=e.style;return r!=null&&Object.keys(r).forEach(s=>{n[s]=r[s]}),t}const T={};async function L(t){let e=T[t];if(e!=null)return e;const r=await(await fetch(t)).text();return e={url:t,cssText:r},T[t]=e,e}async function I(t,e){let n=t.cssText;const r=/url\(["']?([^"')]+)["']?\)/g,i=(n.match(/url\([^)]+\)/g)||[]).map(async c=>{let o=c.replace(r,"$1");return o.startsWith("https://")||(o=new URL(o,t.url).href),U(o,e.fetchRequestInit,({result:a})=>(n=n.replace(c,`url(${a})`),[c,a]))});return Promise.all(i).then(()=>n)}function k(t){if(t==null)return[];const e=[],n=/(\/\*[\s\S]*?\*\/)/gi;let r=t.replace(n,"");const s=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const a=s.exec(r);if(a===null)break;e.push(a[0])}r=r.replace(s,"");const i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,c="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",o=new RegExp(c,"gi");for(;;){let a=i.exec(r);if(a===null){if(a=o.exec(r),a===null)break;i.lastIndex=o.lastIndex}else o.lastIndex=i.lastIndex;e.push(a[0])}return e}async function It(t,e){const n=[],r=[];return t.forEach(s=>{if("cssRules"in s)try{f(s.cssRules||[]).forEach((i,c)=>{if(i.type===CSSRule.IMPORT_RULE){let o=c+1;const a=i.href,m=L(a).then(h=>I(h,e)).then(h=>k(h).forEach(b=>{try{s.insertRule(b,b.startsWith("@import")?o+=1:s.cssRules.length)}catch(q){console.error("Error inserting rule from remote css",{rule:b,error:q})}})).catch(h=>{console.error("Error loading remote css",h.toString())});r.push(m)}})}catch(i){const c=t.find(o=>o.href==null)||document.styleSheets[0];s.href!=null&&r.push(L(s.href).then(o=>I(o,e)).then(o=>k(o).forEach(a=>{c.insertRule(a,s.cssRules.length)})).catch(o=>{console.error("Error loading remote stylesheet",o)})),console.error("Error inlining remote css file",i)}}),Promise.all(r).then(()=>(t.forEach(s=>{if("cssRules"in s)try{f(s.cssRules||[]).forEach(i=>{n.push(i)})}catch(i){console.error(`Error while reading CSS rules from ${s.href}`,i)}}),n))}function kt(t){return t.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>O(e.style.getPropertyValue("src")))}async function Dt(t,e){if(t.ownerDocument==null)throw new Error("Provided element is not within a Document");const n=f(t.ownerDocument.styleSheets),r=await It(n,e);return kt(r)}async function vt(t,e){const n=await Dt(t,e);return(await Promise.all(n.map(s=>{const i=s.parentStyleSheet?s.parentStyleSheet.href:null;return H(s.cssText,i,e)}))).join(`
`)}async function At(t,e){const n=e.fontEmbedCSS!=null?e.fontEmbedCSS:e.skipFonts?null:await vt(t,e);if(n){const r=document.createElement("style"),s=document.createTextNode(n);r.appendChild(s),t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r)}}async function W(t,e={}){const{width:n,height:r}=F(t,e),s=await p(t,e,!0);return await At(s,e),await _(s,e),Lt(s,e),await N(s,n,r)}async function Ft(t,e={}){const{width:n,height:r}=F(t,e),s=await W(t,e),i=await w(s),c=document.createElement("canvas"),o=c.getContext("2d"),a=e.pixelRatio||Q(),m=e.canvasWidth||n,h=e.canvasHeight||r;return c.width=m*a,c.height=h*a,e.skipAutoScale||Z(c),c.style.width=`${m}`,c.style.height=`${h}`,e.backgroundColor&&(o.fillStyle=e.backgroundColor,o.fillRect(0,0,c.width,c.height)),o.drawImage(i,0,0,c.width,c.height),c}async function Mt(t,e={}){return(await Ft(t,e)).toDataURL()}const z=y(1),j=y({x:0,y:0,zoom:1}),D=y(!0),v=y(!0);z.increase=()=>{j.update(t=>({...t,zoom:Math.min(t.zoom+.2,2)}))};z.decrease=()=>{j.update(t=>({...t,zoom:Math.max(t.zoom-.2,.2)}))};async function A(t="png"){const e=document.querySelector(".svelte-flow");if(e){D.set(!1),v.set(!1),e.classList.add("taking-screenshot");try{await new Promise(s=>setTimeout(s,100));let n;t==="svg"?n=await W(e,{backgroundColor:"#ffffff",quality:1}):n=await Mt(e,{backgroundColor:"#ffffff",quality:1});const r=document.createElement("a");r.download=`critical-path-${new Date().getTime()}.${t}`,r.href=n,r.click()}catch(n){console.error("Error exporting diagram:",n)}finally{D.set(!0),v.set(!0),e.classList.remove("taking-screenshot")}}}const Ot={png:()=>A("png"),svg:()=>A("svg")};function Ht(t){const e={};t.forEach(n=>{e[n.id]={x:n.position.x,y:n.position.y}}),B.update(n=>(n.map&&Object.entries(e).forEach(([r,s])=>{n.map[r]&&(n.map[r].x=s.x,n.map[r].y=s.y)}),n))}export{j as a,D as b,Ht as c,Ot as d,v as s,z as x};
