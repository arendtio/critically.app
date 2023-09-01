const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  e + "/_app/immutable/entry/app.b680728a.js",
  e + "/_app/immutable/assets/0.ea59e653.css",
  e + "/_app/immutable/nodes/0.e15732c6.js",
  e + "/_app/immutable/assets/metro.01ff63b5.svg",
  e + "/_app/immutable/assets/metro.17292ac5.woff",
  e + "/_app/immutable/assets/metro.435374e5.ttf",
  e + "/_app/immutable/nodes/1.fe9f6614.js",
  e + "/_app/immutable/assets/2.5337c442.css",
  e + "/_app/immutable/nodes/2.e9fa3ae2.js",
  e + "/_app/immutable/assets/3.d07f5040.css",
  e + "/_app/immutable/nodes/3.e437deae.js",
  e + "/_app/immutable/assets/4.8080829f.css",
  e + "/_app/immutable/nodes/4.970e3815.js",
  e + "/_app/immutable/chunks/criticalPath.store.4f990f9d.js",
  e + "/_app/immutable/chunks/drawflow.store.aa0a6cb1.js",
  e + "/_app/immutable/chunks/each.e59479a4.js",
  e + "/_app/immutable/chunks/gantt.store.e33e3c75.js",
  e + "/_app/immutable/chunks/index.2391f01a.js",
  e + "/_app/immutable/chunks/index.69694ed8.js",
  e + "/_app/immutable/chunks/scheduler.72a81396.js",
  e + "/_app/immutable/chunks/singletons.1977497f.js",
  e + "/_app/immutable/chunks/timeline.store.cd27ed0b.js",
  e + "/_app/immutable/entry/start.425628d9.js"
], l = [
  e + "/.nojekyll",
  e + "/CNAME",
  e + "/favicon.png"
], u = "1693599797750", i = `cache-${u}`, p = [
  ...m,
  // the app itself
  ...l
  // everything in `static`
];
self.addEventListener("install", (a) => {
  async function t() {
    await (await caches.open(i)).addAll(p);
  }
  a.waitUntil(t());
});
self.addEventListener("activate", (a) => {
  async function t() {
    for (const s of await caches.keys())
      s !== i && await caches.delete(s);
  }
  a.waitUntil(t());
});
self.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET")
    return;
  async function t() {
    const s = new URL(a.request.url), n = await caches.open(i);
    if (p.includes(s.pathname))
      return n.match(s.pathname);
    try {
      const c = await fetch(a.request);
      return c.status === 200 && c.url.slice(0, 4) === "http" && n.put(a.request, c.clone()), c;
    } catch {
      return n.match(a.request);
    }
  }
  a.respondWith(t());
});
