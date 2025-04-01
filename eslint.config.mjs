import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  { ignores: ['**/*.js','**/*.mjs'], },
  {
    rules: {
      // General best practices and code style rules
      'prefer-const': 'error',
      'no-var': 'error',
      'eqeqeq': ['error', 'always',],
      'curly': 'error',
      'consistent-return': 'error',
      'no-shadow': 'error',
      'indent': ['error', 2, { 'SwitchCase': 1, },],
      'quotes': ['error', 'single', { 'avoidEscape': true, },],
      'semi': ['error', 'always',],
      'no-implicit-coercion': 'error',
      'no-eval': 'error',
      'complexity': ['warn', 10,],
      'max-lines': ['warn', { 'max': 300, 'skipBlankLines': true, 'skipComments': true, },],
      'no-param-reassign': 'error',
      'padding-line-between-statements': [
        'error',
        { 'blankLine': 'always', 'prev': '*', 'next': 'return', },
        { 'blankLine': 'always', 'prev': ['const', 'let', 'var',], 'next': '*', },
        { 'blankLine': 'any', 'prev': ['const', 'let', 'var',], 'next': ['const', 'let', 'var',], },
      ],
      'no-duplicate-imports': 'error',
      'prefer-template': 'error',
      'object-curly-spacing': ['error', 'always',],
      'array-bracket-spacing': ['error', 'never',],
      'space-infix-ops': 'error',
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always',],
      'arrow-body-style': ['error', 'as-needed',],
      'arrow-parens': ['error', 'always',],
      'no-lonely-if': 'error',
      'no-nested-ternary': 'error',
      'operator-linebreak': ['error', 'before',],
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'comma-dangle': ['error', 'always',],
    },
  },
];
