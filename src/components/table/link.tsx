import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

type TableLinkProps = PropsWithChildren<{
  href: any;
}>;

const Link = styled.a`
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const TableLink: React.FC<TableLinkProps> = ({ href, children }) => {
  return (
    <Link target="_blank" href={href}>
      {children}
    </Link>
  );
};

export default TableLink;
