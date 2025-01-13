import { defineField, defineType } from "sanity";
import uniqueRequirement from "./util/uniqueRequirement";

export default defineType({
  name: 'skillCategory',
  title: 'Skill Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required().custom(uniqueRequirement),
    }),
  ],
});
