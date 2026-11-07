import catConstruction from "@/assets/cat-construction.jpg";
import catElectrical from "@/assets/cat-electrical.jpg";
import catFinishes from "@/assets/cat-finishes.jpg";
import catFitout from "@/assets/cat-fitout.jpg";
import catFitoutMaterials from "@/assets/cat-fitout-materials.jpg";
import catFlooring from "@/assets/cat-flooring.jpg";
import catHardware from "@/assets/cat-hardware.jpg";
import catHvac from "@/assets/cat-hvac.jpg";
import catMep from "@/assets/cat-mep.jpg";
import catPaints from "@/assets/cat-paints.jpg";
import catPlumbing from "@/assets/cat-plumbing.jpg";
import catWaterproofing from "@/assets/cat-waterproofing.jpg";

export interface ShopProduct {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  brand: string;
  spec: string;
  unit: string;
  price: number;
  originalPrice?: number;
  badge?: "Best Seller" | "New" | "Limited";
  image: string;
  features: string[];
}

export interface ShopCategory {
  slug: string;
  name: string;
  image: string;
}

export const shopCategories: ShopCategory[] = [
  { slug: "construction-materials", name: "Construction Materials", image: catConstruction },
  { slug: "finishing-materials", name: "Finishing Materials", image: catFinishes },
  { slug: "flooring", name: "Flooring", image: catFlooring },
  { slug: "ceilings-partitions", name: "Ceilings & Partitions", image: catFitout },
  { slug: "hardware-tools", name: "Hardware & Tools", image: catHardware },
  { slug: "plumbing", name: "Plumbing", image: catPlumbing },
  { slug: "electrical", name: "Electrical", image: catElectrical },
  { slug: "hvac", name: "HVAC", image: catHvac },
  { slug: "mep-supplies", name: "MEP Supplies", image: catMep },
  { slug: "waterproofing-sealants", name: "Waterproofing & Sealants", image: catWaterproofing },
  { slug: "paints-coatings", name: "Paints & Coatings", image: catPaints },
  { slug: "fit-out-materials", name: "Fit-Out Materials", image: catFitoutMaterials },
];

