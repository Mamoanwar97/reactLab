module.exports = {
  env: {
    browser: true, es2020: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    'plugin:react-hooks/recommended',
    "prettier",
  ],
  plugins: ["@typescript-eslint", 'react-refresh'],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 'latest',
  },
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    'react-refresh/only-export-components': 'warn',
  },
};
