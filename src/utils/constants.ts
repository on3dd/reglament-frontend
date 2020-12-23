import { Icons, ReglamentThemes } from '@reglament';

export const COLORS = {
  black: 'rgba(0, 0, 0, 0.84)',
  white: 'rgba(255, 255, 255, 1)',
  gray: 'rgba(91, 91, 91, 1)',
  cloud: 'rgba(229, 229, 229, 1)',
  blue: 'rgba(0, 102, 179, 1)',
  brown: 'rgba(56, 40, 25, 1)',
  green: 'rgba(181, 224, 101, 1)',
};

export const THEMES: ReglamentThemes = {
  light: {
    fontColor: COLORS.black,
    fontColorAlt: COLORS.gray,
    primaryColor: COLORS.blue,
    secondaryColor: COLORS.cloud,
    backgroundColor: COLORS.white,
  },
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
