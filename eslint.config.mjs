import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:tailwindcss/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "prettier"
  ),
  
  {
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "tailwindcss/no-custom-classname": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-html-link-for-pages": "off",
    },
    ignores: [".next/*", "node_modules/*"],
  },
];

export default eslintConfig;