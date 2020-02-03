const staticMissatingPortfolio = "missating-portfolio-v1";
const assets = ["/", "/index.html", "/styles/css/index.css", "/js/app.js"];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticMissatingPortfolio).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
