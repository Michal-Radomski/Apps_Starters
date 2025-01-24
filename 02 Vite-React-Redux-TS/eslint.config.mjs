import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import typescriptParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: ["node_modules/**", "dist/**"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, NodeJS: true, JSX: true },
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Disable if using React 17+
      "react-hooks/rules-of-hooks": "error", // Enforces the rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // Warns on missing dependencies
      "no-duplicate-imports": "error",
      "sort-imports": "off",
      "no-unused-vars": "off",
      "no-undef": "error",
      "no-extra-boolean-cast": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-unsafe-finally": "off",
      "no-unsafe-optional-chaining": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "source.fixAll.eslint": 0,
    },
    settings: {
      react: {
        version: "detect", // Automatically detects the version of React
      },
    },
  },
];
