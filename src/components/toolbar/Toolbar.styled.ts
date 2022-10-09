import styled from 'styled-components';

export const ToolbarWrapper = styled.div`
  width: 48px;
  height: 100%;
  background-color: ${({ theme }) => theme.subSecondaryColor};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    cursor: grab;
    background: ${({ theme }) => theme.scrollbarColor};
    visibility: hidden;
  }
  &:hover::-webkit-scrollbar-thumb {
    visibility: visible;
  }

  & .icon-wrapper {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;

    svg > * {
      stroke-width: 0.4px;
      stroke: ${({ theme }) => theme.secondaryIconColor};
      fill: ${({ theme }) => theme.secondaryIconColor};
    }

    &:hover svg > * {
      fill: ${({ theme }) => theme.primaryIconColor};
    }

    &.active::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 2px;
      background-color: ${({ theme }) => theme.white};
      left: 0;
    }

    &.active svg > * {
      stroke-width: 0.4px;
      stroke: ${({ theme }) => theme.white};
      fill: ${({ theme }) => theme.white};
    }
  }

  & .icon-wrapper.menu-icon {
    height: 35px;
  }

  & .icon-wrapper.account-icon {
    svg {
      height: 24px;
      width: 24px;
    }
  }
`;
