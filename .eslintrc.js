module.exports = {
  extends: 'yc-react',
  rules: {
    'space-before-function-paren': [
      'error',
      { anonymous: 'never', named: 'never', asyncArrow: 'always' }
    ],
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
    'no-confusing-arrow': 'off',
     /* Disable this rule because of an issue reported at
    https://github.com/babel/babel-eslint/issues/530#issuecomment-444178944 */
    'template-curly-spacing' : "off",
    indent : "off"
  }
};
