const OFFLINE_CACHE = 'index-offline-v1';
const OFFLINE_ASSETS = [
  '/',
  '/index.html',
  '/games.html',
  '/chat.html',
  '/stream-vault.html',
  '/screensaver.html',
  '/nail-studio.html',
  '/pi.html',
  '/voyage.html',
  '/pax-americana.html',
  '/ct_july_2026_itinerary.html',
  '/vietnam-itinerary-2026.html',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(OFFLINE_CACHE).then(cache => cache.addAll(OFFLINE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== OFFLINE_CACHE).map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') return response;
        const copy = response.clone();
        caches.open(OFFLINE_CACHE).then(cache => cache.put(request, copy));
        return response;
      });
    })
  );
});
