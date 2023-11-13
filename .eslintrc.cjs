/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "prettier"],
  parser: "@typescript-eslint/parser",
  "rules": {
    "prettier/prettier": "error",
    "linebreak-style": ["error", "unix"]
  },
  root: true,
};
