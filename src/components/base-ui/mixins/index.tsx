import { css } from 'styled-components';

export const lowercase = css`
  text-transform: lowercase;
`;

export const pointer = css`
  cursor: pointer;
`;

export const visible = css`
  visibility: ${({ visible }: { visible: boolean }) => {
    return visible ? 'visible' : 'hidden';
  }};
`;
