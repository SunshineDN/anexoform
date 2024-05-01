import TextWrapper from '../TextWrapper';
import { Line, Title } from '../Generals';
import { Container } from '../Container';

const Scope = ({ items }) => {
  return (
    <Container section={'1st'}>
      <Title>Escopo da Proposta</Title>
      <TextWrapper items={items}>Solução Cabeamento Estruturado</TextWrapper>
      <Line />
    </Container> 
  );
};

export default Scope;
