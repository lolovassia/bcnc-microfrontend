import styled from 'styled-components';

export const CenteredContainerStyled = styled.div`
  display: block;
  width: 100%;

  @media (min-width: 768px) {
    height: 100vh;
    margin: 0 auto;
    margin-top: 20px;
  }
`;

export const FooterStyled = styled.h5`
  width: 100%;
  font-style: italic;
  color: #5a5858;
  text-align: center;
`;
