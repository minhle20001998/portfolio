import { THEME } from '../interfaces';

interface IGlobalTheme {
  theme: THEME;
  primaryColor: string;
  secondaryColor: string;
  subSecondaryColor: string;
  markdownParagraphColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  subSecondaryTextColor: string;
  subTabColor: string;
  subTabHoverColor: string;
  primaryButtonColor: string;
  secondaryButtonColor: string;
  primaryIconColor: string;
  secondaryIconColor: string;
  selectedFileColor: string;
  scrollbarColor: string;
  green: string;
  blue: string;
  white: string;
  link: string;
}

export const globalTheme = (theme: THEME): IGlobalTheme => {
  const getColorByTheme = (dark: string, light: string) => {
    return theme === THEME.DARK ? dark : light;
  };

  return {
    theme: theme,
    primaryColor: getColorByTheme('#1e1e1e', ''),
    secondaryColor: getColorByTheme('#252526', ''),
    subSecondaryColor: getColorByTheme('#333333', ''),
    primaryTextColor: getColorByTheme('#ffffff', '#ffffff'),
    secondaryTextColor: getColorByTheme('#cccccc', '#cccccc'),
    markdownParagraphColor: getColorByTheme('#c9d1d9', ''),
    subSecondaryTextColor: getColorByTheme('#bbbbbb', '#bbbbbb'),
    primaryButtonColor: getColorByTheme('#0e639c', '#0e639c'),
    secondaryButtonColor: getColorByTheme('', ''),
    selectedFileColor: getColorByTheme('#37373d', ''),
    subTabColor: getColorByTheme('rgb(45, 45, 45)', ''),
    subTabHoverColor: getColorByTheme('rgba(90, 93, 94, 0.31)', ''),
    primaryIconColor: getColorByTheme('#ffffff', '#ffffff'),
    secondaryIconColor: getColorByTheme('#848484', '#848484'),
    scrollbarColor: getColorByTheme('#4b4b4b', ''),
    green: 'rgb(22, 130, 93)',
    blue: 'rgb(0, 122, 204)',
    white: '#ffffff',
    link: '#58a6ff'
  };
};
