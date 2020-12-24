import React from 'react';
import styled from 'styled-components';

import { SelectItem } from '@reglament';

import BaseSelect from '../../../base-ui/select';

interface TableHeaderSelectProps {
  id: string;
  name: string;
  value?: string;
  items?: SelectItem[];
  onChange: (...args: any[]) => void;
}

const Select = styled(BaseSelect)`
  width: 100%;
  height: 100%;
`;

const TableHeaderSelect: React.FC<TableHeaderSelectProps> = ({
  id,
  name,
  value = '',
  items = [],
  onChange,
}: TableHeaderSelectProps) => {
  return (
    <Select
      id={id}
      name={name}
      items={items}
      value={value}
      onChange={onChange}
    />
  );
};

export default TableHeaderSelect;
