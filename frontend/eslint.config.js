import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: { pluginReactHooks, pluginJsxA11y },
    rules: {
      "react/react-in-jsx-scope": "off", // Not needed with React 17+
      "react/prop-types": "off", // Disable prop-types for TypeScript
      "react-hooks/rules-of-hooks": "error", // Enforce React Hooks rules
      "react-hooks/exhaustive-deps": "warn", // Warn about missing dependencies in useEffect
      "jsx-a11y/anchor-is-valid": "warn", // Accessibility rules for anchors
    },
  },
]);
