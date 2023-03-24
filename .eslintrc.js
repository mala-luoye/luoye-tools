module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-alert": 2,
    "no-undef": 2,
    "no-use-before-define": 2,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-extra-semi": 0
  }
}
