import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

type TableHeaderGroupProps = PropsWithChildren<{
  id: string;
  label: string;
}>;

const InputContainer = styled.div`
  display: flex;
  width: inherit;
  align-items: center;
`;

const InputLabel = styled.label`
  margin-right: 1ch;
  color: #5b5b5b;
  white-space: nowrap;
  text-transform: lowercase;
`;

const TableHeaderGroup: React.FC<TableHeaderGroupProps> = ({
  id,
  label,
  children,
}: TableHeaderGroupProps) => {
  return (
    <InputContainer className="header__input">
      <InputLabel htmlFor={id}>{label}</InputLabel>

      <React.Fragment>{children}</React.Fragment>
    </InputContainer>
  );
};

export default TableHeaderGroup;
