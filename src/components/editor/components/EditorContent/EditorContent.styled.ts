import styled from 'styled-components';

export const EditorContentWrapper = styled.div`
  padding: 16px 28px;
  height: calc(100% - 35px);
  overflow: auto;
  background: linear-gradient(${({ theme }) => theme.primaryColor} 33%, rgba(108, 71, 229, 0)),
    linear-gradient(rgba(108, 71, 229, 0), ${({ theme }) => theme.primaryColor} 66%) 0 100%,
    radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
    radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)) 0 100%;
  background-color: ${({ theme }) => theme.primaryColor};
  background-repeat: no-repeat;
  background-attachment: local, local, scroll, scroll;
  background-size: 100% 45px, 100% 45px, 100% 15px, 100% 15px;

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
