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
    "react/react-in-jsx-scope": "off", // Next.js automatically imports React
    "@typescript-eslint/explicit-module-boundary-types": "off", // Optional return types on functions
    "jsx-a11y/anchor-is-valid": "off", // Next.js uses its own Link component
    "@typescript-eslint/no-explicit-any": "off", // Allows usage of 'any' type
    "jsx-a11y/no-static-element-interactions": "off", // Disables enforcement on static elements
    "@next/next/no-img-element": "off", // Disables the enforcement to use <Image />
    "jsx-a11y/label-has-associated-control": "off", // Disables the need for form labels to be associated with a control
    "react-hooks/exhaustive-deps": "off", // Disables missing dependency warnings in useEffect
    'react/prop-types': 'off', // Disables prop-types checks (TypeScript is handling types)
    'react/no-unescaped-entities': 'off', // Disables unescaped entities check
    'jsx-a11y/click-events-have-key-events': 'off', // Disables enforcement on click events without keyboard events
  },
  settings: {
    react: {
      version: "detect", // Automatically detects the React version
    },
  },
};
