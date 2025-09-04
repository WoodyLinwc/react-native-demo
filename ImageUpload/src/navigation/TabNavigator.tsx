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

// Individual icon components for each tab
const DashboardIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon name="dashboard" size={size} color={color} />
);

const WorkOrdersIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon name="assignment" size={size} color={color} />
);

const InventoryIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon name="inventory-2" size={size} color={color} />
);

const CommunicationIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => <Icon name="notifications" size={size} color={color} />;

const ProfileIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon name="person" size={size} color={color} />
);

const Tab = createBottomTabNavigator<TabParamList>();

// Tab Navigator Component
function TabNavigator(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#3b82f6',
        tabBarInactiveTintColor: '#6b7280',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e5e7eb',
          paddingBottom: 5,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: DashboardIcon,
        }}
      />
      <Tab.Screen
        name="WorkOrders"
        component={WorkOrdersScreen}
        options={{
          title: 'Work Orders',
          tabBarLabel: 'Tasks',
          tabBarIcon: WorkOrdersIcon,
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={InventoryScreen}
        options={{
          title: 'Inventory',
          tabBarLabel: 'Parts',
          tabBarIcon: InventoryIcon,
        }}
      />
      <Tab.Screen
        name="Communication"
        component={CommunicationScreen}
        options={{
          title: 'Communication',
          tabBarLabel: 'Notifications',
          tabBarIcon: CommunicationIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarLabel: 'More',
          tabBarIcon: ProfileIcon,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
