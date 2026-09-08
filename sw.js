// eGym → Garmin — service worker
// Cachet de app-shell zodat de app ook zonder (goede) verbinding opent.
// Ophogen bij elke release zodat oude caches automatisch worden opgeruimd.
const CACHE = 'egym2garmin-v1.9.0';
const SHELL = [
  './',
  'index.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  'icon-512-maskable.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first voor de app-shell (zodat een update direct zichtbaar is zodra er
// verbinding is), met cache-fallback voor offline gebruik. Externe requests
// (bv. Tesseract.js via CDN) laten we ongemoeid — die heeft de OCR-stap sowieso
// verbinding voor nodig.
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request).then((r) => r || caches.match('index.html')))
  );
});
