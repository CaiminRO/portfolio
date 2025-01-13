import { defineField, defineType } from "sanity";
import uniqueRequirement from "./util/uniqueRequirement";

export default defineType({
  name: 'sitefile',
  title: 'Site File',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().custom(uniqueRequirement),
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      validation: (rule) => rule.required(),
    }),
  ],
});