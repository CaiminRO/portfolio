import studio from "@sanity/eslint-config-studio";
import { config as baseConfig } from "./base.js";

export const sanityConfig = [
  ...baseConfig,
  ...studio,
  {
    ignores: [".sanity/**"],
  },
];
