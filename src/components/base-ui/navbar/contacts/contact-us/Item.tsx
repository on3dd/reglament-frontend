import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { Icon } from '@reglament';

import IconComponent from '../../../icon';

type NavbarContactsContactUsProps = PropsWithChildren<{
  icon: Icon;
}>;

const ContactsContactUsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
`;

const ContactsContactUsItemText = styled.span`
  display: inline-block;
  margin-left: 1ch;
  font-weight: 600;
`;

const NavbarContactsContactUs: React.FC<NavbarContactsContactUsProps> = ({
  icon,
  children,
}) => {
  return (
    <ContactsContactUsItem>
      <IconComponent name={icon} />
      <ContactsContactUsItemText>{children}</ContactsContactUsItemText>
    </ContactsContactUsItem>
  );
};

export default NavbarContactsContactUs;
