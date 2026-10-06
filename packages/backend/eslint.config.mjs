import js from "@eslint/js";
import globals from "globals";


export default ([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, languageOptions: { globals: { ...globals.node} } },
]);