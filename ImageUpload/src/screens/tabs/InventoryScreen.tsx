import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const InventoryScreen: React.FC = () => {
  return (
    <ScrollView className="flex-1 bg-green-50">
      <View className="p-6">
        <Text className="text-2xl font-bold mb-4 text-green-800">
          Inventory
        </Text>
        <Text className="text-gray-600 mb-6">
          Parts and supplies management
        </Text>

        <View className="bg-white p-4 rounded-lg mb-4 border-l-4 border-green-500">
          <Text className="text-lg font-semibold mb-2">Stock Levels</Text>
          <Text className="text-gray-600">• Filters: 45 units</Text>
          <Text className="text-gray-600">• Bolts M8: 120 pieces</Text>
          <Text className="text-gray-600">• Gaskets: 18 units</Text>
        </View>

        <View className="bg-white p-4 rounded-lg mb-4 border-l-4 border-yellow-500">
          <Text className="text-lg font-semibold mb-2">Low Stock Alert</Text>
          <Text className="text-gray-600">• Oil seals: 3 remaining</Text>
          <Text className="text-gray-600">• Wire connectors: 8 remaining</Text>
        </View>

        <View className="bg-white p-4 rounded-lg border-l-4 border-red-500">
          <Text className="text-lg font-semibold mb-2">Out of Stock</Text>
          <Text className="text-gray-600">• Bearings Type X</Text>
          <Text className="text-gray-600">• Hydraulic hoses 1/2"</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default InventoryScreen;
