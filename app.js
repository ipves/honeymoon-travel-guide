const STORE_KEY = "honeymoon-guide-checks-v1";
const SECTION_ORDER = {
  "Pre-Trip Checklist & Travel Preparation.pdf": 1,
  "Packing Guide and Travel Tips.pdf": 2,
  "Honeymoon Itinerary.pdf": 3,
  "Wedding and Honeymoon Itinerary.pdf": 4,
  "Amalfi Coast Honeymoon Itinerary.pdf": 5,
  "Transportation Guide.pdf": 6,
  "Dining Guide.pdf": 7,
};
const DOC_SUMMARIES = {
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
  "Honeymoon Itinerary.pdf": ["The Barn Loft", "Paris Airbnb", "Villa Gianlica", "Moxy Pompeii", "Naples Airport"],
  "Pre-Trip Checklist & Travel Preparation.pdf": ["Paris Airbnb", "Villa Gianlica", "Moxy Pompeii"],
  "Wedding and Honeymoon Itinerary.pdf": ["The Barn Loft", "ATL International Terminal F", "CDG Airport", "Paris Airbnb", "Villa Gianlica"],
  "Amalfi Coast Honeymoon Itinerary.pdf": ["Path of the Gods", "Amalfi Bus Terminal", "Pompeii", "Naples Airport"],
  "Transportation Guide.pdf": ["CDG Airport", "Paris Airbnb", "Paris Orly Airport", "Versailles Chateau Rive Gauche", "Naples Airport", "Villa Gianlica"],
  "Dining Guide.pdf": ["Cafe de Flore", "Le Volant", "Pink Mamma", "Kasai", "Che Bonta Gastronomia", "Da Gemma", "L'Abside", "Pasticceria Pansa"],
  "Packing Guide and Travel Tips.pdf": ["Paris Airbnb", "Praiano", "Capri", "Path of the Gods", "Pompeii"],
};
const MAP_LINKS = {
  "The Barn Loft": "The Barn Loft 2545 Tyus Carrollton Road Carrollton GA 30117",
  "ATL International Terminal F": "Atlanta Airport International Terminal F",
  "CDG Airport": "Charles de Gaulle Airport Paris",
  "Paris Airbnb": "Rue Sebastien Mercier 75015 Paris France",
  "Rue Sebastien Mercier": "Rue Sebastien Mercier 75015 Paris France",
  "Cafe de Flore": "Cafe de Flore Paris France",
  "Le Volant": "Le Volant Paris France",
  "Pink Mamma": "Pink Mamma Paris France",
  "Eiffel Tower": "Eiffel Tower Paris France",
  "Louvre": "Louvre Museum Paris France",
  "Versailles Chateau Rive Gauche": "Versailles Chateau Rive Gauche France",
  "Palace of Versailles": "Palace of Versailles France",
  "Paris Orly Airport": "Paris Orly Airport France",
  "Naples Airport": "Naples International Airport Italy",
  "Villa Gianlica": "Villa Gianlica Praiano Italy",
  "Praiano": "Praiano Amalfi Coast Italy",
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
  "Torre Annunziata": "Torre Annunziata Italy",
  "Naples": "Naples Italy",
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

const trip = {
  dashboardGroups: [
    {
      title: "Need It Fast",
      items: [
        ["Emergency Services", "112", "France & Italy", []],
        ["La Bellavita Charter", "+39 089 288 1694", "Capri tour questions and day-of issues", ["Capri"]],
        ["Moxy Pompeii", "+39 081 19716440", "Late arrival, taxi help, airport backup", ["Moxy Pompeii"]],
      ],
    },
    {
      title: "Travel Timeline",
      items: [
        ["June 20", "Wedding Night", "The Barn Loft, Carrollton", ["The Barn Loft"]],
        ["June 21", "Depart Atlanta", "Delta DL84 to Paris at 9:50 PM", ["ATL International Terminal F"]],
        ["June 22-25", "Paris", "Airbnb on Rue Sebastien Mercier", ["Paris Airbnb"]],
        ["June 25-30", "Praiano", "Villa Gianlica, Amalfi Coast", ["Villa Gianlica", "Praiano"]],
        ["June 30-July 1", "Pompeii", "Moxy Pompeii / Torre Annunziata", ["Pompeii", "Moxy Pompeii"]],
        ["July 1", "Return Home", "Delta DL279 Naples to Atlanta at 9:05 AM", ["Naples Airport"]],
      ],
    },
    {
      title: "Flight Confirmations",
      items: [
        ["Delta", "HW6MPS", "DL84 Atlanta to Paris; DL279 Naples to Atlanta", ["ATL International Terminal F", "CDG Airport", "Naples Airport"]],
        ["EasyJet", "KC8B7PH", "Paris Orly to Naples, Thursday June 25", ["Paris Orly Airport", "Naples Airport"]],
        ["EasyJet Bags", "2 x 23kg checked bags", "Bag drop 11:15 AM-12:35 PM", ["Paris Orly Airport"]],
        ["Seats", "Noah 11A · Lila 11B", "EasyJet Paris Orly to Naples", ["Paris Orly Airport", "Naples Airport"]],
      ],
    },
    {
      title: "Lodging",
      items: [
        ["The Barn Loft", "2545 Tyus Carrollton Road", "Check-in June 20 at 4:00 PM; check-out June 21 at 1:00 PM", ["The Barn Loft"]],
        ["Paris Airbnb", "Rue Sebastien Mercier, 75015 Paris", "Host Jade; confirmation HMZ2ES5JK9; exact street number pending", ["Paris Airbnb"]],
        ["Villa Gianlica", "Praiano", "June 25-30 on the Amalfi Coast", ["Villa Gianlica"]],
        ["Moxy Pompeii", "Torre Annunziata", "June 30-July 1", ["Moxy Pompeii"]],
      ],
    },
    {
      title: "Still Needed",
      items: [
        ["Book", "Eiffel Tower Summit", "Major remaining ticket", ["Eiffel Tower"]],
        ["Book", "Louvre timed entry", "Major remaining ticket", ["Louvre"]],
        ["Book", "Versailles Passport", "Use late Palace entry", ["Palace of Versailles"]],
        ["Confirm", "Paris lockbox and exact address", "Pending Airbnb details", ["Paris Airbnb"]],
        ["Confirm", "Capri boarding and cooking class time", "Pending activity details", ["Capri"]],
      ],
    },
  ],
  days: [
    ["Sat Jun 20", "Wedding Night - Carrollton", "The Barn Loft check-in at 4:00 PM. Park in front of the barn on the gravel driveway. Relax, sleep, and place passports, wallets, chargers, rings, Delta flight info, medications, and travel clothes together.", ["The Barn Loft"]],
    ["Sun Jun 21", "Departure Day - Atlanta to Paris", "Start final packing around noon. Pre-booked Uber pickup at 1:00 PM to ATL International Terminal F. Arrive around 2:00-2:30 PM, check luggage, clear security, eat dinner at the airport, then board Delta DL84 at 9:50 PM.", ["ATL International Terminal F"]],
    ["Mon Jun 22", "Arrive in Paris", "Land at CDG at 12:30 PM. Use official airport taxi to Rue Sebastien Mercier, 75015 Paris. Check in after 3:00 PM. Keep food simple and familiar if the travel day catches up with you.", ["CDG Airport", "Paris Airbnb"]],
    ["Tue Jun 23", "Paris Icons", "Big Bus and Louvre day. Use Cafe de Flore late afternoon for the classic cafe moment. Dinner can be Le Volant for French comfort or Pink Mamma if atmosphere matters most.", ["Louvre", "Cafe de Flore", "Le Volant", "Pink Mamma"]],
    ["Wed Jun 24", "Versailles + Champagne Cruise", "Take the train to Versailles Chateau Rive Gauche and walk to the palace gates. Later, enjoy the Seine Champagne Cruise. Keep dinner flexible around energy level.", ["Versailles Chateau Rive Gauche", "Palace of Versailles"]],
    ["Thu Jun 25", "Paris to Praiano", "Bolt or taxi pickup at 10:15 AM for Orly. EasyJet bag drop opens 11:15 AM and closes 12:35 PM. Flight departs 1:15 PM, arrives Naples 3:30 PM. Use villa-arranged private transfer to Villa Gianlica.", ["Paris Orly Airport", "Naples Airport", "Villa Gianlica"]],
    ["Fri Jun 26", "Praiano Recovery Day", "Keep this soft. Beach, villa time, and nearby dinner. Kasai is the reliable honeymoon dinner choice; Che Bonta works when takeaway sounds better than a sit-down meal.", ["Praiano", "Kasai", "Che Bonta Gastronomia"]],
    ["Sat Jun 27", "Capri Boat Day", "Use La Bellavita Charter for day-of questions. Bring swimsuit, sunscreen, sunglasses, waterproof phone pouch, towel if desired, and hat. Avoid outside food, outside drinks, and large heavy bags.", ["Capri"]],
    ["Sun Jun 28", "Path of the Gods + Amalfi", "Bus to Amalfi, transfer toward Agerola/Bomerano, and do only 20-30 minutes into the trail before turning around. Lunch options: Da Gemma, L'Abside, or Pasticceria Pansa. Return to Praiano for a relaxed evening.", ["Amalfi Bus Terminal", "Bomerano", "Path of the Gods", "Da Gemma", "L'Abside", "Pasticceria Pansa", "Praiano"]],
    ["Mon Jun 29", "Amalfi Coast Free Day", "Protect the honeymoon pace. Use the day for beach time, villa rest, shopping, or a simple dinner nearby. Do not turn this into a transportation challenge.", ["Praiano"]],
    ["Tue Jun 30", "Pompeii Finale", "Check out of Villa Gianlica and transfer to Moxy Pompeii/Torre Annunziata. Pompeii is hot, uneven, and large: sneakers, water, hat, portable charger, and sunglasses matter.", ["Villa Gianlica", "Moxy Pompeii", "Pompeii"]],
    ["Wed Jul 1", "Return Home", "Delta DL279 Naples to Atlanta departs 9:05 AM and arrives 2:31 PM. Leave earlier than feels necessary.", ["Naples Airport"]],
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
    ["CDG Airport to Paris Airbnb", "Use an official airport taxi only. Follow taxi signs after baggage and customs. Tell driver Rue Sebastien Mercier, 75015 Paris. Expected EUR50-60 and 45-60 minutes.", ["CDG Airport", "Paris Airbnb"]],
    ["Paris Airbnb to Orly", "Use Bolt or taxi. Pickup at 10:15 AM. Goal arrival 11:00 AM because EasyJet bag drop opens 11:15 AM and closes 12:35 PM.", ["Paris Airbnb", "Paris Orly Airport"]],
    ["Paris to Versailles", "Use Google Maps that morning to Versailles Chateau Rive Gauche. After exiting, follow signs and crowds to the palace gates, about a 10-minute walk.", ["Versailles Chateau Rive Gauche", "Palace of Versailles"]],
    ["Naples Airport to Villa Gianlica", "Use villa-arranged private transfer, EUR190 total for two. Provide flight number, arrival time, passenger names, and mobile number. Look for driver sign after arrivals.", ["Naples Airport", "Villa Gianlica"]],
    ["Amalfi Coast Buses", "Verify timing the morning of travel. Summer traffic and full buses are normal. If a bus is full, wait for the next one.", ["Praiano", "Amalfi Bus Terminal", "Bomerano"]],
    ["Stressful Short Connections", "Use Bolt, taxi, or private transfer. This is a honeymoon, not a transportation challenge.", ["Paris Airbnb", "Villa Gianlica", "Moxy Pompeii"]],
  ],
  checklists: [
    ["Flight Day Carry-On", ["Passport", "Wallet", "Phone", "Phone charger", "Portable charger", "Medications", "Headphones", "Travel documents", "One change of clothes"], ["ATL International Terminal F", "CDG Airport", "Paris Orly Airport", "Naples Airport"]],
    ["Daily Carry", ["Phone", "Portable charger", "Credit card", "Some cash", "Sunglasses", "Sunscreen", "Water", "Passport photo saved on phone", "Comfortable shoes"]],
    ["Paris Packing", ["Comfortable walking shoes", "Light jacket", "Small umbrella", "Crossbody or secure day bag", "Dress option for dinner"], ["Paris Airbnb", "Cafe de Flore", "Louvre"]],
    ["Amalfi Packing", ["Swimsuits", "Cover-up", "Sandals", "Sunscreen", "Sunglasses", "Casual dinner outfits", "Beach tote"], ["Praiano", "Villa Gianlica"]],
    ["Capri Boat Day", ["Swimsuit", "Sunscreen", "Sunglasses", "Waterproof phone pouch", "Towel if desired", "Hat"], ["Capri"]],
    ["Path of the Gods", ["Sneakers", "Water", "Hat", "Sunscreen", "Light clothing"], ["Path of the Gods", "Bomerano", "Amalfi Bus Terminal"]],
    ["Pompeii Packing", ["Sneakers", "Water", "Hat", "Portable charger", "Sunglasses"], ["Pompeii", "Moxy Pompeii"]],
    ["Final Week", ["Screenshot all confirmations", "Save documents to both phones", "Confirm Uber to ATL", "Confirm villa transfer details", "Confirm ticket bookings"], ["ATL International Terminal F", "Villa Gianlica"]],
  ],
};

const data = window.GUIDE_DATA || { documents: [] };
const state = { query: "", checks: loadChecks() };

const views = [...document.querySelectorAll(".view")];
const tabs = [...document.querySelectorAll("[data-tab]")];
const searchInput = document.querySelector("#searchInput");
const clearSearch = document.querySelector("#clearSearch");
const results = document.querySelector("#searchResults");

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
        .map(([label, value, note, maps]) => `<section class="dash-row"><p>${label}</p><strong>${value}</strong><span>${note}</span>${renderMapLinks(maps)}</section>`)
        .join("")}</div></article>`
    )
    .join("");
}

function renderDays() {
  document.querySelector("#dayList").innerHTML = trip.days
    .map(([date, title, body, maps]) => `<article class="day"><time>${date}</time><div><h3>${title}</h3><p>${body}</p>${renderMapLinks(maps)}</div></article>`)
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
      group.items.map(([label, value, note, maps = []]) => ({ title: `${group.title}: ${label}`, type: "Dashboard", text: `${value} ${note} ${maps.join(" ")}` }))
    ),
    ...trip.days.map(([date, title, body, maps = []]) => ({ title, type: date, text: `${body} ${maps.join(" ")}` })),
    ...trip.food.map(([title, location, body, maps = []]) => ({ title, type: `Dining · ${location}`, text: `${body} ${maps.join(" ")}` })),
    ...trip.transport.map(([title, body, maps = []]) => ({ title, type: "Transport", text: `${body} ${maps.join(" ")}` })),
    ...trip.checklists.flatMap(([group, items, maps = []]) => items.map((item) => ({ title: item, type: `Checklist · ${group}`, text: `${item} ${maps.join(" ")}` }))),
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

function snippet(text, terms) {
  const lower = text.toLowerCase();
  const hits = terms.map((term) => lower.indexOf(term)).filter((index) => index >= 0);
  const firstHit = hits.length ? Math.min(...hits) : 0;
  const start = Math.max(0, firstHit - 55);
  return text.slice(start, start + 180).replace(/\s+/g, " ").trim();
}

function runSearch() {
  const query = state.query.trim().toLowerCase();
  clearSearch.hidden = !query;
  if (!query) {
    results.hidden = true;
    results.innerHTML = "";
    views.find((view) => view.classList.contains("is-active")).hidden = false;
    return;
  }

  const terms = query.split(/\s+/).filter(Boolean);
  const matches = searchIndex
    .map((item) => {
      const haystack = `${item.title} ${item.type} ${item.text}`.toLowerCase();
      const score = terms.reduce((sum, term) => sum + (haystack.includes(term) ? 1 : 0), 0);
      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 30);

  results.hidden = false;
  results.innerHTML = matches.length
    ? matches.map((item) => `<article class="result"><p>${item.type}</p><h3>${item.title}</h3><div>${snippet(item.text, terms)}</div></article>`).join("")
    : `<article class="empty"><h3>No matches yet</h3><p>Try a broader term like airport, dinner, passport, Amalfi, or Paris.</p></article>`;
}

tabs.forEach((tab) => tab.addEventListener("click", () => setView(tab.dataset.tab)));
searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  runSearch();
});
clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  state.query = "";
  runSearch();
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
renderDocs();
runSearch();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("service-worker.js");
}
