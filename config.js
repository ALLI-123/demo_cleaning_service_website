// ============================================
// CONFIG.JS - Customize settings for each client
// Hazionetechnologies Template System
// ============================================

const SITE_CONFIG = {
  // ---- BRANDING ----
  brand: {
    name: "flyp",
    tagline: "Sell it the flyp way",
    logo: {
      text: "flyp",           // Logo text (or replace with image path)
      image: "",               // e.g., "assets/logo.svg"
      upsideDownIcon: "🏠",    // Upside-down house icon
    },
    year: 2025,
  },

  // ---- THEME / COLORS ----
  theme: {
    primary: "#E85D3A",        // Terracotta / Coral (main CTA)
    primaryDark: "#C94A2A",    // Darker shade
    secondary: "#2D2D2D",      // Charcoal
    accent: "#F5A623",         // Amber / Gold
    success: "#4CAF50",        // Green
    background: "#FAFAF5",     // Warm off-white
    surface: "#FFFFFF",        // Cards
    surfaceAlt: "#F2EDE6",     // Section backgrounds
    textPrimary: "#1A1A1A",    // Main text
    textSecondary: "#6B6B6B",  // Muted text
    textLight: "#FFFFFF",      // Light text on dark bg
    border: "#E5E0D8",         // Borders
  },

  // ---- TYPOGRAPHY ----
  typography: {
    fontFamily: '"Inter", "Helvetica Neue", sans-serif',
    headingFont: '"Plus Jakarta Sans", "Inter", sans-serif',
  },

  // ---- NAVIGATION ----
  nav: {
    links: [
      { text: "How it works", href: "#how-it-works" },
      { text: "Compare agents", href: "#compare-agents" },
      { text: "Stories", href: "#stories" },
      { text: "About", href: "#about" },
      { text: "Contact", href: "#contact" },
    ],
    ctaButton: {
      text: "Get started",
      href: "#contact",
    },
  },

  // ---- COOKIE BANNER ----
  cookieBanner: {
    enabled: true,
    message:
      "We use cookies to give you the best online experience and assist with our marketing efforts.",
    acceptText: "Accept",
    learnMoreText: "Learn more",
    learnMoreLink: "/privacy",
  },

  // ---- HERO SECTION ----
  hero: {
    heading: "Sell your home faster and for more",
    subheading:
      "Have a network of all the best agents fighting for you, at no extra cost. Join the selling revolution, sell it the flyp way.",
    ctaButton: {
      text: "Get started",
      href: "#contact",
    },
    backgroundImage: "", // Optional: "assets/hero-bg.jpg"
  },

  // ---- FEATURED IN ----
  featured: {
    enabled: true,
    label: "As featured in",
    logos: [
      { name: "BBC", image: "" },
      { name: "Forbes", image: "" },
      { name: "The Times", image: "" },
      { name: "TechCrunch", image: "" },
      { name: "Guardian", image: "" },
    ],
  },

  // ---- HOW IT WORKS (3 STEPS) ----
  howItWorks: {
    heading: "It's as easy as 1, 2, 3... flyp",
    subtitle: "We've got a new way of doing things. This is property sales done right.",
    steps: [
      {
        number: 1,
        title: "Value it",
        description: "Is there more potential to unlock?",
        icon: "📊",
      },
      {
        number: 2,
        title: "Improve it",
        description: "On our dime",
        icon: "🔨",
      },
      {
        number: 3,
        title: "Sell it",
        description: "Through a network of agents",
        icon: "🤝",
      },
    ],
    ctaButton: {
      text: "How it works",
      href: "#how-it-works",
    },
  },

  // ---- COMPARE AGENTS ----
  compareAgents: {
    heading: "Debating which estate agent to go with?",
    description:
      "Get a breakdown of your top local estate agents. Enter your post code to compare the best and get direct access to all of them.",
    ctaButton: {
      text: "Compare agents",
      href: "#contact",
    },
  },

  // ---- USER PATHS (Enough about us) ----
  userPaths: {
    heading: "Enough about us...",
    subtitle:
      "We're here for you, and have worked on a model that works for everyone, no matter where you are in your sale journey.",
    paths: [
      {
        emoji: "💭",
        title: "I'm thinking of selling my property",
        description:
          "Get a valuation, access all agents, and find the perfect buyer.",
        ctaText: "Learn more",
        ctaHref: "#contact",
      },
      {
        emoji: "🆘",
        title: "I'm struggling to sell my property",
        description:
          "Get more viewings, more interest, more offers with our simple 3-step process.",
        ctaText: "Learn more",
        ctaHref: "#contact",
      },
    ],
  },

  // ---- PROPERTY STORIES / PORTFOLIO ----
  stories: {
    heading: "From unloved properties to desirable homes",
    subtitle: "See the stories behind the homes we've flyp'd and sold.",
    ctaButton: {
      text: "See flyp stories",
      href: "#stories",
    },
    properties: [
      {
        title: "Hanover House",
        location: "NW8",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      },
      {
        title: "Clermont Road",
        location: "E7",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c153858?w=600&h=400&fit=crop",
      },
      {
        title: "Battersea Church Road",
        location: "SW11",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
      },
      {
        title: "Broomwood",
        location: "SW11",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
      },
      {
        title: "Clapham Common North",
        location: "SW4",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa206c3?w=600&h=400&fit=crop",
      },
      {
        title: "Blytheswood Place",
        location: "SW16",
        image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&h=400&fit=crop",
      },
    ],
  },

  // ---- STATS ----
  stats: {
    heading: "Stats that make us angry...",
    subtitle: "We've flyped that..",
    items: [
      {
        value: "£75,000",
        label: "How much homeowners lose out on a sale",
        prefix: "- ",
      },
      {
        value: "19 weeks",
        label: "How long it takes homeowners to sell their home",
        prefix: "",
      },
    ],
  },

  // ---- TESTIMONIALS ----
  testimonials: {
    heading: "Don't take it from us, hear from who matters",
    items: [
      {
        quote:
          "We never thought we could get above asking, let alone start a bidding war. But that's what happened once flyp came into the picture.",
        author: "Sarah & James",
        location: "Clapham",
        avatar: "",
      },
      {
        quote:
          "We had an ex rental property that was worn and torn to say the least. flyp resurrected it and got it sold. All without us lifting a finger. A dream team to work with.",
        author: "Michael Thompson",
        location: "Battersea",
        avatar: "",
      },
      {
        quote:
          "The whole process was seamless. From staging to sale, they handled everything with incredible professionalism.",
        author: "Emily Roberts",
        location: "NW8",
        avatar: "",
      },
    ],
  },

  // ---- ABOUT / MISSION ----
  about: {
    heading: "There's a better way to sell.",
    description:
      "We created flyp for a generation that demands more. More trust, more transparency, more efficiency. And yes, more money.",
    tagline: "We're here to empower you to sell faster and for more.",
    ctaButton: {
      text: "A bit more about us",
      href: "#contact",
    },
  },

  // ---- CONTACT FORM ----
  contact: {
    heading: "Chat to us",
    subtitle:
      "Any questions specifically about your property? — we'd love to hear from you",
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone (optional)", type: "tel", required: false },
      { name: "postcode", label: "Postcode", type: "text", required: false },
      { name: "message", label: "Message", type: "textarea", required: true },
    ],
    options: {
      label: "What's the most exciting thing we can help you with",
      choices: [
        "To add value to my home",
        "To earn extra income while I sell",
        "To stage my home",
        "To get 5 agents for the price of 1",
      ],
    },
    submitButton: {
      text: "Submit",
    },
    formAction: "#", // Form submission URL
    successMessage: "Thanks! We'll be in touch soon.",
  },

  // ---- FOOTER ----
  footer: {
    tagline: "Join the property revolution.",
    links: [
      { text: "Privacy Policy", href: "/privacy" },
      { text: "Terms & conditions", href: "/terms" },
      { text: "Contact us", href: "#contact" },
    ],
    social: [
      {
        name: "Facebook",
        url: "https://facebook.com",
        icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com",
        icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
      },
      {
        name: "Instagram",
        url: "https://instagram.com",
        icon: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.584.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.355-1.058-.42-2.227-.053-1.278-.069-1.654-.069-4.856 0-3.203.013-3.586.068-4.857.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.05 1.649-.07 4.857-.07zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
      },
    ],
    copyright: `© {year} {brand} homes. All Rights Reserved`,
  },

  // ---- ANIMATIONS ----
  animations: {
    scrollReveal: true,
    scrollRevealDelay: 100,     // ms between elements
    flipOnHover: true,
    parallaxHero: true,
    counterAnimation: true,
  },

  // ---- SEO ----
  seo: {
    title: "flyp — Sell your home faster and for more",
    description:
      "Sell your home faster and for more. Have a network of all the best agents fighting for you, at no extra cost.",
    favicon: "",
    ogImage: "",
  },
};

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
      }
