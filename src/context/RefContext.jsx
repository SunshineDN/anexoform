import { createContext, useRef } from 'react';

export const RefContext = createContext();

export const RefContextProvider = ({ children }) => {

  const pdfRef = useRef(null);

  return (
  <RefContext.Provider value={{
    pdfRef
  }}>
    {children}
  </RefContext.Provider>
  );
};
