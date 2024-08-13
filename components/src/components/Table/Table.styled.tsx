import styled from 'styled-components';

export const TableContainerStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export const TableStyled = styled.table`
  background-color: #5a5858;
  color: white;
  border-radius: 5px;
  padding: 10px;
  width: auto;
  border-collapse: collapse;
  overflow-x: auto;
  display: block;
  white-space: nowrap;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const THeadStyled = styled.thead`
  color: #000000;
`;

export const THStyled = styled.th`
  padding: 10px;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const TBodyStyled = styled.tbody`
  color: #000000;
`;

export const TRStyled = styled.tr`
  padding: 10px;

  &:nth-child(odd) {
    background-color: #727272;
  }
  &:nth-child(even) {
    background-color: #5a5858;
  }
`;

export const TDStyled = styled.td`
  padding: 5px;
  border-radius: 2px;
`;
