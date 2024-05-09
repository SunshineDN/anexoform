import { RefContextProvider } from './context/RefContext';
import Rotas from './routes/Rotas';

function App() {
  // const [items1] = useState([
  //   '3 Racks existentes;',
  //   'Central telefônica existente',
  //   'Cabos expostos;',
  //   'Cabos sem identificação.',
  //   'Cabos sem identificação.',
  //   'Cabos sem identificação.',
  //   'Cabos sem identificação.'
  // ]);

  // const [items2] = useState([
  //   'Identificar 142 pontos de rede;',
  //   'Organização de cabos Cat6e;',
  //   'Certificação dos cabos;',
  //   'Certificação dos cabos;',
  //   'Certificação dos cabos;',
  //   'Certificação dos cabos;',
  //   'Certificação dos cabos;',
  //   'Instalação de Rack 44U;',
  //   ' Desmobilização de 2 Racks;',
  //   'Instalação de régua de tomadas;',
  //   'A identificação dos pontos e patch cords ocorrerá conforme modelo abaixo;',
  // ]);

  // const [items3] = useState([
  //   'Fazer a certificação requer equipamentos especializados e envolve uma série de parâmetros a serem testados conforme determinação da norma técnica ANSI/TIA-568-C (2009).',
  //   'Configuração de Terminação (Wire Map);',
  //   'Comprimento do Cabo;',
  //   'Perda de Inserção (Atenuação);',
  //   'Perda de Retorno (Impedância);',
  //   'Paradiafonia (NEXT), PS-NEXT, ELNEXT e PS-ELNEXT;',
  //   'Relação Atenuação/Paradiafonia (ACR);',
  //   'Atraso de Propagação (Delay);',
  //   'Desvio no Atraso de Propagação (Delay Skew).',
  // ]);

  // const [materials] = useState([
  //   {
  //     name: 'Fita Rotuladora Tzr-Fx231 12Mm',
  //     quantity: 2
  //   },
  //   {
  //     name: 'Fita Velcro 19Mmx5M',
  //     quantity: 6
  //   },
  //   {
  //     name: 'Rack De Piso 44U 970Mm',
  //     quantity: 1
  //   },
  //   {
  //     name: 'Patch Cord Cat 6 de 1,5M',
  //     quantity: 142
  //   },
  //   {
  //     name: 'Bandeja Com Fixação Frontal 1P 1U X 500M',
  //     quantity: 3
  //   },
  //   {
  //     name: 'Patch Panel 24P Cat6',
  //     quantity: 6
  //   },
  //   {
  //     name: 'Guia De Cabo 1U X 55Mm',
  //     quantity: 9
  //   },
  //   {
  //     name: 'Kit Porca Gaiola',
  //     quantity: 80
  //   },
  //   {
  //     name: 'Régua 08 Tomadas NBR 20A',
  //     quantity: 2
  //   },
  // ]);

  // const [equipaments] = useState([
  //   {
  //     name: 'EAP620HD TP-LINK',
  //     quantity: 2
  //   }
  // ]);

  // const [services] = useState([
  //   'Identificação do Ponto de Telecomunicação',
  //   'Instalação e montagem de Rack de Piso',
  //   'Montagem de Patch Panel Cat.6',
  //   'Instalação de Patch Cord',
  // ]);

  // const [costs] = useState([
  //   'Substituição de cada Patch Cord 1,5m Soho Plus',
  //   'Substituição de cada Conector RJ-45 Fêmea',
  //   'Desmobilização de Rack'
  // ]);

  return (
    <>
      <RefContextProvider>
        <Rotas />
      </RefContextProvider>
    </>
  );
}

export default App;
