import { PortfolioItem } from "@/types";
import { sanityClient } from "@/utils";

export function truncateDescription(desc: string, length: number = 200) {
  if (desc.length <= length) return desc;
  return desc.substring(0, length) + "...";
}

export async function fetchPortfolioItems(): Promise<PortfolioItem[]> {
  const query = `
    *[_type in ["gameMod", "project"]]
      | order(dateCompleted desc, dateStart desc) {
        _id,
        _type == "gameMod" => { "type": "mod" },
        _type == "project" => { "type": "project" },
        title,
        "slug": slug.current,
        stub,
        description,
        skills[]->{
          name,
          "category": category->name
        },
        repository,
        link,
        dateStart,
        dateCompleted,
        "game": select(_type == "gameMod" => game),
        "downloadLink": select(_type == "gameMod" => downloadLink),
        "image": image.asset->url
      }
  `;
  return sanityClient.fetch(query);
}
