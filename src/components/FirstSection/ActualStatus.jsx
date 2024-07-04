import styled from 'styled-components';
import TextWrapper from '../TextWrapper';
import { Line } from '../Generals';
import { Container } from '../Container';
// import Img from '../../assets/ex.jpg';
// import Img2 from '../../assets/ex2.jpeg';

const ImagesWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: .625rem; // 10px
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Image = styled.img`
  /* width: 170px;
  height: 300px; */
  width: 300px;
  height: 170px;
  object-fit: cover;
  border-radius: .781rem; // 12.5px
  border: .031rem solid #000; // 0.5px
`;

const ActualStatus = ({ status, images }) => {

  return (
    <Container section={'1st'} $_flexFlow={'row wrap'} $_alignItems={'flex-start'} $_justifyContent={'space-between'}>
      <TextWrapper $_width='100%' items={status}>Situação Atual</TextWrapper>
      <ImagesWrapper>
        {images?.map((image, index) => {
          return <Image key={index} src={image.path} />;
        })}
      </ImagesWrapper>
      <Line />
    </Container>
  );
};

export default ActualStatus;
