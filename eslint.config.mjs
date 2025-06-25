// eslint.config.js
import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2021,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react: pluginReact,
        },
        rules: {
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
            'indent': ['error', 4],
            'no-trailing-spaces': 'error',
            'space-in-parens': ['error', 'never'],
            'comma-dangle': ['error', 'always-multiline'],
            'eol-last': ['error', 'always'],
            'comma-spacing': ['error', { before: false, after: true }],
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
            'react/jsx-uses-vars': 'error',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    pluginJs.configs.recommended,
];
