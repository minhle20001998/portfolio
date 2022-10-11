import { ToolbarWrapper } from './Toolbar.styled';
import ReactTooltip, { TooltipProps } from 'react-tooltip';
import { ELabels, toolbarItems } from '../../consts';
import { IToolbarItem } from '../../interfaces';
import { useState } from 'react';
import { THEME_ACTIONS, useCustomTheme } from '../../contexts';
import { useTranslation } from 'react-i18next';

export function Toolbar() {
  return (
    <ToolbarWrapper>
      <div>
        {toolbarItems.top.map(item => {
          return <ToolbarItem key={item.dataTip} item={item} />;
        })}
      </div>
      <div>
        {toolbarItems.bottom.map(item => {
          return <ToolbarItem key={item.dataTip} item={item} />;
        })}
      </div>
    </ToolbarWrapper>
  );
}

const ToolbarItem = ({ item }: { item: IToolbarItem }) => {
  const reactTooltipStyle: TooltipProps = {
    className: 'react-tooltip',
    place: 'right',
    type: 'dark',
    effect: 'solid'
  };

  const [open, setOpen] = useState(false);
  const { themeReducer } = useCustomTheme();
  const { t } = useTranslation();

  const handleOnclick = () => {
    if (item.children) {
      setOpen(prev => !prev);
    }
    if (item.dataTip === ELabels.SETTING_ICON) {
      themeReducer(THEME_ACTIONS.TOGGLE);
    }
  };

  const renderIfHasLink = () => {
    if (item.link) {
      return (
        <>
          <a
            target={'_blank'}
            rel="noreferrer"
            href={item.link}
            className={`icon-wrapper ${item.className}`}
            data-tip={t(item.dataTip)}
            onClick={handleOnclick}
          >
            {item.icon}
          </a>
          {item.dataTip && <ReactTooltip {...reactTooltipStyle} />}
        </>
      );
    }
    return (
      <>
        <div
          className={`icon-wrapper ${item.className}`}
          data-tip={t(item.dataTip)}
          onClick={handleOnclick}
        >
          {item.icon}
        </div>
        {item.dataTip && <ReactTooltip {...reactTooltipStyle} />}
      </>
    );
  };

  return (
    <>
      {renderIfHasLink()}
      {open && item.children && (
        <>
          <div className="children">
            <div></div>
          </div>
          {item.children?.map(children => {
            return <ToolbarItem key={children.dataTip} item={children} />;
          })}
        </>
      )}
    </>
  );
};
