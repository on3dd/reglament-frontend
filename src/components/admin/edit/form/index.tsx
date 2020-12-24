import React from 'react';
import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';

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

const AdminEditForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: any) => {
    console.log('submit data:', data);
  };

  const onChange = (data: any) => {
    console.log('change data:', data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <FormLabel htmlFor="email">Электронная почта</FormLabel>
        <FormControl>
          <FormInput
            id="email"
            name="email"
            type="email"
            value="admartm@mail.primorye.ru"
            onChange={onChange}
            ref={register({ required: true })}
          />

          {errors.email && (
            <FormErrors>
              Пожалуйста, введите адрес электронной почты.
            </FormErrors>
          )}
        </FormControl>
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="phone">Контактный телефон</FormLabel>
        <FormControlMultiple>
          <FormInput
            id="phone"
            name="phone"
            type="tel"
            value="+7 (423) 374-94-90"
            placeholder="+7 (000) 000-00-00"
            onChange={onChange}
            ref={register({ required: true })}
          />

          <FormInputWide
            id="phone_title"
            name="phone_title"
            value="справочная служба администрации Артёмовского городского округа"
            onChange={onChange}
            ref={register({ required: true })}
          />

          {errors.phone && (
            <FormErrors>Пожалуйста, введите номер телефона.</FormErrors>
          )}

          {errors.phone_title && (
            <FormErrors>
              Пожалуйста, введите заголовок для номера телефона.
            </FormErrors>
          )}
        </FormControlMultiple>
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="address">Адрес редакции</FormLabel>
        <FormControl>
          <FormInputWide
            id="address"
            name="address"
            value="692760, Приморский край, г.Артём, ул.Кирова, 48"
            onChange={onChange}
            ref={register({ required: true })}
          />

          {errors.address && (
            <FormErrors>Пожалуйста, введите адрес редакции.</FormErrors>
          )}
        </FormControl>
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="number">Запись о регистрации</FormLabel>
        <FormControlMultiple>
          <FormControlNested>
            <FormLabelNested htmlFor="number">№</FormLabelNested>

            <FormInput
              id="number"
              name="number"
              value="490-па"
              onChange={onChange}
              ref={register({ required: true })}
            />

            {errors.number && (
              <FormErrors>Пожалуйста, введите номер документа.</FormErrors>
            )}
          </FormControlNested>

          <FormControlNested>
            <FormLabelNested htmlFor="date">Дата выдачи</FormLabelNested>

            <FormInput
              id="date"
              name="date"
              type="date"
              value="1998-10-25"
              onChange={onChange}
              ref={register({ required: true })}
            />

            {errors.date && (
              <FormErrors>
                Пожалуйста, введите дату выдачи документа.
              </FormErrors>
            )}
          </FormControlNested>

          <FormControlNested>
            <FormLabelNested htmlFor="issued_by">
              Кем выдано
            </FormLabelNested>

            <FormInput
              id="issued_by"
              name="issued_by"
              value="Роскомнадзор"
              onChange={onChange}
              ref={register({ required: true })}
            />

            {errors.issued_by && (
              <FormErrors>
                Пожалуйста, введите орган, выдавший документ.
              </FormErrors>
            )}
          </FormControlNested>
        </FormControlMultiple>
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="editor">Главный редактор</FormLabel>
        <FormControl>
          <FormInputWide
            id="editor"
            name="editor"
            value="Рабинович Элина Дмитриевна"
            onChange={onChange}
            ref={register({ required: true })}
          />

          {errors.editor && (
            <FormErrors>
              Пожалуйста, введите ФИО главного редактора.
            </FormErrors>
          )}
        </FormControl>
      </FormGroup>

      <FormGroup>
        <FormDivider />
        <FormControl>
          <FormButton type="submit">Добавить документ</FormButton>
        </FormControl>
      </FormGroup>
    </Form>
  );
};

export default AdminEditForm;
