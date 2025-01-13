import { footerStyles } from "@/styles/components";
import { Personal, Socials } from "@/config";
import LinkIcon from "@/components/common/LinkIcon";

export default function Footer() {
  const yearStart = 2024;
  const yearNow = new Date().getFullYear();

  const copyrightDate: string =
    yearStart === yearNow ? String(yearStart) : `${yearStart}-${yearNow}`;

  return (
    <footer className={footerStyles.outer}>
      <div className={footerStyles.mainContainer}>
        <div className={footerStyles.socialContainer}>
          <LinkIcon url={Socials.LinkedIn} size={24} />
          <LinkIcon url={Socials.GitHub} size={24} />
          <LinkIcon url={Socials.NexusMods} size={24} />
          <LinkIcon url={Socials.CurseForge} size={24} />
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
