import React from 'react';
import styled from 'styled-components';

import Icon from '../icon';

const ContactsContainer = styled.div`
  max-width: 375px;
`;

const ContactsContactUs = styled.ul`
  padding: 0;
  margin: 0 0 0.5rem 0;
  text-align: end;
  list-style: none;
`;

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

const ContactsAddress = styled.div``;

const ContactsAddressText = styled.span`
  font-size: 0.85rem;
`;

const NavbarContacts: React.FC = () => {
  return (
    <ContactsContainer className="navbar__contacts">
      <ContactsContactUs>
        <ContactsContactUsItem>
          <Icon name="mail" />
          <ContactsContactUsItemText>
            admartm@mail.primorye.ru - электронная почта
          </ContactsContactUsItemText>
        </ContactsContactUsItem>

        <ContactsContactUsItem>
          <Icon name="phone" />
          <ContactsContactUsItemText>
            8 (42337) 4-94-90 - справочная служба
          </ContactsContactUsItemText>
        </ContactsContactUsItem>
      </ContactsContactUs>

      <ContactsAddress>
        <ContactsAddressText>
          Адрес редакции: 692760, Приморский край, г.Артём, ул.Кирова, 48
        </ContactsAddressText>
      </ContactsAddress>
    </ContactsContainer>
  );
};

export default NavbarContacts;
