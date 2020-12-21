import React, { useCallback, ChangeEvent } from 'react';
import styled from 'styled-components';

import TableHeaderInput from './input';

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 120px 230px 70px 90px 220px 1fr 85px;
  grid-template-rows: auto;
  column-gap: 1rem;
  padding: 1rem;
  margin-bottom: 0.85rem;
  background-color: #e5e5e5;
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
      <TableHeaderInput
        id="agency"
        label="Орган"
        type="text"
        onChange={onChange}
      />

      <TableHeaderInput
        id="document__type"
        label="Вид документа"
        onChange={onChange}
      />

      <TableHeaderInput
        id="project"
        label="Проект"
        type="checkbox"
        onChange={onChange}
      />

      <TableHeaderInput
        id="number"
        label="№"
        type="number"
        onChange={onChange}
      />

      <TableHeaderInput
        id="date"
        label="Дата"
        type="date"
        onChange={onChange}
      />

      <TableHeaderInput
        id="name"
        label="Наименование"
        onChange={onChange}
      />

      <TableHeaderButton>Поиск</TableHeaderButton>
    </HeaderContainer>
  );
};

export default TableHeader;
