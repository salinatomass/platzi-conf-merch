import React from 'react';
import { createContext, useContext } from 'react';
import useInitialState from '../hooks/useInitialState';

const AppContext = createContext({});

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

export const AppProvider = ({ children }) => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
  );
};
