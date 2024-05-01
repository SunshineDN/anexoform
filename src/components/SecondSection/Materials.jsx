import Bar from '../Bar';
import TextWrapper from '../TextWrapper';
import { Container } from '../Container';

const Materials = ({ materials }) => {
  return (
    <Container section={'2nd'}>
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
