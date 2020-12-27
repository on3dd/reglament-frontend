import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../../../assets/images/logo.png';

const BrandContainer = styled.div`
  flex: 1;
`;

const BrandRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const BrandText = styled.span`
  display: block;
  max-width: 130px;
  font-size: 0.85rem;
  text-transform: lowercase;
`;

const BrandWrapper = styled.div`
  display: block;
  margin-right: 0.85rem;
`;

const BrandImage = styled.img``;

const BrandTitle = styled(Link)`
  margin: 0;
  color: inherit;
  font-size: 2.5rem;
  font-weight: 600;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const NavbarBrand: React.FC = () => {
  return (
    <BrandContainer className="navbar__brand">
      <BrandRow>
        <BrandText>Официальный сайт правовой информации</BrandText>
      </BrandRow>

      <BrandRow>
        <BrandWrapper>
          <BrandImage src={logo} />
        </BrandWrapper>

        <BrandTitle to="/">Артёмовский городской округ</BrandTitle>
      </BrandRow>
    </BrandContainer>
  );
};

export default NavbarBrand;
