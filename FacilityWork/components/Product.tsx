import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Product = ({ product }) => {
  return (
    <View>
      {product.map(p => (
        <View key={p.id} style={style.container}>
          <Text>{p.title}</Text>
          <Text style={style.description}>{p.description}</Text>
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
});

export default Product;
