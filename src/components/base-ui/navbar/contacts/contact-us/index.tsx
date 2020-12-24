import React, { useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { useSiteInfoStore } from '../../../../../store/site-info';

import ContactsContactUsItem from './Item';

const ContactsContactUs = styled.ul`
  padding: 0;
  margin: 0 0 0.5rem 0;
  text-align: end;
  list-style: none;
`;

const NavbarContactsContactUs: React.FC = observer(() => {
  const { store } = useSiteInfoStore();

  const email = useMemo(() => {
    return `${store.info.email} - электронная почта`;
  }, [store.info.email]);

  const phone = useMemo(() => {
    return `${store.info.number} - ${store.info.number_name}`;
  }, [store.info.number, store.info.number_name]);

  return (
    <ContactsContactUs>
      <ContactsContactUsItem icon="mail">{email}</ContactsContactUsItem>
      <ContactsContactUsItem icon="phone">{phone}</ContactsContactUsItem>
    </ContactsContactUs>
  );
});

export default NavbarContactsContactUs;
