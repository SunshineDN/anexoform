import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: .625rem; // 10px
  align-items: flex-start;
  flex: ${props => props.$_flex ? '1' : 'none'};
  ${props => props.$_center && 'flex: .5'}; // 50%

  & * {
    font-size: .625rem; // 10px
  }
`;

const Title = styled.h2`
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
`;

const ItemsWrapper = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  gap: .094rem; // 1.5px
  align-items: ${props => props.$_center ? 'center' : 'flex-start'};
  justify-content: flex-start;
  margin-left: ${props => props.$_styled ? '0' : '1.10rem'}; // 17.6px
  ${props => props.$_center && 'margin-left: 0.450rem;'} // 4.8px
`;

const Item = styled.li`
  list-style: ${props => props.$_styled ? 'none' : 'initial'};
`;

const TextWrapper = ({ items, ...props }) => {
  return (
    <Container $_center={props.$_center} $_flex={props.$_flex}>
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
