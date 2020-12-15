import React from 'react';
import styled from 'styled-components';

import NavbarBrand from './NavbarBrand';
import NavbarContacts from './NavbarContacts';

const NavbarContainer = styled.nav`
  display: flex;
`;

const NavbarRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BaseNavbar: React.FC = () => {
  return (
    <NavbarContainer className="navbar">
      <NavbarRow className="navbar__row">
        <NavbarBrand />
        <NavbarContacts />
      </NavbarRow>
    </NavbarContainer>
  );
};

export default BaseNavbar;
