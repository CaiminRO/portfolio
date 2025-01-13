import { portfolioItemCardStyles } from "@/styles/components";
import React from "react";

export type TitleProps = {
  text: string;
};

function Title({ text }: TitleProps) {
  return (
    <h2 className={portfolioItemCardStyles.title}>
      {text}
    </h2>
  );
}

export default React.memo(Title);
