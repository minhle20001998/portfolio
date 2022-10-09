import React from 'react';
import { EditorContent, EditorTabs } from './components';
import { EditorWrapper } from './Editor.styled';

export function Editor() {
  return (
    <EditorWrapper>
      <EditorTabs />
      <EditorContent />
    </EditorWrapper>
  );
}
