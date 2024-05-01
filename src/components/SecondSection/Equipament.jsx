import Bar from '../Bar';
import TextWrapper from '../TextWrapper';
import { Container } from '../Container';

const Equipament = ({ equipaments }) => {
  return (
    <Container section={'2nd'}>
      <Bar $lighted>Equipamentos</Bar>
      <TextWrapper $_flex $_styled items={equipaments.map((item) => {return item.name;})}>
        Itens
      </TextWrapper>
      <TextWrapper $_flex $_styled $_center items={equipaments.map((item) => {return item.quantity;})}>
        Qntd.
      </TextWrapper>
    </Container>
  );
};

export default Equipament;
