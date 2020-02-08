module.exports = {
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
        rootPathPrefix: '~/',
      },
    ],
  ],
};
