/* eslint-disable */

import tailwindcssPlugin from 'eslint-plugin-tailwindcss';
import prettierPlugin from 'eslint-plugin-prettier';
import unicornPlugin from 'eslint-plugin-unicorn';
import typescriptESLintPlugin from '@typescript-eslint/eslint-plugin';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import reactHooks from 'eslint-plugin-react-hooks';
import typescriptParser from '@typescript-eslint/parser';
import reactCompilerPlugin from 'eslint-plugin-react-compiler';
import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});
export default [
  ...compat.extends('next/core-web-vitals'),
  {
    ignores: [
      '.next/**',
      'public/**',
      'next.config.js',
      'postcss.config.js',
      'next-env.d.ts',
      'next.config.ts',
    ],
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      prettier: prettierPlugin,
      unicorn: unicornPlugin,
      '@typescript-eslint': typescriptESLintPlugin,
      'unused-imports': unusedImportsPlugin,
      tailwindcss: tailwindcssPlugin,
      'react-hooks': reactHooks,
      'react-compiler': reactCompilerPlugin,
      // 'simple-import-sort': simpleImportSortPlugin,
    },
    rules: {

      'prettier/prettier': ['warn', {}, { usePrettierrc: true }],

      // React-specific rules
      'react-compiler/react-compiler': 'error',
      'react/display-name': 'off',
      'react/no-inline-styles': 'off',
      'react/destructuring-assignment': 'off',
      'react/require-default-props': 'off',

      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',

      // General improvements
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            pascalCase: true,
          },
        },
      ],
      'no-console': 'warn',
      'max-params': ['error', 3],
      'max-lines-per-function': ['error', 250],

      // TypeScript rules
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
          disallowTypeAnnotations: true,
        },
      ],

      // Unused imports/vars
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      // Tailwind CSS plugin
      'tailwindcss/classnames-order': [
        'warn',
        {
          officialSorting: true,
        },
      ],

      // Optional: Uncomment if using `eslint-plugin-simple-import-sort`
      // 'simple-import-sort/imports': 'error',
      // 'simple-import-sort/exports': 'error',
    },
  },
  {
    files: [
      'src/app/**/*',
      'src/auth/**/*', // TEMP: This folder will be removed to improve structure
      '.next/**',
      'public/**',
      'next.config.js',
      'postcss.config.js',
      'next-env.d.ts',
      'next.config.ts',
    ],
    rules: {
      'unicorn/filename-case': 'off',
    },
  },
];
