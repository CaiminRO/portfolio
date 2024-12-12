import studio from "@sanity/eslint-config-studio";

const eslintConfigCms = [
  ...studio,
  {
    ignores: ["**/.sanity/"],
  },
];

export { eslintConfigCms };
