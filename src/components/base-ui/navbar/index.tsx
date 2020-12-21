import React from 'react';
import styled from 'styled-components';

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

const BaseNavbar: React.FC = () => {
  return (
    <NavbarContainer className="navbar">
      <Container>
        <NavbarRow className="navbar__row">
          <NavbarBrand />
          <NavbarContacts />
        </NavbarRow>
      </Container>
    </NavbarContainer>
  );
};

export default BaseNavbar;
