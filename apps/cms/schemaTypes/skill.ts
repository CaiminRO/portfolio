import { defineField, defineType } from "sanity";
import uniqueRequirement from "./util/uniqueRequirement";

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required().custom(uniqueRequirement),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: 'reference',
      to: [{ type: 'skillCategory' }],
      validation: (rule) => rule.required(),
    }),
  ],
});
