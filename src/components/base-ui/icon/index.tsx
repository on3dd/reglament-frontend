import React, { HTMLProps, useMemo } from 'react';
import styled from 'styled-components';

import { Icon } from '@reglament';

import { ICONS } from '../../../utils/constants';

const IconComponent = styled.img`
  height: 1rem;
`;

type BaseIconProps = HTMLProps<HTMLImageElement> & {
  name: Icon;
};

const BaseIcon: React.FC<BaseIconProps> = ({ name, className }) => {
  const src = useMemo(() => {
    return ICONS[name];
  }, [name]);

  const alt = useMemo(() => {
    return `${name} icon`;
  }, [name]);

  return <IconComponent src={src} alt={alt} className={className} />;
};

export default BaseIcon;
