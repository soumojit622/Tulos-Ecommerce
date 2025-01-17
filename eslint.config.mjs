import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extending ESLint configurations for Next.js and TypeScript
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Adding custom rules to disable specific ESLint rules
  {
    rules: {
      "react/no-unescaped-entities": "off",  // Disable unescaped entities rule
      "react-hooks/exhaustive-deps": "off",  // Disable exhaustive-deps warning
    },
  },
];

export default eslintConfig;
