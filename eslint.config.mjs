import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";

import { eslintConfigFrontend } from "./frontend/eslint.config.mjs";
import { eslintConfigCms } from "./cms/eslint.config.mjs";

export default [
  importPlugin.flatConfigs.recommended,

  {
    rules: {
      semi: ["error", "always"],
      "no-console": ["warn", { allow: ["info", "error"] }],
      "import/no-cycle": "error",
      "import/no-self-import": "error",
      "import/order": ["error", {
        groups: [
          "builtin",
          ["sibling", "parent"],
          "index",
          "object",
        ],
        "newlines-between": "always",
        "warnOnUnassignedImports": true,
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      }],
    },
  },

  ...eslintConfigFrontend,
  ...eslintConfigCms,

  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  eslintPluginPrettierRecommended,
];
