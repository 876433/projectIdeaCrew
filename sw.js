const CACHE_NAME = 'fitness-tracker-v1';
const urlsToCache = [
  '/',
  '/fitness-tracker.html',
  'https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.js',
  'https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});