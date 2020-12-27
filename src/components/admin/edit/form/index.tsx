import React, { useEffect, useMemo, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import styled, { css } from 'styled-components';

import { SiteInfoModel } from '@reglament';

import { useSiteInfoStore } from '../../../../store/site-info';

import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  FormInput,
  FormInputWide,
  FormErrors,
  FormButton,
  FormDivider,
} from '../../../base-ui/form';

const notLastOfType = css`
  &:not(:last-of-type) {
    margin-right: 0.75rem;
  }
`;

const FormControlMultiple = styled(FormControl)`
  input {
    ${notLastOfType}
  }
`;

const FormControlNested = styled(FormControl)`
  ${notLastOfType}

  &:last-of-type {
    width: 100%;

    input {
      width: 100%;
    }
  }
`;

const FormLabelNested = styled(FormLabel)`
  margin-right: 1ch;
  white-space: nowrap;
`;

const defaultValuesFactory = (data: SiteInfoModel): SiteInfoModel => {
  return data;
};

const AdminEditForm: React.FC = observer(() => {
  const { store } = useSiteInfoStore();

  const { control, errors, reset, handleSubmit } = useForm({
    defaultValues: defaultValuesFactory(store.info),
  });

  useEffect(() => {
    reset({ ...defaultValuesFactory(store.info) });
  }, [reset, store.info]);

  const disabled = useMemo(() => {
    return store.fetching;
  }, [store.fetching]);

  const onSubmit = useCallback(
    async (data: SiteInfoModel) => {
      console.log('data:', data);

      await store.updateSiteInfo(data);
    },
    [store],
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ value, onChange }) => (
          <FormGroup>
            <FormLabel htmlFor="email">Электронная почта</FormLabel>
            <FormControl>
              <FormInput
                id="email"
                name="email"
                type="email"
                value={value}
                onChange={onChange}
              />

              {errors.email && (
                <FormErrors>
                  Пожалуйста, введите адрес электронной почты.
                </FormErrors>
              )}
            </FormControl>
          </FormGroup>
        )}
      />

      <FormGroup>
        <FormLabel htmlFor="number">Контактный телефон</FormLabel>
        <FormControlMultiple>
          <Controller
            name="number"
            control={control}
            rules={{ required: true }}
            render={({ value, onChange }) => (
              <FormInput
                id="number"
                name="number"
                type="tel"
                value={value}
                placeholder="+7 (000) 000-00-00"
                onChange={onChange}
              />
            )}
          />

          {errors.number && (
            <FormErrors>Пожалуйста, введите номер телефона.</FormErrors>
          )}

          <Controller
            name="number_name"
            control={control}
            rules={{ required: true }}
            render={({ value, onChange }) => (
              <FormInputWide
                id="number_name"
                name="number_name"
                value={value}
                onChange={onChange}
              />
            )}
          />

          {errors.number_name && (
            <FormErrors>
              Пожалуйста, введите заголовок для номера телефона.
            </FormErrors>
          )}
        </FormControlMultiple>
      </FormGroup>

      <Controller
        name="address"
        control={control}
        rules={{ required: true }}
        render={({ value, onChange }) => (
          <FormGroup>
            <FormLabel htmlFor="address">Адрес редакции</FormLabel>
            <FormControl>
              <FormInputWide
                id="address"
                name="address"
                value={value}
                onChange={onChange}
              />

              {errors.address && (
                <FormErrors>
                  Пожалуйста, введите адрес редакции.
                </FormErrors>
              )}
            </FormControl>
          </FormGroup>
        )}
      />

      <FormGroup>
        <FormLabel htmlFor="number">Запись о регистрации</FormLabel>
        <FormControlMultiple>
          <Controller
            name="number"
            control={control}
            rules={{ required: true }}
            render={({ value, onChange }) => (
              <FormControlNested>
                <FormLabelNested htmlFor="number">№</FormLabelNested>

                <FormInput
                  id="number"
                  name="number"
                  value={value}
                  onChange={onChange}
                />

                {errors.number && (
                  <FormErrors>
                    Пожалуйста, введите номер документа.
                  </FormErrors>
                )}
              </FormControlNested>
            )}
          />

          <Controller
            name="date"
            control={control}
            rules={{ required: true }}
            render={({ value, onChange }) => (
              <FormControlNested>
                <FormLabelNested htmlFor="date">
                  Дата выдачи
                </FormLabelNested>

                <FormInput
                  id="date"
                  name="date"
                  type="date"
                  value={value}
                  onChange={onChange}
                />

                {errors.date && (
                  <FormErrors>
                    Пожалуйста, введите дату выдачи документа.
                  </FormErrors>
                )}
              </FormControlNested>
            )}
          />

          <Controller
            name="reg_author"
            control={control}
            rules={{ required: true }}
            render={({ value, onChange }) => (
              <FormControlNested>
                <FormLabelNested htmlFor="issued_by">
                  Кем выдано
                </FormLabelNested>

                <FormInput
                  id="reg_author"
                  name="reg_author"
                  value={value}
                  onChange={onChange}
                />

                {errors.reg_author && (
                  <FormErrors>
                    Пожалуйста, введите орган, выдавший документ.
                  </FormErrors>
                )}
              </FormControlNested>
            )}
          />
        </FormControlMultiple>
      </FormGroup>

      <Controller
        name="boss"
        control={control}
        rules={{ required: true }}
        render={({ value, onChange }) => (
          <FormGroup>
            <FormLabel htmlFor="boss">Главный редактор</FormLabel>
            <FormControl>
              <FormInputWide
                id="boss"
                name="boss"
                value={value}
                onChange={onChange}
              />

              {errors.boss && (
                <FormErrors>
                  Пожалуйста, введите ФИО главного редактора.
                </FormErrors>
              )}
            </FormControl>
          </FormGroup>
        )}
      />

      <FormGroup>
        <FormDivider />
        <FormControl>
          <FormButton disabled={disabled} type="submit">
            Сохранить изменения
          </FormButton>
        </FormControl>
      </FormGroup>
    </Form>
  );
});

export default AdminEditForm;
