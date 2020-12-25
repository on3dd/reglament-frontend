import React, { useMemo, useCallback, ChangeEvent } from 'react';
import styled, { css } from 'styled-components';

import { PropsWithTheme, PropsWithTable } from '@reglament';

import { useThemeContext } from '../../../utils/contexts/ThemeContext';

import TableFooterPage from './page';
import TableFooterButton from './button';

type TableFooterProps = PropsWithTable<{}>;

const margin = css`
  margin-right: 1ch;
`;

type FooterContainerProps = PropsWithTheme<{}>;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.85rem;

  span {
    color: ${({ theme }: FooterContainerProps) => {
      return theme.fontColor;
    }};
  }

  button {
    background-color: ${({ theme }: FooterContainerProps) => {
      return theme.buttonColor;
    }};
  }

  span,
  button {
    ${margin}
  }
`;

const TableFooter: React.FC<TableFooterProps> = ({
  instance,
}: TableFooterProps) => {
  const { theme } = useThemeContext();

  const {
    canNextPage,
    canPreviousPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = instance as any;

  const max = useMemo(() => {
    return pageCount;
  }, [pageCount]);

  const value = useMemo(() => {
    return pageIndex + 1;
  }, [pageIndex]);

  const onFirstClick = useCallback(() => {
    gotoPage(0);
  }, [gotoPage]);

  const onPrevClick = useCallback(() => {
    if (canPreviousPage) previousPage();
  }, [canPreviousPage, previousPage]);

  const onNextClick = useCallback(() => {
    if (canNextPage) nextPage();
  }, [canNextPage, nextPage]);

  const onLastClick = useCallback(() => {
    gotoPage(max - 1);
  }, [gotoPage, max]);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value);

      if (value > 0 && value <= max) {
        gotoPage(value - 1);
      }
    },
    [gotoPage, max],
  );

  return (
    <FooterContainer theme={theme}>
      <TableFooterButton name="arrow_left_sec" onClick={onFirstClick} />
      <TableFooterButton name="arrow_left" onClick={onPrevClick} />

      <TableFooterPage max={max} value={value} onChange={onChange} />

      <TableFooterButton name="arrow_right" onClick={onNextClick} />
      <TableFooterButton name="arrow_right_sec" onClick={onLastClick} />
    </FooterContainer>
  );
};

export default TableFooter;
