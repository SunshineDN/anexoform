import { createContext, useState } from 'react';

export const InvisibleContext = createContext();

export const InvisibleContextProvider = ({ children }) => {

  const [isInvisible, setIsInvisible] = useState(false);

  return (
  <InvisibleContext.Provider value={{
    isInvisible, setIsInvisible
  }}>
    {children}
  </InvisibleContext.Provider>
  );
};
