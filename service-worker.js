const a=location.pathname.split("/").slice(0,-1).join("/"),m=[a+"/_app/immutable/entry/app.37ccd8f2.js",a+"/_app/immutable/assets/0.335c7fa2.css",a+"/_app/immutable/nodes/0.a4fb0161.js",a+"/_app/immutable/nodes/1.3b81b6a7.js",a+"/_app/immutable/assets/2.3d585085.css",a+"/_app/immutable/nodes/2.30e190fd.js",a+"/_app/immutable/assets/3.184a5881.css",a+"/_app/immutable/nodes/3.ef42ef0a.js",a+"/_app/immutable/assets/4.d07f5040.css",a+"/_app/immutable/nodes/4.6ad40861.js",a+"/_app/immutable/assets/5.61978959.css",a+"/_app/immutable/nodes/5.68e335f7.js",a+"/_app/immutable/assets/6.87fdfe5d.css",a+"/_app/immutable/nodes/6.6bf69da8.js",a+"/_app/immutable/nodes/7.603fe016.js",a+"/_app/immutable/assets/8.8080829f.css",a+"/_app/immutable/nodes/8.9afba2f9.js",a+"/_app/immutable/chunks/assistant.store.66983e61.js",a+"/_app/immutable/chunks/criticalPath.store.532ba114.js",a+"/_app/immutable/chunks/each.640a64ca.js",a+"/_app/immutable/chunks/gantt.store.9f14c04c.js",a+"/_app/immutable/chunks/index.6deb0bed.js",a+"/_app/immutable/chunks/index.aa40aee3.js",a+"/_app/immutable/chunks/projectCharter.store.e87999d8.js",a+"/_app/immutable/chunks/scheduler.8fe615de.js",a+"/_app/immutable/chunks/singletons.303ee34f.js",a+"/_app/immutable/chunks/tables.store.e04557b4.js",a+"/_app/immutable/chunks/timeline.store.fba66451.js",a+"/_app/immutable/chunks/xyflow.store.f71cc2f8.js",a+"/_app/immutable/entry/start.47cc37fa.js"],l=[a+"/.nojekyll",a+"/CNAME",a+"/android-chrome-192x192.png",a+"/android-chrome-512x512.png",a+"/apple-touch-icon.png",a+"/favicon-16x16.png",a+"/favicon-32x32.png",a+"/favicon.ico",a+"/genetic.js",a+"/site.webmanifest"],u="1739833440926",i=`cache-${u}`,p=[...m,...l];self.addEventListener("install",e=>{async function t(){await(await caches.open(i)).addAll(p)}e.waitUntil(t())});self.addEventListener("activate",e=>{async function t(){for(const s of await caches.keys())s!==i&&await caches.delete(s)}e.waitUntil(t())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function t(){const s=new URL(e.request.url),n=await caches.open(i);if(p.includes(s.pathname))return n.match(s.pathname);try{const c=await fetch(e.request);return c.status===200&&c.url.slice(0,4)==="http"&&n.put(e.request,c.clone()),c}catch{return n.match(e.request)}}e.respondWith(t())});
