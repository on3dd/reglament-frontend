import React from 'react';
import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';

const lowercase = css`
  text-transform: lowercase;
`;

const Form = styled.form`
  display: block;
`;

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  margin-bottom: 1rem;
`;

const FormLabel = styled.label`
  ${lowercase}
`;

const FormControl = styled.div`
  width: 100%;
`;

const FormInput = styled.input``;

const FormErrors = styled.span`
  margin: 1rem 0 0 1rem;
  color: #e74c3c;
`;

const FormButton = styled.button`
  ${lowercase}

  padding: 0.5rem 2rem;
  color: #ffffff;
  background: #0066b3;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
`;

const AuthForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook

  const onSubmit = (data: any) => {
    console.log('data:', data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <FormLabel htmlFor="login">Логин</FormLabel>
        <FormControl>
          <FormInput
            id="login"
            name="login"
            ref={register({ required: true })}
          />

          {errors.login && (
            <FormErrors>Пожалуйста, введите ваш логин.</FormErrors>
          )}
        </FormControl>
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="password">Пароль</FormLabel>
        <FormControl>
          <FormInput
            id="password"
            name="password"
            type="password"
            ref={register({ required: true })}
          />

          {errors.password && (
            <FormErrors>Пожалуйста, введите ваш пароль.</FormErrors>
          )}
        </FormControl>
      </FormGroup>

      <FormGroup>
        <FormLabel />
        <FormControl>
          <FormButton type="submit">Войти</FormButton>
        </FormControl>
      </FormGroup>
    </Form>
  );
};

export default AuthForm;
