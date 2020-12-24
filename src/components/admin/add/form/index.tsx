import React, { useEffect, useCallback, ChangeEvent } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components';

import { DocumentDraft } from '@reglament';

import { DOCUMENT_TYPES as items } from '../../../../utils/constants';

import {
  Form,
  FormGroup,
  FormLabel,
  FormLabelFile,
  FormControl,
  FormInput,
  FormInputWide,
  FormInputFile,
  FormSelect,
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

const defaultValuesFactory = (): DocumentDraft => ({
  type: items[0],
  agency: '',
  date: '',
  number: '',
  name: '',
});

const AdminAddForm: React.FC = () => {
  const { control, errors, register, handleSubmit, setValue } = useForm({
    defaultValues: defaultValuesFactory(),
  });

  // see https://github.com/react-hook-form/react-hook-form/issues/127#issuecomment-511057100
  useEffect(() => {
    register({ name: 'file' }, { required: true });
  }, [register]);

  const onFileChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;

      if (files && files.length) {
        setValue('file', files!.item(0));
      }
    },
    [setValue],
  );

  const onSubmit = useCallback((data: any) => {
    console.log('submit data:', data);
  }, []);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="type"
        control={control}
        rules={{ required: true }}
        render={({ value, onChange }) => (
          <FormGroup>
            <FormLabel htmlFor="type">Вид документа</FormLabel>
            <FormControl>
              <FormSelect
                id="type"
                name="type"
                items={items}
                value={value}
                onChange={onChange}
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
                <FormErrors>
                  Пожалуйста, выберите вид документа.
                </FormErrors>
              )}
            </FormControl>
          </FormGroup>
        )}
      />

      <Controller
        name="agency"
        control={control}
        rules={{ required: true }}
        render={({ value, onChange }) => (
          <FormGroup>
            <FormLabel htmlFor="agency">Орган</FormLabel>
            <FormControl>
              <FormInput
                id="agency"
                name="agency"
                value={value}
                onChange={onChange}
              />

              {errors.agency && (
                <FormErrors>
                  Пожалуйста, введите орган документа.
                </FormErrors>
              )}
            </FormControl>
          </FormGroup>
        )}
      />

      <Controller
        name="date"
        control={control}
        rules={{ required: true }}
        render={({ onChange }) => (
          <FormGroup>
            <FormLabel htmlFor="date">Дата</FormLabel>
            <FormControl>
              <FormInput
                id="date"
                name="date"
                type="date"
                onChange={onChange}
              />

              {errors.date && (
                <FormErrors>
                  Пожалуйста, введите дату документа.
                </FormErrors>
              )}
            </FormControl>
          </FormGroup>
        )}
      />

      <Controller
        name="number"
        control={control}
        rules={{ required: true }}
        render={({ value, onChange }) => (
          <FormGroup>
            <FormLabel htmlFor="number">№</FormLabel>
            <FormControl>
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
            </FormControl>
          </FormGroup>
        )}
      />

      <Controller
        name="name"
        control={control}
        rules={{ required: true }}
        render={({ value, onChange }) => (
          <FormGroup>
            <FormLabel htmlFor="name">Наименование</FormLabel>
            <FormControl>
              <FormInputWide
                id="name"
                name="name"
                value={value}
                onChange={onChange}
              />

              {errors.name && (
                <FormErrors>
                  Пожалуйста, введите наименование документа.
                </FormErrors>
              )}
            </FormControl>
          </FormGroup>
        )}
      />

      <FormGroup>
        <FormLabel htmlFor="file">Текст</FormLabel>
        <FormControl>
          <FormLabelFile htmlFor="file">Прикрепить документ</FormLabelFile>
          <FormInputFile
            id="file"
            name="file"
            type="file"
            accept=".doc,.docx,.pdf"
            onChange={onFileChange}
          />

          {errors.file && (
            <FormErrors>
              Пожалуйста, выберите файл с текстом документа.
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
