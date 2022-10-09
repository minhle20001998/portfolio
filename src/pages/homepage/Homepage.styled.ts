import styled from 'styled-components';

export const HomepageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  & section {
    display: flex;
    flex-direction: row;
    height: calc(100% - 22px);
  }
`;
