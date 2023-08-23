module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
  },
  ignorePatterns: ['**/node_modules/**', '**/.next/**'],
  plugins: [
    'import',
    'prettier',
    '@typescript-eslint/eslint-plugin',
    '@next/eslint-plugin-next',
    'tailwindcss',
    'react',
    'react-hooks',
  ],
  rules: {
    curly: ['error', 'multi-or-nest', 'consistent'],
    'padding-line-between-statements': 'off',
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['return', 'function', 'block', 'block-like'],
      },
      {
        blankLine: 'always',
        prev: ['let', 'const', 'var'],
        next: [
          'block',
          'block-like',
          'export',
          'expression',
          'for',
          'function',
          'if',
          'iife',
          'import',
          'return',
          'try',
          'throw',
          'directive',
        ],
      },
      {
        blankLine: 'always',
        next: '*',
        prev: ['type', 'interface'],
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
      },
    ],
    '@typescript-eslint/no-shadow': [
      'error',
      {
        ignoreTypeValueShadow: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'prefer-destructuring': [
      'error',
      {
        object: true,
        array: false,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    camelcase: 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        modifiers: ['destructured'],
        format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
      },
    ],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'no-console': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    'react/display-name': 'off',
    'react/no-danger': 'error',
    'react/forbid-dom-props': [
      'error',
      {
        forbid: ['style'],
      },
    ],
    '@next/next/no-page-custom-font': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'tailwindcss/no-contradicting-classname': [
      'error',
      {
        config: './tailwind.config.js',
      },
    ],
    'tailwindcss/classnames-order': [
      'error',
      {
        config: './tailwind.config.js',
      },
    ],
    'tailwindcss/enforces-shorthand': 'off',
    'tailwindcss/enforces-negative-arbitrary-values': 'error',
    'tailwindcss/no-custom-classname': [
      'error',
      {
        cssFiles: [],
        config: './tailwind.config.js',
        whitelist: ['reebelo-container', 'collapse-icon'],
      },
    ],
  },
};
