import React, {
  createContext,
  PropsWithChildren,
  useMemo,
  useContext,
} from 'react';

import { Font, FontDraft } from '@reglament';

export const FontContext = createContext({} as FontProviderProps);

type FontProviderProps = PropsWithChildren<{
  font: Font;
  changeFont: (font: FontDraft) => void;
}>;

export const FontProvider: React.FC<FontProviderProps> = ({
  font,
  children,
  changeFont,
}: FontProviderProps) => {
  const value = useMemo(() => {
    return { font, changeFont };
  }, [font, changeFont]);

  return (
    <FontContext.Provider value={value}>{children}</FontContext.Provider>
  );
};

export const useFontContext = () => useContext(FontContext);
