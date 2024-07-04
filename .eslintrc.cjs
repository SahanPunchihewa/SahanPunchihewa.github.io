module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,  // Add this line
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    // Your custom rules
  },
};