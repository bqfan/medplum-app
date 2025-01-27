import pluginJs from "@eslint/js";
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
      import: eslintPluginImport,
    },
  },
  {
    rules: {
      'prettier/prettier': [
        0,
        {
          singleQuote: true,
          endOfLine: 'auto',
        },
      ],
      "no-var": "error",
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-console": "warn",
      "max-params": ["error", 3], // Limit the number of parameters in a function to use object instead
      "max-lines-per-function": ["error", 70],
      "react/display-name": "off",
      "react/no-inline-styles": "off",
      "react/destructuring-assignment": "off", // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
      "react/require-default-props": "off", // Allow non-defined react props as undefined
      "@typescript-eslint/comma-dangle": "off", // Avoid conflict rule between Eslint and Prettier
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
          disallowTypeAnnotations: true,
        },
      ], // Ensure `import type` is used when it's necessary
      "import/prefer-default-export": "off", // Named export is easier to refactor automatically
      'import/no-cycle': ['error', { maxDepth: '∞' }],
      "simple-import-sort/imports": "error", // Import configuration for `eslint-plugin-simple-import-sort`
      "simple-import-sort/exports": "error", // Export configuration for `eslint-plugin-simple-import-sort`
      "@typescript-eslint/no-unused-vars": "off",
      "tailwindcss/no-custom-classname": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    settings: {
      'import/ignore': ['react-native'],
    },
  }
];
