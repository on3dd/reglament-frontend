import React, { PropsWithRef, HTMLProps, forwardRef } from 'react';
import styled from 'styled-components';

type BaseInputProps = PropsWithRef<HTMLProps<HTMLInputElement> & any>; // TODO: fix any

const Input = styled.input`
  margin: 0;
  padding: 0.25rem;
  border: 0.5px solid #acacac;
  border-radius: 4px;
`;

const BaseInput: React.FC<BaseInputProps> = forwardRef(
  (props, _: BaseInputProps) => {
    return <Input {...props} />;
  },
);

export default BaseInput;
