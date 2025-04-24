import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    {
        files: ["*.ts", "*.tsx"],
    },
    {
        ignores: [
            "**/dist",
            "**/build",
            "**/docs",
            "**/*.md",
            "components/ui/**/*",
        ],
    },
    ...compat.config({
        extends: [
            "next/core-web-vitals",
            "next/typescript",
            "prettier",
            "standard",
            "plugin:tailwindcss/recommended",
            "plugin:import/recommended",
        ],
        rules: {
            semi: ["error"],
            quotes: ["error", "double"],
            "prefer-arrow-callback": ["error"],
            "tailwindcss/no-custom-classname": "off",
            "import/order": [
                "error",
                {
                    groups: [
                        "builtin",
                        "external",
                        "internal",
                        ["parent", "sibling"],
                        "index",
                        "object",
                    ],

                    "newlines-between": "always",

                    pathGroups: [
                        {
                            pattern: "@app/**",
                            group: "external",
                            position: "after",
                        },
                    ],

                    pathGroupsExcludedImportTypes: ["builtin"],

                    alphabetize: {
                        order: "asc",
                        caseInsensitive: true,
                    },
                },
            ],
        },
    }),
];

export default eslintConfig;
