module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-inferrable-types": "error", // 型推論について
    "@typescript-eslint/no-explicit-any": "error", // any禁止
    // "@typescript-eslint/explicit-function-return-type": "error", // 関数の返り値の型を指定する
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
};
