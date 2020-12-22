import styled from 'styled-components';

import { lowercase } from '../mixins';

import Input from '../input';
import Button from '../button';

export const Form = styled.form`
  display: block;
`;

export const FormGroup = styled.div`
  display: grid;
  margin-bottom: 1rem;
  grid-template-columns: 150px 1fr;
`;

export const FormLabel = styled.label`
  ${lowercase}

  color: #5B5B5B;
`;

export const FormControl = styled.div`
  width: 100%;
`;

export const FormErrors = styled.span`
  margin: 1rem 0 0 1rem;
  color: #e74c3c;
`;

export const FormInput = styled(Input)``;

export const FormButton = styled(Button)`
  padding: 0.75rem 2rem;
`;
