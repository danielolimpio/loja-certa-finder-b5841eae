// Minimal service worker required by Chrome/Edge to enable the native
// "Install app" prompt (beforeinstallprompt). It only proxies fetches and
// does not cache anything aggressively, so deploys go live immediately.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// A fetch handler is required for installability, but we use network-only
// to avoid any stale-content issues.
self.addEventListener("fetch", (event) => {
  // Pass through — do not cache.
});
