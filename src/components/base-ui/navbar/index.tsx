import React, { useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { useSiteInfoStore } from '../../../store/site-info';

import Container from '../../base-ui/container';
import NavbarBrand from './brand';
import NavbarContacts from './contacts';

const NavbarContainer = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 2rem;
`;

const NavbarRow = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BaseNavbar: React.FC = observer(() => {
  const { store } = useSiteInfoStore();

  const visible = useMemo(() => {
    return !store.fetching && store.info.address;
  }, [store.fetching, store.info.address]);

  return (
    <NavbarContainer className="navbar">
      <Container>
        <NavbarRow className="navbar__row">
          <NavbarBrand />

          {visible && <NavbarContacts />}
        </NavbarRow>
      </Container>
    </NavbarContainer>
  );
});

export default BaseNavbar;
