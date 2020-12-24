import React, { useMemo, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { observer } from 'mobx-react-lite';

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
} from '../../base-ui/form';

const defaultValueFactory = () => ({
  login: '',
  password: '',
});

const AuthForm: React.FC = observer(() => {
  const { store } = useAuthStore();

  const { control, errors, handleSubmit } = useForm({
    defaultValues: defaultValueFactory(),
  });

  const disabled = useMemo(() => {
    return store.fetching;
  }, [store.fetching]);

  const onSubmit = useCallback(
    async (data: UserModel) => {
      console.log('data:', data);

      await store.login(data);
    },
    [store],
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
        <FormLabel />
        <FormControl>
          <FormButton disabled={disabled} type="submit">
            Войти
          </FormButton>
        </FormControl>
      </FormGroup>
    </Form>
  );
});

export default AuthForm;
