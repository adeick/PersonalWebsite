module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-no-literals': 0,
    'react/display-name': 0,
    'react/no-unescaped-entities': 0,
    'sort-keys': 0,
    'objects/no-object-properties-one-line': 0,
    'node/no-unpublished-require': 0,
    'max-classes-per-file': ['error', 2],
    'require-unicode-regexp': 0,
    camelcase: [
      'error',
      {
        allow: [
          'client_email',
          'client_id',
          'private_key',
          'project_id',
          'email_address',
        ],
      },
    ],
  },
};
