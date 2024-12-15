import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";
import onlyWarn from "eslint-plugin-only-warn";
import importPlugin from "eslint-plugin-import";

export const config = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  eslintPluginPrettierRecommended,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
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
  {
    ignores: ["dist/**"],
  },
];