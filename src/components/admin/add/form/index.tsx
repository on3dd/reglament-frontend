import React, {
  useEffect,
  useMemo,
  useCallback,
  ChangeEvent,
} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { DocumentDraft } from '@reglament';

import { useDocumentStore } from '../../../../store/document';

import { AGENCY_TYPES, DOCUMENT_TYPES } from '../../../../utils/constants';

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
  FormDivider,
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
  type: DOCUMENT_TYPES[0],
  agency: AGENCY_TYPES[0],
  placed_at: '',
  number: '',
  name: '',
  is_project: true,
});

const AdminAddForm: React.FC = observer(() => {
  const { store } = useDocumentStore();

  const { control, errors, register, handleSubmit, setValue } = useForm({
    defaultValues: defaultValuesFactory(),
  });

  // see https://github.com/react-hook-form/react-hook-form/issues/127#issuecomment-511057100
  useEffect(() => {
    register({ name: 'file' }, { required: true });
  }, [register]);

  const disabled = useMemo(() => {
    return store.fetching;
  }, [store.fetching]);

  const onFileChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;

      if (files && files.length) {
        setValue('file', files!.item(0));
      }
    },
    [setValue],
  );

  const onSubmit = useCallback(
    async (data: DocumentDraft) => {
      console.log('data:', data);

      await store.createDocument(data);
    },
    [store],
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <FormLabel htmlFor="type">Вид документа</FormLabel>
        <FormControl>
          <Controller
            name="type"
            control={control}
            rules={{ required: true }}
            render={({ value, onChange }) => (
              <FormSelect
                id="type"
                name="type"
                value={value}
                items={DOCUMENT_TYPES}
                onChange={onChange}
              />
            )}
          />

          <FormControlNested>
            <Controller
              name="is_project"
              control={control}
              rules={{ required: true }}
              render={({ value, onChange }) => (
                <FormInput
                  id="is_project"
                  name="is_project"
                  type="checkbox"
                  value={value}
                  checked={!!value}
                  onChange={onChange}
                />
              )}
            />

            <FormLabel htmlFor="is_project">Проект</FormLabel>
          </FormControlNested>

          {errors.type && (
            <FormErrors>Пожалуйста, выберите вид документа.</FormErrors>
          )}
        </FormControl>
      </FormGroup>

      <Controller
        name="agency"
        control={control}
        rules={{ required: true }}
        render={({ value, onChange }) => (
          <FormGroup>
            <FormLabel htmlFor="agency">Орган</FormLabel>
            <FormControl>
              <FormSelect
                id="agency"
                name="agency"
                value={value}
                items={AGENCY_TYPES}
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
        name="placed_at"
        control={control}
        rules={{ required: true }}
        render={({ onChange }) => (
          <FormGroup>
            <FormLabel htmlFor="placed_at">Дата</FormLabel>
            <FormControl>
              <FormInput
                id="placed_at"
                name="placed_at"
                type="date"
                onChange={onChange}
              />

              {errors.placed_at && (
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
        <FormDivider />
        <FormControl>
          <FormButton disabled={disabled} type="submit">
            Добавить документ
          </FormButton>
        </FormControl>
      </FormGroup>
    </Form>
  );
});

export default AdminAddForm;
