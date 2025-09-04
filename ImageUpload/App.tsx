/**
 * Sample React Native App with Drawer, Tab and Stack Navigation
 * https://github.com/facebook/react-native
 *
 * @format
 */

import './global.css';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import CameraScreen from './src/screens/CameraScreen';
import SupplyScreen from './src/screens/SupplyScreen';

// Import drawer navigator
import DrawerNavigator from './src/navigation/DrawerNavigator';

// Define the navigation stack parameter list
export type RootStackParamList = {
  Main: undefined;
  DrawerMain: undefined;
  Home: undefined;
  Camera: undefined;
  Supply: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

// Main App Component
function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="DrawerMain">
          <Stack.Screen
            name="DrawerMain"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Image Upload' }}
          />
          <Stack.Screen
            name="Camera"
            component={CameraScreen}
            options={{ title: 'Camera' }}
          />
          <Stack.Screen
            name="Supply"
            component={SupplyScreen}
            options={{ title: 'Supply' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
