const e=location.pathname.split("/").slice(0,-1).join("/"),l=[e+"/_app/immutable/entry/app.56c2f9ee.js",e+"/_app/immutable/assets/0.2caec775.css",e+"/_app/immutable/nodes/0.3c8325f0.js",e+"/_app/immutable/nodes/1.c9e98cec.js",e+"/_app/immutable/assets/2.4da2157d.css",e+"/_app/immutable/nodes/2.9ee89b16.js",e+"/_app/immutable/assets/3.d07f5040.css",e+"/_app/immutable/nodes/3.abede35e.js",e+"/_app/immutable/nodes/4.adbe36e5.js",e+"/_app/immutable/assets/5.8080829f.css",e+"/_app/immutable/nodes/5.705c1497.js",e+"/_app/immutable/chunks/assistant.store.3f7e3d58.js",e+"/_app/immutable/chunks/criticalPath.store.1c85e9a0.js",e+"/_app/immutable/chunks/drawflow.store.aa0a6cb1.js",e+"/_app/immutable/chunks/each.e59479a4.js",e+"/_app/immutable/chunks/gantt.store.e33e3c75.js",e+"/_app/immutable/chunks/index.2391f01a.js",e+"/_app/immutable/chunks/index.45de7edf.js",e+"/_app/immutable/chunks/scheduler.72a81396.js",e+"/_app/immutable/chunks/singletons.02b6280e.js",e+"/_app/immutable/chunks/tables.store.42dbbbd7.js",e+"/_app/immutable/chunks/timeline.store.897943f9.js",e+"/_app/immutable/entry/start.4a757198.js"],m=[e+"/.nojekyll",e+"/CNAME",e+"/android-chrome-192x192.png",e+"/android-chrome-512x512.png",e+"/apple-touch-icon.png",e+"/browserconfig.xml",e+"/favicon-16x16.png",e+"/favicon-32x32.png",e+"/favicon.ico",e+"/genetic.js",e+"/mstile-144x144.png",e+"/mstile-150x150.png",e+"/mstile-310x150.png",e+"/mstile-310x310.png",e+"/mstile-70x70.png",e+"/safari-pinned-tab.svg",e+"/site.webmanifest"],o="1737289792593",i=`cache-${o}`,p=[...l,...m];self.addEventListener("install",a=>{async function t(){await(await caches.open(i)).addAll(p)}a.waitUntil(t())});self.addEventListener("activate",a=>{async function t(){for(const s of await caches.keys())s!==i&&await caches.delete(s)}a.waitUntil(t())});self.addEventListener("fetch",a=>{if(a.request.method!=="GET")return;async function t(){const s=new URL(a.request.url),c=await caches.open(i);if(p.includes(s.pathname))return c.match(s.pathname);try{const n=await fetch(a.request);return n.status===200&&n.url.slice(0,4)==="http"&&c.put(a.request,n.clone()),n}catch{return c.match(a.request)}}a.respondWith(t())});
