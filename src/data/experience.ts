import indCommercial from "@/assets/ind-commercial.jpg";
import indHospitality from "@/assets/ind-hospitality.jpg";
import indIndustrial from "@/assets/ind-industrial.jpg";
import indResidential from "@/assets/ind-residential.jpg";
import indRetail from "@/assets/ind-retail.jpg";
import catFitout from "@/assets/cat-fitout.jpg";

/**
 * "What are you building?" data layer.
 *
 * Each building type maps to real category slugs from the catalogue and real
 * solution ids from the content layer, so the selector genuinely changes what
 * is displayed. No claims, clients or statistics are implied here.
 */
export interface BuildingType {
  id: string;
  title: string;
  blurb: string;
  image: string;
  categorySlugs: string[];
  solutionIds: string[];
}

export const buildingTypes: BuildingType[] = [
  {
    id: "commercial",
    title: "Commercial",
    blurb: "Offices, mixed-use and commercial shells needing coordinated finishes and services.",
    image: indCommercial,
    categorySlugs: ["ceilings-partitions", "flooring", "electrical", "hvac"],
    solutionIds: ["fit-out", "hvac", "project-procurement"],
  },
  {
    id: "residential",
    title: "Residential",
    blurb: "New builds, extensions and renovations, from single materials to a full list.",
    image: indResidential,
    categorySlugs: ["construction-materials", "finishing-materials", "plumbing", "paints-coatings"],
    solutionIds: ["building-materials", "project-procurement"],
  },
  {
    id: "industrial",
    title: "Industrial",
    blurb: "Warehouses, factories and plant rooms where structure and services lead the spec.",
    image: indIndustrial,
    categorySlugs: ["construction-materials", "mep-supplies", "hvac", "waterproofing-sealants"],
    solutionIds: ["mep", "project-procurement", "trading"],
  },
  {
    id: "hospitality",
    title: "Hospitality",
    blurb: "Hotels and F&B spaces where finish quality and delivery timing both matter.",
    image: indHospitality,
    categorySlugs: ["flooring", "fit-out-materials", "finishing-materials", "hvac"],
    solutionIds: ["fit-out", "building-materials", "hvac"],
  },
  {
    id: "retail",
    title: "Retail",
    blurb: "Shops and showrooms fitted out to a brand standard on a short programme.",
    image: indRetail,
    categorySlugs: ["fit-out-materials", "flooring", "electrical", "ceilings-partitions"],
    solutionIds: ["fit-out", "project-procurement"],
  },
  {
    id: "office",
    title: "Office",
    blurb: "Workplace fit-outs: partitions, ceilings, flooring and building services together.",
    image: indCommercial,
    categorySlugs: ["ceilings-partitions", "flooring", "hvac", "electrical"],
    solutionIds: ["fit-out", "hvac", "mep"],
  },
  {
    id: "other",
    title: "Other",
    blurb: "Something else? Send the requirement and we will look at how to source it.",
    image: catFitout,
    categorySlugs: ["construction-materials", "hardware-tools", "mep-supplies"],
    solutionIds: ["trading", "project-procurement"],
  },
];

export const projectFilters = [
  "All",
  "Commercial",
  "Residential",
  "Industrial",
  "Fit-Out",
] as const;

export interface ProjectEntry {
  slug: string;
  title: string;
  category: string;
  location: string;
  type: string;
  image: string;
}

/**
 * Intentionally empty: PakBuilt is a new company and no completed project
 * references have been confirmed yet. The showcase renders its empty state
 * until real entries are added here.
 */
export const projects: ProjectEntry[] = [];
