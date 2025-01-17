"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import FilterBar from "./FilterBar";
import PortfolioCard from "./PortfolioCard";
import type { PortfolioItem, Skill } from "@/types";
import DetailPanel from "@/components/common/portfolio/DetailPane";
import { portfolioClientStyles } from "@/styles/components";
import { AnalyticsUtil } from "@/utils";

interface PortfolioSectionProps {
  items: PortfolioItem[];
}

type ItemTypeOptions = "all" | "project" | "mod";

export default function PortfolioClient({ items }: PortfolioSectionProps) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState<ItemTypeOptions>("all");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // React state for the active item in the side panel
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  // Intersection Observer to detect if the user is within this portfolio section
  const { ref, inView } = useInView({ threshold: 0.1 });

  // Unique set of skills for the FilterBar
  const allSkills: Skill[] = Array.from(
    new Map(
      items
        .flatMap((item) => item.skills)
        .map((skill) => [`${skill.name}|${skill.category}`, skill] as const)
    ).values()
  );

  // Filter logic
  const filteredItems = items.filter((item) => {
    // Search filter (title or description)
    if (search) {
      const lowerSearch = search.toLowerCase();
      if (
        !item.title.toLowerCase().includes(lowerSearch) &&
        !item.description.toLowerCase().includes(lowerSearch)
      ) {
        return false;
      }
    }

    // Type filter
    if (type !== "all" && item.type !== type)
      return false;

    // Skills filter
    return !(selectedSkills.length > 0 &&
      !selectedSkills.every((skill) => item.skills.some(t => t.name.includes(skill))));
  });

  const handleCardOnClick = (item: PortfolioItem) => {
    if (activeItem && activeItem.slug !== item.slug) {}
      AnalyticsUtil.cardPortfolioItem(item.slug);

    setActiveItem(item);
  }

  return (
    <section
      ref={ref}
      id="portfolio"
      className={portfolioClientStyles.container}
    >
      <div className={portfolioClientStyles.innerContainer}>
        {/* Filter Bar */}
        <div className="mb-4">
          <FilterBar
            allSkills={allSkills}
            onSearchChange={setSearch}
            onTypeChange={setType}
            onSkillsChange={setSelectedSkills}
          />
        </div>

        {/* Main container: left grid (items), right sticky panel */}
        <div className={portfolioClientStyles.gridContainer}>
          {/* Left Column: Grid of items */}
          <div className={portfolioClientStyles.gridItems}>
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleCardOnClick(item)}
                className="cursor-pointer"
              >
                <PortfolioCard item={item} />
              </div>
            ))}
          </div>

          {/* Right Column: Sticky side panel for details */}
          <aside
            className={inView ? portfolioClientStyles.sidebarInView : portfolioClientStyles.sidebarOutOfView}
          >
            {activeItem ? (
              <DetailPanel item={activeItem} />
            ) : (
              <div className={portfolioClientStyles.sidebarPreSelect}>
                <p>Select a project or mod to see details here.</p>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
