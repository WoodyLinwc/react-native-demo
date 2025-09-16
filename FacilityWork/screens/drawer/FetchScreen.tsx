import { View, Text } from 'react-native';
import Product from '../../components/Product';
import React, { useEffect, useState } from 'react';

const URL = 'https://dummyjson.com/products';

const FetchScreen = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error('Network Error');
        }

        const result = await response.json();

        setProducts(result.products);
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
        <Text>{error}</Text>
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
      <Text>Fetch Screen</Text>
      <Product products={products.slice(0, 5)} />
    </View>
  );
};

export default FetchScreen;
