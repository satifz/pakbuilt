import catConstruction from "@/assets/cat-construction.jpg";
import catFinishes from "@/assets/cat-finishes.jpg";
import catFitout from "@/assets/cat-fitout.jpg";
import catFlooring from "@/assets/cat-flooring.jpg";
import catHvac from "@/assets/cat-hvac.jpg";
import catMep from "@/assets/cat-mep.jpg";

/**
 * Catalogue data layer.
 *
 * Everything the product pages render comes from these typed structures, so the
 * same components can later be fed by a database/API without page redesigns.
 */

export type CategoryGroup = "Materials" | "Finishes" | "Building Services" | "Fit-Out";

export interface Category {
  slug: string;
  name: string;
  group: CategoryGroup;
  blurb: string;
  image: string;
  subcategories: string[];
}

export interface Product {
  slug: string;
  name: string;
  categorySlug: string;
  /** Short specification line — kept generic until real SKUs are loaded. */
  spec: string;
  /** Placeholder until confirmed supplier brands are added. */
  brand: string;
  availability: "Available to order" | "Sourced on request";
  image: string;
}

export const categories: Category[] = [
  {
    slug: "construction-materials",
    name: "Construction Materials",
    group: "Materials",
    blurb: "Cement, blocks, bricks, aggregates, steel and structural basics.",
    image: catConstruction,
    subcategories: ["Cement", "Blocks & Bricks", "Steel & Rebar", "Aggregates"],
  },
  {
    slug: "finishing-materials",
    name: "Finishing Materials",
    group: "Finishes",
    blurb: "Tiles, adhesives, plasters, boards and surface finishes.",
    image: catFinishes,
    subcategories: ["Tiles", "Adhesives & Grouts", "Plaster & Skim", "Boards"],
  },
  {
    slug: "flooring",
    name: "Flooring",
    group: "Finishes",
    blurb: "Porcelain, vinyl, laminate, engineered wood and carpet tiles.",
    image: catFlooring,
    subcategories: ["Porcelain & Ceramic", "Vinyl / LVT", "Laminate", "Carpet Tiles"],
  },
  {
    slug: "ceilings-partitions",
    name: "Ceilings & Partitions",
    group: "Fit-Out",
    blurb: "Grid ceilings, gypsum systems, framing and glass partitions.",
    image: catFitout,
    subcategories: ["Mineral Fibre Tiles", "Gypsum Board", "Metal Framing", "Glass Partitions"],
  },
  {
    slug: "hardware-tools",
    name: "Hardware & Tools",
    group: "Materials",
    blurb: "Fixings, ironmongery, power tools and site consumables.",
    image: catConstruction,
    subcategories: ["Fixings & Anchors", "Ironmongery", "Power Tools", "Consumables"],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    group: "Building Services",
    blurb: "Pipes, fittings, valves, pumps and sanitary requirements.",
    image: catMep,
    subcategories: ["PPR & UPVC", "Valves", "Pumps", "Sanitaryware"],
  },
  {
    slug: "electrical",
    name: "Electrical",
    group: "Building Services",
    blurb: "Cables, conduits, distribution, switchgear and lighting.",
    image: catMep,
    subcategories: ["Cables", "Conduit & Trunking", "Distribution Boards", "Lighting"],
  },
  {
    slug: "hvac",
    name: "HVAC",
    group: "Building Services",
    blurb: "Air conditioning units, ducting, insulation and accessories.",
    image: catHvac,
    subcategories: ["Split & VRF Units", "Ducting", "Grilles & Diffusers", "Insulation"],
  },
  {
    slug: "mep-supplies",
    name: "MEP Supplies",
    group: "Building Services",
    blurb: "Mechanical, electrical and plumbing support materials.",
    image: catMep,
    subcategories: ["Supports & Brackets", "Fire Stopping", "Controls", "Spares"],
  },
  {
    slug: "waterproofing-sealants",
    name: "Waterproofing & Sealants",
    group: "Finishes",
    blurb: "Membranes, coatings, sealants, tapes and admixtures.",
    image: catFinishes,
    subcategories: ["Membranes", "Liquid Coatings", "Sealants", "Admixtures"],
  },
  {
    slug: "paints-coatings",
    name: "Paints & Coatings",
    group: "Finishes",
    blurb: "Interior, exterior, protective and specialist coatings.",
    image: catFinishes,
    subcategories: ["Emulsions", "Enamels", "Primers", "Protective Coatings"],
  },
  {
    slug: "fit-out-materials",
    name: "Fit-Out Materials",
    group: "Fit-Out",
    blurb: "Joinery boards, laminates, cladding and interior systems.",
    image: catFitout,
    subcategories: ["Laminates & MDF", "Wall Cladding", "Doors", "Interior Systems"],
  },
];

