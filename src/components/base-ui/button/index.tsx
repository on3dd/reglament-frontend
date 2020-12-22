import React, { HTMLProps, PropsWithChildren } from 'react';
import styled from 'styled-components';

import { lowercase } from '../mixins';

type BaseButtonProps = PropsWithChildren<
  HTMLProps<HTMLButtonElement> & {}
>;

const Button = styled.button`
  ${lowercase}

  color: #ffffff;
  background: #0066b3;
  border: none;
  border-radius: 4px;
`;

const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  className,
}: BaseButtonProps) => {
  return <Button className={className}>{children}</Button>;
};

export default BaseButton;
