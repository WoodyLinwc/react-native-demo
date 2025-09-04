import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type SupplyScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Supply'
>;

interface Props {
  navigation: SupplyScreenNavigationProp;
}

const SupplyScreen: React.FC<Props> = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-xl mb-4">Supply Screen</Text>
      <Text className="text-gray-600 mb-8">
        Supply functionality will go here
      </Text>

      <Pressable
        onPress={handleGoBack}
        className="bg-purple-500 px-6 py-3 rounded"
      >
        <Text className="text-white">Go Back</Text>
      </Pressable>
    </View>
  );
};

export default SupplyScreen;
