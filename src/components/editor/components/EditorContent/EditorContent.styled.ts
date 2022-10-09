import styled from 'styled-components';

export const EditorContentWrapper = styled.div`
  padding: 16px 28px;
  height: calc(100% - 35px);
  overflow: auto;

  &::-webkit-scrollbar {
    width: 14px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    border-left: 1px solid ${({ theme }) => theme.scrollbarColor};
  }
  &::-webkit-scrollbar-thumb {
    cursor: grab;
    background: ${({ theme }) => theme.scrollbarColor};
    visibility: hidden;
  }
  &:hover::-webkit-scrollbar-thumb {
    visibility: visible;
  }

  &:hover::-webkit-scrollbar-track {
    visibility: visible;
  }

  & > h1 {
    margin: 12px 0;
  }

  & > h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 10px 0;
  }

  & > * {
    line-height: 2rem;
    color: ${({ theme }) => theme.markdownParagraphColor};
  }

  & pre {
    padding: 12px;
    background-color: ${({ theme }) => theme.secondaryColor};
    border-radius: 8px;
    line-height: 0.8rem;
  }

  & ol {
    padding: 0 16px;
  }

  & a {
    color: ${({ theme }) => theme.link};
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }

  & p {
    font-size: 14px;
  }
`;
