import React from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const handleNavigate = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-xl mb-8">Welcome to Image Upload</Text>

      <TouchableOpacity
        onPress={() => handleNavigate('Camera')}
        className="bg-blue-500 px-6 py-3 rounded mb-4"
      >
        <Text className="text-white">Open Camera {`<TouchableOpacity>`}</Text>
      </TouchableOpacity>

      <Pressable
        onPress={() => handleNavigate('Supply')}
        className="bg-green-500 px-6 py-3 rounded"
      >
        <Text className="text-white">Supply Screen &lt;Pressable&gt;</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
