module.exports = {
  parser: 'babel-eslint',

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base',
  ],

  plugins: [
    'prefer-arrow',
  ],

  settings: {
    react: {
      version: 'detect',
    },
  },

  env: {
    node: true,
    es6: true,
    browser: true,
  },

  rules: {
    'no-await-in-loop': ['off'],
    'object-curly-newline': [0],

    // spacing
    'indent': ['error', 'tab'],
    'no-tabs': ['off'],
    'object-curly-spacing': ['error', 'always'],
    'no-trailing-spaces': ['error'],
    'no-irregular-whitespace': ['error'],

    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      }
    ]
  },
};