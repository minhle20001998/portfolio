import styled from 'styled-components';

export const BasicButtonWrapper = styled.button`
  width: 100%;
  height: 26px;
  background-color: ${({ theme }) => theme.primaryButtonColor};
  color: ${({ theme }) => theme.primaryTextColor};
  border: none;
`;
