import React from 'react';
import { CloseIcon, InfoIcon } from '../../assets/icons/dark';
import { EditorContent } from './components';
import { EditorTabsWrapper, EditorWrapper } from './Editor.styled';

export function Editor() {
  return (
    <EditorWrapper>
      <EditorTabs />
      <EditorContent />
    </EditorWrapper>
  );
}

function EditorTabs() {
  return (
    <EditorTabsWrapper>
      <div className="tab active">
        <InfoIcon className="file-type-icon" />
        <span>test.md</span>
        <CloseIcon className="close-icon" />
      </div>
      <div className="tab">
        <InfoIcon className="file-type-icon" />
        <span>test.md</span>
        <CloseIcon className="close-icon" />
      </div>
    </EditorTabsWrapper>
  );
}
