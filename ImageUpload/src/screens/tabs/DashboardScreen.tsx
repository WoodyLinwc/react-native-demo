import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

type DashboardScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Main'
>;

interface Props {
  navigation: DashboardScreenNavigationProp;
}

const DashboardScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center items-center bg-blue-50">
      <Text className="text-2xl font-bold mb-4 text-blue-800">Dashboard</Text>
      <Text className="text-gray-600 mb-8 text-center px-4">
        Overview of key metrics, recent activities, and quick actions
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Camera')}
        className="bg-blue-500 px-6 py-3 rounded mb-4"
      >
        <Text className="text-white">Quick Camera Access</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        className="bg-gray-500 px-6 py-3 rounded"
      >
        <Text className="text-white">Go to Image Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardScreen;
