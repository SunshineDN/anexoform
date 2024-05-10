import { createContext, useRef } from 'react';

export const PdfRef = createContext();

export const PdfRefProvider = ({ children }) => {

  const pdfRef = useRef(null);

  return (
  <PdfRef.Provider value={{
    pdfRef
  }}>
    {children}
  </PdfRef.Provider>
  );
};
