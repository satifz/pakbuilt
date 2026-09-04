import {
  Boxes,
  ClipboardList,
  Building2,
  Wind,
  Wrench,
  Globe2,
  Home,
  Store,
  HardHat,
  PanelsTopLeft,
  Factory,
  Settings2,
  Handshake,
  FileSpreadsheet,
  BrainCircuit,
  MessageSquare,
  Network,
  type LucideIcon,
} from "lucide-react";

export interface Solution {
  id: string;
  index: string;
  title: string;
  body: string;
  icon: LucideIcon;
}

export const solutions: Solution[] = [
  {
    id: "building-materials",
    index: "01",
    title: "Building Materials",
    body: "Construction and finishing materials for residential, commercial and project requirements.",
    icon: Boxes,
  },
  {
    id: "project-procurement",
    index: "02",
    title: "Project Procurement",
    body: "Source materials based on your BOQ, specifications, quantities and budget.",
    icon: ClipboardList,
  },
  {
    id: "fit-out",
    index: "03",
    title: "Fit-Out Solutions",
    body: "Materials and solutions for commercial, residential and interior fit-out requirements.",
    icon: Building2,
  },
  {
    id: "hvac",
    index: "04",
    title: "HVAC Solutions",
    body: "HVAC equipment, accessories, materials and related building-services requirements.",
    icon: Wind,
  },
  {
    id: "mep",
    index: "05",
    title: "MEP & Building Services",
    body: "Mechanical, electrical and building-services products and supplies.",
    icon: Wrench,
  },
  {
    id: "trading",
    index: "06",
    title: "Trading & Sourcing",
    body: "Local and international sourcing opportunities for construction-related products.",
    icon: Globe2,
  },
];

export const industries = [
  {
    id: "residential",
    title: "Residential",
    body: "For homeowners, renovations and new construction.",
    icon: Home,
  },
  {
    id: "commercial",
    title: "Commercial",
    body: "Offices, retail, hospitality and commercial spaces.",
    icon: Store,
  },
  {
    id: "construction",
    title: "Construction",
    body: "Contractors, builders and developers.",
    icon: HardHat,
  },
  {
    id: "fit-out",
    title: "Fit-Out",
    body: "Interior contractors and project teams.",
    icon: PanelsTopLeft,
  },
  {
    id: "industrial",
    title: "Industrial",
    body: "Factories, warehouses and industrial facilities.",
    icon: Factory,
  },
  {
    id: "fm",
    title: "Facilities Management",
    body: "Building operations, maintenance and technical requirements.",
    icon: Settings2,
  },
];

export const benefits = [
  {
    title: "Practical Advice",
    body: "We focus on what actually works for your requirement.",
    icon: Handshake,
  },
  {
    title: "Professional Procurement",
    body: "A structured approach to sourcing and quotations.",
    icon: FileSpreadsheet,
  },
  {
    title: "Technical Understanding",
    body: "Our background goes beyond simply selling materials.",
    icon: BrainCircuit,
  },
  {
    title: "Reliable Communication",
    body: "Clear communication from enquiry to delivery.",
    icon: MessageSquare,
  },
  {
    title: "One Growing Network",
    body: "Access to products, suppliers and construction solutions through one point of contact.",
    icon: Network,
  },
];

export const processSteps = [
  {
    index: "01",
    title: "Tell Us What You Need",
    body: "Send us your requirement, product list or BOQ.",
  },
  {
    index: "02",
    title: "We Source",
    body: "We identify suitable products and suppliers.",
  },
  {
    index: "03",
    title: "You Compare",
    body: "Receive practical options and a quotation.",
  },
  {
    index: "04",
    title: "We Supply",
    body: "Coordinate supply and delivery according to the agreed requirement.",
  },
];

export const valueStrip = [
  "Reliable Supply",
  "Project Procurement",
  "Technical Understanding",
  "Competitive Sourcing",
  "Professional Service",
];
