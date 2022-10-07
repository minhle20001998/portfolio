import { THEME } from '../interfaces';

interface IGlobalTheme {
  theme: THEME;
  primaryColor: string;
  secondaryColor: string;
  subSecondaryColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  subSecondaryTextColor: string;
  primaryButtonColor: string;
  secondaryButtonColor: string;
  primaryIconColor: string;
  secondaryIconColor: string;
  green: string;
  blue: string;
  white: string;
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
    subSecondaryTextColor: getColorByTheme('#bbbbbb', '#bbbbbb'),
    primaryButtonColor: getColorByTheme('#0e639c', '#0e639c'),
    secondaryButtonColor: getColorByTheme('', ''),
    primaryIconColor: getColorByTheme('#ffffff', '#ffffff'),
    secondaryIconColor: getColorByTheme('#848484', '#848484'),
    green: 'rgb(22, 130, 93)',
    blue: 'rgb(0, 122, 204)',
    white: '#ffffff'
  };
};
