import pluginJs from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default [
  { ignores: ['node_modules/**'] },
  { languageOptions: { globals: { ...globals.node } } },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended
];