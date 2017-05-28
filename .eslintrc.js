module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "warn", 4
        ],
        "linebreak-style": [
            "warn", "unix"
        ],
        "quotes": [
            "warn", "double"
        ],
        "semi": [
            "warn", "never"
        ],
        "no-undef": "warn",
        "no-unused-vars": "warn",
        "quotes": [
            "error",
            "double", {
                "allowTemplateLiterals": true
            }
        ],
        "space-before-function-paren": [
            "error", {
                "anonymous": "never",
                "named": "never",
                "asyncArrow": "ignore"
            }
        ],
        "semi-spacing": "error"
    }
};