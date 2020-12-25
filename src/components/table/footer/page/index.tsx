import React from 'react';
import styled from 'styled-components';

import Input from '../../../base-ui/input';

type TableFooterPageProps = {
  max: number;
  value: number;
  onChange: (...args: any[]) => void;
};

const PageContainer = styled.label`
  margin: 0 1ch;
  display: inline-block;
`;

const TableFooterPageInput = styled(Input)``;

const TableFooterPageMax = styled.span`
  font-weight: 600;
`;

const TableFooterPage: React.FC<TableFooterPageProps> = ({
  max,
  value,
  onChange,
}: TableFooterPageProps) => {
  return (
    <PageContainer>
      <TableFooterPageInput
        type="number"
        min={1}
        max={max}
        value={value}
        onChange={onChange}
      />
      {' из '}
      <TableFooterPageMax>{max}</TableFooterPageMax>
    </PageContainer>
  );
};

export default TableFooterPage;
