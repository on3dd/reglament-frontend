import React, { PropsWithRef, HTMLProps, forwardRef } from 'react';
import styled from 'styled-components';

import { SelectItem } from '@reglament';

type BaseSelectProps = PropsWithRef<
  HTMLProps<HTMLSelectElement> & {
    items: SelectItem[];
  } & any
>; // TODO: fix any

const Select = styled.select`
  margin: 0;
  padding: 0.25rem;
  border: 0.5px solid #acacac;
  border-radius: 4px;
  cursor: pointer;
`;

const BaseSelect: React.FC<BaseSelectProps> = forwardRef(
  (props, _: BaseSelectProps) => {
    return (
      <Select {...props}>
        {props.items.map((el: SelectItem) => (
          <option key={el.value} value={el.value}>
            {el.text}
          </option>
        ))}
      </Select>
    );
  },
);

export default BaseSelect;
