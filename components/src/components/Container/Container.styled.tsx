import styled from 'styled-components';

export const ContainerStyled = styled.div`
  margin: 20px 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 1200px;
    padding: 0 20px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    max-width: 1400px;
    padding: 0 30px;
    margin: 0 auto;
  }
`;
