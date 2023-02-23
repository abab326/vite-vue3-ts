/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");
module.exports = {
    root: true,
    parser: "vue-eslint-parser",
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-typescript",
        "@vue/eslint-config-prettier",
    ],
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        "vue/multi-word-component-names": "off",
    },
};
