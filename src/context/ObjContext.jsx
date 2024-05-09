import { createContext, useState } from 'react';

export const ObjContext = createContext();

export const ObjContextProvider = ({ children }) => {
  // Exemplo: 'Identificar 142 pontos de rede;',
  const [status, setStatus] = useState([]);

  // Exemplo: 'Identificar 142 pontos de rede;',
  const [solution, setSolution] = useState([]);

  // Exemplo: 'Fazer a certificação requer equipamentos especializados e envolve uma série de parâmetros a serem testados conforme determinação da norma técnica ANSI/TIA-568-C (2009).',
  const [params, setParams] = useState([]);

  // Exemplo: { name: 'Fita Rotuladora Tzr-Fx231 12Mm', quantity: 2 }
  const [materials, setMaterials] = useState([]);

  // Exemplo: { name: 'EAP620HD TP-LINK', quantity: 2 }
  const [equipaments, setEquipaments] = useState([]);

  // Exemplo: 'Identificação do Ponto de Telecomunicação',
  const [services, setServices] = useState([]);

  // Exemplo: 'Substituição de cada Patch Cord 1,5m Soho Plus',
  const [costs, setCosts] = useState([]);

  const [images, setImages] = useState([]);

  return (
  <ObjContext.Provider value={{
    status, setStatus,
    solution, setSolution,
    params, setParams,
    materials, setMaterials,
    equipaments, setEquipaments,
    services, setServices,
    costs, setCosts,
    images, setImages
  }}>
    {children}
  </ObjContext.Provider>
  );
};
