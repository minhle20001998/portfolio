import styled from 'styled-components';

export const EditorContentWrapper = styled.div`
  padding: 0px 28px;
  height: calc(100% - 35px - 22px);
  overflow: auto;
  background: linear-gradient(${({ theme }) => theme.primaryColor} 33%, rgba(108, 71, 229, 0)),
    linear-gradient(rgba(108, 71, 229, 0), ${({ theme }) => theme.primaryColor} 66%) 0 100%,
    radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
    radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)) 0 100%;
  background-color: ${({ theme }) => theme.primaryColor};
  background-repeat: no-repeat;
  background-attachment: local, local, scroll, scroll;
  background-size: 100% 15px, 100% 15px, 100% 5px, 100% 5px;
  display: flex;
  justify-content: center;

  &::-webkit-scrollbar {
    width: 14px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    border-top: 1px solid ${({ theme }) => theme.scrollbarColor};
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

  & .content {
    height: fit-content;
    width: 100%;
    max-width: 1200px;
    padding-bottom: 16px;
  }

  & hr {
    margin: 12px 0;
  }

  & h1 {
    font-size: 1.8em;
    margin: 12px 0;
  }

  & h2 {
    font-size: 1.4em;
  }

  & h3 {
    font-size: 1.2em;
  }

  & h2,
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

  & ol,
  & ul {
    padding: 0 32px;
  }

  & li {
    font-size: 14px;
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

  & img {
    max-width: 100%;
  }
`;
