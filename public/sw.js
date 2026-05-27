// Minimal SW required by Chrome to consider the site installable.
// No fetch handler (Chrome warns about no-op fetch handlers).
self.addEventListener("install", (e) => e.waitUntil(self.skipWaiting()));
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
