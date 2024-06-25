import TextWrapper from '../TextWrapper';
import { Line, Title } from '../Generals';
import { Container } from '../Container';

const Scope = ({ solution }) => {
  return (
    <Container section={'1st'}>
      <Title>Escopo da Proposta</Title>
      <TextWrapper $_width items={solution}>Solução Cabeamento Estruturado</TextWrapper>
      <Line />
    </Container> 
  );
};

export default Scope;
