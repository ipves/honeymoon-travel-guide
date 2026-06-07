const CACHE_NAME = "honeymoon-guide-v25";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=25",
  "./app.js?v=25",
  "./data.js?v=25",
  "./manifest.webmanifest",
  "./assets/amalfi-paris-hero.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/day-01-wedding-night.jpg",
  "./assets/day-02-departure-flight.jpg",
  "./assets/day-03-paris-arrival-cruise.jpg",
  "./assets/day-04-paris-icons.jpg",
  "./assets/day-05-versailles.jpg",
  "./assets/day-06-paris-to-praiano.jpg",
  "./assets/day-07-cooking-beach.jpg",
  "./assets/day-08-positano.jpg",
  "./assets/day-09-path-amalfi.jpg",
  "./assets/day-10-capri-boat.jpg",
  "./assets/day-11-pompeii.jpg",
  "./assets/day-12-return-home.jpg",
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
