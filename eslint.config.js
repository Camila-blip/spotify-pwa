module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest"
    },
    plugins: ["@typescript-eslint", "react"],
    rules: {
        "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
        "react/react-in-jsx-scope": "off",
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "react/prop-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "react/no-unknown-property": "off",
        "react/display-name": "off",
        "react/no-unescaped-entities": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-non-null-assertion": "off"
    }
};
