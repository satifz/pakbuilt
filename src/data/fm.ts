import fmConsultancyImage from "@/assets/fm-consultancy.jpg";
import fmHardImage from "@/assets/fm-hard-services.jpg";
import fmSoftImage from "@/assets/fm-soft-services.jpg";
import commercialImage from "@/assets/ind-commercial.jpg";
import hospitalityImage from "@/assets/ind-hospitality.jpg";
import industrialImage from "@/assets/ind-industrial.jpg";
import residentialImage from "@/assets/ind-residential.jpg";
import retailImage from "@/assets/ind-retail.jpg";

/** The two PakBuilt business divisions — one company, two complementary capabilities. */
export const divisions = [
  {
    index: "01",
    title: "Building Solutions",
    body: "Materials, procurement, fit-out and HVAC support for project requirements.",
    items: ["Materials", "Procurement", "Fit-Out", "HVAC"],
    to: "/solutions",
  },
  {
    index: "02",
    title: "Facilities Management",
    body: "Consultancy and service coordination for buildings already in operation.",
    items: ["FM Consultancy", "Hard Services", "Soft Services"],
    to: "/facilities-management",
  },
] as const;

export interface FmService {
  id: string;
  index: string;
  title: string;
  tagline: string;
  body: string;
  items: readonly string[];
  cta: string;
  image: string;
  alt: string;
}

export const fmServices: readonly FmService[] = [
  {
    id: "fm-consultancy",
    index: "01",
    title: "FM Consultancy",
    tagline: "Structure before spend.",
    body: "Facilities management consultancy that helps you understand your facility, set up the right processes and measure the service you receive.",
    items: [
      "FM strategy & scope definition",
      "Facility & asset assessments",
      "FM mobilisation support",
      "SOP development",
      "SLA & KPI development",
      "CAFM / CMMS advisory",
      "Performance review & optimisation",
    ],
    cta: "Explore FM Consultancy",
    image: fmConsultancyImage,
    alt: "Facility drawings, maintenance schedules and a facilities management dashboard on a desk",
  },
  {
    id: "hard-services",
    index: "02",
    title: "Hard Services",
    tagline: "Keeping building systems operating reliably.",
    body: "Coordination and support for the technical systems that keep a building running — planned as well as reactive.",
    items: [
      "HVAC",
      "Mechanical",
      "Electrical",
      "Plumbing",
      "BMS advisory",
      "Preventive maintenance",
      "Corrective maintenance",
    ],
    cta: "Explore Hard Services",
    image: fmHardImage,
    alt: "Building plant room with chillers, pumps and electrical panels",
  },
  {
    id: "soft-services",
    index: "03",
    title: "Soft Services",
    tagline: "A clean, safe, well-managed environment.",
    body: "Day-to-day services that shape how a building feels to the people who use it, arranged and coordinated around your site.",
    items: [
      "Cleaning & housekeeping",
      "Security",
      "Landscaping",
      "Pest control",
      "Waste management",
      "Other soft FM services on request",
    ],
    cta: "Explore Soft Services",
    image: fmSoftImage,
    alt: "Pristine modern commercial office lobby with planting and polished floors",
  },
];

export const fmApproach = [
  {
    index: "01",
    title: "Assess",
    body: "Understand the facility, its systems, its condition and where the pressure points are.",
  },
  {
    index: "02",
    title: "Plan",
    body: "Define scope, service levels, priorities and a maintenance plan that fits the site.",
  },
  {
    index: "03",
    title: "Mobilise",
    body: "Put people, processes, documentation and service partners in place.",
  },
  {
    index: "04",
    title: "Operate",
    body: "Deliver and coordinate planned and reactive services with clear reporting.",
  },
  {
    index: "05",
    title: "Optimise",
    body: "Review performance against agreed measures and improve what is not working.",
  },
] as const;

export const fmValue = [
  {
    title: "Operational continuity",
    body: "Planned maintenance and clear escalation routes reduce avoidable disruption.",
  },
  {
    title: "Asset performance",
    body: "Systems that are inspected and serviced on a schedule behave more predictably.",
  },
  {
    title: "Service coordination",
    body: "One point of contact across several service providers instead of many separate ones.",
  },
  {
    title: "Cost awareness",
    body: "Documented scope, service levels and reporting make spend easier to review.",
  },
  {
    title: "Occupant experience",
    body: "Cleanliness, comfort and safety shape how people experience the building daily.",
  },
  {
    title: "Documentation",
    body: "SOPs, asset records and reporting keep facility knowledge with the facility.",
  },
] as const;

export const fmIndustries = [
  {
    id: "commercial",
    title: "Commercial & Corporate",
    body: "Offices and mixed-use buildings where uptime and presentation both matter.",
    image: commercialImage,
  },
  {
    id: "retail",
    title: "Retail",
    body: "Trading environments that need consistent condition across opening hours.",
    image: retailImage,
  },
  {
    id: "hospitality",
    title: "Hospitality",
    body: "Guest-facing spaces where comfort, cleanliness and systems run together.",
    image: hospitalityImage,
  },
  {
    id: "residential",
    title: "Residential",
    body: "Apartment buildings and housing with shared systems and common areas.",
    image: residentialImage,
  },
  {
    id: "industrial",
    title: "Industrial & Warehousing",
    body: "Facilities where mechanical and electrical reliability drives operations.",
    image: industrialImage,
  },
] as const;
