import { config as baseConfig } from "./base.js";

export const config = {
  ...baseConfig,
  plugins: ["prettier-plugin-tailwindcss"],
}