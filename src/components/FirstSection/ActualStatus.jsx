import styled from 'styled-components';
import TextWrapper from '../TextWrapper';
import { Line } from '../Generals';
import { Container } from '../Container';
// import Img from '../assets/ex.jpg';
// import Img2 from '../assets/ex2.jpg';

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

const ActualStatus = ({ status }) => {
  return (
    <Container section={'1st'} $_flexFlow={'row wrap'} $_alignItems={'flex-start'} $_justifyContent={'space-between'}>
      <TextWrapper status={status}>Situação Atual</TextWrapper>
      <ImagesWrapper>
        <Image src='' alt='Imagem do status atual' />
        <Image src='' alt='Imagem do status atual' />
      </ImagesWrapper>
      <Line />
    </Container>
  );
};

export default ActualStatus;
