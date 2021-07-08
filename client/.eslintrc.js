module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
      ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
		'padded-blocks': 0,
		'spaced-comment': 0, // prevent spaced comment diagrams
		'indent': [1, 'tab', { 'SwitchCase': 1 }] // set indenation to tabs and enable for switch statements
    }
};
