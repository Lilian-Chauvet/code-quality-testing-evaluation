import pluginJs from '@eslint/js';
import eslintPlugin PrettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
export default defineConfig([
{ languageOptions: { globals: { ...globals.node } } },
pluginJs.configs.recommended,
eslintPlugin PrettierRecommended,
{ ignores: ['node_modules/**'] },
]);