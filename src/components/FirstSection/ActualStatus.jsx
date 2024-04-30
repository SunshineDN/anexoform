import styled from 'styled-components';
import TextWrapper from '../TextWrapper';
// import Img from '../assets/ex.jpg';
// import Img2 from '../assets/ex2.jpg';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: .625rem; // 10px

  & * {
    font-size: .625rem; // 10px
  }
`;

const ImagesWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: .625rem; // 10px
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 170px;
  height: 300px;
  object-fit: cover;
  border-radius: .781rem; // 12.5px
  border: .031rem solid #000; // 0.5px
`;

const Line = styled.hr`
  width: 100%;
  height: 1px;
  border: 1px solid #1E1E1E;
  border-radius: .625rem; // 10px
`;

const ActualStatus = ({ items }) => {
  return (
    <Container>
      <TextWrapper items={items}>Situação Atual</TextWrapper>
      <ImagesWrapper>
        <Image src='' alt='Imagem do status atual' />
        <Image src='' alt='Imagem do status atual' />
      </ImagesWrapper>
      <Line />
    </Container>
  );
};

export default ActualStatus;
