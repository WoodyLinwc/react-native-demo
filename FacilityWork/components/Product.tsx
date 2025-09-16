import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

const Product = ({ products }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={style.container}>
          <Text>{item.title}</Text>
          <Text style={style.description}>{item.description}</Text>

          {/* Tags Array */}
          <View>
            {item.tags.map((tag, index) => (
              <Text key={index} style={style.tab}>
                {tag}
              </Text>
            ))}
          </View>

          {/* Dimensions Object */}
          <View>
            {Object.entries(item.dimensions).map(([key, value]) => (
              <Text key={key} style={style.dimension}>
                {key}: {value}
              </Text>
            ))}
          </View>
        </View>
      )}
    />
  );
};

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
  },
  description: {
    color: 'red',
  },
  tab: {
    fontWeight: 'bold',
  },
  dimension: {
    fontStyle: 'italic',
  },
});

export default Product;
