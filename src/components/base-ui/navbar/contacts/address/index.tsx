import React, { useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { useSiteInfoStore } from '../../../../../store/site-info';

const ContactsAddress = styled.div``;

const ContactsAddressText = styled.span`
  font-size: 0.85rem;
`;

const NavbarContactsAddress: React.FC = observer(() => {
  const { store } = useSiteInfoStore();

  const address = useMemo(() => {
    return `Адрес редакции: ${store.info.address}`;
  }, [store.info]);

  return (
    <ContactsAddress>
      <ContactsAddressText>{address}</ContactsAddressText>
    </ContactsAddress>
  );
});

export default NavbarContactsAddress;
