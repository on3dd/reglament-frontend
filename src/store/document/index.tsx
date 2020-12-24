import React, {
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';

import DocumentStore from './store';

type DocumentContextValue = {
  store: DocumentStore;
};

const DocumentStateContext = createContext<DocumentContextValue>(
  {} as DocumentContextValue,
);

const store = new DocumentStore();

type DocumentStateProviderProps = PropsWithChildren<{}>;

export const DocumentStateProvider: React.FC<DocumentStateProviderProps> = ({
  children,
}) => (
  <DocumentStateContext.Provider value={{ store }}>
    {children}
  </DocumentStateContext.Provider>
);

export const useDocumentStore = () => useContext(DocumentStateContext);
