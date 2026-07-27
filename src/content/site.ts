export const site = {
  name: "Etherios Therapy",
  logo: "/images/logo-cropped.png",
  logoMark: "/images/logo-cropped.png",
  phone: "(385) 853-5242",
  phoneHref: "tel:+13858535242",
  address: "388 W Center St, Orem, UT 84057",
  addressLines: ["388 W Center St", "Orem, UT 84057"],
  website: "https://www.etheriostherapy.com",
  mapsUrl: "https://maps.app.goo.gl/rhxZBhsxQGDW8EgP8",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.5!2d-111.7047374!3d40.2977041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x44f730e57093ee05%3A0x4673a945d615f6df!2sEtherios%20Therapy!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus",
  spravatoVideoEmbedUrl: "https://www.youtube.com/embed/wdAdL6seApc",
  spravatoVideoTitle: "Tour Our Ketamine & Spravato Treatment Rooms at Etherios Therapy",
  /** Active static hero composite (clinic + SPRAVATO® + spray baked in) */
  heroImage: "/images/new-hero.png",
  /**
   * Kept for later comparison / switch-back — not used in Hero right now.
   */
  heroLobbyImage: "/images/hero-lobby.webp",
  heroSprayImage: "/images/spravato-spray.png",
  heroVideoSrc:
    "https://video.squarespace-cdn.com/content/v1/64cab3b0889d451362607174/88e2a663-1d43-45d6-8941-b804eccaa9e0/playlist.m3u8",
  heroVideoPoster: "/images/hero-clinic.webp",
  routes: {
    bookConsult: "/#book-consult",
    inquiry: "/#inquiry",
  },
  /**
   * GHL embeds — paste form/calendar IDs when provided.
   * Form: "Spravato: New Web Inquiry + Params"
   * Calendar: "Book a free 10 minute consultation"
   */
  ghl: {
    calendarName: "Book a free 10 minute consultation",
    calendar: {
      id: "qOzqYx272PIXMJ0MjBxz",
      iframeId: "qOzqYx272PIXMJ0MjBxz_1785144686346",
      src: "https://go.4tms.com/widget/booking/qOzqYx272PIXMJ0MjBxz",
      scriptSrc: "https://go.4tms.com/js/form_embed.js",
      title: "Book a free 10 minute consultation",
    },
    inquiryForm: {
      id: "YkxdF9q2pXiSn8MBPjKg",
      iframeId: "inline-YkxdF9q2pXiSn8MBPjKg",
      name: "Spravato: New Web Inquiry + Params",
      title: "Spravato: New Web Inquiry + Params",
      src: "https://go.4tms.com/widget/form/YkxdF9q2pXiSn8MBPjKg",
      scriptSrc: "https://go.4tms.com/js/form_embed.js",
      height: 710,
    },
  },
} as const;
