import React, { useState } from "react";
import MultiSelect from "@/components/common/MultiSelect";
import { Skill } from "@/types";
import {filterBarStyles} from "@/styles/components";

interface FilterBarProps {
  allSkills: Skill[];
  onSearchChange: (search: string) => void;
  onTypeChange: (type: "all" | "project" | "mod") => void;
  onSkillsChange: (skills: string[]) => void;
}

export default function FilterBar ({ allSkills, onSearchChange, onTypeChange, onSkillsChange }: FilterBarProps) {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState<"all" | "project" | "mod">("all");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onSearchChange(e.target.value);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as "all" | "project" | "mod";
    setSelectedType(value);
    onTypeChange(value);
  };

  const handleSkillsChange = (values: string[]) => {
    setSelectedSkills(values);
    onSkillsChange(values);
  };

  return (
    <div className={filterBarStyles.container}>
      {/* Search */}
      <div className={filterBarStyles.filterContainer}>
        <label htmlFor="search" className={filterBarStyles.filterLabel}>
          Search
        </label>
        <input
          id="search"
          type="text"
          className={filterBarStyles.filterInput}
          placeholder="Search by title or description..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      {/* Type Filter */}
      <div className={filterBarStyles.filterContainer}>
        <label htmlFor="typeFilter" className={filterBarStyles.filterLabel}>
          Type
        </label>
        <select
          id="typeFilter"
          className={filterBarStyles.filterInput}
          value={selectedType}
          onChange={handleTypeChange}
        >
          <option value="all">All</option>
          <option value="project">Project</option>
          <option value="mod">Mod</option>
        </select>
      </div>

      {/* Skills Multi-select */}
      <div className={filterBarStyles.filterContainer}>
        <label htmlFor="skills" className={filterBarStyles.filterLabel}>
          Skills
        </label>

        <MultiSelect
          options={allSkills}
          selected={selectedSkills}
          onChange={handleSkillsChange}
        />
      </div>
    </div>
  );
};
