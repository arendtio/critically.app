const e=location.pathname.split("/").slice(0,-1).join("/"),m=[e+"/_app/immutable/entry/app.762f8f62.js",e+"/_app/immutable/assets/0.335c7fa2.css",e+"/_app/immutable/nodes/0.83438e52.js",e+"/_app/immutable/nodes/1.00db8f2c.js",e+"/_app/immutable/assets/2.3d585085.css",e+"/_app/immutable/nodes/2.23f5eef7.js",e+"/_app/immutable/assets/3.184a5881.css",e+"/_app/immutable/nodes/3.5c11c191.js",e+"/_app/immutable/assets/4.d07f5040.css",e+"/_app/immutable/nodes/4.6ad40861.js",e+"/_app/immutable/assets/5.61978959.css",e+"/_app/immutable/nodes/5.68e335f7.js",e+"/_app/immutable/assets/6.87fdfe5d.css",e+"/_app/immutable/nodes/6.99dfa4d6.js",e+"/_app/immutable/nodes/7.d7b9a9e8.js",e+"/_app/immutable/assets/8.8080829f.css",e+"/_app/immutable/nodes/8.c4389926.js",e+"/_app/immutable/chunks/assistant.store.dcdfcf39.js",e+"/_app/immutable/chunks/criticalPath.store.c7804fd0.js",e+"/_app/immutable/chunks/each.640a64ca.js",e+"/_app/immutable/chunks/gantt.store.9f14c04c.js",e+"/_app/immutable/chunks/index.6deb0bed.js",e+"/_app/immutable/chunks/index.aa40aee3.js",e+"/_app/immutable/chunks/projectCharter.store.e87999d8.js",e+"/_app/immutable/chunks/scheduler.8fe615de.js",e+"/_app/immutable/chunks/singletons.de1f4552.js",e+"/_app/immutable/chunks/tables.store.802e2f5f.js",e+"/_app/immutable/chunks/timeline.store.a23fd52b.js",e+"/_app/immutable/chunks/xyflow.store.70449895.js",e+"/_app/immutable/entry/start.6c959df0.js"],l=[e+"/.nojekyll",e+"/CNAME",e+"/android-chrome-192x192.png",e+"/android-chrome-512x512.png",e+"/apple-touch-icon.png",e+"/favicon-16x16.png",e+"/favicon-32x32.png",e+"/favicon.ico",e+"/genetic.js",e+"/site.webmanifest"],u="1739999318050",i=`cache-${u}`,p=[...m,...l];self.addEventListener("install",s=>{async function t(){await(await caches.open(i)).addAll(p)}s.waitUntil(t())});self.addEventListener("activate",s=>{async function t(){for(const a of await caches.keys())a!==i&&await caches.delete(a)}s.waitUntil(t())});self.addEventListener("fetch",s=>{if(s.request.method!=="GET")return;async function t(){const a=new URL(s.request.url),n=await caches.open(i);if(p.includes(a.pathname))return n.match(a.pathname);try{const c=await fetch(s.request);return c.status===200&&c.url.slice(0,4)==="http"&&n.put(s.request,c.clone()),c}catch{return n.match(s.request)}}s.respondWith(t())});
