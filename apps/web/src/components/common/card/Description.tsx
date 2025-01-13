import { portfolioItemCardStyles } from "@/styles/components";
import { truncateDescription } from "@/utils";
import React from "react";

export type DescriptionProps = {
  text: string;
};

function Description({ text }: DescriptionProps) {
  return (
    <p className={portfolioItemCardStyles.generalText}>
      {truncateDescription(text)}
    </p>
  );
}

export default React.memo(Description);
