import Bar from '../Bar';
import TextWrapper from '../TextWrapper';
import { Container } from '../Container';

const Equipament = ({ equipaments }) => {
  return (
    <Container $_align='flex_start' section={'2nd'}>
      <Bar $lighted>Equipamentos</Bar>
      <TextWrapper $_itemH='1.7rem' $_width='70%' $_flex $_styled items={equipaments.map((item) => {return item.name;})}>
        Itens
      </TextWrapper>
      <TextWrapper $_itemH='1.7rem' $_width='20%' $_flex $_styled items={equipaments.map((item) => {return item.quantity;})}>
        Qntd.
      </TextWrapper>
    </Container>
  );
};

export default Equipament;
