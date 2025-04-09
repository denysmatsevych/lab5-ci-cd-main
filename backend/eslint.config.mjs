import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginNode from "eslint-plugin-n";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.node },
  },
  tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: { pluginNode },
    rules: {
      "n/no-unsupported-features/es-syntax": "off", // Allow modern ES syntax
      "n/no-missing-import": "error", // Ensure imports exist
      "n/no-unpublished-import": "off", // Disable for TypeScript projects
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ], // Ignore unused variables prefixed with _
      "@typescript-eslint/no-explicit-any": "warn", // Discourage use of `any`
      "@typescript-eslint/explicit-module-boundary-types": "off", // Optional for module boundaries
    },
  },
]);
