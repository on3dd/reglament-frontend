import { Icons } from '@reglament';

export const COLORS = {
  black: 'rgba(0, 0, 0, 0.9)',
  white: 'rgba(255, 255, 255, 1)',
  gray: 'rgba(0, 0, 0, 0.68)',
  grayDarken: 'rgba(0, 0, 0, 0.84)',
  grayLighten: 'rgba(0, 0, 0, 0.54)',
  primary: 'rgba(41, 128, 185, 1.0)',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  borderColor: 'rgba(0, 0, 0, 0.1)',
  shadowColor: 'rgba(0, 0, 0, 0.25)',
};

// For using with min-width media query
export const BREAKPOINTS = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1366px',
  desktop: '1680px',
};

export const ICONS: Icons = {
  eye: require('../assets/icons/eye.svg').default,
  mail: require('../assets/icons/mail.svg').default,
  close: require('../assets/icons/close.svg').default,
  phone: require('../assets/icons/phone.svg').default,
  font_inc: require('../assets/icons/font_inc.svg').default,
  font_dec: require('../assets/icons/font_dec.svg').default,
  font_black: require('../assets/icons/font_black.svg').default,
  font_white: require('../assets/icons/font_white.svg').default,
  font_sepia: require('../assets/icons/font_sepia.svg').default,
  interval_inc: require('../assets/icons/interval_inc.svg').default,
  interval_dec: require('../assets/icons/interval_dec.svg').default,
};
