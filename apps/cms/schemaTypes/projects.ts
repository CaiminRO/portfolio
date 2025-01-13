import { defineField, defineType } from "sanity";
import { portfolioBase } from "./objects/portfolioBase";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    ...portfolioBase,
    defineField({
      name: "image",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "repository",
      title: "Repository Link",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "link",
      title: "Live Link",
      type: "url",
    }),
  ],
});
