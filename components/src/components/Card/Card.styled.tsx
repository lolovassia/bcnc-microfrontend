import styled from 'styled-components';

export const CardStyled = styled.div<{ isActive?: boolean }>`
  background-color: ${({ isActive }) => (isActive ? '#757373' : '#333')};
  color: white;
  min-width: 200px;
  cursor: pointer;
  padding: 20px;
  border-radius: 6px;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 500;

  &:hover {
    background-color: #757373;
  }
`;
