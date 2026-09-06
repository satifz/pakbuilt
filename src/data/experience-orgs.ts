/**
 * Organisations behind the founder's previous professional experience.
 *
 * HOW TO ADD A REAL LOGO
 * 1. Drop the logo file into `src/assets/experience/` (SVG or transparent PNG/WebP).
 * 2. Import it at the top of this file, e.g.
 *      import acmeLogo from "@/assets/experience/acme.svg";
 * 3. Set `logo: acmeLogo` on the matching entry below and put the real
 *    organisation name in `name`.
 *
 * Entries without a `logo` render a neutral placeholder tile, so the section
 * stays presentable until approved assets are supplied. No organisation name
 * should be added here unless it has been approved.
 */
export interface ExperienceOrg {
  /** Approved organisation name. Placeholder text until provided. */
  name: string;
  /** Imported logo asset. Leave undefined to render the placeholder tile. */
  logo?: string;
}

export const experienceOrgs: ExperienceOrg[] = [
  { name: "Organisation 01" },
  { name: "Organisation 02" },
  { name: "Organisation 03" },
  { name: "Organisation 04" },
  { name: "Organisation 05" },
  { name: "Organisation 06" },
];
