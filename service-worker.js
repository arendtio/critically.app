const e=location.pathname.split("/").slice(0,-1).join("/"),l=[e+"/_app/immutable/entry/app.acd4c51b.js",e+"/_app/immutable/assets/0.fdd7a57f.css",e+"/_app/immutable/nodes/0.62fd69de.js",e+"/_app/immutable/nodes/1.9fc227f6.js",e+"/_app/immutable/assets/2.5337c442.css",e+"/_app/immutable/nodes/2.308f6d17.js",e+"/_app/immutable/assets/3.d07f5040.css",e+"/_app/immutable/nodes/3.abede35e.js",e+"/_app/immutable/assets/4.8080829f.css",e+"/_app/immutable/nodes/4.bd656bc8.js",e+"/_app/immutable/chunks/criticalPath.store.3b292004.js",e+"/_app/immutable/chunks/drawflow.store.aa0a6cb1.js",e+"/_app/immutable/chunks/each.e59479a4.js",e+"/_app/immutable/chunks/gantt.store.e33e3c75.js",e+"/_app/immutable/chunks/index.2391f01a.js",e+"/_app/immutable/chunks/index.45de7edf.js",e+"/_app/immutable/chunks/scheduler.72a81396.js",e+"/_app/immutable/chunks/singletons.e7c9145c.js",e+"/_app/immutable/chunks/timeline.store.aa31d101.js",e+"/_app/immutable/entry/start.1de9558a.js"],m=[e+"/.nojekyll",e+"/CNAME",e+"/android-chrome-192x192.png",e+"/android-chrome-512x512.png",e+"/apple-touch-icon.png",e+"/browserconfig.xml",e+"/favicon-16x16.png",e+"/favicon-32x32.png",e+"/favicon.ico",e+"/genetic.js",e+"/mstile-144x144.png",e+"/mstile-150x150.png",e+"/mstile-310x150.png",e+"/mstile-310x310.png",e+"/mstile-70x70.png",e+"/safari-pinned-tab.svg",e+"/site.webmanifest"],o="1729019049313",i=`cache-${o}`,p=[...l,...m];self.addEventListener("install",a=>{async function t(){await(await caches.open(i)).addAll(p)}a.waitUntil(t())});self.addEventListener("activate",a=>{async function t(){for(const s of await caches.keys())s!==i&&await caches.delete(s)}a.waitUntil(t())});self.addEventListener("fetch",a=>{if(a.request.method!=="GET")return;async function t(){const s=new URL(a.request.url),c=await caches.open(i);if(p.includes(s.pathname))return c.match(s.pathname);try{const n=await fetch(a.request);return n.status===200&&n.url.slice(0,4)==="http"&&c.put(a.request,n.clone()),n}catch{return c.match(a.request)}}a.respondWith(t())});
