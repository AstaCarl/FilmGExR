import React from 'react';

// Create a Context
export const LoaderContext = React.createContext();

// Create a Provider
export const LoaderProvider = ({ children }) => {
  const [hasLoaded, setHasLoaded] = React.useState(false);

  return (
    <LoaderContext.Provider value={{ hasLoaded, setHasLoaded }}>
      {children}
    </LoaderContext.Provider>
  );
};