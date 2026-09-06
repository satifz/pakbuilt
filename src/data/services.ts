import constructionImage from "@/assets/cat-construction.jpg";
import fitoutImage from "@/assets/cat-fitout.jpg";
import hvacImage from "@/assets/cat-hvac.jpg";
import mepImage from "@/assets/cat-mep.jpg";
import boqImage from "@/assets/boq.jpg";
import fmConsultancyImage from "@/assets/fm-consultancy.jpg";
import fmHardImage from "@/assets/fm-hard-services.jpg";
import fmSoftImage from "@/assets/fm-soft-services.jpg";

export interface ServiceSection {
  heading: string;
  body?: string;
  items?: readonly string[];
}

export interface ServiceRelated {
  label: string;
  to: string;
  note: string;
}

export interface ServicePageData {
  slug: string;
  path: string;
  /** Breadcrumb / nav label */
  name: string;
  eyebrow: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  serviceType: string;
  image: string;
  imageAlt: string;
  sections: readonly ServiceSection[];
  faqs: readonly { q: string; a: string }[];
  related: readonly ServiceRelated[];
  parent?: { name: string; path: string };
}

export const buildingMaterials: ServicePageData = {
  slug: "building-materials",
  path: "/building-materials",
  name: "Building Materials",
  eyebrow: "Building materials",
  h1: "Building Materials Supply in Karachi",
  title: "Building Materials Supplier in Karachi | PakBuilt",
  description:
    "PakBuilt supplies construction and finishing materials in Karachi and across Pakistan — from single requirements to project quantities against your specification.",
  intro:
    "PakBuilt supplies construction and finishing materials for residential, commercial, industrial and fit-out requirements. Tell us the specification, quantity and site, and we source against it — whether that is one item for a renovation or a full material schedule for a project.",
  serviceType: "Building materials supply",
  image: constructionImage,
  imageAlt: "Stacked construction materials on a building site in Karachi",
  sections: [
    {
      heading: "Material categories we supply",
      body: "The categories below show where we focus. They are not a hard limit — if a requirement is construction, fit-out or building-services related, send it through.",
      items: [
        "Construction materials",
        "Finishes and paints",
        "Flooring and ceilings",
        "Hardware and ironmongery",
        "Plumbing materials",
        "Electrical materials",
        "Waterproofing",
        "Fit-out materials",
      ],
    },
    {
      heading: "How material supply works",
      body: "We work from what you already have — a material list, a drawing, a photograph or a BOQ. We confirm specification, availability and lead time before quoting, then coordinate supply and delivery to your site.",
    },
    {
      heading: "Who we supply",
      body: "Contractors, builders and developers, interior and fit-out teams, businesses managing their own premises, facilities teams, and property owners handling construction or renovation work.",
    },
  ],
  faqs: [
    {
      q: "What building materials does PakBuilt supply?",
      a: "Construction materials, finishes and paints, flooring, ceilings, hardware, plumbing and electrical materials, waterproofing and fit-out materials. Where an item sits outside these categories, we look into sourcing it rather than turning the requirement away.",
    },
    {
      q: "Do you supply small quantities or only project volumes?",
      a: "Both. A single material for a renovation and a full BOQ for a project go through the same process — the difference is scale, not attention.",
    },
    {
      q: "Do you deliver materials in Karachi?",
      a: "Yes. Delivery is coordinated as part of the agreed supply, with location, access and timing confirmed before dispatch. Requirements outside Karachi are handled case by case.",
    },
  ],
  related: [
    {
      label: "Construction procurement services",
      to: "/procurement",
      note: "Source a full material schedule or BOQ through one structured process.",
    },
    {
      label: "Commercial fit-out solutions",
      to: "/fit-out",
      note: "Interior materials and finishes for office, retail and hospitality spaces.",
    },
    {
      label: "Browse product categories",
      to: "/products",
      note: "See the categories and representative items we work with.",
    },
  ],
};

