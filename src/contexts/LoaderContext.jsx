import React from 'react';

// Create a new context for the loader
export const LoaderContext = React.createContext();

// LoaderProvider component that wraps its children with context provider
export const LoaderProvider = ({ children }) => {
  // State for tracking if the content has loaded
  const [hasLoaded, setHasLoaded] = React.useState(false);

  // Provide the loading state and its updater function to children
  return <LoaderContext.Provider value={{ hasLoaded, setHasLoaded }}>{children}</LoaderContext.Provider>;
};