/** Demo/sample entries only — replace with real SKUs when catalogue data exists. */
export const products: Product[] = [
  {
    slug: "sample-opc-cement",
    name: "Ordinary Portland Cement",
    categorySlug: "construction-materials",
    spec: "Bagged OPC, standard grades — bulk quantities on request",
    brand: "Brand to be confirmed",
    availability: "Available to order",
    image: catConstruction,
  },
  {
    slug: "sample-deformed-rebar",
    name: "Deformed Steel Bar",
    categorySlug: "construction-materials",
    spec: "Common structural diameters, cut and bent on request",
    brand: "Brand to be confirmed",
    availability: "Sourced on request",
    image: catConstruction,
  },
  {
    slug: "sample-porcelain-tile",
    name: "Large Format Porcelain Tile",
    categorySlug: "flooring",
    spec: "Matt / polished finishes, project quantities",
    brand: "Brand to be confirmed",
    availability: "Available to order",
    image: catFlooring,
  },
  {
    slug: "sample-lvt-flooring",
    name: "Luxury Vinyl Tile (LVT)",
    categorySlug: "flooring",
    spec: "Commercial wear layers, glue-down and click systems",
    brand: "Brand to be confirmed",
    availability: "Sourced on request",
    image: catFlooring,
  },
  {
    slug: "sample-ceiling-tile",
    name: "Mineral Fibre Ceiling Tile & Grid",
    categorySlug: "ceilings-partitions",
    spec: "600x600 modules with exposed T-grid system",
    brand: "Brand to be confirmed",
    availability: "Available to order",
    image: catFitout,
  },
  {
    slug: "sample-gypsum-board",
    name: "Gypsum Board & Metal Stud",
    categorySlug: "ceilings-partitions",
    spec: "Standard, moisture and fire-rated boards with framing",
    brand: "Brand to be confirmed",
    availability: "Available to order",
    image: catFitout,
  },
  {
    slug: "sample-split-ac",
    name: "Split Air Conditioning Unit",
    categorySlug: "hvac",
    spec: "Wall-mounted and cassette types, capacity per design",
    brand: "Brand to be confirmed",
    availability: "Sourced on request",
    image: catHvac,
  },
  {
    slug: "sample-gi-ducting",
    name: "GI Ducting & Accessories",
    categorySlug: "hvac",
    spec: "Fabricated ducting with grilles, diffusers and insulation",
    brand: "Brand to be confirmed",
    availability: "Sourced on request",
    image: catHvac,
  },
  {
    slug: "sample-ppr-pipe",
    name: "PPR Pipes & Fittings",
    categorySlug: "plumbing",
    spec: "Hot and cold water systems, full fitting range",
    brand: "Brand to be confirmed",
    availability: "Available to order",
    image: catMep,
  },
  {
    slug: "sample-power-cable",
    name: "Building Wire & Power Cable",
    categorySlug: "electrical",
    spec: "Single core and multicore, sizes as per load schedule",
    brand: "Brand to be confirmed",
    availability: "Available to order",
    image: catMep,
  },
  {
    slug: "sample-waterproof-membrane",
    name: "Waterproofing Membrane",
    categorySlug: "waterproofing-sealants",
    spec: "Liquid applied and sheet systems for roofs and wet areas",
    brand: "Brand to be confirmed",
    availability: "Sourced on request",
    image: catFinishes,
  },
  {
    slug: "sample-emulsion-paint",
    name: "Interior Emulsion Paint",
    categorySlug: "paints-coatings",
    spec: "Matt and silk finishes, tinted to selected shades",
    brand: "Brand to be confirmed",
    availability: "Available to order",
    image: catFinishes,
  },
];

export const projectTypes = [
  "Residential",
  "Commercial",
  "Industrial",
  "Fit-Out",
  "Facilities Management",
  "Other",
] as const;

export const faqs = [
  {
    q: "Do you supply small quantities or only project volumes?",
    a: "Both. A homeowner needing a single material and a contractor working from a full BOQ are handled through the same process — the difference is scale, not attention.",
  },
  {
    q: "Can you quote directly from our BOQ?",
    a: "Yes. Send your BOQ, specification or material list and we will revert with practical options and a quotation against your line items.",
  },
  {
    q: "What if a product is not in your listed categories?",
    a: "The categories show where we focus, not a hard limit. If it is construction, fit-out or building-services related, send the requirement and we will look into sourcing it.",
  },
  {
    q: "Can you supply imported products?",
    a: "PakBuilt works on both local and international sourcing. Imported items depend on lead time, quantity and specification, which we confirm before quoting.",
  },
  {
    q: "How do you handle delivery?",
    a: "Delivery is coordinated as part of the agreed supply — location, access and timing are confirmed with you before dispatch.",
  },
  {
    q: "Are you a new company?",
    a: "Yes, PakBuilt is a new business. The company is new; the construction, fit-out, project management and facilities-management experience behind it is not.",
  },
];
