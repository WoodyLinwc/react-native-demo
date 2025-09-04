import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AccountSettingsScreen: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);
  const [autoSyncEnabled, setAutoSyncEnabled] = React.useState(true);

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6">
        {/* Account Section */}
        <View className="bg-white rounded-lg p-4 mb-6 shadow-sm">
          <Text className="text-xl font-bold mb-4 text-gray-800">Account</Text>

          <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
            <Icon name="person" size={24} color="#6b7280" />
            <View className="ml-3 flex-1">
              <Text className="text-gray-800 text-lg">Profile Information</Text>
              <Text className="text-gray-500 text-sm">
                Update your personal details
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color="#6b7280" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
            <Icon name="lock" size={24} color="#6b7280" />
            <View className="ml-3 flex-1">
              <Text className="text-gray-800 text-lg">Change Password</Text>
              <Text className="text-gray-500 text-sm">
                Update your account password
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color="#6b7280" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center py-3">
            <Icon name="security" size={24} color="#6b7280" />
            <View className="ml-3 flex-1">
              <Text className="text-gray-800 text-lg">Security Settings</Text>
              <Text className="text-gray-500 text-sm">
                Two-factor authentication, sessions
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color="#6b7280" />
          </TouchableOpacity>
        </View>

        {/* App Settings Section */}
        <View className="bg-white rounded-lg p-4 mb-6 shadow-sm">
          <Text className="text-xl font-bold mb-4 text-gray-800">
            App Settings
          </Text>

          <View className="flex-row items-center justify-between py-3 border-b border-gray-100">
            <View className="flex-row items-center flex-1">
              <Icon name="notifications" size={24} color="#6b7280" />
              <View className="ml-3">
                <Text className="text-gray-800 text-lg">
                  Push Notifications
                </Text>
                <Text className="text-gray-500 text-sm">
                  Receive alerts and updates
                </Text>
              </View>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              thumbColor={notificationsEnabled ? '#3b82f6' : '#f4f3f4'}
              trackColor={{ false: '#d1d5db', true: '#93c5fd' }}
            />
          </View>

          <View className="flex-row items-center justify-between py-3 border-b border-gray-100">
            <View className="flex-row items-center flex-1">
              <Icon name="dark-mode" size={24} color="#6b7280" />
              <View className="ml-3">
                <Text className="text-gray-800 text-lg">Dark Mode</Text>
                <Text className="text-gray-500 text-sm">Enable dark theme</Text>
              </View>
            </View>
            <Switch
              value={darkModeEnabled}
              onValueChange={setDarkModeEnabled}
              thumbColor={darkModeEnabled ? '#3b82f6' : '#f4f3f4'}
              trackColor={{ false: '#d1d5db', true: '#93c5fd' }}
            />
          </View>

          <View className="flex-row items-center justify-between py-3">
            <View className="flex-row items-center flex-1">
              <Icon name="sync" size={24} color="#6b7280" />
              <View className="ml-3">
                <Text className="text-gray-800 text-lg">Auto Sync</Text>
                <Text className="text-gray-500 text-sm">
                  Automatically sync data
                </Text>
              </View>
            </View>
            <Switch
              value={autoSyncEnabled}
              onValueChange={setAutoSyncEnabled}
              thumbColor={autoSyncEnabled ? '#3b82f6' : '#f4f3f4'}
              trackColor={{ false: '#d1d5db', true: '#93c5fd' }}
            />
          </View>
        </View>

        {/* Other Settings Section */}
        <View className="bg-white rounded-lg p-4 shadow-sm">
          <Text className="text-xl font-bold mb-4 text-gray-800">Other</Text>

          <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
            <Icon name="help" size={24} color="#6b7280" />
            <View className="ml-3 flex-1">
              <Text className="text-gray-800 text-lg">Help & Support</Text>
              <Text className="text-gray-500 text-sm">
                Get help and contact support
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color="#6b7280" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
            <Icon name="info" size={24} color="#6b7280" />
            <View className="ml-3 flex-1">
              <Text className="text-gray-800 text-lg">About</Text>
              <Text className="text-gray-500 text-sm">
                App version and information
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color="#6b7280" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center py-3">
            <Icon name="logout" size={24} color="#ef4444" />
            <View className="ml-3">
              <Text className="text-red-500 text-lg">Sign Out</Text>
              <Text className="text-gray-500 text-sm">
                Sign out of your account
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AccountSettingsScreen;
