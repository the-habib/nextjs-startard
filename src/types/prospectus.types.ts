export type Prospectus = {
  tier: string;
  slug: string;
  abbr: string;
  name: string;
  city: string;
  founded?: string;
  type?: string;
  palette?: { primary: string; secondary: string };
  snapshot: string[];
  facilities: string[];
  scholarships: string[];
  programs: string[];
  research: string[];
  outcomes: string[];
  links?: { admissions?: string; scholarships?: string };
};

export type ProspectusLabels = {
  title?: string;
  subtitle?: string;
  sections?: {
    snapshot?: string;
    facilities?: string;
    scholarships?: string;
    programs?: string;
    research?: string;
    outcomes?: string;
  };
};
