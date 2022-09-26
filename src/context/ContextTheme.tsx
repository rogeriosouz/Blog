import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { THEME } from '../styles/theme';

type ThemeContentType = {
  theme: ThemeType;
  darkTheme: () => void;
  normalTheme: () => void;
};

type ThemeType = {
  colors: {
    purple_bg: string;
    dark_bg: string;
    button_bg: string;
    white: string;
    lightpurple: string;
    green: string;
    text_black: string;
    subtitle: string;
    text_white: string;
  };

  fonts: {
    sm: number;
    md: number;
    lg: number;
  };
};

export const ThemeContext = createContext({} as ThemeContentType);

export function ThemeContextProvider({ children }: any) {
  const [theme, setTheme] = useState(THEME);

  function normalTheme() {
    setTheme(THEME);
  }

  function darkTheme() {
    setTheme({
      colors: {
        purple_bg: '#000000',
        dark_bg: '#170027',
        button_bg: '#ffffff',
        white: '#000000',
        text_white: '#fff',
        lightpurple: '#ffffff',
        green: '#ffffff',
        text_black: '#ffffff',
        subtitle: '#ffffff',
      },

      fonts: {
        sm: 400,
        md: 600,
        lg: 700,
      },
    });
  }

  return (
    <ThemeContext.Provider value={{ darkTheme, theme, normalTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
