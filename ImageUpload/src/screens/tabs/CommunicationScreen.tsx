import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const CommunicationScreen: React.FC = () => {
  return (
    <ScrollView className="flex-1 bg-purple-50">
      <View className="p-6">
        <Text className="text-2xl font-bold mb-4 text-purple-800">
          Communication
        </Text>
        <Text className="text-gray-600 mb-6">
          Notifications and team communication
        </Text>

        <View className="bg-white p-4 rounded-lg mb-4 border-l-4 border-red-500">
          <Text className="text-lg font-semibold mb-2">
            Urgent Notifications
          </Text>
          <Text className="text-gray-600">
            • Emergency maintenance required on Line 3
          </Text>
          <Text className="text-gray-600">• Safety inspection overdue</Text>
        </View>

        <View className="bg-white p-4 rounded-lg mb-4 border-l-4 border-blue-500">
          <Text className="text-lg font-semibold mb-2">Team Messages</Text>
          <Text className="text-gray-600">
            • John: "Parts delivery expected at 2 PM"
          </Text>
          <Text className="text-gray-600">
            • Sarah: "Maintenance complete on Unit A"
          </Text>
          <Text className="text-gray-600">
            • Mike: "Need approval for overtime"
          </Text>
        </View>

        <View className="bg-white p-4 rounded-lg border-l-4 border-green-500">
          <Text className="text-lg font-semibold mb-2">System Updates</Text>
          <Text className="text-gray-600">• New work order assigned</Text>
          <Text className="text-gray-600">• Inventory updated</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default CommunicationScreen;
