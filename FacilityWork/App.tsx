/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';

import TaskScreen from './screens/tabs/TaskScreen';
import InventoryScreen from './screens/tabs/InventoryScreen';
import NotificationScreen from './screens/tabs/NotificationScreen';
import SettingsScreen from './screens/drawer/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Dashboard"
        component={TabNavigator}
        options={{ title: 'Dashboard', headerShown: true }}
      />
      <Drawer.Screen name="Setting" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Tasks"
        component={TaskScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Inventory"
        component={InventoryScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
