import React, { useMemo, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { UserModel } from '@reglament';

import { useAuthStore } from '../../../store/auth';

import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  FormInput,
  FormErrors,
  FormButton,
  FormDivider,
} from '../../base-ui/form';

const FormRequestError = styled(FormErrors)`
  display: block;
  margin: 0 0 1.5rem 0;
  font-size: 1.2rem;
`;

const defaultValueFactory = () => ({
  login: '',
  password: '',
});

const AuthForm: React.FC = observer(() => {
  const history = useHistory();
  const { store } = useAuthStore();

  const { control, errors, handleSubmit } = useForm({
    defaultValues: defaultValueFactory(),
  });

  const disabled = useMemo(() => {
    return store.fetching;
  }, [store.fetching]);

  const onSubmit = useCallback(
    async (data: UserModel) => {
      try {
        await store.login(data);

        if (store.token) {
          history.push('/admin');
        }
      } catch (err: unknown) {
        console.error(err);
      }
    },
    [store, history],
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {store.error && <FormRequestError>{store.error}</FormRequestError>}

      <Controller
        name="login"
        control={control}
        rules={{ required: true }}
        render={({ value, onChange }) => (
          <FormGroup>
            <FormLabel htmlFor="login">Логин</FormLabel>
            <FormControl>
              <FormInput id="login" value={value} onChange={onChange} />

              {errors.login && (
                <FormErrors>Пожалуйста, введите ваш логин.</FormErrors>
              )}
            </FormControl>
          </FormGroup>
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ value, onChange }) => (
          <FormGroup>
            <FormLabel htmlFor="password">Пароль</FormLabel>
            <FormControl>
              <FormInput
                id="password"
                type="password"
                value={value}
                onChange={onChange}
              />

              {errors.password && (
                <FormErrors>Пожалуйста, введите ваш пароль.</FormErrors>
              )}
            </FormControl>
          </FormGroup>
        )}
      />

      <FormGroup>
        <FormDivider />
        <FormControl>
          <FormButton disabled={disabled} type="submit" title="Войти">
            Войти
          </FormButton>
        </FormControl>
      </FormGroup>
    </Form>
  );
});

export default AuthForm;
