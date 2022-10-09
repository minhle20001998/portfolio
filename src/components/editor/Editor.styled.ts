import styled from 'styled-components';

export const EditorWrapper = styled.div`
  flex: 1;
  background-color: transparent;
  overflow: auto;
`;

export const EditorTabsWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  background-color: ${({ theme }) => theme.secondaryColor};

  &::-webkit-scrollbar {
    height: 0px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    cursor: grab;
    background: ${({ theme }) => theme.scrollbarColor};
    visibility: hidden;
  }
  &:hover::-webkit-scrollbar-thumb {
    visibility: visible;
  }
  &:hover::-webkit-scrollbar {
    height: 4px;
  }

  & .tab {
    border-right: 1px solid ${({ theme }) => theme.secondaryColor};
    width: 120px;
    height: 35px;
    padding-left: 10px;
    min-width: fit-content;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.subTabColor};
    cursor: pointer;
    user-select: none;

    .file-type-icon {
      min-width: 20px;
      min-height: 20px;
      padding-right: 6px;
    }

    .close-icon {
      opacity: 0;
      min-width: 18px;
      min-height: 18px;
      margin-right: 6px;
      padding: 2px;
      stroke: ${({ theme }) => theme.subSecondaryTextColor};
      stroke-width: 0.4px;
      border-radius: 4px;
    }

    .close-icon:hover {
      background-color: ${({ theme }) => theme.subTabHoverColor};
    }

    span {
      flex: 1;
      font-size: 13px;
      margin-right: 8px;
      color: ${({ theme }) => theme.subSecondaryTextColor};
    }
  }

  & .tab:hover {
    .close-icon {
      opacity: 1 !important;
    }
  }

  & .tab.active {
    background-color: ${({ theme }) => theme.primaryColor};

    span {
      color: ${({ theme }) => theme.primaryTextColor};
    }

    .close-icon {
      opacity: 1;
      stroke: ${({ theme }) => theme.white};
      stroke-width: 0.4px;
    }
  }
`;
