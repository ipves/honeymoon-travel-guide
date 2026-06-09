const STORE_KEY = "honeymoon-guide-checks-v1";
const SECTION_ORDER = {
  "Pre-Trip Checklist & Travel Preparation.pdf": 1,
  "Packing Guide and Travel Tips.pdf": 2,
  "AllianzIns.pdf": 3,
  "Honeymoon Itinerary.pdf": 4,
  "Wedding and Honeymoon Itinerary.pdf": 5,
  "Amalfi Coast Honeymoon Itinerary.pdf": 6,
  "Transportation Guide.pdf": 7,
  "Dining Guide.pdf": 8,
};
const DOC_SUMMARIES = {
  "AllianzIns.pdf":
    "The Allianz travel insurance policy for the honeymoon. Open this if you need policy details, assistance information, coverage terms, claim instructions, or emergency travel support.",
  "Honeymoon Itinerary.pdf":
    "The quick-reference vault for emergencies, flights, lodging, confirmations, and critical trip details. Open this first when plans get delayed or you need the next important number, address, or booking code.",
  "Pre-Trip Checklist & Travel Preparation.pdf":
    "A countdown checklist for the weeks before departure, covering passports, apps, bookings, money, mobile phones, packing supplies, and saved confirmations. It is designed to remove last-minute surprises.",
  "Wedding and Honeymoon Itinerary.pdf":
    "The main day-by-day plan from the wedding night through Paris and the start of the Amalfi Coast. It includes timing, travel flow, arrival instructions, and gentle reminders for keeping the trip calm.",
  "Amalfi Coast Honeymoon Itinerary.pdf":
    "The Amalfi Coast finale guide for Path of the Gods, Amalfi, Pompeii, and the return-home stretch. It keeps the coastal days realistic, scenic, and relaxed rather than over-scheduled.",
  "Transportation Guide.pdf":
    "A practical movement guide for airports, taxis, transfers, trains, buses, and stressful connections. Use it when you need a simple answer for how to get from one place to the next.",
  "Dining Guide.pdf":
    "Restaurant and food options organized by location and mood, from easy arrival-day choices to romantic Amalfi Coast meals. It helps you choose based on energy level, budget, and what kind of night you want.",
  "Packing Guide and Travel Tips.pdf":
    "Packing lists, daily carry reminders, ticket tracking, and final-week prep for Paris, Amalfi, Capri, Path of the Gods, and Pompeii. It is the practical final check before heading out each day.",
};
const DOC_MAPS = {
  "AllianzIns.pdf": [],
  "Honeymoon Itinerary.pdf": ["The Barn Loft", "Paris Airbnb", "Villa Gianlica", "Moxy Pompeii"],
  "Pre-Trip Checklist & Travel Preparation.pdf": ["Paris Airbnb", "Villa Gianlica", "Moxy Pompeii"],
  "Wedding and Honeymoon Itinerary.pdf": ["The Barn Loft", "Paris Airbnb", "Villa Gianlica"],
  "Amalfi Coast Honeymoon Itinerary.pdf": ["Path of the Gods", "Amalfi Bus Terminal", "Pompeii"],
  "Transportation Guide.pdf": ["Paris Airbnb", "Versailles Chateau Rive Gauche", "Villa Gianlica"],
  "Dining Guide.pdf": ["Cafe de Flore", "Le Volant", "Pink Mamma", "Kasai", "Che Bonta Gastronomia", "Da Gemma", "L'Abside", "Pasticceria Pansa"],
  "Packing Guide and Travel Tips.pdf": ["Paris Airbnb", "Praiano", "Capri", "Path of the Gods", "Pompeii"],
};
const MAP_LINKS = {
  "The Barn Loft": "The Barn Loft 2545 Tyus Carrollton Road Carrollton GA 30117",
  "Paris Airbnb": "Rue Sebastien Mercier 75015 Paris France",
  "Rue Sebastien Mercier": "Rue Sebastien Mercier 75015 Paris France",
  "Cafe de Flore": "Cafe de Flore Paris France",
  "Square du Vert-Galant": "Square du Vert-Galant 15 Place du Pont Neuf Paris France",
  "Le Volant": "Le Volant Paris France",
  "Pink Mamma": "Pink Mamma Paris France",
  "Eiffel Tower": "Eiffel Tower Paris France",
  "Louvre": "Louvre Museum Paris France",
  "Versailles Chateau Rive Gauche": "Versailles Chateau Rive Gauche France",
  "Palace of Versailles": "Palace of Versailles France",
  "Villa Gianlica": "Villa Gianlica Praiano Italy",
  "Praiano": "Praiano Amalfi Coast Italy",
  "Ristorante km0": "Ristorante km0 Via Guglielmo Marconi 45 Praiano Italy",
  "Marina di Praia": "Marina di Praia Praiano Italy",
  "Positano": "Positano Italy",
  "Spiaggia Grande": "Spiaggia Grande Positano Italy",
  "Da Vincenzo": "Da Vincenzo Positano Italy",
  "Church of Santa Maria Assunta": "Church of Santa Maria Assunta Positano Italy",
  "Kasai": "Kasai Praiano Italy",
  "Che Bonta Gastronomia": "Che Bonta Gastronomia Praiano Italy",
  "Amalfi Bus Terminal": "Amalfi Bus Terminal Amalfi Italy",
  "Bomerano": "Bomerano Agerola Italy",
  "Path of the Gods": "Path of the Gods Bomerano Italy",
  "Amalfi Cathedral": "Amalfi Cathedral Italy",
  "Piazza del Duomo": "Piazza del Duomo Amalfi Italy",
  "Da Gemma": "Da Gemma Amalfi Italy",
  "L'Abside": "L'Abside Amalfi Italy",
  "Pasticceria Pansa": "Pasticceria Pansa Amalfi Italy",
  "Capri": "Capri Italy",
  "Pompeii": "Pompeii Archaeological Park Italy",
  "Moxy Pompeii": "Moxy Pompeii Torre Annunziata Italy",
  "Porta Marina Entrance": "Porta Marina Entrance Pompeii Italy",
  "Bosco de' Medici": "Bosco de Medici Pompeii Italy",
  "Torre Annunziata": "Torre Annunziata Italy",
  "Naples": "Naples Italy",
};
const DAY_THUMBNAILS = [
  ["assets/day-01-wedding-night.jpg", "Rustic barn for wedding night"],
  ["assets/day-02-departure-flight.jpg", "Overnight flight to Paris"],
  ["assets/day-03-paris-arrival-cruise.jpg", "Seine cruise in Paris"],
  ["assets/day-04-paris-icons.jpg", "Paris landmarks with Eiffel Tower and Louvre"],
  ["assets/day-05-versailles.jpg", "Versailles gardens"],
  ["assets/day-06-paris-to-praiano.jpg", "Travel from Paris to the Amalfi Coast"],
  ["assets/day-07-cooking-beach.jpg", "Praiano cooking class and beach"],
  ["assets/day-08-positano.jpg", "Positano cliffside village"],
  ["assets/day-09-path-amalfi.jpg", "Path of the Gods and Amalfi coast"],
  ["assets/day-10-capri-boat.jpg", "Capri boat excursion"],
  ["assets/day-11-pompeii.jpg", "Pompeii ruins"],
  ["assets/day-12-return-home.jpg", "Return home airport morning"],
];
const BIG_BUS_ROUTE_URL = "https://www.bigbustours.com/en/paris/red-classic-route-paris/";
const BIG_BUS_TICKET_PDF = "docs/ParisBigBus.pdf";
const SITA_ROUTE_URL = "https://www.ravello.com/sita-bus-schedule/#routes-schedules";
const UNICO_APP_STORE_URL = "https://apps.apple.com/us/app/unico-campania-app/id1504055273";
const BOLT_APP_STORE_URL = "https://apps.apple.com/us/app/bolt-request-a-ride/id675033630";
const SAILY_APP_STORE_URL = "https://apps.apple.com/us/app/saily-travel-esim-data/id6475045151";
const G7_APP_STORE_URL = "https://apps.apple.com/us/app/g7-taxi-book-a-taxi/id402196027";
const BIG_BUS_APP_STORE_URL = "https://apps.apple.com/us/app/big-bus-tours/id590746945";
const DELTA_APP_STORE_URL = "https://apps.apple.com/us/app/fly-delta/id388491656";
const VIATOR_APP_STORE_URL = "https://apps.apple.com/us/app/viator-tours-attractions/id434832826";
const SEINE_CRUISE_VIATOR_URL = "https://www.viator.com/account/booking/detail/1401765745?m=63070&nid=VR.f2811c2f-d258-499e-928f-5497cefcc358.VT_EMAIL_TRV";
const BIG_BUS_VIATOR_URL = "https://www.viator.com/account/booking/212033288/1784186781/1401767595";
const CHATGPT_URL = "https://chatgpt.com/";
const TRAVEL_RESOURCE_LINKS = {
  paris: "https://www.tripadvisor.com/Tourism-g187147-Paris_Ile_de_France-Vacations.html",
  amalfi: "https://www.tripadvisor.com/Tourism-g187779-Amalfi_Coast_Province_of_Salerno_Campania-Vacations.html",
  pompeii: "https://www.tripadvisor.com/Tourism-g187786-Pompeii_Province_of_Naples_Campania-Vacations.html",
  naples: "https://www.tripadvisor.com/Tourism-g187785-Naples_Province_of_Naples_Campania-Vacations.html",
};
const BIG_BUS_STOPS = [
  "Louvre-Pyramide",
  "Louvre / Pont des Arts",
  "Notre Dame",
  "Musee d'Orsay",
  "Champs-Elysees",
  "Grand Palais",
  "Trocadero",
  "Tour Eiffel",
  "Champ de Mars",
  "Opera Garnier",
];
const CONFIRMATION_DOCS = {
  weddingNight: ["Wedding Night Airbnb", "WeddingNightAirbnb.pdf"],
  delta: ["Delta Flights", "DeltaHW6MPS.pdf"],
  parisAirbnb: ["Paris Airbnb", "ParisAirbnb.pdf"],
  champagneCruise: ["Seine Champagne Cruise", "ParisSunsetChampagneCruise.pdf"],
  bigBus: ["Big Bus Paris", "ParisBigBus.pdf"],
  easyJet: ["EasyJet Flight", "EasyJetKC8B7PH.pdf"],
  villa: ["Villa Gianlica", "PraianoVillaGianlica.pdf"],
  cooking: ["Cooking Class", "CookingClass.pdf"],
  capri: ["Capri Boat Tour", "CapriTour.pdf"],
  moxy: ["Moxy Pompeii", "MarriottHotelPompeii.pdf"],
};
const DAY_CONFIRMATIONS = [
  ["weddingNight"],
  ["delta"],
  ["delta", "parisAirbnb", "champagneCruise"],
  ["bigBus"],
  [],
  ["easyJet", "villa"],
  ["cooking"],
  [],
  [],
  ["capri"],
  ["villa", "moxy"],
  ["delta"],
];
const SITA_ROUTES = {
  positano: {
    eyebrow: "SITA Bus",
    title: "Praiano to Positano",
    note: "Use the Amalfi-Positano-Sorrento schedule. Buy tickets before boarding; tickets are not sold on the bus.",
    steps: ["Praiano / SS163 stop", "Bus toward Positano / Sorrento", "Exit Sponda", "Walk down to Spiaggia Grande", "Return toward Praiano / Amalfi"],
  },
  path: {
    eyebrow: "SITA Bus",
    title: "Praiano to Bomerano via Amalfi",
    note: "Use Amalfi-bound buses plus the Amalfi-Agerola-Naples route for Bomerano / Path of the Gods. Verify times the morning of travel.",
    steps: ["Praiano / SS163 stop", "Bus toward Amalfi", "Amalfi Bus Terminal", "Bus toward Agerola / Bomerano", "Return Bomerano to Amalfi to Praiano"],
  },
};
const BOLT_RIDES = {
  orly: {
    title: "Paris Airbnb to Orly",
    note: "Use Bolt or taxi for the transfer from Paris to Orly before the EasyJet flight to Naples.",
    details: [
      ["Pickup", "Paris Airbnb, Rue Sebastien Mercier, 75015 Paris"],
      ["Destination", "Paris Orly Airport"],
      ["Pickup time", "10:15 AM"],
      ["Goal arrival", "11:00 AM"],
      ["Flight timing", "EasyJet bag drop opens 11:15 AM and closes 12:35 PM"],
    ],
  },
  naplesAirport: {
    title: "Moxy Pompeii to Naples Airport",
    note: "Use Bolt for the early airport transfer. If availability looks limited, ask Moxy front desk Tuesday evening to arrange taxi service.",
    details: [
      ["Pickup", "Moxy Pompeii, Via Castriota 43, Torre Annunziata"],
      ["Destination", "Naples International Airport"],
      ["Request Bolt", "6:00 AM"],
      ["Departure goal", "6:15 AM"],
      ["Goal arrival", "6:45-7:00 AM for Delta DL279 at 9:05 AM"],
    ],
  },
};

