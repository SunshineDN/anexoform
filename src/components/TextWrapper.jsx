import styled from 'styled-components';
import { Title } from './Generals';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: .625rem; // 10px
  align-items: flex-start;
  /* flex: ${props => props.$_flex ? '1' : 'none'}; */
  /* ${props => props.$_center && 'flex: .5'}; // 50% */
  width: ${props => props.$_width ? props.$_width : '31%'};
  background-color: ${props => props.$_background || 'transparent'};

  & * {
    font-size: .625rem !important; // 10px
  }
`;

const ItemsWrapper = styled.ul`
  display: flex;
  flex-flow: column nowrap;

  gap: .094rem; // 1.5px
  align-items: ${props => props.$_center ? 'center' : 'flex-start'};
  justify-content: flex-start;
  margin-left: ${props => props.$_styled ? '0' : '1.10rem'}; // 17.6px
  ${props => props.$_center && 'margin-left: 0.450rem; width: 1.2rem;'}
`;

const Item = styled.li`
  list-style: ${props => props.$_styled ? 'none' : 'initial'};
  line-break: anywhere;
`;

const TextWrapper = ({ items, ...props }) => {
  return (
    <Container $_width={props.$_width} $_background={props.$_background} $_center={props.$_center} $_flex={props.$_flex}>
      <Title>{props.children}</Title>
      <ItemsWrapper $_center={props.$_center} $_styled={props.$_styled}>
        {items?.map((item, index) => {
          return <Item $_styled={props.$_styled} key={index}>{item}</Item>;
        })}
      </ItemsWrapper>
    </Container>
  );
};

export default TextWrapper;
