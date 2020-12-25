import React, {
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';

import SearchStore from './store';

type SearchContextValue = {
  store: SearchStore;
};

const SearchStateContext = createContext<SearchContextValue>(
  {} as SearchContextValue,
);

const store = new SearchStore();

type SearchStateProviderProps = PropsWithChildren<{}>;

export const SearchStateProvider: React.FC<SearchStateProviderProps> = ({
  children,
}) => (
  <SearchStateContext.Provider value={{ store }}>
    {children}
  </SearchStateContext.Provider>
);

export const useSearchStore = () => useContext(SearchStateContext);
