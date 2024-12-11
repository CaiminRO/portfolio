import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";

import { eslintConfigFrontend } from "./frontend/eslint.config.mjs";
import { eslintConfigCms } from "./cms/eslint.config.mjs";

export default [
  ...eslintConfigFrontend,
  ...eslintConfigCms,

  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  eslintPluginPrettierRecommended,
];
