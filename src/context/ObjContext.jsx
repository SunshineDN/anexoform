import { createContext, useState } from 'react';

export const ObjContext = createContext();

export const ObjContextProvider = ({ children }) => {
  // Exemplo: '821/1'
  const [proposal_number, setProposalNumber] = useState('');

  // Exemplo: 'Fornecer materiais e serviços para organizar e identificar 142 pontos de rede, para o cliente: Multilog CD Salvador, situada na Rua José Roberto Otoni, 864 - Valéria, Salvador - BA, 41301-325.';
  const [objective, setObjective] = useState('');

  // Exemplo: 'Identificar 142 pontos de rede;',
  const [status, setStatus] = useState([]);

  // Exemplo: 'Identificar 142 pontos de rede;',
  const [solutions, setSolutions] = useState([]);

  // Exemplo: 'Fazer a certificação requer equipamentos especializados e envolve uma série de parâmetros a serem testados conforme determinação da norma técnica ANSI/TIA-568-C (2009).',
  const [params, setParams] = useState([]);

  // Exemplo: { name: 'Fita Rotuladora Tzr-Fx231 12Mm', quantity: 2, unit: 'cm' }
  const [materials, setMaterials] = useState([]);

  // Exemplo: { name: 'EAP620HD TP-LINK', quantity: 2 }
  const [equipaments, setEquipaments] = useState([]);

  // Exemplo: 'Identificação do Ponto de Telecomunicação',
  const [services, setServices] = useState([]);

  // Exemplo: 'Substituição de cada Patch Cord 1,5m Soho Plus',
  const [costs, setCosts] = useState([]);

  const [condictions, setCondictions] = useState([]);

  const [images, setImages] = useState([]);

  return (
  <ObjContext.Provider value={{
    proposal_number, setProposalNumber,
    objective, setObjective,
    status, setStatus,
    solutions, setSolutions,
    params, setParams,
    materials, setMaterials,
    equipaments, setEquipaments,
    services, setServices,
    costs, setCosts,
    condictions, setCondictions,
    images, setImages
  }}>
    {children}
  </ObjContext.Provider>
  );
};
