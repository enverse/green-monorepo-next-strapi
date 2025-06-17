/*
 *  Copyright (C) Pivot 2024 - All Rights Reserved.
 *  This source code is protected under international copyright law. All rights
 *  reserved and protected by the copyright holders.
 *  This file is confidential and only available to authorized individuals with the
 *  permission of the copyright holders. If you encounter this file and do not have
 *  permission, please contact the copyright holders and delete this file.
 */

import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import reactQuery from "@tanstack/eslint-plugin-query";
import vitest from "@vitest/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import playwright from "eslint-plugin-playwright";
import preferArrow from "eslint-plugin-prefer-arrow";
import reactCompiler from "eslint-plugin-react-compiler";
import tailwindcss from "eslint-plugin-tailwindcss";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});



export default tseslint.config([
  {
    ignores: [
      "dist/*",
      ".next/*",
      "**/.cache",
      "**/public",
      "**/node_modules",
      "**/*.esm.js",
      "types/api/*",
      "types/server-api/*",
      "**/supportedBrowsers.js",
      "**/next-env.d.ts",
      "**/playwright-report",
      "test-results/*",
      "**/storybook-static",
      "eslint.config.mjs",
      "postcss.config.js",
      "prettier.config.js",
    ],
  },

  /**
   * Eslint v9-compatible configs
   */

  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      importPlugin.flatConfigs.typescript,
      ...reactQuery.configs["flat/recommended"],
      ...tailwindcss.configs["flat/recommended"],

      /**
       * Legacy configs, need the compat.extends() syntax
       */
      ...compat.extends(
        // Next.js hasn't released a compatible config yet
        "next/core-web-vitals",
        "next/typescript",

      ),
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },

    /**
     * Plugins that don't offer a recommended config
     */
    plugins: {
      "unused-imports": unusedImports,
      "prefer-arrow": preferArrow,
      unicorn,
      "react-compiler": reactCompiler,
    },

    /**
     * All rules adjusted to our guidelines
     */
    rules: {
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/no-base-to-string": "off",
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/prefer-promise-reject-errors": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/unbound-method": "off",
      "react-compiler/react-compiler": "error",
      "@typescript-eslint/require-await": "off",
      "headers/header-format": [
        "error",
        {
          source: "string",
          content: HEADER_CONTENT,
        },
      ],
      curly: ["error", "all"],
      eqeqeq: "error",
      "eslint-comments/no-unused-disable": "error",
      "eslint-comments/require-description": [
        "error",
        {
          ignore: ["eslint-enable"],
        },
      ],
      "import/no-default-export": "error",
      "import/no-anonymous-default-export": "error",
      "jsx-a11y/alt-text": [
        "error",
        {
          img: ["Image"],
        },
      ],
      "object-shorthand": "error",
      "no-extra-boolean-cast": "off",
      "no-useless-escape": "off",
      "no-console": "error",
      "react/jsx-key": [
        "error",
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true,
          warnOnDuplicates: true,
        },
      ],
      "react/display-name": [
        "error",
        {
          ignoreTranspilerName: false,
          checkContextObjects: true,
        },
      ],
      "react/jsx-fragments": "error",
      "react/jsx-boolean-value": "error",
      "react/no-unescaped-entities": "off",
      "react/self-closing-comp": "error",
      "react/jsx-no-constructed-context-values": "error",
      "react/no-unstable-nested-components": [
        "error",
        {
          allowAsProps: true,
        },
      ],
      "react/jsx-no-useless-fragment": "error",
      "react/jsx-curly-brace-presence": "error",
      "tailwindcss/classnames-order": "off",
      "tailwindcss/enforces-shorthand": "error",
      "tailwindcss/no-custom-classname": "off",
      "unicorn/filename-case": [
        "error",
        {
          case: "camelCase",
          ignore: ["^API\\.ts$", "global-error.tsx"],
        },
      ],
      "unused-imports/no-unused-imports": "error",
      "no-unused-vars": "off",
      "unused-imports/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "custom/no-number-isnan": "error",
      "@next/next/no-html-link-for-pages": "off",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "prefer-arrow/prefer-arrow-functions": [
        "error",
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],
      "no-return-await": "error",
    },
  },

  /**
   * Unit tests
   */
  {
    files: ["**/*.test.ts", "**/*.test.tsx"],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      "vitest/no-large-snapshots": [
        "error",
        {
          maxSize: 0,
          inlineMaxSize: 100,
        },
      ],
    },
  },

  /**
   * E2E tests
   */
  {
    files: ["tests/**"],
    plugins: {
      playwright,
    },
    rules: {
      ...playwright.configs.recommended.rules,
      "playwright/no-page-pause": "error",
      "playwright/expect-expect": "off",
    },
  },

  /**
   * Restricted imports
   */
  {
    files: ["components/ui/**/*"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/features/*"],
              message:
                "Files in components/ui shouldn't depend on any feature.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["components/**/*", "features/**/*", "lib/**/*"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/app/*"],
              message: "No folder should depend on the app folder.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["app/main/**/*"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/app/vendor-portal"],
              message:
                "@app/main & @app/vendor-portal should not depend on each other.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["app/vendor-portal/**/*"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/app/main"],
              message:
                "@app/main & @app/vendor-portal should not depend on each other.",
            },
          ],
        },
      ],
    },
  },

  /**
   * Overrides: disable specific rules for a subset of files
   */
  {
    files: [
      "app/**/page.tsx",
      "app/**/layout.tsx",
      "app/**/*error.tsx",
      "components/icons/*.tsx",
      "**/*.stories.tsx",
      "**/*.config.{ts,js,mjs}",
      ".storybook/*",
      "knip.ts",
      "emptyModule.ts",
    ],
    rules: {
      "import/no-default-export": "off",
      "import/no-anonymous-default-export": "off",
    },
  },
  {
    files: ["scripts/*"],
    rules: {
      "no-console": "off",
    },
  },
]);
