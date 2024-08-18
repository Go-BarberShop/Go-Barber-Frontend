module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "next/core-web-vitals",
  ],
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "jsx-a11y",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "@next/next/no-img-element": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react-hooks/exhaustive-deps": "off",
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',

  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
