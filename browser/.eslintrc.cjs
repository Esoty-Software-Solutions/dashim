/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

const path = require("node:path");
module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "@vue/eslint-config-typescript",
    "plugin:vuejs-accessibility/recommended",
    "plugin:vuetify/base",
    "@vue/eslint-config-prettier",
    "prettier",
  ],
  overrides: [],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    createDefaultProgram: true,
    tsconfigRootDir: __dirname,
    project: [
      "./tsconfig.app.json",
      "./tsconfig.node.json",
      "./tsconfig.vitest.json",
    ],
    extraFileExtensions: [".vue"],
  },
  plugins: ["import", "tsdoc", "vue", "prettier"],
  rules: {
    "require-jsdoc": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-unsafe-argument": "warn",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array",
      },
    ],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/consistent-generic-constructors": [
      "error",
      "type-annotation",
    ],
    "@typescript-eslint/consistent-type-imports": [
      "off",
      {
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-confusing-void-expression": [
      "error",
      {
        ignoreArrowShorthand: true,
      },
    ],
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "import/default": "off",
    "import/no-default-export": "off",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "parent",
          "internal",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern:
              "{vue,vue-router,vue-query,@vueuse/**,vuex,vue-i18n,pinia,vite,vitest,vitest/**,@vitejs/**,@vue/**}",
            group: "external",
            position: "before",
          },
          {
            pattern: "{vuetify,vuetify/**,@mdi/js}",
            group: "parent",
            position: "before",
          },
          {
            pattern: "{@/store}",
            group: "internal",
            position: "before",
          },
          {
            pattern: "{@/**}",
            group: "internal",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
        },
        "newlines-between": "always",
      },
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
        },
      },
    ],
    "vue/multi-word-component-names": "warn",
    "vue/no-template-shadow": "off",
    "vuetify/no-deprecated-components": "warn",
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/no-boolean-default": "error",
    "vue/no-child-content": "error",
    "vue/no-this-in-before-route-enter": "error",
    "vue/v-on-function-call": "error",
    "vue/script-setup-uses-vars": "error",
    "tsdoc/syntax": "warn",
  },
  settings: {
    "import/parsers": {
      "vue-eslint-parser": [".vue"],
    },
    "import/resolver": {
      typescript: true,
      alias: {
        map: [
          ["@", path.join(__dirname, "./src")],
          ["~", "./node_modules"],
        ],
        extensions: [".js", ".ts", ".jsx", ".tsx", ".vue"],
      },
    },
    vite: {
      configPath: "./vite.config.ts",
    },
  },
};
