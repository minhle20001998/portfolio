import { IGlobalTheme, THEME } from '../interfaces';

export const globalTheme = (theme: THEME): IGlobalTheme => {
  const getColorByTheme = (dark: string, light: string) => {
    return theme === THEME.DARK ? dark : light;
  };

  return {
    theme: theme,
    primaryColor: getColorByTheme('#1e1e1e', '#ffffff'),
    secondaryColor: getColorByTheme('#252526', '#f3f3f3'),
    subSecondaryColor: getColorByTheme('#333333', ''),
    primaryTextColor: getColorByTheme('#ffffff', '#616161'),
    secondaryTextColor: getColorByTheme('#cccccc', '#616161'),
    markdownParagraphColor: getColorByTheme('#c9d1d9', '#000000'),
    subSecondaryTextColor: getColorByTheme('#bbbbbb', '#616161cc'),
    primaryButtonColor: getColorByTheme('#0e639c', '#0e639c'),
    secondaryButtonColor: getColorByTheme('', ''),
    selectedFileColor: getColorByTheme('#37373d', '#e4e6f1'),
    hoverFileColor: getColorByTheme('#2a2d2e', '#e8e8e8'),
    subTabColor: getColorByTheme('rgb(45, 45, 45)', ''),
    subTabHoverColor: getColorByTheme('rgba(90, 93, 94, 0.31)', ''),
    primaryIconColor: getColorByTheme('#ffffff', '#ffffff'),
    secondaryIconColor: getColorByTheme('#848484', '#848484'),
    scrollbarColor: getColorByTheme('#4b4b4b', '#c1c1c1'),
    green: 'rgb(22, 130, 93)',
    blue: 'rgb(0, 122, 204)',
    white: '#ffffff',
    link: '#58a6ff',
    toolBarColor: '#333333'
  };
};
