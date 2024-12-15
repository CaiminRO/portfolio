import socials from "./data.json";
import { SocialAccounts } from "./type";

const socialAccounts: SocialAccounts = socials;

export const Socials = {
  GitHub: socialAccounts.GitHub
    ? `https://github.com/${socialAccounts.GitHub}`
    : "",
  LinkedIn: socialAccounts.LinkedIn
    ? `https://www.linkedin.com/in/${socialAccounts.LinkedIn}`
    : "",
  NexusMods: socialAccounts.NexusMods
    ? `https://next.nexusmods.com/profile/${socialAccounts.NexusMods}`
    : "",
  CurseForge: socialAccounts.CurseForge
    ? `https://www.curseforge.com/members/${socialAccounts.CurseForge}`
    : "",
};
