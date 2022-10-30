module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:tailwindcss/recommended"
    ],
    ignorePatterns: ["dist/*", "tailwind.config.js"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
    },
    plugins: ["@typescript-eslint", "tailwindcss", "import"],
    root: true,
    rules: {
        "import/order": [
            "error",
            {
                "pathGroups": [
                    {
                        "pattern": "react",
                        "group": "builtin",
                        "position": "before"
                    }
                ],
                "pathGroupsExcludedImportTypes": ["react"]
            }
        ]
    },
    settings: {
        "import/resolver": {
            typescript: true,
            node: true
        }
    }
};
