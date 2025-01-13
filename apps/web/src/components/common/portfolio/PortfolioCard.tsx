import { PortfolioItem } from "@/types";
import ProjectCard from "@/components/common/portfolio/ProjectCard";
import ModCard from "@/components/common/portfolio/ModCard";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  const { type } = item;
  let content;

  switch (type) {
    case "project":
      content = <ProjectCard item={item}/>
      break;
    case "mod":
      content = <ModCard item={item}/>
      break;
    default:
      content = <span>Invalid Card Type</span>
  }

  return <div>{content}</div>
};
