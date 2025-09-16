import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Product = ({ products }) => {
  return (
    <View>
      {products.map(p => (
        <View key={p.id} style={style.container}>
          <Text>{p.title}</Text>
          <Text style={style.description}>{p.description}</Text>

          {/* Tags Array */}
          <View>
            {p.tags.map((tag, index) => (
              <Text key={index} style={style.tab}>
                {tag}
              </Text>
            ))}
          </View>

          {/* Dimensions Object */}
          <View>
            {Object.entries(p.dimensions).map(([key, value]) => (
              <Text key={key} style={style.dimension}>
                {key}: {value}
              </Text>
            ))}
          </View>
        </View>
      ))}
    </View>
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
