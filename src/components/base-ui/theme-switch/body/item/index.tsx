import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

type ThemeSwitchBodyItemProps = PropsWithChildren<{
  heading: string;
}>;

const ItemContainer = styled.div`
  margin-right: 7rem;
`;

const ItemHeading = styled.h4`
  margin: 0 0 0.2rem 0;
  font-size: 1.2rem;
`;

const ItemChildren = styled.div`
  button {
    margin-right: 1ch;
  }
`;

const ThemeSwitchBodyItem: React.FC<ThemeSwitchBodyItemProps> = ({
  heading,
  children,
}: ThemeSwitchBodyItemProps) => {
  return (
    <ItemContainer>
      <ItemHeading>{heading}</ItemHeading>
      <ItemChildren>{children}</ItemChildren>
    </ItemContainer>
  );
};

export default ThemeSwitchBodyItem;
