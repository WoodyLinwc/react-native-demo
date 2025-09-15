import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Product from '../../components/Product';

const URL = 'https://dummyjson.com/products';

const InventoryScreen = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error('Network Error');
        }

        const data = await response.json();

        setProduct(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Inventory Screen</Text>

      <Text>Fetch first 3 products, </Text>
      <Product product={product.slice(0, 3)} />
    </View>
  );
};

export default InventoryScreen;
