import React from 'react';
import styled from 'styled-components';

import { InputType } from '@reglament';

type TableHeaderInputProps = {
  id: string;
  label: string;
  value?: string;
  type?: InputType;
  onChange: (...args: any[]) => void;
};

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InputLabel = styled.label`
  margin-right: 1ch;
  color: #5b5b5b;
  white-space: nowrap;
  text-transform: lowercase;
`;

const InputInput = styled.input`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0.25rem;
  border: 0.5px solid #acacac;
  border-radius: 4px;
`;

const TableHeaderInput: React.FC<TableHeaderInputProps> = ({
  id,
  label,
  value = '',
  type = 'text',
  onChange,
}: TableHeaderInputProps) => {
  return (
    <InputContainer className="header__input">
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputInput id={id} value={value} type={type} onChange={onChange} />
    </InputContainer>
  );
};

export default TableHeaderInput;
