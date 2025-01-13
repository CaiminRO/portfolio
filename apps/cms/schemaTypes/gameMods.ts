import { defineField, defineType } from "sanity";
import { portfolioBase } from "./objects/portfolioBase";

export default defineType({
  name: "gameMod",
  title: "Video Game Mod",
  type: "document",
  fields: [
    defineField({
      name: "game",
      title: "Game",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    ...portfolioBase,
    defineField({
      name: "image",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "repository",
      title: "Repository Link",
      type: "url",
    }),
    defineField({
      name: "downloadLink",
      title: "Download Link(s)",
      type: "array",
      of: [{ type: "url" }],
      validation: (rule) => rule.required(),
    }),
  ],
});
