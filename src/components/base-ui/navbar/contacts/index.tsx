import React from 'react';
import styled from 'styled-components';

import ContactsContactUs from './contact-us';
import ContactsAddress from './address';

const ContactsContainer = styled.div`
  max-width: 375px;
`;

const NavbarContacts: React.FC = () => {
  return (
    <ContactsContainer className="navbar__contacts">
      <ContactsContactUs />
      <ContactsAddress />
    </ContactsContainer>
  );
};

export default NavbarContacts;
