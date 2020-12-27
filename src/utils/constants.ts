import { Icons, ReglamentThemes, SelectItem } from '@reglament';

export const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? '/'
    : 'http://localhost:8080/api/1.0.0';

export const API_ENDPOINTS = {
  auth: '/auth',
  site_info: '/siteinfo',
  documents: '/documents',
};

export const API_PARAMS = {};

export const COLORS = {
  black: 'rgba(0, 0, 0, 1)',
  white: 'rgba(255, 255, 255, 1)',
  gray: 'rgba(91, 91, 91, 1)',
  disabledTxt: 'rgba(189, 195, 199,1.0)',
  disabledBtn: 'rgba(149, 165, 166,1.0)',
  cloud: 'rgba(229, 229, 229, 1)',
  blue: 'rgba(0, 102, 179, 1)',
  brown: 'rgba(56, 40, 25, 1)',
  green: 'rgba(181, 224, 101, 1)',
};

export const THEMES: ReglamentThemes = {
  light: {
    fontColor: COLORS.black,
    fontColorAlt: COLORS.gray,
    fontColorNeg: COLORS.white,
    linkColor: COLORS.blue,
    buttonColor: COLORS.blue,
    primaryColor: COLORS.blue,
    secondaryColor: COLORS.cloud,
    backgroundColor: COLORS.white,
    fontColorDis: COLORS.disabledTxt,
    buttonColorDis: COLORS.disabledBtn,
  },

  dark: {
    fontColor: COLORS.white,
    fontColorAlt: COLORS.black,
    fontColorNeg: COLORS.black,
    linkColor: COLORS.white,
    buttonColor: COLORS.cloud,
    primaryColor: COLORS.white,
    secondaryColor: COLORS.white,
    backgroundColor: COLORS.black,
    fontColorDis: COLORS.disabledTxt,
    buttonColorDis: COLORS.disabledBtn,
  },

  sepia: {
    fontColor: COLORS.green,
    fontColorAlt: COLORS.brown,
    fontColorNeg: COLORS.brown,
    linkColor: COLORS.white,
    buttonColor: COLORS.green,
    primaryColor: COLORS.green,
    secondaryColor: COLORS.white,
    backgroundColor: COLORS.brown,
    fontColorDis: COLORS.disabledTxt,
    buttonColorDis: COLORS.disabledBtn,
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
  arrow_left: require('../assets/icons/arrow_left.svg').default,
  arrow_left_sec: require('../assets/icons/arrow_left_sec.svg').default,
  arrow_right: require('../assets/icons/arrow_right.svg').default,
  arrow_right_sec: require('../assets/icons/arrow_right_sec.svg').default,
};

export const AGENCY_TYPES: SelectItem[] = ['АГО', 'Дума', 'Глава ГО'];

export const DOCUMENT_TYPES: SelectItem[] = [
  'Постановление',
  'Распоряжение',
  'Решение',
  'Решение (НПА)',
  'Извещение',
];
