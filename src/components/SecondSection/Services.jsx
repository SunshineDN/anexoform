import styled from 'styled-components';
import { Container } from '../Container';
import Bar from '../Bar';
import { Line } from '../Generals';

const ItemsWrapper = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  gap: .094rem; // 1.5px
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 0;
`;

const Item = styled.li`

`;

const Services = ({ services }) => {
  return(
    <Container section={'2nd'}>
      <Bar $lighted>Serviços</Bar>
      <ItemsWrapper>
        {services.map((item, index) => {
          return <Item key={index}>{item}</Item>;
        })}
      </ItemsWrapper>
      <Line />
    </Container>
  );
};
1;
export default Services;
