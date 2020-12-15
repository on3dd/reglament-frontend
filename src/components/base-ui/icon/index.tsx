import React, { useMemo } from 'react';
import styled from 'styled-components';

const Icon = styled.img`
  height: 1rem;
`;

type BaseIconProps = {
  name: string;
};

const BaseIcon: React.FC<BaseIconProps> = ({ name }) => {
  const src = useMemo(() => {
    return require(`../../../assets/icons/${name}.svg`).default;
  }, [name]);

  const alt = useMemo(() => {
    return `${name} icon`;
  }, [name]);

  return <Icon src={src} alt={alt} />;
};

export default BaseIcon;
