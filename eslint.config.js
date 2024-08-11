module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  extends: [
    'eslint:recommended', // Use recommended ESLint rules
    'plugin:react/recommended', // Use recommended rules from eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Use recommended rules from @typescript-eslint/eslint-plugin
    'plugin:jsx-a11y/recommended', // Accessibility linting rules
    'next/core-web-vitals', // Next.js specific linting rules
  ],
  plugins: ['react', '@typescript-eslint', 'jsx-a11y'], // Add additional plugins
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    // Customize rules here
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the version of React to use
    },
  },
};
