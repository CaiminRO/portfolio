import { footerStyles } from "@/styles/components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Personal, Socials } from "@/config";
import { SiCurseforge, SiNexusmods } from "react-icons/si";

export default function Footer() {
  const yearStart = 2024;
  const yearNow = new Date().getFullYear();

  const copyrightDate: string =
    yearStart === yearNow ? String(yearStart) : `${yearStart}-${yearNow}`;

  return (
    <footer className={footerStyles.outer}>
      <div className={footerStyles.mainContainer}>
        <div className={footerStyles.socialContainer}>
          <a
            href={Socials.LinkedIn}
            target="_blank"
            className={footerStyles.socialLink}
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href={Socials.GitHub}
            target="_blank"
            className={footerStyles.socialLink}
          >
            <FaGithub size={24} />
          </a>
          <a
            href={Socials.NexusMods}
            target="_blank"
            className={footerStyles.socialLink}
          >
            <SiNexusmods size={24} />
          </a>
          <a
            href={Socials.CurseForge}
            target="_blank"
            className={footerStyles.socialLink}
          >
            <SiCurseforge size={24} />
          </a>
        </div>

        <p className={footerStyles.techStack}>
          Built with Next.js, React, TypeScript, and Tailwind CSS.
        </p>
        <p className={footerStyles.copyright}>
          &copy; {copyrightDate} {Personal.FullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
