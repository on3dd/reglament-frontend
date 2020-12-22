import React from 'react';
import styled, { css } from 'styled-components';

type TableFooterLinkProps = {
  active?: boolean;
};

const link = css`
  border: none;
  background: none;
  margin-right: 1ch;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterContainer = styled.div`
  margin-bottom: 0.85rem;
`;

const TableFooterLink = styled.button`
  ${link}

  font-weight: ${(props: TableFooterLinkProps) =>
    props.active ? 600 : 400};
`;

const TableFooterArrow = styled.button`
  ${link}

  color: #0066b3;
`;

const TableFooter: React.FC = () => {
  return (
    <FooterContainer>
      <TableFooterLink active={true}>1</TableFooterLink>
      <TableFooterLink>2</TableFooterLink>
      <TableFooterLink>3</TableFooterLink>

      <TableFooterArrow>{'>>'}</TableFooterArrow>

      <TableFooterLink>228</TableFooterLink>
    </FooterContainer>
  );
};

export default TableFooter;
