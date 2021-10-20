import { useState, useEffect } from 'react';

const API = 'https://platzi-store-webpack-api.herokuapp.com/api/v1';

const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return products;
};

export default useGetProducts;
