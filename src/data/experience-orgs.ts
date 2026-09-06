/**
 * Organisations behind the founder's previous professional experience.
 *
 * HOW TO ADD OR REPLACE A LOGO
 * 1. Add the logo file to `public/experience/` (served from the site itself).
 * 2. Add or edit an entry below with the approved organisation name and path.
 * 3. Tune `widthPercent` until the mark looks the same visual weight as its
 *    neighbours (wide wordmarks need a large share, compact square marks a small
 *    one). Omit it to use the full tile width.
 *
 * Entries without a `logo` render a neutral placeholder tile. No organisation
 * name should be added here unless it has been approved.
 */
export interface ExperienceOrg {
  /** Approved organisation name. */
  name: string;
  /** Logo image URL. Leave undefined to render the placeholder tile. */
  logo?: string;
  /** Rendered width as a percentage of the tile, for optical size balance. */
  widthPercent?: number;
}

export const experienceOrgs: ExperienceOrg[] = [
  { name: "Cushman & Wakefield", logo: "/experience/cushman.png", widthPercent: 74 },
  { name: "Honeywell", logo: "/experience/honeywell.png", widthPercent: 82 },
  { name: "SAP", logo: "/experience/sap.png", widthPercent: 36 },
  { name: "HP", logo: "/experience/hp.png", widthPercent: 20 },
  { name: "UPS", logo: "/experience/ups.png", widthPercent: 24 },
  { name: "ZTE", logo: "/experience/zte.png", widthPercent: 37 },
  { name: "MSD", logo: "/experience/msd.png", widthPercent: 47 },
  { name: "Key", logo: "/experience/key.png", widthPercent: 33 },
  { name: "Sadad", logo: "/experience/sadad.png", widthPercent: 49 },
  { name: "Trowers & Hamlins", logo: "/experience/th.png", widthPercent: 20 },
  {
    name: "Clarendon Parker International",
    logo: "/experience/cparker.png",
    widthPercent: 95,
  },
  { name: "Manpower", logo: "/experience/manpower.png", widthPercent: 23 },
  { name: "MACRO", logo: "/experience/macro.png", widthPercent: 100 },
];
