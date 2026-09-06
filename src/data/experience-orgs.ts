/**
 * Organisations behind the founder's previous professional experience.
 *
 * HOW TO ADD OR REPLACE A LOGO
 * 1. Add the logo file to `public/experience/` (served from the site itself).
 * 2. Add or edit an entry below with the approved organisation name and path.
 *
 * Entries without a `logo` render a neutral placeholder tile. No organisation
 * name should be added here unless it has been approved.
 */
export interface ExperienceOrg {
  /** Approved organisation name. */
  name: string;
  /** Logo image URL. Leave undefined to render the placeholder tile. */
  logo?: string;
}

export const experienceOrgs: ExperienceOrg[] = [
  { name: "Cushman & Wakefield", logo: "/experience/cushman.png" },
  { name: "Honeywell", logo: "/experience/honeywell.png" },
  { name: "SAP", logo: "/experience/sap.png" },
  { name: "HP", logo: "/experience/hp.png" },
  { name: "UPS", logo: "/experience/ups.png" },
  { name: "ZTE", logo: "/experience/zte.png" },
  { name: "MSD", logo: "/experience/msd.png" },
  { name: "Key", logo: "/experience/key.png" },
  { name: "Sadad", logo: "/experience/sadad.png" },
  { name: "Trowers & Hamlins", logo: "/experience/th.png" },
  { name: "Clarendon Parker International", logo: "/experience/cparker.png" },
  { name: "Manpower", logo: "/experience/manpower.png" },
];
