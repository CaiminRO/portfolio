export interface Skill {
  name: string;
  category: string;
}

export interface BasePortfolio {
  _id: string;
  title: string;
  slug: string;
  stub: string;
  description: string;
  skills: Skill[];
  repository?: string;
  dateStart: string;       // YYYY-MM-DD
  dateCompleted?: string;  // YYYY-MM-DD
}

export interface Project extends BasePortfolio {
  type: "project";
  link?: string;
  image?: string;          // URL or reference
}

export interface GameMod extends BasePortfolio {
  type: "mod";
  game: string;
  downloadLink: string[];  // array of links
  image?: string;          // URL or reference
}

export type PortfolioItem = Project | GameMod;
