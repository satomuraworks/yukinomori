// Online game: only the connection-help page is cached, never partial Unity builds.
const CACHE = 'yukinomori-rpg-help-0.4.10';
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.add('offline.html'))));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('yukinomori-rpg-help-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate' && new URL(event.request.url).origin === self.location.origin)
    event.respondWith(fetch(event.request).catch(() => caches.match('offline.html')));
});
