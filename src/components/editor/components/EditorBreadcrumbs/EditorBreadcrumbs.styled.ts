import styled from 'styled-components';

export const EditorBreadcrumbsWrapper = styled.div`
  height: 22px;
  padding: 0 16px;
  display: flex;
  overflow: auto;

  .folder {
    display: flex;
    align-items: center;
  }

  .folder-name {
    font-size: 13px;
    color: ${({ theme }) => theme.subSecondaryTextColor};
  }
`;
