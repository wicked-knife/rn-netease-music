module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src',
          '@API': './src/API',
        },
      },
    ],
    [
      "babel-plugin-inline-import",
      {
        "extensions": [".svg"]
      }
    ]
  ],
};
