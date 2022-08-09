// eslint-disable-next-line no-undef
module.exports = {
  env: {
    'cypress/globals': true
  },
  "plugins": [
    "cypress"
  ],
  extends: [
    'eslint:recommended',
    'plugin:cypress/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  ignorePatterns: ['**/node_modules/**', 'cypress/**/*d.ts', '**/cypress/reports/**', '**/cypress/uploads/**', '**/cypress/downloads/**']
};