export const procurement: ServicePageData = {
  slug: "procurement",
  path: "/procurement",
  name: "Procurement",
  eyebrow: "Procurement",
  h1: "Construction Procurement Services in Pakistan",
  title: "Construction Procurement Services in Pakistan | PakBuilt",
  description:
    "Project procurement from PakBuilt: BOQ-based sourcing, supplier comparison, quotations and delivery coordination for construction projects in Karachi and Pakistan.",
  intro:
    "Procurement is where a project either stays on programme or starts slipping. PakBuilt takes your BOQ, specification or material schedule and runs a structured sourcing process — identifying suitable products and suppliers, comparing options and coordinating supply against your line items.",
  serviceType: "Construction procurement",
  image: boqImage,
  imageAlt: "Bill of quantities and material schedule being reviewed for a construction project",
  sections: [
    {
      heading: "What procurement covers",
      items: [
        "BOQ and specification review",
        "Sourcing local and international products",
        "Supplier identification and comparison",
        "Quotation against your line items",
        "Lead time and availability confirmation",
        "Order coordination and delivery scheduling",
      ],
    },
    {
      heading: "How we work through a BOQ",
      body: "Send the BOQ in any usable format. We read it against real availability, flag items where the specification and the market do not line up, and come back with practical options and a quotation rather than a list of gaps.",
    },
    {
      heading: "Trading and sourcing",
      body: "PakBuilt works on both local and international sourcing. Imported items depend on lead time, quantity and specification, all of which we confirm with you before quoting.",
    },
  ],
  faqs: [
    {
      q: "Does PakBuilt provide construction procurement services?",
      a: "Yes. Procurement is a core part of what we do — sourcing materials against a BOQ, specification, quantity and budget, then coordinating supply.",
    },
    {
      q: "Can you quote directly from our BOQ?",
      a: "Yes. Send your BOQ, specification or material list and we revert with practical options and a quotation against your line items.",
    },
    {
      q: "Can you source imported products?",
      a: "We work on both local and international sourcing. Imported items are confirmed for lead time, quantity and specification before we quote.",
    },
  ],
  related: [
    {
      label: "Building materials supply",
      to: "/building-materials",
      note: "The material categories most procurement enquiries draw from.",
    },
    {
      label: "MEP and building services supply",
      to: "/mep",
      note: "Mechanical, electrical and plumbing items within a project package.",
    },
    {
      label: "Send your BOQ for a quote",
      to: "/contact",
      note: "Share your material schedule and we will revert with options.",
    },
  ],
};

export const fitOut: ServicePageData = {
  slug: "fit-out",
  path: "/fit-out",
  name: "Fit-Out",
  eyebrow: "Fit-out",
  h1: "Commercial Fit-Out Solutions in Karachi",
  title: "Commercial Fit-Out Solutions in Karachi | PakBuilt",
  description:
    "Fit-out materials and solutions from PakBuilt for office, retail, hospitality and residential interiors in Karachi and across Pakistan.",
  intro:
    "Fit-out work runs on coordination: finishes, partitions, ceilings, flooring and building services arriving in the right sequence. PakBuilt supplies and sources fit-out materials for commercial, retail, hospitality and residential interiors, working alongside interior contractors and project teams.",
  serviceType: "Commercial fit-out solutions",
  image: fitoutImage,
  imageAlt: "Commercial office interior fit-out with partitions, ceiling grid and flooring in progress",
  sections: [
    {
      heading: "Fit-out scope we support",
      items: [
        "Partitions and drywall systems",
        "Ceilings and ceiling systems",
        "Flooring and floor finishes",
        "Wall finishes and paints",
        "Doors, hardware and ironmongery",
        "Joinery and fit-out accessories",
      ],
    },
    {
      heading: "Sectors we fit out",
      body: "Offices and corporate workplaces, retail units, hospitality spaces, and residential interiors — the same sectors represented across our industries page.",
    },
    {
      heading: "Coordinating services with the interior",
      body: "Interiors rarely stop at finishes. Where a fit-out also needs air conditioning or mechanical, electrical and plumbing items, those are handled through the same point of contact rather than a separate supply chain.",
    },
  ],
  faqs: [
    {
      q: "Does PakBuilt provide commercial fit-out solutions?",
      a: "Yes. We supply and source fit-out materials and solutions for commercial, retail, hospitality and residential interiors.",
    },
    {
      q: "Can you supply fit-out materials and HVAC together?",
      a: "Yes. Fit-out materials, HVAC items and MEP supplies can be sourced through a single requirement and one point of contact.",
    },
  ],
  related: [
    {
      label: "HVAC solutions in Karachi",
      to: "/hvac",
      note: "Air conditioning and ventilation items for fitted-out spaces.",
    },
    {
      label: "MEP and building services supply",
      to: "/mep",
      note: "Mechanical, electrical and plumbing items behind the finishes.",
    },
    {
      label: "Building materials supply",
      to: "/building-materials",
      note: "Finishes, flooring, ceilings and hardware categories.",
    },
  ],
};

