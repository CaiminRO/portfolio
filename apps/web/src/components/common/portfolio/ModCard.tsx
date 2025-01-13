import { GameMod } from "@/types";
import { portfolioItemCardStyles } from "@/styles/components";
import { CardBase } from "@/components/common/card";

interface ModCardProps {
  item: GameMod;
}

export default function ModCard({ item }: ModCardProps) {
  const {
    title,
    stub,
    skills,
    dateStart,
    dateCompleted,
    game,
    repository,
    downloadLink
  } = item;

  // Only add links that are valid
  const links: string[] = [repository, ...downloadLink].filter(
    (item): item is string => Boolean(item)
  );

  return (
    <div className={portfolioItemCardStyles.container}>
      <CardBase.Title text={title} />
      <p>
        <span className="font-semibold">Game: </span>
        {game}
      </p>
      <CardBase.Description text={stub} />
      <CardBase.Skills skills={skills} />
      <CardBase.DateRange start={dateStart} end={dateCompleted} />
      <CardBase.Links links={links}/>
    </div>
  )
}
