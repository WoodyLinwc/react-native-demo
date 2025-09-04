module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-reanimated|react-native-safe-area-context|nativewind|@react-navigation|react-native-gesture-handler|react-native-screens|react-native-vector-icons|react-native-worklets)/)',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
};
