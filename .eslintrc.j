/*{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended","prettier"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
        },
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "plugins": ["react", "@typescript-eslint"],
    "rules": {
        "indent": ["warn", "tab"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"]
    }
}*/


const prettierTypescriptRules = require('eslint-config-prettier/prettier').rules;

module.exports = {
"plugins": [
"@getify/proper-arrows",
"sonarjs",
"json-files"
],
"extends": [
"eslint:recommended",
"react-app",
"standard",
"plugin:unicorn/recommended",
"plugin:prettier/recommended",
"plugin:sonarjs/recommended",
"prettier/babel",
"prettier/react",
"prettier/standard",
"prettier/unicorn",
"prettier",
"plugin:jsx-a11y/strict"
],
"overrides": [
{
"files": ["**/*.ts", "**/*.tsx"],
"rules": {
"@typescript-eslint/adjacent-overload-signatures": "error",
"@typescript-eslint/array-type": "error",
"@typescript-eslint/ban-types": "error",
"camelcase": "off",
"indent": "off",
"no-array-constructor": "off",
"@typescript-eslint/no-array-constructor": "error",
"@typescript-eslint/no-empty-interface": "error",
"@typescript-eslint/no-explicit-any": "warn",
"@typescript-eslint/no-inferrable-types": "error",
"@typescript-eslint/no-misused-new": "error",
"@typescript-eslint/no-namespace": "error",
"@typescript-eslint/no-non-null-assertion": "error",
"no-unused-vars": "off",
"@typescript-eslint/no-unused-vars": "error",
"no-use-before-define": "off",
"@typescript-eslint/no-use-before-define": "error",
"no-redeclare": "off",
"@typescript-eslint/no-redeclare": ["error"],
"@typescript-eslint/no-var-requires": "error",
"@typescript-eslint/prefer-namespace-keyword": "error",
"@typescript-eslint/explicit-member-accessibility": "off",
"@typescript-eslint/explicit-function-return-type": "off",
"@typescript-eslint/interface-name-prefix": "off",
"@typescript-eslint/prefer-interface": "off",
"@typescript-eslint/no-parameter-properties": "off",
"jsx-a11y/label-has-for": "off",
"no-useless-constructor": "off",
// style format is managed by prettier
"@typescript-eslint/quotes": "off",
"@typescript-eslint/brace-style": "off",
"@typescript-eslint/comma-spacing": "off",
"@typescript-eslint/func-call-spacing": "off",
"@typescript-eslint/indent": "off",
"@typescript-eslint/keyword-spacing": "off",
"@typescript-eslint/member-delimiter-style": "off",
"@typescript-eslint/no-extra-parents": "off",
"@typescript-eslint/no-extra-semi": "off",
"@typescript-eslint/semi": "off",
"@typescript-eslint/space-before-function-parent": "off",
"@typescript-eslint/type-annotation-spacing": "off",
...prettierTypescriptRules
}
},
{
files: ['*'],
rules: {
'unicorn/filename-case': ['error', { case: 'kebabCase' }]
}
},
{
files: ['**/*.ts'],
rules: {
'unicorn/filename-case': ['error', { case: 'pascalCase' }]
}
},
{
files: ['**/*.test.*', '**/*native.*', '**/index.*', '**/styles.*', '**/connect.*'],
rules: {
'unicorn/filename-case': 'off'
}
},
{
"files": ["package.json"],
"rules": {
"json-files/sort-package-json": "error"
}
}
],
"rules": {
"eol-last": "error",
"linebreak-style": ["error", "unix"],
"curly": ["error", "all"],
"no-console": "warn",
"unicorn/prevent-abbreviations": "off",
"@getify/proper-arrows/where": [
"error",
{ global: true, property: false, export: false, trivial: false }
],
"array-callback-return": "error",
"unicorn/consistent-function-scoping": "off",
"unicorn/no-null": "off",
"unicorn/no-reduce": "off",
"unicorn/no-useless-undefined": "off",
"unicorn/prefer-ternary": "off",
"prettier/prettier": "error",
"no-debugger": "error",
}
}