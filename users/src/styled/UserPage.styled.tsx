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

export const TitleStyled = styled.h5`
  width: 100%;
  font-style: italic;
  color: #5a5858;
  text-align: center;
`;

export const SeeButtonStyled = styled.button`
  background-color: #363636;
  border: 1px solid #c4c4c4;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  float: right;

  &:hover {
    background-color: #777575;
  }
`;
