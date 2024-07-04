import Bar from '../Bar';
import TextWrapper from '../TextWrapper';
import { Container } from '../Container';

const Materials = ({ materials }) => {
  return (
    <Container $_align='flex_start' section={'2nd'}>
      <Bar $lighted>Materiais</Bar>
      <TextWrapper $_itemH='1.7rem' $_width='70%' $_flex $_styled items={materials.map((item) => {return item.name;})}>
        Itens
      </TextWrapper>
      <TextWrapper $_itemH='1.7rem' $_width='10%' $_flex $_styled items={materials.map((item) => {return item.quantity;})}>
        Qntd.
      </TextWrapper>
      <TextWrapper $_itemH='1.7rem' $_width='10%' $_flex $_styled items={materials.map((item) => {return item.unit;})}>
        Uni.
      </TextWrapper>
    </Container>
  );
};

export default Materials;
