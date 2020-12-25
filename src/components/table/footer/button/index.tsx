import React from 'react';
import styled from 'styled-components';

import { Icon } from '@reglament';

import BaseButton from '../../../base-ui/button';
import IconComponent from '../../../base-ui/icon';

type TableFooterButtonProps = {
  name: Icon;
  onClick: (...args: any[]) => void;
};

const Button = styled(BaseButton)`
  width: 30px;
  height: 30px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const TableFooterButton: React.FC<TableFooterButtonProps> = ({
  name,
  onClick,
}: TableFooterButtonProps) => {
  return (
    <Button onClick={onClick}>
      <IconComponent name={name} />
    </Button>
  );
};

export default TableFooterButton;
