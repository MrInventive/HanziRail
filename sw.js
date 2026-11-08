/* Hanzi Rail offline worker.
   Saves the page and its fonts on the first visit, so the game plays with no connection afterward.
   Tip and feedback links are other websites and always use the network.
   To push an update to everyone, change the version number below. */
var CACHE = 'hanzirail-v1';
var CORE = ['./', 'index.html'];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(CORE); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  var sameSite = url.origin === self.location.origin;
  var fonts = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (!sameSite && !fonts) return; /* everything else goes straight to the network */

  e.respondWith(
    caches.match(req, { ignoreVary: true, ignoreSearch: sameSite }).then(function (hit) {
      var net = fetch(req)
        .then(function (res) {
          if (res && (res.ok || res.type === 'opaque')) {
            var copy = res.clone();
            caches.open(CACHE).then(function (c) { c.put(req, copy); });
          }
          return res;
        })
        .catch(function () {
          if (hit) return hit;
          if (req.mode === 'navigate') return caches.match('index.html');
          return Response.error();
        });
      return hit || net; /* saved copy first; the network copy refreshes it for next time */
    })
  );
});
