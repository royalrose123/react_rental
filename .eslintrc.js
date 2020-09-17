// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  extends: ['standard', 'standard-react', 'plugin:prettier/recommended'],
  plugins: ['react-hooks'],
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // allow trailing commas
    'comma-dangle': ['error', 'always-multiline'],
    // for react-hooks lint
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        printWidth: 150,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        jsxSingleQuote: true,
        endOfLine: 'auto',
        semi: false,
      },
    ],
  },
}
