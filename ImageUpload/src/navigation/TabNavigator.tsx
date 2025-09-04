import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Import tab screens
import DashboardScreen from '../screens/tabs/DashboardScreen';
import WorkOrdersScreen from '../screens/tabs/WorkOrdersScreen';
import InventoryScreen from '../screens/tabs/InventoryScreen';
import CommunicationScreen from '../screens/tabs/CommunicationScreen';
import ProfileScreen from '../screens/tabs/ProfileScreen';

// Define the tab navigator parameter list
export type TabParamList = {
  Dashboard: undefined;
  WorkOrders: undefined;
  Inventory: undefined;
  Communication: undefined;
  Profile: undefined;
};

// Type for tab icon props
interface TabIconProps {
  route: { name: keyof TabParamList };
  color: string;
  size: number;
}

// Icon component - defined outside of TabNavigator
const TabIcon: React.FC<TabIconProps> = ({ route, color, size }) => {
  let iconName: string;

  switch (route.name) {
    case 'Dashboard':
      iconName = 'dashboard';
      break;
    case 'WorkOrders':
      iconName = 'assignment';
      break;
    case 'Inventory':
      iconName = 'inventory-2';
      break;
    case 'Communication':
      iconName = 'notifications';
      break;
    case 'Profile':
      iconName = 'person';
      break;
    default:
      iconName = 'help';
  }

  return <Icon name={iconName} size={size} color={color} />;
};

const Tab = createBottomTabNavigator<TabParamList>();

// Tab Navigator Component
function TabNavigator(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#3b82f6',
        tabBarInactiveTintColor: '#6b7280',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e5e7eb',
          paddingBottom: 5,
          height: 60,
        },
        tabBarIcon: ({ color, size }) => (
          <TabIcon route={route} color={color} size={size} />
        ),
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="WorkOrders"
        component={WorkOrdersScreen}
        options={{
          title: 'Work Orders',
          tabBarLabel: 'Tasks',
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={InventoryScreen}
        options={{
          title: 'Inventory',
          tabBarLabel: 'Parts',
        }}
      />
      <Tab.Screen
        name="Communication"
        component={CommunicationScreen}
        options={{
          title: 'Communication',
          tabBarLabel: 'Notifications',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarLabel: 'More',
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
