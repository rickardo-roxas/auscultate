import js from '@eslint/js';
import node from 'eslint-plugin-node';
import globals from 'globals';

export default [
  {
    ignores: ['dist', 'node_modules', 'test/api.test.js', 'src/configs/index.config.js'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2021
      }
    },
    plugins: {
      node,
    }, 
    rules: {
      ...js.configs.recommended.rules,
      'semi': ['error', 'always'], 
      'node/no-unsupported-features/es-syntax': 'off', 
      'node/no-unpublished-require': 'off', 
      'no-unused-vars': ['warn', { 
        varsIgnorePattern: '^[A-Z_]',
        argsIgnorePattern: '^_'
      }],
      'no-console': 'off', 
    },
  }
];