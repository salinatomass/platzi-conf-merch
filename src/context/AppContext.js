import React, { useEffect, useReducer } from 'react';
import { createContext, useContext } from 'react';
import { appReducer, initialState } from './appReducer';
import appActions from './appActions';
import useGetProducts from '../hooks/useGetProducts';

const AppContext = createContext(initialState);

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const products = useGetProducts();

  const loadProducts = () => {
    dispatch({ type: appActions.LOAD_PRODUCTS, payload: products });
  };

  const addToCart = (product) => {
    dispatch({ type: appActions.ADD_TO_CART, payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: appActions.REMOVE_FROM_CART, payload: product });
  };

  const addToBuyer = (buyer) => {
    dispatch({ type: appActions.ADD_TO_BUYER, payload: buyer });
  };

  useEffect(() => {
    loadProducts();
  }, [products]);

  return (
    <AppContext.Provider
      value={{ ...state, addToCart, removeFromCart, addToBuyer }}
    >
      {children}
    </AppContext.Provider>
  );
};
