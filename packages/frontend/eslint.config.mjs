import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";


export default ([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, languageOptions: { globals: {...globals.browser, ...globals.node} } },
  pluginReact.configs.flat.recommended,
]);
