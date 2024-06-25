import { Container } from '../Container';
import TextWrapper from '../TextWrapper';

const MoreCost = ({ costs }) => {
  return (
    <Container section={'1st'}>
      <TextWrapper $_width='100%' $_styled items={costs}>Custos adicionais conforme necessidade</TextWrapper>
    </Container>
  );
};

export default MoreCost;
