import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { PropsWithTheme } from '@reglament';

import { useThemeContext } from '../../../../utils/contexts/ThemeContext';

import Label from '../../../base-ui/label';

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

const InputLabel = styled(Label)`
  margin-right: 1ch;
  white-space: nowrap;

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
