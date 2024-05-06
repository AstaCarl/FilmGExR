import React from 'react';

export const LoaderContext = React.createContext();

export const LoaderProvider = ({ children }) => {
  const [hasLoaded, setHasLoaded] = React.useState(false);

  return <LoaderContext.Provider value={{ hasLoaded, setHasLoaded }}>{children}</LoaderContext.Provider>;
};
