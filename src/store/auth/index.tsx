import React, {
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';

import AuthStore from './store';

type AuthContextValue = {
  store: AuthStore;
};

const AuthStateContext = createContext<AuthContextValue>(
  {} as AuthContextValue,
);

const store = new AuthStore();

type AuthStateProviderProps = PropsWithChildren<{}>;

export const AuthStateProvider: React.FC<AuthStateProviderProps> = ({
  children,
}) => (
  <AuthStateContext.Provider value={{ store }}>
    {children}
  </AuthStateContext.Provider>
);

export const useAuthStore = () => useContext(AuthStateContext);
