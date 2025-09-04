// Jest setup file for React Native
require('react-native-gesture-handler/jestSetup');

// Mock react-native-reanimated
try {
  require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests();
} catch (error) {
  // Fallback if reanimated jest utils are not available
  console.warn('React Native Reanimated jest utils not available');
}

// Mock SafeAreaProvider
jest.mock('react-native-safe-area-context', () => {
  const inset = { top: 0, right: 0, bottom: 0, left: 0 };
  return {
    SafeAreaProvider: ({ children }) => children,
    SafeAreaConsumer: ({ children }) => children(inset),
    useSafeAreaInsets: () => inset,
    useSafeAreaFrame: () => ({ x: 0, y: 0, width: 390, height: 844 }),
  };
});

// Global test setup
global.__DEV__ = true;
