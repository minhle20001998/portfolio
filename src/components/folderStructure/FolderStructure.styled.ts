import styled from 'styled-components';

export const FolderStructureWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.secondaryColor};

  & .title-container {
    padding: 10px 20px;
  }

  & .title-container .title {
    color: ${({ theme }) => theme.subSecondaryTextColor};
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 400;
  }

  & svg > * {
    stroke: ${({ theme }) => theme.subSecondaryTextColor};
    stroke-width: 0.4px;
  }

  & .structure-workspace {
    display: flex;
    padding: 3px 2px;
    gap: 2px;
  }

  & .structure-workspace .title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 11px;
    color: ${({ theme }) => theme.secondaryTextColor};
    text-transform: uppercase;
  }

  & .file {
    cursor: pointer;
    user-select: none;
  }

  & .file-view {
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 4px 2px;

    svg {
      min-width: 16px;
      min-height: 16px;
    }

    .info-icon {
      margin-right: 4px;
    }

    .info-icon > * {
      fill: #519aba;
      stroke: #519aba;
      stroke-width: 0.4px;
    }

    span {
      color: ${({ theme }) => theme.secondaryTextColor};
      font-size: 13px;
    }

    &:hover {
      background-color: #2a2d2e;
    }
  }
`;
