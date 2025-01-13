import { Project } from "@/types";
import { portfolioItemCardStyles } from "@/styles/components";
import { CardBase } from "@/components/common/card";

interface ProjectCardProps {
  item: Project;
}

export default function ProjectCard({ item }: ProjectCardProps) {
  const {
    title,
    stub,
    skills,
    dateStart,
    dateCompleted,
    repository,
    link
  } = item;

  // Only add links that are valid
  const links: string[] = [repository, link].filter(
    (item): item is string => Boolean(item)
  );

  return (
    <div className={portfolioItemCardStyles.container}>
      <CardBase.Title text={title} />
      <CardBase.Description text={stub} />
      <CardBase.Skills skills={skills} />
      <CardBase.DateRange start={dateStart} end={dateCompleted} />
      <CardBase.Links links={links}/>
    </div>
  )
}
