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
}
