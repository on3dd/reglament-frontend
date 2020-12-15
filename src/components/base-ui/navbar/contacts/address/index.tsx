import React from 'react';
import styled from 'styled-components';

const ContactsAddress = styled.div``;

const ContactsAddressText = styled.span`
  font-size: 0.85rem;
`;

const NavbarContactsAddress: React.FC = () => {
  return (
    <ContactsAddress>
      <ContactsAddressText>
        Адрес редакции: 692760, Приморский край, г.Артём, ул.Кирова, 48
      </ContactsAddressText>
    </ContactsAddress>
  );
};

export default NavbarContactsAddress;
