module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  ignorePatterns: ["dist/*"],
  rules: {
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/adjacent-overload-signatures": "off",
  },
};
