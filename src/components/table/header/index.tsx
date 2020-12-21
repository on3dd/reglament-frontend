import React, { useCallback, ChangeEvent } from 'react';
import styled from 'styled-components';

import TableHeaderGroup from './group';
import TableHeaderInput from './input';

const HeaderContainer = styled.div`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: 110px 210px 70px 80px 1.5fr 1fr 85px;
  grid-template-rows: auto;
  padding: 1rem;
  margin-bottom: 0.85rem;
  background-color: #e5e5e5;
`;

const TableHeaderDouble = styled.div`
  display: inline-grid;
  column-gap: 0.5rem;
  grid-template-columns: 1fr 1fr;
`;

const TableHeaderButton = styled.button`
  color: #ffffff;
  background-color: #0066b3;
  border: none;
  border-radius: 4px;
  text-transform: lowercase;
`;

const TableHeader: React.FC = () => {
  const onChange = useCallback((evt: ChangeEvent) => {
    console.log('evt.target', evt.target);
  }, []);

  return (
    <HeaderContainer className="table__header">
      <TableHeaderGroup id="agency" label="Орган">
        <TableHeaderInput
          id="agency"
          type="text"
          value="Глава ГО"
          onChange={onChange}
        />
      </TableHeaderGroup>

      <TableHeaderGroup id="document__type" label="Вид документа">
        <TableHeaderInput
          id="document__type"
          type="text"
          value="Постановление"
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
