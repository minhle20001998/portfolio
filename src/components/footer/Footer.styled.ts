import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;
  height: 22px;
  display: flex;
  flex-direction: row;

  & .remote-wrapper {
    height: 100%;
    width: 34px;
    background-color: ${({ theme }) => theme.green};
    display: flex;
    justify-content: center;
    align-items: center;

    svg > * {
      stroke: ${({ theme }) => theme.white};
      stroke-width: 0.4px;
    }
  }

  & .left-status-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    background-color: ${({ theme }) => theme.blue};

    .status-problems {
      height: 100%;
      display: flex;
      align-items: center;
      gap: 3px;
      padding: 0 8px;
      cursor: pointer;

      svg {
        width: 14px;
        height: 14px;
      }

      svg > * {
        fill: ${({ theme }) => theme.white};
        stroke: ${({ theme }) => theme.white};
        stroke-width: 0.4px;
      }

      span {
        color: ${({ theme }) => theme.white};
        font-size: 13px;
      }
    }

    .status-problems:hover {
      background-color: rgba(255, 255, 255, 0.12);
    }
  }

  & .right-status-bar {
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 8px;
    .keyboard-layout {
      font-size: 12px;
      color: ${({ theme }) => theme.white};
    }
  }

  & .right-status-bar > div {
    height: 100%;
    padding: 0 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 14px;
      height: 14px;
    }

    svg > * {
      fill: ${({ theme }) => theme.white};
      stroke: ${({ theme }) => theme.white};
      stroke-width: 0.4px;
    }
  }

  & .right-status-bar > div:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }
`;
