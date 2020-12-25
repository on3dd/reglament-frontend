import React, { useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components';

import { PropsWithTheme, SearchDraft } from '@reglament';

import { useThemeContext } from '../../../utils/contexts/ThemeContext';
import { AGENCY_TYPES, DOCUMENT_TYPES } from '../../../utils/constants';

import { Form } from '../../base-ui/form';
import Button from '../../base-ui/button';

import TableHeaderGroup from './group';
import TableHeaderInput from './input';
import TableHeaderSelect from './select';

type HeaderContainerProps = PropsWithTheme<{}>;

const HeaderContainer = styled.div`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: 110px 210px 70px 80px 1.5fr 1fr 85px;
  grid-template-rows: auto;
  padding: 1rem;
  margin-bottom: 0.85rem;

  background-color: ${({ theme }: HeaderContainerProps) => {
    return theme.secondaryColor;
  }};
`;

const TableHeaderDouble = styled.div`
  display: inline-grid;
  column-gap: 0.5rem;
  grid-template-columns: 1fr 1fr;
`;

const TableHeaderButton = styled(Button)``;

const defaultValuesFactory = (): SearchDraft => ({});

const TableHeader: React.FC = () => {
  const { theme } = useThemeContext();

  const { control, handleSubmit } = useForm({
    defaultValues: defaultValuesFactory(),
  });

  const onSubmit = useCallback((data: SearchDraft) => {
    console.log(
      'filtered data:',
      Object.fromEntries(
        Object.entries(data).reduce((acc, [key, value]) => {
          return !!value ? [...acc, [key, value] as [string, any]] : acc;
        }, [] as [string, any][]),
      ),
    );
  }, []);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <HeaderContainer theme={theme} className="table__header">
        <TableHeaderGroup id="agency" label="Орган">
          <Controller
            name="agency"
            control={control}
            render={({ value, onChange }) => (
              <TableHeaderSelect
                id="agency"
                name="agency"
                value={value}
                items={AGENCY_TYPES}
                onChange={onChange}
              />
            )}
          />
        </TableHeaderGroup>

        <TableHeaderGroup id="type" label="Вид документа">
          <Controller
            name="type"
            control={control}
            render={({ value, onChange }) => (
              <TableHeaderSelect
                id="type"
                name="type"
                value={value}
                items={DOCUMENT_TYPES}
                onChange={onChange}
              />
            )}
          />
        </TableHeaderGroup>

        <TableHeaderGroup id="is_project" label="Проект">
          <Controller
            name="is_project"
            control={control}
            render={({ value, onChange }) => (
              <TableHeaderInput
                id="is_project"
                type="checkbox"
                value={value}
                checked={!!value}
                onChange={onChange}
              />
            )}
          />
        </TableHeaderGroup>

        <TableHeaderGroup id="number" label="№">
          <Controller
            name="number"
            control={control}
            render={({ value, onChange }) => (
              <TableHeaderInput
                id="number"
                type="text"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </TableHeaderGroup>

        <TableHeaderGroup id="posted_at" label="Дата">
          <TableHeaderDouble>
            <Controller
              name="posted_at"
              control={control}
              render={({ value, onChange }) => (
                <TableHeaderInput
                  id="posted_at"
                  type="date"
                  value={value}
                  onChange={onChange}
                />
              )}
            />

            <Controller
              name="created_at"
              control={control}
              render={({ value, onChange }) => (
                <TableHeaderInput
                  id="created_at"
                  type="date"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </TableHeaderDouble>
        </TableHeaderGroup>

        <TableHeaderGroup id="name" label="Наименование">
          <Controller
            name="name"
            control={control}
            render={({ value, onChange }) => (
              <TableHeaderInput
                id="name"
                type="text"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </TableHeaderGroup>

        <TableHeaderButton type="submit">Поиск</TableHeaderButton>
      </HeaderContainer>
    </Form>
  );
};

export default TableHeader;