export const shopProducts: ShopProduct[] = [
  // ── Construction Materials ──
  {
    id: "opc-cement-50kg",
    name: "Ordinary Portland Cement (OPC)",
    category: "construction-materials",
    subcategory: "Cement",
    brand: "Lucky Cement",
    spec: "50 kg bag — Type I general purpose",
    unit: "bag",
    price: 1350,
    image: catConstruction,
    badge: "Best Seller",
    features: ["Type I general purpose", "High early strength", "Consistent setting time"],
  },
  {
    id: "sulphate-resistant-cement",
    name: "Sulphate Resistant Cement (SRC)",
    category: "construction-materials",
    subcategory: "Cement",
    brand: "DG Khan Cement",
    spec: "50 kg bag — for foundations in saline soil",
    unit: "bag",
    price: 1500,
    image: catConstruction,
    features: ["Low C3A content", "Ideal for coastal construction", "Foundation & substructure use"],
  },
  {
    id: "concrete-blocks-6inch",
    name: "Concrete Hollow Blocks — 6″",
    category: "construction-materials",
    subcategory: "Blocks & Bricks",
    brand: "PakBuilt Sourced",
    spec: "6″ × 8″ × 16″ hollow concrete block",
    unit: "piece",
    price: 85,
    badge: "Best Seller",
    image: catConstruction,
    features: ["Machine-made consistency", "Load-bearing grade", "Bulk delivery available"],
  },
  {
    id: "deformed-rebar-16mm",
    name: "Deformed Steel Rebar — 16 mm",
    category: "construction-materials",
    subcategory: "Steel & Rebar",
    brand: "Amreli Steels",
    spec: "Grade 60, 12 m length",
    unit: "ton",
    price: 265000,
    image: catConstruction,
    features: ["Grade 60 yield strength", "Cut & bend available", "Mill test certificate"],
  },
  {
    id: "crush-aggregate-3-4",
    name: "Crushed Aggregate — ¾″",
    category: "construction-materials",
    subcategory: "Aggregates",
    brand: "PakBuilt Sourced",
    spec: "Washed & graded, per cubic foot",
    unit: "cft",
    price: 95,
    image: catConstruction,
    features: ["Washed & graded", "Consistent sizing", "Bulk rates available"],
  },

  // ── Finishing Materials ──
  {
    id: "ceramic-wall-tile-30x60",
    name: "Ceramic Wall Tile — 30×60 cm",
    category: "finishing-materials",
    subcategory: "Tiles",
    brand: "Master Tiles",
    spec: "Glossy finish, box of 6 tiles (1.08 sqm)",
    unit: "box",
    price: 1200,
    image: catFinishes,
    features: ["Glossy finish", "Low water absorption", "Rectified edges"],
  },
  {
    id: "tile-adhesive-20kg",
    name: "Tile Adhesive — Standard Set",
    category: "finishing-materials",
    subcategory: "Adhesives & Grouts",
    brand: "Bostik",
    spec: "20 kg bag — grey, C1 rated",
    unit: "bag",
    price: 750,
    badge: "Best Seller",
    image: catFinishes,
    features: ["C1 rated bonding", "Interior & exterior use", "12-hour open time"],
  },
  {
    id: "gypsum-plaster-40kg",
    name: "Gypsum Plaster — Finish Coat",
    category: "finishing-materials",
    subcategory: "Plaster & Skim",
    brand: "Knauf",
    spec: "40 kg bag — 2 mm skim finish",
    unit: "bag",
    price: 1800,
    badge: "New",
    image: catFinishes,
    features: ["Smooth skim finish", "Low shrinkage", "Ready to paint in 7 days"],
  },

  // ── Flooring ──
  {
    id: "porcelain-floor-60x60",
    name: "Matt Porcelain Floor Tile — 60×60 cm",
    category: "flooring",
    subcategory: "Porcelain & Ceramic",
    brand: "RAK Ceramics",
    spec: "Matt finish, R10 anti-slip, box of 4 (1.44 sqm)",
    unit: "box",
    price: 2800,
    originalPrice: 3200,
    image: catFlooring,
    features: ["R10 anti-slip rating", "Frost resistant", "Commercial traffic grade"],
  },
  {
    id: "lvt-click-plank",
    name: "Luxury Vinyl Plank — Click Lock",
    category: "flooring",
    subcategory: "Vinyl / LVT",
    brand: "Tarkett",
    spec: "1220 × 180 mm, 4.5 mm thick, box of 8 (1.76 sqm)",
    unit: "box",
    price: 4500,
    badge: "New",
    image: catFlooring,
    features: ["Click-lock installation", "0.55 mm wear layer", "Waterproof core"],
  },
  {
    id: "carpet-tile-50x50",
    name: "Office Carpet Tile — 50×50 cm",
    category: "flooring",
    subcategory: "Carpet Tiles",
    brand: "Interface",
    spec: "Tufted loop pile, box of 20 (5 sqm)",
    unit: "box",
    price: 7500,
    image: catFlooring,
    features: ["Tufted loop pile", "Bitumen backing", "Easy replacement"],
  },

  // ── Ceilings & Partitions ──
  {
    id: "mineral-fibre-tile-600",
    name: "Mineral Fibre Ceiling Tile — 600×600",
    category: "ceilings-partitions",
    subcategory: "Mineral Fibre Tiles",
    brand: "Armstrong",
    spec: "Tegular edge, NRC 0.55, box of 16",
    unit: "box",
    price: 4200,
    badge: "Best Seller",
    image: catFitout,
    features: ["NRC 0.55 acoustics", "Humidity resistant", "Class A fire rating"],
  },
  {
    id: "gypsum-board-12mm",
    name: "Gypsum Board — 12.5 mm Standard",
    category: "ceilings-partitions",
    subcategory: "Gypsum Board",
    brand: "Gyproc",
    spec: "1200 × 2400 mm, tapered edge",
    unit: "sheet",
    price: 950,
    image: catFitout,
    features: ["Tapered edge for flush joints", "Standard fire performance", "Easy score-and-snap"],
  },
  {
    id: "metal-stud-75mm",
    name: "Metal Stud — 75 mm C-Channel",
    category: "ceilings-partitions",
    subcategory: "Metal Framing",
    brand: "PakBuilt Sourced",
    spec: "0.5 mm gauge, 3 m length",
    unit: "piece",
    price: 320,
    image: catFitout,
    features: ["0.5 mm galvanised steel", "Pre-punched service holes", "Compatible with standard track"],
  },

  // ── Hardware & Tools ──
  {
    id: "anchor-bolt-m12",
    name: "Wedge Anchor Bolt — M12×100",
    category: "hardware-tools",
    subcategory: "Fixings & Anchors",
    brand: "Hilti",
    spec: "Stainless steel A4, pack of 25",
    unit: "pack",
    price: 3800,
    image: catHardware,
    features: ["A4 stainless steel", "High pull-out values", "Approved for cracked concrete"],
  },
  {
    id: "rotary-hammer-drill",
    name: "SDS-Plus Rotary Hammer — 800 W",
    category: "hardware-tools",
    subcategory: "Power Tools",
    brand: "Bosch",
    spec: "3-mode, 2.7 J impact energy",
    unit: "unit",
    price: 24500,
    originalPrice: 28000,
    badge: "Limited",
    image: catHardware,
    features: ["3-mode operation", "Anti-vibration system", "Quick-change chuck"],
  },

  // ── Plumbing ──
  {
    id: "ppr-pipe-25mm",
    name: "PPR Pipe — 25 mm (PN20)",
    category: "plumbing",
    subcategory: "PPR & UPVC",
    brand: "Kalde",
    spec: "4 m length, hot & cold rated",
    unit: "piece",
    price: 480,
    badge: "Best Seller",
    image: catPlumbing,
    features: ["PN20 pressure rating", "Hot & cold water use", "Fusion welded joints"],
  },
  {
    id: "ball-valve-brass-3-4",
    name: "Brass Ball Valve — ¾″",
    category: "plumbing",
    subcategory: "Valves",
    brand: "Giacomini",
    spec: "Full bore, chrome plated handle",
    unit: "piece",
    price: 850,
    image: catPlumbing,
    features: ["Full bore flow", "400 PSI working pressure", "Chrome handle"],
  },
  {
    id: "pedestal-basin",
    name: "Pedestal Wash Basin — White",
    category: "plumbing",
    subcategory: "Sanitaryware",
    brand: "Porta",
    spec: "550 mm width, complete with pedestal",
    unit: "set",
    price: 5500,
    image: catPlumbing,
    features: ["Vitreous china", "Overflow included", "Pre-drilled tap hole"],
  },

  // ── Electrical ──
  {
    id: "single-core-cable-6mm",
    name: "Single Core Cable — 6 sq mm",
    category: "electrical",
    subcategory: "Cables",
    brand: "Pakistan Cables",
    spec: "PVC insulated, 90 m coil",
    unit: "coil",
    price: 12500,
    badge: "Best Seller",
    image: catElectrical,
    features: ["99.9% copper conductor", "Flame retardant PVC", "PSQCA certified"],
  },
  {
    id: "db-board-12way",
    name: "Distribution Board — 12-Way",
    category: "electrical",
    subcategory: "Distribution Boards",
    brand: "Schneider Electric",
    spec: "Flush mount, IP40, with door",
    unit: "unit",
    price: 4800,
    image: catElectrical,
    features: ["IP40 protection", "DIN rail mounting", "Knockouts for cable entry"],
  },
  {
    id: "led-panel-light-60x60",
    name: "LED Panel Light — 60×60 cm, 40 W",
    category: "electrical",
    subcategory: "Lighting",
    brand: "Philips",
    spec: "4000 K neutral white, 4000 lm",
    unit: "unit",
    price: 3200,
    originalPrice: 3800,
    badge: "New",
    image: catElectrical,
    features: ["4000 lm output", "Flicker-free driver", "Ceiling grid compatible"],
  },

  // ── HVAC ──
  {
    id: "split-ac-1-5ton",
    name: "Inverter Split AC — 1.5 Ton",
    category: "hvac",
    subcategory: "Split & VRF Units",
    brand: "Daikin",
    spec: "Wall-mounted, R-32 refrigerant",
    unit: "unit",
    price: 135000,
    originalPrice: 148000,
    image: catHvac,
    features: ["Inverter compressor", "R-32 eco refrigerant", "Wi-Fi control ready"],
  },
  {
    id: "gi-duct-rect",
    name: "GI Rectangular Duct — 600×300 mm",
    category: "hvac",
    subcategory: "Ducting",
    brand: "PakBuilt Sourced",
    spec: "0.8 mm gauge, 1.2 m section",
    unit: "piece",
    price: 2800,
    image: catHvac,
    features: ["0.8 mm galvanised steel", "TDF flanged ends", "Custom sizes on request"],
  },
  {
    id: "duct-insulation-25mm",
    name: "Elastomeric Duct Insulation — 25 mm",
    category: "hvac",
    subcategory: "Insulation",
    brand: "Armaflex",
    spec: "Sheet roll, 1 m wide × 10 m",
    unit: "roll",
    price: 8500,
    badge: "Best Seller",
    image: catHvac,
    features: ["Closed-cell structure", "Low thermal conductivity", "Self-adhesive option"],
  },

  // ── MEP Supplies ──
  {
    id: "pipe-clamp-unistrut",
    name: "Pipe Clamp with Unistrut Channel",
    category: "mep-supplies",
    subcategory: "Supports & Brackets",
    brand: "Unistrut",
    spec: "41×41 mm channel, 3 m + clamps pack",
    unit: "set",
    price: 2200,
    image: catMep,
    features: ["Hot-dip galvanised", "Pre-assembled clamp sets", "Load rated"],
  },
  {
    id: "fire-collar-110mm",
    name: "Intumescent Fire Collar — 110 mm",
    category: "mep-supplies",
    subcategory: "Fire Stopping",
    brand: "Promat",
    spec: "2-hour rated, for plastic pipe penetrations",
    unit: "piece",
    price: 1800,
    badge: "New",
    image: catMep,
    features: ["2-hour fire rating", "Fits 110 mm uPVC soil pipes", "Retro-fit installation"],
  },

  // ── Waterproofing & Sealants ──
  {
    id: "bitumen-membrane-4mm",
    name: "APP Modified Bitumen Membrane — 4 mm",
    category: "waterproofing-sealants",
    subcategory: "Membranes",
    brand: "Sika",
    spec: "1 m × 10 m roll, torch-applied",
    unit: "roll",
    price: 4500,
    badge: "Best Seller",
    image: catWaterproofing,
    features: ["Torch-on application", "Root resistant", "UV stable top surface"],
  },
  {
    id: "acrylic-sealant-white",
    name: "Acrylic Sealant — White, 280 ml",
    category: "waterproofing-sealants",
    subcategory: "Sealants",
    brand: "Henkel",
    spec: "Paintable, interior/exterior",
    unit: "tube",
    price: 350,
    image: catWaterproofing,
    features: ["Paintable after 1 hour", "Low VOC", "Gap-filling up to 25 mm"],
  },

  // ── Paints & Coatings ──
  {
    id: "emulsion-paint-white-20l",
    name: "Interior Emulsion — White, 20 L",
    category: "paints-coatings",
    subcategory: "Emulsions",
    brand: "ICI Dulux",
    spec: "Matt finish, washable, 140 sqm/coat",
    unit: "bucket",
    price: 8500,
    originalPrice: 9200,
    badge: "Best Seller",
    image: catPaints,
    features: ["Low odour formula", "Washable finish", "140 sqm coverage per coat"],
  },
  {
    id: "enamel-paint-gloss-4l",
    name: "Synthetic Enamel — Gloss, 4 L",
    category: "paints-coatings",
    subcategory: "Enamels",
    brand: "Berger",
    spec: "High gloss, interior/exterior woodwork & metal",
    unit: "tin",
    price: 3200,
    image: catPaints,
    features: ["High gloss finish", "Rust inhibitive pigments", "Tintable to any shade"],
  },

  // ── Fit-Out Materials ──
  {
    id: "laminate-sheet-8x4",
    name: "HPL Laminate Sheet — 8′×4′",
    category: "fit-out-materials",
    subcategory: "Laminates & MDF",
    brand: "Formica",
    spec: "0.8 mm, post-forming grade",
    unit: "sheet",
    price: 3800,
    image: catFitoutMaterials,
    features: ["Post-forming grade", "Scratch resistant surface", "Wide colour range"],
  },
  {
    id: "flush-door-32mm",
    name: "Flush Door Blank — 32 mm",
    category: "fit-out-materials",
    subcategory: "Doors",
    brand: "PakBuilt Sourced",
    spec: "900 × 2100 mm, semi-solid core",
    unit: "piece",
    price: 4200,
    image: catFitoutMaterials,
    features: ["Semi-solid core", "Lippable edges", "Ready for laminate or veneer"],
  },
];

export function formatPrice(price: number): string {
  return `PKR ${price.toLocaleString("en-PK")}`;
}
