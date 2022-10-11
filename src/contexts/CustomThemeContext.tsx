import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { globalTheme } from '../consts';
import { THEME } from '../interfaces';

interface ICustomThemeContext {
  currentTheme: THEME;
  themeReducer: (action: string, payload?: any) => void;
}

export const THEME_ACTIONS = {
  TOGGLE: 'toggle'
};

const defaultTheme = THEME.DARK;

const defaultThemeContextValue: ICustomThemeContext = {
  currentTheme: defaultTheme,
  themeReducer: () => {}
};

const CustomThemeContext = createContext<ICustomThemeContext>(defaultThemeContextValue);

export default function CustomThemeProvider({ children }: { children?: JSX.Element }) {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === THEME.DARK) {
      setCurrentTheme(THEME.DARK);
    } else if (storedTheme === THEME.LIGHT) {
      setCurrentTheme(THEME.LIGHT);
    }
  }, []);

  const themeReducer = (action: string, payload?: any): void => {
    switch (action) {
      case THEME_ACTIONS.TOGGLE:
        setCurrentTheme(prev => {
          if (prev === THEME.DARK) {
            setThemeToLocalStorage(THEME.LIGHT);
            return THEME.LIGHT;
          }
          setThemeToLocalStorage(THEME.DARK);
          return THEME.DARK;
        });
        break;
      default:
        break;
    }
  };

  const setThemeToLocalStorage = (theme: THEME) => {
    localStorage.setItem('theme', theme);
  };

  const themeSelector = () => {
    return globalTheme(currentTheme);
  };

  return (
    <CustomThemeContext.Provider value={{ currentTheme, themeReducer }}>
      <ThemeProvider theme={themeSelector()}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
}

export const useCustomTheme = () => {
  return useContext(CustomThemeContext);
};
