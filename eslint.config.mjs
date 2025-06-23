import js from '@eslint/js'
import pluginNext from '@next/eslint-plugin-next'
import configLove from 'eslint-config-love'
import pluginPrettier from 'eslint-plugin-prettier/recommended'
import pluginReact from 'eslint-plugin-react'
import pluginHooks from 'eslint-plugin-react-hooks'
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import pluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import tsEslint from 'typescript-eslint'

/**
 * @see https://eslint.org/docs/user-guide/configuring
 * @type {import('eslint').Linter.Config[]}
 * */
const config = [
  ...tsEslint.configs.recommended,
  js.configs.recommended,
  configLove,
  pluginPrettier,
  {
    plugins: {
      'simple-import-sort': pluginSimpleImportSort,
      unicorn: pluginUnicorn,
      react: pluginReact,
      'react-hooks': pluginHooks,
      next: pluginNext
    },
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.mjs']
        },
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser
      }
    },
    rules: {
      ...pluginReact.configs['jsx-runtime'].rules,
      ...pluginHooks.configs.recommended.rules,
      ...pluginUnicorn.configs.recommended.rules,
      '@typescript-eslint/consistent-type-assertions': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/max-params': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-empty-object-type': 'error',
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-redundant-type-constituents': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/no-unnecessary-type-conversion': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-type-assertion': 'off',
      '@typescript-eslint/no-wrapper-object-types': 'error',
      '@typescript-eslint/prefer-destructuring': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/return-await': 'off',
      '@typescript-eslint/semi': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/unbound-method': 'off',
      'array-callback-return': 'off',
      complexity: 'off',
      'consistent-return': 'error',
      'eslint-comments/require-description': 'off',
      'no-empty-function': 'off',
      'no-func-assign': 'error',
      'no-shadow': 'off',
      'no-undef': 'off',
      'no-unused-labels': 'error',
      'no-unused-vars': 'off',
      'promise/avoid-new': 'off',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
          ignore: [/\$[A-Za-z]+\.tsx/]
        }
      ],
      'unicorn/import-style': 'off',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-nested-ternary': 'off',
      'unicorn/no-new-array': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prefer-global-this': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/prefer-node-protocol': 'off',
      'unicorn/prefer-string-replace-all': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'linebreak-style': 'off'
    }
  },
  {
    files: ['**/*.js', '**/*.ts', '**/*.mjs', '**/*.jsx', '**/*.tsx']
  },
  {
    ignores: ['./node_modules/*', '.next/*', 'dist/*']
  }
]

export default config
