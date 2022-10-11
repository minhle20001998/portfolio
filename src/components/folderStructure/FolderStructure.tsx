import { Resizable } from 're-resizable';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon, ChevronRightIcon, InfoIcon } from '../../assets/icons/dark';
import { useContentContext } from '../../contexts';
import { IFolderStructure } from '../../interfaces';
import { FolderStructureWrapper } from './FolderStructure.styled';
import './FolderStructure.css';
import { ELabels, structures } from '../../consts';
import { useTranslation } from 'react-i18next';

export const FolderStructure = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  const { t } = useTranslation();

  return (
    <Resizable
      className="resize-able"
      defaultSize={{ width: 300, height: '100%' }}
      minWidth={160}
      maxWidth={'50%'}
      enable={{ right: true }}
    >
      <FolderStructureWrapper ref={ref}>
        <div className="title-container">
          <h2 className="title">{t(ELabels.EXPLORER)}</h2>
        </div>
        <div className="structure">
          <div className="structure-workspace">
            <ChevronDownIcon />
            <h3 className="title">{t(ELabels.WORKSPACE)}</h3>
          </div>
          <div className="folder-view">
            <FileView structures={structures} />
          </div>
        </div>
        <div className="resize-hover"></div>
      </FolderStructureWrapper>
    </Resizable>
  );
});

const FileView = ({ structures, count = 1 }: { structures: IFolderStructure; count?: number }) => {
  const [open, setOpen] = useState(true);
  const { currentContent } = useContentContext();
  const isSelected = !structures.folder && currentContent?.title === structures.raw;

  const toggleOpen = () => {
    setOpen(prev => !prev);
  };

  const navigate = useNavigate();

  const handleFileClick = () => {
    if (structures.link) {
      navigate(structures.link);
    }
  };

  return (
    <div className="file" onClick={handleFileClick}>
      <div
        className={`file-view ${isSelected ? 'selected' : ''}`}
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
