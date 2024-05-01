import { Container } from '../Container';
import TextWrapper from '../TextWrapper';

const MoreCost = ({ costs }) => {
  return (
    <Container section={'1st'}>
      <TextWrapper $_styled items={costs}>Custos aicionais conforme necessidade</TextWrapper>
    </Container>
  );
};

export default MoreCost;
