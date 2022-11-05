module.exports = {
  rules: {
    indent: ["error", "tab"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-duplicate-imports": ["error", { includeExports: true }],
  },
  overrides: [
    {
      files: ["files/transformed/by/babel/*.js"],
      parser: "@babel/eslint-parser",
    },
  ],
};
