module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-inferrable-types': 'error', // 型推論機能が使用できる場合に明示的に型を指定することを禁止
    '@typescript-eslint/no-explicit-any': 'error', // any使用禁止
    // "@typescript-eslint/explicit-function-return-type": "error", // 関数の返り値の型を指定
    'no-unused-vars': 'off', // 未使用の変数の警告
    '@typescript-eslint/no-unused-vars': 'off', // 未使用の変数の警告
    'no-use-before-define': 'off', // まだ宣言されていない識別子への参照
    eqeqeq: 'warn', // ==,!= より ===,!== 推奨。
    semi: ['error', 'always'], // 文末のセミコロン必須
    quotes: ['error', 'single', { avoidEscape: true }], // クォーテーションはシングル
    'array-bracket-spacing': ['error', 'never'], // 配列を表すカッコ([])と中身の間にスペース挟んではいけない
    'comma-spacing': ['error', { before: false, after: true }], // コンマ前のスペースNG、コンマ後ろにスペース必要
    /** 命名規則 */
    '@typescript-eslint/naming-convention': [
      'error',
      {
        // classやtypeなどはパスカルケース
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        // 変数名はキャメルケース
        selector: 'variable',
        format: ['camelCase'],
      },
    ],
  },
};
