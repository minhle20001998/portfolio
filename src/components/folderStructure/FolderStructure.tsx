import { Resizable } from 're-resizable';
import React, { useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon, InfoIcon } from '../../assets/icons/dark';
import { IFolderStructure } from '../../interfaces';
import { FolderStructureWrapper } from './FolderStructure.styled';

const structures: IFolderStructure = {
  title: 'my-portfolio',
  folder: true,
  children: [
    { title: 'overview.md' },
    { title: 'skills.md' },
    { title: 'experience.md' },
    { title: 'education.md' },
    { title: 'projects.md' }
  ]
};
export const FolderStructure = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <Resizable defaultSize={{ width: 300, height: '100%' }} minWidth={160} maxWidth={'50%'} enable={{ right: true }}>
      <FolderStructureWrapper ref={ref}>
        <div className="title-container">
          <h2 className="title">Explorer</h2>
        </div>
        <div className="structure">
          <div className="structure-workspace">
            <ChevronDownIcon />
            <h3 className="title">Workspace</h3>
          </div>
          <div className="folder-view">
            <FileView structures={structures} />
          </div>
        </div>
      </FolderStructureWrapper>
    </Resizable>
  );
});

const FileView = ({ structures, count = 1 }: { structures: IFolderStructure; count?: number }) => {
  const [open, setOpen] = useState(true);

  const toggleOpen = () => {
    setOpen(prev => !prev);
  };

  return (
    <div className="file">
      <div
        className="file-view"
        onClick={toggleOpen}
        style={{ paddingLeft: `${16 * count + 'px'}`, paddingRight: `${16 * count + 'px'}` }}
      >
        {Array.isArray(structures.children) ? (
          open ? (
            <ChevronDownIcon />
          ) : (
            <ChevronRightIcon />
          )
        ) : (
          <InfoIcon className="info-icon" />
        )}
        <span>{structures.title}</span>
      </div>
      {structures.children &&
        open &&
        structures.children.map(child => {
          return <FileView key={child.title} structures={child} count={count + 1} />;
        })}
    </div>
  );
};
