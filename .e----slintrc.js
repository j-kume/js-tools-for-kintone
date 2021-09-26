module.exports = {
  env: {
    node: true,
    es6: true,
    'jest/globals': true,
  },
  globals: {
    kintone: true
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    // "prettier/@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint",
    "jest",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  rules: {
    "prettier/prettier": "warn",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-console": "off",
    "no-undef": "warn"
  }
};





// module.exports = {

//   // env:{
//   //   "jest/globals":true
//   // },


//   // --------------------------------
//   // 呼び出したいルール（パッケージ）
//   // --------------------------------
//   // ES5 & kintone の場合
//   // extends: "@cybozu/eslint-config/presets/kintone-customize-es5",

//   // ES6以上 & kintone の場合
//   // extends: ["@cybozu", "@cybozu/eslint-config/globals/kintone"],

//   // node & kintone の場合
//   // extends: ["@cybozu/eslint-config/presets/node", "@cybozu/eslint-config/globals/kintone"],

//   // --------------------------------
//   // グローバル変数の定義
//   // --------------------------------
//   globals: {
//     garoon: "readonly",
//   },

//   // --------------------------------
//   //  ルール
//   // --------------------------------
//   rules: {
//     quotes: ["error", "single"],
//     "require-atomic-updates": "off",
//   },

//   // --------------------------------
//   //  TypeScript用の設定
//   // --------------------------------
//   overrides: [
//     {
//       files: ["*.ts", "*.tsx"],
//       extends: [
//         "plugin:@typescript-eslint/eslint-recommended",
//         "plugin:@typescript-eslint/recommended",
//         "prettier/@typescript-eslint",
//         "@cybozu",
//         "@cybozu/eslint-config/globals/kintone",
//       ],
//       plugins: ["@typescript-eslint"],
//       parser: "@typescript-eslint/parser",
//       parserOptions: {
//         sourceType: "module",
//       },
//       rules: {
//         quotes: ["error", "single"],
//         "require-atomic-updates": "off",
//         "no-undef": "off",
//       },
//     },
//   ],
// };
