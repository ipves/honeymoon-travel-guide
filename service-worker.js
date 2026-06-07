const CACHE_NAME = "honeymoon-guide-v19";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=19",
  "./app.js?v=19",
  "./data.js?v=19",
  "./manifest.webmanifest",
  "./assets/amalfi-paris-hero.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./docs/Amalfi%20Coast%20Honeymoon%20Itinerary.pdf",
  "./docs/Dining%20Guide.pdf",
  "./docs/Honeymoon%20Itinerary.pdf",
  "./docs/Packing%20Guide%20and%20Travel%20Tips.pdf",
  "./docs/Pre-Trip%20Checklist%20%26%20Travel%20Preparation.pdf",
  "./docs/Transportation%20Guide.pdf",
  "./docs/Wedding%20and%20Honeymoon%20Itinerary.pdf",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