export const hvac: ServicePageData = {
  slug: "hvac",
  path: "/hvac",
  name: "HVAC",
  eyebrow: "HVAC",
  h1: "HVAC Solutions and Supply in Karachi",
  title: "HVAC Services & Supply in Karachi | PakBuilt",
  description:
    "HVAC equipment, accessories and materials from PakBuilt for commercial, industrial and residential buildings in Karachi and across Pakistan.",
  intro:
    "Air conditioning and ventilation decide how a building actually performs in Karachi's climate. PakBuilt supplies HVAC equipment, accessories and related materials, and supports HVAC requirements on fit-out projects and on buildings already in operation.",
  serviceType: "HVAC supply and solutions",
  image: hvacImage,
  imageAlt: "Rooftop HVAC chillers and ductwork serving a commercial building",
  sections: [
    {
      heading: "HVAC supply scope",
      items: [
        "Air conditioning equipment",
        "Ventilation equipment and accessories",
        "Ducting and insulation materials",
        "HVAC accessories and consumables",
        "Related building-services materials",
      ],
    },
    {
      heading: "HVAC on projects and in operation",
      body: "On new work and fit-outs, HVAC items are sourced alongside the rest of the material package. On operating buildings, HVAC also sits inside hard facilities management, where planned and reactive maintenance is coordinated.",
    },
    {
      heading: "Specification first",
      body: "Capacity, application and site conditions come before a price. We confirm the specification with you so the equipment quoted matches the space it has to serve.",
    },
  ],
  faqs: [
    {
      q: "Does PakBuilt provide HVAC services?",
      a: "We supply HVAC equipment, accessories and materials, and coordinate HVAC maintenance as part of hard facilities management services.",
    },
    {
      q: "Can you supply HVAC for a fit-out project?",
      a: "Yes. HVAC items are commonly sourced together with fit-out materials so the interior and its services arrive in sequence.",
    },
  ],
  related: [
    {
      label: "Commercial fit-out solutions",
      to: "/fit-out",
      note: "Interiors that HVAC and ventilation are installed into.",
    },
    {
      label: "Hard facilities management services",
      to: "/hard-services",
      note: "HVAC maintenance for buildings already in operation.",
    },
    {
      label: "MEP and building services supply",
      to: "/mep",
      note: "Mechanical, electrical and plumbing items alongside HVAC.",
    },
  ],
};

