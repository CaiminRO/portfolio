import { defineField } from "sanity";
import { dateRange } from "./dateRange";
import { skills } from "./skills";
import uniqueRequirement from "../util/uniqueRequirement";

export const portfolioBase = [
  defineField({
    name: "title",
    title: "Title",
    type: "string",
    validation: (rule) => rule.required().max(50).custom(uniqueRequirement),
  }),
  defineField({
    name: "slug",
    title: "Slug",
    type: "slug",
    options: {
      source: "title",
      slugify: (value) =>
        value.toLowerCase().replace(/\s+/g, "-").slice(0, 32),
    },
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "stub",
    title: "Stub Description",
    type: "text",
    validation: (rule) => rule.required().max(200),
  }),
  defineField({
    name: "description",
    title: "Full Description",
    type: "text",
    validation: (rule) => rule.required(),
  }),
  ...skills,
  ...dateRange("YYYY-MM")
].filter(Boolean);
