import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import {
  Form,
  FormGroup,
  FormLabel,
  FormLabelFile,
  FormControl,
  FormInput,
  FormInputWide,
  FormInputFile,
  FormErrors,
  FormButton,
} from '../../../base-ui/form';

const FormControlNested = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.25rem;

  input {
    margin-right: 1ch;
  }
`;

const AdminAddForm: React.FC = () => {
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
        <FormLabel htmlFor="type">Вид документа</FormLabel>
        <FormControl>
          <FormInput
            id="type"
            name="type"
            value="Постановление"
            onChange={onChange}
            ref={register({ required: true })}
          />

          <FormControlNested>
            <FormInput
              id="project"
              name="project"
              type="checkbox"
              checked={true}
              onChange={onChange}
            />

            <FormLabel htmlFor="project">Проект</FormLabel>
          </FormControlNested>

          {errors.type && (
            <FormErrors>Пожалуйста, выберите вид документа.</FormErrors>
          )}
        </FormControl>
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="agency">Орган</FormLabel>
        <FormControl>
          <FormInput
            id="agency"
            name="agency"
            value="АГО"
            onChange={onChange}
            ref={register({ required: true })}
          />

          {errors.agency && (
            <FormErrors>Пожалуйста, введите орган документа.</FormErrors>
          )}
        </FormControl>
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="date">Дата</FormLabel>
        <FormControl>
          <FormInput
            id="date"
            name="date"
            type="date"
            value="1998-10-25"
            onChange={onChange}
            ref={register({ required: true })}
          />

          {errors.date && (
            <FormErrors>Пожалуйста, введите дату документа.</FormErrors>
          )}
        </FormControl>
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="number">№</FormLabel>
        <FormControl>
          <FormInput
            id="number"
            name="number"
            value="490-па"
            onChange={onChange}
            ref={register({ required: true })}
          />

          {errors.number && (
            <FormErrors>
              Пожалуйста, введите дату номер документа.
            </FormErrors>
          )}
        </FormControl>
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="name">Наименование</FormLabel>
        <FormControl>
          <FormInputWide
            id="name"
            name="name"
            value="О мерах по укреплению пожарной безопасности на осенне-зимний период 2020-2021 годов"
            onChange={onChange}
            ref={register({ required: true })}
          />

          {errors.name && (
            <FormErrors>
              Пожалуйста, введите дату название документа.
            </FormErrors>
          )}
        </FormControl>
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="text">Текст</FormLabel>
        <FormControl>
          <FormLabelFile htmlFor="text">Прикрепить документ</FormLabelFile>
          <FormInputFile
            id="text"
            name="text"
            type="file"
            accept=".doc,.docx,.pdf"
            onChange={onChange}
            ref={register({ required: true })}
          />

          {errors.text && (
            <FormErrors>
              Пожалуйста, введите выберите файл с текстом документа.
            </FormErrors>
          )}
        </FormControl>
      </FormGroup>

      <FormGroup>
        <FormLabel />
        <FormControl>
          <FormButton type="submit">Добавить документ</FormButton>
        </FormControl>
      </FormGroup>
    </Form>
  );
};

export default AdminAddForm;
