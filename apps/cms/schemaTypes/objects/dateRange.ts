import { defineField } from "sanity";

export const dateRange = (format: string) => [
  defineField({
    name: "dateStart",
    title: "Start Date",
    type: "date",
    options: {
      dateFormat: format,
    },
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "dateCompleted",
    title: "Completion Date",
    type: "date",
    options: {
      dateFormat: format,
    },
    validation: (rule) => rule.min(rule.valueOfField("dateStart")),
  }),
];
