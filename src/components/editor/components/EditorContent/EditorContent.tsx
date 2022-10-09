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
      <ReactMarkdown
        children={currentContent?.content}
      // components={{
      //   // code: MarkdownCode,
      //   // a: MarkdownLink,
      //   // // p: MarkdownParagraph,
      //   // table: MarkdownTable,
      //   // thead: TableHead,
      //   // tbody: TableBody,
      //   // th: MarkdownTableCell,
      //   // tr: TableRow,
      //   // td: MarkdownTableCell,
      //   // tfoot: TableFooter,
      //   // h1: MarkdownH1,
      //   // h2: MarkdownH2
      //   // br: MarkdownBr,
      // }}
      // remarkPlugins={[remarkGfm, remarkBreaks]}
      // rehypePlugins={[rehypeRaw]}
      />
    </EditorContentWrapper>
  );
}
