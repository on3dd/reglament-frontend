import React, { useMemo, useCallback, ChangeEvent } from 'react';
import { observer } from 'mobx-react-lite';
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components';

import { PropsWithTheme, SearchDraft } from '@reglament';

import { useSearchStore } from '../../../store/search';

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

const defaultValuesFactory = (): SearchDraft => ({
  name: '',
  type: '',
  agency: '',
  number: '',
  placed_at: '',
  created_at: '',
  is_project: false,
});

const TableHeader: React.FC = observer(() => {
  const { store } = useSearchStore();
  const { theme } = useThemeContext();

  const { control, handleSubmit } = useForm({
    defaultValues: defaultValuesFactory(),
  });

  const disabled = useMemo(() => {
    return store.fetching;
  }, [store.fetching]);

  const onSubmit = useCallback(
    async (data: SearchDraft) => {
      // const filteredData = Object.fromEntries(
      //   Object.entries(data).reduce((acc, [key, value]) => {
      //     return !!value ? [...acc, [key, value] as [string, any]] : acc;
      //   }, [] as [string, any][]),
      // );

      await store.search(data);
    },
    [store],
  );

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
                checked={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onChange(e.target.checked)
                }
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

        <TableHeaderGroup id="placed_at" label="Дата">
          <TableHeaderDouble>
            <Controller
              name="placed_at"
              control={control}
              render={({ value, onChange }) => (
                <TableHeaderInput
                  id="placed_at"
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

        <TableHeaderButton disabled={disabled} type="submit" title="Поиск">
          Поиск
        </TableHeaderButton>
      </HeaderContainer>
    </Form>
  );
});

export default TableHeader;
