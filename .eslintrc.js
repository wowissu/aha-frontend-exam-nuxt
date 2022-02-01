// .eslintrc.js

/** @type { import('eslint').Linter.Config } */
module.exports = {
  root: true,

  globals: {
    ga: 'readonly', // Google Analytics
    cordova: 'readonly',
    __statics: 'readonly',
    __QUASAR_SSR__: 'readonly',
    __QUASAR_SSR_SERVER__: 'readonly',
    __QUASAR_SSR_CLIENT__: 'readonly',
    __QUASAR_SSR_PWA__: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly',
    useNuxtApp: 'readonly',
    // definePageMeta: 'readonly'
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    'eslint:recommended',
    '@wowissu/eslint-config/common',
    '@wowissu/eslint-config/file-progress'
  ],

  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
    tsconfigRootDir: __dirname,
    requireConfigFile: false
  },

  overrides: [
    {
      files: ['*.js'],
      env: {
        node: true,
        es6: true,
        browser: true
      },
      extends: [
        '@wowissu/eslint-config/@babel'
      ]
    },
    {
      files: ['*.ts', '*.tsx', '*.vue'],
      env: {
        node: true,
        browser: true
      },
      extends: [
        '@wowissu/eslint-config/ts',
        '@wowissu/eslint-config/ts/type-checking',
        '@wowissu/eslint-config/vue/vue3'
      ],
      rules: {
        'no-undef': 'off',
        '@typescript-eslint/restrict-template-expressions': [1, {
          allowNumber: true
        }],
        "@typescript-eslint/no-misused-promises": [
          "error",
          {
            "checksVoidReturn": false
          }
        ]
      }
    }
  ]
};
