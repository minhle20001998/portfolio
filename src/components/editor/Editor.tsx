import React from 'react';
import { EditorContent, EditorTabs } from './components';
import { EditorBreadcrumbs } from './components/EditorBreadcrumbs/EditorBreadcrumbs';
import { EditorWrapper } from './Editor.styled';

export function Editor() {
  return (
    <EditorWrapper>
      <EditorTabs />
      <EditorBreadcrumbs />
      <EditorContent />
    </EditorWrapper>
  );
}
