declare module '@reglament' {
  import { ReactText } from 'react';

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

  export interface DocumentDraft {
    type: SelectItem;
    agency: SelectItem;
    name: string;
    date: string;
    number: string;
    is_project: boolean;
    file?: string | Blob | File;
  }

  export interface DocumentModel {
    id: number;
    name: string;
    date: string;
    number: string;
    type: SelectItem;
    agency: SelectItem;
    create_date: string;
    file?: string | Blob | File;
  }

  export type Document = DocumentModel | null;

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
    fontColorDis: string;
    buttonColorDis: string;
  }

  export type PropsWithTheme<T> = T & { theme: Theme };

  export type SelectItem = ReactText;

  export interface UserModel {
    login: string;
    password: string;
  }

  export type User = UserModel | null;

  export interface SiteInfoModel {
    email: string;
    number: string;
    number_name: string;
    address: string;
    reg_num: string;
    date: string;
    reg_author: string;
    boss: string;
  }

  export type SiteInfo = SiteInfoModel | null;
}
