import styled from 'styled-components';
import Bar from '../Bar';
import TextWrapper from '../TextWrapper';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

const Materials = ({ materials }) => {
  return (
    <Container>
      <Bar $lighted>Materiais</Bar>
      <TextWrapper $_flex $_styled items={materials.map((item) => {return item.name;})}>
        Itens
      </TextWrapper>
      <TextWrapper $_flex $_styled $_center items={materials.map((item) => {return item.quantity;})}>
        Qntd.
      </TextWrapper>
    </Container>
  );
};

export default Materials;
