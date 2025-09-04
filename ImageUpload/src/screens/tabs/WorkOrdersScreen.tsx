import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const WorkOrdersScreen: React.FC = () => {
  return (
    <ScrollView className="flex-1 bg-orange-50">
      <View className="p-6">
        <Text className="text-2xl font-bold mb-4 text-orange-800">
          Work Orders
        </Text>
        <Text className="text-gray-600 mb-6">
          Manage and track work orders and tasks
        </Text>

        <View className="bg-white p-4 rounded-lg mb-4 border-l-4 border-orange-500">
          <Text className="text-lg font-semibold mb-2">Active Tasks</Text>
          <Text className="text-gray-600">
            • Maintenance scheduled for Unit A
          </Text>
          <Text className="text-gray-600">
            • Inspection due for Equipment B
          </Text>
          <Text className="text-gray-600">• Repair request for System C</Text>
        </View>

        <View className="bg-white p-4 rounded-lg border-l-4 border-green-500">
          <Text className="text-lg font-semibold mb-2">Completed Today</Text>
          <Text className="text-gray-600">• Replaced filter in Unit D</Text>
          <Text className="text-gray-600">• Updated software for System E</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default WorkOrdersScreen;
