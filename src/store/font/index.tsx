import React, {
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';

import FontStore from './store';

type FontContextValue = {
  store: FontStore;
};

const FontStateContext = createContext<FontContextValue>(
  {} as FontContextValue,
);

const store = new FontStore();

type FontStateProviderProps = PropsWithChildren<{}>;

export const FontStateProvider: React.FC<FontStateProviderProps> = ({
  children,
}) => (
  <FontStateContext.Provider value={{ store }}>
    {children}
  </FontStateContext.Provider>
);

export const useFontStore = () => useContext(FontStateContext);
