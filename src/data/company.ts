export const company = {
  name: "PakBuilt",
  wordmark: "PAKBUILT",
  founder: { name: "Atif Zaidi", role: "Founder & CEO" },
  phone: "+92 300 2843259",
  phoneHref: "tel:+923002843259",
  whatsappHref:
    "https://wa.me/923002843259?text=Hi%20PakBuilt%2C%20I%20have%20a%20material%20requirement%20I%27d%20like%20a%20quote%20for.",
  email: "info@pakbuilt.com",
  emailAlt: "Pakbuilt@hotmail.com",
  website: "www.pakbuilt.com",
  headOffice: {
    label: "Head Office",
    line1: "Office # 2, Plot # 2/15, Sheet # K-28",
    line2: "Firdous Co-operative Housing Society, Nazimabad, Karachi, Pakistan",
    short: "Nazimabad, Karachi",
  },
  shop: {
    label: "Shop",
    line1: "Shop #1535-A, Phool Gali",
    line2: "New Golimar, Karachi, Pakistan",
    short: "New Golimar, Karachi",
  },
  locationShort: "Nazimabad & New Golimar, Karachi",
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Solutions", to: "/solutions" },
  { label: "Facilities Management", to: "/facilities-management" },
  { label: "Industries", to: "/industries" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
] as const;

/** Secondary links surfaced in the footer only. */
export const footerLinks = [{ label: "Why PakBuilt", to: "/why-pakbuilt" }] as const;
