declare module '@reglament' {
  import { ReactText } from 'react';
  import { TableInstance } from 'react-table';

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
    arrow_left: string;
    arrow_left_sec: string;
    arrow_right: string;
    arrow_right_sec: string;
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
    number: string;
    placed_at: string;
    is_project: boolean;
    file?: File;
  }

  export interface DocumentModel {
    id: number;
    name: string;
    number: string;
    type: SelectItem;
    agency: SelectItem;
    placed_at: string;
    created_at: string;
    file_path: string;
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

  export interface Font {
    fontSize: number;
    lineHeight: number;
  }

  export interface FontDraft {
    fontSize?: number;
    lineHeight?: number;
  }

  export type PropsWithTable<T> = T & {
    instance: TableInstance<DocumentModel>;
  };

  export type PropsWithTheme<T> = T & {
    theme: Theme;
  };

  export type PropsWithFont<T> = T & {
    font: Font;
  };

  export type SelectItem = ReactText;

  export interface UserModel {
    login: string;
    password: string;
  }

  export type User = UserModel | null;

  export interface SiteInfoModel {
    boss: string;
    date: string;
    email: string;
    number: string;
    number_name: string;
    address: string;
    reg_num: string;
    reg_author: string;
  }

  export type SiteInfo = SiteInfoModel | null;

  export interface SearchDraft {
    type?: SelectItem;
    agency?: SelectItem;
    name?: string;
    number?: string;
    placed_at?: string;
    created_at?: string;
    is_project?: boolean;
  }

  export type Search = SearchDraft | null;

  export type TokenModel = string;

  export type Token = TokenModel | null;
}
