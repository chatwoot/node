module.exports = {
  extends: ['airbnb-base/legacy'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    camelcase: 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': ['off']
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'config/webpack/resolve.js'
      }
    }
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    jasmine: true
  },
  globals: {
    __WEBPACK_ENV__: true,
    bus: true
  }
};
