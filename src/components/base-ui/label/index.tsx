import React, { PropsWithChildren, HTMLProps } from 'react';
import styled from 'styled-components';

import { lowercase, pointer } from '../mixins';

type BaseLabelProps = PropsWithChildren<HTMLProps<HTMLLabelElement> & any>; // TODO: fix any

const Label = styled.label`
  ${pointer}
  ${lowercase}
`;

const BaseLabel: React.FC<BaseLabelProps> = ({
  children,
  ...props
}: BaseLabelProps) => {
  return <Label {...props}>{children}</Label>;
};

export default BaseLabel;
