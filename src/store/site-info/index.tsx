import React, {
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';

import SiteInfoStore from './store';

type SiteInfoContextValue = {
  store: SiteInfoStore;
};

const SiteInfoStateContext = createContext<SiteInfoContextValue>(
  {} as SiteInfoContextValue,
);

const store = new SiteInfoStore();

type SiteInfoStateProviderProps = PropsWithChildren<{}>;

export const SiteInfoStateProvider: React.FC<SiteInfoStateProviderProps> = ({
  children,
}) => (
  <SiteInfoStateContext.Provider value={{ store }}>
    {children}
  </SiteInfoStateContext.Provider>
);

export const useSiteInfoStore = () => useContext(SiteInfoStateContext);
