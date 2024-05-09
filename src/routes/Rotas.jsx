import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pdf from '../pages/PdfPage';
import Form from '../pages/Form';
import { PrivateRoute } from './PrivateRoute';
import { ObjContextProvider } from '../context/ObjContext';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Rotas = () => {
  // const handleSaveAsPDF = () => {
  //   const pdf = new jsPDF();
  //   const printDocument = pdfRef.current;
  //   pdf.text('Componente para Imprimir', 10, 10);
  //   pdf.autoTable({ html: '#content' });
  //   pdf.save('componente_para_imprimir.pdf');
  // };

  const handleSaveAsPDF = () => {
    const doc = new jsPDF();
    
    // Acessa a rota da página para PDF
    window.location.href = '/pdf';
    
    // Aguarda um curto período para garantir que a página seja completamente carregada
    setTimeout(() => {
      console.log('Aguardando 1 segundo...');
      // Captura o conteúdo HTML do componente renderizado
      const componenteParaPDF = document.getElementById('pdf');
      const htmlString = componenteParaPDF.innerHTML;
      
      // Adiciona o conteúdo HTML ao documento PDF
      doc.html(htmlString, {
        callback: () => {
          // Salva o documento PDF
          doc.save('componente_para_pdf.pdf');
        }
      });
    }, 1000); // Tempo de espera de 1 segundo
  };



  return (
    <BrowserRouter>
      <ObjContextProvider>
        <Routes>
          <Route path='/' element={<Form savePdf={handleSaveAsPDF} />} />
          <Route path='/pdf' element={
            <PrivateRoute>
              <Pdf />
            </PrivateRoute>
          } />
        </Routes>
      </ObjContextProvider>
    </BrowserRouter>
  );
};

export default Rotas;
