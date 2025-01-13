import { defineField } from "sanity";

export const skills = [
  defineField({
    name: "skills",
    title: "Skills Used",
    type: "array",
    of: [{ type: "reference", to: [{ type: "skill" }] }],
    validation: (rule) => rule.required(),
  }),
];
