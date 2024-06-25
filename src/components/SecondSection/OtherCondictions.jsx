import { Container } from '../Container';
import TextWrapper from '../TextWrapper';

const OtherCondictions = ({ condictions }) => {
  return (
    <Container section={'1st'}>
      <TextWrapper $_width='100%' $_styled items={condictions}>Demais Condições</TextWrapper>
    </Container>
  );
};

export default OtherCondictions;
