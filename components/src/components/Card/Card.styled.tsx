import styled from 'styled-components';

export const CardStyled = styled.div<{ isActive?: boolean }>`
  background-color: ${({ isActive }) => (isActive ? '#757373' : '#333')};
  color: white;
  min-width: 250px;
  cursor: pointer;
  text-align: center;
  padding: 20px;
  border-radius: 6px;

  &:hover {
    background-color: #757373;
  }
`;
