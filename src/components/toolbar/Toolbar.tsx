import {
  AccountIcon,
  DebugAltIcon,
  ExtensionsIcon,
  FilesIcon,
  MenuIcon,
  SearchIcon,
  SettingsGearIcon,
  SourceControlIcon
} from '../../assets/icons/dark';
import { ToolbarWrapper } from './Toolbar.styled';

export function Toolbar() {
  return (
    <ToolbarWrapper>
      <div>
        <div className="icon-wrapper menu-icon">
          <MenuIcon />
        </div>
        <div className="icon-wrapper active">
          <FilesIcon />
        </div>
        <div className="icon-wrapper">
          <SearchIcon />
        </div>
        <div className="icon-wrapper">
          <SourceControlIcon />
        </div>
        <div className="icon-wrapper">
          <DebugAltIcon />
        </div>
        <div className="icon-wrapper">
          <ExtensionsIcon />
        </div>
      </div>
      <div>
        <div className="icon-wrapper account-icon">
          <AccountIcon />
        </div>
        <div className="icon-wrapper">
          <SettingsGearIcon />
        </div>
      </div>
    </ToolbarWrapper>
  );
}
