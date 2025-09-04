import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const ProfileScreen: React.FC = () => {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6">
        <Text className="text-2xl font-bold mb-4 text-gray-800">Profile</Text>

        <View className="bg-white p-4 rounded-lg mb-4">
          <Text className="text-lg font-semibold mb-2">User Information</Text>
          <Text className="text-gray-600 mb-1">Name: John Technician</Text>
          <Text className="text-gray-600 mb-1">
            Role: Maintenance Specialist
          </Text>
          <Text className="text-gray-600 mb-1">Department: Operations</Text>
          <Text className="text-gray-600">Employee ID: MT001</Text>
        </View>

        <View className="bg-white p-4 rounded-lg mb-6">
          <Text className="text-lg font-semibold mb-3">More Options</Text>

          <TouchableOpacity className="py-3 border-b border-gray-200">
            <Text className="text-gray-700">Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity className="py-3 border-b border-gray-200">
            <Text className="text-gray-700">Help & Support</Text>
          </TouchableOpacity>

          <TouchableOpacity className="py-3 border-b border-gray-200">
            <Text className="text-gray-700">About</Text>
          </TouchableOpacity>

          <TouchableOpacity className="py-3 border-b border-gray-200">
            <Text className="text-gray-700">Privacy Policy</Text>
          </TouchableOpacity>

          <TouchableOpacity className="py-3">
            <Text className="text-red-600">Logout</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="bg-blue-500 px-6 py-3 rounded">
          <Text className="text-white text-center">Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
