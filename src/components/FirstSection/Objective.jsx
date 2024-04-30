import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: .625rem; // 10px
  align-items: flex-start;
  justify-content: center;
  flex-flow: column nowrap;
  width: 100%;
  
  & > * {
    font-size: .625rem;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
`;

const Description = styled.p`
  font-weight: 400;
  color: #000;
`;

const Line = styled.hr`
  width: 100%;
  height: 1px;
  border: 1px solid #1E1E1E;
  border-radius: .625rem; // 10px
`;

const Objective = () => {
  return (
    <Container>
        <Title>Objetivo</Title>
        <Description>
          Fornecer materiais e serviços para organizar e identificar 142 pontos de rede, para o cliente: Multilog CD Salvador, situada na Rua José Roberto Otoni, 864 - Valéria, Salvador - BA, 41301-325.
        </Description>
      <Line />
    </Container>
  );
};

export default Objective;
