import type { PortfolioItem } from "@/types";
import {CardBase} from "@/components/common/card";

interface DetailPanelProps {
  item: PortfolioItem;
}

export default function DetailPanel({ item }: DetailPanelProps) {
  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
      <CardBase.Skills skills={item.skills} showAll={true} />
      
      <p className="text-sm mb-4">{item.description}</p>

      {item.image && (
        <img src={item.image} alt={item.title + " image"}/>
      )}
    </div>
  );
}
