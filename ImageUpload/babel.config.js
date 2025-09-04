module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    'react-native-worklets/plugin', // Updated plugin reference - This must be the last plugin
  ],
};
