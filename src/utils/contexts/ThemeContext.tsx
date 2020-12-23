import React, {
  createContext,
  PropsWithChildren,
  useMemo,
  useContext,
} from 'react';

import { Theme, ReglamentTheme } from '@reglament';

export const ThemeContext = createContext({} as ThemeProviderProps);

type ThemeProviderProps = PropsWithChildren<{
  theme: Theme;
  changeTheme: (theme: ReglamentTheme) => void;
}>;

export const ThemeProvider = ({
  theme,
  children,
  changeTheme,
}: ThemeProviderProps) => {
  const value = useMemo(() => {
    return { theme, changeTheme };
  }, [theme, changeTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
