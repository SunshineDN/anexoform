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
import OtherCondictions from '../components/SecondSection/OtherCondictions';
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
  const { proposal_number, objective, status, solutions, params, materials, equipaments, services, costs, condictions, images } = useContext(ObjContext);

  return (
    <Span ref={pdfRef}>
      <Container>
        <Bar number={proposal_number}>Proposta Técnica</Bar>
        {objective.length === 0 ? null : <Objective objective={objective} />}
        {status.length === 0 ? null : <ActualStatus status={status} images={images} />}
        {solutions.length === 0 ? null : <Scope solution={solutions} />}
        {params.length === 0 ? null : <TestedParameters params={params} />}
      </Container>

      {
        materials.length === 0 && equipaments.length === 0 && services.length === 0 && costs.length === 0 && condictions.length === 0 ? null :
          <Container>
            <Bar number={proposal_number}>Proposta Técnica</Bar>
            {materials.length === 0 ? null : <Materials materials={materials} />}
            {equipaments.length === 0 ? null : <Equipament equipaments={equipaments} />}
            {services.length === 0 ? null : <Services services={services} />}
            {costs.length === 0 ? null : <MoreCost costs={costs} />}
            {condictions.length === 0 ? null : <OtherCondictions condictions={condictions} />}
          </Container>
      }
    </Span>
  );
};

export default PdfPage;
