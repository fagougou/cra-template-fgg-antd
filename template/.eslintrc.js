module.exports = {
  root: true,
  parser: "babel-eslint",
  "extends": [
    "react-app"
  ],
  "rules": {
    "no-var": 2,
    "quotes": [
      2,
      "single",
      "avoid-escape"
    ],
    "semi": [
      "error",
      "never"
    ],
    "comma-dangle": [
      "warn",
      "never"
    ],
    "indent": [
      "error",
      2
    ],
    "promise/always-return": 0,
    "no-console": 0,
    "promise/no-callback-in-promise": 0,
    "brace-style": 0,
    "no-unsafe-finally": 0,
    "handle-callback-err": 0,
    "promise/valid-params": 0,
    "promise/catch-or-return": 0,
    "no-irregular-whitespace": 0,
    "promise/no-nesting": 0,
    "no-unused-expressions": 0,
    "no-constant-condition": 0,
    "object-curly-spacing": [
      "warn",
      "always"
    ]
  }
}