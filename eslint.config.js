import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: [ "dist", "node-modules" ] },
  {
    files: [ "**/*.{js,jsx}" ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        "AudioWorkletGlobalScope": "readonly"},
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn", { allowConstantExport: true },
      ],
      "react/jsx-max-props-per-line": [ "error", { maximum: 1 } ],
      "react/jsx-closing-bracket-location": [ "error", "after-props" ],
      "react/jsx-tag-spacing": [ "error", { beforeSelfClosing: "always" } ],
      "react/jsx-wrap-multilines": [
        "error",
        {
          declaration: true,
          assignment: true,
          return: true,
        },
      ],
      "react/jsx-indent": [ "error", 2 ],
      "react/jsx-first-prop-new-line": [ "error", "always" ],
      "react/jsx-newline": [ "error", { prevent: false } ],
      "react/jsx-indent-props": [ "error", 2 ],
      "array-bracket-spacing": [ "error", "always" ],
      "array-element-newline": [ "error", { multiline: true, minItems: 3 } ],
      indent: [
        "error",
        2,
        {
          ArrayExpression: 1,
          ObjectExpression: 1,
          SwitchCase: 1,
          VariableDeclarator: 1,
          outerIIFEBody: 1,
          MemberExpression: 1,
        },
      ],
    },
  },
];
