declare module '@reglament' {
  export interface Icons {
    eye: string;
    mail: string;
    close: string;
    phone: string;
    font_inc: string;
    font_dec: string;
    font_black: string;
    font_white: string;
    font_sepia: string;
    interval_inc: string;
    interval_dec: string;
  }

  export type Icon = keyof Icons;

  export type InputType =
    | 'text'
    | 'password'
    | 'number'
    | 'checkbox'
    | 'date';

  export interface Document {
    id: number;
    type: string;
    name: string;
    date: string;
    agency: string;
    number: string;
    create_date: string;
  }

  export interface ReglamentThemes {
    dark: Theme;
    light: Theme;
    sepia: Theme;
  }

  export type ReglamentTheme = keyof ReglamentThemes;

  export interface Theme {
    fontColor: string;
    fontColorAlt: string;
    fontColorNeg: string;
    linkColor: string;
    buttonColor: string;
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
  }

  export type PropsWithTheme<T> = T & { theme: Theme };

  export interface SelectItem {
    text: string;
    value: any;
  }
}
