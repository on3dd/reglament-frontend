import React, {
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';

import ThemeStore from './store';

type ThemeContextValue = {
  store: ThemeStore;
};

const ThemeStateContext = createContext<ThemeContextValue>(
  {} as ThemeContextValue,
);

const store = new ThemeStore();

type ThemeStateProviderProps = PropsWithChildren<{}>;

export const ThemeStateProvider: React.FC<ThemeStateProviderProps> = ({
  children,
}) => (
  <ThemeStateContext.Provider value={{ store }}>
    {children}
  </ThemeStateContext.Provider>
);

export const useThemeStore = () => useContext(ThemeStateContext);
