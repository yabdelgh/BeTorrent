import { dirname } from "path";
import { fileURLToPath } from "url";
import typescriptParser from "@typescript-eslint/parser";
import typescriptESLintPlugin from "@typescript-eslint/eslint-plugin";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
       
      ignores: ['.next/*'],
 
      files: ['**/*.ts', '**/*.tsx'],
      languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },

    rules: {
      "react/no-unescaped-entities": "warn",
    },
  },
];

export default eslintConfig;
