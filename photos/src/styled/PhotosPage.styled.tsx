import styled from 'styled-components';

export const CenteredContainerStyled = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    height: 100vh;
    margin: 0 auto;
    margin-top: 20px;
  }
`;

export const TitleStyled = styled.h5`
  width: 100%;
  font-style: italic;
  color: #5a5858;
  text-align: center;
`;

export const CardContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 1px;
  margin-top: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const CardStyled = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 33%;
  }

  @media (min-width: 1024px) {
    width: 20%;
  }
`;

export const CardTitleStyled = styled.h5`
  color: #5a5858;
  width: 100%;
  margin-top: 10px;
`;
