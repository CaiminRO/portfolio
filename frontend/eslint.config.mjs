import tailwind from "eslint-plugin-tailwindcss";

const eslintConfigFrontend = [
  {
    ignores: ["**/.next/"],
  },
  ...tailwind.configs["flat/recommended"],
];

export { eslintConfigFrontend };