export const mep: ServicePageData = {
  slug: "mep",
  path: "/mep",
  name: "MEP",
  eyebrow: "MEP",
  h1: "MEP and Building Services Supply",
  title: "MEP & Building Services Supply in Karachi | PakBuilt",
  description:
    "Mechanical, electrical and plumbing materials from PakBuilt for construction, fit-out and facilities requirements in Karachi and across Pakistan.",
  intro:
    "MEP is the part of a building nobody sees and everybody notices when it fails. PakBuilt supplies mechanical, electrical and plumbing products and materials for construction projects, fit-out packages and operating facilities.",
  serviceType: "MEP materials supply",
  image: mepImage,
  imageAlt: "Mechanical, electrical and plumbing services installed above a ceiling void",
  sections: [
    {
      heading: "MEP supply scope",
      items: [
        "Mechanical materials and accessories",
        "Electrical materials and accessories",
        "Plumbing materials and fittings",
        "Building-services consumables",
      ],
    },
    {
      heading: "Where MEP supply fits",
      body: "MEP items are usually part of a bigger package — a fit-out, a project BOQ or a maintenance requirement on an operating building. Sourcing them through the same route keeps specification and delivery coordinated.",
    },
  ],
  faqs: [
    {
      q: "Does PakBuilt supply MEP materials?",
      a: "Yes. We supply mechanical, electrical and plumbing products and building-services materials against your specification.",
    },
  ],
  related: [
    {
      label: "HVAC solutions in Karachi",
      to: "/hvac",
      note: "Air conditioning and ventilation within the services package.",
    },
    {
      label: "Construction procurement services",
      to: "/procurement",
      note: "MEP line items sourced as part of a full BOQ.",
    },
    {
      label: "Commercial fit-out solutions",
      to: "/fit-out",
      note: "Interior packages that MEP work sits behind.",
    },
  ],
};

export const fmConsultancy: ServicePageData = {
  slug: "fm-consultancy",
  path: "/fm-consultancy",
  name: "FM Consultancy",
  parent: { name: "Facilities Management", path: "/facilities-management" },
  eyebrow: "FM consultancy",
  h1: "Facilities Management Consultancy",
  title: "FM Consultancy Services in Karachi & Pakistan | PakBuilt",
  description:
    "Facilities management consultancy from PakBuilt: FM strategy, asset assessment, mobilisation, SOPs, SLAs and KPIs for facilities in Karachi and across Pakistan.",
  intro:
    "Structure before spend. Our facilities management consultancy helps you understand your facility, set up the right processes and measure the service you actually receive — before committing to long-term service costs.",
  serviceType: "Facilities management consultancy",
  image: fmConsultancyImage,
  imageAlt: "Facility drawings, maintenance schedules and a facilities management dashboard on a desk",
  sections: [
    {
      heading: "Consultancy scope",
      items: [
        "FM strategy and scope definition",
        "Facility and asset assessments",
        "FM mobilisation support",
        "SOP development",
        "SLA and KPI development",
        "CAFM / CMMS advisory",
        "Performance review and optimisation",
      ],
    },
    {
      heading: "How the work is structured",
      body: "Assess the facility and its systems, plan scope and service levels, mobilise people and processes, operate with clear reporting, then optimise against agreed measures.",
    },
    {
      heading: "What you keep",
      body: "Documented scope, SOPs, asset records and reporting stay with the facility, so knowledge does not leave when a service provider does.",
    },
  ],
  faqs: [
    {
      q: "Does PakBuilt provide FM consultancy?",
      a: "Yes. We provide facilities management consultancy covering FM strategy and scope, facility and asset assessments, mobilisation support, SOPs, SLAs and KPIs, CAFM advisory and performance review.",
    },
    {
      q: "Do we need consultancy if we already have service providers?",
      a: "Often the value is exactly there — defining scope, service levels and measures so existing providers can be reviewed against something concrete.",
    },
  ],
  related: [
    {
      label: "Facilities management overview",
      to: "/facilities-management",
      note: "How consultancy, hard and soft services fit together.",
    },
    {
      label: "Hard facilities management services",
      to: "/hard-services",
      note: "Technical systems maintenance and coordination.",
    },
    {
      label: "Soft facilities management services",
      to: "/soft-services",
      note: "Cleaning, security and day-to-day site services.",
    },
  ],
};

