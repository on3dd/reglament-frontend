import styled from 'styled-components';

import Label from '../label';
import Input from '../input';
import Select from '../select';
import Button from '../button';

export const Form = styled.form`
  display: block;
`;

export const FormGroup = styled.div`
  display: grid;
  margin-bottom: 1rem;
  grid-template-columns: 150px 1fr;
`;

export const FormDivider = styled.div``;

export const FormLabel = styled(Label)`
  color: #5b5b5b;
`;

export const FormLabelFile = styled.label`
  color: #0066b3;

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

export const FormControl = styled.div`
  display: flex;
  align-items: center;
`;

export const FormErrors = styled.span`
  margin: 0 0 0 1rem;
  color: #e74c3c;
  /* white-space: nowrap; */
`;

export const FormInput = styled(Input)``;

export const FormInputWide = styled(Input)`
  width: 100%;
`;

export const FormInputFile = styled(Input)`
  display: none;
`;

export const FormSelect = styled(Select)``;

export const FormButton = styled(Button)`
  padding: 0.75rem 2rem;
`;
