import studio from "@sanity/eslint-config-studio";
import { config as baseConfig } from "./base.js";

export const nextJsConfig = [
  ...baseConfig,
  ...studio,
  {
    ignores: [".sanity/**"],
  },
];
