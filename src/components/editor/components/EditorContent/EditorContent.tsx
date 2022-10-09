import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useContentContext } from '../../../../contexts';
import { EditorContentWrapper } from './EditorContent.styled';

export function EditorContent() {
  const { currentContent } = useContentContext();

  if (!currentContent) {
    return <></>;
  }

  return (
    <EditorContentWrapper>
      <ReactMarkdown children={currentContent?.content} />
    </EditorContentWrapper>
  );
}
