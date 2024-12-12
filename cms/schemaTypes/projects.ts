import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().max(50),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (value) => value.toLowerCase().replace(/\s+/g, "-").slice(0, 32),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.required(),
    }),
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
    defineField({
      name: "dateStart",
      title: "Start Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "dateCompleted",
      title: "Completion Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM",
      },
      validation: (rule) => rule.min(rule.valueOfField("dateStart")),
    }),
  ],
});
