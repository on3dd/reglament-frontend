import React, { useMemo } from 'react';
import styled from 'styled-components';

import { InputType } from '@reglament';

type InputValue = string | number;

type TableHeaderInputProps = {
  id: string;
  type?: InputType;
  value?: InputValue;
  checked?: boolean;
  onChange: (...args: any[]) => void;
};

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
  type = 'text',
  value = '',
  checked = false,
  onChange,
}: TableHeaderInputProps) => {
  const checkbox = useMemo(() => {
    return type === 'checkbox';
  }, [type]);

  const memoizedValue = useMemo(() => {
    return checkbox ? '' : value;
  }, [checkbox, value]);

  const memoizedChecked = useMemo(() => {
    return checkbox ? checked : undefined;
  }, [checkbox, checked]);

  return (
    <InputInput
      id={id}
      type={type}
      value={memoizedValue}
      checked={memoizedChecked}
      onChange={onChange}
    />
  );
};

export default TableHeaderInput;