export const hardServices: ServicePageData = {
  slug: "hard-services",
  path: "/hard-services",
  name: "Hard Services",
  parent: { name: "Facilities Management", path: "/facilities-management" },
  eyebrow: "Hard services",
  h1: "Hard Facilities Management Services",
  title: "Hard FM Services in Karachi | HVAC, MEP Maintenance — PakBuilt",
  description:
    "Hard facilities management from PakBuilt: HVAC, mechanical, electrical and plumbing maintenance coordination for buildings in Karachi and across Pakistan.",
  intro:
    "Hard services keep the technical systems of a building operating reliably. PakBuilt coordinates and supports planned and reactive maintenance across HVAC, mechanical, electrical and plumbing systems.",
  serviceType: "Hard facilities management services",
  image: fmHardImage,
  imageAlt: "Building plant room with chillers, pumps and electrical panels",
  sections: [
    {
      heading: "Hard services scope",
      items: [
        "HVAC",
        "Mechanical systems",
        "Electrical systems",
        "Plumbing",
        "BMS advisory",
        "Preventive maintenance",
        "Corrective maintenance",
      ],
    },
    {
      heading: "Planned and reactive",
      body: "Planned maintenance is scheduled against the asset register; reactive work runs through defined escalation routes. Both are reported, so the building's history stays visible.",
    },
  ],
  faqs: [
    {
      q: "What are hard facilities management services?",
      a: "Hard services are the technical, building-fabric and engineering services that keep a facility operating — HVAC, mechanical, electrical and plumbing systems, along with planned and corrective maintenance.",
    },
    {
      q: "Do you cover both planned and reactive maintenance?",
      a: "Yes. Planned maintenance is scheduled around the site's systems, and reactive work is handled through agreed escalation and reporting.",
    },
  ],
  related: [
    {
      label: "Facilities management overview",
      to: "/facilities-management",
      note: "The full FM division and how it is delivered.",
    },
    {
      label: "HVAC solutions in Karachi",
      to: "/hvac",
      note: "Equipment and materials behind HVAC maintenance.",
    },
    {
      label: "Soft facilities management services",
      to: "/soft-services",
      note: "Cleaning, security and occupant-facing services.",
    },
  ],
};

export const softServices: ServicePageData = {
  slug: "soft-services",
  path: "/soft-services",
  name: "Soft Services",
  parent: { name: "Facilities Management", path: "/facilities-management" },
  eyebrow: "Soft services",
  h1: "Soft Facilities Management Services",
  title: "Soft FM Services in Karachi | Cleaning & Security — PakBuilt",
  description:
    "Soft facilities management from PakBuilt: cleaning, security, landscaping, pest control and waste management coordination in Karachi and across Pakistan.",
  intro:
    "Soft services shape how a building feels to the people who use it. PakBuilt arranges and coordinates day-to-day site services around your facility, its hours and its occupants.",
  serviceType: "Soft facilities management services",
  image: fmSoftImage,
  imageAlt: "Clean modern commercial office lobby with planting and polished floors",
  sections: [
    {
      heading: "Soft services scope",
      items: [
        "Cleaning and housekeeping",
        "Security",
        "Landscaping",
        "Pest control",
        "Waste management",
        "Other soft FM services on request",
      ],
    },
    {
      heading: "Coordinated, not fragmented",
      body: "Rather than managing several separate providers, soft services are coordinated through one point of contact with defined scope and service levels.",
    },
  ],
  faqs: [
    {
      q: "What are soft facilities management services?",
      a: "Soft services are the non-technical, occupant-facing services in a facility — cleaning and housekeeping, security, landscaping, pest control and waste management.",
    },
    {
      q: "Can soft services be arranged alongside hard services?",
      a: "Yes. Hard and soft services can be coordinated together under one scope and one point of contact.",
    },
  ],
  related: [
    {
      label: "Facilities management overview",
      to: "/facilities-management",
      note: "How soft services sit within the FM division.",
    },
    {
      label: "Hard facilities management services",
      to: "/hard-services",
      note: "Technical systems maintenance on the same site.",
    },
    {
      label: "Facilities management consultancy",
      to: "/fm-consultancy",
      note: "Scope, SLAs and KPIs that soft services are measured against.",
    },
  ],
};

export const servicePages = [
  buildingMaterials,
  procurement,
  fitOut,
  hvac,
  mep,
  fmConsultancy,
  hardServices,
  softServices,
] as const;
