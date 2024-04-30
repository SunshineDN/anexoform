import styled from 'styled-components';
import TextWrapper from '../TextWrapper';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  gap: .625rem; // 10px
  width: 100%;

  & * {
    font-size: .625rem; // 10px
  }
`;

const Title = styled.h2`
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
`;

const Line = styled.hr`
  width: 100%;
  height: 1px;
  border: 1px solid #1E1E1E;
  border-radius: .625rem; // 10px
`;

const Scope = ({ items }) => {
  return (
    <Container>
      <Title>Escopo da Proposta</Title>
      <TextWrapper items={items}>Solução Cabeamento Estruturado</TextWrapper>
      <Line />
    </Container> 
  );
};

export default Scope;
