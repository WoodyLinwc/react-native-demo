module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-reanimated|react-native-safe-area-context|nativewind)/)',
  ],
};
