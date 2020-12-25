import React from 'react';
import styled, { css } from 'styled-components';

import { PropsWithTheme, PropsWithTable } from '@reglament';

import { useThemeContext } from '../../../utils/contexts/ThemeContext';

type TableFooterProps = PropsWithTable<{}>;

const margin = css`
  margin-right: 1ch;
`;

type FooterContainerProps = PropsWithTheme<{}>;

const FooterContainer = styled.div`
  margin-bottom: 0.85rem;

  button,
  span {
    color: ${({ theme }: FooterContainerProps) => {
      return theme.fontColor;
    }};
  }
`;

type TableFooterLinkProps = {
  active?: boolean;
};

const TableFooterLink = styled.button`
  ${margin}

  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  font-weight: ${(props: TableFooterLinkProps) =>
    props.active ? 600 : 400};
`;

const TableFooterArrow = styled.span`
  ${margin}
`;

const TableFooter: React.FC<TableFooterProps> = ({
  instance,
}: TableFooterProps) => {
  const { theme } = useThemeContext();

  const {
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = instance as any;

  return (
    <FooterContainer theme={theme}>
      <TableFooterLink active={true}>1</TableFooterLink>
      <TableFooterLink>2</TableFooterLink>
      <TableFooterLink>3</TableFooterLink>

      <TableFooterArrow>...</TableFooterArrow>

      <TableFooterLink>228</TableFooterLink>
    </FooterContainer>
  );
};

export default TableFooter;
