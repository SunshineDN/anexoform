import { Description, Line, Title } from '../Generals';
import { Container } from '../Container';


const Objective = ({ objective }) => {
  return (
    <Container section={'1st'}>
        <Title>Objetivo</Title>
        <Description>
          {objective}
        </Description>
      <Line />
    </Container>
  );
};

export default Objective;
