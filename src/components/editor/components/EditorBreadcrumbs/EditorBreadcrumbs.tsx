import React from 'react';
import { ChevronRightIcon } from '../../../../assets/icons/dark';
import { structures } from '../../../../consts';
import { useContentContext } from '../../../../contexts';
import { EditorBreadcrumbsWrapper } from './EditorBreadcrumbs.styled';

export function EditorBreadcrumbs() {
  const { currentContent } = useContentContext();
  const breadcrumbs = [structures.title, currentContent?.title + '.md'];

  if (!currentContent) {
    return <></>;
  }

  return (
    <EditorBreadcrumbsWrapper>
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <div className="folder" key={breadcrumb}>
            <span className="folder-name">{breadcrumb}</span>
            {breadcrumbs[index + 1] ? <ChevronRightIcon /> : <></>}
          </div>
        );
      })}
    </EditorBreadcrumbsWrapper>
  );
}