function mapUrl(label) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_LINKS[label] || label)}`;
}

function renderMapLinks(labels = []) {
  if (!labels.length) return "";
  return `<nav class="map-links" aria-label="Map links">${labels
    .map((label) => `<a href="${mapUrl(label)}" target="_blank" rel="noopener" aria-label="Open ${label} in Google Maps">Map<span>${label}</span></a>`)
    .join("")}</nav>`;
}

function renderBigBusRouteCard() {
  return `<aside class="route-card" aria-label="Big Bus Paris Red Route">
    <div>
      <p>Big Bus Red Route</p>
      <h4>Classic Paris loop</h4>
      <span>Official route: about 2 hr 15 min, buses every 10-20 min.</span>
    </div>
    <ol>${BIG_BUS_STOPS.map((stop) => `<li>${stop}</li>`).join("")}</ol>
    <a href="${BIG_BUS_ROUTE_URL}" target="_blank" rel="noopener">Open official route & map</a>
  </aside>`;
}

function renderBigBusTicketCard() {
  return `<aside class="ticket-card" aria-label="Big Bus scannable ticket">
    <div>
      <p>Big Bus Ticket</p>
      <h4>Scan at boarding</h4>
      <span>Booking reference 1401767595. Use the QR code below, or open the full ticket PDF if staff needs the complete Viator ticket.</span>
    </div>
    <img src="assets/big-bus-ticket-qr.png" alt="Scannable Big Bus ticket QR code" />
    <div class="ticket-card-actions">
      <a href="${BIG_BUS_TICKET_PDF}" target="_blank" rel="noopener">Open full Big Bus ticket</a>
      <a href="${BIG_BUS_VIATOR_URL}" target="_blank" rel="noopener">Open Viator booking</a>
    </div>
  </aside>`;
}

function renderViatorBookingCard() {
  return `<aside class="booking-card" aria-label="Seine Champagne Cruise Viator booking">
    <div>
      <p>Viator Booking</p>
      <h4>Seine Champagne Cruise</h4>
      <span>Booking reference 1401765745. Open the Viator booking page for the cruise ticket, details, and any day-of updates.</span>
    </div>
    <div class="booking-card-actions">
      <a href="${SEINE_CRUISE_VIATOR_URL}" target="_blank" rel="noopener">Open Viator booking</a>
      <a href="${VIATOR_APP_STORE_URL}" target="_blank" rel="noopener">Get Viator app</a>
    </div>
  </aside>`;
}

function renderSitaRouteCard(kind) {
  const route = SITA_ROUTES[kind];
  if (!route) return "";
  return `<aside class="route-card route-card--sita" aria-label="${route.title}">
    <div>
      <p>${route.eyebrow}</p>
      <h4>${route.title}</h4>
      <span>${route.note}</span>
    </div>
    <ol>${route.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
    <div class="route-card-actions">
      <a href="${SITA_ROUTE_URL}" target="_blank" rel="noopener">Open SITA schedule & route map</a>
      <a href="${UNICO_APP_STORE_URL}" target="_blank" rel="noopener">Get UNICO app for tickets</a>
    </div>
  </aside>`;
}

function renderBoltRideCard(kind) {
  const ride = BOLT_RIDES[kind];
  if (!ride) return "";
  return `<aside class="route-card route-card--bolt" aria-label="Bolt ride: ${ride.title}">
    <div>
      <p>Bolt / Taxi</p>
      <h4>${ride.title}</h4>
      <span>${ride.note}</span>
    </div>
    <dl class="ride-details">${ride.details
      .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
      .join("")}</dl>
    <div class="route-card-actions">
      <a href="${BOLT_APP_STORE_URL}" target="_blank" rel="noopener">Open / get Bolt app</a>
    </div>
  </aside>`;
}

function renderEasyJetTransferCard() {
  const details = [
    ["Flight", "EasyJet EJU4953, Paris Orly to Naples"],
    ["Time", "1:15-3:30 PM, Thursday June 25"],
    ["Booking", "KC8B7PH"],
    ["Seats", "Noah 11A, Lila 11B"],
    ["Bags", "2 x 23kg checked bags included"],
    ["Naples arrival", "Collect checked bags, exit baggage claim / arrivals, and look for the private driver holding a sign with their names on it."],
  ];
  return `<aside class="route-card route-card--flight" aria-label="EasyJet flight and Naples transfer reminder">
    <div class="flight-card-head">
      <div>
        <p>Flight + Transfer</p>
        <h4>Orly to Naples, then private driver</h4>
        <span>Keep this visible after landing so the Naples airport pickup step does not get missed.</span>
      </div>
      <div class="easyjet-badge" aria-label="EasyJet">easyJet</div>
    </div>
    <dl class="ride-details">${details
      .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
      .join("")}</dl>
  </aside>`;
}

function renderPompeiiTransferAlert() {
  return `<aside class="route-card route-card--pickup-alert" aria-label="Private transfer pickup reminder">
    <div class="pickup-alert-icon" aria-hidden="true">!</div>
    <div>
      <p>Private Transfer Reminder</p>
      <h4>Stay at Villa Gianlica for pickup</h4>
      <span>Do not leave for Pompeii on your own. After checkout, the private transfer driver will meet them at the villa lobby / entrance for the ride to Moxy Pompeii.</span>
    </div>
  </aside>`;
}

function renderConfirmations(keys = []) {
  if (!keys.length) return "";
  return `<nav class="confirm-links" aria-label="Confirmation documents">
    <p>Confirmations</p>
    <div>${renderConfirmationButtons(keys)}</div>
  </nav>`;
}

function renderConfirmationButtons(keys = [], className = "") {
  const classAttr = className ? ` class="${className}"` : "";
  return keys
    .map((key) => {
      const doc = CONFIRMATION_DOCS[key];
      if (!doc) return "";
      const [label, file] = doc;
      return `<a${classAttr} href="docs/${encodeURIComponent(file)}" target="_blank" rel="noopener">${label}</a>`;
    })
    .join("");
}

function renderDashboardActions(maps = [], confirmations = [], links = []) {
  if (!maps.length && !confirmations.length && !links.length) return "";
  const mapLinks = maps
    .map((label) => `<a class="dash-map-link" href="${mapUrl(label)}" target="_blank" rel="noopener" aria-label="Open ${label} in Google Maps">Map<span>${label}</span></a>`)
    .join("");
  const actionLinks = links.map(([label, url]) => `<a class="dash-app-link" href="${url}" target="_blank" rel="noopener">${label}</a>`).join("");
  return `<nav class="dash-actions" aria-label="Quick links">${mapLinks}${renderConfirmationButtons(confirmations, "dash-doc-link")}${actionLinks}</nav>`;
}

const trip = {
  dashboardGroups: [
    {
      title: "Travel Timeline",
      items: [
        ["June 20", "Wedding Night", "The Barn Loft, Carrollton", ["The Barn Loft"], ["weddingNight"]],
        ["June 21", "Depart Atlanta", "Delta DL84 to Paris at 9:50 PM", [], ["delta"]],
        ["June 22-25", "Paris", "Airbnb on Rue Sebastien Mercier", ["Paris Airbnb"], ["parisAirbnb", "champagneCruise", "bigBus"]],
        ["June 25-30", "Praiano", "Villa Gianlica, Amalfi Coast", ["Villa Gianlica", "Praiano"], ["easyJet", "villa", "cooking", "capri"]],
        ["June 30-July 1", "Pompeii", "Moxy Pompeii / Torre Annunziata", ["Pompeii", "Moxy Pompeii"], ["moxy"]],
        ["July 1", "Return Home", "Delta DL279 Naples to Atlanta at 9:05 AM", [], ["delta"]],
      ],
    },
    {
      title: "Destination Tips",
      items: [
        ["Paris", "Tripadvisor Paris", "Traveler tips, restaurants, attractions, and neighborhood ideas.", [], [], [["Open guide", TRAVEL_RESOURCE_LINKS.paris]]],
        ["Amalfi", "Tripadvisor Amalfi Coast", "Coast-wide ideas for Praiano, Positano, Amalfi, restaurants, beaches, and tours.", [], [], [["Open guide", TRAVEL_RESOURCE_LINKS.amalfi]]],
        ["Pompeii", "Tripadvisor Pompeii", "Ruins tips, tours, restaurants, and visit planning.", [], [], [["Open guide", TRAVEL_RESOURCE_LINKS.pompeii]]],
        ["Naples", "Tripadvisor Naples", "Airport-area backup ideas, food tips, and Naples context.", [], [], [["Open guide", TRAVEL_RESOURCE_LINKS.naples]]],
        ["ChatGPT", "Ask for suggestions", "Use when they want fresh ideas for food, backup plans, rainy-day swaps, or quick local tips.", [], [], [["Ask ChatGPT", CHATGPT_URL]]],
      ],
    },
    {
      title: "Flight Confirmations",
      items: [
        ["Delta", "HW6MPS", "DL84 Atlanta to Paris; DL279 Naples to Atlanta", [], ["delta"]],
        ["EasyJet", "KC8B7PH", "Paris Orly to Naples, Thursday June 25", [], ["easyJet"]],
        ["EasyJet Bags", "2 x 23kg checked bags", "Bag drop 11:15 AM-12:35 PM", [], ["easyJet"]],
        ["Seats", "Noah 11A · Lila 11B", "EasyJet Paris Orly to Naples", [], ["easyJet"]],
      ],
    },
    {
      title: "Lodging",
      items: [
        ["The Barn Loft", "2545 Tyus Carrollton Road", "Check-in June 20 at 4:00 PM; check-out June 21 at 1:00 PM", ["The Barn Loft"], ["weddingNight"]],
        ["Paris Airbnb", "Rue Sebastien Mercier, 75015 Paris", "Host Jade; confirmation HMZ2ES5JK9; exact street number pending", ["Paris Airbnb"], ["parisAirbnb"]],
        ["Villa Gianlica", "Praiano", "June 25-30 on the Amalfi Coast", ["Villa Gianlica"], ["villa"]],
        ["Moxy Pompeii", "Torre Annunziata", "June 30-July 1", ["Moxy Pompeii"], ["moxy"]],
      ],
    },
    {
      title: "Still Needed",
      items: [
        ["Verify", "Passports in Delta app", "Confirm passport details are entered and accepted before international check-in.", [], [], [["Fly Delta app", DELTA_APP_STORE_URL]]],
        ["Pre-reserve", "Ubers to and from ATL airport", "Outbound: June 21 for Delta DL84 ATL to Paris at 9:50 PM. Return: July 1 after Delta DL279 Naples to Atlanta arrives at 2:31 PM."],
        ["Confirm", "Paris lockbox and exact address", "Pending Airbnb details", ["Paris Airbnb"]],
        ["Book", "Eiffel Tower Summit", "Major remaining ticket", ["Eiffel Tower"]],
        ["Book", "Louvre timed entry", "Major remaining ticket", ["Louvre"]],
        ["Book", "Versailles Passport", "Use late Palace entry", ["Palace of Versailles"]],
        ["Get", "500 Euros from ATM", "For Cooking Class and Tips"],
        ["Confirm", "Capri boarding and cooking class time", "Pending activity details", ["Capri"]],
      ],
    },
  ],
  days: [
    ["Sat Jun 20", "Wedding Night - Carrollton", "The Barn Loft is the only planned stop. Keep the night simple and stage the essentials for international travel.", ["The Barn Loft"], [
      ["4:00 PM", "Check in at The Barn Loft, 2545 Tyus Carrollton Road."],
      ["Arrival", "Pull into the driveway, turn right toward the barn, and park directly in front of the barn on the gravel driveway. Do not park in the grass."],
      ["Evening", "No agenda: relax, enjoy the space, and get sleep."],
      ["Before bed", "Place passports, wallets, phone chargers, wedding rings, Delta flight information, medications, and Sunday travel clothes together."],
    ]],
    ["Sun Jun 21", "Departure Day - Atlanta to Paris", "The goal is to get to ATL early, check luggage, clear security, and start the honeymoon calmly before Delta DL84.", [], [
      ["Morning", "Sleep in if possible, have an easy breakfast or brunch, and begin packing slowly."],
      ["12:00 PM", "Start final packing. Check bathroom, outlets, under bed, nightstands, closet, car, wedding items, and chargers."],
      ["12:30 PM", "Final walkthrough. Put passports and phones in carry-on, not checked luggage."],
      ["1:00 PM", "Pre-booked Uber pickup to Atlanta Airport International Terminal, Terminal F."],
      ["2:00-2:30 PM", "Arrival goal at ATL. Enter International Terminal, find Delta international check-in, check the large bag, clear security, find gate area once posted, and eat dinner at the airport."],
      ["9:50 PM", "Delta DL84 departs Atlanta for Paris Charles de Gaulle. Drink water, try to sleep, keep passport and arrival documents accessible."],
    ]],
    ["Mon Jun 22", "Paris Arrival + Seine Champagne Cruise", "This is a booked arrival day: get to the Airbnb safely, reset, eat something easy, and make the Seine Champagne Cruise.", ["Paris Airbnb", "Square du Vert-Galant"], [
      ["12:30 PM", "Arrive at Paris Charles de Gaulle. Follow signs to passport control, collect checked luggage, go through customs, use ATM if convenient, then follow signs to the official taxi queue."],
      ["Taxi", "Use only the official taxi line. Destination: Rue Sebastien Mercier, 75015 Paris. Expected cost EUR50-60; expected time 45-60 minutes depending on traffic."],
      ["3:00 PM", "Airbnb check-in. Host: Jade. Confirmation: HMZ2ES5JK9. Screenshot lockbox instructions when they appear."],
      ["3:30-5:30 PM", "Rest, unpack lightly, shower, change clothes, and charge phones. Easy arrival dinner plan is McDonald's near Beaugrenelle / Eiffel Tower area, with Cafe du Commerce, Le Volant, or Creperie Contemporaine 142 as backups."],
      ["6:30 PM", "Leave Airbnb for Square du Vert-Galant, 15 Place du Pont Neuf. Meeting point is below Pont Neuf; do not stay at street level on the bridge."],
      ["7:15-8:15 PM", "Seine Champagne Cruise. Booking reference 1401765745; confirmation 1784184935. One-hour cruise with champagne or wine and views of Notre-Dame, Louvre, Musee d'Orsay, Eiffel Tower, and the Seine."],
      ["After cruise", "Short walk near the river if they feel good, or go straight back to the Airbnb if tired. Recommended bedtime: 10:00-10:30 PM."],
    ]],
    ["Tue Jun 23", "Big Bus + Louvre / Eiffel Tower Decision Day", "This day is built around the Big Bus reservation and one main Paris attraction choice unless both tickets are already booked.", ["Louvre", "Eiffel Tower", "Cafe de Flore", "Le Volant", "Pink Mamma"], [
      ["8:00-8:30 AM", "Wake up and get breakfast near the Eiffel Tower: croissant, pain au chocolat, coffee, orange juice."],
      ["Morning", "Paris Big Bus Hop-On Hop-Off Tour. Booking reference 1401767595; confirmation 1784186781. Board near the Eiffel Tower area and use the Big Bus app for the closest stop and live tracking."],
      ["Bus strategy", "Do not immediately hop off. Ride most of the route first to get oriented. Expected sights include Eiffel Tower, Arc de Triomphe, Champs-Elysees, Place de la Concorde, Louvre area, Notre-Dame area, Seine, and Opera district."],
      ["Option A", "Louvre priority: enter with timed ticket late morning or early afternoon, spend 2-3 hours maximum, and focus on Mona Lisa, Venus de Milo, Winged Victory, then exit before exhaustion."],
      ["After Louvre", "Tuileries Garden picnic: sandwiches, fruit, pastry, water, optional wine, sit near the fountains."],
      ["Option B", "Eiffel Tower priority: use pre-booked summit tickets, go to the top, have champagne if available, take photos, then relax on Champ de Mars. If tickets are not booked, do not spend hours waiting in line."],
      ["Late afternoon", "Cafe de Flore stop for 45-60 minutes. Order coffee, dessert, champagne, or wine."],
      ["Dinner", "Use one dinner option tonight and the other Wednesday: Le Volant for classic Paris dinner, or Pink Mamma for the interior and younger energy."],
      ["Evening", "If near Eiffel Tower after dinner, watch the sparkle. Otherwise return to Airbnb."],
    ]],
    ["Wed Jun 24", "Slow Morning + Eiffel Tower + Versailles", "This is the Eiffel Tower backup window and the Versailles day. Versailles is the afternoon priority.", ["Eiffel Tower", "Versailles Chateau Rive Gauche", "Palace of Versailles"], [
      ["Morning", "Wake naturally unless tickets require an alarm. Have coffee and pastries near the Airbnb."],
      ["Eiffel window", "Use this time only if Eiffel Tower was not completed Tuesday. Options are ground photos only, summit, summit plus Champagne Bar, or Champ de Mars picnic. If they do not have tickets, do not burn the whole day in a long line."],
      ["Lunch", "Keep it light before Versailles: bakery sandwich, cafe lunch, or picnic item."],
      ["Around 2:00 PM", "Depart Paris for Versailles Chateau Rive Gauche. Use Google Maps, purchase round-trip tickets if needed, board the correct train, and keep ticket accessible."],
      ["Arrival", "Exit at Versailles Chateau Rive Gauche, follow signs for Chateau de Versailles and the crowd, walk about 10 minutes, and look for the palace plaza and gold gates. No taxi or shuttle needed."],
      ["3:00 PM", "Gardens first. Walk slowly, take photos, and enjoy the grounds."],
      ["4:30 PM", "Timed Palace entry if available. Focus on Hall of Mirrors, King's Apartments, and Queen's Apartments. Do not try to see everything."],
      ["6:00-6:30 PM", "Begin return to Paris."],
    ]],
    ["Thu Jun 25", "Paris to Praiano", "Major travel day: Paris Airbnb to Orly, EasyJet to Naples, then Villa Gianlica private transfer to Praiano.", ["Villa Gianlica"], [
      ["7:30 AM", "Wake up and pack completely. Check passports, chargers, AirPods, toiletries, under bed, outlets, lockbox instructions, and EasyJet boarding passes."],
      ["10:15 AM", "Taxi or Bolt pickup to Paris Orly Airport. Airbnb check-out is by 11:00 AM, but leave earlier."],
      ["11:00 AM", "Goal arrival at Orly. EasyJet bag drop opens 11:15 AM and closes 12:35 PM."],
      ["1:15-3:30 PM", "EasyJet EJU4953 Paris Orly to Naples. Booking reference KC8B7PH. Seats: Noah 11A, Lila 11B. Checked bags: 2 x 23kg included."],
      ["Naples arrival", "Deplane, collect checked bags, exit baggage claim / arrivals, and look for the private driver holding a sign with their names on it. Get euros from an ATM at the airport or along the way so they have cash for the Praiano cooking class."],
      ["Transfer", "Private transfer to Praiano arranged through Villa Gianlica. Cost: EUR190 total for two. Driver needs flight number, arrival time, passenger names, and mobile phone number. Drive time about 90-120 minutes."],
      ["Villa arrival", "Villa Gianlica address: Via Asciola 2, 84010 Praiano SA Italy. Check in, unpack, shower, and take in the view."],
      ["Dinner", "Keep it close and easy: Kasai, Che Bonta Gastronomia, or Il Pirata."],
    ]],
    ["Fri Jun 26", "Cooking Class + Marina di Praia Beach", "The day depends on the confirmed cooking class time. The source notes a timing conflict that must be verified before finalizing the day.", ["Ristorante km0", "Marina di Praia"], [
      ["Cash reminder", "Have euros ready for the Praiano cooking class. If they did not use an ATM on arrival day, get cash before class."],
      ["Timing note", "Current confirmation appears to show 5:00-8:00 PM, while the working plan says 11:00 AM. Verify before departure."],
      ["If 11:00 AM", "Breakfast at Villa Gianlica, leave around 10:30 AM for Ristorante km0, Via Guglielmo Marconi 45, Praiano. Cooking class and lunch run 11:00 AM-2:00 PM."],
      ["After 11:00 class", "Arrive Marina di Praia around 2:30 PM, rent loungers if available, swim, relax, then have a light dinner in Praiano: Kasai, Che Bonta, gelato and wine."],
      ["If 5:00 PM", "Use 10:30 AM-3:00 PM for Marina di Praia beach first. Rent loungers, swim, relax, have a light snack."],
      ["4:30 PM", "Head to Ristorante km0 for the 5:00-8:00 PM cooking class and dinner. Afterward, return to villa; no additional dinner needed."],
      ["Beach note", "Marina di Praia is a casual beach afternoon: lounge chairs, swimming, drinks, relaxation."],
    ]],
    ["Sat Jun 27", "Positano Day", "Positano is the postcard Amalfi Coast day: shopping, beach, lunch, lemon dessert, and photos.", ["Positano", "Spiaggia Grande", "Da Vincenzo", "Church of Santa Maria Assunta", "Praiano"], [
      ["Morning", "Breakfast at Villa Gianlica. Do not rush."],
      ["Transport", "Walk from Villa Gianlica toward the SS163 / Via Guglielmo Marconi bus stop. Stand on the Positano / Sorrento-bound side, board SITA bus toward Positano / Sorrento, exit at Sponda, and walk downhill to Spiaggia Grande."],
      ["First stop", "Spiaggia Grande for photos before the beach gets too crowded."],
      ["Explore", "Boutiques, linen clothing, ceramics, lemon products, sandals, souvenirs. No strict route; wandering is the point."],
      ["Lunch", "Primary: Da Vincenzo. Alternative: Posides. Budget: beach cafe or casual panini."],
      ["Dessert mission", "Find Delizia al Limone, lemon granita, or lemon sorbet served in a lemon."],
      ["Afternoon", "Beach time, rent loungers if available, swim, relax, and have a spritz or soda."],
      ["Photo stops", "Church of Santa Maria Assunta tiled dome, Le Sirenuse viewpoint as photo stop only, and Spiaggia Grande classic beach photos."],
      ["Return", "Walk back to Sponda, board bus toward Praiano / Amalfi, exit near Villa Gianlica area."],
      ["Dinner", "Eat back in Praiano: Kasai, Il Pirata, Che Bonta, or villa terrace night."],
    ]],
    ["Sun Jun 28", "Path of the Gods + Amalfi", "This day is designed for views without turning the honeymoon into an exhausting hike.", ["Amalfi Bus Terminal", "Bomerano", "Path of the Gods", "Da Gemma", "L'Abside", "Pasticceria Pansa", "Praiano"], [
      ["7:00 AM", "Wake up, eat a real breakfast at Villa Gianlica, and bring water, sunglasses, hat, comfortable sneakers, sunscreen, and phone charger. Leave beach gear behind."],
      ["To Amalfi", "Walk to the nearest SITA bus stop along Via Guglielmo Marconi / SS163, stand on the Amalfi-bound side, board bus toward Amalfi, and exit at Amalfi Bus Terminal."],
      ["To Bomerano", "At Amalfi Bus Terminal ask for Bomerano or Path of the Gods. Board bus toward Agerola / Bomerano."],
      ["Trail strategy", "Walk only 20-30 minutes into the trail, stop often, take photos, enjoy the scenery, and turn around when satisfied. Estimated hiking time 45-90 minutes total."],
      ["Return to Amalfi", "Walk back to Bomerano and board return bus to Amalfi."],
      ["Lunch", "Da Gemma for most romantic, L'Abside for best balance, or Pasticceria Pansa for light lunch and pastries."],
      ["Amalfi", "Choose only a few highlights: Amalfi Cathedral, Piazza del Duomo, and up to about one hour of shopping for lemon products, ceramics, and souvenirs."],
      ["3:00 PM goal", "Leave Amalfi around 3:00 PM to protect relaxation time."],
      ["Evening", "Back at Villa Gianlica: relax, nap, pool, balcony, wine, sunset. Dinner can be villa terrace, Kasai, Che Bonta, or Il Pirata."],
    ]],
    ["Mon Jun 29", "Capri Boat Excursion", "This is the signature Amalfi Coast boat day with La Bellavita Charter.", ["Marina di Praia", "Capri", "Praiano"], [
      ["7:00 AM", "Wake up and have breakfast at Villa Gianlica."],
      ["Bring", "Swimsuit, sunglasses, sunscreen, waterproof pouch, and phone charger. Do not bring large bags, outside food, or outside drinks."],
      ["8:15 AM", "Leave Villa Gianlica."],
      ["8:45 AM", "Arrival goal at Marina di Praia."],
      ["9:00 AM-5:00 PM", "La Bellavita Charter boat excursion. Booking 352541107. If confused, call +39 089 288 1694."],
      ["Expected highlights", "Potential stops include Capri coastline, swimming locations, Faraglioni rocks, Marina Piccola, Capri town free time, and Blue Grotto if sea conditions allow."],
      ["5:00 PM", "Return to Praiano."],
      ["Final Amalfi evening", "Recommended dinner: Che Bonta takeaway back to the villa, open wine, watch sunset, pack luggage, and enjoy final Amalfi Coast views."],
      ["Before bed", "Verify passports, chargers, AirPods, camera, souvenirs, and wallets."],
    ]],
    ["Tue Jun 30", "Pompeii Day", "Final full day: transfer to Moxy Pompeii, see Pompeii without trying to do everything, then final honeymoon dinner.", ["Villa Gianlica", "Moxy Pompeii", "Porta Marina Entrance", "Pompeii", "Bosco de' Medici"], [
      ["Morning", "Breakfast at Villa Gianlica, finish packing, and check room carefully."],
      ["Transfer", "Private transfer from Villa Gianlica to Moxy Pompeii, quoted EUR160 total. The driver will pick them up directly at Villa Gianlica after checkout. Moxy Pompeii address: Via Castriota 43, Torre Annunziata."],
      ["Arrival", "If room is not ready, leave luggage with the front desk and proceed directly to Pompeii."],
      ["To Pompeii", "Recommended Bolt or taxi to Porta Marina Entrance."],
      ["Pompeii strategy", "Do not attempt to see everything. Focus on Forum, Temple of Apollo, House of the Faun, Large Theatre, and Garden of the Fugitives."],
      ["3-4 hours max", "When tired, leave. There is no prize for staying longer."],
      ["After Pompeii", "Return to hotel, check in, shower, rest, and recharge."],
      ["6:30 PM", "Recommended departure for Bosco de' Medici."],
      ["7:00 PM", "Final honeymoon dinner at Bosco de' Medici. After dinner, return to hotel, finish packing, charge phones, set alarms, and sleep early."],
    ]],
    ["Wed Jul 1", "Return Home", "Departure day is about a comfortable early airport buffer and a clean trip home.", [], [
      ["5:45 AM", "Wake up."],
      ["Final room check", "Verify passports, wallets, phones, chargers, AirPods, souvenirs, boat photos, and wedding items."],
      ["6:00 AM", "Request Bolt to Naples International Airport."],
      ["Backup plan", "If Bolt availability appears limited, ask Moxy front desk Tuesday evening to arrange taxi service."],
      ["6:15 AM", "Departure goal."],
      ["6:45-7:00 AM", "Airport arrival goal for a comfortable buffer."],
      ["9:05 AM", "Delta DL279 Naples to Atlanta departs."],
      ["2:31 PM", "Arrive Atlanta. After landing: immigration, collect luggage, customs, exit arrivals area."],
      ["Final transport", "Request Uber after luggage is collected. Destination: Woodstock, Georgia, home."],
    ]],
  ],
  food: [
    ["McDonald's / Beaugrenelle", "Paris", "Arrival-day rescue food when you are tired, hungry, and done making decisions.", ["McDonald's Beaugrenelle"]],
    ["Cafe de Flore", "Paris", "Best for the Instagram cafe moment. Go late afternoon on Big Bus / Louvre day for coffee, champagne, dessert, or pastry.", ["Cafe de Flore"]],
    ["Le Volant", "Paris", "Classic French dinner. Good for French onion soup, steak frites, chicken or fish, shared dessert. Estimated EUR60-80 total for two depending on drinks and dessert.", ["Le Volant"]],
    ["Pink Mamma", "Paris", "Fun, energetic, Instagram-famous dinner. Use if the atmosphere matters more than keeping dinner distinctly French before Italy.", ["Pink Mamma"]],
    ["Kasai", "Praiano", "Best overall Praiano dinner option: close, stylish, relaxed, and honeymoon-friendly.", ["Kasai"]],
    ["Che Bonta Gastronomia", "Praiano", "Budget-friendly takeaway for nights when a restaurant feels like too much.", ["Che Bonta Gastronomia"]],
    ["Da Gemma", "Amalfi", "Most romantic Amalfi lunch option after the Path of the Gods strategy.", ["Da Gemma"]],
    ["L'Abside", "Amalfi", "Best balanced Amalfi lunch option.", ["L'Abside"]],
    ["Pasticceria Pansa", "Amalfi", "Light lunch, pastries, and an easy Piazza del Duomo pause.", ["Pasticceria Pansa"]],
  ],
  transport: [
    ["CDG Airport to Paris Airbnb", "Use an official airport taxi only. Follow taxi signs after baggage and customs. Tell driver Rue Sebastien Mercier, 75015 Paris. Expected EUR50-60 and 45-60 minutes.", ["Paris Airbnb"]],
    ["Paris Airbnb to Orly", "Use Bolt or taxi. Pickup at 10:15 AM. Goal arrival 11:00 AM because EasyJet bag drop opens 11:15 AM and closes 12:35 PM.", ["Paris Airbnb"]],
    ["Paris to Versailles", "Use Google Maps that morning to Versailles Chateau Rive Gauche. After exiting, follow signs and crowds to the palace gates, about a 10-minute walk.", ["Versailles Chateau Rive Gauche", "Palace of Versailles"]],
    ["Naples Airport to Villa Gianlica", "Use villa-arranged private transfer, EUR190 total for two. Provide flight number, arrival time, passenger names, and mobile number. After baggage claim, exit arrivals and look for the driver holding a sign with their names on it.", ["Villa Gianlica"]],
    ["Amalfi Coast Buses", "Verify timing the morning of travel. Summer traffic and full buses are normal. If a bus is full, wait for the next one.", ["Praiano", "Amalfi Bus Terminal", "Bomerano"]],
    ["Stressful Short Connections", "Use Bolt, taxi, or private transfer. This is a honeymoon, not a transportation challenge.", ["Paris Airbnb", "Villa Gianlica", "Moxy Pompeii"]],
  ],
  checklists: [
    ["Flight Day Carry-On", ["Passport", "Wallet", "Phone", "Phone charger", "Portable charger", "Medications", "Headphones", "Travel documents", "One change of clothes"], []],
    ["Daily Carry", ["Phone", "Portable charger", "Credit card", "Some cash", "Sunglasses", "Sunscreen", "Water", "Passport photo saved on phone", "Comfortable shoes"]],
    ["Paris Packing", ["Comfortable walking shoes", "Light jacket", "Small umbrella", "Crossbody or secure day bag", "Dress option for dinner"], ["Paris Airbnb", "Cafe de Flore", "Louvre"]],
    ["Amalfi Packing", ["Swimsuits", "Cover-up", "Sandals", "Sunscreen", "Sunglasses", "Casual dinner outfits", "Beach tote"], ["Praiano", "Villa Gianlica"]],
    ["Capri Boat Day", ["Swimsuit", "Sunscreen", "Sunglasses", "Waterproof phone pouch", "Towel if desired", "Hat"], ["Capri"]],
    ["Path of the Gods", ["Sneakers", "Water", "Hat", "Sunscreen", "Light clothing"], ["Path of the Gods", "Bomerano", "Amalfi Bus Terminal"]],
    ["Pompeii Packing", ["Sneakers", "Water", "Hat", "Portable charger", "Sunglasses"], ["Pompeii", "Moxy Pompeii"]],
    ["Final Week", ["Screenshot all confirmations", "Save documents to both phones", "Confirm Uber to ATL", "Confirm villa transfer details", "Confirm ticket bookings", "Get euros from an ATM for the Praiano cooking class"], ["Villa Gianlica"]],
  ],
  apps: [
    ["Bolt", "Rides in Paris and Naples", "Use for the Paris Airbnb to Orly ride and the Moxy Pompeii to Naples Airport ride. Schedule ahead where possible and keep taxi backup plans in mind.", BOLT_APP_STORE_URL],
    ["Saily", "eSIM and travel data", "Download before departure, buy the data plan before the trip, and install or activate the eSIM while they still have reliable Wi-Fi.", SAILY_APP_STORE_URL],
    ["G7 Paris Taxi", "Paris taxi backup", "Good backup for official Paris taxis, especially if Bolt availability is poor or they want a licensed taxi option.", G7_APP_STORE_URL],
    ["Big Bus Tours", "Paris bus route and ticket access", "Use for the Paris Big Bus booking, route map, stops, service updates, and bus tracking.", BIG_BUS_APP_STORE_URL],
    ["Viator", "Tour tickets and bookings", "Use for the Seine Champagne Cruise booking, tickets, day-of details, and activity updates.", VIATOR_APP_STORE_URL],
    ["UNICO Campania", "Amalfi Coast bus tickets", "Use in Campania to buy tickets before boarding SITA buses around Praiano, Positano, Amalfi, and Bomerano.", UNICO_APP_STORE_URL],
  ],
};

const data = window.GUIDE_DATA || { documents: [] };
const state = { query: "", checks: loadChecks() };

const views = [...document.querySelectorAll(".view")];
const tabs = [...document.querySelectorAll("[data-tab]")];
const askForm = document.querySelector("#askForm");
const searchInput = document.querySelector("#searchInput");
const clearSearch = document.querySelector("#clearSearch");
const results = document.querySelector("#searchResults");
const STOP_WORDS = new Set([
  "a",
  "about",
  "after",
  "an",
  "and",
  "are",
  "at",
  "be",
  "can",
  "do",
  "does",
  "for",
  "from",
  "get",
  "go",
  "have",
  "how",
  "i",
  "in",
  "is",
  "it",
  "me",
  "need",
  "of",
  "on",
  "or",
  "our",
  "should",
  "the",
  "their",
  "they",
  "to",
  "we",
  "what",
  "when",
  "where",
  "with",
]);
const QUERY_ALIASES = {
  cash: ["cash", "euros", "atm", "cooking"],
  euro: ["euros", "atm", "cash"],
  euros: ["euros", "atm", "cash"],
  money: ["euros", "atm", "cash"],
  champagne: ["champagne", "seine", "cruise", "booking"],
  cruise: ["champagne", "seine", "cruise", "pont", "neuf"],
  eiffel: ["eiffel", "tower", "summit"],
  louvre: ["louvre", "mona", "venus", "winged"],
  versailles: ["versailles", "palace", "gardens"],
  capri: ["capri", "boat", "bellavita", "charter"],
  pompeii: ["pompeii", "moxy", "porta", "marina"],
  cooking: ["cooking", "ristorante", "km0", "euros"],
  food: ["dinner", "lunch", "restaurant", "dining"],
  eat: ["dinner", "lunch", "restaurant", "dining"],
  pack: ["pack", "packing", "bring", "carry"],
  ticket: ["ticket", "booking", "confirmation", "reference"],
  tickets: ["ticket", "booking", "confirmation", "reference"],
};

function loadChecks() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveChecks() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state.checks));
}

function setView(name) {
  views.forEach((view) => view.classList.toggle("is-active", view.dataset.view === name));
  tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.tab === name));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function card(title, meta, body, tags = []) {
  const tagHtml = tags.map((tag) => `<span>${tag}</span>`).join("");
  return `<article class="card"><p>${meta}</p><h3>${title}</h3><div>${body}</div><footer>${tagHtml}</footer></article>`;
}

function renderDashboard() {
  document.querySelector("#dashboardGrid").innerHTML = trip.dashboardGroups
    .map(
      (group) => `<article class="dash-group"><h3>${group.title}</h3><div>${group.items
        .map(([label, value, note, maps = [], confirmations = [], links = []]) => `<section class="dash-row"><p>${label}</p><strong>${value}</strong><span>${note}</span>${renderDashboardActions(maps, confirmations, links)}</section>`)
        .join("")}</div></article>`
    )
    .join("");
}

function renderDays() {
  document.querySelector("#dayList").innerHTML = trip.days
    .map(([date, title, body, maps, agenda = []], index) => {
      const agendaHtml = agenda.length
        ? `<div class="day-agenda">${agenda.map(([time, detail]) => `<section><strong>${time}</strong><p>${detail}</p></section>`).join("")}</div>`
        : "";
      const [src, alt] = DAY_THUMBNAILS[index] || [];
      const thumb = src ? `<img class="day-thumb" src="${src}" alt="${alt}" loading="lazy" />` : "";
      const viatorCard = title.includes("Seine Champagne Cruise") ? renderViatorBookingCard() : "";
      const routeCard = title.includes("Big Bus") ? renderBigBusRouteCard() : "";
      const ticketCard = title.includes("Big Bus") ? renderBigBusTicketCard() : "";
      const sitaCard = title.includes("Positano") ? renderSitaRouteCard("positano") : title.includes("Path of the Gods") ? renderSitaRouteCard("path") : "";
      const pompeiiTransferAlert = title.includes("Pompeii Day") ? renderPompeiiTransferAlert() : "";
      const boltCard = title.includes("Paris to Praiano")
        ? renderBoltRideCard("orly")
        : title.includes("Return Home")
          ? renderBoltRideCard("naplesAirport")
          : "";
      const easyJetCard = title.includes("Paris to Praiano") ? renderEasyJetTransferCard() : "";
      const topTransferCards = title.includes("Paris to Praiano") ? `${boltCard}${easyJetCard}` : "";
      const routeTransferCards = title.includes("Paris to Praiano") ? "" : boltCard;
      const confirmations = renderConfirmations(DAY_CONFIRMATIONS[index] || []);
      return `<article class="day"><div class="day-top">${thumb}<time>${date}</time></div><div><h3>${title}</h3><p>${body}</p>${pompeiiTransferAlert}${topTransferCards}${agendaHtml}${viatorCard}${routeCard}${ticketCard}${sitaCard}${routeTransferCards}${renderMapLinks(maps)}${confirmations}</div></article>`;
    })
    .join("");
}

function renderFood() {
  document.querySelector("#foodList").innerHTML = trip.food
    .map(([title, location, body, maps]) => card(title, location, `${body}${renderMapLinks(maps)}`, [location.toLowerCase()]))
    .join("");
}

function renderTransport() {
  document.querySelector("#transportList").innerHTML = trip.transport
    .map(([title, body, maps]) => `<article class="route"><h3>${title}</h3><p>${body}</p>${renderMapLinks(maps)}</article>`)
    .join("");
}

function renderChecklist() {
  document.querySelector("#checklistList").innerHTML = trip.checklists
    .map(([group, items, maps = []]) => {
      const done = items.filter((item) => state.checks[`${group}:${item}`]).length;
      const rows = items
        .map((item) => {
          const id = `${group}:${item}`;
          const checked = state.checks[id] ? "checked" : "";
          return `<label class="check"><input type="checkbox" data-check="${id}" ${checked} /><span>${item}</span></label>`;
        })
        .join("");
      return `<article class="check-group"><header><div><h3>${group}</h3>${renderMapLinks(maps)}</div><p>${done}/${items.length}</p></header>${rows}</article>`;
    })
    .join("");
}

function renderApps() {
  document.querySelector("#appList").innerHTML = trip.apps
    .map(
      ([name, meta, body, url]) => `<article class="app-card">
        <div>
          <p>${meta}</p>
          <h3>${name}</h3>
          <span>${body}</span>
        </div>
        <a href="${url}" target="_blank" rel="noopener">Open App Store</a>
      </article>`
    )
    .join("");
}

function renderDocs() {
  document.querySelector("#docList").innerHTML = [...data.documents]
    .sort((a, b) => (SECTION_ORDER[a.filename] || 99) - (SECTION_ORDER[b.filename] || 99))
    .map((doc) => {
      const href = `docs/${encodeURIComponent(doc.filename)}`;
      const summary = DOC_SUMMARIES[doc.filename] || doc.summary;
      return `<article class="doc"><a class="doc-title-link" href="${href}" target="_blank" rel="noopener"><h3>${doc.title}</h3></a><p>${summary}</p>${renderMapLinks(DOC_MAPS[doc.filename])}<a class="doc-open-link" href="${href}" target="_blank" rel="noopener">${doc.filename} · ${doc.pages} pages · Open guide</a></article>`;
    })
    .join("");
}

function flattenContent() {
  const curated = [
    ...trip.dashboardGroups.flatMap((group) =>
      group.items.map(([label, value, note, maps = [], confirmations = [], links = []]) => ({ title: `${group.title}: ${label}`, type: "Dashboard", text: `${value} ${note} ${maps.join(" ")} ${confirmations.join(" ")} ${links.map(([linkLabel]) => linkLabel).join(" ")}` }))
    ),
    ...trip.days.map(([date, title, body, maps = [], agenda = []]) => ({
      title,
      type: date,
      text: `${body} ${agenda.map(([time, detail]) => `${time} ${detail}`).join(" ")} ${maps.join(" ")}`,
    })),
    ...trip.food.map(([title, location, body, maps = []]) => ({ title, type: `Dining · ${location}`, text: `${body} ${maps.join(" ")}` })),
    ...trip.transport.map(([title, body, maps = []]) => ({ title, type: "Transport", text: `${body} ${maps.join(" ")}` })),
    ...trip.checklists.flatMap(([group, items, maps = []]) => items.map((item) => ({ title: item, type: `Checklist · ${group}`, text: `${item} ${maps.join(" ")}` }))),
    ...trip.apps.map(([name, meta, body]) => ({ title: name, type: "Apps", text: `${meta} ${body}` })),
  ];

  const docs = data.documents.flatMap((doc) =>
    doc.pageText.map((page) => ({
      title: doc.title,
      type: `${doc.filename} · page ${page.page}`,
      text: page.text,
    }))
  );

  return [...curated, ...docs];
}

const searchIndex = flattenContent();

function termsFromQuery(query) {
  const raw = query
    .toLowerCase()
    .replace(/[^a-z0-9+]+/g, " ")
    .split(/\s+/)
    .filter((term) => term.length > 1 && !STOP_WORDS.has(term));
  const expanded = raw.flatMap((term) => [term, ...(QUERY_ALIASES[term] || [])]);
  return [...new Set(expanded)];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function snippet(text, terms) {
  const lower = text.toLowerCase();
  const hits = terms.map((term) => lower.indexOf(term)).filter((index) => index >= 0);
  const firstHit = hits.length ? Math.min(...hits) : 0;
  const start = Math.max(0, firstHit - 55);
  return text.slice(start, start + 180).replace(/\s+/g, " ").trim();
}

function scoreItem(item, terms) {
  const title = item.title.toLowerCase();
  const type = item.type.toLowerCase();
  const text = item.text.toLowerCase();
  return terms.reduce((sum, term) => {
    let points = 0;
    if (title.includes(term)) points += 5;
    if (type.includes(term)) points += 3;
    if (text.includes(term)) points += 1;
    return sum + points;
  }, 0);
}

function answerIntro(query, matches) {
  const q = query.toLowerCase();
  if (!matches.length) return "I could not find that in the offline guide.";
  if (q.includes("when") || q.includes("time")) return "Here is the timing I found in the offline guide.";
  if (q.includes("where") || q.includes("map") || q.includes("address")) return "Here is the place information I found in the offline guide.";
  if (q.includes("bring") || q.includes("pack")) return "Here is the packing guidance I found in the offline guide.";
  if (q.includes("book") || q.includes("ticket") || q.includes("confirmation") || q.includes("reference")) return "Here are the booking details I found in the offline guide.";
  return "Here is the best match I found in the offline guide.";
}

function runAsk() {
  const query = state.query.trim();
  clearSearch.hidden = !query;
  if (!query) {
    results.hidden = true;
    results.innerHTML = "";
    views.find((view) => view.classList.contains("is-active")).hidden = false;
    return;
  }

  const terms = termsFromQuery(query);
  const matches = searchIndex
    .map((item) => {
      return { ...item, score: scoreItem(item, terms) };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);

  results.hidden = false;
  if (!matches.length || !terms.length) {
    results.innerHTML = `<article class="empty"><h3>I could not find that in the offline guide.</h3><p>Try asking about a specific day, place, booking, ticket, restaurant, packing item, or transfer.</p></article>`;
    return;
  }

  const [best, ...related] = matches;
  results.innerHTML = `
    <article class="answer-card">
      <p>Offline answer</p>
      <h3>${escapeHtml(answerIntro(query, matches))}</h3>
      <div class="answer-question">${escapeHtml(query)}</div>
      <section class="answer-source">
        <p>${escapeHtml(best.type)}</p>
        <h4>${escapeHtml(best.title)}</h4>
        <div>${escapeHtml(snippet(best.text, terms))}</div>
      </section>
    </article>
    ${related
      .slice(0, 5)
      .map((item) => `<article class="result"><p>${escapeHtml(item.type)}</p><h3>${escapeHtml(item.title)}</h3><div>${escapeHtml(snippet(item.text, terms))}</div></article>`)
      .join("")}`;
}

tabs.forEach((tab) => tab.addEventListener("click", () => setView(tab.dataset.tab)));
askForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.query = searchInput.value;
  runAsk();
});
searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  clearSearch.hidden = !state.query.trim();
});
clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  state.query = "";
  runAsk();
  searchInput.focus();
});
document.addEventListener("change", (event) => {
  const id = event.target.dataset.check;
  if (!id) return;
  state.checks[id] = event.target.checked;
  saveChecks();
  renderChecklist();
});

renderDashboard();
renderDays();
renderFood();
renderTransport();
renderChecklist();
renderApps();
renderDocs();
runAsk();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("service-worker.js");
}
