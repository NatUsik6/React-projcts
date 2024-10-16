module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "eslint: recommended",
        "plugin: @typescript-eslint/recommended",
        "plugin: prettier/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "react",
        "react-compiler",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        "@typescript-eslint/no-explicit-any": "error",
        "react-compiler/react-compiler": "error",
        "prettier/prettier": "error",
    }
}
