import styled from 'styled-components';

export const CenteredContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100vh;
  }
`;
