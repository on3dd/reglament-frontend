import React, { useCallback, ChangeEvent } from 'react';
import styled from 'styled-components';

import { PropsWithTheme } from '@reglament';

import { useThemeContext } from '../../../utils/contexts/ThemeContext';
import { AGENCY_TYPES, DOCUMENT_TYPES } from '../../../utils/constants';

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

const TableHeader: React.FC = () => {
  const { theme } = useThemeContext();

  const onChange = useCallback((evt: ChangeEvent) => {
    console.log('evt.target', evt.target);
  }, []);

  return (
    <HeaderContainer theme={theme} className="table__header">
      <TableHeaderGroup id="agency" label="Орган">
        <TableHeaderSelect
          id="document__type"
          name="document__type"
          items={AGENCY_TYPES}
          value={AGENCY_TYPES[0].toString()}
          onChange={onChange}
        />
      </TableHeaderGroup>

      <TableHeaderGroup id="document__type" label="Вид документа">
        <TableHeaderSelect
          id="document__type"
          name="document__type"
          items={DOCUMENT_TYPES}
          value={DOCUMENT_TYPES[0].toString()}
          onChange={onChange}
        />
      </TableHeaderGroup>

      <TableHeaderGroup id="project" label="Проект">
        <TableHeaderInput
          id="project"
          type="checkbox"
          checked={true}
          onChange={onChange}
        />
      </TableHeaderGroup>

      <TableHeaderGroup id="number" label="№">
        <TableHeaderInput
          id="number"
          type="text"
          value="490-па"
          onChange={onChange}
        />
      </TableHeaderGroup>

      <TableHeaderGroup id="date" label="Дата">
        <TableHeaderDouble>
          <TableHeaderInput
            id="date"
            type="date"
            value="1998-10-25"
            onChange={onChange}
          />

          <TableHeaderInput
            id="date"
            type="date"
            value="2020-12-31"
            onChange={onChange}
          />
        </TableHeaderDouble>
      </TableHeaderGroup>

      <TableHeaderGroup id="name" label="Наименование">
        <TableHeaderInput
          id="name"
          type="text"
          value=""
          onChange={onChange}
        />
      </TableHeaderGroup>

      <TableHeaderButton>Поиск</TableHeaderButton>
    </HeaderContainer>
  );
};

export default TableHeader;
