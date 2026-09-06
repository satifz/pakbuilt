import cparker from "@/assets/experience/cparker.png.asset.json";
import cushman from "@/assets/experience/cushman.png.asset.json";
import honeywell from "@/assets/experience/honeywell.png.asset.json";
import hp from "@/assets/experience/hp.png.asset.json";
import key from "@/assets/experience/key.png.asset.json";
import manpower from "@/assets/experience/manpower.png.asset.json";
import msd from "@/assets/experience/msd.png.asset.json";
import sadad from "@/assets/experience/sadad.png.asset.json";
import sap from "@/assets/experience/sap.png.asset.json";
import th from "@/assets/experience/th.png.asset.json";
import ups from "@/assets/experience/ups.png.asset.json";
import zte from "@/assets/experience/zte.png.asset.json";

/**
 * Organisations behind the founder's previous professional experience.
 *
 * HOW TO ADD OR REPLACE A LOGO
 * 1. Upload the logo file as a CDN asset pointer in `src/assets/experience/`.
 * 2. Import the pointer at the top of this file.
 * 3. Add or edit an entry below with the approved organisation name.
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
  { name: "Cushman & Wakefield", logo: cushman.url },
  { name: "Honeywell", logo: honeywell.url },
  { name: "SAP", logo: sap.url },
  { name: "HP", logo: hp.url },
  { name: "UPS", logo: ups.url },
  { name: "ZTE", logo: zte.url },
  { name: "MSD", logo: msd.url },
  { name: "Key", logo: key.url },
  { name: "Sadad", logo: sadad.url },
  { name: "Trowers & Hamlins", logo: th.url },
  { name: "Clarendon Parker International", logo: cparker.url },
  { name: "Manpower", logo: manpower.url },
];
