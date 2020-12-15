import React from 'react';
import styled from 'styled-components';

import NavbarBrand from './NavbarBrand';

const NavbarContainer = styled.div`
  display: flex;
`;

const BaseNavbar: React.FC = () => {
  return (
    <NavbarContainer className="navbar">
      <NavbarBrand />
    </NavbarContainer>
  );
};

export default BaseNavbar;
