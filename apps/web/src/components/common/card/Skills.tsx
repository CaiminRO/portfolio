import { portfolioItemCardStyles } from "@/styles/components";
import { Skill } from "@/types";
import React from "react";

export type SkillsProps = {
  skills: Skill[];
  limit?: number;
  showAll?: boolean;
};

function Skills({ skills, limit = 5, showAll = false }: SkillsProps) {
  if (showAll)
    limit = skills.length;

  const displayedSkills = skills.slice(0, limit);
  const hasMoreSkills = skills.length > limit;

  return (
    <div className={portfolioItemCardStyles.skillContainer}>
      {displayedSkills.map((skill, idx) => (
        <span
          key={idx}
          className={portfolioItemCardStyles.skill}
        >
          {skill.name}
        </span>
      ))}
      {hasMoreSkills && (
        <span className={portfolioItemCardStyles.skill}>
          +{skills.length - limit} more
        </span>
      )}
    </div>
  );
}

export default React.memo(Skills);
