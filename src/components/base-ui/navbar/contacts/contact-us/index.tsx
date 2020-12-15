import React from 'react';
import styled from 'styled-components';

import ContactsContactUsItem from './Item';

const ContactsContactUs = styled.ul`
  padding: 0;
  margin: 0 0 0.5rem 0;
  text-align: end;
  list-style: none;
`;

const NavbarContactsContactUs: React.FC = () => {
  return (
    <ContactsContactUs>
      <ContactsContactUsItem icon="mail">
        admartm@mail.primorye.ru - электронная почта
      </ContactsContactUsItem>

      <ContactsContactUsItem icon="phone">
        8 (42337) 4-94-90 - справочная служба
      </ContactsContactUsItem>
    </ContactsContactUs>
  );
};

export default NavbarContactsContactUs;
