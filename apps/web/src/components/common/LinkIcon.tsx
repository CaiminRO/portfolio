import { FaSteam } from "react-icons/fa6";
import { SiCurseforge, SiNexusmods } from "react-icons/si";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { linkIconStyles } from "@/styles/components";

interface LinkIconProps {
  url: string;
  size?: number;
  styles?: string;
}

export default function LinkIcon({ url, size = 20, styles = linkIconStyles.container }: LinkIconProps) {
  const lowerUrl = url.toLowerCase();

  const iconMappings = [
    { keyword: 'steamcommunity.com', icon: FaSteam },
    { keyword: 'github.com', icon: FaGithub },
    { keyword: 'nexusmods.com', icon: SiNexusmods },
    { keyword: 'curseforge.com', icon: SiCurseforge },
  ];

  const matchedMapping = iconMappings.find(mapping => lowerUrl.includes(mapping.keyword));
  const IconType = matchedMapping ? matchedMapping.icon : FaExternalLinkAlt;
  const icon = <IconType size={size} />;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles}
    >
      {icon}
    </a>
  );
}
