import {
  AccountIcon,
  DebugAltIcon,
  ExtensionsIcon,
  FilesIcon,
  MailIcon,
  MenuIcon,
  SearchIcon,
  SettingsGearIcon,
  SourceControlIcon
} from '../assets/icons/dark';
import { IToolbarItems } from '../interfaces';
import { socialLinks } from './socialLinks';
import { ELabels } from './translationParagraph';

export const toolbarItems: IToolbarItems = {
  top: [
    { className: 'menu-icon', dataTip: '', icon: <MenuIcon /> },
    { className: 'active', dataTip: ELabels.FILES, icon: <FilesIcon /> },
    {
      className: '',
      dataTip: ELabels.SEARCH_ICON,
      icon: <SearchIcon />,
      link: socialLinks.github
    },
    {
      className: '',
      dataTip: ELabels.SOURCE_CODE_ICON,
      icon: <SourceControlIcon />,
      link: socialLinks.project
    },
    {
      className: '',
      dataTip: ELabels.ISSUES_ICON,
      icon: <DebugAltIcon />,
      link: socialLinks.projectIssue
    },
    {
      className: '',
      dataTip: ELabels.EXTENSIONS_ICON,
      icon: <ExtensionsIcon />,
      children: [
        {
          className: 'mail-icon',
          dataTip: ELabels.MAIL_ICON,
          icon: <MailIcon />,
          link: socialLinks.email
        }
      ]
    }
  ],
  bottom: [
    {
      className: 'account-icon',
      dataTip: ELabels.CONTACT_ICON,
      icon: <AccountIcon />,
      link: socialLinks.linkedIn
    },
    { className: '', dataTip: ELabels.SETTING_ICON, icon: <SettingsGearIcon /> }
  ]
};
