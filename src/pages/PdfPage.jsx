import styled from 'styled-components';
import Bar from '../components/Bar';
import Objective from '../components/FirstSection/Objective';
import ActualStatus from '../components/FirstSection/ActualStatus';
import Scope from '../components/FirstSection/Scope';
import TestedParameters from '../components/FirstSection/TestedParameters';
import Materials from '../components/SecondSection/Materials';
import Equipament from '../components/SecondSection/Equipament';
import Services from '../components/SecondSection/Services';
import MoreCost from '../components/SecondSection/MoreCost';
import { useContext } from 'react';
import { PdfRef } from '../context/PdfContext';
import { ObjContext } from '../context/ObjContext';

const Span = styled.span``;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;

  &:nth-child(odd){
    page-break-after: always;
  }

  /* @media print {
    &:nth-child(1) {
      page-break-after: always;
    }
    &:nth-child(2) {
      page-break-after: always;
    }
  } */
`;

const PdfPage = () => {
  const { pdfRef } = useContext(PdfRef);
  const { objective, status, solutions, params, materials, equipaments, services, costs, images } = useContext(ObjContext);

  return (
    <Span ref={pdfRef}>
      <Container>
        <Bar>Anexo</Bar>
        <Objective objective={objective} />
        <ActualStatus status={status} images={images} />
        <Scope solution={solutions} />
        <TestedParameters params={params} />
      </Container>
      <Container>
        <Bar>Anexo</Bar>
        <Materials materials={materials} />
        <Equipament equipaments={equipaments} />
        <Services services={services} />
        <MoreCost costs={costs} />
      </Container>
    </Span>
  );
};

export default PdfPage;
