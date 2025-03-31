module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@src': './src',
          '@screens': './src/screens',
          '@components': './src/components',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@navigators': './src/navigators',
          '@constants': './src/constants',
          '@types': './src/types',
          '@stores': './src/stores',
          '@assets': './src/assets',
          '@configs': './src/configs',
          '@enums': './src/enums',
          '@models': './src/models',
          '@helpers': './src/helpers',
        },
      },
    ],
  ],
};
