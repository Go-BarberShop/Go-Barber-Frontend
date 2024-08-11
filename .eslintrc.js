module.exports = {
    root: true, // Ensures ESLint picks this configuration as the root one
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser for TypeScript
    parserOptions: {
      ecmaVersion: 2021, // Supports modern ECMAScript features
      sourceType: "module", // Allows the use of imports
      ecmaFeatures: {
        jsx: true, // Enables JSX parsing
      },
    },
    env: {
      browser: true, // Browser global variables
      es2021: true, // Adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option
      node: true, // Node.js global variables & Node.js scoping
    },
    extends: [
      "eslint:recommended", // Uses the recommended rules from ESLint
      "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
      "plugin:react/recommended", // Uses the recommended rules from eslint-plugin-react
      "plugin:react-hooks/recommended", // Uses the recommended rules from eslint-plugin-react-hooks
      "plugin:jsx-a11y/recommended", // Uses the recommended rules from eslint-plugin-jsx-a11y
      "next/core-web-vitals", // Uses the Next.js core web vitals rules
    ],
    plugins: [
      "react", // Enables eslint-plugin-react
      "react-hooks", // Enables eslint-plugin-react-hooks
      "@typescript-eslint", // Enables @typescript-eslint/eslint-plugin
      "jsx-a11y", // Enables eslint-plugin-jsx-a11y
    ],
    rules: {
      "react/react-in-jsx-scope": "off", // React is in scope automatically in Next.js
      "@typescript-eslint/explicit-module-boundary-types": "off", // Optional: You can turn this on to require return types on functions
      "jsx-a11y/anchor-is-valid": "off", // Next.js uses its own Link component, so this rule is less relevant
      // Add any additional custom rules here
    },
    settings: {
      react: {
        version: "detect", // Automatically detects the React version
      },
    },
  };
  