import { CloseIcon, InfoIcon } from '../../../../assets/icons/dark';
import { useContentContext } from '../../../../contexts';
import { CONTENT_ACTIONS } from '../../../../interfaces';
import { EditorTabsWrapper } from './EditorTabs.styled';

export function EditorTabs() {
  const { contentTabs, currentContent, contentReducer } = useContentContext();
  const closeIconId = 'close-icon';

  const handleTabClick = (tab: string) => {
    return contentReducer(CONTENT_ACTIONS.CHANGE_TAB, tab);
  };

  const handleMiddleClick = (e: React.MouseEvent, tab: string) => {
    if (e.button === 1) {
      handleTabClose(e, tab);
    }
  };

  const handleTabClose = (e: React.MouseEvent, tab: string) => {
    e.stopPropagation();
    return contentReducer(CONTENT_ACTIONS.REMOVE_TAB, tab);
  };

  return (
    <EditorTabsWrapper>
      {contentTabs.map(tab => {
        const isTabActive = tab === currentContent?.title;
        return (
          <div
            onClick={e => handleTabClick(tab)}
            onMouseDown={e => handleMiddleClick(e, tab)}
            className={`tab ${isTabActive ? 'active' : ''}`}
            key={tab}
          >
            <InfoIcon className="file-type-icon" />
            <span>{tab}.md</span>
            <CloseIcon
              id={closeIconId}
              className="close-icon"
              onClick={e => handleTabClose(e, tab)}
            />
          </div>
        );
      })}
    </EditorTabsWrapper>
  );
}
