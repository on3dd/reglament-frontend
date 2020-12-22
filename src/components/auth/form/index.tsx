import React from 'react';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  FormInput,
  FormErrors,
  FormButton,
} from '../../base-ui/form';

const AuthForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();

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
