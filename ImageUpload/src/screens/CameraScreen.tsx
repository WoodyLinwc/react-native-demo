import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type CameraScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Camera'
>;

interface Props {
  navigation: CameraScreenNavigationProp;
}

const CameraScreen: React.FC<Props> = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1 justify-center items-center bg-black">
      <Text className="text-white text-xl mb-8">Camera Screen</Text>
      <Text className="text-white mb-8">Camera functionality will go here</Text>

      <TouchableOpacity
        onPress={handleGoBack}
        className="bg-red-500 px-6 py-3 rounded"
      >
        <Text className="text-white">Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CameraScreen;
