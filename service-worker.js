const e=location.pathname.split("/").slice(0,-1).join("/"),m=[e+"/_app/immutable/entry/app.76e96a02.js",e+"/_app/immutable/assets/0.2caec775.css",e+"/_app/immutable/nodes/0.3875e46b.js",e+"/_app/immutable/nodes/1.1fc75ea4.js",e+"/_app/immutable/assets/2.9f99253d.css",e+"/_app/immutable/nodes/2.4f27e3d9.js",e+"/_app/immutable/assets/3.b3f71104.css",e+"/_app/immutable/nodes/3.66bba410.js",e+"/_app/immutable/assets/4.d07f5040.css",e+"/_app/immutable/nodes/4.272e8002.js",e+"/_app/immutable/assets/5.61978959.css",e+"/_app/immutable/nodes/5.3217e6de.js",e+"/_app/immutable/assets/6.be79787e.css",e+"/_app/immutable/nodes/6.d32a6b06.js",e+"/_app/immutable/nodes/7.5146ed31.js",e+"/_app/immutable/assets/8.8080829f.css",e+"/_app/immutable/nodes/8.2d49dead.js",e+"/_app/immutable/chunks/assistant.store.01cff713.js",e+"/_app/immutable/chunks/criticalPath.store.e631524e.js",e+"/_app/immutable/chunks/drawflow.store.ae844c71.js",e+"/_app/immutable/chunks/each.e59479a4.js",e+"/_app/immutable/chunks/gantt.store.28294fa8.js",e+"/_app/immutable/chunks/index.0f227f4a.js",e+"/_app/immutable/chunks/index.60426481.js",e+"/_app/immutable/chunks/projectCharter.store.fdb056df.js",e+"/_app/immutable/chunks/scheduler.2c88ebef.js",e+"/_app/immutable/chunks/singletons.10d3b2b7.js",e+"/_app/immutable/chunks/tables.store.a680fdc0.js",e+"/_app/immutable/chunks/timeline.store.ed802635.js",e+"/_app/immutable/entry/start.56c2be7d.js"],l=[e+"/.nojekyll",e+"/CNAME",e+"/android-chrome-192x192.png",e+"/android-chrome-512x512.png",e+"/apple-touch-icon.png",e+"/browserconfig.xml",e+"/favicon-16x16.png",e+"/favicon-32x32.png",e+"/favicon.ico",e+"/genetic.js",e+"/mstile-144x144.png",e+"/mstile-150x150.png",e+"/mstile-310x150.png",e+"/mstile-310x310.png",e+"/mstile-70x70.png",e+"/safari-pinned-tab.svg",e+"/site.webmanifest"],u="1738908271434",i=`cache-${u}`,p=[...m,...l];self.addEventListener("install",s=>{async function t(){await(await caches.open(i)).addAll(p)}s.waitUntil(t())});self.addEventListener("activate",s=>{async function t(){for(const a of await caches.keys())a!==i&&await caches.delete(a)}s.waitUntil(t())});self.addEventListener("fetch",s=>{if(s.request.method!=="GET")return;async function t(){const a=new URL(s.request.url),c=await caches.open(i);if(p.includes(a.pathname))return c.match(a.pathname);try{const n=await fetch(s.request);return n.status===200&&n.url.slice(0,4)==="http"&&c.put(s.request,n.clone()),n}catch{return c.match(s.request)}}s.respondWith(t())});
