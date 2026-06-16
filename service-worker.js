const CACHE_NAME = "honeymoon-guide-v70";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=70",
  "./app.js?v=70",
  "./data.js?v=70",
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
  "./assets/big-bus-ticket-jun24-qr.png",
  "./assets/seine-cruise-ticket-qr.png",
  "./assets/louvre-ticket-qrs.png",
  "./docs/AllianzIns.pdf",
  "./docs/Amalfi%20Coast%20Honeymoon%20Itinerary.pdf",
  "./docs/Dining%20Guide.pdf",
  "./docs/Honeymoon%20Itinerary.pdf",
  "./docs/Packing%20Guide%20and%20Travel%20Tips.pdf",
  "./docs/Pre-Trip%20Checklist%20%26%20Travel%20Preparation.pdf",
  "./docs/Transportation%20Guide.pdf",
  "./docs/Wedding%20and%20Honeymoon%20Itinerary.pdf",
  "./docs/CapriTour.pdf",
  "./docs/CookingClass.pdf",
  "./docs/DeltaHW6MPS.pdf",
  "./docs/EasyJetKC8B7PH.pdf",
  "./docs/MarriottHotelPompeii.pdf",
  "./docs/ParisAirbnb.pdf",
  "./docs/ParisBigBus-Jun24.pdf",
  "./docs/SeineRiverCruiseTickets.pdf",
  "./docs/LouvreTix.pdf",
  "./docs/LouvreConfirmation.pdf",
  "./docs/PraianoVillaGianlica.pdf",
  "./docs/WeddingNightAirbnb.pdf",
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
