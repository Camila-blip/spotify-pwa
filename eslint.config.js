import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";

export default [
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parser: typescriptEslintParser,
            globals: {
                browser: true,
                es2021: true,
                node: true
            }
        },
        plugins: {
            "@typescript-eslint": typescriptEslintPlugin,
            react: reactPlugin
        },
        rules: {
            "react/jsx-filename-extension": [
                1,
                { extensions: [".ts", ".tsx"] }
            ],
            "react/react-in-jsx-scope": "off",
            "linebreak-style": ["error", "unix"],
            quotes: ["error", "double"],
            semi: ["error", "always"],
            "react/prop-types": "error",
            "@typescript-eslint/no-explicit-any": "error",
            "react/no-unknown-property": "off",
            "react/display-name": "off",
            "react/no-unescaped-entities": "off",
            "@typescript-eslint/no-namespace": "off",
            "@typescript-eslint/no-non-null-assertion": "off",
            "no-console": ["error", { allow: ["warn", "error"] }]
        },
        settings: {
            react: {
                version: "detect"
            }
        }
    }
];
