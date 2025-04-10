import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.browser },
  },
  // Add Node.js environment for CommonJS files
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: { ...globals.node } },
  },
  // Add Jest environment for test files
  {
    files: ["**/*.test.{js,mjs,cjs,ts}"],
    languageOptions: { globals: { ...globals.jest } },
  },
  tseslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
]);
