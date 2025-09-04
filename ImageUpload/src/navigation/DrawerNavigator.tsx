import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabNavigator from './TabNavigator';
import AccountSettingsScreen from '../screens/drawer/AccountSettingsScreen';
import ReportsAnalyticsScreen from '../screens/drawer/ReportsAnalyticsScreen';

// Define the drawer navigator parameter list
export type DrawerParamList = {
  Main: undefined;
  AccountSettings: undefined;
  ReportsAnalytics: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

// Drawer Navigator Component
function DrawerNavigator(): React.JSX.Element {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#f9fafb',
          width: 280,
        },
        drawerActiveTintColor: '#3b82f6',
        drawerInactiveTintColor: '#6b7280',
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: '500',
        },
        headerStyle: {
          backgroundColor: '#ffffff',
          elevation: 4,
          shadowOpacity: 0.1,
        },
        headerTintColor: '#374151',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: '600',
        },
      }}
    >
      <Drawer.Screen
        name="Main"
        component={TabNavigator}
        options={{
          title: 'Dashboard',
          drawerLabel: 'Home',
          drawerIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="AccountSettings"
        component={AccountSettingsScreen}
        options={{
          title: 'Account & Settings',
          drawerLabel: 'Account & Settings',
          drawerIcon: ({ color, size }) => (
            <Icon name="account-circle" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="ReportsAnalytics"
        component={ReportsAnalyticsScreen}
        options={{
          title: 'Reports & Analytics',
          drawerLabel: 'Reports & Analytics',
          drawerIcon: ({ color, size }) => (
            <Icon name="analytics" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
