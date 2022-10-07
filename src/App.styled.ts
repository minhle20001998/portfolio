import styled from 'styled-components';

export const AppWrapper = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.primaryColor};
  overflow: auto;
`;
