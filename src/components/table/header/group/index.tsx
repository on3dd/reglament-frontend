import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { PropsWithTheme } from '@reglament';

import { useThemeContext } from '../../../../utils/contexts/ThemeContext';

type TableHeaderGroupProps = PropsWithChildren<{
  id: string;
  label: string;
}>;

type InputLabelProps = PropsWithTheme<{}>;

const InputContainer = styled.div`
  display: flex;
  width: inherit;
  align-items: center;
`;

const InputLabel = styled.label`
  margin-right: 1ch;
  white-space: nowrap;
  text-transform: lowercase;

  color: ${({ theme }: InputLabelProps) => {
    return theme.fontColorAlt;
  }};
`;

const TableHeaderGroup: React.FC<TableHeaderGroupProps> = ({
  id,
  label,
  children,
}: TableHeaderGroupProps) => {
  const { theme } = useThemeContext();

  return (
    <InputContainer className="header__input">
      <InputLabel theme={theme} htmlFor={id}>
        {label}
      </InputLabel>

      <React.Fragment>{children}</React.Fragment>
    </InputContainer>
  );
};

export default TableHeaderGroup;
