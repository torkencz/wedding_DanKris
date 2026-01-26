// content/siteContent.ts
// Single source of truth for the wedding website content.
// Keep this file easy to edit for non-devs too.

export type Link = { label: string; href: string; external?: boolean };

export type ScheduleEvent = {
  dateLabel: string; // e.g. "Sept 5, 2026"
  timeLabel: string; // e.g. "5:00 PM – 10:00 PM"
  title: string;
  venueName: string;
  address: string;
  cityCountry: string;
  links?: Link[];
  notes?: string[];
};

export type TimelineItem = { time: string; title: string; notes?: string };

export type WeddingDay = {
  dateLabel: string;
  title: string;
  venueName: string;
  address: string;
  cityCountry: string;
  links?: Link[];
  timeline: TimelineItem[];
  notes?: string[];
};

export type Hotel = {
  name: string;
  note?: string; // short reason (optional)
  link?: string; // booking link placeholder
};

export type HotelCategory = {
  title: string;
  description?: string;
  hotels: Hotel[];
};

export type Neighborhood = {
  name: string;
  bestFor: string;
  description: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type DayPlan = {
  title: string;
  items: string[];
};

export type ThingsSection = {
  title: string;
  intro?: string;
  bullets: string[];
};

export type SiteContent = {
  meta: {
    coupleNames: string;
    shortCoupleNames: string;
    city: string;
    country: string;
    dateRangeLabel: string;
    timezoneLabel: string;
  };

  nav: {
    // right-side scroll nav labels + ids (must match section ids in UI)
    sections: { id: string; label: string }[];
  };

  links: {
    rsvp?: Link; // placeholder for external RSVP tool
    registry?: Link; // optional
    map: Link; // google map
  };

  hero: {
    headline: string; // shown large at top
    subhead?: string;
    quickFacts: { label: string; value: string }[];
    heroImage: {
      src: string; // placeholder in /public
      alt: string;
    };
  };

  schedule: {
    introNote: string;
    events: ScheduleEvent[];
    weddingDay: WeddingDay;
  };

  fun: {
    title: string;
    caption: string;
    animation: {
      // used by your animation component
      type: "redPandaChasesDog";
      speed?: "slow" | "medium" | "fast";
    };
  };

  travel: {
    title: string;
    tldr: string[];
    airport: {
      name: string;
      code: string;
      gettingToCity: string;
      recommendations: string[];
    };
    gettingAround: {
      title: string;
      bullets: string[];
    };
    neighborhoods: Neighborhood[];
    hotels: {
      intro: string;
      categories: HotelCategory[];
      disclaimer?: string;
    };
    mapEmbed: {
      title: string;
      description: string;
      link: Link;
    };
  };

  thingsToDo: {
    title: string;
    intro: string;
    dayPlans: DayPlan[];
    sections: ThingsSection[];
    noteFromUs: string;
    kidFriendly: {
      title: string;
      intro: string;
      bullets: string[];
    };
  };

  faq: {
    title: string;
    items: FAQ[];
  };

  kidsAndChildcare: {
    title: string;
    strictPolicy: string;
    childcareInProgress: string;
    detailsComing: string;
  };

  rsvpAndRegistry: {
    title: string;
    rsvp: {
      headline: string;
      body: string;
      deadlineLabel: string; // placeholder text until you decide
    };
    registry: {
      show: boolean;
      headline: string;
      body: string;
    };
  };

  footer: {
    line1: string;
    line2: string;
    links: Link[];
  };
};

export const siteContent: SiteContent = {
  meta: {
    coupleNames: "Danica Shei & Törkenczy Kristóf",
    shortCoupleNames: "Danica & Kristóf",
    city: "Budapest",
    country: "Hungary",
    dateRangeLabel: "September 5–6, 2026",
    timezoneLabel: "All times are local Budapest time (CEST).",
  },

  nav: {
    sections: [
      { id: "welcome", label: "Welcome" },
      { id: "schedule", label: "Schedule" },
      { id: "fun", label: "About Us" },
      { id: "travel", label: "Travel" },
      { id: "stay", label: "Stay" },
      { id: "things", label: "Things To Do" },
      { id: "faq", label: "FAQ" },
      { id: "rsvp", label: "RSVP" },
    ],
  },

  links: {
    rsvp: {
      label: "RSVP",
      href: "https://example.com/rsvp", // TODO: replace
      external: true,
    },
    registry: {
      label: "Registry",
      href: "https://example.com/registry", // TODO: replace or remove
      external: true,
    },
    map: {
      label: "Event + Hotel Map",
      href: "https://www.google.com/maps/d/u/0/edit?mid=1_jpScQHY6vxYnWI-EtOKYWlZdGSQhX4&usp=sharing",
      external: true,
    },
  },

  hero: {
    headline: "Danica Shei & Törkenczy Kristóf",
    subhead: "Budapest, Hungary",
    quickFacts: [
      { label: "WHEN", value: "September 5–6, 2026" },
      { label: "WHERE", value: "Budapest, Hungary" },
      { label: "EVENTS", value: "Welcome Drinks + Wedding Day" },
      { label: "ATTIRE", value: 'Cocktail → "Upstage the Bride"' },
    ],
    heroImage: {
      src: "/placeholder-hero.jpg",
      alt: "Danica and Kristóf",
    },
  },

  schedule: {
    introNote: "All times listed are local Budapest time (CEST).",
    events: [
      {
        dateLabel: "Sept 5",
        timeLabel: "5:00 PM – 10:00 PM",
        title: "Welcome Drinks",
        venueName: "Brody House",
        address: "Bródy Sándor u. 10, 1088",
        cityCountry: "Budapest, Hungary",
        links: [
          { label: "Brody House", href: "https://www.brody.house/", external: true },
        ],
        notes: [
          "Walkable from many central Pest neighborhoods.",
          "Come say hi, grab a drink, and ease into the weekend.",
        ],
      },
    ],
    weddingDay: {
      dateLabel: "Sept 6",
      title: "Wedding Day",
      venueName: "Haris Park",
      address: "Marczibányi tér 6–7, 1022",
      cityCountry: "Budapest, Hungary",
      links: [
        { label: "Haris Park", href: "https://harispark.hu/en/", external: true },
      ],
      timeline: [
        { time: "4:00 PM", title: "Welcome reception", notes: "Haris Park garden" },
        { time: "5:00 PM", title: "Ceremony", notes: "Haris Park garden" },
        { time: "5:40 PM", title: "Congratulations & photography" },
        {
          time: "6:30 PM",
          title: "Guests enter ballroom",
          notes: "Couple continues photos",
        },
        { time: "6:50 PM", title: "Couple's grand entrance into ballroom" },
        { time: "7:00 PM", title: "Toasts" },
        { time: "7:30 PM", title: "Dinner service" },
        { time: "9:30 PM", title: "Opening dance" },
        {
          time: "11:00 PM",
          title: "Cake ceremony",
          notes:
            "Garden in front of illuminated building with sparklers OR ballroom dance floor",
        },
        { time: "12:00 AM", title: "Midnight snack" },
      ],
      notes: [
        "Transportation details will be shared closer to the date.",
      ],
    },
  },

  fun: {
    title: "Something Fun About Us",
    caption: "A short animated interlude because… us.",
    animation: {
      type: "redPandaChasesDog",
      speed: "medium",
    },
  },

  travel: {
    title: "Travel & Accommodations",
    tldr: [
      "Fly into BUD (Budapest Ferenc Liszt International Airport).",
      "Wedding is on the Buda side, but we recommend staying on the Pest side.",
      "Uber or Bolt for taxis.",
      "Budapest is walkable, compact, and easy to explore.",
    ],
    airport: {
      name: "Budapest Ferenc Liszt International Airport",
      code: "BUD",
      gettingToCity: "From the airport, the city center is about 25–35 minutes away.",
      recommendations: [
        "Taxi (~30 minutes). Official airport taxis are reliable.",
        "Once you're in the city, walking, trams, and taxis will get you everywhere you need to go.",
        "For taxis, we recommend Uber or Bolt.",
      ],
    },
    gettingAround: {
      title: "Getting Around",
      bullets: [
        "Walking: best for central neighborhoods.",
        "Trams + metro: frequent and easy.",
        "Taxis: Uber or Bolt are recommended.",
      ],
    },
    neighborhoods: [
      {
        name: "District V – Belváros / Lipótváros",
        bestFor: "First-time visitors, maximum walkability",
        description:
          "Central, elegant, and close to the Danube, Parliament, and major sights.",
      },
      {
        name: "District VII – Jewish Quarter",
        bestFor: "Restaurants, bars, nightlife",
        description:
          "Lively, energetic, and full of cafés and ruin bars. Great if you want to be in the action.",
      },
      {
        name: "District VI – Terézváros",
        bestFor: "A calmer home base that's still central",
        description:
          "Near Andrássy Avenue and the Opera. A great balance of charm and convenience.",
      },
    ],
    hotels: {
      intro:
        "Budapest has great hotel and apartment options at many price points. While our wedding will take place on the Buda side, we recommend staying on the Pest side, where most restaurants, bars, and sightseeing are located.",
      categories: [
        {
          title: "Luxury / Iconic",
          hotels: [
            { name: "Four Seasons Hotel Gresham Palace Budapest", link: "#" },
            { name: "Ritz-Carlton", link: "#" },
            { name: "Matild Palace, a Luxury Collection Hotel, Budapest", link: "#" },
            { name: "Kempinski Hotel Corvinus Budapest", link: "#" },
            { name: "W Budapest", link: "#" },
          ],
        },
        {
          title: "Boutique & Design",
          hotels: [
            { name: "Párisi Udvar Hotel Budapest – The Unbound Collection by Hyatt", link: "#" },
            { name: "Kimpton Bem Budapest by IHG", link: "#" },
            { name: "Dorothea Hotel, Budapest, Autograph Collection", link: "#" },
            { name: "Hotel Clark Budapest", link: "#" },
            { name: "Mystery Hotel Budapest", link: "#" },
            { name: "Verno House Budapest, Vignette Collection by IHG", link: "#" },
          ],
        },
        {
          title: "Modern / Business-Friendly",
          hotels: [
            { name: "Budapest Marriott Hotel", link: "#" },
            { name: "InterContinental Budapest", link: "#" },
            { name: "Hilton Budapest", link: "#" },
            { name: "Kozmo Hotel Suites & Spa", link: "#" },
          ],
        },
        {
          title: "Mid-Range & Great Value",
          hotels: [
            { name: "Hotel Moments Budapest by Continental Group", link: "#" },
            { name: "Prestige Hotel Budapest", link: "#" },
            { name: "Continental Hotel Budapest", link: "#" },
            { name: "Hotel Vision Budapest", link: "#" },
            { name: "Hotel Zenit Budapest Palace", link: "#" },
            { name: "Emerald Hotel & Suites by Continental Group", link: "#" },
            { name: "Mamaison Hotel Andrássy Budapest", link: "#" },
            { name: "Courtyard Budapest City Center", link: "#" },
            { name: "Mamaison Hotel Chain Bridge Budapest", link: "#" },
            { name: "La Prima Fashion Hotel & Restaurant", link: "#" },
            { name: "Hotel Tiliana – Wellness & Spa", link: "#" },
          ],
        },
      ],
      disclaimer:
        "Links are placeholders for now — feel free to book wherever you're happiest. We just want you in Budapest.",
    },
    mapEmbed: {
      title: "Map for Events & Hotels",
      description:
        "This map includes all wedding events, recommended hotels, and key neighborhoods. Open it in Google Maps and save it for your trip.",
      link: {
        label: "Open the Google Map",
        href: "https://www.google.com/maps/d/u/0/edit?mid=1_jpScQHY6vxYnWI-EtOKYWlZdGSQhX4&usp=sharing",
        external: true,
      },
    },
  },

  thingsToDo: {
    title: "Things To Do",
    intro:
      "If you're making a trip out of the wedding (highly encouraged!), Budapest is a fantastic city to explore. Below are a few favorite ways to experience it — whether you're here for a long weekend or a full week.",
    dayPlans: [
      {
        title: "If you only have 1 free day",
        items: [
          "Walk along the Danube (Parliament → Chain Bridge)",
          "Thermal baths (pick one!)",
          "Dinner + a ruin bar",
        ],
      },
      {
        title: "If you have 3 days",
        items: [
          "Castle Hill + Fisherman's Bastion",
          "Thermal baths + café/pastry stop",
          "Markets + wine/cocktails",
          "Optional: Margaret Island or a short day trip",
        ],
      },
    ],
    sections: [
      {
        title: "Classic Budapest",
        bullets: [
          "Walk along the Danube: especially between Parliament and the Chain Bridge.",
          "Buda Castle & Castle Hill: views, cobblestones, and historic charm (Fisherman's Bastion is a must).",
          "Parliament Building: iconic from every angle, especially at sunset.",
        ],
      },
      {
        title: "Thermal Baths",
        intro:
          "Budapest is famous for its thermal baths — an ideal way to recover from travel (or dancing).",
        bullets: [
          "Széchenyi Baths – grand, iconic, outdoors, and lively.",
          "Gellért Baths – elegant Art Nouveau interiors and calmer vibes.",
          "Rudas Baths – historic Ottoman baths with a rooftop pool overlooking the Danube.",
        ],
      },
      {
        title: "Eat & Drink",
        bullets: [
          "Hungarian classics: goulash, chicken paprikash, lángos (and modern takes too).",
          "Ruin bars: Szimpla Kert (the classic) and Instant–Fogas (bigger, more club-like).",
          "Wine & cocktails: look for Tokaji and local wine bars.",
        ],
      },
      {
        title: "Culture & Nightlife",
        bullets: [
          "Opera House & concerts: worth a visit even if you only tour.",
          "Live music & jazz bars: relaxed venues with great musicians.",
          "Late-night cafés: coffee culture runs late here.",
        ],
      },
      {
        title: "Daytime & Relaxed Options",
        bullets: [
          "Margaret Island: a peaceful green break in the middle of the Danube.",
          "Cafés & pastry stops: slow mornings done right.",
          "Great Market Hall: snacks, paprika, souvenirs, and people-watching.",
        ],
      },
      {
        title: "Easy Day Trips",
        bullets: [
          "Szentendre – charming riverside town, easy train ride.",
          "Eger – wine region with historic architecture.",
          "Lake Balaton – Hungary's 'sea,' great in warmer months.",
        ],
      },
    ],
    noteFromUs:
      "You really don't need to over-plan — Budapest is walkable, affordable, and easy to explore spontaneously. Pick a neighborhood, wander, stop for food or a drink, and you'll almost certainly stumble into something great.",
    kidFriendly: {
      title: "Kid-Friendly Activities",
      intro:
        "Budapest has plenty of fun and easy options for families — with lots of cafés nearby for adults.",
      bullets: [
        "Budapest Zoo & Botanical Garden – right by City Park.",
        "Margaret Island – paths, playgrounds, and space to run around.",
        "City Park (Városliget) – green space and family-friendly attractions nearby.",
        "Children's Railway – a charming ride through the Buda hills.",
        "Danube boat cruise – short cruises are usually a hit with kids.",
        "Great Market Hall – colorful stalls, pastries, and quick bites.",
      ],
    },
  },

  faq: {
    title: "FAQs",
    items: [
      {
        question: "What is the dress code?",
        answer:
          'For the welcome party, we invite you to wear colorful cocktail/formal attire. For the wedding, the theme is "Upstage the Bride," meaning you\'re invited to go all out — bold choices, loud colors, standout accessories. Have fun with it!',
      },
      {
        question: "Will the events be kid-friendly?",
        answer:
          "Our wedding events will be strictly adults-only. We are actively working on providing childcare options during the wedding events and will share details closer to the date.",
      },
      {
        question: "What currency should I use?",
        answer:
          "Hungary uses the Hungarian Forint (HUF). Credit cards are widely accepted.",
      },
      {
        question: "Do I need a power adapter?",
        answer:
          "Yes — Hungary uses European Type C/F plugs. Bring an adapter if you're traveling from outside Europe.",
      },
      {
        question: "Do people speak English?",
        answer:
          "In hotels, restaurants, and tourist areas, English is common. A few basic phrases are always appreciated, but you'll be totally fine.",
      },
      {
        question: "What will the weather be like?",
        answer:
          "Early September is typically warm during the day with cooler evenings. We recommend bringing layers.",
      },
      {
        question: "How should I get around?",
        answer:
          "Budapest is walkable and has excellent public transit (trams + metro). For taxis, we recommend Uber or Bolt.",
      },
    ],
  },

  kidsAndChildcare: {
    title: "Kids & Childcare",
    strictPolicy:
      "While we love your little ones, our wedding events will be strictly adults-only. We hope this allows everyone to relax and fully enjoy the celebration.",
    childcareInProgress:
      "We completely understand many guests are traveling with families, and we're actively working on providing childcare options during the wedding events.",
    detailsComing:
      "We'll post details here as soon as it's finalized (timing, age ranges, and how to reserve).",
  },

  rsvpAndRegistry: {
    title: "RSVP",
    rsvp: {
      headline: "Please RSVP",
      body: "We can't wait to celebrate with you in Budapest. Please RSVP using the link below.",
      deadlineLabel: "RSVP by: (TBD)",
    },
    registry: {
      show: true,
      headline: "Registry",
      body:
        "Your presence means the world to us. If you'd like to give a gift, we'll share registry details here.",
    },
  },

  footer: {
    line1: "Danica & Kristóf",
    line2: "Budapest, Hungary • September 5–6, 2026",
    links: [
      { label: "RSVP", href: "https://example.com/rsvp", external: true },
      {
        label: "Map",
        href: "https://www.google.com/maps/d/u/0/edit?mid=1_jpScQHY6vxYnWI-EtOKYWlZdGSQhX4&usp=sharing",
        external: true,
      },
      { label: "Registry", href: "https://example.com/registry", external: true },
    ],
  },
};

export default siteContent;
