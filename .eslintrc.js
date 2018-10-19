module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['react-native', 'jest'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'class-methods-use-this': 0,
    'global-require': 0,
    "no-param-reassign": 0,
    "no-await-in-loop": 0,
    "no-plusplus": 0,
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof']
        ],
        allowSamePrecedence: true
      }
    ],
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
    'import/prefer-default-export': 3,
    'import/no-extraneous-dependencies': [3, { devDependencies: false }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prefer-stateless-function': [3, { ignorePureComponents: true }],
    'react/require-default-props': 2,
    'react/forbid-prop-types': 3,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
  },
  globals: {
    __DEV__: true,
    navigationOptions: true,
    propTypes: true,
    defaultProps: true
  },
  env: {
    'jest/globals': true
  }
};
