import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  background-color: ${(props) => props.$lighted ? '#c1aca7' : '#a78981'};
`;

const Title = styled.h1`
  font-size: .75rem !important; // 12px
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
`;

const Bar = ({ children, ...props }) => {
  return (
    <Header $lighted={props.$lighted}>
      <Title>{children}</Title>
    </Header>
  );
};

export default Bar;
