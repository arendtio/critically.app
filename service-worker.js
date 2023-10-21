const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  e + "/_app/immutable/entry/app.e9e3128a.js",
  e + "/_app/immutable/assets/0.70299da5.css",
  e + "/_app/immutable/nodes/0.295681a0.js",
  e + "/_app/immutable/assets/metro.01ff63b5.svg",
  e + "/_app/immutable/assets/metro.17292ac5.woff",
  e + "/_app/immutable/assets/metro.435374e5.ttf",
  e + "/_app/immutable/nodes/1.86060f2f.js",
  e + "/_app/immutable/assets/2.5337c442.css",
  e + "/_app/immutable/nodes/2.bd363550.js",
  e + "/_app/immutable/assets/3.d07f5040.css",
  e + "/_app/immutable/nodes/3.632bac37.js",
  e + "/_app/immutable/assets/4.8080829f.css",
  e + "/_app/immutable/nodes/4.3b18b90e.js",
  e + "/_app/immutable/chunks/criticalPath.store.4f990f9d.js",
  e + "/_app/immutable/chunks/drawflow.store.aa0a6cb1.js",
  e + "/_app/immutable/chunks/each.e59479a4.js",
  e + "/_app/immutable/chunks/gantt.store.e33e3c75.js",
  e + "/_app/immutable/chunks/index.2391f01a.js",
  e + "/_app/immutable/chunks/index.45de7edf.js",
  e + "/_app/immutable/chunks/scheduler.72a81396.js",
  e + "/_app/immutable/chunks/singletons.c5a67c31.js",
  e + "/_app/immutable/chunks/timeline.store.cd27ed0b.js",
  e + "/_app/immutable/entry/start.e53d3f4a.js"
], l = [
  e + "/.nojekyll",
  e + "/CNAME",
  e + "/android-chrome-192x192.png",
  e + "/android-chrome-512x512.png",
  e + "/apple-touch-icon.png",
  e + "/browserconfig.xml",
  e + "/favicon-16x16.png",
  e + "/favicon-32x32.png",
  e + "/favicon.ico",
  e + "/mstile-144x144.png",
  e + "/mstile-150x150.png",
  e + "/mstile-310x150.png",
  e + "/mstile-310x310.png",
  e + "/mstile-70x70.png",
  e + "/safari-pinned-tab.svg",
  e + "/site.webmanifest"
], o = "1697874522939", i = `cache-${o}`, p = [
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
    const s = new URL(a.request.url), c = await caches.open(i);
    if (p.includes(s.pathname))
      return c.match(s.pathname);
    try {
      const n = await fetch(a.request);
      return n.status === 200 && n.url.slice(0, 4) === "http" && c.put(a.request, n.clone()), n;
    } catch {
      return c.match(a.request);
    }
  }
  a.respondWith(t());
});
