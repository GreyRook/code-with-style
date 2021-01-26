module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 'off',
    // JavaScript hoists functions to the top, so it should not be an error.
    '@typescript-eslint/no-use-before-define': 'off',
    // Explicit function return types increase the readability, so they should always be included.
    '@typescript-eslint/explicit-function-return-type': 'error',
    // TS ignore is needed for external libraries that are not typed.
    '@typescript-eslint/ban-ts-comment': 'off',
    // Empty function are needed for tests to override functionality.
    '@typescript-eslint/no-empty-function': 'off',
    // Everything should have a type. If not possible disable eslint for the line and case.
    '@typescript-eslint/no-explicit-any': 'error',
    // Unused vars can be removed without problems.
    '@typescript-eslint/no-unused-vars': 'error',
    // Useless constructor can be removed without problems.
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        format: ['camelCase'],
      },
      {
        selector: 'property',
        modifiers: ['static'],
        format: ['camelCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
    ],
  },
};
