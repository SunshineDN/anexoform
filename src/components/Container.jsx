import styled from 'styled-components';

const FirstWrapper = styled.div`
  display: flex;
  /* flex-flow: column nowrap; */
  /* align-items: flex-start; */
  /* justify-content: center; */
  flex-flow: ${props => props.$_flexFlow || 'column nowrap'};
  align-items: ${props => props.$_alignItems || 'flex-start'};
  justify-content: ${props => props.$_justifyContent || 'center'};
  width: 100%;
  gap: .625rem; // 10px

  & * {
    font-size: .625rem; // 10px
  }
`;

const SecondWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  & * {
    font-size: .625rem; // 10px
  }
`;

export const Container = ({ section, ...props }) => {
  return (
    <>
      {section === '1st' &&
        <FirstWrapper $_flexFlow={props.$_flexFlow} $_alignItems={props.$_alignItems} $_justifyContent={props.$_justifyContent}>
          {props.children}
        </FirstWrapper> || section === '2nd' &&
        <SecondWrapper>
          {props.children}
        </SecondWrapper>
      }
    </>
  );
};
