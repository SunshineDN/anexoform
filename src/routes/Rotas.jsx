import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
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

    const div = document.createElement('div');
    const root = ReactDOM.createRoot(div);
    
    // Renderiza o componente ComponenteParaImprimir
    root.render(<Pdf />);

    const htmlString = div.innerHTML;

    doc.html(htmlString, {
      callback: () => {
        doc.save('componente_para_imprimir.pdf');
      }
    });
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
