import { portfolioItemCardStyles } from "@/styles/components";
import LinkIcon from "@/components/common/LinkIcon";
import React from "react";

export type LinksProps = {
  links: string[];
};

function Links({ links }: LinksProps) {
  const linksFixed: string[] = links.filter(
    (item): item is string => Boolean(item)
  );

  if (linksFixed.length === 0) return;

  return (
    <div className={portfolioItemCardStyles.linkContainer}>
      {linksFixed.map((link, idx) => (
        <LinkIcon url={link} key={idx}/>
      ))}
    </div>
  );
}

export default React.memo(Links);
