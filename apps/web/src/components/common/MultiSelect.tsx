import { useState, useRef, useEffect } from "react";
import { multiSelectStyles } from "@/styles/components";

interface MultiSelectCategory {
  name: string;
  category: string;
}

interface MultiSelectProps {
  options: string[] | MultiSelectCategory[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

const isCategorizedOptions = (
  options: string[] | MultiSelectCategory[]
): options is MultiSelectCategory[] => {
  return (
    Array.isArray(options) &&
    options.length > 0 &&
    typeof options[0] === "object" &&
    "category" in options[0]
  );
};

export default function MultiSelect({ options, selected, onChange }: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown visibility
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Handle option selection/deselection
  const handleOptionClick = (optionName: string) => {
    if (selected.includes(optionName))
      onChange(selected.filter((item) => item !== optionName));
    else
      onChange([...selected, optionName]);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node))
      setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen)
      document.addEventListener("mousedown", handleClickOutside);
    else
      document.removeEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const groupedOptions: Record<string, string[]> = {};

  if (isCategorizedOptions(options)) {
    options.forEach((option) => {
      const { name, category } = option;
      if (!groupedOptions[category])
        groupedOptions[category] = [];

      groupedOptions[category].push(name);
    });
  }

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        className={multiSelectStyles.button}
        onClick={handleToggle}
      >
        {selected.length > 0 ? `Selected (${selected.length})` : "Select options"}
      </button>

      {isOpen && (
        <div className={multiSelectStyles.dropdown}>
          {options.length > 0 ? (
            isCategorizedOptions(options) ? (
              Object.entries(groupedOptions).map(([category, optionNames]) => (
                <div key={category} className="mb-2">
                  {/* Category Header */}
                  <div className={multiSelectStyles.category}>
                    {category}
                  </div>

                  {optionNames.map((option, idx) => (
                    <label
                      key={idx}
                      className={multiSelectStyles.optionText}
                    >
                      <input
                        type="checkbox"
                        checked={selected.includes(option)}
                        onChange={() => handleOptionClick(option)}
                        className={multiSelectStyles.optionCheckbox}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              ))
            ) : (
              options.map((option, idx) => (
                <label
                  key={idx}
                  className={multiSelectStyles.optionText}
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(option)}
                    onChange={() => handleOptionClick(option)}
                    className={multiSelectStyles.optionCheckbox}
                  />
                  <span>{option}</span>
                </label>
              ))
            )
          ) : (
            <div className="text-gray-500">No options available.</div>
          )}
        </div>
      )}
    </div>
  );
};
