import { config as baseConfig } from "./base.js";

export const nextJsConfig = {
  ...baseConfig,
  plugins: ["prettier-plugin-tailwindcss"],
}