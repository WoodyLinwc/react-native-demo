/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import './global.css';
import { StatusBar, useColorScheme, View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl font-bold text-blue-500">
          Welcome to NativeWind!
        </Text>
        <Text className="text-base text-gray-600 mt-4">
          NativeWind is working correctly!12
        </Text>
      </View>
    </SafeAreaProvider>
  );
}

export default App;
