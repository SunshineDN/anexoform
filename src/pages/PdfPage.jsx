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
  return (
    <span id='pdf'>
      <Container>
        <Bar>Anexo</Bar>
        <Objective />
        <ActualStatus status={[]} />
        <Scope solution={[]} />
        <TestedParameters params={[]} />
      </Container>
      <Container>
        <Bar>Anexo</Bar>
        <Materials materials={[]} />
        <Equipament equipaments={[]} />
        <Services services={[]} />
        <MoreCost costs={[]} />
      </Container>
    </span>
  );
};

export default PdfPage;
